import { useNavigate, useLocation } from 'react-router-dom';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { Language } from '@/lib/i18n/translations';
import { addLanguageToPath } from '@/lib/i18n/utils/languageDetector';

/**
 * Hook personnalisé pour gérer la navigation en conservant la langue actuelle
 */
export const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useSafeI18nWithRouter();

  /**
   * Navigue vers un chemin en ajoutant automatiquement le préfixe de langue actuelle
   * @param path - Le chemin de destination (avec ou sans slash initial)
   * @param options - Options de navigation React Router
   */
  const navigateWithLanguage = (path: string, options?: { replace?: boolean; state?: any }) => {
    // Normaliser le chemin
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Ajouter le préfixe de langue
    const localizedPath = addLanguageToPath(normalizedPath, language);
    
    // Naviguer vers le chemin localisé
    navigate(localizedPath, options);
  };

  /**
   * Génère une URL localisée avec la langue actuelle
   * @param path - Le chemin de destination
   * @returns L'URL complete avec le préfixe de langue
   */
  const getLocalizedPath = (path: string): string => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return addLanguageToPath(normalizedPath, language);
  };

  /**
   * Vérifie si le chemin actuel correspond à la langue spécifiée
   * @param lang - La langue à vérifier
   * @returns True si le chemin actuel utilise la langue spécifiée
   */
  const isCurrentLanguage = (lang: Language): boolean => {
    return language === lang;
  };

  /**
   * Change la langue et navigue vers la même page avec la nouvelle langue
   * @param newLanguage - La nouvelle langue
   */
  const changeLanguageAndNavigate = (newLanguage: Language) => {
    const currentPath = location.pathname;
    const currentSearch = location.search;
    const currentHash = location.hash;
    
    // Créer le nouveau chemin avec la nouvelle langue
    const newPath = addLanguageToPath(currentPath, newLanguage);
    const fullUrl = newPath + currentSearch + currentHash;
    
    // Naviguer vers la même page avec la nouvelle langue
    navigate(fullUrl, { replace: true });
  };

  return {
    navigateWithLanguage,
    getLocalizedPath,
    isCurrentLanguage,
    changeLanguageAndNavigate,
    currentLanguage: language,
  };
};