import frenchTranslations from './languages/french';
import arabicTranslations from './languages/arabic';
import englishTranslations from './languages/english';
import germanTranslations from './languages/german';  
import spanishTranslations from './languages/spanish';
import italianTranslations from './languages/italian';

export type Language = 'fr' | 'ar' | 'en' | 'de' | 'es' | 'it';

// Force reload of PWA translations - 2024-09-22 15:58
const translations = {
  fr: frenchTranslations,
  ar: arabicTranslations,
  en: englishTranslations,
  de: germanTranslations,
  es: spanishTranslations,
  it: italianTranslations,
};

export default translations;