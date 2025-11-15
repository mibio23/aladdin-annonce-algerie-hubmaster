
import { MenuCategory } from "../../categoryTypes";
import { Gift } from "lucide-react";

export const aDonner: MenuCategory = {
  id: "a-donner",
  name: "À Donner",
  slug: "a-donner",
  icon: <Gift className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "dons-objets",
      name: "Dons d'objets",
      slug: "dons-objets",
      subcategories: [
        { id: "dons-objets-divers", name: "Dons d'objets", slug: "dons-objets-divers" },
      ]
    }
  ]
};
