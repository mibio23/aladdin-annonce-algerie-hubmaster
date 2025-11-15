#!/usr/bin/env node

/**
 * Script automatisé pour corriger TOUS les imports avec underscore incorrect dans src/pages/
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Correction automatique de tous les imports avec underscore...\n');

// Lister tous les fichiers .tsx dans src/pages/
const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let totalFixed = 0;
let filesFixed = 0;

// Liste des corrections à appliquer (ajout automatique des underscores courants)
const commonUnderscores = [
  '_useState', '_useEffect', '_useCallback', '_useMemo', '_useRef',
  '_CardHeader', '_CardDescription', '_CardFooter', '_CardContent',
  '_MessageCircle', '_Phone', '_Mail', '_Clock', '_Plus', '_FileText',
  '_MapPin', '_DollarSign', '_Check', '_Users', '_Eye', '_Calendar',
  '_Upload', '_AlertCircle', '_CheckCircle'
];

const correctNames = [
  'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef',
  'CardHeader', 'CardDescription', 'CardFooter', 'CardContent',
  'MessageCircle', 'Phone', 'Mail', 'Clock', 'Plus', 'FileText',
  'MapPin', 'DollarSign', 'Check', 'Users', 'Eye', 'Calendar',
  'Upload', 'AlertCircle', 'CheckCircle'
];

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  let fileFixed = 0;

  // Appliquer toutes les corrections
  commonUnderscores.forEach((underscore, idx) => {
    const correct = correctNames[idx];
    const regex = new RegExp(underscore.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, correct);
      fileFixed += matches.length;
    }
  });

  if (fileFixed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${file}: ${fileFixed} corrections`);
    totalFixed += fileFixed;
    filesFixed++;
  }
});

console.log(`\n✨ Total: ${totalFixed} corrections dans ${filesFixed} fichiers\n`);

// Lancer la vérification TypeScript après
console.log('🔍 Vérification TypeScript...\n');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('\n✅ Build réussi !');
} catch (error) {
  console.log('\n⚠️  Des erreurs subsistent, vérifiez les messages ci-dessus');
}
