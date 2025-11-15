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
  -- Prevent modification of critical security fields
  AND user_id = auth.uid()
  -- Ensure profile_locked cannot be modified by users
  AND profile_locked IS NOT DISTINCT FROM (
    SELECT profile_locked FROM public.profiles WHERE id = NEW.id
  )
);

-- Create function to safely access non-sensitive profile data for public viewing
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
    AND NOT COALESCE(p.profile_locked, false)
    AND p.user_id = auth.uid(); -- Ensure caller owns the profile
$$;

-- Add trigger to prevent unauthorized profile_locked modifications and log attempts
CREATE OR REPLACE FUNCTION public.secure_profile_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log profile modification attempts for security monitoring
  INSERT INTO public.security_audit_log (
    user_id, action_type, resource_type, resource_id, metadata
  ) VALUES (
    auth.uid(), 'profile_modification', 'profile', 
    NEW.id::text, 
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', now(),
      'fields_modified', CASE 
        WHEN OLD.display_name IS DISTINCT FROM NEW.display_name THEN jsonb_build_array('display_name')
        ELSE '[]'::jsonb
      END ||
      CASE 
        WHEN OLD.phone IS DISTINCT FROM NEW.phone THEN jsonb_build_array('phone')
        ELSE '[]'::jsonb
      END ||
      CASE 
        WHEN OLD.address IS DISTINCT FROM NEW.address THEN jsonb_build_array('address')
        ELSE '[]'::jsonb
      END
    )
  );
  
  -- Prevent unauthorized profile_locked modifications
  IF OLD.profile_locked IS DISTINCT FROM NEW.profile_locked THEN
    -- Log security violation attempt
    INSERT INTO public.security_audit_log (
      user_id, action_type, resource_type, resource_id, metadata
    ) VALUES (
      auth.uid(), 'unauthorized_lock_attempt', 'profile', 
      NEW.id::text, jsonb_build_object('attempted_by', auth.uid(), 'severity', 'high')
    );
    
    RAISE EXCEPTION 'Unauthorized attempt to modify profile lock status - Security violation logged';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Apply the security trigger for updates
DROP TRIGGER IF EXISTS secure_profile_update_trigger ON public.profiles;
CREATE TRIGGER secure_profile_update_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.secure_profile_update();

-- Add trigger for insertion logging
CREATE OR REPLACE FUNCTION public.log_profile_creation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log profile creation for security monitoring
  INSERT INTO public.security_audit_log (
    user_id, action_type, resource_type, resource_id, metadata
  ) VALUES (
    auth.uid(), 'profile_creation', 'profile', 
    NEW.id::text, 
    jsonb_build_object(
      'timestamp', now(),
      'user_authenticated', auth.uid() IS NOT NULL
    )
  );
  
  RETURN NEW;
END;
$$;

-- Apply creation logging trigger
DROP TRIGGER IF EXISTS log_profile_creation_trigger ON public.profiles;
CREATE TRIGGER log_profile_creation_trigger
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.log_profile_creation();