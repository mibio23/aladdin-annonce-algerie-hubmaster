
import React, { useState, useCallback, useMemo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Search, LoaderCircle } from "lucide-react";
import searchBackground from "@/assets/search-background.png";
import { useSmartSearch } from "@/hooks/useSmartSearch";
import { useCategories } from "@/services/supabaseCategoriesService";
import { MenuCategory } from "@/data/categoryTypes";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { logger } from "@/utils/silentLogger";

// Lazy load des composants lourds
const CategoryFilters = lazy(() => import("@/components/search/CategoryFilters"));
const MainSearchInput = lazy(() => import("@/components/search/MainSearchInput"));
const ActiveFiltersDisplay = lazy(() => import("@/components/search/ActiveFiltersDisplay"));
const DistanceFilter = lazy(() => import("@/components/search/DistanceFilter"));
const PriceRangeFilter = lazy(() => import("@/components/search/PriceRangeFilter"));

const AdvancedSearchBar = React.memo(() => {
  const { t, language, isRTL } = useSafeI18nWithRouter();
  const { search, isLoading, trackConversion } = useSmartSearch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedSpecialisation, setSelectedSpecialisation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [distance, setDistance] = useState(50);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCondition, setSelectedCondition] = useState<string>("");
  
  // État pour gérer les timeouts
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null);

  // Utiliser le hook useCategories pour récupérer les catégories
  const { data: categoryMenu = [], isLoading: categoriesLoading, error: categoriesError } = useCategories(language);
  
  // Catégories uniques avec memoization simple
  const uniqueCategories = useMemo(() => {
    if (!categoryMenu || categoryMenu.length === 0) return [];
    return categoryMenu.reduce((acc, category) => {
      if (!acc.find(cat => cat.slug === category.slug)) {
        acc.push(category);
      }
      return acc;
    }, [] as MenuCategory[]);
  }, [categoryMenu]);

  const selectedCategoryData = useMemo(() => 
    uniqueCategories.find(cat => cat.slug === selectedCategory), 
    [uniqueCategories, selectedCategory]
  );
  
  const selectedSubCategoryData = useMemo(() => 
    selectedCategoryData?.subcategories?.find(sub => sub.slug === selectedSubCategory), 
    [selectedCategoryData, selectedSubCategory]
  );

  const handleCategoryChange = useCallback((categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setSelectedSubCategory("");
    setSelectedSpecialisation("");
    logger.debug('category_change', { category: categorySlug });
  }, []);

  const handleSubCategoryChange = useCallback((subCategorySlug: string) => {
    setSelectedSubCategory(subCategorySlug);
    setSelectedSpecialisation("");
    logger.debug('subcategory_change', { subcategory: subCategorySlug });
  }, []);

  const handleDistanceChange = useCallback((value: number) => {
    setDistance(value);
  }, []);

  const handlePriceRangeChange = useCallback((value: [number, number]) => {
    setPriceRange(value);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    try {
      // Build URL parameters for navigation
      const searchParams = new URLSearchParams();
      
      if (searchQuery.trim()) {
        searchParams.set('q', searchQuery.trim());
        
        // Track with smart search for analytics
        const searchContext = selectedCategory || 'general';
        const results = await search(searchQuery, { 
          context: searchContext,
          limit: 20,
          trackingEnabled: true 
        });
        
        if (results && results.results && results.results.length > 0) {
          await trackConversion();
        }
      }
      
      if (selectedCategory) searchParams.set('category', selectedCategory);
      if (selectedSubCategory) searchParams.set('subcategory', selectedSubCategory);
      if (selectedSpecialisation) searchParams.set('specialisation', selectedSpecialisation);
      if (selectedLocation) searchParams.set('location', selectedLocation);
      if (selectedCondition) searchParams.set('condition', selectedCondition);
      if (distance !== 50) searchParams.set('distance', distance.toString());
      if (priceRange[0] > 0) searchParams.set('minPrice', priceRange[0].toString());
      if (priceRange[1] < 50000) searchParams.set('maxPrice', priceRange[1].toString());
      
      // Navigate to search results page with parameters
      navigate(`/search?${searchParams.toString()}`);
      logger.debug('search_performed', { 
        query: searchQuery, 
        category: selectedCategory,
        hasResults: false // Par défaut false, sera mis à jour si des résultats sont trouvés
      });
      
    } catch (error) {
      logger.error('Search error', error);
    } finally {
      if (timeoutRef) clearTimeout(timeoutRef);
      const newTimeout = setTimeout(() => {
        setIsSearching(false);
      }, 500);
      setTimeoutRef(newTimeout);
    }
  };

  const handleImageSearch = useCallback((imageFile: File) => {
    logger.debug('image_search', { fileName: imageFile.name, fileSize: imageFile.size });
    // Logic for image processing
  }, []);

  const handleLocationSelect = useCallback((location: { lat: number; lng: number; address: string }) => {
    setSelectedLocation(location.address);
    logger.debug('location_selected', { address: location.address });
  }, []);

  const handleSearchQueryChange = useCallback((query: string) => {
    setSearchQuery(query);
    setShowSuggestions(query.length > 1);
  }, []);

  const handleSearchQueryFocus = useCallback(() => {
    if (searchQuery.length > 1) {
      setShowSuggestions(true);
    }
  }, [searchQuery]);

  const handleSearchQueryBlur = useCallback(() => {
    if (timeoutRef) clearTimeout(timeoutRef);
    const newTimeout = setTimeout(() => setShowSuggestions(false), 150);
    setTimeoutRef(newTimeout);
  }, [timeoutRef]);

  const handleSuggestionSelect = useCallback((suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    logger.debug('suggestion_selected', { suggestion });
  }, []);

  const handleVoiceResult = useCallback((transcript: string) => {
    setSearchQuery(transcript);
    setShowSuggestions(transcript.length > 1);
    logger.debug('voice_search', { transcript });
  }, []);

  

  return (
    <div 
      className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-4 md:p-6 border border-gray-200 dark:border-slate-700/80 relative overflow-hidden"
      style={{
        backgroundImage: `url(${searchBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"></div>
      <div className="relative z-10">
      <div className="w-full flex justify-center mb-4">
        <h2 className={`title-primary text-slate-800 dark:text-slate-100 text-center ${isRTL ? '' : ''}`}>{t('search.advanced.title')}</h2>
      </div>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <Suspense fallback={<div className="animate-pulse h-20 bg-muted rounded" />}>
          {categoriesLoading ? (
            <div className="animate-pulse h-20 bg-muted rounded" />
          ) : categoriesError ? (
            <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
              <p className="text-red-600 text-sm">Erreur lors du chargement des catégories. Veuillez réessayer.</p>
            </div>
          ) : (
            <CategoryFilters
              uniqueCategories={uniqueCategories}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedSpecialisation={selectedSpecialisation}
              handleCategoryChange={handleCategoryChange}
              handleSubCategoryChange={handleSubCategoryChange}
              setSelectedSpecialisation={setSelectedSpecialisation}
              selectedCondition={selectedCondition}
              onConditionChange={setSelectedCondition}
              selectedCategoryData={selectedCategoryData}
              selectedSubCategoryData={selectedSubCategoryData}
            />
          )}
        </Suspense>

        <Suspense fallback={<div className="animate-pulse h-12 bg-muted rounded" />}>
          <MainSearchInput
            searchQuery={searchQuery}
            showSuggestions={showSuggestions}
            selectedLocation={selectedLocation}
            customPlaceholder={selectedCategoryData ? `${t('search.advanced.searchPlaceholder')} ${t(`categories.${selectedCategoryData.slug}`) !== `categories.${selectedCategoryData.slug}` ? t(`categories.${selectedCategoryData.slug}`) : selectedCategoryData.name}...` : undefined}
            handleSearchQueryChange={handleSearchQueryChange}
            handleSearchQueryFocus={handleSearchQueryFocus}
            handleSearchQueryBlur={handleSearchQueryBlur}
            handleSuggestionSelect={handleSuggestionSelect}
            handleVoiceResult={handleVoiceResult}
            handleLocationSelect={handleLocationSelect}
            handleImageSearch={handleImageSearch}
          />
        </Suspense>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 pt-0">
          <Suspense fallback={<div className="animate-pulse h-8 bg-muted rounded" />}>
            <DistanceFilter
              distance={distance}
              onDistanceChange={handleDistanceChange}
            />
          </Suspense>
          <Suspense fallback={<div className="animate-pulse h-8 bg-muted rounded" />}>
            <PriceRangeFilter
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </Suspense>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            type="submit"
            disabled={isSearching || isLoading}
            className="btn-publicite flex items-center justify-center min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {(isSearching || isLoading) ? (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <Search className="h-5 w-5 mr-2" />
            )}
            {(isSearching || isLoading) ? t('search.advanced.searching') : t('search.advanced.searchButton')}
          </button>
        </div>

        <Suspense fallback={<div className="animate-pulse h-6 bg-muted rounded" />}>
          <ActiveFiltersDisplay
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedSpecialisation={selectedSpecialisation}
            selectedCategoryData={selectedCategoryData}
            selectedSubCategoryData={selectedSubCategoryData}
            categoryIcons={{}} // Simplifié pour la performance
          />
        </Suspense>
      </form>
      </div>
    </div>
  );
});

AdvancedSearchBar.displayName = 'AdvancedSearchBar';

export default AdvancedSearchBar;
