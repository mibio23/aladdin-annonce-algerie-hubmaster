import { SubCategory } from "@/data/categoryTypes";
import { createSubCategory, createSubSubCategory } from "@/utils/categoryUtils";
import { 
  Car, Home, Smartphone, Monitor, Shirt
} from "lucide-react";

// Sous-catégories communes réutilisables
export const commonVehicleSubcategories: SubCategory[] = [
  createSubCategory(
    "voitures",
    "Voitures",
    "voitures",
    <Car className="h-4 w-4 text-blue-500" />,
    [
      createSubSubCategory("berline", "Berline", "berline"),
      createSubSubCategory("suv", "SUV", "suv"),
      createSubSubCategory("4x4", "4x4", "4x4"),
      createSubSubCategory("break", "Break", "break"),
      createSubSubCategory("cabriolet", "Cabriolet", "cabriolet"),
    ]
  ),
];

export const commonImmobilierSubcategories: SubCategory[] = [
  createSubCategory(
    "vente",
    "Vente",
    "vente",
    <Home className="h-4 w-4 text-green-500" />,
    [
      createSubSubCategory("appartements", "Appartements", "appartements"),
      createSubSubCategory("maisons", "Maisons", "maisons"),
      createSubSubCategory("terrains", "Terrains", "terrains"),
      createSubSubCategory("commerces", "Commerces", "commerces"),
    ]
  ),
];

export const commonTechSubcategories: SubCategory[] = [
  createSubCategory(
    "ordinateurs",
    "Ordinateurs",
    "ordinateurs",
    <Monitor className="h-4 w-4 text-purple-500" />,
    [
      createSubSubCategory("portables", "Portables", "portables"),
      createSubSubCategory("bureau", "Bureau", "bureau"),
      createSubSubCategory("gaming", "Gaming", "gaming"),
    ]
  ),
  createSubCategory(
    "smartphones",
    "Smartphones",
    "smartphones",
    <Smartphone className="h-4 w-4 text-pink-500" />,
    [
      createSubSubCategory("android", "Android", "android"),
      createSubSubCategory("iphone", "iPhone", "iphone"),
    ]
  ),
];

export const commonFashionSubcategories: SubCategory[] = [
  createSubCategory(
    "vetements",
    "Vêtements",
    "vetements",
    <Shirt className="h-4 w-4 text-orange-500" />,
    [
      createSubSubCategory("hauts", "Hauts", "hauts"),
      createSubSubCategory("pantalons", "Pantalons", "pantalons"),
      createSubSubCategory("robes", "Robes", "robes"),
      createSubSubCategory("chaussures", "Chaussures", "chaussures"),
    ]
  ),
];