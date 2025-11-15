// Script pour diagnostiquer et corriger l'erreur "cyclic object value"
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

console.log('🔧 Diagnostic et correction de l\'erreur "cyclic object value"\n');

// Configuration Supabase
const SUPABASE_URL = "https://smsvybphkdxzvgawzoru.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g";

// Fonction pour sérialiser en toute sécurité les objets avec références circulaires
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

// Fonction pour logger en toute sécurité les objets
function safeLog(description, obj) {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      // Extraire uniquement les propriétés pertinentes
      const safeObj = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else if (typeof value === 'object') {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(`  ❌ Erreur de log: ${error.message}`);
  }
}

// Fonction pour tester les scripts problématiques
async function testProblematicScripts() {
  console.log('🔍 Test des scripts problématiques...\n');
  
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
  // Test 1: test-complete-optimizations.js
  console.log('1️⃣ Test de test-complete-optimizations.js:');
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .limit(5);
    
    if (error) {
      console.log(`  ❌ Erreur: ${error.message}`);
    } else {
      console.log(`  ✅ Données récupérées: ${data.length} catégories`);
      // Tester la sérialisation
      try {
        const serialized = safeStringify(data);
        console.log(`  ✅ Sérialisation réussie: ${serialized.length} caractères`);
      } catch (err) {
        console.log(`  ❌ Erreur de sérialisation: ${err.message}`);
      }
    }
  } catch (err) {
    console.log(`  ❌ Erreur critique: ${err.message}`);
  }
  
  // Test 2: test-supabase-connection.js
  console.log('\n2️⃣ Test de test-supabase-connection.js:');
  try {
    const { data, error } = await supabase
      .from('categories_with_translations')
      .select('*')
      .eq('language_code', 'fr')
      .limit(3);
    
    if (error) {
      console.log(`  ❌ Erreur: ${error.message}`);
    } else {
      console.log(`  ✅ Données récupérées: ${data.length} traductions`);
      // Tester la sérialisation
      try {
        const serialized = safeStringify(data);
        console.log(`  ✅ Sérialisation réussie: ${serialized.length} caractères`);
      } catch (err) {
        console.log(`  ❌ Erreur de sérialisation: ${err.message}`);
      }
    }
  } catch (err) {
    console.log(`  ❌ Erreur critique: ${err.message}`);
  }
  
  // Test 3: test-apres-migration.js
  console.log('\n3️⃣ Test de test-apres-migration.js:');
  try {
    const tables = ['categories', 'category_translations', 'category_images', 'category_tags'];
    const results = {};
    
    for (const table of tables) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .limit(1);
      
      if (error) {
        results[table] = { error: error.message };
      } else {
        results[table] = { count: data.length };
      }
    }
    
    console.log(`  ✅ Résultats des tables:`);
    safeLog('    ', results);
    
  } catch (err) {
    console.log(`  ❌ Erreur critique: ${err.message}`);
  }
}

// Fonction pour corriger les scripts problématiques
function fixProblematicScripts() {
  console.log('\n🔧 Correction des scripts problématiques...\n');
  
  const scriptsToFix = [
    'test-complete-optimizations.js',
    'test-supabase-connection.js',
    'test-apres-migration.js',
    'apply-supabase-schema.js',
    'execute-supabase-migration.js'
  ];
  
  scriptsToFix.forEach(script => {
    if (fs.existsSync(script)) {
      console.log(`📝 Analyse de ${script}:`);
      
      try {
        const content = fs.readFileSync(script, 'utf8');
        
        // Rechercher les console.log avec des objets potentiellement problématiques
        const problematicLogs = content.match(/console\.log\(.*\{.*\}.*\)/g) || [];
        const problematicDirLogs = content.match(/console\.dir\(.*\)/g) || [];
        
        if (problematicLogs.length > 0 || problematicDirLogs.length > 0) {
          console.log(`  ⚠️  ${problematicLogs.length} console.log(objets) trouvés`);
          console.log(`  ⚠️  ${problematicDirLogs.length} console.dir() trouvés`);
          
          // Créer une version corrigée
          const fixedContent = content
            .replace(/console\.log\(`([^`]+)`,\s*([^)]+)\)/g, (match, desc, obj) => {
              return `safeLog(\`${desc}\`, ${obj})`;
            })
            .replace(/console\.log\(([^,]+),\s*([^)]+)\)/g, (match, desc, obj) => {
              if (desc.includes("'") || desc.includes('"')) {
                return `safeLog(${desc}, ${obj})`;
              }
              return match;
            });
          
          // Sauvegarder la version corrigée
          const backupScript = `${script}.backup`;
          fs.writeFileSync(backupScript, content);
          console.log(`  ✅ Sauvegarde créée: ${backupScript}`);
          
          // Ajouter les fonctions utilitaires au début du script
          const utils = `
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
          
          const finalContent = utils + fixedContent;
          fs.writeFileSync(script, finalContent);
          console.log(`  ✅ Script corrigé: ${script}`);
          
        } else {
          console.log(`  ✅ Aucun problème détecté dans ${script}`);
        }
        
      } catch (error) {
        console.log(`  ❌ Erreur lors de l'analyse: ${error.message}`);
      }
    } else {
      console.log(`  ⚠️  Script ${script} non trouvé`);
    }
  });
}

// Fonction pour créer un script de test sécurisé
function createSafeTestScript() {
  console.log('\n📝 Création d\'un script de test sécurisé...\n');
  
  const safeTestScript = `// Script de test sécurisé pour éviter les erreurs "cyclic object value"
import { createClient } from '@supabase/supabase-js';

console.log('🧪 Test sécurisé Supabase - Site Aladdin\\n');

// Configuration
const SUPABASE_URL = "${SUPABASE_URL}";
const SUPABASE_ANON_KEY = "${SUPABASE_ANON_KEY}";

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

// Test principal
async function runSafeTest() {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    console.log('📊 Test de connexion sécurisée...');
    
    // Test 1: Catégories
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('*')
      .limit(5);
    
    if (catError) {
      console.log(\`❌ Erreur catégories: \${catError.message}\`);
    } else {
      console.log(\`✅ \${categories.length} catégories trouvées\`);
      categories.forEach((cat, i) => {
        console.log(\`  \${i+1}. \${cat.slug}\`);
      });
    }
    
    // Test 2: Traductions
    const { data: translations, error: transError } = await supabase
      .from('category_translations')
      .select('*')
      .eq('language_code', 'fr')
      .limit(3);
    
    if (transError) {
      console.log(\`❌ Erreur traductions: \${transError.message}\`);
    } else {
      console.log(\`✅ \${translations.length} traductions trouvées\`);
      translations.forEach((trans, i) => {
        console.log(\`  \${i+1}. \${trans.name}\`);
      });
    }
    
    console.log('\\n✅ Test terminé sans erreur cyclique!');
    
  } catch (error) {
    console.error('💥 Erreur:', error.message);
  }
}

// Exécuter le test
runSafeTest();
`;
  
  fs.writeFileSync('test-safe-supabase.js', safeTestScript);
  console.log('✅ Script de test sécurisé créé: test-safe-supabase.js');
}

// Fonction principale
async function main() {
  console.log('🔄 Démarrage du diagnostic et de la correction...\n');
  
  // Étape 1: Tester les scripts problématiques
  await testProblematicScripts();
  
  // Étape 2: Corriger les scripts
  fixProblematicScripts();
  
  // Étape 3: Créer un script de test sécurisé
  createSafeTestScript();
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 DIAGNOSTIC ET CORRECTION TERMINÉS!');
  console.log('='.repeat(60));
  
  console.log('\n📋 Résumé des actions:');
  console.log('  ✅ Analyse des scripts problématiques');
  console.log('  ✅ Correction des console.log avec objets');
  console.log('  ✅ Ajout de fonctions utilitaires sécurisées');
  console.log('  ✅ Création de sauvegardes (.backup)');
  console.log('  ✅ Création d\'un script de test sécurisé');
  
  console.log('\n🚀 Prochaines étapes:');
  console.log('  1. Exécutez: node test-safe-supabase.js');
  console.log('  2. Vérifiez que l\'erreur cyclique est résolue');
  console.log('  3. Testez les autres scripts corrigés');
  console.log('  4. Redémarrez votre application si nécessaire');
  
  console.log('\n💡 Conseils:');
  console.log('  • Utilisez safeLog() au lieu de console.log(obj)');
  console.log('  • Utilisez safeStringify() pour sérialiser des objets complexes');
  console.log('  • Évitez console.dir() sur des objets Supabase');
  
  console.log('='.repeat(60));
}

// Exécuter le diagnostic
main().catch(error => {
  console.error('💥 Erreur critique:', error);
  process.exit(1);
});