

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface InterfaceFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  status: boolean;
  level: string;
  color: string;
  critical: boolean;
}

interface FeatureManagementProps {
  features: InterfaceFeature[];
  onToggle: (featureId: string, featureName: string) => void;
}

const FeatureManagement: React.FC<FeatureManagementProps> = ({ 
  features, 
  onToggle 
}) => {
  return (
    <div className="space-y-4">
      {features.map((feature) => (
        <Card key={feature.id} className={`p-4 ${feature.critical ? 'border-blue-300' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">{feature.name}</h4>
                  <Badge variant={
                    feature.level === "IA Avancée" ? "destructive" :
                    feature.level === "Sécurité" ? "destructive" :
                    feature.level === "Premium" ? "default" :
                    feature.level === "International" ? "secondary" : "outline"
                  } className="text-xs">
                    {feature.level}
                  </Badge>
                  {feature.critical && (
                    <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                      Essentiel
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                checked={feature.status}
                onCheckedChange={() => onToggle(feature.id, feature.name)}
              />
              <Button variant="ghost" size="sm" disabled={!feature.status}>
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {feature.status && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Système Actif</span>
                <Badge variant="outline" className="text-xs">LIVE</Badge>
              </div>
              <div className="text-xs text-blue-600 mt-1">
                Configuration avancée disponible dans les paramètres
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeatureManagement;
