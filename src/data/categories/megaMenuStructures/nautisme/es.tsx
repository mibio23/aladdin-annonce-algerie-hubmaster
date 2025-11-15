import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeEs: MenuCategory = {
  id: "nautisme",
  name: "Náutica & Embarcaciones",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "Tipos de embarcaciones",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "Lanchas a motor", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "Veleros", slug: "voiliers" },
        { id: "yachts", name: "Yates", slug: "yachts" },
        { id: "semi-rigides", name: "Semirrígidos", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "Zodiacs & neumáticas", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "Motos de agua", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "Botes & chalupas", slug: "barques-chaloupes" },
        { id: "kayaks", name: "Kayaks", slug: "kayaks" },
        { id: "canoes", name: "Canoas", slug: "canoes" },
        { id: "bateaux-de-peche", name: "Barcos de pesca", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "Hidropedales", slug: "pedalos" },
        { id: "catamarans", name: "Catamaranes", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "Tablas de windsurf", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "Motores & Propulsión",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "Motores fueraborda", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "Motores intraborda", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "Motores eléctricos", slug: "moteurs-electriques" },
        { id: "helices", name: "Hélices", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "Propulsión auxiliar", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "Baterías marinas", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "Depósitos & combustible marino", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "Equipos de navegación",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "GPS marinos", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "Sondas & ecosondas", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "Radares", slug: "radars" },
        { id: "cartes-instruments-marins", name: "Cartas & instrumentos marinos", slug: "cartes-instruments-marins" },
        { id: "compas", name: "Brújulas", slug: "compas" },
        { id: "pilotes-automatiques", name: "Pilotos automáticos", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "Radios VHF", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "Plotters de cartas", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "Binoculares marinos", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "Seguridad & Salvamento",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "Chalecos salvavidas", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "Boyas", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "Arneses & líneas de vida", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "Extintores marinos", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "Kits de primeros auxilios", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "Bengalas & señalización", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "Kits de emergencia", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "Bombas de achique", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "Accesorios de cubierta & repuestos",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "Cuerdas", slug: "cordages" },
        { id: "amarres", name: "Amarras", slug: "amarres" },
        { id: "ancres-chaines", name: "Anclas & cadenas", slug: "ancres-chaines" },
        { id: "poulies", name: "Poleas", slug: "poulies" },
        { id: "taquets", name: "Cornamusas", slug: "taquets" },
        { id: "mousquetons", name: "Mosquetones", slug: "mousquetons" },
        { id: "winchs", name: "Molinillos", slug: "winchs" },
        { id: "voiles-greements", name: "Velas & jarcia", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "Candeleros & barandillas", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "Escaleras de baño", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "Defensas", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "Escotillas & portillos", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "Confort & interior",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "Asientos & bancos", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "Camarotes & literas", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "Iluminación interior", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "Equipos de cocina marina", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "Frigoríficos & neveras marinas", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "WC náuticos", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "Duchas & sanitarios", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "Almacenaje & cofres", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "Accesorios & mantenimiento",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "Fundas de protección", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "Limpiadores & mantenimiento", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "Pinturas & antifouling", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "Kits de reparación de casco", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "Baterías & cargadores", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "Herramientas náuticas", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "Bombas manuales", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "Remos & palas", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "Transporte & almacenamiento",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "Remolques para barcos", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "Cabrestantes & cinchas", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "Carros de botadura", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "Soportes de almacenamiento", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "Garajes náuticos", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "Pórticos & polipastos", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "Deportes acuáticos",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "Wakeboard", slug: "wakeboard" },
        { id: "ski-nautique", name: "Esquí acuático", slug: "ski-nautique" },
        { id: "kneeboard", name: "Kneeboard", slug: "kneeboard" },
        { id: "bouees-tractees", name: "Boyas remolcadas", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "Paddle (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "Kitesurf", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "Buceo & snorkel", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "Equipos de pesca en mar", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};