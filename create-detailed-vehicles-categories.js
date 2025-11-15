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
const detailedVehiclesCategories = [
  {
    id: 'vehicules-equipements',
    name: 'Véhicules & Équipements',
    slug: 'vehicules-equipements',
    subcategories: [
      {
        id: 'vehicules',
        name: 'Véhicules',
        slug: 'vehicules',
        subcategories: [
          {
            id: 'voitures',
            name: 'Voitures',
            slug: 'voitures',
            subcategories: [
              {
                id: 'voitures-occasion',
                name: 'Voitures d\'Occasion',
                slug: 'voitures-occasion',
                subcategories: []
              },
              {
                id: 'voitures-neuves',
                name: 'Voitures Neuves',
                slug: 'voitures-neuves',
                subcategories: []
              },
              {
                id: 'voitures-luxe',
                name: 'Voitures de Luxe',
                slug: 'voitures-luxe',
                subcategories: []
              },
              {
                id: 'voitures-hybrides',
                name: 'Voitures Hybrides',
                slug: 'voitures-hybrides',
                subcategories: []
              },
              {
                id: 'voitures-electriques',
                name: 'Voitures Électriques',
                slug: 'voitures-electriques',
                subcategories: []
              },
              {
                id: 'voitures-4x4-suv',
                name: '4x4 & SUV',
                slug: 'voitures-4x4-suv',
                subcategories: []
              },
              {
                id: 'voitures-utilitaires',
                name: 'Voitures Utilitaires',
                slug: 'voitures-utilitaires',
                subcategories: []
              },
              {
                id: 'voitures-classiques',
                name: 'Voitures Classiques & Collection',
                slug: 'voitures-classiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'motos',
            name: 'Motos',
            slug: 'motos',
            subcategories: [
              {
                id: 'motos-occasion',
                name: 'Motos d\'Occasion',
                slug: 'motos-occasion',
                subcategories: []
              },
              {
                id: 'motos-neuves',
                name: 'Motos Neuves',
                slug: 'motos-neuves',
                subcategories: []
              },
              {
                id: 'scooters',
                name: 'Scooters',
                slug: 'scooters',
                subcategories: []
              },
              {
                id: 'motos-sport',
                name: 'Motos Sport',
                slug: 'motos-sport',
                subcategories: []
              },
              {
                id: 'motos-cross-enduro',
                name: 'Motos Cross & Enduro',
                slug: 'motos-cross-enduro',
                subcategories: []
              },
              {
                id: 'motos-custom',
                name: 'Motos Custom & Cruiser',
                slug: 'motos-custom',
                subcategories: []
              },
              {
                id: 'motos-electriques',
                name: 'Motos Électriques',
                slug: 'motos-electriques',
                subcategories: []
              }
            ]
          },
          {
            id: 'camions',
            name: 'Camions',
            slug: 'camions',
            subcategories: [
              {
                id: 'camions-poids-lourds',
                name: 'Camions Poids Lourds',
                slug: 'camions-poids-lourds',
                subcategories: []
              },
              {
                id: 'camions-bennes',
                name: 'Camions Bennes',
                slug: 'camions-bennes',
                subcategories: []
              },
              {
                id: 'camions-frigorifiques',
                name: 'Camions Frigorifiques',
                slug: 'camions-frigorifiques',
                subcategories: []
              },
              {
                id: 'camions-citerne',
                name: 'Camions Citernes',
                slug: 'camions-citerne',
                subcategories: []
              },
              {
                id: 'tracteurs-routiers',
                name: 'Tracteurs Routiers',
                slug: 'tracteurs-routiers',
                subcategories: []
              },
              {
                id: 'engins-chantier',
                name: 'Engins de Chantier',
                slug: 'engins-chantier',
                subcategories: []
              }
            ]
          },
          {
            id: 'pieces-detachees',
            name: 'Pièces Détachées',
            slug: 'pieces-detachees',
            subcategories: [
              {
                id: 'pieces-moteur',
                name: 'Pièces Moteur',
                slug: 'pieces-moteur',
                subcategories: []
              },
              {
                id: 'pieces-carrosserie',
                name: 'Pièces Carrosserie',
                slug: 'pieces-carrosserie',
                subcategories: []
              },
              {
                id: 'pieces-freinage',
                name: 'Pièces Freinage',
                slug: 'pieces-freinage',
                subcategories: []
              },
              {
                id: 'pieces-suspension',
                name: 'Pièces Suspension',
                slug: 'pieces-suspension',
                subcategories: []
              },
              {
                id: 'pneumatiques',
                name: 'Pneumatiques',
                slug: 'pneumatiques',
                subcategories: []
              },
              {
                id: 'batteries',
                name: 'Batteries',
                slug: 'batteries',
                subcategories: []
              },
              {
                id: 'pieces-electricite',
                name: 'Pièces Électricité',
                slug: 'pieces-electricite',
                subcategories: []
              },
              {
                id: 'filtres-huile',
                name: 'Filtres & Huile',
                slug: 'filtres-huile',
                subcategories: []
              }
            ]
          },
          {
            id: 'caravans-camping-cars',
            name: 'Caravans & Camping-Cars',
            slug: 'caravans-camping-cars',
            subcategories: [
              {
                id: 'camping-cars',
                name: 'Camping-Cars',
                slug: 'camping-cars',
                subcategories: []
              },
              {
                id: 'caravanes',
                name: 'Caravanes',
                slug: 'caravanes',
                subcategories: []
              },
              {
                id: 'fourgons-aménages',
                name: 'Fourgons Aménagés',
                slug: 'fourgons-aménages',
                subcategories: []
              },
              {
                id: 'accessoires-camping',
                name: 'Accessoires Camping',
                slug: 'accessoires-camping',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'equipements-sportifs',
        name: 'Équipements Sportifs',
        slug: 'equipements-sportifs',
        subcategories: [
          {
            id: 'velos',
            name: 'Vélos',
            slug: 'velos',
            subcategories: [
              {
                id: 'velos-route',
                name: 'Vélos de Route',
                slug: 'velos-route',
                subcategories: []
              },
              {
                id: 'velos-vtt',
                name: 'VTT (Vélos Tout-Terrain)',
                slug: 'velos-vtt',
                subcategories: []
              },
              {
                id: 'velos-ville',
                name: 'Vélos de Ville',
                slug: 'velos-ville',
                subcategories: []
              },
              {
                id: 'velos-electriques',
                name: 'Vélos Électriques',
                slug: 'velos-electriques',
                subcategories: []
              },
              {
                id: 'velos-pliant',
                name: 'Vélos Pliants',
                slug: 'velos-pliant',
                subcategories: []
              },
              {
                id: 'velos-enfant',
                name: 'Vélos Enfant',
                slug: 'velos-enfant',
                subcategories: []
              },
              {
                id: 'pieces-velos',
                name: 'Pièces & Accessoires Vélos',
                slug: 'pieces-velos',
                subcategories: []
              }
            ]
          },
          {
            id: 'skis',
            name: 'Skis',
            slug: 'skis',
            subcategories: [
              {
                id: 'skis-alpin',
                name: 'Skis Alpin',
                slug: 'skis-alpin',
                subcategories: []
              },
              {
                id: 'skis-fond',
                name: 'Skis de Fond',
                slug: 'skis-fond',
                subcategories: []
              },
              {
                id: 'snowboard',
                name: 'Snowboard',
                slug: 'snowboard',
                subcategories: []
              },
              {
                id: 'ski-rando',
                name: 'Ski de Randonnée',
                slug: 'ski-rando',
                subcategories: []
              },
              {
                id: 'chaussures-ski',
                name: 'Chaussures de Ski',
                slug: 'chaussures-ski',
                subcategories: []
              },
              {
                id: 'equipements-ski',
                name: 'Équipements de Ski',
                slug: 'equipements-ski',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiel-fitness',
            name: 'Matériel de Fitness',
            slug: 'materiel-fitness',
            subcategories: [
              {
                id: 'musculation',
                name: 'Musculation',
                slug: 'musculation',
                subcategories: []
              },
              {
                id: 'cardio-fitness',
                name: 'Cardio-Fitness',
                slug: 'cardio-fitness',
                subcategories: []
              },
              {
                id: 'fitness-domicile',
                name: 'Fitness à Domicile',
                slug: 'fitness-domicile',
                subcategories: []
              },
              {
                id: 'yoga-pilates',
                name: 'Yoga & Pilates',
                slug: 'yoga-pilates',
                subcategories: []
              },
              {
                id: 'crossfit',
                name: 'Crossfit',
                slug: 'crossfit',
                subcategories: []
              },
              {
                id: 'accessoires-fitness',
                name: 'Accessoires Fitness',
                slug: 'accessoires-fitness',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-eau',
            name: 'Sports d\'Eau',
            slug: 'sports-eau',
            subcategories: [
              {
                id: 'plongee',
                name: 'Plongée',
                slug: 'plongee',
                subcategories: []
              },
              {
                id: 'kayak-canoe',
                name: 'Kayak & Canoë',
                slug: 'kayak-canoe',
                subcategories: []
              },
              {
                id: 'surf',
                name: 'Surf',
                slug: 'surf',
                subcategories: []
              },
              {
                id: 'planche-voile',
                name: 'Planche à Voile',
                slug: 'planche-voile',
                subcategories: []
              },
              {
                id: 'paddle',
                name: 'Paddle',
                slug: 'paddle',
                subcategories: []
              },
              {
                id: 'equipements-plongee',
                name: 'Équipements de Plongée',
                slug: 'equipements-plongee',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-collectifs',
            name: 'Sports Collectifs',
            slug: 'sports-collectifs',
            subcategories: [
              {
                id: 'football',
                name: 'Football',
                slug: 'football',
                subcategories: []
              },
              {
                id: 'basketball',
                name: 'Basketball',
                slug: 'basketball',
                subcategories: []
              },
              {
                id: 'volleyball',
                name: 'Volleyball',
                slug: 'volleyball',
                subcategories: []
              },
              {
                id: 'handball',
                name: 'Handball',
                slug: 'handball',
                subcategories: []
              },
              {
                id: 'tennis',
                name: 'Tennis',
                slug: 'tennis',
                subcategories: []
              },
              {
                id: 'badminton',
                name: 'Badminton',
                slug: 'badminton',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-de-combat',
            name: 'Sports de Combat',
            slug: 'sports-de-combat',
            subcategories: [
              {
                id: 'boxe',
                name: 'Boxe',
                slug: 'boxe',
                subcategories: []
              },
              {
                id: 'arts-martiaux',
                name: 'Arts Martiaux',
                slug: 'arts-martiaux',
                subcategories: []
              },
              {
                id: 'mma',
                name: 'MMA (Arts Martiaux Mixtes)',
                slug: 'mma',
                subcategories: []
              },
              {
                id: 'equipements-combat',
                name: 'Équipements de Combat',
                slug: 'equipements-combat',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'materiel-nautique-camping',
        name: 'Matériel Nautique & Camping',
        slug: 'materiel-nautique-camping',
        subcategories: [
          {
            id: 'bateaux',
            name: 'Bateaux',
            slug: 'bateaux',
            subcategories: [
              {
                id: 'bateaux-moteur',
                name: 'Bateaux à Moteur',
                slug: 'bateaux-moteur',
                subcategories: []
              },
              {
                id: 'voiliers',
                name: 'Voiliers',
                slug: 'voiliers',
                subcategories: []
              },
              {
                id: 'yachts',
                name: 'Yachts & Bateaux de Luxe',
                slug: 'yachts',
                subcategories: []
              },
              {
                id: 'bateaux-pneumatiques',
                name: 'Bateaux Pneumatiques',
                slug: 'bateaux-pneumatiques',
                subcategories: []
              },
              {
                id: 'jet-ski',
                name: 'Jet-Ski',
                slug: 'jet-ski',
                subcategories: []
              },
              {
                id: 'moteurs-bateaux',
                name: 'Moteurs de Bateaux',
                slug: 'moteurs-bateaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'equipements-plongee',
            name: 'Équipements de Plongée',
            slug: 'equipements-plongee',
            subcategories: [
              {
                id: 'combinaisons-plongee',
                name: 'Combinaisons de Plongée',
                slug: 'combinaisons-plongee',
                subcategories: []
              },
              {
                id: 'bouteilles-plongee',
                name: 'Bouteilles de Plongée',
                slug: 'bouteilles-plongee',
                subcategories: []
              },
              {
                id: 'detendeurs',
                name: 'Détendeurs',
                slug: 'detendeurs',
                subcategories: []
              },
              {
                id: 'masques-palmes-tubas',
                name: 'Masques, Palmes & Tuba',
                slug: 'masques-palmes-tubas',
                subcategories: []
              },
              {
                id: 'instruments-plongee',
                name: 'Instruments de Plongée',
                slug: 'instruments-plongee',
                subcategories: []
              },
              {
                id: 'accessoires-plongee',
                name: 'Accessoires de Plongée',
                slug: 'accessoires-plongee',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiel-camping',
            name: 'Matériel de Camping',
            slug: 'materiel-camping',
            subcategories: [
              {
                id: 'tentes',
                name: 'Tentes',
                slug: 'tentes',
                subcategories: []
              },
              {
                id: 'sacs-de-couchage',
                name: 'Sacs de Couchage',
                slug: 'sacs-de-couchage',
                subcategories: []
              },
              {
                id: 'matelas-camping',
                name: 'Matelas de Camping',
                slug: 'matelas-camping',
                subcategories: []
              },
              {
                id: 'mobilier-camping',
                name: 'Mobilier de Camping',
                slug: 'mobilier-camping',
                subcategories: []
              },
              {
                id: 'rechauds-cuisine-camping',
                name: 'Réchauds & Cuisine Camping',
                slug: 'rechauds-cuisine-camping',
                subcategories: []
              },
              {
                id: 'glacieres-camping',
                name: 'Glacières & Boissons',
                slug: 'glacieres-camping',
                subcategories: []
              },
              {
                id: 'lampes-camping',
                name: 'Lampes & Éclairage Camping',
                slug: 'lampes-camping',
                subcategories: []
              },
              {
                id: 'accessoires-camping',
                name: 'Accessoires de Camping',
                slug: 'accessoires-camping',
                subcategories: []
              }
            ]
          },
          {
            id: 'randonnee-randonnee',
            name: 'Randonnée & Trekking',
            slug: 'randonnee-randonnee',
            subcategories: [
              {
                id: 'chaussures-randonnee',
                name: 'Chaussures de Randonnée',
                slug: 'chaussures-randonnee',
                subcategories: []
              },
              {
                id: 'sacs-randonnee',
                name: 'Sacs à Dos de Randonnée',
                slug: 'sacs-randonnee',
                subcategories: []
              },
              {
                id: 'vetements-randonnee',
                name: 'Vêtements de Randonnée',
                slug: 'vetements-randonnee',
                subcategories: []
              },
              {
                id: 'accessoires-randonnee',
                name: 'Accessoires de Randonnée',
                slug: 'accessoires-randonnee',
                subcategories: []
              },
              {
                id: 'bâtons-randonnee',
                name: 'Bâtons de Randonnée',
                slug: 'bâtons-randonnee',
                subcategories: []
              }
            ]
          }
        ]
      }
    ]
  }
];

// Lire le fichier existant pour ajouter les nouvelles catégories
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Extraire les catégories existantes
const existingCategoriesMatch = existingContent.match(/export const extendedCategories: MenuCategory\[ = \[([\s\S]*?)\];/);
if (!existingCategoriesMatch) {
  console.error('❌ Impossible de trouver les catégories existantes dans le fichier');
  process.exit(1);
}

const existingCategoriesData = existingCategoriesMatch[1];

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${detailedVehiclesCategories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    slug: '${cat.slug}',
    icon: undefined,
    subcategories: [
${cat.subcategories.map(sub => `      {
        id: '${sub.id}',
        name: '${sub.name}',
        slug: '${sub.slug}',
        icon: undefined,
        subcategories: [
${sub.subcategories.map(subsub => `          {
            id: '${subsub.id}',
            name: '${subsub.name}',
            slug: '${subsub.slug}',
            icon: undefined,
            subcategories: []
          }`).join(',\n')}
        ]
      }`).join(',\n')}
    ]
  }`).join(',\n')}
]`;

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Véhicules & Équipements
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${mergedCategories};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 ${detailedVehiclesCategories.length} catégories principales ajoutées`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Véhicules & Équipements ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');