
import { iconMappingsData, categoryMappingsData } from './iconMappings';

// Gestionnaire optimisé des mappings d'icônes
class IconMappingManager {
  private mappings: Map<string, string> = new Map();
  private categories: Map<string, string[]> = new Map();

  constructor() {
    this.initializeMappings();
    this.initializeCategories();
  }

  getIconUrl(slug: string): string | undefined {
    return this.mappings.get(slug);
  }

  getIconsByCategory(category: string): Record<string, string> {
    const slugs = this.categories.get(category) || [];
    const result: Record<string, string> = {};
    
    slugs.forEach(slug => {
      const url = this.mappings.get(slug);
      if (url) {
        result[slug] = url;
      }
    });

    return result;
  }

  addMapping(slug: string, url: string, category?: string): void {
    this.mappings.set(slug, url);
    
    if (category) {
      const categoryMappings = this.categories.get(category) || [];
      if (!categoryMappings.includes(slug)) {
        categoryMappings.push(slug);
        this.categories.set(category, categoryMappings);
      }
    }
  }

  getAllMappings(): Record<string, string> {
    return Object.fromEntries(this.mappings);
  }

  private initializeMappings(): void {
    iconMappingsData.forEach(([slug, url]) => {
      this.mappings.set(slug, url);
    });
  }

  private initializeCategories(): void {
    Object.entries(categoryMappingsData).forEach(([category, slugs]) => {
      this.categories.set(category, slugs);
    });
  }
}

// Instance singleton
export const iconMappingManager = new IconMappingManager();

// Force refresh du mapping export en recréant l'instance
const freshIconMappingManager = new IconMappingManager();
export const categoryIconMapping = freshIconMappingManager.getAllMappings();
