import { Category, CategoryModule } from './types';
import { getCategoryIcon } from './icons';
import { CategoryUtils } from './utils';

// Modules thématiques optimisés
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

// Agrégation des modules optimisés
const categoryModules: CategoryModule[] = [
  technologyModule,
  appliancesModule,
  // Ajouter les autres modules progressivement
];

// Catégories étendues avec métadonnées enrichies
export const optimizedCategories: Category[] = categoryModules.flatMap(module => 
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
export const flattenCategories = () => CategoryUtils.flattenCategories(optimizedCategories);
export const findCategory = (id: string) => CategoryUtils.findCategoryById(optimizedCategories, id);
export const searchCategories = (options: any) => CategoryUtils.searchCategories(optimizedCategories, options);
export const getBreadcrumbPath = (id: string) => CategoryUtils.getBreadcrumbPath(optimizedCategories, id);
export const validateCategories = () => CategoryUtils.validateCategoryTree(optimizedCategories);

export default optimizedCategories;