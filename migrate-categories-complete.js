// Script de migration complète des catégories vers Supabase (5 langues)
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration Supabase
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://smsvybphkdxzvgawzoru.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Mapping des langues
const LANGUAGE_MAP = {
  'french': 'fr',
  'arabic': 'ar',
  'english': 'en',
  'german': 'de',
  'spanish': 'es'
};

// Mapping complet des icônes Lucide
const ICON_MAP = {
  'Monitor': 'Monitor',
  'Laptop': 'Laptop',
  'Tv': 'Tv',
  'Mobile': 'Mobile',
  'Watch': 'Watch',
  'Headphones': 'Headphones',
  'Camera': 'Camera',
  'Gamepad2': 'Gamepad2',
  'Book': 'Book',
  'BookOpenCheck': 'BookOpenCheck',
  'Puzzle': 'Puzzle',
  'Heart': 'Heart',
  'Scissors': 'Scissors',
  'Sparkles': 'Sparkles',
  'Hand': 'Hand',
  'Activity': 'Activity',
  'Stethoscope': 'Stethoscope',
  'Home': 'Home',
  'Sofa': 'Sofa',
  'Sprout': 'Sprout',
  'Flower': 'Flower',
  'Hammer': 'Hammer',
  'Wrench': 'Wrench',
  'Truck': 'Truck',
  'Car': 'Car',
  'Baby': 'Baby',
  'User': 'User',
  'Users': 'Users',
  'Coins': 'Coins',
  'Briefcase': 'Briefcase',
  'Building': 'Building',
  'Gift': 'Gift',
  'PawPrint': 'PawPrint',
  'Dog': 'Dog',
  'Cat': 'Cat',
  'Art': 'Art',
  'Palette': 'Palette',
  'Calendar': 'Calendar',
  'Ticket': 'Ticket',
  'Utensils': 'Utensils',
  'ChefHat': 'ChefHat',
  'Plane': 'Plane',
  'MapPin': 'MapPin',
  'Bitcoin': 'Bitcoin',
  'Dumbbell': 'Dumbbell',
  'Search': 'Search',
  'Music': 'Music',
  'Guitar': 'Guitar',
  'Piano': 'Piano',
  'GraduationCap': 'GraduationCap',
  'Repeat': 'Repeat',
  'Archive': 'Archive',
  'Package': 'Package',
  'Shirt': 'Shirt',
  'ShoppingBag': 'ShoppingBag'
};

// Fonction pour extraire le nom de l'icône depuis le JSX
function extractIconName(content, categoryName) {
  // Chercher les patterns d'icône dans le contenu
  const iconPatterns = [
    /icon:\s*<(\w+)\s/,
    /icon={<(\w+)\s/,
    /icon:\s*(\w+)/
  ];

  for (const pattern of iconPatterns) {
    const match = content.match(pattern);
    if (match && match[1]) {
      const iconName = match[1];
      if (ICON_MAP[iconName]) {
        return iconName;
      }
    }
  }

  // Fallback par défaut
  console.warn(`⚠️  Icône non trouvée pour ${categoryName}, utilisation de 'Package'`);
  return 'Package';
}

// Fonction pour parser un fichier de catégorie
function parseCategoryFile(filePath, languageCode) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath, '.tsx');
    
    // Extraire le slug depuis le nom de fichier
    const slug = fileName.replace(/Category$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    
    // Extraire l'icône
    const iconName = extractIconName(content, fileName);
    
    // Extraire toutes les entrées name: "..."
    const nameMatches = [...content.matchAll(/name:\s*["']([^"']+)["']/g)];
    const names = nameMatches.map(match => match[1]);
    
    // Extraire les slugs
    const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
    const slugs = slugMatches.map(match => match[1]);
    
    if (names.length === 0) {
      return null;
    }

    // Première entrée = catégorie principale
    const mainCategory = {
      slug: slugs[0] || slug,
      name: names[0],
      icon: iconName,
      languageCode: languageCode,
      subcategories: []
    };

    // Parser la hiérarchie des sous-catégories
    let currentLevel1 = null;
    
    for (let i = 1; i < names.length; i++) {
      const subSlug = slugs[i] || `${slug}-sub-${i}`;
      const subName = names[i];
      
      // Détecter le niveau par l'indentation dans le contenu
      const nameContext = content.substring(
        content.indexOf(`name: "${subName}"`),
        content.indexOf(`name: "${subName}"`) + 200
      );
      
      const indentLevel = (nameContext.match(/\n\s*/)?.[0]?.length || 0) / 2;
      
      if (indentLevel <= 8) {
        // Niveau 1
        currentLevel1 = {
          slug: subSlug,
          name: subName,
          subcategories: []
        };
        mainCategory.subcategories.push(currentLevel1);
      } else if (currentLevel1) {
        // Niveau 2
        currentLevel1.subcategories.push({
          slug: subSlug,
          name: subName
        });
      }
    }

    return mainCategory;
  } catch (error) {
    console.error(`❌ Erreur lors du parsing de ${filePath}:`, error.message);
    return null;
  }
}

// Fonction pour charger toutes les catégories de tous les langages
async function loadAllCategories() {
  const categoriesDir = path.join(__dirname, 'src/data/categories/megaMenuStructures');
  const allCategories = new Map(); // Map<slug, Map<languageCode, categoryData>>

  console.log('📁 Chargement de toutes les catégories...\n');

  for (const [languageDir, languageCode] of Object.entries(LANGUAGE_MAP)) {
    const langPath = path.join(categoriesDir, languageDir);
    
    if (!fs.existsSync(langPath)) {
      console.warn(`⚠️  Répertoire non trouvé: ${langPath}`);
      continue;
    }

    const files = fs.readdirSync(langPath).filter(f => f.endsWith('.tsx') && f !== 'enrichedCategories.tsx');
    console.log(`📂 ${languageDir.toUpperCase()}: ${files.length} fichiers`);

    for (const file of files) {
      const filePath = path.join(langPath, file);
      const category = parseCategoryFile(filePath, languageCode);
      
      if (category) {
        if (!allCategories.has(category.slug)) {
          allCategories.set(category.slug, new Map());
        }
        allCategories.get(category.slug).set(languageCode, category);
      }
    }
  }

  console.log(`\n✅ Total: ${allCategories.size} catégories principales chargées`);
  return allCategories;
}

// Fonction pour insérer une catégorie dans Supabase
async function insertCategory(slug, icon, sortOrder, level = 0, parentId = null) {
  try {
    const { data, error } = await supabase
      .from('categories')
      .upsert({
        slug: slug,
        icon: icon,
        position_order: sortOrder,
        is_active: true,
        parent_id_uuid: parentId
      }, {
        onConflict: 'slug',
        ignoreDuplicates: false
      })
      .select()
      .single();

    if (error) {
      console.error(`❌ Erreur insertion catégorie ${slug}:`, error.message);
      return null;
    }

    return data;
  } catch (error) {
    console.error(`❌ Erreur critique insertion ${slug}:`, error.message);
    return null;
  }
}

// Fonction pour insérer une traduction
async function insertTranslation(categoryIdUuid, languageCode, name, description = null) {
  try {
    const { error } = await supabase
      .from('category_translations')
      .upsert({
        category_id: categoryIdUuid,
        language_code: languageCode,
        name: name,
        description: description
      }, {
        onConflict: 'category_id,language_code',
        ignoreDuplicates: false
      });

    if (error) {
      console.error(`❌ Erreur traduction ${languageCode} pour ${categoryIdUuid}:`, error.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`❌ Erreur critique traduction:`, error.message);
    return false;
  }
}

// Fonction principale de migration
async function migrateToSupabase() {
  console.log('🚀 MIGRATION COMPLÈTE DES CATÉGORIES VERS SUPABASE\n');
  console.log('=' .repeat(60));
  
  try {
    // Test connexion
    const { error: testError } = await supabase.from('categories').select('count').limit(1);
    if (testError) {
      console.error('❌ Erreur de connexion à Supabase:', testError.message);
      return;
    }
    console.log('✅ Connexion à Supabase établie\n');

    // Nettoyer les données existantes
    console.log('🧹 Nettoyage des données existantes...');
    await supabase.from('category_translations').delete().neq('id', 0);
    await supabase.from('categories').delete().neq('id', 0);
    console.log('✅ Nettoyage terminé\n');

    // Charger toutes les catégories
    const allCategories = await loadAllCategories();

    let stats = {
      categories: 0,
      subcategories_l1: 0,
      subcategories_l2: 0,
      translations: 0
    };

    console.log('\n📊 DÉBUT DE LA MIGRATION\n');
    console.log('=' .repeat(60));

    let sortOrder = 0;

    for (const [slug, languageMap] of allCategories.entries()) {
      console.log(`\n🔹 Traitement: ${slug}`);
      
      // Prendre les données françaises comme référence (ou première dispo)
      const referenceData = languageMap.get('fr') || languageMap.values().next().value;
      
      // Insérer la catégorie principale
      const mainCategory = await insertCategory(slug, referenceData.icon, sortOrder++, 0, null);
      
      if (!mainCategory) {
        console.error(`❌ Échec création de ${slug}`);
        continue;
      }

      stats.categories++;

      // Insérer les traductions pour toutes les langues
      for (const [langCode, catData] of languageMap.entries()) {
        const success = await insertTranslation(
          mainCategory.id_uuid,
          langCode,
          catData.name,
          catData.description || null
        );
        if (success) stats.translations++;
      }

      // Traiter les sous-catégories niveau 1
      for (const subcat1 of referenceData.subcategories) {
        const sub1 = await insertCategory(subcat1.slug, null, 0, 1, mainCategory.id_uuid);
        
        if (sub1) {
          stats.subcategories_l1++;

          // Traductions niveau 1
          for (const [langCode, catData] of languageMap.entries()) {
            const subcat1Translation = catData.subcategories.find(s => s.slug === subcat1.slug);
            if (subcat1Translation) {
              await insertTranslation(sub1.id_uuid, langCode, subcat1Translation.name);
              stats.translations++;
            }
          }

          // Sous-catégories niveau 2
          if (subcat1.subcategories) {
            for (const subcat2 of subcat1.subcategories) {
              const sub2 = await insertCategory(subcat2.slug, null, 0, 2, sub1.id_uuid);
              
              if (sub2) {
                stats.subcategories_l2++;

                // Traductions niveau 2
                for (const [langCode, catData] of languageMap.entries()) {
                  const subcat1Data = catData.subcategories.find(s => s.slug === subcat1.slug);
                  if (subcat1Data && subcat1Data.subcategories) {
                    const subcat2Translation = subcat1Data.subcategories.find(s => s.slug === subcat2.slug);
                    if (subcat2Translation) {
                      await insertTranslation(sub2.id_uuid, langCode, subcat2Translation.name);
                      stats.translations++;
                    }
                  }
                }
              }
            }
          }
        }
      }

      // Petite pause pour éviter de surcharger l'API
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    console.log('\n' + '='.repeat(60));
    console.log('🎉 MIGRATION TERMINÉE AVEC SUCCÈS!\n');
    console.log('📊 STATISTIQUES:');
    console.log(`   ✅ Catégories principales: ${stats.categories}`);
    console.log(`   ✅ Sous-catégories niveau 1: ${stats.subcategories_l1}`);
    console.log(`   ✅ Sous-catégories niveau 2: ${stats.subcategories_l2}`);
    console.log(`   ✅ Traductions créées: ${stats.translations}`);
    console.log(`   ✅ Total catégories: ${stats.categories + stats.subcategories_l1 + stats.subcategories_l2}`);
    console.log('=' .repeat(60));

  } catch (error) {
    console.error('\n❌ ERREUR CRITIQUE:', error);
  }
}

// Exécution
migrateToSupabase();
