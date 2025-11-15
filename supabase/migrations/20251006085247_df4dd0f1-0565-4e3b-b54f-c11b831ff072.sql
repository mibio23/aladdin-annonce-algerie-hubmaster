-- Correction CRITIQUE: Ajouter les permissions de lecture manquantes
-- Ces GRANT sont nécessaires pour que le site se charge correctement

-- Permissions pour les bannières publicitaires
GRANT SELECT ON public.advertising_banners TO anon, authenticated;
GRANT SELECT ON public.advertising_banner_translations TO anon, authenticated;

-- Permissions pour les annonces
GRANT SELECT ON public.announcements TO anon, authenticated;

-- Permissions pour les catégories
GRANT SELECT ON public.categories TO anon, authenticated;

-- Permissions pour les boutiques
GRANT SELECT ON public.shops TO anon, authenticated;
GRANT SELECT ON public.shop_translations TO anon, authenticated;
GRANT SELECT ON public.shop_images TO anon, authenticated;