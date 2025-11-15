import { Link } from 'react-router-dom';
import { 
  Settings, 
  Heart, 
  FileText, 
  Store, 
  LayoutDashboard, 
  Search, 
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useLanguageNavigation } from "@/hooks/useLanguageNavigation";
import { useProfile } from '@/hooks/useProfile';
import AvatarDisplay from '@/components/avatar/AvatarDisplay';

interface UserMenuProps {
  className?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ className }) => {
  const { user, signOut } = useAuth();
  const { t, isRTL } = useSafeI18nWithRouter();
  const { getLocalizedPath } = useLanguageNavigation();
  const { profile, loading } = useProfile();

  if (!user) return null;
  
  // Prioritize profile avatar, fallback to user metadata
  const avatarUrl = profile?.avatar_url || user.user_metadata?.avatar_url;
  const displayName = profile?.display_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const userInitials = displayName.substring(0, 2).toUpperCase();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: t('navigation.dashboard'),
      href: '/dashboard',
      description: t('dashboard.subtitle'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: FileText,
      label: t('navigation.myAds'),
      href: '/mes-annonces',
      description: t('dashboard.myAdsDesc'),
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Store,
      label: t('navigation.myShops'),
      href: '/mes-boutiques',
      description: t('myShops.subtitle'),
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Heart,
      label: t('navigation.myFavorites'),
      href: '/mes-favoris',
      description: t('dashboard.favoritesDesc'),
      color: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Search,
      label: t('navigation.productSearch'),
      href: '/recherche-produit',
      description: t('navigation.productSearchDesc'),
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      // Rediriger vers la page principale après déconnexion
      window.location.href = getLocalizedPath('/');
    } catch (error) {
      console.error('Error signing out:', error);
      // En cas d'erreur, forcer la redirection vers la page principale
      window.location.href = getLocalizedPath('/');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`h-12 w-12 rounded-full ${className}`}>
          <AvatarDisplay 
            src={avatarUrl}
            alt={displayName}
            fallback={userInitials}
            size="md"
          />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className={`w-80 p-2 dropdown-menu-content ${isRTL ? 'text-right' : ''}`} align={isRTL ? 'end' : 'end'} forceMount dir={isRTL ? 'rtl' : 'ltr'}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'}`}>
              <AvatarDisplay 
                src={avatarUrl}
                alt={displayName}
                fallback={userInitials}
                size="lg"
              />
              <div className={`flex flex-col ${isRTL ? 'items-end pr-3' : 'pl-3'}`}>
                <p className={`text-sm font-medium leading-none ${isRTL ? 'text-right' : ''}`}>{displayName}</p>
                <p className={`text-xs leading-none text-muted-foreground mt-1 ${isRTL ? 'text-right' : ''}`}>
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild className="cursor-pointer p-3 dropdown-menu-item">
            <Link to={item.href} className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'}`}>
              <item.icon className={`h-7 w-7 mt-0.5 ${item.color}`} />
              <div className={`flex flex-col space-y-1 ${isRTL ? 'items-end pr-3' : 'pl-3'}`}>
                <span className={`text-sm font-medium text-muted-foreground line-clamp-2 ${isRTL ? 'text-right' : ''}`}>{item.label}</span>
                <span className={`text-xs text-muted-foreground line-clamp-2 ${isRTL ? 'text-right' : ''}`}>
                  {item.description}
                </span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild className="cursor-pointer p-3 dropdown-menu-item">
          <Link to="/parametres" className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse' : 'space-x-3'}`}>
            <Settings className="h-7 w-7 mt-0.5 text-gray-600 dark:text-gray-400" />
            <div className={`flex flex-col space-y-1 ${isRTL ? 'items-end pr-3' : 'pl-3'}`}>
              <span className={`text-sm font-medium text-muted-foreground line-clamp-2 ${isRTL ? 'text-right' : ''}`}>{t('navigation.settings')}</span>
              <span className={`text-xs text-muted-foreground line-clamp-2 ${isRTL ? 'text-right' : ''}`}>
                {t('dashboard.settingsDesc')}
              </span>
            </div>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={handleSignOut} 
          className={`cursor-pointer p-3 dropdown-menu-item text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950 ${isRTL ? 'flex flex-row-reverse items-center' : 'flex items-center'}`}
        >
          <LogOut className={`h-7 w-7 ${isRTL ? 'ml-3' : 'mr-3'}`} />
          <span className={`text-sm font-medium text-muted-foreground line-clamp-2 ${isRTL ? 'text-right' : ''}`}>{t('navigation.logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;