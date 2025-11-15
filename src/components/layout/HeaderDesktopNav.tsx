import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// MegaMenu supprimé: laisser le déclencheur visible mais contenu vide
import BoutiquesDropdownContent from "./nav/BoutiquesDropdownContent";
import MetierReparateurDropdownContent from "./nav/MetierReparateurDropdownContent";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useState } from "react";
import "@/styles/modern-menu.css";

const HeaderDesktopNav = () => {
  const { t, isRTL, language } = useSafeI18nWithRouter();
  const [useSupabase, setUseSupabase] = useState(() => {
    // Vérifier si les variables d'environnement Supabase sont disponibles
    return !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
  });

  // Préchargement supprimé: le menu catégories est neutralisé

  return (
    <div className={`flex items-baseline text-sm ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
      <Link
        to="/annonces"
        className="nav-link-3d h-8 text-sm font-bold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent aladdin-gold-glow-hover font-['Changa',Arial,sans-serif]"
      >
        {t('header.announcements')}
      </Link>
      
      <span className="text-muted-foreground">|</span>
      
      <NavigationMenu>
        <NavigationMenuList className="flex items-baseline space-x-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="nav-link-3d h-8 text-sm font-bold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent aladdin-gold-glow-hover font-['Changa',Arial,sans-serif]"
            >
              <span className="flex items-center">{t('categories.title')}</span>
            </NavigationMenuTrigger>
            {/* Contenu neutralisé: menu vide */}
            <NavigationMenuContent className="bg-transparent border-none shadow-none p-0">
              <div className="hidden" />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <span className="text-muted-foreground">|</span>
      
      <NavigationMenu>
        <NavigationMenuList className="flex items-baseline space-x-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="nav-link-3d h-8 text-sm font-bold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent aladdin-gold-glow-hover font-['Changa',Arial,sans-serif]"
            >
              <span className="flex items-center">{t('header.shops')}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg">
              <BoutiquesDropdownContent />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <span className="text-muted-foreground">|</span>
      
      <NavigationMenu>
        <NavigationMenuList className="flex items-baseline space-x-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="nav-link-3d h-8 text-sm font-bold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent aladdin-gold-glow-hover font-['Changa',Arial,sans-serif]"
            >
              <span className="flex items-center">{t('menu.professions.title')}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg">
              <MetierReparateurDropdownContent />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderDesktopNav;
