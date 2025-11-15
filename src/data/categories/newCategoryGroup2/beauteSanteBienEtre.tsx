
import { Heart } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const beauteSanteBienEtre: MenuCategory = {
  id: "beaute-sante-bien-etre",
  name: "Beauté, Santé & Bien-être",
  slug: "beaute-sante-bien-etre",
  icon: <Heart className="w-4 h-4" />,
  subcategories: [
    {
      id: "cosmetiques",
      name: "Cosmétiques",
      slug: "cosmetiques",
      subcategories: [
        { id: "maquillage", name: "Maquillage", slug: "maquillage" },
        { id: "soins-visage", name: "Soins du Visage", slug: "soins-visage" },
        { id: "soins-corps", name: "Soins du Corps", slug: "soins-corps" },
        { id: "parfums", name: "Parfums", slug: "parfums" },
        { id: "soins-cheveux", name: "Soins des Cheveux", slug: "soins-cheveux" },
        { id: "soins-ongles", name: "Soins des Ongles", slug: "soins-ongles" },
        { id: "produits-rasage", name: "Produits de Rasage", slug: "produits-rasage" },
        { id: "huiles-essentielles", name: "Huiles Essentielles", slug: "huiles-essentielles" },
      ],
    },
    { 
      id: "materiel-medical", 
      name: "Matériel Médical", 
      slug: "materiel-medical", 
      subcategories: [
        { id: "thermometres", name: "Thermomètres", slug: "thermometres" },
        { id: "tensiometres", name: "Tensiomètres", slug: "tensiometres" },
        { id: "oximetres", name: "Oxymètres", slug: "oximetres" },
        { id: "balances-medicales", name: "Balances Médicales", slug: "balances-medicales" },
        { id: "fauteuils-roulants", name: "Fauteuils Roulants", slug: "fauteuils-roulants" },
        { id: "cannes-deambulateurs", name: "Cannes & Déambulateurs", slug: "cannes-deambulateurs" },
        { id: "ortheses-protheses", name: "Orthèses & Prothèses", slug: "ortheses-protheses" },
      ]
    },
    { id: "complements-alimentaires", name: "Compléments Alimentaires", slug: "complements-alimentaires", subcategories: [] },
    {
      id: "sport-fitness",
      name: "Sport & Fitness",
      slug: "sport-fitness",
      subcategories: [
        { id: "equipement-fitness", name: "Équipement Fitness", slug: "equipement-fitness" },
        { id: "vetements-sport", name: "Vêtements de Sport", slug: "vetements-sport" },
        { id: "supplements-sportifs", name: "Suppléments Sportifs", slug: "supplements-sportifs" },
      ],
    },
  ],
};
