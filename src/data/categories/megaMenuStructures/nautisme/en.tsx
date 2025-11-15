import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeEn: MenuCategory = {
  id: "nautisme",
  name: "Boating & Marine",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "Boat Types",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "Powerboats", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "Sailboats", slug: "voiliers" },
        { id: "yachts", name: "Yachts", slug: "yachts" },
        { id: "semi-rigides", name: "RIBs", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "Inflatables & Zodiacs", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "Jet skis & PWCs", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "Rowboats & skiffs", slug: "barques-chaloupes" },
        { id: "kayaks", name: "Kayaks", slug: "kayaks" },
        { id: "canoes", name: "Canoes", slug: "canoes" },
        { id: "bateaux-de-peche", name: "Fishing boats", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "Pedal boats", slug: "pedalos" },
        { id: "catamarans", name: "Catamarans", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "Windsurf boards", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "Engines & Propulsion",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "Outboard engines", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "Inboard engines", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "Electric motors", slug: "moteurs-electriques" },
        { id: "helices", name: "Propellers", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "Auxiliary propulsion", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "Marine batteries", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "Fuel tanks & marine fuel", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "Navigation Equipment",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "Marine GPS", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "Fishfinders & echo sounders", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "Radars", slug: "radars" },
        { id: "cartes-instruments-marins", name: "Charts & marine instruments", slug: "cartes-instruments-marins" },
        { id: "compas", name: "Compasses", slug: "compas" },
        { id: "pilotes-automatiques", name: "Autopilots", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "VHF radios", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "Chartplotters", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "Marine binoculars", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "Safety & Rescue",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "Life jackets", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "Buoys", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "Harnesses & lifelines", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "Marine fire extinguishers", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "First aid kits", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "Flares & signaling", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "Emergency kits", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "Bilge pumps", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "Deck Fittings & Spare Parts",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "Ropes", slug: "cordages" },
        { id: "amarres", name: "Dock lines", slug: "amarres" },
        { id: "ancres-chaines", name: "Anchors & chains", slug: "ancres-chaines" },
        { id: "poulies", name: "Pulleys", slug: "poulies" },
        { id: "taquets", name: "Cleats", slug: "taquets" },
        { id: "mousquetons", name: "Carabiners", slug: "mousquetons" },
        { id: "winchs", name: "Winches", slug: "winchs" },
        { id: "voiles-greements", name: "Sails & rigging", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "Stanchions & rails", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "Swim ladders", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "Fenders", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "Hatches & portholes", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "Comfort & Interior",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "Seats & benches", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "Cabins & berths", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "Interior lighting", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "Marine galley equipment", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "Marine fridges & coolers", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "Marine toilets", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "Showers & sanitation", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "Storage & lockers", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "Accessories & Maintenance",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "Protective covers", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "Cleaners & care products", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "Paints & antifouling", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "Hull repair kits", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "Batteries & chargers", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "Marine tools", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "Hand pumps", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "Oars & paddles", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "Transport & Storage",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "Boat trailers", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "Winches & straps", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "Launching trolleys", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "Storage racks", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "Boat garages", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "Davits & hoists", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "Water Sports",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "Wakeboard", slug: "wakeboard" },
        { id: "ski-nautique", name: "Water skiing", slug: "ski-nautique" },
        { id: "kneeboard", name: "Kneeboard", slug: "kneeboard" },
        { id: "bouees-tractees", name: "Towable tubes", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "Paddle (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "Kitesurf", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "Diving & snorkeling", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "Sea fishing gear", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};