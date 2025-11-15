import { MenuCategory, SearchBarCategory } from "./categoryTypes";
import { newCategoriesGroup1 } from "./categories/newCategoryGroup1";
import { newCategoriesGroup2 } from "./categories/newCategoryGroup2";
import { newCategoriesGroup3 } from "./categories/newCategoryGroup3";
import { newCategoriesGroup4 } from "./categories/newCategoryGroup4";
import { newCategoriesGroup5 } from "./categories/newCategoryGroup5";
import { newCategoriesGroup6 } from "./categories/newCategoryGroup6";
import { newCategoriesGroup7 } from "./categories/newCategoryGroup7";
import { newCategoriesGroup8 } from "./categories/newCategoryGroup8";
import { Monitor, Book, Puzzle, Heart, Scissors, Sparkles, Hand, Activity, Home, Sprout, Hammer, Truck, Baby, User, BookOpenCheck, ShoppingBag } from "lucide-react";

// Catégories spéciales créées directement dans ce fichier
const techMultimediaCategory: MenuCategory = {
  id: "tech-multimedia",
  name: "Tech & Multimédia",
  slug: "tech-multimedia",
  icon: <Monitor className="w-4 h-4" />,
  subcategories: [
    { id: "livres-papeterie", name: "Livres & Papeterie", slug: "livres-papeterie", icon: <Book className="h-4 w-4 text-sky-400"/>, subcategories: [] },
    { id: "jeux-jouets", name: "Jeux & Jouets", slug: "jeux-jouets", icon: <Puzzle className="h-4 w-4 text-orange-500"/>, subcategories: [] }
  ]
};

const servicesBienEtreCategory: MenuCategory = {
  id: "services-bien-etre",
  name: "Services & Bien-Être",
  slug: "services-bien-etre",
  icon: <Heart className="w-4 h-4" />,
  subcategories: [
    { 
      id: "beaute-sante-bien-etre", 
      name: "Beauté, Santé & Bien-être", 
      slug: "beaute-sante-bien-etre", 
      icon: <Heart className="h-4 w-4 text-pink-400" />, 
      subcategories: [
        { id: "coiffure", name: "Coiffure", slug: "coiffure", icon: <Scissors className="h-3 w-3" /> },
        { id: "soins-esthetiques", name: "Soins esthétiques", slug: "soins-esthetiques", icon: <Sparkles className="h-3 w-3" /> },
        { id: "massage", name: "Massage", slug: "massage", icon: <Hand className="h-3 w-3" /> },
        { id: "nutrition-coaching", name: "Nutrition & Coaching", slug: "nutrition-coaching", icon: <Activity className="h-3 w-3" /> },
      ] 
    },
    { 
      id: "services-personne", 
      name: "Services à la personne", 
      slug: "services-personne", 
      icon: <User className="h-4 w-4 text-green-400" />, 
      subcategories: [
        { id: "aide-domicile", name: "Aide à domicile", slug: "aide-domicile", icon: <Home className="h-3 w-3" /> },
        { id: "jardinage", name: "Jardinage", slug: "jardinage", icon: <Sprout className="h-3 w-3" /> },
        { id: "bricolage", name: "Bricolage", slug: "bricolage", icon: <Hammer className="h-3 w-3" /> },
        { id: "demenagement", name: "Déménagement", slug: "demenagement", icon: <Truck className="h-3 w-3" /> },
      ]
    },
    { 
      id: "garde-enfants", 
      name: "Garde d'enfants", 
      slug: "garde-enfants", 
      icon: <Baby className="h-4 w-4 text-yellow-400" />, 
      subcategories: [
        { id: "baby-sitting", name: "Baby-sitting", slug: "baby-sitting", icon: <Baby className="h-3 w-3" /> },
        { id: "assistante-maternelle", name: "Assistante maternelle", slug: "assistante-maternelle", icon: <User className="h-3 w-3" /> },
        { id: "soutien-scolaire", name: "Soutien scolaire", slug: "soutien-scolaire", icon: <BookOpenCheck className="h-3 w-3" /> },
      ] 
    },
  ]
};

// Catégorie principale "Sacs, Bagages"
const sacsBagagesCategory: MenuCategory = {
  id: "sacs-bagages",
  name: "Sacs, Bagages",
  slug: "sacs-bagages",
  icon: <ShoppingBag className="w-4 h-4" />,
  subcategories: [
    {
      id: "sacs-femme",
      name: "Sacs Femme",
      slug: "sacs-femme",
      subcategories: [
        { id: "sacs-main-femme", name: "Sacs à Main", slug: "sacs-main-femme" },
        { id: "sacs-bandouliere-femme", name: "Sacs Bandoulière", slug: "sacs-bandouliere-femme" },
        { id: "sacs-dos-femme", name: "Sacs à Dos", slug: "sacs-dos-femme" },
        { id: "pochettes-femme", name: "Pochettes", slug: "pochettes-femme" },
        { id: "sacs-soiree-femme", name: "Sacs de Soirée", slug: "sacs-soiree-femme" },
        { id: "sacs-shopping-femme", name: "Sacs Shopping", slug: "sacs-shopping-femme" },
      ],
    },
    {
      id: "sacs-homme",
      name: "Sacs Homme",
      slug: "sacs-homme",
      subcategories: [
        { id: "sacs-main-homme", name: "Sacs à Main", slug: "sacs-main-homme" },
        { id: "sacs-bandouliere-homme", name: "Sacs Bandoulière", slug: "sacs-bandouliere-homme" },
        { id: "sacs-dos-homme", name: "Sacs à Dos", slug: "sacs-dos-homme" },
        { id: "sacs-sport-homme", name: "Sacs de Sport", slug: "sacs-sport-homme" },
        { id: "sacs-voyage-homme", name: "Sacs de Voyage", slug: "sacs-voyage-homme" },
        { id: "portefeuilles-homme", name: "Portefeuilles", slug: "portefeuilles-homme" },
      ],
    },
    {
      id: "bagages-voyage",
      name: "Bagages de Voyage",
      slug: "bagages-voyage",
      subcategories: [
        { id: "valises", name: "Valises", slug: "valises" },
        { id: "valises-cabine", name: "Valises Cabine", slug: "valises-cabine" },
        { id: "sacs-voyage", name: "Sacs de Voyage", slug: "sacs-voyage" },
        { id: "sacs-sport", name: "Sacs de Sport", slug: "sacs-sport" },
        { id: "housses-voyage", name: "Housses de Voyage", slug: "housses-voyage" },
        { id: "accessoires-voyage", name: "Accessoires de Voyage", slug: "accessoires-voyage" },
      ],
    },
    {
      id: "sacs-enfants",
      name: "Sacs Enfants",
      slug: "sacs-enfants",
      subcategories: [
        { id: "sacs-dos-ecole", name: "Sacs à Dos École", slug: "sacs-dos-ecole" },
        { id: "sacs-bandouliere-enfants", name: "Sacs Bandoulière", slug: "sacs-bandouliere-enfants" },
        { id: "sacs-gouter", name: "Sacs Goûter", slug: "sacs-gouter" },
        { id: "sacs-sport-enfants", name: "Sacs de Sport", slug: "sacs-sport-enfants" },
        { id: "cartables", name: "Cartables", slug: "cartables" },
      ],
    },
    {
      id: "maroquinerie",
      name: "Maroquinerie",
      slug: "maroquinerie",
      subcategories: [
        { id: "portefeuilles", name: "Portefeuilles", slug: "portefeuilles" },
        { id: "portefeuilles-homme", name: "Portefeuilles Homme", slug: "portefeuilles-homme" },
        { id: "portefeuilles-femme", name: "Portefeuilles Femme", slug: "portefeuilles-femme" },
        { id: "ceintures", name: "Ceintures", slug: "ceintures" },
        { id: "gants", name: "Gants", slug: "gants" },
        { id: "etuis-carte", name: "Étuis à Carte", slug: "etuis-carte" },
        { id: "trousse-maquillage", name: "Trousse à Maquillage", slug: "trousse-maquillage" },
      ],
    },
  ],
};

// Export des catégories de menu
export const categoryMenu: MenuCategory[] = [
  ...newCategoriesGroup1,
  ...newCategoriesGroup2,
  sacsBagagesCategory, // Positionné après Mode & Accessoires (newCategoriesGroup2)
  ...newCategoriesGroup3,
  ...newCategoriesGroup4,
  ...newCategoriesGroup5,
  ...newCategoriesGroup6,
  ...newCategoriesGroup7,
  ...newCategoriesGroup8,
  techMultimediaCategory,
  servicesBienEtreCategory,
];

export const mainCategories: SearchBarCategory[] = categoryMenu.map(cat => ({
  id: cat.slug,
  name: cat.name,
  value: cat.slug,
  icon: cat.icon,
}));
