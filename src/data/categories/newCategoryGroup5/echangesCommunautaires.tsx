
import { MenuCategory } from "../../categoryTypes";
import { RefreshCw } from "lucide-react";

export const echangesCommunautaires: MenuCategory = {
  id: "echanges-communautaires",
  name: "Échanges Communautaires",
  slug: "echanges-communautaires",
  icon: <RefreshCw className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "communaute-echanges",
      name: "Communauté & Échanges",
      slug: "communaute-echanges",
      subcategories: [
        { id: "covoiturage", name: "Covoiturage (Trajets réguliers & occasionnels)", slug: "covoiturage" },
        { id: "benevolat-projets", name: "Bénévolat & Projets associatifs", slug: "benevolat-projets" },
        { id: "evenements-locaux", name: "Événements locaux", slug: "evenements-locaux" },
        { id: "groupes-discussion", name: "Groupes de discussion & Loisirs partagés", slug: "groupes-discussion" },
        { id: "articles-hajj-omra", name: "Articles & Services pour Hajj/Omra", slug: "articles-hajj-omra" },
      ]
    }
  ]
};
