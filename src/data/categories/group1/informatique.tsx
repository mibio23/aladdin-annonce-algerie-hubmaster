import { Laptop } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const informatique: MenuCategory = {
  id: "informatique",
  name: "Informatique",
  slug: "informatique",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs",
      name: "Ordinateurs",
      slug: "ordinateurs",
      subcategories: [
        {
          id: "pc-portables",
          name: "PC Portables",
          slug: "pc-portables"
        },
        {
          id: "pc-bureau",
          name: "PC de Bureau",
          slug: "pc-bureau"
        },
        {
          id: "mac",
          name: "Mac",
          slug: "mac"
        }
      ]
    },
    {
      id: "tablettes",
      name: "Tablettes",
      slug: "tablettes",
      subcategories: [
        {
          id: "ipad",
          name: "iPad",
          slug: "ipad"
        },
        {
          id: "samsung-tab",
          name: "Samsung Tab",
          slug: "samsung-tab"
        },
        {
          id: "autres-tablettes",
          name: "Autres Tablettes",
          slug: "autres-tablettes"
        }
      ]
    },
    {
      id: "composants",
      name: "Composants",
      slug: "composants",
      subcategories: [
        {
          id: "processeurs",
          name: "Processeurs",
          slug: "processeurs"
        },
        {
          id: "cartes-graphiques",
          name: "Cartes Graphiques",
          slug: "cartes-graphiques"
        },
        {
          id: "cartes-graphiques-gaming",
          name: "Cartes Graphiques Gaming",
          slug: "cartes-graphiques-gaming"
        },
        {
          id: "memoire-ram",
          name: "Mémoire RAM",
          slug: "memoire-ram"
        },
        {
          id: "refroidissement-liquide",
          name: "Refroidissement Liquide",
          slug: "refroidissement-liquide"
        },
        {
          id: "boitiers-gaming-rgb",
          name: "Boîtiers Gaming RGB",
          slug: "boitiers-gaming-rgb"
        }
      ]
    },
    {
      id: "logiciels",
      name: "Logiciels",
      slug: "logiciels",
      subcategories: [
        {
          id: "antivirus",
          name: "Antivirus",
          slug: "antivirus"
        },
        {
          id: "suites-bureautiques",
          name: "Suites Bureautiques",
          slug: "suites-bureautiques"
        },
        {
          id: "logiciels-montage-video",
          name: "Logiciels Montage Vidéo",
          slug: "logiciels-montage-video"
        },
        {
          id: "logiciels-comptabilite",
          name: "Logiciels Comptabilité",
          slug: "logiciels-comptabilite"
        }
      ]
    },
    {
      id: "reseaux-avances",
      name: "Réseaux Avancés",
      slug: "reseaux-avances",
      subcategories: [
        {
          id: "commutateurs-geres",
          name: "Commutateurs Gérés",
          slug: "commutateurs-geres"
        },
        {
          id: "points-acces-wifi-pro",
          name: "Points d'Accès WiFi Pro",
          slug: "points-acces-wifi-pro"
        },
        {
          id: "repeteurs-amplificateurs",
          name: "Répéteurs & Amplificateurs",
          slug: "repeteurs-amplificateurs"
        }
      ]
    },
    {
      id: "accessoires-informatique",
      name: "Accessoires",
      slug: "accessoires-informatique",
      subcategories: [
        {
          id: "souris",
          name: "Souris",
          slug: "souris"
        },
        {
          id: "claviers",
          name: "Claviers",
          slug: "claviers"
        },
        {
          id: "ecrans",
          name: "Écrans",
          slug: "ecrans"
        }
      ]
    }
  ],
};
