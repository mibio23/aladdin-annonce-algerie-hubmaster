
import { Sofa } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const maisonMobilierElectromenager: MenuCategory = {
  id: "maison-mobilier-gros-electromenager",
  name: "Maison, Mobilier & Gros Électroménager",
  slug: "maison-mobilier-gros-electromenager", // S'assurer que le slug correspond à la clé de traduction
  icon: <Sofa className="w-4 h-4" />,
  subcategories: [
    {
      id: "meubles",
      name: "Meubles",
      slug: "meubles",
      subcategories: [
        {
          id: "salon",
          name: "Salon",
          slug: "salon"
        },
        {
          id: "chambre",
          name: "Chambre",
          slug: "chambre"
        },
        {
          id: "cuisine",
          name: "Cuisine",
          slug: "cuisine"
        },
        {
          id: "bureau",
          name: "Bureau",
          slug: "bureau"
        },
        {
          id: "rangement",
          name: "Rangement",
          slug: "rangement"
        }
      ]
    },
    {
      id: "electromenager",
      name: "Électroménager",
      slug: "electromenager",
      subcategories: [
        {
          id: "refrigerateur",
          name: "Réfrigérateur",
          slug: "refrigerateur"
        },
        {
          id: "lave-linge",
          name: "Lave-linge",
          slug: "lave-linge"
        },
        {
          id: "lave-vaisselle",
          name: "Lave-vaisselle",
          slug: "lave-vaisselle"
        },
        {
          id: "four",
          name: "Four",
          slug: "four"
        },
        {
          id: "micro-ondes",
          name: "Micro-ondes",
          slug: "micro-ondes"
        },
        {
          id: "cuisinieres",
          name: "Cuisinières",
          slug: "cuisinieres"
        },
        {
          id: "hottes-aspirantes",
          name: "Hottes aspirantes",
          slug: "hottes-aspirantes"
        },
        {
          id: "congelateurs",
          name: "Congélateurs",
          slug: "congelateurs"
        },
        {
          id: "seche-linge",
          name: "Sèche-linge",
          slug: "seche-linge"
        },
        {
          id: "plaques-cuisson",
          name: "Plaques de cuisson",
          slug: "plaques-cuisson"
        },
        {
          id: "caves-vin",
          name: "Caves à vin",
          slug: "caves-vin"
        },
        {
          id: "climatiseurs",
          name: "Climatiseurs",
          slug: "climatiseurs"
        }
      ]
    },
    {
      id: "petit-electromenager",
      name: "Petit Électroménager",
      slug: "petit-electromenager",
      subcategories: [
        {
          id: "cafetiere",
          name: "Cafetière",
          slug: "cafetiere"
        },
        {
          id: "mixeur",
          name: "Mixeur",
          slug: "mixeur"
        },
        {
          id: "grille-pain",
          name: "Grille-pain",
          slug: "grille-pain"
        },
        {
          id: "fer-repasser",
          name: "Fer à repasser",
          slug: "fer-repasser"
        }
      ]
    },
    {
      id: "decoration",
      name: "Décoration",
      slug: "decoration",
      subcategories: [
        {
          id: "luminaires",
          name: "Luminaires",
          slug: "luminaires"
        },
        {
          id: "tableaux",
          name: "Tableaux",
          slug: "tableaux"
        },
        {
          id: "tapis",
          name: "Tapis",
          slug: "tapis"
        },
        {
          id: "rideaux",
          name: "Rideaux",
          slug: "rideaux"
        },
        {
          id: "bougies-parfums",
          name: "Bougies & Parfums d'ambiance",
          slug: "bougies-parfums"
        },
        {
          id: "plantes-fleurs",
          name: "Plantes & Fleurs",
          slug: "plantes-fleurs"
        },
        {
          id: "coussins-plaids",
          name: "Coussins & Plaids",
          slug: "coussins-plaids"
        }
      ]
    },
    {
      id: "cuisine-ustensiles",
      name: "Cuisine & Ustensiles",
      slug: "cuisine-ustensiles",
      subcategories: [
        {
          id: "casseroles",
          name: "Casseroles",
          slug: "casseroles"
        },
        {
          id: "couverts",
          name: "Couverts",
          slug: "couverts"
        },
        {
          id: "vaisselle",
          name: "Vaisselle",
          slug: "vaisselle"
        },
        {
          id: "robots-cuisine",
          name: "Robots de Cuisine",
          slug: "robots-cuisine"
        },
        {
          id: "accessoires-cuisine",
          name: "Accessoires de Cuisine",
          slug: "accessoires-cuisine"
        }
      ]
    },
    {
      id: "linge-maison",
      name: "Linge de Maison",
      slug: "linge-maison",
      subcategories: [
        {
          id: "draps",
          name: "Draps",
          slug: "draps"
        },
        {
          id: "serviettes",
          name: "Serviettes",
          slug: "serviettes"
        },
        {
          id: "couvertures",
          name: "Couvertures",
          slug: "couvertures"
        },
        {
          id: "oreillers",
          name: "Oreillers",
          slug: "oreillers"
        },
        {
          id: "housses-protection",
          name: "Housses de Protection",
          slug: "housses-protection"
        }
      ]
    },
    {
      id: "nettoyage-entretien",
      name: "Nettoyage & Entretien",
      slug: "nettoyage-entretien",
      subcategories: [
        {
          id: "produits-nettoyage",
          name: "Produits de Nettoyage",
          slug: "produits-nettoyage"
        },
        {
          id: "aspirateurs",
          name: "Aspirateurs",
          slug: "aspirateurs"
        },
        {
          id: "accessoires-nettoyage",
          name: "Accessoires de Nettoyage",
          slug: "accessoires-nettoyage"
        }
      ]
    }
  ]
};
