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
  chainesNonTerminees: 0,
  backslashesIncomplets: 0
};

console.log('\n🔧 Correction des erreurs de syntaxe...');

// Correction principale: Corriger les chaînes de caractères qui se terminent par un backslash non échappé
// Pattern: 'texte\' ou "texte\" qui devraient être 'texte\\' ou "texte\\"

// Corriger les propriétés name
content = content.replace(/name:\s*'([^']*?)(?<!\\)'(?=[\s,}])/g, (match, nameContent) => {
  // Si le contenu se termine par un backslash non échappé
  if (nameContent.endsWith('\\') && !nameContent.endsWith('\\\\')) {
    corrections.chainesNonTerminees++;
    // Ajouter un backslash pour échapper le backslash de fin
    return `name: '${nameContent}\\\\'`;
  }
  return match;
});

// Corriger les propriétés slug
content = content.replace(/slug:\s*'([^']*?)(?<!\\)'(?=[\s,}])/g, (match, slugContent) => {
  // Si le contenu se termine par un backslash non échappé
  if (slugContent.endsWith('\\') && !slugContent.endsWith('\\\\')) {
    corrections.chainesNonTerminees++;
    // Ajouter un backslash pour échapper le backslash de fin
    return `slug: '${slugContent}\\\\'`;
  }
  return match;
});

// Corriger les backslashes doubles qui sont devenus des quadruples après les corrections précédentes
content = content.replace(/\\\\\\\\/g, '\\\\');

// Correction spécifique pour les cas où le backslash est à l'intérieur de la chaîne
content = content.replace(/(name|slug):\s*'([^']*?[^\\])\\'(?=[\s,}])/g, (match, propType, contentBefore) => {
  corrections.backslashesIncomplets++;
  return `${propType}: '${contentBefore}\\\\'`;
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
console.log(`- Chaînes non terminées corrigées: ${corrections.chainesNonTerminees}`);
console.log(`- Backslashes incomplets corrigés: ${corrections.backslashesIncomplets}`);

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
    
    // Afficher seulement les 10 premières erreurs pour ne pas surcharger la sortie
    const errorLines = errors.split('\n').filter(line => line.trim());
    const topErrors = errorLines.slice(0, 10);
    
    topErrors.forEach(error => {
      console.log(error);
    });
    
    if (errorLines.length > 10) {
      console.log(`... et ${errorLines.length - 10} autres erreurs`);
    }
    
    console.log('\n💡 Le fichier contient encore des erreurs qui nécessitent une correction manuelle.');
    console.log('💡 Veuillez vérifier le fichier manuellement pour corriger les erreurs restantes.');
  }
} catch (error) {
  console.log('⚠️ Impossible de vérifier la syntaxe TypeScript (tsc non disponible)');
}

console.log('\n📝 Note: Le script a corrigé les erreurs les plus courantes, mais certaines peuvent nécessiter une intervention manuelle.');