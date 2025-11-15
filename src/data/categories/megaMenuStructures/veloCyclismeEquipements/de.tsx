import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsDe: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "Fahrräder, Radsport & Ausrüstung",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "Fahrradtypen",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "Rennräder", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "Mountainbikes (MTB)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "Trekking-/Hybridräder", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "Gravelbikes", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "Cityräder", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "Falträder", slug: "velos-pliants" },
        { id: "velos-bmx", name: "BMX-Räder", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "E-Bikes", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "Lastenräder", slug: "velos-cargo" },
        { id: "tandems", name: "Tandems", slug: "tandems" },
        { id: "velos-enfants", name: "Kinderfahrräder", slug: "velos-enfants" },
        { id: "draisiennes", name: "Laufräder", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "Radsport-Ausrüstung",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "Helme", slug: "casques" },
        { id: "gants", name: "Handschuhe", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "Radsportbrillen", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "Trikots", slug: "maillots" },
        { id: "cuissards", name: "Radhosen", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "Radschuhe", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "Schutzausrüstung (Knie, Ellenbogen)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "Reflexwesten", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "Fahrradrucksäcke", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "Flaschen & Flaschenhalter", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "Komponenten & Ersatzteile",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "Laufräder & Reifen", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "Schläuche", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "Bremsen (Beläge, Scheiben)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "Schaltwerke", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "Ketten & Kassetten", slug: "chaines-cassettes" },
        { id: "pedales", name: "Pedale", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "Sättel & Sattelstützen", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "Lenker & Griffe", slug: "guidons-poignees" },
        { id: "pedaliers", name: "Kurbeln", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "Federungen & Gabeln", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "Rahmen & Rahmensets", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "Fahrrad-Zubehör",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "Beleuchtung (vorne/hinten)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "Klingeln & Hupen", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "Spiegel", slug: "retroviseurs" },
        { id: "bequilles", name: "Ständer", slug: "bequilles" },
        { id: "porte-bagages", name: "Gepäckträger", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "Körbe & Taschen", slug: "paniers-sacs" },
        { id: "garde-boue", name: "Schutzbleche", slug: "garde-boue" },
        { id: "antivols", name: "Schlösser", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "Fahrradcomputer & GPS", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "Handyhalterungen", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "Minipumpen", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "Kindersitze", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "Werkzeuge & Pflege",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "Reparatursets", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "Standpumpen", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "Reifenheber", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "Schmiermittel & Reiniger", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "Schlüssel & Multitools", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "Montageständer", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "Reinigungsbürsten", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "Aufbewahrung & Transport",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "Wandhalterungen", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "Haken & Racks", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "Transporttaschen", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "Fahrradträger fürs Auto (Heck, Dach, Anhängerkupplung)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "Radsport-Zusatzausrüstung",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "Herzfrequenzmesser", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "Leistungsmesser", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "Sportuhren", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "Regen- & Windjacken", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "Performance-Zubehör (Aerodynamik, Gewichtsoptimierung)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};