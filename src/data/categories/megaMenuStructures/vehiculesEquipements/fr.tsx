import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsFr: MenuCategory = {
  id: "vehicules-equipements",
  name: "Véhicules, Camions, Motos & Équipements",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "Voitures & Véhicules Légers",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "Voitures citadines", slug: "voitures-citadines" },
        { id: "berlines", name: "Berlines", slug: "berlines" },
        { id: "compactes", name: "Compactes", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "Crossovers", slug: "crossovers" },
        { id: "4x4", name: "4x4", slug: "4x4" },
        { id: "coupes", name: "Coupés", slug: "coupes" },
        { id: "cabriolets", name: "Cabriolets", slug: "cabriolets" },
        { id: "breaks", name: "Breaks", slug: "breaks" },
        { id: "voitures-familiales", name: "Voitures familiales", slug: "voitures-familiales" },
        { id: "vul", name: "Véhicules utilitaires légers", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "Vans", slug: "vans" },
        { id: "voitures-hybrides", name: "Voitures hybrides", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "Voitures électriques", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "Voitures sportives", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "Voitures anciennes & de collection", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "Voitures reconditionnées", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "Camions & Véhicules Professionnels",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "Camions légers", slug: "camions-legers" },
        { id: "poids-lourds", name: "Poids lourds", slug: "poids-lourds" },
        { id: "semi-remorques", name: "Semi-remorques", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "Tracteurs routiers", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "Camions-bennes", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "Camions frigorifiques", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "Camions plateaux", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "Fourgons professionnels", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "Fourgonnettes", slug: "fourgonnettes" },
        { id: "minibus", name: "Minibus", slug: "minibus" },
        { id: "bus", name: "Bus", slug: "bus" },
        { id: "vehicules-de-chantier", name: "Véhicules de chantier", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "Dépanneuses", slug: "depanneuses" },
        { id: "vehicules-toles", name: "Véhicules tôlés", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "Motos & Cyclomoteurs",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "Motos sportives", slug: "motos-sportives" },
        { id: "motos-roadster", name: "Motos roadster", slug: "motos-roadster" },
        { id: "motos-touring", name: "Motos touring", slug: "motos-touring" },
        { id: "motos-enduro", name: "Motos enduro", slug: "motos-enduro" },
        { id: "motos-trail", name: "Motos trail", slug: "motos-trail" },
        { id: "motos-cross", name: "Motos cross", slug: "motos-cross" },
        { id: "motos-custom", name: "Motos custom", slug: "motos-custom" },
        { id: "scooters-50cc", name: "Scooters 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "Scooters 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "Maxi-scooters", slug: "maxi-scooters" },
        { id: "mobylettes", name: "Mobylettes", slug: "mobylettes" },
        { id: "quads-atv", name: "Quads & ATV", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "Tricycles motorisés", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "Motos électriques", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "Vélos Motorisés & Mobilité",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "Vélos électriques rapides", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "Trottinettes électriques", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "Gyropodes", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "Monoroues électriques", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "Cyclomoteurs légers électriques", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "Équipement & Accessoires Auto",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "Pneus", slug: "pneus" },
        { id: "jantes", name: "Jantes", slug: "jantes" },
        { id: "batteries", name: "Batteries", slug: "batteries" },
        { id: "filtres", name: "Filtres", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "Huiles & lubrifiants", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "Plaquettes de frein", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "Disques de frein", slug: "disques-frein" },
        { id: "amortisseurs", name: "Amortisseurs", slug: "amortisseurs" },
        { id: "courroies", name: "Courroies", slug: "courroies" },
        { id: "embrayages", name: "Embrayages", slug: "embrayages" },
        { id: "bougies", name: "Bougies", slug: "bougies" },
        { id: "echappements", name: "Échappements", slug: "echappements" },
        { id: "pieces-moteur", name: "Pièces moteur", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "Kits de distribution", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "Accessoires intérieurs", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "Housses de sièges", slug: "housses-sieges" },
        { id: "tapis", name: "Tapis", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "Caméras embarquées", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "Alarmes auto", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "Kits mains-libres", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "Pièces & Accessoires Moto",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "Casques moto", slug: "casques-moto" },
        { id: "blousons-moto", name: "Blousons moto", slug: "blousons-moto" },
        { id: "gants-moto", name: "Gants moto", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "Bottes & chaussures", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "Protections (dorsales, genouillères)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "Valises & top cases", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "Pots d’échappement moto", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "Kits chaîne", slug: "kits-chaine" },
        { id: "batteries-moto", name: "Batteries moto", slug: "batteries-moto" },
        { id: "pneus-moto", name: "Pneus moto", slug: "pneus-moto" },
        { id: "guidons", name: "Guidons", slug: "guidons" },
        { id: "leviers", name: "Leviers", slug: "leviers" },
        { id: "retroviseurs", name: "Rétroviseurs", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "Pièces moteur moto", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "Huile moto", slug: "huile-moto" },
        { id: "kits-reparation", name: "Kits de réparation", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "Remorques & Attelages",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "Remorques utilitaires", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "Remorques porte-voitures", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "Remorques bagagères", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "Remorques bétail", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "Remorques frigorifiques", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "Remorques agricoles", slug: "remorques-agricoles" },
        { id: "attelages", name: "Attelages", slug: "attelages" },
        { id: "barres-remorquage", name: "Barres de remorquage", slug: "barres-remorquage" },
        { id: "porte-motos", name: "Porte-motos", slug: "porte-motos" },
        { id: "porte-velos", name: "Porte-vélos", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "Équipement de Diagnostic & Atelier",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "Valises de diagnostic auto", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "Lecteurs OBD2", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "Ponts élévateurs", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "Compresseurs", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "Crics hydrauliques", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "Outils mécaniques", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "Chargeurs de batterie", slug: "chargeurs-batterie" },
        { id: "boosters", name: "Boosters", slug: "boosters" },
        { id: "stations-climatisation", name: "Stations de climatisation", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "Démonte-pneus", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "Équilibreuses", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "Outils spécialisés moto", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "Carburants & Énergie",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "Bornes de recharge", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "Stations de recharge domestiques", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "Adaptateurs pour voitures électriques", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "Jerricans", slug: "jerricans" },
        { id: "additifs-carburant", name: "Additifs carburant", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "Services & Assistance",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "Réparation auto", slug: "reparation-auto" },
        { id: "reparation-moto", name: "Réparation moto", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "Entretien & vidange", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "Lavage automobile", slug: "lavage-automobile" },
        { id: "depannage", name: "Dépannage", slug: "depannage" },
        { id: "remorquage", name: "Remorquage", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "Reprogrammation moteur", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "Installation accessoires", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "Rénovation phares", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "Remplacement pare-brise", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "Marques Populaires (SEO Boost)",
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