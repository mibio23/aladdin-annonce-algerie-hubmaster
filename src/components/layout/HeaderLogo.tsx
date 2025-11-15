
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
import MagicalParticles from "@/components/effects/MagicalParticles";
// Reverted to footer-style logo (image + text wordmark)

const HeaderLogo = () => {
  const { language } = useSafeI18nWithRouter();
  const { getLocalizedPath } = useLanguageNavigation();
  const [showMagic, setShowMagic] = useState(false);
  const [magicOrigin, setMagicOrigin] = useState({ x: 0, y: 0 });

  // Effet magique au clic uniquement (plus de timer automatique)
  
  const handleLogoClick = (e: React.MouseEvent) => {
    // Obtenir la position exacte du logo au moment du clic
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    
    setMagicOrigin({
      x: rect.left + rect.width / 2, // Centre du logo
      y: rect.top + rect.height / 2, // Centre du logo
    });
    setShowMagic(true);
    
    // Reset magic effect after animation
    setTimeout(() => {
      setShowMagic(false);
    }, 3000);
  };
  
  return (
    <>
      <Link to={getLocalizedPath('/')} className="flex items-center" onClick={handleLogoClick}>
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/19d6e319-1c10-44f0-a889-e4babb7d2e97.png" 
            alt="AL@DDIN Logo" 
            className="h-[52.8px] w-auto object-contain max-w-[154px] transition-all duration-200 hover:scale-105 cursor-pointer"
          />
          <span
            className="ml-2 hidden sm:block text-[2.84rem] font-bold title-section text-black dark:text-slate-200 aladdin-glow hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer"
            aria-label="AL@DDIN"
          >
            AL@DDIN
          </span>
        </div>
      </Link>
      
      <MagicalParticles 
        isActive={showMagic} 
        originX={magicOrigin.x}
        originY={magicOrigin.y}
      />
    </>
  );
};

export default HeaderLogo;
