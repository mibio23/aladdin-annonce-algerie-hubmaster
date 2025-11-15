import { Book } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const livresPapeterie: MenuCategory = {
  id: "livres-papeterie",
  name: "Livres & Papeterie",
  slug: "livres-papeterie",
  icon: <Book className="h-4 w-4 text-fuchsia-600" />,
  subcategories: [
    {
      id: "livres-scolaires",
      name: "Livres scolaires",
      slug: "livres-scolaires",
      icon: <Book className="h-3 w-3 text-fuchsia-400" />,
      subcategories: [],
    },
    {
      id: "romans",
      name: "Romans",
      slug: "romans",
      icon: <Book className="h-3 w-3 text-yellow-500" />,
      subcategories: [],
    },
    {
      id: "bd-manga",
      name: "BD & Manga",
      slug: "bd-manga",
      icon: <Book className="h-3 w-3 text-emerald-400" />,
      subcategories: [],
    },
    {
      id: "fournitures-papeterie",
      name: "Fournitures de papeterie",
      slug: "fournitures-papeterie",
      icon: <Book className="h-3 w-3 text-blue-400" />,
      subcategories: [],
    },
  ],
};
