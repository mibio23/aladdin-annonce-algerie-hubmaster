import React, { useEffect } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { languageConfig } from '@/lib/i18n/config';

const LanguageRouteWrapper: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
  const { language, setLanguageFromURL } = useSafeI18nWithRouter();

  useEffect(() => {
    // Si un paramètre de langue est présent dans l'URL et qu'il est valide
    if (lang && languageConfig.supportedLanguages.includes(lang as any)) {
      // Mettre à jour la langue depuis l'URL sans sauvegarder dans localStorage
      setLanguageFromURL(lang as any);
    }
  }, [lang, setLanguageFromURL]);

  // Si la langue dans l'URL n'est pas valide, rediriger vers la langue par défaut
  if (lang && !languageConfig.supportedLanguages.includes(lang as any)) {
    return <Navigate to={`/${languageConfig.defaultLanguage}`} replace />;
  }

  // Si aucune langue n'est spécifiée, rediriger vers la langue actuelle
  if (!lang) {
    return <Navigate to={`/${language}`} replace />;
  }

  // Afficher le contenu de la route
  return <Outlet />;
};

export default LanguageRouteWrapper;