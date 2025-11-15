// Script pour trouver les boutons "+ Nouvelle annonce" et "Créer ma première annonce"
// Exécutez ce script avec Node.js pour localiser les fichiers à modifier

const fs = require('fs');
const path = require('path');

// Fonction pour chercher des fichiers récursivement
function findFiles(dir, pattern) {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Ignorer les répertoires node_modules et .git
        if (!file.includes('node_modules') && !file.includes('.git')) {
          results = results.concat(findFiles(filePath, pattern));
        }
      } else if (file.match(pattern)) {
        results.push(filePath);
      }
    }
  } catch (err) {
    console.error(`Erreur en lisant le répertoire ${dir}:`, err);
  }
  
  return results;
}

// Fonction pour chercher du contenu dans les fichiers
function searchInFiles(dir, searchTerm) {
  const results = [];
  const files = findFiles(dir, /\.(tsx?|jsx?|js|ts)$/);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes(searchTerm)) {
        results.push({
          file,
          lines: getLinesWithTerm(content, searchTerm)
        });
      }
    } catch (err) {
      console.error(`Erreur en lisant le fichier ${file}:`, err);
    }
  }
  
  return results;
}

// Fonction pour obtenir les lignes contenant le terme de recherche
function getLinesWithTerm(content, term) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(term)) {
      result.push({
        lineNumber: i + 1,
        line: lines[i].trim()
      });
    }
  }
  
  return result;
}

// Termes de recherche
const searchTerms = [
  '+ Nouvelle annonce',
  'Nouvelle annonce',
  'Créer ma première annonce',
  'Créer ma première',
  'mes annonces',
  'Mes annonces'
];

console.log('🔍 Recherche des fichiers contenant les boutons d\'annonces...\n');

// Répertoires à explorer
const searchDirs = ['src'];

for (const term of searchTerms) {
  console.log(`📝 Recherche du terme: "${term}"`);
  
  for (const dir of searchDirs) {
    if (fs.existsSync(dir)) {
      const results = searchInFiles(dir, term);
      
      if (results.length > 0) {
        console.log(`  ✅ Trouvé dans ${results.length} fichier(s):`);
        
        for (const result of results) {
          console.log(`    📄 ${result.file}`);
          
          for (const line of result.lines) {
            console.log(`      Ligne ${line.lineNumber}: ${line.line}`);
          }
          
          console.log('');
        }
      } else {
        console.log(`  ❌ Aucun résultat trouvé dans le répertoire ${dir}`);
      }
    } else {
      console.log(`  ⚠️  Le répertoire ${dir} n'existe pas`);
    }
    
    console.log('');
  }
  
  console.log('----------------------------------------\n');
}

// Recherche des routes potentielles
console.log('🛣️  Recherche des routes potentielles...\n');

const routeTerms = ['annonces', 'announcement', 'user'];

for (const term of routeTerms) {
  console.log(`📝 Recherche du terme de route: "${term}"`);
  
  for (const dir of searchDirs) {
    if (fs.existsSync(dir)) {
      const results = searchInFiles(dir, term);
      
      if (results.length > 0) {
        console.log(`  ✅ Trouvé dans ${results.length} fichier(s):`);
        
        for (const result of results) {
          console.log(`    📄 ${result.file}`);
          
          for (const line of result.lines) {
            console.log(`      Ligne ${line.lineNumber}: ${line.line}`);
          }
          
          console.log('');
        }
      } else {
        console.log(`  ❌ Aucun résultat trouvé dans le répertoire ${dir}`);
      }
    } else {
      console.log(`  ⚠️  Le répertoire ${dir} n'existe pas`);
    }
    
    console.log('');
  }
  
  console.log('----------------------------------------\n');
}

console.log('🎉 Recherche terminée !');
console.log('\n📋 Étapes suivantes:');
console.log('1. Identifiez les fichiers contenant les boutons à modifier');
console.log('2. Ouvrez ces fichiers et remplacez les liens vers "/deposer-annonce" par "/creer-boutique"');
console.log('3. Vérifiez que les icônes sont appropriées (utilisez l\'icône Shop au lieu de PlusCircle)');
console.log('4. Testez les modifications dans l\'application');