import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { TrendingUp, Zap } from "lucide-react";

const TrendingAnnouncementsBanner = () => {
  const { t, isRTL } = useSafeI18nWithRouter();

  return (
    <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Titre principal innovateur avec icônes dynamiques */}
      <div className={`flex items-center mb-3 ${isRTL ? 'flex-row-reverse justify-end' : 'flex-row justify-start'}`}>
        {/* Logo Aladdin avec effet glow */}
        <div className={`${isRTL ? 'ml-3' : 'mr-3'} relative`}>
          <img 
            src="/lovable-uploads/4cf4a1ea-082d-4d7d-8b1b-01eb5e04557a.png" 
            alt="Aladdin Logo" 
            className="w-8 h-8 object-contain drop-shadow-lg"
          />
          {/* Effet de brillance animé */}
          <div className="absolute -top-1 -right-1">
            <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
          </div>
        </div>
        
        {/* Trait vertical avec dégradé */}
        <div className={`w-1 h-12 bg-gradient-to-b from-red-600 via-red-500 to-red-700 ${isRTL ? 'ml-3' : 'mr-3'} shadow-lg`}></div>
        
        {/* Icône trending avec animation */}
        <div className={`${isRTL ? 'ml-2' : 'mr-2'}`}>
          <TrendingUp className="w-6 h-6 text-red-500 animate-bounce" />
        </div>
        
        {/* Titre innovateur */}
        <h2 className={`text-4xl font-bold text-red-600 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('sections.mostSearched')}
        </h2>
        
        {/* Effet de feu décoratif */}
        <div className={`${isRTL ? 'mr-2' : 'ml-2'} flex space-x-1`}>
          <div className="w-2 h-4 bg-gradient-to-t from-red-600 to-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-3 bg-gradient-to-t from-red-500 to-yellow-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-5 bg-gradient-to-t from-red-600 to-orange-500 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
      
      {/* Sous-titre avec style élégant */}
      <p className={`text-black dark:text-white font-bold text-sm leading-relaxed ${isRTL ? 'text-right mr-14' : 'text-left ml-14'}`}>
        <span className="text-red-500">⚡</span> {t('sections.trendingDescription')}
      </p>
    </div>
  );
};

export default TrendingAnnouncementsBanner;