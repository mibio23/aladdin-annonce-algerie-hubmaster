import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Validation des catégories spécifiques à l\'Algérie...');

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Catégories algériennes attendues
const expectedAlgerianCategories = [
  'artisanat-traditionnel-algerien',
  'produits-locaux-algeriens',
  'vetements-traditionnels-algeriens',
  'plats-traditionnels-algeriens',
  'patisseries-traditionnelles-algeriennes',
  'services-coutumes-traditionnels'
];

// Langues attendues
const expectedLanguages = ['fr', 'ar', 'en', 'de', 'es'];

console.log('\n📊 Vérification des catégories algériennes...');
let allCategoriesFound = true;
const foundCategories = [];

for (const categoryId of expectedAlgerianCategories) {
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

console.log('\n🌍 Vérification du support multilingue...');
const translationResults = {};

for (const lang of expectedLanguages) {
  const langPattern = new RegExp(`"${lang}":\\s*"[^"]+"`, 'g');
  const matches = existingContent.match(langPattern);
  translationResults[lang] = matches ? matches.length : 0;
  console.log(`✅ Traductions ${lang}: ${translationResults[lang]} occurrences`);
}

// Vérification spécifique des traductions pour les catégories algériennes
console.log('\n🔍 Vérification des traductions des catégories algériennes...');
const algerianCategoryTranslations = {};

for (const categoryId of expectedAlgerianCategories) {
  if (foundCategories.includes(categoryId)) {
    // Chercher le bloc de traductions pour cette catégorie
    const categoryStartIndex = existingContent.indexOf(`id: '${categoryId}'`);
    if (categoryStartIndex !== -1) {
      // Chercher le début du bloc de traductions
      const translationsStartIndex = existingContent.indexOf('translations:', categoryStartIndex);
      if (translationsStartIndex !== -1) {
        // Chercher la fin du bloc de traductions (accolade fermante)
        let braceCount = 0;
        let translationsEndIndex = translationsStartIndex;
        
        for (let i = translationsStartIndex; i < existingContent.length; i++) {
          if (existingContent[i] === '{') {
            braceCount++;
          } else if (existingContent[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
              translationsEndIndex = i + 1;
              break;
            }
          }
        }
        
        const translationsBlock = existingContent.substring(translationsStartIndex, translationsEndIndex);
        const langTranslations = {};
        
        for (const lang of expectedLanguages) {
          const langPattern = new RegExp(`"${lang}":\\s*"([^"]+)"`, 'g');
          const langMatch = translationsBlock.match(langPattern);
          if (langMatch) {
            langTranslations[lang] = langMatch[1];
          }
        }
        
        algerianCategoryTranslations[categoryId] = langTranslations;
        
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
    const categoryStartIndex = existingContent.indexOf(`id: '${categoryId}'`);
    if (categoryStartIndex !== -1) {
      // Chercher le début du bloc de sous-catégories
      const subcategoriesStartIndex = existingContent.indexOf('subcategories:', categoryStartIndex);
      if (subcategoriesStartIndex !== -1) {
        // Chercher la fin du bloc de sous-catégories (accolade fermante)
        let braceCount = 0;
        let subcategoriesEndIndex = subcategoriesStartIndex;
        
        for (let i = subcategoriesStartIndex; i < existingContent.length; i++) {
          if (existingContent[i] === '[') {
            braceCount++;
          } else if (existingContent[i] === ']') {
            braceCount--;
            if (braceCount === 0) {
              subcategoriesEndIndex = i + 1;
              break;
            }
          }
        }
        
        const subcategoriesBlock = existingContent.substring(subcategoriesStartIndex, subcategoriesEndIndex);
        const foundSubcategories = [];
        
        for (const subcategoryId of expected.expectedSubcategories) {
          if (subcategoriesBlock.includes(`id: '${subcategoryId}'`)) {
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
  const missingLangs = expectedLanguages.filter(lang => !translations[lang]);
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
  console.log('\n🎉 VALIDATION RÉUSSIE !');
  console.log('💡 Les catégories spécifiques à l\'Algérie ont été correctement implémentées');
  console.log('💡 Le support multilingue est fonctionnel');
  console.log('💡 La structure hiérarchique est valide');
} else {
  console.log('\n❌ VALIDATION ÉCHOUÉE !');
  console.log('💡 Des corrections sont nécessaires');
}

// Export des résultats pour une utilisation éventuelle
const validationResults = {
  timestamp: new Date().toISOString(),
  categoriesFound: allCategoriesFound,
  structureValid: structureValid,
  translationsValid: allTranslationsValid,
  foundCategories: foundCategories,
  translationCounts: translationResults,
  categoryTranslations: algerianCategoryTranslations
};

// Écrire les résultats de la validation dans un fichier
const validationResultsPath = path.join(__dirname, 'validation-algerian-categories-results.json');
try {
  fs.writeFileSync(validationResultsPath, JSON.stringify(validationResults, null, 2));
  console.log(`\n📄 Résultats de la validation sauvegardés dans: ${validationResultsPath}`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture des résultats de la validation:', error.message);
}

process.exit(testPassed ? 0 : 1);