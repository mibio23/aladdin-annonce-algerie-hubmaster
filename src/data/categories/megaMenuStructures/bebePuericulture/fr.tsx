import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureFr: MenuCategory = {
  id: "bebe-puericulture",
  name: "Bébé & Puériculture",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "Vêtements bébé",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "Bodies & pyjamas", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "Ensembles", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "Grenouillères", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "Gigoteuses & turbulettes", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "Manteaux & combinaisons", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "Chaussures bébé",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "Chaussons naissance", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "Sandales bébé", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "Baskets bébé", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "Bottines bébé", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "Poussettes & landaus",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "Poussettes canne", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "Poussettes 3 roues", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "Landeaux", slug: "landeaux" },
        { id: "travel-system", name: "Travel system", slug: "travel-system" },
        { id: "accessoires-poussette", name: "Accessoires poussette", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "Marques poussettes",
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
      name: "Sièges auto bébé",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "Cosy groupe 0", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "Siège auto groupe 0/1", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "Siège auto groupe 1/2/3", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "Bases ISOFIX", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "Marques sièges auto",
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
      name: "Lits & berceaux",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "Berceaux", slug: "berceaux" },
        { id: "lits-parapluie", name: "Lits parapluie", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "Lits évolutifs", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "Matelas bébé", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "Marques lits & berceaux",
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
      name: "Chaises hautes & repas",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "Chaises hautes", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "Réhausseurs", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "Vaisselle bébé", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "Bavoirs", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "Marques chaises hautes",
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
      name: "Allaitement & biberons",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "Tire-lait", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "Coussin d'allaitement", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "Biberons & tétines", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "Chauffe-biberons", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "Stérilisation", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "Marques biberons",
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
      name: "Soins & hygiène",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "Baignoires bébé", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "Trousse de soin", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "Thermomètres bébé", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Soins peau bébé", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "Marques soins bébé",
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
      name: "Couches & change",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "Couches jetables", slug: "couches-jetables" },
        { id: "couches-lavables", name: "Couches lavables", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "Lingettes bébé", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "Tables à langer", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "Matelas à langer", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "Marques couches",
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
      name: "Jouets & éveil",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "Tapis d'éveil", slug: "tapis-eveil" },
        { id: "hochets", name: "Hochets", slug: "hochets" },
        { id: "jouets-de-bain", name: "Jouets de bain", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "Mobiles de lit", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "Livres bébé", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "Marques jouets bébé",
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
      name: "Sécurité bébé",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "Barrières de sécurité", slug: "barrieres-securite" },
        { id: "babyphones", name: "Babyphones", slug: "babyphones" },
        { id: "veilleuses", name: "Veilleuses", slug: "veilleuses" },
        { id: "caches-prises", name: "Caches-prises", slug: "caches-prises" },
        { id: "harnais-bebe", name: "Harnais bébé", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "Marques babyphones",
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
      name: "Chambre bébé & déco",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "Parures de lit bébé", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "Rideaux chambre bébé", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "Luminaires chambre bébé", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "Rangements chambre bébé", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "Stickers muraux bébé", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "Porte-bébés & écharpes",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "Écharpes de portage", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "Porte-bébés préformés", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "Mei Tai", slug: "mei-tai" },
        { id: "slings", name: "Slings", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "Marques porte-bébés",
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
      name: "Sacs à langer",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "Sacs classiques", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "Sacs à dos à langer", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "Accessoires sac à langer", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "Organiseurs poussette", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "Marques sacs à langer",
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