

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageCircle, Star, Truck, Settings, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BusinessFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const BusinessFeaturesPanel: React.FC<BusinessFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Business Désactivé" : "Business Activé",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`
    });
  };

  const businessFeatures = [
    {
      id: "marketplaceIntelligence",
      name: "Intelligence Marketplace",
      description: "Analyse concurrentielle et insights marché en temps réel",
      icon: TrendingUp,
      status: activeFeatures.marketplaceIntelligence,
      level: "Premium",
      color: "text-blue-600"
    },
    {
      id: "customerReviews",
      name: "Système de Reviews",
      description: "Gestion avancée des avis et notes clients",
      icon: Star,
      status: activeFeatures.customerReviews,
      level: "Essentiel",
      color: "text-yellow-600"
    },
    {
      id: "internalMessaging",
      name: "Messagerie Interne",
      description: "Communication entre équipes et départements",
      icon: MessageCircle,
      status: activeFeatures.internalMessaging,
      level: "Pro",
      color: "text-green-600"
    },
    {
      id: "logisticsManagement",
      name: "Gestion Logistique",
      description: "Suivi livraisons et optimisation des routes",
      icon: Truck,
      status: activeFeatures.logisticsManagement,
      level: "Enterprise",
      color: "text-orange-600"
    },
    {
      id: "marketingAutomation",
      name: "Marketing Automation",
      description: "Campagnes automatisées et ciblage intelligent",
      icon: Target,
      status: activeFeatures.marketingAutomation,
      level: "Premium",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-teal-600" />
            <span>Business & Marketing Intelligence</span>
            <Badge variant="outline" className="bg-teal-100">
              {businessFeatures.filter(f => f.status).length}/{businessFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {businessFeatures.map((feature) => (
            <Card key={feature.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "Enterprise" ? "destructive" :
                        feature.level === "Premium" ? "default" :
                        feature.level === "Pro" ? "secondary" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
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
                <div className="mt-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="flex items-center space-x-2 text-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Service Actif</span>
                  </div>
                  <div className="text-xs text-teal-600 mt-1">
                    {feature.id === 'marketplaceIntelligence' && "Collecte de données marché en cours"}
                    {feature.id === 'customerReviews' && "Système de modération des avis activé"}
                    {feature.id === 'internalMessaging' && "Chat interne disponible pour toutes les équipes"}
                    {feature.id === 'logisticsManagement' && "Tracking GPS et optimisation des livraisons"}
                    {feature.id === 'marketingAutomation' && "Campagnes automatiques en cours d'exécution"}
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

export default BusinessFeaturesPanel;
