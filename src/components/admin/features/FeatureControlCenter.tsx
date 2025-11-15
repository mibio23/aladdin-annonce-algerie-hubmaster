
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Power, Activity, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FeatureControlCenterProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const FeatureControlCenter: React.FC<FeatureControlCenterProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleMasterToggle = (enable: boolean) => {
    const message = enable 
      ? "Toutes les fonctionnalités ont été activées"
      : "Toutes les fonctionnalités ont été désactivées";
    
    Object.keys(activeFeatures).forEach(key => {
      if (activeFeatures[key] !== enable) {
        toggleFeature(key);
      }
    });

    toast({
      title: enable ? "Activation Complète" : "Désactivation Complète",
      description: message
    });
  };

  const criticalFeatures = ['fraudDetection', 'biometricAuth', 'advancedEncryption'];
  const hasCriticalFeatures = criticalFeatures.some(feature => activeFeatures[feature]);

  return (
    <Card className="border-2 border-dashed border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="w-5 h-5 text-blue-600" />
          <span>Centre de Contrôle Principal</span>
          <Badge variant={hasCriticalFeatures ? "destructive" : "secondary"}>
            {hasCriticalFeatures ? "Mode Sécurisé" : "Mode Standard"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Activation Globale</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleMasterToggle(true)}
                  className="text-green-600"
                >
                  <Power className="w-4 h-4 mr-1" />
                  Tout Activer
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleMasterToggle(false)}
                  className="text-red-600"
                >
                  <Power className="w-4 h-4 mr-1" />
                  Tout Désactiver
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Status Système</span>
            </div>
            <div className="text-xs text-gray-600">
              {Object.values(activeFeatures).filter(Boolean).length} fonctionnalités actives
            </div>
            <div className="text-xs text-gray-600">
              Consommation: {Math.round(Object.values(activeFeatures).filter(Boolean).length * 2.5)}% CPU
            </div>
          </div>

          <div className="space-y-2">
            {hasCriticalFeatures && (
              <div className="flex items-center space-x-2 text-orange-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">Fonctions Critiques Actives</span>
              </div>
            )}
            <div className="text-xs text-gray-600">
              Dernière mise à jour: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureControlCenter;
