import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
// Catégories neutralisées: aucune donnée importée

const CategoryMobileAccordion = () => {
  const { language } = useSafeI18nWithRouter();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<string>>(new Set());

  const getCategoryName = (category: any) => {
    return category.name;
  };

  // Icônes neutralisées
  const renderIcon = (_iconName: string | undefined, _size: string = "w-4 h-4") => null;

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleSubcategory = (subcategoryId: string) => {
    const newExpanded = new Set(expandedSubcategories);
    if (newExpanded.has(subcategoryId)) {
      newExpanded.delete(subcategoryId);
    } else {
      newExpanded.add(subcategoryId);
    }
    setExpandedSubcategories(newExpanded);
  };

  return (
    <div className="py-2">
      <div className="flex items-center text-foreground font-medium mb-2 font-['Changa',Arial,sans-serif]">
        Catégories
      </div>
      {/* Menu vide volontairement */}
      <div className="max-h-[70vh] overflow-y-auto space-y-1" />
    </div>
  );
};

export default CategoryMobileAccordion;
