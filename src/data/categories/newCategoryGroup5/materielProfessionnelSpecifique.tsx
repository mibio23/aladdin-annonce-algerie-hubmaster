
import { MenuCategory } from "../../categoryTypes";
import { Users } from "lucide-react";

export const materielProfessionnelSpecifique: MenuCategory = {
  id: "materiel-professionnel-specifique",
  name: "Matériel Professionnel Spécifique",
  slug: "materiel-professionnel-specifique",
  icon: <Users className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "materiel-agricole-btp",
      name: "Matériel Agricole & BTP",
      slug: "materiel-agricole-btp",
      subcategories: [
        { id: "materiel-agricole", name: "Matériel Agricole", slug: "materiel-agricole" },
        { id: "materiel-btp", name: "Matériel BTP", slug: "materiel-btp" },
      ]
    },
    {
      id: "materiel-medical-industriel",
      name: "Matériel Médical & Industriel",
      slug: "materiel-medical-industriel",
      subcategories: [
        { id: "materiel-medical", name: "Matériel Médical & Paramédical", slug: "materiel-medical" },
        { id: "materiel-hospitalier", name: "Matériel et produits Hospitaliers", slug: "materiel-hospitalier" },
        { id: "machines-industrielles", name: "Machines industrielles & Outillage spécifique", slug: "machines-industrielles" },
      ]
    },
    {
      id: "materiel-restauration-securite",
      name: "Matériel Restauration & Sécurité",
      slug: "materiel-restauration-securite",
      subcategories: [
        { id: "materiel-restauration", name: "Matériel Restauration & Hôtellerie", slug: "materiel-restauration" },
        { id: "materiel-signalisation", name: "Matériel Signalisation et balisage de sécurité", slug: "materiel-signalisation" },
        { id: "materiel-extinction", name: "Matériel extinction d'incendie", slug: "materiel-extinction" },
        { id: "equipement-securite", name: "Équipement de sécurité - EPI - EPC", slug: "equipement-securite" },
      ]
    },
    {
      id: "mobilier-commercial",
      name: "Mobilier Commercial",
      slug: "mobilier-commercial",
      subcategories: [
        { id: "mobilier-bureau-pro", name: "Mobilier de bureau & Fournitures professionnelles", slug: "mobilier-bureau-pro" },
        { id: "equipement-commerces", name: "Équipement pour commerces", slug: "equipement-commerces" },
      ]
    }
  ]
};
