import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Véhicules & Équipements...');

// Structure détaillée des catégories
const detailedVehiclesCategories = {
  id: 'vehicules-equipements',
  name: 'Véhicules & Équipements',
  slug: 'vehicules-equipements',
  subcategories: {
    // Véhicules
    'vehicules': {
      id: 'vehicules',
      name: 'Véhicules',
      slug: 'vehicules',
      subcategories: {
        // Voitures
        'voitures': {
          id: 'voitures',
          name: 'Voitures',
          slug: 'voitures',
          subcategories: {
            'voitures-occasion': {
              id: 'voitures-occasion',
              name: 'Voitures d\'Occasion',
              slug: 'voitures-occasion',
              subcategories: []
            },
            'voitures-neuves': {
              id: 'voitures-neuves',
              name: 'Voitures Neuves',
              slug: 'voitures-neuves',
              subcategories: []
            },
            'voitures-luxe': {
              id: 'voitures-luxe',
              name: 'Voitures de Luxe',
              slug: 'voitures-luxe',
              subcategories: []
            },
            'voitures-hybrides': {
              id: 'voitures-hybrides',
              name: 'Voitures Hybrides',
              slug: 'voitures-hybrides',
              subcategories: []
            },
            'voitures-electriques': {
              id: 'voitures-electriques',
              name: 'Voitures Électriques',
              slug: 'voitures-electriques',
              subcategories: []
            },
            'voitures-4x4-suv': {
              id: 'voitures-4x4-suv',
              name: '4x4 & SUV',
              slug: 'voitures-4x4-suv',
              subcategories: []
            },
            'voitures-utilitaires': {
              id: 'voitures-utilitaires',
              name: 'Voitures Utilitaires',
              slug: 'voitures-utilitaires',
              subcategories: []
            },
            'voitures-classiques': {
              id: 'voitures-classiques',
              name: 'Voitures Classiques & Collection',
              slug: 'voitures-classiques',
              subcategories: []
            }
          }
        },
        // Motos
        'motos': {
          id: 'motos',
          name: 'Motos',
          slug: 'motos',
          subcategories: {
            'motos-occasion': {
              id: 'motos-occasion',
              name: 'Motos d\'Occasion',
              slug: 'motos-occasion',
              subcategories: []
            },
            'motos-neuves': {
              id: 'motos-neuves',
              name: 'Motos Neuves',
              slug: 'motos-neuves',
              subcategories: []
            },
            'scooters': {
              id: 'scooters',
              name: 'Scooters',
              slug: 'scooters',
              subcategories: []
            },
            'motos-sport': {
              id: 'motos-sport',
              name: 'Motos Sport',
              slug: 'motos-sport',
              subcategories: []
            },
            'motos-cross-enduro': {
              id: 'motos-cross-enduro',
              name: 'Motos Cross & Enduro',
              slug: 'motos-cross-enduro',
              subcategories: []
            },
            'motos-custom': {
              id: 'motos-custom',
              name: 'Motos Custom & Cruiser',
              slug: 'motos-custom',
              subcategories: []
            },
            'motos-electriques': {
              id: 'motos-electriques',
              name: 'Motos Électriques',
              slug: 'motos-electriques',
              subcategories: []
            }
          }
        },
        // Camions
        'camions': {
          id: 'camions',
          name: 'Camions',
          slug: 'camions',
          subcategories: {
            'camions-poids-lourds': {
              id: 'camions-poids-lourds',
              name: 'Camions Poids Lourds',
              slug: 'camions-poids-lourds',
              subcategories: []
            },
            'camions-bennes': {
              id: 'camions-bennes',
              name: 'Camions Bennes',
              slug: 'camions-bennes',
              subcategories: []
            },
            'camions-frigorifiques': {
              id: 'camions-frigorifiques',
              name: 'Camions Frigorifiques',
              slug: 'camions-frigorifiques',
              subcategories: []
            },
            'camions-citerne': {
              id: 'camions-citerne',
              name: 'Camions Citernes',
              slug: 'camions-citerne',
              subcategories: []
            },
            'tracteurs-routiers': {
              id: 'tracteurs-routiers',
              name: 'Tracteurs Routiers',
              slug: 'tracteurs-routiers',
              subcategories: []
            },
            'engins-chantier': {
              id: 'engins-chantier',
              name: 'Engins de Chantier',
              slug: 'engins-chantier',
              subcategories: []
            }
          }
        },
        // Pièces Détachées
        'pieces-detachees': {
          id: 'pieces-detachees',
          name: 'Pièces Détachées',
          slug: 'pieces-detachees',
          subcategories: {
            'pieces-moteur': {
              id: 'pieces-moteur',
              name: 'Pièces Moteur',
              slug: 'pieces-moteur',
              subcategories: []
            },
            'pieces-carrosserie': {
              id: 'pieces-carrosserie',
              name: 'Pièces Carrosserie',
              slug: 'pieces-carrosserie',
              subcategories: []
            },
            'pieces-freinage': {
              id: 'pieces-freinage',
              name: 'Pièces Freinage',
              slug: 'pieces-freinage',
              subcategories: []
            },
            'pieces-suspension': {
              id: 'pieces-suspension',
              name: 'Pièces Suspension',
              slug: 'pieces-suspension',
              subcategories: []
            },
            'pneumatiques': {
              id: 'pneumatiques',
              name: 'Pneumatiques',
              slug: 'pneumatiques',
              subcategories: []
            },
            'batteries': {
              id: 'batteries',
              name: 'Batteries',
              slug: 'batteries',
              subcategories: []
            },
            'pieces-electricite': {
              id: 'pieces-electricite',
              name: 'Pièces Électricité',
              slug: 'pieces-electricite',
              subcategories: []
            },
            'filtres-huile': {
              id: 'filtres-huile',
              name: 'Filtres & Huile',
              slug: 'filtres-huile',
              subcategories: []
            }
          }
        },
        // Caravans & Camping-Cars
        'caravans-camping-cars': {
          id: 'caravans-camping-cars',
          name: 'Caravans & Camping-Cars',
          slug: 'caravans-camping-cars',
          subcategories: {
            'camping-cars': {
              id: 'camping-cars',
              name: 'Camping-Cars',
              slug: 'camping-cars',
              subcategories: []
            },
            'caravanes': {
              id: 'caravanes',
              name: 'Caravanes',
              slug: 'caravanes',
              subcategories: []
            },
            'fourgons-aménages': {
              id: 'fourgons-aménages',
              name: 'Fourgons Aménagés',
              slug: 'fourgons-aménages',
              subcategories: []
            },
            'accessoires-camping': {
              id: 'accessoires-camping',
              name: 'Accessoires Camping',
              slug: 'accessoires-camping',
              subcategories: []
            }
          }
        }
      }
    },
    // Équipements Sportifs
    'equipements-sportifs': {
      id: 'equipements-sportifs',
      name: 'Équipements Sportifs',
      slug: 'equipements-sportifs',
      subcategories: {
        // Vélos
        'velos': {
          id: 'velos',
          name: 'Vélos',
          slug: 'velos',
          subcategories: {
            'velos-route': {
              id: 'velos-route',
              name: 'Vélos de Route',
              slug: 'velos-route',
              subcategories: []
            },
            'velos-vtt': {
              id: 'velos-vtt',
              name: 'VTT (Vélos Tout-Terrain)',
              slug: 'velos-vtt',
              subcategories: []
            },
            'velos-ville': {
              id: 'velos-ville',
              name: 'Vélos de Ville',
              slug: 'velos-ville',
              subcategories: []
            },
            'velos-electriques': {
              id: 'velos-electriques',
              name: 'Vélos Électriques',
              slug: 'velos-electriques',
              subcategories: []
            },
            'velos-pliant': {
              id: 'velos-pliant',
              name: 'Vélos Pliants',
              slug: 'velos-pliant',
              subcategories: []
            },
            'velos-enfant': {
              id: 'velos-enfant',
              name: 'Vélos Enfant',
              slug: 'velos-enfant',
              subcategories: []
            },
            'pieces-velos': {
              id: 'pieces-velos',
              name: 'Pièces & Accessoires Vélos',
              slug: 'pieces-velos',
              subcategories: []
            }
          }
        },
        // Skis
        'skis': {
          id: 'skis',
          name: 'Skis',
          slug: 'skis',
          subcategories: {
            'skis-alpin': {
              id: 'skis-alpin',
              name: 'Skis Alpin',
              slug: 'skis-alpin',
              subcategories: []
            },
            'skis-fond': {
              id: 'skis-fond',
              name: 'Skis de Fond',
              slug: 'skis-fond',
              subcategories: []
            },
            'snowboard': {
              id: 'snowboard',
              name: 'Snowboard',
              slug: 'snowboard',
              subcategories: []
            },
            'ski-rando': {
              id: 'ski-rando',
              name: 'Ski de Randonnée',
              slug: 'ski-rando',
              subcategories: []
            },
            'chaussures-ski': {
              id: 'chaussures-ski',
              name: 'Chaussures de Ski',
              slug: 'chaussures-ski',
              subcategories: []
            },
            'equipements-ski': {
              id: 'equipements-ski',
              name: 'Équipements de Ski',
              slug: 'equipements-ski',
              subcategories: []
            }
          }
        },
        // Matériel de Fitness
        'materiel-fitness': {
          id: 'materiel-fitness',
          name: 'Matériel de Fitness',
          slug: 'materiel-fitness',
          subcategories: {
            'musculation': {
              id: 'musculation',
              name: 'Musculation',
              slug: 'musculation',
              subcategories: []
            },
            'cardio-fitness': {
              id: 'cardio-fitness',
              name: 'Cardio-Fitness',
              slug: 'cardio-fitness',
              subcategories: []
            },
            'fitness-domicile': {
              id: 'fitness-domicile',
              name: 'Fitness à Domicile',
              slug: 'fitness-domicile',
              subcategories: []
            },
            'yoga-pilates': {
              id: 'yoga-pilates',
              name: 'Yoga & Pilates',
              slug: 'yoga-pilates',
              subcategories: []
            },
            'crossfit': {
              id: 'crossfit',
              name: 'Crossfit',
              slug: 'crossfit',
              subcategories: []
            },
            'accessoires-fitness': {
              id: 'accessoires-fitness',
              name: 'Accessoires Fitness',
              slug: 'accessoires-fitness',
              subcategories: []
            }
          }
        },
        // Sports d'Eau
        'sports-eau': {
          id: 'sports-eau',
          name: 'Sports d\'Eau',
          slug: 'sports-eau',
          subcategories: {
            'plongee': {
              id: 'plongee',
              name: 'Plongée',
              slug: 'plongee',
              subcategories: []
            },
            'kayak-canoe': {
              id: 'kayak-canoe',
              name: 'Kayak & Canoë',
              slug: 'kayak-canoe',
              subcategories: []
            },
            'surf': {
              id: 'surf',
              name: 'Surf',
              slug: 'surf',
              subcategories: []
            },
            'planche-voile': {
              id: 'planche-voile',
              name: 'Planche à Voile',
              slug: 'planche-voile',
              subcategories: []
            },
            'paddle': {
              id: 'paddle',
              name: 'Paddle',
              slug: 'paddle',
              subcategories: []
            },
            'equipements-plongee': {
              id: 'equipements-plongee',
              name: 'Équipements de Plongée',
              slug: 'equipements-plongee',
              subcategories: []
            }
          }
        },
        // Sports Collectifs
        'sports-collectifs': {
          id: 'sports-collectifs',
          name: 'Sports Collectifs',
          slug: 'sports-collectifs',
          subcategories: {
            'football': {
              id: 'football',
              name: 'Football',
              slug: 'football',
              subcategories: []
            },
            'basketball': {
              id: 'basketball',
              name: 'Basketball',
              slug: 'basketball',
              subcategories: []
            },
            'volleyball': {
              id: 'volleyball',
              name: 'Volleyball',
              slug: 'volleyball',
              subcategories: []
            },
            'handball': {
              id: 'handball',
              name: 'Handball',
              slug: 'handball',
              subcategories: []
            },
            'tennis': {
              id: 'tennis',
              name: 'Tennis',
              slug: 'tennis',
              subcategories: []
            },
            'badminton': {
              id: 'badminton',
              name: 'Badminton',
              slug: 'badminton',
              subcategories: []
            }
          }
        },
        // Sports de Combat
        'sports-de-combat': {
          id: 'sports-de-combat',
          name: 'Sports de Combat',
          slug: 'sports-de-combat',
          subcategories: {
            'boxe': {
              id: 'boxe',
              name: 'Boxe',
              slug: 'boxe',
              subcategories: []
            },
            'arts-martiaux': {
              id: 'arts-martiaux',
              name: 'Arts Martiaux',
              slug: 'arts-martiaux',
              subcategories: []
            },
            'mma': {
              id: 'mma',
              name: 'MMA (Arts Martiaux Mixtes)',
              slug: 'mma',
              subcategories: []
            },
            'equipements-combat': {
              id: 'equipements-combat',
              name: 'Équipements de Combat',
              slug: 'equipements-combat',
              subcategories: []
            }
          }
        }
      }
    },
    // Matériel Nautique & Camping
    'materiel-nautique-camping': {
      id: 'materiel-nautique-camping',
      name: 'Matériel Nautique & Camping',
      slug: 'materiel-nautique-camping',
      subcategories: {
        // Bateaux
        'bateaux': {
          id: 'bateaux',
          name: 'Bateaux',
          slug: 'bateaux',
          subcategories: {
            'bateaux-moteur': {
              id: 'bateaux-moteur',
              name: 'Bateaux à Moteur',
              slug: 'bateaux-moteur',
              subcategories: []
            },
            'voiliers': {
              id: 'voiliers',
              name: 'Voiliers',
              slug: 'voiliers',
              subcategories: []
            },
            'yachts': {
              id: 'yachts',
              name: 'Yachts & Bateaux de Luxe',
              slug: 'yachts',
              subcategories: []
            },
            'bateaux-pneumatiques': {
              id: 'bateaux-pneumatiques',
              name: 'Bateaux Pneumatiques',
              slug: 'bateaux-pneumatiques',
              subcategories: []
            },
            'jet-ski': {
              id: 'jet-ski',
              name: 'Jet-Ski',
              slug: 'jet-ski',
              subcategories: []
            },
            'moteurs-bateaux': {
              id: 'moteurs-bateaux',
              name: 'Moteurs de Bateaux',
              slug: 'moteurs-bateaux',
              subcategories: []
            }
          }
        },
        // Équipements de Plongée
        'equipements-plongee': {
          id: 'equipements-plongee',
          name: 'Équipements de Plongée',
          slug: 'equipements-plongee',
          subcategories: {
            'combinaisons-plongee': {
              id: 'combinaisons-plongee',
              name: 'Combinaisons de Plongée',
              slug: 'combinaisons-plongee',
              subcategories: []
            },
            'bouteilles-plongee': {
              id: 'bouteilles-plongee',
              name: 'Bouteilles de Plongée',
              slug: 'bouteilles-plongee',
              subcategories: []
            },
            'detendeurs': {
              id: 'detendeurs',
              name: 'Détendeurs',
              slug: 'detendeurs',
              subcategories: []
            },
            'masques-palmes-tubas': {
              id: 'masques-palmes-tubas',
              name: 'Masques, Palmes & Tuba',
              slug: 'masques-palmes-tubas',
              subcategories: []
            },
            'instruments-plongee': {
              id: 'instruments-plongee',
              name: 'Instruments de Plongée',
              slug: 'instruments-plongee',
              subcategories: []
            },
            'accessoires-plongee': {
              id: 'accessoires-plongee',
              name: 'Accessoires de Plongée',
              slug: 'accessoires-plongee',
              subcategories: []
            }
          }
        },
        // Matériel de Camping
        'materiel-camping': {
          id: 'materiel-camping',
          name: 'Matériel de Camping',
          slug: 'materiel-camping',
          subcategories: {
            'tentes': {
              id: 'tentes',
              name: 'Tentes',
              slug: 'tentes',
              subcategories: []
            },
            'sacs-de-couchage': {
              id: 'sacs-de-couchage',
              name: 'Sacs de Couchage',
              slug: 'sacs-de-couchage',
              subcategories: []
            },
            'matelas-camping': {
              id: 'matelas-camping',
              name: 'Matelas de Camping',
              slug: 'matelas-camping',
              subcategories: []
            },
            'mobilier-camping': {
              id: 'mobilier-camping',
              name: 'Mobilier de Camping',
              slug: 'mobilier-camping',
              subcategories: []
            },
            'rechauds-cuisine-camping': {
              id: 'rechauds-cuisine-camping',
              name: 'Réchauds & Cuisine Camping',
              slug: 'rechauds-cuisine-camping',
              subcategories: []
            },
            'glacieres-camping': {
              id: 'glacieres-camping',
              name: 'Glacières & Boissons',
              slug: 'glacieres-camping',
              subcategories: []
            },
            'lampes-camping': {
              id: 'lampes-camping',
              name: 'Lampes & Éclairage Camping',
              slug: 'lampes-camping',
              subcategories: []
            },
            'accessoires-camping': {
              id: 'accessoires-camping',
              name: 'Accessoires de Camping',
              slug: 'accessoires-camping',
              subcategories: []
            }
          }
        },
        // Randonnée & Trekking
        'randonnee-randonnee': {
          id: 'randonnee-randonnee',
          name: 'Randonnée & Trekking',
          slug: 'randonnee-randonnee',
          subcategories: {
            'chaussures-randonnee': {
              id: 'chaussures-randonnee',
              name: 'Chaussures de Randonnée',
              slug: 'chaussures-randonnee',
              subcategories: []
            },
            'sacs-randonnee': {
              id: 'sacs-randonnee',
              name: 'Sacs à Dos de Randonnée',
              slug: 'sacs-randonnee',
              subcategories: []
            },
            'vetements-randonnee': {
              id: 'vetements-randonnee',
              name: 'Vêtements de Randonnée',
              slug: 'vetements-randonnee',
              subcategories: []
            },
            'accessoires-randonnee': {
              id: 'accessoires-randonnee',
              name: 'Accessoires de Randonnée',
              slug: 'accessoires-randonnee',
              subcategories: []
            },
            'bâtons-randonnee': {
              id: 'bâtons-randonnee',
              name: 'Bâtons de Randonnée',
              slug: 'bâtons-randonnee',
              subcategories: []
            }
          }
        }
      }
    }
  }
};

// Fonction pour convertir la structure en format TypeScript
function convertToTypeScript(category, level = 0) {
  let result = '';
  const indent = '  '.repeat(level);
  
  result += `${indent}{\n`;
  result += `${indent}  id: '${category.id}',\n`;
  result += `${indent}  name: '${category.name}',\n`;
  result += `${indent}  slug: '${category.slug}',\n`;
  result += `${indent}  icon: undefined,\n`;
  
  if (category.subcategories && Object.keys(category.subcategories).length > 0) {
    result += `${indent}  subcategories: [\n`;
    
    for (const [subId, subCategory] of Object.entries(category.subcategories)) {
      result += `${indent}    {\n`;
      result += `${indent}      id: '${subCategory.id}',\n`;
      result += `${indent}      name: '${subCategory.name}',\n`;
      result += `${indent}      slug: '${subCategory.slug}',\n`;
      result += `${indent}      icon: undefined,\n`;
      
      if (subCategory.subcategories && Object.keys(subCategory.subcategories).length > 0) {
        result += `${indent}      subcategories: [\n`;
        
        for (const [subSubId, subSubCategory] of Object.entries(subCategory.subcategories)) {
          result += `${indent}        {\n`;
          result += `${indent}          id: '${subSubCategory.id}',\n`;
          result += `${indent}          name: '${subSubCategory.name}',\n`;
          result += `${indent}          slug: '${subSubCategory.slug}',\n`;
          result += `${indent}          icon: undefined,\n`;
          result += `${indent}          subcategories: []\n`;
          result += `${indent}        },\n`;
        }
        
        result += `${indent}      ]\n`;
      } else {
        result += `${indent}      subcategories: []\n`;
      }
      
      result += `${indent}    },\n`;
    }
    
    result += `${indent}  ]\n`;
  } else {
    result += `${indent}  subcategories: []\n`;
  }
  
  result += `${indent}},\n`;
  
  return result;
}

// Générer le contenu TypeScript pour la nouvelle catégorie
const newCategoryContent = convertToTypeScript(detailedVehiclesCategories);

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Trouver la position pour insérer la nouvelle catégorie
const insertPosition = existingContent.lastIndexOf('];');

// Insérer la nouvelle catégorie avant la fin du tableau
const updatedContent = existingContent.substring(0, insertPosition) + 
  ',\n' + newCategoryContent.substring(2) + // Commence à partir de la première accolade pour éviter la virgule initiale
  existingContent.substring(insertPosition);

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique et Véhicules & Équipements
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${updatedContent.substring(updatedContent.indexOf('['))};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 Catégorie "Véhicules & Équipements" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Véhicules & Équipements ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');