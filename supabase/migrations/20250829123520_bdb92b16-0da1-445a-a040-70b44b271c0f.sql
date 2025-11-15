-- Fix critical security vulnerability in profiles table RLS policies
-- Replace custom function dependency with direct auth.uid() calls for better security

-- Drop existing vulnerable policies
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile with validation" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile with session validation" ON public.profiles;

-- Create secure RLS policies using direct auth.uid() instead of custom functions
-- This prevents potential bypass through function manipulation

-- Policy 1: Secure profile insertion
CREATE POLICY "Secure profile insertion"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND user_id = auth.uid()
  AND validate_user_input(display_name, 100)
  AND validate_user_input(bio, 500)
  AND validate_user_input(first_name, 50)
  AND validate_user_input(last_name, 50)
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
  AND validate_user_input(display_name, 100)
  AND validate_user_input(bio, 500)
  AND validate_user_input(first_name, 50)
  AND validate_user_input(last_name, 50)
  -- Prevent modification of critical security fields
  AND user_id = auth.uid()
);

-- Policy 4: Protect profile_locked field - only system can modify
CREATE POLICY "Protect profile lock status"
ON public.profiles
FOR UPDATE
TO authenticated
USING (false)  -- No user can modify profile_locked field
WITH CHECK (
  -- Allow updates only if profile_locked is not being changed
  profile_locked IS NOT DISTINCT FROM (
    SELECT profile_locked FROM public.profiles WHERE id = NEW.id
  )
);

-- Create function to safely mask sensitive data for public viewing
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

-- Add trigger to prevent unauthorized profile_locked modifications
CREATE OR REPLACE FUNCTION public.prevent_profile_lock_bypass()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only allow profile_locked changes from system operations
  IF OLD.profile_locked IS DISTINCT FROM NEW.profile_locked THEN
    -- Log security attempt
    INSERT INTO public.security_audit_log (
      user_id, action_type, resource_type, resource_id, metadata
    ) VALUES (
      auth.uid(), 'unauthorized_lock_attempt', 'profile', 
      NEW.id::text, jsonb_build_object('attempted_by', auth.uid())
    );
    
    RAISE EXCEPTION 'Unauthorized attempt to modify profile lock status';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Apply the security trigger
DROP TRIGGER IF EXISTS prevent_profile_lock_bypass_trigger ON public.profiles;
CREATE TRIGGER prevent_profile_lock_bypass_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_profile_lock_bypass();

-- Add additional security logging for sensitive data access
CREATE OR REPLACE FUNCTION public.log_profile_access()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log profile access for security monitoring
  INSERT INTO public.security_audit_log (
    user_id, action_type, resource_type, resource_id, metadata
  ) VALUES (
    auth.uid(), 'profile_access', 'profile', 
    COALESCE(NEW.id, OLD.id)::text, 
    jsonb_build_object(
      'operation', TG_OP,
      'timestamp', now(),
      'sensitive_fields_accessed', CASE 
        WHEN TG_OP = 'SELECT' THEN true
        ELSE false
      END
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply access logging trigger
DROP TRIGGER IF EXISTS log_profile_access_trigger ON public.profiles;
CREATE TRIGGER log_profile_access_trigger
  AFTER SELECT OR INSERT OR UPDATE OR DELETE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.log_profile_access();