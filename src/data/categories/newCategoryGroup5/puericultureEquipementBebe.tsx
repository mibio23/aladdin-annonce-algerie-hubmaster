
import { MenuCategory } from "../../categoryTypes";
import { Heart } from "lucide-react";

export const puericultureEquipementBebe: MenuCategory = {
  id: "puericulture-equipement-bebe",
  name: "Puériculture & Équipement Bébé",
  slug: "puericulture-equipement-bebe",
  icon: <Heart className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "transport-bebe",
      name: "Transport bébé",
      slug: "transport-bebe",
      subcategories: [
        { id: "poussettes-landau", name: "Poussettes, Landau & Porte-bébés", slug: "poussettes-landau" },
        { id: "sieges-auto", name: "Sièges auto & Rehausseurs", slug: "sieges-auto" },
        { id: "tricycles-trottinettes", name: "Tricycles & Trottinettes", slug: "tricycles-trottinettes" },
        { id: "remorques-velo", name: "Remorques à vélo", slug: "remorques-velo" },
      ]
    },
    {
      id: "mobilier-bebe",
      name: "Mobilier bébé",
      slug: "mobilier-bebe",
      subcategories: [
        { id: "lits-bebe", name: "Lits bébé, Berceaux & Parcs", slug: "lits-bebe" },
        { id: "tables-langer", name: "Tables à langer & Baignoires bébé", slug: "tables-langer" },
        { id: "chaises-hautes", name: "Chaises hautes, Biberons & Stérilisateurs", slug: "chaises-hautes" },
        { id: "mobilier-chambre-enfant", name: "Mobilier pour chambre d'enfant", slug: "mobilier-chambre-enfant" },
        { id: "coffres-rangement", name: "Coffres à jouets & Rangement", slug: "coffres-rangement" },
        { id: "veilleuses-decorations", name: "Veilleuses & Décorations", slug: "veilleuses-decorations" },
      ]
    },
    {
      id: "alimentation-bebe",
      name: "Alimentation bébé",
      slug: "alimentation-bebe",
      subcategories: [
        { id: "biberons-accessoires", name: "Biberons & Accessoires", slug: "biberons-accessoires" },
        { id: "allaitement", name: "Allaitement", slug: "allaitement" },
        { id: "sterilisateurs", name: "Stérilisateurs", slug: "sterilisateurs" },
        { id: "chauffe-biberon", name: "Chauffe-biberon", slug: "chauffe-biberon" },
        { id: "petits-pots", name: "Petits pots & Alimentation", slug: "petits-pots" },
      ]
    },
    {
      id: "hygiene-soins",
      name: "Hygiène & Soins",
      slug: "hygiene-soins",
      subcategories: [
        { id: "couches-lingettes", name: "Couches & Lingettes", slug: "couches-lingettes" },
        { id: "produits-bain", name: "Produits de bain", slug: "produits-bain" },
        { id: "thermometres-bebe", name: "Thermomètres bébé", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Soins de la peau", slug: "soins-peau-bebe" },
      ]
    },
    {
      id: "jouets-eveil",
      name: "Jouets & Éveil",
      slug: "jouets-eveil",
      subcategories: [
        { id: "jouets-premier-age", name: "Jouets premier âge", slug: "jouets-premier-age" },
        { id: "hochets-anneaux", name: "Hochets & Anneaux de dentition", slug: "hochets-anneaux" },
        { id: "tapis-eveil", name: "Tapis d'éveil", slug: "tapis-eveil" },
        { id: "livres-bebe", name: "Livres pour bébé", slug: "livres-bebe" },
        { id: "peluches-doudous", name: "Peluches & Doudous", slug: "peluches-doudous" },
      ]
    }
  ]
};
