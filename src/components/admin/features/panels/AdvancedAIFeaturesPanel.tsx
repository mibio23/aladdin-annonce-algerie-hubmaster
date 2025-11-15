

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Target, TrendingUp, Settings, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdvancedAIFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AdvancedAIFeaturesPanel: React.FC<AdvancedAIFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "IA Désactivée" : "IA Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const advancedAIFeatures = [
    {
      id: "predictiveAnalytics",
      name: "Analytics Prédictif",
      description: "Prédiction des tendances de vente et comportements",
      icon: TrendingUp,
      status: activeFeatures.predictiveAnalytics,
      level: "IA+",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "personalizedRecommendations",
      name: "Recommandations IA",
      description: "Suggestions personnalisées par machine learning",
      icon: Target,
      status: activeFeatures.personalizedRecommendations,
      level: "ML",
      color: "text-blue-600",
      critical: false
    },
    {
      id: "smartPricing",
      name: "Prix Intelligents",
      description: "Optimisation automatique des prix par IA",
      icon: Zap,
      status: activeFeatures.smartPricing,
      level: "Enterprise",
      color: "text-green-600",
      critical: true
    },
    {
      id: "conversationalAI",
      name: "IA Conversationnelle",
      description: "Chatbot avancé avec compréhension naturelle",
      icon: Brain,
      status: activeFeatures.conversationalAI,
      level: "GPT",
      color: "text-orange-600",
      critical: false
    },
    {
      id: "visualRecognition",
      name: "Reconnaissance Visuelle",
      description: "IA pour analyser et classifier les images produits",
      icon: Sparkles,
      status: activeFeatures.visualRecognition,
      level: "Vision",
      color: "text-indigo-600",
      critical: false
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <span>Intelligence Artificielle Avancée</span>
            <Badge variant="outline" className="bg-purple-100">
              {advancedAIFeatures.filter(f => f.status).length}/{advancedAIFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {advancedAIFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 border-2 border-dashed ${feature.critical ? 'border-purple-300' : 'border-indigo-200'} bg-gradient-to-r from-purple-25 to-indigo-25`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant="outline" className={`text-xs border-2 ${
                        feature.level === "IA+" ? "border-purple-300 text-purple-700" :
                        feature.level === "ML" ? "border-blue-300 text-blue-700" :
                        feature.level === "Enterprise" ? "border-green-300 text-green-700" :
                        feature.level === "GPT" ? "border-orange-300 text-orange-700" :
                        "border-indigo-300 text-indigo-700"
                      }`}>
                        {feature.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-purple-600 border-purple-300 animate-pulse">
                        ADVANCED
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
                <div className="mt-3 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center space-x-2 text-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">IA Avancée Active</span>
                    <Badge variant="outline" className="text-xs">NEURAL</Badge>
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    {feature.id === 'predictiveAnalytics' && "Modèles prédictifs entraînés sur données historiques"}
                    {feature.id === 'personalizedRecommendations' && "Algorithmes ML personnalisent l'expérience utilisateur"}
                    {feature.id === 'smartPricing' && "IA ajuste prix automatiquement selon marché"}
                    {feature.id === 'conversationalAI' && "Chatbot GPT comprend langage naturel arabe/français"}
                    {feature.id === 'visualRecognition' && "Vision IA analyse et catégorise images automatiquement"}
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

export default AdvancedAIFeaturesPanel;
