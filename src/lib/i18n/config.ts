import { Language } from './translations';

export const languageConfig = {
  defaultLanguage: 'fr' as Language,
  supportedLanguages: ['fr', 'ar', 'en', 'de', 'es', 'it'] as Language[],
  fallbackLanguage: 'fr' as Language,
  redirectFromRoot: true,
  persistInLocalStorage: true,
  persistInCookie: true,
  cookieExpiry: 365, // jours
  cookieName: 'aladdin-language-preference',
  localStorageKey: 'aladdin-language'
};

export const languageNames = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano'
} as const;

export const languageFlags = {
  fr: '🇫🇷',
  ar: '🇩🇿',
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
  it: '🇮🇹'
} as const;

export const languageDirections = {
  fr: 'ltr',
  ar: 'rtl',
  en: 'ltr',
  de: 'ltr',
  es: 'ltr',
  it: 'ltr'
} as const;