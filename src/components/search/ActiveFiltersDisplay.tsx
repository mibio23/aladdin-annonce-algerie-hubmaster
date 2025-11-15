
import React from 'react';
import { MenuCategory } from '@/data/categoryTypes';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface ActiveFiltersDisplayProps {
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSpecialisation: string;
  selectedCategoryData?: MenuCategory;
  selectedSubCategoryData?: MenuCategory['subcategories'][number];
  categoryIcons: { [key: string]: React.ReactNode };
}

const ActiveFiltersDisplay: React.FC<ActiveFiltersDisplayProps> = ({
  selectedCategory,
  selectedSubCategory,
  selectedSpecialisation,
  selectedCategoryData,
  selectedSubCategoryData,
  categoryIcons,
}) => {
  const { t } = useSafeI18nWithRouter();

  if (!selectedCategory && !selectedSubCategory && !selectedSpecialisation) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-md border border-gray-200 dark:border-slate-600/50">
      <h3 className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-2">{t('search.advanced.activeFilters')}</h3>
      <div className="flex flex-wrap gap-2">
        {selectedCategory && selectedCategoryData && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200">
            {categoryIcons[selectedCategory as keyof typeof categoryIcons]}
            {t(`categories.${selectedCategoryData.slug}`) !== `categories.${selectedCategoryData.slug}` ? t(`categories.${selectedCategoryData.slug}`) : selectedCategoryData.name}
          </span>
        )}
        {selectedSubCategory && selectedSubCategoryData && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-200">
            {t(`categories.${selectedSubCategoryData.slug}`) !== `categories.${selectedSubCategoryData.slug}` ? t(`categories.${selectedSubCategoryData.slug}`) : selectedSubCategoryData.name}
          </span>
        )}
        {selectedSpecialisation && selectedSubCategoryData?.subcategories?.find(spec => spec.slug === selectedSpecialisation) && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200">
            {(() => {
              const spec = selectedSubCategoryData.subcategories.find(spec => spec.slug === selectedSpecialisation);
              return spec ? (t(`categories.${spec.slug}`) !== `categories.${spec.slug}` ? t(`categories.${spec.slug}`) : spec.name) : '';
            })()}
          </span>
        )}
      </div>
    </div>
  );
};

export default ActiveFiltersDisplay;
