import { useState, useEffect } from 'react';
import { extendedCategories } from '@/data/categories/extended/extendedCategories';
import { MenuCategory } from '@/data/categoryTypes';

export const useExtendedCategories = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler un chargement asynchrone des catégories
    const loadCategories = async () => {
      try {
        setIsLoading(true);
        // Simuler un délai de chargement
        await new Promise(resolve => setTimeout(resolve, 300));
        setCategories(extendedCategories);
        setError(null);
      } catch (err) {
        console.error('Erreur lors du chargement des catégories étendues:', err);
        setError('Impossible de charger les catégories');
      } finally {
        setIsLoading(false);
      }
    };

    loadCategories();
  }, []);

  return {
    extendedCategories: categories,
    isLoading,
    error
  };
};