// Service de cache côté serveur pour les catégories
// Utilise localStorage comme fallback si Redis n'est pas disponible

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiry: number;
}

class CacheService {
  private readonly CACHE_PREFIX = 'aladdin_cache_';
  private readonly DEFAULT_TTL = 1000 * 60 * 60 * 24; // 24 heures par défaut

  // Vérifier si localStorage est disponible
  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  // Générer une clé de cache
  private getKey(key: string): string {
    return `${this.CACHE_PREFIX}${key}`;
  }

  // Stocker des données en cache
  set<T>(key: string, data: T, ttl: number = this.DEFAULT_TTL): void {
    if (!this.isLocalStorageAvailable()) return;

    try {
      const cacheEntry: CacheEntry<T> = {
        data,
        timestamp: Date.now(),
        expiry: Date.now() + ttl,
      };

      localStorage.setItem(this.getKey(key), JSON.stringify(cacheEntry));
    } catch (error) {
      console.warn('Erreur lors du stockage en cache:', error);
      // Nettoyer le cache si espace insuffisant
      this.clearExpired();
    }
  }

  // Récupérer des données du cache
  get<T>(key: string): T | null {
    if (!this.isLocalStorageAvailable()) return null;

    try {
      const cached = localStorage.getItem(this.getKey(key));
      if (!cached) return null;

      const cacheEntry: CacheEntry<T> = JSON.parse(cached);
      
      // Vérifier si les données sont expirées
      if (Date.now() > cacheEntry.expiry) {
        localStorage.removeItem(this.getKey(key));
        return null;
      }

      return cacheEntry.data;
    } catch (error) {
      console.warn('Erreur lors de la lecture du cache:', error);
      localStorage.removeItem(this.getKey(key));
      return null;
    }
  }

  // Supprimer une entrée du cache
  delete(key: string): void {
    if (!this.isLocalStorageAvailable()) return;

    try {
      localStorage.removeItem(this.getKey(key));
    } catch (error) {
      console.warn('Erreur lors de la suppression du cache:', error);
    }
  }

  // Vider les entrées expirées
  clearExpired(): void {
    if (!this.isLocalStorageAvailable()) return;

    try {
      const keys = Object.keys(localStorage);
      const now = Date.now();
      
      keys.forEach(key => {
        if (key.startsWith(this.CACHE_PREFIX)) {
          try {
            const cached = localStorage.getItem(key);
            if (cached) {
              const cacheEntry = JSON.parse(cached);
              if (now > cacheEntry.expiry) {
                localStorage.removeItem(key);
              }
            }
          } catch {
            // Supprimer les entrées corrompues
            localStorage.removeItem(key);
          }
        }
      });
    } catch (error) {
      console.warn('Erreur lors du nettoyage du cache:', error);
    }
  }

  // Vider tout le cache
  clear(): void {
    if (!this.isLocalStorageAvailable()) return;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Erreur lors du vidage du cache:', error);
    }
  }

  // Obtenir la taille du cache (approximative)
  getSize(): number {
    if (!this.isLocalStorageAvailable()) return 0;

    try {
      let size = 0;
      const keys = Object.keys(localStorage);
      
      keys.forEach(key => {
        if (key.startsWith(this.CACHE_PREFIX)) {
          const value = localStorage.getItem(key);
          if (value) {
            size += key.length + value.length;
          }
        }
      });
      
      return size;
    } catch {
      return 0;
    }
  }
}

// Exporter une instance singleton
export const cacheService = new CacheService();

// Fonctions utilitaires pour le cache des catégories
export const categoryCacheKeys = {
  categories: (language: string) => `categories_${language}`,
  featuredCategories: (language: string) => `featured_categories_${language}`,
  categoryTree: (language: string) => `category_tree_${language}`,
};

export default cacheService;