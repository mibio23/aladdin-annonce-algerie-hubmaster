
import { MenuCategory } from "../../categoryTypes";
import { Users } from "lucide-react";

export const servicesParticuliers: MenuCategory = {
  id: "services-particuliers",
  name: "Services aux Particuliers",
  slug: "services-particuliers",
  icon: <Users className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "garde-enfants",
      name: "Garde d'enfants",
      slug: "garde-enfants",
      subcategories: [
        { id: "assistantes-maternelles", name: "Assistantes maternelles & Nounous", slug: "assistantes-maternelles" },
        { id: "babysitting", name: "Babysitting occasionnel", slug: "babysitting" },
        { id: "creches-garderies", name: "Annonces Crèches & Garderies", slug: "creches-garderies" },
      ]
    },
    {
      id: "reparation-maison",
      name: "Réparation & Maison",
      slug: "reparation-maison",
      subcategories: [
        { id: "reparation-electromenager", name: "Réparation Électroménager", slug: "reparation-electromenager" },
        { id: "depannage-informatique", name: "Dépannage Informatique & Mobile", slug: "depannage-informatique" },
        { id: "plomberie-chauffage", name: "Plomberie, Chauffage, Climatisation", slug: "plomberie-chauffage" },
        { id: "electricite", name: "Électricité", slug: "electricite" },
        { id: "serrurerie", name: "Serrurerie", slug: "serrurerie" },
        { id: "peinture-renovation", name: "Peinture & Rénovation intérieure", slug: "peinture-renovation" },
        { id: "maconnerie", name: "Maçonnerie & Gros œuvre", slug: "maconnerie" },
        { id: "menuiserie", name: "Menuiserie & Ébénisterie", slug: "menuiserie" },
      ]
    },
    {
      id: "services-domicile",
      name: "Services à domicile",
      slug: "services-domicile",
      subcategories: [
        { id: "jardinage-entretien", name: "Jardinage & Entretien extérieur", slug: "jardinage-entretien" },
        { id: "demenagement-transport", name: "Déménagement & Transport d'objets", slug: "demenagement-transport" },
        { id: "nettoyage-menage", name: "Nettoyage & Aide ménagère", slug: "nettoyage-menage" },
        { id: "services-personne", name: "Services à la personne", slug: "services-personne" },
        { id: "chauffeurs-prives", name: "Chauffeurs privés", slug: "chauffeurs-prives" },
        { id: "reparation-auto-moto", name: "Réparation Auto/Moto/Vélo", slug: "reparation-auto-moto" },
      ]
    }
  ]
};
