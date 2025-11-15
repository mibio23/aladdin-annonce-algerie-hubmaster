import React, { useState, useEffect, useMemo } from "react";
import { Search, X, Home, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { keywordDatabase } from "@/data/search/keywordDatabase";
import { useSmartSearch } from "@/hooks/useSmartSearch";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import VoiceSearchEnhanced from "@/components/search/VoiceSearchEnhanced";
import { MenuCategory } from "@/data/categoryTypes";

interface SidebarSearchProps {
  className?: string;
  categoryData?: MenuCategory;
}

const SidebarSearch: React.FC<SidebarSearchProps> = ({ className, categoryData: propCategoryData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { search, addToHistory } = useSmartSearch();
  const { t } = useSafeI18nWithRouter();
  // Debug logs removed for performance
  // Extraction des sous-catégories avec leurs mots-clés
  const categoryData = useMemo(() => {
    if (!propCategoryData?.subcategories) return [];
    
    return propCategoryData.subcategories.map(subcat => ({
      ...subcat,
      keywords: keywordDatabase[subcat.slug] || [],
      items: subcat.subcategories || []
    }));
  }, [propCategoryData]);

  // Logique de recherche sophistiquée
  const performSearch = useMemo(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    categoryData.forEach(category => {
      // Recherche dans le nom de la catégorie
      if (category.name.toLowerCase().includes(query)) {
        results.push({
          type: 'category',
          item: category,
          relevance: 100,
          matchType: 'name'
        });
      }

      // Recherche dans les mots-clés
      const keywordMatches = category.keywords.filter(keyword => 
        keyword.toLowerCase().includes(query)
      );
      
      if (keywordMatches.length > 0) {
        results.push({
          type: 'category',
          item: category,
          relevance: 80,
          matchType: 'keyword',
          matchedKeywords: keywordMatches
        });
      }

      // Recherche dans les sous-éléments
      category.items.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
          results.push({
            type: 'item',
            item: item,
            parent: category,
            relevance: 90,
            matchType: 'name'
          });
        }
      });
    });

    // Tri par pertinence
    results.sort((a, b) => b.relevance - a.relevance);
    setSearchResults(results.slice(0, 10));
  }, [searchQuery, categoryData]);

  useEffect(() => {
    performSearch;
  }, [performSearch]);

  // Animation au survol de la zone droite de l'écran
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      
      if (mouseX > screenWidth - 50) {
        setIsVisible(true);
      } else if (mouseX < screenWidth - 350 && !isExpanded) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isExpanded]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  const handleItemClick = async (item: any) => {
    console.log('Navigation vers:', item);
    addToHistory(item.name);
    
    // Effectuer une recherche intelligente
    if (searchQuery.trim()) {
      const results = await search(searchQuery, { 
        context: 'sidebar',
        limit: 5 
      });
      console.log('Résultats intelligents:', results);
    }
  };

  const handleVoiceResult = (transcript: string) => {
    setSearchQuery(transcript);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setSelectedCategory(null);
  };

  return (
    <div
      className={cn(
        "fixed right-0 top-0 h-full z-50 transition-all duration-300 ease-in-out",
        isVisible ? "translate-x-0" : "translate-x-full",
        className
      )}
      onMouseEnter={() => {
        setIsVisible(true);
        setIsExpanded(true);
      }}
      onMouseLeave={() => {
        setIsExpanded(false);
        if (!searchQuery) {
          setIsVisible(false);
        }
      }}
    >
      {/* Trigger Zone (invisible) */}
      <div className="absolute -left-12 top-0 w-12 h-full" />
      
      {/* Sidebar Content */}
      <div className={cn(
        "bg-background/95 backdrop-blur-lg border-l border-border shadow-2xl h-full transition-all duration-300",
        isExpanded ? "w-80" : "w-16"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-primary" />
            {isExpanded && (
              <h3 className="font-semibold text-sm">{propCategoryData ? (t(`categories.${propCategoryData.slug}`) !== `categories.${propCategoryData.slug}` ? t(`categories.${propCategoryData.slug}`) : propCategoryData.name) : t('search.category')}</h3>
            )}
          </div>
          {isExpanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {isExpanded && (
          <div className="flex flex-col h-full">
            {/* Search Input */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                <VoiceSearchEnhanced 
                  onVoiceResult={handleVoiceResult}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 p-0"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                )}
              </div>

              {/* Quick Filters - Mots-clés dynamiques selon la catégorie */}
              {categoryData.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {categoryData.slice(0, 3).map((category, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="text-xs cursor-pointer hover:bg-primary/10"
                      onClick={() => setSearchQuery(category.name.toLowerCase())}
                    >
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
              {searchQuery && searchResults.length > 0 ? (
                <div className="p-4 space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {t('search.intelligentResults')} ({searchResults.length})
                  </h4>
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(result.item)}
                      className="p-3 rounded-lg border border-border hover:bg-accent/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{result.item.name}</p>
                          {result.parent && (
                            <p className="text-xs text-muted-foreground">
                              {t('search.in')} {result.parent.name}
                            </p>
                          )}
                          {result.matchedKeywords && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {result.matchedKeywords.slice(0, 2).map((keyword: string, idx: number) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery && searchResults.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  <p className="text-sm">{t('search.noResults')}</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {t('search.categories')} ({categoryData.length})
                  </h4>
                  {categoryData.map((category) => (
                    <div key={category.id} className="space-y-2">
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className="w-full text-left p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{t(`categories.${category.slug}`) !== `categories.${category.slug}` ? t(`categories.${category.slug}`) : category.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {category.items.length}
                            </Badge>
                            <ChevronRight 
                              className={cn(
                                "w-4 h-4 transition-transform", 
                                selectedCategory === category.id && "rotate-90"
                              )} 
                            />
                          </div>
                        </div>
                      </button>
                      
                      {selectedCategory === category.id && (
                        <div className="ml-4 space-y-1">
                          {category.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleItemClick(item)}
                              className="w-full text-left p-2 text-sm rounded hover:bg-accent/30 transition-colors"
                            >
                              {t(`categories.${item.slug}`) !== `categories.${item.slug}` ? t(`categories.${item.slug}`) : item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Collapsed State Icon */}
        {!isExpanded && (
          <div className="p-4 flex justify-center">
            <Filter className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarSearch;