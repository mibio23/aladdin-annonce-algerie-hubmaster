import { Category, CategorySearchOptions, CategoryBreadcrumb } from '../types';
import { getCategoryIcon } from '../icons';

export class CategoryUtils {
  /**
   * Aplatit une structure de catégories imbriquées en un tableau plat
   */
  static flattenCategories(categories: Category[]): Category[] {
    const result: Category[] = [];
    
    const flatten = (cats: Category[]) => {
      cats.forEach(cat => {
        result.push(cat);
        if (cat.subcategories?.length) {
          flatten(cat.subcategories);
        }
      });
    };
    
    flatten(categories);
    return result;
  }

  /**
   * Recherche une catégorie par son ID dans une structure imbriquée
   */
  static findCategoryById(
    categories: Category[], 
    id: string
  ): Category | null {
    for (const cat of categories) {
      if (cat.id === id) return cat;
      if (cat.subcategories?.length) {
        const found = this.findCategoryById(cat.subcategories, id);
        if (found) return found;
      }
    }
    return null;
  }

  /**
   * Recherche des catégories selon des options de recherche
   */
  static searchCategories(
    categories: Category[], 
    options: CategorySearchOptions = {}
  ): Category[] {
    const {
      query,
      level,
      parentId,
      isActive = true,
      limit = 20,
      offset = 0
    } = options;

    let filtered = this.flattenCategories(categories);

    // Filtrer par niveau
    if (level !== undefined) {
      filtered = filtered.filter(cat => cat.level === level);
    }

    // Filtrer par parent
    if (parentId !== undefined) {
      filtered = filtered.filter(cat => cat.parentId === parentId);
    }

    // Filtrer par statut actif
    filtered = filtered.filter(cat => cat.isActive === isActive);

    // Filtrer par requête de recherche
    if (query) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm) ||
        cat.slug.toLowerCase().includes(searchTerm) ||
        (cat.translations?.fr && cat.translations.fr.toLowerCase().includes(searchTerm)) ||
        (cat.translations?.en && cat.translations.en.toLowerCase().includes(searchTerm)) ||
        (cat.translations?.ar && cat.translations.ar.toLowerCase().includes(searchTerm)) ||
        (cat.translations?.de && cat.translations.de.toLowerCase().includes(searchTerm)) ||
        (cat.translations?.es && cat.translations.es.toLowerCase().includes(searchTerm))
      );
    }

    // Trier par ordre de tri
    filtered.sort((a, b) => a.sortOrder - b.sortOrder);

    // Appliquer pagination
    return filtered.slice(offset, offset + limit);
  }

  /**
   * Génère le fil d'Ariane (breadcrumb) pour une catégorie
   */
  static getBreadcrumbPath(
    categories: Category[], 
    categoryId: string
  ): CategoryBreadcrumb[] {
    const path: CategoryBreadcrumb[] = [];
    const category = this.findCategoryById(categories, categoryId);
    
    if (!category) return path;

    // Ajouter la catégorie actuelle
    path.push({
      id: category.id,
      name: category.name,
      slug: category.slug,
      level: category.level
    });

    // Si c'est une catégorie de niveau > 0, remonter aux parents
    if (category.level > 0 && category.parentId) {
      const parentPath = this.getBreadcrumbPath(categories, category.parentId);
      path.unshift(...parentPath);
    }

    return path;
  }

  /**
   * Filtre les catégories par niveau
   */
  static filterByLevel(categories: Category[], level: number): Category[] {
    return this.flattenCategories(categories).filter(cat => cat.level === level);
  }

  /**
   * Récupère les catégories racines (niveau 0)
   */
  static getRootCategories(categories: Category[]): Category[] {
    return categories.filter(cat => cat.level === 0);
  }

  /**
   * Récupère les sous-catégories directes d'une catégorie
   */
  static getDirectSubcategories(
    categories: Category[], 
    parentId: string
  ): Category[] {
    const parent = this.findCategoryById(categories, parentId);
    return parent?.subcategories || [];
  }

  /**
   * Compte le nombre total de catégories (tous niveaux confondus)
   */
  static countAllCategories(categories: Category[]): number {
    return this.flattenCategories(categories).length;
  }

  /**
   * Compte le nombre de catégories par niveau
   */
  static countCategoriesByLevel(categories: Category[]): Record<number, number> {
    const flattened = this.flattenCategories(categories);
    const counts: Record<number, number> = {};
    
    flattened.forEach(cat => {
      counts[cat.level] = (counts[cat.level] || 0) + 1;
    });
    
    return counts;
  }

  /**
   * Vérifie si une catégorie a des sous-catégories
   */
  static hasSubcategories(category: Category): boolean {
    return !!(category.subcategories && category.subcategories.length > 0);
  }

  /**
   * Récupère l'icône d'une catégorie (avec fallback)
   */
  static getCategoryIcon(categoryId: string): string {
    return getCategoryIcon(categoryId);
  }

  /**
   * Construit une arborescence de catégories avec métadonnées enrichies
   */
  static buildCategoryTree(categories: Category[]): Category[] {
    return categories.map(category => ({
      ...category,
      icon: this.getCategoryIcon(category.id),
      subcategories: category.subcategories?.map(sub => ({
        ...sub,
        icon: this.getCategoryIcon(sub.id),
        subcategories: sub.subcategories?.map(subSub => ({
          ...subSub,
          icon: this.getCategoryIcon(subSub.id),
          subcategories: undefined // Limiter à 3 niveaux maximum
        }))
      }))
    }));
  }

  /**
   * Valide une structure de catégories
   */
  static validateCategoryTree(categories: Category[]): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    const ids = new Set<string>();
    const flattened = this.flattenCategories(categories);

    // Vérifier les doublons d'ID
    flattened.forEach(cat => {
      if (ids.has(cat.id)) {
        errors.push(`Duplicate category ID: ${cat.id}`);
      } else {
        ids.add(cat.id);
      }
    });

    // Vérifier les références de parents
    flattened.forEach(cat => {
      if (cat.parentId && !ids.has(cat.parentId)) {
        errors.push(`Invalid parent reference for category ${cat.id}: parent ${cat.parentId} not found`);
      }
    });

    // Vérifier les boucles
    const checkForLoops = (categoryId: string, visited: Set<string> = new Set()): boolean => {
      if (visited.has(categoryId)) {
        errors.push(`Category loop detected for ID: ${categoryId}`);
        return false;
      }
      
      visited.add(categoryId);
      const category = this.findCategoryById(categories, categoryId);
      
      if (category?.parentId) {
        return checkForLoops(category.parentId, visited);
      }
      
      return true;
    };

    flattened.forEach(cat => {
      if (cat.parentId) {
        checkForLoops(cat.id);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Transforme les catégories pour l'affichage (avec traductions)
   */
  static transformForDisplay(
    categories: Category[], 
    language: 'fr' | 'ar' | 'en' | 'de' | 'es' | 'it' = 'fr'
  ): Category[] {
    return this.buildCategoryTree(categories).map(category => ({
      ...category,
      name: category.translations?.[language] || category.name,
      subcategories: category.subcategories?.map(sub => ({
        ...sub,
        name: sub.translations?.[language] || sub.name,
        subcategories: sub.subcategories?.map(subSub => ({
          ...subSub,
          name: subSub.translations?.[language] || subSub.name
        }))
      }))
    }));
  }

  /**
   * Exporte les catégories au format JSON
   */
  static exportToJSON(categories: Category[]): string {
    return JSON.stringify(this.buildCategoryTree(categories), null, 2);
  }

  /**
   * Importe les catégories depuis un format JSON
   */
  static importFromJSON(jsonString: string): Category[] {
    try {
      const parsed = JSON.parse(jsonString);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('Failed to import categories from JSON:', error);
      return [];
    }
  }
}

export default CategoryUtils;