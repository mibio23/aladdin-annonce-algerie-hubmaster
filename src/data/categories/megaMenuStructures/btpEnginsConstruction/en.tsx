import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionEn: MenuCategory = {
  id: "btp-engins-construction",
  name: "Construction, Heavy Equipment & Machinery",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "Construction machinery",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "Hydraulic excavators", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "Mini excavators", slug: "mini-pelles" },
        { id: "chargeuses", name: "Loaders", slug: "chargeuses" },
        { id: "bulldozers", name: "Bulldozers", slug: "bulldozers" },
        { id: "niveleuses", name: "Motor graders", slug: "niveleuses" },
        { id: "tractopelles", name: "Backhoe loaders", slug: "tractopelles" },
        { id: "compacteurs", name: "Compactors", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "Road rollers", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "Dumpers", slug: "dumpers" },
        { id: "camions-bennes", name: "Dump trucks", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "Mobile cranes", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "Tower cranes", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "Telehandlers", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "Aerial work platforms", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "Drilling rigs", slug: "foreuses" },
        { id: "retrochargeuses", name: "Backhoe loaders", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "Vehicles & material transport",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "Construction trucks", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "Concrete mixer trucks", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "Lowboy/haul trucks", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "Construction trailers", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "Utility vehicles", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "Pick‑ups", slug: "pick-ups" },
        { id: "fourgons", name: "Vans", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "Construction equipment",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "Concrete mixers", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "Concrete vibrators", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "Concrete pumps", slug: "pompes-a-beton" },
        { id: "coffrages", name: "Formwork", slug: "coffrages" },
        { id: "etais", name: "Props & shoring", slug: "etais" },
        { id: "echafaudages", name: "Scaffolding", slug: "echafaudages" },
        { id: "echelles", name: "Ladders", slug: "echelles" },
        { id: "outils-pneumatiques", name: "Pneumatic tools", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "Jackhammers", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "Jobsite saws", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "Generators", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "Compressors", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "Lasers & levels", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "Construction materials",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "Cement", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "Ready‑mix concrete", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "Sand & gravel", slug: "sable-gravier" },
        { id: "briques-blocs", name: "Bricks & blocks", slug: "briques-blocs" },
        { id: "parpaings", name: "Concrete blocks", slug: "parpaings" },
        { id: "pierres-naturelles", name: "Natural stone", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "Construction lumber", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "Tiles & roofing", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "Drywall & plasterboard", slug: "plaques-de-platre" },
        { id: "isolants", name: "Insulation", slug: "isolants" },
        { id: "peintures-enduits", name: "Paints & renders", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "Floor & wall coverings", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "Hardware & fasteners",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "Screws & bolts", slug: "vis-boulons" },
        { id: "chevilles", name: "Anchors", slug: "chevilles" },
        { id: "clous", name: "Nails", slug: "clous" },
        { id: "equerres", name: "Brackets", slug: "equerres" },
        { id: "charniere", name: "Hinges", slug: "charniere" },
        { id: "serrures", name: "Locks", slug: "serrures" },
        { id: "cadenas", name: "Padlocks", slug: "cadenas" },
        { id: "colles-mastics", name: "Adhesives & sealants", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "Tapes", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "Gaskets & silicone", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "Electrical & plumbing",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "Electrical cables", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "Switches & outlets", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "Breakers", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "Panels", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "Jobsite lighting", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "Pipes & fittings", slug: "tuyaux-raccords" },
        { id: "robinets", name: "Faucets", slug: "robinets" },
        { id: "compteurs-eau", name: "Water meters", slug: "compteurs-eau" },
        { id: "pompes", name: "Pumps", slug: "pompes" },
        { id: "chauffe-eau", name: "Water heaters", slug: "chauffe-eau" },
        { id: "sanitaires", name: "Sanitary ware", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "Tools & professional equipment",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "Hand tools (hammers, wrenches, screwdrivers, levels)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "Measuring tools", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "Toolboxes & cases", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "Diamond tools", slug: "outils-diamantes" },
        { id: "meuleuses", name: "Grinders", slug: "meuleuses" },
        { id: "perforateurs", name: "Rotary hammers", slug: "perforateurs" },
        { id: "perceuses", name: "Drills", slug: "perceuses" },
        { id: "scies-circulaires", name: "Circular saws", slug: "scies-circulaires" },
        { id: "ponceuses", name: "Sanders", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "Rotary lasers", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "Safety & PPE",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "Hard hats", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "High‑visibility vests", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "Safety shoes", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "Protective gloves", slug: "gants-de-protection" },
        { id: "lunettes", name: "Safety glasses", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "Dust masks", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "Safety harnesses", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "Safety nets", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "Site barriers", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "Modular construction & structures",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "Site cabins", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "Converted containers", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "Sheds & shelters", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "Metal sheds", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "Prefabricated structures", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "Greenhouses & industrial covers", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "Construction equipment rental",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "Equipment rental (excavators, lifts, trucks)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "Tool rental", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "Formwork & scaffolding rental", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "Generator rental", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "Cabin rental", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "Construction services",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "Public works", slug: "travaux-publics" },
        { id: "terrassement", name: "Earthworks", slug: "terrassement" },
        { id: "demolition", name: "Demolition", slug: "demolition" },
        { id: "maconnerie", name: "Masonry", slug: "maconnerie" },
        { id: "plomberie", name: "Plumbing", slug: "plomberie" },
        { id: "electricite", name: "Electrical", slug: "electricite" },
        { id: "menuiserie", name: "Carpentry", slug: "menuiserie" },
        { id: "charpente", name: "Timber framing", slug: "charpente" },
        { id: "peinture-finition", name: "Painting & finishing", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "Architecture & engineering", slug: "architecture-ingenierie" },
        { id: "topographie", name: "Surveying", slug: "topographie" }
      ]
    }
  ]
};