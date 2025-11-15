import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Trouver la ligne d'import lucide-react
    let lucideImportLineIndex = -1;
    let lucideImportLine = '';
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('from "lucide-react"') || lines[i].includes("from 'lucide-react'")) {
        // Pour les imports sur plusieurs lignes, remonter jusqu'à trouver le début
        lucideImportLineIndex = i;
        lucideImportLine = lines[i];
        
        // Si la ligne commence par "}" ou ne commence pas par "import", remonter pour trouver le début
        while (lucideImportLineIndex > 0 && !lines[lucideImportLineIndex].startsWith('import')) {
          lucideImportLineIndex--;
        }
        
        // Construire la ligne d'import complète
        lucideImportLine = lines[lucideImportLineIndex];
        let j = lucideImportLineIndex + 1;
        while (j < lines.length && !lines[j].includes('from "lucide-react"') && !lines[j].includes("from 'lucide-react'")) {
          lucideImportLine += lines[j];
          j++;
        }
        if (j < lines.length) {
          lucideImportLine += lines[j];
        }
        
        break;
      }
    }
    
    if (lucideImportLineIndex === -1) {
      return null; // Pas d'import lucide-react
    }
    
    // Extraire les icônes importées
    const importMatch = lucideImportLine.match(/import\s+\{([^}]+)\}\s+from\s+["']lucide-react["']/);
    if (!importMatch) {
      return null;
    }
    
    const importedIcons = importMatch[1]
      .split(',')
      .map(icon => icon.trim())
      .filter(icon => icon.length > 0);
    
    // Analyser le JSX pour trouver les icônes utilisées
    const jsxContent = lines.slice(lucideImportLineIndex + 1).join('\n');
    const usedIcons = new Set();
    
    // Debug : afficher les icônes importées
    console.log(`   📦 Icônes importées: ${importedIcons.join(', ')}`);
    
    importedIcons.forEach(icon => {
      // Chercher l'icône comme composant JSX: <Icon ou {icon}
      // Ajout de la détection dans les objets: icon: <Icon
      const iconRegex = new RegExp(`<${icon}[\\s/>]|\\{${icon}\\}|icon:\\s*<${icon}|icon:\\s*<${icon}[^>]*>`, 'g');
      const isUsed = iconRegex.test(content); // Utiliser le contenu complet au lieu de jsxContent
      
      if (isUsed) {
        usedIcons.add(icon);
        console.log(`   ✅ Icône utilisée: ${icon}`);
      } else {
        console.log(`   ❌ Icône non utilisée: ${icon}`);
      }
    });
    
    const unusedIcons = importedIcons.filter(icon => !usedIcons.has(icon));
    
    if (unusedIcons.length === 0) {
      return null; // Aucune icône inutilisée
    }
    
    return {
      filePath,
      lucideImportLineIndex,
      importedIcons,
      usedIcons: Array.from(usedIcons),
      unusedIcons
    };
  } catch (error) {
    console.error(`Erreur lors de l'analyse de ${filePath}:`, error.message);
    return null;
  }
}

function fixFile(analysis) {
  try {
    const content = fs.readFileSync(analysis.filePath, 'utf8');
    const lines = content.split('\n');
    
    // Créer le nouvel import avec uniquement les icônes utilisées
    const usedIcons = analysis.usedIcons;
    
    if (usedIcons.length === 0) {
      // Supprimer complètement la ligne d'import
      lines.splice(analysis.lucideImportLineIndex, 1);
    } else {
      // Reconstruire l'import avec uniquement les icônes utilisées
      const newImport = `import { ${usedIcons.join(', ')} } from "lucide-react";`;
      lines[analysis.lucideImportLineIndex] = newImport;
    }
    
    // Nettoyer les lignes vides multiples
    let newContent = lines.join('\n');
    newContent = newContent.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(analysis.filePath, newContent, 'utf8');
    console.log(`✅ Corrigé: ${analysis.filePath}`);
    console.log(`   Supprimé: ${analysis.unusedIcons.join(', ')}`);
    if (usedIcons.length > 0) {
      console.log(`   Conservé: ${usedIcons.join(', ')}`);
    }
  } catch (error) {
    console.error(`❌ Erreur lors de la correction de ${analysis.filePath}:`, error.message);
  }
}

async function main() {
  console.log('🔍 Recherche des fichiers avec imports Lucide inutilisés...\n');
  
  // Chercher spécifiquement les fichiers mentionnés dans le rapport
  const specificFiles = [
    'src/data/categories/megaMenuStructures/spanish/otherCategories.tsx',
    'src/data/categories/megaMenuStructures/german/otherCategories.tsx'
  ];
  
  // Chercher tous les fichiers .tsx dans le dossier categories
  const files = await glob('src/data/categories/**/*.tsx', {
    ignore: ['**/node_modules/**', '**/dist/**']
  });
  
  // Ajouter les fichiers spécifiques s'ils ne sont pas déjà dans la liste
  specificFiles.forEach(file => {
    if (!files.includes(file)) {
      files.push(file);
    }
  });
  
  console.log(`📂 ${files.length} fichiers trouvés`);
  
  const analyses = [];
  
  for (const file of files) {
    console.log(`🔍 Analyse de: ${file}`);
    const analysis = analyzeFile(file);
    if (analysis) {
      console.log(`   ⚠️  Imports inutilisés trouvés: ${analysis.unusedIcons.join(', ')}`);
      analyses.push(analysis);
    } else {
      console.log(`   ✅ Aucun problème détecté`);
    }
  }
  
  if (analyses.length === 0) {
    console.log('\n✨ Aucun import Lucide inutilisé trouvé!');
    return;
  }
  
  console.log(`\n📝 ${analyses.length} fichier(s) à corriger\n`);
  
  analyses.forEach(analysis => {
    fixFile(analysis);
  });
  
  console.log('\n✨ Correction terminée!');
}

main().catch(console.error);
