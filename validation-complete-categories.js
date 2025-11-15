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

// Fonction pour extraire les catégories du contenu du fichier
function extractCategories(content) {
  try {
    // Extraire le contenu entre les crochets du tableau extendedCategories
    const match = content.match(/export const extendedCategories: MenuCategory\[\] = (\[[\s\S]*\]);/);
    if (!match) {
      console.error('❌ Impossible de trouver le tableau extendedCategories');
      return null;
    }
    
    // Utiliser eval pour parser le contenu (attention: uniquement pour le développement)
    // Note: En production, il faudrait utiliser un parser JSON/TypeScript approprié
    const categoriesContent = match[1];
    
    // Remplacer les imports et autres éléments non compatibles
    const cleanContent = categoriesContent
      .replace(/undefined/g, 'null')
      .replace(/icon: undefined,/g, '')
      .replace(/icon: null,/g, '');
    
    return eval(cleanContent);
  } catch (error) {
    console.error('❌ Erreur d\'extraction des catégories:', error.message);
    return null;
  }
}

// Fonction pour vérifier les catégories algériennes
function validateAlgerianCategories(categories) {
  console.log('\n🔍 VÉRIFICATION DES CATÉGORIES ALGÉRIENNES');
  console.log('=' .repeat(60));
  
  const algerianCategory = categories.find(cat => cat.id === 'artisanat-traditionnel-algerien');
  
  if (!algerianCategory) {
    console.log('❌ Catégorie "Artisanat Traditionnel Algérien" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Artisanat Traditionnel Algérien" trouvée');
  
  // Vérifier les sous-catégories attendues
  const expectedSubcategories = [
    'tapis-berberes',
    'poterie-traditionnelle',
    'bijoux-traditionnels',
    'costumes-traditionnels'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = algerianCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      // Vérifier les traductions
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier les produits locaux algériens
function validateAlgerianProducts(categories) {
  console.log('\n🔍 VÉRIFICATION DES PRODUITS LOCAUX ALGÉRIENS');
  console.log('=' .repeat(60));
  
  const productsCategory = categories.find(cat => cat.id === 'produits-locaux-algeriens');
  
  if (!productsCategory) {
    console.log('❌ Catégorie "Produits Locaux Algériens" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Produits Locaux Algériens" trouvée');
  
  const expectedSubcategories = [
    'huile-olive',
    'dattes-algeriennes',
    'miel-algerien',
    'epices-algeriennes'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = productsCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier les vêtements traditionnels algériens
function validateAlgerianClothing(categories) {
  console.log('\n🔍 VÉRIFICATION DES VÊTEMENTS TRADITIONNELS ALGÉRIENS');
  console.log('=' .repeat(60));
  
  const clothingCategory = categories.find(cat => cat.id === 'vetements-traditionnels-algeriens');
  
  if (!clothingCategory) {
    console.log('❌ Catégorie "Vêtements Traditionnels Algériens" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Vêtements Traditionnels Algériens" trouvée');
  
  const expectedSubcategories = [
    'haik',
    'blouza',
    'sarouel',
    'chachia'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = clothingCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier les plats traditionnels algériens
function validateAlgerianDishes(categories) {
  console.log('\n🔍 VÉRIFICATION DES PLATS TRADITIONNELS ALGÉRIENS');
  console.log('=' .repeat(60));
  
  const dishesCategory = categories.find(cat => cat.id === 'plats-traditionnels-algeriens');
  
  if (!dishesCategory) {
    console.log('❌ Catégorie "Plats Traditionnels Algériens" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Plats Traditionnels Algériens" trouvée');
  
  const expectedSubcategories = [
    'couscous-algerien',
    'tagine-algerien',
    'chorba',
    'rechta',
    'bourek'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = dishesCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier les pâtisseries traditionnelles algériennes
function validateAlgerianPastries(categories) {
  console.log('\n🔍 VÉRIFICATION DES PÂTISSERIES TRADITIONNELLES ALGÉRIENNES');
  console.log('=' .repeat(60));
  
  const pastriesCategory = categories.find(cat => cat.id === 'patisseries-traditionnelles-algeriennes');
  
  if (!pastriesCategory) {
    console.log('❌ Catégorie "Pâtisseries Traditionnelles Algériennes" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Pâtisseries Traditionnelles Algériennes" trouvée');
  
  const expectedSubcategories = [
    'baklawa-algerienne',
    'makrout',
    'gazelle-horns',
    'zlabia',
    'tcharek-mellouk'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = pastriesCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier les services et coutumes traditionnels
function validateTraditionalServices(categories) {
  console.log('\n🔍 VÉRIFICATION DES SERVICES ET COUTUMES TRADITIONNELS');
  console.log('=' .repeat(60));
  
  const servicesCategory = categories.find(cat => cat.id === 'services-coutumes-traditionnels');
  
  if (!servicesCategory) {
    console.log('❌ Catégorie "Services et Coutumes Traditionnels" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Services et Coutumes Traditionnels" trouvée');
  
  const expectedSubcategories = [
    'mariage-traditionnel',
    'musique-traditionnelle',
    'artisanat-services'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = servicesCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier la catégorie Collections & Brocante
function validateCollectionsBrocante(categories) {
  console.log('\n🔍 VÉRIFICATION DE LA CATÉGORIE COLLECTIONS & BROCANTE');
  console.log('=' .repeat(60));
  
  const collectionsCategory = categories.find(cat => cat.id === 'collections-brocante');
  
  if (!collectionsCategory) {
    console.log('❌ Catégorie "Collections & Brocante" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Collections & Brocante" trouvée');
  
  // Vérifier les traductions de la catégorie principale
  if (collectionsCategory.translations && 
      collectionsCategory.translations.fr && 
      collectionsCategory.translations.ar && 
      collectionsCategory.translations.en && 
      collectionsCategory.translations.de && 
      collectionsCategory.translations.es) {
    console.log('✅ Traductions complètes pour la catégorie principale');
  } else {
    console.log('❌ Traductions incomplètes pour la catégorie principale');
    return false;
  }
  
  const expectedSubcategories = [
    'timbres-poste',
    'livres-rares-collection',
    'pieces-monnaie-medailles',
    'objets-vintage-retro',
    'art-artisanat',
    'antiquites',
    'collections-specialisees'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = collectionsCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      // Vérifier les traductions
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
        
        // Vérifier les sous-sous-catégories
        if (subcategory.subcategories && subcategory.subcategories.length > 0) {
          console.log(`  ✅ ${subcategory.subcategories.length} sous-sous-catégorie(s) trouvée(s)`);
          
          subcategory.subcategories.forEach(subSub => {
            if (subSub.translations && 
                subSub.translations.fr && 
                subSub.translations.ar && 
                subSub.translations.en && 
                subSub.translations.de && 
                subSub.translations.es) {
              console.log(`    ✅ Traductions complètes pour ${subSub.name}`);
            } else {
              console.log(`    ❌ Traductions incomplètes pour ${subSub.name}`);
              allSubcategoriesFound = false;
            }
          });
        }
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction pour vérifier la catégorie Échanges & Partage
function validateEchangesPartage(categories) {
  console.log('\n🔍 VÉRIFICATION DE LA CATÉGORIE ÉCHANGES & PARTAGE');
  console.log('=' .repeat(60));
  
  const echangesCategory = categories.find(cat => cat.id === 'echanges-partage');
  
  if (!echangesCategory) {
    console.log('❌ Catégorie "Échanges & Partage" NON TROUVÉE');
    return false;
  }
  
  console.log('✅ Catégorie "Échanges & Partage" trouvée');
  
  // Vérifier les traductions de la catégorie principale
  if (echangesCategory.translations && 
      echangesCategory.translations.fr && 
      echangesCategory.translations.ar && 
      echangesCategory.translations.en && 
      echangesCategory.translations.de && 
      echangesCategory.translations.es) {
    console.log('✅ Traductions complètes pour la catégorie principale');
  } else {
    console.log('❌ Traductions incomplètes pour la catégorie principale');
    return false;
  }
  
  const expectedSubcategories = [
    'don-troc',
    'covoiturage-transport',
    'partage-competences',
    'temps-libre-activites'
  ];
  
  let allSubcategoriesFound = true;
  
  expectedSubcategories.forEach(subId => {
    const subcategory = echangesCategory.subcategories.find(sub => sub.id === subId);
    if (subcategory) {
      console.log(`✅ Sous-catégorie "${subcategory.name}" (${subId}) trouvée`);
      
      // Vérifier les traductions
      if (subcategory.translations && 
          subcategory.translations.fr && 
          subcategory.translations.ar && 
          subcategory.translations.en && 
          subcategory.translations.de && 
          subcategory.translations.es) {
        console.log(`  ✅ Traductions complètes pour ${subcategory.name}`);
        
        // Vérifier les sous-sous-catégories
        if (subcategory.subcategories && subcategory.subcategories.length > 0) {
          console.log(`  ✅ ${subcategory.subcategories.length} sous-sous-catégorie(s) trouvée(s)`);
          
          subcategory.subcategories.forEach(subSub => {
            if (subSub.translations && 
                subSub.translations.fr && 
                subSub.translations.ar && 
                subSub.translations.en && 
                subSub.translations.de && 
                subSub.translations.es) {
              console.log(`    ✅ Traductions complètes pour ${subSub.name}`);
            } else {
              console.log(`    ❌ Traductions incomplètes pour ${subSub.name}`);
              allSubcategoriesFound = false;
            }
          });
        }
      } else {
        console.log(`  ❌ Traductions incomplètes pour ${subcategory.name}`);
        allSubcategoriesFound = false;
      }
    } else {
      console.log(`❌ Sous-catégorie "${subId}" NON TROUVÉE`);
      allSubcategoriesFound = false;
    }
  });
  
  return allSubcategoriesFound;
}

// Fonction principale de validation
function main() {
  console.log('🚀 DÉMARRAGE DE LA VALIDATION COMPLÈTE DES CATÉGORIES');
  console.log('=' .repeat(80));
  
  const content = readCategoriesFile();
  if (!content) {
    console.log('❌ Arrêt de la validation due à une erreur de lecture');
    return;
  }
  
  const categories = extractCategories(content);
  if (!categories) {
    console.log('❌ Arrêt de la validation due à une erreur d\'extraction');
    return;
  }
  
  console.log(`✅ Fichier lu avec succès - ${categories.length} catégories trouvées`);
  
  // Validation de toutes les catégories
  const results = {
    algerianCrafts: validateAlgerianCategories(categories),
    algerianProducts: validateAlgerianProducts(categories),
    algerianClothing: validateAlgerianClothing(categories),
    algerianDishes: validateAlgerianDishes(categories),
    algerianPastries: validateAlgerianPastries(categories),
    traditionalServices: validateTraditionalServices(categories),
    collectionsBrocante: validateCollectionsBrocante(categories),
    echangesPartage: validateEchangesPartage(categories)
  };
  
  // Résultats finaux
  console.log('\n' + '=' .repeat(80));
  console.log('📊 RÉSULTATS FINAUX DE LA VALIDATION');
  console.log('=' .repeat(80));
  
  const totalChecks = Object.keys(results).length;
  const passedChecks = Object.values(results).filter(result => result).length;
  const successRate = Math.round((passedChecks / totalChecks) * 100);
  
  console.log(`✅ Validations réussies: ${passedChecks}/${totalChecks}`);
  console.log(`📈 Taux de réussite: ${successRate}%`);
  
  if (successRate === 100) {
    console.log('\n🎉 FÉLICITATIONS ! TOUTES LES CATÉGORIES SONT CORRECTEMENT INTÉGRÉES');
    console.log('✅ Support multilingue complet (FR, AR, EN, DE, ES)');
    console.log('✅ Structure hiérarchique respectée');
    console.log('✅ Toutes les catégories algériennes sont présentes');
    console.log('✅ Collections & Brocante complète');
    console.log('✅ Échanges & Partage complet');
  } else {
    console.log('\n⚠️ CERTAINES VALIDATIONS ONT ÉCHOUÉ');
    console.log('Veuillez vérifier les erreurs ci-dessus et corriger les problèmes.');
  }
  
  console.log('\n' + '=' .repeat(80));
}

// Exécuter la validation
main();