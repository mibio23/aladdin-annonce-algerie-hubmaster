-- Phase 1: Critical Data Protection - Enhanced Profile Security

-- Create function to mask sensitive profile data for public access
CREATE OR REPLACE FUNCTION public.get_public_profile_data(profile_user_id uuid)
RETURNS TABLE(
  id uuid,
  user_id uuid,
  display_name text,
  avatar_url text,
  bio text,
  location text,
  profession text,
  created_at timestamp with time zone
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT 
    p.id,
    p.user_id,
    p.display_name,
    p.avatar_url,
    p.bio,
    p.location,
    p.profession,
    p.created_at
  FROM public.profiles p
  WHERE p.user_id = profile_user_id;
$$;

-- Create function to mask phone numbers in public announcements
CREATE OR REPLACE FUNCTION public.mask_phone_number(phone_number text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  IF phone_number IS NULL OR LENGTH(phone_number) < 4 THEN
    RETURN phone_number;
  END IF;
  
  -- Mask middle digits, show first 2 and last 2
  RETURN SUBSTRING(phone_number FROM 1 FOR 2) || 
         REPEAT('*', LENGTH(phone_number) - 4) || 
         RIGHT(phone_number, 2);
END;
$$;

-- Create contact request system for announcements
CREATE TABLE public.contact_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  announcement_id uuid NOT NULL,
  requester_email text NOT NULL,
  requester_name text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on contact requests
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- RLS policies for contact requests
CREATE POLICY "Users can create contact requests" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (requester_email IS NOT NULL AND requester_name IS NOT NULL);

CREATE POLICY "Announcement owners can view contact requests" 
ON public.contact_requests 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.announcements a 
    WHERE a.id = contact_requests.announcement_id 
    AND a.user_id = auth.uid()
  )
);

-- Create business contact protection table
CREATE TABLE public.business_contacts (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shop_id uuid NOT NULL,
  contact_type text NOT NULL, -- 'phone', 'email', 'whatsapp', etc.
  contact_value text NOT NULL,
  is_public boolean NOT NULL DEFAULT false,
  requires_auth boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on business contacts
ALTER TABLE public.business_contacts ENABLE ROW LEVEL SECURITY;

-- RLS policies for business contacts
CREATE POLICY "Shop owners can manage their contacts" 
ON public.business_contacts 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.shops s 
    WHERE s.id = business_contacts.shop_id 
    AND s.user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.shops s 
    WHERE s.id = business_contacts.shop_id 
    AND s.user_id = auth.uid()
  )
);

CREATE POLICY "Public contacts are viewable by everyone" 
ON public.business_contacts 
FOR SELECT 
USING (is_public = true);

CREATE POLICY "Authenticated users can view contacts requiring auth" 
ON public.business_contacts 
FOR SELECT 
USING (auth.uid() IS NOT NULL AND requires_auth = true);

-- Enhanced rate limiting for contact access
CREATE OR REPLACE FUNCTION public.rate_limit_contact_access(user_session text, contact_type text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $$
DECLARE
  recent_count integer;
BEGIN
  -- Count recent contact access attempts for this session
  SELECT COUNT(*) INTO recent_count
  FROM public.search_queries -- Reusing existing table for tracking
  WHERE user_session_id = user_session
    AND query_text LIKE '%contact_access%'
    AND created_at > now() - INTERVAL '1 hour';
  
  -- Limit to 10 contact access requests per hour per session
  RETURN recent_count < 10;
END;
$$;

-- Add audit logging for sensitive data access
CREATE TABLE public.security_audit_log (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  session_id text,
  action_type text NOT NULL,
  resource_type text NOT NULL,
  resource_id text,
  ip_address inet,
  user_agent text,
  metadata jsonb DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on security audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only system can write to audit log
CREATE POLICY "System only audit log access" 
ON public.security_audit_log 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Function to log security events
CREATE OR REPLACE FUNCTION public.log_security_event(
  p_user_id uuid,
  p_session_id text,
  p_action_type text,
  p_resource_type text,
  p_resource_id text DEFAULT NULL,
  p_metadata jsonb DEFAULT '{}'
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.security_audit_log (
    user_id, session_id, action_type, resource_type, 
    resource_id, metadata
  ) VALUES (
    p_user_id, p_session_id, p_action_type, p_resource_type,
    p_resource_id, p_metadata
  );
END;
$$;

-- Update existing functions to include proper search_path
CREATE OR REPLACE FUNCTION public.sanitize_search_query(query_text text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Enhanced XSS protection
  query_text := regexp_replace(query_text, '<[^>]*>', '', 'gi');
  query_text := regexp_replace(query_text, 'javascript:', '', 'gi');
  query_text := regexp_replace(query_text, 'data:', '', 'gi');
  query_text := regexp_replace(query_text, 'vbscript:', '', 'gi');
  query_text := regexp_replace(query_text, 'on\w+\s*=', '', 'gi');
  
  -- Limit length
  IF LENGTH(query_text) > 200 THEN
    query_text := LEFT(query_text, 200) || '...';
  END IF;
  
  RETURN query_text;
END;
$$;

-- Enhanced validation for user input
CREATE OR REPLACE FUNCTION public.validate_user_input(input_text text, max_length integer DEFAULT 1000)
 RETURNS boolean
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Check length
  IF LENGTH(input_text) > max_length THEN
    RETURN false;
  END IF;
  
  -- Check for malicious patterns
  IF input_text ~* '<script|javascript:|data:|vbscript:|<iframe|<object|<embed' THEN
    RETURN false;
  END IF;
  
  -- Check for SQL injection patterns
  IF input_text ~* 'union\s+select|drop\s+table|delete\s+from|insert\s+into' THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$;