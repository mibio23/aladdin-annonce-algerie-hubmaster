import React, { memo, useMemo } from 'react';
import { MenuCategory } from '@/data/categoryTypes';
import { LazyIcon } from './LazyIcon';
import { useVirtualizedList } from '@/hooks/useVirtualizedList';

interface FastCategoryMenuProps {
  categories: MenuCategory[];
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
  containerHeight?: number;
}

// Mapping optimisé des icônes
const ICON_MAP: Record<string, string> = {
  "mode-habillement": "Shirt",
  "accessoires-mode-bijoux": "Gem", 
  "beaute-sante-bien-etre": "Heart",
  "maison-mobilier-gros-electromenager": "Sofa",
  "maison-decoration-cuisine-linge": "Palette",
  "bricolage-materiaux": "Hammer",
  "emploi-carriere": "Briefcase",
  "metier-reparateur": "Wrench",
  "avis-de-recherche-objets-perdus-trouves": "SearchSlash",
  "dons-dobjets": "Gift",
  "communaute-echanges": "MessageSquareText",
  "artisanat-produits-traditionnels": "Hammer"
};

const CategoryItem = memo<{
  category: MenuCategory;
  isSelected: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}>(({ category, isSelected, onClick, style }) => {
  const iconName = ICON_MAP[category.slug] || "Search";
  
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`
        flex items-center px-3 py-2 text-sm rounded-md transition-colors
        ${isSelected 
          ? 'bg-primary text-primary-foreground' 
          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
        }
      `}
    >
      <LazyIcon 
        name={iconName as any} 
        className="w-4 h-4 mr-2 flex-shrink-0"
      />
      <span className="truncate">{category.name}</span>
    </button>
  );
});

CategoryItem.displayName = 'CategoryItem';

export const FastCategoryMenu = memo<FastCategoryMenuProps>(({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  containerHeight = 300 
}) => {
  // Catégories processées avec memoization simple
  const processedCategories = useMemo(() => {
    // Dédoublonner et trier par popularité
    const unique = categories.reduce((acc, category) => {
      if (!acc.find(cat => cat.slug === category.slug)) {
        acc.push(category);
      }
      return acc;
    }, [] as MenuCategory[]);
    
    return unique;
  }, [categories]);

  // Utiliser la virtualisation si plus de 20 catégories
  const shouldVirtualize = processedCategories.length > 20;
  
  const virtualizedList = useVirtualizedList(processedCategories, {
    itemHeight: 40,
    containerHeight,
    overscan: 3
  });

  const handleCategoryClick = useMemo(() => {
    const handlers: Record<string, () => void> = {};
    processedCategories.forEach(category => {
      handlers[category.slug] = () => onCategoryChange(category.slug);
    });
    return handlers;
  }, [processedCategories, onCategoryChange]);

  if (shouldVirtualize) {
    return (
      <div {...virtualizedList.containerProps} className="relative">
        <div style={{ height: virtualizedList.totalHeight, position: 'relative' }}>
        {virtualizedList.visibleItems.map(({ item, index, style }) => {
          const category = item as MenuCategory;
          return (
            <CategoryItem
              key={`${category.slug}-${index}`}
              category={category}
              isSelected={selectedCategory === category.slug}
              onClick={handleCategoryClick[category.slug] || (() => {})}
              style={style}
            />
          );
        })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1 max-h-80 overflow-y-auto">
      {processedCategories.map(category => (
        <CategoryItem
          key={`${category.slug}-static`}
          category={category}
          isSelected={selectedCategory === category.slug}
          onClick={handleCategoryClick[category.slug] || (() => {})}
        />
      ))}
    </div>
  );
});

FastCategoryMenu.displayName = 'FastCategoryMenu';