import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { categoriesKeys } from '@/services/supabaseCategoriesService';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

// Hook pour le prefetching intelligent des catégories
export const useCategoryPrefetch = () => {
  const queryClient = useQueryClient();
  const { language } = useSafeI18nWithRouter();

  // Précharger les catégories pour une langue spécifique
  const prefetchCategories = useCallback((lang?: string) => {
    const targetLanguage = lang || language;
    
    queryClient.prefetchQuery({
      queryKey: categoriesKeys.list(targetLanguage),
      queryFn: async () => {
        // Import dynamique pour éviter les imports circulaires
        const { fetchCategoriesFromSupabase } = await import('@/services/supabaseCategoriesService');
        return fetchCategoriesFromSupabase(targetLanguage);
      },
      staleTime: 1000 * 60 * 60 * 24, // 24 heures
    });
  }, [language, queryClient]);

  // Précharger les catégories featured
  const prefetchFeaturedCategories = useCallback((lang?: string) => {
    const targetLanguage = lang || language;
    
    queryClient.prefetchQuery({
      queryKey: categoriesKeys.featured(targetLanguage),
      queryFn: async () => {
        // Import dynamique pour éviter les imports circulaires
        const { supabase } = await import('@/integrations/supabase/client');
        const { createIcon } = await import('@/utils/iconMapper');
        
        const { data, error } = await supabase
          .from('categories_with_translations')
          .select('*')
          .eq('language_code', targetLanguage)
          .eq('is_active', true)
          .order('position_order', { ascending: true })
          .limit(10);

        if (error) {
          throw new Error(`Impossible de charger les catégories featured: ${error.message}`);
        }

        const transformSupabaseCategory = (category: any) => ({
          id: category.id_uuid || String(category.id) || '',
          slug: category.slug || '',
          name: category.translated_name || category.name || '',
          icon: category.icon ? createIcon(category.icon) : undefined,
          description: category.translated_description || category.description || undefined,
          subcategories: [],
          href: `/categories/${category.slug}`,
        });

        return data?.map(transformSupabaseCategory) || [];
      },
      staleTime: 1000 * 60 * 60 * 12, // 12 heures
    });
  }, [language, queryClient]);

  // Précharger les catégories au survol (avec délai pour éviter les requêtes inutiles)
  const prefetchOnHover = useCallback((callback: () => void, delay: number = 200) => {
    let timeoutId: NodeJS.Timeout;
    
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }, []);

  // Précharger les catégories au focus
  const prefetchOnFocus = useCallback((callback: () => void) => {
    return () => {
      // Précharger immédiatement au focus
      callback();
    };
  }, []);

  // Précharger les catégories pour les langues voisines
  const prefetchNeighborLanguages = useCallback(() => {
    const languages = ['fr', 'ar', 'en'];
    const currentIndex = languages.indexOf(language);
    
    // Précharger la langue actuelle et les langues voisines
    const languagesToPrefetch = [
      language,
      ...(currentIndex > 0 ? [languages[currentIndex - 1]] : []),
      ...(currentIndex < languages.length - 1 ? [languages[currentIndex + 1]] : []),
    ];

    languagesToPrefetch.forEach((lang, index) => {
      // Échelonner les requêtes pour éviter la surcharge
      setTimeout(() => {
        prefetchCategories(lang);
        prefetchFeaturedCategories(lang);
      }, index * 100);
    });
  }, [language, prefetchCategories, prefetchFeaturedCategories]);

  // Précharger les catégories lors de l'interaction avec la navigation
  const prefetchOnNavigationInteraction = useCallback(() => {
    // Précharger les catégories pour la langue actuelle
    prefetchCategories();
    prefetchFeaturedCategories();
    
    // Précharger les langues voisines en arrière-plan
    setTimeout(() => {
      prefetchNeighborLanguages();
    }, 500);
  }, [prefetchCategories, prefetchFeaturedCategories, prefetchNeighborLanguages]);

  return {
    prefetchCategories,
    prefetchFeaturedCategories,
    prefetchOnHover,
    prefetchOnFocus,
    prefetchOnNavigationInteraction,
    prefetchNeighborLanguages,
  };
};

export default useCategoryPrefetch;