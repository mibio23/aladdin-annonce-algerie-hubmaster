
import { MenuCategory } from "../../categoryTypes";
import { Users } from "lucide-react";

export const jeuxJouets: MenuCategory = {
  id: "jeux-jouets",
  name: "Jeux & Jouets",
  slug: "jeux-jouets",
  icon: <Users className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "jeux-societe",
      name: "Jeux de société",
      slug: "jeux-societe",
      subcategories: [
        { id: "jeux-societe-puzzles", name: "Jeux de société & Puzzles", slug: "jeux-societe-puzzles" },
        { id: "jeux-cartes-collectionner", name: "Jeux de cartes à collectionner", slug: "jeux-cartes-collectionner" },
      ]
    },
    {
      id: "figurines-modelisme",
      name: "Figurines & Modélisme",
      slug: "figurines-modelisme",
      subcategories: [
        { id: "figurines-modelisme-base", name: "Figurines & Modélisme", slug: "figurines-modelisme-base" },
      ]
    },
    {
      id: "jouets-enfant",
      name: "Jouets enfant",
      slug: "jouets-enfant",
      subcategories: [
        { id: "poupees-peluches", name: "Poupées, Peluches & Jouets premier âge", slug: "poupees-peluches" },
        { id: "jouets-eveil", name: "Jouets d'éveil & Hochets", slug: "jouets-eveil" },
        { id: "jeux-educatifs", name: "Jeux éducatifs & Livres pour enfants", slug: "jeux-educatifs" },
      ]
    }
  ]
};
