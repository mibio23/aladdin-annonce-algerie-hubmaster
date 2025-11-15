
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import InterfaceFeatureSection from "./interface/InterfaceFeatureSection";
import DesignControlsPanel from "./interface/DesignControlsPanel";
import {
  coreDesignFeatures,
  animationFeatures,
  themeFeatures,
  accessibilityFeatures,
  performanceFeatures,
  pwaFeatures,
  uxFeatures,
  navigationFeatures,
  analyticsFeatures,
  aiUIFeatures,
  integrationFeatures
} from "./interface/featureData";

interface InterfaceDesignPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const InterfaceDesignPanel: React.FC<InterfaceDesignPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();
  const [designSettings, setDesignSettings] = useState({
    primaryColor: "#ffd700",
    secondaryColor: "#ff3333",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    borderRadius: "8",
    fontSize: "16",
    fontFamily: "Arial",
    spacing: "16"
  });

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Design Désactivé" : "Design Activé",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const handleDesignChange = (key: string, value: string) => {
    setDesignSettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    toast({
      title: "Design Modifié",
      description: `${key} mis à jour vers ${value}`,
      variant: "default"
    });
  };

  const applyGlobalChanges = () => {
    toast({
      title: "Modifications Globales Appliquées",
      description: "Tous les changements ont été appliqués à l'ensemble du site",
      variant: "default"
    });
  };

  // Add status to features
  const enrichFeatures = (features: any[]) => 
    features.map(f => ({ ...f, status: activeFeatures[f.id] || false }));

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Palette className="w-5 h-5 text-purple-600" />
            <span>Contrôle Interface & Design Total - Système Complet</span>
            <Badge variant="outline" className="bg-purple-100 animate-pulse">
              TOTAL CONTROL PRO
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="core">Core</TabsTrigger>
              <TabsTrigger value="animations">Animations</TabsTrigger>
              <TabsTrigger value="themes">Thèmes</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibilité</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="pwa">PWA</TabsTrigger>
            </TabsList>
            <TabsList className="grid w-full grid-cols-5 mt-2">
              <TabsTrigger value="ux">UX Custom</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="ai">IA UI</TabsTrigger>
              <TabsTrigger value="integration">Intégration</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-6">
              <InterfaceFeatureSection
                title="🎯 Fonctionnalités Design Core"
                features={enrichFeatures(coreDesignFeatures)}
                gradient="text-purple-600"
                bgColor="bg-gradient-to-br from-purple-50 to-indigo-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="animations" className="space-y-6">
              <InterfaceFeatureSection
                title="🎬 Système Animations Avancé"
                features={enrichFeatures(animationFeatures)}
                gradient="text-pink-600"
                bgColor="bg-gradient-to-br from-pink-50 to-rose-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="themes" className="space-y-6">
              <InterfaceFeatureSection
                title="🎨 Thèmes & Styling Avancé"
                features={enrichFeatures(themeFeatures)}
                gradient="text-yellow-600"
                bgColor="bg-gradient-to-br from-yellow-50 to-orange-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="accessibility" className="space-y-6">
              <InterfaceFeatureSection
                title="♿ Accessibilité & Inclusivité"
                features={enrichFeatures(accessibilityFeatures)}
                gradient="text-green-600"
                bgColor="bg-gradient-to-br from-green-50 to-emerald-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <InterfaceFeatureSection
                title="⚡ Performance & Optimisation"
                features={enrichFeatures(performanceFeatures)}
                gradient="text-blue-600"
                bgColor="bg-gradient-to-br from-blue-50 to-cyan-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="pwa" className="space-y-6">
              <InterfaceFeatureSection
                title="📱 PWA & Multi-Device"
                features={enrichFeatures(pwaFeatures)}
                gradient="text-indigo-600"
                bgColor="bg-gradient-to-br from-indigo-50 to-purple-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="ux" className="space-y-6">
              <InterfaceFeatureSection
                title="👤 Personnalisation UX"
                features={enrichFeatures(uxFeatures)}
                gradient="text-teal-600"
                bgColor="bg-gradient-to-br from-teal-50 to-cyan-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="navigation" className="space-y-6">
              <InterfaceFeatureSection
                title="🧭 Navigation Intelligente"
                features={enrichFeatures(navigationFeatures)}
                gradient="text-violet-600"
                bgColor="bg-gradient-to-br from-violet-50 to-purple-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <InterfaceFeatureSection
                title="📊 A/B Testing & Analytics"
                features={enrichFeatures(analyticsFeatures)}
                gradient="text-red-600"
                bgColor="bg-gradient-to-br from-red-50 to-pink-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <InterfaceFeatureSection
                title="🤖 Intelligence Artificielle UI"
                features={enrichFeatures(aiUIFeatures)}
                gradient="text-purple-600"
                bgColor="bg-gradient-to-br from-purple-50 to-indigo-50"
                onToggle={handleToggle}
              />
            </TabsContent>

            <TabsContent value="integration" className="space-y-6">
              <InterfaceFeatureSection
                title="🔗 Intégration Avancée"
                features={enrichFeatures(integrationFeatures)}
                gradient="text-gray-600"
                bgColor="bg-gradient-to-br from-gray-50 to-slate-50"
                onToggle={handleToggle}
              />
            </TabsContent>
          </Tabs>

          <Separator className="my-8" />

          <DesignControlsPanel
            designSettings={designSettings}
            onDesignChange={handleDesignChange}
            onApplyGlobalChanges={applyGlobalChanges}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default InterfaceDesignPanel;
