import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsEn: MenuCategory = {
  id: "vehicules-equipements",
  name: "Vehicles, Trucks, Motorcycles & Equipment",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "Cars & Light Vehicles",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "City cars", slug: "voitures-citadines" },
        { id: "berlines", name: "Sedans", slug: "berlines" },
        { id: "compactes", name: "Compacts", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "Crossovers", slug: "crossovers" },
        { id: "4x4", name: "4x4", slug: "4x4" },
        { id: "coupes", name: "Coupés", slug: "coupes" },
        { id: "cabriolets", name: "Convertibles", slug: "cabriolets" },
        { id: "breaks", name: "Station wagons", slug: "breaks" },
        { id: "voitures-familiales", name: "Family cars", slug: "voitures-familiales" },
        { id: "vul", name: "Light commercial vehicles", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "Vans", slug: "vans" },
        { id: "voitures-hybrides", name: "Hybrid cars", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "Electric cars", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "Sports cars", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "Classic & collector cars", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "Refurbished cars", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "Trucks & Commercial Vehicles",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "Light trucks", slug: "camions-legers" },
        { id: "poids-lourds", name: "Heavy trucks", slug: "poids-lourds" },
        { id: "semi-remorques", name: "Semi-trailers", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "Road tractors", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "Dump trucks", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "Refrigerated trucks", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "Flatbed trucks", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "Professional vans", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "Small vans", slug: "fourgonnettes" },
        { id: "minibus", name: "Minibuses", slug: "minibus" },
        { id: "bus", name: "Buses", slug: "bus" },
        { id: "vehicules-de-chantier", name: "Construction vehicles", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "Tow trucks", slug: "depanneuses" },
        { id: "vehicules-toles", name: "Panel vans", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "Motorcycles & Mopeds",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "Sport bikes", slug: "motos-sportives" },
        { id: "motos-roadster", name: "Roadsters", slug: "motos-roadster" },
        { id: "motos-touring", name: "Touring bikes", slug: "motos-touring" },
        { id: "motos-enduro", name: "Enduro", slug: "motos-enduro" },
        { id: "motos-trail", name: "Adventure/Trail", slug: "motos-trail" },
        { id: "motos-cross", name: "Motocross", slug: "motos-cross" },
        { id: "motos-custom", name: "Custom", slug: "motos-custom" },
        { id: "scooters-50cc", name: "Scooters 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "Scooters 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "Maxi scooters", slug: "maxi-scooters" },
        { id: "mobylettes", name: "Mopeds", slug: "mobylettes" },
        { id: "quads-atv", name: "Quads & ATVs", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "Motorized tricycles", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "Electric motorcycles", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "Powered Bicycles & Mobility",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "Speed e-bikes", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "Electric scooters", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "Segways/gyropodes", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "Electric unicycles", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "Light electric mopeds", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "Car Equipment & Accessories",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "Tires", slug: "pneus" },
        { id: "jantes", name: "Rims", slug: "jantes" },
        { id: "batteries", name: "Batteries", slug: "batteries" },
        { id: "filtres", name: "Filters", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "Oils & lubricants", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "Brake pads", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "Brake discs", slug: "disques-frein" },
        { id: "amortisseurs", name: "Shock absorbers", slug: "amortisseurs" },
        { id: "courroies", name: "Belts", slug: "courroies" },
        { id: "embrayages", name: "Clutches", slug: "embrayages" },
        { id: "bougies", name: "Spark plugs", slug: "bougies" },
        { id: "echappements", name: "Exhausts", slug: "echappements" },
        { id: "pieces-moteur", name: "Engine parts", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "Timing kits", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "Interior accessories", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "Seat covers", slug: "housses-sieges" },
        { id: "tapis", name: "Floor mats", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "Dashcams", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "Car alarms", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "Hands-free kits", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "Motorcycle Parts & Accessories",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "Motorcycle helmets", slug: "casques-moto" },
        { id: "blousons-moto", name: "Motorcycle jackets", slug: "blousons-moto" },
        { id: "gants-moto", name: "Gloves", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "Boots & shoes", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "Protection (back, knee)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "Cases & top boxes", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "Motorcycle exhausts", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "Chain kits", slug: "kits-chaine" },
        { id: "batteries-moto", name: "Motorcycle batteries", slug: "batteries-moto" },
        { id: "pneus-moto", name: "Motorcycle tires", slug: "pneus-moto" },
        { id: "guidons", name: "Handlebars", slug: "guidons" },
        { id: "leviers", name: "Levers", slug: "leviers" },
        { id: "retroviseurs", name: "Mirrors", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "Motorcycle engine parts", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "Motor oil", slug: "huile-moto" },
        { id: "kits-reparation", name: "Repair kits", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "Trailers & Towing",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "Utility trailers", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "Car hauler trailers", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "Cargo trailers", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "Livestock trailers", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "Refrigerated trailers", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "Agricultural trailers", slug: "remorques-agricoles" },
        { id: "attelages", name: "Tow bars & hitches", slug: "attelages" },
        { id: "barres-remorquage", name: "Towing bars", slug: "barres-remorquage" },
        { id: "porte-motos", name: "Motorcycle carriers", slug: "porte-motos" },
        { id: "porte-velos", name: "Bike racks", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "Workshop & Diagnostic Equipment",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "Automotive diagnostic scanners", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "OBD2 readers", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "Vehicle lifts", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "Compressors", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "Hydraulic jacks", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "Mechanical tools", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "Battery chargers", slug: "chargeurs-batterie" },
        { id: "boosters", name: "Boosters", slug: "boosters" },
        { id: "stations-climatisation", name: "AC service stations", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "Tire changers", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "Wheel balancers", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "Specialized motorcycle tools", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "Fuel & Energy",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "Charging stations", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "Home chargers", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "EV adapters", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "Jerry cans", slug: "jerricans" },
        { id: "additifs-carburant", name: "Fuel additives", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "Services & Assistance",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "Car repair", slug: "reparation-auto" },
        { id: "reparation-moto", name: "Motorcycle repair", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "Maintenance & oil change", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "Car wash", slug: "lavage-automobile" },
        { id: "depannage", name: "Breakdown service", slug: "depannage" },
        { id: "remorquage", name: "Towing", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "Engine remapping", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "Accessory installation", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "Headlight restoration", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "Windshield replacement", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "Popular Brands (SEO Boost)",
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