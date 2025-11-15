// Script de test pour vérifier la mise à jour des catégories
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Vérification de la mise à jour des catégories...\n');

// Vérifier que le fichier principal existe
const mainCategoriesPath = path.join(__dirname, 'src/data/categories/main27Categories.ts');
if (fs.existsSync(mainCategoriesPath)) {
  console.log('✅ Fichier principal main27Categories.ts trouvé');
} else {
  console.log('❌ Fichier principal main27Categories.ts NON trouvé');
}

// Vérifier que les anciens fichiers n'existent plus
const oldFiles = [
  'src/data/categories/main26Categories.ts',
  'src/data/categories/main26CategoriesAr.ts',
  'src/data/categories/main26CategoriesEn.ts',
  'src/data/categories/main26CategoriesDe.ts',
  'src/data/categories/main26CategoriesEs.ts'
];

let oldFilesFound = 0;
oldFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`❌ Ancien fichier encore présent: ${file}`);
    oldFilesFound++;
  }
});

if (oldFilesFound === 0) {
  console.log('✅ Tous les anciens fichiers ont été correctement renommés');
}

// Vérifier que les nouveaux fichiers existent
const newFiles = [
  'src/data/categories/main27CategoriesAr.ts',
  'src/data/categories/main27CategoriesEn.ts',
  'src/data/categories/main27CategoriesDe.ts',
  'src/data/categories/main27CategoriesEs.ts'
];

let newFilesFound = 0;
newFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ Nouveau fichier trouvé: ${file}`);
    newFilesFound++;
  } else {
    console.log(`❌ Nouveau fichier MANQUANT: ${file}`);
  }
});

// Vérifier le contenu du fichier principal
try {
  const mainCategoriesContent = fs.readFileSync(mainCategoriesPath, 'utf8');
  
  // Compter le nombre de catégories principales
  const categoryMatches = mainCategoriesContent.match(/id: '[^']+',/g);
  const categoryCount = categoryMatches ? categoryMatches.length : 0;
  
  console.log(`\n📊 Statistiques:`);
  console.log(`- Nombre de catégories principales détectées: ${categoryCount}`);
  
  // Vérifier que la catégorie "Téléphone" existe
  if (mainCategoriesContent.includes("id: 'telephone'")) {
    console.log('✅ Catégorie "Téléphone" trouvée dans le fichier principal');
  } else {
    console.log('❌ Catégorie "Téléphone" NON trouvée dans le fichier principal');
  }
  
  // Vérifier que la sous-catégorie "Téléphonie" a été retirée
  if (!mainCategoriesContent.includes("id: 'telephonie'")) {
    console.log('✅ Ancienne sous-catégorie "Téléphonie" correctement retirée');
  } else {
    console.log('❌ Ancienne sous-catégorie "Téléphonie" encore présente');
  }
  
} catch (error) {
  console.log(`❌ Erreur lors de la lecture du fichier principal: ${error.message}`);
}

console.log('\n🎯 Vérification terminée !');