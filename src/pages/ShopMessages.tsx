import React, { useState, useEffect } from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MessageCircle, 
  Store, 
  Clock, 
  User, 
  Mail, 
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Reply,
  Edit,
  Eye,
  EyeOff
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

type Shop = Database['public']['Tables']['shops']['Row'];

const ShopMessages = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    if (user) {
      fetchShops();
    }
  }, [user, filter]);

  const fetchShops = async () => {
    if (!user) return;

    setLoading(true);
    try {
      let query = supabase
        .from('shops')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (filter === 'active') {
        query = query.eq('is_active', true);
      } else if (filter === 'inactive') {
        query = query.eq('is_active', false);
      }

      const { data, error } = await query;

      if (error) throw error;
      setShops((data as Shop[]) || []);
    } catch (error) {
      console.error('Error fetching shops:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger vos boutiques",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleActiveStatus = async (shopId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('shops')
        .update({ is_active: !currentStatus })
        .eq('id', shopId);

      if (error) throw error;

      setShops(prev => 
        prev.map(shop => 
          shop.id === shopId ? { ...shop, is_active: !currentStatus } : shop
        )
      );

      if (selectedShop?.id === shopId) {
        setSelectedShop(prev => prev ? { ...prev, is_active: !currentStatus } : null);
      }

      toast({
        title: "Statut mis à jour",
        description: `La boutique a été ${!currentStatus ? 'activée' : 'désactivée'} avec succès`,
      });
    } catch (error) {
      console.error('Error updating shop status:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut de la boutique",
        variant: "destructive",
      });
    }
  };

  const activeCount = shops.filter(shop => shop.is_active || false).length;

  if (!user) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Store className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Connexion requise</h2>
            <p className="text-muted-foreground">
              Vous devez être connecté pour consulter vos boutiques
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Store className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Mes boutiques</CardTitle>
                    <CardDescription>
                      Gérez vos boutiques et consultez les messages des clients
                    </CardDescription>
                  </div>
                </div>
                {activeCount > 0 && (
                  <Badge variant="default" className="text-sm">
                    {activeCount} active{activeCount > 1 ? 's' : ''}
                  </Badge>
                )}
              </div>
            </CardHeader>
          </Card>

          {/* Filtres */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Toutes les boutiques
                </Button>
                <Button
                  variant={filter === 'active' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('active')}
                >
                  Actives {activeCount > 0 && `(${activeCount})`}
                </Button>
                <Button
                  variant={filter === 'inactive' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('inactive')}
                >
                  Inactives
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Liste des boutiques */}
            <div className="lg:col-span-1">
              <Card className="h-[600px]">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {filter === 'active' ? 'Boutiques actives' : 
                     filter === 'inactive' ? 'Boutiques inactives' : 
                     'Toutes les boutiques'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] overflow-y-auto">
                    {loading ? (
                      <div className="flex items-center justify-center h-32">
                        <div className="text-sm text-muted-foreground">Chargement...</div>
                      </div>
                    ) : shops.length === 0 ? (
                      <div className="flex items-center justify-center h-32">
                        <div className="text-center">
                          <Store className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                          <div className="text-sm text-muted-foreground">
                            {filter === 'active' ? 'Aucune boutique active' : 
                             filter === 'inactive' ? 'Aucune boutique inactive' : 
                             'Aucune boutique'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {shops.map((shop) => (
                          <div
                            key={shop.id}
                            className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                              selectedShop?.id === shop.id ? 'bg-muted/50' : ''
                             } ${shop.is_active ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-300'}`}
                            onClick={() => setSelectedShop(shop)}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <Store className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium text-sm truncate">
                                    {shop.name}
                                  </span>
                                  {shop.is_active ? (
                                    <Badge variant="default" className="text-xs">
                                      <Eye className="h-3 w-3 mr-1" />
                                      Active
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary" className="text-xs">
                                      <EyeOff className="h-3 w-3 mr-1" />
                                      Inactive
                                    </Badge>
                                  )}
                                </div>
                                {shop.category_ids && shop.category_ids.length > 0 && (
                                  <div className="text-xs text-muted-foreground mb-1">
                                    {shop.category_ids.length} catégorie{shop.category_ids.length > 1 ? 's' : ''}
                                  </div>
                                )}
                                <div className="text-sm text-muted-foreground truncate">
                                  {shop.description}
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(new Date(shop.created_at), { 
                                      addSuffix: true, 
                                      locale: fr 
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Détails de la boutique */}
            <div className="lg:col-span-2">
              {selectedShop ? (
                <Card className="h-[600px]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Store className="h-5 w-5 text-primary" />
                          {selectedShop.name}
                        </CardTitle>
                        <CardDescription>
                          Boutique créée le {new Date(selectedShop.created_at).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedShop.is_active ? "destructive" : "default"}
                          size="sm"
                          onClick={() => toggleActiveStatus(selectedShop.id, selectedShop.is_active)}
                        >
                          {selectedShop.is_active ? (
                            <>
                              <EyeOff className="h-4 w-4 mr-1" />
                              Désactiver
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 mr-1" />
                              Activer
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`/shop/${selectedShop.id}`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Voir
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Nom:</span>
                        <span className="text-sm">{selectedShop.name}</span>
                      </div>
                      {selectedShop.category_ids && selectedShop.category_ids.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Catégories:</span>
                          <span className="text-sm">{selectedShop.category_ids.length} sélectionnée{selectedShop.category_ids.length > 1 ? 's' : ''}</span>
                        </div>
                      )}
                      {selectedShop.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Email:</span>
                          <a
                            href={`mailto:${selectedShop.email}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {selectedShop.email}
                          </a>
                        </div>
                      )}
                      {selectedShop.phone_numbers && selectedShop.phone_numbers.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Téléphone:</span>
                          <a
                            href={`tel:${selectedShop.phone_numbers[0]}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {selectedShop.phone_numbers[0]}
                          </a>
                        </div>
                      )}
                      {selectedShop.address && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Adresse:</span>
                          <span className="text-sm">{selectedShop.address}</span>
                        </div>
                      )}
                      {selectedShop.wilaya && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Wilaya:</span>
                          <span className="text-sm">{selectedShop.wilaya}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Créée le:</span>
                        <span className="text-sm">
                          {new Date(selectedShop.created_at).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {selectedShop.description && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Description:</h4>
                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="text-sm whitespace-pre-wrap">
                            {selectedShop.description}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 pt-4">
                      {selectedShop.is_active ? (
                        <Badge variant="default" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Boutique active
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Boutique inactive
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => window.open(`/shop/${selectedShop.id}`)}
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Voir la boutique
                      </Button>
                      {selectedShop.email && (
                        <Button
                          variant="outline"
                          onClick={() => window.open(`mailto:${selectedShop.email}`)}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Contacter
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        onClick={() => window.open(`/creer-boutique`)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-[600px] flex items-center justify-center">
                  <CardContent className="text-center">
                    <Store className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">
                      Sélectionnez une boutique
                    </h3>
                    <p className="text-muted-foreground">
                      Choisissez une boutique dans la liste pour voir les détails
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMessages;