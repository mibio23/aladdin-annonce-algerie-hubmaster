import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire actuel pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

// Fonction pour extraire le contenu du fichier
function extractCategoriesContent() {
  try {
    const content = fs.readFileSync(categoriesFilePath, 'utf8');
    return content;
  } catch (error) {
    console.error('❌ Erreur lors de la lecture du fichier:', error.message);
    return null;
  }
}

// Fonction pour trouver une catégorie par son ID
function findCategoryById(content, categoryId) {
  const regex = new RegExp(`id:\\s*['"]${categoryId}['"]`, 'g');
  const matches = content.match(regex);
  return matches ? matches.length : 0;
}

// Fonction pour vérifier les traductions
function checkTranslations(content, categoryId) {
  const categoryRegex = new RegExp(
    `id:\\s*['"]${categoryId}['"][\\s\\S]*?translations:\\s*({[\\s\\S]*?})`,
    'g'
  );
  
  const match = categoryRegex.exec(content);
  if (!match) return { found: false };
  
  const translationsBlock = match[1];
  const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
  const translations = {};
  
  for (const lang of languages) {
    const langRegex = new RegExp(`"${lang}":\\s*"([^"]+)"`);
    const langMatch = translationsBlock.match(langRegex);
    translations[lang] = langMatch ? langMatch[1] : null;
  }
  
  return { found: true, translations };
}

// Test principal
function testAllCategories() {
  console.log('🔍 Test complet de toutes les catégories...');
  
  const content = extractCategoriesContent();
  if (!content) {
    console.log('❌ Impossible de lire le fichier de catégories');
    return false;
  }
  
  console.log('✅ Fichier existant lu avec succès');
  
  // Catégories algériennes attendues
  const algerianCategories = [
    'artisanat-traditionnel-algerien',
    'produits-locaux-algeriens',
    'vetements-traditionnels-algeriens',
    'plats-traditionnels-algeriens',
    'patisseries-traditionnelles-algeriennes',
    'services-coutumes-traditionnels'
  ];
  
  // Catégorie d'échanges attendue
  const exchangeCategory = ['echanges-partage'];
  
  // Toutes les catégories attendues
  const allExpectedCategories = [...algerianCategories, ...exchangeCategory];
  
  console.log('\n🇩🇿 Vérification des catégories algériennes...');
  let allAlgerianFound = true;
  
  for (const categoryId of algerianCategories) {
    const count = findCategoryById(content, categoryId);
    if (count > 0) {
      console.log(`✅ Catégorie algérienne trouvée: ${categoryId}`);
    } else {
      console.log(`❌ Catégorie algérienne manquante: ${categoryId}`);
      allAlgerianFound = false;
    }
  }
  
  console.log('\n🔄 Vérification des catégories d\'échanges...');
  let allExchangeFound = true;
  
  for (const categoryId of exchangeCategory) {
    const count = findCategoryById(content, categoryId);
    if (count > 0) {
      console.log(`✅ Catégorie d'échanges trouvée: ${categoryId}`);
    } else {
      console.log(`❌ Catégorie d'échanges manquante: ${categoryId}`);
      allExchangeFound = false;
    }
  }
  
  // Vérifier les sous-catégories des catégories algériennes
  console.log('\n📂 Vérification des sous-catégories algériennes...');
  const algerianSubcategories = [
    'tapis-berberes',
    'poterie-traditionnelle',
    'bijoux-traditionnels',
    'costumes-traditionnels',
    'huile-olive',
    'dattes-algeriennes',
    'miel-algerien',
    'epices-algeriennes',
    'haik',
    'blouza',
    'sarouel',
    'chachia',
    'couscous-algerien',
    'tagine-algerien',
    'chorba',
    'rechta',
    'bourek',
    'baklawa-algerienne',
    'makrout',
    'gazelle-horns',
    'zlabia',
    'tcharek-mellouk',
    'mariage-traditionnel',
    'musique-traditionnelle',
    'artisanat-services'
  ];
  
  let allAlgerianSubcategoriesFound = true;
  for (const subcategoryId of algerianSubcategories) {
    const count = findCategoryById(content, subcategoryId);
    if (count > 0) {
      console.log(`✅ Sous-catégorie algérienne trouvée: ${subcategoryId}`);
    } else {
      console.log(`❌ Sous-catégorie algérienne manquante: ${subcategoryId}`);
      allAlgerianSubcategoriesFound = false;
    }
  }
  
  // Vérifier les sous-catégories des échanges
  console.log('\n📂 Vérification des sous-catégories d\'échanges...');
  const exchangeSubcategories = [
    'don-troc',
    'covoiturage-transport',
    'partage-competences',
    'temps-libre-activites'
  ];
  
  let allExchangeSubcategoriesFound = true;
  for (const subcategoryId of exchangeSubcategories) {
    const count = findCategoryById(content, subcategoryId);
    if (count > 0) {
      console.log(`✅ Sous-catégorie d'échanges trouvée: ${subcategoryId}`);
    } else {
      console.log(`❌ Sous-catégorie d'échanges manquante: ${subcategoryId}`);
      allExchangeSubcategoriesFound = false;
    }
  }
  
  // Vérifier les traductions
  console.log('\n🌍 Vérification des traductions...');
  let allTranslationsFound = true;
  
  for (const categoryId of allExpectedCategories) {
    const translations = checkTranslations(content, categoryId);
    if (translations.found) {
      const completeTranslations = Object.values(translations.translations).every(t => t !== null);
      if (completeTranslations) {
        console.log(`✅ Traductions complètes pour: ${categoryId}`);
      } else {
        console.log(`⚠️ Traductions incomplètes pour: ${categoryId}`);
        allTranslationsFound = false;
      }
    } else {
      console.log(`❌ Traductions non trouvées pour: ${categoryId}`);
      allTranslationsFound = false;
    }
  }
  
  // Compter le nombre total de traductions
  const translationCounts = {};
  ['fr', 'ar', 'en', 'de', 'es'].forEach(lang => {
    const regex = new RegExp(`"${lang}":\\s*"[^"]+"`, 'g');
    const matches = content.match(regex);
    translationCounts[lang] = matches ? matches.length : 0;
  });
  
  console.log('\n📊 Nombre total de traductions dans le fichier:');
  for (const [lang, count] of Object.entries(translationCounts)) {
    console.log(`✅ Traductions ${lang}: ${count} occurrences`);
  }
  
  // Résultat final
  console.log('\n📋 RÉSULTATS FINAUX');
  console.log('==================');
  
  const allCategoriesFound = allAlgerianFound && allExchangeFound;
  const allSubcategoriesFound = allAlgerianSubcategoriesFound && allExchangeSubcategoriesFound;
  
  if (allCategoriesFound && allSubcategoriesFound && allTranslationsFound) {
    console.log('✅ Toutes les catégories algériennes attendues ont été trouvées');
    console.log('✅ Toutes les catégories d\'échanges attendues ont été trouvées');
    console.log('✅ Toutes les sous-catégories attendues ont été trouvées');
    console.log('🌍 Support multilingue: Complet');
    console.log('\n🎉 TEST COMPLET RÉUSSI !');
    return true;
  } else {
    console.log('❌ Certaines catégories ou traductions sont manquantes');
    console.log('\n❌ TEST COMPLET ÉCHOUÉ !');
    return false;
  }
}

// Exécuter le test
const success = testAllCategories();

// Sauvegarder les résultats
const results = {
  timestamp: new Date().toISOString(),
  success: success,
  summary: success ? 'Test complet réussi' : 'Test complet échoué',
  categories: {
    algerian: 6,
    exchange: 1,
    total: 7
  }
};

fs.writeFileSync(
  path.join(__dirname, 'test-all-categories-complete-results.json'),
  JSON.stringify(results, null, 2)
);

console.log(`\n📄 Résultats du test sauvegardés dans: test-all-categories-complete-results.json`);