import React, { useMemo } from 'react';
import { usePopularCategories } from '@/hooks/usePopularCategories';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/common/OptimizedImage';

const PopularCategoriesGrid = React.memo(() => {
  const categories = usePopularCategories();
  const limitedCategories = useMemo(() => categories.slice(0, 8), [categories]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {limitedCategories.map((category) => (
        <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-4 text-center">
            <div className="mb-2 w-16 h-16 mx-auto">
              <OptimizedImage
                src={category.imageUrl} 
                alt={category.name}
                className="w-16 h-16 rounded-lg"
                width={64}
                height={64}
                />
            </div>
            <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
            <Badge variant="secondary" className="text-xs">
              {category.subcategories?.length || 0} sous-catégories
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});

PopularCategoriesGrid.displayName = 'PopularCategoriesGrid';

export default PopularCategoriesGrid;