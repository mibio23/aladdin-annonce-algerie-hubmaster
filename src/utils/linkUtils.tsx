import { Link as RouterLink } from "react-router-dom";
import { useLanguageFromURL } from '@/hooks/useLanguageFromURL';
import { Language } from '@/lib/i18n/translations';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Hook pour générer des liens localisés automatiquement
 */
export const useLocalizedLinks = () => {
  const { getLocalizedPath, currentURLLanguage } = useLanguageFromURL();
  const { language } = useSafeI18nWithRouter();
  
  /**
   * Génère un chemin localisé pour la langue actuelle
   */
  const localizePath = (path: string, targetLanguage?: Language) => {
    return getLocalizedPath(path, targetLanguage);
  };
  
  /**
   * Génère un lien localisé avec la préférence de langue actuelle
   */
  const createLocalizedLink = (path: string, targetLanguage?: Language) => {
    return localizePath(path, targetLanguage);
  };
  
  /**
   * Vérifie si un chemin est dans la langue actuelle
   */
  const isCurrentLanguagePath = (path: string) => {
    const pathLanguage = extractLanguageFromPath(path);
    return pathLanguage === currentURLLanguage;
  };
  
  /**
   * Génère un lien qui maintient la langue actuelle
   */
  const maintainLanguageLink = (path: string) => {
    return localizePath(path, language);
  };

  return {
    localizePath,
    createLocalizedLink,
    isCurrentLanguagePath,
    maintainLanguageLink,
    currentLanguage: currentURLLanguage || language
  };
};

/**
 * Utilitaire pour extraire la langue d'un chemin
 */
export const extractLanguageFromPath = (pathname: string): string | null => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // Vérifier si le premier segment est une langue supportée
  const supportedLanguages = ['fr', 'ar', 'en', 'de', 'es', 'it'];
  if (firstSegment && supportedLanguages.includes(firstSegment)) {
    return firstSegment;
  }
  
  return null;
};

/**
 * Composant Link localisé
 */
import React from 'react';
interface LocalizedLinkProps extends Omit<React.ComponentProps<typeof RouterLink>, 'to'> {
  to: string;
  language?: Language;
  children: React.ReactNode;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ 
  to, 
  language: targetLanguage, 
  children, 
  ...props 
}) => {
  const { getLocalizedPath } = useLanguageFromURL();
  
  const localizedPath = getLocalizedPath(to, targetLanguage);
  
  return (
    <RouterLink to={localizedPath} {...props}>
      {children}
    </RouterLink>
  );
};

/**
 * Bouton avec navigation localisée
 */
import { Button } from '@/components/ui/button';

interface LocalizedButtonLinkProps {
  to: string;
  language?: Language;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
}

export const LocalizedButtonLink: React.FC<LocalizedButtonLinkProps> = ({
  to,
  language: targetLanguage,
  variant = 'default',
  size = 'default',
  children,
  className = '',
  ...props
}) => {
  const { getLocalizedPath } = useLanguageFromURL();
  const { user } = useAuth();
  
  const localizedPath = getLocalizedPath(to, targetLanguage);
  
  // Vérifier si ce lien nécessite une authentification
  const requiresAuth = [
    '/deposer-offre-metier',
    '/deposer-annonce',
    '/creer-boutique',
    '/mes-annonces',
    '/mes-favoris',
    '/mes-boutiques',
    '/messages',
    '/reservations',
    '/parametres'
  ].some(path => localizedPath.includes(path));
  
  const handleClick = (e: React.MouseEvent) => {
    // Si l'utilisateur n'est pas connecté et que le lien nécessite une authentification
    if (!user && requiresAuth) {
      // Stocker l'URL de redirection pour la redirection après connexion
      sessionStorage.setItem('authRedirectUrl', localizedPath);
    }
  };
  
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      {...props}
    >
      <RouterLink to={localizedPath}>
        {children}
      </RouterLink>
    </Button>
  );
};