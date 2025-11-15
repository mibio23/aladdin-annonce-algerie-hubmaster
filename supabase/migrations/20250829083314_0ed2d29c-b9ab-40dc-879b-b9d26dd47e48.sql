-- Find and fix the remaining function with mutable search_path
-- Check if any other functions need search_path fixes

-- Fix any remaining functions that may need search_path
CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$$;

CREATE OR REPLACE FUNCTION public.get_current_session()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_password_strength(password_text text)
 RETURNS boolean
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Vérifier la longueur minimale
  IF LENGTH(password_text) < 8 THEN
    RETURN false;
  END IF;
  
  -- Vérifier la présence de différents types de caractères
  IF NOT (password_text ~ '[a-z]' AND 
          password_text ~ '[A-Z]' AND 
          password_text ~ '[0-9]' AND 
          password_text ~ '[^a-zA-Z0-9]') THEN
    RETURN false;
  END IF;
  
  -- Éviter les mots de passe trop communs
  IF password_text ~ '(?i)(password|123456|qwerty|admin|user)' THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$;

CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$$;

-- Create enhanced privacy consent tracking
CREATE TABLE public.user_privacy_consents (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  session_id text NOT NULL,
  consent_type text NOT NULL, -- 'behavioral_tracking', 'data_collection', 'marketing'
  consent_given boolean NOT NULL DEFAULT false,
  consent_version text NOT NULL DEFAULT '1.0',
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on privacy consents
ALTER TABLE public.user_privacy_consents ENABLE ROW LEVEL SECURITY;

-- Privacy consent policies
CREATE POLICY "Users can manage their own privacy consents" 
ON public.user_privacy_consents 
FOR ALL 
USING (
  CASE 
    WHEN user_id IS NOT NULL THEN auth.uid() = user_id
    ELSE session_id = current_setting('app.current_session_id', true)
  END
)
WITH CHECK (
  CASE 
    WHEN user_id IS NOT NULL THEN auth.uid() = user_id
    ELSE session_id = current_setting('app.current_session_id', true)
  END
);

-- Data retention cleanup function
CREATE OR REPLACE FUNCTION public.cleanup_old_tracking_data()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $$
BEGIN
  -- Delete old search queries (older than 90 days)
  DELETE FROM public.search_queries 
  WHERE created_at < now() - INTERVAL '90 days';
  
  -- Delete old behavioral learning data (older than 180 days)
  DELETE FROM public.behavioral_learning 
  WHERE created_at < now() - INTERVAL '180 days';
  
  -- Delete old search patterns (older than 1 year)
  DELETE FROM public.user_search_patterns 
  WHERE created_at < now() - INTERVAL '1 year';
  
  -- Delete old conversation memory (older than 30 days)
  DELETE FROM public.conversation_memory 
  WHERE created_at < now() - INTERVAL '30 days';
  
  -- Delete old anticipation suggestions (older than 60 days)
  DELETE FROM public.anticipation_suggestions 
  WHERE created_at < now() - INTERVAL '60 days';
  
  -- Delete old security audit logs (older than 1 year)
  DELETE FROM public.security_audit_log 
  WHERE created_at < now() - INTERVAL '1 year';
END;
$$;