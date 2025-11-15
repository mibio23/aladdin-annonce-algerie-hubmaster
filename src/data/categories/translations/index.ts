import { frTranslations } from './fr';
import { arTranslations } from './ar';
import { enTranslations } from './en';
import { deTranslations } from './de';
import { esTranslations } from './es';
import { TranslationData, SupportedLanguage } from '../types';

export const translations: Record<SupportedLanguage, TranslationData> = {
  fr: frTranslations,
  ar: arTranslations,
  en: enTranslations,
  de: deTranslations,
  es: esTranslations,
  it: enTranslations,
};

export const getTranslation = (
  key: string,
  language: SupportedLanguage = 'fr',
  namespace: keyof TranslationData = 'categories'
): string => {
  const translationData = translations[language];
  
  if (!translationData) {
    console.warn(`Translation data for language '${language}' not found`);
    return key;
  }
  
  const namespaceData = translationData[namespace];
  if (!namespaceData) {
    console.warn(`Namespace '${namespace}' not found for language '${language}'`);
    return key;
  }
  
  // Navigate through nested keys (e.g., 'parent.child.grandchild')
  const keys = key.split('.');
  let value: any = namespaceData;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Key not found, return the original key
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

export const getAllTranslations = (language: SupportedLanguage = 'fr'): TranslationData => {
  return translations[language] || translations.fr;
};

export const getSupportedLanguages = (): SupportedLanguage[] => {
  return Object.keys(translations) as SupportedLanguage[];
};

export default translations;