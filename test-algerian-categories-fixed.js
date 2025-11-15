import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Test des catégories spécifiques à l\'Algérie...');

// Fonction pour vérifier si une catégorie existe dans la structure
function findCategory(categories, categoryId) {
  for (const category of categories) {
    if (category.id === categoryId) {
      return category;
    }
    if (category.subcategories && category.subcategories.length > 0) {
      const found = findCategory(category.subcategories, categoryId);
      if (found) return found;
    }
  }
  return null;
}

// Fonction pour vérifier les traductions d'une catégorie
function checkTranslations(category, languages) {
  const results = {
    hasTranslations: false,
    missingLanguages: [],
    presentLanguages: []
  };
  
  if (category.translations) {
    results.hasTranslations = true;
    for (const lang of languages) {
      if (category.translations[lang]) {
        results.presentLanguages.push(lang);
      } else {
        results.missingLanguages.push(lang);
      }
    }
  }
  
  return results;
}

// Fonction récursive pour vérifier toutes les catégories
function checkAllCategories(categories, parentPath = '', languages = ['fr', 'ar', 'en', 'de', 'es']) {
  const results = {
    totalCategories: 0,
    categoriesWithTranslations: 0,
    algerianCategories: [],
    translationIssues: []
  };
  
  for (const category of categories) {
    const categoryPath = parentPath ? `${parentPath} > ${category.name}` : category.name;
    results.totalCategories++;
    
    // Vérifier si c'est une catégorie algérienne
    if (category.id.includes('algerien') || category.id.includes('algerienne') || 
        category.id.includes('algeriens') || category.id.includes('algeriennes')) {
      results.algerianCategories.push({
        id: category.id,
        name: category.name,
        path: categoryPath
      });
    }
    
    // Vérifier les traductions
    const translationCheck = checkTranslations(category, languages);
    if (translationCheck.hasTranslations) {
      results.categoriesWithTranslations++;
      
      if (translationCheck.missingLanguages.length > 0) {
        results.translationIssues.push({
          categoryId: category.id,
          categoryName: category.name,
          path: categoryPath,
          missingLanguages: translationCheck.missingLanguages
        });
      }
    }
    
    // Vérifier les sous-catégories récursivement
    if (category.subcategories && category.subcategories.length > 0) {
      const subResults = checkAllCategories(category.subcategories, categoryPath, languages);
      results.totalCategories += subResults.totalCategories;
      results.categoriesWithTranslations += subResults.categoriesWithTranslations;
      results.algerianCategories.push(...subResults.algerianCategories);
      results.translationIssues.push(...subResults.translationIssues);
    }
  }
  
  return results;
}

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Extraire les catégories existantes
const existingCategoriesMatch = existingContent.match(/export const extendedCategories: MenuCategory\[\] = \[([\s\S]*?)\];/);
if (!existingCategoriesMatch) {
  console.error('❌ Impossible de trouver les catégories existantes dans le fichier');
  process.exit(1);
}

// Parser le contenu pour extraire les catégories (simplifié)
const categoriesData = existingCategoriesMatch[1];

// Simuler la structure des catégories pour le test
const expectedAlgerianCategories = [
  'artisanat-traditionnel-algerien',
  'produits-locaux-algeriens',
  'vetements-traditionnels-algeriens',
  'plats-traditionnels-algeriens',
  'patisseries-traditionnelles-algeriennes',
  'services-coutumes-traditionnels'
];

console.log('\n📊 Vérification des catégories algériennes attendues...');
let allCategoriesFound = true;
const foundCategories = [];

for (const categoryId of expectedAlgerianCategories) {
  // Recherche simple dans le contenu du fichier
  const categoryExists = categoriesData.includes(`id: '${categoryId}'`);
  if (categoryExists) {
    foundCategories.push(categoryId);
    console.log(`✅ Catégorie trouvée: ${categoryId}`);
  } else {
    console.log(`❌ Catégorie manquante: ${categoryId}`);
    allCategoriesFound = false;
  }
}

console.log('\n🌍 Vérification du support multilingue...');
const languages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
const translationResults = {};

for (const lang of languages) {
  const langPattern = new RegExp(`"${lang}":\\s*"[^"]+"`, 'g');
  const matches = categoriesData.match(langPattern);
  translationResults[lang] = matches ? matches.length : 0;
  console.log(`✅ Traductions ${lang}: ${translationResults[lang]} occurrences`);
}

// Vérification spécifique des traductions pour les catégories algériennes
console.log('\n🔍 Vérification des traductions des catégories algériennes...');
const algerianCategoryTranslations = {};

for (const categoryId of expectedAlgerianCategories) {
  if (foundCategories.includes(categoryId)) {
    const categoryPattern = new RegExp(`id: '${categoryId}'[\\s\\S]*?translations:\\s*{([\\s\\S]*?)}`, 'g');
    const categoryMatch = categoriesData.match(categoryPattern);
    
    if (categoryMatch) {
      const translationsBlock = categoryMatch[0];
      const langTranslations = {};
      
      for (const lang of languages) {
        const langPattern = new RegExp(`"${lang}":\\s*"([^"]+)"`, 'g');
        const langMatch = translationsBlock.match(langPattern);
        if (langMatch) {
          langTranslations[lang] = langMatch[1];
        }
      }
      
      algerianCategoryTranslations[categoryId] = langTranslations;
      
      // Vérifier si toutes les langues sont présentes
      const missingLangs = languages.filter(lang => !langTranslations[lang]);
      if (missingLangs.length === 0) {
        console.log(`✅ ${categoryId}: Toutes les traductions sont présentes`);
      } else {
        console.log(`⚠️ ${categoryId}: Traductions manquantes pour ${missingLangs.join(', ')}`);
      }
    }
  }
}

// Vérification de la structure hiérarchique
console.log('\n📂 Vérification de la structure hiérarchique...');
const structureChecks = {
  'artisanat-traditionnel-algerien': {
    expectedSubcategories: ['tapis-berberes', 'poterie-traditionnelle', 'bijoux-traditionnels', 'costumes-traditionnels']
  },
  'produits-locaux-algeriens': {
    expectedSubcategories: ['huile-olive', 'dattes-algeriennes', 'miel-algerien', 'epices-algeriennes']
  },
  'vetements-traditionnels-algeriens': {
    expectedSubcategories: ['haik', 'blouza', 'sarouel', 'chachia']
  },
  'plats-traditionnels-algeriens': {
    expectedSubcategories: ['couscous-algerien', 'tagine-algerien', 'chorba', 'rechta', 'bourek']
  },
  'patisseries-traditionnelles-algeriennes': {
    expectedSubcategories: ['baklawa-algerienne', 'makrout', 'gazelle-horns', 'zlabia', 'tcharek-mellouk']
  },
  'services-coutumes-traditionnels': {
    expectedSubcategories: ['mariage-traditionnel', 'musique-traditionnelle', 'artisanat-services']
  }
};

let structureValid = true;
for (const [categoryId, expected] of Object.entries(structureChecks)) {
  if (foundCategories.includes(categoryId)) {
    const categoryPattern = new RegExp(`id: '${categoryId}'[\\s\\S]*?subcategories:\\s*\\[([\\s\\S]*?)\\]`, 'g');
    const categoryMatch = categoriesData.match(categoryPattern);
    
    if (categoryMatch) {
      const subcategoriesBlock = categoryMatch[1];
      const foundSubcategories = [];
      
      for (const subcategoryId of expected.expectedSubcategories) {
        if (subcategoriesBlock && subcategoriesBlock.includes(`id: '${subcategoryId}'`)) {
          foundSubcategories.push(subcategoryId);
        }
      }
      
      if (foundSubcategories.length === expected.expectedSubcategories.length) {
        console.log(`✅ ${categoryId}: Structure hiérarchique valide`);
      } else {
        console.log(`⚠️ ${categoryId}: Sous-catégories manquantes`);
        structureValid = false;
      }
    }
  }
}

// Résultats finaux
console.log('\n📋 RÉSULTATS FINAUX');
console.log('==================');

if (allCategoriesFound) {
  console.log('✅ Toutes les catégories algériennes attendues ont été trouvées');
} else {
  console.log('❌ Certaines catégories algériennes attendues sont manquantes');
}

if (structureValid) {
  console.log('✅ La structure hiérarchique des catégories est valide');
} else {
  console.log('❌ La structure hiérarchique des catégories contient des erreurs');
}

const totalTranslations = Object.values(translationResults).reduce((sum, count) => sum + count, 0);
console.log(`🌍 Support multilingue: ${totalTranslations} traductions au total`);

// Vérifier si chaque catégorie algérienne a des traductions dans toutes les langues
let allTranslationsValid = true;
for (const [categoryId, translations] of Object.entries(algerianCategoryTranslations)) {
  const missingLangs = languages.filter(lang => !translations[lang]);
  if (missingLangs.length > 0) {
    allTranslationsValid = false;
    break;
  }
}

if (allTranslationsValid) {
  console.log('✅ Toutes les catégories algériennes ont des traductions complètes');
} else {
  console.log('⚠️ Certaines catégories algériennes ont des traductions incomplètes');
}

// Test de validation final
const testPassed = allCategoriesFound && structureValid && allTranslationsValid;

if (testPassed) {
  console.log('\n🎉 TEST RÉUSSI !');
  console.log('💡 Les catégories spécifiques à l\'Algérie ont été correctement implémentées');
  console.log('💡 Le support multilingue est fonctionnel');
  console.log('💡 La structure hiérarchique est valide');
} else {
  console.log('\n❌ TEST ÉCHOUÉ !');
  console.log('💡 Des corrections sont nécessaires');
}

// Export des résultats pour une utilisation éventuelle
const testResults = {
  timestamp: new Date().toISOString(),
  categoriesFound: allCategoriesFound,
  structureValid: structureValid,
  translationsValid: allTranslationsValid,
  foundCategories: foundCategories,
  translationCounts: translationResults,
  categoryTranslations: algerianCategoryTranslations
};

// Écrire les résultats du test dans un fichier
const testResultsPath = path.join(__dirname, 'test-algerian-categories-results.json');
try {
  fs.writeFileSync(testResultsPath, JSON.stringify(testResults, null, 2));
  console.log(`\n📄 Résultats du test sauvegardés dans: ${testResultsPath}`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture des résultats du test:', error.message);
}

process.exit(testPassed ? 0 : 1);