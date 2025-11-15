

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Eye, Scale, Settings, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ComplianceFeaturesPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const ComplianceFeaturesPanel: React.FC<ComplianceFeaturesPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Conformité Désactivée" : "Conformité Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivée' : 'activée'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const complianceFeatures = [
    {
      id: "gdprCompliance",
      name: "Conformité RGPD",
      description: "Respect automatique des règles RGPD européennes",
      icon: Shield,
      status: activeFeatures.gdprCompliance,
      level: "Légal",
      color: "text-red-600",
      critical: true
    },
    {
      id: "algerianLaws",
      name: "Lois Algériennes",
      description: "Conformité aux réglementations commerce algérien",
      icon: Scale,
      status: activeFeatures.algerianLaws,
      level: "Local",
      color: "text-green-600",
      critical: true
    },
    {
      id: "auditTrails",
      name: "Pistes d'Audit",
      description: "Traçabilité complète de toutes les actions",
      icon: FileText,
      status: activeFeatures.auditTrails,
      level: "Enterprise",
      color: "text-blue-600",
      critical: false
    },
    {
      id: "contentModeration",
      name: "Modération Contenu",
      description: "Détection automatique contenu inapproprié",
      icon: Eye,
      status: activeFeatures.contentModeration,
      level: "Premium",
      color: "text-purple-600",
      critical: false
    },
    {
      id: "riskAssessment",
      name: "Évaluation Risques",
      description: "Analyse automatique des risques commerciaux",
      icon: AlertTriangle,
      status: activeFeatures.riskAssessment,
      level: "Pro",
      color: "text-orange-600",
      critical: true
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-red-600" />
            <span>Conformité & Légal</span>
            <Badge variant="outline" className="bg-red-100">
              {complianceFeatures.filter(f => f.status).length}/{complianceFeatures.length} actives
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {complianceFeatures.map((feature) => (
            <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-red-300' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{feature.name}</h4>
                      <Badge variant={
                        feature.level === "Légal" ? "destructive" :
                        feature.level === "Enterprise" ? "destructive" :
                        feature.level === "Premium" ? "default" :
                        feature.level === "Local" ? "secondary" : "outline"
                      } className="text-xs">
                        {feature.level}
                      </Badge>
                      {feature.critical && (
                        <Badge variant="outline" className="text-xs text-red-600 border-red-300">
                          Obligatoire
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
                    : 'bg-pink-50 border-pink-200'
                }`}>
                  <div className={`flex items-center space-x-2 ${
                    feature.critical ? 'text-red-700' : 'text-pink-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      feature.critical ? 'bg-red-500' : 'bg-pink-500'
                    }`}></div>
                    <span className="text-sm font-medium">
                      {feature.critical ? 'Conformité Obligatoire Active' : 'Conformité Active'}
                    </span>
                  </div>
                  <div className={`text-xs mt-1 ${
                    feature.critical ? 'text-red-600' : 'text-pink-600'
                  }`}>
                    {feature.id === 'gdprCompliance' && "Cookies, consentement et données protégées"}
                    {feature.id === 'algerianLaws' && "Commerce électronique conforme loi DZ"}
                    {feature.id === 'auditTrails' && "Logs détaillés de toutes les actions"}
                    {feature.id === 'contentModeration' && "IA filtre automatiquement le contenu"}
                    {feature.id === 'riskAssessment' && "Analyse prédictive des risques commerciaux"}
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

export default ComplianceFeaturesPanel;
