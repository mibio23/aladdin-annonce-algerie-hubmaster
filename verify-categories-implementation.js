import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Vérification de l\'implémentation des catégories détaillées...');

// Lire le fichier
let content;
try {
  content = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier:', error.message);
  process.exit(1);
}

// Structure attendue des catégories
const expectedCategories = [
  {
    id: 'informatique-tablettes',
    name: 'Informatique & Tablettes',
    subcategories: [
      {
        id: 'ordinateurs-portables',
        name: 'Ordinateurs Portables',
        subcategories: [
          'laptops-gaming',
          'laptops-professionnels',
          'laptops-etudiants',
          'ultrabooks-premium',
          'macbooks',
          'laptops-reconditionnes'
        ]
      },
      {
        id: 'ordinateurs-bureau',
        name: 'Ordinateurs de Bureau',
        subcategories: [
          'pc-tour',
          'pc-tout-en-un',
          'ordinateurs-bureau-reconditionnes',
          'stations-travail',
          'mini-pc'
        ]
      },
      {
        id: 'composants-pieces',
        name: 'Composants & Pièces',
        subcategories: [
          'processeurs',
          'cartes-graphiques',
          'memoire-ram',
          'disques-durs',
          'cartes-meres',
          'alimentations',
          'boitiers',
          'systemes-refroidissement'
        ]
      },
      {
        id: 'peripheriques-informatiques',
        name: 'Périphériques Informatiques',
        subcategories: [
          'claviers',
          'souris',
          'ecrans',
          'imprimantes-scanners',
          'webcams-micros',
          'haut-parleurs-casques'
        ]
      },
      {
        id: 'tablettes-ereaders',
        name: 'Tablettes & E-Readers',
        subcategories: [
          'ipad',
          'tablettes-android',
          'tablettes-windows',
          'liseuses-numeriques'
        ]
      },
      {
        id: 'stockage-reseaux',
        name: 'Stockage & Réseaux',
        subcategories: [
          'disques-durs-externes',
          'cles-usb',
          'cartes-memoire',
          'routeurs-points-acces',
          'switches-reseau',
          'adaptateurs-cables'
        ]
      }
    ]
  },
  {
    id: 'telephonie-objets-connectes',
    name: 'Téléphonie & Objets Connectés',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        subcategories: [
          'iphones',
          'samsung-galaxy',
          'huawei',
          'xiaomi',
          'oppo',
          'telephones-reconditionnes'
        ]
      },
      {
        id: 'accessoires-mobile',
        name: 'Accessoires Mobile',
        subcategories: [
          'coques-protection',
          'verres-trempes',
          'chargeurs-cables',
          'batteries-externes',
          'supports-poignees',
          'popsockets-accessoires'
        ]
      },
      {
        id: 'montres-connectees-bracelets',
        name: 'Montres Connectées & Bracelets',
        subcategories: [
          'apple-watch',
          'samsung-galaxy-watch',
          'xiaomi-mi-watch',
          'fitbit-garmin',
          'bracelets-activite'
        ]
      },
      {
        id: 'objets-connectes',
        name: 'Objets Connectés',
        subcategories: [
          'enceintes-intelligentes',
          'ampoules-connectees',
          'cameras-surveillance',
          'prises-intelligentes',
          'hubs-domotiques'
        ]
      }
    ]
  },
  {
    id: 'image-son',
    name: 'Image & Son',
    subcategories: [
      {
        id: 'appareils-photo',
        name: 'Appareils Photo',
        subcategories: [
          'appareils-photo-reflex',
          'appareils-photo-hybrides',
          'appareils-photo-bridge',
          'appareils-photo-compactes',
          'objectifs-photo',
          'flashs-accessoires-photo'
        ]
      },
      {
        id: 'cameras-video',
        name: 'Caméras & Vidéo',
        subcategories: [
          'cameras-action',
          'cameras-surveillance',
          'cameras-web',
          'camescopes',
          'microphones-creatifs'
        ]
      },
      {
        id: 'audio-hifi',
        name: 'Audio & Hi-Fi',
        subcategories: [
          'casques-audio',
          'ecouteurs',
          'enceintes-bluetooth',
          'barres-son',
          'amplificateurs-home-cinema',
          'platines-cd-vinyles'
        ]
      }
    ]
  },
  {
    id: 'jeux-video-consoles',
    name: 'Jeux Vidéo & Consoles',
    subcategories: [
      {
        id: 'consoles-jeux',
        name: 'Consoles de Jeux',
        subcategories: [
          'playstation',
          'xbox',
          'nintendo',
          'consoles-portables-retro',
          'consoles-reconditionnees'
        ]
      },
      {
        id: 'jeux-accessoires',
        name: 'Jeux & Accessoires',
        subcategories: [
          'jeux-playstation',
          'jeux-xbox',
          'jeux-nintendo',
          'manettes-gamepads',
          'volants-pedales',
          'casques-gaming',
          'claviers-gaming'
        ]
      }
    ]
  },
  {
    id: 'services-support',
    name: 'Services & Support',
    subcategories: [
      {
        id: 'installation-maintenance',
        name: 'Installation & Maintenance',
        subcategories: [
          'installation-systemes',
          'depannage-informatique',
          'maintenance-contrat',
          'nettoyage-optimisation'
        ]
      },
      {
        id: 'formation-tutoriels',
        name: 'Formation & Tutoriels',
        subcategories: [
          'cours-informatique',
          'formations-specialisees',
          'tutoriels-ligne',
          'ateliers-pratiques'
        ]
      }
    ]
  }
];

// Fonction pour vérifier l'implémentation
function verifyImplementation() {
  let verificationResults = {
    totalCategories: 0,
    foundCategories: 0,
    totalSubcategories: 0,
    foundSubcategories: 0,
    totalSubSubcategories: 0,
    foundSubSubcategories: 0,
    missingCategories: [],
    missingSubcategories: [],
    missingSubSubcategories: []
  };

  // Vérifier chaque catégorie principale
  for (const expectedCat of expectedCategories) {
    verificationResults.totalCategories++;
    
    // Vérifier si la catégorie existe dans le fichier
    const catRegex = new RegExp(`id:\\s*'${expectedCat.id}'`, 'g');
    if (catRegex.test(content)) {
      verificationResults.foundCategories++;
      
      // Vérifier les sous-catégories
      for (const expectedSub of expectedCat.subcategories) {
        verificationResults.totalSubcategories++;
        
        // Vérifier si la sous-catégorie existe
        const subRegex = new RegExp(`id:\\s*'${expectedSub.id}'`, 'g');
        if (subRegex.test(content)) {
          verificationResults.foundSubcategories++;
          
          // Vérifier les sous-sous-catégories
          for (const expectedSubSub of expectedSub.subcategories) {
            verificationResults.totalSubSubcategories++;
            
            // Vérifier si la sous-sous-catégorie existe
            const subSubRegex = new RegExp(`id:\\s*'${expectedSubSub}'`, 'g');
            if (subSubRegex.test(content)) {
              verificationResults.foundSubSubcategories++;
            } else {
              verificationResults.missingSubSubcategories.push(expectedSubSub);
            }
          }
        } else {
          verificationResults.missingSubcategories.push(expectedSub.id);
        }
      }
    } else {
      verificationResults.missingCategories.push(expectedCat.id);
    }
  }

  return verificationResults;
}

// Exécuter la vérification
const results = verifyImplementation();

// Afficher les résultats
console.log('\n📊 Résultats de la vérification:');
console.log(`✅ Catégories principales trouvées: ${results.foundCategories}/${results.totalCategories}`);
console.log(`✅ Sous-catégories trouvées: ${results.foundSubcategories}/${results.totalSubcategories}`);
console.log(`✅ Sous-sous-catégories trouvées: ${results.foundSubSubcategories}/${results.totalSubSubcategories}`);

if (results.missingCategories.length > 0) {
  console.log('\n❌ Catégories manquantes:');
  results.missingCategories.forEach(cat => console.log(`  - ${cat}`));
}

if (results.missingSubcategories.length > 0) {
  console.log('\n❌ Sous-catégories manquantes:');
  results.missingSubcategories.forEach(sub => console.log(`  - ${sub}`));
}

if (results.missingSubSubcategories.length > 0) {
  console.log('\n❌ Sous-sous-catégories manquantes:');
  results.missingSubSubcategories.forEach(subsub => console.log(`  - ${subsub}`));
}

// Vérification finale
const allCategoriesFound = results.foundCategories === results.totalCategories;
const allSubcategoriesFound = results.foundSubcategories === results.totalSubcategories;
const allSubSubcategoriesFound = results.foundSubSubcategories === results.totalSubSubcategories;

if (allCategoriesFound && allSubcategoriesFound && allSubSubcategoriesFound) {
  console.log('\n🎉 Toutes les catégories ont été implémentées avec succès !');
} else {
  console.log('\n⚠️ Certaines catégories sont manquantes. Veuillez vérifier l\'implémentation.');
}

// Vérification de la syntaxe TypeScript
try {
  console.log('\n🔍 Vérification de la syntaxe TypeScript...');
  const { execSync } = require('child_process');
  execSync(`npx tsc --noEmit --skipLibCheck --esModuleInterop "${categoriesFilePath}"`, { stdio: 'pipe' });
  console.log('✅ La syntaxe TypeScript est valide !');
} catch (error) {
  console.log('❌ Erreurs TypeScript détectées:');
  const errors = error.stderr ? error.stderr.toString() : '';
  const errorLines = errors.split('\n').filter(line => line.trim());
  const topErrors = errorLines.slice(0, 5);
  
  topErrors.forEach(err => {
    console.log(err);
  });
}