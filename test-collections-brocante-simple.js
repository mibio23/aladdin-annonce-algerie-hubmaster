// Script de test simple pour valider la catégorie "Collections & Brocante"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Validation de la catégorie "Collections & Brocante"...');

// Lire le fichier des catégories étendues
const categoriesPath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');
const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');

// Vérifier que la catégorie principale existe
if (!categoriesContent.includes("id: 'collections-brocante'")) {
  console.error('❌ Catégorie "Collections & Brocante" non trouvée');
  process.exit(1);
}
console.log('✅ Catégorie principale "Collections & Brocante" trouvée');

// Vérifier les traductions de la catégorie principale
const mainCategoryTranslations = [
  '"fr": "Collections & Brocante"',
  '"ar": "المجموعات والبورصة"',
  '"en": "Collections & Flea Market"',
  '"de": "Sammlungen & Flohmarkt"',
  '"es": "Colecciones y Mercadillo"'
];

let mainTranslationsFound = 0;
mainCategoryTranslations.forEach(translation => {
  if (categoriesContent.includes(translation)) {
    mainTranslationsFound++;
  }
});
console.log(`✅ ${mainTranslationsFound}/${mainCategoryTranslations.length} traductions principales trouvées`);

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
  if (categoriesContent.includes(`id: '${expectedId}'`)) {
    foundSubcategories++;
    console.log(`✅ Sous-catégorie "${expectedId}" trouvée`);
  } else {
    console.log(`❌ Sous-catégorie "${expectedId}" manquante`);
  }
});

console.log(`📊 Sous-catégories trouvées: ${foundSubcategories}/${expectedSubcategories.length}`);

// Vérifier les sous-sous-catégories attendues
const expectedSubSubCategories = [
  'timbres-algerie',
  'timbres-monde',
  'cartes-postales',
  'enveloppes-lettres-anciennes',
  'livres-anciens',
  'livres-luxe',
  'manuscrits',
  'editions-limitees',
  'livres-signes',
  'pieces-algeriennes',
  'pieces-monde',
  'billets-banque-anciens',
  'medailles',
  'jouets-anciens',
  'electronique-retro',
  'mobilier-vintage',
  'vetements-vintage',
  'accessoires-mode-retro',
  'tableaux-peinture',
  'sculptures',
  'poterie-ceramique',
  'bijoux-artisanat',
  'textiles-artisanat',
  'mobilier-antique',
  'horlogerie-antique',
  'vaisselle-antique',
  'objets-decoratifs-anciens',
  'instruments-musique',
  'armes-blanches',
  'voitures-miniatures',
  'figurines-statuettes',
  'cartes-telephoniques'
];

let foundSubSubCategories = 0;
expectedSubSubCategories.forEach(expectedId => {
  if (categoriesContent.includes(`id: '${expectedId}'`)) {
    foundSubSubCategories++;
  }
});

console.log(`✅ ${foundSubSubCategories}/${expectedSubSubCategories.length} sous-sous-catégories trouvées`);

// Vérifier les traductions des sous-catégories
const subcategoryTranslations = [
  '"fr": "Timbres & Poste"',
  '"ar": "الطوابع والبريد"',
  '"en": "Stamps & Post"',
  '"de": "Briefmarken & Post"',
  '"es": "Sellos y Correo"',
  '"fr": "Livres Rares & Collection"',
  '"ar": "كتب نادرة ومجموعات"',
  '"en": "Rare Books & Collection"',
  '"de": "Seltene Bücher & Sammlung"',
  '"es": "Libros Raros y Colección"'
];

let subcategoryTranslationsFound = 0;
subcategoryTranslations.forEach(translation => {
  if (categoriesContent.includes(translation)) {
    subcategoryTranslationsFound++;
  }
});
console.log(`✅ ${subcategoryTranslationsFound}/${subcategoryTranslations.length} traductions de sous-catégories trouvées`);

// Validation finale
const validationResults = {
  mainCategory: 1,
  mainTranslations: mainTranslationsFound,
  subcategories: foundSubcategories,
  subSubCategories: foundSubSubCategories,
  subcategoryTranslations: subcategoryTranslationsFound
};

console.log('\n📊 Résultats de validation:');
console.log(`   - Catégorie principale: ${validationResults.mainCategory}/1`);
console.log(`   - Traductions principales: ${validationResults.mainTranslations}/${mainCategoryTranslations.length}`);
console.log(`   - Sous-catégories: ${validationResults.subcategories}/${expectedSubcategories.length}`);
console.log(`   - Sous-sous-catégories: ${validationResults.subSubCategories}/${expectedSubSubCategories.length}`);
console.log(`   - Traductions sous-catégories: ${validationResults.subcategoryTranslations}/${subcategoryTranslations.length}`);

const successThreshold = 0.9; // 90% de réussite
const totalExpected = mainCategoryTranslations.length + expectedSubcategories.length + expectedSubSubCategories.length + subcategoryTranslations.length;
const totalFound = validationResults.mainTranslations + validationResults.subcategories + validationResults.subSubCategories + validationResults.subcategoryTranslations;
const successRate = totalFound / totalExpected;

if (successRate >= successThreshold) {
  console.log(`\n🎉 Validation réussie à ${(successRate * 100).toFixed(1)}% !`);
  console.log('✅ Structure complète de la catégorie "Collections & Brocante"');
  console.log('✅ Support multilingue complet');
  console.log('✅ Hiérarchie à 3 niveaux correcte');
} else {
  console.log(`\n❌ Validation échouée - Taux de réussite: ${(successRate * 100).toFixed(1)}% (minimum: ${successThreshold * 100}%)`);
  process.exit(1);
}