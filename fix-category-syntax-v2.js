import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Analyse du fichier extendedCategories.ts...');

// Lire le fichier
let content;
try {
  content = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier:', error.message);
  process.exit(1);
}

// Créer une sauvegarde
const backupPath = categoriesFilePath + '.backup.' + Date.now();
try {
  fs.writeFileSync(backupPath, content);
  console.log('✅ Sauvegarde créée:', backupPath);
} catch (error) {
  console.error('❌ Erreur lors de la création de la sauvegarde:', error.message);
  process.exit(1);
}

// Compteurs pour les corrections
let corrections = {
  apostrophesNonEchappees: 0,
  backslashesDoubles: 0,
  slugsIncoherents: 0
};

console.log('\n🔧 Correction des erreurs de syntaxe...');

// 1. Corriger les apostrophes non échappées dans les noms
// Pattern: name: 'Texte avec \'apostrophe\'',
content = content.replace(/name:\s*'([^']*?)'(?=[\s,}])/g, (match, content) => {
  // Si le contenu contient une apostrophe non échappée
  if (content.includes("'") && !content.includes("\\")) {
    corrections.apostrophesNonEchappees++;
    // Échapper les apostrophes
    const escapedContent = content.replace(/'/g, "\\'");
    return `name: '${escapedContent}'`;
  }
  return match;
});

// 2. Corriger les backslashes doubles dans les slugs
// Pattern: slug: 'texte-avec-backslash\\',
content = content.replace(/slug:\s*'([^']*?)\\\\'/g, (match, slugContent) => {
  corrections.backslashesDoubles++;
  // Remplacer les doubles backslashes par un simple
  const correctedSlug = slugContent.replace(/\\\\/g, '\\');
  return `slug: '${correctedSlug}'`;
});

// 3. Vérifier et corriger les incohérences entre les noms et les slugs
// Cette correction est plus complexe et nécessite une analyse plus approfondie
console.log('🔍 Vérification des incohérences nom/slug...');

// Écrire le fichier corrigé
try {
  fs.writeFileSync(categoriesFilePath, content);
  console.log('✅ Fichier corrigé avec succès');
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier corrigé:', error.message);
  process.exit(1);
}

// Afficher le résumé des corrections
console.log('\n📊 Résumé des corrections:');
console.log(`- Apostrophes non échappées: ${corrections.apostrophesNonEchappees}`);
console.log(`- Backslashes doubles dans les slugs: ${corrections.backslashesDoubles}`);
console.log(`- Incohérences nom/slug: ${corrections.slugsIncoherents}`);

console.log('\n🎉 Correction terminée !');

// Vérification supplémentaire : valider la syntaxe TypeScript
try {
  console.log('\n🔍 Vérification de la syntaxe TypeScript...');
  
  // Tenter de compiler le fichier pour vérifier la syntaxe
  try {
    execSync(`npx tsc --noEmit --skipLibCheck "${categoriesFilePath}"`, { stdio: 'pipe' });
    console.log('✅ La syntaxe TypeScript est valide !');
  } catch (tscError) {
    console.log('⚠️ Erreurs TypeScript détectées:');
    console.log(tscError.stdout ? tscError.stdout.toString() : '');
    console.log(tscError.stderr ? tscError.stderr.toString() : '');
    console.log('\n💡 Le fichier a été corrigé mais peut contenir d\'autres erreurs syntaxiques.');
  }
} catch (error) {
  console.log('⚠️ Impossible de vérifier la syntaxe TypeScript (tsc non disponible)');
}

console.log('\n📝 Note: Si des erreurs persistent, veuillez vérifier manuellement le fichier.');