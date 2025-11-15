import { MenuCategory } from './categoryTypes';

// Interface pour les sous-catégories simplifiées utilisées dans les formulaires
export interface SimpleSubCategory {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
}

// Interface pour les sous-sous-catégories simplifiées
export interface SimpleSubSubCategory {
  id: string;
  name: string;
  slug: string;
  subcategoryId: string;
  categoryId: string;
}

// Fonction pour extraire toutes les sous-catégories du menu
export const extractAllSubcategories = (categories: MenuCategory[]): SimpleSubCategory[] => {
  const subcategories: SimpleSubCategory[] = [];
  
  categories.forEach(category => {
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach(sub => {
        subcategories.push({
          id: sub.id,
          name: sub.name,
          slug: sub.slug,
          categoryId: category.id
        });
      });
    }
  });
  
  return subcategories;
};

// Fonction pour obtenir les sous-catégories d'une catégorie spécifique
export const getSubcategoriesByCategoryId = (categoryId: string, categories: MenuCategory[]): SimpleSubCategory[] => {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category || !category.subcategories) return [];
  
  return category.subcategories.map(sub => ({
    id: sub.id,
    name: sub.name,
    slug: sub.slug,
    categoryId: category.id
  }));
};

// Fonction pour extraire toutes les sous-sous-catégories
export const extractAllSubSubcategories = (categories: MenuCategory[]): SimpleSubSubCategory[] => {
  const subSubcategories: SimpleSubSubCategory[] = [];
  
  categories.forEach(category => {
    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories.forEach(sub => {
        if (sub.subcategories && sub.subcategories.length > 0) {
          sub.subcategories.forEach(subSub => {
            subSubcategories.push({
              id: subSub.id,
              name: subSub.name,
              slug: subSub.slug,
              subcategoryId: sub.id,
              categoryId: category.id
            });
          });
        }
      });
    }
  });
  
  return subSubcategories;
};

// Fonction pour obtenir les sous-sous-catégories d'une sous-catégorie spécifique
export const getSubSubcategoriesBySubcategoryId = (
  subcategoryId: string, 
  categories: MenuCategory[]
): SimpleSubSubCategory[] => {
  let result: SimpleSubSubCategory[] = [];
  
  categories.forEach(category => {
    if (category.subcategories && category.subcategories.length > 0) {
      const sub = category.subcategories.find(s => s.id === subcategoryId);
      if (sub && sub.subcategories && sub.subcategories.length > 0) {
        result = sub.subcategories.map(subSub => ({
          id: subSub.id,
          name: subSub.name,
          slug: subSub.slug,
          subcategoryId: sub.id,
          categoryId: category.id
        }));
      }
    }
  });
  
  return result;
};