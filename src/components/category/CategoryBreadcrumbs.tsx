
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

interface CategoryBreadcrumbsProps {
  categorySlug?: string;
  categoryName?: string;
  subcategoryName?: string;
}

const CategoryBreadcrumbs: React.FC<CategoryBreadcrumbsProps> = ({
  categorySlug,
  categoryName,
  subcategoryName,
}) => {
  const { t } = useSafeI18nWithRouter();

  return (
    <nav className="flex items-center space-x-2 mb-6 text-sm">
      <Link to="/" className="text-gray-500 hover:text-orange-500 transition-colors">
        {t('breadcrumb.home')}
      </Link>
      <ChevronRight className="h-4 w-4 text-gray-400" />
      {categorySlug && categoryName && (
        <>
          <Link to={`/category/${categorySlug}`} className="text-gray-500 hover:text-orange-500 transition-colors">
            {categoryName}
          </Link>
          {subcategoryName && (
            <>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-800 dark:text-white font-medium">
                {subcategoryName}
              </span>
            </>
          )}
        </>
      )}
      {!categorySlug && categoryName && (
        <span className="text-gray-800 dark:text-white font-medium">
          {categoryName}
        </span>
      )}
    </nav>
  );
};

export default CategoryBreadcrumbs;
