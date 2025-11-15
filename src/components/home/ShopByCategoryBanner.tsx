import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const ShopByCategoryBanner = () => {
  const { t, isRTL } = useSafeI18nWithRouter();

  return (
    <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Titre principal avec le même style que "Nos rubriques, pour toutes les occasions" */}
      <div className={`flex items-center mb-3 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'}`}>
        {/* Logo Aladdin */}
        <div className={`${isRTL ? 'ml-3' : 'mr-3'}`}>
          <img 
            src="/lovable-uploads/4cf4a1ea-082d-4d7d-8b1b-01eb5e04557a.png" 
            alt="Aladdin Logo" 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Trait vertical */}
        <div className={`w-1 h-12 bg-red-600 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
        
        {/* Titre */}
        <h2 className={`text-4xl font-bold text-red-600 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('sections.ourCategories')}
        </h2>
      </div>
      
      {/* Sous-titre */}
      <p className={`text-black dark:text-white font-bold text-sm leading-relaxed ${isRTL ? 'text-right mr-14' : 'text-left ml-14'}`}>
        {t('sections.categoriesDescription')}
      </p>
    </div>
  );
};

export default ShopByCategoryBanner;