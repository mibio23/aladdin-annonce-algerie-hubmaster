-- Corriger le problème Function Search Path Mutable en ajoutant SET search_path aux fonctions
-- qui n'en ont pas pour améliorer la sécurité

-- Mettre à jour toutes les fonctions SECURITY DEFINER pour avoir un search_path sécurisé

-- Fonction handle_new_user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$function$;

-- Fonction mask_booking_contacts
CREATE OR REPLACE FUNCTION public.mask_booking_contacts(booking_row bookings, requesting_user_id uuid DEFAULT auth.uid())
RETURNS bookings
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Si l'utilisateur n'est pas le propriétaire de la réservation ou le propriétaire de l'annonce
  IF requesting_user_id IS NULL OR (
    requesting_user_id != booking_row.user_id AND
    requesting_user_id != (
      SELECT user_id FROM public.announcements 
      WHERE id = booking_row.announcement_id
    )
  ) THEN
    -- Masquer les informations de contact sensibles
    booking_row.contact_phone := '****-****';
    booking_row.contact_email := 'contact@****.**';
    booking_row.special_requests := '[Masqué pour la confidentialité]';
  END IF;
  
  RETURN booking_row;
END;
$function$;

-- Fonction sanitize_search_query
CREATE OR REPLACE FUNCTION public.sanitize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
SET search_path = 'public'
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

-- Fonction update_search_updated_at_column
CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fonction normalize_search_query
CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$function$;

-- Fonction mask_announcement_contacts
CREATE OR REPLACE FUNCTION public.mask_announcement_contacts(announcement_row announcements, user_is_authenticated boolean DEFAULT false)
RETURNS announcements
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- If user is not authenticated, mask sensitive contact details
  IF NOT user_is_authenticated THEN
    announcement_row.phone := CASE 
      WHEN announcement_row.phone IS NOT NULL THEN '****-****' 
      ELSE NULL 
    END;
    announcement_row.email := CASE 
      WHEN announcement_row.email IS NOT NULL THEN 'contact@****.**' 
      ELSE NULL 
    END;
  END IF;
  
  RETURN announcement_row;
END;
$function$;

-- Fonction update_categories_updated_at
CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fonction validate_password_strength
CREATE OR REPLACE FUNCTION public.validate_password_strength(password_text text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
SET search_path = 'public'
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

-- Fonction clean_search_query_trigger
CREATE OR REPLACE FUNCTION public.clean_search_query_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Nettoyer le texte de la requête avant insertion
  NEW.query_text := public.sanitize_search_query(NEW.query_text);
  NEW.query_normalized := public.sanitize_search_query(NEW.query_normalized);
  
  RETURN NEW;
END;
$function$;

-- Fonction rate_limit_search_queries
CREATE OR REPLACE FUNCTION public.rate_limit_search_queries(user_session text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fonction update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fonction update_conversation_last_message
CREATE OR REPLACE FUNCTION public.update_conversation_last_message()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  UPDATE public.conversations 
  SET last_message_at = NEW.created_at 
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$function$;

-- Fonction get_current_session
CREATE OR REPLACE FUNCTION public.get_current_session()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$function$;

-- Fonction set_current_session
CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$function$;

-- Fonction calculate_trending_score
CREATE OR REPLACE FUNCTION public.calculate_trending_score(keyword_id uuid)
RETURNS numeric
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
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

-- Fonction create_notification
CREATE OR REPLACE FUNCTION public.create_notification(p_user_id uuid, p_title text, p_message text, p_type text, p_category text, p_channels text[] DEFAULT ARRAY['in_app'::text], p_priority text DEFAULT 'normal'::text, p_metadata jsonb DEFAULT '{}'::jsonb, p_scheduled_at timestamp with time zone DEFAULT now())
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
DECLARE
  notification_id UUID;
BEGIN
  INSERT INTO public.notifications (
    user_id, title, message, type, category, channels, priority, metadata, scheduled_at
  ) VALUES (
    p_user_id, p_title, p_message, p_type, p_category, p_channels, p_priority, p_metadata, p_scheduled_at
  ) RETURNING id INTO notification_id;
  
  RETURN notification_id;
END;
$function$;

-- Fonction get_user_notification_preferences
CREATE OR REPLACE FUNCTION public.get_user_notification_preferences(p_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
DECLARE
  preferences JSONB;
BEGIN
  SELECT row_to_json(np)::jsonb INTO preferences
  FROM public.notification_preferences np
  WHERE np.user_id = p_user_id;
  
  -- Si aucune préférence trouvée, retourner les valeurs par défaut
  IF preferences IS NULL THEN
    preferences := '{
      "email_enabled": true,
      "sms_enabled": false,
      "push_enabled": true,
      "in_app_enabled": true,
      "categories_preferences": {
        "system": {"email": true, "sms": false, "push": true, "in_app": true},
        "announcement": {"email": true, "sms": false, "push": true, "in_app": true},
        "message": {"email": true, "sms": true, "push": true, "in_app": true},
        "payment": {"email": true, "sms": true, "push": true, "in_app": true},
        "security": {"email": true, "sms": true, "push": true, "in_app": true},
        "marketing": {"email": false, "sms": false, "push": false, "in_app": true},
        "reminder": {"email": true, "sms": false, "push": true, "in_app": true}
      },
      "quiet_hours_start": "22:00",
      "quiet_hours_end": "08:00",
      "timezone": "Africa/Algiers"
    }'::jsonb;
  END IF;
  
  RETURN preferences;
END;
$function$;