
import { Home } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const immobilier: MenuCategory = {
  id: "immobilier",
  name: "Immobilier",
  slug: "immobilier",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "vente",
      name: "Vente",
      slug: "vente",
      subcategories: [
        { id: "appartements", name: "Appartements", slug: "appartements" },
        { id: "maisons", name: "Maisons", slug: "maisons" },
        { id: "terrains", name: "Terrains", slug: "terrains" },
        { id: "locaux-commerciaux", name: "Locaux Commerciaux", slug: "locaux-commerciaux" },
      ],
    },
    {
      id: "location",
      name: "Location",
      slug: "location",
      subcategories: [
        { id: "appartements-location", name: "Appartements", slug: "appartements-location" },
        { id: "maisons-location", name: "Maisons", slug: "maisons-location" },
        { id: "studios", name: "Studios", slug: "studios" },
        { id: "bureaux", name: "Bureaux", slug: "bureaux" },
      ],
    },
    { id: "colocation", name: "Colocation", slug: "colocation", subcategories: [] },
  ],
};
