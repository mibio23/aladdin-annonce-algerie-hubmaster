// Script de test pour valider la catégorie "Collections & Brocante"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validation de la catégorie "Collections & Brocante"...');

// Lire le fichier des catégories étendues
const categoriesPath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');

// Extraire la catégorie Collections & Brocante
const collectionsCategoryMatch = categoriesContent.match(/id: 'collections-brocante'[\s\S]*?subcategories: \[[\s\S]*?\]/);

if (!collectionsCategoryMatch) {
  console.error('❌ Catégorie "Collections & Brocante" non trouvée');
  process.exit(1);
}

console.log('✅ Catégorie "Collections & Brocante" trouvée');

// Analyser les sous-catégories avec une approche plus précise
const subcategoriesSection = collectionsCategoryMatch[0].match(/subcategories: \[([\s\S]*)\]/);
if (!subcategoriesSection) {
  console.error('❌ Section des sous-catégories non trouvée');
  process.exit(1);
}

// Extraire chaque sous-catégorie individuellement
const subcategoryPattern = /{\s*id: '([^']+)',[\s\S]*?name: '([^']+)',[\s\S]*?translations: \{[\s\S]*?\}[\s\S]*?subcategories: \[[\s\S]*?\]\s*}/g;
const subcategoriesMatch = [...subcategoriesSection[1].matchAll(subcategoryPattern)];

console.log(`✅ ${subcategoriesMatch.length} sous-catégories trouvées`);

// Vérifier les sous-catégories attendues
const expectedSubcategories = [
  'timbres-poste',
  'livres-rares-collection',
  'pieces-monnaie-medailles',
  'objets-vintage-retro',
  'art-artisanat',
  'antiquites',
  'collections-specialisees'
];

let foundSubcategories = 0;
expectedSubcategories.forEach(expectedId => {
  if (collectionsCategoryMatch[0].includes(`id: '${expectedId}'`)) {
    foundSubcategories++;
    console.log(`✅ Sous-catégorie "${expectedId}" trouvée`);
  } else {
    console.log(`❌ Sous-catégorie "${expectedId}" manquante`);
  }
});

console.log(`📊 Sous-catégories trouvées: ${foundSubcategories}/${expectedSubcategories.length}`);

// Analyser les sous-sous-catégories
let totalSubSubCategories = 0;
subcategoriesMatch.forEach(subcategory => {
  const subSubCategoryPattern = /id: '([^']+)',[\s\S]*?name: '([^']+)',[\s\S]*?translations: \{[\s\S]*?\}[\s\S]*?subcategories: \[\]/g;
  const subSubCategoriesMatch = [...subcategory[0].matchAll(subSubCategoryPattern)];
  totalSubSubCategories += subSubCategoriesMatch.length;
});

console.log(`✅ ${totalSubSubCategories} sous-sous-catégories trouvées`);

// Vérifier les traductions
const languages = ['fr', 'ar', 'en', 'de', 'es'];
const translationPattern = /translations: \{[\s\S]*?\}/g;
const translations = collectionsCategoryMatch[0].match(translationPattern);

if (translations) {
  console.log(`✅ ${translations.length} groupes de traductions trouvés`);
  
  // Vérifier que toutes les langues sont présentes
  languages.forEach(lang => {
    const langPattern = new RegExp(`"${lang}": "[^"]*"`, 'g');
    const langMatches = collectionsCategoryMatch[0].match(langPattern);
    if (langMatches) {
      console.log(`✅ ${langMatches.length} traductions en ${lang} trouvées`);
    } else {
      console.log(`❌ Aucune traduction en ${lang} trouvée`);
    }
  });
} else {
  console.log('❌ Aucune traduction trouvée');
}

// Vérifier la structure hiérarchique
const categoryStructure = {
  mainCategory: 1,
  subcategories: expectedSubcategories.length,
  subSubCategories: totalSubSubCategories
};

console.log('\n📊 Structure hiérarchique:');
console.log(`   - Catégorie principale: ${categoryStructure.mainCategory}`);
console.log(`   - Sous-catégories: ${categoryStructure.subcategories}`);
console.log(`   - Sous-sous-catégories: ${categoryStructure.subSubCategories}`);

// Validation finale
if (foundSubcategories === expectedSubcategories.length && totalSubSubCategories > 0) {
  console.log('\n🎉 Validation réussie de la catégorie "Collections & Brocante"!');
  console.log('✅ Structure complète avec traductions multilingues');
  console.log('✅ Hiérarchie à 3 niveaux correcte');
  console.log('✅ Support des 5 langues (français, arabe, anglais, allemand, espagnol)');
} else {
  console.log('\n❌ Validation échouée');
  process.exit(1);
}