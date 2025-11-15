import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsIt: MenuCategory = {
  id: "vehicules-equipements",
  name: "Veicoli, Camion, Moto & Attrezzature",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "Auto & veicoli leggeri",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "City car", slug: "voitures-citadines" },
        { id: "berlines", name: "Berlina", slug: "berlines" },
        { id: "compactes", name: "Compatte", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "Crossover", slug: "crossovers" },
        { id: "4x4", name: "4x4", slug: "4x4" },
        { id: "coupes", name: "Coupé", slug: "coupes" },
        { id: "cabriolets", name: "Cabrio", slug: "cabriolets" },
        { id: "breaks", name: "Station wagon", slug: "breaks" },
        { id: "voitures-familiales", name: "Auto familiari", slug: "voitures-familiales" },
        { id: "vul", name: "Veicoli commerciali leggeri", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "Van", slug: "vans" },
        { id: "voitures-hybrides", name: "Auto ibride", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "Auto elettriche", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "Auto sportive", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "Auto d’epoca & da collezione", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "Auto ricondizionate", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "Camion & veicoli professionali",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "Camion leggeri", slug: "camions-legers" },
        { id: "poids-lourds", name: "Mezzi pesanti", slug: "poids-lourds" },
        { id: "semi-remorques", name: "Semirimorchi", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "Trattori stradali", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "Camion con cassone ribaltabile", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "Camion frigoriferi", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "Camion con pianale", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "Furgoni professionali", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "Furgoncini", slug: "fourgonnettes" },
        { id: "minibus", name: "Minibus", slug: "minibus" },
        { id: "bus", name: "Autobus", slug: "bus" },
        { id: "vehicules-de-chantier", name: "Veicoli da cantiere", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "Carri attrezzi", slug: "depanneuses" },
        { id: "vehicules-toles", name: "Veicoli furgonati", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "Moto & ciclomotori",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "Moto sportive", slug: "motos-sportives" },
        { id: "motos-roadster", name: "Roadster", slug: "motos-roadster" },
        { id: "motos-touring", name: "Touring", slug: "motos-touring" },
        { id: "motos-enduro", name: "Enduro", slug: "motos-enduro" },
        { id: "motos-trail", name: "Trail/Adventure", slug: "motos-trail" },
        { id: "motos-cross", name: "Motocross", slug: "motos-cross" },
        { id: "motos-custom", name: "Custom", slug: "motos-custom" },
        { id: "scooters-50cc", name: "Scooter 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "Scooter 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "Maxi‑scooter", slug: "maxi-scooters" },
        { id: "mobylettes", name: "Ciclomotori", slug: "mobylettes" },
        { id: "quads-atv", name: "Quad & ATV", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "Tricicli motorizzati", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "Moto elettriche", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "Biciclette motorizzate & mobilità",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "E‑bike veloci", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "Monopattini elettrici", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "Gyropode", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "Monoruote elettriche", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "Ciclomotori elettrici leggeri", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "Equipaggiamento & accessori auto",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "Pneumatici", slug: "pneus" },
        { id: "jantes", name: "Cerchi", slug: "jantes" },
        { id: "batteries", name: "Batterie", slug: "batteries" },
        { id: "filtres", name: "Filtri", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "Oli & lubrificanti", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "Pastiglie freno", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "Dischi freno", slug: "disques-frein" },
        { id: "amortisseurs", name: "Ammortizzatori", slug: "amortisseurs" },
        { id: "courroies", name: "Cinghie", slug: "courroies" },
        { id: "embrayages", name: "Frizioni", slug: "embrayages" },
        { id: "bougies", name: "Candele", slug: "bougies" },
        { id: "echappements", name: "Scarichi", slug: "echappements" },
        { id: "pieces-moteur", name: "Parti motore", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "Kit distribuzione", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "Accessori interni", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "Foderi sedili", slug: "housses-sieges" },
        { id: "tapis", name: "Tappetini", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "Dashcam", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "Allarmi auto", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "Kit vivavoce", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "Ricambi & accessori moto",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "Caschi", slug: "casques-moto" },
        { id: "blousons-moto", name: "Giacche", slug: "blousons-moto" },
        { id: "gants-moto", name: "Guanti", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "Stivali & scarpe", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "Protezioni (schiena, ginocchia)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "Valigie & top case", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "Scarichi moto", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "Kit catena", slug: "kits-chaine" },
        { id: "batteries-moto", name: "Batterie moto", slug: "batteries-moto" },
        { id: "pneus-moto", name: "Pneumatici moto", slug: "pneus-moto" },
        { id: "guidons", name: "Manubri", slug: "guidons" },
        { id: "leviers", name: "Leve", slug: "leviers" },
        { id: "retroviseurs", name: "Specchietti", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "Parti motore (moto)", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "Olio moto", slug: "huile-moto" },
        { id: "kits-reparation", name: "Kit riparazione", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "Rimorchi & traino",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "Rimorchi utilitari", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "Rimorchi porta‑auto", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "Rimorchi bagagli", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "Rimorchi bestiame", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "Rimorchi frigoriferi", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "Rimorchi agricoli", slug: "remorques-agricoles" },
        { id: "attelages", name: "Ganci traino", slug: "attelages" },
        { id: "barres-remorquage", name: "Barre di traino", slug: "barres-remorquage" },
        { id: "porte-motos", name: "Porta‑moto", slug: "porte-motos" },
        { id: "porte-velos", name: "Porta‑bici", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "Attrezzatura diagnostica & officina",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "Scanner diagnostici auto", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "Lettori OBD2", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "Ponti sollevatori", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "Compressori", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "Cric idraulici", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "Utensili meccanici", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "Caricabatterie", slug: "chargeurs-batterie" },
        { id: "boosters", name: "Booster", slug: "boosters" },
        { id: "stations-climatisation", name: "Stazioni clima", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "Smontagomme", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "Equilibratrici", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "Utensili specializzati moto", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "Carburanti & energia",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "Colonnine di ricarica", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "Caricatori domestici", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "Adattatori per EV", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "Taniche", slug: "jerricans" },
        { id: "additifs-carburant", name: "Additivi carburante", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "Servizi & assistenza",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "Riparazione auto", slug: "reparation-auto" },
        { id: "reparation-moto", name: "Riparazione moto", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "Manutenzione & cambio olio", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "Lavaggio auto", slug: "lavage-automobile" },
        { id: "depannage", name: "Soccorso stradale", slug: "depannage" },
        { id: "remorquage", name: "Traino", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "Rimappatura motore", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "Installazione accessori", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "Rigenerazione fari", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "Sostituzione parabrezza", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "Marche popolari (SEO)",
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