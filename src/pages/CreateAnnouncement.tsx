import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';
import AnnouncementForm from '@/components/announcements/AnnouncementForm';

const CreateAnnouncement: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/mes-annonces', { 
      state: { 
        message: 'Votre annonce a été publiée avec succès !',
        type: 'success' 
      }
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">Déposer une annonce</CardTitle>
                  <CardDescription className="text-lg">
                    Vendez facilement vos produits sur Aladdin
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Conseils pour une annonce réussie :
                </h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Utilisez un titre clair et précis</li>
                  <li>• Ajoutez plusieurs photos de qualité</li>
                  <li>• Décrivez l'état du produit honnêtement</li>
                  <li>• Indiquez un prix juste et réaliste</li>
                  <li>• Précisez votre localisation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire de création */}
          <AnnouncementForm
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />

          {/* Aide et support */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Besoin d'aide ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Si vous rencontrez des difficultés pour créer votre annonce, 
                consultez notre guide ou contactez notre support.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => navigate('/aide')}>
                  Guide d'utilisation
                </Button>
                <Button variant="outline" onClick={() => navigate('/contact')}>
                  Contacter le support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateAnnouncement;