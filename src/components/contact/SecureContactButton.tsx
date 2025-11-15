import React, { useState } from 'react';
import { Phone, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSecureContact } from '@/hooks/useSecureContact';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface SecureContactButtonProps {
  announcementId: string;
  phoneNumberMasked?: string | null;
  requiresAuthForContact: boolean;
  className?: string;
}

const SecureContactButton: React.FC<SecureContactButtonProps> = ({
  announcementId,
  phoneNumberMasked,
  requiresAuthForContact,
  className = ""
}) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [revealedPhone, setRevealedPhone] = useState<string | null>(null);
  const { requestContactAccess, loading } = useSecureContact();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContactClick = async () => {
    if (!requiresAuthForContact && phoneNumberMasked) {
      // Direct call for non-protected numbers
      window.location.href = `tel:${phoneNumberMasked}`;
      return;
    }

    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Vous devez vous connecter pour accéder aux informations de contact.",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    // Request contact access for authenticated users
    const result = await requestContactAccess(announcementId);
    
    if (result.success && result.phoneNumber) {
      setRevealedPhone(result.phoneNumber);
      setShowContactModal(true);
    } else {
      toast({
        title: "Accès refusé",
        description: result.message || "Impossible d'accéder aux informations de contact.",
        variant: "destructive"
      });
    }
  };

  const handleCallNow = () => {
    if (revealedPhone) {
      window.location.href = `tel:${revealedPhone}`;
      setShowContactModal(false);
    }
  };

  return (
    <>
      <Button
        className={`w-full text-lg py-3 ${className}`}
        onClick={handleContactClick}
        disabled={loading}
      >
        <Phone className="h-5 w-5 mr-2" />
        {loading ? 'Chargement...' : 'Contacter le vendeur'}
      </Button>

      {phoneNumberMasked && (
        <div className="text-center text-sm text-muted-foreground mt-2 flex items-center justify-center gap-2">
          {requiresAuthForContact && !user && (
            <Lock className="h-4 w-4 text-amber-500" />
          )}
          <span>{phoneNumberMasked}</span>
          {requiresAuthForContact && !user && (
            <span className="text-amber-600 font-medium">
              (Connexion requise)
            </span>
          )}
        </div>
      )}

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Informations de contact
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <Alert>
              <Phone className="h-4 w-4" />
              <AlertDescription>
                Numéro de téléphone révélé de manière sécurisée
              </AlertDescription>
            </Alert>

            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                Numéro de téléphone du vendeur :
              </p>
              <p className="text-xl font-bold text-primary mb-4">
                {revealedPhone}
              </p>
              
              <Button onClick={handleCallNow} className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Appeler maintenant
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              <p>
                🔒 Cet accès est sécurisé et audité pour votre protection et celle du vendeur.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecureContactButton;