-- Correction des problèmes de sécurité détectés par le linter

-- 1. Corriger le problème Security Definer View
-- Supprimer la vue SECURITY DEFINER et la recréer sans cette propriété
DROP VIEW IF EXISTS public.public_search_stats;

CREATE VIEW public.public_search_stats AS
SELECT 
  DATE_TRUNC('day', created_at) as search_date,
  COUNT(*) as daily_searches,
  COUNT(DISTINCT ip_hash) as unique_users
FROM public.search_queries
WHERE created_at >= now() - INTERVAL '30 days'
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY search_date DESC;

-- Définir les permissions appropriées pour la vue
GRANT SELECT ON public.public_search_stats TO anon, authenticated;

-- 2. Corriger les fonctions avec search_path mutable
-- Recréer les fonctions avec search_path fixe

CREATE OR REPLACE FUNCTION public.mask_booking_contacts(booking_row bookings, requesting_user_id uuid DEFAULT auth.uid())
RETURNS bookings
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

CREATE OR REPLACE FUNCTION public.sanitize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
$$;

-- 3. Activer la protection contre les mots de passe divulgués
-- Note: Cette configuration doit être faite dans l'interface Supabase Auth
-- Le SQL ci-dessous est informatif - la configuration réelle se fait via l'interface

-- 4. Activer les options MFA supplémentaires  
-- Note: Cette configuration doit être faite dans l'interface Supabase Auth
-- Le SQL ci-dessous est informatif - la configuration réelle se fait via l'interface

-- Ajout d'une fonction utilitaire pour valider les mots de passe forts côté application
CREATE OR REPLACE FUNCTION public.validate_password_strength(password_text text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
SET search_path TO 'public'
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

-- Ajouter des contraintes de sécurité supplémentaires sur les tables sensibles
-- Trigger pour nettoyer automatiquement les requêtes de recherche
CREATE OR REPLACE FUNCTION public.clean_search_query_trigger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Nettoyer le texte de la requête avant insertion
  NEW.query_text := public.sanitize_search_query(NEW.query_text);
  NEW.query_normalized := public.sanitize_search_query(NEW.query_normalized);
  
  RETURN NEW;
END;
$$;

-- Créer le trigger sur la table search_queries
DROP TRIGGER IF EXISTS clean_search_query_before_insert ON public.search_queries;
CREATE TRIGGER clean_search_query_before_insert
  BEFORE INSERT ON public.search_queries
  FOR EACH ROW
  EXECUTE FUNCTION public.clean_search_query_trigger();

-- Ajouter une politique de sécurité pour limiter les insertions en masse
CREATE OR REPLACE FUNCTION public.rate_limit_search_queries(user_session text)
RETURNS boolean
LANGUAGE plpgsql
VOLATILE SECURITY DEFINER
SET search_path TO 'public'
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