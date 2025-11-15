
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  maxPrice?: number;
  currency?: string;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  priceRange,
  onPriceRangeChange,
  maxPrice = 999999999, // Default max price (infini)
  currency = 'DZD',
}) => {
  const { t } = useSafeI18nWithRouter();
  
  return (
    <div>
      <Label htmlFor="price-range-slider" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {t('search.advanced.priceRangeLabel')
          .replace('{min}', priceRange[0].toString())
          .replace('{max}', priceRange[1].toString())
          .replace('{currency}', currency)
        }
      </Label>
      <Slider
        id="price-range-slider"
        value={priceRange}
        onValueChange={(value) => onPriceRangeChange(value as [number, number])}
        max={maxPrice}
        step={100}
        minStepsBetweenThumbs={1}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
        <span>{priceRange[0]} {currency}</span>
        <span>{priceRange[1]} {currency}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
