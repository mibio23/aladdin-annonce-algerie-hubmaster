-- Identifier et corriger les vues Security Definer restantes

-- Vérifier s'il y a des vues qui utilisent SECURITY DEFINER
-- (Le linter détecte toujours un problème, donc il doit y en avoir d'autres)

-- Corriger toutes les fonctions existantes pour s'assurer qu'elles ont le bon search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_conversation_last_message()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  UPDATE public.conversations 
  SET last_message_at = NEW.created_at 
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_current_session()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$$;

CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$$;

CREATE OR REPLACE FUNCTION public.calculate_trending_score(keyword_id uuid)
RETURNS numeric
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
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

CREATE OR REPLACE FUNCTION public.create_notification(p_user_id uuid, p_title text, p_message text, p_type text, p_category text, p_channels text[] DEFAULT ARRAY['in_app'::text], p_priority text DEFAULT 'normal'::text, p_metadata jsonb DEFAULT '{}'::jsonb, p_scheduled_at timestamp with time zone DEFAULT now())
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.get_user_notification_preferences(p_user_id uuid)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$$;

CREATE OR REPLACE FUNCTION public.mask_announcement_contacts(announcement_row announcements, user_is_authenticated boolean DEFAULT false)
RETURNS announcements
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;