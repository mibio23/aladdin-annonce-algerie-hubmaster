import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, Loader2, ChevronDown, ChevronUp, Download, Settings } from 'lucide-react';
import { useAnnouncements } from '@/hooks/useAnnouncements';
import { useCategories } from '@/services/supabaseCategoriesService';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useSavedSearches } from '@/hooks/useSavedSearches';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import SkeletonLoading from '@/components/search/SkeletonLoading';
import ContextualSearch from '@/components/search/ContextualSearch';
import SearchExport from '@/components/search/SearchExport';

// New enhanced components
import SearchResultsHeader from '@/components/search/SearchResultsHeader';
import SearchSortingControls, { SortOption, ViewMode } from '@/components/search/SearchSortingControls';
import QuickFilters from '@/components/search/QuickFilters';
import SearchResultsGrid from '@/components/search/SearchResultsGrid';
import SearchBreadcrumb from '@/components/search/SearchBreadcrumb';
import SearchPagination from '@/components/search/SearchPagination';
import SmartSuggestionsDisplay from '@/components/search/SmartSuggestionsDisplay';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useSafeI18nWithRouter();
  const { language } = useSafeI18nWithRouter();
  const { announcements = [], loading, fetchAnnouncements } = useAnnouncements();

  // Search filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedSubCategory, setSelectedSubCategory] = useState(searchParams.get('subcategory') || '');
  const [selectedSpecialisation, setSelectedSpecialisation] = useState(searchParams.get('specialisation') || '');
  const [selectedCondition, setSelectedCondition] = useState(searchParams.get('condition') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [distance, setDistance] = useState(parseInt(searchParams.get('distance') || '50'));

  // Enhanced UI state
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [resultsPerPage, setResultsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchTime, setSearchTime] = useState<number>();
  const [showExport, setShowExport] = useState(false);
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);

  // Utiliser le hook useCategories pour récupérer les catégories
  const { data: categoryMenu = [], isLoading: categoriesLoading } = useCategories(language);
  
  // Advanced hooks
  const { addToHistory } = useSavedSearches();
  
  // Infinite scroll setup
  const { results: infiniteResults, hasMore, loading: infiniteLoading, loadingRef } = useInfiniteScroll({
    initialResults: announcements,
    searchFilters: {
      search: searchQuery,
      category: selectedCategory,
      subcategory: selectedSubCategory,
      specialisation: selectedSpecialisation,
      condition: selectedCondition,
      minPrice: minPrice,
      maxPrice: maxPrice,
      location: location,
      distance: distance
    },
    enabled: infiniteScrollEnabled
  });

  useEffect(() => {
    // Effectuer la recherche avec les paramètres actuels
    handleSearch();
  }, [searchParams]);

  const handleSearch = async () => {
    const startTime = performance.now();
    
    const filters = {
      search: searchQuery,
      category: selectedCategory,
      subcategory: selectedSubCategory,
      specialisation: selectedSpecialisation,
      condition: selectedCondition,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      location: location,
      distance: distance,
      limit: resultsPerPage,
    };

    const results = await fetchAnnouncements(filters);
    
    const endTime = performance.now();
    const searchDuration = endTime - startTime;
    setSearchTime(searchDuration);
    
    // Add to search history using results from fetch
    await addToHistory(searchQuery, filters, results?.length || 0, searchDuration);
  };

  const handleViewAnnouncement = (announcement: any) => {
    navigate(`/annonce/${announcement.id}`);
  };

  const handleContactSeller = (announcement: any) => {
    navigate(`/messages?announcement=${announcement.id}`);
  };

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedCondition) params.set('condition', selectedCondition);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (location) params.set('location', location);
    
    navigate(`?${params.toString()}`, { replace: true });
  };

  // Enhanced handlers
  const handleSaveSearch = () => {
    setShowExport(true);
  };

  const handleCreateAlert = () => {
    // TODO: Implement alert creation with saved searches hook
    console.log('Create alert functionality to be implemented');
  };
  
  const handleSuggestionClick = (query: string, filters?: Record<string, any>) => {
    setSearchQuery(query);
    if (filters) {
      setSelectedCategory(filters.category || '');
      setSelectedCondition(filters.condition || '');
      setMinPrice(filters.minPrice?.toString() || '');
      setMaxPrice(filters.maxPrice?.toString() || '');
      setLocation(filters.location || '');
    }
    updateSearchParams();
    handleSearch();
  };

  const handleQuickFilterToggle = (filterId: string) => {
    // Handle quick filter toggles
    switch (filterId) {
      case 'urgent':
        // Toggle urgent filter
        break;
      case 'new':
        setSelectedCondition(selectedCondition === 'new' ? '' : 'new');
        break;
      case 'price_under_10k':
        setMaxPrice(maxPrice === '10000' ? '' : '10000');
        break;
      case 'price_under_50k':
        setMaxPrice(maxPrice === '50000' ? '' : '50000');
        break;
      default:
        // Reset specific filter
        if (filterId === 'category') setSelectedCategory('');
        if (filterId === 'condition') setSelectedCondition('');
        if (filterId === 'location') setLocation('');
        if (filterId === 'minPrice') setMinPrice('');
        if (filterId === 'maxPrice') setMaxPrice('');
        break;
    }
    updateSearchParams();
    handleSearch();
  };

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedCondition('');
    setMinPrice('');
    setMaxPrice('');
    setLocation('');
    updateSearchParams();
    handleSearch();
  };

  const activeFilters = {
    category: selectedCategory,
    condition: selectedCondition,
    location: location,
    minPrice: minPrice,
    maxPrice: maxPrice,
  };

  const totalPages = Math.ceil((announcements?.length || 0) / resultsPerPage);
  const displayResults = infiniteScrollEnabled ? infiniteResults : announcements;
  const paginatedResults = infiniteScrollEnabled 
    ? infiniteResults 
    : announcements?.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage) || [];

  const breadcrumbItems = [
    { label: t('search.page.title'), href: '/search' },
  ];

  if (selectedCategory) {
    const category = categoryMenu.find(cat => cat.slug === selectedCategory);
    if (category) {
      breadcrumbItems.push({ label: category.name, href: `/category/${category.slug}` });
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <SearchBreadcrumb items={breadcrumbItems} query={searchQuery} />

          {/* Enhanced Search Header */}
          <SearchResultsHeader
            query={searchQuery}
            totalResults={announcements?.length || 0}
            searchTime={searchTime}
            activeFilters={activeFilters}
            onSaveSearch={handleSaveSearch}
            onCreateAlert={handleCreateAlert}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Sidebar Filters */}
            <div className="lg:col-span-1">
              {/* Contextual Search Suggestions */}
              <ContextualSearch
                currentQuery={searchQuery}
                currentFilters={activeFilters}
                onSuggestionClick={handleSuggestionClick}
              />
              
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    {t('search.filters')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Quick Filters */}
                  <QuickFilters
                    filters={[]}
                    onFilterToggle={handleQuickFilterToggle}
                    onResetFilters={handleResetFilters}
                    activeFilters={activeFilters}
                  />

                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('search.advanced.searchLabel')}</label>
                    <Input
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder={t('search.advanced.searchPlaceholder')}
                    />
                  </div>

                  {/* Advanced Filters - Collapsible */}
                  <Collapsible open={showAdvancedFilters} onOpenChange={setShowAdvancedFilters}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="text-sm font-medium">{t('search.advanced.title')}</span>
                        {showAdvancedFilters ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t('search.page.category')}</label>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('search.page.allCategories')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">{t('search.page.allCategories')}</SelectItem>
                            {categoriesLoading ? (
                              <SelectItem value="" disabled>
                                {t('search.loading')}
                              </SelectItem>
                            ) : (
                              categoryMenu.map((category) => (
                                <SelectItem key={category.slug} value={category.slug}>
                                  {category.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">{t('search.advanced.condition')}</label>
                        <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('search.page.allConditions')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">{t('search.page.allConditions')}</SelectItem>
                            <SelectItem value="new">{t('search.advanced.new')}</SelectItem>
                            <SelectItem value="like_new">{t('search.page.likeNew')}</SelectItem>
                            <SelectItem value="good">{t('search.page.good')}</SelectItem>
                            <SelectItem value="fair">{t('search.page.fair')}</SelectItem>
                            <SelectItem value="poor">{t('search.page.poor')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-sm font-medium mb-2 block">{t('search.page.minPrice')}</label>
                          <Input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="0"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">{t('search.page.maxPrice')}</label>
                          <Input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="∞"
                            min="0"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">{t('search.page.location')}</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder={t('search.page.locationPlaceholder')}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button 
                    onClick={() => {
                      updateSearchParams();
                      handleSearch();
                    }}
                    className="w-full"
                    disabled={loading}
                  >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t('search.advanced.searching')}
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          {t('search.advanced.searchButton')}
                        </>
                      )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Results Section */}
            <div className="lg:col-span-3">
              {!loading && displayResults.length > 0 && (
                <div className="flex items-center justify-between mb-6">
                  <SearchSortingControls
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    resultsPerPage={resultsPerPage}
                    onResultsPerPageChange={setResultsPerPage}
                  />
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInfiniteScrollEnabled(!infiniteScrollEnabled)}
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      {infiniteScrollEnabled ? t('search.page.pagination') : t('search.page.infiniteScroll')}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowExport(true)}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      {t('search.page.export')}
                    </Button>
                  </div>
                </div>
              )}

              {loading && !infiniteScrollEnabled ? (
                <SkeletonLoading viewMode={viewMode} count={resultsPerPage} />
              ) : (
                <>
                  {/* Show smart suggestions if no results */}
                  {!loading && displayResults.length === 0 && searchQuery && (
                    <SmartSuggestionsDisplay
                      context={{
                        searchType: (searchParams.get('searchType') as 'quick' | 'advanced') || 'advanced',
                        originalQuery: searchQuery,
                        appliedFilters: activeFilters,
                        language: language,
                        location: location
                      }}
                      onSuggestionClick={(suggestion) => {
                        if (suggestion.query) {
                          setSearchQuery(suggestion.query);
                        }
                        if (suggestion.filters) {
                          Object.entries(suggestion.filters).forEach(([key, value]) => {
                            switch (key) {
                              case 'category':
                                setSelectedCategory(value);
                                break;
                              case 'subcategory':
                                setSelectedSubCategory(value);
                                break;
                              case 'specialisation':
                                setSelectedSpecialisation(value);
                                break;
                              case 'condition':
                                setSelectedCondition(value);
                                break;
                              case 'location':
                                setLocation(value);
                                break;
                              case 'minPrice':
                                setMinPrice(value.toString());
                                break;
                              case 'maxPrice':
                                setMaxPrice(value.toString());
                                break;
                            }
                          });
                        }
                        handleSearch();
                      }}
                      className="mt-8"
                    />
                  )}
                  
                  <SearchResultsGrid
                    announcements={paginatedResults}
                    viewMode={viewMode}
                    onViewAnnouncement={handleViewAnnouncement}
                    onContactSeller={handleContactSeller}
                  />
                  
                  {/* Infinite scroll loading indicator */}
                  {infiniteScrollEnabled && hasMore && (
                    <div ref={loadingRef} className="py-8">
                      <SkeletonLoading viewMode={viewMode} count={6} />
                    </div>
                  )}
                  
                  {infiniteScrollEnabled && !hasMore && paginatedResults.length > 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      {t('search.endOfResults')}
                    </div>
                  )}
                </>
              )}

              {/* Enhanced Pagination */}
              {displayResults.length > 0 && !infiniteScrollEnabled && (
                <SearchPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalResults={displayResults.length}
                  resultsPerPage={resultsPerPage}
                  onPageChange={setCurrentPage}
                  loading={loading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Export Modal */}
      <SearchExport
        announcements={displayResults}
        searchQuery={searchQuery}
        isOpen={showExport}
        onClose={() => setShowExport(false)}
      />
    </div>
  );
};

export default SearchResultsPage;