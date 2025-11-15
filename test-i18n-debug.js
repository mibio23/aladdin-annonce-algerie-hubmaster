import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Test détaillé des traductions italiennes...\n');

// Lire le fichier italian.ts pour analyser sa structure
const italianFilePath = path.join(__dirname, 'src/lib/i18n/languages/italian.ts');
const italianContent = fs.readFileSync(italianFilePath, 'utf8');

console.log('📋 Structure du fichier italian.ts:');

// Vérifier les imports
const hasEnglishImport = italianContent.includes("import englishTranslations from './english';");
console.log(`  ✅ Import des traductions anglaises: ${hasEnglishImport ? 'OUI' : 'NON'}`);

const hasOurStoryImport = italianContent.includes("import { italianOurStory } from './italian/ourStory';");
console.log(`  ✅ Import ourStory: ${hasOurStoryImport ? 'OUI' : 'NON'}`);

const hasFooterImport = italianContent.includes("import { italianFooter } from './italian/footer';");
console.log(`  ✅ Import footer: ${hasFooterImport ? 'OUI' : 'NON'}`);

// Vérifier la structure de l'objet italianTranslations
const hasItalianTranslations = italianContent.includes('const italianTranslations = {');
console.log(`  ✅ Déclaration italianTranslations: ${hasItalianTranslations ? 'OUI' : 'NON'}`);

const hasSpreadEnglish = italianContent.includes('...englishTranslations');
console.log(`  ✅ Utilisation ...englishTranslations: ${hasSpreadEnglish ? 'OUI' : 'NON'}`);

const hasSpreadOurStory = italianContent.includes('...italianOurStory');
console.log(`  ✅ Utilisation ...italianOurStory: ${hasSpreadOurStory ? 'OUI' : 'NON'}`);

const hasSpreadFooter = italianContent.includes('...italianFooter');
console.log(`  ✅ Utilisation ...italianFooter: ${hasSpreadFooter ? 'OUI' : 'NON'}`);

// Vérifier la présence des clés spécifiques
console.log('\n🔑 Vérification des clés de traduction:');

const hasTitleKey = italianContent.includes('"notreHistoire.title"');
const hasFooterKey = italianContent.includes('"footer.about.ourStory"');
const hasSitemapKey = italianContent.includes("'sitemap.ourStory'");

console.log(`  ✅ Clé notreHistoire.title: ${hasTitleKey ? 'OUI' : 'NON'}`);
console.log(`  ✅ Clé footer.about.ourStory: ${hasFooterKey ? 'OUI' : 'NON'}`);
console.log(`  ✅ Clé sitemap.ourStory: ${hasSitemapKey ? 'OUI' : 'NON'}`);

// Analyser la chaîne de fallback
console.log('\n⚙️ Système de fallback:');

const fallbackFilePath = path.join(__dirname, 'src/lib/i18n/utils/fallback.ts');
const fallbackContent = fs.readFileSync(fallbackFilePath, 'utf8');

const fallbackMatch = fallbackContent.match(/fallbackChain: Language\[\] = \[([^\]]+)\];/);
if (fallbackMatch) {
  console.log(`  📝 Chaîne de fallback actuelle: [${fallbackMatch[1]}]`);
  console.log(`  ⚠️  PROBLÈME: L'italien n'est pas dans la chaîne de fallback!`);
} else {
  console.log('  ❌ Chaîne de fallback non trouvée');
}

console.log('\n🎯 Recommandations:');
if (!hasTitleKey || !hasFooterKey || !hasSitemapKey) {
  console.log('  🔧 Ajouter les clés manquantes dans italian.ts');
}
if (fallbackMatch && !fallbackMatch[1].includes('it')) {
  console.log('  🔧 Ajouter "it" à la chaîne de fallback dans fallback.ts');
}
if (!hasEnglishImport) {
  console.log('  🔧 Vérifier l\'import des traductions anglaises');
}

console.log('\n✨ Test terminé!');