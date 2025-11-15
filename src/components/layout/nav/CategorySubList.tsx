import { Link } from "react-router-dom";
import { SubCategory } from "@/data/categoryTypes";

interface CategorySubListProps {
  subcategories: SubCategory[];
  parentSlug: string;
}

const CategorySubList: React.FC<CategorySubListProps> = ({ 
  subcategories, 
  parentSlug 
}) => {
  // Traductions désactivées temporairement pour performance
  if (!subcategories?.length) return null;

  return (
    <ul className="space-y-2 ml-6">
      {subcategories.map((sub) => {
        // Utiliser directement le nom sans traduction
        const translatedSubName = sub.name;
          
        return (
          <li key={sub.id}>
            <Link 
              to={`/category/${parentSlug}/${sub.slug}`}
              className="text-black dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 text-sm font-semibold transition-all duration-300 hover:underline decoration-black dark:decoration-gray-300 underline-offset-2 decoration-1 hover:drop-shadow-lg hover:text-shadow-glow"
            >
              {translatedSubName}
            </Link>
          
            {sub.subcategories && (
              <ul className="ml-4 mt-1 space-y-1">
                {sub.subcategories.map((subSub) => {
                  // Utiliser directement le nom sans traduction
                  const translatedSubSubName = subSub.name;
                    
                  return (
                    <li key={subSub.id}>
                      <Link 
                        to={`/category/${parentSlug}/${sub.slug}/${subSub.slug}`}
                        className="text-black dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-xs font-medium transition-all duration-300 hover:underline decoration-black dark:decoration-gray-400 underline-offset-1 hover:drop-shadow-md hover:text-shadow-glow"
                      >
                        {translatedSubSubName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CategorySubList;
