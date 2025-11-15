'use client';

import React, { useState, useMemo } from 'react';
import { useCategories } from './CategoryProvider';
import { ChevronDown, Search, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  value?: string;
  onChange: (categoryId: string, categorySlug: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  showSubcategories?: boolean;
  maxDepth?: number;
}

export function CategorySelector({ 
  value, 
  onChange, 
  placeholder,
  className,
  disabled = false,
  showSubcategories = true,
  maxDepth = 3
}: CategorySelectorProps) {
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
  
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  
  // Check if RTL (Arabic)
  const isRTL = language === 'ar';
  
  // Get selected category
  const selectedCategoryData = useMemo(() => {
    if (!value) return null;
    return flattenedCategories.find(cat => cat.id === value) || null;
  }, [value, flattenedCategories]);
  
  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (searchQuery.trim() === '') {
      return flattenedCategories;
    }
    return searchResults;
  }, [searchQuery, searchResults, flattenedCategories]);
  
  // Group categories by level for display
  const categoriesByLevel = useMemo(() => {
    const groups: Record<number, any[]> = {};
    
    filteredCategories.forEach(category => {
      const level = category.level || 0;
      if (!groups[level]) {
        groups[level] = [];
      }
      groups[level].push(category);
    });
    
    return groups;
  }, [filteredCategories]);
  
  // Handle category selection
  const handleSelectCategory = (category: any) => {
    onChange(category.id, category.slug);
    setSelectedCategory(category);
    setIsOpen(false);
    setSearchQuery('');
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, filteredCategories.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCategories[focusedIndex]) {
          handleSelectCategory(filteredCategories[focusedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };
  
  // Clear selection
  const handleClear = () => {
    onChange('', '');
    setSelectedCategory(null);
  };
  
  // Default placeholder based on language
  const defaultPlaceholder = isRTL ? 'اختر فئة' : 'Sélectionner une catégorie';
  
  return (
    <div className={cn("relative w-full", className)}>
      {/* Selected Category Display */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
          isRTL && "text-right"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="block truncate">
          {selectedCategoryData ? selectedCategoryData.name : (placeholder || defaultPlaceholder)}
        </span>
        <div className="flex items-center gap-2">
          {selectedCategoryData && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <span className="sr-only">Clear</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
        </div>
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div className={cn(
          "absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto",
          isRTL && "right-0"
        )}>
          {/* Search Input */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={isRTL ? "البحث عن فئة" : "Rechercher une catégorie"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm",
                  isRTL && "text-right"
                )}
              />
            </div>
          </div>
          
          {/* Categories List */}
          <div className="py-1" role="listbox">
            {Object.keys(categoriesByLevel).sort((a, b) => Number(a) - Number(b)).map((level) => (
              <div key={level} className="mb-2">
                {level > '0' && (
                  <div className="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    {isRTL ? `المستوى ${level}` : `Niveau ${level}`}
                  </div>
                )}
                {categoriesByLevel[level].map((category, index) => {
                  const isSelected = value === category.id;
                  const actualIndex = filteredCategories.indexOf(category);
                  
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleSelectCategory(category)}
                      className={cn(
                        "w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                        isSelected && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                        actualIndex === focusedIndex && "bg-gray-100 dark:bg-gray-700",
                        isRTL && "text-right",
                        (category.level || 0) > 0 && "ml-6"
                      )}
                      role="option"
                      aria-selected={isSelected}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                      <span className="flex-1 truncate">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            ))}
            
            {filteredCategories.length === 0 && (
              <div className="px-3 py-2 text-gray-500 dark:text-gray-400 text-sm">
                {isRTL ? "لا توجد فئات مطابقة" : "Aucune catégorie trouvée"}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}