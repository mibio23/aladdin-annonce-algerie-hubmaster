
-- Phase 1: Secure Profiles Table Access (Critical)
-- Update RLS policy to restrict profile reads to the user who owns the profile only
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Phase 2: Protect AI/ML Intelligence Data (High Priority)
-- Restrict search_patterns_advanced from public read to system-only
DROP POLICY IF EXISTS "Lecture publique des patterns de recherche" ON public.search_patterns_advanced;
CREATE POLICY "System only access to search patterns" 
  ON public.search_patterns_advanced 
  FOR SELECT 
  USING (false);

-- Restrict semantic_mappings from public read to authenticated users only
DROP POLICY IF EXISTS "Lecture publique des mappings sémantiques" ON public.semantic_mappings;
CREATE POLICY "Authenticated users can read semantic mappings" 
  ON public.semantic_mappings 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- Restrict auto_corrections read access to authenticated users only
DROP POLICY IF EXISTS "Lecture publique des corrections automatiques" ON public.auto_corrections;
CREATE POLICY "Authenticated users can read auto corrections" 
  ON public.auto_corrections 
  FOR SELECT 
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- Restrict contextual_intelligence access (already system-only, but add validation)
DROP POLICY IF EXISTS "Intelligence contextuelle - système seulement" ON public.contextual_intelligence;
CREATE POLICY "System only access to contextual intelligence" 
  ON public.contextual_intelligence 
  FOR ALL 
  USING (false)
  WITH CHECK (false);

-- Secure behavioral_learning data - add proper validation
DROP POLICY IF EXISTS "Apprentissage comportemental - insertion libre" ON public.behavioral_learning;
CREATE POLICY "Session-based behavioral learning insert" 
  ON public.behavioral_learning 
  FOR INSERT 
  WITH CHECK (
    session_id IS NOT NULL 
    AND length(session_id) >= 10 
    AND behavior_type IN ('search', 'click', 'conversion', 'navigation', 'interaction')
  );

-- Phase 3: Database Function Security Hardening
-- Update existing functions to use proper security settings
CREATE OR REPLACE FUNCTION public.sanitize_search_query(query_text text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Supprimer les patterns potentiellement dangereux
  query_text := regexp_replace(query_text, '<[^>]*>', '', 'gi');
  query_text := regexp_replace(query_text, 'javascript:', '', 'gi');
  query_text := regexp_replace(query_text, 'data:', '', 'gi');
  query_text := regexp_replace(query_text, 'vbscript:', '', 'gi');
  
  -- Limiter la longueur
  IF LENGTH(query_text) > 200 THEN
    query_text := LEFT(query_text, 200) || '...';
  END IF;
  
  RETURN query_text;
END;
$function$;

CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text text)
 RETURNS text
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$function$;

CREATE OR REPLACE FUNCTION public.validate_password_strength(password_text text)
 RETURNS boolean
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
$function$;

CREATE OR REPLACE FUNCTION public.rate_limit_search_queries(user_session text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  recent_count integer;
BEGIN
  -- Compter les requêtes récentes pour cette session
  SELECT COUNT(*) INTO recent_count
  FROM public.search_queries
  WHERE user_session_id = user_session
    AND created_at > now() - INTERVAL '1 minute';
  
  -- Limiter à 30 requêtes par minute par session
  RETURN recent_count < 30;
END;
$function$;

-- Add additional security for search queries
CREATE OR REPLACE FUNCTION public.validate_search_session(session_id text)
 RETURNS boolean
 LANGUAGE plpgsql
 IMMUTABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Valider que le session_id est valide (format UUID ou alphanumérique)
  IF session_id IS NULL OR length(session_id) < 10 OR length(session_id) > 100 THEN
    RETURN false;
  END IF;
  
  -- Vérifier qu'il ne contient pas de caractères dangereux
  IF session_id ~ '[<>"\'';&]' THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$function$;

-- Update search_queries policies to use the new validation
DROP POLICY IF EXISTS "Anonymous search queries insert" ON public.search_queries;
DROP POLICY IF EXISTS "Authenticated search queries insert" ON public.search_queries;

CREATE POLICY "Validated search queries insert" 
  ON public.search_queries 
  FOR INSERT 
  WITH CHECK (
    ip_hash IS NOT NULL 
    AND user_session_id IS NOT NULL 
    AND public.validate_search_session(user_session_id)
    AND length(query_text) <= 500 
    AND length(query_normalized) <= 500 
    AND query_text !~ '<script|javascript:|data:|vbscript:|<iframe|<object'::text
    AND public.sanitize_search_query(query_text) = query_text
  );
