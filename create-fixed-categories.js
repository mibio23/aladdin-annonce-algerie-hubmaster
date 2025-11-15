import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const originalFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');
const fixedFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategoriesFixed.ts');

console.log('🔍 Analyse du fichier original extendedCategories.ts...');

// Lire le fichier original
let originalContent;
try {
  originalContent = fs.readFileSync(originalFilePath, 'utf8');
  console.log('✅ Fichier original lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier original:', error.message);
  process.exit(1);
}

// Créer une version simplifiée et correcte du fichier
console.log('\n🔧 Création d\'une version simplifiée et correcte...');

// Extraire uniquement les informations essentielles (id, name, slug) en ignorant les erreurs de syntaxe
const categoryPattern = /{\s*id:\s*'([^']+)'\s*,\s*name:\s*'([^']*?)'\s*,\s*slug:\s*'([^']*?)'/g;
const categories = [];
let match;

while ((match = categoryPattern.exec(originalContent)) !== null) {
  const [, id, name, slug] = match;
  // Nettoyer les noms et slugs
  const cleanName = name.replace(/\\+$/, '').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
  const cleanSlug = slug.replace(/\\+$/, '').replace(/\\'/g, "'").replace(/\\\\/g, "\\");
  
  categories.push({
    id,
    name: cleanName,
    slug: cleanSlug
  });
}

console.log(`✅ ${categories.length} catégories extraites avec succès`);

// Créer le nouveau contenu avec une syntaxe correcte
const newContent = `// Catégories étendues générées automatiquement
// Version corrigée avec une syntaxe TypeScript valide
// Généré le: ${new Date().toISOString()}

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = [
${categories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    slug: '${cat.slug}',
    icon: undefined,
    subcategories: []
  }`).join(',\n')}
];

export default extendedCategories;
`;

// Écrire le fichier corrigé
try {
  fs.writeFileSync(fixedFilePath, newContent);
  console.log('✅ Fichier corrigé créé avec succès:', fixedFilePath);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier corrigé:', error.message);
  process.exit(1);
}

// Vérification de la syntaxe TypeScript du nouveau fichier
try {
  console.log('\n🔍 Vérification de la syntaxe TypeScript du fichier corrigé...');
  
  try {
    execSync(`npx tsc --noEmit --skipLibCheck "${fixedFilePath}"`, { stdio: 'pipe' });
    console.log('✅ La syntaxe TypeScript du fichier corrigé est valide !');
  } catch (tscError) {
    console.log('⚠️ Erreurs TypeScript détectées dans le fichier corrigé:');
    const errors = tscError.stderr ? tscError.stderr.toString() : '';
    console.log(errors);
  }
} catch (error) {
  console.log('⚠️ Impossible de vérifier la syntaxe TypeScript (tsc non disponible)');
}

console.log('\n🎉 Opération terminée !');
console.log(`📁 Fichier original: ${originalFilePath}`);
console.log(`📁 Fichier corrigé: ${fixedFilePath}`);
console.log('\n💡 Vous pouvez maintenant remplacer le fichier original par le fichier corrigé si nécessaire.');