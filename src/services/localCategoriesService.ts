// Service local pour les catégories utilisant main28Categories.ts
// Ce service est utilisé pour le développement local quand Supabase n'est pas configuré

import { MenuCategory } from '@/data/categoryTypes';
import { getCategoryMenu } from '@/data/megaMenu/categoryMenu';

// Fonction pour transformer les catégories du fichier local en MenuCategory
const transformLocalCategory = (category: any): MenuCategory => {
  return {
    id: category.id,
    slug: category.slug,
    name: category.name,
    icon: category.icon,
    description: category.description || undefined,
    subcategories: category.subcategories?.map(transformLocalCategory) || [],
    href: `/categories/${category.slug}`,
  };
};

// Fonction pour récupérer les catégories depuis le fichier local
export const fetchCategoriesFromLocal = (language: string = 'fr'): Promise<MenuCategory[]> => {
  const data = getCategoryMenu(language).map(transformLocalCategory);
  return Promise.resolve(data);
};

// Hook pour utiliser les catégories locales
export const useLocalCategories = (language: string = 'fr') => {
  const data = getCategoryMenu(language).map(transformLocalCategory);
  return {
    data: data as MenuCategory[],
    isLoading: false,
    error: null,
    refetch: () => Promise.resolve(),
  };
};

// Export par défaut pour compatibilité
export default {
  fetchCategoriesFromLocal,
  useLocalCategories,
};