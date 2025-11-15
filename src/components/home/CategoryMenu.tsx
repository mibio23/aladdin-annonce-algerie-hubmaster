
import React, { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { useCategories } from "@/services/supabaseCategoriesService";
import { getCategoryMenu } from "@/data/megaMenu/categoryMenu";

interface CategoryItemProps {
  category: any;
  level: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  return (
    <div className="border-b last:border-b-0">
      <div 
        className={`flex items-center justify-between py-2 px-${level * 2} hover:bg-gray-50 cursor-pointer`}
        onClick={() => hasSubcategories && setIsExpanded(!isExpanded)}
      >
        <Link 
          to={`/category/${category.slug}`} 
          className="flex items-center gap-2 flex-1"
          onClick={(e) => hasSubcategories && e.preventDefault()}
        >
          {level === 0 && category.icon && <span className="text-lg">{category.icon}</span>}
          <span className={level === 0 ? "font-medium" : ""}>{category.name}</span>
        </Link>
        {hasSubcategories && (
          <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        )}
      </div>
      
      {isExpanded && hasSubcategories && (
        <div className="pl-4 border-t bg-gray-50/50">
          {category.subcategories.map((subcategory: any) => (
            <CategoryItem 
              key={subcategory.id} 
              category={subcategory} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryMenu = () => {
  const { t, language } = useSafeI18nWithRouter();
  const { data: fetchedCategories = [], isLoading } = useCategories(language);

  if (isLoading) {
    return (
      <div className="bg-white border rounded-md overflow-hidden">
        <div className="bg-gray-100 py-3 px-4 font-medium">
          {t('categories.title')}
        </div>
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-md overflow-hidden">
      <div className="bg-gray-100 py-3 px-4 font-medium">
        {t('categories.title')}
      </div>
      <div className="divide-y">
        {(() => {
          const localMenu = getCategoryMenu(language);
          const hasBaby = fetchedCategories.some((c: any) => c.slug === "bebe-puericulture");
          const babyCategory = localMenu.find((c) => c.slug === "bebe-puericulture");
          const withBaby = hasBaby ? fetchedCategories : (babyCategory ? [...fetchedCategories, babyCategory] : fetchedCategories);

          const localMode = localMenu.find((c) => c.slug === "mode-accessoires");
          const modeIndex = withBaby.findIndex((c: any) => c.slug === "mode-accessoires");
          const hasMode = modeIndex >= 0;
          const displayCategories = localMode
            ? (hasMode
                ? withBaby.map((c: any, idx: number) => (idx === modeIndex ? localMode : c))
                : [...withBaby, localMode])
            : withBaby;
          return displayCategories.map((category: any) => (
            <CategoryItem key={category.id} category={category} level={0} />
          ));
        })()}
      </div>
    </div>
  );
};

export default CategoryMenu;
