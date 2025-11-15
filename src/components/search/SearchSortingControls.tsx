import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Grid3X3, List, LayoutGrid } from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

export type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'date_desc' | 'date_asc' | 'views_desc';
export type ViewMode = 'grid' | 'list' | 'compact';

interface SearchSortingControlsProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  resultsPerPage: number;
  onResultsPerPageChange: (count: number) => void;
}

const SearchSortingControls: React.FC<SearchSortingControlsProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  resultsPerPage,
  onResultsPerPageChange
}) => {
  const { t } = useSafeI18nWithRouter();
  const sortOptions = [
    { value: 'relevance', label: t('sortOptions.relevance') },
    { value: 'date_desc', label: t('sortOptions.dateDesc') },
    { value: 'date_asc', label: t('sortOptions.dateAsc') },
    { value: 'price_asc', label: t('sortOptions.priceAsc') },
    { value: 'price_desc', label: t('sortOptions.priceDesc') },
    { value: 'views_desc', label: t('sortOptions.viewsDesc') },
  ];

  const resultsPerPageOptions = [12, 24, 48, 96];

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          <Select value={sortBy} onValueChange={(value: SortOption) => onSortChange(value)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={t('sortBy')} />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{t('show')}:</span>
          <Select 
            value={resultsPerPage.toString()} 
            onValueChange={(value) => onResultsPerPageChange(parseInt(value))}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {resultsPerPageOptions.map((count) => (
                <SelectItem key={count} value={count.toString()}>
                  {count}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('grid')}
          className="px-3"
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === 'list' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('list')}
          className="px-3"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === 'compact' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('compact')}
          className="px-3"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchSortingControls;