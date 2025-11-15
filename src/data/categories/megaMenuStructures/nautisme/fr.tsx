import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeFr: MenuCategory = {
  id: "nautisme",
  name: "Nautisme & Bateaux",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "Types de bateaux",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "Bateaux à moteur", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "Voiliers", slug: "voiliers" },
        { id: "yachts", name: "Yachts", slug: "yachts" },
        { id: "semi-rigides", name: "Semi-rigides", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "Zodiacs & pneumatiques", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "Jet-skis & scooters des mers", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "Barques & chaloupes", slug: "barques-chaloupes" },
        { id: "kayaks", name: "Kayaks", slug: "kayaks" },
        { id: "canoes", name: "Canoës", slug: "canoes" },
        { id: "bateaux-de-peche", name: "Bateaux de pêche", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "Pédalos", slug: "pedalos" },
        { id: "catamarans", name: "Catamarans", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "Planches à voile & windsurf", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "Moteurs & propulsion",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "Moteurs hors-bord", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "Moteurs in-bord", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "Moteurs électriques", slug: "moteurs-electriques" },
        { id: "helices", name: "Hélices", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "Systèmes de propulsion auxiliaire", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "Batteries marine", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "Réservoirs & carburant nautique", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "Équipements de navigation",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "GPS nautiques", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "Sondeurs & échosondeurs", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "Radars", slug: "radars" },
        { id: "cartes-instruments-marins", name: "Cartes & instruments marins", slug: "cartes-instruments-marins" },
        { id: "compas", name: "Compas", slug: "compas" },
        { id: "pilotes-automatiques", name: "Pilotes automatiques", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "Radios VHF", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "Traceurs de cartes", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "Jumelles marines", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "Sécurité & sauvetage",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "Gilets de sauvetage", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "Bouées", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "Harnais & lignes de vie", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "Extincteurs marine", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "Trousses de secours", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "Fusées & signalisations", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "Kits d’urgence", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "Pompes de cale", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "Accastillage & pièces détachées",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "Cordages", slug: "cordages" },
        { id: "amarres", name: "Amarres", slug: "amarres" },
        { id: "ancres-chaines", name: "Ancres & chaînes", slug: "ancres-chaines" },
        { id: "poulies", name: "Poulies", slug: "poulies" },
        { id: "taquets", name: "Taquets", slug: "taquets" },
        { id: "mousquetons", name: "Mousquetons", slug: "mousquetons" },
        { id: "winchs", name: "Winchs", slug: "winchs" },
        { id: "voiles-greements", name: "Voiles & gréements", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "Chandeliers & balcons", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "Échelles de bain", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "Pare-battages", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "Hublots & écoutilles", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "Confort & aménagement intérieur",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "Sièges & banquettes", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "Cabines & couchettes", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "Éclairage intérieur", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "Équipements de cuisine marine", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "Réfrigérateurs & glacières nautiques", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "WC nautiques", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "Douches & sanitaires", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "Rangements & coffres", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "Accessoires & entretien",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "Housses de protection", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "Nettoyants & produits d’entretien", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "Peintures & antifouling", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "Kits de réparation coque", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "Batteries & chargeurs", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "Outils nautiques", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "Pompes manuelles", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "Rames & pagaies", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "Transport & stockage",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "Remorques bateau", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "Treuils & sangles", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "Chariots de mise à l’eau", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "Supports de stockage", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "Garages nautiques", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "Portiques & palans", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "Sports nautiques associés",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "Wakeboard", slug: "wakeboard" },
        { id: "ski-nautique", name: "Ski nautique", slug: "ski-nautique" },
        { id: "kneeboard", name: "Kneeboard", slug: "kneeboard" },
        { id: "bouees-tractees", name: "Bouées tractées", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "Paddle (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "Kitesurf", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "Plongée & snorkeling", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "Équipements de pêche en mer", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};