import fs from 'fs';
import path from 'path';

console.log('🚀 VALIDATION FINALE COMPLÈTE DES CATÉGORIES');
console.log('================================================================================');

// Lecture du fichier de catégories
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

console.log('✅ Fichier lu avec succès');

// Catégories attendues
const categoriesAttendues = [
  // Catégories algériennes
  'artisanat-traditionnel-algerien',
  'produits-locaux-algeriens', 
  'vetements-traditionnels-algeriens',
  'plats-traditionnels-algeriens',
  'patisseries-traditionnelles-algeriennes',
  'services-coutumes-traditionnels',
  // Catégories d'échanges
  'echanges-partage',
  // Collections & Brocante
  'collections-brocante'
];

// Sous-catégories attendues pour Collections & Brocante
const sousCategoriesCollectionsAttendues = [
  'timbres-poste',
  'livres-rares-collection',
  'pieces-monnaie-medailles',
  'objets-vintage-retro',
  'art-artisanat',
  'antiquites',
  'collections-specialisees'
];

console.log('\n📋 VÉRIFICATION DES CATÉGORIES PRINCIPALES:');
console.log('================================================================================');

let categoriesTrouvees = 0;
categoriesAttendues.forEach(categorieId => {
  const regex = new RegExp(`id:\\s*'${categorieId}'`, 'g');
  const correspondances = fileContent.match(regex);
  if (correspondances && correspondances.length > 0) {
    console.log(`✅ ${categorieId}: TROUVÉE (${correspondances.length} occurrence(s))`);
    categoriesTrouvees++;
  } else {
    console.log(`❌ ${categorieId}: NON TROUVÉE`);
  }
});

console.log(`\n📊 RÉSULTAT: ${categoriesTrouvees}/${categoriesAttendues.length} catégories principales trouvées`);

console.log('\n📋 VÉRIFICATION DES SOUS-CATÉGORIES COLLECTIONS & BROCANTE:');
console.log('================================================================================');

let sousCategoriesTrouvees = 0;
sousCategoriesCollectionsAttendues.forEach(sousCategorieId => {
  const regex = new RegExp(`id:\\s*'${sousCategorieId}'`, 'g');
  const correspondances = fileContent.match(regex);
  if (correspondances && correspondances.length > 0) {
    console.log(`✅ ${sousCategorieId}: TROUVÉE (${correspondances.length} occurrence(s))`);
    sousCategoriesTrouvees++;
  } else {
    console.log(`❌ ${sousCategorieId}: NON TROUVÉE`);
  }
});

console.log(`\n📊 RÉSULTAT: ${sousCategoriesTrouvees}/${sousCategoriesCollectionsAttendues.length} sous-catégories trouvées`);

console.log('\n🌍 VÉRIFICATION DU SUPPORT MULTILINGUE:');
console.log('================================================================================');

// Vérification des traductions françaises
const traductionsFr = fileContent.match(/"fr":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions françaises: ${traductionsFr.length} trouvées`);

// Vérification des traductions arabes
const traductionsAr = fileContent.match(/"ar":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions arabes: ${traductionsAr.length} trouvées`);

// Vérification des traductions anglaises
const traductionsEn = fileContent.match(/"en":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions anglaises: ${traductionsEn.length} trouvées`);

// Vérification des traductions allemandes
const traductionsDe = fileContent.match(/"de":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions allemandes: ${traductionsDe.length} trouvées`);

// Vérification des traductions espagnoles
const traductionsEs = fileContent.match(/"es":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions espagnoles: ${traductionsEs.length} trouvées`);

// Vérification des traductions italiennes
const traductionsIt = fileContent.match(/"it":\s*"[^"]*"/g) || [];
console.log(`✅ Traductions italiennes: ${traductionsIt.length} trouvées`);

console.log('\n📊 RÉSULTAT MULTILINGUE:');
console.log(`Total des traductions: ${traductionsFr.length + traductionsAr.length + traductionsEn.length + traductionsDe.length + traductionsEs.length + traductionsIt.length}`);

// Vérification que toutes les langues ont le même nombre de traductions
const traductionsParLangue = {
  fr: traductionsFr.length,
  ar: traductionsAr.length,
  en: traductionsEn.length,
  de: traductionsDe.length,
  es: traductionsEs.length,
  it: traductionsIt.length
};

const valeursTraductions = Object.values(traductionsParLangue);
const traductionsUniformes = valeursTraductions.every(v => v === valeursTraductions[0]);

if (traductionsUniformes) {
  console.log(`✅ Support multilingue uniforme: ${valeursTraductions[0]} traductions par langue`);
} else {
  console.log('⚠️ Support multilingue non uniforme:');
  Object.entries(traductionsParLangue).forEach(([langue, nombre]) => {
    console.log(`   ${langue}: ${nombre} traductions`);
  });
}

console.log('\n🎯 VALIDATION DE LA STRUCTURE COMPLÈTE:');
console.log('================================================================================');

// Vérification de la structure hiérarchique
const categoriesCompletes = fileContent.match(/id:\s*'[^']+',\s*name:\s*'[^']+',\s*slug:\s*'[^']+',\s*icon:\s*undefined,\s*translations:\s*{[^}]*},?\s*subcategories:\s*\[/g) || [];
console.log(`✅ Catégories complètes avec traductions: ${categoriesCompletes.length} trouvées`);

// Vérification des sous-catégories complètes
const sousCategoriesCompletes = fileContent.match(/id:\s*'[^']+',\s*name:\s*'[^']+',\s*slug:\s*'[^']+',\s*icon:\s*undefined,\s*translations:\s*{[^}]*},?\s*subcategories:\s*\[[^\]]*\]/g) || [];
console.log(`✅ Sous-catégories complètes avec traductions: ${sousCategoriesCompletes.length} trouvées`);

console.log('\n🏆 RÉSULTAT FINAL DE LA VALIDATION:');
console.log('================================================================================');

const scoreCategories = (categoriesTrouvees / categoriesAttendues.length) * 100;
const scoreSousCategories = (sousCategoriesTrouvees / sousCategoriesCollectionsAttendues.length) * 100;
const scoreMultilingue = traductionsUniformes ? 100 : 80;
const scoreStructure = categoriesCompletes.length > 0 ? 100 : 0;

const scoreFinal = (scoreCategories + scoreSousCategories + scoreMultilingue + scoreStructure) / 4;

console.log(`📊 Score catégories principales: ${scoreCategories.toFixed(1)}%`);
console.log(`📊 Score sous-catégories Collections & Brocante: ${scoreSousCategories.toFixed(1)}%`);
console.log(`📊 Score support multilingue: ${scoreMultilingue.toFixed(1)}%`);
console.log(`📊 Score structure complète: ${scoreStructure.toFixed(1)}%`);
console.log(`🏆 SCORE FINAL: ${scoreFinal.toFixed(1)}%`);

if (scoreFinal >= 95) {
  console.log('\n🎉 VALIDATION EXCELLENTE ! L\'implémentation est complète et fonctionnelle.');
} else if (scoreFinal >= 80) {
  console.log('\n✅ VALIDATION BONNE ! L\'implémentation est fonctionnelle avec quelques améliorations possibles.');
} else if (scoreFinal >= 60) {
  console.log('\n⚠️ VALIDATION MOYENNE ! L\'implémentation nécessite des corrections importantes.');
} else {
  console.log('\n❌ VALIDATION ÉCHOUÉE ! L\'implémentation nécessite une refonte complète.');
}

console.log('\n================================================================================');
console.log('🏁 FIN DE LA VALIDATION FINALE COMPLÈTE');