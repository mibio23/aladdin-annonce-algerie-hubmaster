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

// Fonction pour vérifier la présence des catégories par recherche textuelle
function validateCategoriesBySearch(content) {
  console.log('🔍 VALIDATION PAR RECHERCHE TEXTUELLE');
  console.log('=' .repeat(80));
  
  const validations = [
    // Catégories algériennes principales
    {
      name: 'Artisanat Traditionnel Algérien',
      id: 'artisanat-traditionnel-algerien',
      requiredSubcategories: [
        'tapis-berberes',
        'poterie-traditionnelle',
        'bijoux-traditionnels',
        'costumes-traditionnels'
      ]
    },
    {
      name: 'Produits Locaux Algériens',
      id: 'produits-locaux-algeriens',
      requiredSubcategories: [
        'huile-olive',
        'dattes-algeriennes',
        'miel-algerien',
        'epices-algeriennes'
      ]
    },
    {
      name: 'Vêtements Traditionnels Algériens',
      id: 'vetements-traditionnels-algeriens',
      requiredSubcategories: [
        'haik',
        'blouza',
        'sarouel',
        'chachia'
      ]
    },
    {
      name: 'Plats Traditionnels Algériens',
      id: 'plats-traditionnels-algeriens',
      requiredSubcategories: [
        'couscous-algerien',
        'tagine-algerien',
        'chorba',
        'rechta',
        'bourek'
      ]
    },
    {
      name: 'Pâtisseries Traditionnelles Algériennes',
      id: 'patisseries-traditionnelles-algeriennes',
      requiredSubcategories: [
        'baklawa-algerienne',
        'makrout',
        'gazelle-horns',
        'zlabia',
        'tcharek-mellouk'
      ]
    },
    {
      name: 'Services et Coutumes Traditionnels',
      id: 'services-coutumes-traditionnels',
      requiredSubcategories: [
        'mariage-traditionnel',
        'musique-traditionnelle',
        'artisanat-services'
      ]
    },
    // Catégorie Collections & Brocante
    {
      name: 'Collections & Brocante',
      id: 'collections-brocante',
      requiredSubcategories: [
        'timbres-poste',
        'livres-rares-collection',
        'pieces-monnaie-medailles',
        'objets-vintage-retro',
        'art-artisanat',
        'antiquites',
        'collections-specialisees'
      ]
    },
    // Catégorie Échanges & Partage
    {
      name: 'Échanges & Partage',
      id: 'echanges-partage',
      requiredSubcategories: [
        'don-troc',
        'covoiturage-transport',
        'partage-competences',
        'temps-libre-activites'
      ]
    }
  ];
  
  let totalValidations = 0;
  let passedValidations = 0;
  
  validations.forEach(validation => {
    totalValidations++;
    console.log(`\n📂 Vérification: ${validation.name}`);
    console.log('-'.repeat(50));
    
    // Vérifier la présence de la catégorie principale
    const categoryPattern = new RegExp(`id: '${validation.id}'`, 'g');
    const categoryMatches = content.match(categoryPattern);
    
    if (!categoryMatches || categoryMatches.length === 0) {
      console.log(`❌ Catégorie principale "${validation.name}" NON TROUVÉE`);
      return;
    }
    
    console.log(`✅ Catégorie principale "${validation.name}" trouvée`);
    
    // Vérifier les traductions de la catégorie principale
    const translationsPattern = new RegExp(`id: '${validation.id}'[\\s\\S]*?translations: \\{[\\s\\S]*?\\}`, 'g');
    const translationsMatch = content.match(translationsPattern);
    
    if (translationsMatch && translationsMatch.length > 0) {
      const translationBlock = translationsMatch[0];
      const hasAllLanguages = 
        translationBlock.includes('"fr":') &&
        translationBlock.includes('"ar":') &&
        translationBlock.includes('"en":') &&
        translationBlock.includes('"de":') &&
        translationBlock.includes('"es":');
      
      if (hasAllLanguages) {
        console.log('  ✅ Traductions complètes (FR, AR, EN, DE, ES)');
      } else {
        console.log('  ❌ Traductions incomplètes');
        return;
      }
    } else {
      console.log('  ❌ Aucune traduction trouvée');
      return;
    }
    
    // Vérifier les sous-catégories
    let allSubcategoriesFound = true;
    let foundSubcategories = 0;
    
    validation.requiredSubcategories.forEach(subId => {
      const subPattern = new RegExp(`id: '${subId}'`, 'g');
      const subMatches = content.match(subPattern);
      
      if (subMatches && subMatches.length > 0) {
        console.log(`  ✅ Sous-catégorie "${subId}" trouvée`);
        foundSubcategories++;
        
        // Vérifier les traductions de la sous-catégorie
        const subTranslationsPattern = new RegExp(`id: '${subId}'[\\s\\S]*?translations: \\{[\\s\\S]*?\\}`, 'g');
        const subTranslationsMatch = content.match(subTranslationsPattern);
        
        if (subTranslationsMatch && subTranslationsMatch.length > 0) {
          const subTranslationBlock = subTranslationsMatch[0];
          const hasAllSubLanguages = 
            subTranslationBlock.includes('"fr":') &&
            subTranslationBlock.includes('"ar":') &&
            subTranslationBlock.includes('"en":') &&
            subTranslationBlock.includes('"de":') &&
            subTranslationBlock.includes('"es":');
          
          if (hasAllSubLanguages) {
            console.log(`    ✅ Traductions complètes pour ${subId}`);
          } else {
            console.log(`    ❌ Traductions incomplètes pour ${subId}`);
            allSubcategoriesFound = false;
          }
        } else {
          console.log(`    ❌ Aucune traduction trouvée pour ${subId}`);
          allSubcategoriesFound = false;
        }
      } else {
        console.log(`  ❌ Sous-catégorie "${subId}" NON TROUVÉE`);
        allSubcategoriesFound = false;
      }
    });
    
    console.log(`  📊 Sous-catégories trouvées: ${foundSubcategories}/${validation.requiredSubcategories.length}`);
    
    if (allSubcategoriesFound && foundSubcategories === validation.requiredSubcategories.length) {
      console.log(`🎉 ${validation.name}: VALIDATION RÉUSSIE`);
      passedValidations++;
    } else {
      console.log(`⚠️ ${validation.name}: VALIDATION PARTIELLE OU ÉCHOUÉE`);
    }
  });
  
  return {
    total: totalValidations,
    passed: passedValidations,
    successRate: Math.round((passedValidations / totalValidations) * 100)
  };
}

// Fonction pour vérifier la structure générale du fichier
function validateFileStructure(content) {
  console.log('\n🔍 VALIDATION DE LA STRUCTURE GÉNÉRALE');
  console.log('=' .repeat(80));
  
  const checks = [
    {
      name: 'Présence de l\'export extendedCategories',
      pattern: /export const extendedCategories/,
      critical: true
    },
    {
      name: 'Présence de l\'import MenuCategory',
      pattern: /import.*MenuCategory/,
      critical: true
    },
    {
      name: 'Structure du tableau',
      pattern: /export const extendedCategories: MenuCategory\[\] = \[/,
      critical: true
    },
    {
      name: 'Fermeture correcte du tableau',
      pattern: /\];\s*$/,
      critical: true
    },
    {
      name: 'Présence des traductions françaises',
      pattern: /"fr":/g,
      critical: false
    },
    {
      name: 'Présence des traductions arabes',
      pattern: /"ar":/g,
      critical: false
    },
    {
      name: 'Présence des traductions anglaises',
      pattern: /"en":/g,
      critical: false
    },
    {
      name: 'Présence des traductions allemandes',
      pattern: /"de":/g,
      critical: false
    },
    {
      name: 'Présence des traductions espagnoles',
      pattern: /"es":/g,
      critical: false
    }
  ];
  
  let passedChecks = 0;
  let criticalChecks = 0;
  let passedCriticalChecks = 0;
  
  checks.forEach(check => {
    const match = content.match(check.pattern);
    const passed = match && match.length > 0;
    
    if (passed) {
      console.log(`✅ ${check.name}`);
      passedChecks++;
    } else {
      console.log(`❌ ${check.name}`);
    }
    
    if (check.critical) {
      criticalChecks++;
      if (passed) {
        passedCriticalChecks++;
      }
    }
  });
  
  // Compter les occurrences de traductions
  const frCount = (content.match(/"fr":/g) || []).length;
  const arCount = (content.match(/"ar":/g) || []).length;
  const enCount = (content.match(/"en":/g) || []).length;
  const deCount = (content.match(/"de":/g) || []).length;
  const esCount = (content.match(/"es":/g) || []).length;
  
  console.log('\n📊 STATISTIQUES DES TRADUCTIONS:');
  console.log(`  Français (FR): ${frCount} occurrences`);
  console.log(`  Arabe (AR): ${arCount} occurrences`);
  console.log(`  Anglais (EN): ${enCount} occurrences`);
  console.log(`  Allemand (DE): ${deCount} occurrences`);
  console.log(`  Espagnol (ES): ${esCount} occurrences`);
  
  return {
    totalChecks: checks.length,
    passedChecks,
    criticalChecks,
    passedCriticalChecks,
    translationStats: { frCount, arCount, enCount, deCount, esCount }
  };
}

// Fonction pour vérifier spécifiquement les sous-catégories de Collections & Brocante
function validateCollectionsBrocanteDetails(content) {
  console.log('\n🔍 VALIDATION DÉTAILLÉE - COLLECTIONS & BROCANTE');
  console.log('=' .repeat(80));
  
  const collectionsBrocantePattern = /id: 'collections-brocante'[\s\S]*?subcategories: \[[\s\S]*?\]/;
  const collectionsMatch = content.match(collectionsBrocantePattern);
  
  if (!collectionsMatch) {
    console.log('❌ Section Collections & Brocante NON TROUVÉE');
    return false;
  }
  
  const collectionsSection = collectionsMatch[0];
  console.log('✅ Section Collections & Brocante trouvée');
  
  // Vérifier les sous-catégories spécifiques mentionnées dans le feedback
  const specificSubcategories = [
    'livres-rares-collection',
    'pieces-monnaie-medailles',
    'objets-vintage-retro',
    'art-artisanat',
    'antiquites',
    'collections-specialisees'
  ];
  
  let allFound = true;
  
  specificSubcategories.forEach(subId => {
    const subPattern = new RegExp(`id: '${subId}'`);
    const found = subPattern.test(collectionsSection);
    
    if (found) {
      console.log(`✅ Sous-catégorie "${subId}" trouvée dans Collections & Brocante`);
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE dans Collections & Brocante`);
      allFound = false;
    }
  });
  
  return allFound;
}

// Fonction principale de validation
function main() {
  console.log('🚀 DÉMARRAGE DE LA VALIDATION ROBUSTE DES CATÉGORIES');
  console.log('=' .repeat(80));
  
  const content = readCategoriesFile();
  if (!content) {
    console.log('❌ Arrêt de la validation due à une erreur de lecture');
    return;
  }
  
  console.log('✅ Fichier lu avec succès');
  console.log(`📏 Taille du fichier: ${content.length} caractères`);
  
  // Validation de la structure générale
  const structureResults = validateFileStructure(content);
  
  // Validation des catégories par recherche
  const categoryResults = validateCategoriesBySearch(content);
  
  // Validation détaillée de Collections & Brocante
  const collectionsDetails = validateCollectionsBrocanteDetails(content);
  
  // Résultats finaux
  console.log('\n' + '=' .repeat(80));
  console.log('📊 RÉSULTATS FINAUX DE LA VALIDATION');
  console.log('=' .repeat(80));
  
  console.log('\n🏗️ STRUCTURE DU FICHIER:');
  console.log(`  ✅ Checks critiques: ${structureResults.passedCriticalChecks}/${structureResults.criticalChecks}`);
  console.log(`  ✅ Checks totaux: ${structureResults.passedChecks}/${structureResults.totalChecks}`);
  
  console.log('\n📂 CATÉGORIES:');
  console.log(`  ✅ Validations réussies: ${categoryResults.passed}/${categoryResults.total}`);
  console.log(`  📈 Taux de réussite: ${categoryResults.successRate}%`);
  
  console.log('\n🎯 COLLECTIONS & BROCANTE:');
  console.log(`  ${collectionsDetails ? '✅' : '❌'} Sous-catégories spécifiques trouvées`);
  
  const overallSuccess = 
    structureResults.passedCriticalChecks === structureResults.criticalChecks &&
    categoryResults.successRate === 100 &&
    collectionsDetails;
  
  console.log('\n' + '=' .repeat(80));
  if (overallSuccess) {
    console.log('🎉 FÉLICITATIONS ! VALIDATION COMPLÈTE RÉUSSIE À 100%');
    console.log('✅ Toutes les catégories algériennes sont correctement intégrées');
    console.log('✅ Support multilingue complet (FR, AR, EN, DE, ES)');
    console.log('✅ Structure hiérarchique respectée');
    console.log('✅ Collections & Brocante complète avec toutes les sous-catégories');
    console.log('✅ Échanges & Partage complet');
    console.log('✅ Fichier structurellement correct');
  } else {
    console.log('⚠️ VALIDATION INCOMPLÈTE - DES PROBLÈMES ONT ÉTÉ DÉTECTÉS');
    console.log('Veuillez vérifier les erreurs ci-dessus et corriger les problèmes.');
  }
  
  console.log('\n📋 RÉCAPITULATIF DES TRADUCTIONS:');
  console.log(`  Français: ${structureResults.translationStats.frCount} entrées`);
  console.log(`  Arabe: ${structureResults.translationStats.arCount} entrées`);
  console.log(`  Anglais: ${structureResults.translationStats.enCount} entrées`);
  console.log(`  Allemand: ${structureResults.translationStats.deCount} entrées`);
  console.log(`  Espagnol: ${structureResults.translationStats.esCount} entrées`);
  
  console.log('\n' + '=' .repeat(80));
}

// Exécuter la validation
main();