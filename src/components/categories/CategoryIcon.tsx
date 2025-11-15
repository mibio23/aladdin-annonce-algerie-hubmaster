'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryIconProps {
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fallback?: React.ReactNode;
}

// Dynamic icon import cache
const IconCache: Record<string, React.ComponentType<any>> = {};

// Function to dynamically import icons
const getIcon = (iconName: string): React.ComponentType<any> | null => {
  if (!iconName) return null;
  
  // Return from cache if already loaded
  if (IconCache[iconName]) {
    return IconCache[iconName];
  }
  
  try {
    // Dynamic import for Lucide icons
    const iconModule = require('lucide-react');
    const IconComponent = iconModule[iconName];
    
    if (IconComponent) {
      IconCache[iconName] = IconComponent;
      return IconComponent;
    }
  } catch (error) {
    console.error(`Icon "${iconName}" not found in lucide-react`);
  }
  
  return null;
};

// Default icon fallback
const DefaultIcon = ({ size, className }: { size?: string; className?: string }) => (
  <div 
    className={cn(
      "rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center",
      size === 'sm' && "w-6 h-6",
      size === 'md' && "w-8 h-8",
      size === 'lg' && "w-10 h-10",
      size === 'xl' && "w-12 h-12",
      !size && "w-8 h-8",
      className
    )}
  >
    <svg 
      className={cn(
        "text-gray-500 dark:text-gray-400",
        size === 'sm' && "w-3 h-3",
        size === 'md' && "w-4 h-4",
        size === 'lg' && "w-5 h-5",
        size === 'xl' && "w-6 h-6",
        !size && "w-4 h-4"
      )} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </div>
);

export function CategoryIcon({ 
  name, 
  size = 'md', 
  className,
  fallback = <DefaultIcon size={size} />
}: CategoryIconProps) {
  const IconComponent = name ? getIcon(name) : null;
  
  if (IconComponent) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <IconComponent 
          className={cn(
            "text-gray-700 dark:text-gray-300",
            size === 'sm' && "w-4 h-4",
            size === 'md' && "w-5 h-5",
            size === 'lg' && "w-6 h-6",
            size === 'xl' && "w-8 h-8",
            !size && "w-5 h-5"
          )} 
        />
      </div>
    );
  }
  
  return <>{fallback}</>;
}

// Predefined icon components for common categories
export const CategoryIcons = {
  Monitor: (props: any) => <CategoryIcon name="Monitor" {...props} />,
  Camera: (props: any) => <CategoryIcon name="Camera" {...props} />,
  Gamepad2: (props: any) => <CategoryIcon name="Gamepad2" {...props} />,
  Headphones: (props: any) => <CategoryIcon name="Headphones" {...props} />,
  Car: (props: any) => <CategoryIcon name="Car" {...props} />,
  HardHat: (props: any) => <CategoryIcon name="HardHat" {...props} />,
  Sprout: (props: any) => <CategoryIcon name="Sprout" {...props} />,
  Home: (props: any) => <CategoryIcon name="Home" {...props} />,
  Sofa: (props: any) => <CategoryIcon name="Sofa" {...props} />,
  Refrigerator: (props: any) => <CategoryIcon name="Refrigerator" {...props} />,
  Shirt: (props: any) => <CategoryIcon name="Shirt" {...props} />,
  ShoppingBag: (props: any) => <CategoryIcon name="ShoppingBag" {...props} />,
  Baby: (props: any) => <CategoryIcon name="Baby" {...props} />,
  Briefcase: (props: any) => <CategoryIcon name="Briefcase" {...props} />,
  GraduationCap: (props: any) => <CategoryIcon name="GraduationCap" {...props} />,
  UtensilsCrossed: (props: any) => <CategoryIcon name="UtensilsCrossed" {...props} />,
  Heart: (props: any) => <CategoryIcon name="Heart" {...props} />,
  Pill: (props: any) => <CategoryIcon name="Pill" {...props} />,
  Wrench: (props: any) => <CategoryIcon name="Wrench" {...props} />,
  Dog: (props: any) => <CategoryIcon name="Dog" {...props} />,
  Ticket: (props: any) => <CategoryIcon name="Ticket" {...props} />,
  Plane: (props: any) => <CategoryIcon name="Plane" {...props} />,
  Coins: (props: any) => <CategoryIcon name="Coins" {...props} />,
  Palette: (props: any) => <CategoryIcon name="Palette" {...props} />,
  ChefHat: (props: any) => <CategoryIcon name="ChefHat" {...props} />,
  Cake: (props: any) => <CategoryIcon name="Cake" {...props} />,
  Users: (props: any) => <CategoryIcon name="Users" {...props} />,
  Repeat: (props: any) => <CategoryIcon name="Repeat" {...props} />,
  Phone: (props: any) => <CategoryIcon name="Phone" {...props} />,
};

export default CategoryIcon;