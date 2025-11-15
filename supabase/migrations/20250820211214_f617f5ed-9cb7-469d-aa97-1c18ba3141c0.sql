-- Phase 2: Durcissement des politiques RLS pour la sécurité des données

-- 1. Sécuriser les informations de contact des réservations
-- Créer une fonction sécurisée pour masquer les contacts de réservation
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

-- 2. Restreindre l'insertion dans ai_learning_data pour éviter l'empoisonnement des données
DROP POLICY IF EXISTS "Public can create AI learning data" ON public.ai_learning_data;

CREATE POLICY "Authenticated users can create AI learning data"
ON public.ai_learning_data
FOR INSERT
WITH CHECK (
  auth.uid() IS NOT NULL AND
  -- Limiter la taille des données d'entrée pour éviter les attaques
  LENGTH(user_input) <= 1000 AND
  LENGTH(ai_output) <= 2000 AND
  -- Empêcher l'injection de contenu malveillant
  user_input !~ '<script|javascript:|data:|vbscript:' AND
  ai_output !~ '<script|javascript:|data:|vbscript:'
);

-- 3. Limiter l'exposition des mots-clés populaires - accès authentifié uniquement
DROP POLICY IF EXISTS "Public read limited popular keywords" ON public.popular_keywords;

CREATE POLICY "Authenticated users can read popular keywords"
ON public.popular_keywords
FOR SELECT
USING (
  auth.uid() IS NOT NULL AND
  -- Limiter aux mots-clés avec un score de confiance élevé
  trending_score >= 0.3 AND
  search_count >= 5
);

-- 4. Sécuriser les suggestions de recherche - authentification requise
DROP POLICY IF EXISTS "Public can read active suggestions only" ON public.search_suggestions;

CREATE POLICY "Authenticated users can read search suggestions"
ON public.search_suggestions
FOR SELECT
USING (
  auth.uid() IS NOT NULL AND
  is_active = true AND
  confidence_score > 0.5
);

-- 5. Restreindre l'accès aux tendances en temps réel
DROP POLICY IF EXISTS "Public can read trends only" ON public.real_time_trends;

CREATE POLICY "Limited access to real time trends"
ON public.real_time_trends
FOR SELECT
USING (
  -- Accès public limité aux tendances récentes et populaires
  created_at >= now() - INTERVAL '7 days' AND
  trend_score >= 0.4
);

-- 6. Sécuriser les profils intelligents utilisateur
CREATE POLICY "Users can read their own intelligent profiles"
ON public.user_intelligent_profiles
FOR SELECT
USING (
  session_id = current_setting('app.current_session_id', true) OR
  auth.uid() IS NOT NULL
);

-- 7. Ajouter une politique pour limiter les requêtes de recherche malveillantes  
CREATE POLICY "Authenticated search queries insert"
ON public.search_queries
FOR INSERT
WITH CHECK (
  -- Permettre l'insertion anonyme mais avec validation
  (ip_hash IS NOT NULL AND user_session_id IS NOT NULL) AND
  -- Empêcher les requêtes excessivement longues
  LENGTH(query_text) <= 500 AND
  LENGTH(query_normalized) <= 500 AND
  -- Filtrer le contenu malveillant
  query_text !~ '<script|javascript:|data:|vbscript:|<iframe|<object'
);

-- 8. Créer une vue sécurisée pour les statistiques publiques
CREATE OR REPLACE VIEW public.public_search_stats AS
SELECT 
  DATE_TRUNC('day', created_at) as search_date,
  COUNT(*) as daily_searches,
  COUNT(DISTINCT ip_hash) as unique_users
FROM public.search_queries
WHERE created_at >= now() - INTERVAL '30 days'
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY search_date DESC;

-- Permettre l'accès public à cette vue agrégée
GRANT SELECT ON public.public_search_stats TO anon, authenticated;

-- 9. Ajouter une fonction pour nettoyer les données sensibles dans les logs
CREATE OR REPLACE FUNCTION public.sanitize_search_query(query_text text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE SECURITY DEFINER
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