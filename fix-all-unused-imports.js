import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Correction automatique de tous les imports et variables non utilisés...\n');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let modified = false;

    // 1. Supprimer les imports React standalone non utilisés (plus agressif)
    if (content.match(/^import React/m) && !content.includes('React.') && !content.includes('<React.')) {
      content = content.replace(/^import React(,\s*\{[^}]*\})?\s+from\s+['"]react['"];?\s*\n/gm, (match, hooks) => {
        // Si il y avait des hooks, les garder
        if (hooks) {
          return `import ${hooks} from 'react';\n`;
        }
        return '';
      });
      modified = true;
    }

    // 2. Supprimer React des imports combinés si non utilisé
    if (content.match(/^import React, \{([^}]+)\} from ['"]react['"];/m) &&
        !content.includes('React.')) {
      content = content.replace(/^import React, (\{[^}]+\}) from ['"]react['"];/gm, 'import $1 from \'react\';');
      modified = true;
    }

    // 3. Supprimer des imports spécifiques non utilisés
    const unusedIcons = ['Home', 'Mic', 'TrendingUp', 'Star', 'Upload', 'MessageCircle', 'Bot', 'MapPin', 'Hash', 'Layers', 'Clock', 'ArrowUp', 'Image', 'useMemo', 'MoreHorizontal', 'Palette', 'BookOpen', 'Search', 'Calendar', 'Utensils', 'Gift', 'Users', 'Package'];
    unusedIcons.forEach(icon => {
      const regex = new RegExp(`(import\\s*\\{[^}]*)(\\s*,?\\s*${icon}\\s*,?)([^}]*\\}\\s*from\\s*['"](?:lucide-react|react)['"];)`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, (match, before, iconPart, after) => {
          const cleanedBefore = before.replace(/,\s*$/, '');
          const cleanedAfter = after.replace(/^\s*,/, '');
          const result = cleanedBefore + cleanedAfter;
          // Si l'import devient vide, le supprimer complètement
          if (result.match(/\{\s*\}/)) {
            return '';
          }
          return result;
        });
        modified = true;
      }
    });

    // 4. Supprimer Button non utilisé
    content = content.replace(/(import\s*\{[^}]*)(,?\s*Button\s*,?)([^}]*\}\s*from\s*['"]@\/components\/ui\/button['"];)/g, (match, before, buttonPart, after) => {
      const cleanedBefore = before.replace(/,\s*$/, '');
      const cleanedAfter = after.replace(/^\s*,/, '');
      const result = cleanedBefore + cleanedAfter;
      if (result.match(/\{\s*\}/)) {
        return '';
      }
      modified = true;
      return result;
    });

    // 5. Supprimer CardContent non utilisé
    content = content.replace(/(import\s*\{[^}]*)(,?\s*CardContent\s*,?)([^}]*\}\s*from\s*['"]@\/components\/ui\/card['"];)/g, (match, before, cardPart, after) => {
      const cleanedBefore = before.replace(/,\s*$/, '');
      const cleanedAfter = after.replace(/^\s*,/, '');
      const result = cleanedBefore + cleanedAfter;
      if (result.match(/\{\s*\}/)) {
        return '';
      }
      modified = true;
      return result;
    });

    // 6. Supprimer des lignes d'imports complètement vides
    content = content.replace(/^import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?\s*\n/gm, '');

    // 7. Préfixer les variables non utilisées avec underscore
    const unusedVars = [
      'wilayas', 'aiSuggestions', 'setSearchHistory', 'trendingKeywords', 
      'personalizedSuggestions', 'trackClick', 'sessionId', 'semanticResults',
      'results', 'index', 't', 'searchTime', 'formatSearchTime', 'language',
      'isListening', 'storedToken', 'state', 'delta', 'imagesDimensions',
      '_props', 'handleSubmit', '_handleSubmit', 'profile', 'data', 'filters', 'categoriesData',
      'communesData', 'wilayasData', 'specializations', 'features', 'MesAnnonces',
      'MesFavoris', 'DeposerAnnonce', 'Messages', 'CreateAnnouncement', 'DeposerOffreMetier'
    ];

    unusedVars.forEach(varName => {
      // Pour les const simples
      const constRegex = new RegExp(`(const\\s+)${varName}(\\s*[=:])`, 'g');
      if (content.match(constRegex) && !content.includes(`_${varName}`)) {
        content = content.replace(constRegex, `$1_${varName}$2`);
        modified = true;
      }
      
      // Pour les destructurations
      const destructRegex = new RegExp(`(\\{[^}]*)(\\s*,?\\s*${varName}\\s*,?)([^}]*\\})`, 'g');
      if (content.match(destructRegex)) {
        content = content.replace(destructRegex, (match, before, varPart, after) => {
          const newVar = varPart.replace(varName, `_${varName}`);
          modified = true;
          return before + newVar + after;
        });
      }
    });

    // 8. Supprimer les lignes de destructuration complètement non utilisées
    content = content.replace(/^\s*const\s*\{\s*\}\s*=\s*[^;]+;?\s*\n/gm, '');

    // 9. Préfixer les paramètres de fonction non utilisés
    content = content.replace(/\(([^)]*),\s*(index|_props|storedToken)\s*\)/g, (match, before, param) => {
      if (!param.startsWith('_')) {
        modified = true;
        return `(${before}, _${param})`;
      }
      return match;
    });

    // 10. Supprimer les imports lazy non utilisés (routes)
    const unusedComponents = ['MesAnnonces', 'MesFavoris', 'DeposerAnnonce', 'Messages', 'CreateAnnouncement', 'DeposerOffreMetier'];
    unusedComponents.forEach(comp => {
      const lazyRegex = new RegExp(`^const\\s+${comp}\\s*=\\s*lazy\\([^)]+\\);?\\s*\\n`, 'gm');
      if (content.match(lazyRegex)) {
        content = content.replace(lazyRegex, '');
        modified = true;
      }
    });
    
    // 11. Nettoyer les imports TypeScript non utilisés spécifiques
    // Supprimer ArrowLeft et ArrowRight non utilisés
    content = content.replace(/(import\s*\{[^}]*)(,?\s*ArrowLeft\s*,?)([^}]*\}\s*from\s*['"]lucide-react['"];)/g, (match, before, arrowPart, after) => {
      if (!content.includes('ArrowLeft')) {
        const cleanedBefore = before.replace(/,\s*$/, '');
        const cleanedAfter = after.replace(/^\s*,/, '');
        const result = cleanedBefore + cleanedAfter;
        if (result.match(/\{\s*\}/)) {
          return '';
        }
        modified = true;
        return result;
      }
      return match;
    });
    
    content = content.replace(/(import\s*\{[^}]*)(,?\s*ArrowRight\s*,?)([^}]*\}\s*from\s*['"]lucide-react['"];)/g, (match, before, arrowPart, after) => {
      if (!content.includes('ArrowRight')) {
        const cleanedBefore = before.replace(/,\s*$/, '');
        const cleanedAfter = after.replace(/^\s*,/, '');
        const result = cleanedBefore + cleanedAfter;
        if (result.match(/\{\s*\}/)) {
          return '';
        }
        modified = true;
        return result;
      }
      return match;
    });

    // 12. Nettoyer les lignes vides multiples
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (modified && content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Erreur: ${filePath}:`, error.message);
    return false;
  }
}

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

const srcDir = path.join(__dirname, 'src');
const allFiles = findFiles(srcDir);

console.log(`📁 ${allFiles.length} fichiers trouvés\n`);

let fixedCount = 0;
const fixedFiles = [];

allFiles.forEach(file => {
  const relativePath = path.relative(__dirname, file);
  if (fixFile(file)) {
    fixedFiles.push(relativePath);
    fixedCount++;
  }
});

console.log(`\n✅ ${fixedCount} fichiers corrigés:\n`);
fixedFiles.forEach(file => console.log(`  - ${file}`));

console.log(`\n🎉 Correction terminée!`);
console.log('💡 Lancez: npm run build');
