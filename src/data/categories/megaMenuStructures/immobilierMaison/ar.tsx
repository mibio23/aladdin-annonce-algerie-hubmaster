import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Home } from "lucide-react";

export const immobilierMaisonAr: MenuCategory = {
  id: "immobilier-maison",
  name: "العقارات والمنزل",
  slug: "immobilier-maison",
  icon: <Home className="w-4 h-4" />,
  subcategories: [
    {
      id: "ventes-immobilieres",
      name: "مبيعات العقارات",
      slug: "ventes-immobilieres",
      subcategories: [
        { id: "appartements-a-vendre", name: "شقق للبيع", slug: "appartements-a-vendre" },
        { id: "studios", name: "استوديوهات", slug: "studios" },
        { id: "f2", name: "F2", slug: "f2" },
        { id: "f3", name: "F3", slug: "f3" },
        { id: "f4", name: "F4", slug: "f4" },
        { id: "f5-plus", name: "F5+", slug: "f5-plus" },
        { id: "appartements-neufs", name: "شقق جديدة", slug: "appartements-neufs" },
        { id: "appartements-promotion-immobiliere", name: "شقق ترويج عقاري", slug: "appartements-promotion-immobiliere" },
        { id: "maisons-a-vendre", name: "منازل للبيع", slug: "maisons-a-vendre" },
        { id: "villas", name: "فلل", slug: "villas" },
        { id: "duplex", name: "ديوبلكس", slug: "duplex" },
        { id: "triplex", name: "تريبلكس", slug: "triplex" },
        { id: "maisons-plain-pied", name: "منازل بطابق واحد", slug: "maisons-plain-pied" },
        { id: "fermes-proprietes-rurales", name: "مزارع وعقارات ريفية", slug: "fermes-proprietes-rurales" },
        { id: "terrains-constructibles", name: "أراضٍ قابلة للبناء", slug: "terrains-constructibles" },
        { id: "terrains-agricoles", name: "أراضٍ زراعية", slug: "terrains-agricoles" },
        { id: "locaux-commerciaux", name: "محلات تجارية", slug: "locaux-commerciaux" },
        { id: "bureaux", name: "مكاتب", slug: "bureaux" },
        { id: "immeubles", name: "عمارات", slug: "immeubles" },
        { id: "garages-a-vendre", name: "كراجات للبيع", slug: "garages-a-vendre" }
      ]
    },
    {
      id: "locations-immobilieres",
      name: "إيجارات العقارات",
      slug: "locations-immobilieres",
      subcategories: [
        { id: "appartements-en-location", name: "شقق للإيجار", slug: "appartements-en-location" },
        { id: "studios-location", name: "استوديوهات", slug: "studios" },
        { id: "f2-location", name: "F2", slug: "f2" },
        { id: "f3-location", name: "F3", slug: "f3" },
        { id: "f4-location", name: "F4", slug: "f4" },
        { id: "maisons-en-location", name: "منازل للإيجار", slug: "maisons-en-location" },
        { id: "villas-location", name: "فلل", slug: "villas" },
        { id: "duplex-location", name: "ديوبلكس", slug: "duplex" },
        { id: "triplex-location", name: "تريبلكس", slug: "triplex" },
        { id: "chambres-en-location", name: "غرف للإيجار", slug: "chambres-en-location" },
        { id: "colocation", name: "سكن مشترك", slug: "colocation" },
        { id: "locations-meublees", name: "إيجارات مفروشة", slug: "locations-meublees" },
        { id: "locations-non-meublees", name: "إيجارات غير مفروشة", slug: "locations-non-meublees" },
        { id: "locations-saisonnieres", name: "إيجارات موسمية", slug: "locations-saisonnieres" },
        { id: "locations-vacances", name: "إيجارات عطلات", slug: "locations-vacances" },
        { id: "bureaux-a-louer", name: "مكاتب للإيجار", slug: "bureaux-a-louer" },
        { id: "locaux-commerciaux-a-louer", name: "محلات تجارية للإيجار", slug: "locaux-commerciaux-a-louer" },
        { id: "garages-parkings-a-louer", name: "كراجات ومواقف للإيجار", slug: "garages-parkings-a-louer" }
      ]
    },
    {
      id: "immobilier-professionnel",
      name: "عقار مهني",
      slug: "immobilier-professionnel",
      subcategories: [
        { id: "entrepots", name: "مستودعات", slug: "entrepots" },
        { id: "hangars", name: "هنغارات", slug: "hangars" },
        { id: "locaux-industriels", name: "محلات صناعية", slug: "locaux-industriels" },
        { id: "ateliers", name: "ورش", slug: "ateliers" },
        { id: "zones-logistiques", name: "مناطق لوجستية", slug: "zones-logistiques" },
        { id: "bureaux-professionnels", name: "مكاتب مهنية", slug: "bureaux-professionnels" },
        { id: "open-spaces", name: "مساحات مفتوحة", slug: "open-spaces" },
        { id: "magasins", name: "متاجر", slug: "magasins" },
        { id: "restaurants-cafes", name: "مطاعم ومقاهي", slug: "restaurants-cafes" },
        { id: "pharmacies", name: "صيدليات", slug: "pharmacies" },
        { id: "cabinets-medicaux", name: "عيادات طبية", slug: "cabinets-medicaux" }
      ]
    },
    {
      id: "investissement-immobilier",
      name: "استثمار عقاري",
      slug: "investissement-immobilier",
      subcategories: [
        { id: "programmes-neufs", name: "برامج جديدة", slug: "programmes-neufs" },
        { id: "logements-promotionnels", name: "سكن ترويجي", slug: "logements-promotionnels" },
        { id: "immobiliers-lpp", name: "عقارات LPP", slug: "immobiliers-lpp" },
        { id: "logements-sociaux", name: "سكن اجتماعي", slug: "logements-sociaux" },
        { id: "residences-etudiantes", name: "إقامات طلابية", slug: "residences-etudiantes" },
        { id: "residences-seniors", name: "إقامات لكبار السن", slug: "residences-seniors" },
        { id: "biens-locatifs", name: "عقارات للإيجار", slug: "biens-locatifs" },
        { id: "immeubles-de-rapport", name: "عمارات دخل", slug: "immeubles-de-rapport" },
        { id: "terrains-promotionnels", name: "أراضٍ ترويجية", slug: "terrains-promotionnels" }
      ]
    },
    {
      id: "maison-mobilier-interieur",
      name: "المنزل والأثاث الداخلي",
      slug: "maison-mobilier-interieur",
      subcategories: [
        { id: "salons-canapes", name: "صالات وجلوس", slug: "salons-canapes" },
        { id: "tables-chaises", name: "طاولات وكراسي", slug: "tables-chaises" },
        { id: "armoires", name: "خزائن", slug: "armoires" },
        { id: "dressings", name: "غرف تبديل الملابس", slug: "dressings" },
        { id: "lits-matelas", name: "أسرة ومراتب", slug: "lits-matelas" },
        { id: "meubles-tv", name: "أثاث التلفاز", slug: "meubles-tv" },
        { id: "buffets-commodes", name: "بوفيهات وكمود", slug: "buffets-commodes" },
        { id: "bibliotheques", name: "مكتبات", slug: "bibliotheques" },
        { id: "meubles-enfants", name: "أثاث الأطفال", slug: "meubles-enfants" },
        { id: "petits-meubles", name: "أثاث صغير", slug: "petits-meubles" },
        { id: "rangements", name: "تخزين وتنظيم", slug: "rangements" }
      ]
    },
    {
      id: "decoration-accessoires-maison",
      name: "ديكور وإكسسوارات المنزل",
      slug: "decoration-accessoires-maison",
      subcategories: [
        { id: "tapis", name: "سجاد", slug: "tapis" },
        { id: "rideaux-voilages", name: "ستائر وحواجز", slug: "rideaux-voilages" },
        { id: "luminaires", name: "إضاءة", slug: "luminaires" },
        { id: "cadres-tableaux", name: "إطارات ولوحات", slug: "cadres-tableaux" },
        { id: "miroirs", name: "مرايا", slug: "miroirs" },
        { id: "horloges", name: "ساعات", slug: "horloges" },
        { id: "accessoires-decoratifs", name: "إكسسوارات ديكور", slug: "accessoires-decoratifs" },
        { id: "stickers-muraux", name: "ملصقات جدارية", slug: "stickers-muraux" },
        { id: "coussins-textiles", name: "وسائد ومنسوجات", slug: "coussins-textiles" },
        { id: "vases-decor-floral", name: "مزهريات وديكور زهري", slug: "vases-decor-floral" }
      ]
    },
    {
      id: "cuisine-salle-de-bain",
      name: "المطبخ والحمام",
      slug: "cuisine-salle-de-bain",
      subcategories: [
        { id: "ustensiles-de-cuisine", name: "أدوات المطبخ", slug: "ustensiles-de-cuisine" },
        { id: "casseroles-poeles", name: "قدور ومقالي", slug: "casseroles-poeles" },
        { id: "vaisselle", name: "أواني", slug: "vaisselle" },
        { id: "couverts", name: "أدوات المائدة", slug: "couverts" },
        { id: "robots-de-cuisine", name: "أجهزة المطبخ", slug: "robots-de-cuisine" },
        { id: "plaques-fours", name: "مواقد وأفران", slug: "plaques-fours" },
        { id: "equipements-sanitaires", name: "معدات صحية", slug: "equipements-sanitaires" },
        { id: "baignoires", name: "أحواض استحمام", slug: "baignoires" },
        { id: "douches", name: "دش", slug: "douches" },
        { id: "lavabos", name: "مغاسل", slug: "lavabos" },
        { id: "robinetterie", name: "خلاطات ومحابس", slug: "robinetterie" },
        { id: "meubles-de-salle-de-bain", name: "أثاث الحمام", slug: "meubles-de-salle-de-bain" }
      ]
    },
    {
      id: "jardin-exterieur",
      name: "الحديقة والخارج",
      slug: "jardin-exterieur",
      subcategories: [
        { id: "mobilier-de-jardin", name: "أثاث الحديقة", slug: "mobilier-de-jardin" },
        { id: "salons-exterieurs", name: "جلسات خارجية", slug: "salons-exterieurs" },
        { id: "parasols", name: "مظلات", slug: "parasols" },
        { id: "barbecues", name: "شوايات", slug: "barbecues" },
        { id: "tondeuses", name: "جزازات عشب", slug: "tondeuses" },
        { id: "debroussailleuses", name: "مزيلات أعشاب", slug: "debroussailleuses" },
        { id: "tronconneuses", name: "مناشير", slug: "tronconneuses" },
        { id: "outils-de-jardinage", name: "أدوات البستنة", slug: "outils-de-jardinage" },
        { id: "pots-jardinieres", name: "أصص وزروع", slug: "pots-jardinieres" },
        { id: "serres", name: "بيوت زجاجية", slug: "serres" },
        { id: "piscines-accessoires", name: "مسابح وإكسسوارات", slug: "piscines-accessoires" },
        { id: "eclairage-exterieur", name: "إضاءة خارجية", slug: "eclairage-exterieur" }
      ]
    },
    {
      id: "bricolage-amelioration-maison",
      name: "أعمال منزلية وتحسين المسكن",
      slug: "bricolage-amelioration-maison",
      subcategories: [
        { id: "outils-electroportatifs", name: "أدوات كهربائية (مثاقب، مفكات، جلاخات)", slug: "outils-electroportatifs" },
        { id: "outils-a-main", name: "أدوات يدوية", slug: "outils-a-main" },
        { id: "peinture", name: "دهان", slug: "peinture" },
        { id: "revetements-murs-sols", name: "كسوة الجدران والأرضيات", slug: "revetements-murs-sols" },
        { id: "parquet", name: "باركيه", slug: "parquet" },
        { id: "carrelage", name: "بلاط", slug: "carrelage" },
        { id: "plomberie", name: "سباكة", slug: "plomberie" },
        { id: "electricite", name: "كهرباء", slug: "electricite" },
        { id: "isolation", name: "عزل", slug: "isolation" },
        { id: "materiaux-de-construction", name: "مواد البناء", slug: "materiaux-de-construction" },
        { id: "portes-fenetres", name: "أبواب ونوافذ", slug: "portes-fenetres" }
      ]
    },
    {
      id: "securite-maison",
      name: "أمن المنزل",
      slug: "securite-maison",
      subcategories: [
        { id: "cameras-de-surveillance", name: "كاميرات مراقبة", slug: "cameras-de-surveillance" },
        { id: "alarmes-connectees", name: "إنذارات متصلة", slug: "alarmes-connectees" },
        { id: "detecteurs-de-fumee", name: "كاشفات دخان", slug: "detecteurs-de-fumee" },
        { id: "serrures-cadenas", name: "أقفال وسلاسل", slug: "serrures-cadenas" },
        { id: "portails-automatiques", name: "بوابات آلية", slug: "portails-automatiques" },
        { id: "visiophones", name: "أنظمة اتصال مرئي", slug: "visiophones" },
        { id: "coffres-forts", name: "خزائن آمنة", slug: "coffres-forts" }
      ]
    },
    {
      id: "services-maison-immobilier",
      name: "خدمات المنزل والعقار",
      slug: "services-maison-immobilier",
      subcategories: [
        { id: "agences-immobilieres", name: "وكالات عقارية", slug: "agences-immobilieres" },
        { id: "services-architecture", name: "خدمات الهندسة المعمارية", slug: "services-architecture" },
        { id: "artisans-plomberie-electricite-peinture", name: "حرفيون (سباكة، كهرباء، طلاء)", slug: "artisans-plomberie-electricite-peinture" },
        { id: "demenagement", name: "نقل", slug: "demenagement" },
        { id: "nettoyage", name: "تنظيف", slug: "nettoyage" },
        { id: "entretien-jardin", name: "صيانة الحدائق", slug: "entretien-jardin" },
        { id: "renovation", name: "ترميم", slug: "renovation" },
        { id: "gestion-locative", name: "إدارة الإيجارات", slug: "gestion-locative" },
        { id: "diagnostics-immobiliers", name: "تشخيصات عقارية", slug: "diagnostics-immobiliers" }
      ]
    },
    {
      id: "marques-materiel-populaire",
      name: "ماركات ومعدات شائعة",
      slug: "marques-materiel-populaire",
      subcategories: [
        { id: "ikea", name: "Ikea", slug: "ikea" },
        { id: "samsung-home", name: "Samsung Home", slug: "samsung-home" },
        { id: "lg", name: "LG", slug: "lg" },
        { id: "bosch", name: "Bosch", slug: "bosch" },
        { id: "beko", name: "Beko", slug: "beko" },
        { id: "whirlpool", name: "Whirlpool", slug: "whirlpool" },
        { id: "philips-lighting", name: "Philips Lighting", slug: "philips-lighting" },
        { id: "schneider-electric", name: "Schneider Electric", slug: "schneider-electric" },
        { id: "karcher", name: "Kärcher", slug: "karcher" },
        { id: "ariston", name: "Ariston", slug: "ariston" },
        { id: "moulinex", name: "Moulinex", slug: "moulinex" },
        { id: "tefal", name: "Tefal", slug: "tefal" },
        { id: "jaga", name: "Jaga", slug: "jaga" },
        { id: "daikin", name: "Daikin", slug: "daikin" },
        { id: "hitachi", name: "Hitachi", slug: "hitachi" }
      ]
    }
  ]
};