// Script de test complet pour valider toutes les corrections du système AL@DDIN
import fs from 'fs';
import path from 'path';

console.log('🧪 TEST COMPLET DES CORRECTIONS SYSTÈME - AL@DDIN\n');

// Fonction pour vérifier l'existence d'un fichier
function checkFile(filePath, description) {
  try {
    const exists = fs.existsSync(filePath);
    if (exists) {
      console.log(`✅ ${description}: ${filePath}`);
      return true;
    } else {
      console.log(`❌ ${description}: ${filePath} (manquant)`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description}: ${filePath} (erreur: ${error.message})`);
    return false;
  }
}

// Fonction pour vérifier le contenu d'un fichier
function checkFileContent(filePath, expectedContent, description) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`❌ ${description}: Fichier inexistant`);
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const found = expectedContent.some(search => content.includes(search));
    
    if (found) {
      console.log(`✅ ${description}: Contenu correct`);
      return true;
    } else {
      console.log(`❌ ${description}: Contenu incorrect ou manquant`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ${description}: Erreur de lecture - ${error.message}`);
    return false;
  }
}

// Fonction pour vérifier la configuration TypeScript
function checkTypeScriptConfig() {
  try {
    const configPath = 'tsconfig.app.json';
    if (!fs.existsSync(configPath)) {
      console.log('❌ Configuration TypeScript: Fichier tsconfig.app.json manquant');
      return false;
    }
    
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const strictEnabled = config.compilerOptions?.strict === true;
    const noImplicitAny = config.compilerOptions?.noImplicitAny === true;
    
    if (strictEnabled && noImplicitAny) {
      console.log('✅ Configuration TypeScript: Mode strict activé');
      return true;
    } else {
      console.log('❌ Configuration TypeScript: Mode strict désactivé');
      return false;
    }
  } catch (error) {
    console.log(`❌ Configuration TypeScript: Erreur - ${error.message}`);
    return false;
  }
}

// Tests des fichiers CSS
console.log('📁 TEST DES FICHIERS CSS');
const cssFiles = [
  { path: 'src/styles/base.css', desc: 'Styles de base' },
  { path: 'src/styles/components.css', desc: 'Styles des composants' },
  { path: 'src/styles/utilities.css', desc: 'Styles utilitaires' },
  { path: 'src/styles/rtl.css', desc: 'Styles RTL' }
];

let cssTestsPassed = 0;
cssFiles.forEach(file => {
  if (checkFile(file.path, file.desc)) cssTestsPassed++;
});

console.log(`\n📊 Résultats CSS: ${cssTestsPassed}/${cssFiles.length} fichiers trouvés\n`);

// Tests des scripts SQL
console.log('🗄️  TEST DES SCRIPTS SQL');
const sqlTests = [
  {
    path: 'SCRIPT_SQL_FINAL_CORRIGE.sql',
    desc: 'Script SQL principal',
    content: ['UUID PRIMARY KEY DEFAULT gen_random_uuid()', 'category_id UUID NOT NULL REFERENCES categories(id)']
  },
  {
    path: 'CODE_SQL_CORRIGE.md',
    desc: 'Documentation SQL',
    content: ['UUID PRIMARY KEY DEFAULT gen_random_uuid()', 'compatible avec votre structure UUID existante']
  }
];

let sqlTestsPassed = 0;
sqlTests.forEach(test => {
  if (checkFileContent(test.path, test.content, test.desc)) sqlTestsPassed++;
});

console.log(`\n📊 Résultats SQL: ${sqlTestsPassed}/${sqlTests.length} scripts validés\n`);

// Tests de sécurité
console.log('🔒 TEST DE SÉCURITÉ');
const securityTests = [
  {
    path: '.env.example',
    desc: 'Fichier d\'environnement exemple',
    content: ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY', 'Configuration Supabase']
  },
  {
    path: 'apply-supabase-schema.js',
    desc: 'Script de schéma sécurisé',
    content: ['process.env.VITE_SUPABASE_URL', 'Variables d\'environnement Supabase manquantes']
  },
  {
    path: 'execute-supabase-migration.js',
    desc: 'Script de migration sécurisé',
    content: ['process.env.VITE_SUPABASE_URL', 'Variables d\'environnement Supabase manquantes']
  },
  {
    path: 'test-supabase-connection.js',
    desc: 'Script de test sécurisé',
    content: ['process.env.VITE_SUPABASE_URL', 'Variables d\'environnement Supabase manquantes']
  }
];

let securityTestsPassed = 0;
securityTests.forEach(test => {
  if (checkFileContent(test.path, test.content, test.desc)) securityTestsPassed++;
});

console.log(`\n📊 Résultats sécurité: ${securityTestsPassed}/${securityTests.length} tests validés\n`);

// Test de configuration TypeScript
console.log('⚙️  TEST DE CONFIGURATION TYPESCRIPT');
const tsConfigPassed = checkTypeScriptConfig();
console.log(`\n📊 Résultat TypeScript: ${tsConfigPassed ? 'Validé' : 'Échec'}\n`);

// Tests des fichiers de configuration principaux
console.log('📋 TEST DES FICHIERS DE CONFIGURATION');
const configFiles = [
  { path: 'package.json', desc: 'Configuration package' },
  { path: 'tsconfig.json', desc: 'Configuration TypeScript racine' },
  { path: 'tsconfig.app.json', desc: 'Configuration TypeScript app' },
  { path: 'tailwind.config.ts', desc: 'Configuration Tailwind' },
  { path: 'vite.config.ts', desc: 'Configuration Vite' },
  { path: '.gitignore', desc: 'Fichier Git ignore' },
  { path: 'index.html', desc: 'Fichier HTML principal' }
];

let configTestsPassed = 0;
configFiles.forEach(file => {
  if (checkFile(file.path, file.desc)) configTestsPassed++;
});

console.log(`\n📊 Résultats configuration: ${configTestsPassed}/${configFiles.length} fichiers trouvés\n`);

// Tests des composants principaux
console.log('🧩 TEST DES COMPOSANTS PRINCIPAUX');
const componentFiles = [
  { path: 'src/App.tsx', desc: 'Composant App principal' },
  { path: 'src/AppWithLanguageRouter.tsx', desc: 'Composant avec routage multilingue' },
  { path: 'src/main.tsx', desc: 'Point d\'entrée principal' },
  { path: 'src/providers/AppProviders.tsx', desc: 'Fournisseurs d\'application' },
  { path: 'src/components/LanguageRouter.tsx', desc: 'Routeur de langue' },
  { path: 'src/lib/i18n/i18nContextWithRouter.tsx', desc: 'Contexte i18n' },
  { path: 'src/contexts/AuthContext.tsx', desc: 'Contexte d\'authentification' }
];

let componentTestsPassed = 0;
componentFiles.forEach(file => {
  if (checkFile(file.path, file.desc)) componentTestsPassed++;
});

console.log(`\n📊 Résultats composants: ${componentTestsPassed}/${componentFiles.length} fichiers trouvés\n`);

// Tests des fichiers de routage
console.log('🛣️  TEST DES FICHIERS DE ROUTAGE');
const routingFiles = [
  { path: 'src/config/routes.tsx', desc: 'Configuration de routage de base' },
  { path: 'src/config/routesOptimizedV2.tsx', desc: 'Configuration de routage optimisée' },
  { path: 'src/config/routesWithLanguage.tsx', desc: 'Configuration de routage multilingue' }
];

let routingTestsPassed = 0;
routingFiles.forEach(file => {
  if (checkFile(file.path, file.desc)) routingTestsPassed++;
});

console.log(`\n📊 Résultats routage: ${routingTestsPassed}/${routingFiles.length} fichiers trouvés\n`);

// Calcul du score global
const totalTests = cssFiles.length + sqlTests.length + securityTests.length + 1 + configFiles.length + componentFiles.length + routingFiles.length;
const totalPassed = cssTestsPassed + sqlTestsPassed + securityTestsPassed + (tsConfigPassed ? 1 : 0) + configTestsPassed + componentTestsPassed + routingTestsPassed;
const successRate = Math.round((totalPassed / totalTests) * 100);

// Résultats finaux
console.log('='.repeat(60));
console.log('🎉 RÉSULTATS FINAUX DU TEST SYSTÈME');
console.log('='.repeat(60));

console.log(`\n📊 Score global: ${totalPassed}/${totalTests} tests passés (${successRate}%)`);
console.log(`\n📁 Fichiers CSS: ${cssTestsPassed}/${cssFiles.length}`);
console.log(`🗄️  Scripts SQL: ${sqlTestsPassed}/${sqlTests.length}`);
console.log(`🔒 Sécurité: ${securityTestsPassed}/${securityTests.length}`);
console.log(`⚙️  TypeScript: ${tsConfigPassed ? '1/1' : '0/1'}`);
console.log(`📋 Configuration: ${configTestsPassed}/${configFiles.length}`);
console.log(`🧩 Composants: ${componentTestsPassed}/${componentFiles.length}`);
console.log(`🛣️  Routage: ${routingTestsPassed}/${routingFiles.length}`);

if (successRate >= 90) {
  console.log('\n🎉 EXCELLENT ! Le système est correctement configuré');
} else if (successRate >= 75) {
  console.log('\n✅ BON ! Le système est fonctionnel avec quelques améliorations possibles');
} else if (successRate >= 50) {
  console.log('\n⚠️  ATTENTION ! Le système a besoin de corrections importantes');
} else {
  console.log('\n❌ CRITIQUE ! Le système nécessite des corrections immédiates');
}

console.log('\n🚀 Prochaines étapes recommandées:');
console.log('1. Exécuter "npm run build" pour tester le build');
console.log('2. Exécuter "npm run dev" pour tester le développement');
console.log('3. Tester les scripts de migration Supabase');
console.log('4. Valider le fonctionnement multilingue');

console.log('\n📝 Notes importantes:');
console.log('• Assurez-vous d\'avoir configuré le fichier .env avec vos vraies clés');
console.log('• Vérifiez que votre base de données Supabase utilise bien les UUID');
console.log('• Testez l\'application dans différents navigateurs');

console.log('\n' + '='.repeat(60));

// Code de sortie basé sur le succès
process.exit(successRate >= 75 ? 0 : 1);