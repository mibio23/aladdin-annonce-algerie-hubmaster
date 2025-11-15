// Script pour corriger l'erreur "cyclic object value" dans les composants React
import fs from 'fs';
import path from 'path';

console.log('🔧 Correction de l\'erreur "cyclic object value" dans les composants React\n');

// Fonction pour créer des fonctions utilitaires sécurisées
function createSafeUtils() {
  return `
// Fonctions utilitaires pour éviter les erreurs cycliques
function safeStringify(obj, indent = 2) {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular Reference]';
      }
      cache.add(value);
    }
    return value;
  }, indent);
}

function safeLog(description, obj) {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      const safeObj = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(\`  ❌ Erreur de log: \${error.message}\`);
  }
}
`;
}

// Fonction pour corriger un fichier spécifique
function fixFile(filePath, description) {
  console.log(`📝 Correction de ${description}: ${filePath}`);
  
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`  ⚠️  Fichier non trouvé: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Ajouter les fonctions utilitaires au début du fichier (après les imports)
    const utils = createSafeUtils();
    
    // Trouver où insérer les utilitaires (après le dernier import)
    const importRegex = /import[^;]+;[^\\n]*\\n/g;
    const imports = content.match(importRegex) || [];
    const lastImportIndex = imports.length > 0 ? 
      content.lastIndexOf(imports[imports.length - 1]) + imports[imports.length - 1].length : 0;
    
    // Insérer les utilitaires après les imports
    if (lastImportIndex > 0 && !content.includes('safeStringify')) {
      content = content.slice(0, lastImportIndex) + 
                '\\n' + utils + '\\n' + 
                content.slice(lastImportIndex);
    }
    
    // Remplacer les JSON.stringify dangereux
    content = content.replace(/JSON\.stringify\(([^,)]+)(,\s*[^,)]+)?\)/g, (match, obj, indent) => {
      if (indent) {
        return `safeStringify(${obj}${indent})`;
      }
      return `safeStringify(${obj})`;
    });
    
    // Remplacer les console.log avec objets complexes
    content = content.replace(/console\.log\(`([^`]+)`\s*,\s*([^)]+)\)/g, (match, desc, obj) => {
      return `safeLog(\`${desc}\`, ${obj})`;
    });
    
    // Sauvegarder les modifications
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Fichier corrigé: ${filePath}`);
      return true;
    } else {
      console.log(`  ℹ️  Aucune correction nécessaire: ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.log(`  ❌ Erreur lors de la correction de ${filePath}: ${error.message}`);
    return false;
  }
}

// Fonction principale
function main() {
  console.log('🔄 Démarrage de la correction des composants React...\n');
  
  // Liste des fichiers à corriger
  const filesToFix = [
    {
      path: 'src/components/performance/CategoryPerformanceMonitor.tsx',
      desc: 'CategoryPerformanceMonitor'
    },
    {
      path: 'src/pages/Parametres.tsx',
      desc: 'Parametres'
    },
    {
      path: 'src/components/admin/categories/CategoryEditor.tsx',
      desc: 'CategoryEditor'
    },
    {
      path: 'src/pages/ShopViewPage.tsx',
      desc: 'ShopViewPage'
    },
    {
      path: 'src/pages/ShopViewPage.multilingual.tsx',
      desc: 'ShopViewPage multilingual'
    },
    {
      path: 'src/pages/CreateShopPage.tsx',
      desc: 'CreateShopPage'
    },
    {
      path: 'src/pages/CreateShopPage.multilingual.tsx',
      desc: 'CreateShopPage multilingual'
    },
    {
      path: 'src/lib/i18n/admin/TranslationAdmin.tsx',
      desc: 'TranslationAdmin'
    },
    {
      path: 'src/components/shop/ContactModal.tsx',
      desc: 'ContactModal'
    },
    {
      path: 'src/components/search/SearchExport.tsx',
      desc: 'SearchExport'
    },
    {
      path: 'src/components/search/SmartSearchSuggestions.tsx',
      desc: 'SmartSearchSuggestions'
    },
    {
      path: 'src/components/offline/OfflineMode.tsx',
      desc: 'OfflineMode'
    },
    {
      path: 'src/components/home/InteractiveOptionsCarousel.tsx',
      desc: 'InteractiveOptionsCarousel'
    },
    {
      path: 'src/components/avatar/AvatarGenerator.tsx',
      desc: 'AvatarGenerator'
    }
  ];
  
  let fixedCount = 0;
  let totalCount = 0;
  
  // Corriger chaque fichier
  filesToFix.forEach(file => {
    totalCount++;
    if (fixFile(file.path, file.desc)) {
      fixedCount++;
    }
  });
  
  // Créer un fichier d'utilitaires global
  const globalUtilsPath = 'src/utils/safeSerialization.ts';
  if (!fs.existsSync(globalUtilsPath)) {
    const globalUtils = `// Utilitaires pour éviter les erreurs de sérialisation cyclique

export function safeStringify(obj: any, indent: number = 2): string {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular Reference]';
      }
      cache.add(value);
    }
    return value;
  }, indent);
}

export function safeLog(description: string, obj: any): void {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      const safeObj: any = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(\`  ❌ Erreur de log: \${(error as Error).message}\`);
  }
}

export function safeJSONParse<T>(str: string, fallback?: T): T | null {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.warn('Erreur de parsing JSON:', error);
    return fallback || null;
  }
}
`;
    
    fs.writeFileSync(globalUtilsPath, globalUtils);
    console.log(`✅ Fichier d'utilitaires global créé: ${globalUtilsPath}`);
  }
  
  // Résultat final
  console.log('\n' + '='.repeat(60));
  console.log('🎉 CORRECTION DES COMPOSANTS RÉACT TERMINÉE!');
  console.log('='.repeat(60));
  
  console.log(`\n📊 Résumé de la correction:`);
  console.log(`  ✅ Fichiers corrigés: ${fixedCount}/${totalCount}`);
  console.log(`  ✅ Utilitaires globaux créés: src/utils/safeSerialization.ts`);
  
  console.log('\n🚀 Prochaines étapes:');
  console.log('  1. Redémarrez l\'application: npm run dev');
  console.log('  2. Testez les fonctionnalités qui causaient l\'erreur');
  console.log('  3. Vérifiez que l\'erreur "cyclic object value" est résolue');
  
  console.log('\n💡 Conseils:');
  console.log('  • Utilisez safeStringify() au lieu de JSON.stringify()');
  console.log('  • Utilisez safeLog() pour les objets complexes');
  console.log('  • Importez les utilitaires depuis src/utils/safeSerialization.ts');
  
  console.log('='.repeat(60));
  
  return fixedCount > 0;
}

// Exécuter la correction
main().catch(error => {
  console.error('💥 Erreur critique:', error);
  process.exit(1);
});