-- ========================================
-- Migration Simplifiée - Étape par Étape
-- ========================================

-- ========================================
-- ÉTAPE 1: Tables de base (sans politiques complexes)
-- ========================================

-- 1. Table des catégories (d'abord, car d'autres tables en dépendent)
CREATE TABLE IF NOT EXISTS public.categories (
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

-- 2. Table des rôles utilisateur
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'user')),
  granted_by UUID REFERENCES auth.users(id),
  granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  UNIQUE(user_id, role)
);

-- 3. Table des annonces
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(12, 2),
  currency TEXT DEFAULT 'DZD',
  condition TEXT CHECK (condition IN ('neuf', 'tres_bon_etat', 'bon_etat', 'acceptable', 'usage')),
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  subcategory_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  wilaya TEXT NOT NULL,
  commune TEXT,
  address TEXT,
  phone_number TEXT,
  email TEXT,
  images TEXT[],
  is_urgent BOOLEAN DEFAULT false,
  is_negotiable BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  contact_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'deleted', 'expired')),
  expires_at TIMESTAMPTZ DEFAULT (now() + INTERVAL '30 days'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Product details
  brand TEXT,
  model TEXT,
  color TEXT,
  dimensions TEXT,
  weight TEXT,
  purchase_year INTEGER,
  
  -- History and condition
  has_invoice BOOLEAN DEFAULT false,
  warranty_duration TEXT,
  included_accessories TEXT[],
  selling_reason TEXT,
  
  -- Price and negotiation
  cash_discount NUMERIC(5, 2),
  exchange_possible BOOLEAN DEFAULT false,
  original_price NUMERIC(12, 2),
  
  -- Logistics and delivery
  delivery_available BOOLEAN DEFAULT false,
  delivery_areas TEXT[],
  delivery_fees NUMERIC(8, 2),
  delivery_location_name TEXT,
  packaging_info TEXT,
  availability_date DATE,
  
  -- Visuals and documentation
  product_video TEXT,
  detail_photos TEXT[],
  documentation TEXT[]
);

-- 4. Table des brouillons utilisateur
CREATE TABLE IF NOT EXISTS public.user_drafts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  draft_key TEXT NOT NULL,
  draft_data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, draft_key)
);

-- 5. Table des favoris
CREATE TABLE IF NOT EXISTS public.announcement_favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, announcement_id)
);

-- 6. Table des vues
CREATE TABLE IF NOT EXISTS public.announcement_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ========================================
-- ÉTAPE 2: Index de performance
-- ========================================

-- Index pour categories
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON public.categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_active ON public.categories(is_active);
CREATE INDEX IF NOT EXISTS idx_categories_position ON public.categories(position_order);

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
CREATE INDEX IF NOT EXISTS idx_announcements_featured ON public.announcements(is_featured) WHERE is_featured = true;

-- Index pour user_drafts
CREATE INDEX IF NOT EXISTS idx_user_drafts_user_id ON public.user_drafts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_drafts_key ON public.user_drafts(draft_key);
CREATE INDEX IF NOT EXISTS idx_user_drafts_updated_at ON public.user_drafts(updated_at DESC);

-- Index pour favorites
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.announcement_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_announcement_id ON public.announcement_favorites(announcement_id);

-- Index pour views
CREATE INDEX IF NOT EXISTS idx_views_announcement_id ON public.announcement_views(announcement_id);
CREATE INDEX IF NOT EXISTS idx_views_viewed_at ON public.announcement_views(viewed_at DESC);

-- ========================================
-- ÉTAPE 3: Fonctions utilitaires
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

-- ========================================
-- ÉTAPE 4: Triggers pour updated_at
-- ========================================

-- Trigger pour categories
DROP TRIGGER IF EXISTS update_categories_updated_at ON public.categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON public.categories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger pour announcements
DROP TRIGGER IF EXISTS update_announcements_updated_at ON public.announcements;
CREATE TRIGGER update_announcements_updated_at
    BEFORE UPDATE ON public.announcements
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger pour user_drafts
DROP TRIGGER IF EXISTS update_user_drafts_updated_at ON public.user_drafts;
CREATE TRIGGER update_user_drafts_updated_at
    BEFORE UPDATE ON public.user_drafts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ========================================
-- ÉTAPE 5: Données initiales
-- ========================================

-- Insert categories de base
INSERT INTO public.categories (name, slug, description, icon, position_order) VALUES
  ('Véhicules', 'vehicules', 'Voitures, motos, vélos et autres moyens de transport', '🚗', 1),
  ('Immobilier', 'immobilier', 'Appartements, maisons, terrains et locations', '🏠', 2),
  ('Informatique', 'informatique', 'Ordinateurs, smartphones et accessoires', '💻', 3),
  ('Emploi', 'emploi', 'Offres d''emploi et recherches de travail', '💼', 4),
  ('Services', 'services', 'Services professionnels et particuliers', '🔧', 5),
  ('Mode', 'mode', 'Vêtements, chaussures et accessoires', '👗', 6),
  ('Maison', 'maison', 'Meubles, électroménager et décoration', '🏠', 7),
  ('Loisirs', 'loisirs', 'Sports, hobbies et équipements', '⚽', 8)
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- ÉTAPE 6: Permissions de base
-- ========================================

-- Activer RLS sur toutes les tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcement_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcement_views ENABLE ROW LEVEL SECURITY;

-- Permissions de lecture pour tout le monde
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT SELECT ON public.announcements TO anon, authenticated;

-- Permissions pour les bannières (si elles existent)
GRANT SELECT ON public.advertising_banners TO anon, authenticated;
GRANT SELECT ON public.advertising_banner_translations TO anon, authenticated;

-- Permissions pour les boutiques (si elles existent)
GRANT SELECT ON public.shops TO anon, authenticated;
GRANT SELECT ON public.shop_translations TO anon, authenticated;
GRANT SELECT ON public.shop_images TO anon, authenticated;

-- ========================================
-- Migration de base terminée !
-- Les politiques RLS seront ajoutées séparément
-- ========================================