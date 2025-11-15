import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionDe: MenuCategory = {
  id: "btp-engins-construction",
  name: "Bau, Baumaschinen & Konstruktion",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "Baumaschinen",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "Hydraulikbagger", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "Minibagger", slug: "mini-pelles" },
        { id: "chargeuses", name: "Radlader", slug: "chargeuses" },
        { id: "bulldozers", name: "Planierraupen", slug: "bulldozers" },
        { id: "niveleuses", name: "Grader", slug: "niveleuses" },
        { id: "tractopelles", name: "Baggerlader", slug: "tractopelles" },
        { id: "compacteurs", name: "Verdichter", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "Walzen", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "Muldenkipper", slug: "dumpers" },
        { id: "camions-bennes", name: "Kipper-Lkw", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "Mobilkrane", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "Turmkrane", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "Teleskopstapler", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "Arbeitsbühnen", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "Bohrgeräte", slug: "foreuses" },
        { id: "retrochargeuses", name: "Baggerlader", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "Fahrzeuge & Materialtransport",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "Baustellen-Lkw", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "Betonmischer-Lkw", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "Tieflader-Lkw", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "Baustellenanhänger", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "Nutzfahrzeuge", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "Pick-ups", slug: "pick-ups" },
        { id: "fourgons", name: "Transporter", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "Bauausrüstung",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "Betonmischer", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "Betonvibratoren", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "Betonpumpen", slug: "pompes-a-beton" },
        { id: "coffrages", name: "Schalungen", slug: "coffrages" },
        { id: "etais", name: "Stützen", slug: "etais" },
        { id: "echafaudages", name: "Gerüste", slug: "echafaudages" },
        { id: "echelles", name: "Leitern", slug: "echelles" },
        { id: "outils-pneumatiques", name: "Druckluftwerkzeuge", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "Presslufthämmer", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "Baustellensägen", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "Generatoren", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "Kompressoren", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "Laser & Nivelliergeräte", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "Baustoffe",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "Zement", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "Fertigbeton", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "Sand & Kies", slug: "sable-gravier" },
        { id: "briques-blocs", name: "Ziegel & Blöcke", slug: "briques-blocs" },
        { id: "parpaings", name: "Betonsteine", slug: "parpaings" },
        { id: "pierres-naturelles", name: "Naturstein", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "Bauholz", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "Dachziegel & Dach", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "Gipskartonplatten", slug: "plaques-de-platre" },
        { id: "isolants", name: "Dämmstoffe", slug: "isolants" },
        { id: "peintures-enduits", name: "Farben & Putze", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "Boden- & Wandbeläge", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "Beschläge & Befestigungen",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "Schrauben & Bolzen", slug: "vis-boulons" },
        { id: "chevilles", name: "Dübel", slug: "chevilles" },
        { id: "clous", name: "Nägel", slug: "clous" },
        { id: "equerres", name: "Winkelverbinder", slug: "equerres" },
        { id: "charniere", name: "Scharniere", slug: "charniere" },
        { id: "serrures", name: "Schlösser", slug: "serrures" },
        { id: "cadenas", name: "Vorhängeschlösser", slug: "cadenas" },
        { id: "colles-mastics", name: "Klebstoffe & Dichtmassen", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "Klebebänder", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "Dichtungen & Silikon", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "Elektro & Sanitär",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "Elektrokabel", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "Schalter & Steckdosen", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "Leitungsschutzschalter", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "Verteilerkästen", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "Baustellenbeleuchtung", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "Rohre & Fittings", slug: "tuyaux-raccords" },
        { id: "robinets", name: "Armaturen", slug: "robinets" },
        { id: "compteurs-eau", name: "Wasserzähler", slug: "compteurs-eau" },
        { id: "pompes", name: "Pumpen", slug: "pompes" },
        { id: "chauffe-eau", name: "Warmwasserbereiter", slug: "chauffe-eau" },
        { id: "sanitaires", name: "Sanitäreinrichtungen", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "Werkzeuge & Profi-Ausrüstung",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "Handwerkzeuge (Hämmer, Schlüssel, Schraubendreher, Wasserwaagen)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "Messwerkzeuge", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "Koffer & Kästen", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "Diamantwerkzeuge", slug: "outils-diamantes" },
        { id: "meuleuses", name: "Schleifmaschinen", slug: "meuleuses" },
        { id: "perforateurs", name: "Bohrhämmer", slug: "perforateurs" },
        { id: "perceuses", name: "Bohrmaschinen", slug: "perceuses" },
        { id: "scies-circulaires", name: "Kreissägen", slug: "scies-circulaires" },
        { id: "ponceuses", name: "Schleifmaschinen", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "Rotationslaser", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "Sicherheit & PSA",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "Schutzhelme", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "Warnwesten", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "Sicherheitsschuhe", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "Schutzhandschuhe", slug: "gants-de-protection" },
        { id: "lunettes", name: "Schutzbrillen", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "Staubmasken", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "Sicherheitsgeschirre", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "Sicherheitsnetze", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "Baustellenabsperrungen", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "Modulbau & Strukturen",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "Baustellenunterkünfte", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "Umgebaute Container", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "Hütten & Unterstände", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "Metallhallen", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "Vorfabrikierte Strukturen", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "Gewächshäuser & Industrieabdeckungen", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "Vermietung von Baugeräten",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "Maschinenvermietung (Bagger, Hebebühnen, Lkw)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "Werkzeugvermietung", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "Schalungs- & Gerüstvermietung", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "Generatorvermietung", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "Bungalowvermietung", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "Bau-Dienstleistungen",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "Öffentliche Bauarbeiten", slug: "travaux-publics" },
        { id: "terrassement", name: "Erdarbeiten", slug: "terrassement" },
        { id: "demolition", name: "Abriss", slug: "demolition" },
        { id: "maconnerie", name: "Mauerarbeiten", slug: "maconnerie" },
        { id: "plomberie", name: "Sanitär", slug: "plomberie" },
        { id: "electricite", name: "Elektroarbeiten", slug: "electricite" },
        { id: "menuiserie", name: "Schreinerei", slug: "menuiserie" },
        { id: "charpente", name: "Zimmerei", slug: "charpente" },
        { id: "peinture-finition", name: "Maler- & Abschlussarbeiten", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "Architektur & Ingenieurwesen", slug: "architecture-ingenierie" },
        { id: "topographie", name: "Vermessung", slug: "topographie" }
      ]
    }
  ]
};