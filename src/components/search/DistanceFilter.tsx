
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface DistanceFilterProps {
  distance: number;
  onDistanceChange: (value: number) => void;
  maxDistance?: number;
}

const DistanceFilter: React.FC<DistanceFilterProps> = ({
  distance,
  onDistanceChange,
  maxDistance = 10000, // Default max distance in km
}) => {
  const { t } = useSafeI18nWithRouter();
  
  return (
    <div>
      <Label htmlFor="distance-slider" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {t('search.advanced.distanceMax').replace('{distance}', distance.toString())}
      </Label>
      <Slider
        id="distance-slider"
        value={[distance]}
        onValueChange={(value) => onDistanceChange(value[0])}
        max={maxDistance}
        step={1}
        className="w-full"
      />
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-right">{distance} km</p>
    </div>
  );
};

export default DistanceFilter;
