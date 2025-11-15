

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Brain, MessageSquare, TrendingUp, Settings, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AIFeaturesPanel: React.FC<AIFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Fonctionnalité Désactivée" : "Fonctionnalité Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`
    });
  };

  const aiFeatures = [
    {
      id: "aiAssistant",
      name: "Assistant IA Intégré",
      description: "Chatbot intelligent pour aider les utilisateurs et administrateurs",
      icon: Bot,
      status: activeFeatures.aiAssistant,
      level: "Premium",
      color: "text-blue-600"
    },
    {
      id: "smartModeration",
      name: "Modération Intelligente",
      description: "Détection automatique de contenu inapproprié avec IA",
      icon: Eye,
      status: activeFeatures.smartModeration,
      level: "Essentiel",
      color: "text-green-600"
    },
    {
      id: "contentGenerator",
      name: "Générateur de Contenu IA",
      description: "Création automatique de descriptions et titres optimisés",
      icon: MessageSquare,
      status: activeFeatures.contentGenerator,
      level: "Pro",
      color: "text-purple-600"
    },
    {
      id: "predictiveAnalytics",
      name: "Analyse Prédictive",
      description: "Prédictions de tendances et comportements utilisateurs",
      icon: TrendingUp,
      status: activeFeatures.predictiveAnalytics,
      level: "Enterprise",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-blue-600" />
            <span>Fonctionnalités d'Intelligence Artificielle</span>
            <Badge variant="outline" className="bg-blue-100">
              {aiFeatures.filter(f => f.status).length}/{aiFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiFeatures.map((feature) => (
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
                    <span className="text-sm font-medium">Fonctionnalité Active</span>
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    {feature.id === 'aiAssistant' && "Assistant disponible dans le coin inférieur droit"}
                    {feature.id === 'smartModeration' && "Analyse en temps réel du contenu utilisateur"}
                    {feature.id === 'contentGenerator' && "Génération automatique activée pour les nouvelles annonces"}
                    {feature.id === 'predictiveAnalytics' && "Collecte de données pour analyses prédictives"}
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

export default AIFeaturesPanel;
