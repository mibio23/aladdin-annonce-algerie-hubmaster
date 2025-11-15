
import { CreditCard, MapPin, AlertCircle, Wallet, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PaymentSystemStatusProps {
  stripeEnabled: boolean;
  algerianEnabled: boolean;
  paypalEnabled: boolean;
  cardEnabled: boolean;
}

const PaymentSystemStatus: React.FC<PaymentSystemStatusProps> = ({
  stripeEnabled,
  algerianEnabled,
  paypalEnabled,
  cardEnabled
}) => {
  const hasAnyPaymentMethod = stripeEnabled || algerianEnabled || paypalEnabled || cardEnabled;

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5" />
          <span>État des Systèmes de Paiement</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!hasAnyPaymentMethod ? (
          <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">
              Aucun système de paiement n'est actuellement configuré. 
              Les utilisateurs ne pourront pas promouvoir leurs annonces.
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Stripe Status */}
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-800">Stripe</span>
              </div>
              <Badge variant={stripeEnabled ? "default" : "secondary"}>
                {stripeEnabled ? "ACTIF" : "INACTIF"}
              </Badge>
            </div>

            {/* Algerian Payment Status */}
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-800">Paiement Algérien</span>
              </div>
              <Badge variant={algerianEnabled ? "default" : "secondary"}>
                {algerianEnabled ? "ACTIF" : "INACTIF"}
              </Badge>
            </div>

            {/* PayPal Status */}
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <Wallet className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-800">PayPal</span>
              </div>
              <Badge variant={paypalEnabled ? "default" : "secondary"}>
                {paypalEnabled ? "ACTIF" : "INACTIF"}
              </Badge>
            </div>

            {/* Card Payment Status */}
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-800">Carte Bancaire</span>
              </div>
              <Badge variant={cardEnabled ? "default" : "secondary"}>
                {cardEnabled ? "ACTIF" : "INACTIF"}
              </Badge>
            </div>
          </div>
        )}

        {hasAnyPaymentMethod && (
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Systèmes actifs: {stripeEnabled && "Stripe"}{(stripeEnabled && (algerianEnabled || paypalEnabled || cardEnabled)) && " • "}
              {algerianEnabled && "Paiements locaux (Eddahabia, CIB)"}{(algerianEnabled && (paypalEnabled || cardEnabled)) && " • "}
              {paypalEnabled && "PayPal"}{(paypalEnabled && cardEnabled) && " • "}
              {cardEnabled && "Cartes bancaires (Visa, Mastercard)"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentSystemStatus;