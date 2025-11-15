#!/usr/bin/env node

/**
 * Script pour corriger automatiquement tous les imports avec underscore incorrect
 */

const fs = require('fs');
const path = require('path');

// Fichiers à corriger avec leurs imports problématiques
const fixes = [
  {
    file: 'src/pages/FAQ.tsx',
    replacements: [
      { from: '_CardDescription', to: 'CardDescription' },
      { from: '_CardHeader', to: 'CardHeader' },
    ]
  },
  // Ajouter d'autres fichiers si nécessaire
];

console.log('🔧 Correction des imports avec underscore incorrect...\n');

let totalFixed = 0;

fixes.forEach(({ file, replacements }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Fichier non trouvé: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = 0;

  replacements.forEach(({ from, to }) => {
    const regex = new RegExp(from, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, to);
      fixed += matches.length;
      console.log(`  ✅ ${from} → ${to} (${matches.length} occurrences)`);
    }
  });

  if (fixed > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${file}: ${fixed} corrections\n`);
    totalFixed += fixed;
  } else {
    console.log(`✓  ${file}: aucune correction nécessaire\n`);
  }
});

console.log(`\n✨ Total: ${totalFixed} corrections effectuées`);
