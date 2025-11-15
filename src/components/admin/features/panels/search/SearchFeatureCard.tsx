

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface SearchFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  status: boolean;
  level: string;
  color: string;
  critical: boolean;
}

interface SearchFeatureCardProps {
  feature: SearchFeature;
  onToggle: (featureId: string, featureName: string) => void;
}

const SearchFeatureCard: React.FC<SearchFeatureCardProps> = ({ 
  feature, 
  onToggle 
}) => {
  return (
    <Card className={`p-4 ${feature.critical ? 'border-purple-300' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <feature.icon className={`w-6 h-6 ${feature.color}`} />
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium">{feature.name}</h4>
              <Badge variant={
                feature.level === "IA" ? "destructive" :
                feature.level === "Avancé" ? "default" :
                feature.level === "Premium" ? "default" :
                feature.level === "International" ? "secondary" :
                feature.level === "Géo" ? "secondary" : "outline"
              } className="text-xs">
                {feature.level}
              </Badge>
              {feature.critical && (
                <Badge variant="outline" className="text-xs text-purple-600 border-purple-300">
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
            onCheckedChange={() => onToggle(feature.id, feature.name)}
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
            <span className="text-sm font-medium">Moteur de Recherche Actif</span>
            <Badge variant="outline" className="text-xs">OPTIMISÉ</Badge>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SearchFeatureCard;
