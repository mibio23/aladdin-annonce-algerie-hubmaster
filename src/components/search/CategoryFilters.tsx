
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MenuCategory, SubCategory } from "@/data/categoryTypes";

import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface CategoryFiltersProps {
  uniqueCategories: MenuCategory[];
  selectedCategory: string;
  selectedSubCategory: string;
  selectedSpecialisation: string;
  handleCategoryChange: (categorySlug: string) => void;
  handleSubCategoryChange: (subCategorySlug: string) => void;
  setSelectedSpecialisation: (specialisation: string) => void;
  selectedCondition?: string;
  onConditionChange?: (condition: string) => void;
  selectedCategoryData?: MenuCategory;
  selectedSubCategoryData?: SubCategory;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = (props) => {
  const {
    uniqueCategories,
    selectedCategory,
    selectedSubCategory,
    selectedSpecialisation,
    handleCategoryChange,
    handleSubCategoryChange,
    setSelectedSpecialisation,
    selectedCategoryData,
    selectedSubCategoryData,
  } = props;
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          {t('search.advanced.category')}
        </label>
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
            <SelectValue placeholder={t('search.advanced.selectCategory')} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-800 z-[10000]">
            {uniqueCategories.map((category) => (
              <SelectItem key={category.slug} value={category.slug}>
                {t(`categories.${category.slug}`) !== `categories.${category.slug}` ? t(`categories.${category.slug}`) : category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          {t('search.advanced.subCategory')}
        </label>
        <Select 
          value={selectedSubCategory} 
          onValueChange={handleSubCategoryChange}
          disabled={!selectedCategory}
        >
          <SelectTrigger className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
            <SelectValue placeholder={t('search.advanced.selectSubCategory')} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-800 z-[10000]">
            {selectedCategoryData?.subcategories?.map((subCategory) => (
              <SelectItem key={subCategory.slug} value={subCategory.slug}>
                {t(`categories.${subCategory.slug}`) !== `categories.${subCategory.slug}` ? t(`categories.${subCategory.slug}`) : subCategory.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          {t('search.advanced.specialization')}
        </label>
        <Select 
          value={selectedSpecialisation} 
          onValueChange={setSelectedSpecialisation}
          disabled={!selectedSubCategory}
        >
          <SelectTrigger className="bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600">
            <SelectValue placeholder={t('search.advanced.selectSpecialization')} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-slate-800 z-[10000]">
            {selectedSubCategoryData?.subcategories?.map((specialisation) => (
              <SelectItem key={specialisation.slug} value={specialisation.slug}>
                {t(`categories.${specialisation.slug}`) !== `categories.${specialisation.slug}` ? t(`categories.${specialisation.slug}`) : specialisation.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          {t('search.advanced.condition')}
        </label>
        <select
          value={props.selectedCondition || ""}
          onChange={(e) => props.onConditionChange?.(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-md 
                   bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                   focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                   hover:border-gray-400 dark:hover:border-slate-500 transition-colors"
        >
          <option value="">{t('search.advanced.allConditions')}</option>
          <option value="new">{t('search.advanced.new')}</option>
          <option value="used">{t('search.advanced.used')}</option>
          <option value="refurbished">{t('search.advanced.refurbished')}</option>
          <option value="defective">{t('search.advanced.defective')}</option>
          <option value="forParts">{t('search.advanced.forParts')}</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilters;
