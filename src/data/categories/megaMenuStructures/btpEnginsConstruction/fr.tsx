import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionFr: MenuCategory = {
  id: "btp-engins-construction",
  name: "BTP, Engins & Construction",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "Engins de chantier",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "Pelles hydrauliques", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "Mini-pelles", slug: "mini-pelles" },
        { id: "chargeuses", name: "Chargeuses", slug: "chargeuses" },
        { id: "bulldozers", name: "Bulldozers", slug: "bulldozers" },
        { id: "niveleuses", name: "Niveleuses", slug: "niveleuses" },
        { id: "tractopelles", name: "Tractopelles", slug: "tractopelles" },
        { id: "compacteurs", name: "Compacteurs", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "Rouleaux compresseurs", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "Dumpers", slug: "dumpers" },
        { id: "camions-bennes", name: "Camions-bennes", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "Grues mobiles", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "Grues à tour", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "Chariots télescopiques", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "Nacelles élévatrices", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "Foreuses", slug: "foreuses" },
        { id: "retrochargeuses", name: "Rétrochargeuses", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "Véhicules & transport de matériaux",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "Camions de chantier", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "Camions malaxeurs (toupies béton)", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "Camions porte-engins", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "Remorques de chantier", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "Véhicules utilitaires", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "Pick-ups", slug: "pick-ups" },
        { id: "fourgons", name: "Fourgons", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "Matériel de construction",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "Bétonnières", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "Vibrateurs béton", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "Pompes à béton", slug: "pompes-a-beton" },
        { id: "coffrages", name: "Coffrages", slug: "coffrages" },
        { id: "etais", name: "Étais", slug: "etais" },
        { id: "echafaudages", name: "Échafaudages", slug: "echafaudages" },
        { id: "echelles", name: "Échelles", slug: "echelles" },
        { id: "outils-pneumatiques", name: "Outils pneumatiques", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "Marteaux-piqueurs", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "Scies de chantier", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "Groupes électrogènes", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "Compresseurs", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "Lasers & niveaux", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "Matériaux de construction",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "Ciment", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "Béton prêt à l’emploi", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "Sable & gravier", slug: "sable-gravier" },
        { id: "briques-blocs", name: "Briques & blocs", slug: "briques-blocs" },
        { id: "parpaings", name: "Parpaings", slug: "parpaings" },
        { id: "pierres-naturelles", name: "Pierres naturelles", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "Bois de construction", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "Tuiles & toitures", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "Plaques de plâtre", slug: "plaques-de-platre" },
        { id: "isolants", name: "Isolants", slug: "isolants" },
        { id: "peintures-enduits", name: "Peintures & enduits", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "Revêtements sols & murs", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "Quincaillerie & fixations",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "Vis & boulons", slug: "vis-boulons" },
        { id: "chevilles", name: "Chevilles", slug: "chevilles" },
        { id: "clous", name: "Clous", slug: "clous" },
        { id: "equerres", name: "Équerres", slug: "equerres" },
        { id: "charniere", name: "Charnières", slug: "charniere" },
        { id: "serrures", name: "Serrures", slug: "serrures" },
        { id: "cadenas", name: "Cadenas", slug: "cadenas" },
        { id: "colles-mastics", name: "Colles & mastics", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "Rubans adhésifs", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "Joints & silicone", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "Équipements électriques & plomberie",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "Câbles électriques", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "Interrupteurs & prises", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "Disjoncteurs", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "Tableaux électriques", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "Éclairage chantier", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "Tuyaux & raccords", slug: "tuyaux-raccords" },
        { id: "robinets", name: "Robinetterie", slug: "robinets" },
        { id: "compteurs-eau", name: "Compteurs d’eau", slug: "compteurs-eau" },
        { id: "pompes", name: "Pompes", slug: "pompes" },
        { id: "chauffe-eau", name: "Chauffe-eau", slug: "chauffe-eau" },
        { id: "sanitaires", name: "Sanitaires", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "Outils & équipements professionnels",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "Outils manuels (marteaux, clés, tournevis, niveaux)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "Outils de mesure", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "Mallettes & coffrets", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "Outils diamantés", slug: "outils-diamantes" },
        { id: "meuleuses", name: "Meuleuses", slug: "meuleuses" },
        { id: "perforateurs", name: "Perforateurs", slug: "perforateurs" },
        { id: "perceuses", name: "Perceuses", slug: "perceuses" },
        { id: "scies-circulaires", name: "Scies circulaires", slug: "scies-circulaires" },
        { id: "ponceuses", name: "Ponceuses", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "Lasers rotatifs", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "Équipements de sécurité & protection",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "Casques de chantier", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "Gilets haute visibilité", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "Chaussures de sécurité", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "Gants de protection", slug: "gants-de-protection" },
        { id: "lunettes", name: "Lunettes", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "Masques anti-poussière", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "Harnais de sécurité", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "Filets de protection", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "Barrières de chantier", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "Construction modulaire & structures",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "Bungalows & bases-vie", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "Conteneurs aménagés", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "Cabanes & abris", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "Hangars métalliques", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "Structures préfabriquées", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "Serres & couvertures industrielles", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "Location de matériel BTP",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "Location d’engins (pelles, nacelles, camions)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "Location d’outillage", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "Location de coffrage & échafaudage", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "Location de groupes électrogènes", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "Location de bungalows", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "Services liés au BTP",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "Travaux publics", slug: "travaux-publics" },
        { id: "terrassement", name: "Terrassement", slug: "terrassement" },
        { id: "demolition", name: "Démolition", slug: "demolition" },
        { id: "maconnerie", name: "Maçonnerie", slug: "maconnerie" },
        { id: "plomberie", name: "Plomberie", slug: "plomberie" },
        { id: "electricite", name: "Électricité", slug: "electricite" },
        { id: "menuiserie", name: "Menuiserie", slug: "menuiserie" },
        { id: "charpente", name: "Charpente", slug: "charpente" },
        { id: "peinture-finition", name: "Peinture & finition", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "Architecture & ingénierie", slug: "architecture-ingenierie" },
        { id: "topographie", name: "Topographie", slug: "topographie" }
      ]
    }
  ]
};