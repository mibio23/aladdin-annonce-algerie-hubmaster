-- ========================================
-- Script de Mise à Jour des Tables Existantes
-- ========================================
-- Ce script ajoute les colonnes manquantes sans recréer les tables

-- ========================================
-- 1. Mise à jour de la table categories
-- ========================================

-- Ajouter les colonnes manquantes à categories
ALTER TABLE public.categories 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS icon TEXT,
ADD COLUMN IF NOT EXISTS image_url TEXT,
ADD COLUMN IF NOT EXISTS position_order INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- Mettre à jour les valeurs par défaut
UPDATE public.categories 
SET is_active = true, position_order = 0 
WHERE is_active IS NULL OR position_order IS NULL;

-- Ajouter les colonnes UUID si elles n'existent pas déjà
DO $$
BEGIN
    -- Vérifier si la colonne id_uuid existe déjà
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'categories' 
        AND column_name = 'id_uuid'
    ) THEN
        -- Ajouter la colonne UUID
        ALTER TABLE public.categories ADD COLUMN id_uuid UUID DEFAULT gen_random_uuid();
        
        -- Mettre à jour les existing records avec de nouveaux UUIDs
        UPDATE public.categories SET id_uuid = gen_random_uuid() WHERE id_uuid IS NULL;
    END IF;
    
    -- Vérifier si la colonne parent_id_uuid existe déjà
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'categories' 
        AND column_name = 'parent_id_uuid'
    ) THEN
        ALTER TABLE public.categories ADD COLUMN parent_id_uuid UUID;
        
        -- Si nous avons des parent_id existants, essayer de les mapper
        -- Note: Ceci est une approximation car nous ne pouvons pas garantir la correspondance
        UPDATE public.categories c1 
        SET parent_id_uuid = c2.id_uuid 
        FROM public.categories c2 
        WHERE c1.parent_id IS NOT NULL 
        AND c1.parent_id = c2.id
        AND c1.parent_id_uuid IS NULL;
    END IF;
END $$;

-- Insérer les catégories de base si elles n'existent pas
INSERT INTO public.categories (name, slug, description, icon, position_order, is_active) VALUES
  ('Véhicules', 'vehicules', 'Voitures, motos, vélos et autres moyens de transport', '🚗', 1, true),
  ('Immobilier', 'immobilier', 'Appartements, maisons, terrains et locations', '🏠', 2, true),
  ('Informatique', 'informatique', 'Ordinateurs, smartphones et accessoires', '💻', 3, true),
  ('Emploi', 'emploi', 'Offres d''emploi et recherches de travail', '💼', 4, true),
  ('Services', 'services', 'Services professionnels et particuliers', '🔧', 5, true),
  ('Mode', 'mode', 'Vêtements, chaussures et accessoires', '👗', 6, true),
  ('Maison', 'maison', 'Meubles, électroménager et décoration', '🏠', 7, true),
  ('Loisirs', 'loisirs', 'Sports, hobbies et équipements', '⚽', 8, true)
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- 2. Mise à jour de la table announcements
-- ========================================

-- Ajouter les colonnes manquantes à announcements
ALTER TABLE public.announcements 
ADD COLUMN IF NOT EXISTS wilaya TEXT,
ADD COLUMN IF NOT EXISTS commune TEXT,
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS email TEXT,
ADD COLUMN IF NOT EXISTS is_negotiable BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS subcategory_id UUID,
ADD COLUMN IF NOT EXISTS currency TEXT DEFAULT 'DZD',

-- colonnes de détails du produit
ADD COLUMN IF NOT EXISTS brand TEXT,
ADD COLUMN IF NOT EXISTS model TEXT,
ADD COLUMN IF NOT EXISTS color TEXT,
ADD COLUMN IF NOT EXISTS dimensions TEXT,
ADD COLUMN IF NOT EXISTS weight TEXT,
ADD COLUMN IF NOT EXISTS purchase_year INTEGER,

-- colonnes d'historique et condition
ADD COLUMN IF NOT EXISTS has_invoice BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS warranty_duration TEXT,
ADD COLUMN IF NOT EXISTS included_accessories TEXT[],
ADD COLUMN IF NOT EXISTS selling_reason TEXT,

-- colonnes de prix et négociation
ADD COLUMN IF NOT EXISTS cash_discount NUMERIC(5, 2),
ADD COLUMN IF NOT EXISTS exchange_possible BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS original_price NUMERIC(12, 2),

-- colonnes de logistique et livraison
ADD COLUMN IF NOT EXISTS delivery_available BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS delivery_areas TEXT[],
ADD COLUMN IF NOT EXISTS delivery_fees NUMERIC(8, 2),
ADD COLUMN IF NOT EXISTS delivery_location_name TEXT,
ADD COLUMN IF NOT EXISTS packaging_info TEXT,
ADD COLUMN IF NOT EXISTS availability_date DATE,

-- colonnes de visuels et documentation
ADD COLUMN IF NOT EXISTS product_video TEXT,
ADD COLUMN IF NOT EXISTS detail_photos TEXT[],
ADD COLUMN IF NOT EXISTS documentation TEXT[];

-- ========================================
-- 3. Créer les index manquants
-- ========================================

-- Index pour categories
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON public.categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_active ON public.categories(is_active);
CREATE INDEX IF NOT EXISTS idx_categories_position ON public.categories(position_order);
CREATE INDEX IF NOT EXISTS idx_categories_id_uuid ON public.categories(id_uuid);

-- Index pour announcements
CREATE INDEX IF NOT EXISTS idx_announcements_user_id ON public.announcements(user_id);
CREATE INDEX IF NOT EXISTS idx_announcements_category_id ON public.announcements(category_id);
CREATE INDEX IF NOT EXISTS idx_announcements_subcategory_id ON public.announcements(subcategory_id);
CREATE INDEX IF NOT EXISTS idx_announcements_status ON public.announcements(status);
CREATE INDEX IF NOT EXISTS idx_announcements_wilaya ON public.announcements(wilaya);
CREATE INDEX IF NOT EXISTS idx_announcements_price ON public.announcements(price);
CREATE INDEX IF NOT EXISTS idx_announcements_created_at ON public.announcements(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_announcements_expires_at ON public.announcements(expires_at);
CREATE INDEX IF NOT EXISTS idx_announcements_urgent ON public.announcements(is_urgent) WHERE is_urgent = true;

-- ========================================
-- 4. Mettre à jour les fonctions et triggers
-- ========================================

-- Fonction pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour incrémenter les vues
CREATE OR REPLACE FUNCTION public.increment_view_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET view_count = view_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour incrémenter les contacts
CREATE OR REPLACE FUNCTION public.increment_contact_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET contact_count = contact_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;

-- Triggers pour updated_at
DROP TRIGGER IF EXISTS update_categories_updated_at ON public.categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON public.categories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_announcements_updated_at ON public.announcements;
CREATE TRIGGER update_announcements_updated_at
    BEFORE UPDATE ON public.announcements
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_user_drafts_updated_at ON public.user_drafts;
CREATE TRIGGER update_user_drafts_updated_at
    BEFORE UPDATE ON public.user_drafts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ========================================
-- 5. Permissions de base
-- ========================================

-- S'assurer que les permissions sont correctes
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT SELECT ON public.announcements TO anon, authenticated;
GRANT SELECT ON public.user_drafts TO anon, authenticated;
GRANT SELECT ON public.announcement_favorites TO anon, authenticated;

-- ========================================
-- 6. Vérification finale
-- ========================================

-- Afficher un résumé des mises à jour
SELECT 'categories' as table_name, count(*) as column_count 
FROM information_schema.columns 
WHERE table_name = 'categories' AND table_schema = 'public'

UNION ALL

SELECT 'announcements' as table_name, count(*) as column_count 
FROM information_schema.columns 
WHERE table_name = 'announcements' AND table_schema = 'public'

UNION ALL

SELECT 'user_roles' as table_name, count(*) as column_count 
FROM information_schema.columns 
WHERE table_name = 'user_roles' AND table_schema = 'public';

-- ========================================
-- Mise à jour terminée !
-- ========================================