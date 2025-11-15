import React from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Bookmark, Bell } from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface SearchResultsHeaderProps {
  query: string;
  totalResults: number;
  searchTime?: number;
  activeFilters: Record<string, any>;
  onSaveSearch?: () => void;
  onCreateAlert?: () => void;
}

const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
  query,
  totalResults,
  searchTime: _searchTime,
  activeFilters,
  onSaveSearch,
  onCreateAlert
}) => {
  const { t } = useSafeI18nWithRouter();

  const getActiveFiltersCount = () => {
    return Object.values(activeFilters).filter(value => 
      value && value !== '' && value !== 'all'
    ).length;
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Search className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">
                  {t('searchResults')}
                  {query && (
                    <span className="ml-2">
                      {t('for')} "<span className="text-primary">{query}</span>"
                    </span>
                  )}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                  <span>
                    <strong className="text-foreground">{totalResults.toLocaleString()}</strong> {' '}
                    {totalResults === 1 ? t('announcementFound') : t('announcementsFound')}
                  </span>
                  {getActiveFiltersCount() > 0 && (
                    <>
                      <span>•</span>
                      <Badge variant="secondary">
                        {getActiveFiltersCount()} {getActiveFiltersCount() > 1 ? t('activeFilters') : t('activeFilter')}
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onSaveSearch}
              className="flex items-center gap-2"
            >
              <Bookmark className="h-4 w-4" />
              {t('save')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onCreateAlert}
              className="flex items-center gap-2"
            >
              <Bell className="h-4 w-4" />
              {t('createAlert')}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SearchResultsHeader;