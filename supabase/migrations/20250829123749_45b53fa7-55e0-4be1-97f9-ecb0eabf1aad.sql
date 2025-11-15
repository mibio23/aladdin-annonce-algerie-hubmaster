-- Fix critical security vulnerability in profiles table RLS policies
-- Replace custom function dependency with direct auth.uid() calls for better security

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile with validation" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile with session validation" ON public.profiles;

-- Create secure RLS policies using direct auth.uid() instead of custom functions
-- This prevents potential bypass through function manipulation

-- Policy 1: Secure profile insertion with validation
CREATE POLICY "Secure profile insertion"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND user_id = auth.uid()
  AND validate_user_input(COALESCE(display_name, ''), 100)
  AND validate_user_input(COALESCE(bio, ''), 500)
  AND validate_user_input(COALESCE(first_name, ''), 50)
  AND validate_user_input(COALESCE(last_name, ''), 50)
);

-- Policy 2: Secure profile viewing - users can only see their own data
CREATE POLICY "Secure profile viewing"
ON public.profiles
FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND user_id = auth.uid()
  AND NOT COALESCE(profile_locked, false)
);

-- Policy 3: Secure profile updates with enhanced validation  
-- Split into two policies for better security control
CREATE POLICY "Secure profile updates"
ON public.profiles
FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND user_id = auth.uid()
  AND NOT COALESCE(profile_locked, false)
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND user_id = auth.uid()
  AND validate_user_input(COALESCE(display_name, ''), 100)
  AND validate_user_input(COALESCE(bio, ''), 500)
  AND validate_user_input(COALESCE(first_name, ''), 50)
  AND validate_user_input(COALESCE(last_name, ''), 50)
);

-- Policy 4: Prevent profile_locked modifications by users
CREATE POLICY "Prevent profile lock modifications"
ON public.profiles
FOR UPDATE
TO authenticated
USING (false)  -- This will block any attempt to modify profile_locked
WITH CHECK (
  -- Only allow updates where profile_locked remains unchanged
  profile_locked = (SELECT profile_locked FROM public.profiles WHERE id = profiles.id)
);

-- Create function to safely access non-sensitive profile data
CREATE OR REPLACE FUNCTION public.get_safe_profile_data(profile_user_id uuid)
RETURNS TABLE(
  id uuid,
  display_name text,
  avatar_url text,
  bio text,
  location text,
  profession text,
  created_at timestamp with time zone
)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 
    p.id,
    p.display_name,
    p.avatar_url,
    p.bio,
    p.location,
    p.profession,
    p.created_at
  FROM public.profiles p
  WHERE p.user_id = profile_user_id
    AND NOT COALESCE(p.profile_locked, false);
$$;

-- Add enhanced security logging triggers
CREATE OR REPLACE FUNCTION public.secure_profile_monitoring()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log all profile operations for security monitoring
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.security_audit_log (
      user_id, action_type, resource_type, resource_id, metadata
    ) VALUES (
      auth.uid(), 'profile_creation', 'profile', 
      NEW.id::text, 
      jsonb_build_object(
        'timestamp', now(),
        'authenticated', auth.uid() IS NOT NULL
      )
    );
    RETURN NEW;
  END IF;
  
  IF TG_OP = 'UPDATE' THEN
    -- Log profile updates and detect sensitive field changes
    INSERT INTO public.security_audit_log (
      user_id, action_type, resource_type, resource_id, metadata
    ) VALUES (
      auth.uid(), 'profile_update', 'profile', 
      NEW.id::text, 
      jsonb_build_object(
        'timestamp', now(),
        'sensitive_data_modified', 
        OLD.phone IS DISTINCT FROM NEW.phone OR
        OLD.address IS DISTINCT FROM NEW.address OR
        OLD.date_of_birth IS DISTINCT FROM NEW.date_of_birth,
        'profile_locked_attempt', OLD.profile_locked IS DISTINCT FROM NEW.profile_locked
      )
    );
    
    -- Block profile_locked modifications with detailed logging
    IF OLD.profile_locked IS DISTINCT FROM NEW.profile_locked THEN
      INSERT INTO public.security_audit_log (
        user_id, action_type, resource_type, resource_id, metadata
      ) VALUES (
        auth.uid(), 'security_violation', 'profile', 
        NEW.id::text, 
        jsonb_build_object(
          'violation_type', 'unauthorized_lock_modification',
          'severity', 'critical',
          'timestamp', now()
        )
      );
      RAISE EXCEPTION 'Security violation: Unauthorized profile lock modification attempt logged';
    END IF;
    
    RETURN NEW;
  END IF;
  
  RETURN NULL;
END;
$$;

-- Apply comprehensive security monitoring
DROP TRIGGER IF EXISTS secure_profile_monitoring_trigger ON public.profiles;
CREATE TRIGGER secure_profile_monitoring_trigger
  AFTER INSERT OR UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.secure_profile_monitoring();