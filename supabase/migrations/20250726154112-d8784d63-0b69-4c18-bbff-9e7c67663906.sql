-- Tables pour le système d'apprentissage automatique de la recherche

-- Table pour stocker les requêtes de recherche (anonymisées)
CREATE TABLE public.search_queries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  query_text TEXT NOT NULL,
  query_normalized TEXT NOT NULL, -- Version normalisée pour l'analyse
  search_context TEXT, -- Contexte (page, catégorie, etc.)
  results_count INTEGER DEFAULT 0,
  user_session_id TEXT, -- ID de session anonyme
  ip_hash TEXT, -- Hash de l'IP pour tracking anonyme
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  language_detected TEXT DEFAULT 'fr'
);

-- Table pour tracker les clics sur les résultats
CREATE TABLE public.search_results_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  search_query_id UUID REFERENCES public.search_queries(id) ON DELETE CASCADE,
  result_type TEXT NOT NULL, -- 'announcement', 'category', 'suggestion'
  result_id TEXT NOT NULL,
  click_position INTEGER NOT NULL, -- Position du résultat cliqué
  time_to_click INTEGER, -- Temps en ms avant le clic
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les mots-clés populaires avec scores
CREATE TABLE public.popular_keywords (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL UNIQUE,
  keyword_normalized TEXT NOT NULL,
  search_count INTEGER DEFAULT 1,
  success_rate NUMERIC(3,2) DEFAULT 0.5, -- Taux de succès (0-1)
  category_context TEXT[], -- Catégories associées
  trending_score NUMERIC(5,2) DEFAULT 0,
  last_searched TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les suggestions apprises dynamiquement
CREATE TABLE public.search_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  original_query TEXT NOT NULL,
  suggested_query TEXT NOT NULL,
  suggestion_type TEXT NOT NULL, -- 'correction', 'expansion', 'synonym', 'related'
  confidence_score NUMERIC(3,2) DEFAULT 0.5,
  usage_count INTEGER DEFAULT 0,
  success_rate NUMERIC(3,2) DEFAULT 0.5,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les patterns de recherche utilisateur (anonymisés)
CREATE TABLE public.user_search_patterns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  search_sequence TEXT[], -- Séquence de recherches dans la session
  search_categories TEXT[], -- Catégories recherchées
  search_timespan INTEGER, -- Durée de la session en minutes
  conversion_achieved BOOLEAN DEFAULT false, -- Si l'utilisateur a trouvé ce qu'il cherchait
  pattern_type TEXT, -- 'exploration', 'targeted', 'comparison'
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Indexes pour optimiser les performances
CREATE INDEX idx_search_queries_text ON public.search_queries USING gin(to_tsvector('french', query_text));
CREATE INDEX idx_search_queries_normalized ON public.search_queries(query_normalized);
CREATE INDEX idx_search_queries_created_at ON public.search_queries(created_at);
CREATE INDEX idx_popular_keywords_normalized ON public.popular_keywords(keyword_normalized);
CREATE INDEX idx_popular_keywords_trending ON public.popular_keywords(trending_score DESC);
CREATE INDEX idx_search_suggestions_original ON public.search_suggestions(original_query);
CREATE INDEX idx_search_results_clicks_query_id ON public.search_results_clicks(search_query_id);

-- Activer RLS sur toutes les tables
ALTER TABLE public.search_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_results_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.popular_keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_search_patterns ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour permettre l'accès public en lecture des données agrégées
-- Recherches: lecture publique pour les analyses, écriture publique pour tracking
CREATE POLICY "Allow public read on search queries" 
ON public.search_queries 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public insert on search queries" 
ON public.search_queries 
FOR INSERT 
WITH CHECK (true);

-- Clics: lecture et écriture publique pour analytics
CREATE POLICY "Allow public access on search clicks" 
ON public.search_results_clicks 
FOR ALL 
USING (true);

-- Mots-clés populaires: lecture publique, écriture via fonctions
CREATE POLICY "Allow public read on popular keywords" 
ON public.popular_keywords 
FOR SELECT 
USING (true);

CREATE POLICY "Allow public write on popular keywords" 
ON public.popular_keywords 
FOR ALL 
USING (true);

-- Suggestions: lecture publique pour affichage, écriture pour apprentissage
CREATE POLICY "Allow public access on search suggestions" 
ON public.search_suggestions 
FOR ALL 
USING (true);

-- Patterns: accès public pour analytics anonymes
CREATE POLICY "Allow public access on search patterns" 
ON public.user_search_patterns 
FOR ALL 
USING (true);

-- Fonction pour mettre à jour les timestamps
CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour les timestamps automatiques
CREATE TRIGGER update_popular_keywords_updated_at
  BEFORE UPDATE ON public.popular_keywords
  FOR EACH ROW
  EXECUTE FUNCTION public.update_search_updated_at_column();

CREATE TRIGGER update_search_suggestions_updated_at
  BEFORE UPDATE ON public.search_suggestions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_search_updated_at_column();

-- Fonction pour normaliser les requêtes de recherche
CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$$ LANGUAGE plpgsql;

-- Fonction pour calculer le score de tendance
CREATE OR REPLACE FUNCTION public.calculate_trending_score(keyword_id UUID)
RETURNS NUMERIC AS $$
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
$$ LANGUAGE plpgsql;