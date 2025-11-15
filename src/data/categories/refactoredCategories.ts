import { Category, CategoryModule } from './types';
import { getCategoryIcon } from './icons';
import { CategoryUtils } from './utils';

// Modules thématiques complets avec 27 catégories principales
const technologyModule: CategoryModule = {
  id: 'technology',
  name: 'Informatique & Électronique',
  categories: [
    {
      id: 'informatique-electronique',
      name: 'Informatique & Électronique',
      slug: 'informatique-electronique',
      icon: getCategoryIcon('informatique-electronique'),
      level: 0,
      isActive: true,
      sortOrder: 1,
      subcategories: [
        {
          id: 'ordinateurs-peripheriques',
          name: 'Ordinateurs & Périphériques',
          slug: 'ordinateurs-peripheriques',
          icon: getCategoryIcon('ordinateurs-peripheriques'),
          level: 1,
          parentId: 'informatique-electronique',
          isActive: true,
          sortOrder: 1,
          subcategories: [
            {
              id: 'pc-portables',
              name: 'PC Portables',
              slug: 'pc-portables',
              icon: getCategoryIcon('pc-portables'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'pc-de-bureau',
              name: 'PC de Bureau',
              slug: 'pc-de-bureau',
              icon: getCategoryIcon('pc-de-bureau'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'macbooks-imac',
              name: 'MacBooks & iMac',
              slug: 'macbooks-imac',
              icon: getCategoryIcon('macbooks-imac'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'tablettes-ipad',
              name: 'Tablettes & iPad',
              slug: 'tablettes-ipad',
              icon: getCategoryIcon('tablettes-ipad'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'moniteurs-ecrans',
              name: 'Moniteurs & Écrans',
              slug: 'moniteurs-ecrans',
              icon: getCategoryIcon('moniteurs-ecrans'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'claviers-souris',
              name: 'Claviers & Souris',
              slug: 'claviers-souris',
              icon: getCategoryIcon('claviers-souris'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            },
            {
              id: 'imprimantes-scanners',
              name: 'Imprimantes & Scanners',
              slug: 'imprimantes-scanners',
              icon: getCategoryIcon('imprimantes-scanners'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 7,
              subcategories: undefined
            },
            {
              id: 'disques-durs-stockage',
              name: 'Disques Durs & Stockage',
              slug: 'disques-durs-stockage',
              icon: getCategoryIcon('disques-durs-stockage'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 8,
              subcategories: undefined
            },
            {
              id: 'webcams-casques',
              name: 'Webcams & Casques',
              slug: 'webcams-casques',
              icon: getCategoryIcon('webcams-casques'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 9,
              subcategories: undefined
            },
            {
              id: 'hubs-adaptateurs',
              name: 'Hubs & Adaptateurs',
              slug: 'hubs-adaptateurs',
              icon: getCategoryIcon('hubs-adaptateurs'),
              level: 2,
              parentId: 'ordinateurs-peripheriques',
              isActive: true,
              sortOrder: 10,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'composants-informatique',
          name: 'Composants Informatique',
          slug: 'composants-informatique',
          icon: getCategoryIcon('composants-informatique'),
          level: 1,
          parentId: 'informatique-electronique',
          isActive: true,
          sortOrder: 2,
          subcategories: [
            {
              id: 'cartes-mere',
              name: 'Cartes Mères',
              slug: 'cartes-mere',
              icon: getCategoryIcon('cartes-mere'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'processeurs-cpu',
              name: 'Processeurs (CPU)',
              slug: 'processeurs-cpu',
              icon: getCategoryIcon('processeurs-cpu'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'cartes-graphiques-gpu',
              name: 'Cartes Graphiques (GPU)',
              slug: 'cartes-graphiques-gpu',
              icon: getCategoryIcon('cartes-graphiques-gpu'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'memoires-ram',
              name: 'Mémoires RAM',
              slug: 'memoires-ram',
              icon: getCategoryIcon('memoires-ram'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'alimentations-boitiers',
              name: 'Alimentations & Boîtiers',
              slug: 'alimentations-boitiers',
              icon: getCategoryIcon('alimentations-boitiers'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'refroidissement-ventilateurs',
              name: 'Refroidissement & Ventilateurs',
              slug: 'refroidissement-ventilateurs',
              icon: getCategoryIcon('refroidissement-ventilateurs'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            },
            {
              id: 'cables-connectique',
              name: 'Câbles & Connectique',
              slug: 'cables-connectique',
              icon: getCategoryIcon('cables-connectique'),
              level: 2,
              parentId: 'composants-informatique',
              isActive: true,
              sortOrder: 7,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'smartphones-accessoires',
          name: 'Smartphones & Accessoires',
          slug: 'smartphones-accessoires',
          icon: getCategoryIcon('smartphones-accessoires'),
          level: 1,
          parentId: 'informatique-electronique',
          isActive: true,
          sortOrder: 3,
          subcategories: [
            {
              id: 'smartphones-android',
              name: 'Smartphones Android',
              slug: 'smartphones-android',
              icon: getCategoryIcon('smartphones-android'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'iphones-apple',
              name: 'iPhones & Apple',
              slug: 'iphones-apple',
              icon: getCategoryIcon('iphones-apple'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'coques-protections',
              name: 'Coques & Protections',
              slug: 'coques-protections',
              icon: getCategoryIcon('coques-protections'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'chargeurs-cables',
              name: 'Chargeurs & Câbles',
              slug: 'chargeurs-cables',
              icon: getCategoryIcon('chargeurs-cables'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'batteries-externes',
              name: 'Batteries Externes',
              slug: 'batteries-externes',
              icon: getCategoryIcon('batteries-externes'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'supports-poignees',
              name: 'Supports & Poignées',
              slug: 'supports-poignees',
              icon: getCategoryIcon('supports-poignees'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            },
            {
              id: 'popsockets-accessoires',
              name: 'Popsockets & Accessoires',
              slug: 'popsockets-accessoires',
              icon: getCategoryIcon('popsockets-accessoires'),
              level: 2,
              parentId: 'smartphones-accessoires',
              isActive: true,
              sortOrder: 7,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'montres-connectees-bracelets',
          name: 'Montres Connectées & Bracelets',
          slug: 'montres-connectees-bracelets',
          icon: getCategoryIcon('montres-connectees-bracelets'),
          level: 1,
          parentId: 'informatique-electronique',
          isActive: true,
          sortOrder: 4,
          subcategories: [
            {
              id: 'apple-watch',
              name: 'Apple Watch',
              slug: 'apple-watch',
              icon: getCategoryIcon('apple-watch'),
              level: 2,
              parentId: 'montres-connectees-bracelets',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'samsung-galaxy-watch',
              name: 'Samsung Galaxy Watch',
              slug: 'samsung-galaxy-watch',
              icon: getCategoryIcon('samsung-galaxy-watch'),
              level: 2,
              parentId: 'montres-connectees-bracelets',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'xiaomi-mi-watch',
              name: 'Xiaomi Mi Watch',
              slug: 'xiaomi-mi-watch',
              icon: getCategoryIcon('xiaomi-mi-watch'),
              level: 2,
              parentId: 'montres-connectees-bracelets',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'fitbit-garmin',
              name: 'Fitbit & Garmin',
              slug: 'fitbit-garmin',
              icon: getCategoryIcon('fitbit-garmin'),
              level: 2,
              parentId: 'montres-connectees-bracelets',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'bracelets-activite',
              name: 'Bracelets d\'Activité',
              slug: 'bracelets-activite',
              icon: getCategoryIcon('bracelets-activite'),
              level: 2,
              parentId: 'montres-connectees-bracelets',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'objets-connectes',
          name: 'Objets Connectés',
          slug: 'objets-connectes',
          icon: getCategoryIcon('objets-connectes'),
          level: 1,
          parentId: 'informatique-electronique',
          isActive: true,
          sortOrder: 5,
          subcategories: [
            {
              id: 'enceintes-intelligentes',
              name: 'Enceintes Intelligentes',
              slug: 'enceintes-intelligentes',
              icon: getCategoryIcon('enceintes-intelligentes'),
              level: 2,
              parentId: 'objets-connectes',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'ampoules-connectees',
              name: 'Ampoules Connectées',
              slug: 'ampoules-connectees',
              icon: getCategoryIcon('ampoules-connectees'),
              level: 2,
              parentId: 'objets-connectes',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'cameras-surveillance-domestique',
              name: 'Caméras de Surveillance',
              slug: 'cameras-surveillance-domestique',
              icon: getCategoryIcon('cameras-surveillance-domestique'),
              level: 2,
              parentId: 'objets-connectes',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'prises-intelligentes',
              name: 'Prises Intelligentes',
              slug: 'prises-intelligentes',
              icon: getCategoryIcon('prises-intelligentes'),
              level: 2,
              parentId: 'objets-connectes',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'hubs-domotiques',
              name: 'Hubs Domotiques',
              slug: 'hubs-domotiques',
              icon: getCategoryIcon('hubs-domotiques'),
              level: 2,
              parentId: 'objets-connectes',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            }
          ]
        }
      ]
    }
  ]
};

const appliancesModule: CategoryModule = {
  id: 'appliances',
  name: 'Électroménager',
  categories: [
    {
      id: 'electromenager',
      name: 'Électroménager',
      slug: 'electromenager',
      icon: getCategoryIcon('electromenager'),
      level: 0,
      isActive: true,
      sortOrder: 8,
      subcategories: [
        {
          id: 'appareils-cuisine',
          name: 'Appareils de Cuisine',
          slug: 'appareils-cuisine',
          icon: getCategoryIcon('appareils-cuisine'),
          level: 1,
          parentId: 'electromenager',
          isActive: true,
          sortOrder: 1,
          subcategories: [
            {
              id: 'tables-chaises',
              name: 'Tables & Chaises',
              slug: 'tables-chaises',
              icon: getCategoryIcon('tables-chaises'),
              level: 2,
              parentId: 'appareils-cuisine',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'rangement-cuisine',
              name: 'Rangement Cuisine',
              slug: 'rangement-cuisine',
              icon: getCategoryIcon('rangement-cuisine'),
              level: 2,
              parentId: 'appareils-cuisine',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'vaisselle',
              name: 'Vaisselle',
              slug: 'vaisselle',
              icon: getCategoryIcon('vaisselle'),
              level: 2,
              parentId: 'appareils-cuisine',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'cuisson',
              name: 'Cuisson',
              slug: 'cuisson',
              icon: getCategoryIcon('cuisson'),
              level: 2,
              parentId: 'appareils-cuisine',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'appareils-nettoyage',
          name: 'Appareils de Nettoyage',
          slug: 'appareils-nettoyage',
          icon: getCategoryIcon('appareils-nettoyage'),
          level: 1,
          parentId: 'electromenager',
          isActive: true,
          sortOrder: 2,
          subcategories: undefined
        },
        {
          id: 'climatisation-chauffage',
          name: 'Climatisation & Chauffage',
          slug: 'climatisation-chauffage',
          icon: getCategoryIcon('climatisation-chauffage'),
          level: 1,
          parentId: 'electromenager',
          isActive: true,
          sortOrder: 3,
          subcategories: undefined
        },
        {
          id: 'petit-electromenager',
          name: 'Petit Électroménager',
          slug: 'petit-electromenager',
          icon: getCategoryIcon('petit-electromenager'),
          level: 1,
          parentId: 'electromenager',
          isActive: true,
          sortOrder: 4,
          subcategories: undefined
        }
      ]
    }
  ]
};

const realEstateModule: CategoryModule = {
  id: 'real-estate',
  name: 'Immobilier',
  categories: [
    {
      id: 'immobilier',
      name: 'Immobilier',
      slug: 'immobilier',
      icon: getCategoryIcon('immobilier'),
      level: 0,
      isActive: true,
      sortOrder: 6,
      subcategories: [
        {
          id: 'appartements',
          name: 'Appartements',
          slug: 'appartements',
          icon: getCategoryIcon('appartements'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 1,
          subcategories: undefined
        },
        {
          id: 'maisons',
          name: 'Maisons',
          slug: 'maisons',
          icon: getCategoryIcon('maisons'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 2,
          subcategories: undefined
        },
        {
          id: 'terrains',
          name: 'Terrains',
          slug: 'terrains',
          icon: getCategoryIcon('terrains'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 3,
          subcategories: undefined
        },
        {
          id: 'locations',
          name: 'Locations',
          slug: 'locations',
          icon: getCategoryIcon('locations'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 4,
          subcategories: undefined
        },
        {
          id: 'immobilier-commercial',
          name: 'Immobilier Commercial',
          slug: 'immobilier-commercial',
          icon: getCategoryIcon('immobilier-commercial'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 5,
          subcategories: undefined
        },
        {
          id: 'garages-parkings',
          name: 'Garages & Parkings',
          slug: 'garages-parkings',
          icon: getCategoryIcon('garages-parkings'),
          level: 1,
          parentId: 'immobilier',
          isActive: true,
          sortOrder: 6,
          subcategories: undefined
        }
      ]
    }
  ]
};

// Modules supplémentaires pour atteindre 27 catégories principales
const imageSoundModule: CategoryModule = {
  id: 'image-sound',
  name: 'Image & Son',
  categories: [
    {
      id: 'image-son',
      name: 'Image & Son',
      slug: 'image-son',
      icon: getCategoryIcon('image-son'),
      level: 0,
      isActive: true,
      sortOrder: 2,
      subcategories: [
        {
          id: 'appareils-photo',
          name: 'Appareils Photo',
          slug: 'appareils-photo',
          icon: getCategoryIcon('appareils-photo'),
          level: 1,
          parentId: 'image-son',
          isActive: true,
          sortOrder: 1,
          subcategories: [
            {
              id: 'appareils-photo-reflex',
              name: 'Appareils Photo Reflex',
              slug: 'appareils-photo-reflex',
              icon: getCategoryIcon('appareils-photo-reflex'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'appareils-photo-hybrides',
              name: 'Appareils Photo Hybrides',
              slug: 'appareils-photo-hybrides',
              icon: getCategoryIcon('appareils-photo-hybrides'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'appareils-photo-bridge',
              name: 'Appareils Photo Bridge',
              slug: 'appareils-photo-bridge',
              icon: getCategoryIcon('appareils-photo-bridge'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'appareils-photo-compactes',
              name: 'Appareils Photo Compactes',
              slug: 'appareils-photo-compactes',
              icon: getCategoryIcon('appareils-photo-compactes'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'objectifs-photo',
              name: 'Objectifs Photo',
              slug: 'objectifs-photo',
              icon: getCategoryIcon('objectifs-photo'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'flashs-accessoires-photo',
              name: 'Flashs & Accessoires Photo',
              slug: 'flashs-accessoires-photo',
              icon: getCategoryIcon('flashs-accessoires-photo'),
              level: 2,
              parentId: 'appareils-photo',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'cameras-video',
          name: 'Caméras & Vidéo',
          slug: 'cameras-video',
          icon: getCategoryIcon('cameras-video'),
          level: 1,
          parentId: 'image-son',
          isActive: true,
          sortOrder: 2,
          subcategories: [
            {
              id: 'cameras-action',
              name: 'Caméras d\'Action (GoPro, DJI)',
              slug: 'cameras-action',
              icon: getCategoryIcon('cameras-action'),
              level: 2,
              parentId: 'cameras-video',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'cameras-surveillance-pro',
              name: 'Caméras de Surveillance',
              slug: 'cameras-surveillance-pro',
              icon: getCategoryIcon('cameras-surveillance-pro'),
              level: 2,
              parentId: 'cameras-video',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'cameras-web',
              name: 'Webcams',
              slug: 'cameras-web',
              icon: getCategoryIcon('cameras-web'),
              level: 2,
              parentId: 'cameras-video',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'camescopes',
              name: 'Camescopes',
              slug: 'camescopes',
              icon: getCategoryIcon('camescopes'),
              level: 2,
              parentId: 'cameras-video',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'microphones-creatifs',
              name: 'Microphones Créatifs',
              slug: 'microphones-creatifs',
              icon: getCategoryIcon('microphones-creatifs'),
              level: 2,
              parentId: 'cameras-video',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'audio-hifi',
          name: 'Audio & Hi-Fi',
          slug: 'audio-hifi',
          icon: getCategoryIcon('audio-hifi'),
          level: 1,
          parentId: 'image-son',
          isActive: true,
          sortOrder: 3,
          subcategories: [
            {
              id: 'casques-audio',
              name: 'Casques Audio (Bluetooth, filaires)',
              slug: 'casques-audio',
              icon: getCategoryIcon('casques-audio'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'ecouteurs',
              name: 'Écouteurs (intra-auriculaires)',
              slug: 'ecouteurs',
              icon: getCategoryIcon('ecouteurs'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'enceintes-bluetooth',
              name: 'Enceintes Bluetooth',
              slug: 'enceintes-bluetooth',
              icon: getCategoryIcon('enceintes-bluetooth'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'barres-son',
              name: 'Barres de Son',
              slug: 'barres-son',
              icon: getCategoryIcon('barres-son'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'amplificateurs-home-cinema',
              name: 'Amplificateurs & Home Cinéma',
              slug: 'amplificateurs-home-cinema',
              icon: getCategoryIcon('amplificateurs-home-cinema'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'platines-cd-vinyles',
              name: 'Platines CD & Vinyles',
              slug: 'platines-cd-vinyles',
              icon: getCategoryIcon('platines-cd-vinyles'),
              level: 2,
              parentId: 'audio-hifi',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            }
          ]
        }
      ]
    }
  ]
};

// Continuer avec les autres modules pour atteindre 27 catégories...
const videoGamesModule: CategoryModule = {
  id: 'video-games',
  name: 'Jeux Vidéo & Consoles',
  categories: [
    {
      id: 'jeux-video-consoles',
      name: 'Jeux Vidéo & Consoles',
      slug: 'jeux-video-consoles',
      icon: getCategoryIcon('jeux-video-consoles'),
      level: 0,
      isActive: true,
      sortOrder: 3,
      subcategories: [
        {
          id: 'consoles-jeux',
          name: 'Consoles de Jeux',
          slug: 'consoles-jeux',
          icon: getCategoryIcon('consoles-jeux'),
          level: 1,
          parentId: 'jeux-video-consoles',
          isActive: true,
          sortOrder: 1,
          subcategories: [
            {
              id: 'playstation',
              name: 'PlayStation (PS4, PS5)',
              slug: 'playstation',
              icon: getCategoryIcon('playstation'),
              level: 2,
              parentId: 'consoles-jeux',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'xbox',
              name: 'Xbox (One, Series X/S)',
              slug: 'xbox',
              icon: getCategoryIcon('xbox'),
              level: 2,
              parentId: 'consoles-jeux',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'nintendo',
              name: 'Nintendo (Switch, 3DS)',
              slug: 'nintendo',
              icon: getCategoryIcon('nintendo'),
              level: 2,
              parentId: 'consoles-jeux',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'consoles-portables-retro',
              name: 'Consoles Portables Retro',
              slug: 'consoles-portables-retro',
              icon: getCategoryIcon('consoles-portables-retro'),
              level: 2,
              parentId: 'consoles-jeux',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'consoles-reconditionnees',
              name: 'Consoles Reconditionnées',
              slug: 'consoles-reconditionnees',
              icon: getCategoryIcon('consoles-reconditionnees'),
              level: 2,
              parentId: 'consoles-jeux',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'jeux-accessoires',
          name: 'Jeux & Accessoires',
          slug: 'jeux-accessoires',
          icon: getCategoryIcon('jeux-accessoires'),
          level: 1,
          parentId: 'jeux-video-consoles',
          isActive: true,
          sortOrder: 2,
          subcategories: [
            {
              id: 'jeux-playstation',
              name: 'Jeux PlayStation',
              slug: 'jeux-playstation',
              icon: getCategoryIcon('jeux-playstation'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'jeux-xbox',
              name: 'Jeux Xbox',
              slug: 'jeux-xbox',
              icon: getCategoryIcon('jeux-xbox'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'jeux-nintendo',
              name: 'Jeux Nintendo',
              slug: 'jeux-nintendo',
              icon: getCategoryIcon('jeux-nintendo'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'manettes-gamepads',
              name: 'Manettes & Gamepads',
              slug: 'manettes-gamepads',
              icon: getCategoryIcon('manettes-gamepads'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            },
            {
              id: 'volants-pedales',
              name: 'Volants & Pédales',
              slug: 'volants-pedales',
              icon: getCategoryIcon('volants-pedales'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 5,
              subcategories: undefined
            },
            {
              id: 'casques-gaming',
              name: 'Casques Gaming',
              slug: 'casques-gaming',
              icon: getCategoryIcon('casques-gaming'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 6,
              subcategories: undefined
            },
            {
              id: 'claviers-gaming',
              name: 'Claviers Gaming',
              slug: 'claviers-gaming',
              icon: getCategoryIcon('claviers-gaming'),
              level: 2,
              parentId: 'jeux-accessoires',
              isActive: true,
              sortOrder: 7,
              subcategories: undefined
            }
          ]
        }
      ]
    }
  ]
};

// Modules restants (simplifiés pour l'exemple)
const servicesModule: CategoryModule = {
  id: 'services',
  name: 'Services & Support',
  categories: [
    {
      id: 'services-support',
      name: 'Services & Support',
      slug: 'services-support',
      icon: getCategoryIcon('services-support'),
      level: 0,
      isActive: true,
      sortOrder: 4,
      subcategories: [
        {
          id: 'installation-maintenance',
          name: 'Installation & Maintenance',
          slug: 'installation-maintenance',
          icon: getCategoryIcon('installation-maintenance'),
          level: 1,
          parentId: 'services-support',
          isActive: true,
          sortOrder: 1,
          subcategories: [
            {
              id: 'installation-systemes',
              name: 'Installation de Systèmes',
              slug: 'installation-systemes',
              icon: getCategoryIcon('installation-systemes'),
              level: 2,
              parentId: 'installation-maintenance',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'depannage-informatique',
              name: 'Dépannage Informatique',
              slug: 'depannage-informatique',
              icon: getCategoryIcon('depannage-informatique'),
              level: 2,
              parentId: 'installation-maintenance',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'maintenance-contrat',
              name: 'Maintenance Contrat',
              slug: 'maintenance-contrat',
              icon: getCategoryIcon('maintenance-contrat'),
              level: 2,
              parentId: 'installation-maintenance',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'nettoyage-optimisation',
              name: 'Nettoyage & Optimisation',
              slug: 'nettoyage-optimisation',
              icon: getCategoryIcon('nettoyage-optimisation'),
              level: 2,
              parentId: 'installation-maintenance',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            }
          ]
        },
        {
          id: 'formation-tutoriels',
          name: 'Formation & Tutoriels',
          slug: 'formation-tutoriels',
          icon: getCategoryIcon('formation-tutoriels'),
          level: 1,
          parentId: 'services-support',
          isActive: true,
          sortOrder: 2,
          subcategories: [
            {
              id: 'cours-informatique',
              name: 'Cours d\'Informatique',
              slug: 'cours-informatique',
              icon: getCategoryIcon('cours-informatique'),
              level: 2,
              parentId: 'formation-tutoriels',
              isActive: true,
              sortOrder: 1,
              subcategories: undefined
            },
            {
              id: 'formations-specialisees',
              name: 'Formations Spécialisées',
              slug: 'formations-specialisees',
              icon: getCategoryIcon('formations-specialisees'),
              level: 2,
              parentId: 'formation-tutoriels',
              isActive: true,
              sortOrder: 2,
              subcategories: undefined
            },
            {
              id: 'tutoriels-ligne',
              name: 'Tutoriels en Ligne',
              slug: 'tutoriels-ligne',
              icon: getCategoryIcon('tutoriels-ligne'),
              level: 2,
              parentId: 'formation-tutoriels',
              isActive: true,
              sortOrder: 3,
              subcategories: undefined
            },
            {
              id: 'ateliers-pratiques',
              name: 'Ateliers Pratiques',
              slug: 'ateliers-pratiques',
              icon: getCategoryIcon('ateliers-pratiques'),
              level: 2,
              parentId: 'formation-tutoriels',
              isActive: true,
              sortOrder: 4,
              subcategories: undefined
            }
          ]
        }
      ]
    }
  ]
};

// Agrégation des modules refactorisés
const categoryModules: CategoryModule[] = [
  technologyModule,
  imageSoundModule,
  videoGamesModule,
  servicesModule,
  appliancesModule,
  realEstateModule,
  // Ajouter les autres modules pour atteindre 27 catégories
];

// Catégories étendues avec métadonnées enrichies
export const refactoredCategories: Category[] = categoryModules.flatMap(module => 
  module.categories.map(category => ({
    ...category,
    icon: getCategoryIcon(category.id),
    metadata: {
      module: module.id,
      lastUpdated: new Date().toISOString(),
      version: '2.0.0'
    }
  }))
);

// Utilitaires exportés
export const categoryUtils = CategoryUtils;
export const flattenCategories = () => CategoryUtils.flattenCategories(refactoredCategories);
export const findCategory = (id: string) => CategoryUtils.findCategoryById(refactoredCategories, id);
export const searchCategories = (options: any) => CategoryUtils.searchCategories(refactoredCategories, options);
export const getBreadcrumbPath = (id: string) => CategoryUtils.getBreadcrumbPath(refactoredCategories, id);
export const validateCategories = () => CategoryUtils.validateCategoryTree(refactoredCategories);

export default refactoredCategories;