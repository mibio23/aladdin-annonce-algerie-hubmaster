import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonEs: MenuCategory = {
  id: "immobilier-maison",
  name: "Inmobiliaria y Hogar",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "Ventas inmobiliarias",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "Apartamentos en venta", slug: "appartements-a-vendre" },
        { id: "studios", name: "Estudios", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "Apartamentos nuevos", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "Apartamentos promocionales", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "Casas en venta", slug: "maisons-a-vendre" },
        { id: "villas", name: "Villas", slug: "villas" },
        { id: "duplex", name: "Dúplex", slug: "duplex" },
        { id: "triplex", name: "Tríplex", slug: "triplex" },
        { id: "maisons-plain-pied", name: "Casas de una planta", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "Granjas y propiedades rurales", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "Terrenos edificables", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "Terrenos agrícolas", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "Locales comerciales", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "Oficinas", slug: "bureaux" },
        { id: "immeubles", name: "Edificios", slug: "immeubles" },
        { id: "garages-a-vendre", name: "Garajes en venta", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "Alquileres inmobiliarios",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "Apartamentos en alquiler", slug: "appartements-en-location" },
        { id: "studios-location", name: "Estudios", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "Casas en alquiler", slug: "maisons-en-location" },
        { id: "villas-location", name: "Villas", slug: "villas" },
        { id: "duplex-location", name: "Dúplex", slug: "duplex" },
        { id: "triplex-location", name: "Tríplex", slug: "triplex" },
        { id: "chambres-en-location", name: "Habitaciones en alquiler", slug: "chambres-en-location" },
        { id: "colocation", name: "Pisos compartidos", slug: "colocation" },
        { id: "locations-meublees", name: "Alquileres amueblados", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "Alquileres sin muebles", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "Alquileres de temporada", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "Alquileres vacacionales", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "Oficinas en alquiler", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "Locales comerciales en alquiler", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "Garajes y parkings en alquiler", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "Inmobiliaria profesional",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "Naves", slug: "entrepots" },
        { id: "hangars", name: "Hangares", slug: "hangars" },
        { id: "locaux-industriels", name: "Locales industriales", slug: "locaux-industriels" },
        { id: "ateliers", name: "Talleres", slug: "ateliers" },
        { id: "zones-logistiques", name: "Zonas logísticas", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "Oficinas profesionales", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "Espacios abiertos", slug: "open-spaces" },
        { id: "magasins", name: "Tiendas", slug: "magasins" },
        { id: "restaurants-cafes", name: "Restaurantes y cafés", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "Farmacias", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "Consultorios médicos", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "Inversión inmobiliaria",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "Programas nuevos", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "Viviendas promocionales", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "Viviendas LPP", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "Viviendas sociales", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "Residencias estudiantiles", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "Residencias para mayores", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "Bienes para alquilar", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "Edificios de renta", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "Terrenos promocionales", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "Hogar y mobiliario interior",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "Salones y sofás", slug: "salons-canapes" },
        { id: "tables-chaises", name: "Mesas y sillas", slug: "tables-chaises" },
        { id: "armoires", name: "Armarios", slug: "armoires" },
        { id: "dressings", name: "Vestidores", slug: "dressings" },
        { id: "lits-matelas", name: "Camas y colchones", slug: "lits-matelas" },
        { id: "meubles-tv", name: "Muebles TV", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "Buffets y cómodas", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "Librerías", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "Muebles infantiles", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "Muebles pequeños", slug: "petits-meubles" },
        { id: "rangements", name: "Almacenaje", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "Decoración y accesorios hogar",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "Alfombras", slug: "tapis" },
        { id: "rideaux-voilages", name: "Cortinas y visillos", slug: "rideaux-voilages" },
        { id: "luminaires", name: "Iluminación", slug: "luminaires" },
        { id: "cadres-tableaux", name: "Marcos y cuadros", slug: "cadres-tableaux" },
        { id: "miroirs", name: "Espejos", slug: "miroirs" },
        { id: "horloges", name: "Relojes", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "Accesorios decorativos", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "Pegatinas de pared", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "Cojines y textiles", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "Jarrones y decoración floral", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "Cocina y baño",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "Utensilios de cocina", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "Cazuelas y sartenes", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "Vajilla", slug: "vaisselle" },
        { id: "couverts", name: "Cubiertos", slug: "couverts" },
        { id: "robots-de-cuisine", name: "Robots de cocina", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "Placas y hornos", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "Equipos sanitarios", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "Bañeras", slug: "baignoires" },
        { id: "douches", name: "Duchas", slug: "douches" },
        { id: "lavabos", name: "Lavabos", slug: "lavabos" },
        { id: "robinetterie", name: "Grifería", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "Muebles de baño", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "Jardín y exterior",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "Mobiliario de jardín", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "Salones exteriores", slug: "salons-exterieurs" },
        { id: "parasols", name: "Sombrillas", slug: "parasols" },
        { id: "barbecues", name: "Barbacoas", slug: "barbecues" },
        { id: "tondeuses", name: "Cortacésped", slug: "tondeuses" },
        { id: "debroussailleuses", name: "Desbrozadoras", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "Motosierras", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "Herramientas de jardín", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "Macetas y jardineras", slug: "pots-jardinieres" },
        { id: "serres", name: "Invernaderos", slug: "serres" },
        { id: "piscines-accessoires", name: "Piscinas y accesorios", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "Iluminación exterior", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "Bricolaje y mejora del hogar",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "Herramientas eléctricas (taladros, atornilladores, amoladoras)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "Herramientas manuales", slug: "outils-a-main" },
        { id: "peinture", name: "Pintura", slug: "peinture" },
        { id: "revetements-murs-sols", name: "Revestimientos de paredes y suelos", slug: "revetements-murs-sols" },
        { id: "parquet", name: "Parqué", slug: "parquet" },
        { id: "carrelage", name: "Azulejos", slug: "carrelage" },
        { id: "plomberie", name: "Fontanería", slug: "plomberie" },
        { id: "electricite", name: "Electricidad", slug: "electricite" },
        { id: "isolation", name: "Aislamiento", slug: "isolation" },
        { id: "materiaux-de-construction", name: "Materiales de construcción", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "Puertas y ventanas", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "Seguridad del hogar",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "Cámaras de vigilancia", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "Alarmas conectadas", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "Detectores de humo", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "Cerraduras y candados", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "Portones automáticos", slug: "portails-automatiques" },
        { id: "visiophones", name: "Videoporteros", slug: "visiophones" },
        { id: "coffres-forts", name: "Cajas fuertes", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "Servicios de hogar e inmobiliaria",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "Agencias inmobiliarias", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "Servicios de arquitectura", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "Oficios (fontanería, electricidad, pintura)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "Mudanzas", slug: "demenagement" },
        { id: "nettoyage", name: "Limpieza", slug: "nettoyage" },
        { id: "entretien-jardin", name: "Mantenimiento de jardín", slug: "entretien-jardin" },
        { id: "renovation", name: "Reformas", slug: "renovation" },
        { id: "gestion-locative", name: "Gestión de alquileres", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "Diagnósticos inmobiliarios", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "Marcas y material popular",
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