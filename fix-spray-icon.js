import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier qui contient l'importation de lucide-react
const lucideFilePath = path.join(__dirname, 'src/utils/categoryIcons/lucideIcons.tsx');

console.log('🔍 Analyse du fichier lucideIcons.tsx...');

// Lire le fichier
let content;
try {
  content = fs.readFileSync(lucideFilePath, 'utf8');
  console.log('✅ Fichier lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier:', error.message);
  process.exit(1);
}

// Remplacer l'icône Spray par une icône qui existe dans lucide-react
// L'icône Spray n'existe pas dans la bibliothèque lucide-react, nous allons la remplacer par Droplets
content = content.replace(/Spray/g, 'Droplets');

// Écrire le fichier corrigé
try {
  fs.writeFileSync(lucideFilePath, content);
  console.log('✅ Fichier corrigé avec succès');
  console.log('✅ L\'icône Spray a été remplacée par Droplets');
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier corrigé:', error.message);
  process.exit(1);
}

console.log('\n🎉 Correction terminée !');
console.log('💡 L\'erreur d\'importation de l\'icône Spray a été corrigée.');
console.log('💡 Veuillez redémarrer le serveur de développement pour que les changements prennent effet.');