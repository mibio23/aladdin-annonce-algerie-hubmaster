
import { Briefcase } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const emploiCarriere: MenuCategory = {
  id: "emploi-carriere",
  name: "Emploi & Carrière",
  slug: "emploi-carriere",
  icon: <Briefcase className="w-4 h-4" />,
  subcategories: [
    {
      id: "type-emploi",
      name: "Type d'Emploi",
      slug: "type-emploi",
      subcategories: [
        { id: "cdd", name: "CDD", slug: "cdd" },
        { id: "cdi", name: "CDI", slug: "cdi" },
        { id: "stage", name: "Stage", slug: "stage" },
        { id: "freelance", name: "Freelance", slug: "freelance" },
        { id: "temps-partiel", name: "Temps Partiel", slug: "temps-partiel" },
        { id: "interim", name: "Intérim", slug: "interim" },
      ],
    },
    {
      id: "secteur-activite",
      name: "Secteur d'Activité",
      slug: "secteur-activite",
      subcategories: [
        { id: "administration", name: "Administration", slug: "administration" },
        { id: "commerce-vente", name: "Commerce & Vente", slug: "commerce-vente" },
        { id: "education", name: "Éducation", slug: "education" },
        { id: "sante", name: "Santé", slug: "sante" },
        { id: "ingenierie", name: "Ingénierie", slug: "ingenierie" },
        { id: "marketing", name: "Marketing", slug: "marketing" },
        { id: "finance", name: "Finance", slug: "finance" },
        { id: "restauration", name: "Restauration", slug: "restauration" },
      ],
    },
    {
      id: "niveau-experience",
      name: "Niveau d'Expérience",
      slug: "niveau-experience",
      subcategories: [
        { id: "debutant", name: "Débutant", slug: "debutant" },
        { id: "intermediaire", name: "Intermédiaire (1-3 ans)", slug: "intermediaire" },
        { id: "experimente", name: "Expérimenté (3-5 ans)", slug: "experimente" },
        { id: "senior", name: "Senior (5+ ans)", slug: "senior" },
      ],
    },
  ],
};
