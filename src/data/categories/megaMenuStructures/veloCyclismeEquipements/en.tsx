import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsEn: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "Bikes, Cycling & Equipment",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "Bike Types",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "Road bikes", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "Mountain bikes (MTB)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "Hybrid bikes", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "Gravel bikes", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "City bikes", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "Folding bikes", slug: "velos-pliants" },
        { id: "velos-bmx", name: "BMX bikes", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "Electric bikes (E-bike)", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "Cargo bikes", slug: "velos-cargo" },
        { id: "tandems", name: "Tandems", slug: "tandems" },
        { id: "velos-enfants", name: "Kids’ bikes", slug: "velos-enfants" },
        { id: "draisiennes", name: "Balance bikes", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "Cycling Gear",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "Helmets", slug: "casques" },
        { id: "gants", name: "Gloves", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "Cycling glasses", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "Jerseys", slug: "maillots" },
        { id: "cuissards", name: "Bib shorts", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "Cycling shoes", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "Protective gear (knee, elbow)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "Reflective vests", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "Cycling backpacks", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "Bottles & bottle cages", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "Components & Spare Parts",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "Wheels & tires", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "Inner tubes", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "Brakes (pads, discs)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "Derailleurs", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "Chains & cassettes", slug: "chaines-cassettes" },
        { id: "pedales", name: "Pedals", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "Saddles & seatposts", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "Handlebars & grips", slug: "guidons-poignees" },
        { id: "pedaliers", name: "Cranksets", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "Suspensions & forks", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "Frames & framesets", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "Bike Accessories",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "Lights (front/rear)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "Bells & horns", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "Mirrors", slug: "retroviseurs" },
        { id: "bequilles", name: "Kickstands", slug: "bequilles" },
        { id: "porte-bagages", name: "Racks", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "Baskets & bags", slug: "paniers-sacs" },
        { id: "garde-boue", name: "Fenders", slug: "garde-boue" },
        { id: "antivols", name: "Locks", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "Bike computers & GPS", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "Phone mounts", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "Mini pumps", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "Child seats", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "Tools & Maintenance",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "Repair kits", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "Floor pumps", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "Tire levers", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "Lubricants & cleaners", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "Wrenches & multitools", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "Repair stands", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "Cleaning brushes", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "Storage & Transport",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "Wall mounts", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "Hooks & racks", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "Bike travel bags", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "Car racks (trunk, roof, hitch)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "Cycling Sports Equipment",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "Heart rate monitors", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "Power meters", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "Sports watches", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "Rainwear & windbreakers", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "Performance accessories (aero, weight optimization)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};