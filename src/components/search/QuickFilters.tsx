import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, RotateCcw } from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface QuickFilter {
  id: string;
  label: string;
  value: string;
  count?: number;
  active?: boolean;
}

interface QuickFiltersProps {
  filters: QuickFilter[];
  onFilterToggle: (filterId: string) => void;
  onResetFilters: () => void;
  activeFilters: Record<string, any>;
}

const QuickFilters: React.FC<QuickFiltersProps> = ({
  filters: _filters,
  onFilterToggle,
  onResetFilters,
  activeFilters
}) => {
  const { t } = useSafeI18nWithRouter();
  const hasActiveFilters = Object.values(activeFilters).some(value => 
    value && value !== '' && value !== 'all'
  );

  const quickFilterSuggestions = [
    { id: 'urgent', label: t('quickFilterLabels.urgent'), value: 'true' },
    { id: 'new', label: t('quickFilterLabels.new'), value: 'new' },
    { id: 'price_under_10k', label: t('quickFilterLabels.priceUnder10k'), value: '10000' },
    { id: 'price_under_50k', label: t('quickFilterLabels.priceUnder50k'), value: '50000' },
    { id: 'with_photos', label: t('quickFilterLabels.withPhotos'), value: 'true' },
    { id: 'featured', label: t('quickFilterLabels.premium'), value: 'true' },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{t('quickFilters')}</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="h-auto p-2 text-xs"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            {t('resetFilters')}
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {quickFilterSuggestions.map((filter) => (
          <Badge
            key={filter.id}
            variant={activeFilters[filter.id] ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary/80 transition-colors"
            onClick={() => onFilterToggle(filter.id)}
          >
            {filter.label}
          </Badge>
        ))}
      </div>

      {hasActiveFilters && (
        <div className="mt-3 pt-3 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground mr-2">{t('activeFiltersLabel')}</span>
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value || value === '' || value === 'all') return null;
              
              const getFilterLabel = () => {
                switch (key) {
                  case 'category': return `${t('filter.category')} ${value}`;
                  case 'condition': return `${t('filter.condition')} ${value}`;
                  case 'location': return `${t('filter.location')} ${value}`;
                  case 'minPrice': return `${t('filter.minPrice')} ${value} DA`;
                  case 'maxPrice': return `${t('filter.maxPrice')} ${value} DA`;
                  default: return `${key}: ${value}`;
                }
              };

              return (
                <Badge key={key} variant="secondary" className="text-xs">
                  {getFilterLabel()}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                    onClick={() => onFilterToggle(key)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickFilters;