import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureEs: MenuCategory = {
  id: "bebe-puericulture",
  name: "Bebé y Puericultura",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "Ropa de bebé",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "Bodies y pijamas", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "Conjuntos", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "Enteritos", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "Sacos de dormir", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "Abrigos y monos", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "Zapatos de bebé",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "Zapatitos de recién nacido", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "Sandalias", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "Zapatillas", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "Botitas", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "Carritos & cochecitos",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "Cochecitos tipo bastón", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "Cochecitos de 3 ruedas", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "Carritos/landós", slug: "landeaux" },
        { id: "travel-system", name: "Travel system", slug: "travel-system" },
        { id: "accessoires-poussette", name: "Accesorios para cochecito", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "Marcas de carritos",
          slug: "marques-poussettes",
          subcategories: [
            { id: "bugaboo", name: "Bugaboo", slug: "bugaboo" },
            { id: "cybex", name: "Cybex", slug: "cybex" },
            { id: "maxi-cosi", name: "Maxi-Cosi", slug: "maxi-cosi" },
            { id: "chicco", name: "Chicco", slug: "chicco" },
            { id: "stokke", name: "Stokke", slug: "stokke" },
            { id: "joie", name: "Joie", slug: "joie" },
            { id: "peg-perego", name: "Peg-Perego", slug: "peg-perego" },
            { id: "nuna", name: "Nuna", slug: "nuna" },
            { id: "graco", name: "Graco", slug: "graco" },
            { id: "britax", name: "Britax", slug: "britax" }
          ]
        }
      ]
    },
    {
      id: "sieges-auto-bebe",
      name: "Sillas de coche",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "Huevitos grupo 0", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "Sillas grupo 0/1", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "Sillas grupo 1/2/3", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "Bases ISOFIX", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "Marcas de sillas de coche",
          slug: "marques-sieges-auto",
          subcategories: [
            { id: "maxi-cosi", name: "Maxi-Cosi", slug: "maxi-cosi" },
            { id: "cybex", name: "Cybex", slug: "cybex" },
            { id: "britax", name: "Britax", slug: "britax" },
            { id: "nuna", name: "Nuna", slug: "nuna" },
            { id: "joie", name: "Joie", slug: "joie" },
            { id: "chicco", name: "Chicco", slug: "chicco" }
          ]
        }
      ]
    },
    {
      id: "lits-berceaux-bebe",
      name: "Cunas & moisés",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "Mecedoras/cunas", slug: "berceaux" },
        { id: "lits-parapluie", name: "Cunas de viaje", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "Cunas evolutivas", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "Colchones bebé", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "Marcas de cunas y moisés",
          slug: "marques-lits-berceaux",
          subcategories: [
            { id: "stokke", name: "Stokke", slug: "stokke" },
            { id: "ikea", name: "IKEA", slug: "ikea" },
            { id: "chicco", name: "Chicco", slug: "chicco" },
            { id: "babybjorn", name: "BabyBjörn", slug: "babybjorn" }
          ]
        }
      ]
    },
    {
      id: "chaises-hautes-repas",
      name: "Tronas & alimentación",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "Tronas", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "Elevadores", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "Vajilla bebé", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "Baberos", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "Marcas de tronas",
          slug: "marques-chaises-hautes",
          subcategories: [
            { id: "stokke", name: "Stokke", slug: "stokke" },
            { id: "peg-perego", name: "Peg-Perego", slug: "peg-perego" },
            { id: "joie", name: "Joie", slug: "joie" },
            { id: "ikea", name: "IKEA", slug: "ikea" }
          ]
        }
      ]
    },
    {
      id: "allaitement-biberons",
      name: "Lactancia & biberones",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "Sacaleches", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "Cojín de lactancia", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "Biberones y tetinas", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "Calienta biberones", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "Esterilizadores", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "Marcas de biberones",
          slug: "marques-biberons",
          subcategories: [
            { id: "philips-avent", name: "Philips Avent", slug: "philips-avent" },
            { id: "tommee-tippee", name: "Tommee Tippee", slug: "tommee-tippee" },
            { id: "dr-browns", name: "Dr. Brown's", slug: "dr-browns" },
            { id: "mam", name: "MAM", slug: "mam" },
            { id: "nuk", name: "NUK", slug: "nuk" }
          ]
        }
      ]
    },
    {
      id: "soins-hygiene-bebe",
      name: "Cuidado & higiene",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "Bañeras bebé", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "Set de cuidado", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "Termómetros bebé", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Cuidado de la piel", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "Marcas de cuidado del bebé",
          slug: "marques-soins-bebe",
          subcategories: [
            { id: "mustela", name: "Mustela", slug: "mustela" },
            { id: "biolane", name: "Biolane", slug: "biolane" },
            { id: "weleda", name: "Weleda", slug: "weleda" },
            { id: "sanosan", name: "Sanosan", slug: "sanosan" }
          ]
        }
      ]
    },
    {
      id: "couches-toilette",
      name: "Pañales & cambio",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "Pañales desechables", slug: "couches-jetables" },
        { id: "couches-lavables", name: "Pañales de tela", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "Toallitas bebé", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "Cambiadores", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "Colchonetas de cambio", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "Marcas de pañales",
          slug: "marques-couches",
          subcategories: [
            { id: "pampers", name: "Pampers", slug: "pampers" },
            { id: "huggies", name: "Huggies", slug: "huggies" },
            { id: "dodot", name: "Dodot", slug: "dodot" },
            { id: "libero", name: "Libero", slug: "libero" },
            { id: "moltex", name: "Moltex", slug: "moltex" }
          ]
        }
      ]
    },
    {
      id: "jouets-bebe-eveil",
      name: "Juguetes & estimulación",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "Tapetes de juego", slug: "tapis-eveil" },
        { id: "hochets", name: "Sonajeros", slug: "hochets" },
        { id: "jouets-de-bain", name: "Juguetes de baño", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "Móviles de cuna", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "Libros para bebés", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "Marcas de juguetes de bebé",
          slug: "marques-jouets-bebe",
          subcategories: [
            { id: "fisher-price", name: "Fisher-Price", slug: "fisher-price" },
            { id: "vtech", name: "VTech", slug: "vtech" },
            { id: "little-tikes", name: "Little Tikes", slug: "little-tikes" },
            { id: "lamaze", name: "Lamaze", slug: "lamaze" }
          ]
        }
      ]
    },
    {
      id: "securite-bebe",
      name: "Seguridad del bebé",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "Barreras de seguridad", slug: "barrieres-securite" },
        { id: "babyphones", name: "Baby monitors", slug: "babyphones" },
        { id: "veilleuses", name: "Luz nocturna", slug: "veilleuses" },
        { id: "caches-prises", name: "Protectores de enchufe", slug: "caches-prises" },
        { id: "harnais-bebe", name: "Arneses bebé", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "Marcas de monitores de bebé",
          slug: "marques-babyphones",
          subcategories: [
            { id: "philips-avent", name: "Philips Avent", slug: "philips-avent" },
            { id: "vtech", name: "VTech", slug: "vtech" },
            { id: "motorola", name: "Motorola", slug: "motorola" },
            { id: "nuk", name: "NUK", slug: "nuk" }
          ]
        }
      ]
    },
    {
      id: "chambre-bebe-deco",
      name: "Habitación del bebé & deco",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "Juego de cuna", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "Cortinas habitación bebé", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "Iluminación habitación bebé", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "Almacenaje habitación bebé", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "Pegatinas pared bebé", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "Portabebés & fulares",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "Fulares porteo", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "Portabebés preformados", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "Mei Tai", slug: "mei-tai" },
        { id: "slings", name: "Ring slings", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "Marcas de portabebés",
          slug: "marques-porte-bebes",
          subcategories: [
            { id: "babybjorn", name: "BabyBjörn", slug: "babybjorn" },
            { id: "ergobaby", name: "Ergobaby", slug: "ergobaby" },
            { id: "manduca", name: "Manduca", slug: "manduca" },
            { id: "boba", name: "Boba", slug: "boba" }
          ]
        }
      ]
    },
    {
      id: "sacs-a-langer",
      name: "Bolsos cambiadores",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "Bolsos clásicos", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "Mochilas cambiadoras", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "Accesorios del bolso cambiador", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "Organizadores para cochecito", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "Marcas de bolsos cambiadores",
          slug: "marques-sacs-a-langer",
          subcategories: [
            { id: "skip-hop", name: "Skip Hop", slug: "skip-hop" },
            { id: "lassig", name: "Lässig", slug: "lassig" },
            { id: "babymoov", name: "Babymoov", slug: "babymoov" },
            { id: "storksak", name: "Storksak", slug: "storksak" }
          ]
        }
      ]
    }
  ]
};