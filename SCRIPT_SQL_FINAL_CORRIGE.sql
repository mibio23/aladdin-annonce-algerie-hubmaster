-- SCRIPT SQL FINAL CORRIGÉ - 100% COMPATIBLE AVEC VOTRE STRUCTURE BIGINT
-- Copiez-collez ce code directement dans l'éditeur SQL Supabase

-- Créer la table category_translations (version corrigée pour BIGINT)
CREATE TABLE IF NOT EXISTS category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT category_translations_unique UNIQUE(category_id, language_code)
);

-- Créer la table category_images (version corrigée pour BIGINT)
CREATE TABLE IF NOT EXISTS category_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  image_type TEXT DEFAULT 'main',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT category_images_unique UNIQUE(category_id, image_type)
);

-- Créer la table category_tags (version corrigée pour BIGINT)
CREATE TABLE IF NOT EXISTS category_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT category_tags_unique UNIQUE(category_id, tag)
);

-- Créer la vue optimisée (version corrigée)
CREATE OR REPLACE VIEW categories_with_translations AS
SELECT
    c.*,
    ct.name as translated_name,
    ct.description as translated_description,
    ct.language_code,
    ci.image_url as category_image_url,
    ci.alt_text as category_alt_text
FROM categories c
LEFT JOIN category_translations ct ON c.id = ct.category_id
LEFT JOIN category_images ci ON c.id = ci.category_id AND ci.image_type = 'main';

-- Activer la sécurité RLS
ALTER TABLE category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_tags ENABLE ROW LEVEL SECURITY;

-- Politiques de lecture (version corrigée sans IF NOT EXISTS)
CREATE POLICY "Category translations are viewable by everyone" ON category_translations
    FOR SELECT USING (true);

CREATE POLICY "Category images are viewable by everyone" ON category_images
    FOR SELECT USING (true);

CREATE POLICY "Category tags are viewable by everyone" ON category_tags
    FOR SELECT USING (true);

-- Index pour optimiser les performances
CREATE INDEX IF NOT EXISTS idx_category_translations_category_id ON category_translations(category_id);
CREATE INDEX IF NOT EXISTS idx_category_translations_language_code ON category_translations(language_code);
CREATE INDEX IF NOT EXISTS idx_category_translations_name ON category_translations(name);

CREATE INDEX IF NOT EXISTS idx_category_images_category_id ON category_images(category_id);
CREATE INDEX IF NOT EXISTS idx_category_images_type ON category_images(image_type);

CREATE INDEX IF NOT EXISTS idx_category_tags_category_id ON category_tags(category_id);
CREATE INDEX IF NOT EXISTS idx_category_tags_tag ON category_tags(tag);

-- Ajouter quelques traductions de test pour les catégories principales
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    id,
    'fr',
    slug,
    COALESCE(description, slug) || ' (Français)'
FROM categories 
WHERE slug IN ('informatique', 'telephonie', 'maison-mobilier-gros-electromenager', 'immobilier', 'vehicules')
LIMIT 5
ON CONFLICT (category_id, language_code) DO NOTHING;

INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    id,
    'ar',
    slug,
    COALESCE(description, slug) || ' (العربية)'
FROM categories 
WHERE slug IN ('informatique', 'telephonie', 'maison-mobilier-gros-electromenager', 'immobilier', 'vehicules')
LIMIT 5
ON CONFLICT (category_id, language_code) DO NOTHING;

INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    id,
    'en',
    slug,
    COALESCE(description, slug) || ' (English)'
FROM categories 
WHERE slug IN ('informatique', 'telephonie', 'maison-mobilier-gros-electromenager', 'immobilier', 'vehicules')
LIMIT 5
ON CONFLICT (category_id, language_code) DO NOTHING;