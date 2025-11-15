import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeDe: MenuCategory = {
  id: "nautisme",
  name: "Boote & Nautik",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "Bootstypen",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "Motorboote", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "Segelboote", slug: "voiliers" },
        { id: "yachts", name: "Yachten", slug: "yachts" },
        { id: "semi-rigides", name: "Schlauchboote (RIB)", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "Schlauchboote & Zodiacs", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "Jetskis & Wasserroller", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "Ruderboote & Schaluppen", slug: "barques-chaloupes" },
        { id: "kayaks", name: "Kajaks", slug: "kayaks" },
        { id: "canoes", name: "Kanus", slug: "canoes" },
        { id: "bateaux-de-peche", name: "Fischerboote", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "Tretboote", slug: "pedalos" },
        { id: "catamarans", name: "Katamarane", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "Windsurf-Bretter", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "Motoren & Antrieb",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "Außenbordmotoren", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "Innenbordmotoren", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "Elektromotoren", slug: "moteurs-electriques" },
        { id: "helices", name: "Propeller", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "Hilfsantrieb", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "Bootsbatterien", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "Kraftstofftanks & Bootskraftstoff", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "Navigationsausrüstung",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "Marine-GPS", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "Echolote & Fischfinder", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "Radare", slug: "radars" },
        { id: "cartes-instruments-marins", name: "Seekarten & Marineinstrumente", slug: "cartes-instruments-marins" },
        { id: "compas", name: "Kompass", slug: "compas" },
        { id: "pilotes-automatiques", name: "Autopiloten", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "UKW-Funkgeräte", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "Kartenplotter", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "Marine-Ferngläser", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "Sicherheit & Rettung",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "Rettungswesten", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "Bojen", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "Sicherheitsgurte & Lifelines", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "Feuerlöscher für Boote", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "Erste-Hilfe-Sets", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "Leuchtraketen & Signale", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "Notfallsets", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "Bilgenpumpen", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "Beschläge & Ersatzteile",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "Leinen & Seile", slug: "cordages" },
        { id: "amarres", name: "Festmacherleinen", slug: "amarres" },
        { id: "ancres-chaines", name: "Anker & Ketten", slug: "ancres-chaines" },
        { id: "poulies", name: "Rollen & Blöcke", slug: "poulies" },
        { id: "taquets", name: "Klampen", slug: "taquets" },
        { id: "mousquetons", name: "Karabiner", slug: "mousquetons" },
        { id: "winchs", name: "Winschen", slug: "winchs" },
        { id: "voiles-greements", name: "Segel & Takelage", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "Relings & Pfosten", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "Badeleitern", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "Fender", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "Luken & Bullaugen", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "Komfort & Innenausbau",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "Sitze & Bänke", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "Kabinen & Kojen", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "Innenbeleuchtung", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "Küchenausstattung (Marine)", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "Kühlschränke & Kühlboxen (Marine)", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "Boots-WCs", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "Duschen & Sanitär", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "Stauräume & Schränke", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "Zubehör & Pflege",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "Schutzabdeckungen", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "Reiniger & Pflegeprodukte", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "Farben & Antifouling", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "Rumpfreparatur-Kits", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "Batterien & Ladegeräte", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "Bootswerkzeuge", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "Handpumpen", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "Ruder & Paddel", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "Transport & Lagerung",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "Bootsanhänger", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "Winden & Gurte", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "Slipwagen", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "Lagergestelle", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "Bootsgaragen", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "Davits & Kräne", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "Wassersport",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "Wakeboard", slug: "wakeboard" },
        { id: "ski-nautique", name: "Wasserski", slug: "ski-nautique" },
        { id: "kneeboard", name: "Kneeboard", slug: "kneeboard" },
        { id: "bouees-tractees", name: "Zugbojen", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "Paddle (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "Kitesurfen", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "Tauchen & Schnorcheln", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "Meeresangeln-Ausrüstung", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};