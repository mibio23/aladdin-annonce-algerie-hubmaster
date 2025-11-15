import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsEs: MenuCategory = {
  id: "vehicules-equipements",
  name: "Vehículos, Camiones, Motos y Equipos",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "Coches y vehículos ligeros",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "Coches urbanos", slug: "voitures-citadines" },
        { id: "berlines", name: "Berlina", slug: "berlines" },
        { id: "compactes", name: "Compactos", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "Crossover", slug: "crossovers" },
        { id: "4x4", name: "4x4", slug: "4x4" },
        { id: "coupes", name: "Coupés", slug: "coupes" },
        { id: "cabriolets", name: "Descapotables", slug: "cabriolets" },
        { id: "breaks", name: "Familiares", slug: "breaks" },
        { id: "voitures-familiales", name: "Coches familiares", slug: "voitures-familiales" },
        { id: "vul", name: "Vehículos comerciales ligeros", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "Furgonetas", slug: "vans" },
        { id: "voitures-hybrides", name: "Coches híbridos", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "Coches eléctricos", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "Coches deportivos", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "Clásicos y de colección", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "Coches reacondicionados", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "Camiones y vehículos profesionales",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "Camiones ligeros", slug: "camions-legers" },
        { id: "poids-lourds", name: "Camiones pesados", slug: "poids-lourds" },
        { id: "semi-remorques", name: "Semirremolques", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "Tractores de carretera", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "Camiones volquete", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "Camiones frigoríficos", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "Camiones plataforma", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "Furgones profesionales", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "Furgonetas pequeñas", slug: "fourgonnettes" },
        { id: "minibus", name: "Microbuses", slug: "minibus" },
        { id: "bus", name: "Autobuses", slug: "bus" },
        { id: "vehicules-de-chantier", name: "Vehículos de obra", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "Grúas", slug: "depanneuses" },
        { id: "vehicules-toles", name: "Vehículos panelados", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "Motos y ciclomotores",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "Motos deportivas", slug: "motos-sportives" },
        { id: "motos-roadster", name: "Roadster", slug: "motos-roadster" },
        { id: "motos-touring", name: "Touring", slug: "motos-touring" },
        { id: "motos-enduro", name: "Enduro", slug: "motos-enduro" },
        { id: "motos-trail", name: "Trail/Adventure", slug: "motos-trail" },
        { id: "motos-cross", name: "Motocross", slug: "motos-cross" },
        { id: "motos-custom", name: "Custom", slug: "motos-custom" },
        { id: "scooters-50cc", name: "Scooters 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "Scooters 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "Maxi‑scooters", slug: "maxi-scooters" },
        { id: "mobylettes", name: "Ciclomotores", slug: "mobylettes" },
        { id: "quads-atv", name: "Quads & ATV", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "Triciclos motorizados", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "Motos eléctricas", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "Bicicletas motorizadas y movilidad",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "E‑bikes rápidas", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "Patinetes eléctricos", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "Gyropodes", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "Monociclos eléctricos", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "Ciclomotores eléctricos ligeros", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "Equipamiento y accesorios de coche",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "Neumáticos", slug: "pneus" },
        { id: "jantes", name: "Llantas", slug: "jantes" },
        { id: "batteries", name: "Baterías", slug: "batteries" },
        { id: "filtres", name: "Filtros", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "Aceites y lubricantes", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "Pastillas de freno", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "Discos de freno", slug: "disques-frein" },
        { id: "amortisseurs", name: "Amortiguadores", slug: "amortisseurs" },
        { id: "courroies", name: "Correas", slug: "courroies" },
        { id: "embrayages", name: "Embragues", slug: "embrayages" },
        { id: "bougies", name: "Bujías", slug: "bougies" },
        { id: "echappements", name: "Escapes", slug: "echappements" },
        { id: "pieces-moteur", name: "Piezas de motor", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "Kits de distribución", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "Accesorios interiores", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "Fundas de asiento", slug: "housses-sieges" },
        { id: "tapis", name: "Alfombrillas", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "Cámaras a bordo", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "Alarmas de coche", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "Kits manos libres", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "Piezas y accesorios de moto",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "Cascos", slug: "casques-moto" },
        { id: "blousons-moto", name: "Chaquetas", slug: "blousons-moto" },
        { id: "gants-moto", name: "Guantes", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "Botas y zapatos", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "Protecciones (espaldera, rodilleras)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "Maletas y top cases", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "Escapes para moto", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "Kits de cadena", slug: "kits-chaine" },
        { id: "batteries-moto", name: "Baterías de moto", slug: "batteries-moto" },
        { id: "pneus-moto", name: "Neumáticos de moto", slug: "pneus-moto" },
        { id: "guidons", name: "Manillares", slug: "guidons" },
        { id: "leviers", name: "Manetas", slug: "leviers" },
        { id: "retroviseurs", name: "Espejos", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "Piezas de motor (moto)", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "Aceite de moto", slug: "huile-moto" },
        { id: "kits-reparation", name: "Kits de reparación", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "Remolques y enganches",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "Remolques utilitarios", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "Remolques porta‑coches", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "Remolques de carga", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "Remolques para ganado", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "Remolques frigoríficos", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "Remolques agrícolas", slug: "remorques-agricoles" },
        { id: "attelages", name: "Enganches", slug: "attelages" },
        { id: "barres-remorquage", name: "Barras de remolque", slug: "barres-remorquage" },
        { id: "porte-motos", name: "Porta‑motos", slug: "porte-motos" },
        { id: "porte-velos", name: "Porta‑bicicletas", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "Equipos de diagnóstico y taller",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "Maletas de diagnóstico", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "Lectores OBD2", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "Elevadores", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "Compresores", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "Gatos hidráulicos", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "Herramientas mecánicas", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "Cargadores de batería", slug: "chargeurs-batterie" },
        { id: "boosters", name: "Boosters", slug: "boosters" },
        { id: "stations-climatisation", name: "Estaciones de climatización", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "Desmontadoras", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "Equilibradoras", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "Herramientas especializadas para motos", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "Combustible y energía",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "Puntos de recarga", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "Cargadores domésticos", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "Adaptadores para EV", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "Bidones", slug: "jerricans" },
        { id: "additifs-carburant", name: "Aditivos de combustible", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "Servicios y asistencia",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "Reparación de coche", slug: "reparation-auto" },
        { id: "reparation-moto", name: "Reparación de moto", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "Mantenimiento y cambio de aceite", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "Lavado de coches", slug: "lavage-automobile" },
        { id: "depannage", name: "Asistencia en carretera", slug: "depannage" },
        { id: "remorquage", name: "Remolque", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "Reprogramación de motor", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "Instalación de accesorios", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "Restauración de faros", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "Cambio de parabrisas", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "Marcas populares (SEO)",
      slug: "marques-populaires-vehicules",
      subcategories: [
        { id: "renault", name: "Renault", slug: "renault" },
        { id: "peugeot", name: "Peugeot", slug: "peugeot" },
        { id: "citroen", name: "Citroën", slug: "citroen" },
        { id: "dacia", name: "Dacia", slug: "dacia" },
        { id: "volkswagen", name: "Volkswagen", slug: "volkswagen" },
        { id: "audi", name: "Audi", slug: "audi" },
        { id: "bmw", name: "BMW", slug: "bmw" },
        { id: "mercedes", name: "Mercedes", slug: "mercedes" },
        { id: "toyota", name: "Toyota", slug: "toyota" },
        { id: "kia", name: "Kia", slug: "kia" },
        { id: "hyundai", name: "Hyundai", slug: "hyundai" },
        { id: "ford", name: "Ford", slug: "ford" },
        { id: "nissan", name: "Nissan", slug: "nissan" },
        { id: "fiat", name: "Fiat", slug: "fiat" },
        { id: "honda", name: "Honda", slug: "honda" },
        { id: "yamaha", name: "Yamaha", slug: "yamaha" },
        { id: "suzuki", name: "Suzuki", slug: "suzuki" },
        { id: "piaggio", name: "Piaggio", slug: "piaggio" },
        { id: "ducati", name: "Ducati", slug: "ducati" },
        { id: "ktm", name: "KTM", slug: "ktm" },
        { id: "scania", name: "Scania", slug: "scania" },
        { id: "volvo-trucks", name: "Volvo Trucks", slug: "volvo-trucks" },
        { id: "man", name: "MAN", slug: "man" },
        { id: "iveco", name: "Iveco", slug: "iveco" }
      ]
    }
  ]
};