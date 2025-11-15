

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wand2, Paintbrush, Type, Grid3X3, Layers, Zap, RefreshCw, Monitor, Tablet, Smartphone } from "lucide-react";

interface DesignSettings {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: string;
  fontSize: string;
  fontFamily: string;
  spacing: string;
}

interface DesignControlsPanelProps {
  designSettings: DesignSettings;
  onDesignChange: (key: string, value: string) => void;
  onApplyGlobalChanges: () => void;
}

const DesignControlsPanel: React.FC<DesignControlsPanelProps> = ({
  designSettings,
  onDesignChange,
  onApplyGlobalChanges
}) => {
  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <h3 className="font-bold text-xl mb-6 flex items-center">
        <Wand2 className="w-6 h-6 mr-2 text-purple-600" />
        Contrôles Design Globaux
      </h3>
      
      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors">Couleurs</TabsTrigger>
          <TabsTrigger value="typography">Typographie</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="components">Composants</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4 flex items-center">
              <Paintbrush className="w-4 h-4 mr-2" />
              Palette de Couleurs Globale
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryColor">Couleur Primaire</Label>
                <div className="flex space-x-2">
                  <Input
                    id="primaryColor"
                    type="color"
                    value={designSettings.primaryColor}
                    onChange={(e) => onDesignChange('primaryColor', e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={designSettings.primaryColor}
                    onChange={(e) => onDesignChange('primaryColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="secondaryColor">Couleur Secondaire</Label>
                <div className="flex space-x-2">
                  <Input
                    id="secondaryColor"
                    type="color"
                    value={designSettings.secondaryColor}
                    onChange={(e) => onDesignChange('secondaryColor', e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={designSettings.secondaryColor}
                    onChange={(e) => onDesignChange('secondaryColor', e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4 flex items-center">
              <Type className="w-4 h-4 mr-2" />
              Contrôle Typographique
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="fontFamily">Police</Label>
                <Input
                  id="fontFamily"
                  value={designSettings.fontFamily}
                  onChange={(e) => onDesignChange('fontFamily', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fontSize">Taille Base (px)</Label>
                <Input
                  id="fontSize"
                  type="number"
                  value={designSettings.fontSize}
                  onChange={(e) => onDesignChange('fontSize', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="textColor">Couleur Texte</Label>
                <Input
                  id="textColor"
                  type="color"
                  value={designSettings.textColor}
                  onChange={(e) => onDesignChange('textColor', e.target.value)}
                  className="h-10"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4 flex items-center">
              <Grid3X3 className="w-4 h-4 mr-2" />
              Contrôle Layout Global
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="borderRadius">Rayon Bordures (px)</Label>
                <Input
                  id="borderRadius"
                  type="number"
                  value={designSettings.borderRadius}
                  onChange={(e) => onDesignChange('borderRadius', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="spacing">Espacement (px)</Label>
                <Input
                  id="spacing"
                  type="number"
                  value={designSettings.spacing}
                  onChange={(e) => onDesignChange('spacing', e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="components" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4 flex items-center">
              <Layers className="w-4 h-4 mr-2" />
              Gestion Composants Globale
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm">
                <Monitor className="w-4 h-4 mr-2" />
                Desktop
              </Button>
              <Button variant="outline" size="sm">
                <Tablet className="w-4 h-4 mr-2" />
                Tablet
              </Button>
              <Button variant="outline" size="sm">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex space-x-4 mt-8">
        <Button onClick={onApplyGlobalChanges} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Zap className="w-4 h-4 mr-2" />
          Appliquer Toutes Modifications Globalement
        </Button>
        <Button variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Réinitialiser Tout
        </Button>
      </div>
    </Card>
  );
};

export default DesignControlsPanel;
