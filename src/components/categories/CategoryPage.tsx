'use client';

import React, { useState, useMemo } from 'react';
import { useCategories } from './CategoryProvider';
import { CategoryBreadcrumb } from './CategoryBreadcrumb';
import { CategoryIcon, CategoryIcons } from './CategoryIcon';
import { CategorySelector } from './CategorySelector';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CategoryStats } from './CategoryStats';
import { Grid, List, Filter, SortAsc, SortDesc } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryPageProps {
  categorySlug: string;
  className?: string;
  showFilters?: boolean;
  showStats?: boolean;
  showLanguageSwitcher?: boolean;
}

export function CategoryPage({ 
  categorySlug, 
  className,
  showFilters = true,
  showStats = true,
  showLanguageSwitcher = true
}: CategoryPageProps) {
  const { 
    language, 
    categories, 
    flattenedCategories, 
    selectedCategory, 
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    searchResults
  } = useCategories();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'count'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  
  // Check if RTL (Arabic)
  const isRTL = language === 'ar';
  
  // Get subcategories of current category
  const subcategories = useMemo(() => {
    if (!selectedCategory) return [];
    return flattenedCategories.filter(cat => cat.parent === selectedCategory.id);
  }, [selectedCategory, flattenedCategories]);
  
  // Sort subcategories
  const sortedSubcategories = useMemo(() => {
    const sorted = [...subcategories];
    
    if (sortBy === 'name') {
      sorted.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name, language, { sensitivity: 'base' });
        return sortOrder === 'asc' ? comparison : -comparison;
      });
    }
    
    return sorted;
  }, [subcategories, sortBy, sortOrder, language]);
  
  // Filter subcategories
  const filteredSubcategories = useMemo(() => {
    if (!selectedSubcategory) return sortedSubcategories;
    return sortedSubcategories.filter(cat => cat.id === selectedSubcategory);
  }, [sortedSubcategories, selectedSubcategory]);
  
  // Handle subcategory selection
  const handleSubcategorySelect = (categoryId: string) => {
    setSelectedSubcategory(prev => prev === categoryId ? '' : categoryId);
  };
  
  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  
  // Clear filters
  const clearFilters = () => {
    setSelectedSubcategory('');
    setSortBy('name');
    setSortOrder('asc');
  };
  
  // Get display categories
  const displayCategories = selectedSubcategory ? filteredSubcategories : sortedSubcategories;
  
  // Render category icon
  const renderCategoryIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    const IconComponent = CategoryIcons[iconName as keyof typeof CategoryIcons];
    return IconComponent ? <IconComponent size="lg" /> : <CategoryIcon name={iconName} size="lg" />;
  };

  if (!selectedCategory) {
    return (
      <div className={cn("flex flex-col items-center justify-center min-h-screen", className)}>
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-gray-50 dark:bg-gray-900", className)}>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Breadcrumb */}
            <div className="flex-1">
              <CategoryBreadcrumb />
            </div>
            
            {/* Language Switcher */}
            {showLanguageSwitcher && (
              <div className="flex-shrink-0">
                <LanguageSwitcher />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            {/* Category Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                {renderCategoryIcon(selectedCategory.icon)}
                <div>
                  <h1 className={cn(
                    "text-xl font-bold text-gray-900 dark:text-white",
                    isRTL && "text-right"
                  )}>
                    {selectedCategory.name}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {subcategories.length} {isRTL ? 'فئة فرعية' : 'sous-catégories'}
                  </p>
                </div>
              </div>
              
              {/* Category Selector */}
              <div className="mb-4">
                <CategorySelector
                  value={selectedCategory.id}
                  onChange={(id, slug) => {
                    // Navigate to new category
                    window.location.href = `/categories/${slug}`;
                  }}
                  placeholder={isRTL ? 'الانتقال إلى فئة أخرى' : 'Aller à une autre catégorie'}
                />
              </div>
              
              {/* Stats */}
              {showStats && (
                <CategoryStats compact />
              )}
            </div>
            
            {/* Filters */}
            {showFilters && subcategories.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className={cn(
                    "text-lg font-semibold",
                    isRTL && "text-right"
                  )}>
                    {isRTL ? 'المرشحات' : 'Filtres'}
                  </h2>
                  <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="md:hidden p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
                
                <div className={cn(
                  filtersOpen ? "block" : "hidden md:block"
                )}>
                  {/* Subcategories Filter */}
                  <div className="mb-4">
                    <h3 className={cn(
                      "text-sm font-medium mb-2",
                      isRTL && "text-right"
                    )}>
                      {isRTL ? 'الفئات الفرعية' : 'Sous-catégories'}
                    </h3>
                    <div className="space-y-1">
                      <button
                        onClick={() => handleSubcategorySelect('')}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                          !selectedSubcategory && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                          isRTL && "text-right"
                        )}
                      >
                        {isRTL ? 'الكل' : 'Tous'}
                      </button>
                      {subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => handleSubcategorySelect(subcategory.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                            selectedSubcategory === subcategory.id && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                            isRTL && "text-right"
                          )}
                        >
                          {subcategory.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort Options */}
                  <div className="mb-4">
                    <h3 className={cn(
                      "text-sm font-medium mb-2",
                      isRTL && "text-right"
                    )}>
                      {isRTL ? 'الترتيب' : 'Tri'}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{isRTL ? 'حسب الاسم' : 'Par nom'}</span>
                        <button
                          onClick={() => setSortBy('name')}
                          className={cn(
                            "p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700",
                            sortBy === 'name' && "bg-blue-50 dark:bg-blue-900/20"
                          )}
                        >
                          {sortBy === 'name' && (
                            sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clear Filters */}
                  <button
                    onClick={clearFilters}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {isRTL ? 'مسح المرشحات' : 'Effacer les filtres'}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* View Toggle and Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                    viewMode === 'grid' && "bg-blue-50 dark:bg-blue-900/20"
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                    viewMode === 'list' && "bg-blue-50 dark:bg-blue-900/20"
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {displayCategories.length} {isRTL ? 'عناصر' : 'éléments'}
                </span>
                <button
                  onClick={toggleSortOrder}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {/* Categories Grid/List */}
            {displayCategories.length > 0 ? (
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
                  : "space-y-2"
              )}>
                {displayCategories.map((category) => (
                  <div
                    key={category.id}
                    className={cn(
                      "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow",
                      viewMode === 'grid' 
                        ? "p-4 flex flex-col items-center text-center" 
                        : "p-4 flex items-center gap-4"
                    )}
                  >
                    {category.icon && (
                      <div className={cn(
                        "mb-2",
                        viewMode === 'list' && "flex-shrink-0"
                      )}>
                        {renderCategoryIcon(category.icon)}
                      </div>
                    )}
                    <div className={cn(
                      "flex-1",
                      viewMode === 'grid' ? "text-center" : ""
                    )}>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.subcategories?.length || 0} {isRTL ? 'فئة فرعية' : 'sous-catégories'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <div className="text-gray-500 dark:text-gray-400 mb-4">
                  <Filter className="w-12 h-12 mx-auto mb-2" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {isRTL ? 'لا توجد فئات فرعية' : 'Aucune sous-catégorie trouvée'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isRTL ? 'جرب تعديل المرشحات' : 'Essayez de modifier les filtres'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}