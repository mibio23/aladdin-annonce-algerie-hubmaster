

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight } from "lucide-react";

interface TranslationSettingsProps {
  settings: {
    autoTranslate: boolean;
    qualityCheck: boolean;
    contextualTranslation: boolean;
    professionalTerms: string;
  };
  onSettingsChange: (settings: any) => void;
}

const TranslationSettings: React.FC<TranslationSettingsProps> = ({ 
  settings, 
  onSettingsChange 
}) => {
  return (
    <Card className="p-4">
      <h3 className="font-medium mb-4 flex items-center">
        <ArrowLeftRight className="w-4 h-4 mr-2" />
        Configuration Traduction Automatique
      </h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Traduction automatique</Label>
          <Switch
            checked={settings.autoTranslate}
            onCheckedChange={(checked) => 
              onSettingsChange({ ...settings, autoTranslate: checked })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Label>Vérification qualité</Label>
          <Switch
            checked={settings.qualityCheck}
            onCheckedChange={(checked) => 
              onSettingsChange({ ...settings, qualityCheck: checked })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Label>Traduction contextuelle</Label>
          <Switch
            checked={settings.contextualTranslation}
            onCheckedChange={(checked) => 
              onSettingsChange({ ...settings, contextualTranslation: checked })
            }
          />
        </div>
        <div>
          <Label>Termes professionnels personnalisés</Label>
          <Textarea
            value={settings.professionalTerms}
            onChange={(e) => 
              onSettingsChange({ ...settings, professionalTerms: e.target.value })
            }
            placeholder="Ajoutez des termes spécialisés pour améliorer la traduction..."
            className="mt-1"
          />
        </div>
      </div>
    </Card>
  );
};

export default TranslationSettings;
