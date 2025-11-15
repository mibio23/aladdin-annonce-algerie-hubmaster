
import React from "react";
import CategoryGroupList from "./CategoryGroupList";
import { MenuCategory } from "@/data/categoryTypes";
import { useCategoryGrouping } from "@/hooks/useCategoryGrouping";

interface CategoryGroupLayoutProps {
  categories: MenuCategory[];
}

const CategoryGroupLayout: React.FC<CategoryGroupLayoutProps> = ({ categories }) => {
  const { leftGroups, rightGroups } = useCategoryGrouping(categories);

  return (
    <div className="grid grid-cols-2 gap-8 px-8 py-6 min-w-[480px] max-w-4xl w-full">
      <div className="flex flex-col gap-y-6 m-0 p-0">
        {leftGroups.map((group, idx) => (
          <CategoryGroupList categories={group} key={`left-${idx}`} />
        ))}
      </div>
      <div className="flex flex-col gap-y-6 m-0 p-0">
        {rightGroups.map((group, idx) => (
          <CategoryGroupList categories={group} key={`right-${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGroupLayout;
