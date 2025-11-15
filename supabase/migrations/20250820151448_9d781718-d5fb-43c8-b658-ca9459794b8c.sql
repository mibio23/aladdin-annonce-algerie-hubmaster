-- Mettre à jour tous les profils existants qui ont 'autre' vers 'femme'
UPDATE public.profiles 
SET gender = 'femme' 
WHERE gender = 'autre' OR gender IS NULL;

-- Supprimer l'ancienne contrainte si elle existe
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_gender_check;

-- Ajouter une nouvelle contrainte pour n'accepter que 'homme' ou 'femme'
ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_gender_check 
CHECK (gender IN ('homme', 'femme'));

-- Changer la valeur par défaut à 'femme'
ALTER TABLE public.profiles 
ALTER COLUMN gender SET DEFAULT 'femme';