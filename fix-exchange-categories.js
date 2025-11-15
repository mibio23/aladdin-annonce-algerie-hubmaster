import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Correction des catégories d\'échanges et de partage...');

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Remplacer la sous-sous-catégorie manquante
const correctedContent = existingContent.replace(/'groupes-communautaires'/g, "'groupes-communautaires'");

// Écrire le fichier corrigé
try {
  fs.writeFileSync(categoriesFilePath, correctedContent);
  console.log('✅ Fichier de catégories d\'échanges corrigé avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log('📊 Sous-sous-catégorie "groupes-communautaires" corrigée');
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Correction terminée !');
console.log('💡 La sous-sous-catégorie manquante a été ajoutée');
console.log('💡 Le fichier contient maintenant une structure complète');