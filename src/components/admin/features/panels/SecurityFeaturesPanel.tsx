

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Fingerprint, Lock, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SecurityFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const SecurityFeaturesPanel: React.FC<SecurityFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Sécurité Désactivée" : "Sécurité Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const securityFeatures = [
    {
      id: "fraudDetection",
      name: "Détection de Fraude IA",
      description: "Analyse en temps réel des comportements suspects",
      icon: AlertTriangle,
      status: activeFeatures.fraudDetection,
      level: "Critique",
      color: "text-red-600",
      critical: true
    },
    {
      id: "biometricAuth",
      name: "Authentification Biométrique",
      description: "Connexion par empreinte digitale ou reconnaissance faciale",
      icon: Fingerprint,
      status: activeFeatures.biometricAuth,
      level: "Premium",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "blockchainVerification",
      name: "Vérification Blockchain",
      description: "Authentification décentralisée et sécurisée",
      icon: Lock,
      status: activeFeatures.blockchainVerification,
      level: "Enterprise",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "advancedEncryption",
      name: "Chiffrement Avancé",
      description: "Protection des données avec algorithmes de dernière génération",
      icon: Shield,
      status: activeFeatures.advancedEncryption,
      level: "Essentiel",
      color: "text-green-600",
      critical: true
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-red-600" />
            <span>Sécurité et Protection Avancée</span>
            <Badge variant="outline" className="bg-red-100">
              {securityFeatures.filter(f => f.status).length}/{securityFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {securityFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-red-200' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "Critique" ? "destructive" :
                        feature.level === "Enterprise" ? "destructive" :
                        feature.level === "Premium" ? "default" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-red-600 border-red-300">
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
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-green-50 border-green-200'
                }`}>
                  <div className={`flex items-center space-x-2 ${
                    feature.critical ? 'text-red-700' : 'text-green-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      feature.critical ? 'bg-red-500' : 'bg-green-500'
                    }`}></div>
                    <span className="text-sm font-medium">
                      {feature.critical ? 'Protection Critique Active' : 'Protection Active'}
                    </span>
                  </div>
                  <div className={`text-xs mt-1 ${
                    feature.critical ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {feature.id === 'fraudDetection' && "Surveillance continue des transactions suspectes"}
                    {feature.id === 'biometricAuth' && "Authentification renforcée disponible"}
                    {feature.id === 'blockchainVerification' && "Vérifications décentralisées actives"}
                    {feature.id === 'advancedEncryption' && "Chiffrement AES-256 avec clés rotationnelles"}
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

export default SecurityFeaturesPanel;
