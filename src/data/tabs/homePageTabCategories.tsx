import { Home, Car, Computer, Smartphone, Tv, Refrigerator, Sofa, Palette, Hammer, Shirt, Gem, Heart } from "lucide-react";
import { TabCategory } from "../types/homePageTypes";
import Icon3D from "@/components/shared/Icon3D";

// Cette constante 'homePageTabCategories' est utilisée pour les sections de catégories
export const homePageTabCategories: TabCategory[] = [
  { 
    id: "immobilier", 
    name: "Immobilier", 
    icon: <Home className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cube" color="#9b87f5" height={24} width={24} className="mr-2" />
  },
  { 
    id: "vehicules", 
    name: "Véhicules", 
    icon: <Car className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="sphere" color="#F97316" height={24} width={24} className="mr-2" />
  },
  { 
    id: "informatique", 
    name: "Informatique", 
    icon: <Computer className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="torus" color="#0EA5E9" height={24} width={24} className="mr-2" />
  },
  { 
    id: "telephonie", 
    name: "Téléphonie", 
    icon: <Smartphone className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cone" color="#1EAEDB" height={24} width={24} className="mr-2" />
  },
  { 
    id: "image-son", 
    name: "Image & Son", 
    icon: <Tv className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="sphere" color="#D946EF" height={24} width={24} className="mr-2" />
  },
  { 
    id: "electromenager", 
    name: "Électroménager", 
    icon: <Refrigerator className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cube" color="#8B5CF6" height={24} width={24} className="mr-2" />
  },
  { 
    id: "meubles", 
    name: "Meubles", 
    icon: <Sofa className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cube" color="#10B981" height={24} width={24} className="mr-2" />
  },
  { 
    id: "decoration", 
    name: "Décoration", 
    icon: <Palette className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="sphere" color="#F59E0B" height={24} width={24} className="mr-2" />
  },
  { 
    id: "jardinage-bricolage", 
    name: "Jardinage & Bricolage", 
    icon: <Hammer className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="torus" color="#84CC16" height={24} width={24} className="mr-2" />
  },
  { 
    id: "mode-habillement", 
    name: "Mode & Habillement", 
    icon: <Shirt className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cone" color="#EC4899" height={24} width={24} className="mr-2" />
  },
  { 
    id: "accessoires-mode-bijoux", 
    name: "Accessoires & Bijoux", 
    icon: <Gem className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="sphere" color="#8B5CF6" height={24} width={24} className="mr-2" />
  },
  { 
    id: "beaute-sante-bien-etre", 
    name: "Beauté & Bien-être", 
    icon: <Heart className="w-4 h-4 mr-2" />,
    icon3D: <Icon3D type="cube" color="#EF4444" height={24} width={24} className="mr-2" />
  },
];
