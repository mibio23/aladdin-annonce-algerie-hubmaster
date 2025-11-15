import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, MessageCircle, ArrowLeft, Star, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReviewsSection from '@/components/reviews/ReviewsSection';

interface PublicProfileData {
  id: string;
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  created_at: string;
}

const PublicProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<PublicProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const fetchProfile = async () => {
    if (!userId) return;
    
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('id, display_name, bio, avatar_url, created_at')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        setProfileData({
          id: userId,
          display_name: 'Utilisateur inconnu',
          bio: undefined,
          avatar_url: undefined,
          created_at: new Date().toISOString()
        });
      } else {
        setProfileData(profile as any);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger ce profil",
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStartConversation = async () => {
    if (!currentUser || !profileData) {
      toast({
        title: "Connexion requise",
        description: "Vous devez être connecté pour envoyer un message",
        variant: 'destructive',
      });
      return;
    }

    try {
      // Créer une nouvelle conversation
      const { data: newConversation, error } = await supabase
        .from('conversations')
        .insert({
          user_id: currentUser.id,
          title: `Conversation avec ${profileData?.display_name || 'Utilisateur'}`,
          status: 'active'
        })
        .select()
        .single();

      if (error) throw error;

      // Rediriger vers la nouvelle conversation
      window.location.href = `/messages?conversation=${newConversation.id}`;
    } catch (error) {
      console.error('Error starting conversation:', error);
      toast({
        title: "Erreur",
        description: "Impossible de démarrer la conversation",
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Profil non trouvé</h2>
          <p className="text-muted-foreground mb-6">
            Ce profil n'existe pas ou a été supprimé.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const userName = profileData.display_name || 'Utilisateur';
  const userInitials = userName.charAt(0).toUpperCase();
  const memberSince = new Date(profileData.created_at);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </div>

          {/* Profil principal */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileData.avatar_url} alt={userName} />
                  <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{userName}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Membre depuis {memberSince.toLocaleDateString('fr-FR', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <Badge variant="secondary">
                      <Star className="h-3 w-3 mr-1" />
                      Utilisateur vérifié
                    </Badge>
                  </div>
                  
                  {currentUser && currentUser.id !== profileData.id && (
                    <div className="flex gap-3">
                      <Button onClick={handleStartConversation}>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Envoyer un message
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          {profileData.bio && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  À propos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{profileData.bio}</p>
              </CardContent>
            </Card>
          )}

          {/* Section Avis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Avis et évaluations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReviewsSection 
                reviewedUserId={profileData.id}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;