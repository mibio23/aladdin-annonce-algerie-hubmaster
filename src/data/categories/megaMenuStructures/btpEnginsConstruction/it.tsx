import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionIt: MenuCategory = {
  id: "btp-engins-construction",
  name: "Edilizia, Macchinari & Attrezzature",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "Macchine da cantiere",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "Escavatori idraulici", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "Mini escavatori", slug: "mini-pelles" },
        { id: "chargeuses", name: "Pale caricatrici", slug: "chargeuses" },
        { id: "bulldozers", name: "Bulldozer", slug: "bulldozers" },
        { id: "niveleuses", name: "Livellatrici", slug: "niveleuses" },
        { id: "tractopelles", name: "Terne", slug: "tractopelles" },
        { id: "compacteurs", name: "Compattatori", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "Rulli compattatori", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "Dumper", slug: "dumpers" },
        { id: "camions-bennes", name: "Autocarri ribaltabili", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "Autogru", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "Gru a torre", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "Sollevatori telescopici", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "Piattaforme aeree", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "Perforatrici", slug: "foreuses" },
        { id: "retrochargeuses", name: "Terne", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "Veicoli & trasporto materiali",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "Camion da cantiere", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "Autobetoniere", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "Camion porta‑macchine", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "Rimorchi da cantiere", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "Veicoli commerciali", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "Pick‑up", slug: "pick-ups" },
        { id: "fourgons", name: "Furgoni", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "Attrezzature da costruzione",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "Betoniere", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "Vibratori per calcestruzzo", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "Pompe per calcestruzzo", slug: "pompes-a-beton" },
        { id: "coffrages", name: "Casseri", slug: "coffrages" },
        { id: "etais", name: "Puntelli", slug: "etais" },
        { id: "echafaudages", name: "Ponteggi", slug: "echafaudages" },
        { id: "echelles", name: "Scale", slug: "echelles" },
        { id: "outils-pneumatiques", name: "Utensili pneumatici", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "Martelli demolitori", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "Seghe da cantiere", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "Generatori", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "Compressori", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "Laser & livelle", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "Materiali da costruzione",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "Cemento", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "Calcestruzzo preconfezionato", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "Sabbia & ghiaia", slug: "sable-gravier" },
        { id: "briques-blocs", name: "Mattoni & blocchi", slug: "briques-blocs" },
        { id: "parpaings", name: "Blocchi di calcestruzzo", slug: "parpaings" },
        { id: "pierres-naturelles", name: "Pietra naturale", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "Legname da costruzione", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "Tegole & coperture", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "Cartongesso", slug: "plaques-de-platre" },
        { id: "isolants", name: "Isolanti", slug: "isolants" },
        { id: "peintures-enduits", name: "Vernici & intonaci", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "Rivestimenti per pavimenti & pareti", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "Ferramenta & fissaggi",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "Viti & bulloni", slug: "vis-boulons" },
        { id: "chevilles", name: "Tasselli", slug: "chevilles" },
        { id: "clous", name: "Chiodi", slug: "clous" },
        { id: "equerres", name: "Staff e squadre", slug: "equerres" },
        { id: "charniere", name: "Cerniere", slug: "charniere" },
        { id: "serrures", name: "Serrature", slug: "serrures" },
        { id: "cadenas", name: "Lucchetti", slug: "cadenas" },
        { id: "colles-mastics", name: "Adesivi & sigillanti", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "Nastri adesivi", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "Guarnizioni & silicone", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "Elettrico & idraulica",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "Cavi elettrici", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "Interruttori & prese", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "Interruttori automatici", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "Quadri elettrici", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "Illuminazione da cantiere", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "Tubi & raccordi", slug: "tuyaux-raccords" },
        { id: "robinets", name: "Rubinetteria", slug: "robinets" },
        { id: "compteurs-eau", name: "Contatori dell’acqua", slug: "compteurs-eau" },
        { id: "pompes", name: "Pompe", slug: "pompes" },
        { id: "chauffe-eau", name: "Scaldacqua", slug: "chauffe-eau" },
        { id: "sanitaires", name: "Sanitari", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "Utensili & attrezzature professionali",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "Utensili manuali (martelli, chiavi, cacciaviti, livelli)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "Strumenti di misura", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "Valigette & cassette", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "Utensili diamantati", slug: "outils-diamantes" },
        { id: "meuleuses", name: "Smerigliatrici", slug: "meuleuses" },
        { id: "perforateurs", name: "Martelli perforatori", slug: "perforateurs" },
        { id: "perceuses", name: "Trapani", slug: "perceuses" },
        { id: "scies-circulaires", name: "Seghe circolari", slug: "scies-circulaires" },
        { id: "ponceuses", name: "Levigatrici", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "Laser rotanti", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "Sicurezza & DPI",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "Caschi da cantiere", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "Gilet ad alta visibilità", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "Scarpe antinfortunistiche", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "Guanti protettivi", slug: "gants-de-protection" },
        { id: "lunettes", name: "Occhiali di sicurezza", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "Maschere antipolvere", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "Imbracature di sicurezza", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "Reti di sicurezza", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "Barriere di cantiere", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "Costruzione modulare & strutture",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "Baracche di cantiere", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "Container attrezzati", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "Capanni & ricoveri", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "Capannoni metallici", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "Strutture prefabbricate", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "Serre & coperture industriali", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "Noleggio attrezzature edili",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "Noleggio macchine (escavatori, piattaforme, camion)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "Noleggio utensili", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "Noleggio casseforme & ponteggi", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "Noleggio generatori", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "Noleggio baracche", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "Servizi per l’edilizia",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "Lavori pubblici", slug: "travaux-publics" },
        { id: "terrassement", name: "Movimenti terra", slug: "terrassement" },
        { id: "demolition", name: "Demolizione", slug: "demolition" },
        { id: "maconnerie", name: "Muratura", slug: "maconnerie" },
        { id: "plomberie", name: "Idraulica", slug: "plomberie" },
        { id: "electricite", name: "Elettricità", slug: "electricite" },
        { id: "menuiserie", name: "Falegnameria", slug: "menuiserie" },
        { id: "charpente", name: "Carpenteria in legno", slug: "charpente" },
        { id: "peinture-finition", name: "Pittura & finitura", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "Architettura & ingegneria", slug: "architecture-ingenierie" },
        { id: "topographie", name: "Topografia", slug: "topographie" }
      ]
    }
  ]
};