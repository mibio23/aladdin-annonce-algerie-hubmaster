import { MenuCategory } from "../../categoryTypes";
import { Music } from "lucide-react";

// Catégorie existante (loisirs, collections, etc., simplifiée ici)
export const loisirsCollectionsCategories: MenuCategory[] = [
  {
    id: "loisirs-collections",
    name: "Loisirs & Collections",
    slug: "loisirs-collections",
    icon: <Music className="w-4 h-4 text-purple-400" />,
    subcategories: [
      {
        id: "instruments-orientaux",
        name: "Instruments de musique orientale",
        slug: "instruments-orientaux",
        icon: <Music className="w-3 h-3 text-amber-400" />,
        subcategories: [
          { id: "oud", name: "Oud", slug: "oud" },
          { id: "kanoun", name: "Kanoun", slug: "kanoun" },
          { id: "derbouka", name: "Darbouka", slug: "derbouka" },
          { id: "nay", name: "Nay", slug: "nay" },
          { id: "rebab", name: "Rebab", slug: "rebab" }
        ]
      }
      // ... autres sous-catégories déjà existantes si besoin ...
    ]
  }
];
