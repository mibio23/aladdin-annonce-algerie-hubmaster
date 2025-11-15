import React, { useState, useEffect } from 'react';
import { Star, Zap, CreditCard, MapPin, Wallet, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface PromoteAnnouncementProps {
  announcementId: string;
  currentStatus: {
    isFeatured: boolean;
    isUrgent: boolean;
  };
}

interface PaymentSystem {
  stripe: boolean;
  algerian: boolean;
  paypal: boolean;
  card: boolean;
}

const PromoteAnnouncement: React.FC<PromoteAnnouncementProps> = ({
  announcementId,
  currentStatus
}) => {
  const { toast } = useToast();
  const [availableSystems, setAvailableSystems] = useState<PaymentSystem>({
    stripe: false,
    algerian: false,
    paypal: false,
    card: false
  });
  const [selectedSystem, setSelectedSystem] = useState<'stripe' | 'algerian' | 'paypal' | 'card'>('stripe');
  const [selectedCard, setSelectedCard] = useState<'eddahabia' | 'cib'>('eddahabia');
  const [selectedCardType, setSelectedCardType] = useState<'visa' | 'mastercard'>('visa');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAvailablePaymentSystems();
  }, []);

  const checkAvailablePaymentSystems = async () => {
    try {
      setLoading(true);
      
      // Check Stripe payments
      const { data: stripeData } = await supabase
        .from('site_settings')
        .select('setting_value, is_active')
        .eq('setting_key', 'stripe_payments')
        .single();

      // Check Algerian payments
      const { data: algerianData } = await supabase
        .from('site_settings')
        .select('setting_value, is_active')
        .eq('setting_key', 'algerian_payments')
        .single();

      // Check PayPal payments
      const { data: paypalData } = await supabase
        .from('site_settings')
        .select('setting_value, is_active')
        .eq('setting_key', 'paypal_payments')
        .maybeSingle();

      // Check Card payments
      const { data: cardData } = await supabase
        .from('site_settings')
        .select('setting_value, is_active')
        .eq('setting_key', 'card_payments')
        .maybeSingle();

      const systems = {
        stripe: stripeData?.is_active && (stripeData.setting_value as any)?.enabled,
        algerian: algerianData?.is_active && (algerianData.setting_value as any)?.enabled,
        paypal: paypalData?.is_active && (paypalData.setting_value as any)?.enabled,
        card: cardData?.is_active && (cardData.setting_value as any)?.enabled
      };

      setAvailableSystems(systems);

      // Set default system prioritizing Algerian for Algerian users
      if (systems.algerian) {
        setSelectedSystem('algerian');
      } else if (systems.stripe) {
        setSelectedSystem('stripe');
      } else if (systems.card) {
        setSelectedSystem('card');
      } else if (systems.paypal) {
        setSelectedSystem('paypal');
      }
    } catch (error) {
      console.error('Error checking payment systems:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePromotion = async (type: 'featured' | 'urgent') => {
    try {
      let functionName: string;
      let body: any;

      switch (selectedSystem) {
        case 'algerian':
          functionName = 'create-algerian-payment';
          body = {
            payment_type: type,
            announcement_id: announcementId,
            card_type: selectedCard
          };
          break;
        case 'paypal':
          functionName = 'create-paypal-payment';
          body = {
            payment_type: type,
            announcement_id: announcementId
          };
          break;
        case 'card':
          functionName = 'create-card-payment';
          body = {
            payment_type: type,
            announcement_id: announcementId,
            card_type: selectedCardType
          };
          break;
        default: // stripe
          functionName = 'create-payment';
          body = {
            payment_type: type,
            announcement_id: announcementId
          };
      }

      const { data, error } = await supabase.functions.invoke(functionName, { body });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirection vers le paiement",
          description: selectedSystem === 'algerian' 
            ? `Paiement avec ${selectedCard.toUpperCase()} - Redirection en cours...`
            : selectedSystem === 'paypal'
            ? "Redirection vers PayPal en cours..."
            : selectedSystem === 'card'
            ? `Paiement par carte ${selectedCardType.toUpperCase()} - Redirection en cours...`
            : "Redirection vers Stripe en cours...",
        });
      }
    } catch (error) {
      console.error('Erreur promotion:', error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Impossible de démarrer le processus de paiement",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // If no payment systems are available
  if (!availableSystems.stripe && !availableSystems.algerian && !availableSystems.paypal && !availableSystems.card) {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
        <h4 className="font-medium text-gray-800 mb-2">Booster votre annonce</h4>
        <p className="text-sm text-gray-600">
          Aucun système de paiement n'est actuellement disponible. 
          Contactez l'administrateur pour plus d'informations.
        </p>
      </div>
    );
  }

  const hasMultipleSystems = (availableSystems.stripe ? 1 : 0) + (availableSystems.algerian ? 1 : 0) + (availableSystems.paypal ? 1 : 0) + (availableSystems.card ? 1 : 0) > 1;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200 space-y-4">
      <h4 className="font-medium text-gray-800">Booster votre annonce</h4>
      
      {/* Payment System Selection */}
      {hasMultipleSystems && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Méthode de paiement</label>
          <div className="flex space-x-2">
            {availableSystems.algerian && (
              <Button
                variant={selectedSystem === 'algerian' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSystem('algerian')}
                className="flex items-center space-x-1"
              >
                <MapPin className="w-4 h-4" />
                <span>Algérie</span>
              </Button>
            )}
            {availableSystems.stripe && (
              <Button
                variant={selectedSystem === 'stripe' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSystem('stripe')}
                className="flex items-center space-x-1"
              >
                <CreditCard className="w-4 h-4" />
                <span>Stripe</span>
              </Button>
            )}
            {availableSystems.card && (
              <Button
                variant={selectedSystem === 'card' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSystem('card')}
                className="flex items-center space-x-1"
              >
                <Building className="w-4 h-4" />
                <span>Carte Bancaire</span>
              </Button>
            )}
            {availableSystems.paypal && (
              <Button
                variant={selectedSystem === 'paypal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSystem('paypal')}
                className="flex items-center space-x-1"
              >
                <Wallet className="w-4 h-4" />
                <span>PayPal</span>
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Card Selection for Algerian System */}
      {selectedSystem === 'algerian' && availableSystems.algerian && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type de carte</label>
          <Select value={selectedCard} onValueChange={(value: 'eddahabia' | 'cib') => setSelectedCard(value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eddahabia">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Eddahabia</Badge>
                </div>
              </SelectItem>
              <SelectItem value="cib">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">CIB</Badge>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Card Type Selection for Card System */}
      {selectedSystem === 'card' && availableSystems.card && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type de carte</label>
          <Select value={selectedCardType} onValueChange={(value: 'visa' | 'mastercard') => setSelectedCardType(value)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visa">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Visa</Badge>
                </div>
              </SelectItem>
              <SelectItem value="mastercard">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Mastercard</Badge>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Promotion Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {!currentStatus.isFeatured && (
          <div className="space-y-2">
            <div className="flex items-center text-yellow-600">
              <Star className="w-4 h-4 mr-1" />
              <span className="font-medium">À la Une</span>
            </div>
            <p className="text-xs text-gray-600">5x plus de visibilité</p>
            <Button 
              size="sm" 
              variant="outline"
              className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
              onClick={() => handlePromotion('featured')}
            >
              Promouvoir
            </Button>
          </div>
        )}

        {!currentStatus.isUrgent && (
          <div className="space-y-2">
            <div className="flex items-center text-red-600">
              <Zap className="w-4 h-4 mr-1" />
              <span className="font-medium">Urgent</span>
            </div>
            <p className="text-xs text-gray-600">Affichage prioritaire</p>
            <Button 
              size="sm" 
              variant="outline"
              className="w-full border-red-500 text-red-600 hover:bg-red-50"
              onClick={() => handlePromotion('urgent')}
            >
              Rendre urgent
            </Button>
          </div>
        )}
      </div>

      {/* Status Display */}
      {currentStatus.isFeatured && currentStatus.isUrgent && (
        <div className="text-center py-2">
          <p className="text-sm text-green-600 font-medium">✓ Annonce entièrement optimisée</p>
        </div>
      )}

      {/* Payment System Info */}
      <div className="text-xs text-gray-500 text-center">
        {selectedSystem === 'stripe' && 'Paiement sécurisé via Stripe'}
        {selectedSystem === 'algerian' && `Paiement local avec ${selectedCard.toUpperCase()}`}
        {selectedSystem === 'paypal' && 'Paiement sécurisé via PayPal'}
        {selectedSystem === 'card' && `Paiement par carte ${selectedCardType.toUpperCase()}`}
      </div>
    </div>
  );
};

export default PromoteAnnouncement;