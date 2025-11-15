-- Correction des avertissements de sécurité: définir search_path pour toutes les fonctions

-- Recréer la fonction de mise à jour des timestamps avec search_path sécurisé
CREATE OR REPLACE FUNCTION public.update_search_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- Recréer la fonction de normalisation avec search_path sécurisé
CREATE OR REPLACE FUNCTION public.normalize_search_query(query_text TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(trim(regexp_replace(query_text, '[^a-zA-Z0-9\s]', '', 'g')));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- Recréer la fonction de calcul de tendance avec search_path sécurisé
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
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- Recréer la fonction handle_new_user existante avec search_path sécurisé
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;