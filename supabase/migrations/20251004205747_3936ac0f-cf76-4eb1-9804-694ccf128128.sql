
-- Supprimer la vue existante avec SECURITY DEFINER
DROP VIEW IF EXISTS public.announcements_public CASCADE;

-- Recréer la vue avec SECURITY INVOKER (utilise les permissions de l'utilisateur qui interroge)
CREATE VIEW public.announcements_public
WITH (security_invoker = true)
AS
SELECT 
  announcements.id,
  announcements.title,
  announcements.description,
  announcements.price,
  announcements.location,
  announcements.image_url,
  announcements.image_urls,
  announcements.category_id,
  announcements.created_at,
  announcements.updated_at,
  announcements.expires_at,
  announcements.keywords,
  announcements.type,
  announcements.condition,
  announcements.status,
  announcements.is_urgent,
  announcements.urgent_message,
  announcements.view_count,
  announcements.shop_name,
  announcements.shop_id,
  announcements.shop_logo_url,
  announcements.phone_number IS NOT NULL AS has_contact_info
FROM public.announcements
WHERE announcements.status = 'active';

-- Ajouter un commentaire pour documenter la vue
COMMENT ON VIEW public.announcements_public IS 
'Vue publique des annonces actives sans exposer les informations sensibles. Utilise SECURITY INVOKER pour appliquer les permissions RLS de l''utilisateur.';
