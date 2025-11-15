import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, Settings, Plus, Edit, Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdvancedInterfacePanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const AdvancedInterfacePanel: React.FC<AdvancedInterfacePanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();
  const [searchConfig, setSearchConfig] = useState({
    autoComplete: true,
    voiceSearch: true,
    imageSearch: true,
    geoLocation: true,
    categoryFilters: true,
    priceFilters: true,
    dateFilters: true,
    customFields: ""
  });

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Fonctionnalité Désactivée" : "Fonctionnalité Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const advancedInterfaceFeatures = [
    {
      id: "smartSearchEngine",
      name: "Moteur de Recherche Intelligent",
      description: "IA intégrée pour suggestions intelligentes et recherche sémantique avancée",
      icon: Search,
      status: activeFeatures.smartSearchEngine,
      level: "IA Avancée",
      color: "text-purple-600",
      critical: true
    },
    {
      id: "dynamicFormBuilder",
      name: "Constructeur de Formulaires Dynamiques",
      description: "Création et modification des formulaires en temps réel avec validations",
      icon: Edit,
      status: activeFeatures.dynamicFormBuilder,
      level: "Pro",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "advancedCategoryManager",
      name: "Gestionnaire de Catégories Avancé",
      description: "Gestion hiérarchique des catégories avec drag & drop et auto-organisation",
      icon: Settings,
      status: activeFeatures.advancedCategoryManager,
      level: "Essentiel",
      color: "text-green-600",
      critical: true
    },
    {
      id: "realTimeContentEditor",
      name: "Éditeur de Contenu Temps Réel",
      description: "Modification du contenu en direct avec prévisualisation instantanée",
      icon: Edit,
      status: activeFeatures.realTimeContentEditor,
      level: "Premium",
      color: "text-orange-600",
      critical: false
    },
    {
      id: "multiLanguageInterface",
      name: "Interface Multi-Langues",
      description: "Support complet Arabe, Français, Anglais avec RTL automatique",
      icon: Info,
      status: activeFeatures.multiLanguageInterface,
      level: "International",
      color: "text-indigo-600",
      critical: true
    },
    {
      id: "advancedUserRoleManager",
      name: "Gestionnaire de Rôles Avancé",
      description: "Système de permissions granulaire avec rôles personnalisés",
      icon: Settings,
      status: activeFeatures.advancedUserRoleManager,
      level: "Sécurité",
      color: "text-red-600",
      critical: true
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-blue-600" />
            <span>Interface Avancée & Contrôle Total</span>
            <Badge variant="outline" className="bg-blue-100 animate-pulse">
              CONTRÔLE AVANCÉ
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="search">Recherche</TabsTrigger>
              <TabsTrigger value="content">Contenu</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-4">
              {advancedInterfaceFeatures.map((feature) => (
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
                        onCheckedChange={() => handleToggle(feature.id, feature.name)}
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
            </TabsContent>

            <TabsContent value="search" className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium mb-4 flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Configuration Recherche Avancée
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <Label>Auto-complétion</Label>
                    <Switch
                      checked={searchConfig.autoComplete}
                      onCheckedChange={(checked) => setSearchConfig(prev => ({ ...prev, autoComplete: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Recherche vocale</Label>
                    <Switch
                      checked={searchConfig.voiceSearch}
                      onCheckedChange={(checked) => setSearchConfig(prev => ({ ...prev, voiceSearch: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Recherche par image</Label>
                    <Switch
                      checked={searchConfig.imageSearch}
                      onCheckedChange={(checked) => setSearchConfig(prev => ({ ...prev, imageSearch: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Géolocalisation</Label>
                    <Switch
                      checked={searchConfig.geoLocation}
                      onCheckedChange={(checked) => setSearchConfig(prev => ({ ...prev, geoLocation: checked }))}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Champs personnalisés de recherche</Label>
                  <Textarea
                    value={searchConfig.customFields}
                    onChange={(e) => setSearchConfig(prev => ({ ...prev, customFields: e.target.value }))}
                    placeholder="Ajoutez des champs de recherche personnalisés (un par ligne)"
                    className="mt-1"
                  />
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium mb-4 flex items-center">
                  <Edit className="w-4 h-4 mr-2" />
                  Gestion de Contenu Avancée
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label>Templates d'annonces personnalisés</Label>
                    <Button className="w-full mt-2" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Créer un nouveau template
                    </Button>
                  </div>
                  <div>
                    <Label>Champs dynamiques</Label>
                    <Button className="w-full mt-2" variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurer les champs
                    </Button>
                  </div>
                  <div>
                    <Label>Validation automatique</Label>
                    <Button className="w-full mt-2" variant="outline">
                      <Info className="w-4 h-4 mr-2" />
                      Règles de validation
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedInterfacePanel;
