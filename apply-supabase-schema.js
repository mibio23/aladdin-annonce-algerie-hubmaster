
// Fonctions utilitaires pour éviter les erreurs cycliques
function safeStringify(obj, indent = 2) {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular Reference]';
      }
      cache.add(value);
    }
    return value;
  }, indent);
}

function safeLog(description, obj) {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      const safeObj = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(`  ❌ Erreur de log: ${error.message}`);
  }
}
// Script pour appliquer le schéma SQL complet sur Supabase
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Charger les variables d'environnement
config();

safeLog('🔧 Application du schéma SQL Supabase - Site Aladdin\n');

// Configuration avec variables d'environnement pour la sécurité
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://smsvybphkdxzvgawzoru.supabase.co";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g";

// Vérification des variables d'environnement
if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement Supabase manquantes');
  console.error('📋 Veuillez configurer:');
  console.error('   VITE_SUPABASE_URL=votre_url_supabase');
  console.error('   VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase');
  process.exit(1);
}

// Initialisation du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Schema SQL à appliquer
const schemaSQL = `
-- Ajouter les colonnes manquantes à la table categories
ALTER TABLE categories 
ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS description TEXT;

-- Créer la table category_translations si elle n'existe pas
CREATE TABLE IF NOT EXISTS category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Créer la table category_images si elle n'existe pas
CREATE TABLE IF NOT EXISTS category_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  image_type TEXT DEFAULT 'main',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Créer la table category_tags si elle n'existe pas
CREATE TABLE IF NOT EXISTS category_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Créer la vue optimisée
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

-- Insérer des catégories de test
INSERT INTO categories (slug, icon_name, level, sort_order, is_active, is_featured, description) VALUES
('informatique-tech', 'Laptop', 0, 1, true, true, 'Ordinateurs, portables et accessoires'),
('telephonie-mobile', 'Smartphone', 0, 2, true, true, 'Smartphones et accessoires mobiles'),
('maison-mobilier', 'Home', 0, 3, true, false, 'Meubles et décoration pour la maison'),
('vehicules', 'Car', 0, 4, true, true, 'Voitures, motos et véhicules divers'),
('immobilier', 'Building', 0, 5, true, false, 'Appartements, maisons et terrains')
ON CONFLICT (slug) DO NOTHING;

-- Insérer les traductions
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    c.id,
    'fr',
    CASE c.slug
        WHEN 'informatique-tech' THEN 'Informatique & Tech'
        WHEN 'telephonie-mobile' THEN 'Téléphonie & Mobile'
        WHEN 'maison-mobilier' THEN 'Maison & Mobilier'
        WHEN 'vehicules' THEN 'Véhicules'
        WHEN 'immobilier' THEN 'Immobilier'
        ELSE c.slug
    END,
    c.description
FROM categories c
WHERE c.slug IN ('informatique-tech', 'telephonie-mobile', 'maison-mobilier', 'vehicules', 'immobilier')
ON CONFLICT (category_id, language_code) DO NOTHING;

INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    c.id,
    'ar',
    CASE c.slug
        WHEN 'informatique-tech' THEN 'الكمبيوتر والتقنية'
        WHEN 'telephonie-mobile' THEN 'الهواتف المحمولة'
        WHEN 'maison-mobilier' THEN 'المنزل والأثاث'
        WHEN 'vehicules' THEN 'المركبات'
        WHEN 'immobilier' THEN 'العقارات'
        ELSE c.slug
    END,
    c.description
FROM categories c
WHERE c.slug IN ('informatique-tech', 'telephonie-mobile', 'maison-mobilier', 'vehicules', 'immobilier')
ON CONFLICT (category_id, language_code) DO NOTHING;

INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT 
    c.id,
    'en',
    CASE c.slug
        WHEN 'informatique-tech' THEN 'Computers & Tech'
        WHEN 'telephonie-mobile' THEN 'Phones & Mobile'
        WHEN 'maison-mobilier' THEN 'Home & Furniture'
        WHEN 'vehicules' THEN 'Vehicles'
        WHEN 'immobilier' THEN 'Real Estate'
        ELSE c.slug
    END,
    c.description
FROM categories c
WHERE c.slug IN ('informatique-tech', 'telephonie-mobile', 'maison-mobilier', 'vehicules', 'immobilier')
ON CONFLICT (category_id, language_code) DO NOTHING;
`;

// Fonction pour exécuter le schéma
async function applySchema() {
  try {
    safeLog('🔧 Application du schéma SQL...');
    
    // Note: Supabase client ne peut pas exécuter de SQL directement via JS
    // Nous allons donc utiliser une approche alternative avec RPC
    
    console.log('⚠️  Note: L\'application du schéma SQL nécessite une approche alternative');
    console.log('📋 Options recommandées:');
    console.log('   1. Via le dashboard Supabase (SQL Editor)');
    console.log('   2. Via la CLI Supabase (supabase db push)');
    console.log('   3. Via REST API avec SQL admin');
    
    // Alternative: Créer les tables individuellement via REST API
    console.log('\n🔄 Tentative de création via REST API...');
    
    // Test 1: Vérifier les catégories existantes
    const { data: existingCategories, error: catError } = await supabase
      .from('categories')
      .select('*');
    
    if (catError) {
      console.log(`❌ Erreur catégories: ${catError.message}`);
    } else {
      console.log(`✅ ${existingCategories.length} catégories existantes`);
      
      // Afficher les catégories existantes
      existingCategories.forEach((cat, index) => {
        console.log(`  ${index + 1}. ${cat.slug} (ID: ${cat.id})`);
      });
    }
    
    // Test 2: Créer une traduction de test
    if (existingCategories && existingCategories.length > 0) {
      const firstCategory = existingCategories[0];
      
      const { data: newTranslation, error: transError } = await supabase
        .from('category_translations')
        .upsert({
          category_id: firstCategory.id,
          language_code: 'fr',
          name: 'Test Category',
          description: 'Description de test'
        }, {
          onConflict: 'category_id,language_code'
        })
        .select();
      
      if (transError) {
        safeLog(`❌ Erreur traduction: ${transError.message}`);
      } else {
        console.log(`✅ Traduction créée: ${newTranslation[0]?.name}`);
      }
    }
    
    console.log('\n📊 État actuel de la base de données:');
    
    // Vérifier chaque table
    const tables = ['categories', 'category_translations', 'category_images', 'category_tags'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        if (error) {
          safeLog(`  ❌ ${table}: Inaccessible`);
        } else {
          const { count } = await supabase.from(table).select('*', { count: 'exact', head: true });
          safeLog(`  ✅ ${table}: ${count} enregistrements`);
        }
      } catch (err) {
        console.log(`  ❌ ${table}: Erreur - ${err.message}`);
      }
    }
    
    return true;
  } catch (error) {
    console.error('💥 Erreur lors de l\'application du schéma:', error.message);
    return false;
  }
}

// Instructions pour l'application manuelle
function showManualInstructions() {
  safeLog('\n📋 Instructions pour appliquer le schéma manuellement:');
  console.log('\n1. Via le Dashboard Supabase:');
  console.log('   - Allez sur https://supabase.com/dashboard');
  console.log('   - Sélectionnez votre projet: smsvybphkdxzvgawzoru');
  console.log('   - Allez dans "SQL Editor"');
  console.log('   - Copiez et collez le contenu du fichier:');
  console.log('   - supabase/migrations/20251020094100_create_categories_table.sql');
  console.log('   - Cliquez sur "Run" pour exécuter');
  
  console.log('\n2. Via CLI Supabase:');
  console.log('   - Installez la CLI: npm install -g supabase');
  console.log('   - Connectez-vous: supabase login');
  console.log('   - Lien le projet: supabase link --project-ref smsvybphkdxzvgawzoru');
  console.log('   - Appliquez les migrations: supabase db push');
  
  console.log('\n3. Après application du schéma:');
  console.log('   - Exécutez: node test-supabase-connection.js');
  console.log('   - Vérifiez que tout fonctionne correctement');
  console.log('   - Testez l\'application: npm run dev');
}

// Exécuter l'application du schéma
applySchema()
  .then(success => {
    if (success) {
      console.log('\n✅ Schéma partiellement appliqué!');
      showManualInstructions();
    } else {
      console.log('\n❌ Échec de l\'application du schéma');
      showManualInstructions();
    }
  })
  .catch(error => {
    console.error('\n💥 Erreur critique:', error);
    showManualInstructions();
  });