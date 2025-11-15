

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Percent, DollarSign, PiggyBank, Settings, Banknote, MapPin, Wallet, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PaymentSettingsPanel from "../../settings/PaymentSettingsPanel";
import PaymentSystemStatus from "@/components/admin/PaymentSystemStatus";

interface PaymentFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const PaymentFeaturesPanel: React.FC<PaymentFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Paiement Désactivé" : "Paiement Activé",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const paymentFeatures = [
    {
      id: "stripe_payments",
      name: "Paiements Stripe",
      description: "Accepter les paiements par carte de crédit via Stripe",
      icon: CreditCard,
      status: activeFeatures["stripe_payments"] || false,
      level: "International",
      color: "text-blue-600",
      critical: true,
      details: "Cartes Visa, Mastercard, American Express supportées"
    },
    {
      id: "paypal_payments",
      name: "Paiements PayPal", 
      description: "Accepter les paiements via comptes PayPal",
      icon: Wallet,
      status: activeFeatures["paypal_payments"] || false,
      level: "International",
      color: "text-blue-600",
      critical: true,
      details: "Comptes PayPal et cartes liées supportés"
    },
    {
      id: "card_payments",
      name: "Paiements par Carte", 
      description: "Accepter les paiements Visa et Mastercard",
      icon: Building,
      status: activeFeatures["card_payments"] || false,
      level: "Local",
      color: "text-purple-600",
      critical: true,
      details: "Cartes Visa et Mastercard via passerelle bancaire locale"
    },
    {
      id: "algerian_payments",
      name: "Paiements Algériens",
      description: "Accepter les paiements Eddahabia et CIB",
      icon: MapPin,
      status: activeFeatures["algerian_payments"] || false,
      level: "Local",
      color: "text-green-600",
      critical: true,
      details: "Support complet des cartes Eddahabia et CIB avec sécurité renforcée"
    },
    {
      id: "commissionManagement",
      name: "Gestion Commissions",
      description: "Calcul automatique et distribution des commissions",
      icon: Percent,
      status: activeFeatures.commissionManagement,
      level: "Essentiel",
      color: "text-green-600",
      critical: true
    },
    {
      id: "financialReporting",
      name: "Rapports Financiers",
      description: "Tableaux de bord financiers et analyses comptables",
      icon: DollarSign,
      status: activeFeatures.financialReporting,
      level: "Premium",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "escrowSystem",
      name: "Système Escrow",
      description: "Séquestre de paiements pour sécuriser les transactions",
      icon: PiggyBank,
      status: activeFeatures.escrowSystem,
      level: "Enterprise",
      color: "text-orange-600",
      critical: true
    },
    {
      id: "algeriaCashPayments",
      name: "Paiements Cash Algérie",
      description: "Intégration paiements à la livraison spécifique DZ",
      icon: Banknote,
      status: activeFeatures.algeriaCashPayments,
      level: "Local",
      color: "text-red-600",
      critical: false
    }
  ];

  return (
    <div className="space-y-4">
      {/* Payment System Status */}
      <PaymentSystemStatus 
        stripeEnabled={activeFeatures["stripe_payments"] || false}
        algerianEnabled={activeFeatures["algerian_payments"] || false}
        paypalEnabled={activeFeatures["paypal_payments"] || false}
        cardEnabled={activeFeatures["card_payments"] || false}
      />
      
      {/* Payment Settings Panel */}
      <PaymentSettingsPanel />
      
      <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-emerald-600" />
            <span>Paiements & Commissions</span>
            <Badge variant="outline" className="bg-emerald-100">
              {paymentFeatures.filter(f => f.status).length}/{paymentFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-emerald-300' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "International" ? "default" :
                        feature.level === "Enterprise" ? "destructive" :
                        feature.level === "Premium" ? "default" :
                        feature.level === "Local" ? "secondary" :
                        feature.level === "Essentiel" ? "secondary" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-300">
                          Prioritaire
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                    {feature.details && (
                      <p className="text-xs text-gray-500 mt-1">{feature.details}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={feature.status}
                    onCheckedChange={() => handleToggle(feature.id, feature.name)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={!feature.status}
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {feature.status && (
                <div className={`mt-3 p-3 rounded-lg border ${
                  feature.critical 
                    ? 'bg-emerald-50 border-emerald-200' 
                    : 'bg-green-50 border-green-200'
                }`}>
                  <div className={`flex items-center space-x-2 ${
                    feature.critical ? 'text-emerald-700' : 'text-green-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      feature.critical ? 'bg-emerald-500' : 'bg-green-500'
                    }`}></div>
                    <span className="text-sm font-medium">
                      {feature.critical ? 'Service Critique Actif' : 'Service Actif'}
                    </span>
                    <Badge variant="outline" className="text-xs">LIVE</Badge>
                  </div>
                  <div className={`text-xs mt-1 ${
                    feature.critical ? 'text-emerald-600' : 'text-green-600'
                  }`}>
                    {feature.id === 'paypal_payments' && "Paiements PayPal actifs avec sécurité SSL"}
                    {feature.id === 'card_payments' && "Paiements par carte Visa/Mastercard actifs"}
                    {feature.id === 'stripe_payments' && "Paiements Stripe actifs avec sécurité SSL"}
                    {feature.id === 'algerian_payments' && "Cartes Eddahabia et CIB activées avec sécurité locale"}
                    {feature.id === 'commissionManagement' && "Calculs automatiques des commissions vendeurs"}
                    {feature.id === 'financialReporting' && "Rapports financiers générés quotidiennement"}
                    {feature.id === 'escrowSystem' && "Paiements sécurisés en séquestre activés"}
                    {feature.id === 'algeriaCashPayments' && "Paiements cash à la livraison disponibles"}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentFeaturesPanel;
