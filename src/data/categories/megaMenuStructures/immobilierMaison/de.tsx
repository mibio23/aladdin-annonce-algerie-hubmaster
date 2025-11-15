import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonDe: MenuCategory = {
  id: "immobilier-maison",
  name: "Immobilien & Haus",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "Immobilienverkauf",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "Wohnungen zum Verkauf", slug: "appartements-a-vendre" },
        { id: "studios", name: "Studios", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "Neubauwohnungen", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "Promotionswohnungen", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "Häuser zum Verkauf", slug: "maisons-a-vendre" },
        { id: "villas", name: "Villen", slug: "villas" },
        { id: "duplex", name: "Duplex", slug: "duplex" },
        { id: "triplex", name: "Triplex", slug: "triplex" },
        { id: "maisons-plain-pied", name: "Einfamilienhäuser", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "Höfe & ländliche Grundstücke", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "Bauland", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "Ackerland", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "Gewerbeflächen", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "Büros", slug: "bureaux" },
        { id: "immeubles", name: "Gebäude", slug: "immeubles" },
        { id: "garages-a-vendre", name: "Garagen zu verkaufen", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "Immobilienvermietung",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "Wohnungen zur Miete", slug: "appartements-en-location" },
        { id: "studios-location", name: "Studios", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "Häuser zur Miete", slug: "maisons-en-location" },
        { id: "villas-location", name: "Villen", slug: "villas" },
        { id: "duplex-location", name: "Duplex", slug: "duplex" },
        { id: "triplex-location", name: "Triplex", slug: "triplex" },
        { id: "chambres-en-location", name: "Zimmer zur Miete", slug: "chambres-en-location" },
        { id: "colocation", name: "Wohngemeinschaft", slug: "colocation" },
        { id: "locations-meublees", name: "Möblierte Vermietung", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "Unmöblierte Vermietung", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "Ferienvermietung", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "Urlaubsvermietung", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "Büros zu mieten", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "Gewerberäume zu mieten", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "Garagen & Parkplätze zu mieten", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "Gewerbliche Immobilien",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "Lagerhallen", slug: "entrepots" },
        { id: "hangars", name: "Hangars", slug: "hangars" },
        { id: "locaux-industriels", name: "Industrieflächen", slug: "locaux-industriels" },
        { id: "ateliers", name: "Werkstätten", slug: "ateliers" },
        { id: "zones-logistiques", name: "Logistikzonen", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "Büroflächen", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "Open‑Spaces", slug: "open-spaces" },
        { id: "magasins", name: "Geschäfte", slug: "magasins" },
        { id: "restaurants-cafes", name: "Restaurants & Cafés", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "Apotheken", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "Arztpraxen", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "Immobilieninvestitionen",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "Neubauprojekte", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "Förderwohnungen", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "LPP‑Immobilien", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "Sozialwohnungen", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "Studentenwohnheime", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "Seniorenresidenzen", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "Mietobjekte", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "Ertragsimmobilien", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "Fördergrundstücke", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "Haus & Inneneinrichtung",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "Wohnzimmer & Sofas", slug: "salons-canapes" },
        { id: "tables-chaises", name: "Tische & Stühle", slug: "tables-chaises" },
        { id: "armoires", name: "Schränke", slug: "armoires" },
        { id: "dressings", name: "Kleiderschränke", slug: "dressings" },
        { id: "lits-matelas", name: "Betten & Matratzen", slug: "lits-matelas" },
        { id: "meubles-tv", name: "TV‑Möbel", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "Anrichten & Kommoden", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "Bücherregale", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "Kindermöbel", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "Kleinmöbel", slug: "petits-meubles" },
        { id: "rangements", name: "Aufbewahrung", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "Deko & Wohnaccessoires",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "Teppiche", slug: "tapis" },
        { id: "rideaux-voilages", name: "Vorhänge & Stores", slug: "rideaux-voilages" },
        { id: "luminaires", name: "Leuchten", slug: "luminaires" },
        { id: "cadres-tableaux", name: "Rahmen & Bilder", slug: "cadres-tableaux" },
        { id: "miroirs", name: "Spiegel", slug: "miroirs" },
        { id: "horloges", name: "Uhren", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "Deko‑Accessoires", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "Wandsticker", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "Kissen & Textilien", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "Vasen & Blumendeko", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "Küche & Bad",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "Küchenutensilien", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "Töpfe & Pfannen", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "Geschirr", slug: "vaisselle" },
        { id: "couverts", name: "Besteck", slug: "couverts" },
        { id: "robots-de-cuisine", name: "Küchenmaschinen", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "Kochfelder & Öfen", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "Sanitärausstattung", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "Badewannen", slug: "baignoires" },
        { id: "douches", name: "Duschen", slug: "douches" },
        { id: "lavabos", name: "Waschbecken", slug: "lavabos" },
        { id: "robinetterie", name: "Armaturen", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "Badezimmermöbel", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "Garten & Außenbereich",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "Gartenmöbel", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "Outdoor‑Sitzgruppen", slug: "salons-exterieurs" },
        { id: "parasols", name: "Sonnenschirme", slug: "parasols" },
        { id: "barbecues", name: "Grills", slug: "barbecues" },
        { id: "tondeuses", name: "Rasenmäher", slug: "tondeuses" },
        { id: "debroussailleuses", name: "Freischneider", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "Kettensägen", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "Gartengeräte", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "Töpfe & Pflanzkübel", slug: "pots-jardinieres" },
        { id: "serres", name: "Gewächshäuser", slug: "serres" },
        { id: "piscines-accessoires", name: "Pools & Zubehör", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "Außenbeleuchtung", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "Heimwerken & Hausverbesserung",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "Elektrowerkzeuge (Bohrer, Schrauber, Schleifer)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "Handwerkzeuge", slug: "outils-a-main" },
        { id: "peinture", name: "Farbe", slug: "peinture" },
        { id: "revetements-murs-sols", name: "Wand- & Bodenbeläge", slug: "revetements-murs-sols" },
        { id: "parquet", name: "Parkett", slug: "parquet" },
        { id: "carrelage", name: "Fliesen", slug: "carrelage" },
        { id: "plomberie", name: "Sanitär", slug: "plomberie" },
        { id: "electricite", name: "Elektrik", slug: "electricite" },
        { id: "isolation", name: "Dämmung", slug: "isolation" },
        { id: "materiaux-de-construction", name: "Baumaterialien", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "Türen & Fenster", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "Haussicherheit",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "Überwachungskameras", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "Vernetzte Alarme", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "Rauchmelder", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "Schlösser & Vorhängeschlösser", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "Automatische Tore", slug: "portails-automatiques" },
        { id: "visiophones", name: "Video‑Gegensprechanlagen", slug: "visiophones" },
        { id: "coffres-forts", name: "Safes", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "Haus- & Immobiliendienstleistungen",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "Immobilienagenturen", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "Architekturdienstleistungen", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "Handwerker (Sanitär, Elektrik, Malerei)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "Umzug", slug: "demenagement" },
        { id: "nettoyage", name: "Reinigung", slug: "nettoyage" },
        { id: "entretien-jardin", name: "Gartenpflege", slug: "entretien-jardin" },
        { id: "renovation", name: "Renovierung", slug: "renovation" },
        { id: "gestion-locative", name: "Mietverwaltung", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "Immobiliendiagnostik", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "Beliebte Marken & Geräte",
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