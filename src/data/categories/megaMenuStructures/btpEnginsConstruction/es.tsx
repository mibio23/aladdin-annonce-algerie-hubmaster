import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionEs: MenuCategory = {
  id: "btp-engins-construction",
  name: "Construcción, Maquinaria & Equipos Pesados",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "Maquinaria de construcción",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "Excavadoras hidráulicas", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "Miniexcavadoras", slug: "mini-pelles" },
        { id: "chargeuses", name: "Cargadoras", slug: "chargeuses" },
        { id: "bulldozers", name: "Bulldozers", slug: "bulldozers" },
        { id: "niveleuses", name: "Motoniveladoras", slug: "niveleuses" },
        { id: "tractopelles", name: "Retroexcavadoras", slug: "tractopelles" },
        { id: "compacteurs", name: "Compactadoras", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "Rodillos compactadores", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "Dumpers", slug: "dumpers" },
        { id: "camions-bennes", name: "Camiones volquete", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "Grúas móviles", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "Grúas torre", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "Manipuladores telescópicos", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "Plataformas elevadoras", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "Perforadoras", slug: "foreuses" },
        { id: "retrochargeuses", name: "Retroexcavadoras", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "Vehículos & transporte de materiales",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "Camiones de obra", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "Camiones hormigonera", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "Camiones porta‑equipos", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "Remolques de obra", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "Vehículos comerciales", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "Pick‑ups", slug: "pick-ups" },
        { id: "fourgons", name: "Furgonetas", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "Equipos de construcción",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "Mezcladoras de concreto", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "Vibradores de hormigón", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "Bombas de hormigón", slug: "pompes-a-beton" },
        { id: "coffrages", name: "Encofrados", slug: "coffrages" },
        { id: "etais", name: "Puntales", slug: "etais" },
        { id: "echafaudages", name: "Andamios", slug: "echafaudages" },
        { id: "echelles", name: "Escaleras", slug: "echelles" },
        { id: "outils-pneumatiques", name: "Herramientas neumáticas", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "Martillos neumáticos", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "Sierras de obra", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "Generadores", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "Compresores", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "Láseres & niveles", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "Materiales de construcción",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "Cemento", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "Hormigón premezclado", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "Arena & grava", slug: "sable-gravier" },
        { id: "briques-blocs", name: "Ladrillos & bloques", slug: "briques-blocs" },
        { id: "parpaings", name: "Bloques de concreto", slug: "parpaings" },
        { id: "pierres-naturelles", name: "Piedra natural", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "Madera de construcción", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "Tejas & cubiertas", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "Placas de yeso", slug: "plaques-de-platre" },
        { id: "isolants", name: "Aislantes", slug: "isolants" },
        { id: "peintures-enduits", name: "Pinturas & revestimientos", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "Revestimientos de suelos & paredes", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "Ferretería & fijaciones",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "Tornillos & pernos", slug: "vis-boulons" },
        { id: "chevilles", name: "Tacos", slug: "chevilles" },
        { id: "clous", name: "Clavos", slug: "clous" },
        { id: "equerres", name: "Escuadras", slug: "equerres" },
        { id: "charniere", name: "Bisagras", slug: "charniere" },
        { id: "serrures", name: "Cerraduras", slug: "serrures" },
        { id: "cadenas", name: "Candados", slug: "cadenas" },
        { id: "colles-mastics", name: "Adhesivos & selladores", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "Cintas adhesivas", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "Juntas & silicona", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "Eléctrico & fontanería",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "Cables eléctricos", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "Interruptores & tomas", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "Interruptores automáticos", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "Cuadros eléctricos", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "Iluminación de obra", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "Tubos & accesorios", slug: "tuyaux-raccords" },
        { id: "robinets", name: "Grifería", slug: "robinets" },
        { id: "compteurs-eau", name: "Contadores de agua", slug: "compteurs-eau" },
        { id: "pompes", name: "Bombas", slug: "pompes" },
        { id: "chauffe-eau", name: "Calentadores de agua", slug: "chauffe-eau" },
        { id: "sanitaires", name: "Sanitarios", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "Herramientas & equipos profesionales",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "Herramientas manuales (martillos, llaves, destornilladores, niveles)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "Instrumentos de medición", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "Maletines & estuches", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "Herramientas diamantadas", slug: "outils-diamantes" },
        { id: "meuleuses", name: "Amoladoras", slug: "meuleuses" },
        { id: "perforateurs", name: "Martillos perforadores", slug: "perforateurs" },
        { id: "perceuses", name: "Taladros", slug: "perceuses" },
        { id: "scies-circulaires", name: "Sierras circulares", slug: "scies-circulaires" },
        { id: "ponceuses", name: "Lijadoras", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "Láseres rotativos", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "Seguridad & EPP",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "Cascos de seguridad", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "Chalecos de alta visibilidad", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "Calzado de seguridad", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "Guantes de protección", slug: "gants-de-protection" },
        { id: "lunettes", name: "Gafas de seguridad", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "Mascarillas antipolvo", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "Arneses de seguridad", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "Redes de seguridad", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "Barreras de obra", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "Construcción modular & estructuras",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "Casetas de obra", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "Contenedores acondicionados", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "Cabañas & refugios", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "Naves metálicas", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "Estructuras prefabricadas", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "Invernaderos & coberturas industriales", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "Alquiler de equipos de construcción",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "Alquiler de maquinaria (excavadoras, plataformas, camiones)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "Alquiler de herramientas", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "Alquiler de encofrado & andamio", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "Alquiler de generadores", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "Alquiler de casetas", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "Servicios de construcción",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "Obras públicas", slug: "travaux-publics" },
        { id: "terrassement", name: "Movimiento de tierras", slug: "terrassement" },
        { id: "demolition", name: "Demolición", slug: "demolition" },
        { id: "maconnerie", name: "Albañilería", slug: "maconnerie" },
        { id: "plomberie", name: "Fontanería", slug: "plomberie" },
        { id: "electricite", name: "Electricidad", slug: "electricite" },
        { id: "menuiserie", name: "Carpintería", slug: "menuiserie" },
        { id: "charpente", name: "Estructuras de madera", slug: "charpente" },
        { id: "peinture-finition", name: "Pintura & acabado", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "Arquitectura & ingeniería", slug: "architecture-ingenierie" },
        { id: "topographie", name: "Topografía", slug: "topographie" }
      ]
    }
  ]
};