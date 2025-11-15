
import { MenuCategory } from "../../categoryTypes";
import { Plane } from "lucide-react";

export const vacancesVoyages: MenuCategory = {
  id: "vacances-voyages",
  name: "Vacances & Voyages",
  slug: "vacances-voyages",
  icon: <Plane className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "locations-vacances",
      name: "Locations vacances",
      slug: "locations-vacances",
      subcategories: [
        { id: "appartements-vacances", name: "Locations Appartements de vacances", slug: "appartements-vacances" },
        { id: "maisons-villas-vacances", name: "Locations Maisons de vacances & Villas", slug: "maisons-villas-vacances" },
        { id: "chalets-montagne", name: "Locations Chalets (Montagne)", slug: "chalets-montagne" },
        { id: "gites-chambres", name: "Gîtes & Chambres d'hôtes", slug: "gites-chambres" },
      ]
    },
    {
      id: "camping-hebergements",
      name: "Camping & Hébergements",
      slug: "camping-hebergements",
      subcategories: [
        { id: "mobil-homes", name: "Mobil-homes & Bungalows (Camping)", slug: "mobil-homes" },
        { id: "emplacements-camping", name: "Emplacements de camping & Aires de camping-car", slug: "emplacements-camping" },
        { id: "hebergements-insolites", name: "Hébergements insolites", slug: "hebergements-insolites" },
      ]
    },
    {
      id: "voyages-organises",
      name: "Voyages organisés",
      slug: "voyages-organises",
      subcategories: [
        { id: "hotels-clubs", name: "Hôtels & Clubs de vacances", slug: "hotels-clubs" },
        { id: "voyages-circuits", name: "Voyages organisés, Circuits & Croisières", slug: "voyages-circuits" },
        { id: "echange-maisons", name: "Échange de maisons & Appartements", slug: "echange-maisons" },
        { id: "billets-transport", name: "Billets d'avion & de train", slug: "billets-transport" },
      ]
    },
    {
      id: "sejours-vacances",
      name: "Séjours & Vacances",
      slug: "sejours-vacances",
      subcategories: [
        { id: "sejours-vacances-base", name: "Séjours & Vacances", slug: "sejours-vacances-base" },
      ]
    },
    {
      id: "equipements-voyage",
      name: "Équipements de Voyage",
      slug: "equipements-voyage",
      subcategories: [
        { id: "equipements-voyage-base", name: "Équipements de Voyage", slug: "equipements-voyage-base" },
      ]
    }
  ]
};
