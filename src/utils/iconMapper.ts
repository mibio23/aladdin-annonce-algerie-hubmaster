import React from 'react';
import * as LucideIcons from 'lucide-react';

// Type pour les composants d'icônes Lucide
type LucideIconComponent = React.ForwardRefExoticComponent<
  Omit<LucideIcons.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

// Mapping complet des noms d'icônes vers les composants Lucide
export const iconMapping: Record<string, LucideIconComponent> = {
  // Électronique & High-Tech
  'Monitor': LucideIcons.Monitor,
  'Laptop': LucideIcons.Laptop,
  'Tv': LucideIcons.Tv,
  'Smartphone': LucideIcons.Smartphone,
  'Tablet': LucideIcons.Tablet,
  'Mobile': LucideIcons.Smartphone,
  'Watch': LucideIcons.Watch,
  'Headphones': LucideIcons.Headphones,
  'Camera': LucideIcons.Camera,
  'Gamepad2': LucideIcons.Gamepad2,
  'Gamepad': LucideIcons.Gamepad2,
  
  // Livres & Médias
  'Book': LucideIcons.Book,
  'BookOpen': LucideIcons.BookOpen,
  'BookOpenCheck': LucideIcons.BookOpenCheck,
  'Music': LucideIcons.Music,
  'Guitar': LucideIcons.Guitar,
  'Piano': LucideIcons.Piano,
  'Film': LucideIcons.Film,
  
  // Loisirs & Hobbies
  'Puzzle': LucideIcons.Puzzle,
  'Heart': LucideIcons.Heart,
  'Scissors': LucideIcons.Scissors,
  'Sparkles': LucideIcons.Sparkles,
  'Hand': LucideIcons.Hand,
  'Activity': LucideIcons.Activity,
  'Dumbbell': LucideIcons.Dumbbell,
  'Bicycle': LucideIcons.Bike,
  
  // Santé & Beauté
  'Stethoscope': LucideIcons.Stethoscope,
  'HeartPulse': LucideIcons.HeartPulse,
  'Pill': LucideIcons.Pill,
  
  // Maison & Jardin
  'Home': LucideIcons.Home,
  'Sofa': LucideIcons.Sofa,
  'Armchair': LucideIcons.Armchair,
  'Bed': LucideIcons.Bed,
  'Sprout': LucideIcons.Sprout,
  'Flower': LucideIcons.Flower,
  'TreePine': LucideIcons.TreePine,
  'Hammer': LucideIcons.Hammer,
  'Wrench': LucideIcons.Wrench,
  'Drill': LucideIcons.Drill,
  'PaintBucket': LucideIcons.PaintBucket,
  
  // Véhicules
  'Truck': LucideIcons.Truck,
  'Car': LucideIcons.Car,
  'Vehicle': LucideIcons.Car,
  'Plane': LucideIcons.Plane,
  'Ship': LucideIcons.Ship,
  
  // Bébé & Enfants
  'Baby': LucideIcons.Baby,
  'Shirt': LucideIcons.Shirt,
  
  // Personnel & Professionnel
  'User': LucideIcons.User,
  'Users': LucideIcons.Users,
  'Briefcase': LucideIcons.Briefcase,
  'Building': LucideIcons.Building,
  'GraduationCap': LucideIcons.GraduationCap,
  
  // Shopping & Services
  'Gift': LucideIcons.Gift,
  'ShoppingBag': LucideIcons.ShoppingBag,
  'ShoppingCart': LucideIcons.ShoppingCart,
  'Package': LucideIcons.Package,
  'Archive': LucideIcons.Archive,
  'Coins': LucideIcons.Coins,
  'Bitcoin': LucideIcons.Bitcoin,
  
  // Animaux
  'PawPrint': LucideIcons.PawPrint,
  'Dog': LucideIcons.Dog,
  'Cat': LucideIcons.Cat,
  'Fish': LucideIcons.Fish,
  
  // Arts & Collection
  'Art': LucideIcons.Palette,
  'Palette': LucideIcons.Palette,
  'Paintbrush': LucideIcons.Paintbrush,
  
  // Événements
  'Calendar': LucideIcons.Calendar,
  'Ticket': LucideIcons.Ticket,
  'PartyPopper': LucideIcons.PartyPopper,
  
  // Alimentation
  'Utensils': LucideIcons.Utensils,
  'ChefHat': LucideIcons.ChefHat,
  'Coffee': LucideIcons.Coffee,
  'Wine': LucideIcons.Wine,
  
  // Voyage
  'MapPin': LucideIcons.MapPin,
  'Compass': LucideIcons.Compass,
  'Luggage': LucideIcons.Luggage,
  
  // Divers
  'Search': LucideIcons.Search,
  'Star': LucideIcons.Star,
  'Award': LucideIcons.Award,
  'TrendingUp': LucideIcons.TrendingUp,
  'Zap': LucideIcons.Zap,
  'Repeat': LucideIcons.Repeat,
};

/**
 * Récupère le composant d'icône Lucide à partir du nom
 * @param iconName - Nom de l'icône (ex: "Laptop", "Home", "Car")
 * @returns Le composant d'icône Lucide ou Package par défaut
 */
export const getIconComponent = (iconName: string | null | undefined): LucideIconComponent => {
  if (!iconName) {
    return LucideIcons.Package;
  }
  
  // Normaliser le nom de l'icône (capitaliser la première lettre)
  const normalizedName = iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();
  
  return iconMapping[normalizedName] || iconMapping[iconName] || LucideIcons.Package;
};

/**
 * Crée un élément React d'icône avec les props par défaut
 * @param iconName - Nom de l'icône
 * @param props - Props additionnelles pour l'icône
 * @returns Élément React de l'icône
 */
export const createIcon = (
  iconName: string | null | undefined, 
  props?: Partial<LucideIcons.LucideProps>
): React.ReactElement => {
  const IconComponent = getIconComponent(iconName);
  return React.createElement(IconComponent, {
    className: "w-5 h-5",
    ...props
  });
};

/**
 * Liste de toutes les icônes disponibles
 */
export const availableIcons = Object.keys(iconMapping);

/**
 * Vérifie si une icône existe dans le mapping
 */
export const iconExists = (iconName: string): boolean => {
  return iconName in iconMapping;
};
