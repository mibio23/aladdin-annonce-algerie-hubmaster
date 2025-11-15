import { useState } from "react";
import { Link } from "react-router-dom";
import { categoryIcons } from "@/data/categories/icons/iconMapping";
import * as LucideIcons from "lucide-react";

interface CategoryFlyoutPanelProps {
  category: any;
  isRTL: boolean;
  language: string;
}

const CategoryFlyoutPanel = ({ category, isRTL, language }: CategoryFlyoutPanelProps) => {
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);

  const getCategoryName = (cat: any) => {
    return cat.translations?.[language] || cat.name;
  };

  const getIconComponent = (categoryId: string, size: string = "w-4 h-4") => {
    const iconName = categoryIcons[categoryId] || 'folder';
    const iconKey = iconName.split('-').map((word, i) => 
      i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
    
    const IconComponent = (LucideIcons as any)[iconKey] || LucideIcons.Folder;
    return <IconComponent className={`${size} text-primary/80`} />;
  };

  return (
    <div 
      className={`absolute z-50 ${isRTL ? 'right-full mr-2' : 'left-full ml-2'} top-0
        bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700
        rounded-lg shadow-xl p-4 min-w-[280px] max-h-[500px] overflow-y-auto
        animate-fade-in`}
    >
      <div className="space-y-1">
        {category.subcategories?.map((subcategory: any) => (
          <div 
            key={subcategory.id}
            className="relative"
            onMouseEnter={() => setHoveredSubcategory(subcategory.id)}
            onMouseLeave={() => setHoveredSubcategory(null)}
          >
            <Link
              to={`/category/${category.slug}/${subcategory.slug}`}
              className="flex items-center gap-2 p-2 text-sm text-gray-600 dark:text-gray-300 
                hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              {getIconComponent(subcategory.id)}
              <span>{getCategoryName(subcategory)}</span>
            </Link>

            {hoveredSubcategory === subcategory.id && 
             subcategory.subcategories && 
             subcategory.subcategories.length > 0 && (
              <div 
                className={`absolute z-50 ${isRTL ? 'right-full mr-2' : 'left-full ml-2'} top-0
                  bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700
                  rounded-lg shadow-xl p-3 min-w-[250px] max-h-[450px] overflow-y-auto
                  animate-fade-in`}
              >
                <div className="space-y-1">
                  {subcategory.subcategories.map((subsubcategory: any) => (
                    <Link
                      key={subsubcategory.id}
                      to={`/category/${category.slug}/${subcategory.slug}/${subsubcategory.slug}`}
                      className="flex items-center gap-2 p-2 text-xs text-gray-600 dark:text-gray-300 
                        hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      {getIconComponent(subsubcategory.id, "w-3 h-3")}
                      <span>{getCategoryName(subsubcategory)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFlyoutPanel;
