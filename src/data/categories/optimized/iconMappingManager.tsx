// Gestionnaire optimisé des icônes et images pour les catégories
class IconMappingManager {
  private iconMappings: Map<string, string> = new Map();
  private defaultImages: Map<string, string> = new Map();

  constructor() {
    this.initializeDefaultMappings();
  }

  // Initialiser les mappings par défaut
  private initializeDefaultMappings() {
    // Images par défaut pour certaines catégories connues
    this.defaultImages.set("vehicules", "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop");
    this.defaultImages.set("immobilier", "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop");
    this.defaultImages.set("informatique", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop");
    this.defaultImages.set("telephonie", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop");
    this.defaultImages.set("vetements-femme", "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop");
    this.defaultImages.set("vetements-homme", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop");
    this.defaultImages.set("meubles", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop");
    this.defaultImages.set("decoration", "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=200&fit=crop");
    this.defaultImages.set("jeux-video-consoles", "https://images.unsplash.com/photo-1580327332925-a6a2a5b11baa?w=300&h=200&fit=crop");
    this.defaultImages.set("electromenager", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop");
    this.defaultImages.set("sport-loisirs", "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop");
    this.defaultImages.set("emploi", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop");
    this.defaultImages.set("services", "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop");
  }

  // Ajouter un mapping personnalisé
  setIconUrl(slug: string, url: string): void {
    this.iconMappings.set(slug, url);
  }

  // Obtenir l'URL d'une icône
  getIconUrl(slug: string): string | null {
    // Priorité 1: Mapping personnalisé
    if (this.iconMappings.has(slug)) {
      return this.iconMappings.get(slug)!;
    }

    // Priorité 2: Image par défaut
    if (this.defaultImages.has(slug)) {
      return this.defaultImages.get(slug)!;
    }

    // Priorité 3: Image générée
    return `https://picsum.photos/seed/${slug}/300/200`;
  }

  // Obtenir toutes les icônes mappées
  getAllMappings(): Record<string, string> {
    const result: Record<string, string> = {};
    
    // Ajouter les mappings personnalisés
    this.iconMappings.forEach((url, slug) => {
      result[slug] = url;
    });
    
    // Ajouter les images par défaut
    this.defaultImages.forEach((url, slug) => {
      if (!result[slug]) {
        result[slug] = url;
      }
    });
    
    return result;
  }

  // Précharger les images importantes
  async preloadImages(slugs: string[]): Promise<void> {
    const promises = slugs.map(slug => {
      const url = this.getIconUrl(slug);
      if (url) {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Ne pas bloquer en cas d'erreur
          img.src = url;
        });
      }
      return Promise.resolve();
    });

    await Promise.all(promises);
  }

  // Réinitialiser les mappings
  reset(): void {
    this.iconMappings.clear();
    this.initializeDefaultMappings();
  }
}

// Instance singleton
export const iconMappingManager = new IconMappingManager();