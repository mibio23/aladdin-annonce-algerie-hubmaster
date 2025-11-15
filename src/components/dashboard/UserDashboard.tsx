import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MessageSquare, Heart, Calendar, Settings, User, ShoppingBag, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NotificationDropdown from '@/components/notifications/NotificationDropdown';
import QuickActions from '@/components/dashboard/QuickActions';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const UserDashboard: React.FC = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  
  const dashboardItems = [
    {
      title: t('navigation.myAds'),
      description: t('dashboard.myAdsDesc'),
      icon: Package,
      link: "/mes-annonces",
      color: "text-blue-600"
    },
    {
      title: t('dashboard.messages'),
      description: t('dashboard.messagesDesc'),
      icon: MessageSquare,
      link: "/messages",
      color: "text-green-600"
    },
    {
      title: t('navigation.myFavorites'),
      description: t('dashboard.favoritesDesc'),
      icon: Heart,
      link: "/mes-favoris",
      color: "text-red-600"
    },
    {
      title: t('dashboard.reservations'),
      description: t('dashboard.reservationsDesc'),
      icon: Calendar,
      link: "/reservations",
      color: "text-purple-600"
    },
    {
      title: t('navigation.settings'),
      description: t('dashboard.settingsDesc'),
      icon: Settings,
      link: "/parametres",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('navigation.dashboard')}</h1>
          <p className="text-muted-foreground">
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* Quick Access Icons */}
        <div className="mb-8">
            <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.quickAccess')}</CardTitle>
              <CardDescription>{t('dashboard.quickAccessDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Link to="/dashboard">
                    <User className="h-4 w-4" />
                    {t('navigation.dashboard')}
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Link to="/mes-annonces">
                    <ShoppingBag className="h-4 w-4" />
                    {t('navigation.myAds')}
                  </Link>
                </Button>

                <div className="flex items-center">
                  <NotificationDropdown />
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Link to="/messages">
                    <MessageSquare className="h-4 w-4" />
                    {t('dashboard.messages')}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Link to="/reservations">
                    <Calendar className="h-4 w-4" />
                    {t('dashboard.reservations')}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <QuickActions />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.link} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to={item.link}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 ${item.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-8">
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                {t('dashboard.quickStats')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-muted-foreground">{t('dashboard.activeAds')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-muted-foreground">{t('dashboard.unreadMessages')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <div className="text-sm text-muted-foreground">{t('navigation.myFavorites')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-muted-foreground">{t('dashboard.reservations')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;