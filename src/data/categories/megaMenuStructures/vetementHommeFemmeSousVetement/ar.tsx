import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Shirt } from "lucide-react";

export const modeAccessoiresAr: MenuCategory = {
  id: "mode-accessoires",
  name: "ملابس رجالية ونسائية وملابس داخلية",
  slug: "mode-accessoires",
  icon: <Shirt className="w-4 h-4" />,
  subcategories: [
    {
      id: "vetements-homme",
      name: "ملابس رجالية",
      slug: "vetements-homme",
      subcategories: [
        {
          id: "t-shirts",
          name: "تيشيرتات",
          slug: "t-shirts",
          subcategories: [
            { id: "basiques", name: "أساسية", slug: "basiques" },
            { id: "imprimes", name: "مطبوعة", slug: "imprimes" },
            { id: "oversize", name: "واسعة", slug: "oversize" },
            { id: "techniques", name: "تقنية", slug: "techniques" }
          ]
        },
        {
          id: "polos",
          name: "بولو",
          slug: "polos",
          subcategories: [
            { id: "manches-courtes", name: "نصف كم", slug: "manches-courtes" },
            { id: "manches-longues", name: "أكمام طويلة", slug: "manches-longues" },
            { id: "sport", name: "رياضية", slug: "sport" }
          ]
        },
        {
          id: "chemises",
          name: "قمصان",
          slug: "chemises",
          subcategories: [
            { id: "classiques", name: "كلاسيكية", slug: "classiques" },
            { id: "slim", name: "ضيقة", slug: "slim" },
            { id: "decontractees", name: "كاجوال", slug: "decontractees" },
            { id: "carreaux", name: "مربعات", slug: "carreaux" },
            { id: "denim", name: "دينيم", slug: "denim" },
            { id: "habillees", name: "رسمية", slug: "habillees" }
          ]
        },
        {
          id: "pulls-gilets",
          name: "بلوفرات وكارديغان",
          slug: "pulls-gilets",
          subcategories: [
            { id: "maille-fine", name: "محبوك خفيف", slug: "maille-fine" },
            { id: "laine", name: "صوف", slug: "laine" },
            { id: "col-rond", name: "ياقة دائرية", slug: "col-rond" },
            { id: "col-v", name: "ياقة V", slug: "col-v" },
            { id: "col-roule", name: "ياقة عالية", slug: "col-roule" },
            { id: "cardigan", name: "كارديغان", slug: "cardigan" }
          ]
        },
        {
          id: "sweats-hoodies",
          name: "سويت شيرت وهودي",
          slug: "sweats-hoodies",
          subcategories: [
            { id: "a-capuche", name: "بقبعة", slug: "a-capuche" },
            { id: "zippes", name: "بسحاب", slug: "zippes" },
            { id: "oversize", name: "واسع", slug: "oversize" },
            { id: "sportifs", name: "رياضي", slug: "sportifs" }
          ]
        },
        { id: "debardeurs", name: "قمصان داخلية بلا أكمام", slug: "debardeurs" },
        {
          id: "jeans",
          name: "جينز",
          slug: "jeans",
          subcategories: [
            { id: "slim", name: "سليم", slug: "slim" },
            { id: "straight", name: "مستقيم", slug: "straight" },
            { id: "tapered", name: "مخروطي", slug: "tapered" },
            { id: "skinny", name: "سكيني", slug: "skinny" },
            { id: "bootcut", name: "بوت كات", slug: "bootcut" }
          ]
        },
        {
          id: "pantalons",
          name: "سراويل",
          slug: "pantalons",
          subcategories: [
            { id: "chino", name: "تشينو", slug: "chino" },
            { id: "costume", name: "بدلة", slug: "costume" },
            { id: "cargo", name: "كارغو", slug: "cargo" },
            { id: "jogging", name: "جينز رياضي", slug: "jogging" },
            { id: "urbain", name: "حضري", slug: "urbain" }
          ]
        },
        {
          id: "shorts",
          name: "شورتات",
          slug: "shorts",
          subcategories: [
            { id: "jeans", name: "دينيم", slug: "jeans" },
            { id: "sport", name: "رياضي", slug: "sport" },
            { id: "cargo", name: "كارغو", slug: "cargo" },
            { id: "bermudas", name: "برمودا", slug: "bermudas" }
          ]
        },
        { id: "survetements", name: "بدلات رياضية", slug: "survetements" },
        {
          id: "vestes-legeres",
          name: "سترات خفيفة",
          slug: "vestes-legeres",
          subcategories: [
            { id: "jean", name: "دينيم", slug: "jean" },
            { id: "cuir", name: "جلد", slug: "cuir" },
            { id: "bomber", name: "بومبر", slug: "bomber" },
            { id: "harrington", name: "هارينغتون", slug: "harrington" }
          ]
        },
        {
          id: "blousons",
          name: "جاكيتات",
          slug: "blousons",
          subcategories: [
            { id: "teddy", name: "جامعية", slug: "teddy" },
            { id: "pilote", name: "طيار", slug: "pilote" }
          ]
        },
        {
          id: "manteaux",
          name: "معاطف",
          slug: "manteaux",
          subcategories: [
            { id: "laine", name: "صوف", slug: "laine" },
            { id: "trench", name: "ترنش", slug: "trench" },
            { id: "pardessus", name: "معطف فوقي", slug: "pardessus" },
            { id: "doudounes", name: "منتفخة", slug: "doudounes" }
          ]
        },
        { id: "parkas-coupe-vent", name: "باركا & مضادة للرياح", slug: "parkas-coupe-vent" },
        { id: "vestes-de-travail", name: "سترات عمل", slug: "vestes-de-travail" },
        { id: "costumes-smokings", name: "بدلات & توكسيدو", slug: "costumes-smokings" },
        { id: "tenues-business", name: "أزياء عمل", slug: "tenues-business" },
        { id: "mode-urbaine", name: "موضة شارع", slug: "mode-urbaine" },
        { id: "sportwear", name: "ملابس رياضية", slug: "sportwear" },
        { id: "tenues-outdoor", name: "أزياء خارجية", slug: "tenues-outdoor" },
        {
          id: "vetements-traditionnels-homme",
          name: "ملابس تقليدية",
          slug: "vetements-traditionnels-homme",
          subcategories: [
            { id: "gandoura", name: "قندورة", slug: "gandoura" },
            { id: "qamis", name: "قميص (قميص)", slug: "qamis" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-homme",
      name: "علامات تجارية ملابس رجالية",
      slug: "marques-vetements-homme",
      subcategories: [
        { id: "nike", name: "Nike", slug: "nike" },
        { id: "adidas", name: "Adidas", slug: "adidas" },
        { id: "puma", name: "Puma", slug: "puma" },
        { id: "lacoste", name: "Lacoste", slug: "lacoste" },
        { id: "tommy-hilfiger", name: "Tommy Hilfiger", slug: "tommy-hilfiger" },
        { id: "calvin-klein", name: "Calvin Klein", slug: "calvin-klein" },
        { id: "levis", name: "Levi's", slug: "levis" },
        { id: "zara", name: "Zara", slug: "zara" },
        { id: "hm", name: "H&M", slug: "hm" },
        { id: "bershka", name: "Bershka", slug: "bershka" },
        { id: "pull-bear", name: "Pull&Bear", slug: "pull-bear" },
        { id: "uniqlo", name: "Uniqlo", slug: "uniqlo" },
        { id: "guess", name: "Guess", slug: "guess" },
        { id: "mango", name: "Mango", slug: "mango" }
      ]
    },
    {
      id: "accessoires-homme",
      name: "إكسسوارات رجالية",
      slug: "accessoires-homme",
      subcategories: [
        { id: "ceintures", name: "أحزمة", slug: "ceintures" },
        { id: "cravates-noeuds-papillon", name: "ربطات عنق & بابيون", slug: "cravates-noeuds-papillon" },
        { id: "chapeaux-casquettes", name: "قبعات & كاب", slug: "chapeaux-casquettes" },
        { id: "gants-echarpes", name: "قفازات & أوشحة", slug: "gants-echarpes" },
        { id: "lunettes-soleil", name: "نظارات شمس", slug: "lunettes-soleil" },
        { id: "montres", name: "ساعات", slug: "montres" },
        { id: "bijoux-homme", name: "مجوهرات رجالية", slug: "bijoux-homme" },
        { id: "portefeuilles", name: "محافظ", slug: "portefeuilles" },
        { id: "porte-cartes", name: "حامل بطاقات", slug: "porte-cartes" },
        { id: "sacoches-besaces", name: "حقائب كتف", slug: "sacoches-besaces" }
      ]
    },
    {
      id: "vetements-femme",
      name: "ملابس نسائية",
      slug: "vetements-femme",
      subcategories: [
        {
          id: "tops-t-shirts",
          name: "توبات & تيشيرتات",
          slug: "tops-t-shirts",
          subcategories: [
            { id: "basique", name: "أساسي", slug: "basique" },
            { id: "crop-top", name: "كروب توب", slug: "crop-top" },
            { id: "dentelle", name: "دانتيل", slug: "dentelle" }
          ]
        },
        {
          id: "chemisiers-blouses",
          name: "بلوزات & قمصان",
          slug: "chemisiers-blouses",
          subcategories: [
            { id: "habilles", name: "رسمية", slug: "habilles" },
            { id: "satin", name: "ساتان", slug: "satin" },
            { id: "oversize", name: "واسعة", slug: "oversize" },
            { id: "fleuris", name: "مزخرفة بالورود", slug: "fleuris" }
          ]
        },
        {
          id: "pulls-gilets-femme",
          name: "بلوفرات & كارديغان",
          slug: "pulls-gilets-femme",
          subcategories: [
            { id: "gros-tricot", name: "حياكة سميكة", slug: "gros-tricot" },
            { id: "cardigan", name: "كارديغان", slug: "cardigan" },
            { id: "col-roule", name: "ياقة عالية", slug: "col-roule" }
          ]
        },
        {
          id: "sweats-hoodies-femme",
          name: "سويت شيرت & هودي",
          slug: "sweats-hoodies-femme",
          subcategories: [
            { id: "unis", name: "سادة", slug: "unis" },
            { id: "imprimes", name: "مطبوعة", slug: "imprimes" },
            { id: "oversize", name: "واسعة", slug: "oversize" }
          ]
        },
        { id: "debardeurs-bustiers", name: "توبات داخلية & صدريات", slug: "debardeurs-bustiers" },
        {
          id: "robes",
          name: "فساتين",
          slug: "robes",
          subcategories: [
            { id: "courtes", name: "قصيرة", slug: "courtes" },
            { id: "midi", name: "ميدي", slug: "midi" },
            { id: "longues", name: "طويلة", slug: "longues" },
            { id: "soiree", name: "سهرة", slug: "soiree" },
            { id: "cocktail", name: "كوكتيل", slug: "cocktail" },
            { id: "moulantes", name: "ضيقة", slug: "moulantes" }
          ]
        },
        {
          id: "robes-evenements",
          name: "فساتين مناسبات",
          slug: "robes-evenements",
          subcategories: [
            { id: "mariage", name: "زفاف", slug: "mariage" },
            { id: "fetes", name: "حفلات", slug: "fetes" }
          ]
        },
        {
          id: "jupes",
          name: "تنانير",
          slug: "jupes",
          subcategories: [
            { id: "courtes", name: "قصيرة", slug: "courtes" },
            { id: "plissees", name: "مكسرة", slug: "plissees" },
            { id: "jeans", name: "دينيم", slug: "jeans" },
            { id: "crayon", name: "قلم", slug: "crayon" },
            { id: "longues", name: "طويلة", slug: "longues" }
          ]
        },
        {
          id: "jeans-femme",
          name: "جينز نسائي",
          slug: "jeans-femme",
          subcategories: [
            { id: "slim", name: "سليم", slug: "slim" },
            { id: "mom", name: "مام", slug: "mom" },
            { id: "flare", name: "فلير", slug: "flare" },
            { id: "boyfriend", name: "بوي فريند", slug: "boyfriend" },
            { id: "skinny", name: "سكيني", slug: "skinny" }
          ]
        },
        {
          id: "pantalons-femme",
          name: "سراويل",
          slug: "pantalons-femme",
          subcategories: [
            { id: "tailleur", name: "تاييلور", slug: "tailleur" },
            { id: "palazzo", name: "بالازو", slug: "palazzo" },
            { id: "cargo", name: "كارغو", slug: "cargo" },
            { id: "legging", name: "ليقنز", slug: "legging" },
            { id: "jogging", name: "جينز رياضي", slug: "jogging" }
          ]
        },
        { id: "collants-leggings-thermiques", name: "جوارب وليقنز حراري", slug: "collants-leggings-thermiques" },
        {
          id: "vestes-femme",
          name: "سترات",
          slug: "vestes-femme",
          subcategories: [
            { id: "blazer", name: "بليزر", slug: "blazer" },
            { id: "cuir", name: "جلد", slug: "cuir" },
            { id: "denim", name: "دينيم", slug: "denim" }
          ]
        },
        {
          id: "blousons-femme",
          name: "جاكيتات",
          slug: "blousons-femme",
          subcategories: [
            { id: "biker", name: "بايكر", slug: "biker" },
            { id: "bomber", name: "بومبر", slug: "bomber" }
          ]
        },
        {
          id: "manteaux-femme",
          name: "معاطف",
          slug: "manteaux-femme",
          subcategories: [
            { id: "laine", name: "صوف", slug: "laine" },
            { id: "trench", name: "ترنش", slug: "trench" },
            { id: "oversize", name: "واسعة", slug: "oversize" }
          ]
        },
        { id: "doudounes-femme", name: "معاطف منتفخة", slug: "doudounes-femme" },
        { id: "capes-ponchos", name: "كابات & بونشو", slug: "capes-ponchos" },
        { id: "mode-chic", name: "موضة راقية", slug: "mode-chic" },
        { id: "mode-streetwear", name: "موضة شارع", slug: "mode-streetwear" },
        {
          id: "sportwear-femme",
          name: "ملابس رياضية",
          slug: "sportwear-femme",
          subcategories: [
            { id: "yoga", name: "يوغا", slug: "yoga" },
            { id: "running", name: "جري", slug: "running" },
            { id: "fitness", name: "لياقة", slug: "fitness" }
          ]
        },
        { id: "beachwear", name: "ملابس شاطئية", slug: "beachwear" },
        {
          id: "mode-traditionnelle-femme",
          name: "موضة تقليدية",
          slug: "mode-traditionnelle-femme",
          subcategories: [
            { id: "abaya", name: "عباية", slug: "abaya" },
            { id: "caftan", name: "قفطان", slug: "caftan" },
            { id: "karakou", name: "كراكو", slug: "karakou" }
          ]
        }
      ]
    },
    {
      id: "marques-vetements-femme",
      name: "علامات تجارية ملابس نسائية",
      slug: "marques-vetements-femme",
      subcategories: [
        { id: "zara", name: "Zara", slug: "zara" },
        { id: "hm", name: "H&M", slug: "hm" },
        { id: "mango", name: "Mango", slug: "mango" },
        { id: "stradivarius", name: "Stradivarius", slug: "stradivarius" },
        { id: "bershka", name: "Bershka", slug: "bershka" },
        { id: "pull-bear", name: "Pull&Bear", slug: "pull-bear" },
        { id: "uniqlo", name: "Uniqlo", slug: "uniqlo" },
        { id: "guess", name: "Guess", slug: "guess" },
        { id: "calvin-klein", name: "Calvin Klein", slug: "calvin-klein" },
        { id: "tommy-hilfiger", name: "Tommy Hilfiger", slug: "tommy-hilfiger" },
        { id: "lacoste", name: "Lacoste", slug: "lacoste" },
        { id: "nike", name: "Nike", slug: "nike" },
        { id: "adidas", name: "Adidas", slug: "adidas" },
        { id: "puma", name: "Puma", slug: "puma" }
      ]
    },
    {
      id: "accessoires-femme",
      name: "إكسسوارات نسائية",
      slug: "accessoires-femme",
      subcategories: [
        { id: "sacs-main", name: "حقائب يد", slug: "sacs-main" },
        { id: "sacs-bandouliere", name: "حقائب كتف", slug: "sacs-bandouliere" },
        { id: "pochettes", name: "كلتش", slug: "pochettes" },
        { id: "porte-monnaie", name: "محافظ", slug: "porte-monnaie" },
        { id: "bijoux", name: "مجوهرات", slug: "bijoux" },
        { id: "ceintures", name: "أحزمة", slug: "ceintures" },
        { id: "foulards-echarpes", name: "أوشحة", slug: "foulards-echarpes" },
        { id: "accessoires-cheveux", name: "إكسسوارات شعر", slug: "accessoires-cheveux" },
        { id: "lunettes-soleil-femme", name: "نظارات شمس", slug: "lunettes-soleil-femme" },
        { id: "montres-femme", name: "ساعات", slug: "montres-femme" }
      ]
    },
    {
      id: "sous-vetements-homme",
      name: "ملابس داخلية رجالية",
      slug: "sous-vetements-homme",
      subcategories: [
        {
          id: "boxers",
          name: "بوكسر",
          slug: "boxers",
          subcategories: [
            { id: "coton", name: "قطن", slug: "coton" },
            { id: "microfibre", name: "ميكروفايبر", slug: "microfibre" },
            { id: "sport", name: "رياضي", slug: "sport" }
          ]
        },
        {
          id: "slips",
          name: "سليب",
          slug: "slips",
          subcategories: [
            { id: "classiques", name: "كلاسيكي", slug: "classiques" },
            { id: "taille-haute", name: "خصر عالٍ", slug: "taille-haute" },
            { id: "echancres", name: "قصة عالية", slug: "echancres" }
          ]
        },
        { id: "calecons", name: "سراويل داخلية", slug: "calecons" },
        { id: "debardeurs-sous-maillots-thermiques", name: "قمصان داخلية حرارية", slug: "debardeurs-sous-maillots-thermiques" }
      ]
    },
    {
      id: "lingerie-femme",
      name: "لانجري نسائي",
      slug: "lingerie-femme",
      subcategories: [
        {
          id: "soutiens-gorge",
          name: "حمالات صدر",
          slug: "soutiens-gorge",
          subcategories: [
            { id: "push-up", name: "دفع للأعلى", slug: "push-up" },
            { id: "maintien", name: "داعم", slug: "maintien" },
            { id: "balconnet", name: "بالكونيت", slug: "balconnet" },
            { id: "sans-armatures", name: "بدون سلك", slug: "sans-armatures" },
            { id: "sport", name: "رياضي", slug: "sport" }
          ]
        },
        {
          id: "culottes",
          name: "سراويل داخلية نسائية",
          slug: "culottes",
          subcategories: [
            { id: "classiques", name: "كلاسيكية", slug: "classiques" },
            { id: "tailles-hautes", name: "خصر عالٍ", slug: "tailles-hautes" },
            { id: "tanga", name: "تانغا", slug: "tanga" },
            { id: "string", name: "سترينغ", slug: "string" }
          ]
        },
        { id: "ensembles-lingerie", name: "طقم لانجري", slug: "ensembles-lingerie" },
        { id: "body-combinaisons", name: "بودي & جمبسوت", slug: "body-combinaisons" },
        { id: "guepieres", name: "كورسيه", slug: "guepieres" },
        { id: "lingerie-sculptante", name: "لانجري مشكل", slug: "lingerie-sculptante" },
        { id: "lingerie-sexy-dentelle", name: "لانجري دانتيل & مثير", slug: "lingerie-sexy-dentelle" }
      ]
    },
    {
      id: "nuit-interieur",
      name: "نوم & منزلي",
      slug: "nuit-interieur",
      subcategories: [
        { id: "pyjamas-homme-femme", name: "بيجامات للرجال والنساء", slug: "pyjamas-homme-femme" },
        { id: "nuisettes", name: "قمصان نوم", slug: "nuisettes" },
        { id: "deshabilles", name: "رداءات", slug: "deshabilles" },
        { id: "peignoirs", name: "أردية حمام", slug: "peignoirs" },
        { id: "robes-de-chambre", name: "أردية منزل", slug: "robes-de-chambre" },
        { id: "homewear", name: "ملابس منزلية", slug: "homewear" }
      ]
    },
    {
      id: "sous-vetements-techniques",
      name: "ملابس داخلية تقنية",
      slug: "sous-vetements-techniques",
      subcategories: [
        { id: "sous-vetements-thermiques", name: "حرارية", slug: "sous-vetements-thermiques" },
        { id: "sous-couches-sport", name: "طبقات أساسية رياضية", slug: "sous-couches-sport" },
        { id: "chaussettes-techniques-compression", name: "جوارب تقنية & ضغط", slug: "chaussettes-techniques-compression" }
      ]
    },
    {
      id: "chaussures-homme-femme",
      name: "أحذية (رجال & نساء)",
      slug: "chaussures-homme-femme",
      subcategories: [
        { id: "chaussures-habillees", name: "أحذية رسمية", slug: "chaussures-habillees" },
        { id: "mocassins", name: "لوفر", slug: "mocassins" },
        { id: "chaussures-de-ville", name: "أحذية مدينة", slug: "chaussures-de-ville" },
        {
          id: "baskets",
          name: "أحذية رياضية",
          slug: "baskets",
          subcategories: [
            { id: "mode", name: "ستايل", slug: "mode" },
            { id: "running", name: "جري", slug: "running" },
            { id: "training", name: "تدريب", slug: "training" }
          ]
        },
        { id: "sandales-tongs", name: "صنادل & شباشب", slug: "sandales-tongs" },
        { id: "bottes-bottines", name: "أحذية طويلة & بوت قصير", slug: "bottes-bottines" },
        { id: "escarpins", name: "كعب عالٍ", slug: "escarpins" },
        { id: "ballerines", name: "باليرينا", slug: "ballerines" },
        { id: "chaussures-de-sport", name: "أحذية رياضية", slug: "chaussures-de-sport" },
        { id: "chaussures-de-travail-securite", name: "أحذية عمل & أمان", slug: "chaussures-de-travail-securite" },
        { id: "chaussures-orthopediques-femme", name: "أحذية نسائية طبية", slug: "chaussures-orthopediques-femme" }
      ]
    },
    {
      id: "mode-saisonniere",
      name: "موضة موسمية",
      slug: "mode-saisonniere",
      subcategories: [
        {
          id: "vetements-ete",
          name: "ملابس صيفية",
          slug: "vetements-ete",
          subcategories: [
            { id: "shorts", name: "شورتات", slug: "shorts" },
            { id: "debardeurs", name: "قمصان بلا أكمام", slug: "debardeurs" },
            { id: "robes-legeres", name: "فساتين خفيفة", slug: "robes-legeres" },
            { id: "maillots-de-bain", name: "ملابس سباحة", slug: "maillots-de-bain" },
            { id: "pareos", name: "باريو", slug: "pareos" }
          ]
        },
        {
          id: "vetements-hiver",
          name: "ملابس شتوية",
          slug: "vetements-hiver",
          subcategories: [
            { id: "doudounes", name: "منتفخة", slug: "doudounes" },
            { id: "parkas", name: "باركا", slug: "parkas" },
            { id: "manteaux-laine", name: "معاطف صوف", slug: "manteaux-laine" },
            { id: "pulls-epais", name: "بلوفرات سميكة", slug: "pulls-epais" },
            { id: "gants", name: "قفازات", slug: "gants" },
            { id: "bonnets", name: "قبعات", slug: "bonnets" }
          ]
        },
        {
          id: "pluie-exterieur",
          name: "مطر & خارج المنزل",
          slug: "pluie-exterieur",
          subcategories: [
            { id: "impermeables", name: "معاطف مطر", slug: "impermeables" },
            { id: "coupe-vent", name: "مضادة للرياح", slug: "coupe-vent" },
            { id: "ponchos", name: "بونشو", slug: "ponchos" },
            { id: "bottes-pluie", name: "أحذية مطر", slug: "bottes-pluie" }
          ]
        }
      ]
    }
  ]
};