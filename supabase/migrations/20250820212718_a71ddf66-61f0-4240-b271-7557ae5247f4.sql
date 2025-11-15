-- Corriger le problème de Security Definer View en changeant le propriétaire de la vue
-- et en s'assurant qu'elle utilise les bonnes permissions

-- Supprimer la vue existante
DROP VIEW IF EXISTS public.public_search_stats;

-- Recréer la vue avec l'utilisateur approprié
-- et s'assurer qu'elle n'a pas de problèmes de sécurité
CREATE VIEW public.public_search_stats 
WITH (security_barrier = false) AS
SELECT 
  date_trunc('day', created_at) AS search_date,
  count(*) AS daily_searches,
  count(DISTINCT ip_hash) AS unique_users
FROM public.search_queries
WHERE created_at >= (now() - INTERVAL '30 days')
GROUP BY date_trunc('day', created_at)
ORDER BY date_trunc('day', created_at) DESC;

-- Changer le propriétaire de la vue
ALTER VIEW public.public_search_stats OWNER TO supabase_admin;

-- Accorder les permissions appropriées
GRANT SELECT ON public.public_search_stats TO authenticated;
GRANT SELECT ON public.public_search_stats TO anon;

-- Vérifier et corriger toutes les fonctions qui pourraient avoir des problèmes similaires
-- Retirer SECURITY DEFINER des fonctions qui n'en ont pas besoin pour les statistiques publiques
CREATE OR REPLACE FUNCTION public.get_public_search_stats()
RETURNS TABLE (
  search_date timestamptz,
  daily_searches bigint,
  unique_users bigint
)
LANGUAGE sql
STABLE
AS $$
  SELECT 
    date_trunc('day', created_at)::timestamptz AS search_date,
    count(*)::bigint AS daily_searches,
    count(DISTINCT ip_hash)::bigint AS unique_users
  FROM public.search_queries
  WHERE created_at >= (now() - INTERVAL '30 days')
  GROUP BY date_trunc('day', created_at)
  ORDER BY date_trunc('day', created_at) DESC;
$$;