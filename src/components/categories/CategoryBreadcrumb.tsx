'use client';

import React from 'react';
import { useCategories } from './CategoryProvider';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryBreadcrumbProps {
  className?: string;
  showHome?: boolean;
  separator?: React.ReactNode;
}

export function CategoryBreadcrumb({ 
  className, 
  showHome = true,
  separator = <ChevronRight className="w-4 h-4" />
}: CategoryBreadcrumbProps) {
  const { language, categoryPath } = useCategories();
  
  // Check if RTL (Arabic)
  const isRTL = language === 'ar';
  
  // Don't render if no path
  if (categoryPath.length === 0) {
    return null;
  }

  return (
    <nav 
      className={cn("flex items-center text-sm text-gray-600 dark:text-gray-400", className)}
      aria-label="Breadcrumb navigation"
    >
      {/* Home Link */}
      {showHome && (
        <a
          href="/"
          className="flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </a>
      )}
      
      {/* Breadcrumb Items */}
      {categoryPath.map((category, index) => {
        const isLast = index === categoryPath.length - 1;
        
        return (
          <React.Fragment key={category.id}>
            {/* Separator */}
            {showHome && index === 0 && (
              <span className="mx-2" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {!showHome && index > 0 && (
              <span className="mx-2" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {/* Category Link */}
            {isLast ? (
              <span 
                className="font-medium text-gray-900 dark:text-gray-100"
                aria-current="page"
              >
                {category.name}
              </span>
            ) : (
              <a
                href={`/categories/${category.slug}`}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {category.name}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}