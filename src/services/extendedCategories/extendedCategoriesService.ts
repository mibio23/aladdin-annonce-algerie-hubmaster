// Service des catégories étendues - Aladdin Annonce Algérie Hub
// Intégration des catégories avec sous-catégories et sous-sous-catégories SEO optimisées
// Mis à jour le: 2025-10-26

import { MenuCategory } from '@/data/categoryTypes';
import { createCategoryIcon } from '@/utils/categoryIcons/lucideIcons';

// Conversion des données étendues en format MenuCategory
export const convertExtendedCategories = (): MenuCategory[] => {
  return [];
};

// Hook pour utiliser les catégories étendues
export const useExtendedCategories = () => {
  const extendedCategories: MenuCategory[] = [];
  
  // Fonction pour rechercher dans les catégories étendues
  const searchExtendedCategories = (query: string): MenuCategory[] => {
    const lowerQuery = query.toLowerCase();
    
    return extendedCategories.filter(category => {
      // Recherche dans le nom de la catégorie
      if (category.name.toLowerCase().includes(lowerQuery)) return true;
      
      // Recherche dans les sous-catégories
      return category.subcategories?.some(sub => 
        sub.name.toLowerCase().includes(lowerQuery) ||
        sub.subcategories?.some(subSub => subSub.name.toLowerCase().includes(lowerQuery))
      ) || false;
    });
  };
  
  // Fonction pour obtenir une catégorie par ID
  const getCategoryById = (id: string): MenuCategory | undefined => {
    return extendedCategories.find(cat => cat.id === id);
  };
  
  // Fonction pour obtenir une sous-catégorie par ID
  const getSubcategoryById = (categoryId: string, subcategoryId: string) => {
    const category = getCategoryById(categoryId);
    if (!category) return undefined;
    
    return category.subcategories?.find(sub => sub.id === subcategoryId);
  };
  
  // Fonction pour obtenir une sous-sous-catégorie par ID
  const getSubSubcategoryById = (categoryId: string, subcategoryId: string, subsubcategoryId: string) => {
    const subcategory = getSubcategoryById(categoryId, subcategoryId);
    if (!subcategory) return undefined;
    
    return subcategory.subcategories?.find(subSub => subSub.id === subsubcategoryId);
  };
  
  return {
    extendedCategories,
    searchExtendedCategories,
    getCategoryById,
    getSubcategoryById,
    getSubSubcategoryById
  };
};

export default useExtendedCategories;
