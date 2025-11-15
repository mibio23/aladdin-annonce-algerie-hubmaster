import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { usePreferredLanguageDetection } from '@/hooks/useLanguageFromURL';
import { extractLanguageFromPath, addLanguageToPath, detectUserPreferredLanguage } from '@/lib/i18n/utils/languageDetector';
import { languageConfig } from '@/lib/i18n/config';

interface LanguageRouterProps {
  children: React.ReactNode;
}

/**
 * Composant qui gère le routage par langue
 * Redirige automatiquement vers la bonne version linguistique
 */
const LanguageRouter: React.FC<LanguageRouterProps> = ({ children }) => {
  const location = useLocation();
  const { language, setLanguage } = useSafeI18nWithRouter();
  
  // Détecter la langue préférée au premier chargement
  usePreferredLanguageDetection();

  // Vérifier si l'URL actuelle a un préfixe de langue
  const urlLanguage = extractLanguageFromPath(location.pathname);
  
  // Si l'URL n'a pas de préfixe de langue
  if (!urlLanguage) {
    // Si la redirection depuis la racine est activée
    if (languageConfig.redirectFromRoot) {
      const preferredLanguage = detectUserPreferredLanguage();
      const targetLanguage = language !== languageConfig.defaultLanguage ? language : preferredLanguage;
      const newPath = addLanguageToPath(location.pathname, targetLanguage);
      
      return <Navigate to={newPath} replace />;
    }
    
    // Sinon, afficher les enfants sans redirection
    return <>{children}</>;
  }

  // Si l'URL a une langue mais qu'elle n'est pas supportée
  if (!languageConfig.supportedLanguages.includes(urlLanguage as any)) {
    // Rediriger vers la langue par défaut
    const newPath = addLanguageToPath(location.pathname, languageConfig.defaultLanguage);
    return <Navigate to={newPath} replace />;
  }

  // Si la langue de l'URL est différente de celle du contexte
  if (urlLanguage !== language) {
    // Mettre à jour la langue du contexte
    setLanguage(urlLanguage as any);
  }

  return <>{children}</>;
};

export default LanguageRouter;