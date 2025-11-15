
import { MenuCategory } from "../../categoryTypes";
import { Search } from "lucide-react";

export const perduTrouve: MenuCategory = {
  id: "perdu-trouve",
  name: "Perdu/Trouvé",
  slug: "perdu-trouve",
  icon: <Search className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "objets-perdus",
      name: "Objets perdus",
      slug: "objets-perdus",
      subcategories: [
        { id: "avis-recherche-objets", name: "Avis de recherche & Objets perdus/trouvés", slug: "avis-recherche-objets" },
      ]
    }
  ]
};
