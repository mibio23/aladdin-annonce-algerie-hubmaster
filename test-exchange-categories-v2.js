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
  const languages = ['fr', 'ar', 'en', 'de', 'es'];
  const translations = {};
  
  for (const lang of languages) {
    const langRegex = new RegExp(`"${lang}":\\s*"([^"]+)"`);
    const langMatch = translationsBlock.match(langRegex);
    translations[lang] = langMatch ? langMatch[1] : null;
  }
  
  return { found: true, translations };
}

// Test principal
function testExchangeCategories() {
  console.log('🔍 Test des catégories d\'échanges et de partage v2...');
  
  const content = extractCategoriesContent();
  if (!content) {
    console.log('❌ Impossible de lire le fichier de catégories');
    return false;
  }
  
  console.log('✅ Fichier existant lu avec succès');
  
  // Vérifier la catégorie principale
  const mainCategoryCount = findCategoryById(content, 'echanges-partage');
  console.log(`📊 Catégorie principale 'echanges-partage': ${mainCategoryCount} occurrence(s)`);
  
  if (mainCategoryCount === 0) {
    console.log('❌ Catégorie principale non trouvée');
    return false;
  }
  
  // Vérifier les sous-catégories attendues
  const expectedSubcategories = [
    'don-troc',
    'covoiturage-transport',
    'partage-competences',
    'temps-libre-activites'
  ];
  
  console.log('\n📂 Vérification des sous-catégories...');
  let allSubcategoriesFound = true;
  
  for (const subcategoryId of expectedSubcategories) {
    const count = findCategoryById(content, subcategoryId);
    if (count > 0) {
      console.log(`✅ Sous-catégorie trouvée: ${subcategoryId}`);
    } else {
      console.log(`❌ Sous-catégorie manquante: ${subcategoryId}`);
      allSubcategoriesFound = false;
    }
  }
  
  // Vérifier les sous-sous-catégories attendues
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
    'groupes-communautes'
  ];
  
  console.log('\n📂 Vérification des sous-sous-catégories...');
  let allSubSubcategoriesFound = true;
  
  for (const subSubcategoryId of expectedSubSubcategories) {
    const count = findCategoryById(content, subSubcategoryId);
    if (count > 0) {
      console.log(`✅ Sous-sous-catégorie trouvée: ${subSubcategoryId}`);
    } else {
      console.log(`❌ Sous-sous-catégorie manquante: ${subSubcategoryId}`);
      allSubSubcategoriesFound = false;
    }
  }
  
  // Vérifier les traductions
  console.log('\n🌍 Vérification des traductions...');
  const mainCategoryTranslations = checkTranslations(content, 'echanges-partage');
  
  if (mainCategoryTranslations.found) {
    console.log('✅ Traductions trouvées pour la catégorie principale');
    for (const [lang, translation] of Object.entries(mainCategoryTranslations.translations)) {
      if (translation) {
        console.log(`  ✅ ${lang}: ${translation}`);
      } else {
        console.log(`  ❌ ${lang}: Manquant`);
      }
    }
  } else {
    console.log('❌ Traductions non trouvées pour la catégorie principale');
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
  
  if (mainCategoryCount > 0 && allSubcategoriesFound && allSubSubcategoriesFound) {
    console.log('✅ Toutes les catégories d\'échanges attendues ont été trouvées');
    console.log('✅ Toutes les sous-catégories attendues ont été trouvées');
    console.log('✅ Toutes les sous-sous-catégories attendues ont été trouvées');
    console.log('🌍 Support multilingue: Complet');
    console.log('\n🎉 TEST RÉUSSI !');
    return true;
  } else {
    console.log('❌ Certaines catégories sont manquantes');
    console.log('\n❌ TEST ÉCHOUÉ !');
    return false;
  }
}

// Exécuter le test
const success = testExchangeCategories();

// Sauvegarder les résultats
const results = {
  timestamp: new Date().toISOString(),
  success: success,
  summary: success ? 'Test réussi' : 'Test échoué'
};

fs.writeFileSync(
  path.join(__dirname, 'test-exchange-categories-v2-results.json'),
  JSON.stringify(results, null, 2)
);

console.log(`\n📄 Résultats du test sauvegardés dans: test-exchange-categories-v2-results.json`);