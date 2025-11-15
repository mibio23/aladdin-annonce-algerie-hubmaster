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
  backslashFinal: 0,
  guillemetsManquants: 0
};

console.log('\n🔧 Correction manuelle des erreurs de syntaxe...');

// Correction 1: Corriger les chaînes qui se terminent par un backslash suivi de guillemets
// Pattern: 'texte\\' qui devrait être 'texte\\'
content = content.replace(/(name|slug):\s*'([^']*?)\\\\'(?=[\s,}])/g, (match, propType, contentValue) => {
  corrections.backslashFinal++;
  // Remplacer le backslash double par un simple
  return `${propType}: '${contentValue.replace(/\\\\$/, '')}'`;
});

// Correction 2: Corriger les chaînes qui manquent de guillemets de fermeture
// Pattern: 'texte sans guillemet de fin
content = content.replace(/(name|slug):\s*'([^']*?)(?<!\\)'(?=[\s,}])/g, (match, propType, contentValue) => {
  // Si le contenu ne se termine pas par un guillemet
  if (!contentValue.endsWith("'")) {
    corrections.guillemetsManquants++;
    return `${propType}: '${contentValue}'`;
  }
  return match;
});

// Correction 3: Corriger les cas spécifiques où le backslash est à la fin de la chaîne
// Pattern: 'texte\' qui devrait être 'texte\\'
content = content.replace(/(name|slug):\s*'([^']*?)\\(?=[\s,}])/g, (match, propType, contentValue) => {
  corrections.backslashFinal++;
  return `${propType}: '${contentValue}\\\\'`;
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
console.log(`- Backslashes finaux corrigés: ${corrections.backslashFinal}`);
console.log(`- Guillemets manquants corrigés: ${corrections.guillemetsManquants}`);

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
  }
} catch (error) {
  console.log('⚠️ Impossible de vérifier la syntaxe TypeScript (tsc non disponible)');
}

console.log('\n📝 Note: Si des erreurs persistent, veuillez les corriger manuellement.');