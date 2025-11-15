/**
 * Optimiseur de performances pour le système i18n
 * Réduit les logs excessifs et améliore les performances de traductions
 */

import { logger } from './silentLogger';

class I18nPerformanceOptimizer {
  private translationCache = new Map<string, string>();
  private missCache = new Set<string>();
  private debouncedCacheCleanup: () => void;
  private maxCacheSize = 500;
  private maxMissCacheSize = 200;

  constructor() {
    // Nettoyage du cache toutes les 5 minutes
    this.debouncedCacheCleanup = () => {
      setTimeout(() => this.cleanupCache(), 300000);
    };

    // Nettoyer les caches quand la page se ferme
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.clearAllCaches();
      });
    }
  }

  /**
   * Met en cache une traduction réussie
   */
  cacheTranslation(key: string, language: string, translation: string): void {
    if (this.translationCache.size >= this.maxCacheSize) {
      // Supprimer les anciennes entrées (FIFO)
      const firstKey = this.translationCache.keys().next().value;
      if (firstKey) {
        this.translationCache.delete(firstKey);
      }
    }
    
    const cacheKey = `${language}:${key}`;
    this.translationCache.set(cacheKey, translation);
    
    // Supprimer de la miss cache si elle existait
    this.missCache.delete(cacheKey);
  }

  /**
   * Récupère une traduction du cache
   */
  getCachedTranslation(key: string, language: string): string | null {
    const cacheKey = `${language}:${key}`;
    return this.translationCache.get(cacheKey) || null;
  }

  /**
   * Marque une traduction comme manquante
   */
  cacheMissingTranslation(key: string, language: string): void {
    if (this.missCache.size >= this.maxMissCacheSize) {
      // Supprimer les anciennes entrées
      const firstKey = this.missCache.values().next().value;
      if (firstKey) {
        this.missCache.delete(firstKey);
      }
    }
    
    const cacheKey = `${language}:${key}`;
    this.missCache.add(cacheKey);
  }

  /**
   * Vérifie si une traduction est marquée comme manquante
   */
  isCachedAsMissing(key: string, language: string): boolean {
    const cacheKey = `${language}:${key}`;
    return this.missCache.has(cacheKey);
  }

  /**
   * Nettoyage périodique des caches
   */
  private cleanupCache(): void {
    // Garder seulement 70% des entrées les plus récentes
    const translationEntries = Array.from(this.translationCache.entries());
    const keepCount = Math.floor(translationEntries.length * 0.7);
    
    if (keepCount < translationEntries.length) {
      this.translationCache.clear();
      translationEntries.slice(-keepCount).forEach(([key, value]) => {
        this.translationCache.set(key, value);
      });
    }

    // Nettoyer aussi la miss cache
    const missEntries = Array.from(this.missCache);
    const keepMissCount = Math.floor(missEntries.length * 0.7);
    
    if (keepMissCount < missEntries.length) {
      this.missCache.clear();
      missEntries.slice(-keepMissCount).forEach(key => {
        this.missCache.add(key);
      });
    }

      logger.info('I18n cache cleanup completed', {
        translationCacheSize: this.translationCache.size,
        missCacheSize: this.missCache.size
      });
  }

  /**
   * Nettoie tous les caches
   */
  clearAllCaches(): void {
    this.translationCache.clear();
    this.missCache.clear();
    logger.info('All i18n caches cleared');
  }

  /**
   * Statistiques des caches
   */
  getCacheStats(): {
    translationCacheSize: number;
    missCacheSize: number;
    cacheHitRate: number;
  } {
    return {
      translationCacheSize: this.translationCache.size,
      missCacheSize: this.missCache.size,
      cacheHitRate: this.translationCache.size / (this.translationCache.size + this.missCache.size) || 0
    };
  }

  /**
   * Réinitialise les compteurs et caches pour une langue spécifique
   */
  resetLanguageCache(language: string): void {
    const keysToRemove: string[] = [];
    
    // Nettoyer translation cache
    for (const [key] of this.translationCache) {
      if (key.startsWith(`${language}:`)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => this.translationCache.delete(key));

    // Nettoyer miss cache
    const missKeysToRemove = Array.from(this.missCache).filter(key => key.startsWith(`${language}:`));
    missKeysToRemove.forEach(key => this.missCache.delete(key));

    logger.info(`Cache reset for language: ${language}`, {
      removedTranslations: keysToRemove.length,
      removedMisses: missKeysToRemove.length
    });
  }

  /**
   * Force le rechargement des traductions pour une langue spécifique
   * Cette méthode est appelée lors du changement de langue
   */
  forceReloadTranslations(language: string): void {
    // Nettoyer entièrement le cache pour cette langue
    this.resetLanguageCache(language);
    
    // Forcer le nettoyage de tous les caches pour s'assurer que les traductions sont rechargées
    this.clearAllCaches();
    
    logger.info(`Force reloaded translations for language: ${language}`);
  }
}

// Instance singleton
export const i18nOptimizer = new I18nPerformanceOptimizer();

// Rendre disponible globalement pour le fallback
if (typeof window !== 'undefined') {
  (window as any).i18nOptimizer = i18nOptimizer;
}