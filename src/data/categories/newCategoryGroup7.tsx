
import { MenuCategory } from "../categoryTypes";
import { HeartPulse, Book, Coins } from "lucide-react";

// Santé & Médical
const santeMedicalCategory: MenuCategory = {
  id: "sante-medical",
  name: "Santé & Médical",
  slug: "sante-medical",
  icon: <HeartPulse className="w-4 h-4 text-red-500" />,
  subcategories: [
    { id: "materiel-medical", name: "Matériel médical", slug: "materiel-medical", icon: <HeartPulse className="w-3 h-3" />, subcategories: [] },
    { id: "pharmacie", name: "Pharmacie", slug: "pharmacie", icon: <HeartPulse className="w-3 h-3" />, subcategories: [] },
    { id: "bien-etre", name: "Bien-être", slug: "bien-etre", icon: <HeartPulse className="w-3 h-3" />, subcategories: [] }
  ]
};

// Éducation & Formation
const educationFormationCategory: MenuCategory = {
  id: "education-formation",
  name: "Éducation & Formation",
  slug: "education-formation",
  icon: <Book className="w-4 h-4 text-cyan-500" />,
  subcategories: [
    { id: "cours", name: "Cours & formations", slug: "cours", icon: <Book className="w-3 h-3" />, subcategories: [] },
    { id: "livres-educatifs", name: "Livres éducatifs", slug: "livres-educatifs", icon: <Book className="w-3 h-3" />, subcategories: [] },
    { id: "fournitures-scolaires", name: "Fournitures scolaires", slug: "fournitures-scolaires", icon: <Book className="w-3 h-3" />, subcategories: [] }
  ]
};

// Transaction, Monnais Fiduciaire & Freelance
const cryptoFreelanceCategory: MenuCategory = {
  id: "crypto-freelance",
  name: "Transaction, Monnais Fiduciaire & Freelance",
  slug: "crypto-freelance",
  icon: <Coins className="w-4 h-4 text-yellow-500" />,
  subcategories: [
    {
      id: "transactions-financieres",
      name: "Transactions financières",
      slug: "transactions-financieres",
      subcategories: [
        { id: "virements-bancaires", name: "Virements bancaires", slug: "virements-bancaires" },
        { id: "change-devises", name: "Change de devises", slug: "change-devises" },
        { id: "microfinance", name: "Microfinance", slug: "microfinance" }
      ]
    },
    {
      id: "monnaies-fiduciaires",
      name: "Monnaies fiduciaires",
      slug: "monnaies-fiduciaires",
      subcategories: [
        { id: "dinar-algerien", name: "Dinar algérien", slug: "dinar-algerien" },
        { id: "devises-etrangeres", name: "Devises étrangères", slug: "devises-etrangeres" },
        { id: "pieces-collection", name: "Pièces de collection", slug: "pieces-collection" }
      ]
    },
    {
      id: "freelance-services",
      name: "Services freelance",
      slug: "freelance-services",
      subcategories: [
        { id: "redaction-web", name: "Rédaction web", slug: "redaction-web" },
        { id: "graphisme-design", name: "Graphisme & Design", slug: "graphisme-design" },
        { id: "traduction", name: "Traduction", slug: "traduction" },
        { id: "developpement-web", name: "Développement web", slug: "developpement-web" },
        { id: "marketing-digital", name: "Marketing digital", slug: "marketing-digital" },
        { id: "consulting", name: "Conseil", slug: "consulting" }
      ]
    }
  ]
};

export const newCategoriesGroup7: MenuCategory[] = [
  santeMedicalCategory,
  educationFormationCategory,
  cryptoFreelanceCategory
];
