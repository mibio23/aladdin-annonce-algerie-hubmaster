import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsEs: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "Bicicletas, Ciclismo y Equipamiento",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "Tipos de bicicletas",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "Bicicletas de carretera", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "Bicicletas de montaña (MTB)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "Bicicletas híbridas", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "Bicicletas gravel", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "Bicicletas de ciudad", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "Bicicletas plegables", slug: "velos-pliants" },
        { id: "velos-bmx", name: "Bicicletas BMX", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "Bicicletas eléctricas (e-bike)", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "Bicicletas de carga", slug: "velos-cargo" },
        { id: "tandems", name: "Tándems", slug: "tandems" },
        { id: "velos-enfants", name: "Bicicletas infantiles", slug: "velos-enfants" },
        { id: "draisiennes", name: "Bicicletas de equilibrio", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "Equipamiento ciclista",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "Cascos", slug: "casques" },
        { id: "gants", name: "Guantes", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "Gafas de ciclismo", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "Maillots", slug: "maillots" },
        { id: "cuissards", name: "Culottes", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "Zapatillas de ciclismo", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "Protecciones (rodilleras, coderas)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "Chalecos reflectantes", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "Mochilas de ciclismo", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "Bidones y portabidones", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "Componentes y repuestos",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "Ruedas y neumáticos", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "Cámaras de aire", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "Frenos (zapatas, discos)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "Desviadores", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "Cadenas y cassettes", slug: "chaines-cassettes" },
        { id: "pedales", name: "Pedales", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "Sillines y tijas", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "Manillares y puños", slug: "guidons-poignees" },
        { id: "pedaliers", name: "Bielas", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "Suspensiones y horquillas", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "Cuadros y kits de cuadro", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "Accesorios para bicicletas",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "Luces (delanteras/traseras)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "Timbres y bocinas", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "Espejos", slug: "retroviseurs" },
        { id: "bequilles", name: "Patas de apoyo", slug: "bequilles" },
        { id: "porte-bagages", name: "Portaequipajes", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "Cestas y bolsas", slug: "paniers-sacs" },
        { id: "garde-boue", name: "Guardabarros", slug: "garde-boue" },
        { id: "antivols", name: "Antirrobos", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "Ciclocomputadores y GPS", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "Soportes para smartphone", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "Bombas de mano", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "Sillas para niños", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "Herramientas y mantenimiento",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "Kits de reparación", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "Bombas de pie", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "Desmontables", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "Lubricantes y limpiadores", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "Llaves y multiherramientas", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "Soportes de reparación", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "Cepillos de limpieza", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "Almacenamiento y transporte",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "Soportes de pared", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "Ganchos y racks", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "Fundas de transporte", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "Portabicicletas para coche (maletero, techo, enganche)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "Equipos deportivos de ciclismo",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "Pulsómetros", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "Medidores de potencia", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "Relojes deportivos", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "Ropa de lluvia y cortavientos", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "Accesorios de rendimiento (aerodinámica, optimización de peso)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};