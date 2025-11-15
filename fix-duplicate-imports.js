import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Correction des imports dupliqués...\n');

// Fonction pour corriger un fichier
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remplacer les imports dupliqués
    content = content.replace(
      /useSafeI18nWithRouterWithRouter/g,
      'useSafeI18nWithRouter'
    );
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Erreur lors de la correction de ${filePath}:`, error.message);
    return false;
  }
}

// Fonction pour trouver tous les fichiers .tsx et .ts
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Trouver tous les fichiers .tsx et .ts
const srcDir = path.join(__dirname, 'src');
const allFiles = findFiles(srcDir);

console.log(`📁 ${allFiles.length} fichiers trouvés`);

// Filtrer les fichiers qui ont des imports dupliqués
const filesToFix = allFiles.filter(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    return content.includes('useSafeI18nWithRouterWithRouter');
  } catch (error) {
    return false;
  }
});

console.log(`🎯 ${filesToFix.length} fichiers à corriger\n`);

// Corriger les fichiers
let fixedCount = 0;
filesToFix.forEach(file => {
  const relativePath = path.relative(__dirname, file);
  if (fixFile(file)) {
    console.log(`✅ ${relativePath} - Corrigé avec succès`);
    fixedCount++;
  } else {
    console.log(`❌ ${relativePath} - Erreur de correction`);
  }
});

console.log(`\n📊 Correction terminée: ${fixedCount}/${filesToFix.length} fichiers corrigés`);