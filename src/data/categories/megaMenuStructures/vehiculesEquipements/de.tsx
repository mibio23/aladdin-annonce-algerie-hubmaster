import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsDe: MenuCategory = {
  id: "vehicules-equipements",
  name: "Fahrzeuge, Lkw, Motorräder & Ausrüstung",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "Autos & Leichtfahrzeuge",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "Stadtwagen", slug: "voitures-citadines" },
        { id: "berlines", name: "Limousinen", slug: "berlines" },
        { id: "compactes", name: "Kompaktwagen", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "Crossover", slug: "crossovers" },
        { id: "4x4", name: "4x4", slug: "4x4" },
        { id: "coupes", name: "Coupés", slug: "coupes" },
        { id: "cabriolets", name: "Cabriolets", slug: "cabriolets" },
        { id: "breaks", name: "Kombis", slug: "breaks" },
        { id: "voitures-familiales", name: "Familienautos", slug: "voitures-familiales" },
        { id: "vul", name: "Leichte Nutzfahrzeuge", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "Vans", slug: "vans" },
        { id: "voitures-hybrides", name: "Hybridautos", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "Elektroautos", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "Sportwagen", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "Oldtimer & Sammlerfahrzeuge", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "Generalüberholte Fahrzeuge", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "Lkw & Nutzfahrzeuge",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "Leichte Lkw", slug: "camions-legers" },
        { id: "poids-lourds", name: "Schwerlaster", slug: "poids-lourds" },
        { id: "semi-remorques", name: "Sattelauflieger", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "Zugmaschinen", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "Kipp-Lkw", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "Kühl-Lkw", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "Plateau-Lkw", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "Profi-Kastenwagen", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "Kleintransporter", slug: "fourgonnettes" },
        { id: "minibus", name: "Minibusse", slug: "minibus" },
        { id: "bus", name: "Busse", slug: "bus" },
        { id: "vehicules-de-chantier", name: "Baustellenfahrzeuge", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "Abschleppwagen", slug: "depanneuses" },
        { id: "vehicules-toles", name: "Kastenwagen", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "Motorräder & Mofas",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "Sportmotorräder", slug: "motos-sportives" },
        { id: "motos-roadster", name: "Roadster", slug: "motos-roadster" },
        { id: "motos-touring", name: "Tourer", slug: "motos-touring" },
        { id: "motos-enduro", name: "Enduro", slug: "motos-enduro" },
        { id: "motos-trail", name: "Adventure/Trail", slug: "motos-trail" },
        { id: "motos-cross", name: "Motocross", slug: "motos-cross" },
        { id: "motos-custom", name: "Custom", slug: "motos-custom" },
        { id: "scooters-50cc", name: "Roller 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "Roller 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "Maxi-Roller", slug: "maxi-scooters" },
        { id: "mobylettes", name: "Mofas", slug: "mobylettes" },
        { id: "quads-atv", name: "Quads & ATV", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "Motor-Dreiräder", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "Elektromotorräder", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "Motorisierte Fahrräder & Mobilität",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "Schnelle E‑Bikes", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "E‑Scooter", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "Gyropoden", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "Elektrische Einräder", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "Leichte E‑Mofas", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "Autozubehör & Ausrüstung",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "Reifen", slug: "pneus" },
        { id: "jantes", name: "Felgen", slug: "jantes" },
        { id: "batteries", name: "Batterien", slug: "batteries" },
        { id: "filtres", name: "Filter", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "Öle & Schmierstoffe", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "Bremsbeläge", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "Bremsscheiben", slug: "disques-frein" },
        { id: "amortisseurs", name: "Stoßdämpfer", slug: "amortisseurs" },
        { id: "courroies", name: "Riemen", slug: "courroies" },
        { id: "embrayages", name: "Kupplungen", slug: "embrayages" },
        { id: "bougies", name: "Zündkerzen", slug: "bougies" },
        { id: "echappements", name: "Auspuffanlagen", slug: "echappements" },
        { id: "pieces-moteur", name: "Motorteile", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "Zahnriemen‑Kits", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "Innenausstattung", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "Sitzbezüge", slug: "housses-sieges" },
        { id: "tapis", name: "Fußmatten", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "Dashcams", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "Autoalarme", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "Freisprech‑Kits", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "Motorradteile & Zubehör",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "Motorradhelme", slug: "casques-moto" },
        { id: "blousons-moto", name: "Motorradjacken", slug: "blousons-moto" },
        { id: "gants-moto", name: "Handschuhe", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "Stiefel & Schuhe", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "Schutz (Rücken, Knie)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "Koffer & Topcases", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "Auspuffe für Motorräder", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "Ketten‑Kits", slug: "kits-chaine" },
        { id: "batteries-moto", name: "Motorradbatterien", slug: "batteries-moto" },
        { id: "pneus-moto", name: "Motorradreifen", slug: "pneus-moto" },
        { id: "guidons", name: "Lenker", slug: "guidons" },
        { id: "leviers", name: "Hebel", slug: "leviers" },
        { id: "retroviseurs", name: "Spiegel", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "Motorenteile (Moto)", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "Motoröl (Moto)", slug: "huile-moto" },
        { id: "kits-reparation", name: "Reparatur‑Kits", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "Anhänger & Anhängerkupplungen",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "Nutzanhänger", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "Autotransporter", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "Transportanhänger", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "Viehanhänger", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "Kühlanhänger", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "Landwirtschaftliche Anhänger", slug: "remorques-agricoles" },
        { id: "attelages", name: "Anhängerkupplungen", slug: "attelages" },
        { id: "barres-remorquage", name: "Abschleppstangen", slug: "barres-remorquage" },
        { id: "porte-motos", name: "Motorradträger", slug: "porte-motos" },
        { id: "porte-velos", name: "Fahrradträger", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "Werkstatt- & Diagnostikgeräte",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "Diagnosegeräte (Auto)", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "OBD2‑Leser", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "Hebebühnen", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "Kompressoren", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "Hydraulikheber", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "Mechanik‑Werkzeuge", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "Batterieladegeräte", slug: "chargeurs-batterie" },
        { id: "boosters", name: "Booster", slug: "boosters" },
        { id: "stations-climatisation", name: "Klimaservice‑Stationen", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "Reifenmontiermaschinen", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "Wuchtmaschinen", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "Spezialisierte Motorrad‑Werkzeuge", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "Kraftstoffe & Energie",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "Ladestationen", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "Heimladestationen", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "Adapter für E‑Autos", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "Kanister", slug: "jerricans" },
        { id: "additifs-carburant", name: "Kraftstoff‑Additive", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "Services & Unterstützung",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "Auto‑Reparatur", slug: "reparation-auto" },
        { id: "reparation-moto", name: "Moto‑Reparatur", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "Wartung & Ölwechsel", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "Autowäsche", slug: "lavage-automobile" },
        { id: "depannage", name: "Pannenhilfe", slug: "depannage" },
        { id: "remorquage", name: "Abschleppen", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "Motor‑Optimierung", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "Einbau von Zubehör", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "Scheinwerfer‑Aufbereitung", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "Scheibenwechsel", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "Beliebte Marken (SEO)",
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