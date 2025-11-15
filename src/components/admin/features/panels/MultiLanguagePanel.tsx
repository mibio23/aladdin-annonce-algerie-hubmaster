import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, Languages, ArrowLeftRight, 
  Mic, Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LanguageToggle from "./multilanguage/LanguageToggle";
import TranslationSettings from "./multilanguage/TranslationSettings";
import AdvancedLanguageFeatures from "./multilanguage/AdvancedLanguageFeatures";

interface MultiLanguagePanelProps {
  activeFeatures: Record<string, boolean>;
  toggleFeature: (featureId: string) => void;
}

const MultiLanguagePanel: React.FC<MultiLanguagePanelProps> = ({
  activeFeatures,
  toggleFeature
}) => {
  const { toast } = useToast();
  const [translationSettings, setTranslationSettings] = useState({
    autoTranslate: true,
    qualityCheck: true,
    contextualTranslation: true,
    professionalTerms: ""
  });

  const handleToggle = (featureId: string, featureName: string) => {
    toggleFeature(featureId);
    toast({
      title: activeFeatures[featureId] ? "Langue Désactivée" : "Langue Activée",
      description: `${featureName} ${activeFeatures[featureId] ? 'désactivé' : 'activé'} avec succès`,
      variant: activeFeatures[featureId] ? "destructive" : "default"
    });
  };

  const languageFeatures = [
    {
      id: "arabicLanguageSupport",
      name: "Support Arabe Complet",
      description: "Interface RTL, clavier arabe, validation texte arabe",
      icon: Languages,
      status: activeFeatures.arabicLanguageSupport,
      level: "Arabe",
      color: "text-green-600",
      critical: true,
      flag: "🇸🇦"
    },
    {
      id: "frenchLanguageSupport",
      name: "Support Français Avancé",
      description: "Interface française complète, terminologie locale",
      icon: Languages,
      status: activeFeatures.frenchLanguageSupport,
      level: "Français",
      color: "text-blue-600",
      critical: true,
      flag: "🇫🇷"
    },
    {
      id: "englishLanguageSupport",
      name: "Support Anglais International",
      description: "Interface anglaise, terminologie business internationale",
      icon: Languages,
      status: activeFeatures.englishLanguageSupport,
      level: "English",
      color: "text-red-600",
      critical: true,
      flag: "🇬🇧"
    },
    {
      id: "germanLanguageSupport",
      name: "Support Allemand",
      description: "Interface allemande complète, adaptations culturelles",
      icon: Languages,
      status: activeFeatures.germanLanguageSupport,
      level: "Deutsch",
      color: "text-yellow-600",
      critical: false,
      flag: "🇩🇪"
    },
    {
      id: "spanishLanguageSupport",
      name: "Support Espagnol",
      description: "Interface espagnole, adaptations pour marchés hispanophones",
      icon: Languages,
      status: activeFeatures.spanishLanguageSupport,
      level: "Español",
      color: "text-orange-600",
      critical: false,
      flag: "🇪🇸"
    },
    {
      id: "italianLanguageSupport",
      name: "Support Italien",
      description: "Interface italienne, terminologie locale",
      icon: Languages,
      status: activeFeatures.italianLanguageSupport,
      level: "Italiano",
      color: "text-emerald-600",
      critical: false,
      flag: "🇮🇹"
    },
    {
      id: "autoTranslationEngine",
      name: "Moteur Traduction Automatique",
      description: "IA de traduction en temps réel entre toutes les langues",
      icon: ArrowLeftRight,
      status: activeFeatures.autoTranslationEngine,
      level: "IA Translation",
      color: "text-purple-600",
      critical: true,
      flag: "🤖"
    },
    {
      id: "voiceLanguageRecognition",
      name: "Reconnaissance Vocale Multi-Langues",
      description: "Recherche vocale en arabe, français, anglais, etc.",
      icon: Mic,
      status: activeFeatures.voiceLanguageRecognition,
      level: "Voice AI",
      color: "text-indigo-600",
      critical: false,
      flag: "🎤"
    },
    {
      id: "visualLanguageDetection",
      name: "Détection Langue Visuelle",
      description: "Reconnaissance automatique langue dans images/textes",
      icon: Eye,
      status: activeFeatures.visualLanguageDetection,
      level: "Vision AI",
      color: "text-teal-600",
      critical: false,
      flag: "👁️"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-600" />
            <span>Interface Multi-Langues Complète</span>
            <Badge variant="outline" className="bg-blue-100 animate-pulse">
              6 LANGUES
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="languages">Langues</TabsTrigger>
              <TabsTrigger value="translation">Traduction</TabsTrigger>
              <TabsTrigger value="advanced">Avancé</TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="space-y-4">
              {languageFeatures.map((feature) => (
                <LanguageToggle 
                  key={feature.id}
                  feature={feature}
                  onToggle={handleToggle}
                />
              ))}
            </TabsContent>

            <TabsContent value="translation" className="space-y-4">
              <TranslationSettings 
                settings={translationSettings}
                onSettingsChange={setTranslationSettings}
              />
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <AdvancedLanguageFeatures />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiLanguagePanel;
