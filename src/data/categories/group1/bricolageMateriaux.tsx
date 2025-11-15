import { Hammer, Construction } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";

export const bricolageMateriaux: MenuCategory = {
  id: "bricolage-materiaux",
  name: "Bricolage & Matériaux",
  slug: "bricolage-materiaux",
  icon: <Hammer className="w-4 h-4" />,
  subcategories: [
    {
      id: "outils",
      name: "Outils",
      slug: "outils",
      subcategories: [
        {
          id: "outils-manuels",
          name: "Outils Manuels",
          slug: "outils-manuels"
        },
        {
          id: "outils-electriques",
          name: "Outils Électriques",
          slug: "outils-electriques"
        },
        {
          id: "perceuses",
          name: "Perceuses",
          slug: "perceuses"
        },
        {
          id: "scies",
          name: "Scies",
          slug: "scies"
        },
        {
          id: "ponceuses",
          name: "Ponceuses",
          slug: "ponceuses"
        },
        {
          id: "raboteuses",
          name: "Raboteuses",
          slug: "raboteuses"
        },
        {
          id: "meuleuses",
          name: "Meuleuses",
          slug: "meuleuses"
        },
        {
          id: "compresseurs",
          name: "Compresseurs",
          slug: "compresseurs"
        },
        {
          id: "generateurs",
          name: "Générateurs",
          slug: "generateurs"
        },
        {
          id: "echelles-escabeaux",
          name: "Échelles & Escabeaux",
          slug: "echelles-escabeaux"
        }
      ]
    },
    {
      id: "materiaux",
      name: "Matériaux",
      slug: "materiaux",
      subcategories: [
        {
          id: "bois",
          name: "Bois",
          slug: "bois"
        },
        {
          id: "metal",
          name: "Métal",
          slug: "metal"
        },
        {
          id: "peinture",
          name: "Peinture",
          slug: "peinture"
        }
      ]
    },
    {
      id: "quincaillerie",
      name: "Quincaillerie",
      slug: "quincaillerie",
      icon: <Construction className="w-3 h-3 text-yellow-500" />,
      subcategories: [
        {
          id: "serrurerie",
          name: "Serrurerie",
          slug: "serrurerie"
        },
        {
          id: "visserie",
          name: "Visserie & Boulonnerie",
          slug: "visserie-boulonnerie"
        },
        {
          id: "charnières",
          name: "Charnières",
          slug: "charniere"
        },
        {
          id: "poignees",
          name: "Poignées & Boutons",
          slug: "poignees"
        },
        {
          id: "accessoires-quincaillerie",
          name: "Accessoires divers",
          slug: "accessoires-quincaillerie"
        }
      ]
    },
    {
      id: "securite-protection",
      name: "Sécurité & Protection",
      slug: "securite-protection",
      subcategories: [
        { id: "equipements-protection-individuelle", name: "Équipements de protection individuelle", slug: "equipements-protection-individuelle" },
        { id: "casques-protection", name: "Casques de protection", slug: "casques-protection" },
        { id: "gants-protection", name: "Gants de protection", slug: "gants-protection" },
        { id: "chaussures-securite", name: "Chaussures de sécurité", slug: "chaussures-securite" },
        { id: "vetements-protection", name: "Vêtements de protection", slug: "vetements-protection" },
        { id: "masques-respiratoires", name: "Masques respiratoires", slug: "masques-respiratoires" },
        { id: "lunettes-protection", name: "Lunettes de protection", slug: "lunettes-protection" },
        { id: "equipements-antichute", name: "Équipements antichute", slug: "equipements-antichute" },
        { id: "systemes-alarme", name: "Systèmes d'alarme", slug: "systemes-alarme" },
        { id: "detecteurs-fumee", name: "Détecteurs de fumée", slug: "detecteurs-fumee" },
        { id: "extincteurs", name: "Extincteurs", slug: "extincteurs" },
        { id: "premiers-secours", name: "Premiers secours", slug: "premiers-secours" },
      ]
    }
  ],
};
