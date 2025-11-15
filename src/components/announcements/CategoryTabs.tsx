
import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideProps } from "lucide-react"; 

interface Category {
  id: string; 
  name: string;
  icon?: React.ReactElement;
  icon3D?: React.ReactElement;
  imageUrl?: string;
}

interface CategoryTabsProps {
  categories: Category[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  const halfLength = Math.ceil(categories.length / 2);
  const firstRow = categories.slice(0, halfLength);
  const secondRow = categories.slice(halfLength);

  const renderCategoryContent = (category: Category) => {
    return (
      <div className="flex items-center gap-2 px-2 py-1">
        {category.imageUrl ? (
          <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="w-6 h-6 object-contain transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse cursor-pointer" 
          />
        ) : category.icon3D ? (
          <div className="transition-all duration-300 hover:scale-110 hover:rotate-6 animate-bounce cursor-pointer">
            {React.cloneElement(category.icon3D, { height: 24, width: 24 })}
          </div>
        ) : category.icon && React.isValidElement(category.icon) ? (
          <div className="transition-all duration-300 hover:scale-125 hover:rotate-12 animate-pulse cursor-pointer">
            {React.cloneElement(category.icon as React.ReactElement<LucideProps>, { size: 20 })}
          </div>
        ) : null}
        <span>{category.name}</span>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <TabsList className="w-full flex justify-start bg-gray-100 p-1 rounded-md flex-wrap h-auto">
        {firstRow.map((category) => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="data-[state=active]:bg-white data-[state=active]:text-blue-500 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-blue-400"
          >
            {renderCategoryContent(category)}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {secondRow.length > 0 && (
        <TabsList className="w-full flex justify-start bg-gray-100 p-1 rounded-md flex-wrap h-auto">
          {secondRow.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-white data-[state=active]:text-blue-500 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-blue-400"
            >
              {renderCategoryContent(category)}
            </TabsTrigger>
          ))}
        </TabsList>
      )}
    </div>
  );
};

export default CategoryTabs;
