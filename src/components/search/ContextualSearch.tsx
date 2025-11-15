import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { History, TrendingUp, Lightbulb, Search } from 'lucide-react';
import { useSavedSearches } from '@/hooks/useSavedSearches';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface ContextualSearchProps {
  currentQuery: string;
  currentFilters: Record<string, any>;
  onSuggestionClick: (query: string, filters?: Record<string, any>) => void;
}

const ContextualSearch: React.FC<ContextualSearchProps> = ({
  currentQuery,
  currentFilters,
  onSuggestionClick
}) => {
  const { searchHistory, savedSearches } = useSavedSearches();
  const { t } = useSafeI18nWithRouter();
  const [similarSearches, setSimilarSearches] = useState<string[]>([]);
  const [trendingQueries, setTrendingQueries] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Generate similar searches based on current query
  useEffect(() => {
    const generateSimilarSearches = () => {
      if (!currentQuery) return [];
      
      const similar = [
        `${currentQuery} ${t('search.new')}`,
        `${currentQuery} ${t('search.used')}`,
        `${currentQuery} ${t('searchTerms.cheap')}`,
        `${currentQuery} ${t('searchTerms.premium')}`,
        `${currentQuery} ${t('searchTerms.urgent')}`
      ];
      
      return similar.filter(query => 
        query.toLowerCase() !== currentQuery.toLowerCase()
      ).slice(0, 3);
    };

    setSimilarSearches(generateSimilarSearches());
  }, [currentQuery]);

  // Set trending queries (mock data - would come from analytics in real app)
  useEffect(() => {
    const trending = [
      'iPhone 14',
      'Voiture occasion',
      'Appartement Alger',
      'Laptop gaming',
      'Meubles salon'
    ];
    setTrendingQueries(trending);
  }, []);

  // Generate smart suggestions based on current search
  useEffect(() => {
    const generateSuggestions = () => {
      if (!currentQuery) return [];
      
      const smartSuggestions = [];
      
      // Category-based suggestions
      if (currentQuery.toLowerCase().includes('voiture') || currentQuery.toLowerCase().includes('auto')) {
        smartSuggestions.push(t('searchByBrand'));
        smartSuggestions.push(t('filterByYear'));
        smartSuggestions.push(t('searchInWilaya'));
      }
      
      if (currentQuery.toLowerCase().includes('iphone') || currentQuery.toLowerCase().includes('samsung')) {
        smartSuggestions.push(t('similarModels'));
        smartSuggestions.push(t('comparePrices'));
        smartSuggestions.push(t('filterByCapacity'));
      }
      
      if (currentQuery.toLowerCase().includes('appartement') || currentQuery.toLowerCase().includes('maison')) {
        smartSuggestions.push(t('searchByDistrict'));
        smartSuggestions.push(t('filterByArea'));
        smartSuggestions.push(t('viewPricePerSqm'));
      }
      
      return smartSuggestions.slice(0, 3);
    };

    setSuggestions(generateSuggestions());
  }, [currentQuery, currentFilters]);

  const recentSearches = searchHistory
    .filter(item => item.query !== currentQuery)
    .slice(0, 5);

  if (!currentQuery && recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 mb-6">
      {/* Similar Searches */}
      {similarSearches.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Search className="h-4 w-4" />
              {t('similarSearches')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {similarSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => onSuggestionClick(search)}
                  className="text-xs"
                >
                  {search}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Smart Suggestions */}
      {suggestions.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              {t('suggestionsImprovement')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                  💡 {suggestion}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <History className="h-4 w-4" />
              {t('recentSearches')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentSearches.map((item, index) => (
                <Button
                  key={item.id || index}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSuggestionClick(item.query, item.filters)}
                  className="w-full justify-start text-xs p-2 h-auto"
                >
                  <div className="text-left">
                    <div className="font-medium">{item.query}</div>
                    <div className="text-muted-foreground">
                      {item.results_count} {t('results')}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Trending Searches */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            {t('popularSearches')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingQueries.map((query, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-secondary/80"
                onClick={() => onSuggestionClick(query)}
              >
                {query}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Saved Searches */}
      {savedSearches.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Search className="h-4 w-4" />
              {t('savedSearches')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {savedSearches.slice(0, 3).map((search) => (
                <Button
                  key={search.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSuggestionClick(search.query, search.filters)}
                  className="w-full justify-start text-xs p-2 h-auto"
                >
                  <div className="text-left">
                    <div className="font-medium">{search.name}</div>
                    <div className="text-muted-foreground">
                      {search.query}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContextualSearch;