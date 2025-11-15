import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction pour rechercher récursivement des fichiers
function findFiles(dir, pattern, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, pattern, results);
    } else if (pattern.test(file)) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Rechercher tous les fichiers TypeScript et TSX
console.log('🔍 Recherche des fichiers TypeScript et TSX...');
const tsFiles = findFiles(path.join(__dirname, 'src'), /\.(ts|tsx)$/);
console.log(`✅ ${tsFiles.length} fichiers trouvés`);

// Rechercher les fichiers qui contiennent l'importation de Spray
console.log('\n🔍 Recherche des fichiers qui importent Spray...');
const sprayFiles = [];

for (const file of tsFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('Spray') && content.includes('lucide-react')) {
      sprayFiles.push(file);
    }
  } catch (error) {
    console.log(`⚠️ Erreur lors de la lecture du fichier ${file}:`, error.message);
  }
}

console.log(`✅ ${sprayFiles.length} fichiers trouvés qui importent Spray depuis lucide-react`);

// Afficher les fichiers trouvés et leur contenu
if (sprayFiles.length > 0) {
  console.log('\n📄 Fichiers trouvés:');
  
  for (const file of sprayFiles) {
    console.log(`\n📁 ${file}`);
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      // Afficher les lignes qui contiennent "Spray"
      lines.forEach((line, index) => {
        if (line.includes('Spray')) {
          console.log(`  Ligne ${index + 1}: ${line}`);
        }
      });
    } catch (error) {
      console.log(`  ⚠️ Erreur lors de la lecture du fichier:`, error.message);
    }
  }
} else {
  console.log('\n❌ Aucun fichier trouvé qui importe Spray depuis lucide-react');
}