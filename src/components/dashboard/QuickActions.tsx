import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, MessageSquare, Store, Briefcase, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

const QuickActions: React.FC = () => {
  const { user } = useAuth();
  const { t } = useSafeI18nWithRouter();

  const quickActions = [
    {
      title: t('dashboard.postAd'),
      description: t('dashboard.postAdDesc'),
      icon: Plus,
      link: "/deposer-annonce",
      color: "bg-purple-600 hover:bg-purple-700",
      requiresAuth: true,
      messageAction: {
        title: t('dashboard.shopMessages'),
        description: t('dashboard.shopMessagesDesc'),
        icon: MessageSquare,
        link: "/messages",
        color: "bg-purple-500 hover:bg-purple-600"
      }
    },
    {
      title: t('dashboard.createShop'),
      description: t('dashboard.createShopDesc'),
      icon: Store,
      link: "/creer-boutique",
      color: "bg-indigo-600 hover:bg-indigo-700",
      requiresAuth: true,
      messageAction: {
        title: t('dashboard.shopMessages'),
        description: t('dashboard.shopMessagesDesc'),
        icon: MessageSquare,
        link: "/boutiques-messages",
        color: "bg-indigo-500 hover:bg-indigo-600"
      }
    },
    {
      title: t('dashboard.jobOffers'),
      description: t('dashboard.jobOffersDesc'),
      icon: Briefcase,
      link: "/deposer-offre-metier",
      color: "bg-blue-600 hover:bg-blue-700",
      requiresAuth: true,
      messageAction: {
        title: t('dashboard.jobMessages'),
        description: t('dashboard.jobMessagesDesc'),
        icon: MessageSquare,
        link: "/offres-metiers-messages",
        color: "bg-blue-500 hover:bg-blue-600"
      }
    },
    {
      title: t('dashboard.notifications'),
      description: t('dashboard.notificationsDesc'),
      icon: Bell,
      link: "/notifications",
      color: "bg-orange-600 hover:bg-orange-700",
      requiresAuth: true
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          {t('dashboard.quickActions')}
        </CardTitle>
        <CardDescription>
          {t('dashboard.quickAccessDesc')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {quickActions.map((action) => {
            const IconComponent = action.icon;
            
            // Si l'action nécessite une authentification et que l'utilisateur n'est pas connecté
            if (action.requiresAuth && !user) {
              return (
                <div key={action.link} className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 h-auto p-4 flex flex-col items-center gap-2 justify-center"
                  >
                    <Link to="/connexion">
                      <IconComponent className="w-6 h-6 mb-2" />
                      <span className="font-medium">{action.title}</span>
                      <span className="text-xs text-muted-foreground text-center">
                        {t('dashboard.loginToAccess')}
                      </span>
                    </Link>
                  </Button>
                  {action.messageAction && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 h-auto p-4 flex flex-col items-center gap-2 justify-center"
                    >
                      <Link to="/connexion">
                        <MessageSquare className="w-6 h-6 mb-2" />
                        <span className="font-medium">{action.messageAction.title}</span>
                        <span className="text-xs text-muted-foreground text-center">
                          {t('dashboard.loginToAccess')}
                        </span>
                      </Link>
                    </Button>
                  )}
                </div>
              );
            }
            
            return (
              <div key={action.link} className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 h-auto p-4 flex flex-col items-center gap-2 justify-center hover:shadow-md transition-all"
                >
                  <Link to={action.link}>
                    <div className={`p-2 rounded-full ${action.color} text-white mb-2`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{action.title}</span>
                    <span className="text-xs text-muted-foreground text-center">
                      {action.description}
                    </span>
                  </Link>
                </Button>
                {action.messageAction && (
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 h-auto p-4 flex flex-col items-center gap-2 justify-center hover:shadow-md transition-all"
                  >
                    <Link to={action.messageAction.link}>
                      <div className={`p-2 rounded-full ${action.messageAction.color} text-white mb-2`}>
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{action.messageAction.title}</span>
                      <span className="text-xs text-muted-foreground text-center">
                        {action.messageAction.description}
                      </span>
                    </Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;