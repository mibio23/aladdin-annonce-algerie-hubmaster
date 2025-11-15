'use client';

import React from 'react';
import { useCategories } from './CategoryProvider';
import { getCategoryStats } from '@/lib/categories';
import { cn } from '@/lib/utils';

interface CategoryStatsProps {
  className?: string;
  showDetails?: boolean;
  compact?: boolean;
}

export function CategoryStats({ 
  className, 
  showDetails = true,
  compact = false
}: CategoryStatsProps) {
  const { language, categories } = useCategories();
  
  // Get category statistics
  const stats = React.useMemo(() => {
    if (categories.length === 0) {
      return {
        totalCategories: 0,
        maxDepth: 0,
        categoriesWithIcons: 0,
        categoriesWithSubcategories: 0,
      };
    }
    return getCategoryStats(language);
  }, [categories, language]);
  
  // Check if RTL (Arabic)
  const isRTL = language === 'ar';
  
  // Format numbers with locale
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(isRTL ? 'ar-DZ' : 'fr-FR').format(num);
  };
  
  if (compact) {
    return (
      <div className={cn("flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400", className)}>
        <div className="flex items-center gap-1">
          <span className="font-medium">{formatNumber(stats.totalCategories)}</span>
          <span>{isRTL ? 'فئة' : 'catégories'}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-medium">{formatNumber(stats.categoriesWithIcons)}</span>
          <span>{isRTL ? 'أيقونات' : 'avec icônes'}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4", className)}>
      <h3 className={cn(
        "text-lg font-semibold mb-4",
        isRTL && "text-right"
      )}>
        {isRTL ? 'إحصائيات الفئات' : 'Statistiques des catégories'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Categories */}
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatNumber(stats.totalCategories)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isRTL ? 'إجمالي الفئات' : 'Total catégories'}
          </div>
        </div>
        
        {/* Max Depth */}
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {formatNumber(stats.maxDepth)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isRTL ? 'أقصى عمق' : 'Profondeur max'}
          </div>
        </div>
        
        {/* Categories with Icons */}
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {formatNumber(stats.categoriesWithIcons)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isRTL ? 'فئات بأيقونات' : 'Avec icônes'}
          </div>
        </div>
        
        {/* Categories with Subcategories */}
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {formatNumber(stats.categoriesWithSubcategories)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isRTL ? 'فئات رئيسية' : 'Catégories parentes'}
          </div>
        </div>
      </div>
      
      {/* Detailed Statistics */}
      {showDetails && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className={cn(
            "text-md font-medium mb-3",
            isRTL && "text-right"
          )}>
            {isRTL ? 'تفاصيل إضافية' : 'Détails supplémentaires'}
          </h4>
          
          <div className="space-y-2">
            {/* Categories by Level */}
            <div className="flex justify-between text-sm">
              <span>{isRTL ? 'متوسط الفئات لكل مستوى' : 'Moyenne de catégories par niveau'}</span>
              <span className="font-medium">
                {formatNumber(Math.round(stats.totalCategories / (stats.maxDepth + 1)))}
              </span>
            </div>
            
            {/* Icon Coverage */}
            <div className="flex justify-between text-sm">
              <span>{isRTL ? 'تغطية الأيقونات' : 'Couverture des icônes'}</span>
              <span className="font-medium">
                {stats.totalCategories > 0 
                  ? `${Math.round((stats.categoriesWithIcons / stats.totalCategories) * 100)}%`
                  : '0%'
                }
              </span>
            </div>
            
            {/* Subcategory Coverage */}
            <div className="flex justify-between text-sm">
              <span>{isRTL ? 'فئات بها فئات فرعية' : 'Catégories avec sous-catégories'}</span>
              <span className="font-medium">
                {stats.totalCategories > 0 
                  ? `${Math.round((stats.categoriesWithSubcategories / stats.totalCategories) * 100)}%`
                  : '0%'
                }
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}