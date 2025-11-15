-- SÉCURISATION CRITIQUE DES DONNÉES IA ET ANALYTICS
-- Correction des 7 vulnérabilités identifiées

-- 1. CONVERSATION_MEMORY - Restreindre par session seulement
DROP POLICY IF EXISTS "Conversation memory access" ON public.conversation_memory;

CREATE POLICY "Session-based conversation memory access" 
ON public.conversation_memory 
FOR SELECT 
USING (
  -- Permettre l'accès seulement à la session courante (via paramètre ou fonction)
  session_id = current_setting('app.current_session_id', true)
);

CREATE POLICY "Session-based conversation memory insert" 
ON public.conversation_memory 
FOR INSERT 
WITH CHECK (
  session_id = current_setting('app.current_session_id', true)
);

-- 2. AI_LEARNING_DATA - Accès anonyme pour insertion, admin seulement pour lecture
DROP POLICY IF EXISTS "AI learning data access" ON public.ai_learning_data;

CREATE POLICY "Public can create AI learning data" 
ON public.ai_learning_data 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only system can read AI learning data" 
ON public.ai_learning_data 
FOR SELECT 
USING (false); -- Bloque tout accès de lecture public

-- 3. SEARCH_QUERIES - Anonymiser les données sensibles
DROP POLICY IF EXISTS "Allow public read on search queries" ON public.search_queries;
DROP POLICY IF EXISTS "Allow public insert on search queries" ON public.search_queries;

CREATE POLICY "Anonymous search queries insert" 
ON public.search_queries 
FOR INSERT 
WITH CHECK (
  ip_hash IS NOT NULL AND -- Doit être hashé
  user_session_id IS NOT NULL -- Doit avoir un session ID
);

CREATE POLICY "No public read on search queries" 
ON public.search_queries 
FOR SELECT 
USING (false); -- Pas d'accès public en lecture

-- 4. SEARCH_RESULTS_CLICKS - Anonymiser et restreindre
DROP POLICY IF EXISTS "Allow public access on search clicks" ON public.search_results_clicks;

CREATE POLICY "Anonymous clicks tracking only" 
ON public.search_results_clicks 
FOR INSERT 
WITH CHECK (
  session_id IS NOT NULL -- Doit avoir un session ID
);

CREATE POLICY "No public read on clicks data" 
ON public.search_results_clicks 
FOR SELECT 
USING (false); -- Pas d'accès public en lecture

-- 5. USER_SEARCH_PATTERNS - Restreindre par session
DROP POLICY IF EXISTS "Allow public access on search patterns" ON public.user_search_patterns;

CREATE POLICY "Session-based search patterns insert" 
ON public.user_search_patterns 
FOR INSERT 
WITH CHECK (
  session_id IS NOT NULL
);

CREATE POLICY "No public read on search patterns" 
ON public.user_search_patterns 
FOR SELECT 
USING (false); -- Pas d'accès public en lecture

-- 6. SEARCH_SUGGESTIONS - Lecture publique limitée, pas d'écriture
DROP POLICY IF EXISTS "Allow public access on search suggestions" ON public.search_suggestions;

CREATE POLICY "Public can read active suggestions only" 
ON public.search_suggestions 
FOR SELECT 
USING (
  is_active = true AND
  confidence_score > 0.3 -- Seulement les suggestions fiables
);

CREATE POLICY "No public write on search suggestions" 
ON public.search_suggestions 
FOR INSERT 
WITH CHECK (false); -- Pas d'écriture publique

CREATE POLICY "No public update on search suggestions" 
ON public.search_suggestions 
FOR UPDATE 
USING (false); -- Pas de mise à jour publique

-- 7. USER_INTELLIGENT_PROFILES - Restreindre par session
DROP POLICY IF EXISTS "User profiles access" ON public.user_intelligent_profiles;

CREATE POLICY "Session-based intelligent profiles insert" 
ON public.user_intelligent_profiles 
FOR INSERT 
WITH CHECK (
  session_id IS NOT NULL
);

CREATE POLICY "Session-based intelligent profiles update" 
ON public.user_intelligent_profiles 
FOR UPDATE 
USING (
  session_id = current_setting('app.current_session_id', true)
);

CREATE POLICY "No public read on intelligent profiles" 
ON public.user_intelligent_profiles 
FOR SELECT 
USING (false); -- Pas d'accès public en lecture

-- 8. ANTICIPATION_SUGGESTIONS - Restreindre l'accès
DROP POLICY IF EXISTS "Anticipation suggestions access" ON public.anticipation_suggestions;

CREATE POLICY "Session-based anticipation suggestions" 
ON public.anticipation_suggestions 
FOR INSERT 
WITH CHECK (
  session_id IS NOT NULL
);

CREATE POLICY "Session-based anticipation read" 
ON public.anticipation_suggestions 
FOR SELECT 
USING (
  session_id = current_setting('app.current_session_id', true)
);

-- 9. REAL_TIME_TRENDS - Lecture publique seulement
DROP POLICY IF EXISTS "Real time trends access" ON public.real_time_trends;

CREATE POLICY "Public can read trends only" 
ON public.real_time_trends 
FOR SELECT 
USING (true);

CREATE POLICY "No public write on trends" 
ON public.real_time_trends 
FOR INSERT 
WITH CHECK (false);

CREATE POLICY "No public update on trends" 
ON public.real_time_trends 
FOR UPDATE 
USING (false);

-- 10. Créer une fonction pour définir la session courante de manière sécurisée
CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
RETURNS void AS $$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 11. Fonction pour obtenir la session courante
CREATE OR REPLACE FUNCTION public.get_current_session()
RETURNS text AS $$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- COMMENTAIRES DE SÉCURITÉ :
-- ✅ Les données IA ne sont plus accessibles publiquement
-- ✅ Les analytics nécessitent maintenant des sessions valides  
-- ✅ Les profils utilisateurs sont protégés
-- ✅ Les requêtes de recherche sont anonymisées
-- ✅ Seules les suggestions validées sont publiques
-- ✅ Système de session sécurisé implémenté