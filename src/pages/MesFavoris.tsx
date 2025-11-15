
import { useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Search, Eye, MessageCircle, Share2, Trash2 } from 'lucide-react';

const MesFavoris = () => {
  const { t } = useSafeI18nWithRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const mockFavorites = [
    {
      id: 1,
      title: 'MacBook Pro M2 16" 512GB',
      price: '280,000',
      category: 'Informatique',
      location: 'Alger',
      isUrgent: false,
      isPro: true,
      createdAt: '2024-12-10',
      image: '/lovable-uploads/119f4096-7bd8-4612-bffd-c0676cb558c1.png'
    },
    {
      id: 2,
      title: 'Villa moderne avec piscine',
      price: '45,000,000',
      category: 'Immobilier',
      location: 'Oran',
      isUrgent: true,
      isPro: false,
      createdAt: '2024-12-08',
      image: '/lovable-uploads/1270e6dd-ef50-4340-9cec-0a167be03f89.png'
    },
    {
      id: 3,
      title: 'BMW X5 2020 - État impeccable',
      price: '8,500,000',
      category: 'Véhicules',
      location: 'Constantine',
      isUrgent: false,
      isPro: true,
      createdAt: '2024-12-05',
      image: '/lovable-uploads/124ee59d-4bdf-4b57-9981-92b85f280145.png'
    },
    {
      id: 4,
      title: 'Ensemble de meubles salon moderne',
      price: '125,000',
      category: 'Meubles',
      location: 'Blida',
      isUrgent: false,
      isPro: false,
      createdAt: '2024-12-01',
      image: '/lovable-uploads/13e16fff-681a-47a4-b9f7-63f22b75d017.png'
    }
  ];

  const filteredFavorites = mockFavorites.filter(favorite =>
    favorite.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    favorite.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    favorite.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveFavorite = (id: number) => {
    console.log('Removing favorite:', id);
  };

  const FavoriteCard = ({ favorite }: { favorite: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative">
            <img
              src={favorite.image}
              alt={favorite.title}
              className="w-32 h-32 object-cover rounded-lg"
            />
            {favorite.isUrgent && (
              <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                {t('mesFavoris.urgent')}
              </Badge>
            )}
            {favorite.isPro && (
              <Badge className="absolute top-2 right-2 bg-blue-500 text-white text-xs">
                {t('mesFavoris.pro')}
              </Badge>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg line-clamp-2">{favorite.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveFavorite(favorite.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">{favorite.price} DA</p>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">{favorite.category}</Badge>
              <span className="text-sm text-gray-600">{favorite.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {t('mesFavoris.addedOn')} {new Date(favorite.createdAt).toLocaleDateString()}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {t('mesFavoris.view')}
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {t('mesFavoris.contact')}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle className="text-2xl">{t('mesFavoris.title')}</CardTitle>
                  <CardDescription>{t('mesFavoris.subtitle')}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t('mesFavoris.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  {filteredFavorites.length} {t('mesFavoris.results')}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {filteredFavorites.length > 0 ? (
              filteredFavorites.map(favorite => (
                <FavoriteCard key={favorite.id} favorite={favorite} />
              ))
            ) : (
              <div className="text-center py-16">
                <Heart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">{t('mesFavoris.noFavorites')}</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {t('mesFavoris.noFavoritesDesc')}
                </p>
                <Button>
                  {t('mesFavoris.browseAds')}
                </Button>
              </div>
            )}
          </div>

          {filteredFavorites.length > 0 && (
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">
                    {t('mesFavoris.tip')}
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    {t('mesFavoris.tipDesc')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MesFavoris;
