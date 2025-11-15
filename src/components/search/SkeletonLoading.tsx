import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { ViewMode } from './SearchSortingControls';

interface SkeletonLoadingProps {
  viewMode: ViewMode;
  count?: number;
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  viewMode,
  count = 12
}) => {
  const getGridClassName = () => {
    switch (viewMode) {
      case 'list':
        return 'grid grid-cols-1 gap-4';
      case 'compact':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3';
      case 'grid':
      default:
        return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6';
    }
  };

  const SkeletonCard = () => (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-48" />
        <div className="absolute top-2 right-2 space-y-1">
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          {viewMode !== 'compact' && (
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-8 flex-1" />
              <Skeleton className="h-8 flex-1" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className={getGridClassName()}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonLoading;