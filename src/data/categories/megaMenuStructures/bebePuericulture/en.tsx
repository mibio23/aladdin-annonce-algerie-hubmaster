import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureEn: MenuCategory = {
  id: "bebe-puericulture",
  name: "Baby & Nursery",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "Baby clothes",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "Bodysuits & pajamas", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "Outfits", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "Onesies", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "Sleep sacks & wearable blankets", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "Coats & snowsuits", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "Baby shoes",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "Newborn booties", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "Sandals", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "Sneakers", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "Boots", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "Strollers & prams",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "Umbrella strollers", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "3-wheel strollers", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "Prams", slug: "landeaux" },
        { id: "travel-system", name: "Travel systems", slug: "travel-system" },
        { id: "accessoires-poussette", name: "Stroller accessories", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "Stroller brands",
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
      name: "Car seats",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "Infant car seat (Group 0)", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "Convertible seat (Group 0/1)", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "Toddler/child seat (Group 1/2/3)", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "ISOFIX bases", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "Car seat brands",
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
      name: "Cribs & bassinets",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "Bassinets", slug: "berceaux" },
        { id: "lits-parapluie", name: "Travel cots", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "Convertible cribs", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "Baby mattresses", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "Crib & bassinet brands",
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
      name: "High chairs & feeding",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "High chairs", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "Boosters", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "Baby tableware", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "Bib", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "High chair brands",
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
      name: "Breastfeeding & bottles",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "Breast pumps", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "Nursing pillows", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "Bottles & nipples", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "Bottle warmers", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "Sterilizers", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "Bottle brands",
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
      name: "Care & hygiene",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "Baby bathtubs", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "Care kits", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "Baby thermometers", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Skin care", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "Baby care brands",
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
      name: "Diapers & changing",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "Disposable diapers", slug: "couches-jetables" },
        { id: "couches-lavables", name: "Cloth diapers", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "Baby wipes", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "Changing tables", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "Changing mats", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "Diaper brands",
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
      name: "Baby toys & early learning",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "Activity mats", slug: "tapis-eveil" },
        { id: "hochets", name: "Rattles", slug: "hochets" },
        { id: "jouets-de-bain", name: "Bath toys", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "Crib mobiles", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "Baby books", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "Baby toy brands",
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
      name: "Baby safety",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "Safety gates", slug: "barrieres-securite" },
        { id: "babyphones", name: "Baby monitors", slug: "babyphones" },
        { id: "veilleuses", name: "Night lights", slug: "veilleuses" },
        { id: "caches-prises", name: "Plug covers", slug: "caches-prises" },
        { id: "harnais-bebe", name: "Safety harnesses", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "Baby monitor brands",
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
      name: "Nursery & decor",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "Crib bedding sets", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "Nursery curtains", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "Nursery lighting", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "Nursery storage", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "Nursery wall decals", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "Baby carriers & wraps",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "Wraps", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "Structured carriers", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "Mei Tai", slug: "mei-tai" },
        { id: "slings", name: "Ring slings", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "Carrier brands",
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
      name: "Diaper bags",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "Classic bags", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "Backpack diaper bags", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "Diaper bag accessories", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "Stroller organizers", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "Diaper bag brands",
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