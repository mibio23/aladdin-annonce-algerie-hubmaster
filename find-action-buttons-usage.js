// Script pour trouver où est utilisé useActionButtonsData

import fs from 'fs';
import path from 'path';

console.log('Recherche des fichiers qui utilisent useActionButtonsData...\n');

function searchInDirectory(dir, searchTerm, results = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorer les répertoires node_modules, .git, etc.
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist' && file !== 'build') {
        searchInDirectory(filePath, searchTerm, results);
      }
    } else {
      // Analyser uniquement les fichiers pertinents
      const ext = path.extname(file);
      if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes(searchTerm)) {
            // Trouver les lignes contenant le terme de recherche
            const lines = content.split('\n');
            const matchingLines = [];
            
            lines.forEach((line, index) => {
              if (line.includes(searchTerm)) {
                matchingLines.push({
                  lineNumber: index + 1,
                  content: line.trim()
                });
              }
            });
            
            results.push({
              file: filePath,
              matchingLines
            });
          }
        } catch (error) {
          // Ignorer les erreurs de lecture de fichiers
        }
      }
    }
  }
  
  return results;
}

const results = searchInDirectory('.', 'useActionButtonsData');

if (results.length === 0) {
  console.log('Aucun fichier n\'utilise useActionButtonsData.');
} else {
  console.log(`\n=== ${results.length} fichier(s) utilisent useActionButtonsData ===`);
  
  results.forEach(result => {
    console.log(`\nFichier: ${result.file}`);
    result.matchingLines.forEach(match => {
      console.log(`  Ligne ${match.lineNumber}: ${match.content}`);
    });
  });
}