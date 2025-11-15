
import React from "react";
import { Link } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { MenuCategory, SubCategory } from "@/data/categoryTypes";

interface SimilarCategoriesProps {
  category: MenuCategory;
  currentSubcategory?: SubCategory;
}

const SimilarCategories: React.FC<SimilarCategoriesProps> = ({
  category,
  currentSubcategory,
}) => {
  const { t } = useSafeI18nWithRouter();

  // Vérifier que les données nécessaires sont présentes
  if (!category?.subcategories || !currentSubcategory || category.subcategories.length <= 1) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
        {t('categories.similar')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {category.subcategories
          .filter(sub => sub && sub.slug && sub.slug !== currentSubcategory.slug)
          .slice(0, 6)
          .map((similarSubcat) => (
            <Link 
              key={similarSubcat.id}
              to={`/category/${category.slug}/${similarSubcat.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-slate-700 group-hover:border-orange-500">
                {similarSubcat.icon && (
                  <div className="text-center mb-2">
                    <div className="text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors">
                      {similarSubcat.icon}
                    </div>
                  </div>
                )}
                <h3 className="text-sm font-medium text-gray-800 dark:text-white text-center leading-tight">
                  {t(`categories.${similarSubcat.slug}`) !== `categories.${similarSubcat.slug}` 
                    ? t(`categories.${similarSubcat.slug}`) 
                    : similarSubcat.name}
                </h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SimilarCategories;
