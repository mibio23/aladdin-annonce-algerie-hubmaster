import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonFr: MenuCategory = {
  id: "immobilier-maison",
  name: "Immobilier & Maison",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "Ventes Immobilières",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "Appartements à vendre", slug: "appartements-a-vendre" },
        { id: "studios", name: "Studios", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "Appartements neufs", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "Appartements promotion immobilière", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "Maisons à vendre", slug: "maisons-a-vendre" },
        { id: "villas", name: "Villas", slug: "villas" },
        { id: "duplex", name: "Duplex", slug: "duplex" },
        { id: "triplex", name: "Triplex", slug: "triplex" },
        { id: "maisons-plain-pied", name: "Maisons plain-pied", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "Fermes & propriétés rurales", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "Terrains constructibles", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "Terrains agricoles", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "Locaux commerciaux", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "Bureaux", slug: "bureaux" },
        { id: "immeubles", name: "Immeubles", slug: "immeubles" },
        { id: "garages-a-vendre", name: "Garages à vendre", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "Locations Immobilières",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "Appartements en location", slug: "appartements-en-location" },
        { id: "studios-location", name: "Studios", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "Maisons en location", slug: "maisons-en-location" },
        { id: "villas-location", name: "Villas", slug: "villas" },
        { id: "duplex-location", name: "Duplex", slug: "duplex" },
        { id: "triplex-location", name: "Triplex", slug: "triplex" },
        { id: "chambres-en-location", name: "Chambres en location", slug: "chambres-en-location" },
        { id: "colocation", name: "Colocation", slug: "colocation" },
        { id: "locations-meublees", name: "Locations meublées", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "Locations non meublées", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "Locations saisonnières", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "Locations vacances", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "Bureaux à louer", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "Locaux commerciaux à louer", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "Garages & parkings à louer", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "Immobilier Professionnel",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "Entrepôts", slug: "entrepots" },
        { id: "hangars", name: "Hangars", slug: "hangars" },
        { id: "locaux-industriels", name: "Locaux industriels", slug: "locaux-industriels" },
        { id: "ateliers", name: "Ateliers", slug: "ateliers" },
        { id: "zones-logistiques", name: "Zones logistiques", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "Bureaux professionnels", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "Open-spaces", slug: "open-spaces" },
        { id: "magasins", name: "Magasins", slug: "magasins" },
        { id: "restaurants-cafes", name: "Restaurants & cafés", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "Pharmacies", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "Cabinets médicaux", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "Investissement Immobilier",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "Programmes neufs", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "Logements promotionnels", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "Immobiliers LPP", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "Logements sociaux", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "Résidences étudiantes", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "Résidences seniors", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "Biens locatifs", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "Immeubles de rapport", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "Terrains promotionnels", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "Maison & Mobilier Intérieur",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "Salons & canapés", slug: "salons-canapes" },
        { id: "tables-chaises", name: "Tables & chaises", slug: "tables-chaises" },
        { id: "armoires", name: "Armoires", slug: "armoires" },
        { id: "dressings", name: "Dressings", slug: "dressings" },
        { id: "lits-matelas", name: "Lits & matelas", slug: "lits-matelas" },
        { id: "meubles-tv", name: "Meubles TV", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "Buffets & commodes", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "Bibliothèques", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "Meubles enfants", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "Petits meubles", slug: "petits-meubles" },
        { id: "rangements", name: "Rangements", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "Décoration & Accessoires Maison",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "Tapis", slug: "tapis" },
        { id: "rideaux-voilages", name: "Rideaux & voilages", slug: "rideaux-voilages" },
        { id: "luminaires", name: "Luminaires", slug: "luminaires" },
        { id: "cadres-tableaux", name: "Cadres & tableaux", slug: "cadres-tableaux" },
        { id: "miroirs", name: "Miroirs", slug: "miroirs" },
        { id: "horloges", name: "Horloges", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "Accessoires décoratifs", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "Stickers muraux", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "Coussins & textiles", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "Vases & décor floral", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "Cuisine & Salle de Bain",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "Ustensiles de cuisine", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "Casseroles & poêles", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "Vaisselle", slug: "vaisselle" },
        { id: "couverts", name: "Couverts", slug: "couverts" },
        { id: "robots-de-cuisine", name: "Robots de cuisine", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "Plaques & fours", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "Équipements sanitaires", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "Baignoires", slug: "baignoires" },
        { id: "douches", name: "Douches", slug: "douches" },
        { id: "lavabos", name: "Lavabos", slug: "lavabos" },
        { id: "robinetterie", name: "Robinetterie", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "Meubles de salle de bain", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "Jardin & Extérieur",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "Mobilier de jardin", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "Salons extérieurs", slug: "salons-exterieurs" },
        { id: "parasols", name: "Parasols", slug: "parasols" },
        { id: "barbecues", name: "Barbecues", slug: "barbecues" },
        { id: "tondeuses", name: "Tondeuses", slug: "tondeuses" },
        { id: "debroussailleuses", name: "Débroussailleuses", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "Tronçonneuses", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "Outils de jardinage", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "Pots & jardinières", slug: "pots-jardinieres" },
        { id: "serres", name: "Serres", slug: "serres" },
        { id: "piscines-accessoires", name: "Piscines & accessoires", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "Éclairage extérieur", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "Bricolage & Amélioration Maison",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "Outils électroportatifs (perceuses, visseuses, meuleuses)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "Outils à main", slug: "outils-a-main" },
        { id: "peinture", name: "Peinture", slug: "peinture" },
        { id: "revetements-murs-sols", name: "Revêtements murs & sols", slug: "revetements-murs-sols" },
        { id: "parquet", name: "Parquet", slug: "parquet" },
        { id: "carrelage", name: "Carrelage", slug: "carrelage" },
        { id: "plomberie", name: "Plomberie", slug: "plomberie" },
        { id: "electricite", name: "Électricité", slug: "electricite" },
        { id: "isolation", name: "Isolation", slug: "isolation" },
        { id: "materiaux-de-construction", name: "Matériaux de construction", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "Portes & fenêtres", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "Sécurité Maison",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "Caméras de surveillance", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "Alarmes connectées", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "Détecteurs de fumée", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "Serrures & cadenas", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "Portails automatiques", slug: "portails-automatiques" },
        { id: "visiophones", name: "Visiophones", slug: "visiophones" },
        { id: "coffres-forts", name: "Coffres-forts", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "Services Maison & Immobilier",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "Agences immobilières", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "Services d’architecture", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "Artisans (plomberie, électricité, peinture)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "Déménagement", slug: "demenagement" },
        { id: "nettoyage", name: "Nettoyage", slug: "nettoyage" },
        { id: "entretien-jardin", name: "Entretien jardin", slug: "entretien-jardin" },
        { id: "renovation", name: "Rénovation", slug: "renovation" },
        { id: "gestion-locative", name: "Gestion locative", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "Diagnostics immobiliers", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "Marques & Matériel Populaire",
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