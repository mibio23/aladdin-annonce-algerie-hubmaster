-- Corriger les fonctions restantes avec search_path mutable
CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.clean_search_query_trigger()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Nettoyer le texte de la requête avant insertion
  NEW.query_text := public.sanitize_search_query(NEW.query_text);
  NEW.query_normalized := public.sanitize_search_query(NEW.query_normalized);
  
  RETURN NEW;
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

CREATE OR REPLACE FUNCTION public.get_current_session()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$function$;

CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$function$;

CREATE OR REPLACE FUNCTION public.calculate_trending_score(keyword_id uuid)
 RETURNS numeric
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
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
$function$;