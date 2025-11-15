-- Fix remaining function search path security issues

-- Fix all functions that don't have proper search_path set
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

CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE 
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$$;

CREATE OR REPLACE FUNCTION public.rate_limit_search_queries(user_session text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.validate_search_session(session_id text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE 
SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.validate_user_input(input_text text, max_length integer DEFAULT 1000)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE 
SECURITY DEFINER
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

CREATE OR REPLACE FUNCTION public.validate_password_strength(password_text text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE 
SECURITY DEFINER
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

-- Fix trigger functions
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.clean_search_query_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Nettoyer le texte de la requête avant insertion
  NEW.query_text := public.sanitize_search_query(NEW.query_text);
  NEW.query_normalized := public.sanitize_search_query(NEW.query_normalized);
  
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_announcement_search_vector()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.search_vector := to_tsvector('french', 
    COALESCE(NEW.title, '') || ' ' || 
    COALESCE(NEW.description, '') || ' ' || 
    COALESCE(NEW.location, '') || ' ' ||
    COALESCE(array_to_string(NEW.keywords, ' '), '')
  );
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.generate_shop_slug(shop_name text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  base_slug TEXT;
  final_slug TEXT;
  counter INTEGER := 0;
BEGIN
  -- Créer le slug de base
  base_slug := lower(trim(regexp_replace(shop_name, '[^a-zA-Z0-9\s]', '', 'g')));
  base_slug := regexp_replace(base_slug, '\s+', '-', 'g');
  final_slug := base_slug;
  
  -- Vérifier l'unicité et ajouter un compteur si nécessaire
  WHILE EXISTS (SELECT 1 FROM public.shops WHERE slug = final_slug) LOOP
    counter := counter + 1;
    final_slug := base_slug || '-' || counter;
  END LOOP;
  
  RETURN final_slug;
END;
$$;

CREATE OR REPLACE FUNCTION public.auto_generate_shop_slug()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := generate_shop_slug(NEW.name);
  END IF;
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.calculate_trending_score(keyword_id uuid)
RETURNS numeric
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  recent_searches INTEGER;
  total_searches INTEGER;
  days_since_last NUMERIC;
  trending_score NUMERIC;
BEGIN
  -- Compter les recherches récentes (7 derniers jours)
  SELECT COUNT(*) INTO recent_searches
  FROM public.search_queries sq
  JOIN public.popular_keywords pk ON lower(sq.query_normalized) LIKE '%' || lower(pk.keyword_normalized) || '%'
  WHERE pk.id = keyword_id
  AND sq.created_at >= now() - INTERVAL '7 days';
  
  -- Compter le total des recherches
  SELECT search_count INTO total_searches
  FROM public.popular_keywords
  WHERE id = keyword_id;
  
  -- Calculer les jours depuis la dernière recherche
  SELECT EXTRACT(DAY FROM now() - last_searched) INTO days_since_last
  FROM public.popular_keywords
  WHERE id = keyword_id;
  
  -- Calculer le score de tendance
  trending_score := (recent_searches::NUMERIC / GREATEST(total_searches, 1)) * 
                   (1 / GREATEST(days_since_last, 1)) * 100;
  
  RETURN LEAST(trending_score, 100);
END;
$$;