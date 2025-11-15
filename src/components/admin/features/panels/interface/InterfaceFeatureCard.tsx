

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";

interface InterfaceFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: boolean;
  level: string;
  color: string;
  critical?: boolean;
}

interface InterfaceFeatureCardProps {
  feature: InterfaceFeature;
  onToggle: (featureId: string, featureName: string) => void;
}

const InterfaceFeatureCard: React.FC<InterfaceFeatureCardProps> = ({
  feature,
  onToggle
}) => {
  return (
    <Card className="p-4 bg-white/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <feature.icon className={`w-6 h-6 ${feature.color}`} />
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium">{feature.name}</h4>
              <Badge variant="outline" className="text-xs">
                {feature.level}
              </Badge>
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
        <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
          <div className="flex items-center space-x-2 text-blue-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Système Actif</span>
            <Badge variant="outline" className="text-xs">LIVE</Badge>
          </div>
        </div>
      )}
    </Card>
  );
};

export default InterfaceFeatureCard;
