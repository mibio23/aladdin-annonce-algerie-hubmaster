
import { useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, Plus, Search, Eye, Edit, Trash2, MoreHorizontal, Star, Zap } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import PromoteAnnouncement from '@/components/announcements/PromoteAnnouncement';

const MesAnnonces = () => {
  const { t } = useSafeI18nWithRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const mockAds = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max 256GB',
      price: '150,000',
      category: 'Téléphonie',
      status: 'active',
      views: 127,
      createdAt: '2024-12-15',
      image: '/lovable-uploads/119f4096-7bd8-4612-bffd-c0676cb558c1.png',
      isFeatured: false,
      isUrgent: false
    },
    {
      id: 2,
      title: 'Voiture Toyota Corolla 2019',
      price: '2,500,000',
      category: 'Véhicules',
      status: 'pending',
      views: 89,
      createdAt: '2024-12-10',
      image: '/lovable-uploads/124ee59d-4bdf-4b57-9981-92b85f280145.png',
      isFeatured: true,
      isUrgent: false
    },
    {
      id: 3,
      title: 'Appartement F3 Alger',
      price: '15,000,000',
      category: 'Immobilier',
      status: 'sold',
      views: 234,
      createdAt: '2024-11-25',
      image: '/lovable-uploads/1270e6dd-ef50-4340-9cec-0a167be03f89.png',
      isFeatured: false,
      isUrgent: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="default">{t('mesAnnonces.active')}</Badge>;
      case 'pending':
        return <Badge variant="secondary">{t('mesAnnonces.pending')}</Badge>;
      case 'sold':
        return <Badge variant="outline">{t('mesAnnonces.sold')}</Badge>;
      default:
        return null;
    }
  };

  const filteredAds = mockAds.filter(ad =>
    ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ad.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeAds = filteredAds.filter(ad => ad.status === 'active');
  const pendingAds = filteredAds.filter(ad => ad.status === 'pending');
  const soldAds = filteredAds.filter(ad => ad.status === 'sold');

  const AdCard = ({ ad }: { ad: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <img
            src={ad.image}
            alt={ad.title}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg">{ad.title}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    {t('mesAnnonces.view')}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    {t('mesAnnonces.edit')}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="h-4 w-4 mr-2" />
                    {t('mesAnnonces.delete')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-2xl font-bold text-primary mb-2">{ad.price} DA</p>
            <div className="flex items-center gap-2 mb-2">
              {getStatusBadge(ad.status)}
              <span className="text-sm text-gray-600">{ad.category}</span>
              {ad.isFeatured && (
                <Badge variant="default" className="bg-yellow-500">
                  <Star className="w-3 h-3 mr-1" />
                  À la Une
                </Badge>
              )}
              {ad.isUrgent && (
                <Badge variant="destructive">
                  <Zap className="w-3 h-3 mr-1" />
                  Urgent
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <span>{t('mesAnnonces.views')}: {ad.views}</span>
              <span>{t('mesAnnonces.publishedOn')} {new Date(ad.createdAt).toLocaleDateString()}</span>
            </div>
            
            {/* Promotion buttons for active ads */}
            {ad.status === 'active' && (
              <div className="mt-3 pt-3 border-t">
                <PromoteAnnouncement 
                  announcementId={ad.id.toString()}
                  currentStatus={{
                    isFeatured: ad.isFeatured,
                    isUrgent: ad.isUrgent
                  }}
                />
              </div>
            )}
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{t('mesAnnonces.title')}</CardTitle>
                  <CardDescription>{t('mesAnnonces.subtitle')}</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('mesAnnonces.newAd')}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder={t('mesAnnonces.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">
                {t('mesAnnonces.all')} ({filteredAds.length})
              </TabsTrigger>
              <TabsTrigger value="active">
                {t('mesAnnonces.active')} ({activeAds.length})
              </TabsTrigger>
              <TabsTrigger value="pending">
                {t('mesAnnonces.pending')} ({pendingAds.length})
              </TabsTrigger>
              <TabsTrigger value="sold">
                {t('mesAnnonces.sold')} ({soldAds.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {filteredAds.length > 0 ? (
                filteredAds.map(ad => <AdCard key={ad.id} ad={ad} />)
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">{t('mesAnnonces.noAds')}</h3>
                  <p className="text-gray-600 mb-4">{t('mesAnnonces.startSelling')}</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    {t('mesAnnonces.postFirstAd')}
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="active" className="space-y-4">
              {activeAds.length > 0 ? (
                activeAds.map(ad => <AdCard key={ad.id} ad={ad} />)
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">{t('mesAnnonces.noActiveAds')}</h3>
                  <p className="text-gray-600">{t('mesAnnonces.noActiveAdsDesc')}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              {pendingAds.length > 0 ? (
                pendingAds.map(ad => <AdCard key={ad.id} ad={ad} />)
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">{t('mesAnnonces.noPendingAds')}</h3>
                  <p className="text-gray-600">{t('mesAnnonces.noPendingAdsDesc')}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="sold" className="space-y-4">
              {soldAds.length > 0 ? (
                soldAds.map(ad => <AdCard key={ad.id} ad={ad} />)
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">{t('mesAnnonces.noSoldAds')}</h3>
                  <p className="text-gray-600">{t('mesAnnonces.noSoldAdsDesc')}</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MesAnnonces;
