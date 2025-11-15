

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Phone, Banknote, Truck, 
  Users, Building, Settings 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LocalAlgeriaPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const LocalAlgeriaPanel: React.FC<LocalAlgeriaPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Intégration Désactivée" : "Intégration Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const algerianFeatures = [
    {
      id: "algerianWilayasIntegration",
      name: "Intégration 58 Wilayas",
      description: "Base de données complète des wilayas, communes et codes postaux",
      icon: MapPin,
      status: activeFeatures.algerianWilayasIntegration,
      level: "Algérie",
      color: "text-green-600",
      critical: true
    },
    {
      id: "algerianPhoneValidation",
      name: "Validation Téléphones Algériens",
      description: "Validation Mobilis, Djezzy, Ooredoo + fixes automatiques",
      icon: Phone,
      status: activeFeatures.algerianPhoneValidation,
      level: "Local DZ",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "dinargoldIntegration",
      name: "Intégration DinarGold API",
      description: "Taux de change USD/EUR vers DZD en temps réel",
      icon: Banknote,
      status: activeFeatures.dinargoldIntegration,
      level: "Finance DZ",
      color: "text-yellow-600",
      critical: false
    },
    {
      id: "algerianDeliveryServices",
      name: "Services Livraison Algériens",
      description: "Intégration Bosta, Ecolis, et autres services locaux",
      icon: Truck,
      status: activeFeatures.algerianDeliveryServices,
      level: "Logistique",
      color: "text-orange-600",
      critical: true
    },
    {
      id: "algerianBusinessDirectory",
      name: "Répertoire Entreprises DZ",
      description: "Base données entreprises algériennes, RC, NIF, validation",
      icon: Building,
      status: activeFeatures.algerianBusinessDirectory,
      level: "Business DZ",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "algerianCulturalAdaptation",
      name: "Adaptation Culturelle",
      description: "Calendrier hijri, horaires prière, événements nationaux",
      icon: Users,
      status: activeFeatures.algerianCulturalAdaptation,
      level: "Culture",
      color: "text-teal-600",
      critical: false
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-green-600" />
            <span>Intégrations Locales Algérie</span>
            <Badge variant="outline" className="bg-green-100">
              SPÉCIAL DZ
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {algerianFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-green-300' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "Algérie" ? "destructive" :
                        feature.level === "Local DZ" ? "default" :
                        feature.level === "Finance DZ" ? "secondary" :
                        feature.level === "Business DZ" ? "secondary" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                          ESSENTIEL DZ
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={feature.status}
                    onCheckedChange={() => handleToggle(feature.id, feature.name)}
                  />
                  <Button variant="ghost" size="sm" disabled={!feature.status}>
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {feature.status && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Intégration Algérienne Active</span>
                    <Badge variant="outline" className="text-xs">DZ READY</Badge>
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

export default LocalAlgeriaPanel;
