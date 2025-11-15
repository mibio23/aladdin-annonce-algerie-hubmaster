import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Settings, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SearchFeatureCard from "./search/SearchFeatureCard";
import SearchConfiguration from "./search/SearchConfiguration";

interface SearchEnhancementPanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const SearchEnhancementPanel: React.FC<SearchEnhancementPanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();
  const [searchSettings, setSearchSettings] = useState({
    maxSuggestions: [10],
    searchRadius: [50],
    minQueryLength: [2],
    autoSearchDelay: [300]
  });

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Recherche Désactivée" : "Recherche Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const searchFeatures = [
    {
      id: "aiPoweredSearch",
      name: "Recherche IA Avancée",
      description: "Intelligence artificielle pour comprendre les requêtes complexes",
      icon: Search,
      status: activeFeatures.aiPoweredSearch,
      level: "IA",
      color: "text-purple-600",
      critical: true
    },
    {
      id: "semanticSearch",
      name: "Recherche Sémantique",
      description: "Compréhension du sens et contexte des recherches",
      icon: Search,
      status: activeFeatures.semanticSearch,
      level: "Avancé",
      color: "text-blue-600",
      critical: true
    },
    {
      id: "multilingualSearch",
      name: "Recherche Multilingue",
      description: "Support Arabe, Français, Anglais avec traduction automatique",
      icon: Info,
      status: activeFeatures.multilingualSearch,
      level: "International",
      color: "text-green-600",
      critical: true
    },
    {
      id: "visualSearch",
      name: "Recherche Visuelle",
      description: "Recherche par image avec reconnaissance d'objets",
      icon: Search,
      status: activeFeatures.visualSearch,
      level: "Premium",
      color: "text-orange-600",
      critical: false
    },
    {
      id: "predictiveSearch",
      name: "Recherche Prédictive",
      description: "Suggestions basées sur le comportement et l'historique",
      icon: Settings,
      status: activeFeatures.predictiveSearch,
      level: "IA",
      color: "text-indigo-600",
      critical: false
    },
    {
      id: "geoIntelligentSearch",
      name: "Géo-Recherche Intelligente",
      description: "Recherche contextuelle basée sur la localisation précise",
      icon: Search,
      status: activeFeatures.geoIntelligentSearch,
      level: "Géo",
      color: "text-teal-600",
      critical: true
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-purple-600" />
            <span>Amélioration Recherche Aladdin</span>
            <Badge variant="outline" className="bg-purple-100 animate-pulse">
              RECHERCHE PRO
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {searchFeatures.map((feature) => (
            <SearchFeatureCard 
              key={feature.id}
              feature={feature}
              onToggle={handleToggle}
            />
          ))}

          <SearchConfiguration 
            settings={searchSettings}
            onSettingsChange={setSearchSettings}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchEnhancementPanel;
