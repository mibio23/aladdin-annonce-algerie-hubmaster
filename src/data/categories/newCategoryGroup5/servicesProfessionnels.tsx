
import { MenuCategory } from "../../categoryTypes";
import { Users } from "lucide-react";

export const servicesProfessionnels: MenuCategory = {
  id: "services-professionnels",
  name: "Services aux Professionnels",
  slug: "services-professionnels",
  icon: <Users className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "creation-web",
      name: "Création web & Design",
      slug: "creation-web",
      subcategories: [
        { id: "creation-sites-web", name: "Création de sites web & Développement", slug: "creation-sites-web" },
        { id: "graphisme-design", name: "Graphisme, Design & Illustration", slug: "graphisme-design" },
      ]
    },
    {
      id: "services-communication",
      name: "Communication & Marketing",
      slug: "services-communication",
      subcategories: [
        { id: "redaction-traduction", name: "Rédaction, Traduction & Correction", slug: "redaction-traduction" },
        { id: "marketing-digital", name: "Marketing digital & SEO", slug: "marketing-digital" },
      ]
    },
    {
      id: "conseil-entreprise",
      name: "Conseil entreprise",
      slug: "conseil-entreprise",
      subcategories: [
        { id: "comptabilite-conseil", name: "Comptabilité & Conseil aux entreprises", slug: "comptabilite-conseil" },
      ]
    }
  ]
};
