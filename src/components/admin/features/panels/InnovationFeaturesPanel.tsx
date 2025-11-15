

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Headphones, Box, Bitcoin, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InnovationFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const InnovationFeaturesPanel: React.FC<InnovationFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Innovation Désactivée" : "Innovation Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`
    });
  };

  const innovationFeatures = [
    {
      id: "metaverseIntegration",
      name: "Intégration Métaverse",
      description: "Boutiques virtuelles et expériences immersives",
      icon: Box,
      status: activeFeatures.metaverseIntegration,
      level: "Futuriste",
      color: "text-cyan-600"
    },
    {
      id: "voiceCommands",
      name: "Commandes Vocales",
      description: "Navigation et recherche par reconnaissance vocale",
      icon: Headphones,
      status: activeFeatures.voiceCommands,
      level: "Innovation",
      color: "text-indigo-600"
    },
    {
      id: "arVisualization",
      name: "Visualisation AR",
      description: "Prévisualisation des produits en réalité augmentée",
      icon: Box,
      status: activeFeatures.arVisualization,
      level: "Tech",
      color: "text-pink-600"
    },
    {
      id: "cryptoPayments",
      name: "Paiements Crypto",
      description: "Acceptation des cryptomonnaies et NFTs",
      icon: Bitcoin,
      status: activeFeatures.cryptoPayments,
      level: "Web3",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-orange-600" />
            <span>Innovation et Technologies Futuristes</span>
            <Badge variant="outline" className="bg-orange-100">
              {innovationFeatures.filter(f => f.status).length}/{innovationFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {innovationFeatures.map((feature) => (
            <Card key={feature.id} className="p-4 border-2 border-dashed border-orange-200 bg-gradient-to-r from-orange-25 to-yellow-25">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant="outline" className={`text-xs border-2 ${
                        feature.level === "Futuriste" ? "border-cyan-300 text-cyan-700" :
                        feature.level === "Innovation" ? "border-indigo-300 text-indigo-700" :
                        feature.level === "Tech" ? "border-pink-300 text-pink-700" :
                        "border-orange-300 text-orange-700"
                      }`}>
                        {feature.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-yellow-600 border-yellow-300 animate-pulse">
                        BETA
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
                <div className="mt-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center space-x-2 text-orange-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Innovation Active</span>
                    <Badge variant="outline" className="text-xs">EXPÉRIMENTAL</Badge>
                  </div>
                  <div className="text-xs text-orange-600 mt-1">
                    {feature.id === 'metaverseIntegration' && "Connexion aux plateformes VR/AR établie"}
                    {feature.id === 'voiceCommands' && "Reconnaissance vocale multi-langues active"}
                    {feature.id === 'arVisualization' && "Caméra AR disponible pour prévisualisation"}
                    {feature.id === 'cryptoPayments' && "Wallet crypto intégré - Bitcoin, Ethereum, USDT"}
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

export default InnovationFeaturesPanel;
