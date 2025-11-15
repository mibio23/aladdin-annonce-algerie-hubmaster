'use client';

import React, { useState } from 'react';
import { useCategories } from './CategoryProvider';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  showFlag?: boolean;
  showNativeName?: boolean;
}

// Language configuration
const languages = [
  { code: 'ar', name: 'العربية', nativeName: 'العربية', flag: '🇩🇿', dir: 'rtl' },
  { code: 'fr', name: 'Français', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
];

export function LanguageSwitcher({ 
  className, 
  showFlag = true,
  showNativeName = true
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  
  // Get current language config
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];
  
  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
    
    // Update document direction for RTL languages
    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang) {
      document.documentElement.dir = selectedLang.dir;
      document.documentElement.lang = langCode;
    }
  };
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4" />
        {showFlag && <span className="text-lg">{currentLanguage.flag}</span>}
        <span className="hidden sm:inline">
          {showNativeName ? currentLanguage.nativeName : currentLanguage.name}
        </span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      
      {/* Language Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-10">
          <div className="py-1" role="listbox">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                  language === lang.code && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                )}
                role="option"
                aria-selected={language === lang.code}
              >
                {showFlag && <span className="text-lg">{lang.flag}</span>}
                <div className="flex flex-col">
                  <span className="font-medium">{lang.name}</span>
                  {showNativeName && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">{lang.nativeName}</span>
                  )}
                </div>
                {language === lang.code && <Check className="w-4 h-4 ml-auto" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}