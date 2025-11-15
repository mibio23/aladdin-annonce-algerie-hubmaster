'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Category, getCategoriesByLanguage, getFlattenedCategories, findCategoryBySlug, getCategoryPath, searchCategories } from '@/lib/categories';

interface CategoryContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  categories: Category[];
  flattenedCategories: Category[];
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  categoryPath: Category[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Category[];
  isLoading: boolean;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function useCategories() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
}

interface CategoryProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
  initialCategorySlug?: string;
}

export function CategoryProvider({ 
  children, 
  initialLanguage = 'fr',
  initialCategorySlug 
}: CategoryProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [categories, setCategories] = useState<Category[]>([]);
  const [flattenedCategories, setFlattenedCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryPath, setCategoryPath] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load categories when language changes
  useEffect(() => {
    setIsLoading(true);
    try {
      const newCategories = getCategoriesByLanguage(language);
      const newFlattenedCategories = getFlattenedCategories(language);
      setCategories(newCategories);
      setFlattenedCategories(newFlattenedCategories);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  // Set initial category from slug
  useEffect(() => {
    if (initialCategorySlug && flattenedCategories.length > 0) {
      const category = findCategoryBySlug(initialCategorySlug, language);
      if (category) {
        setSelectedCategory(category);
        setCategoryPath(getCategoryPath(category.id, language));
      }
    }
  }, [initialCategorySlug, flattenedCategories, language]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
    } else {
      const results = searchCategories(searchQuery, language);
      setSearchResults(results);
    }
  }, [searchQuery, language]);

  // Update category path when selected category changes
  useEffect(() => {
    if (selectedCategory) {
      setCategoryPath(getCategoryPath(selectedCategory.id, language));
    } else {
      setCategoryPath([]);
    }
  }, [selectedCategory, language]);

  const value: CategoryContextType = {
    language,
    setLanguage,
    categories,
    flattenedCategories,
    selectedCategory,
    setSelectedCategory,
    categoryPath,
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}