// Service Supabase pour la gestion des catégories avec cache React Query et cache local
import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import { MenuCategory } from '@/data/categoryTypes';
import { createIcon } from '@/utils/iconMapper';
import { useExtendedCategories } from '@/services/extendedCategories/extendedCategoriesService';
import { cacheService, categoryCacheKeys } from '@/services/cacheService';

// Import du service local pour le développement
import { fetchCategoriesFromLocal, useLocalCategories } from '@/services/localCategoriesService';

// Utiliser le client Supabase déjà configuré
import { supabase } from '@/integrations/supabase/client';

// Variable pour basculer entre le mode local et Supabase
const USE_LOCAL_CATEGORIES = import.meta.env.VITE_USE_LOCAL_CATEGORIES === 'true';

// Types pour les données Supabase (view categories_with_translations)
export interface SupabaseCategoryView {
  id: number | null;
  parent_id: number | null;
  name: string | null;
  slug: string | null;
  created_at: string | null;
  updated_at: string | null;
  position_order: number | null;
  is_active: boolean | null;
  id_uuid: string | null;
  parent_id_uuid: string | null;
  description: string | null;
  icon: string | null;
  image_url: string | null;
  category_alt_text: string | null;
  translated_name: string | null;
  translated_description: string | null;
  language_code: string | null;
  category_image_url: string | null;
}

// Configuration des clés de cache
export const categoriesKeys = {
  all: ['categories'] as const,
  lists: () => [...categoriesKeys.all, 'list'] as const,
  list: (language: string) => [...categoriesKeys.lists(), language] as const,
  details: () => [...categoriesKeys.all, 'detail'] as const,
  detail: (id: string) => [...categoriesKeys.details(), id] as const,
  featured: (language: string) => [...categoriesKeys.all, 'featured', language] as const,
};

// Fonction pour transformer les données Supabase en MenuCategory
const transformSupabaseCategory = (category: any): MenuCategory => {
  return {
    id: category.id_uuid || String(category.id) || '',
    slug: category.slug || '',
    name: category.translated_name || category.name || '',
    icon: category.icon ? createIcon(category.icon) : undefined,
    description: category.translated_description || category.description || undefined,
    subcategories: [], // Sera rempli plus tard dans la construction hiérarchique
    href: `/categories/${category.slug}`,
  };
};

// Fonction pour récupérer les catégories depuis Supabase avec cache local optimisé
export const fetchCategoriesFromSupabase = async (language: string = 'fr'): Promise<MenuCategory[]> => {
  // Si nous sommes en mode local, utiliser le service local
  if (USE_LOCAL_CATEGORIES) {
    console.log(`📁 Utilisation du service local pour les catégories en ${language}`);
    return fetchCategoriesFromLocal(language);
  }

  const cacheKey = categoryCacheKeys.categories(language);
  
  // Vérifier d'abord le cache local
  const cachedData = cacheService.get<MenuCategory[]>(cacheKey);
  if (cachedData) {
    console.log(`Catégories récupérées depuis le cache local pour ${language}`);
    return cachedData;
  }

  try {
    // Optimisation : sélectionner uniquement les champs nécessaires
    const [categoriesResult, translationsResult] = await Promise.all([
      (supabase as any)
        .from('categories')
        .select('id, id_uuid, parent_id, parent_id_uuid, name, slug, icon, description, position_order, is_active')
        .eq('is_active', true)
        .order('position_order', { ascending: true })
        .limit(100), // Limiter le nombre de résultats
      
      (supabase as any)
        .from('category_translations')
        .select('category_id, name, description')
        .eq('language_code', language)
        .limit(200) // Limiter les traductions
    ]);

    const { data: categoriesData, error: categoriesError } = categoriesResult;
    const { data: translationsData, error: translationsError } = translationsResult;

    if (categoriesError) {
      console.error('Erreur lors de la récupération des catégories:', categoriesError);
      throw new Error(`Impossible de charger les catégories: ${categoriesError.message}`);
    }

    if (!categoriesData || categoriesData.length === 0) {
      console.warn(`Aucune catégorie trouvée`);
      return [];
    }

    // Fusionner les catégories avec leurs traductions de manière optimisée
    const translationsMap = new Map();
    if (translationsData) {
      translationsData.forEach((translation: any) => {
        translationsMap.set(translation.category_id, translation);
      });
    }

    const data = categoriesData.map((category: any) => {
      const translation = translationsMap.get(category.id);
      return {
        id: category.id,
        id_uuid: category.id_uuid,
        parent_id: category.parent_id,
        parent_id_uuid: category.parent_id_uuid,
        name: category.name,
        slug: category.slug,
        icon: category.icon,
        description: category.description,
        position_order: category.position_order,
        is_active: category.is_active,
        translated_name: translation?.name || category.name,
        translated_description: translation?.description || category.description,
        language_code: language
      };
    });

    // Transformer les données en structure hiérarchique optimisée
    const categoriesMap = new Map<string, MenuCategory>();
    const rootCategories: MenuCategory[] = [];

    // Première passe : créer toutes les catégories
    data.forEach((category: any) => {
      const transformedCategory = transformSupabaseCategory(category);
      const id = category.id_uuid || String(category.id);
      if (id) {
        categoriesMap.set(id, transformedCategory);
      }
    });

    // Deuxième passe : construire la hiérarchie
    data.forEach((category: any) => {
      const id = category.id_uuid || String(category.id);
      const transformedCategory = categoriesMap.get(id);
      
      if (!category.parent_id_uuid && !category.parent_id) {
        if (transformedCategory) {
          rootCategories.push(transformedCategory);
        }
      } else {
        const parentId = category.parent_id_uuid || String(category.parent_id);
        if (parentId && categoriesMap.has(parentId)) {
          const parent = categoriesMap.get(parentId);
          if (parent && transformedCategory) {
            if (!parent.subcategories) {
              parent.subcategories = [];
            }
            parent.subcategories.push(transformedCategory);
          }
        }
      }
    });

    // Mettre en cache le résultat pour 24 heures
    cacheService.set(cacheKey, rootCategories, 1000 * 60 * 60 * 24);

    return rootCategories;
  } catch (error) {
    console.error('Erreur critique lors du chargement des catégories:', error);
    throw error;
  }
};

// Hook pour récupérer les catégories avec cache optimisé
export const useCategories = (language: string = 'fr') => {
  // Si nous sommes en mode local, utiliser directement le hook local
  if (USE_LOCAL_CATEGORIES) {
    return useLocalCategories(language);
  }

  return useQuery({
    queryKey: categoriesKeys.list(language),
    queryFn: () => fetchCategoriesFromSupabase(language),
    staleTime: 1000 * 60 * 60 * 24, // Cache pendant 24 heures
    gcTime: 1000 * 60 * 60 * 24 * 7, // Garde en cache pendant 7 jours
    retry: 2, // Réduire le nombre de tentatives
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000), // Délai plus court
    refetchOnWindowFocus: false,
    refetchOnReconnect: false, // Désactiver pour éviter les rechargements
    // Optimisations supplémentaires
    networkMode: 'online',
    refetchOnMount: false,
    enabled: !!language, // N'exécuter que si la langue est définie
  });
};

// Hook pour récupérer les catégories featured avec cache local
export const useFeaturedCategories = (language: string = 'fr') => {
  return useQuery({
    queryKey: categoriesKeys.featured(language),
    queryFn: async () => {
      const cacheKey = categoryCacheKeys.featuredCategories(language);
      
      // Vérifier d'abord le cache local
      const cachedData = cacheService.get<MenuCategory[]>(cacheKey);
      if (cachedData) {
        console.log(`Catégories featured récupérées depuis le cache local pour ${language}`);
        return cachedData;
      }

      const { data, error } = await (supabase as any)
        .from('categories_with_translations')
        .select('*')
        .eq('language_code', language)
        .eq('is_active', true)
        .order('position_order', { ascending: true })
        .limit(10);

      if (error) {
        throw new Error(`Impossible de charger les catégories featured: ${error.message}`);
      }

      const result = data?.map(transformSupabaseCategory) || [];
      
      // Mettre en cache le résultat pour 12 heures
      cacheService.set(cacheKey, result, 1000 * 60 * 60 * 12);

      return result;
    },
    staleTime: 1000 * 60 * 60 * 12, // Cache pendant 12 heures
    gcTime: 1000 * 60 * 60 * 24, // Garde en cache pendant 24 heures
    networkMode: 'online',
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

// Hook pour précharger les catégories avec cache optimisé
export const usePreloadCategories = () => {
  const queryClient = useQueryClient();

  return (language: string = 'fr') => {
    queryClient.prefetchQuery({
      queryKey: categoriesKeys.list(language),
      queryFn: () => fetchCategoriesFromSupabase(language),
      staleTime: 1000 * 60 * 60 * 24, // Cache pendant 24 heures
      gcTime: 1000 * 60 * 60 * 24 * 7, // Garde en cache pendant 7 jours
    });
  };
};

// Hook pour invalider le cache des catégories (React Query + cache local)
export const useInvalidateCategories = () => {
  const queryClient = useQueryClient();

  return (language?: string) => {
    // Invalider le cache React Query
    if (language) {
      queryClient.invalidateQueries({ queryKey: categoriesKeys.list(language) });
      // Vider aussi le cache local pour cette langue
      cacheService.delete(categoryCacheKeys.categories(language));
      cacheService.delete(categoryCacheKeys.featuredCategories(language));
    } else {
      queryClient.invalidateQueries({ queryKey: categoriesKeys.all });
      // Vider tout le cache local des catégories
      cacheService.clear();
    }
  };
};

// Hook pour rafraîchir les catégories
export const useRefreshCategories = () => {
  const queryClient = useQueryClient();

  return (language: string = 'fr') => {
    queryClient.refetchQueries({ queryKey: categoriesKeys.list(language) });
  };
};

// Service pour les mutations (admin)
export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryData: Partial<MenuCategory>) => {
      const { data, error } = await (supabase as any)
        .from('categories')
        .insert({
          name: categoryData.name,
          slug: categoryData.slug,
          icon: categoryData.icon ? String(categoryData.icon) : null,
          position_order: 0,
          is_active: true,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoriesKeys.all });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updateData }: { id: number } & Partial<MenuCategory>) => {
      const { data, error } = await (supabase as any)
        .from('categories')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoriesKeys.all });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await (supabase as any)
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoriesKeys.all });
    },
  });
};

// Configuration du client React Query
export const createCategoriesQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });
};

// Export du client par défaut
export const categoriesQueryClient = createCategoriesQueryClient();


// Fonction pour récupérer les catégories étendues
export const useExtendedSupabaseCategories = (language: string = 'fr') => {
  const { extendedCategories } = useExtendedCategories();
  
  // Simuler la structure de données de Supabase
  const data = extendedCategories.map(category => ({
    id_uuid: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    parent_id_uuid: null,
    position_order: 0,
    is_active: true,
    translated_name: category.name,
    translated_description: category.description,
    language_code: language
  }));
  
  // Transformer en structure hiérarchique
  const categoriesMap = new Map<string, any>();
  const rootCategories: any[] = [];
  
  // Première passe : créer toutes les catégories
  data.forEach((category: any) => {
    const transformedCategory = {
      ...category,
      icon: category.icon,
      subcategories: []
    };
    categoriesMap.set(category.id_uuid || String(category.id), transformedCategory);
  });
  
  // Deuxième passe : construire la hiérarchie
  data.forEach((category: any) => {
    const transformedCategory = categoriesMap.get(category.id_uuid || String(category.id));
    
    if (!category.parent_id_uuid && !category.parent_id) {
      if (transformedCategory) {
        rootCategories.push(transformedCategory);
      }
    }
  });
  
  return rootCategories;
};
