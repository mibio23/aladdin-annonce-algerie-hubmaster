

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings, Plus } from "lucide-react";

interface SearchConfigProps {
  settings: {
    maxSuggestions: number[];
    searchRadius: number[];
    minQueryLength: number[];
    autoSearchDelay: number[];
  };
  onSettingsChange: (settings: any) => void;
}

const SearchConfiguration: React.FC<SearchConfigProps> = ({ 
  settings, 
  onSettingsChange 
}) => {
  return (
    <Card className="p-4 mt-6">
      <h3 className="font-medium mb-4 flex items-center">
        <Settings className="w-4 h-4 mr-2" />
        Configuration Recherche Avancée
      </h3>
      <div className="space-y-6">
        <div>
          <Label>Nombre max de suggestions: {settings.maxSuggestions[0]}</Label>
          <Slider
            value={settings.maxSuggestions}
            onValueChange={(value) => 
              onSettingsChange({ ...settings, maxSuggestions: value })
            }
            max={20}
            min={5}
            step={1}
            className="mt-2"
          />
        </div>
        <div>
          <Label>Rayon de recherche (km): {settings.searchRadius[0]}</Label>
          <Slider
            value={settings.searchRadius}
            onValueChange={(value) => 
              onSettingsChange({ ...settings, searchRadius: value })
            }
            max={200}
            min={1}
            step={1}
            className="mt-2"
          />
        </div>
        <div>
          <Label>Caractères min pour recherche: {settings.minQueryLength[0]}</Label>
          <Slider
            value={settings.minQueryLength}
            onValueChange={(value) => 
              onSettingsChange({ ...settings, minQueryLength: value })
            }
            max={5}
            min={1}
            step={1}
            className="mt-2"
          />
        </div>
        <div>
          <Label>Délai auto-recherche (ms): {settings.autoSearchDelay[0]}</Label>
          <Slider
            value={settings.autoSearchDelay}
            onValueChange={(value) => 
              onSettingsChange({ ...settings, autoSearchDelay: value })
            }
            max={1000}
            min={100}
            step={100}
            className="mt-2"
          />
        </div>
      </div>
      <Button className="w-full mt-4" variant="default">
        <Plus className="w-4 h-4 mr-2" />
        Appliquer Configuration
      </Button>
    </Card>
  );
};

export default SearchConfiguration;
