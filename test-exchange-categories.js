import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Test des catégories d\'échanges et de partage...');

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Catégories d'échanges attendues
const expectedExchangeCategories = [
  'echanges-partage'
];

// Sous-catégories attendues
const expectedSubcategories = [
  'don-troc',
  'covoiturage-transport',
  'partage-competences',
  'temps-libre-activites'
];

// Sous-sous-catégories attendues
const expectedSubSubcategories = [
  'objets-don',
  'objets-troc',
  'services-echanges',
  'trajets-covoiturage',
  'location-particuliers',
  'transport-marchandises',
  'cours-formations',
  'mentorat-accompagnement',
  'aide-benevole',
  'sorties-evenements',
  'sports-loisirs',
  'groupes-communautaires'
];

// Langues attendues
const expectedLanguages = ['fr', 'ar', 'en', 'de', 'es'];

console.log('\n📊 Vérification des catégories d\'échanges...');
let allCategoriesFound = true;
const foundCategories = [];

for (const categoryId of expectedExchangeCategories) {
  // Recherche simple dans le contenu du fichier
  const categoryExists = existingContent.includes(`id: '${categoryId}'`);
  if (categoryExists) {
    foundCategories.push(categoryId);
    console.log(`✅ Catégorie trouvée: ${categoryId}`);
  } else {
    console.log(`❌ Catégorie manquante: ${categoryId}`);
    allCategoriesFound = false;
  }
}

console.log('\n📂 Vérification des sous-catégories...');
let allSubcategoriesFound = true;
const foundSubcategories = [];

for (const subcategoryId of expectedSubcategories) {
  // Recherche simple dans le contenu du fichier
  const subcategoryExists = existingContent.includes(`id: '${subcategoryId}'`);
  if (subcategoryExists) {
    foundSubcategories.push(subcategoryId);
    console.log(`✅ Sous-catégorie trouvée: ${subcategoryId}`);
  } else {
    console.log(`❌ Sous-catégorie manquante: ${subcategoryId}`);
    allSubcategoriesFound = false;
  }
}

console.log('\n📂 Vérification des sous-sous-catégories...');
let allSubSubcategoriesFound = true;
const foundSubSubcategories = [];

for (const subSubcategoryId of expectedSubSubcategories) {
  // Recherche simple dans le contenu du fichier
  const subSubcategoryExists = existingContent.includes(`id: '${subSubcategoryId}'`);
  if (subSubcategoryExists) {
    foundSubSubcategories.push(subSubcategoryId);
    console.log(`✅ Sous-sous-catégorie trouvée: ${subSubcategoryId}`);
  } else {
    console.log(`❌ Sous-sous-catégorie manquante: ${subSubcategoryId}`);
    allSubSubcategoriesFound = false;
  }
}

console.log('\n🌍 Vérification du support multilingue...');
const translationResults = {};

for (const lang of expectedLanguages) {
  const langPattern = new RegExp(`"${lang}":\\s*"[^"]+"`, 'g');
  const matches = existingContent.match(langPattern);
  translationResults[lang] = matches ? matches.length : 0;
  console.log(`✅ Traductions ${lang}: ${translationResults[lang]} occurrences`);
}

// Vérification spécifique des traductions pour les catégories d'échanges
console.log('\n🔍 Vérification des traductions des catégories d\'échanges...');
const exchangeCategoryTranslations = {};

for (const categoryId of expectedExchangeCategories) {
  if (foundCategories.includes(categoryId)) {
    // Chercher le bloc de traductions pour cette catégorie
    const categoryPattern = new RegExp(`id: '${categoryId}'[\\s\\S]*?translations:\\s*{([\\s\\S]*?)}`, 'g');
    const categoryMatch = existingContent.match(categoryPattern);
    
    if (categoryMatch) {
      const translationsBlock = categoryMatch[0];
      const langTranslations = {};
      
      for (const lang of expectedLanguages) {
        const langPattern = new RegExp(`"${lang}":\\s*"([^"]+)"`, 'g');
        const langMatch = translationsBlock.match(langPattern);
        if (langMatch) {
          langTranslations[lang] = langMatch[1];
        }
      }
      
      exchangeCategoryTranslations[categoryId] = langTranslations;
      
      // Vérifier si toutes les langues sont présentes
      const missingLangs = expectedLanguages.filter(lang => !langTranslations[lang]);
      if (missingLangs.length === 0) {
        console.log(`✅ ${categoryId}: Toutes les traductions sont présentes`);
      } else {
        console.log(`⚠️ ${categoryId}: Traductions manquantes pour ${missingLangs.join(', ')}`);
      }
    }
  }
}

// Vérification manuelle des traductions en affichant un exemple
console.log('\n🔍 Vérification manuelle des traductions...');
const sampleCategory = 'echanges-partage';
const sampleCategoryIndex = existingContent.indexOf(`id: '${sampleCategory}'`);

if (sampleCategoryIndex !== -1) {
  // Extraire un échantillon du contenu pour vérification manuelle
  const sampleStart = Math.max(0, sampleCategoryIndex - 100);
  const sampleEnd = Math.min(existingContent.length, sampleCategoryIndex + 2000);
  const sampleContent = existingContent.substring(sampleStart, sampleEnd);
  
  console.log(`\n📄 Échantillon du contenu pour la catégorie "${sampleCategory}":`);
  console.log('----------------------------------------');
  console.log(sampleContent.substring(0, 1000) + '...');
  console.log('----------------------------------------');
}

// Résultats finaux
console.log('\n📋 RÉSULTATS FINAUX');
console.log('==================');

if (allCategoriesFound) {
  console.log('✅ Toutes les catégories d\'échanges attendues ont été trouvées');
} else {
  console.log('❌ Certaines catégories d\'échanges attendues sont manquantes');
}

if (allSubcategoriesFound) {
  console.log('✅ Toutes les sous-catégories attendues ont été trouvées');
} else {
  console.log('❌ Certaines sous-catégories attendues sont manquantes');
}

if (allSubSubcategoriesFound) {
  console.log('✅ Toutes les sous-sous-catégories attendues ont été trouvées');
} else {
  console.log('❌ Certaines sous-sous-catégories attendues sont manquantes');
}

const totalTranslations = Object.values(translationResults).reduce((sum, count) => sum + count, 0);
console.log(`🌍 Support multilingue: ${totalTranslations} traductions au total`);

// Vérifier si chaque catégorie d'échanges a des traductions dans toutes les langues
let allTranslationsValid = true;
for (const [categoryId, translations] of Object.entries(exchangeCategoryTranslations)) {
  const missingLangs = expectedLanguages.filter(lang => !translations[lang]);
  if (missingLangs.length > 0) {
    allTranslationsValid = false;
    break;
  }
}

if (allTranslationsValid) {
  console.log('✅ Toutes les catégories d\'échanges ont des traductions complètes');
} else {
  console.log('⚠️ Certaines catégories d\'échanges ont des traductions incomplètes');
}

// Test de validation final
const testPassed = allCategoriesFound && allSubcategoriesFound && allSubSubcategoriesFound;

if (testPassed) {
  console.log('\n🎉 TEST RÉUSSI !');
  console.log('💡 Les catégories d\'échanges et de partage ont été correctement implémentées');
  console.log('💡 La structure hiérarchique est valide');
  
  if (allTranslationsValid) {
    console.log('💡 Le support multilingue est fonctionnel');
  } else {
    console.log('⚠️ Le support multilingue nécessite une vérification manuelle');
  }
} else {
  console.log('\n❌ TEST ÉCHOUÉ !');
  console.log('💡 Des corrections sont nécessaires');
}

// Export des résultats pour une utilisation éventuelle
const testResults = {
  timestamp: new Date().toISOString(),
  categoriesFound: allCategoriesFound,
  subcategoriesFound: allSubcategoriesFound,
  subSubcategoriesFound: allSubSubcategoriesFound,
  translationsValid: allTranslationsValid,
  foundCategories: foundCategories,
  foundSubcategories: foundSubcategories,
  foundSubSubcategories: foundSubSubcategories,
  translationCounts: translationResults,
  categoryTranslations: exchangeCategoryTranslations
};

// Écrire les résultats du test dans un fichier
const testResultsPath = path.join(__dirname, 'test-exchange-categories-results.json');
try {
  fs.writeFileSync(testResultsPath, JSON.stringify(testResults, null, 2));
  console.log(`\n📄 Résultats du test sauvegardés dans: ${testResultsPath}`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture des résultats du test:', error.message);
}

process.exit(testPassed ? 0 : 1);