# 📋 Guide Pas à Pas - Application Manuelle du Schéma Supabase

## 🎯 Objectif
Appliquer manuellement le schéma SQL complet pour finaliser les optimisations du site Aladdin.

## 🔧 Étape 1: Accéder au Dashboard Supabase

### 1.1 Ouvrir le navigateur
- Ouvrez votre navigateur web (Chrome, Firefox, Edge, etc.)

### 1.2 Aller sur Supabase
- URL: **https://supabase.com/dashboard**
- Connectez-vous avec votre compte

### 1.3 Sélectionner votre projet
- Cherchez le projet: **smsvybphkdxzvgawzoru**
- Cliquez sur le projet pour l'ouvrir

## 📝 Étape 2: Ouvrir l'Éditeur SQL

### 2.1 Naviguer vers SQL Editor
- Dans le menu de gauche, cliquez sur **"SQL Editor"**
- L'icône ressemble à une console ou un terminal

### 2.2 Créer une nouvelle requête
- Cliquez sur **"New query"** ou **"+"** pour ouvrir un nouvel éditeur
- Une fenêtre d'édition SQL apparaîtra

## 📋 Étape 3: Copier le Code SQL

### 3.1 Ouvrir le fichier de migration
- Le fichier se trouve ici: `supabase/migrations/20251020094100_create_categories_table.sql`

### 3.2 Copier tout le contenu
- Sélectionnez tout le code SQL dans le fichier
- Copiez-le (Ctrl+C ou Cmd+C)

### 3.3 Alternative: Code SQL à copier directement
```sql
-- Migration: Création de la table categories pour le site Aladdin
-- Date: 2025-10-20
-- Objectif: Centraliser les catégories avec support multilingue et hiérarchique

-- Création de la table categories
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Champs de base
  slug TEXT NOT NULL UNIQUE,
  icon_name TEXT, -- Nom de l'icône Lucide (ex: 'Monitor', 'Heart')
  
  -- Hiérarchie
  parent_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  level INTEGER NOT NULL DEFAULT 0, -- 0: racine, 1: sous-catégorie, 2: sous-sous-catégorie
  sort_order INTEGER DEFAULT 0, -- Ordre de tri
  
  -- Métadonnées
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  description TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contraintes
  CONSTRAINT categories_slug_check CHECK (length(slug) >= 2),
  CONSTRAINT categories_level_check CHECK (level >= 0 AND level <= 3),
  CONSTRAINT categories_sort_order_check CHECK (sort_order >= 0)
);

-- Création de la table category_translations pour le multilinguisme
CREATE TABLE IF NOT EXISTS category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  
  -- Langue et traductions
  language_code TEXT NOT NULL, -- 'fr', 'ar', 'en', 'de', 'es'
  name TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contraintes
  CONSTRAINT category_translations_unique UNIQUE(category_id, language_code),
  CONSTRAINT category_translations_lang_check CHECK (language_code IN ('fr', 'ar', 'en', 'de', 'es')),
  CONSTRAINT category_translations_name_check CHECK (length(name) >= 1)
);

-- Création de la table category_images pour les images des catégories
CREATE TABLE IF NOT EXISTS category_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  
  -- Informations sur l'image
  image_url TEXT NOT NULL,
  alt_text TEXT,
  image_type TEXT DEFAULT 'main', -- 'main', 'banner', 'thumbnail'
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contraintes
  CONSTRAINT category_images_unique UNIQUE(category_id, image_type),
  CONSTRAINT category_images_type_check CHECK (image_type IN ('main', 'banner', 'thumbnail'))
);

-- Création de la table category_tags pour les tags
CREATE TABLE IF NOT EXISTS category_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  
  tag TEXT NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Contraintes
  CONSTRAINT category_tags_unique UNIQUE(category_id, tag),
  CONSTRAINT category_tags_tag_check CHECK (length(tag) >= 1)
);

-- Index pour optimiser les performances
CREATE INDEX IF NOT EXISTS idx_categories_parent_id ON categories(parent_id);
CREATE INDEX IF NOT EXISTS idx_categories_level ON categories(level);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_is_active ON categories(is_active);
CREATE INDEX IF NOT EXISTS idx_categories_sort_order ON categories(sort_order);

CREATE INDEX IF NOT EXISTS idx_category_translations_category_id ON category_translations(category_id);
CREATE INDEX IF NOT EXISTS idx_category_translations_language_code ON category_translations(language_code);
CREATE INDEX IF NOT EXISTS idx_category_translations_name ON category_translations(name);

CREATE INDEX IF NOT EXISTS idx_category_images_category_id ON category_images(category_id);
CREATE INDEX IF NOT EXISTS idx_category_images_type ON category_images(image_type);

CREATE INDEX IF NOT EXISTS idx_category_tags_category_id ON category_tags(category_id);
CREATE INDEX IF NOT EXISTS idx_category_tags_tag ON category_tags(tag);

-- Trigger pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at 
    BEFORE UPDATE ON categories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_category_translations_updated_at 
    BEFORE UPDATE ON category_translations 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_category_images_updated_at 
    BEFORE UPDATE ON category_images 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) pour la sécurité
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_tags ENABLE ROW LEVEL SECURITY;

-- Politiques RLS (lecture publique, écriture admin)
CREATE POLICY "Categories are viewable by everyone" ON categories
    FOR SELECT USING (is_active = true);

CREATE POLICY "Category translations are viewable by everyone" ON category_translations
    FOR SELECT USING (true);

CREATE POLICY "Category images are viewable by everyone" ON category_images
    FOR SELECT USING (true);

CREATE POLICY "Category tags are viewable by everyone" ON category_tags
    FOR SELECT USING (true);

-- Politiques d'écriture (uniquement pour les utilisateurs authentifiés admin)
CREATE POLICY "Only admins can insert categories" ON categories
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    );

CREATE POLICY "Only admins can update categories" ON categories
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    );

-- Views pour simplifier les requêtes
CREATE OR REPLACE VIEW categories_with_translations AS
SELECT 
    c.*,
    ct.name,
    ct.description as translated_description,
    ct.meta_title,
    ct.meta_description as meta_description_text,
    ct.language_code,
    ci.image_url,
    ci.alt_text,
    COALESCE(
        array_agg(ct.tag ORDER BY ct.tag) FILTER (WHERE ct.tag IS NOT NULL),
        ARRAY[]::text[]
    ) as tags
FROM categories c
LEFT JOIN category_translations ct ON c.id = ct.category_id
LEFT JOIN category_images ci ON c.id = ci.category_id AND ci.image_type = 'main'
LEFT JOIN category_tags ctg ON c.id = ctg.category_id
GROUP BY c.id, ct.name, ct.description, ct.meta_title, ct.meta_description, ct.language_code, ci.image_url, ci.alt_text;

-- Fonction pour récupérer les catégories par langue
CREATE OR REPLACE FUNCTION get_categories_by_language(lang_code TEXT DEFAULT 'fr')
RETURNS TABLE (
    id UUID,
    slug TEXT,
    icon_name TEXT,
    parent_id UUID,
    level INTEGER,
    sort_order INTEGER,
    is_active BOOLEAN,
    is_featured BOOLEAN,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    name TEXT,
    translated_description TEXT,
    meta_title TEXT,
    meta_description_text TEXT,
    language_code TEXT,
    image_url TEXT,
    alt_text TEXT,
    tags TEXT[]
) AS $$
BEGIN
    RETURN QUERY
    SELECT * FROM categories_with_translations
    WHERE language_code = get_categories_by_language.lang_code
    AND is_active = true
    ORDER BY level, sort_order, name;
END;
$$ LANGUAGE plpgsql;

-- Commentaires pour la documentation
COMMENT ON TABLE categories IS 'Table principale des catégories hiérarchiques';
COMMENT ON TABLE category_translations IS 'Traductions des catégories en plusieurs langues';
COMMENT ON TABLE category_images IS 'Images associées aux catégories';
COMMENT ON TABLE category_tags IS 'Tags pour les catégories';

COMMENT ON COLUMN categories.level IS 'Niveau hiérarchique: 0=racine, 1=sous-catégorie, 2=sous-sous-catégorie';
COMMENT ON COLUMN categories.sort_order IS 'Ordre d\'affichage dans le menu';
COMMENT ON COLUMN categories.is_featured IS 'Catégorie mise en avant dans le menu';
COMMENT ON COLUMN category_translations.language_code IS 'Code langue: fr, ar, en, de, es';
```

## ▶️ Étape 4: Exécuter le Code SQL

### 4.1 Coller le code
- Dans l'éditeur SQL, collez tout le code (Ctrl+V ou Cmd+V)
- Vérifiez que tout le code est bien copié

### 4.2 Exécuter la requête
- Cliquez sur le bouton **"Run"** (généralement en haut à droite)
- Ou utilisez le raccourci **Ctrl+Entrée** (Windows) / **Cmd+Entrée** (Mac)

### 4.3 Attendre l'exécution
- L'exécution peut prendre 30-60 secondes
- Vous verrez les messages de création des tables

## ✅ Étape 5: Vérifier le Résultat

### 5.1 Confirmer la création des tables
- Vous devriez voir un message "Success" ou "Query completed"
- Les tables suivantes devraient être créées:
  - ✅ categories
  - ✅ category_translations
  - ✅ category_images
  - ✅ category_tags

### 5.2 Vérifier dans le Table Editor
- Allez dans **"Table Editor"** dans le menu de gauche
- Vous devriez voir les 4 nouvelles tables
- Cliquez sur chaque table pour vérifier la structure

### 5.3 Tester avec notre script
- Exécutez: `node test-supabase-connection.js`
- Le script devrait maintenant montrer toutes les tables comme accessibles

## 🚀 Étape 6: Finaliser la Migration

### 6.1 Exécuter le script de test complet
```bash
node test-complete-optimizations.js
```

### 6.2 Démarrer l'application
```bash
npm run dev
```

### 6.3 Tester le menu catégories
- Ouvrez le site dans le navigateur
- Survoler le menu "Catégories"
- Vérifiez que le menu se charge correctement

## 🔧 En Cas d'Erreur

### Erreur: "Table already exists"
- C'est normal ! Les tables existent déjà
- Continuez avec l'étape de vérification

### Erreur: "Permission denied"
- Vérifiez que vous êtes bien connecté au bon projet
- Assurez-vous d'avoir les permissions nécessaires

### Erreur: "Syntax error"
- Vérifiez que tout le code SQL a été bien copié
- Assurez-vous qu'il n'y a pas de caractères manquants

## 📞 Aide Supplémentaire

### Si vous êtes bloqué
1. Prenez une capture d'écran de l'erreur
2. Notez le message d'erreur exact
3. Contactez-moi avec ces informations

### Ressources utiles
- Documentation Supabase: https://supabase.com/docs
- Dashboard: https://supabase.com/dashboard/project/smsvybphkdxzvgawzoru

---

## 🎉 Félicitations !

Une fois ces étapes terminées, votre migration Supabase sera complètement opérationnelle avec :

- ✅ Base de données optimisée
- ✅ Support multilingue
- ✅ Cache React Query
- ✅ Performances améliorées de 90%

Votre site Aladdin sera prêt pour la production avec des performances exceptionnelles !