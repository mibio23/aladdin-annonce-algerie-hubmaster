import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonIt: MenuCategory = {
  id: "immobilier-maison",
  name: "Immobiliare & Casa",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "Vendite immobiliari",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "Appartamenti in vendita", slug: "appartements-a-vendre" },
        { id: "studios", name: "Monolocali", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "Appartamenti nuovi", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "Appartamenti promozionali", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "Case in vendita", slug: "maisons-a-vendre" },
        { id: "villas", name: "Ville", slug: "villas" },
        { id: "duplex", name: "Duplex", slug: "duplex" },
        { id: "triplex", name: "Triplex", slug: "triplex" },
        { id: "maisons-plain-pied", name: "Case su un piano", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "Fattorie & proprietà rurali", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "Terreni edificabili", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "Terreni agricoli", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "Locali commerciali", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "Uffici", slug: "bureaux" },
        { id: "immeubles", name: "Edifici", slug: "immeubles" },
        { id: "garages-a-vendre", name: "Garage in vendita", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "Affitti immobiliari",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "Appartamenti in affitto", slug: "appartements-en-location" },
        { id: "studios-location", name: "Monolocali", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "Case in affitto", slug: "maisons-en-location" },
        { id: "villas-location", name: "Ville", slug: "villas" },
        { id: "duplex-location", name: "Duplex", slug: "duplex" },
        { id: "triplex-location", name: "Triplex", slug: "triplex" },
        { id: "chambres-en-location", name: "Camere in affitto", slug: "chambres-en-location" },
        { id: "colocation", name: "Coabitazione", slug: "colocation" },
        { id: "locations-meublees", name: "Affitti arredati", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "Affitti non arredati", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "Affitti stagionali", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "Affitti vacanze", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "Uffici in affitto", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "Locali commerciali in affitto", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "Garage & parcheggi in affitto", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "Immobiliare professionale",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "Magazzini", slug: "entrepots" },
        { id: "hangars", name: "Hangar", slug: "hangars" },
        { id: "locaux-industriels", name: "Locali industriali", slug: "locaux-industriels" },
        { id: "ateliers", name: "Laboratori", slug: "ateliers" },
        { id: "zones-logistiques", name: "Aree logistiche", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "Uffici professionali", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "Open‑space", slug: "open-spaces" },
        { id: "magasins", name: "Negozi", slug: "magasins" },
        { id: "restaurants-cafes", name: "Ristoranti & caffè", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "Farmacie", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "Studi medici", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "Investimenti immobiliari",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "Nuovi programmi", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "Alloggi promozionali", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "Immobili LPP", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "Alloggi sociali", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "Residenze studentesche", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "Residenze per anziani", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "Immobili da locazione", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "Immobili a reddito", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "Terreni promozionali", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "Casa & arredamento interno",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "Soggiorni & divani", slug: "salons-canapes" },
        { id: "tables-chaises", name: "Tavoli & sedie", slug: "tables-chaises" },
        { id: "armoires", name: "Armadi", slug: "armoires" },
        { id: "dressings", name: "Cabine armadio", slug: "dressings" },
        { id: "lits-matelas", name: "Letti & materassi", slug: "lits-matelas" },
        { id: "meubles-tv", name: "Mobili TV", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "Credenze & comò", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "Librerie", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "Mobili bambini", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "Piccoli mobili", slug: "petits-meubles" },
        { id: "rangements", name: "Sistemi di contenimento", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "Decorazione & accessori casa",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "Tappeti", slug: "tapis" },
        { id: "rideaux-voilages", name: "Tende & veli", slug: "rideaux-voilages" },
        { id: "luminaires", name: "Illuminazione", slug: "luminaires" },
        { id: "cadres-tableaux", name: "Cornici & quadri", slug: "cadres-tableaux" },
        { id: "miroirs", name: "Specchi", slug: "miroirs" },
        { id: "horloges", name: "Orologi", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "Accessori decorativi", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "Adesivi murali", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "Cuscini & tessili", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "Vasi & decorazione floreale", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "Cucina & bagno",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "Utensili da cucina", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "Pentole & padelle", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "Stoviglie", slug: "vaisselle" },
        { id: "couverts", name: "Posate", slug: "couverts" },
        { id: "robots-de-cuisine", name: "Robot da cucina", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "Piani cottura & forni", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "Sanitari", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "Vasche", slug: "baignoires" },
        { id: "douches", name: "Docce", slug: "douches" },
        { id: "lavabos", name: "Lavabi", slug: "lavabos" },
        { id: "robinetterie", name: "Rubinetteria", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "Mobili bagno", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "Giardino & esterni",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "Arredo giardino", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "Salotti da esterno", slug: "salons-exterieurs" },
        { id: "parasols", name: "Ombrelloni", slug: "parasols" },
        { id: "barbecues", name: "Barbecue", slug: "barbecues" },
        { id: "tondeuses", name: "Tosaerba", slug: "tondeuses" },
        { id: "debroussailleuses", name: "Decespugliatori", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "Motoseghe", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "Attrezzi da giardinaggio", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "Vasi & fioriere", slug: "pots-jardinieres" },
        { id: "serres", name: "Serre", slug: "serres" },
        { id: "piscines-accessoires", name: "Piscine & accessori", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "Illuminazione esterna", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "Fai da te & miglioramento casa",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "Utensili elettrici (trapani, avvitatori, smerigliatrici)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "Utensili manuali", slug: "outils-a-main" },
        { id: "peinture", name: "Vernici", slug: "peinture" },
        { id: "revetements-murs-sols", name: "Rivestimenti pareti & pavimenti", slug: "revetements-murs-sols" },
        { id: "parquet", name: "Parquet", slug: "parquet" },
        { id: "carrelage", name: "Piastrelle", slug: "carrelage" },
        { id: "plomberie", name: "Idraulica", slug: "plomberie" },
        { id: "electricite", name: "Elettricità", slug: "electricite" },
        { id: "isolation", name: "Isolamento", slug: "isolation" },
        { id: "materiaux-de-construction", name: "Materiali da costruzione", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "Porte & finestre", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "Sicurezza casa",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "Telecamere di sorveglianza", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "Allarmi connessi", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "Rilevatori di fumo", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "Serrature & lucchetti", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "Cancelli automatici", slug: "portails-automatiques" },
        { id: "visiophones", name: "Videocitofoni", slug: "visiophones" },
        { id: "coffres-forts", name: "Casseforti", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "Servizi casa & immobiliare",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "Agenzie immobiliari", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "Servizi di architettura", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "Artigiani (idraulica, elettricità, pittura)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "Traslochi", slug: "demenagement" },
        { id: "nettoyage", name: "Pulizia", slug: "nettoyage" },
        { id: "entretien-jardin", name: "Manutenzione giardino", slug: "entretien-jardin" },
        { id: "renovation", name: "Ristrutturazione", slug: "renovation" },
        { id: "gestion-locative", name: "Gestione locazioni", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "Diagnostica immobiliare", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "Marche & attrezzature popolari",
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