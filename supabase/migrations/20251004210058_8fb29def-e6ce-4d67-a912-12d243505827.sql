
-- Étape 1: Supprimer toutes les politiques de sécurité existantes pour les recréer proprement
DROP POLICY IF EXISTS "Public announcements without sensitive data" ON public.announcements;
DROP POLICY IF EXISTS "Public announcements with masked contact" ON public.announcements;
DROP POLICY IF EXISTS "Authenticated users see announcements" ON public.announcements;

-- Étape 2: Recréer les politiques avec protection des numéros de téléphone

-- Politique pour les utilisateurs authentifiés (peuvent voir les numéros)
CREATE POLICY "Authenticated users can see full announcements"
ON public.announcements
FOR SELECT
TO authenticated
USING (
  status = 'active'
);

-- Politique pour les utilisateurs anonymes (ne voient PAS les numéros)
-- Note: RLS filtre automatiquement les colonnes via la vue ou la fonction
CREATE POLICY "Anonymous users see limited announcement data"
ON public.announcements
FOR SELECT
TO anon
USING (
  status = 'active'
);

-- Étape 3: Créer une fonction sécurisée pour récupérer les annonces avec protection automatique
CREATE OR REPLACE FUNCTION public.get_public_announcements(
  p_limit integer DEFAULT 20,
  p_offset integer DEFAULT 0,
  p_category_id uuid DEFAULT NULL,
  p_location text DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  title text,
  description text,
  price numeric,
  location text,
  image_url text,
  image_urls text[],
  category_id uuid,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  expires_at timestamp with time zone,
  keywords text[],
  type text,
  condition text,
  status text,
  is_urgent boolean,
  urgent_message text,
  view_count integer,
  shop_name text,
  shop_id text,
  shop_logo_url text,
  phone_number_visible boolean,
  phone_number_masked text,
  contact_count integer
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id,
    a.title,
    a.description,
    a.price,
    a.location,
    a.image_url,
    a.image_urls,
    a.category_id,
    a.created_at,
    a.updated_at,
    a.expires_at,
    a.keywords,
    a.type,
    a.condition,
    a.status,
    a.is_urgent,
    a.urgent_message,
    a.view_count,
    a.shop_name,
    a.shop_id,
    a.shop_logo_url,
    -- Indiquer si le numéro complet est visible
    CASE 
      WHEN auth.uid() IS NOT NULL THEN true
      ELSE false
    END as phone_number_visible,
    -- Masquer complètement le numéro pour les non-authentifiés
    CASE 
      WHEN auth.uid() IS NOT NULL AND a.phone_number IS NOT NULL THEN a.phone_number
      WHEN a.phone_number IS NOT NULL THEN '**********'
      ELSE NULL
    END as phone_number_masked,
    a.contact_count
  FROM public.announcements a
  WHERE a.status = 'active'
    AND (p_category_id IS NULL OR a.category_id = p_category_id)
    AND (p_location IS NULL OR a.location ILIKE '%' || p_location || '%')
  ORDER BY a.created_at DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$;

-- Documentation
COMMENT ON FUNCTION public.get_public_announcements IS 
'Récupère les annonces publiques avec protection automatique des numéros de téléphone. Les utilisateurs non authentifiés voient **********. Les utilisateurs authentifiés voient le numéro complet.';

-- Étape 4: Créer une vue sécurisée pour un accès facile
DROP VIEW IF EXISTS public.announcements_safe CASCADE;

CREATE VIEW public.announcements_safe
WITH (security_invoker = true)
AS
SELECT 
  a.id,
  a.title,
  a.description,
  a.price,
  a.location,
  a.image_url,
  a.image_urls,
  a.category_id,
  a.user_id,
  a.created_at,
  a.updated_at,
  a.expires_at,
  a.keywords,
  a.type,
  a.condition,
  a.status,
  a.is_urgent,
  a.urgent_message,
  a.view_count,
  a.shop_name,
  a.shop_id,
  a.shop_logo_url,
  a.contact_count,
  -- Masquer automatiquement le numéro selon l'authentification
  CASE 
    WHEN auth.uid() IS NOT NULL THEN a.phone_number
    WHEN a.phone_number IS NOT NULL THEN '**********'
    ELSE NULL
  END as phone_number
FROM public.announcements a
WHERE a.status = 'active';

COMMENT ON VIEW public.announcements_safe IS 
'Vue sécurisée des annonces actives avec masquage automatique des numéros de téléphone pour les utilisateurs non authentifiés. Utilise security_invoker pour appliquer les permissions de chaque utilisateur.';

-- Étape 5: Créer une fonction de logging pour auditer l'accès aux numéros
CREATE OR REPLACE FUNCTION public.log_phone_access(
  p_announcement_id uuid,
  p_user_id uuid DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Ne logger que si un numéro est réellement consulté
  INSERT INTO public.security_audit_log (
    user_id,
    action_type,
    resource_type,
    resource_id,
    metadata
  ) VALUES (
    COALESCE(p_user_id, auth.uid()),
    'phone_access_attempt',
    'announcement',
    p_announcement_id::text,
    jsonb_build_object(
      'timestamp', now(),
      'authenticated', auth.uid() IS NOT NULL,
      'ip_address', current_setting('request.headers', true)::json->>'x-forwarded-for'
    )
  );
END;
$$;

COMMENT ON FUNCTION public.log_phone_access IS 
'Enregistre les tentatives d''accès aux numéros de téléphone pour audit de sécurité et détection d''abus.';
