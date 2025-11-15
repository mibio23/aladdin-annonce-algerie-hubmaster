
import { Car } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const vehicules: MenuCategory = {
  id: "vehicules",
  name: "Véhicules",
  slug: "vehicules",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures",
      name: "Voitures",
      slug: "voitures",
      subcategories: [
        { id: "renault", name: "Renault", slug: "renault" },
        { id: "peugeot", name: "Peugeot", slug: "peugeot" },
        { id: "citroen", name: "Citroën", slug: "citroen" },
        { id: "volkswagen", name: "Volkswagen", slug: "volkswagen" },
        { id: "mercedes", name: "Mercedes", slug: "mercedes" },
        { id: "bmw", name: "BMW", slug: "bmw" },
        { id: "audi", name: "Audi", slug: "audi" },
        { id: "toyota", name: "Toyota", slug: "toyota" },
        { id: "hyundai", name: "Hyundai", slug: "hyundai" },
        { id: "kia", name: "Kia", slug: "kia" },
      ],
    },
    {
      id: "motos",
      name: "Motos",
      slug: "motos",
      subcategories: [
        { id: "yamaha", name: "Yamaha", slug: "yamaha" },
        { id: "honda", name: "Honda", slug: "honda" },
        { id: "kawasaki", name: "Kawasaki", slug: "kawasaki" },
        { id: "suzuki", name: "Suzuki", slug: "suzuki" },
        { id: "ducati", name: "Ducati", slug: "ducati" },
      ],
    },
    { id: "pieces-auto", name: "Pièces Auto", slug: "pieces-auto", subcategories: [] },
    { id: "accessoires-auto", name: "Accessoires Auto", slug: "accessoires-auto", subcategories: [] },
  ],
};
