

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

interface LanguageFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  status: boolean;
  level: string;
  color: string;
  critical: boolean;
  flag: string;
}

interface LanguageToggleProps {
  feature: LanguageFeature;
  onToggle: (featureId: string, featureName: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ feature, onToggle }) => {
  return (
    <Card className={`p-4 ${feature.critical ? 'border-blue-300' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <feature.icon className={`w-6 h-6 ${feature.color}`} />
            <span className="text-2xl">{feature.flag}</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium">{feature.name}</h4>
              <Badge variant={
                feature.level === "Arabe" ? "secondary" :
                feature.level === "Français" ? "default" :
                feature.level === "English" ? "destructive" :
                feature.level.includes("AI") ? "destructive" : "outline"
              } className="text-xs">
                {feature.level}
              </Badge>
              {feature.critical && (
                <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                  ESSENTIEL
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
            <span className="text-sm font-medium">Langue Active</span>
            <Badge variant="outline" className="text-xs">LIVE</Badge>
          </div>
        </div>
      )}
    </Card>
  );
};

export default LanguageToggle;
