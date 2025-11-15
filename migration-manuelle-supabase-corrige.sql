-- ========================================
-- Migration Manuelle des Tables Supabase (Version Corrigée)
-- ========================================
-- Exécutez ce script dans l'éditeur SQL du dashboard Supabase
-- Projet: smsvybphkdxzvgawzoru

-- ========================================
-- 1. Table des brouillons utilisateur (user_drafts)
-- ========================================

-- Create table for user drafts (auto-save functionality)
CREATE TABLE IF NOT EXISTS public.user_drafts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  draft_key TEXT NOT NULL,
  draft_data JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, draft_key)
);

-- Enable RLS
ALTER TABLE public.user_drafts ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Users can view their own drafts" ON public.user_drafts;
CREATE POLICY "Users can view their own drafts" 
  ON public.user_drafts 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own drafts" ON public.user_drafts;
CREATE POLICY "Users can insert their own drafts" 
  ON public.user_drafts 
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own drafts" ON public.user_drafts;
CREATE POLICY "Users can update their own drafts" 
  ON public.user_drafts 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own drafts" ON public.user_drafts;
CREATE POLICY "Users can delete their own drafts" 
  ON public.user_drafts 
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = user_id);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_drafts_user_id ON public.user_drafts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_drafts_key ON public.user_drafts(draft_key);
CREATE INDEX IF NOT EXISTS idx_user_drafts_updated_at ON public.user_drafts(updated_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_user_drafts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_user_drafts_updated_at ON public.user_drafts;
CREATE TRIGGER update_user_drafts_updated_at
  BEFORE UPDATE ON public.user_drafts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_user_drafts_updated_at();

-- ========================================
-- 2. Table des catégories (categories)
-- ========================================

-- Create categories table
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

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories
DROP POLICY IF EXISTS "Everyone can view active categories" ON public.categories;
CREATE POLICY "Everyone can view active categories" 
  ON public.categories 
  FOR SELECT 
  USING (is_active = true);

DROP POLICY IF EXISTS "Authenticated users can view all categories" ON public.categories;
CREATE POLICY "Authenticated users can view all categories" 
  ON public.categories 
  FOR SELECT 
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;
CREATE POLICY "Admins can manage categories" 
  ON public.categories 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON public.categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON public.categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_active ON public.categories(is_active);
CREATE INDEX IF NOT EXISTS idx_categories_position ON public.categories(position_order);

-- Function to update updated_at
CREATE OR REPLACE FUNCTION public.update_categories_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_categories_updated_at ON public.categories;
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_categories_updated_at();

-- Insert sample categories (only if table is empty)
INSERT INTO public.categories (name, slug, description, icon, position_order) VALUES
  ('Véhicules', 'vehicules', 'Voitures, motos, vélos et autres moyens de transport', '🚗', 1),
  ('Immobilier', 'immobilier', 'Appartements, maisons, terrains et locations', '🏠', 2),
  ('Informatique', 'informatique', 'Ordinateurs, smartphones et accessoires', '💻', 3),
  ('Emploi', 'emploi', 'Offres d''emploi et recherches de travail', '💼', 4),
  ('Services', 'services', 'Services professionnels et particuliers', '🔧', 5),
  ('Mode', 'mode', 'Vêtements, chaussures et accessoires', '👗', 6),
  ('Maison', 'maison', 'Meubles, électroménager et décoration', '🏠', 7),
  ('Loisirs', 'loisirs', 'Sports, hobbies et équipements', '⚽', 8)
ON CONFLICT DO NOTHING;

-- Insert sample subcategories (only if table is empty)
INSERT INTO public.categories (name, slug, description, icon, parent_id, position_order) VALUES
  -- Véhicules subcategories
  ('Voitures', 'voitures', 'Voitures d''occasion et neuves', '🚗', (SELECT id FROM public.categories WHERE slug = 'vehicules' LIMIT 1), 1),
  ('Motos', 'motos', 'Motos et scooters', '🏍️', (SELECT id FROM public.categories WHERE slug = 'vehicules' LIMIT 1), 2),
  ('Pièces détachées', 'pieces-detachees', 'Pièces et accessoires pour véhicules', '⚙️', (SELECT id FROM public.categories WHERE slug = 'vehicules' LIMIT 1), 3),
  
  -- Immobilier subcategories  
  ('Appartements', 'appartements', 'Vente et location d''appartements', '🏢', (SELECT id FROM public.categories WHERE slug = 'immobilier' LIMIT 1), 1),
  ('Maisons', 'maisons', 'Vente et location de maisons', '🏡', (SELECT id FROM public.categories WHERE slug = 'immobilier' LIMIT 1), 2),
  ('Terrains', 'terrains', 'Terrains à bâtir et agricultures', '🏞️', (SELECT id FROM public.categories WHERE slug = 'immobilier' LIMIT 1), 3)
ON CONFLICT DO NOTHING;

-- ========================================
-- 3. Table des rôles utilisateur (user_roles)
-- ========================================

-- Create user_roles table for admin security
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'user')),
  granted_by UUID REFERENCES auth.users(id),
  granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  UNIQUE(user_id, role)
);

-- Enable RLS for user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles" 
  ON public.user_roles 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
CREATE POLICY "Admins can view all roles" 
  ON public.user_roles 
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
CREATE POLICY "Admins can manage roles" 
  ON public.user_roles 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- ========================================
-- 4. Table des annonces (announcements)
-- ========================================

-- Create announcements table
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
  images TEXT[], -- Array of image URLs
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

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Everyone can view active announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can view their own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Authenticated users can create announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can update their own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Users can delete their own announcements" ON public.announcements;
DROP POLICY IF EXISTS "Admins can manage all announcements" ON public.announcements;

-- RLS Policies for announcements
CREATE POLICY "Everyone can view active announcements" 
  ON public.announcements 
  FOR SELECT 
  USING (status = 'active' AND expires_at > now());

CREATE POLICY "Users can view their own announcements" 
  ON public.announcements 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create announcements" 
  ON public.announcements 
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own announcements" 
  ON public.announcements 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own announcements" 
  ON public.announcements 
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all announcements" 
  ON public.announcements 
  FOR ALL 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- Indexes for performance
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

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_announcements_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_announcements_updated_at ON public.announcements;
CREATE TRIGGER update_announcements_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW
  EXECUTE FUNCTION public.update_announcements_updated_at();

-- Function to increment view count
CREATE OR REPLACE FUNCTION public.increment_view_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET view_count = view_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;

-- Function to increment contact count
CREATE OR REPLACE FUNCTION public.increment_contact_count(announcement_uuid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.announcements 
  SET contact_count = contact_count + 1 
  WHERE id = announcement_uuid;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 5. Table des favoris d'annonces (announcement_favorites)
-- ========================================

-- Create announcement_favorites table
CREATE TABLE IF NOT EXISTS public.announcement_favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, announcement_id)
);

-- Enable RLS
ALTER TABLE public.announcement_favorites ENABLE ROW LEVEL SECURITY;

-- RLS Policies for favorites
DROP POLICY IF EXISTS "Users can manage their own favorites" ON public.announcement_favorites;
CREATE POLICY "Users can manage their own favorites" 
  ON public.announcement_favorites 
  FOR ALL 
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.announcement_favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_announcement_id ON public.announcement_favorites(announcement_id);

-- ========================================
-- 6. Table des vues d'annonces (announcement_views)
-- ========================================

-- Create announcement_views table for analytics
CREATE TABLE IF NOT EXISTS public.announcement_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_address INET,
  user_agent TEXT,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.announcement_views ENABLE ROW LEVEL SECURITY;

-- RLS Policies for views
DROP POLICY IF EXISTS "Everyone can insert views" ON public.announcement_views;
CREATE POLICY "Everyone can insert views" 
  ON public.announcement_views 
  FOR INSERT 
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view all views" ON public.announcement_views;
CREATE POLICY "Admins can view all views" 
  ON public.announcement_views 
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
      AND is_active = true
    )
  );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_views_announcement_id ON public.announcement_views(announcement_id);
CREATE INDEX IF NOT EXISTS idx_views_viewed_at ON public.announcement_views(viewed_at DESC);

-- ========================================
-- 7. Permissions finales
-- ========================================

-- Permissions pour les bannières publicitaires (si elles existent)
GRANT SELECT ON public.advertising_banners TO anon, authenticated;
GRANT SELECT ON public.advertising_banner_translations TO anon, authenticated;

-- Permissions pour les annonces
GRANT SELECT ON public.announcements TO anon, authenticated;

-- Permissions pour les catégories
GRANT SELECT ON public.categories TO anon, authenticated;

-- Permissions pour les boutiques (si elles existent)
GRANT SELECT ON public.shops TO anon, authenticated;
GRANT SELECT ON public.shop_translations TO anon, authenticated;
GRANT SELECT ON public.shop_images TO anon, authenticated;

-- ========================================
-- 8. Vue sécurisée des annonces
-- ========================================

-- Create or replace the announcements_safe view
DROP VIEW IF EXISTS public.announcements_safe CASCADE;

CREATE OR REPLACE VIEW public.announcements_safe
WITH (security_invoker = true)
AS
SELECT 
  a.id,
  a.title,
  a.description,
  a.price,
  a.currency,
  a.wilaya,
  a.commune,
  a.address,
  a.images,
  a.category_id,
  a.subcategory_id,
  a.user_id,
  a.created_at,
  a.updated_at,
  a.expires_at,
  a.condition,
  a.status,
  a.is_urgent,
  a.is_negotiable,
  a.is_featured,
  a.view_count,
  a.contact_count,
  a.brand,
  a.model,
  a.color,
  a.dimensions,
  a.weight,
  a.purchase_year,
  a.has_invoice,
  a.warranty_duration,
  a.included_accessories,
  a.selling_reason,
  a.cash_discount,
  a.exchange_possible,
  a.original_price,
  a.delivery_available,
  a.delivery_areas,
  a.delivery_fees,
  a.delivery_location_name,
  a.packaging_info,
  a.availability_date,
  a.product_video,
  a.detail_photos,
  a.documentation,
  -- Return NULL for phone_number - masking happens in application
  NULL::text as phone_number,
  -- Add phone_number_masked field that app can use
  CASE 
    WHEN a.phone_number IS NOT NULL THEN '**********'
    ELSE NULL
  END as phone_number_masked
FROM public.announcements a
WHERE a.status = 'active' AND a.expires_at > now();

COMMENT ON VIEW public.announcements_safe IS 
'Vue sécurisée des annonces actives. Les numéros de téléphone ne sont pas exposés. Utilisez get_announcement_with_protected_contact() pour accéder aux détails avec protection appropriée.';

-- Grant permissions on the view
GRANT SELECT ON public.announcements_safe TO anon, authenticated;

-- ========================================
-- Migration terminée!
-- ========================================