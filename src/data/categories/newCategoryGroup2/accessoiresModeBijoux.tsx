
import { Gem } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const accessoiresModeBijoux: MenuCategory = {
  id: "accessoires-mode-bijoux",
  name: "Accessoires de Mode & Bijoux",
  slug: "accessoires-mode-bijoux",
  icon: <Gem className="w-4 h-4" />,
  subcategories: [
    {
      id: "bijoux",
      name: "Bijoux",
      slug: "bijoux",
      subcategories: [
        { id: "colliers", name: "Colliers", slug: "colliers" },
        { id: "bracelets", name: "Bracelets", slug: "bracelets" },
        { id: "boucles-oreilles", name: "Boucles d'Oreilles", slug: "boucles-oreilles" },
        { id: "bagues", name: "Bagues", slug: "bagues" },
      ],
    },
    {
      id: "montres",
      name: "Montres",
      slug: "montres",
      subcategories: [
        { id: "montres-homme", name: "Montres Homme", slug: "montres-homme" },
        { id: "montres-femme", name: "Montres Femme", slug: "montres-femme" },
        { id: "montres-connectees", name: "Montres Connectées", slug: "montres-connectees" },
      ],
    },
    {
      id: "sacs-maroquinerie",
      name: "Sacs & Maroquinerie",
      slug: "sacs-maroquinerie",
      subcategories: [
        { id: "sacs-main", name: "Sacs à Main", slug: "sacs-main" },
        { id: "portefeuilles", name: "Portefeuilles", slug: "portefeuilles" },
        { id: "sacs-dos", name: "Sacs à Dos", slug: "sacs-dos" },
      ],
    },
  ],
};
