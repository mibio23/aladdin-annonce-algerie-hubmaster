import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Correction des erreurs de syntaxe dans le fichier de catégories détaillées...');

// Lire le fichier
let content;
try {
  content = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier:', error.message);
  process.exit(1);
}

// Corrections des erreurs de syntaxe
let corrections = 0;

// 1. Corriger les apostrophes non échappées dans les noms
content = content.replace(/name:\s*'([^']*?)'(?=[\s,}])/g, (match, nameContent) => {
  // Si le contenu contient une apostrophe non échappée
  if (nameContent.includes("'") && !nameContent.includes("\\")) {
    corrections++;
    // Échapper les apostrophes
    const escapedContent = nameContent.replace(/'/g, "\\'");
    return `name: '${escapedContent}'`;
  }
  return match;
});

// 2. Corriger les backslashes doubles dans les slugs
content = content.replace(/slug:\s*'([^']*?)\\\\'/g, (match, slugContent) => {
  corrections++;
  // Remplacer les doubles backslashes par un simple
  const correctedSlug = slugContent.replace(/\\\\/g, '\\');
  return `slug: '${correctedSlug}'`;
});

// 3. Corriger les chaînes non terminées (manque de guillemet de fermeture)
content = content.replace(/(name|slug):\s*'([^']*?)\\(?=[\s,}])/g, (match, propType, contentBefore) => {
  corrections++;
  // Ajouter un guillemet pour échapper le backslash de fin
  return `${propType}: '${contentBefore}\\\\'`;
});

// 4. Corriger les guillemets manquants
content = content.replace(/(name|slug):\s*'([^']*?)(?<!\\)'(?=[\s,}])/g, (match, propType, contentValue) => {
  // Si le contenu ne se termine pas par un guillemet
  if (!contentValue.endsWith("'")) {
    corrections++;
    return `${propType}: '${contentValue}'`;
  }
  return match;
});

// 5. Corriger les accolades manquantes
content = content.replace(/subcategories: \[\s*\n\s*}/g, 'subcategories: []\n  }');

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
console.log(`- Erreurs corrigées: ${corrections}`);

console.log('\n🎉 Correction terminée !');