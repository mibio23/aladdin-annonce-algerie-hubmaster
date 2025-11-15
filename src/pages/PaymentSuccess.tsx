import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Eye, MessageCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [announcementDetails, setAnnouncementDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const sessionId = searchParams.get('session_id');
  const announcementId = searchParams.get('announcement_id');
  const paymentType = searchParams.get('payment_type');

  useEffect(() => {
    const fetchAnnouncementDetails = async () => {
      if (!announcementId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('advertising_banners')
          .select('*')
          .eq('id', announcementId)
          .single();

        if (error) {
          console.error('Error fetching announcement:', error);
          toast({
            title: "Erreur",
            description: "Impossible de récupérer les détails de l'annonce",
            variant: "destructive",
          });
        } else {
          setAnnouncementDetails(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncementDetails();
  }, [announcementId, toast]);

  const getPaymentTypeInfo = () => {
    switch (paymentType) {
      case 'featured':
        return {
          title: 'Mise à la Une',
          description: 'Votre annonce apparaîtra en tête des résultats de recherche',
          icon: <Star className="h-6 w-6 text-yellow-500" />,
          badge: <Badge variant="default" className="bg-yellow-500">À la Une</Badge>
        };
      case 'urgent':
        return {
          title: 'Marquage Urgent',
          description: 'Votre annonce sera marquée comme urgente avec une priorité élevée',
          icon: <ArrowRight className="h-6 w-6 text-red-500" />,
          badge: <Badge variant="destructive">Urgent</Badge>
        };
      default:
        return {
          title: 'Promotion',
          description: 'Votre annonce a été promue avec succès',
          icon: <CheckCircle className="h-6 w-6 text-green-500" />,
          badge: <Badge variant="default">Promue</Badge>
        };
    }
  };

  const paymentInfo = getPaymentTypeInfo();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Paiement Confirmé !
          </h1>
          <p className="text-lg text-muted-foreground">
            Votre transaction a été traitée avec succès
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Payment Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {paymentInfo.icon}
                {paymentInfo.title}
              </CardTitle>
              <CardDescription>
                {paymentInfo.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessionId && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    ID de Transaction
                  </label>
                  <p className="text-sm font-mono bg-muted p-2 rounded">
                    {sessionId}
                  </p>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Statut :</span>
                {paymentInfo.badge}
              </div>

              <div className="pt-4 space-y-2">
                <Button asChild className="w-full">
                  <Link to="/my-announcements">
                    <Eye className="h-4 w-4 mr-2" />
                    Voir mes annonces
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="w-full">
                  <Link to="/chat">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Gérer les messages
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Announcement Details */}
          {announcementDetails && (
            <Card>
              <CardHeader>
                <CardTitle>Détails de l'annonce</CardTitle>
                <CardDescription>
                  Annonce promue avec succès
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    {announcementDetails.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {announcementDetails.description}
                  </p>
                </div>

                {announcementDetails.price && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Prix :</span>
                    <span className="text-lg font-bold text-primary">
                      {announcementDetails.price} {announcementDetails.currency}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Localisation :</span>
                  <span className="text-sm">
                    {announcementDetails.location}, {announcementDetails.wilaya}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {announcementDetails.is_featured && (
                    <Badge variant="default" className="bg-yellow-500">
                      À la Une
                    </Badge>
                  )}
                  {announcementDetails.is_urgent && (
                    <Badge variant="destructive">
                      Urgent
                    </Badge>
                  )}
                  {announcementDetails.is_active && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Active
                    </Badge>
                  )}
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full"
                >
                  <Link to={`/announcement/${announcementDetails.id}`}>
                    Voir l'annonce publique
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Next Steps */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Prochaines étapes</CardTitle>
            <CardDescription>
              Optimisez davantage votre annonce pour de meilleurs résultats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Eye className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium mb-1">Surveillez les vues</h4>
                <p className="text-sm text-muted-foreground">
                  Consultez les statistiques de votre annonce
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium mb-1">Répondez rapidement</h4>
                <p className="text-sm text-muted-foreground">
                  Restez réactif aux messages des acheteurs
                </p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium mb-1">Ajoutez des photos</h4>
                <p className="text-sm text-muted-foreground">
                  Plus de photos = plus d'intérêt
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            Retour à l'accueil
          </Button>
          
          <Button asChild>
            <Link to="/deposer-annonce">
              Créer une nouvelle annonce
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;