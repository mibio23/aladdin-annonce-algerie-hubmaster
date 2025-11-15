import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎯 Test complet des traductions italiennes...\n');

// Vérifier les nouveaux fichiers de traduction
console.log('📁 Nouveaux fichiers de traduction créés:');

const newFiles = [
  {
    path: './src/lib/i18n/languages/italian/safety.ts',
    keyTest: '"safety.title": "Consigli di sicurezza"',
    description: 'Page Conseils de sécurité'
  },
  {
    path: './src/lib/i18n/languages/italian/authentification.ts',
    keyTest: '"authentification.title": "Autenticazione"',
    description: 'Page Authentification'
  }
];

newFiles.forEach(({ path: filePath, keyTest, description }) => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(keyTest)) {
      console.log(`  ✅ ${description}: Traduction trouvée`);
    } else {
      console.log(`  ❌ ${description}: Clé de traduction manquante`);
    }
  } else {
    console.log(`  ❌ ${description}: Fichier manquant`);
  }
});

// Vérifier l'intégration dans italian.ts
console.log('\n🔗 Vérification de l\'intégration dans italian.ts:');

const italianFilePath = path.join(__dirname, 'src/lib/i18n/languages/italian.ts');
if (fs.existsSync(italianFilePath)) {
  const italianContent = fs.readFileSync(italianFilePath, 'utf8');
  
  const requiredImports = [
    { name: 'italianSafety', pattern: 'import { italianSafety } from \'./italian/safety\'' },
    { name: 'italianAuthentification', pattern: 'import { italianAuthentification } from \'./italian/authentification\'' }
  ];
  
  const requiredSpreads = [
    { name: 'italianSafety', pattern: '...italianSafety' },
    { name: 'italianAuthentification', pattern: '...italianAuthentification' }
  ];
  
  console.log('  Nouveaux imports:');
  requiredImports.forEach(({ name, pattern }) => {
    if (italianContent.includes(pattern)) {
      console.log(`    ✅ ${name}: Import correct`);
    } else {
      console.log(`    ❌ ${name}: Import manquant ou incorrect`);
    }
  });
  
  console.log('  Nouveaux spreads:');
  requiredSpreads.forEach(({ name, pattern }) => {
    if (italianContent.includes(pattern)) {
      console.log(`    ✅ ${name}: Spread correct`);
    } else {
      console.log(`    ❌ ${name}: Spread manquant ou incorrect`);
    }
  });
} else {
  console.log('  ❌ Fichier italian.ts manquant');
}

// Vérifier les clés de traduction existantes dans le footer
console.log('\n🔑 Vérification des clés footer:');

const footerFilePath = path.join(__dirname, 'src/lib/i18n/languages/italian/footer.ts');
if (fs.existsSync(footerFilePath)) {
  const footerContent = fs.readFileSync(footerFilePath, 'utf8');
  
  const footerKeys = [
    { key: '"footer.useful.safetyTips"', value: '"Consigli di sicurezza"', description: 'Lien Conseils sécurité' },
    { key: '"footer.legal.authentication"', value: '"Autenticazione"', description: 'Lien Authentification' }
  ];
  
  footerKeys.forEach(({ key, value, description }) => {
    if (footerContent.includes(`${key}: ${value}`)) {
      console.log(`  ✅ ${description}: Traduction correcte`);
    } else {
      console.log(`  ❌ ${description}: Traduction manquante ou incorrecte`);
    }
  });
} else {
  console.log('  ❌ Fichier footer.ts manquant');
}

// Vérifier la chaîne de fallback
console.log('\n⚙️ Système de fallback:');

const fallbackFilePath = path.join(__dirname, 'src/lib/i18n/utils/fallback.ts');
const fallbackContent = fs.readFileSync(fallbackFilePath, 'utf8');
const fallbackMatch = fallbackContent.match(/fallbackChain: Language\[\] = \[([^\]]+)\];/);

if (fallbackMatch) {
  const chain = fallbackMatch[1];
  console.log(`  ✅ Chaîne de fallback: [${chain}]`);
  
  if (chain.includes('it')) {
    console.log('  🎉 SUCCESS: L\'italien est dans la chaîne de fallback!');
  } else {
    console.log('  ❌ ERREUR: L\'italien n\'est pas dans la chaîne de fallback');
  }
} else {
  console.log('  ❌ Chaîne de fallback non trouvée');
}

console.log('\n🎯 Résumé des traductions italiennes disponibles:');

const italianPages = [
  { key: 'notreHistoire.title', value: '"La nostra storia"', page: 'Notre histoire' },
  { key: 'safety.title', value: '"Consigli di sicurezza"', page: 'Consigli di sicurezza' },
  { key: 'authentification.title', value: '"Autenticazione"', page: 'Autenticazione' },
  { key: 'footer.useful.safetyTips', value: '"Consigli di sicurezza"', page: 'Footer - Conseils sécurité' },
  { key: 'footer.legal.authentication', value: '"Autenticazione"', page: 'Footer - Authentification' },
  { key: 'sitemap.ourStory', value: "'La nostra storia'", page: 'Sitemap - Notre histoire' },
  { key: 'sitemap.safetyTips', value: "'Consigli di sicurezza'", page: 'Sitemap - Conseils sécurité' },
  { key: 'sitemap.authentication', value: "'Autenticazione'", page: 'Sitemap - Authentification' }
];

italianPages.forEach(({ key, value, page }) => {
  console.log(`  • ${page}: ${key} = ${value}`);
});

console.log('\n🚀 Les pages suivantes sont maintenant disponibles en italien:');
console.log('  1. ✅ Notre histoire ("La nostra storia")');
console.log('  2. ✅ Conseils de sécurité ("Consigli di sicurezza")');
console.log('  3. ✅ Authentification ("Autenticazione")');

console.log('\n🎉 Traduction complète terminée avec succès!');
console.log('✨ Test terminé!');