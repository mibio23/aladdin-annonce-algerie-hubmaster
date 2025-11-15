import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Language } from "./types/comprehensive";
import { translationFallback } from "./utils/fallback";
import { logger } from "@/utils/silentLogger";
import {
  extractLanguageFromPath,
  detectUserPreferredLanguage,
  saveLanguagePreference,
  addLanguageToPath
} from "./utils/languageDetector";
import { languageConfig } from "./config";

interface I18nContextWithRouterType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
  setLanguageFromURL: (urlLanguage: Language) => void;
}

const I18nContextWithRouter = createContext<I18nContextWithRouterType | undefined>(undefined);

interface I18nProviderWithRouterProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const I18nProviderWithRouter: React.FC<I18nProviderWithRouterProps> = ({
  children,
  initialLanguage
}) => {
  logger.debug('I18nProviderWithRouter: Starting initialization...');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Defensive check for React hooks availability
  if (!React || typeof React.useState !== 'function') {
    logger.error('I18nProviderWithRouter: React hooks not available');
    return <>{children}</>;
  }

  // Get initial language with proper error handling
  const getInitialLanguage = (): Language => {
    try {
      // Priorité 1: Langue initiale passée en prop
      if (initialLanguage && languageConfig.supportedLanguages.includes(initialLanguage)) {
        return initialLanguage;
      }
      
      // Priorité 2: Langue détectée depuis l'URL (si disponible)
      if (typeof window !== 'undefined') {
        const urlLanguage = extractLanguageFromPath(window.location.pathname);
        if (urlLanguage) {
          return urlLanguage;
        }
        
        // Priorité 3: Langue sauvegardée
        const savedLanguage = localStorage.getItem(languageConfig.localStorageKey);
        if (savedLanguage && languageConfig.supportedLanguages.includes(savedLanguage as Language)) {
          return savedLanguage as Language;
        }
      }
    } catch (error) {
      logger.warn('Error getting initial language', error);
    }
    
    // Priorité 4: Langue préférée détectée
    return detectUserPreferredLanguage();
  };

  try {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    // Determine if current language is RTL
    const isRTL = language === 'ar';

    // Function to change language and save it (avec navigation sans rechargement)
    const setLanguage = (lang: Language) => {
      try {
        logger.debug('Setting language to:', lang);
        setLanguageState(lang);
        saveLanguagePreference(lang);
        
        // Forcer le rechargement des traductions pour la nouvelle langue
        if (typeof window !== 'undefined' && (window as any).i18nOptimizer) {
          (window as any).i18nOptimizer.forceReloadTranslations(lang);
        }
        
        // Apply RTL/LTR direction to document
        if (typeof window !== 'undefined') {
          document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = lang;
          
          // Naviguer vers la nouvelle URL avec la langue sans rechargement complet
          const currentPath = location.pathname;
          const currentSearch = location.search;
          const currentHash = location.hash;
          
          // Utiliser la fonction pour ajouter la langue à l'URL
          const newPath = addLanguageToPath(currentPath, lang);
          
          // Naviguer vers la nouvelle URL sans rechargement
          navigate(newPath + currentSearch + currentHash, { replace: true });
        }
      } catch (error) {
        logger.error('Error setting language', error);
      }
    };

    // Function to set language from URL (sans sauvegarder dans localStorage)
    const setLanguageFromURL = (urlLanguage: Language) => {
      try {
        logger.debug('Setting language from URL:', urlLanguage);
        setLanguageState(urlLanguage);
        
        // Forcer le rechargement des traductions pour la nouvelle langue
        if (typeof window !== 'undefined' && (window as any).i18nOptimizer) {
          (window as any).i18nOptimizer.forceReloadTranslations(urlLanguage);
        }
        
        // Apply RTL/LTR direction to document
        if (typeof window !== 'undefined') {
          document.documentElement.dir = urlLanguage === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = urlLanguage;
        }
      } catch (error) {
        logger.error('Error setting language from URL', error);
      }
    };

    // Initialize language on component mount
    useEffect(() => {
      try {
        logger.debug('I18nProviderWithRouter initializing...');
        
        // Forcer le rechargement des traductions au montage
        if (typeof window !== 'undefined' && (window as any).i18nOptimizer) {
          (window as any).i18nOptimizer.forceReloadTranslations(language);
        }
        
        // Apply current language settings to document
        if (typeof window !== 'undefined') {
          document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = language;
        }
        
        logger.debug('I18nProviderWithRouter initialized with language:', language);
      } catch (error) {
        logger.error('Error initializing I18nProviderWithRouter', error);
      }
    }, [language]);

    // Intelligent translation function with fallback
    const t = (key: string): string => {
      try {
        // Use the intelligent fallback system
        return translationFallback.getTranslation(key, language);
      } catch (error) {
        logger.error('Translation error', error);
        return key;
      }
    };

    const contextValue: I18nContextWithRouterType = { 
      language, 
      setLanguage, 
      t, 
      isRTL,
      setLanguageFromURL
    };

    return (
      <I18nContextWithRouter.Provider value={contextValue}>
        {children}
      </I18nContextWithRouter.Provider>
    );
  } catch (error) {
    logger.error('I18nProviderWithRouter: Critical error during hook initialization', error);
    // Fallback render with basic context
    const fallbackValue: I18nContextWithRouterType = {
      language: 'fr',
      setLanguage: () => {},
      t: (key: string) => key,
      isRTL: false,
      setLanguageFromURL: () => {}
    };
    
    return (
      <I18nContextWithRouter.Provider value={fallbackValue}>
        {children}
      </I18nContextWithRouter.Provider>
    );
  }
};

export const useI18nWithRouter = (): I18nContextWithRouterType => {
  const context = useContext(I18nContextWithRouter);
  
  if (context === undefined) {
    throw new Error("useI18nWithRouter must be used within an I18nProviderWithRouter");
  }
  return context;
};

// Safe version that doesn't throw during initialization
export const useSafeI18nWithRouter = () => {
  const context = useContext(I18nContextWithRouter);
  
  // Return default values if context is not available
  if (context === undefined) {
    return {
      language: 'fr' as Language,
      setLanguage: () => {},
      t: (key: string) => key,
      isRTL: false,
      setLanguageFromURL: () => {}
    };
  }
  
  return context;
};

export type { Language };