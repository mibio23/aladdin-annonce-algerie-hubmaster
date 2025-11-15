import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Récupérer tous les fichiers .ts dans le répertoire extended
const extendedDir = path.join(__dirname, 'src/data/categories/extended');
const files = fs.readdirSync(extendedDir).filter(file => file.endsWith('.ts'));

console.log(`Correction de ${files.length} fichiers...`);

// Créer une sauvegarde des fichiers originaux
const backupDir = path.join(__dirname, 'src/data/categories/extended_backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

files.forEach(file => {
  const filePath = path.join(extendedDir, file);
  const backupFilePath = path.join(backupDir, file);
  fs.copyFileSync(filePath, backupFilePath);
});

// Fonction pour corriger les chaînes de caractères avec des apostrophes
function fixStringLiterals(content) {
  // Remplacer toutes les apostrophes non échappées dans les chaînes de caractères
  // Utiliser une approche plus directe pour éviter les boucles infinies
  
  // D'abord, corriger les guillemets simples qui ne sont pas correctement échappés
  // en les remplaçant par des guillemets doubles pour éviter les problèmes d'échappement
  content = content.replace(/'([^']*?)'/g, (match, p1) => {
    if (p1.includes("'")) {
      return `"${p1.replace(/'/g, "'")}"`;
    }
    return match;
  });
  
  // Corriger les guillemets simples dans les valeurs des propriétés
  const patterns = [
    /:\s*'([^']*?)'/g,
    /id:\s*'([^']*?)'/g,
    /slug:\s*'([^']*?)'/g,
    /description:\s*'([^']*?)'/g,
    /name:\s*'([^']*?)'/g,
    /icon:\s*'([^']*?)'/g,
    /keywords:\s*'([^']*?)'/g,
    /\s'([^']*?)'/g
  ];
  
  patterns.forEach(pattern => {
    content = content.replace(pattern, (match, p1) => {
      if (p1.includes("'")) {
        return match.replace(p1, p1.replace(/'/g, "\\'"));
      }
      return match;
    });
  });
  
  return content;
}

// Traiter les fichiers par lots pour éviter de surcharger le système
const batchSize = 10;
let processedCount = 0;

function processBatch(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex && i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(extendedDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Corriger les chemins d'importation pour categoryTypes
    content = content.replace(/import { MenuCategory } from '\.\.\/categoryTypes';/g,
      "import { MenuCategory } from '../../categoryTypes';");
    
    // Appliquer la correction une seule fois pour chaque type de remplacement
    content = fixStringLiterals(content);
    
    // Corriger les chaînes de caractères qui contiennent des apostrophes dans les sous-catégories
    content = content.replace(/children:\s*\[(.*?)\]/gs, (match, p1) => {
      if (p1.includes("'")) {
        return `children: [${p1.replace(/'/g, "\\'")}]`;
      }
      return match;
    });
    
    // Appliquer à nouveau la correction pour s'assurer que tout est corrigé
    content = fixStringLiterals(content);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Corrigé: ${file}`);
    processedCount++;
  }
  
  if (processedCount < files.length) {
    // Traiter le prochain lot après un court délai pour éviter de surcharger le système
    setTimeout(() => {
      const nextStartIndex = processedCount;
      const nextEndIndex = Math.min(processedCount + batchSize, files.length);
      processBatch(nextStartIndex, nextEndIndex);
    }, 100);
  } else {
    console.log('Correction terminée!');
  }
}

// Commencer le traitement par lots
processBatch(0, Math.min(batchSize, files.length));