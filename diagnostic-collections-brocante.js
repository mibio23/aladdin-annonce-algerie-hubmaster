import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fonction pour lire le fichier de catégories
function readCategoriesFile() {
  try {
    const filePath = join(__dirname, 'src/data/categories/extended/extendedCategories.ts');
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('❌ Erreur de lecture du fichier:', error.message);
    return null;
  }
}

// Fonction pour extraire et analyser la section Collections & Brocante
function analyzeCollectionsBrocante(content) {
  console.log('🔍 ANALYSE DÉTAILLÉE DE COLLECTIONS & BROCANTE');
  console.log('=' .repeat(80));
  
  // Trouver le début de la section Collections & Brocante
  const startIndex = content.indexOf("id: 'collections-brocante'");
  if (startIndex === -1) {
    console.log('❌ Section Collections & Brocante NON TROUVÉE');
    return false;
  }
  
  console.log(`✅ Début de la section trouvé à la position: ${startIndex}`);
  
  // Trouver la fin de la section Collections & Brocante
  // On cherche la fin de cette catégorie principale
  let braceCount = 0;
  let endIndex = startIndex;
  let inString = false;
  let escapeNext = false;
  
  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    
    if (escapeNext) {
      escapeNext = false;
      continue;
    }
    
    if (char === '\\') {
      escapeNext = true;
      continue;
    }
    
    if (char === '"' && !escapeNext) {
      inString = !inString;
      continue;
    }
    
    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }
  }
  
  if (endIndex === startIndex) {
    console.log('❌ Impossible de trouver la fin de la section Collections & Brocante');
    return false;
  }
  
  console.log(`✅ Fin de la section trouvée à la position: ${endIndex}`);
  
  const collectionsSection = content.substring(startIndex, endIndex);
  console.log(`📏 Taille de la section: ${collectionsSection.length} caractères`);
  
  // Analyser les sous-catégories dans cette section
  const expectedSubcategories = [
    'timbres-poste',
    'livres-rares-collection',
    'pieces-monnaie-medailles',
    'objets-vintage-retro',
    'art-artisanat',
    'antiquites',
    'collections-specialisees'
  ];
  
  console.log('\n📋 VÉRIFICATION DES SOUS-CATÉGORIES DANS LA SECTION:');
  
  let foundCount = 0;
  
  expectedSubcategories.forEach(subId => {
    const subPattern = new RegExp(`id: '${subId}'`, 'g');
    const matches = collectionsSection.match(subPattern);
    
    if (matches && matches.length > 0) {
      console.log(`✅ ${subId}: ${matches.length} occurrence(s) trouvée(s)`);
      foundCount++;
      
      // Vérifier les traductions pour cette sous-catégorie
      const subStartIndex = collectionsSection.indexOf(`id: '${subId}'`);
      if (subStartIndex !== -1) {
        // Extraire le bloc de cette sous-catégorie
        let subBraceCount = 0;
        let subEndIndex = subStartIndex;
        let subInString = false;
        let subEscapeNext = false;
        
        for (let i = subStartIndex; i < collectionsSection.length; i++) {
          const subChar = collectionsSection[i];
          
          if (subEscapeNext) {
            subEscapeNext = false;
            continue;
          }
          
          if (subChar === '\\') {
            subEscapeNext = true;
            continue;
          }
          
          if (subChar === '"' && !subEscapeNext) {
            subInString = !subInString;
            continue;
          }
          
          if (!subInString) {
            if (subChar === '{') {
              subBraceCount++;
            } else if (subChar === '}') {
              subBraceCount--;
              if (subBraceCount === 0) {
                subEndIndex = i + 1;
                break;
              }
            }
          }
        }
        
        const subBlock = collectionsSection.substring(subStartIndex, subEndIndex);
        
        // Vérifier les traductions
        const hasFr = subBlock.includes('"fr":');
        const hasAr = subBlock.includes('"ar":');
        const hasEn = subBlock.includes('"en":');
        const hasDe = subBlock.includes('"de":');
        const hasEs = subBlock.includes('"es":');
        
        if (hasFr && hasAr && hasEn && hasDe && hasEs) {
          console.log(`  ✅ Traductions complètes (FR, AR, EN, DE, ES)`);
        } else {
          console.log(`  ❌ Traductions incomplètes (FR:${hasFr}, AR:${hasAr}, EN:${hasEn}, DE:${hasDe}, ES:${hasEs})`);
        }
        
        // Compter les sous-sous-catégories
        const subSubPattern = /id: '[^']+'/g;
        const subSubMatches = subBlock.match(subSubPattern);
        const subSubCount = subSubMatches ? subSubMatches.length - 1 : 0; // -1 pour exclure l'ID de la sous-catégorie elle-même
        console.log(`  📊 ${subSubCount} sous-sous-catégorie(s) trouvée(s)`);
      }
    } else {
      console.log(`❌ ${subId}: NON TROUVÉE dans la section Collections & Brocante`);
      
      // Vérifier si elle existe ailleurs dans le fichier
      const globalMatches = content.match(subPattern);
      if (globalMatches && globalMatches.length > 0) {
        console.log(`  ⚠️ ${subId}: trouvée ${globalMatches.length} fois ailleurs dans le fichier mais PAS dans Collections & Brocante`);
      } else {
        console.log(`  ❌ ${subId}: NON TROUVÉE nulle part dans le fichier`);
      }
    }
  });
  
  console.log(`\n📊 RÉSULTAT: ${foundCount}/${expectedSubcategories.length} sous-catégories trouvées dans Collections & Brocante`);
  
  // Afficher un extrait de la section pour débogage
  console.log('\n📄 EXTRAIT DE LA SECTION COLLECTIONS & BROCANTE:');
  console.log('-'.repeat(80));
  const excerpt = collectionsSection.substring(0, Math.min(1000, collectionsSection.length));
  console.log(excerpt);
  if (collectionsSection.length > 1000) {
    console.log('... (suite tronquée)');
  }
  console.log('-'.repeat(80));
  
  return foundCount === expectedSubcategories.length;
}

// Fonction principale
function main() {
  console.log('🚀 DÉMARRAGE DU DIAGNOSTIC COLLECTIONS & BROCANTE');
  console.log('=' .repeat(80));
  
  const content = readCategoriesFile();
  if (!content) {
    console.log('❌ Arrêt du diagnostic due à une erreur de lecture');
    return;
  }
  
  console.log('✅ Fichier lu avec succès');
  
  const result = analyzeCollectionsBrocante(content);
  
  console.log('\n' + '=' .repeat(80));
  if (result) {
    console.log('🎉 DIAGNOSTIC RÉUSSIE: Toutes les sous-catégories sont correctement intégrées');
  } else {
    console.log('⚠️ DIAGNOSTIC ÉCHOUÉE: Des sous-catégories manquent dans Collections & Brocante');
  }
  console.log('=' .repeat(80));
}

// Exécuter le diagnostic
main();