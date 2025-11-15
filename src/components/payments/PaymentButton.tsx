import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Star, Zap, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface PaymentButtonProps {
  announcementId: string;
  paymentType: 'featured' | 'urgent';
  paymentSystem?: 'stripe' | 'algerian';
  cardType?: 'eddahabia' | 'cib';
  className?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  announcementId,
  paymentType,
  paymentSystem = 'stripe',
  cardType,
  className = ""
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Connexion requise",
          description: "Vous devez être connecté pour effectuer un paiement",
          variant: "destructive"
        });
        return;
      }

      // Call the appropriate payment function based on system
      const functionName = paymentSystem === 'algerian' ? 'create-algerian-payment' : 'create-payment';
      const body = paymentSystem === 'algerian' 
        ? {
            payment_type: paymentType,
            announcement_id: announcementId,
            card_type: cardType
          }
        : {
            payment_type: paymentType,
            announcement_id: announcementId
          };

      const { data, error } = await supabase.functions.invoke(functionName, { body });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirection vers le paiement",
          description: paymentSystem === 'algerian' 
            ? `Paiement avec ${cardType?.toUpperCase()} - Redirection en cours...`
            : "Vous allez être redirigé vers la page de paiement sécurisée",
        });
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erreur de paiement",
        description: error instanceof Error ? error.message : "Une erreur est survenue",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getButtonConfig = () => {
    if (paymentType === 'featured') {
      return {
        icon: Star,
        text: "Mettre à la Une",
        description: "Augmentez la visibilité",
        color: "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
      };
    } else {
      return {
        icon: Zap,
        text: "Marquer Urgent",
        description: "Priorité maximale",
        color: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
      };
    }
  };

  const config = getButtonConfig();
  const IconComponent = config.icon;

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className={`${config.color} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <IconComponent className="w-4 h-4 mr-2" />
      )}
      <div className="flex flex-col items-start">
        <span className="font-medium">{config.text}</span>
        <span className="text-xs opacity-90">{config.description}</span>
      </div>
      <CreditCard className="w-4 h-4 ml-2" />
    </Button>
  );
};

export default PaymentButton;