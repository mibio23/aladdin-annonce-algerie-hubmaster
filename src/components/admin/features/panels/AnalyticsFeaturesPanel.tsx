

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Activity, MousePointer, BrainCircuit, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AnalyticsFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AnalyticsFeaturesPanel: React.FC<AnalyticsFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Analytics Désactivé" : "Analytics Activé",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`
    });
  };

  const analyticsFeatures = [
    {
      id: "realTimeAnalytics",
      name: "Analytics Temps Réel",
      description: "Données en direct avec mise à jour instantanée",
      icon: Activity,
      status: activeFeatures.realTimeAnalytics,
      level: "Essentiel",
      color: "text-green-600"
    },
    {
      id: "heatmaps",
      name: "Cartes de Chaleur",
      description: "Visualisation des zones les plus consultées",
      icon: MousePointer,
      status: activeFeatures.heatmaps,
      level: "Pro",
      color: "text-red-600"
    },
    {
      id: "userBehaviorTracking",
      name: "Suivi Comportemental",
      description: "Analyse avancée du parcours utilisateur",
      icon: BarChart3,
      status: activeFeatures.userBehaviorTracking,
      level: "Premium",
      color: "text-blue-600"
    },
    {
      id: "businessIntelligence",
      name: "Business Intelligence",
      description: "Tableaux de bord et rapports intelligents",
      icon: BrainCircuit,
      status: activeFeatures.businessIntelligence,
      level: "Enterprise",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span>Analytics et Business Intelligence</span>
            <Badge variant="outline" className="bg-green-100">
              {analyticsFeatures.filter(f => f.status).length}/{analyticsFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analyticsFeatures.map((feature) => (
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
                <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Collecte Active</span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {feature.id === 'realTimeAnalytics' && "Données collectées toutes les 30 secondes"}
                    {feature.id === 'heatmaps' && "Tracking des clics et mouvements de souris"}
                    {feature.id === 'userBehaviorTracking' && "Analyse du parcours et des interactions"}
                    {feature.id === 'businessIntelligence' && "Génération de rapports automatiques"}
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

export default AnalyticsFeaturesPanel;
