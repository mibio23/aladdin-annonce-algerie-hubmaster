
import { MenuCategory, SubCategory } from "@/data/categoryTypes";

export const createCategoryGroups = (categories: MenuCategory[], groupSize: number = 3): MenuCategory[][] => {
  const groups: MenuCategory[][] = [];
  
  for (let i = 0; i < categories.length; i += groupSize) {
    groups.push(categories.slice(i, i + groupSize));
  }
  
  return groups;
};

export const getSubcategoryCount = (category: MenuCategory): number => {
  let count = category.subcategories.length;
  
  category.subcategories.forEach(sub => {
    if (sub.subcategories) {
      count += sub.subcategories.length;
    }
  });
  
  return count;
};

export const hasDeepNesting = (category: MenuCategory): boolean => {
  return category.subcategories.some(sub => 
    sub.subcategories && sub.subcategories.length > 0
  );
};

export const filterCategoriesByDepth = (categories: MenuCategory[], maxDepth: number): MenuCategory[] => {
  if (maxDepth === 0) return [];
  if (maxDepth === 1) {
    return categories.map(cat => ({
      ...cat,
      subcategories: []
    }));
  }
  
  return categories.map(cat => ({
    ...cat,
    subcategories: cat.subcategories.map(sub => ({
      ...sub,
      subcategories: maxDepth > 2 ? sub.subcategories : []
    }))
  }));
};

export const getCategoryDisplayColumns = (category: MenuCategory): number => {
  const subcategoryCount = category.subcategories.length;
  
  if (subcategoryCount <= 4) return 1;
  if (subcategoryCount <= 8) return 2;
  if (subcategoryCount <= 12) return 3;
  return 4;
};

export const sortCategoriesAlphabetically = (categories: MenuCategory[]): MenuCategory[] => {
  return [...categories].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortSubcategoriesAlphabetically = (subcategories: SubCategory[]): SubCategory[] => {
  return [...subcategories].sort((a, b) => a.name.localeCompare(b.name));
};
