import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsIt: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "Bici, Ciclismo & Attrezzature",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "Tipi di bici",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "Bici da strada", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "Mountain bike (MTB)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "Bici ibride", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "Gravel bike", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "Bici da città", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "Bici pieghevoli", slug: "velos-pliants" },
        { id: "velos-bmx", name: "BMX", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "E-bike", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "Cargo bike", slug: "velos-cargo" },
        { id: "tandems", name: "Tandem", slug: "tandems" },
        { id: "velos-enfants", name: "Bici per bambini", slug: "velos-enfants" },
        { id: "draisiennes", name: "Balance bike", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "Equipaggiamento ciclistico",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "Caschi", slug: "casques" },
        { id: "gants", name: "Guanti", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "Occhiali da ciclismo", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "Maglie", slug: "maillots" },
        { id: "cuissards", name: "Salopette", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "Scarpe da ciclismo", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "Protezioni (ginocchia, gomiti)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "Gilet riflettenti", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "Zaini da ciclismo", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "Borracce e portaborracce", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "Componenti & ricambi",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "Ruote & copertoni", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "Camere d’aria", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "Freni (pattini, dischi)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "Deragliatori", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "Catene & cassette", slug: "chaines-cassettes" },
        { id: "pedales", name: "Pedali", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "Selle & reggisella", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "Manubri & manopole", slug: "guidons-poignees" },
        { id: "pedaliers", name: "Guarniture", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "Sospensioni & forcelle", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "Telai & frameset", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "Accessori bici",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "Luci (anteriore/posteriore)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "Campanelli & clacson", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "Specchietti", slug: "retroviseurs" },
        { id: "bequilles", name: "Cavalletti", slug: "bequilles" },
        { id: "porte-bagages", name: "Portapacchi", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "Cestini & borse", slug: "paniers-sacs" },
        { id: "garde-boue", name: "Parafanghi", slug: "garde-boue" },
        { id: "antivols", name: "Antifurti", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "Ciclocomputer & GPS", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "Supporti smartphone", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "Mini-pompe", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "Seggiolini bambini", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "Attrezzi & manutenzione",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "Kit riparazione", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "Pompe a pavimento", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "Leve smontagomme", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "Lubrificanti & detergenti", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "Chiavi & multitool", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "Cavalletti da lavoro", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "Spazzole di pulizia", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "Stoccaggio & trasporto",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "Supporti a parete", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "Ganci & rack", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "Borse da trasporto bici", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "Portabici auto (bagagliaio, tetto, gancio traino)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "Attrezzatura sportiva per il ciclismo",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "Cardiofrequenzimetri", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "Misuratori di potenza", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "Orologi sportivi", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "Impermeabili & antivento", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "Accessori prestazionali (aerodinamica, ottimizzazione peso)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};