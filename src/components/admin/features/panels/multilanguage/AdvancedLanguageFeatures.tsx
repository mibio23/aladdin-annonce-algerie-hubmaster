

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Brain, Plus, Flag, ArrowLeftRight } from "lucide-react";

const AdvancedLanguageFeatures: React.FC = () => {
  return (
    <Card className="p-4">
      <h3 className="font-medium mb-4 flex items-center">
        <Brain className="w-4 h-4 mr-2" />
        Fonctionnalités Avancées
      </h3>
      <div className="space-y-4">
        <div>
          <Label>Détection automatique de langue</Label>
          <Button className="w-full mt-2" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Configurer l'IA de détection
          </Button>
        </div>
        <div>
          <Label>Adaptation culturelle</Label>
          <Button className="w-full mt-2" variant="outline">
            <Flag className="w-4 h-4 mr-2" />
            Paramètres culturels
          </Button>
        </div>
        <div>
          <Label>Interface RTL (Arabe)</Label>
          <Button className="w-full mt-2" variant="outline">
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Configuration RTL
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AdvancedLanguageFeatures;
