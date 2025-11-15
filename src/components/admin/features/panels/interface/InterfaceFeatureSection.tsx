

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import InterfaceFeatureCard from "./InterfaceFeatureCard";

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

interface InterfaceFeatureSectionProps {
  title: string;
  features: InterfaceFeature[];
  gradient: string;
  bgColor: string;
  onToggle: (featureId: string, featureName: string) => void;
}

const InterfaceFeatureSection: React.FC<InterfaceFeatureSectionProps> = ({
  title,
  features,
  gradient,
  bgColor,
  onToggle
}) => {
  return (
    <Card className={`${bgColor} border-2`}>
      <CardHeader>
        <CardTitle className={`flex items-center space-x-2 ${gradient}`}>
          <Layers className="w-5 h-5" />
          <span>{title}</span>
          <Badge variant="outline" className="bg-white/50">
            {features.filter(f => f.status).length}/{features.length} actives
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature) => (
          <InterfaceFeatureCard
            key={feature.id}
            feature={feature}
            onToggle={onToggle}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default InterfaceFeatureSection;
