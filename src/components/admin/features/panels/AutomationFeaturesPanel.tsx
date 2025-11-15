

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Workflow, Zap, Bell, DollarSign, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AutomationFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AutomationFeaturesPanel: React.FC<AutomationFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Automatisation Désactivée" : "Automatisation Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`
    });
  };

  const automationFeatures = [
    {
      id: "smartWorkflows",
      name: "Workflows Intelligents",
      description: "Automatisation des processus métier avec IA",
      icon: Workflow,
      status: activeFeatures.smartWorkflows,
      level: "Pro",
      color: "text-purple-600"
    },
    {
      id: "autoOptimization",
      name: "Optimisation Automatique",
      description: "Amélioration continue des performances",
      icon: Zap,
      status: activeFeatures.autoOptimization,
      level: "Premium",
      color: "text-yellow-600"
    },
    {
      id: "intelligentNotifications",
      name: "Notifications Intelligentes",
      description: "Alertes personnalisées et prédictives",
      icon: Bell,
      status: activeFeatures.intelligentNotifications,
      level: "Essentiel",
      color: "text-blue-600"
    },
    {
      id: "dynamicPricing",
      name: "Tarification Dynamique",
      description: "Ajustement automatique des prix selon la demande",
      icon: DollarSign,
      status: activeFeatures.dynamicPricing,
      level: "Enterprise",
      color: "text-green-600"
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Workflow className="w-5 h-5 text-purple-600" />
            <span>Automatisation et Workflows</span>
            <Badge variant="outline" className="bg-purple-100">
              {automationFeatures.filter(f => f.status).length}/{automationFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {automationFeatures.map((feature) => (
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
                <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Automatisation Active</span>
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    {feature.id === 'smartWorkflows' && "Workflows automatisés pour 15 processus"}
                    {feature.id === 'autoOptimization' && "Optimisation continue des performances"}
                    {feature.id === 'intelligentNotifications' && "Notifications personnalisées activées"}
                    {feature.id === 'dynamicPricing' && "Ajustements de prix selon la demande"}
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

export default AutomationFeaturesPanel;
