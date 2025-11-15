import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureDe: MenuCategory = {
  id: "bebe-puericulture",
  name: "Baby & Kinderpflege",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "Babykleidung",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "Bodies & Schlafanzüge", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "Outfits", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "Strampler", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "Schlafsäcke", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "Mäntel & Overall", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "Babyschuhe",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "Erstlingsschuhe", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "Sandalen", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "Sneaker", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "Stiefelchen", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "Kinderwagen & Buggys",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "Buggy", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "Kinderwagen (3 Räder)", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "Kinderwagen/Prams", slug: "landeaux" },
        { id: "travel-system", name: "Reisesysteme", slug: "travel-system" },
        { id: "accessoires-poussette", name: "Kinderwagen-Zubehör", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "Kinderwagen-Marken",
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
      name: "Kindersitze",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "Babyschale Gruppe 0", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "Kindersitz Gruppe 0/1", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "Kindersitz Gruppe 1/2/3", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "ISOFIX-Basen", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "Kindersitz-Marken",
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
      name: "Babybetten & Wiegen",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "Wiegen", slug: "berceaux" },
        { id: "lits-parapluie", name: "Reisebetten", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "Mitwachsende Betten", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "Baby-Matratzen", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "Marken Babybetten & Wiegen",
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
      name: "Hochstühle & Essen",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "Hochstühle", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "Sitzerhöhungen", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "Baby-Geschirr", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "Lätzchen", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "Hochstuhl-Marken",
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
      name: "Stillen & Flaschen",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "Milchpumpen", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "Stillkissen", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "Flaschen & Sauger", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "Flaschenwärmer", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "Sterilisatoren", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "Flaschen-Marken",
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
      name: "Pflege & Hygiene",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "Babywannen", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "Pflegesets", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "Baby-Thermometer", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Hautpflege", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "Marken Babypflege",
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
      name: "Windeln & Wickeln",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "Einwegwindeln", slug: "couches-jetables" },
        { id: "couches-lavables", name: "Stoffwindeln", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "Feuchttücher", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "Wickeltische", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "Wickelauflagen", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "Windel-Marken",
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
      name: "Babyspielzeug & Frühförderung",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "Spielmatten", slug: "tapis-eveil" },
        { id: "hochets", name: "Rasseln", slug: "hochets" },
        { id: "jouets-de-bain", name: "Badespielzeug", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "Mobile fürs Bett", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "Babybücher", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "Marken Babyspielzeug",
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
      name: "Babysicherheit",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "Sicherheitsgitter", slug: "barrieres-securite" },
        { id: "babyphones", name: "Babyphone", slug: "babyphones" },
        { id: "veilleuses", name: "Nachtlichter", slug: "veilleuses" },
        { id: "caches-prises", name: "Steckdosenschutz", slug: "caches-prises" },
        { id: "harnais-bebe", name: "Sicherheitsgurte", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "Babyphone-Marken",
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
      name: "Kinderzimmer & Deko",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "Bettwäsche-Sets Baby", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "Vorhänge Kinderzimmer", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "Lampen Kinderzimmer", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "Aufbewahrung Kinderzimmer", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "Wandsticker Baby", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "Tragen & Tücher",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "Tragetücher", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "Vorgeformte Tragen", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "Mei Tai", slug: "mei-tai" },
        { id: "slings", name: "Ringslings", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "Trage-Marken",
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
      name: "Wickeltaschen",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "Klassische Taschen", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "Wickelrucksäcke", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "Zubehör Wickeltasche", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "Kinderwagen-Organizer", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "Wickeltaschen-Marken",
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