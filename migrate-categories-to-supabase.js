// Script de migration des catégories vers Supabase
// Ce script transfère toutes les catégories existantes vers la base de données Supabase

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Configuration
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement Supabase manquantes');
  console.log('Veuillez définir VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

// Initialisation du client Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Mapping des icônes Lucide vers les noms de composants
const iconMapping = {
  'Monitor': 'Monitor',
  'Book': 'Book', 
  'Puzzle': 'Puzzle',
  'Heart': 'Heart',
  'Scissors': 'Scissors',
  'Sparkles': 'Sparkles',
  'Hand': 'Hand',
  'Activity': 'Activity',
  'Home': 'Home',
  'Sprout': 'Sprout',
  'Hammer': 'Hammer',
  'Truck': 'Truck',
  'Baby': 'Baby',
  'User': 'User',
  'BookOpenCheck': 'BookOpenCheck',
  'Coins': 'Coins',
  'Wrench': 'Wrench',
  'Gift': 'Gift',
  'PawPrint': 'PawPrint',
  'Art': 'Art',
  'Calendar': 'Calendar',
  'Utensils': 'Utensils',
  'Plane': 'Plane',
  'Bitcoin': 'Bitcoin',
  'Dumbbell': 'Dumbbell',
  'Search': 'Search',
  'Briefcase': 'Briefcase',
  'Camera': 'Camera',
  'Car': 'Car',
  'Gamepad2': 'Gamepad2',
  'Headphones': 'Headphones',
  'Laptop': 'Laptop',
  'Mobile': 'Mobile',
  'Tv': 'Tv',
  'Watch': 'Watch'
};

// Fonction pour extraire le nom de l'icône à partir du composant React
function extractIconName(iconComponent) {
  if (!iconComponent || typeof iconComponent !== 'object') return null;
  
  // Extraire le nom du type de composant
  const componentName = iconComponent.type?.name || iconComponent.type;
  
  // Chercher dans le mapping
  for (const [key, value] of Object.entries(iconMapping)) {
    if (componentName?.includes(key) || componentName?.includes(value)) {
      return value;
    }
  }
  
  return null;
}

// Fonction pour charger les catégories depuis les fichiers
function loadCategoriesFromFiles() {
  const categoriesDir = 'src/data/categories/megaMenuStructures';
  const languages = ['fr', 'ar', 'en', 'de', 'es'];
  const allCategories = new Map();
  
  console.log('📁 Chargement des catégories depuis les fichiers...');
  
  // Charger les catégories françaises comme référence
  try {
    const frenchMenuPath = path.join(categoriesDir, 'frenchMegaMenu.tsx');
    const frenchContent = fs.readFileSync(frenchMenuPath, 'utf8');
    
    // Extraire les catégories du fichier français
    const importMatch = frenchContent.match(/import { categoryMenu } from ["']\.\.\/\.\.\/menuStructureData["'];/);
    if (importMatch) {
      const menuDataPath = 'src/data/menuStructureData.tsx';
      const menuContent = fs.readFileSync(menuDataPath, 'utf8');
      
      // Parser le contenu pour extraire les catégories
      eval(menuContent.replace('import React from "react";', ''));
      
      if (typeof categoryMenu !== 'undefined') {
        categoryMenu.forEach((category, index) => {
          const categoryId = `cat_${category.slug}_${Date.now()}_${index}`;
          allCategories.set(categoryId, {
            id: categoryId,
            slug: category.slug,
            icon_name: extractIconName(category.icon),
            level: 0,
            sort_order: index,
            is_active: true,
            is_featured: index < 10, // Les 10 premières sont featured
            description: category.description,
            subcategories: category.subcategories || [],
            originalData: category
          });
        });
      }
    }
  } catch (error) {
    console.error('❌ Erreur lors du chargement des catégories françaises:', error);
  }
  
  console.log(`✅ ${allCategories.size} catégories principales chargées`);
  return allCategories;
}

// Fonction pour charger les traductions
function loadTranslations() {
  const translationsDir = 'src/data/categories/megaMenuStructures';
  const languages = ['arabic', 'english', 'german', 'spanish'];
  const translations = new Map();
  
  console.log('🌍 Chargement des traductions...');
  
  languages.forEach(lang => {
    try {
      const langDir = path.join(translationsDir, lang);
      if (fs.existsSync(langDir)) {
        const files = fs.readdirSync(langDir).filter(f => f.endsWith('.tsx'));
        
        files.forEach(file => {
          const filePath = path.join(langDir, file);
          const content = fs.readFileSync(filePath, 'utf8');
          
          // Extraire les traductions (simplifié)
          const nameMatches = content.match(/name:\s*["']([^"']+)["']/g);
          const names = nameMatches?.map(match => match.match(/["']([^"']+)["']/)?.[1]) || [];
          
          if (names.length > 0) {
            const categoryId = file.replace('.tsx', '');
            if (!translations.has(categoryId)) {
              translations.set(categoryId, {});
            }
            translations.get(categoryId)[lang] = names;
          }
        });
      }
    } catch (error) {
      console.warn(`⚠️  Erreur lors du chargement des traductions pour ${lang}:`, error.message);
    }
  });
  
  console.log(`✅ Traductions chargées pour ${translations.size} catégories`);
  return translations;
}

// Fonction pour créer une catégorie dans Supabase
async function createCategoryInSupabase(categoryData) {
  try {
    // Créer la catégorie principale
    const { data: category, error: categoryError } = await supabase
      .from('categories')
      .insert({
        slug: categoryData.slug,
        icon_name: categoryData.icon_name,
        level: categoryData.level,
        sort_order: categoryData.sort_order,
        is_active: categoryData.is_active,
        is_featured: categoryData.is_featured,
        description: categoryData.description
      })
      .select()
      .single();
    
    if (categoryError) {
      console.error('❌ Erreur lors de la création de la catégorie:', categoryError);
      return null;
    }
    
    console.log(`✅ Catégorie créée: ${categoryData.slug} (${category.id})`);
    return category;
  } catch (error) {
    console.error('❌ Erreur inattendue lors de la création de la catégorie:', error);
    return null;
  }
}

// Fonction pour créer les traductions
async function createCategoryTranslations(categoryId, translations, originalData) {
  const languages = {
    'arabic': 'ar',
    'english': 'en', 
    'german': 'de',
    'spanish': 'es'
  };
  
  // Toujours créer la traduction française
  try {
    const { error: frError } = await supabase
      .from('category_translations')
      .insert({
        category_id: categoryId,
        language_code: 'fr',
        name: originalData.name,
        description: originalData.description
      });
    
    if (frError) {
      console.error(`❌ Erreur lors de la création de la traduction française:`, frError);
    } else {
      console.log(`✅ Traduction française créée pour ${categoryId}`);
    }
  } catch (error) {
    console.error('❌ Erreur inattendue lors de la création de la traduction française:', error);
  }
  
  // Créer les autres traductions si disponibles
  for (const [langKey, langCode] of Object.entries(languages)) {
    if (translations[langKey]) {
      try {
        const { error } = await supabase
          .from('category_translations')
          .insert({
            category_id: categoryId,
            language_code: langCode,
            name: translations[langKey][0] || originalData.name, // Utiliser le premier nom disponible
            description: originalData.description
          });
        
        if (error) {
          console.error(`❌ Erreur lors de la création de la traduction ${langCode}:`, error);
        } else {
          console.log(`✅ Traduction ${langCode} créée pour ${categoryId}`);
        }
      } catch (error) {
        console.error(`❌ Erreur inattendue lors de la création de la traduction ${langCode}:`, error);
      }
    }
  }
}

// Fonction principale de migration
async function migrateCategoriesToSupabase() {
  console.log('🚀 Début de la migration des catégories vers Supabase...\n');
  
  try {
    // Test de connexion à Supabase
    const { data, error } = await supabase.from('categories').select('count').single();
    if (error && error.code !== 'PGRST116') {
      console.error('❌ Erreur de connexion à Supabase:', error);
      return;
    }
    console.log('✅ Connexion à Supabase établie\n');
    
    // Charger les données existantes
    const categories = loadCategoriesFromFiles();
    const translations = loadTranslations();
    
    console.log(`\n📊 Migration de ${categories.size} catégories...\n`);
    
    let successCount = 0;
    let errorCount = 0;
    
    // Traiter chaque catégorie
    for (const [categoryId, categoryData] of categories.entries()) {
      try {
        // Créer la catégorie dans Supabase
        const category = await createCategoryInSupabase(categoryData);
        
        if (category) {
          // Créer les traductions
          await createCategoryTranslations(
            category.id, 
            translations.get(categoryData.slug) || {},
            categoryData.originalData
          );
          
          successCount++;
        } else {
          errorCount++;
        }
        
        // Petite pause pour éviter de surcharger l'API
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Erreur lors du traitement de la catégorie ${categoryId}:`, error);
        errorCount++;
      }
    }
    
    console.log('\n🎉 Migration terminée!');
    console.log(`✅ Catégories migrées avec succès: ${successCount}`);
    console.log(`❌ Erreurs: ${errorCount}`);
    
    if (successCount > 0) {
      console.log('\n🔗 Prochaines étapes:');
      console.log('1. Vérifiez les données dans la console Supabase');
      console.log('2. Mettez à jour les composants pour utiliser Supabase');
      console.log('3. Testez le chargement des catégories depuis la base de données');
      console.log('4. Supprimez les anciens fichiers de catégories si tout fonctionne');
    }
    
  } catch (error) {
    console.error('❌ Erreur critique lors de la migration:', error);
  }
}

// Exécuter la migration
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateCategoriesToSupabase();
}

export { migrateCategoriesToSupabase };