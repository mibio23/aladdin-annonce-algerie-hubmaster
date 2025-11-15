import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Informatique & Électronique...');

// Structure détaillée des catégories
const detailedElectronicsCategories = [
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

// Générer le contenu TypeScript
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = [
${detailedElectronicsCategories.map(cat => `  {
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
  console.log(`📊 ${detailedElectronicsCategories.length} catégories principales ajoutées`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Informatique & Électronique ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');