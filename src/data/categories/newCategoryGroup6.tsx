
import { MenuCategory } from "../categoryTypes";
import { Camera, Leaf } from "lucide-react";

// Photographie & Vidéo
const photographieVideoCategory: MenuCategory = {
  id: "photographie-video",
  name: "Photographie & Vidéo",
  slug: "photographie-video",
  icon: <Camera className="w-4 h-4 text-pink-400" />,
  subcategories: [
    { id: "appareils-photo", name: "Appareils photo & Reflex", slug: "appareils-photo", icon: <Camera className="w-3 h-3" />, subcategories: [] },
    { id: "drones", name: "Drones & Accessoires", slug: "drones", icon: <Camera className="w-3 h-3" />, subcategories: [] },
    { id: "cameras", name: "Caméras & GoPro", slug: "cameras", icon: <Camera className="w-3 h-3" />, subcategories: [] },
    { id: "equipement-studio", name: "Équipement Studio", slug: "equipement-studio", icon: <Camera className="w-3 h-3" />, subcategories: [] }
  ]
};

// Jardinage & Plantes
const jardinagePlantesCategory: MenuCategory = {
  id: "jardinage-plantes",
  name: "Jardinage & Plantes",
  slug: "jardinage-plantes",
  icon: <Leaf className="w-4 h-4 text-green-500" />,
  subcategories: [
    { id: "plantes", name: "Plantes et graines", slug: "plantes", icon: <Leaf className="w-3 h-3 text-green-400" />, subcategories: [] },
    { id: "mobilier-jardin", name: "Mobilier d'extérieur", slug: "mobilier-jardin", icon: <Leaf className="w-3 h-3 text-green-400" />, subcategories: [] },
    { id: "outils-jardinage", name: "Outils de jardinage", slug: "outils-jardinage", icon: <Leaf className="w-3 h-3 text-green-400" />, subcategories: [] }
  ]
};

export const newCategoriesGroup6: MenuCategory[] = [
  photographieVideoCategory,
  jardinagePlantesCategory
];
