import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Store, Plus, MapPin, Star, Eye, Edit, Trash } from 'lucide-react';
import { Navigate, Link } from 'react-router-dom';

function MesBoutiques() {
  const { user, loading } = useAuth();
  const { t } = useSafeI18nWithRouter();
  const { getLocalizedPath } = useLanguageNavigation();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <span>{t('common.loading')}</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  const initialShops = [
    {
      id: 1,
      name: "Électronique Tech",
      description: "Vente et réparation d'appareils électroniques",
      location: "Alger Centre",
      rating: 4.5,
      reviewCount: 23,
      isActive: true,
      category: "Électronique",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Boutique Mode",
      description: "Vêtements et accessoires de mode",
      location: "Bab Ezzouar",
      rating: 4.2,
      reviewCount: 15,
      isActive: false,
      category: "Mode",
      image: "/placeholder.svg"
    }
  ];

  const [shops, setShops] = useState(initialShops);

  const handleDeleteShop = (id: number) => {
    if (window.confirm(t('common.warning'))) {
      setShops(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Store className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">{t('myShops.title')}</CardTitle>
                    <p className="text-muted-foreground">{t('myShops.subtitle')}</p>
                  </div>
                </div>
                {shops.length < 2 && (
                  <Button asChild>
                    <Link to={getLocalizedPath('/creer-boutique')}>
                      <Plus className="mr-2 h-4 w-4" />
                      {t('myShops.createShop')}
                    </Link>
                  </Button>
                )}
              </div>
            </CardHeader>
          </Card>

          {/* Shops List */}
          {shops.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Store className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('myShops.noShops')}</h3>
                <p className="text-muted-foreground mb-6">{t('myShops.noShopsDescription')}</p>
                <Button asChild>
                  <Link to={getLocalizedPath('/creer-boutique')}>
                    <Plus className="mr-2 h-4 w-4" />
                    {t('myShops.createFirstShop')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shops.map((shop) => (
                <Card key={shop.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{shop.name}</h3>
                          <Badge variant={shop.isActive ? "default" : "secondary"}>
                            {shop.isActive ? t('myShops.active') : t('common.inactive')}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{shop.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {shop.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {shop.rating} ({shop.reviewCount})
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{shop.category}</Badge>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={getLocalizedPath(`/shop/${shop.id}`)}>
                            {t('common.view')}
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={getLocalizedPath(`/creer-boutique?edit=${shop.id}`)}>
                            {t('common.edit')}
                          </Link>
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteShop(shop.id)}>
                          <Trash className="h-4 w-4 mr-2" />
                          {t('common.delete')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MesBoutiques;