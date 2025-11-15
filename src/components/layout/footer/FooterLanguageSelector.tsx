import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
import { Button } from "@/components/ui/button";

interface LanguageOption {
  code: 'fr' | 'en' | 'ar' | 'de' | 'es' | 'it';
  name: string;
  flag: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇩🇿' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const FooterLanguageSelector = () => {
  const { language, setLanguage } = useSafeI18nWithRouter();
  const { changeLanguageAndNavigate } = useLanguageNavigation();

  const handleLanguageChange = (newLanguage: 'fr' | 'en' | 'ar' | 'de' | 'es' | 'it') => {
    // Utiliser la nouvelle méthode de navigation qui change la langue sans rechargement complet
    changeLanguageAndNavigate(newLanguage);
    // Sauvegarder la préférence de langue
    setLanguage(newLanguage);
  };

  return (
    <div className="footer-language-selector flex justify-center mb-6 gap-4 flex-wrap flex-row">
      {languageOptions.map((lang) => (
        <Button
          key={lang.code}
          variant="outline"
          size="sm"
          onClick={() => handleLanguageChange(lang.code)}
          className={`bg-transparent text-red-800 border-white hover:text-brand-gold rounded-lg transition-all duration-300 ease-in-out font-bold px-4 py-2 flex items-center gap-2 ${
            language === lang.code ? 'text-brand-gold border-brand-gold' : ''
          }`}
        >
          <span className="text-sm">{lang.flag}</span>
          <span className="text-base font-bold uppercase text-center text-red-600">{lang.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default FooterLanguageSelector;
