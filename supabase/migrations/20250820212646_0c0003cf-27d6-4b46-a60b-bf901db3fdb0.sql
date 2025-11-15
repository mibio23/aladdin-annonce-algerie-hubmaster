-- Supprimer et recréer la vue public_search_stats sans problèmes de sécurité
DROP VIEW IF EXISTS public.public_search_stats;

-- Créer une vue sécurisée pour les statistiques de recherche
CREATE VIEW public.public_search_stats AS
SELECT 
  date_trunc('day', created_at) AS search_date,
  count(*) AS daily_searches,
  count(DISTINCT ip_hash) AS unique_users
FROM public.search_queries
WHERE created_at >= (now() - INTERVAL '30 days')
GROUP BY date_trunc('day', created_at)
ORDER BY date_trunc('day', created_at) DESC;

-- S'assurer que la vue a les bonnes permissions
GRANT SELECT ON public.public_search_stats TO authenticated;
GRANT SELECT ON public.public_search_stats TO anon;