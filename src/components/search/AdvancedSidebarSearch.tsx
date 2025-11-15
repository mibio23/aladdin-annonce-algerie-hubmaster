import React, { useState, useEffect, useMemo, useRef } from "react";
import { Search, X, Filter, ChevronRight, MapPin, Camera, Brain, Clock, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { keywordDatabase } from "@/data/search/keywordDatabase";
import { useSmartSearch } from "@/hooks/useSmartSearch";
import VoiceSearchEnhanced from "@/components/search/VoiceSearchEnhanced";
import LocationFilter from "@/components/search/LocationFilter";
import ConditionFilter from "@/components/search/ConditionFilter";
import { MenuCategory } from "@/data/categoryTypes";

import { useToast } from "@/components/ui/use-toast";
import { pipeline, env } from '@huggingface/transformers';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

// Configuration pour les transformers
env.allowLocalModels = false;
env.useBrowserCache = true;

interface AdvancedSidebarSearchProps {
  className?: string;
  categoryData?: MenuCategory;
}

interface SearchFilters {
  location?: string;
  priceRange: [number, number];
  condition: string;
  timeFilter: string;
  sortBy: string;
  aiAssisted: boolean;
  visualSearch: boolean;
  semanticSearch: boolean;
}

interface AISearchSuggestion {
  query: string;
  confidence: number;
  type: 'semantic' | 'contextual' | 'predictive';
  reason: string;
}

const AdvancedSidebarSearch: React.FC<AdvancedSidebarSearchProps> = ({ 
  className, 
  categoryData: propCategoryData 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [_aiSuggestions, setAiSuggestions] = useState<AISearchSuggestion[]>([]);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [searchHistory, _setSearchHistory] = useState<string[]>([]);
  const [_trendingKeywords, setTrendingKeywords] = useState<string[]>([]);
  const [_personalizedSuggestions, setPersonalizedSuggestions] = useState<string[]>([]);
  
  const { search, addToHistory, getPersonalizedSuggestions, getTrendingKeywords } = useSmartSearch();
  const { toast } = useToast();
  const { t } = useSafeI18nWithRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [filters, setFilters] = useState<SearchFilters>({
    priceRange: [0, 100000],
    condition: 'all',
    timeFilter: 'all',
    sortBy: 'relevance',
    aiAssisted: true,
    visualSearch: true,
    semanticSearch: true
  });

  // Extraction des sous-catégories avec leurs mots-clés
  const categoryData = useMemo(() => {
    if (!propCategoryData?.subcategories) return [];
    
    return propCategoryData.subcategories.map(subcat => ({
      ...subcat,
      keywords: keywordDatabase[subcat.slug] || [],
      items: subcat.subcategories || []
    }));
  }, [propCategoryData]);

  // Détection automatique de la géolocalisation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Utiliser un service de géocodage inverse pour obtenir la wilaya
            // Note: Utiliser Nominatim (gratuit) au lieu d'une API payante
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=10&addressdetails=1`
            );
            const data = await response.json();
            if (data && data.address) {
              const wilaya = data.address.state || data.address.province || data.address.city;
              if (wilaya) {
                setUserLocation(wilaya);
                setFilters(prev => ({ ...prev, location: wilaya }));
              }
            }
          } catch (error) {
            console.log('Géolocalisation non disponible');
          }
        },
        () => {
          console.log('Géolocalisation refusée');
        }
      );
    }
  }, []);

  // Chargement des suggestions personnalisées et des tendances
  useEffect(() => {
    const loadSuggestions = async () => {
      try {
        const [personalized, trending] = await Promise.all([
          getPersonalizedSuggestions(searchQuery),
          getTrendingKeywords()
        ]);
        setPersonalizedSuggestions(personalized);
        setTrendingKeywords(trending);
      } catch (error) {
        console.error('Erreur lors du chargement des suggestions:', error);
      }
    };

    loadSuggestions();
  }, [searchQuery, getPersonalizedSuggestions, getTrendingKeywords]);

  // Génération de suggestions IA sémantiques
  const generateAISuggestions = async (query: string) => {
    if (!filters.aiAssisted || !query.trim()) return;

    try {
      // Simulation d'un appel IA pour les suggestions sémantiques
      const suggestions: AISearchSuggestion[] = [
        {
          query: `${query} neuf`,
          confidence: 0.85,
          type: 'contextual',
          reason: 'Les utilisateurs recherchent souvent des produits neufs'
        },
        {
          query: `${query} occasion`,
          confidence: 0.75,
          type: 'contextual', 
          reason: 'Alternative populaire pour économiser'
        },
        {
          query: `${query} ${userLocation || 'Alger'}`,
          confidence: 0.90,
          type: 'contextual',
          reason: 'Recherche localisée recommandée'
        }
      ];

      setAiSuggestions(suggestions);
    } catch (error) {
      console.error('Erreur génération suggestions IA:', error);
    }
  };

  // Recherche visuelle par image
  const handleImageSearch = async (file: File) => {
    if (!filters.visualSearch) return;
    
    setIsProcessingImage(true);
    try {
      // Charger le modèle de classification d'images
      const classifier = await pipeline('image-classification', 'microsoft/resnet-50', {
        device: 'webgpu'
      });

      const imageUrl = URL.createObjectURL(file);
      const results = await classifier(imageUrl);

      // Extraire les labels les plus pertinents
      const keywords = results.slice(0, 3).map((result: any) => result.label);
      const searchTerm = keywords.join(' ');
      
      setSearchQuery(searchTerm);
      toast({
        title: "Image analysée",
        description: `Recherche générée: ${searchTerm}`,
      });

      URL.revokeObjectURL(imageUrl);
    } catch (error) {
      console.error('Erreur reconnaissance image:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'analyser l'image",
        variant: "destructive",
      });
    } finally {
      setIsProcessingImage(false);
    }
  };

  // Logique de recherche sophistiquée avec filtres
  const performAdvancedSearch = useMemo(() => {
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
          matchType: 'name',
          location: userLocation,
          isLocal: filters.location === userLocation
        });
      }

      // Recherche dans les mots-clés avec IA sémantique
      const keywordMatches = category.keywords.filter(keyword => 
        keyword.toLowerCase().includes(query)
      );
      
      if (keywordMatches.length > 0) {
        results.push({
          type: 'category',
          item: category,
          relevance: 80 + (filters.location === userLocation ? 20 : 0),
          matchType: 'keyword',
          matchedKeywords: keywordMatches,
          isLocal: filters.location === userLocation
        });
      }

      // Recherche dans les sous-éléments
      category.items.forEach(item => {
        if (item.name.toLowerCase().includes(query)) {
          results.push({
            type: 'item',
            item: item,
            parent: category,
            relevance: 90 + (filters.location === userLocation ? 10 : 0),
            matchType: 'name',
            isLocal: filters.location === userLocation
          });
        }
      });
    });

    // Tri intelligent selon les filtres
    results.sort((a, b) => {
      if (filters.sortBy === 'location' && a.isLocal !== b.isLocal) {
        return a.isLocal ? -1 : 1;
      }
      return b.relevance - a.relevance;
    });

    setSearchResults(results.slice(0, 10));
  }, [searchQuery, categoryData, filters, userLocation]);

  useEffect(() => {
    performAdvancedSearch;
    generateAISuggestions(searchQuery);
  }, [performAdvancedSearch, searchQuery]);

  // Animation au survol de la zone droite de l'écran
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const mouseX = e.clientX;
      
      if (mouseX > screenWidth - 50) {
        setIsVisible(true);
      } else if (mouseX < screenWidth - 450 && !isExpanded) {
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
    
    // Recherche intelligente avec contexte
    if (searchQuery.trim()) {
      const results = await search(searchQuery, { 
        context: 'advanced_sidebar',
        limit: 10,
        filters: filters
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
    setAiSuggestions([]);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
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
        "bg-background/95 backdrop-blur-lg border-l border-border shadow-2xl h-full transition-all duration-300 overflow-visible",
        isExpanded ? "w-96" : "w-16"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur-lg z-10">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            {isExpanded && (
              <h3 className="font-semibold text-sm">{t('search.aiSearch')} - {propCategoryData ? (t(`categories.${propCategoryData.slug}`) !== `categories.${propCategoryData.slug}` ? t(`categories.${propCategoryData.slug}`) : propCategoryData.name) : t('search.category')}</h3>
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
          <div className="flex flex-col h-full pb-4">
            {/* Search Input avec fonctionnalités avancées */}
            <div className="p-4 border-b border-border space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('search.intelligentSearch')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-20"
                />
                
                {/* Boutons d'actions rapides */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  {/* Recherche vocale */}
                  <VoiceSearchEnhanced 
                    onVoiceResult={handleVoiceResult}
                    className="w-6 h-6"
                  />
                  
                  {/* Recherche par image */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-6 h-6 p-0"
                    disabled={isProcessingImage}
                  >
                    <Camera className="w-3 h-3" />
                  </Button>
                  
                  {/* Clear */}
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearSearch}
                      className="w-6 h-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  )}
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleImageSearch(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
              </div>

              {/* Géolocalisation */}
              {userLocation && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{t('search.locatedAt')} {userLocation}</span>
                </div>
              )}

              {/* Suggestions IA sémantiques - Désactivées */}

              {/* Mots-clés tendance et personnalisés - Désactivées */}
            </div>

            {/* Filtres avancés */}
            <div className="p-4 border-b border-border space-y-4 relative z-50">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">{t('search.intelligentFilters')}</span>
              </div>

              {/* Localisation intelligente */}
              <LocationFilter
                value={filters.location}
                onChange={(value) => handleFilterChange('location', value)}
              />

              {/* Fourchette de prix */}
              <div className="space-y-2">
                <label className="text-xs font-medium">
                  {t('search.price')}: {filters.priceRange[0]} - {filters.priceRange[1]} DA
                </label>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange('priceRange', value)}
                  max={100000}
                  step={1000}
                  className="w-full"
                />
              </div>

              {/* État du produit */}
              <ConditionFilter
                value={filters.condition}
                onChange={(value) => handleFilterChange('condition', value)}
              />

              {/* Options IA */}
              <Separator />
              <div className="space-y-3">
                <span className="text-xs font-medium text-primary">{t('search.artificialIntelligence')}</span>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs">{t('search.aiSuggestions')}</span>
                  <Switch 
                    checked={filters.aiAssisted}
                    onCheckedChange={(value) => handleFilterChange('aiAssisted', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs">{t('search.advanced.visualSearch')}</span>
                  <Switch 
                    checked={filters.visualSearch}
                    onCheckedChange={(value) => handleFilterChange('visualSearch', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs">{t('search.advanced.semanticSearch')}</span>
                  <Switch 
                    checked={filters.semanticSearch}
                    onCheckedChange={(value) => handleFilterChange('semanticSearch', value)}
                  />
                </div>
              </div>
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
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-sm">{result.item.name}</p>
                            {result.isLocal && (
                              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                <MapPin className="w-2 h-2 mr-1" />
                                {t('search.local')}
                              </Badge>
                            )}
                          </div>
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
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-12 bg-secondary rounded-full h-1">
                              <div 
                                className="bg-primary h-1 rounded-full" 
                                style={{ width: `${result.relevance}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {result.relevance}% {t('search.relevant')}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchQuery && searchResults.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground space-y-2">
                  <MessageCircle className="w-8 h-8 mx-auto opacity-50" />
                  <p className="text-sm">{t('search.noResults')}</p>
                  <p className="text-xs">{t('search.adjustFilters')}</p>
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
                          <span className="font-medium text-sm">{category.name}</span>
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
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Historique récent */}
            {searchHistory.length > 0 && (
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs font-medium text-muted-foreground">{t('search.recentSearches')}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {searchHistory.slice(0, 3).map((query, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="text-xs cursor-pointer hover:bg-accent/50"
                      onClick={() => setSearchQuery(query)}
                    >
                      {query}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Collapsed State Icon */}
        {!isExpanded && (
          <div className="p-4 flex justify-center">
            <Brain className="w-5 h-5 text-primary animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSidebarSearch;