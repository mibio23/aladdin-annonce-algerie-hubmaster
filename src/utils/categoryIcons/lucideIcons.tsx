
// Icônes Lucide React générées automatiquement pour les catégories étendues
// Généré le: 2025-10-22T12:37:07.162Z

import React from 'react';
import { 
  Monitor, Laptop, Cpu, MousePointer, Tablet, Wifi, Smartphone, Phone, Watch, CreditCard, Camera, Video, Music, Settings,
  Car, Wrench, Truck, Home, Building, Shirt, ShoppingBag, Footprints, Sofa, ChefHat, Droplets, Image, Briefcase, BookOpen,
  Trees, Key, Zap, Anvil, Dumbbell, Ship, Calendar, MoreHorizontal, Folder, Wind, Palette, Hammer, Scissors
} from 'lucide-react';

// Mapping des icônes par ID
const iconMap = {
  Monitor, Laptop, Cpu, MousePointer, Tablet, Wifi, Smartphone, Phone, Watch, CreditCard, Camera, Video, Music, Settings,
  Car, Wrench, Truck, Home, Building, Shirt, ShoppingBag, Footprints, Sofa, ChefHat, Droplets, Image, Briefcase, BookOpen,
  Trees, Key, Zap, Anvil, Dumbbell, Ship, Calendar, MoreHorizontal, Folder, Wind, Palette, Hammer, Scissors
};

// Fonction pour créer une icône
export const createCategoryIcon = (iconName: string, className: string = 'w-4 h-4') => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Folder;
  return <IconComponent className={className} />;
};

// Fonction pour obtenir l'icône par ID de catégorie
export const getCategoryIcon = (categoryId: string, subcategoryId?: string, subsubcategoryId?: string, className: string = 'w-4 h-4') => {
  // Mapping des icônes par catégorie (simplifié)
  const categoryIconMap: Record<string, string> = {
    'informatique-tablettes': 'Monitor',
    'telephonie-objets-connectes': 'Smartphone',
    'image-son': 'Camera',
    'vehicules': 'Car',
    'immobilier': 'Home',
    'mode-habillement': 'Shirt',
    'maison-mobilier-gros-electromenager': 'Home',
    'emploi-carriere': 'Briefcase',
    'metier-reparateur': 'Wrench',
    
    // Sous-catégories
    'laptops-ultrabooks': 'Laptop',
    'smartphones': 'Smartphone',
    'appareils-photo-reflex': 'Camera',
    'voitures-occasion': 'Car',
    'appartements-vente': 'Home',
    'robes-femme': 'Shirt',
    'canapes-fauteuils': 'Sofa',
    'offres-emploi': 'Briefcase',
    'plombier': 'Wrench',
  };
  
  // Priorité: sous-sous-catégorie > sous-catégorie > catégorie
  const iconName = subsubcategoryId && categoryIconMap[subsubcategoryId] || 
                   subcategoryId && categoryIconMap[subcategoryId] || 
                   categoryIconMap[categoryId] || 'Folder';
  
  return createCategoryIcon(iconName, className);
};

export default createCategoryIcon;
