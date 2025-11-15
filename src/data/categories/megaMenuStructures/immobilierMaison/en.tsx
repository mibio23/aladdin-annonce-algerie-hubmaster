import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonEn: MenuCategory = {
  id: "immobilier-maison",
  name: "Real Estate & Home",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "Property Sales",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "Apartments for sale", slug: "appartements-a-vendre" },
        { id: "studios", name: "Studios", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "New apartments", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "Promotional apartments", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "Houses for sale", slug: "maisons-a-vendre" },
        { id: "villas", name: "Villas", slug: "villas" },
        { id: "duplex", name: "Duplexes", slug: "duplex" },
        { id: "triplex", name: "Triplexes", slug: "triplex" },
        { id: "maisons-plain-pied", name: "Bungalows", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "Farms & rural properties", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "Building plots", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "Farmland", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "Commercial premises", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "Offices", slug: "bureaux" },
        { id: "immeubles", name: "Buildings", slug: "immeubles" },
        { id: "garages-a-vendre", name: "Garages for sale", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "Property Rentals",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "Apartments for rent", slug: "appartements-en-location" },
        { id: "studios-location", name: "Studios", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "Houses for rent", slug: "maisons-en-location" },
        { id: "villas-location", name: "Villas", slug: "villas" },
        { id: "duplex-location", name: "Duplexes", slug: "duplex" },
        { id: "triplex-location", name: "Triplexes", slug: "triplex" },
        { id: "chambres-en-location", name: "Rooms for rent", slug: "chambres-en-location" },
        { id: "colocation", name: "Flatsharing", slug: "colocation" },
        { id: "locations-meublees", name: "Furnished rentals", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "Unfurnished rentals", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "Seasonal rentals", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "Holiday rentals", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "Offices for rent", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "Commercial premises for rent", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "Garages & parking for rent", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "Professional Real Estate",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "Warehouses", slug: "entrepots" },
        { id: "hangars", name: "Hangars", slug: "hangars" },
        { id: "locaux-industriels", name: "Industrial premises", slug: "locaux-industriels" },
        { id: "ateliers", name: "Workshops", slug: "ateliers" },
        { id: "zones-logistiques", name: "Logistics zones", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "Professional offices", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "Open spaces", slug: "open-spaces" },
        { id: "magasins", name: "Shops", slug: "magasins" },
        { id: "restaurants-cafes", name: "Restaurants & cafés", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "Pharmacies", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "Medical practices", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "Real Estate Investment",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "New developments", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "Promotional housing", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "LPP housing", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "Social housing", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "Student residences", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "Senior residences", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "Rental properties", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "Yield buildings", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "Promotional land", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "Home & Interior Furniture",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "Living rooms & sofas", slug: "salons-canapes" },
        { id: "tables-chaises", name: "Tables & chairs", slug: "tables-chaises" },
        { id: "armoires", name: "Wardrobes", slug: "armoires" },
        { id: "dressings", name: "Closets", slug: "dressings" },
        { id: "lits-matelas", name: "Beds & mattresses", slug: "lits-matelas" },
        { id: "meubles-tv", name: "TV furniture", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "Sideboards & dressers", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "Bookcases", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "Kids’ furniture", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "Small furniture", slug: "petits-meubles" },
        { id: "rangements", name: "Storage", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "Home Decor & Accessories",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "Rugs", slug: "tapis" },
        { id: "rideaux-voilages", name: "Curtains & sheers", slug: "rideaux-voilages" },
        { id: "luminaires", name: "Lighting", slug: "luminaires" },
        { id: "cadres-tableaux", name: "Frames & paintings", slug: "cadres-tableaux" },
        { id: "miroirs", name: "Mirrors", slug: "miroirs" },
        { id: "horloges", name: "Clocks", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "Decorative accessories", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "Wall stickers", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "Cushions & textiles", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "Vases & floral decor", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "Kitchen & Bathroom",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "Kitchen utensils", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "Pots & pans", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "Tableware", slug: "vaisselle" },
        { id: "couverts", name: "Cutlery", slug: "couverts" },
        { id: "robots-de-cuisine", name: "Kitchen robots", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "Cooktops & ovens", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "Sanitary equipment", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "Bathtubs", slug: "baignoires" },
        { id: "douches", name: "Showers", slug: "douches" },
        { id: "lavabos", name: "Sinks", slug: "lavabos" },
        { id: "robinetterie", name: "Faucets", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "Bathroom furniture", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "Garden & Outdoor",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "Garden furniture", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "Outdoor lounges", slug: "salons-exterieurs" },
        { id: "parasols", name: "Parasols", slug: "parasols" },
        { id: "barbecues", name: "Barbecues", slug: "barbecues" },
        { id: "tondeuses", name: "Lawn mowers", slug: "tondeuses" },
        { id: "debroussailleuses", name: "Brushcutters", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "Chainsaws", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "Gardening tools", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "Pots & planters", slug: "pots-jardinieres" },
        { id: "serres", name: "Greenhouses", slug: "serres" },
        { id: "piscines-accessoires", name: "Pools & accessories", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "Outdoor lighting", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "DIY & Home Improvement",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "Power tools (drills, screwdrivers, grinders)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "Hand tools", slug: "outils-a-main" },
        { id: "peinture", name: "Paint", slug: "peinture" },
        { id: "revetements-murs-sols", name: "Wall & floor coverings", slug: "revetements-murs-sols" },
        { id: "parquet", name: "Parquet", slug: "parquet" },
        { id: "carrelage", name: "Tiles", slug: "carrelage" },
        { id: "plomberie", name: "Plumbing", slug: "plomberie" },
        { id: "electricite", name: "Electricity", slug: "electricite" },
        { id: "isolation", name: "Insulation", slug: "isolation" },
        { id: "materiaux-de-construction", name: "Building materials", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "Doors & windows", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "Home Security",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "Surveillance cameras", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "Connected alarms", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "Smoke detectors", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "Locks & padlocks", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "Automatic gates", slug: "portails-automatiques" },
        { id: "visiophones", name: "Video intercoms", slug: "visiophones" },
        { id: "coffres-forts", name: "Safes", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "Home & Real Estate Services",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "Real estate agencies", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "Architecture services", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "Trades (plumbing, electricity, painting)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "Moving", slug: "demenagement" },
        { id: "nettoyage", name: "Cleaning", slug: "nettoyage" },
        { id: "entretien-jardin", name: "Garden maintenance", slug: "entretien-jardin" },
        { id: "renovation", name: "Renovation", slug: "renovation" },
        { id: "gestion-locative", name: "Property management", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "Real estate diagnostics", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "Popular Brands & Equipment",
      slug: "marques-materiel-populaire",
      subcategories: [
        { id: "ikea", name: "Ikea", slug: "ikea" },
        { id: "samsung-home", name: "Samsung Home", slug: "samsung-home" },
        { id: "lg", name: "LG", slug: "lg" },
        { id: "bosch", name: "Bosch", slug: "bosch" },
        { id: "beko", name: "Beko", slug: "beko" },
        { id: "whirlpool", name: "Whirlpool", slug: "whirlpool" },
        { id: "philips-lighting", name: "Philips Lighting", slug: "philips-lighting" },
        { id: "schneider-electric", name: "Schneider Electric", slug: "schneider-electric" },
        { id: "karcher", name: "Kärcher", slug: "karcher" },
        { id: "ariston", name: "Ariston", slug: "ariston" },
        { id: "moulinex", name: "Moulinex", slug: "moulinex" },
        { id: "tefal", name: "Tefal", slug: "tefal" },
        { id: "jaga", name: "Jaga", slug: "jaga" },
        { id: "daikin", name: "Daikin", slug: "daikin" },
        { id: "hitachi", name: "Hitachi", slug: "hitachi" }
      ]
    }
  ]
};