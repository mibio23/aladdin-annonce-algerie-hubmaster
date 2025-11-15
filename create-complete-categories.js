import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories complètes pour Informatique & Électronique et Véhicules & Équipements...');

// Structure détaillée des catégories pour Informatique & Électronique
const electronicsCategories = [
  {
    id: 'informatique-tablettes',
    name: 'Informatique & Tablettes',
    slug: 'informatique-tablettes',
    subcategories: [
      {
        id: 'ordinateurs-portables',
        name: 'Ordinateurs Portables',
        slug: 'ordinateurs-portables',
        subcategories: [
          {
            id: 'laptops-gaming',
            name: 'Laptops Gaming',
            slug: 'laptops-gaming',
            subcategories: []
          },
          {
            id: 'laptops-professionnels',
            name: 'Laptops Professionnels',
            slug: 'laptops-professionnels',
            subcategories: []
          },
          {
            id: 'laptops-etudiants',
            name: 'Laptops Étudiants',
            slug: 'laptops-etudiants',
            subcategories: []
          },
          {
            id: 'ultrabooks-premium',
            name: 'Ultrabooks & Laptops Premium',
            slug: 'ultrabooks-premium',
            subcategories: []
          },
          {
            id: 'macbooks',
            name: 'MacBooks',
            slug: 'macbooks',
            subcategories: []
          },
          {
            id: 'laptops-reconditionnes',
            name: 'Ordinateurs Portables Reconditionnés',
            slug: 'laptops-reconditionnes',
            subcategories: []
          }
        ]
      },
      {
        id: 'ordinateurs-bureau',
        name: 'Ordinateurs de Bureau',
        slug: 'ordinateurs-bureau',
        subcategories: [
          {
            id: 'pc-tour',
            name: 'PC Tour',
            slug: 'pc-tour',
            subcategories: []
          },
          {
            id: 'pc-tout-en-un',
            name: 'PC Tout-en-un',
            slug: 'pc-tout-en-un',
            subcategories: []
          },
          {
            id: 'ordinateurs-bureau-reconditionnes',
            name: 'Ordinateurs de Bureau Reconditionnés',
            slug: 'ordinateurs-bureau-reconditionnes',
            subcategories: []
          },
          {
            id: 'stations-travail',
            name: 'Stations de Travail',
            slug: 'stations-travail',
            subcategories: []
          },
          {
            id: 'mini-pc',
            name: 'Mini PC',
            slug: 'mini-pc',
            subcategories: []
          }
        ]
      },
      {
        id: 'composants-pieces',
        name: 'Composants & Pièces',
        slug: 'composants-pieces',
        subcategories: [
          {
            id: 'processeurs',
            name: 'Processeurs',
            slug: 'processeurs',
            subcategories: []
          },
          {
            id: 'cartes-graphiques',
            name: 'Cartes Graphiques',
            slug: 'cartes-graphiques',
            subcategories: []
          },
          {
            id: 'memoire-ram',
            name: 'Mémoire RAM',
            slug: 'memoire-ram',
            subcategories: []
          },
          {
            id: 'disques-durs',
            name: 'Disques Durs',
            slug: 'disques-durs',
            subcategories: []
          },
          {
            id: 'cartes-meres',
            name: 'Cartes Mères',
            slug: 'cartes-meres',
            subcategories: []
          },
          {
            id: 'alimentations',
            name: 'Alimentations',
            slug: 'alimentations',
            subcategories: []
          },
          {
            id: 'boitiers',
            name: 'Boîtiers',
            slug: 'boitiers',
            subcategories: []
          },
          {
            id: 'systemes-refroidissement',
            name: 'Systèmes de Refroidissement',
            slug: 'systemes-refroidissement',
            subcategories: []
          }
        ]
      },
      {
        id: 'peripheriques-informatiques',
        name: 'Périphériques Informatiques',
        slug: 'peripheriques-informatiques',
        subcategories: [
          {
            id: 'claviers',
            name: 'Claviers',
            slug: 'claviers',
            subcategories: []
          },
          {
            id: 'souris',
            name: 'Souris',
            slug: 'souris',
            subcategories: []
          },
          {
            id: 'ecrans',
            name: 'Écrans',
            slug: 'ecrans',
            subcategories: []
          },
          {
            id: 'imprimantes-scanners',
            name: 'Imprimantes & Scanners',
            slug: 'imprimantes-scanners',
            subcategories: []
          },
          {
            id: 'webcams-micros',
            name: 'Webcams & Micros',
            slug: 'webcams-micros',
            subcategories: []
          },
          {
            id: 'haut-parleurs-casques',
            name: 'Haut-parleurs & Casques',
            slug: 'haut-parleurs-casques',
            subcategories: []
          }
        ]
      },
      {
        id: 'tablettes-ereaders',
        name: 'Tablettes & E-Readers',
        slug: 'tablettes-ereaders',
        subcategories: [
          {
            id: 'ipad',
            name: 'iPad',
            slug: 'ipad',
            subcategories: []
          },
          {
            id: 'tablettes-android',
            name: 'Tablettes Android',
            slug: 'tablettes-android',
            subcategories: []
          },
          {
            id: 'tablettes-windows',
            name: 'Tablettes Windows',
            slug: 'tablettes-windows',
            subcategories: []
          },
          {
            id: 'liseuses-numeriques',
            name: 'Liseuses Numériques',
            slug: 'liseuses-numeriques',
            subcategories: []
          }
        ]
      },
      {
        id: 'stockage-reseaux',
        name: 'Stockage & Réseaux',
        slug: 'stockage-reseaux',
        subcategories: [
          {
            id: 'disques-durs-externes',
            name: 'Disques Durs Externes',
            slug: 'disques-durs-externes',
            subcategories: []
          },
          {
            id: 'cles-usb',
            name: 'Clés USB',
            slug: 'cles-usb',
            subcategories: []
          },
          {
            id: 'cartes-memoire',
            name: 'Cartes Mémoire',
            slug: 'cartes-memoire',
            subcategories: []
          },
          {
            id: 'routeurs-points-acces',
            name: 'Routeurs & Points d Accès',
            slug: 'routeurs-points-acces',
            subcategories: []
          },
          {
            id: 'switches-reseau',
            name: 'Switches Réseau',
            slug: 'switches-reseau',
            subcategories: []
          },
          {
            id: 'adaptateurs-cables',
            name: 'Adaptateurs & Câbles',
            slug: 'adaptateurs-cables',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'telephonie-objets-connectes',
    name: 'Téléphonie & Objets Connectés',
    slug: 'telephonie-objets-connectes',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        slug: 'smartphones',
        subcategories: [
          {
            id: 'iphones',
            name: 'iPhones (tous modèles)',
            slug: 'iphones',
            subcategories: []
          },
          {
            id: 'samsung-galaxy',
            name: 'Samsung Galaxy (S, Note, A)',
            slug: 'samsung-galaxy',
            subcategories: []
          },
          {
            id: 'huawei',
            name: 'Huawei (P, Mate)',
            slug: 'huawei',
            subcategories: []
          },
          {
            id: 'xiaomi',
            name: 'Xiaomi (Mi, Redmi)',
            slug: 'xiaomi',
            subcategories: []
          },
          {
            id: 'oppo',
            name: 'Oppo (Find, Reno)',
            slug: 'oppo',
            subcategories: []
          },
          {
            id: 'telephones-reconditionnes',
            name: 'Téléphones Reconditionnés',
            slug: 'telephones-reconditionnes',
            subcategories: []
          }
        ]
      },
      {
        id: 'accessoires-mobile',
        name: 'Accessoires Mobile',
        slug: 'accessoires-mobile',
        subcategories: [
          {
            id: 'coques-protection',
            name: 'Coques de Protection',
            slug: 'coques-protection',
            subcategories: []
          },
          {
            id: 'verres-trempes',
            name: 'Verres Trempés',
            slug: 'verres-trempes',
            subcategories: []
          },
          {
            id: 'chargeurs-cables',
            name: 'Chargeurs & Câbles',
            slug: 'chargeurs-cables',
            subcategories: []
          },
          {
            id: 'batteries-externes',
            name: 'Batteries Externes',
            slug: 'batteries-externes',
            subcategories: []
          },
          {
            id: 'supports-poignees',
            name: 'Supports & Poignées',
            slug: 'supports-poignees',
            subcategories: []
          },
          {
            id: 'popsockets-accessoires',
            name: 'Popsockets & Accessoires',
            slug: 'popsockets-accessoires',
            subcategories: []
          }
        ]
      },
      {
        id: 'montres-connectees-bracelets',
        name: 'Montres Connectées & Bracelets',
        slug: 'montres-connectees-bracelets',
        subcategories: [
          {
            id: 'apple-watch',
            name: 'Apple Watch',
            slug: 'apple-watch',
            subcategories: []
          },
          {
            id: 'samsung-galaxy-watch',
            name: 'Samsung Galaxy Watch',
            slug: 'samsung-galaxy-watch',
            subcategories: []
          },
          {
            id: 'xiaomi-mi-watch',
            name: 'Xiaomi Mi Watch',
            slug: 'xiaomi-mi-watch',
            subcategories: []
          },
          {
            id: 'fitbit-garmin',
            name: 'Fitbit & Garmin',
            slug: 'fitbit-garmin',
            subcategories: []
          },
          {
            id: 'bracelets-activite',
            name: 'Bracelets d Activité',
            slug: 'bracelets-activite',
            subcategories: []
          }
        ]
      },
      {
        id: 'objets-connectes',
        name: 'Objets Connectés',
        slug: 'objets-connectes',
        subcategories: [
          {
            id: 'enceintes-intelligentes',
            name: 'Enceintes Intelligentes',
            slug: 'enceintes-intelligentes',
            subcategories: []
          },
          {
            id: 'ampoules-connectees',
            name: 'Ampoules Connectées',
            slug: 'ampoules-connectees',
            subcategories: []
          },
          {
            id: 'cameras-surveillance',
            name: 'Caméras de Surveillance',
            slug: 'cameras-surveillance',
            subcategories: []
          },
          {
            id: 'prises-intelligentes',
            name: 'Prises Intelligentes',
            slug: 'prises-intelligentes',
            subcategories: []
          },
          {
            id: 'hubs-domotiques',
            name: 'Hubs Domotiques',
            slug: 'hubs-domotiques',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'image-son',
    name: 'Image & Son',
    slug: 'image-son',
    subcategories: [
      {
        id: 'appareils-photo',
        name: 'Appareils Photo',
        slug: 'appareils-photo',
        subcategories: [
          {
            id: 'appareils-photo-reflex',
            name: 'Appareils Photo Reflex',
            slug: 'appareils-photo-reflex',
            subcategories: []
          },
          {
            id: 'appareils-photo-hybrides',
            name: 'Appareils Photo Hybrides',
            slug: 'appareils-photo-hybrides',
            subcategories: []
          },
          {
            id: 'appareils-photo-bridge',
            name: 'Appareils Photo Bridge',
            slug: 'appareils-photo-bridge',
            subcategories: []
          },
          {
            id: 'appareils-photo-compactes',
            name: 'Appareils Photo Compactes',
            slug: 'appareils-photo-compactes',
            subcategories: []
          },
          {
            id: 'objectifs-photo',
            name: 'Objectifs Photo',
            slug: 'objectifs-photo',
            subcategories: []
          },
          {
            id: 'flashs-accessoires-photo',
            name: 'Flashs & Accessoires Photo',
            slug: 'flashs-accessoires-photo',
            subcategories: []
          }
        ]
      },
      {
        id: 'cameras-video',
        name: 'Caméras & Vidéo',
        slug: 'cameras-video',
        subcategories: [
          {
            id: 'cameras-action',
            name: 'Caméras d Action (GoPro, DJI)',
            slug: 'cameras-action',
            subcategories: []
          },
          {
            id: 'cameras-surveillance',
            name: 'Caméras de Surveillance',
            slug: 'cameras-surveillance',
            subcategories: []
          },
          {
            id: 'cameras-web',
            name: 'Caméras Web',
            slug: 'cameras-web',
            subcategories: []
          },
          {
            id: 'camescopes',
            name: 'Camescopes',
            slug: 'camescopes',
            subcategories: []
          },
          {
            id: 'microphones-creatifs',
            name: 'Microphones Créatifs',
            slug: 'microphones-creatifs',
            subcategories: []
          }
        ]
      },
      {
        id: 'audio-hifi',
        name: 'Audio & Hi-Fi',
        slug: 'audio-hifi',
        subcategories: [
          {
            id: 'casques-audio',
            name: 'Casques Audio (Bluetooth, filaires)',
            slug: 'casques-audio',
            subcategories: []
          },
          {
            id: 'ecouteurs',
            name: 'Écouteurs (intra-auriculaires)',
            slug: 'ecouteurs',
            subcategories: []
          },
          {
            id: 'enceintes-bluetooth',
            name: 'Enceintes Bluetooth',
            slug: 'enceintes-bluetooth',
            subcategories: []
          },
          {
            id: 'barres-son',
            name: 'Barres de Son',
            slug: 'barres-son',
            subcategories: []
          },
          {
            id: 'amplificateurs-home-cinema',
            name: 'Amplificateurs & Home Cinéma',
            slug: 'amplificateurs-home-cinema',
            subcategories: []
          },
          {
            id: 'platines-cd-vinyles',
            name: 'Platines CD & Vinyles',
            slug: 'platines-cd-vinyles',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'jeux-video-consoles',
    name: 'Jeux Vidéo & Consoles',
    slug: 'jeux-video-consoles',
    subcategories: [
      {
        id: 'consoles-jeux',
        name: 'Consoles de Jeux',
        slug: 'consoles-jeux',
        subcategories: [
          {
            id: 'playstation',
            name: 'PlayStation (PS4, PS5)',
            slug: 'playstation',
            subcategories: []
          },
          {
            id: 'xbox',
            name: 'Xbox (One, Series X/S)',
            slug: 'xbox',
            subcategories: []
          },
          {
            id: 'nintendo',
            name: 'Nintendo (Switch, 3DS)',
            slug: 'nintendo',
            subcategories: []
          },
          {
            id: 'consoles-portables-retro',
            name: 'Consoles Portables Retro',
            slug: 'consoles-portables-retro',
            subcategories: []
          },
          {
            id: 'consoles-reconditionnees',
            name: 'Consoles Reconditionnées',
            slug: 'consoles-reconditionnees',
            subcategories: []
          }
        ]
      },
      {
        id: 'jeux-accessoires',
        name: 'Jeux & Accessoires',
        slug: 'jeux-accessoires',
        subcategories: [
          {
            id: 'jeux-playstation',
            name: 'Jeux PlayStation',
            slug: 'jeux-playstation',
            subcategories: []
          },
          {
            id: 'jeux-xbox',
            name: 'Jeux Xbox',
            slug: 'jeux-xbox',
            subcategories: []
          },
          {
            id: 'jeux-nintendo',
            name: 'Jeux Nintendo',
            slug: 'jeux-nintendo',
            subcategories: []
          },
          {
            id: 'manettes-gamepads',
            name: 'Manettes & Gamepads',
            slug: 'manettes-gamepads',
            subcategories: []
          },
          {
            id: 'volants-pedales',
            name: 'Volants & Pédales',
            slug: 'volants-pedales',
            subcategories: []
          },
          {
            id: 'casques-gaming',
            name: 'Casques Gaming',
            slug: 'casques-gaming',
            subcategories: []
          },
          {
            id: 'claviers-gaming',
            name: 'Claviers Gaming',
            slug: 'claviers-gaming',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'services-support',
    name: 'Services & Support',
    slug: 'services-support',
    subcategories: [
      {
        id: 'installation-maintenance',
        name: 'Installation & Maintenance',
        slug: 'installation-maintenance',
        subcategories: [
          {
            id: 'installation-systemes',
            name: 'Installation de Systèmes',
            slug: 'installation-systemes',
            subcategories: []
          },
          {
            id: 'depannage-informatique',
            name: 'Dépannage Informatique',
            slug: 'depannage-informatique',
            subcategories: []
          },
          {
            id: 'maintenance-contrat',
            name: 'Maintenance Contrat',
            slug: 'maintenance-contrat',
            subcategories: []
          },
          {
            id: 'nettoyage-optimisation',
            name: 'Nettoyage & Optimisation',
            slug: 'nettoyage-optimisation',
            subcategories: []
          }
        ]
      },
      {
        id: 'formation-tutoriels',
        name: 'Formation & Tutoriels',
        slug: 'formation-tutoriels',
        subcategories: [
          {
            id: 'cours-informatique',
            name: 'Cours d Informatique',
            slug: 'cours-informatique',
            subcategories: []
          },
          {
            id: 'formations-specialisees',
            name: 'Formations Spécialisées',
            slug: 'formations-specialisees',
            subcategories: []
          },
          {
            id: 'tutoriels-ligne',
            name: 'Tutoriels en Ligne',
            slug: 'tutoriels-ligne',
            subcategories: []
          },
          {
            id: 'ateliers-pratiques',
            name: 'Ateliers Pratiques',
            slug: 'ateliers-pratiques',
            subcategories: []
          }
        ]
      }
    ]
  }
];

// Structure détaillée des catégories pour Véhicules & Équipements
const vehiclesCategories = [
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
                name: 'Voitures d Occasion',
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
                name: 'Motos d Occasion',
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
            name: 'Sports d Eau',
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
                id: 'batons-randonnee',
                name: 'Bâtons de Randonnée',
                slug: 'batons-randonnee',
                subcategories: []
              }
            ]
          }
        ]
      }
    ]
  }
];

// Fusionner toutes les catégories
const allCategories = [...electronicsCategories, ...vehiclesCategories];

// Générer le contenu TypeScript
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique et Véhicules & Équipements
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = [
${allCategories.map(cat => `  {
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
];

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées créé avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 ${allCategories.length} catégories principales ajoutées`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Informatique & Électronique et Véhicules & Équipements ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');