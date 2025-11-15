import { Language } from '../translations';
import { languageConfig } from '../config';

/**
 * Détecte la langue depuis l'URL
 */
export function extractLanguageFromPath(pathname: string): Language | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && languageConfig.supportedLanguages.includes(firstSegment as Language)) {
    return firstSegment as Language;
  }
  
  return null;
}

/**
 * Ajoute le préfixe de langue à un chemin
 */
export function addLanguageToPath(pathname: string, language: Language): string {
  // Si le chemin commence déjà par une langue, la remplacer
  const currentLanguage = extractLanguageFromPath(pathname);
  if (currentLanguage) {
    return pathname.replace(`/${currentLanguage}`, `/${language}`);
  }
  
  // Sinon, ajouter le préfixe de langue
  return `/${language}${pathname}`;
}

/**
 * Retire le préfixe de langue d'un chemin
 */
export function removeLanguageFromPath(pathname: string): string {
  const language = extractLanguageFromPath(pathname);
  if (language) {
    return pathname.replace(`/${language}`, '') || '/';
  }
  return pathname;
}

/**
 * Détecte la langue préférée de l'utilisateur
 */
export function detectUserPreferredLanguage(): Language {
  // 1. Vérifier localStorage
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem(languageConfig.localStorageKey);
    if (savedLanguage && languageConfig.supportedLanguages.includes(savedLanguage as Language)) {
      return savedLanguage as Language;
    }
    
    // 2. Vérifier les cookies
    const cookieLanguage = getCookie(languageConfig.cookieName);
    if (cookieLanguage && languageConfig.supportedLanguages.includes(cookieLanguage as Language)) {
      return cookieLanguage as Language;
    }
    
    // 3. Vérifier la langue du navigateur
    const browserLanguage = navigator.language.toLowerCase();
    for (const lang of languageConfig.supportedLanguages) {
      if (browserLanguage.startsWith(lang)) {
        return lang;
      }
    }
  }
  
  // 4. Langue par défaut
  return languageConfig.defaultLanguage;
}

/**
 * Sauvegarde la préférence de langue
 */
export function saveLanguagePreference(language: Language): void {
  if (typeof window === 'undefined') return;
  
  // Sauvegarder dans localStorage
  if (languageConfig.persistInLocalStorage) {
    localStorage.setItem(languageConfig.localStorageKey, language);
  }
  
  // Sauvegarder dans un cookie
  if (languageConfig.persistInCookie) {
    setCookie(languageConfig.cookieName, language, languageConfig.cookieExpiry);
  }
}

/**
 * Récupère la valeur d'un cookie
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  
  return null;
}

/**
 * Définit un cookie
 */
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
}

/**
 * Vérifie si un chemin correspond à la langue actuelle
 */
export function isPathForCurrentLanguage(pathname: string, currentLanguage: Language): boolean {
  const pathLanguage = extractLanguageFromPath(pathname);
  return pathLanguage === currentLanguage;
}

/**
 * Génère une URL avec la bonne langue
 */
export function generateLocalizedUrl(path: string, language: Language): string {
  // Normaliser le chemin
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Ajouter le préfixe de langue
  return addLanguageToPath(normalizedPath, language);
}