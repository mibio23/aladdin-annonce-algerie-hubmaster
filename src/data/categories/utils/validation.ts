import { Category, ValidationResult } from '../types';

// Constantes locales pour la validation
const MAX_CATEGORY_LEVEL = 2;

export class CategoryValidator {
  /**
   * Valide une catégorie individuelle
   */
  static validateCategory(category: Category): ValidationResult {
    const errors: string[] = [];
    
    // Vérification de l'ID
    if (!category.id || category.id.trim() === '') {
      errors.push("L'ID de la catégorie est requis");
    } else if (!/^[a-z0-9-]+$/.test(category.id)) {
      errors.push("L'ID de la catégorie doit contenir uniquement des lettres minuscules, chiffres et tirets");
    }
    
    // Vérification du nom
    if (!category.name || category.name.trim() === '') {
      errors.push("Le nom de la catégorie est requis");
    } else if (category.name.length < 2) {
      errors.push("Le nom de la catégorie doit contenir au moins 2 caractères");
    } else if (category.name.length > 100) {
      errors.push("Le nom de la catégorie ne doit pas dépasser 100 caractères");
    }
    
    // Vérification du slug
    if (!category.slug || category.slug.trim() === '') {
      errors.push("Le slug de la catégorie est requis");
    } else if (!/^[a-z0-9-]+$/.test(category.slug)) {
      errors.push("Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets");
    }
    
    // Vérification du niveau
    if (category.level === undefined || category.level === null) {
      errors.push("Le niveau de la catégorie est requis");
    } else if (category.level < 0 || category.level > MAX_CATEGORY_LEVEL) {
      errors.push(`Le niveau de la catégorie doit être entre 0 et ${MAX_CATEGORY_LEVEL}`);
    }
    
    // Vérification de l'ordre de tri
    if (category.sortOrder === undefined || category.sortOrder === null) {
      errors.push("L'ordre de tri de la catégorie est requis");
    } else if (category.sortOrder < 0) {
      errors.push("L'ordre de tri doit être un nombre positif");
    }
    
    // Vérification du statut
    if (category.isActive === undefined || category.isActive === null) {
      errors.push("Le statut actif de la catégorie est requis");
    }
    
    // Vérification des traductions
    if (category.translations) {
      const supportedLanguages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
      
      for (const lang of supportedLanguages) {
        if (category.translations[lang] && typeof category.translations[lang] !== 'string') {
          errors.push(`La traduction pour la langue '${lang}' doit être une chaîne de caractères`);
        }
      }
    }
    
    // Vérification des sous-catégories
    if (category.subcategories) {
      if (!Array.isArray(category.subcategories)) {
        errors.push("Les sous-catégories doivent être un tableau");
      } else {
        // Vérifier que les sous-catégories ont un niveau supérieur
        category.subcategories.forEach((subcat, index) => {
          if (subcat.level !== category.level + 1) {
            errors.push(`La sous-catégorie à l'index ${index} doit avoir un niveau de ${category.level + 1}`);
          }
          
          if (subcat.parentId !== category.id) {
            errors.push(`La sous-catégorie à l'index ${index} doit avoir l'ID parent '${category.id}'`);
          }
        });
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Valide une arborescence complète de catégories
   */
  static validateCategoryTree(categories: Category[]): ValidationResult {
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
      const category = flattened.find(cat => cat.id === categoryId);
      
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
    
    // Vérifier les niveaux
    flattened.forEach(cat => {
      if (cat.level < 0 || cat.level > MAX_CATEGORY_LEVEL) {
        errors.push(`Invalid category level for ${cat.id}: ${cat.level} (must be between 0 and ${MAX_CATEGORY_LEVEL})`);
      }
    });
    
    // Vérifier qu'il y a au moins une catégorie racine
    const rootCategories = flattened.filter(cat => cat.level === 0);
    if (rootCategories.length === 0) {
      errors.push("The category tree must contain at least one root category");
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Aplatit une structure de catégories imbriquées
   */
  private static flattenCategories(categories: Category[]): Category[] {
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
   * Valide les contraintes métier spécifiques
   */
  static validateBusinessRules(categories: Category[]): ValidationResult {
    const errors: string[] = [];
    const flattened = this.flattenCategories(categories);
    
    // Règle: Pas plus de 20 catégories racines
    const rootCategories = flattened.filter(cat => cat.level === 0);
    if (rootCategories.length > 20) {
      errors.push("Il ne peut pas y avoir plus de 20 catégories racines");
    }
    
    // Règle: Pas plus de 5 sous-catégories par catégorie
    const subcategoriesByParent = new Map<string, number>();
    flattened.forEach(cat => {
      if (cat.parentId) {
        subcategoriesByParent.set(
          cat.parentId, 
          (subcategoriesByParent.get(cat.parentId) || 0) + 1
        );
      }
    });
    
    subcategoriesByParent.forEach((count, parentId) => {
      if (count > 5) {
        errors.push(`La catégorie parente ${parentId} a trop de sous-catégories (${count}, maximum 5)`);
      }
    });
    
    // Règle: Pas plus de 3 niveaux de profondeur
    const maxLevel = Math.max(...flattened.map(cat => cat.level));
    if (maxLevel > MAX_CATEGORY_LEVEL) {
      errors.push(`La profondeur de l'arborescence dépasse le maximum autorisé (${MAX_CATEGORY_LEVEL})`);
    }
    
    // Règle: Les slugs doivent être uniques
    const slugs = new Set<string>();
    flattened.forEach(cat => {
      if (slugs.has(cat.slug)) {
        errors.push(`Slug en double: ${cat.slug}`);
      } else {
        slugs.add(cat.slug);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Valide complètement une arborescence de catégories (structure + règles métier)
   */
  static validateCompleteCategoryTree(categories: Category[]): ValidationResult {
    const structureValidation = this.validateCategoryTree(categories);
    const businessValidation = this.validateBusinessRules(categories);
    
    const allErrors = [...structureValidation.errors, ...businessValidation.errors];
    
    return {
      isValid: allErrors.length === 0,
      errors: allErrors
    };
  }

  /**
   * Génère un rapport de validation détaillé
   */
  static generateValidationReport(categories: Category[]): string {
    const validation = this.validateCompleteCategoryTree(categories);
    
    let report = "# Rapport de Validation des Catégories\n\n";
    
    if (validation.isValid) {
      report += "✅ **Validation réussie** - L'arborescence des catégories est valide.\n\n";
    } else {
      report += "❌ **Validation échouée** - Des erreurs ont été détectées.\n\n";
      report += "## Erreurs trouvées:\n\n";
      
      validation.errors.forEach((error, index) => {
        report += `${index + 1}. ${error}\n`;
      });
    }
    
    // Statistiques
    const flattened = this.flattenCategories(categories);
    const levelCounts = new Map<number, number>();
    flattened.forEach(cat => {
      levelCounts.set(cat.level, (levelCounts.get(cat.level) || 0) + 1);
    });
    
    report += "\n## Statistiques de l'arborescence:\n\n";
    report += `- Nombre total de catégories: ${flattened.length}\n`;
    report += `- Profondeur maximale: ${Math.max(...flattened.map(cat => cat.level))}\n`;
    
    report += "\n### Répartition par niveau:\n\n";
    for (let level = 0; level <= MAX_CATEGORY_LEVEL; level++) {
      const count = levelCounts.get(level) || 0;
      if (count > 0) {
        report += `- Niveau ${level}: ${count} catégories\n`;
      }
    }
    
    return report;
  }
}

export default CategoryValidator;