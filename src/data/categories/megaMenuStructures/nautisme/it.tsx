import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeIt: MenuCategory = {
  id: "nautisme",
  name: "Nautica & Imbarcazioni",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "Tipi di imbarcazioni",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "Barche a motore", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "Barche a vela", slug: "voiliers" },
        { id: "yachts", name: "Yacht", slug: "yachts" },
        { id: "semi-rigides", name: "Gommoni (RIB)", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "Gommoni & Zodiacs", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "Moto d’acqua", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "Barche a remi & lance", slug: "barques-chaloupes" },
        { id: "kayaks", name: "Kayak", slug: "kayaks" },
        { id: "canoes", name: "Canoe", slug: "canoes" },
        { id: "bateaux-de-peche", name: "Barche da pesca", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "Pedalò", slug: "pedalos" },
        { id: "catamarans", name: "Catamarani", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "Tavole windsurf", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "Motori & Propulsione",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "Motori fuoribordo", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "Motori entrobordo", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "Motori elettrici", slug: "moteurs-electriques" },
        { id: "helices", name: "Eliche", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "Propulsione ausiliaria", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "Batterie marine", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "Serbatoi & carburante marino", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "Strumenti di navigazione",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "GPS marini", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "Ecoscandagli & fishfinder", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "Radar", slug: "radars" },
        { id: "cartes-instruments-marins", name: "Carte & strumenti marini", slug: "cartes-instruments-marins" },
        { id: "compas", name: "Bussole", slug: "compas" },
        { id: "pilotes-automatiques", name: "Piloti automatici", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "Radio VHF", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "Chartplotter", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "Binocoli marini", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "Sicurezza & salvataggio",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "Gilet salvagente", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "Boe", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "Imbracature & lifeline", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "Estintori marini", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "Kit di pronto soccorso", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "Razzi & segnalazioni", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "Kit di emergenza", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "Pompe di sentina", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "Accessori ponte & ricambi",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "Cime", slug: "cordages" },
        { id: "amarres", name: "Ormeggi", slug: "amarres" },
        { id: "ancres-chaines", name: "Ancora & catene", slug: "ancres-chaines" },
        { id: "poulies", name: "Carrucole", slug: "poulies" },
        { id: "taquets", name: "Gallocce", slug: "taquets" },
        { id: "mousquetons", name: "Moschettoni", slug: "mousquetons" },
        { id: "winchs", name: "Winch", slug: "winchs" },
        { id: "voiles-greements", name: "Vele & rigging", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "Pulpiti & battagliole", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "Scale bagno", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "Parabordi", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "Oblò & boccaporti", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "Comfort & interni",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "Sedute & panche", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "Cabine & cuccette", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "Illuminazione interna", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "Cucina di bordo", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "Frigoriferi & ghiacciaie marine", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "WC marini", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "Docce & sanitari", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "Stivaggi & gavoni", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "Accessori & manutenzione",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "Coperture protettive", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "Detergenti & cura", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "Vernici & antifouling", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "Kit riparazione scafo", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "Batterie & caricabatterie", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "Attrezzi nautici", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "Pompe manuali", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "Remi & pagaie", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "Trasporto & stoccaggio",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "Rimorchi barca", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "Argani & cinghie", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "Carrelli varo", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "Supporti stoccaggio", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "Garage nautici", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "Paranchi & gru", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "Sport acquatici",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "Wakeboard", slug: "wakeboard" },
        { id: "ski-nautique", name: "Sci nautico", slug: "ski-nautique" },
        { id: "kneeboard", name: "Kneeboard", slug: "kneeboard" },
        { id: "bouees-tractees", name: "Ciambelle trainate", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "Paddle (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "Kitesurf", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "Immersione & snorkeling", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "Attrezzatura pesca in mare", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};