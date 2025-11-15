import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { useInactivityTimer } from "@/hooks/useInactivityTimer";

import { PlusCircle, Store, Download, Briefcase } from "lucide-react";
import DigitalClock from "./DigitalClock";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useAuth } from "@/contexts/AuthContext";
import { LocalizedButtonLink } from "@/utils/linkUtils";

const HeaderUserActions = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  const { user } = useAuth();

  // Activer le timer d'inactivité pour les utilisateurs connectés
  useInactivityTimer({ enabled: !!user });

  return (
    <div className={`flex items-center text-sm ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
      {/* Download App Button */}
      <LocalizedButtonLink
        to="/telecharger-app"
        variant="ghost"
        size="sm"
        className="golden-frame-btn h-8 text-sm font-bold border-0"
      >
        <Download className="h-6 w-6" />
        {t('header.downloadApp')}
      </LocalizedButtonLink>
      
      <span className="text-muted-foreground">|</span>
      
      {/* Language Switcher */}
      <div className="text-foreground">
        <LanguageSwitcher />
      </div>
      
      <span className="text-muted-foreground">|</span>
      
      {/* User Authentication */}
      <div className="flex items-center text-foreground">
        {user ? (
          <UserMenu />
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold">{t('header.welcome')}</span>
            <LocalizedButtonLink
              to="/connexion"
              variant="ghost"
              size="sm"
              className="golden-frame-btn h-8 text-sm font-bold border-0"
            >
              {t('header.loginRegister')}
            </LocalizedButtonLink>
          </div>
        )}
      </div>
      
      <span className="text-muted-foreground">|</span>
      
      {/* Other actions */}
      <span className="red-frame-icon" title={t('header.postAd')}>
        <LocalizedButtonLink
          to="/deposer-annonce"
          variant="ghost"
          size="sm"
          className="p-1 h-auto"
        >
          <PlusCircle className="h-8 w-8" />
        </LocalizedButtonLink>
      </span>
      
      <span className="red-frame-icon" title={t('header.createShop')}>
        <LocalizedButtonLink
          to="/creer-boutique"
          variant="ghost"
          size="sm"
          className="p-1 h-auto"
        >
          <Store className="h-8 w-8" />
        </LocalizedButtonLink>
      </span>
      
      <span className="red-frame-icon" title={t('header.search')}>
        <LocalizedButtonLink
          to="/deposer-offre-metier"
          variant="ghost"
          size="sm"
          className="p-1 h-auto"
        >
          <Briefcase className="h-8 w-8" />
        </LocalizedButtonLink>
      </span>
      
      <span className="red-frame-icon">
        <ThemeToggle />
      </span>
      
      <span className="text-foreground">
        <DigitalClock />
      </span>
    </div>
  );
};

export default HeaderUserActions;
