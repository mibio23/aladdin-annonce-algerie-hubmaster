import React, { useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguageFromURL } from '@/hooks/useLanguageFromURL';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { Language } from '@/lib/i18n/translations';
import { languageNames, languageFlags } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact' | 'flags';
  showLabel?: boolean;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'default',
  showLabel = true,
  className = ''
}) => {
  const { changeLanguage, currentURLLanguage } = useLanguageFromURL();
  const { language } = useSafeI18nWithRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = currentURLLanguage || language;
  
  const handleLanguageChange = (newLanguage: Language) => {
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  // Variant compact : affiche uniquement le drapeau
  if (variant === 'compact') {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className={cn("p-2", className)}>
            <span className="text-lg">{languageFlags[currentLanguage]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {Object.entries(languageNames).map(([lang, name]) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{languageFlags[lang as Language]}</span>
                <span>{name}</span>
              </div>
              {lang === currentLanguage && (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Variant flags uniquement
  if (variant === 'flags') {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        {Object.entries(languageFlags).map(([lang, flag]) => (
          <Button
            key={lang}
            variant={lang === currentLanguage ? "default" : "ghost"}
            size="sm"
            onClick={() => handleLanguageChange(lang as Language)}
            className="p-2"
            title={languageNames[lang as Language]}
          >
            <span className="text-lg">{flag}</span>
          </Button>
        ))}
      </div>
    );
  }

  // Variant par défaut
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn("flex items-center gap-2", className)}>
          <Globe className="h-4 w-4" />
          {showLabel && (
            <span className="hidden sm:inline">
              {languageNames[currentLanguage]}
            </span>
          )}
          <span className="text-lg">{languageFlags[currentLanguage]}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {Object.entries(languageNames).map(([lang, name]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang as Language)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{languageFlags[lang as Language]}</span>
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">
                  {lang === 'fr' && 'Français'}
                  {lang === 'ar' && 'العربية'}
                  {lang === 'en' && 'English'}
                  {lang === 'de' && 'Deutsch'}
                  {lang === 'es' && 'Español'}
                  {lang === 'it' && 'Italiano'}
                </div>
              </div>
            </div>
            {lang === currentLanguage && (
              <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
