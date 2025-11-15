-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  image_url TEXT,
  parent_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  position_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create subcategories (using same table with parent_id)
-- No separate table needed, using self-reference

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories
CREATE POLICY "Everyone can view active categories" 
  ON public.categories 
  FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all categories" 
  ON public.categories 
  FOR SELECT 
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage categories" 
  ON public.categories 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Indexes
CREATE INDEX idx_categories_parent_id ON public.categories(parent_id);
CREATE INDEX idx_categories_slug ON public.categories(slug);
CREATE INDEX idx_categories_active ON public.categories(is_active);
CREATE INDEX idx_categories_position ON public.categories(position_order);

-- Function to update updated_at
CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_categories_updated_at();

-- Insert some sample categories
INSERT INTO public.categories (name, slug, description, icon, position_order) VALUES
('Véhicules', 'vehicules', 'Voitures, motos, vélos et autres moyens de transport', '🚗', 1),
('Immobilier', 'immobilier', 'Appartements, maisons, terrains et locations', '🏠', 2),
('Informatique', 'informatique', 'Ordinateurs, smartphones et accessoires', '💻', 3),
('Emploi', 'emploi', 'Offres d''emploi et recherches de travail', '💼', 4),
('Services', 'services', 'Services professionnels et particuliers', '🔧', 5),
('Mode', 'mode', 'Vêtements, chaussures et accessoires', '👗', 6),
('Maison', 'maison', 'Meubles, électroménager et décoration', '🏠', 7),
('Loisirs', 'loisirs', 'Sports, hobbies et équipements', '⚽', 8);

-- Insert some subcategories
INSERT INTO public.categories (name, slug, description, icon, parent_id, position_order) VALUES
-- Véhicules subcategories
('Voitures', 'voitures', 'Voitures d''occasion et neuves', '🚗', (SELECT id FROM public.categories WHERE slug = 'vehicules'), 1),
('Motos', 'motos', 'Motos et scooters', '🏍️', (SELECT id FROM public.categories WHERE slug = 'vehicules'), 2),
('Pièces détachées', 'pieces-detachees', 'Pièces et accessoires pour véhicules', '⚙️', (SELECT id FROM public.categories WHERE slug = 'vehicules'), 3),

-- Immobilier subcategories  
('Appartements', 'appartements', 'Vente et location d''appartements', '🏢', (SELECT id FROM public.categories WHERE slug = 'immobilier'), 1),
('Maisons', 'maisons', 'Vente et location de maisons', '🏡', (SELECT id FROM public.categories WHERE slug = 'immobilier'), 2),
('Terrains', 'terrains', 'Terrains à bâtir et agricultures', '🏞️', (SELECT id FROM public.categories WHERE slug = 'immobilier'), 3);