
import { MenuCategory } from "../../categoryTypes";
import { Hammer } from "lucide-react";

export const artisanatProduitsTraditionels: MenuCategory = {
  id: "artisanat-produits-traditionnels",
  name: "Artisanat & Produits Traditionnels",
  slug: "artisanat-produits-traditionnels",
  icon: <Hammer className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "artisanat-textile",
      name: "Artisanat Textile",
      slug: "artisanat-textile",
      subcategories: [
        { id: "tapis-traditionnels", name: "Tapis traditionnels berbères & orientaux", slug: "tapis-traditionnels" },
        { id: "tissage-broderie", name: "Tissage & Broderie traditionnelle", slug: "tissage-broderie" },
        { id: "vetements-traditionnels", name: "Vêtements traditionnels (Haïk, Burnous, Djellaba)", slug: "vetements-traditionnels" },
        { id: "laine-soie", name: "Produits en laine & soie artisanale", slug: "laine-soie" },
      ]
    },
    {
      id: "poterie-ceramique",
      name: "Poterie & Céramique",
      slug: "poterie-ceramique",
      subcategories: [
        { id: "poterie-traditionnelle", name: "Poterie traditionnelle", slug: "poterie-traditionnelle" },
        { id: "ceramique-decorative", name: "Céramique décorative", slug: "ceramique-decorative" },
        { id: "zellige-faience", name: "Zellige & Faïence", slug: "zellige-faience" },
      ]
    },
    {
      id: "bijoux-orfavrerie",
      name: "Bijoux & Orfèvrerie",
      slug: "bijoux-orfavrerie",
      subcategories: [
        { id: "bijoux-berberes", name: "Bijoux berbères en argent", slug: "bijoux-berberes" },
        { id: "orfavrerie-traditionnelle", name: "Orfèvrerie traditionnelle", slug: "orfavrerie-traditionnelle" },
        { id: "corail-ambre", name: "Bijoux en corail & ambre", slug: "corail-ambre" },
        { id: "fibules-broches", name: "Fibules & broches traditionnelles", slug: "fibules-broches" },
      ]
    },
    {
      id: "maroquinerie-cuir",
      name: "Maroquinerie & Cuir",
      slug: "maroquinerie-cuir",
      subcategories: [
        { id: "maroquinerie-traditionnelle", name: "Maroquinerie traditionnelle", slug: "maroquinerie-traditionnelle" },
        { id: "babouches-sandales", name: "Babouches & sandales en cuir", slug: "babouches-sandales" },
        { id: "sacs-cuir-artisanal", name: "Sacs en cuir artisanal", slug: "sacs-cuir-artisanal" },
      ]
    },
    {
      id: "travail-bois-metal",
      name: "Travail du Bois & Métal",
      slug: "travail-bois-metal",
      subcategories: [
        { id: "sculpture-bois", name: "Sculpture sur bois", slug: "sculpture-bois" },
        { id: "menuiserie-traditionnelle", name: "Menuiserie traditionnelle", slug: "menuiserie-traditionnelle" },
        { id: "dinanderie", name: "Dinanderie (cuivre, laiton)", slug: "dinanderie" },
        { id: "ferronnerie-artistique", name: "Ferronnerie d'art", slug: "ferronnerie-artistique" },
      ]
    },
    {
      id: "vannerie-sparterie",
      name: "Vannerie & Sparterie",
      slug: "vannerie-sparterie",
      subcategories: [
        { id: "paniers-traditionnels", name: "Paniers & corbeilles traditionnels", slug: "paniers-traditionnels" },
        { id: "objets-alfa-palmier", name: "Objets en alfa & palmier nain", slug: "objets-alfa-palmier" },
      ]
    }
  ]
};
