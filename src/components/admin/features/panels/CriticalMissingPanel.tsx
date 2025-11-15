

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, Shield, Bell, MessageSquare, 
  FileText, Clock, Settings 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CriticalMissingPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const CriticalMissingPanel: React.FC<CriticalMissingPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Fonction Désactivée" : "Fonction Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const criticalFeatures = [
    {
      id: "advancedNotificationSystem",
      name: "Système de Notifications Avancé",
      description: "Notifications push, email, SMS avec segmentation utilisateurs",
      icon: Bell,
      status: activeFeatures.advancedNotificationSystem,
      level: "Critique",
      color: "text-red-600",
      critical: true
    },
    {
      id: "disputeResolutionSystem",
      name: "Système Résolution Litiges",
      description: "Médiation automatique et manuelle pour résoudre les conflits",
      icon: Shield,
      status: activeFeatures.disputeResolutionSystem,
      level: "Essentiel",
      color: "text-orange-600",
      critical: true
    },
    {
      id: "advancedReportingSystem",
      name: "Système Signalement Avancé",
      description: "Signalement contenu, modération IA, blacklist automatique",
      icon: AlertTriangle,
      status: activeFeatures.advancedReportingSystem,
      level: "Sécurité",
      color: "text-red-600",
      critical: true
    },
    {
      id: "internalMessagingSystem",
      name: "Messagerie Interne Complète",
      description: "Chat temps réel, pièces jointes, historique, groupes",
      icon: MessageSquare,
      status: activeFeatures.internalMessagingSystem,
      level: "Communication",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "documentManagementSystem",
      name: "Gestion Documents Avancée",
      description: "Upload, versioning, permissions, signature électronique",
      icon: FileText,
      status: activeFeatures.documentManagementSystem,
      level: "Gestion",
      color: "text-green-600",
      critical: false
    },
    {
      id: "schedulingAppointmentSystem",
      name: "Système Rendez-vous",
      description: "Calendrier intégré, rappels automatiques, disponibilités",
      icon: Clock,
      status: activeFeatures.schedulingAppointmentSystem,
      level: "Services",
      color: "text-purple-600",
      critical: false
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>Fonctionnalités Critiques Manquantes</span>
            <Badge variant="outline" className="bg-red-100 animate-pulse">
              CRITIQUE
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {criticalFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-red-300' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "Critique" ? "destructive" :
                        feature.level === "Sécurité" ? "destructive" :
                        feature.level === "Essentiel" ? "default" :
                        feature.level === "Communication" ? "default" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-red-600 border-red-300">
                          URGENT
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
                <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2 text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Système Critique Actif</span>
                    <Badge variant="outline" className="text-xs">OPÉRATIONNEL</Badge>
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

export default CriticalMissingPanel;
