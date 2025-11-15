import React, { useState, useEffect } from 'react';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  MessageCircle,
  Briefcase,
  Clock,
  User,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Edit,
  Eye,
  EyeOff
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

type JobOffer = Database['public']['Tables']['advertising_banners']['Row'] & {
  type?: string;
};

const JobOfferMessages = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [offers, setOffers] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOffer, setSelectedOffer] = useState<JobOffer | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    if (user) {
      fetchOffers();
    }
  }, [user, filter]);

  const fetchOffers = async () => {
    if (!user) return;

    setLoading(true);
    try {
      let query = supabase
        .from('advertising_banners')
        .select('*')
        .eq('created_by', user.id)
        .order('created_at', { ascending: false });

      if (filter === 'active') {
        query = query.eq('is_active', true);
      } else if (filter === 'inactive') {
        query = query.eq('is_active', false);
      }

      const { data, error } = await query;

      if (error) throw error;
      setOffers((data as JobOffer[]) || []);
    } catch (error) {
      console.error('Error fetching job offers:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les offres de métiers",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleActiveStatus = async (offerId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('advertising_banners')
        .update({ is_active: !currentStatus })
        .eq('id', offerId);

      if (error) throw error;

      setOffers(prev =>
        prev.map(offer =>
          offer.id === offerId ? { ...offer, is_active: !currentStatus } : offer
        )
      );

      if (selectedOffer?.id === offerId) {
        setSelectedOffer(prev => prev ? { ...prev, is_active: !currentStatus } : null);
      }

      toast({
        title: "Statut mis à jour",
        description: `L'offre a été ${!currentStatus ? 'activée' : 'désactivée'} avec succès`,
      });
    } catch (error) {
      console.error('Error updating offer status:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut de l'offre",
        variant: "destructive",
      });
    }
  };

  const activeCount = offers.filter(offer => offer.is_active).length;

  if (!user) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Connexion requise</h2>
            <p className="text-muted-foreground">
              Vous devez être connecté pour consulter vos messages
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
                  <Briefcase className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Mes offres de métiers</CardTitle>
                    <CardDescription>
                      Gérez vos offres de métiers et consultez les contacts reçus
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
                  Toutes les offres
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
            {/* Liste des offres */}
            <div className="lg:col-span-1">
              <Card className="h-[600px]">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {filter === 'active' ? 'Offres actives' :
                     filter === 'inactive' ? 'Offres inactives' :
                     'Toutes les offres'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] overflow-y-auto">
                    {loading ? (
                      <div className="flex items-center justify-center h-32">
                        <div className="text-sm text-muted-foreground">Chargement...</div>
                      </div>
                    ) : offers.length === 0 ? (
                      <div className="flex items-center justify-center h-32">
                        <div className="text-center">
                          <Briefcase className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                          <div className="text-sm text-muted-foreground">
                            {filter === 'active' ? 'Aucune offre active' :
                             filter === 'inactive' ? 'Aucune offre inactive' :
                             'Aucune offre'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="divide-y">
                        {offers.map((offer) => (
                          <div
                            key={offer.id}
                            className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                              selectedOffer?.id === offer.id ? 'bg-muted/50' : ''
                            } ${offer.is_active ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-300'}`}
                            onClick={() => setSelectedOffer(offer)}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium text-sm truncate">
                                    {offer.title}
                                  </span>
                                  {offer.is_active ? (
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
                                <div className="text-xs text-muted-foreground mb-1">
                                  {offer.button_text}
                                </div>
                                <div className="text-sm text-muted-foreground truncate">
                                  {offer.description}
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(new Date(offer.created_at), {
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

            {/* Détails de l'offre */}
            <div className="lg:col-span-2">
              {selectedOffer ? (
                <Card className="h-[600px]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {selectedOffer.title}
                        </CardTitle>
                        <CardDescription>
                          Offre de métier créée le {new Date(selectedOffer.created_at).toLocaleDateString('fr-FR')}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={selectedOffer.is_active ? "destructive" : "default"}
                          size="sm"
                          onClick={() => toggleActiveStatus(selectedOffer.id, selectedOffer.is_active)}
                        >
                          {selectedOffer.is_active ? (
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
                          onClick={() => window.open(`tel:${selectedOffer.link_url}`)}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Titre:</span>
                        <span className="text-sm">{selectedOffer.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Contact:</span>
                        <a
                          href={`tel:${selectedOffer.link_url}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {selectedOffer.link_url}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Créée le:</span>
                        <span className="text-sm">
                          {new Date(selectedOffer.created_at).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      {selectedOffer.end_at && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Expire le:</span>
                          <span className="text-sm">
                            {new Date(selectedOffer.end_at).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div>
                      <h4 className="text-sm font-medium mb-2">Description:</h4>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm whitespace-pre-wrap">
                          {selectedOffer.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-4">
                      {selectedOffer.is_active ? (
                        <Badge variant="default" className="text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Offre active
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Offre inactive
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => window.open(`tel:${selectedOffer.link_url}`)}
                        className="flex-1"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Contacter par téléphone
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open(`/deposer-offre-metier`)}
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
                    <Briefcase className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold mb-2">
                      Sélectionnez une offre
                    </h3>
                    <p className="text-muted-foreground">
                      Choisissez une offre dans la liste pour voir les détails
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

export default JobOfferMessages;