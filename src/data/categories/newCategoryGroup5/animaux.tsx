
import { MenuCategory } from "../../categoryTypes";
import { Heart } from "lucide-react";

export const animaux: MenuCategory = {
  id: "animaux",
  name: "Animaux",
  slug: "animaux",
  icon: <Heart className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "chiens-chats",
      name: "Chiens & Chats",
      slug: "chiens-chats",
      subcategories: [
        { id: "adoption-chiens", name: "Adoption & Vente Chiens (par race)", slug: "adoption-chiens" },
        { id: "adoption-chats", name: "Adoption & Vente Chats (par race)", slug: "adoption-chats" },
      ]
    },
    {
      id: "autres-animaux",
      name: "Autres animaux",
      slug: "autres-animaux",
      subcategories: [
        { id: "oiseaux", name: "Oiseaux (Canaris, Perruches, perroquets)", slug: "oiseaux" },
        { id: "rongeurs", name: "Rongeurs (Lapins, Hamsters, Cochons d'Inde)", slug: "rongeurs" },
        { id: "poissons-aquariums", name: "Poissons & Aquariums", slug: "poissons-aquariums" },
        { id: "reptiles-terrariums", name: "Reptiles & Terrariums", slug: "reptiles-terrariums" },
        { id: "animaux-ferme", name: "Animaux de la ferme", slug: "animaux-ferme" },
      ]
    },
    {
      id: "accessoires-services",
      name: "Accessoires & Services",
      slug: "accessoires-services",
      subcategories: [
        { id: "alimentation-animaux", name: "Alimentation pour animaux", slug: "alimentation-animaux" },
        { id: "accessoires-animaux", name: "Accessoires pour animaux", slug: "accessoires-animaux" },
        { id: "garde-animaux", name: "Services de garde d'animaux", slug: "garde-animaux" },
        { id: "toilettage-animaux", name: "Toilettage pour animaux", slug: "toilettage-animaux" },
        { id: "promeneurs-chiens", name: "Promeneurs de chiens", slug: "promeneurs-chiens" },
        { id: "veterinaires-soins", name: "Annonces Vétérinaires & Soins", slug: "veterinaires-soins" },
        { id: "cages-aquariums", name: "Cages & Aquariums", slug: "cages-aquariums" },
        { id: "litiere-hygiene", name: "Litière & Hygiène", slug: "litiere-hygiene" },
        { id: "jouets-animaux", name: "Jouets pour animaux", slug: "jouets-animaux" },
        { id: "transport-animaux", name: "Transport pour animaux", slug: "transport-animaux" },
        { id: "colliers-laisses", name: "Colliers & Laisses", slug: "colliers-laisses" },
        { id: "niches-coussins", name: "Niches & Coussins", slug: "niches-coussins" },
        { id: "pharmacie-veterinaire", name: "Pharmacie vétérinaire", slug: "pharmacie-veterinaire" },
      ]
    },
    {
      id: "animaux-traditionnels",
      name: "Animaux traditionnels",
      slug: "animaux-traditionnels",
      subcategories: [
        { id: "chameaux", name: "Chameaux (courses, reproduction, spectacle)", slug: "chameaux" },
        { id: "faucons-fauconnerie", name: "Faucons et équipement de fauconnerie", slug: "faucons-fauconnerie" },
        { id: "chevaux-arabes", name: "Chevaux arabes", slug: "chevaux-arabes" },
        { id: "fournitures-equestres", name: "Fournitures équestres", slug: "fournitures-equestres" },
      ]
    }
  ]
};
