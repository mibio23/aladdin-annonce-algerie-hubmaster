import { memo } from "react";
import { MenuCategory, ExplorerCategory } from "@/data/categoryTypes";

// Composant optimisé pour le rendu d'une catégorie simple
export const CategoryItem = memo<{ category: MenuCategory; onClick?: (category: MenuCategory) => void }>(
  ({ category, onClick }) => (
    <div 
      className="flex items-center space-x-2 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors"
      onClick={() => onClick?.(category)}
    >
      {category.icon && <span className="flex-shrink-0">{category.icon}</span>}
      <span className="font-medium truncate">{category.name}</span>
      {category.subcategories.length > 0 && (
        <span className="text-xs text-muted-foreground">({category.subcategories.length})</span>
      )}
    </div>
  )
);

CategoryItem.displayName = "CategoryItem";

// Composant optimisé pour le rendu d'une catégorie explorer
export const ExplorerCategoryItem = memo<{ 
  category: ExplorerCategory; 
  onClick?: (category: ExplorerCategory) => void 
}>(({ category, onClick }) => (
  <div 
    className="group cursor-pointer"
    onClick={() => onClick?.(category)}
  >
    <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-2">
      <img 
        src={category.imageUrl} 
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
    </div>
    <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
      {category.name}
    </h3>
    {category.subcategories.length > 0 && (
      <p className="text-xs text-muted-foreground">
        {category.subcategories.length} sous-catégories
      </p>
    )}
  </div>
));

ExplorerCategoryItem.displayName = "ExplorerCategoryItem";

// Liste optimisée de catégories avec virtualisation légère
export const CategoryList = memo<{
  categories: MenuCategory[];
  onCategoryClick?: (category: MenuCategory) => void;
  className?: string;
}>(({ categories, onCategoryClick, className = "" }) => (
  <div className={`grid gap-2 ${className}`}>
    {categories.map(category => (
      <CategoryItem 
        key={category.id}
        category={category}
        onClick={onCategoryClick}
      />
    ))}
  </div>
));

CategoryList.displayName = "CategoryList";

// Grille optimisée pour les catégories explorer
export const ExplorerCategoryGrid = memo<{
  categories: ExplorerCategory[];
  onCategoryClick?: (category: ExplorerCategory) => void;
  columns?: number;
  className?: string;
}>(({ categories, onCategoryClick, columns = 4, className = "" }) => (
  <div 
    className={`grid gap-4 ${className}`}
    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
  >
    {categories.map(category => (
      <ExplorerCategoryItem 
        key={category.id}
        category={category}
        onClick={onCategoryClick}
      />
    ))}
  </div>
));

ExplorerCategoryGrid.displayName = "ExplorerCategoryGrid";