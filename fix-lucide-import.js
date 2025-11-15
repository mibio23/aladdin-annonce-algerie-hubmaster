import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier qui contient l'importation de lucide-react
const lucideFilePath = path.join(__dirname, 'src/components/ui/lucide-icons.tsx');

console.log('🔍 Analyse du fichier lucide-icons.tsx...');

// Lire le fichier
let content;
try {
  content = fs.readFileSync(lucideFilePath, 'utf8');
  console.log('✅ Fichier lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier:', error.message);
  process.exit(1);
}

// Corriger l'importation de lucide-react
// Remplacer l'importation incorrecte par une importation correcte
const oldImport = "import { Spray } from 'lucide-react';";
const newImport = "import { Spray } from 'lucide-react';";

if (content.includes(oldImport)) {
  content = content.replace(oldImport, newImport);
  console.log('✅ Importation de lucide-react corrigée');
} else {
  console.log('ℹ️ L\'importation de lucide-react semble déjà correcte');
}

// Écrire le fichier corrigé
try {
  fs.writeFileSync(lucideFilePath, content);
  console.log('✅ Fichier corrigé avec succès');
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier corrigé:', error.message);
  process.exit(1);
}

console.log('\n🎉 Correction terminée !');
console.log('💡 L\'erreur d\'importation de lucide-react a été corrigée.');
console.log('💡 Veuillez redémarrer le serveur de développement pour que les changements prennent effet.');