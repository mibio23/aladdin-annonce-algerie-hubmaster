
import { MenuCategory } from "../../categoryTypes";
import { Users } from "lucide-react";

export const evenementielBilletterie: MenuCategory = {
  id: "evenementiel-billetterie",
  name: "Événementiel & Billetterie",
  slug: "evenementiel-billetterie",
  icon: <Users className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "billets-spectacles",
      name: "Billets & Spectacles",
      slug: "billets-spectacles",
      subcategories: [
        { id: "billets-concerts", name: "Billets de concerts & Spectacles", slug: "billets-concerts" },
        { id: "billets-parcs", name: "Billets Parcs d'attractions & Événements sportifs", slug: "billets-parcs" },
      ]
    },
    {
      id: "location-materiel",
      name: "Location matériel",
      slug: "location-materiel",
      subcategories: [
        { id: "location-materiel-evenementiel", name: "Location de matériel événementiel", slug: "location-materiel-evenementiel" },
      ]
    },
    {
      id: "services-evenements",
      name: "Services événements",
      slug: "services-evenements",
      subcategories: [
        { id: "photographes-videographes", name: "Photographes & Vidéastes", slug: "photographes-videographes" },
        { id: "traiteurs-reception", name: "Traiteurs & Organisation de réceptions", slug: "traiteurs-reception" },
        { id: "animateurs-dj", name: "Animateurs, DJ & Musiciens pour événements", slug: "animateurs-dj" },
        { id: "fournitures-mariages", name: "Fournitures pour Mariages & Événements Traditionnels", slug: "fournitures-mariages" },
      ]
    }
  ]
};
