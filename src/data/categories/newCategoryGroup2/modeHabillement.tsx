
import { Shirt } from "lucide-react";
import { MenuCategory } from "../../categoryTypes";
export const modeHabillement: MenuCategory = {
  id: "mode-habillement",
  name: "Mode & Habillement",
  slug: "mode-habillement",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-femme",
      name: "Vêtements Femme",
      slug: "vetements-femme",
      subcategories: [
        { id: "robes", name: "Robes", slug: "robes" },
        { id: "tops-chemisiers", name: "Tops & Chemisiers", slug: "tops-chemisiers" },
        { id: "pantalons-jeans-femme", name: "Pantalons & Jeans", slug: "pantalons-jeans-femme" },
        { id: "jupes", name: "Jupes", slug: "jupes" },
        { id: "vestes-manteaux-femme", name: "Vestes & Manteaux", slug: "vestes-manteaux-femme" },
        // Nouvelle sous-catégorie ajoutée
        {
          id: "vetements-traditionnels-femme",
          name: "Vêtements traditionnels femme",
          slug: "vetements-traditionnels-femme",
          subcategories: [
            { id: "karakou", name: "Karakou", slug: "karakou" },
            { id: "caftan", name: "Caftan", slug: "caftan" },
            { id: "chedda", name: "Chedda", slug: "chedda" },
            { id: "blousa-oranaise", name: "Blousa oranaise", slug: "blousa-oranaise" },
            { id: "djellaba-femme", name: "Djellaba", slug: "djellaba-femme" },
          ]
        },
      ],
    },
    {
      id: "vetements-homme",
      name: "Vêtements Homme",
      slug: "vetements-homme",
      subcategories: [
        { id: "chemises", name: "Chemises", slug: "chemises" },
        { id: "t-shirts-polos", name: "T-shirts & Polos", slug: "t-shirts-polos" },
        { id: "pantalons-jeans-homme", name: "Pantalons & Jeans", slug: "pantalons-jeans-homme" },
        { id: "vestes-manteaux-homme", name: "Vestes & Manteaux", slug: "vestes-manteaux-homme" },
        { id: "costumes", name: "Costumes", slug: "costumes" },
        // Nouvelle sous-catégorie ajoutée
        {
          id: "vetements-traditionnels-homme",
          name: "Vêtements traditionnels homme",
          slug: "vetements-traditionnels-homme",
          subcategories: [
            { id: "gandoura", name: "Gandoura", slug: "gandoura" },
            { id: "burnous", name: "Burnous", slug: "burnous" },
            { id: "djellaba-homme", name: "Djellaba", slug: "djellaba-homme" },
            { id: "chechia", name: "Chéchia", slug: "chechia" },
            { id: "kamis", name: "Kamis", slug: "kamis" },
          ]
        },
      ],
    },
    {
      id: "chaussures",
      name: "Chaussures",
      slug: "chaussures",
      subcategories: [
        { id: "baskets", name: "Baskets", slug: "baskets" },
        { id: "chaussures-ville", name: "Chaussures de Ville", slug: "chaussures-ville" },
        { id: "sandales", name: "Sandales", slug: "sandales" },
        { id: "bottes-bottines", name: "Bottes & Bottines", slug: "bottes-bottines" },
      ],
    },
    {
      id: "sous-vetements",
      name: "Sous-vêtements",
      slug: "sous-vetements",
      subcategories: [
        { id: "soutiens-gorge", name: "Soutiens-gorge", slug: "soutiens-gorge" },
        { id: "culottes-strings", name: "Culottes & Strings", slug: "culottes-strings" },
        { id: "lingerie-fine", name: "Lingerie fine", slug: "lingerie-fine" },
        { id: "collants-bas", name: "Collants & Bas", slug: "collants-bas" },
        { id: "slips-calecons", name: "Slips & Caleçons", slug: "slips-calecons" },
        { id: "boxers", name: "Boxers", slug: "boxers" },
        { id: "chaussettes", name: "Chaussettes", slug: "chaussettes" },
        { id: "maillots-bain", name: "Maillots de bain", slug: "maillots-bain" },
      ]
    },
    {
      id: "vetements-detente",
      name: "Vêtements de détente",
      slug: "vetements-detente",
      subcategories: [
        { id: "pyjamas", name: "Pyjamas", slug: "pyjamas" },
        { id: "chemises-nuit", name: "Chemises de nuit", slug: "chemises-nuit" },
        { id: "robes-chambre", name: "Robes de chambre", slug: "robes-chambre" },
        { id: "pantoufles", name: "Pantoufles", slug: "pantoufles" },
        { id: "survetements", name: "Survêtements", slug: "survetements" },
        { id: "joggings", name: "Joggings", slug: "joggings" },
        { id: "shorts-detente", name: "Shorts de détente", slug: "shorts-detente" },
        { id: "t-shirts-detente", name: "T-shirts de détente", slug: "t-shirts-detente" },
      ]
    },
    {
      id: "deguisements",
      name: "Déguisements",
      slug: "deguisements",
      subcategories: [
        { id: "costumes-halloween", name: "Costumes Halloween", slug: "costumes-halloween" },
        { id: "deguisements-carnaval", name: "Déguisements Carnaval", slug: "deguisements-carnaval" },
        { id: "costumes-enfants", name: "Costumes enfants", slug: "costumes-enfants" },
        { id: "accessoires-deguisements", name: "Accessoires déguisements", slug: "accessoires-deguisements" },
        { id: "masques", name: "Masques", slug: "masques" },
        { id: "perruques", name: "Perruques", slug: "perruques" },
        { id: "maquillage-deguisement", name: "Maquillage déguisement", slug: "maquillage-deguisement" },
        { id: "costumes-themes", name: "Costumes à thèmes", slug: "costumes-themes" },
      ]
    },
  ],
};
