import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsFr: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "Vélo, Cyclisme & Équipements",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "Types de vélos",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "Vélos de route", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "Vélos de montagne (VTT)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "Vélos hybrides", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "Vélos gravel", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "Vélos de ville", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "Vélos pliants", slug: "velos-pliants" },
        { id: "velos-bmx", name: "Vélos BMX", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "Vélos électriques (VAE)", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "Vélos cargo", slug: "velos-cargo" },
        { id: "tandems", name: "Tandems", slug: "tandems" },
        { id: "velos-enfants", name: "Vélos enfants", slug: "velos-enfants" },
        { id: "draisiennes", name: "Draisiennes", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "Équipements cyclistes",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "Casques", slug: "casques" },
        { id: "gants", name: "Gants", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "Lunettes de cyclisme", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "Maillots", slug: "maillots" },
        { id: "cuissards", name: "Cuissards", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "Chaussures de cyclisme", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "Protections (genouillères, coudières)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "Gilets réfléchissants", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "Sacs à dos vélo", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "Gourdes & porte-gourdes", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "Composants & pièces détachées",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "Roues & pneus", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "Chambres à air", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "Freins (patins, disques)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "Dérailleurs", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "Chaînes & cassettes", slug: "chaines-cassettes" },
        { id: "pedales", name: "Pédales", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "Selles & tiges de selle", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "Guidons & poignées", slug: "guidons-poignees" },
        { id: "pedaliers", name: "Pédaliers", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "Suspensions & fourches", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "Cadres & kits-cadres", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "Accessoires vélos",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "Éclairages (avant/arrière)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "Sonnettes & klaxons", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "Rétroviseurs", slug: "retroviseurs" },
        { id: "bequilles", name: "Béquilles", slug: "bequilles" },
        { id: "porte-bagages", name: "Porte-bagages", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "Paniers & sacs", slug: "paniers-sacs" },
        { id: "garde-boue", name: "Garde-boue", slug: "garde-boue" },
        { id: "antivols", name: "Antivols", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "Compteurs & GPS vélo", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "Supports smartphone", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "Pompes à main", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "Porte-enfants", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "Outils & entretien",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "Kits de réparation", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "Pompes à pied", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "Démonte-pneus", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "Lubrifiants & nettoyants", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "Clés & multi-outils vélo", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "Supports de réparation", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "Brosses d’entretien", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "Rangement & transport",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "Supports muraux vélo", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "Crochets & racks", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "Housses de transport vélo", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "Porte-vélos voiture (coffre, toit, attelage)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "Équipements sportifs liés au cyclisme",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "Cardiofréquencemètres", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "Capteurs de puissance", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "Montres sport", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "Vêtements de pluie & coupe-vent", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "Accessoires de performance (aérodynamique, optimisation poids)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};