import { MenuCategory } from "@/data/categoryTypes";
import { Baby } from "lucide-react";

export const bebePuericultureAr: MenuCategory = {
  id: "bebe-puericulture",
  name: "مستلزمات الأطفال والرضاعة",
  slug: "bebe-puericulture",
  icon: <Baby className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-bebe",
      name: "ملابس الرضع",
      slug: "vetements-bebe",
      subcategories: [
        { id: "bodies-pyjamas", name: "بودي وبيجامات", slug: "bodies-pyjamas" },
        { id: "ensembles-bebe", name: "طقم ملابس", slug: "ensembles-bebe" },
        { id: "grenouilleres", name: "أوفرولات", slug: "grenouilleres" },
        { id: "gigoteuses-turbulettes", name: "أكياس نوم للرضع", slug: "gigoteuses-turbulettes" },
        { id: "manteaux-combinaisons", name: "معاطف وبدلات شتوية", slug: "manteaux-combinaisons" }
      ]
    },
    {
      id: "chaussures-bebe",
      name: "أحذية الرضع",
      slug: "chaussures-bebe",
      subcategories: [
        { id: "chaussons-naissance", name: "أحذية لحديثي الولادة", slug: "chaussons-naissance" },
        { id: "sandales-bebe", name: "صنادل للرضع", slug: "sandales-bebe" },
        { id: "baskets-bebe", name: "أحذية رياضية للرضع", slug: "baskets-bebe" },
        { id: "bottines-bebe", name: "أحذية بوت للرضع", slug: "bottines-bebe" }
      ]
    },
    {
      id: "poussettes-landaus",
      name: "عربات الأطفال",
      slug: "poussettes-landaus",
      subcategories: [
        { id: "poussettes-canne", name: "عربات خفيفة (كان)", slug: "poussettes-canne" },
        { id: "poussettes-3-roues", name: "عربات ثلاثية العجلات", slug: "poussettes-3-roues" },
        { id: "landeaux", name: "لاندو", slug: "landeaux" },
        { id: "travel-system", name: "نظام السفر", slug: "travel-system" },
        { id: "accessoires-poussette", name: "إكسسوارات العربات", slug: "accessoires-poussette" },
        {
          id: "marques-poussettes",
          name: "علامات تجارية لعربات الأطفال",
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
      name: "مقاعد السيارة للأطفال",
      slug: "sieges-auto-bebe",
      subcategories: [
        { id: "cosy-groupe-0", name: "مقاعد مجموعة 0 (كوسي)", slug: "cosy-groupe-0" },
        { id: "siege-auto-groupe-0-1", name: "مقاعد سيارة مجموعة 0/1", slug: "siege-auto-groupe-0-1" },
        { id: "siege-auto-groupe-1-2-3", name: "مقاعد سيارة مجموعة 1/2/3", slug: "siege-auto-groupe-1-2-3" },
        { id: "bases-isofix", name: "حاملات ISOFIX", slug: "bases-isofix" },
        {
          id: "marques-sieges-auto",
          name: "علامات تجارية لمقاعد السيارة للأطفال",
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
      name: "أسرة ومهد",
      slug: "lits-berceaux-bebe",
      subcategories: [
        { id: "berceaux", name: "مهود", slug: "berceaux" },
        { id: "lits-parapluie", name: "أسرة قابلة للطي", slug: "lits-parapluie" },
        { id: "lits-evolutifs", name: "أسرة متحوّلة", slug: "lits-evolutifs" },
        { id: "matelas-bebe", name: "مراتب الرضع", slug: "matelas-bebe" },
        {
          id: "marques-lits-berceaux",
          name: "علامات تجارية للأسرة والمهد",
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
      name: "كراسي الطعام للأطفال",
      slug: "chaises-hautes-repas",
      subcategories: [
        { id: "chaises-hautes", name: "كراسي عالية", slug: "chaises-hautes" },
        { id: "rehausseurs", name: "أجهزة رفع مقعد", slug: "rehausseurs" },
        { id: "vaisselle-bebe", name: "أواني طعام للأطفال", slug: "vaisselle-bebe" },
        { id: "bavoirs", name: "مريلات", slug: "bavoirs" },
        {
          id: "marques-chaises-hautes",
          name: "علامات تجارية لكراسي الطعام",
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
      name: "الرضاعة والرضّاعات",
      slug: "allaitement-biberons",
      subcategories: [
        { id: "tire-lait", name: "شفاطات الحليب", slug: "tire-lait" },
        { id: "coussin-allaitement", name: "وسائد الرضاعة", slug: "coussin-allaitement" },
        { id: "biberons-tetines", name: "رضّاعات وحلمات", slug: "biberons-tetines" },
        { id: "chauffe-biberons", name: "مسخّنات الرضّاعات", slug: "chauffe-biberons" },
        { id: "sterilisation", name: "أجهزة التعقيم", slug: "sterilisation" },
        {
          id: "marques-biberons",
          name: "علامات تجارية للرضّاعات",
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
      name: "العناية والنظافة",
      slug: "soins-hygiene-bebe",
      subcategories: [
        { id: "baignoires-bebe", name: "أحواض استحمام للرضع", slug: "baignoires-bebe" },
        { id: "trousse-de-soin", name: "عدة العناية", slug: "trousse-de-soin" },
        { id: "thermometres-bebe", name: "مقاييس حرارة للرضع", slug: "thermometres-bebe" },
        { id: "soins-peau-bebe", name: "عناية ببشرة الرضيع", slug: "soins-peau-bebe" },
        {
          id: "marques-soins-bebe",
          name: "علامات تجارية لمنتجات العناية بالرضع",
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
      name: "حفاضات وتغيير",
      slug: "couches-toilette",
      subcategories: [
        { id: "couches-jetables", name: "حفاضات للاستخدام مرة واحدة", slug: "couches-jetables" },
        { id: "couches-lavables", name: "حفاضات قابلة للغسيل", slug: "couches-lavables" },
        { id: "lingettes-bebe", name: "مناديل مبللة للأطفال", slug: "lingettes-bebe" },
        { id: "tables-a-langer", name: "طاولات تغيير", slug: "tables-a-langer" },
        { id: "matelas-a-langer", name: "فرش تغيير", slug: "matelas-a-langer" },
        {
          id: "marques-couches",
          name: "علامات تجارية للحفاضات",
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
      name: "ألعاب الأطفال والتنمية",
      slug: "jouets-bebe-eveil",
      subcategories: [
        { id: "tapis-eveil", name: "بساط ألعاب", slug: "tapis-eveil" },
        { id: "hochets", name: "خشخيشات", slug: "hochets" },
        { id: "jouets-de-bain", name: "ألعاب الاستحمام", slug: "jouets-de-bain" },
        { id: "mobiles-lits", name: "معلقات السرير", slug: "mobiles-lits" },
        { id: "livres-bebe", name: "كتب للرضع", slug: "livres-bebe" },
        {
          id: "marques-jouets-bebe",
          name: "علامات تجارية لألعاب الرضع",
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
      name: "سلامة الطفل",
      slug: "securite-bebe",
      subcategories: [
        { id: "barrieres-securite", name: "حواجز أمان", slug: "barrieres-securite" },
        { id: "babyphones", name: "مراقب الطفل", slug: "babyphones" },
        { id: "veilleuses", name: "مصابيح ليلية", slug: "veilleuses" },
        { id: "caches-prises", name: "أغطية المقابس", slug: "caches-prises" },
        { id: "harnais-bebe", name: "أحزمة أمان", slug: "harnais-bebe" },
        {
          id: "marques-babyphones",
          name: "علامات تجارية لمراقبي الأطفال",
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
      name: "غرفة الطفل والديكور",
      slug: "chambre-bebe-deco",
      subcategories: [
        { id: "parures-lit-bebe", name: "أطقم سرير للرضع", slug: "parures-lit-bebe" },
        { id: "rideaux-chambre-bebe", name: "ستائر غرفة الطفل", slug: "rideaux-chambre-bebe" },
        { id: "luminaires-chambre-bebe", name: "إنارة غرفة الطفل", slug: "luminaires-chambre-bebe" },
        { id: "rangements-chambre-bebe", name: "تخزين غرفة الطفل", slug: "rangements-chambre-bebe" },
        { id: "stickers-muraux-bebe", name: "ملصقات جدارية للرضع", slug: "stickers-muraux-bebe" }
      ]
    },
    {
      id: "porte-bebes-echarpes",
      name: "حمّالات وأوشحة الأطفال",
      slug: "porte-bebes-echarpes",
      subcategories: [
        { id: "echarpes-de-portage", name: "أوشحة الحمل", slug: "echarpes-de-portage" },
        { id: "porte-bebes-preformes", name: "حمالات مُشكّلة مسبقًا", slug: "porte-bebes-preformes" },
        { id: "mei-tai", name: "ماي تاي", slug: "mei-tai" },
        { id: "slings", name: "حمالات حلقية", slug: "slings" },
        {
          id: "marques-porte-bebes",
          name: "علامات تجارية لحمالات الأطفال",
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
      name: "حقائب تغيير الأطفال",
      slug: "sacs-a-langer",
      subcategories: [
        { id: "sacs-classiques", name: "حقائب تقليدية", slug: "sacs-classiques" },
        { id: "sacs-a-dos-a-langer", name: "حقائب ظهر للتغيير", slug: "sacs-a-dos-a-langer" },
        { id: "accessoires-sac-a-langer", name: "إكسسوارات حقيبة تغيير", slug: "accessoires-sac-a-langer" },
        { id: "organiseurs-poussette", name: "منظّمات لعربة الأطفال", slug: "organiseurs-poussette" },
        {
          id: "marques-sacs-a-langer",
          name: "علامات تجارية لحقائب التغيير",
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