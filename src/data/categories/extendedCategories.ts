import { Category, CategoryModule } from './types';
import { getCategoryIcon } from './icons';
import { CategoryUtils } from './utils';

// Modules thématiques (à implémenter)
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
            }
            // ... autres sous-sous-catégories
          ]
        }
        // ... autres sous-catégories
      ]
    }
    // ... autres catégories principales
  ]
};

// Agrégation des modules (à compléter avec tous les modules)
const categoryModules: CategoryModule[] = [
  technologyModule,
  // ... autres modules à implémenter
];

// Catégories étendues avec métadonnées enrichies
export const extendedCategories: Category[] = categoryModules.map(module => ({
  ...module.categories[0], // Prendre la première catégorie comme exemple
  icon: getCategoryIcon(module.categories[0].id),
  metadata: {
    module: module.id,
    lastUpdated: new Date().toISOString(),
    version: '2.0.0'
  }
}));

// Utilitaires exportés
export const categoryUtils = CategoryUtils;
export const flattenCategories = () => CategoryUtils.flattenCategories(extendedCategories);
export const findCategory = (id: string) => CategoryUtils.findCategoryById(extendedCategories, id);
export const searchCategories = (options: any) => CategoryUtils.searchCategories(extendedCategories, options);
export const getBreadcrumbPath = (id: string) => CategoryUtils.getBreadcrumbPath(extendedCategories, id);
export const validateCategories = () => CategoryUtils.validateCategoryTree(extendedCategories);

export default extendedCategories;