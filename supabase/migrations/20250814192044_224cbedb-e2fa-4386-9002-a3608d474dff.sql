-- CORRECTION DES AVERTISSEMENTS DE SÉCURITÉ
-- Fixer les fonctions avec search_path mutable

-- Corriger la fonction set_current_session avec search_path sécurisé
CREATE OR REPLACE FUNCTION public.set_current_session(session_id text)
RETURNS void AS $$
BEGIN
  -- Valider que le session_id est valide (format UUID)
  IF session_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' THEN
    RAISE EXCEPTION 'Invalid session ID format';
  END IF;
  
  PERFORM set_config('app.current_session_id', session_id, true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Corriger la fonction get_current_session avec search_path sécurisé
CREATE OR REPLACE FUNCTION public.get_current_session()
RETURNS text AS $$
BEGIN
  RETURN current_setting('app.current_session_id', true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- COMMENTAIRE : 
-- ✅ search_path sécurisé pour éviter les attaques par injection de schéma