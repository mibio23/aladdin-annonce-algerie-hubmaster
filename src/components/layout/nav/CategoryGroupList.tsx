import { Link } from "react-router-dom";
import { MenuCategory } from "@/data/categoryTypes";
import CategorySubList from "./CategorySubList";

interface CategoryGroupListProps {
  categories: MenuCategory[];
}

const CategoryGroupList: React.FC<CategoryGroupListProps> = ({ 
  categories 
}) => {
  // Traductions désactivées temporairement pour performance
  
  return (
    <div className="space-y-6">
      {categories.map((category) => {
        // Utiliser directement le nom sans traduction
        const translatedName = category.name;
          
        return (
          <div key={category.id} className="group">
            <Link 
              to={`/category/${category.slug}`}
              className="flex items-center gap-2 mb-3 text-red-800 dark:text-red-700 hover:text-red-600 dark:hover:text-red-500 font-bold text-base transition-all duration-300 hover:underline decoration-red-800 dark:decoration-red-700 underline-offset-4 decoration-2 group-hover:drop-shadow-lg"
            >
              {category.icon}
              <span className="group-hover:text-shadow-red">{translatedName}</span>
            </Link>
          
            {category.subcategories && (
              <CategorySubList 
                subcategories={category.subcategories}
                parentSlug={category.slug}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryGroupList;
