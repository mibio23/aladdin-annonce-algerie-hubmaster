-- Créer la table des catégories
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  parent_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insérer les catégories principales
INSERT INTO public.categories (name, slug, description, icon, sort_order) VALUES
('Véhicules', 'vehicules', 'Voitures, motos, camions et accessoires', '🚗', 1),
('Immobilier', 'immobilier', 'Vente et location de propriétés', '🏠', 2),
('Emploi', 'emploi', 'Offres d''emploi et services', '💼', 3),
('Électronique', 'electronique', 'Téléphones, ordinateurs, électroménager', '📱', 4),
('Mode & Beauté', 'mode-beaute', 'Vêtements, chaussures, cosmétiques', '👗', 5),
('Maison & Jardin', 'maison-jardin', 'Mobilier, décoration, jardinage', '🏡', 6),
('Loisirs', 'loisirs', 'Sports, hobbies, livres, musique', '🎯', 7),
('Services', 'services', 'Services professionnels et particuliers', '🔧', 8)
ON CONFLICT (slug) DO NOTHING;

-- Ajouter les sous-catégories pour Véhicules
INSERT INTO public.categories (name, slug, description, parent_id, sort_order) 
SELECT 'Voitures', 'voitures', 'Voitures d''occasion et neuves', c.id, 1
FROM public.categories c WHERE c.slug = 'vehicules'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.categories (name, slug, description, parent_id, sort_order) 
SELECT 'Motos', 'motos', 'Motos et scooters', c.id, 2
FROM public.categories c WHERE c.slug = 'vehicules'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.categories (name, slug, description, parent_id, sort_order) 
SELECT 'Camions', 'camions', 'Poids lourds et utilitaires', c.id, 3
FROM public.categories c WHERE c.slug = 'vehicules'
ON CONFLICT (slug) DO NOTHING;

-- Créer les triggers pour updated_at
CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_categories_updated_at();

-- Activer RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Politique pour lecture publique des catégories actives
CREATE POLICY "Public can view active categories" ON public.categories
  FOR SELECT USING (is_active = true);

-- Politique pour gestion admin des catégories
CREATE POLICY "Authenticated users can manage categories" ON public.categories
  FOR ALL USING (auth.role() = 'authenticated');

-- Mettre à jour la table announcements pour utiliser les catégories
ALTER TABLE public.announcements 
ADD COLUMN IF NOT EXISTS category_slug TEXT,
ADD CONSTRAINT fk_announcements_category 
  FOREIGN KEY (category_id) REFERENCES public.categories(id);

-- Créer un index pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON public.categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_active ON public.categories(is_active);