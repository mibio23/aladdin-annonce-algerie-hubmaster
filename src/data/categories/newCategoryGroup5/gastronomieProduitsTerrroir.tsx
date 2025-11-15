
import { MenuCategory } from "../../categoryTypes";
import { Heart, Utensils } from "lucide-react";

export const gastronomieProduitsTerrroir: MenuCategory = {
  id: "gastronomie-produits-terroir",
  name: "Gastronomie & Produits du Terroir",
  slug: "gastronomie-produits-terroir",
  icon: <Heart className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "produits-orientaux",
      name: "Produits orientaux",
      slug: "produits-orientaux",
      subcategories: [
        { id: "dattes-oud-bakhoor", name: "Dattes, Oud & Bakhoor", slug: "dattes-oud-bakhoor" },
      ]
    },
    {
      id: "plats-traditionnels-orientaux",
      name: "Plats traditionnels orientaux",
      slug: "plats-traditionnels-orientaux",
      icon: <Utensils className="w-3 h-3 text-orange-500" />,
      subcategories: [
        { id: "couscous", name: "Couscous", slug: "couscous" },
        { id: "tajine", name: "Tajine", slug: "tajine" },
        { id: "chorba", name: "Chorba", slug: "chorba" },
        { id: "mekhouna", name: "Mekhouna", slug: "mekhouna" },
        { id: "mhajeb", name: "Mhajeb", slug: "mhajeb" },
        { id: "reghag", name: "Reghag", slug: "reghag" }
      ]
    }
  ]
};
