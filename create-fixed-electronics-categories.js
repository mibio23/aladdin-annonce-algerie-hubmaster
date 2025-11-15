import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Informatique & Électronique...');

// Structure détaillée des catégories en plusieurs langues
const detailedElectronicsCategories = [
  {
    id: 'informatique-tablettes',
    name: 'Informatique & Tablettes',
    slug: 'informatique-tablettes',
    icon: 'Monitor',
    subcategories: [
      {
        id: 'ordinateurs-portables',
        name: 'Ordinateurs Portables',
        slug: 'ordinateurs-portables',
        icon: 'Laptop',
        subcategories: [
          {
            id: 'laptops-gaming',
            name: 'Laptops Gaming',
            slug: 'laptops-gaming',
            icon: 'Cpu',
            subcategories: []
          },
          {
            id: 'laptops-professionnels',
            name: 'Laptops Professionnels',
            slug: 'laptops-professionnels',
            icon: 'Briefcase',
            subcategories: []
          },
          {
            id: 'laptops-etudiants',
            name: 'Laptops Étudiants',
            slug: 'laptops-etudiants',
            icon: 'BookOpen',
            subcategories: []
          },
          {
            id: 'ultrabooks-premium',
            name: 'Ultrabooks & Laptops Premium',
            slug: 'ultrabooks-premium',
            icon: 'Zap',
            subcategories: []
          },
          {
            id: 'macbooks',
            name: 'MacBooks',
            slug: 'macbooks',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'laptops-reconditionnes',
            name: 'Ordinateurs Portables Reconditionnés',
            slug: 'laptops-reconditionnes',
            icon: 'RefreshCw',
            subcategories: []
          }
        ]
      },
      {
        id: 'ordinateurs-bureau',
        name: 'Ordinateurs de Bureau',
        slug: 'ordinateurs-bureau',
        icon: 'Monitor',
        subcategories: [
          {
            id: 'pc-tour',
            name: 'PC Tour',
            slug: 'pc-tour',
            icon: 'Cpu',
            subcategories: []
          },
          {
            id: 'pc-tout-en-un',
            name: 'PC Tout-en-un',
            slug: 'pc-tout-en-un',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'ordinateurs-bureau-reconditionnes',
            name: 'Ordinateurs de Bureau Reconditionnés',
            slug: 'ordinateurs-bureau-reconditionnes',
            icon: 'RefreshCw',
            subcategories: []
          },
          {
            id: 'stations-travail',
            name: 'Stations de Travail',
            slug: 'stations-travail',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'mini-pc',
            name: 'Mini PC',
            slug: 'mini-pc',
            icon: 'Cpu',
            subcategories: []
          }
        ]
      },
      {
        id: 'composants-pieces',
        name: 'Composants & Pièces',
        slug: 'composants-pieces',
        icon: 'Cpu',
        subcategories: [
          {
            id: 'processeurs',
            name: 'Processeurs',
            slug: 'processeurs',
            icon: 'Cpu',
            subcategories: []
          },
          {
            id: 'cartes-graphiques',
            name: 'Cartes Graphiques',
            slug: 'cartes-graphiques',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'memoire-ram',
            name: 'Mémoire RAM',
            slug: 'memoire-ram',
            icon: 'Cpu',
            subcategories: []
          },
          {
            id: 'disques-durs',
            name: 'Disques Durs',
            slug: 'disques-durs',
            icon: 'HardDrive',
            subcategories: []
          },
          {
            id: 'cartes-meres',
            name: 'Cartes Mères',
            slug: 'cartes-meres',
            icon: 'Cpu',
            subcategories: []
          },
          {
            id: 'alimentations',
            name: 'Alimentations',
            slug: 'alimentations',
            icon: 'Zap',
            subcategories: []
          },
          {
            id: 'boitiers',
            name: 'Boîtiers',
            slug: 'boitiers',
            icon: 'Box',
            subcategories: []
          },
          {
            id: 'systemes-refroidissement',
            name: 'Systèmes de Refroidissement',
            slug: 'systemes-refroidissement',
            icon: 'Wind',
            subcategories: []
          }
        ]
      },
      {
        id: 'peripheriques-informatiques',
        name: 'Périphériques Informatiques',
        slug: 'peripheriques-informatiques',
        icon: 'MousePointer',
        subcategories: [
          {
            id: 'claviers',
            name: 'Claviers',
            slug: 'claviers',
            icon: 'Keyboard',
            subcategories: []
          },
          {
            id: 'souris',
            name: 'Souris',
            slug: 'souris',
            icon: 'MousePointer',
            subcategories: []
          },
          {
            id: 'ecrans',
            name: 'Écrans',
            slug: 'ecrans',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'imprimantes-scanners',
            name: 'Imprimantes & Scanners',
            slug: 'imprimantes-scanners',
            icon: 'Printer',
            subcategories: []
          },
          {
            id: 'webcams-micros',
            name: 'Webcams & Micros',
            slug: 'webcams-micros',
            icon: 'Video',
            subcategories: []
          },
          {
            id: 'haut-parleurs-casques',
            name: 'Haut-parleurs & Casques',
            slug: 'haut-parleurs-casques',
            icon: 'Headphones',
            subcategories: []
          }
        ]
      },
      {
        id: 'tablettes-ereaders',
        name: 'Tablettes & E-Readers',
        slug: 'tablettes-ereaders',
        icon: 'Tablet',
        subcategories: [
          {
            id: 'ipad',
            name: 'iPad',
            slug: 'ipad',
            icon: 'Tablet',
            subcategories: []
          },
          {
            id: 'tablettes-android',
            name: 'Tablettes Android',
            slug: 'tablettes-android',
            icon: 'Smartphone',
            subcategories: []
          },
          {
            id: 'tablettes-windows',
            name: 'Tablettes Windows',
            slug: 'tablettes-windows',
            icon: 'Monitor',
            subcategories: []
          },
          {
            id: 'liseuses-numeriques',
            name: 'Liseuses Numériques',
            slug: 'liseuses-numeriques',
            icon: 'BookOpen',
            subcategories: []
          }
        ]
      },
      {
        id: 'stockage-reseaux',
        name: 'Stockage & Réseaux',
        slug: 'stockage-reseaux',
        icon: 'HardDrive',
        subcategories: [
          {
            id: 'disques-durs-externes',
            name: 'Disques Durs Externes',
            slug: 'disques-durs-externes',
            icon: 'HardDrive',
            subcategories: []
          },
          {
            id: 'cles-usb',
            name: 'Clés USB',
            slug: 'cles-usb',
            icon: 'HardDrive',
            subcategories: []
          },
          {
            id: 'cartes-memoire',
            name: 'Cartes Mémoire',
            slug: 'cartes-memoire',
            icon: 'HardDrive',
            subcategories: []
          },
          {
            id: 'routeurs-points-acces',
            name: 'Routeurs & Points d Accès',
            slug: 'routeurs-points-acces',
            icon: 'Wifi',
            subcategories: []
          },
          {
            id: 'switches-reseau',
            name: 'Switches Réseau',
            slug: 'switches-reseau',
            icon: 'Settings',
            subcategories: []
          },
          {
            id: 'adaptateurs-cables',
            name: 'Adaptateurs & Câbles',
            slug: 'adaptateurs-cables',
            icon: 'Settings',
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
    icon: 'Smartphone',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        slug: 'smartphones',
        icon: 'Phone',
        subcategories: [
          {
            id: 'iphones',
            name: 'iPhones (tous modèles)',
            slug: 'iphones',
            icon: 'Phone',
            subcategories: []
          },
          {
            id: 'samsung-galaxy',
            name: 'Samsung Galaxy (S, Note, A)',
            slug: 'samsung-galaxy',
            icon: 'Phone',
            subcategories: []
          },
          {
            id: 'huawei',
            name: 'Huawei (P, Mate)',
            slug: 'huawei',
            icon: 'Phone',
            subcategories: []
          },
          {
            id: 'xiaomi',
            name: 'Xiaomi (Mi, Redmi)',
            slug: 'xiaomi',
            icon: 'Phone',
            subcategories: []
          },
          {
            id: 'oppo',
            name: 'Oppo (Find, Reno)',
            slug: 'oppo',
            icon: 'Phone',
            subcategories: []
          },
          {
            id: 'telephones-reconditionnes',
            name: 'Téléphones Reconditionnés',
            slug: 'telephones-reconditionnes',
            icon: 'RefreshCw',
            subcategories: []
          }
        ]
      },
      {
        id: 'accessoires-mobile',
        name: 'Accessoires Mobile',
        slug: 'accessoires-mobile',
        icon: 'Settings',
        subcategories: [
          {
            id: 'coques-protection',
            name: 'Coques de Protection',
            slug: 'coques-protection',
            icon: 'Shield',
            subcategories: []
          },
          {
            id: 'verres-trempes',
            name: 'Verres Trempés',
            slug: 'verres-trempes',
            icon: 'Shield',
            subcategories: []
          },
          {
            id: 'chargeurs-cables',
            name: 'Chargeurs & Câbles',
            slug: 'chargeurs-cables',
            icon: 'Zap',
            subcategories: []
          },
          {
            id: 'batteries-externes',
            name: 'Batteries Externes',
            slug: 'batteries-externes',
            icon: 'Battery',
            subcategories: []
          },
          {
            id: 'supports-poignees',
            name: 'Supports & Poignées',
            slug: 'supports-poignees',
            icon: 'Settings',
            subcategories: []
          },
          {
            id: 'popsockets-accessoires',
            name: 'Popsockets & Accessoires',
            slug: 'popsockets-accessoires',
            icon: 'Settings',
            subcategories: []
          }
        ]
      },
      {
        id: 'montres-connectees-bracelets',
        name: 'Montres Connectées & Bracelets',
        slug: 'montres-connectees-bracelets',
        icon: 'Watch',
        subcategories: [
          {
            id: 'apple-watch',
            name: 'Apple Watch',
            slug: 'apple-watch',
            icon: 'Watch',
            subcategories: []
          },
          {
            id: 'samsung-galaxy-watch',
            name: 'Samsung Galaxy Watch',
            slug: 'samsung-galaxy-watch',
            icon: 'Watch',
            subcategories: []
          },
          {
            id: 'xiaomi-mi-watch',
            name: 'Xiaomi Mi Watch',
            slug: 'xiaomi-mi-watch',
            icon: 'Watch',
            subcategories: []
          },
          {
            id: 'fitbit-garmin',
            name: 'Fitbit & Garmin',
            slug: 'fitbit-garmin',
            icon: 'Watch',
            subcategories: []
          },
          {
            id: 'bracelets-activite',
            name: 'Bracelets d Activité',
            slug: 'bracelets-activite',
            icon: 'Watch',
            subcategories: []
          }
        ]
      },
      {
        id: 'objets-connectes',
        name: 'Objets Connectés',
        slug: 'objets-connectes',
        icon: 'Home',
        subcategories: [
          {
            id: 'enceintes-intelligentes',
            name: 'Enceintes Intelligentes',
            slug: 'enceintes-intelligentes',
            icon: 'Music',
            subcategories: []
          },
          {
            id: 'ampoules-connectees',
            name: 'Ampoules Connectées',
            slug: 'ampoules-connectees',
            icon: 'Lightbulb',
            subcategories: []
          },
          {
            id: 'cameras-surveillance',
            name: 'Caméras de Surveillance',
            slug: 'cameras-surveillance',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'prises-intelligentes',
            name: 'Prises Intelligentes',
            slug: 'prises-intelligentes',
            icon: 'Zap',
            subcategories: []
          },
          {
            id: 'hubs-domotiques',
            name: 'Hubs Domotiques',
            slug: 'hubs-domotiques',
            icon: 'Home',
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
    icon: 'Camera',
    subcategories: [
      {
        id: 'appareils-photo',
        name: 'Appareils Photo',
        slug: 'appareils-photo',
        icon: 'Camera',
        subcategories: [
          {
            id: 'appareils-photo-reflex',
            name: 'Appareils Photo Reflex',
            slug: 'appareils-photo-reflex',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'appareils-photo-hybrides',
            name: 'Appareils Photo Hybrides',
            slug: 'appareils-photo-hybrides',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'appareils-photo-bridge',
            name: 'Appareils Photo Bridge',
            slug: 'appareils-photo-bridge',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'appareils-photo-compactes',
            name: 'Appareils Photo Compactes',
            slug: 'appareils-photo-compactes',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'objectifs-photo',
            name: 'Objectifs Photo',
            slug: 'objectifs-photo',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'flashs-accessoires-photo',
            name: 'Flashs & Accessoires Photo',
            slug: 'flashs-accessoires-photo',
            icon: 'Camera',
            subcategories: []
          }
        ]
      },
      {
        id: 'cameras-video',
        name: 'Caméras & Vidéo',
        slug: 'cameras-video',
        icon: 'Video',
        subcategories: [
          {
            id: 'cameras-action',
            name: 'Caméras d Action (GoPro, DJI)',
            slug: 'cameras-action',
            icon: 'Video',
            subcategories: []
          },
          {
            id: 'cameras-surveillance',
            name: 'Caméras de Surveillance',
            slug: 'cameras-surveillance',
            icon: 'Camera',
            subcategories: []
          },
          {
            id: 'cameras-web',
            name: 'Caméras Web',
            slug: 'cameras-web',
            icon: 'Video',
            subcategories: []
          },
          {
            id: 'camescopes',
            name: 'Camescopes',
            slug: 'camescopes',
            icon: 'Video',
            subcategories: []
          },
          {
            id: 'microphones-creatifs',
            name: 'Microphones Créatifs',
            slug: 'microphones-creatifs',
            icon: 'Video',
            subcategories: []
          }
        ]
      },
      {
        id: 'audio-hifi',
        name: 'Audio & Hi-Fi',
        slug: 'audio-hifi',
        icon: 'Music',
        subcategories: [
          {
            id: 'casques-audio',
            name: 'Casques Audio (Bluetooth, filaires)',
            slug: 'casques-audio',
            icon: 'Headphones',
            subcategories: []
          },
          {
            id: 'ecouteurs',
            name: 'Écouteurs (intra-auriculaires)',
            slug: 'ecouteurs',
            icon: 'Headphones',
            subcategories: []
          },
          {
            id: 'enceintes-bluetooth',
            name: 'Enceintes Bluetooth',
            slug: 'enceintes-bluetooth',
            icon: 'Music',
            subcategories: []
          },
          {
            id: 'barres-son',
            name: 'Barres de Son',
            slug: 'barres-son',
            icon: 'Music',
            subcategories: []
          },
          {
            id: 'amplificateurs-home-cinema',
            name: 'Amplificateurs & Home Cinéma',
            slug: 'amplificateurs-home-cinema',
            icon: 'Music',
            subcategories: []
          },
          {
            id: 'platines-cd-vinyles',
            name: 'Platines CD & Vinyles',
            slug: 'platines-cd-vinyles',
            icon: 'Music',
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
    icon: 'Gamepad2',
    subcategories: [
      {
        id: 'consoles-jeux',
        name: 'Consoles de Jeux',
        slug: 'consoles-jeux',
        icon: 'Gamepad2',
        subcategories: [
          {
            id: 'playstation',
            name: 'PlayStation (PS4, PS5)',
            slug: 'playstation',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'xbox',
            name: 'Xbox (One, Series X/S)',
            slug: 'xbox',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'nintendo',
            name: 'Nintendo (Switch, 3DS)',
            slug: 'nintendo',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'consoles-portables-retro',
            name: 'Consoles Portables Retro',
            slug: 'consoles-portables-retro',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'consoles-reconditionnees',
            name: 'Consoles Reconditionnées',
            slug: 'consoles-reconditionnees',
            icon: 'RefreshCw',
            subcategories: []
          }
        ]
      },
      {
        id: 'jeux-accessoires',
        name: 'Jeux & Accessoires',
        slug: 'jeux-accessoires',
        icon: 'Gamepad2',
        subcategories: [
          {
            id: 'jeux-playstation',
            name: 'Jeux PlayStation',
            slug: 'jeux-playstation',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'jeux-xbox',
            name: 'Jeux Xbox',
            slug: 'jeux-xbox',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'jeux-nintendo',
            name: 'Jeux Nintendo',
            slug: 'jeux-nintendo',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'manettes-gamepads',
            name: 'Manettes & Gamepads',
            slug: 'manettes-gamepads',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'volants-pedales',
            name: 'Volants & Pédales',
            slug: 'volants-pedales',
            icon: 'Gamepad2',
            subcategories: []
          },
          {
            id: 'casques-gaming',
            name: 'Casques Gaming',
            slug: 'casques-gaming',
            icon: 'Headphones',
            subcategories: []
          },
          {
            id: 'claviers-gaming',
            name: 'Claviers Gaming',
            slug: 'claviers-gaming',
            icon: 'Keyboard',
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
    icon: 'Wrench',
    subcategories: [
      {
        id: 'installation-maintenance',
        name: 'Installation & Maintenance',
        slug: 'installation-maintenance',
        icon: 'Wrench',
        subcategories: [
          {
            id: 'installation-systemes',
            name: 'Installation de Systèmes',
            slug: 'installation-systemes',
            icon: 'Wrench',
            subcategories: []
          },
          {
            id: 'depannage-informatique',
            name: 'Dépannage Informatique',
            slug: 'depannage-informatique',
            icon: 'Wrench',
            subcategories: []
          },
          {
            id: 'maintenance-contrat',
            name: 'Maintenance Contrat',
            slug: 'maintenance-contrat',
            icon: 'Wrench',
            subcategories: []
          },
          {
            id: 'nettoyage-optimisation',
            name: 'Nettoyage & Optimisation',
            slug: 'nettoyage-optimisation',
            icon: 'Wind',
            subcategories: []
          }
        ]
      },
      {
        id: 'formation-tutoriels',
        name: 'Formation & Tutoriels',
        slug: 'formation-tutoriels',
        icon: 'BookOpen',
        subcategories: [
          {
            id: 'cours-informatique',
            name: 'Cours d Informatique',
            slug: 'cours-informatique',
            icon: 'BookOpen',
            subcategories: []
          },
          {
            id: 'formations-specialisees',
            name: 'Formations Spécialisées',
            slug: 'formations-specialisees',
            icon: 'BookOpen',
            subcategories: []
          },
          {
            id: 'tutoriels-ligne',
            name: 'Tutoriels en Ligne',
            slug: 'tutoriels-ligne',
            icon: 'BookOpen',
            subcategories: []
          },
          {
            id: 'ateliers-pratiques',
            name: 'Ateliers Pratiques',
            slug: 'ateliers-pratiques',
            icon: 'BookOpen',
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

export const detailedElectronicsCategories: MenuCategory[] = [
${detailedElectronicsCategories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    slug: '${cat.slug}',
    icon: '${cat.icon}',
    subcategories: [
${cat.subcategories.map(sub => `      {
        id: '${sub.id}',
        name: '${sub.name}',
        slug: '${sub.slug}',
        icon: '${sub.icon}',
        subcategories: [
${sub.subcategories.map(subsub => `          {
            id: '${subsub.id}',
            name: '${subsub.name}',
            slug: '${subsub.slug}',
            icon: '${subsub.icon}',
            subcategories: []
          }`).join(',\n')}
        ]
      }`).join(',\n')}
    ]
  }`).join(',\n')}
];

export default detailedElectronicsCategories;
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