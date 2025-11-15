import React, { memo, Suspense, lazy } from 'react';
import { LucideProps } from 'lucide-react';

// Lazy loading des icônes les plus utilisées
const iconMap = {
  Search: lazy(() => import('lucide-react').then(m => ({ default: m.Search }))),
  Sofa: lazy(() => import('lucide-react').then(m => ({ default: m.Sofa }))),
  Palette: lazy(() => import('lucide-react').then(m => ({ default: m.Palette }))),
  Hammer: lazy(() => import('lucide-react').then(m => ({ default: m.Hammer }))),
  Shirt: lazy(() => import('lucide-react').then(m => ({ default: m.Shirt }))),
  Gem: lazy(() => import('lucide-react').then(m => ({ default: m.Gem }))),
  Heart: lazy(() => import('lucide-react').then(m => ({ default: m.Heart }))),
  Briefcase: lazy(() => import('lucide-react').then(m => ({ default: m.Briefcase }))),
  Wrench: lazy(() => import('lucide-react').then(m => ({ default: m.Wrench }))),
  SearchSlash: lazy(() => import('lucide-react').then(m => ({ default: m.SearchSlash }))),
  Gift: lazy(() => import('lucide-react').then(m => ({ default: m.Gift }))),
  MessageSquareText: lazy(() => import('lucide-react').then(m => ({ default: m.MessageSquareText }))),
  LoaderCircle: lazy(() => import('lucide-react').then(m => ({ default: m.LoaderCircle }))),
  MapPin: lazy(() => import('lucide-react').then(m => ({ default: m.MapPin }))),
  Coins: lazy(() => import('lucide-react').then(m => ({ default: m.Coins }))),
};

type IconName = keyof typeof iconMap;

interface LazyIconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  fallback?: React.ReactNode;
}

const IconFallback = memo(({ className }: { className?: string }) => (
  <div className={`${className} bg-gray-200 dark:bg-gray-700 rounded animate-pulse`} />
));

export const LazyIcon = memo<LazyIconProps>(({ name, fallback, ...props }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return fallback as React.ReactElement || <IconFallback className={props.className} />;
  }

  return (
    <Suspense fallback={fallback || <IconFallback className={props.className} />}>
      <IconComponent {...props} />
    </Suspense>
  );
});

LazyIcon.displayName = 'LazyIcon';