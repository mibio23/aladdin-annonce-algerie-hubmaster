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

// Compteurs pour les corrections
let corrections = {
  slugsAvecBackslash: 0,
  nomsAvecBackslash: 0,
  chainesNonTerminees: 0
};

console.log('\n🔧 Correction des erreurs de syntaxe...');

// Correction 1: Corriger les backslashes doubles dans les slugs
content = content.replace(/slug:\s*'([^']*?)\\\\'/g, (match, slugContent) => {
  corrections.slugsAvecBackslash++;
  // Remplacer les doubles backslashes par un simple
  const correctedSlug = slugContent.replace(/\\\\/g, '\\');
  return `slug: '${correctedSlug}'`;
});

// Correction 2: Corriger les backslashes à la fin des chaînes de caractères
content = content.replace(/name:\s*'([^']*?)\\\\'/g, (match, nameContent) => {
  corrections.nomsAvecBackslash++;
  // Remplacer les doubles backslashes par un simple
  const correctedName = nameContent.replace(/\\\\/g, '\\');
  return `name: '${correctedName}'`;
});

// Correction 3: Corriger les chaînes non terminées (manque de guillemet de fermeture)
content = content.replace(/name:\s*'([^']*?)'(?=[\s,}])/g, (match, nameContent) => {
  // Vérifier si la chaîne se termine par un backslash non échappé
  if (nameContent.endsWith('\\') && !nameContent.endsWith('\\\\')) {
    corrections.chainesNonTerminees++;
    // Ajouter un backslash pour échapper le backslash de fin
    return `name: '${nameContent}\\\\'`;
  }
  return match;
});

// Correction 4: Corriger les slugs qui se terminent par un backslash non échappé
content = content.replace(/slug:\s*'([^']*?)'(?=[\s,}])/g, (match, slugContent) => {
  // Vérifier si la chaîne se termine par un backslash non échappé
  if (slugContent.endsWith('\\') && !slugContent.endsWith('\\\\')) {
    corrections.chainesNonTerminees++;
    // Ajouter un backslash pour échapper le backslash de fin
    return `slug: '${slugContent}\\\\'`;
  }
  return match;
});

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
console.log(`- Slugs avec backslashes doubles: ${corrections.slugsAvecBackslash}`);
console.log(`- Noms avec backslashes doubles: ${corrections.nomsAvecBackslash}`);
console.log(`- Chaînes non terminées corrigées: ${corrections.chainesNonTerminees}`);

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
    const errors = tscError.stderr ? tscError.stderr.toString() : '';
    
    // Afficher seulement les 20 premières erreurs pour ne pas surcharger la sortie
    const errorLines = errors.split('\n').filter(line => line.trim());
    const topErrors = errorLines.slice(0, 20);
    
    topErrors.forEach(error => {
      console.log(error);
    });
    
    if (errorLines.length > 20) {
      console.log(`... et ${errorLines.length - 20} autres erreurs`);
    }
    
    console.log('\n💡 Certaines erreurs peuvent nécessiter une correction manuelle.');
  }
} catch (error) {
  console.log('⚠️ Impossible de vérifier la syntaxe TypeScript (tsc non disponible)');
}

console.log('\n📝 Note: Si des erreurs persistent, une correction manuelle peut être nécessaire.');