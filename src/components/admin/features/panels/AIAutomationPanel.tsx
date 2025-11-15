

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bot, Zap, Target, Workflow, 
  Brain, Cpu, Settings 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIAutomationPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AIAutomationPanel: React.FC<AIAutomationPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "IA Désactivée" : "IA Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const aiFeatures = [
    {
      id: "aiContentAutoGeneration",
      name: "Génération Contenu IA",
      description: "Création automatique descriptions, titres, tags pour annonces",
      icon: Bot,
      status: activeFeatures.aiContentAutoGeneration,
      level: "IA Créative",
      color: "text-purple-600",
      critical: true
    },
    {
      id: "aiSmartPriceRecommendation",
      name: "Recommandation Prix IA",
      description: "Suggestions prix optimales basées sur marché et historique",
      icon: Target,
      status: activeFeatures.aiSmartPriceRecommendation,
      level: "IA Business",
      color: "text-green-600",
      critical: true
    },
    {
      id: "aiAdvancedChatBot",
      name: "ChatBot IA Avancé",
      description: "Assistant virtuel pour support client et ventes",
      icon: Brain,
      status: activeFeatures.aiAdvancedChatBot,
      level: "IA Support",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "aiWorkflowAutomation",
      name: "Automatisation Workflows IA",
      description: "Processus automatiques pour modération, validation, suivi",
      icon: Workflow,
      status: activeFeatures.aiWorkflowAutomation,
      level: "IA Process",
      color: "text-orange-600",
      critical: true
    },
    {
      id: "aiPredictiveAnalytics",
      name: "Analytics Prédictifs IA",
      description: "Prédictions tendances, demandes, performances futures",
      icon: Cpu,
      status: activeFeatures.aiPredictiveAnalytics,
      level: "IA Analytics",
      color: "text-indigo-600",
      critical: false
    },
    {
      id: "aiSmartNotifications",
      name: "Notifications Intelligentes IA",
      description: "Notifications personnalisées basées sur comportement utilisateur",
      icon: Zap,
      status: activeFeatures.aiSmartNotifications,
      level: "IA UX",
      color: "text-yellow-600",
      critical: false
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <span>IA & Automatisation Avancée</span>
            <Badge variant="outline" className="bg-purple-100 animate-pulse">
              FUTUR IA
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-purple-300' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level.includes("IA") ? "destructive" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-purple-600 border-purple-300">
                          IA CORE
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
                <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">IA Système Actif</span>
                    <Badge variant="outline" className="text-xs">LEARNING</Badge>
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

export default AIAutomationPanel;
