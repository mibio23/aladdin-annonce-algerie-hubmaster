-- Corriger le problème de search_path pour la fonction de catégories
CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;