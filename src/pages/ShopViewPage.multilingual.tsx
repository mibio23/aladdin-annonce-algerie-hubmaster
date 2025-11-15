import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, MapPin, Phone, Mail, Globe, Share2, Heart, MessageCircle, Star, Store, Video, BadgeCheck, Calendar, Languages } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import ShopImageGallery from '@/components/shop/ShopImageGallery';
import ContactModal from '@/components/shop/ContactModal';
import MultilingualText from '@/components/ui/MultilingualText';
import { detectLanguages, formatMultilingualText, getTextDirection } from '@/lib/utils/textDirection';
import { safeStringify } from '@/utils/safeStringify';

interface Shop {
  id: string;
  name: string;
  description: string;
  wilaya: string;
  phoneNumbers: string[];
  logoUrl: string;
  productImageUrls: string[];
  isOnline: boolean;
  hasVideoStory: boolean;
  isVerified?: boolean;
  detectedLanguages?: string[];
}

const ShopViewPage: React.FC = () => {
  const [shop, setShop] = useState<Shop | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { getLocalizedPath } = useLanguageNavigation();
  const { t } = useSafeI18nWithRouter();

  // Effet pour charger les données de la boutique
  useEffect(() => {
    const fetchShop = async () => {
      try {
        setLoading(true);
        
        // Simulation de chargement - en production, utiliser une API
        const allShops = JSON.parse(localStorage.getItem('allShops') || '[]');
        const foundShop = allShops.find((s: Shop) => s.id === id);
        
        if (foundShop) {
          setShop(foundShop);
        } else {
          // Boutique non trouvée, utiliser les données mock
          const { shops } = await import('@/data/shopsData');
          const mockShop = shops.find(s => s.id === id);
          setShop(mockShop || null);
        }
      } catch (error) {
        console.error('Error fetching shop:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les informations de la boutique",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchShop();
    }
  }, [id, toast]);

  // Vérifier si la boutique est dans les favoris
  useEffect(() => {
    if (shop) {
      const favorites = JSON.parse(localStorage.getItem('favoriteShops') || '[]');
      setIsFavorite(favorites.includes(shop.id));
    }
  }, [shop]);

  // Gestion des favoris
  const toggleFavorite = () => {
    if (!shop) return;
    
    const favorites = JSON.parse(localStorage.getItem('favoriteShops') || '[]');
    
    if (isFavorite) {
      // Retirer des favoris
      const newFavorites = favorites.filter((id: string) => id !== shop.id);
      localStorage.setItem('favoriteShops', safeStringify(newFavorites));
      setIsFavorite(false);
      toast({
        title: "Favoris",
        description: "La boutique a été retirée de vos favoris",
      });
    } else {
      // Ajouter aux favoris
      favorites.push(shop.id);
      localStorage.setItem('favoriteShops', safeStringify(favorites));
      setIsFavorite(true);
      toast({
        title: "Favoris",
        description: "La boutique a été ajoutée à vos favoris",
      });
    }
  };

  // Partage de la boutique
  const handleShare = async () => {
    if (!shop) return;
    
    const shopUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shop.name,
          text: shop.description,
          url: shopUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(shopUrl);
      toast({
        title: "Lien copié",
        description: "Le lien de la boutique a été copié dans votre presse-papiers",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!shop) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <Card>
            <CardContent className="text-center py-12">
              <Store className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('shop.viewShop.shopNotFound')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('shop.viewShop.shopNotFoundText')}
              </p>
              <Button asChild>
                <Link to={getLocalizedPath('/')}>{t('shop.viewShop.backButton')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Détecter les langues si elles ne sont pas déjà stockées
  const detectedLanguages = shop.detectedLanguages || detectLanguages(shop.name + ' ' + shop.description);
  const textDirection = getTextDirection(shop.name);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation de retour */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to={getLocalizedPath('/')} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('shop.viewShop.backButton')}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* En-tête de la boutique */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={shop.logoUrl || "/placeholder.svg"}
                      alt={`Logo ${shop.name}`}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2" dir={textDirection} style={{ direction: textDirection, textAlign: textDirection === 'rtl' ? 'right' : 'left' }}>
                        <MultilingualText text={shop.name} className="block" />
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        {shop.isOnline && (
                          <Badge variant="default" className="bg-green-500">
                            {t('shop.viewShop.online')}
                          </Badge>
                        )}
                        {shop.hasVideoStory && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Video className="h-3 w-3" />
                            {t('shop.viewShop.videoStory')}
                          </Badge>
                        )}
                        {shop.isVerified && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <BadgeCheck className="h-3 w-3" />
                            {t('shop.viewShop.verified')}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{shop.wilaya}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{t('shop.viewShop.memberSince')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Boutons d'action */}
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleFavorite}
                      className={isFavorite ? "text-red-600 border-red-600" : ""}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                      {isFavorite ? t('shop.viewShop.removeFromFavorites') : t('shop.viewShop.addToFavorites')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      {t('shop.viewShop.share')}
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Indicateur de langues détectées */}
            {detectedLanguages.length > 0 && (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <Languages className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      Langues utilisées : {detectedLanguages.join(', ')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Galerie d'images */}
            <Card>
              <CardHeader>
                <CardTitle>{t('shop.viewShop.productGallery')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ShopImageGallery
                  images={shop.productImageUrls.length > 0 ? shop.productImageUrls : [shop.logoUrl]}
                  shopName={shop.name}
                />
              </CardContent>
            </Card>

            {/* Onglets d'informations */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">{t('shop.viewShop.about')}</TabsTrigger>
                <TabsTrigger value="contact">{t('shop.viewShop.contact')}</TabsTrigger>
                <TabsTrigger value="reviews">{t('shop.viewShop.reviews')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('shop.viewShop.description')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MultilingualText 
                      text={shop.description} 
                      className="text-muted-foreground leading-relaxed mb-6"
                    />
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg">{t('shop.viewShop.generalInfo')}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-primary" />
                            <span>{t('shop.viewShop.type')}: {shop.isOnline ? t('shop.viewShop.onlineShop') : t('shop.viewShop.physicalShop')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{t('shop.viewShop.location')}: {shop.wilaya}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-primary" />
                            <span>{t('shop.viewShop.status')}: {shop.isVerified ? t('shop.viewShop.verified') : 'Non vérifiée'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg">{t('shop.viewShop.services')}</h3>
                        <div className="space-y-2 text-sm">
                          {shop.isOnline && (
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <span>{t('shop.viewShop.onlineSales')}</span>
                            </div>
                          )}
                          {shop.hasVideoStory && (
                            <div className="flex items-center gap-2">
                              <Video className="h-4 w-4 text-primary" />
                              <span>{t('shop.viewShop.videoStoryAvailable')}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{t('shop.viewShop.phoneSupport')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('shop.viewShop.contactInfo')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {shop.phoneNumbers.map((phone, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <span>{phone}</span>
                          <Button variant="outline" size="sm" asChild>
                            <a href={`tel:${phone}`}>{t('shop.viewShop.call')}</a>
                          </Button>
                        </div>
                      ))}
                      
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>contact@{shop.name.toLowerCase().replace(/s/g, '')}.dz</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>www.{shop.name.toLowerCase().replace(/s/g, '')}.dz</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{shop.wilaya}, Algérie</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button onClick={() => setShowContactModal(true)} className="w-full">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t('shop.viewShop.contactShop')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('shop.viewShop.reviews')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Star className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">{t('shop.viewShop.noReviews')}</h3>
                      <p className="text-muted-foreground">
                        {t('shop.viewShop.noReviewsText')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Colonne latérale */}
          <div className="lg:col-span-1 space-y-6">
            {/* Carte de profil rapide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('shop.viewShop.shopProfile')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <img
                      src={shop.logoUrl || "/placeholder.svg"}
                      alt={`Logo ${shop.name}`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  
                  <div className="text-center">
                    <MultilingualText text={shop.name} className="font-semibold text-lg" as="h3" />
                    <p className="text-sm text-muted-foreground">{shop.wilaya}</p>
                  </div>
                  
                  <div className="flex justify-center gap-2">
                    {shop.isOnline && (
                      <Badge variant="default" className="bg-green-500">
                        {t('shop.viewShop.online')}
                      </Badge>
                    )}
                    {shop.isVerified && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <BadgeCheck className="h-3 w-3" />
                        {t('shop.viewShop.verified')}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Button onClick={() => setShowContactModal(true)} className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t('shop.viewShop.contactShop')}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={toggleFavorite}
                      className={`w-full ${isFavorite ? "text-red-600 border-red-600" : ""}`}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                      {isFavorite ? t('shop.viewShop.removeFromFavorites') : t('shop.viewShop.addToFavorites')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boutiques similaires */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t('shop.viewShop.similarShops')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Simulation de boutiques similaires */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <img
                        src={`https://picsum.photos/seed/shop${i}/50/50.jpg`}
                        alt={`Boutique ${i}`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">Boutique Similaire {i}</h4>
                        <p className="text-xs text-muted-foreground">Alger</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de contact */}
      {showContactModal && (
        <ContactModal
          shop={shop}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </div>
  );
};

export default ShopViewPage;