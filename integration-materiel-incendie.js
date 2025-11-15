import fs from 'fs';
import path from 'path';

console.log('🔗 INTÉGRATION DE "Matériel Professionnel d\'Incendie"');
console.log('================================================================================');

// Lecture du fichier de catégories principal
const filePath = path.join(process.cwd(), 'src/data/categories/extended/extendedCategories.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Lecture du fichier de la nouvelle catégorie
const newCategoryPath = path.join(process.cwd(), 'materiel-incendie-category.ts');
const newCategoryContent = fs.readFileSync(newCategoryPath, 'utf-8');

console.log('✅ Fichiers lus avec succès');

// Recherche de la fin complète de la section "Matériel Professionnel Médicale"
const materielMedicalPattern = /id:\s*'materiel-professionnel-medical'[\s\S]*?subcategories:\s*\[[\s\S]*?\]\s*}\s*},?/g;
const materielMedicalMatch = fileContent.match(materielMedicalPattern);

if (!materielMedicalMatch) {
  console.error('❌ Erreur: Impossible de trouver la section complète "Matériel Professionnel Médicale"');
  
  // Alternative: chercher la fin de la section par une autre méthode
  const debutSection = fileContent.indexOf("id: 'materiel-professionnel-medical'");
  if (debutSection === -1) {
    console.error('❌ Erreur: Section "Matériel Professionnel Médicale" non trouvée');
    process.exit(1);
  }
  
  // Chercher la fin de la section en comptant les accolades
  let braceCount = 0;
  let position = debutSection;
  let finSection = debutSection;
  let dansSection = false;
  
  while (position < fileContent.length) {
    const char = fileContent[position];
    
    if (char === '{') {
      if (!dansSection) {
        dansSection = true;
      }
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0 && dansSection) {
        finSection = position + 1;
        break;
      }
    }
    position++;
  }
  
  if (finSection > debutSection) {
    console.log('✅ Section "Matériel Professionnel Médicale" trouvée par méthode alternative');
    
    // Construction du nouveau contenu
    const avantInsertion = fileContent.substring(0, finSection);
    const apresInsertion = fileContent.substring(finSection);
    
    // Ajout de la nouvelle catégorie
    const nouvelleCategorie = `  ,${newCategoryContent}`;
    const nouveauContenu = avantInsertion + nouvelleCategorie + apresInsertion;
    
    // Écriture du nouveau fichier
    fs.writeFileSync(filePath, nouveauContenu, 'utf-8');
    console.log('✅ Catégorie "Matériel Professionnel d\'Incendie" intégrée avec succès');
    
  } else {
    console.error('❌ Erreur: Impossible de déterminer la fin de la section');
    process.exit(1);
  }
  
} else {
  console.log('✅ Section "Matériel Professionnel Médicale" trouvée par regex');
  
  // Extraction de la position d'insertion
  const materielMedicalIndex = fileContent.indexOf(materielMedicalMatch[0]);
  if (materielMedicalIndex === -1) {
    console.error('❌ Erreur: Impossible de localiser la position d\'insertion');
    process.exit(1);
  }
  
  const insertionPosition = materielMedicalIndex + materielMedicalMatch[0].length;
  
  // Construction du nouveau contenu
  const avantInsertion = fileContent.substring(0, insertionPosition);
  const apresInsertion = fileContent.substring(insertionPosition);
  
  // Ajout de la nouvelle catégorie
  const nouvelleCategorie = `  ,${newCategoryContent}`;
  const nouveauContenu = avantInsertion + nouvelleCategorie + apresInsertion;
  
  // Écriture du nouveau fichier
  fs.writeFileSync(filePath, nouveauContenu, 'utf-8');
  console.log('✅ Catégorie "Matériel Professionnel d\'Incendie" intégrée avec succès');
}

// Vérification de l'intégration
const verificationContent = fs.readFileSync(filePath, 'utf-8');
const categorieIntegree = verificationContent.includes('id: \'materiel-professionnel-incendie\'');

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

const nouvelleCategoriePattern = /id:\s*'materiel-professionnel-incendie'[\s\S]*?subcategories:\s*\[[\s\S]*?\]\s*}\s*}/g;
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