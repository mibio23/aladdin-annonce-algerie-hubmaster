
import React from "react";
import { Grid, List, SlidersHorizontal, Calendar, DollarSign, MapPin } from "lucide-react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { SubCategory } from "@/data/categoryTypes";

interface SubcategoryHeaderProps {
  subcategory: SubCategory;
  translatedSubcategoryName: string;
  announcementsCount: number;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const SubcategoryHeader: React.FC<SubcategoryHeaderProps> = ({
  subcategory,
  translatedSubcategoryName,
  announcementsCount,
  viewMode,
  setViewMode,
  showFilters,
  setShowFilters,
}) => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          {subcategory.icon && (
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              {subcategory.icon}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {translatedSubcategoryName}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {announcementsCount} {t('announcements.found')}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              showFilters 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm font-medium">{t('filters.title')}</span>
          </button>

          <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-white dark:bg-slate-600 shadow-sm' 
                  : 'hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-white dark:bg-slate-600 shadow-sm' 
                  : 'hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Calendar className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('stats.thisWeek')}</p>
            <p className="font-semibold text-gray-800 dark:text-white">+12 {t('announcements.new')}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <DollarSign className="h-5 w-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('stats.avgPrice')}</p>
            <p className="font-semibold text-gray-800 dark:text-white">25,000 DA</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <MapPin className="h-5 w-5 text-purple-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('stats.topLocation')}</p>
            <p className="font-semibold text-gray-800 dark:text-white">Alger</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <Grid className="h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{t('stats.categories')}</p>
            <p className="font-semibold text-gray-800 dark:text-white">{subcategory.subcategories?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryHeader;
