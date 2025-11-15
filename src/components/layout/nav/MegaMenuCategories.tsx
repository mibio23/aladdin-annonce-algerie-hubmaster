import CategoryGroupList from "./CategoryGroupList";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCategories } from "@/services/supabaseCategoriesService";
import { Loader2 } from "lucide-react";

const MegaMenuCategories = () => {
  const { language } = useSafeI18nWithRouter();
  const { data: categoryMenu = [], isLoading } = useCategories(language);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px] w-[800px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Diviser les catégories en 3 colonnes
  const itemsPerColumn = Math.ceil(categoryMenu.length / 3);
  const column1 = categoryMenu.slice(0, itemsPerColumn);
  const column2 = categoryMenu.slice(itemsPerColumn, itemsPerColumn * 2);
  const column3 = categoryMenu.slice(itemsPerColumn * 2);

  return (
    <ScrollArea className="h-[500px] w-[800px]">
      <div className="grid grid-cols-3 gap-8 p-6">
        <div>
          <CategoryGroupList 
            categories={column1} 
          />
        </div>
        <div>
          <CategoryGroupList 
            categories={column2} 
          />
        </div>
        <div>
          <CategoryGroupList 
            categories={column3} 
          />
        </div>
      </div>
    </ScrollArea>
  );
};

export default MegaMenuCategories;
