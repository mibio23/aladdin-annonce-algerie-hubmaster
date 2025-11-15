import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureIt: MenuCategory = {
  id: "bebe-puericulture",
  name: "Bebè & Prima Infanzia",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "Abbigliamento neonato",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "Body e pigiami", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "Completi", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "Tutine", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "Sacchi nanna", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "Cappotti & tute invernali", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "Scarpe neonato",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "Scarpine neonato", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "Sandali", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "Sneakers", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "Stivaletti", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "Passeggini & carrozzine",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "Passeggini a ombrello", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "Passeggini a 3 ruote", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "Carrozzine", slug: "landeaux" },
        { id: "travel-system", name: "Travel system", slug: "travel-system" },
        { id: "accessoires-poussette", name: "Accessori passeggino", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "Marche passeggini",
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
      name: "Seggiolini auto",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "Ovetto gruppo 0", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "Seggiolini gruppo 0/1", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "Seggiolini gruppo 1/2/3", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "Basi ISOFIX", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "Marche seggiolini auto",
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
      name: "Culle & lettini",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "Culle", slug: "berceaux" },
        { id: "lits-parapluie", name: "Lettini da viaggio", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "Lettini evolutivi", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "Materassi bebé", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "Marche culle & lettini",
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
      name: "Seggioloni & pappa",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "Seggioloni", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "Alzasedia", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "Stoviglie bebé", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "Bavaglini", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "Marche seggioloni",
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
      name: "Allattamento & biberon",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "Tiralatte", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "Cuscino allattamento", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "Biberon e tettarelle", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "Scaldabiberon", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "Sterilizzatori", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "Marche biberon",
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
      name: "Cura & igiene",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "Vaschetta bebé", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "Kit cura", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "Termometri bebé", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "Cura della pelle", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "Marche cura bebé",
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
      name: "Pannolini & cambio",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "Pannolini usa e getta", slug: "couches-jetables" },
        { id: "couches-lavables", name: "Pannolini lavabili", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "Salviette", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "Fasciatoi", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "Materassini fasciatoio", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "Marche pannolini",
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
      name: "Giochi & primi apprendimenti",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "Tappeti attività", slug: "tapis-eveil" },
        { id: "hochets", name: "Sonagli", slug: "hochets" },
        { id: "jouets-de-bain", name: "Giochi da bagno", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "Giostrine per culla", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "Libri bebé", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "Marche giochi bebé",
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
      name: "Sicurezza bambino",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "Cancelletti sicurezza", slug: "barrieres-securite" },
        { id: "babyphones", name: "Baby monitor", slug: "babyphones" },
        { id: "veilleuses", name: "Luci notturne", slug: "veilleuses" },
        { id: "caches-prises", name: "Copriprese", slug: "caches-prises" },
        { id: "harnais-bebe", name: "Imbracature", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "Marche baby monitor",
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
      name: "Cameretta & decorazioni",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "Set biancheria culla", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "Tende cameretta bebé", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "Illuminazione cameretta", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "Contenitori/organizzazione", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "Adesivi murali bebé", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "Marsupi & fasce",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "Fasce portabebè", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "Marsupi preformati", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "Mei Tai", slug: "mei-tai" },
        { id: "slings", name: "Ring sling", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "Marche marsupi",
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
      name: "Borse fasciatoio",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "Borse classiche", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "Zaini fasciatoio", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "Accessori borsa fasciatoio", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "Organizer per passeggino", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "Marche borse fasciatoio",
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