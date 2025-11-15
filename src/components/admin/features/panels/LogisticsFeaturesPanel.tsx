

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Package, Clock, Settings, Route } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LogisticsFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const LogisticsFeaturesPanel: React.FC<LogisticsFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Logistique Désactivée" : "Logistique Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const logisticsFeatures = [
    {
      id: "realTimeTracking",
      name: "Suivi Temps Réel",
      description: "Géolocalisation GPS des livraisons en temps réel",
      icon: MapPin,
      status: activeFeatures.realTimeTracking,
      level: "Premium",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "routeOptimization",
      name: "Optimisation Routes",
      description: "IA pour optimiser les trajets de livraison",
      icon: Route,
      status: activeFeatures.routeOptimization,
      level: "Enterprise",
      color: "text-green-600",
      critical: true
    },
    {
      id: "inventoryManagement",
      name: "Gestion Stock",
      description: "Suivi automatique des stocks en temps réel",
      icon: Package,
      status: activeFeatures.inventoryManagement,
      level: "Essentiel",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "deliveryScheduling",
      name: "Planification Livraisons",
      description: "Système de créneaux et rendez-vous automatisés",
      icon: Clock,
      status: activeFeatures.deliveryScheduling,
      level: "Pro",
      color: "text-orange-600",
      critical: false
    },
    {
      id: "fleetManagement",
      name: "Gestion Flotte",
      description: "Gestion complète des véhicules et livreurs",
      icon: Truck,
      status: activeFeatures.fleetManagement,
      level: "Enterprise",
      color: "text-red-600",
      critical: true
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Truck className="w-5 h-5 text-blue-600" />
            <span>Logistique & Livraison</span>
            <Badge variant="outline" className="bg-blue-100">
              {logisticsFeatures.filter(f => f.status).length}/{logisticsFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {logisticsFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-blue-300' : ''}`}>
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
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                          Critique
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
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <div className={`flex items-center space-x-2 ${
                    feature.critical ? 'text-blue-700' : 'text-cyan-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      feature.critical ? 'bg-blue-500' : 'bg-cyan-500'
                    }`}></div>
                    <span className="text-sm font-medium">
                      {feature.critical ? 'Service Critique Actif' : 'Service Actif'}
                    </span>
                  </div>
                  <div className={`text-xs mt-1 ${
                    feature.critical ? 'text-blue-600' : 'text-cyan-600'
                  }`}>
                    {feature.id === 'realTimeTracking' && "GPS en direct sur toutes les livraisons"}
                    {feature.id === 'routeOptimization' && "IA calcule les meilleurs itinéraires"}
                    {feature.id === 'inventoryManagement' && "Stocks synchronisés automatiquement"}
                    {feature.id === 'deliveryScheduling' && "Créneaux de livraison automatisés"}
                    {feature.id === 'fleetManagement' && "Gestion complète véhicules et équipes"}
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

export default LogisticsFeaturesPanel;
