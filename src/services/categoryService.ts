
import { MenuCategory } from "@/data/categoryTypes";
import { Language } from "@/lib/i18n/translations";
import { useCategories } from './supabaseCategoriesService';

export class CategoryService {
  // Utiliser le service Supabase pour récupérer les catégories
  // Cette classe est maintenant un wrapper pour compatibilité
  static async getCategoriesForLanguage(language: Language): Promise<MenuCategory[]> {
    // Cette méthode ne devrait plus être utilisée directement
    // Utilisez plutôt le hook useCategories dans les composants React
    console.warn('CategoryService.getCategoriesForLanguage is deprecated. Use useCategories hook instead.');
    return [];
  }
  
  // Version synchrone deprecated
  static getCategoriesForLanguageSync(language: Language): MenuCategory[] {
    console.warn('CategoryService.getCategoriesForLanguageSync is deprecated. Use useCategories hook instead.');
    return [];
  }
  
  // Précharger les catégories
  static async preloadCategories(language: Language): Promise<void> {
    console.warn('CategoryService.preloadCategories is deprecated. Use usePreloadCategories hook instead.');
  }
  
  // Nettoyer le cache
  static clearCache(): void {
    console.warn('CategoryService.clearCache is deprecated.');
  }

  static findCategoryBySlug(categories: MenuCategory[], slug: string): MenuCategory | null {
    for (const category of categories) {
      if (category.slug === slug) {
        return category;
      }
      
      for (const subcategory of category.subcategories) {
        if (subcategory.slug === slug) {
          return category;
        }
        
        if (subcategory.subcategories) {
          for (const subSubcategory of subcategory.subcategories) {
            if (subSubcategory.slug === slug) {
              return category;
            }
          }
        }
      }
    }
    
    return null;
  }

  static searchCategories(categories: MenuCategory[], query: string): MenuCategory[] {
    const lowerQuery = query.toLowerCase();
    
    return categories.filter(category => {
      // Search in main category
      if (category.name.toLowerCase().includes(lowerQuery)) {
        return true;
      }
      
      // Search in subcategories
      return category.subcategories.some(sub => {
        if (sub.name.toLowerCase().includes(lowerQuery)) {
          return true;
        }
        
        // Search in sub-subcategories
        return sub.subcategories?.some(subSub => 
          subSub.name.toLowerCase().includes(lowerQuery)
        );
      });
    });
  }

  static getCategoryPath(categories: MenuCategory[], targetSlug: string): string[] {
    for (const category of categories) {
      if (category.slug === targetSlug) {
        return [category.slug];
      }
      
      for (const subcategory of category.subcategories) {
        if (subcategory.slug === targetSlug) {
          return [category.slug, subcategory.slug];
        }
        
        if (subcategory.subcategories) {
          for (const subSubcategory of subcategory.subcategories) {
            if (subSubcategory.slug === targetSlug) {
              return [category.slug, subcategory.slug, subSubcategory.slug];
            }
          }
        }
      }
    }
    
    return [];
  }

  static flattenCategories(categories: MenuCategory[]): Array<{
    id: string;
    name: string;
    slug: string;
    level: number;
    parentSlug?: string;
  }> {
    const flattened: Array<{
      id: string;
      name: string;
      slug: string;
      level: number;
      parentSlug?: string;
    }> = [];

    categories.forEach(category => {
      // Add main category
      flattened.push({
        id: category.id,
        name: category.name,
        slug: category.slug,
        level: 0
      });

      // Add subcategories
      category.subcategories.forEach(sub => {
        flattened.push({
          id: sub.id,
          name: sub.name,
          slug: sub.slug,
          level: 1,
          parentSlug: category.slug
        });

        // Add sub-subcategories
        sub.subcategories?.forEach(subSub => {
          flattened.push({
            id: subSub.id,
            name: subSub.name,
            slug: subSub.slug,
            level: 2,
            parentSlug: sub.slug
          });
        });
      });
    });

    return flattened;
  }
}
