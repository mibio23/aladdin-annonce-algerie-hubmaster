import React, { useEffect, useState, useRef } from 'react';
import { useCategories } from '@/services/supabaseCategoriesService';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { cacheService } from '@/services/cacheService';
import { safeStringify } from '@/utils/safeStringify';

interface PerformanceMetrics {
  loadTime: number;
  cacheHit: boolean;
  dataSize: number;
  timestamp: number;
}

const CategoryPerformanceMonitor: React.FC = () => {
  const { language } = useSafeI18nWithRouter();
  const { data: categories, isLoading } = useCategories(language);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);
  
  // Utiliser des refs pour éviter complètement les dépendances cycliques
  const hasInitializedRef = useRef<boolean>(false);
  const lastCategoriesHashRef = useRef<string>('');
  const lastLanguageRef = useRef<string>('');
  const isProcessingRef = useRef<boolean>(false);

  // Effet unique avec protection maximale contre les boucles
  useEffect(() => {
<<<<<<< HEAD
    // Protection absolue contre les boucles infinies
    if (isProcessingRef.current) {
      return;
    }
=======
    if (categories && !isLoading) {
      const endTime = performance.now();
      const startTime = performance.getEntriesByName('categories-load-start').pop()?.startTime || endTime;
      const loadTime = endTime - startTime;

      // Vérifier si les données viennent du cache
      const cacheKey = `aladdin_cache_categories_${language}`;
      const cachedData = localStorage.getItem(cacheKey);
      const cacheHit = !!cachedData;

      const newMetrics: PerformanceMetrics = {
        loadTime,
        cacheHit,
        dataSize: safeStringify(categories).length,
        timestamp: Date.now(),
      };

      setMetrics(newMetrics);

      // Logger les métriques pour analyse
      console.log('📊 Catégories Performance Metrics:', newMetrics);

      // Envoyer les métriques à un service d'analyse (optionnel)
      if (process.env.NODE_ENV === 'production') {
        // AnalyticsService.track('categories_load', newMetrics);
      }
    }
  }, [categories, isLoading, language]);
>>>>>>> 1ad178c390a636bc28a710bd94aadb1f968224be

    try {
      // Calculer un hash ultra-simple pour détecter les changements
      const categoriesHash = categories ?
        `${categories.length}_${Date.now()}` : '';
      const languageChanged = lastLanguageRef.current !== language;
      const categoriesChanged = lastCategoriesHashRef.current !== categoriesHash;

      // Ne traiter que si quelque chose a réellement changé
      if (!languageChanged && !categoriesChanged) {
        return;
      }

      // Mettre à jour les refs
      lastLanguageRef.current = language;
      lastCategoriesHashRef.current = categoriesHash;
      isProcessingRef.current = true;

      // Marquer le début du chargement uniquement au premier changement
      if (!hasInitializedRef.current) {
        performance.mark('categories-load-start');
        hasInitializedRef.current = true;
      }

      // Calculer les métriques de manière ultra-sécurisée
      if (categories && !isLoading && categories.length > 0) {
        const endTime = performance.now();
        const startTime = performance.getEntriesByName('categories-load-start').pop()?.startTime || endTime;
        const loadTime = endTime - startTime;

        // Vérifier si les données viennent du cache
        const cacheKey = `aladdin_cache_categories_${language}`;
        const cacheHit = !!localStorage.getItem(cacheKey);

        // Calculer la taille des données sans risque de référence circulaire
        const dataSize = categories.length * 200; // Estimation simple et sécurisée

        const newMetrics: PerformanceMetrics = {
          loadTime: Math.round(loadTime),
          cacheHit,
          dataSize,
          timestamp: Date.now(),
        };

        // Mettre à jour uniquement si nécessaire
        setMetrics(prevMetrics => {
          if (!prevMetrics ||
              prevMetrics.cacheHit !== newMetrics.cacheHit ||
              Math.abs(prevMetrics.dataSize - newMetrics.dataSize) > 100) {
            console.log('📊 Catégories Performance Metrics:', newMetrics);
            return newMetrics;
          }
          return prevMetrics;
        });
      }
    } catch (error) {
      console.error('Erreur dans CategoryPerformanceMonitor:', error);
    } finally {
      // Toujours réinitialiser le flag de traitement
      setTimeout(() => {
        isProcessingRef.current = false;
      }, 200);
    }

  }, [categories?.length, isLoading, language]); // Dépendances minimales

  // Fonction pour vider le cache et tester les performances
  const clearCacheAndTest = async () => {
    cacheService.clear();
    window.location.reload();
  };

  // Fonction pour tester le prefetching
  const testPrefetching = async () => {
    const startTime = performance.now();
    
    // Simuler un prefetching
    const { useCategoryPrefetch } = await import('@/hooks/useCategoryPrefetch');
    const { prefetchCategories } = useCategoryPrefetch();
    
    await prefetchCategories();
    
    const endTime = performance.now();
    console.log(`🚀 Prefetching test completed in ${endTime - startTime}ms`);
  };

  if (process.env.NODE_ENV !== 'development' && !showMetrics) {
    return (
      <button
        onClick={() => setShowMetrics(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full text-xs hover:bg-gray-700 z-50"
        title="Afficher les métriques de performance"
      >
        📊
      </button>
    );
  }

  if (!metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Analyse des performances...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">📊 Performance Catégories</h3>
        {process.env.NODE_ENV === 'development' ? (
          <button
            onClick={() => setShowMetrics(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        ) : null}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>⏱️ Temps de chargement:</span>
          <span className={metrics.loadTime < 100 ? 'text-green-400' : metrics.loadTime < 500 ? 'text-yellow-400' : 'text-red-400'}>
            {metrics.loadTime.toFixed(2)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>💾 Cache hit:</span>
          <span className={metrics.cacheHit ? 'text-green-400' : 'text-red-400'}>
            {metrics.cacheHit ? 'OUI' : 'NON'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>📦 Taille des données:</span>
          <span>{(metrics.dataSize / 1024).toFixed(2)}KB</span>
        </div>
        
        <div className="flex justify-between">
          <span>🌐 Langue:</span>
          <span>{language}</span>
        </div>
        
        <div className="flex justify-between">
          <span>📋 Catégories:</span>
          <span>{categories?.length || 0}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-700 space-y-2">
        <button
          onClick={clearCacheAndTest}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
        >
          🗑️ Vider cache + recharger
        </button>
        
        <button
          onClick={testPrefetching}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs"
        >
          🚀 Tester prefetching
        </button>
      </div>
      
      <div className="mt-2 text-xs text-gray-400">
        Dernière mise à jour: {new Date(metrics.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default CategoryPerformanceMonitor;