import fs from 'fs';
import path from 'path';

console.log('🔗 INTÉGRATION DE "Gastronomie & Produits du Terroir"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Lecture du fichier de la nouvelle catégorie
const newCategoryPath = path.join(process.cwd(), 'gastronomie-terroir-category.ts');
const newCategoryContent = fs.readFileSync(newCategoryPath, 'utf-8');

console.log('✅ Fichiers lus avec succès');

// Recherche de l'emplacement d'insertion (après "Produits Locaux Algériens")
const produitsLocauxPattern = /id:\s*'produits-locaux-algeriens'[\s\S]*?subcategories:\s*\[[\s\S]*?\]\s*}\s*},?/g;
const produitsLocauxMatch = fileContent.match(produitsLocauxPattern);

if (!produitsLocauxMatch) {
  console.error('❌ Erreur: Impossible de trouver la section "Produits Locaux Algériens"');
  process.exit(1);
}

console.log('✅ Emplacement d\'insertion trouvé après "Produits Locaux Algériens"');

// Extraction de la position d'insertion
const produitsLocauxIndex = fileContent.indexOf(produitsLocauxMatch[0]);
if (produitsLocauxIndex === -1) {
  console.error('❌ Erreur: Impossible de localiser la position d\'insertion');
  process.exit(1);
}

const insertionPosition = produitsLocauxIndex + produitsLocauxMatch[0].length;

// Construction du nouveau contenu
const avantInsertion = fileContent.substring(0, insertionPosition);
const apresInsertion = fileContent.substring(insertionPosition);

// Ajout de la nouvelle catégorie avec la virgule appropriée
const nouvelleCategorie = `  ,${newCategoryContent}`;

const nouveauContenu = avantInsertion + nouvelleCategorie + apresInsertion;

// Écriture du nouveau fichier
fs.writeFileSync(filePath, nouveauContenu, 'utf-8');

console.log('✅ Catégorie "Gastronomie & Produits du Terroir" intégrée avec succès');

// Vérification de l'intégration
const verificationContent = fs.readFileSync(filePath, 'utf-8');
const categorieIntegree = verificationContent.includes('id: \'gastronomie-produits-terroir\'');

if (categorieIntegree) {
  console.log('✅ Vérification: La catégorie est bien présente dans le fichier');
} else {
  console.error('❌ Erreur: La catégorie n\'a pas été correctement intégrée');
  process.exit(1);
}

// Comptage des catégories pour validation
const categoriesCount = (verificationContent.match(/id:\s*'[^']*'/g) || []).length;
const traductionsFrCount = (verificationContent.match(/"fr":\s*"[^"]*"/g) || []).length;
const traductionsArCount = (verificationContent.match(/"ar":\s*"[^"]*"/g) || []).length;
const traductionsEnCount = (verificationContent.match(/"en":\s*"[^"]*"/g) || []).length;
const traductionsDeCount = (verificationContent.match(/"de":\s*"[^"]*"/g) || []).length;
const traductionsEsCount = (verificationContent.match(/"es":\s*"[^"]*"/g) || []).length;

console.log('\n📊 STATISTIQUES APRÈS INTÉGRATION:');
console.log('================================================================================');
console.log(`📋 Total des catégories: ${categoriesCount}`);
console.log(`🌍 Traductions françaises: ${traductionsFrCount}`);
console.log(`🌍 Traductions arabes: ${traductionsArCount}`);
console.log(`🌍 Traductions anglaises: ${traductionsEnCount}`);
console.log(`🌍 Traductions allemandes: ${traductionsDeCount}`);
console.log(`🌍 Traductions espagnoles: ${traductionsEsCount}`);

// Vérification spécifique de la nouvelle catégorie
console.log('\n🔍 VÉRIFICATION DÉTAILLÉE DE LA NOUVELLE CATÉGORIE:');
console.log('================================================================================');

const nouvelleCategoriePattern = /id:\s*'gastronomie-produits-terroir'[\s\S]*?subcategories:\s*\[[\s\S]*?\]\s*}\s*}/g;
const nouvelleCategorieMatch = verificationContent.match(nouvelleCategoriePattern);

if (nouvelleCategorieMatch) {
  console.log('✅ Structure complète trouvée');
  
  // Vérification des sous-catégories
  const sousCategoriesPattern = /id:\s*'[^']*'/g;
  const sousCategories = nouvelleCategorieMatch[0].match(sousCategoriesPattern) || [];
  console.log(`📊 Sous-catégories trouvées: ${sousCategories.length}`);
  
  // Vérification des traductions dans la nouvelle catégorie
  const traductionsNouvelleCat = nouvelleCategorieMatch[0].match(/"[a-z]{2}":\s*"[^"]*"/g) || [];
  console.log(`🌍 Traductions dans la nouvelle catégorie: ${traductionsNouvelleCat.length}`);
  
  // Affichage des sous-catégories
  console.log('\n📋 Sous-catégories intégrées:');
  sousCategories.forEach((sousCat, index) => {
    if (index > 0) { // Ignorer le premier qui est l'ID de la catégorie principale
      const nomSousCat = sousCat.match(/'([^']*)'/)[1];
      console.log(`   ${index}. ${nomSousCat}`);
    }
  });
  
} else {
  console.error('❌ Erreur: Structure de la nouvelle catégorie non trouvée');
}

// Nettoyage du fichier temporaire
fs.unlinkSync(newCategoryPath);
console.log('\n✅ Fichier temporaire supprimé');

console.log('\n================================================================================');
console.log('🏁 INTÉGRATION TERMINÉE AVEC SUCCÈS');