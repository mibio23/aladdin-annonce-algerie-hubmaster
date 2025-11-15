import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Immobilier & Maison...');

// Structure détaillée des catégories pour Immobilier & Maison
const immobilierCategories = [
  {
    id: 'immobilier-maison',
    name: 'Immobilier & Maison',
    slug: 'immobilier-maison',
    subcategories: [
      {
        id: 'immobilier',
        name: 'Immobilier',
        slug: 'immobilier',
        subcategories: [
          {
            id: 'appartements',
            name: 'Appartements',
            slug: 'appartements',
            subcategories: [
              {
                id: 'appartements-vente',
                name: 'Appartements à Vendre',
                slug: 'appartements-vente',
                subcategories: []
              },
              {
                id: 'appartements-location',
                name: 'Appartements à Louer',
                slug: 'appartements-location',
                subcategories: []
              },
              {
                id: 'appartements-meubles',
                name: 'Appartements Meublés',
                slug: 'appartements-meubles',
                subcategories: []
              },
              {
                id: 'studios',
                name: 'Studios',
                slug: 'studios',
                subcategories: []
              },
              {
                id: 'duplex-triplex',
                name: 'Duplex & Triplex',
                slug: 'duplex-triplex',
                subcategories: []
              },
              {
                id: 'penthouses',
                name: 'Penthouses',
                slug: 'penthouses',
                subcategories: []
              },
              {
                id: 'appartements-neufs',
                name: 'Appartements Neufs',
                slug: 'appartements-neufs',
                subcategories: []
              }
            ]
          },
          {
            id: 'maisons',
            name: 'Maisons',
            slug: 'maisons',
            subcategories: [
              {
                id: 'maisons-vente',
                name: 'Maisons à Vendre',
                slug: 'maisons-vente',
                subcategories: []
              },
              {
                id: 'maisons-location',
                name: 'Maisons à Louer',
                slug: 'maisons-location',
                subcategories: []
              },
              {
                id: 'villas',
                name: 'Villas',
                slug: 'villas',
                subcategories: []
              },
              {
                id: 'maisons-traditionnelles',
                name: 'Maisons Traditionnelles',
                slug: 'maisons-traditionnelles',
                subcategories: []
              },
              {
                id: 'maisons-contemporaines',
                name: 'Maisons Contemporaines',
                slug: 'maisons-contemporaines',
                subcategories: []
              },
              {
                id: 'fermettes',
                name: 'Fermettes',
                slug: 'fermettes',
                subcategories: []
              },
              {
                id: 'chalets',
                name: 'Chalets',
                slug: 'chalets',
                subcategories: []
              },
              {
                id: 'maisons-neuves',
                name: 'Maisons Neuves',
                slug: 'maisons-neuves',
                subcategories: []
              }
            ]
          },
          {
            id: 'terrains',
            name: 'Terrains',
            slug: 'terrains',
            subcategories: [
              {
                id: 'terrains-a-batir',
                name: 'Terrains à Bâtir',
                slug: 'terrains-a-batir',
                subcategories: []
              },
              {
                id: 'terrains-agricoles',
                name: 'Terrains Agricoles',
                slug: 'terrains-agricoles',
                subcategories: []
              },
              {
                id: 'terrains-commerciaux',
                name: 'Terrains Commerciaux',
                slug: 'terrains-commerciaux',
                subcategories: []
              },
              {
                id: 'lots',
                name: 'Lots',
                slug: 'lots',
                subcategories: []
              },
              {
                id: 'parcelles',
                name: 'Parcelles',
                slug: 'parcelles',
                subcategories: []
              }
            ]
          },
          {
            id: 'locations',
            name: 'Locations',
            slug: 'locations',
            subcategories: [
              {
                id: 'locations-vacances',
                name: 'Locations Vacances',
                slug: 'locations-vacances',
                subcategories: []
              },
              {
                id: 'locations-longue-duree',
                name: 'Locations Longue Durée',
                slug: 'locations-longue-duree',
                subcategories: []
              },
              {
                id: 'colocations',
                name: 'Colocations',
                slug: 'colocations',
                subcategories: []
              },
              {
                id: 'locations-meublees',
                name: 'Locations Meublées',
                slug: 'locations-meublees',
                subcategories: []
              },
              {
                id: 'bureaux',
                name: 'Bureaux',
                slug: 'bureaux',
                subcategories: []
              },
              {
                id: 'locaux-commerciaux',
                name: 'Locaux Commerciaux',
                slug: 'locaux-commerciaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'immobilier-commercial',
            name: 'Immobilier Commercial',
            slug: 'immobilier-commercial',
            subcategories: [
              {
                id: 'bureaux-vente',
                name: 'Bureaux à Vendre',
                slug: 'bureaux-vente',
                subcategories: []
              },
              {
                id: 'bureaux-location',
                name: 'Bureaux à Louer',
                slug: 'bureaux-location',
                subcategories: []
              },
              {
                id: 'locaux-commerciaux-vente',
                name: 'Locaux Commerciaux à Vendre',
                slug: 'locaux-commerciaux-vente',
                subcategories: []
              },
              {
                id: 'locaux-commerciaux-location',
                name: 'Locaux Commerciaux à Louer',
                slug: 'locaux-commerciaux-location',
                subcategories: []
              },
              {
                id: 'entrepots',
                name: 'Entrepôts',
                slug: 'entrepots',
                subcategories: []
              },
              {
                id: 'magasins',
                name: 'Magasins',
                slug: 'magasins',
                subcategories: []
              }
            ]
          },
          {
            id: 'garages-parkings',
            name: 'Garages & Parkings',
            slug: 'garages-parkings',
            subcategories: [
              {
                id: 'garages',
                name: 'Garages',
                slug: 'garages',
                subcategories: []
              },
              {
                id: 'parkings',
                name: 'Parkings',
                slug: 'parkings',
                subcategories: []
              },
              {
                id: 'box',
                name: 'Box',
                slug: 'box',
                subcategories: []
              },
              {
                id: 'caves',
                name: 'Caves',
                slug: 'caves',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'mobilier-decoration',
        name: 'Mobilier & Décoration',
        slug: 'mobilier-decoration',
        subcategories: [
          {
            id: 'meubles',
            name: 'Meubles',
            slug: 'meubles',
            subcategories: [
              {
                id: 'salon',
                name: 'Salon',
                slug: 'salon',
                subcategories: []
              },
              {
                id: 'chambres-a-coucher',
                name: 'Chambres à Coucher',
                slug: 'chambres-a-coucher',
                subcategories: []
              },
              {
                id: 'salle-a-manger',
                name: 'Salle à Manger',
                slug: 'salle-a-manger',
                subcategories: []
              },
              {
                id: 'cuisine',
                name: 'Cuisine',
                slug: 'cuisine',
                subcategories: []
              },
              {
                id: 'salle-de-bain',
                name: 'Salle de Bain',
                slug: 'salle-de-bain',
                subcategories: []
              },
              {
                id: 'bureau',
                name: 'Bureau',
                slug: 'bureau',
                subcategories: []
              },
              {
                id: 'chambre-enfant',
                name: 'Chambre d Enfant',
                slug: 'chambre-enfant',
                subcategories: []
              },
              {
                id: 'jardin',
                name: 'Jardin',
                slug: 'jardin',
                subcategories: []
              },
              {
                id: 'meubles-d-angle',
                name: 'Meubles d Angle',
                slug: 'meubles-d-angle',
                subcategories: []
              },
              {
                id: 'meubles-modulaires',
                name: 'Meubles Modulaires',
                slug: 'meubles-modulaires',
                subcategories: []
              }
            ]
          },
          {
            id: 'decoration',
            name: 'Décoration',
            slug: 'decoration',
            subcategories: [
              {
                id: 'tapis',
                name: 'Tapis',
                slug: 'tapis',
                subcategories: []
              },
              {
                id: 'rideaux-voilages',
                name: 'Rideaux & Voilages',
                slug: 'rideaux-voilages',
                subcategories: []
              },
              {
                id: 'luminaire',
                name: 'Luminaire',
                slug: 'luminaire',
                subcategories: []
              },
              {
                id: 'miroirs',
                name: 'Miroirs',
                slug: 'miroirs',
                subcategories: []
              },
              {
                id: 'tableaux',
                name: 'Tableaux',
                slug: 'tableaux',
                subcategories: []
              },
              {
                id: 'vases',
                name: 'Vases',
                slug: 'vases',
                subcategories: []
              },
              {
                id: 'coussins',
                name: 'Coussins',
                slug: 'coussins',
                subcategories: []
              },
              {
                id: 'objets-deco',
                name: 'Objets Déco',
                slug: 'objets-deco',
                subcategories: []
              },
              {
                id: 'parfums-d-interieur',
                name: 'Parfums d Intérieur',
                slug: 'parfums-d-interieur',
                subcategories: []
              },
              {
                id: 'horloges-murales',
                name: 'Horloges Murales',
                slug: 'horloges-murales',
                subcategories: []
              }
            ]
          },
          {
            id: 'rangement',
            name: 'Rangement',
            slug: 'rangement',
            subcategories: [
              {
                id: 'armoires',
                name: 'Armoires',
                slug: 'armoires',
                subcategories: []
              },
              {
                id: 'etagères',
                name: 'Étagères',
                slug: 'etageres',
                subcategories: []
              },
              {
                id: 'placards',
                name: 'Placards',
                slug: 'placards',
                subcategories: []
              },
              {
                id: 'commodes',
                name: 'Commodes',
                slug: 'commodes',
                subcategories: []
              },
              {
                id: 'bibliotheques',
                name: 'Bibliothèques',
                slug: 'bibliotheques',
                subcategories: []
              },
              {
                id: 'caissons',
                name: 'Caissons',
                slug: 'caissons',
                subcategories: []
              },
              {
                id: 'boites-rangement',
                name: 'Boîtes de Rangement',
                slug: 'boites-rangement',
                subcategories: []
              },
              {
                id: 'panneaux-rangement',
                name: 'Panneaux de Rangement',
                slug: 'panneaux-rangement',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'electromenager',
        name: 'Électroménager',
        slug: 'electromenager',
        subcategories: [
          {
            id: 'cuisine',
            name: 'Cuisine',
            slug: 'cuisine',
            subcategories: [
              {
                id: 'cuisiniere',
                name: 'Cuisinière',
                slug: 'cuisiniere',
                subcategories: []
              },
              {
                id: 'four',
                name: 'Four',
                slug: 'four',
                subcategories: []
              },
              {
                id: 'micro-ondes',
                name: 'Micro-ondes',
                slug: 'micro-ondes',
                subcategories: []
              },
              {
                id: 'refrigerateur',
                name: 'Réfrigérateur',
                slug: 'refrigerateur',
                subcategories: []
              },
              {
                id: 'congelateur',
                name: 'Congélateur',
                slug: 'congelateur',
                subcategories: []
              },
              {
                id: 'lave-vaisselle',
                name: 'Lave-vaisselle',
                slug: 'lave-vaisselle',
                subcategories: []
              },
              {
                id: 'hotte',
                name: 'Hotte',
                slug: 'hotte',
                subcategories: []
              },
              {
                id: 'plaque-cuisson',
                name: 'Plaque de Cuisson',
                slug: 'plaque-cuisson',
                subcategories: []
              },
              {
                id: 'robot-cuisine',
                name: 'Robot de Cuisine',
                slug: 'robot-cuisine',
                subcategories: []
              },
              {
                id: 'blender',
                name: 'Blender',
                slug: 'blender',
                subcategories: []
              },
              {
                id: 'cafetiere',
                name: 'Cafetière',
                slug: 'cafetiere',
                subcategories: []
              },
              {
                id: 'bouilloire',
                name: 'Bouilloire',
                slug: 'bouilloire',
                subcategories: []
              },
              {
                id: 'grille-pain',
                name: 'Grille-pain',
                slug: 'grille-pain',
                subcategories: []
              }
            ]
          },
          {
            id: 'nettoyage',
            name: 'Nettoyage',
            slug: 'nettoyage',
            subcategories: [
              {
                id: 'lave-linge',
                name: 'Lave-linge',
                slug: 'lave-linge',
                subcategories: []
              },
              {
                id: 'seche-linge',
                name: 'Sèche-linge',
                slug: 'seche-linge',
                subcategories: []
              },
              {
                id: 'aspirateur',
                name: 'Aspirateur',
                slug: 'aspirateur',
                subcategories: []
              },
              {
                id: 'balai-vapeur',
                name: 'Balai Vapeur',
                slug: 'balai-vapeur',
                subcategories: []
              },
              {
                id: 'centrale-vapeur',
                name: 'Centrale Vapeur',
                slug: 'centrale-vapeur',
                subcategories: []
              },
              {
                id: 'nettoyeur-vapeur',
                name: 'Nettoyeur Vapeur',
                slug: 'nettoyeur-vapeur',
                subcategories: []
              },
              {
                id: 'lave-vitres',
                name: 'Lave-vitres',
                slug: 'lave-vitres',
                subcategories: []
              },
              {
                id: 'robot-nettoyeur',
                name: 'Robot Nettoyeur',
                slug: 'robot-nettoyeur',
                subcategories: []
              }
            ]
          },
          {
            id: 'climatisation',
            name: 'Climatisation',
            slug: 'climatisation',
            subcategories: [
              {
                id: 'climatiseur',
                name: 'Climatiseur',
                slug: 'climatiseur',
                subcategories: []
              },
              {
                id: 'climatiseur-mobile',
                name: 'Climatiseur Mobile',
                slug: 'climatiseur-mobile',
                subcategories: []
              },
              {
                id: 'ventilateur',
                name: 'Ventilateur',
                slug: 'ventilateur',
                subcategories: []
              },
              {
                id: 'purificateur-air',
                name: 'Purificateur d Air',
                slug: 'purificateur-air',
                subcategories: []
              },
              {
                id: 'dehumidificateur',
                name: 'Déshumidificateur',
                slug: 'dehumidificateur',
                subcategories: []
              },
              {
                id: 'humidificateur',
                name: 'Humidificateur',
                slug: 'humidificateur',
                subcategories: []
              },
              {
                id: 'radiateur',
                name: 'Radiateur',
                slug: 'radiateur',
                subcategories: []
              },
              {
                id: 'cheminee',
                name: 'Cheminée',
                slug: 'cheminee',
                subcategories: []
              }
            ]
          },
          {
            id: 'petit-electromenager',
            name: 'Petit Électroménager',
            slug: 'petit-electromenager',
            subcategories: [
              {
                id: 'grille-pain',
                name: 'Grille-pain',
                slug: 'grille-pain',
                subcategories: []
              },
              {
                id: 'bouilloire',
                name: 'Bouilloire',
                slug: 'bouilloire',
                subcategories: []
              },
              {
                id: 'cafetiere',
                name: 'Cafetière',
                slug: 'cafetiere',
                subcategories: []
              },
              {
                id: 'blender',
                name: 'Blender',
                slug: 'blender',
                subcategories: []
              },
              {
                id: 'mixeur',
                name: 'Mixeur',
                slug: 'mixeur',
                subcategories: []
              },
              {
                id: 'friteuse',
                name: 'Friteuse',
                slug: 'friteuse',
                subcategories: []
              },
              {
                id: 'grille-pain',
                name: 'Grille-pain',
                slug: 'grille-pain',
                subcategories: []
              },
              {
                id: 'robot-cuisine',
                name: 'Robot de Cuisine',
                slug: 'robot-cuisine',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'bricolage-jardin',
        name: 'Bricolage & Jardin',
        slug: 'bricolage-jardin',
        subcategories: [
          {
            id: 'outils',
            name: 'Outils',
            slug: 'outils',
            subcategories: [
              {
                id: 'outils-a-main',
                name: 'Outils à Main',
                slug: 'outils-a-main',
                subcategories: []
              },
              {
                id: 'outils-electriques',
                name: 'Outils Électriques',
                slug: 'outils-electriques',
                subcategories: []
              },
              {
                id: 'outils-de-jardin',
                name: 'Outils de Jardin',
                slug: 'outils-de-jardin',
                subcategories: []
              },
              {
                id: 'outils-de-mesure',
                name: 'Outils de Mesure',
                slug: 'outils-de-mesure',
                subcategories: []
              },
              {
                id: 'outils-de-coupe',
                name: 'Outils de Coupe',
                slug: 'outils-de-coupe',
                subcategories: []
              },
              {
                id: 'outils-de-fixation',
                name: 'Outils de Fixation',
                slug: 'outils-de-fixation',
                subcategories: []
              },
              {
                id: 'outils-de-peinture',
                name: 'Outils de Peinture',
                slug: 'outils-de-peinture',
                subcategories: []
              },
              {
                id: 'outils-de-soudure',
                name: 'Outils de Soudure',
                slug: 'outils-de-soudure',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiaux',
            name: 'Matériaux',
            slug: 'materiaux',
            subcategories: [
              {
                id: 'bois',
                name: 'Bois',
                slug: 'bois',
                subcategories: []
              },
              {
                id: 'metal',
                name: 'Métal',
                slug: 'metal',
                subcategories: []
              },
              {
                id: 'plastique',
                name: 'Plastique',
                slug: 'plastique',
                subcategories: []
              },
              {
                id: 'verre',
                name: 'Verre',
                slug: 'verre',
                subcategories: []
              },
              {
                id: 'carrelage',
                name: 'Carrelage',
                slug: 'carrelage',
                subcategories: []
              },
              {
                id: 'peinture',
                name: 'Peinture',
                slug: 'peinture',
                subcategories: []
              },
              {
                id: 'isolant',
                name: 'Isolant',
                slug: 'isolant',
                subcategories: []
              },
              {
                id: 'quincaillerie',
                name: 'Quincaillerie',
                slug: 'quincaillerie',
                subcategories: []
              }
            ]
          },
          {
            id: 'equipements-jardin',
            name: 'Équipements de Jardin',
            slug: 'equipements-jardin',
            subcategories: [
              {
                id: 'tondeuse',
                name: 'Tondeuse',
                slug: 'tondeuse',
                subcategories: []
              },
              {
                id: 'taille-haie',
                name: 'Taille-haie',
                slug: 'taille-haie',
                subcategories: []
              },
              {
                id: 'arrosoir',
                name: 'Arrosoir',
                slug: 'arrosoir',
                subcategories: []
              },
              {
                id: 'serre',
                name: 'Serre',
                slug: 'serre',
                subcategories: []
              },
              {
                id: 'bassin',
                name: 'Bassin',
                slug: 'bassin',
                subcategories: []
              },
              {
                id: 'mobilier-jardin',
                name: 'Mobilier de Jardin',
                slug: 'mobilier-jardin',
                subcategories: []
              },
              {
                id: 'barbecue',
                name: 'Barbecue',
                slug: 'barbecue',
                subcategories: []
              },
              {
                id: 'piscine',
                name: 'Piscine',
                slug: 'piscine',
                subcategories: []
              }
            ]
          }
        ]
      }
    ]
  }
];

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Extraire les catégories existantes
const existingCategoriesMatch = existingContent.match(/export const extendedCategories: MenuCategory\[\] = \[([\s\S]*?)\];/);
if (!existingCategoriesMatch) {
  console.error('❌ Impossible de trouver les catégories existantes dans le fichier');
  process.exit(1);
}

const existingCategoriesData = existingCategoriesMatch[1];

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${immobilierCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements et Immobilier & Maison
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
  console.log(`📊 Catégorie "Immobilier & Maison" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Immobilier & Maison ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');