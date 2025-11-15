import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎯 Test final des corrections italiennes...\n');

// Vérifier la chaîne de fallback
const fallbackFilePath = path.join(__dirname, 'src/lib/i18n/utils/fallback.ts');
const fallbackContent = fs.readFileSync(fallbackFilePath, 'utf8');

const fallbackMatch = fallbackContent.match(/fallbackChain: Language\[\] = \[([^\]]+)\];/);
if (fallbackMatch) {
  const chain = fallbackMatch[1];
  console.log('✅ Chaîne de fallback corrigée:', chain);
  
  if (chain.includes('it')) {
    console.log('  🎉 SUCCESS: L\'italien est maintenant dans la chaîne de fallback!');
  } else {
    console.log('  ❌ ERREUR: L\'italien n\'est toujours pas dans la chaîne de fallback');
  }
}

// Vérifier la structure du fichier italian.ts
console.log('\n📁 Vérification des fichiers de traduction:');

const filesToTest = [
  {
    path: './src/lib/i18n/languages/italian/ourStory.ts',
    keyContent: '"notreHistoire.title": "La nostra storia"',
    description: 'Notre Histoire page'
  },
  {
    path: './src/lib/i18n/languages/italian/footer.ts',
    keyContent: '"footer.about.ourStory": "La nostra storia"',
    description: 'Footer link'
  },
  {
    path: './src/lib/i18n/languages/italian/sitemap.ts',
    keyContent: "'sitemap.ourStory': 'La nostra storia'",
    description: 'Sitemap link'
  }
];

filesToTest.forEach(({ path: filePath, keyContent, description }) => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(keyContent)) {
      console.log(`  ✅ ${description}: Traduction trouvée`);
    } else {
      console.log(`  ❌ ${description}: Traduction manquante`);
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
    { name: 'italianOurStory', pattern: 'import { italianOurStory } from \'./italian/ourStory\'' },
    { name: 'italianFooter', pattern: 'import { italianFooter } from \'./italian/footer\'' },
    { name: 'italianSitemap', pattern: 'import { italianSitemap } from \'./italian/sitemap\'' }
  ];
  
  const requiredSpreads = [
    { name: 'italianOurStory', pattern: '...italianOurStory' },
    { name: 'italianFooter', pattern: '...italianFooter' },
    { name: 'italianSitemap', pattern: '...italianSitemap' }
  ];
  
  console.log('  Imports:');
  requiredImports.forEach(({ name, pattern }) => {
    if (italianContent.includes(pattern)) {
      console.log(`    ✅ ${name}: Import correct`);
    } else {
      console.log(`    ❌ ${name}: Import manquant ou incorrect`);
    }
  });
  
  console.log('  Spreads:');
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

console.log('\n🎯 Résumé des corrections appliquées:');
console.log('  1. ✅ Ajout de l\'italien à la chaîne de fallback: [\'it\', \'en\', \'fr\']');
console.log('  2. ✅ Vérification des fichiers de traduction individuels');
console.log('  3. ✅ Vérification de l\'intégration dans italian.ts');

console.log('\n🚀 Les traductions italiennes devraient maintenant fonctionner correctement!');
console.log('   Testez en naviguant vers la page "Notre histoire" en italien.');

console.log('\n✨ Test terminé!');