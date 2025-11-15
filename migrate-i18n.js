import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Migration automatique des composants i18n...\n');

// Fonction pour migrer un fichier
function migrateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remplacer les imports
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*["']@\/lib\/i18n\/i18nContext["'];?/g,
      (match, imports) => {
        // Si le fichier utilise déjà le nouveau système, ne pas modifier
        if (imports.includes('useSafeI18nWithRouter') || imports.includes('useI18nWithRouter')) {
          return match;
        }
        
        // Remplacer par le nouveau système
        return `import { ${imports.replace(/useI18n/g, 'useSafeI18nWithRouter').replace(/useSafeI18n/g, 'useSafeI18nWithRouter')} } from "@/lib/i18n/i18nContextWithRouter";`;
      }
    );
    
    // Remplacer les appels aux hooks
    content = content.replace(
      /\buseI18n\(\)/g,
      'useSafeI18nWithRouter()'
    );
    
    content = content.replace(
      /\buseSafeI18n\(\)/g,
      'useSafeI18nWithRouter()'
    );
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Erreur lors de la migration de ${filePath}:`, error.message);
    return false;
  }
}

// Fonction pour trouver tous les fichiers .tsx
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Trouver tous les fichiers .tsx
const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

console.log(`📁 ${tsxFiles.length} fichiers .tsx trouvés`);

// Filtrer les fichiers qui utilisent useI18n
const filesToMigrate = tsxFiles.filter(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    return content.includes('useI18n(') || content.includes('useSafeI18n(');
  } catch (error) {
    return false;
  }
});

console.log(`🎯 ${filesToMigrate.length} fichiers à migrer\n`);

// Migrer les fichiers
let migratedCount = 0;
filesToMigrate.forEach(file => {
  const relativePath = path.relative(__dirname, file);
  if (migrateFile(file)) {
    console.log(`✅ ${relativePath} - Migré avec succès`);
    migratedCount++;
  } else {
    console.log(`❌ ${relativePath} - Erreur de migration`);
  }
});

console.log(`\n📊 Migration terminée: ${migratedCount}/${filesToMigrate.length} fichiers migrés`);
console.log('🌐 Redémarrez le serveur de développement pour voir les changements');