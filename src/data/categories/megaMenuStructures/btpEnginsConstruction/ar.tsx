import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Construction } from "lucide-react";

export const btpEnginsConstructionAr: MenuCategory = {
  id: "btp-engins-construction",
  name: "البناء، الآليات والإنشاءات",
  slug: "btp-engins-construction",
  icon: <Construction className="w-4 h-4" />,
  subcategories: [
    {
      id: "engins-de-chantier",
      name: "معدات وآليات البناء",
      slug: "engins-de-chantier",
      subcategories: [
        { id: "pelles-hydrauliques", name: "حفارات هيدروليكية", slug: "pelles-hydrauliques" },
        { id: "mini-pelles", name: "حفارات صغيرة", slug: "mini-pelles" },
        { id: "chargeuses", name: "جرافات", slug: "chargeuses" },
        { id: "bulldozers", name: "بلدوزرات", slug: "bulldozers" },
        { id: "niveleuses", name: "ممهدات طرق", slug: "niveleuses" },
        { id: "tractopelles", name: "لودر حفار", slug: "tractopelles" },
        { id: "compacteurs", name: "مدحلات", slug: "compacteurs" },
        { id: "rouleaux-compresseurs", name: "مداحل أسطوانية", slug: "rouleaux-compresseurs" },
        { id: "dumpers", name: "دامبرات", slug: "dumpers" },
        { id: "camions-bennes", name: "شاحنات قلابة", slug: "camions-bennes" },
        { id: "grues-mobiles", name: "رافعات متنقلة", slug: "grues-mobiles" },
        { id: "grues-a-tour", name: "رافعات برجية", slug: "grues-a-tour" },
        { id: "chariots-telescopiques", name: "مناولات تلسكوبية", slug: "chariots-telescopiques" },
        { id: "nacelles-elevatrices", name: "منصات رفع", slug: "nacelles-elevatrices" },
        { id: "foreuses", name: "معدات حفر", slug: "foreuses" },
        { id: "retrochargeuses", name: "لودر حفار", slug: "retrochargeuses" }
      ]
    },
    {
      id: "vehicules-transport-materiaux",
      name: "مركبات ونقل المواد",
      slug: "vehicules-transport-materiaux",
      subcategories: [
        { id: "camions-de-chantier", name: "شاحنات موقع البناء", slug: "camions-de-chantier" },
        { id: "camions-malaxeurs-toupies-beton", name: "شاحنات خلاط خرسانة", slug: "camions-malaxeurs-toupies-beton" },
        { id: "camions-porte-engins", name: "شاحنات ناقلة معدات", slug: "camions-porte-engins" },
        { id: "remorques-de-chantier", name: "مقطورات الموقع", slug: "remorques-de-chantier" },
        { id: "vehicules-utilitaires", name: "مركبات تجارية", slug: "vehicules-utilitaires" },
        { id: "pick-ups", name: "بيك أب", slug: "pick-ups" },
        { id: "fourgons", name: "فانات", slug: "fourgons" }
      ]
    },
    {
      id: "materiel-de-construction",
      name: "معدات البناء",
      slug: "materiel-de-construction",
      subcategories: [
        { id: "betonnieres", name: "خلاطات خرسانة", slug: "betonnieres" },
        { id: "vibrateurs-beton", name: "هزازات الخرسانة", slug: "vibrateurs-beton" },
        { id: "pompes-a-beton", name: "مضخات الخرسانة", slug: "pompes-a-beton" },
        { id: "coffrages", name: "قوالب صب", slug: "coffrages" },
        { id: "etais", name: "دعامات", slug: "etais" },
        { id: "echafaudages", name: "سقالات", slug: "echafaudages" },
        { id: "echelles", name: "سلالم", slug: "echelles" },
        { id: "outils-pneumatiques", name: "أدوات هوائية", slug: "outils-pneumatiques" },
        { id: "marteaux-piqueurs", name: "مطارق هدم", slug: "marteaux-piqueurs" },
        { id: "scies-de-chantier", name: "مناشير موقع البناء", slug: "scies-de-chantier" },
        { id: "groupes-electrogenes", name: "مولدات كهرباء", slug: "groupes-electrogenes" },
        { id: "compresseurs", name: "ضواغط", slug: "compresseurs" },
        { id: "lasers-niveaux", name: "أجهزة ليزر ومستويات", slug: "lasers-niveaux" }
      ]
    },
    {
      id: "materiaux-de-construction",
      name: "مواد البناء",
      slug: "materiaux-de-construction",
      subcategories: [
        { id: "ciment", name: "أسمنت", slug: "ciment" },
        { id: "beton-pret-a-lemploi", name: "خرسانة جاهزة", slug: "beton-pret-a-lemploi" },
        { id: "sable-gravier", name: "رمل وحصى", slug: "sable-gravier" },
        { id: "briques-blocs", name: "طوب وبلوكات", slug: "briques-blocs" },
        { id: "parpaings", name: "بلوك خرسانة", slug: "parpaings" },
        { id: "pierres-naturelles", name: "حجر طبيعي", slug: "pierres-naturelles" },
        { id: "bois-de-construction", name: "خشب بناء", slug: "bois-de-construction" },
        { id: "tuiles-toitures", name: "قرميد وأسقف", slug: "tuiles-toitures" },
        { id: "plaques-de-platre", name: "ألواح جبس", slug: "plaques-de-platre" },
        { id: "isolants", name: "مواد عازلة", slug: "isolants" },
        { id: "peintures-enduits", name: "دهانات وطلاءات", slug: "peintures-enduits" },
        { id: "revetements-sols-murs", name: "أرضيات وكسوات جدران", slug: "revetements-sols-murs" }
      ]
    },
    {
      id: "quincaillerie-fixations",
      name: "العدد والمثبتات",
      slug: "quincaillerie-fixations",
      subcategories: [
        { id: "vis-boulons", name: "مسامير وصواميل", slug: "vis-boulons" },
        { id: "chevilles", name: "مراسي تثبيت", slug: "chevilles" },
        { id: "clous", name: "مسامير", slug: "clous" },
        { id: "equerres", name: "زوايا تثبيت", slug: "equerres" },
        { id: "charniere", name: "مفصلات", slug: "charniere" },
        { id: "serrures", name: "أقفال", slug: "serrures" },
        { id: "cadenas", name: "أقفال معلّقة", slug: "cadenas" },
        { id: "colles-mastics", name: "مواد لاصقة ومانعات تسرب", slug: "colles-mastics" },
        { id: "rubans-adhesifs", name: "أشرطة لاصقة", slug: "rubans-adhesifs" },
        { id: "joints-silicone", name: "حشوات وسيليكون", slug: "joints-silicone" }
      ]
    },
    {
      id: "equipements-electriques-plomberie",
      name: "كهرباء وسباكة",
      slug: "equipements-electriques-plomberie",
      subcategories: [
        { id: "cables-electriques", name: "كابلات كهربائية", slug: "cables-electriques" },
        { id: "interrupteurs-prises", name: "مفاتيح ومقابس", slug: "interrupteurs-prises" },
        { id: "disjoncteurs", name: "قواطع كهربائية", slug: "disjoncteurs" },
        { id: "tableaux-electriques", name: "لوحات كهربائية", slug: "tableaux-electriques" },
        { id: "eclairage-chantier", name: "إنارة موقع البناء", slug: "eclairage-chantier" },
        { id: "tuyaux-raccords", name: "أنابيب ووصلات", slug: "tuyaux-raccords" },
        { id: "robinets", name: "صنابير", slug: "robinets" },
        { id: "compteurs-eau", name: "عدادات مياه", slug: "compteurs-eau" },
        { id: "pompes", name: "مضخات", slug: "pompes" },
        { id: "chauffe-eau", name: "سخانات مياه", slug: "chauffe-eau" },
        { id: "sanitaires", name: "مرافق صحية", slug: "sanitaires" }
      ]
    },
    {
      id: "outils-equipements-professionnels",
      name: "أدوات ومعدات مهنية",
      slug: "outils-equipements-professionnels",
      subcategories: [
        { id: "outils-manuels", name: "أدوات يدوية (مطارق، مفاتيح، مفكات، مستويات)", slug: "outils-manuels" },
        { id: "outils-de-mesure", name: "أدوات قياس", slug: "outils-de-mesure" },
        { id: "mallettes-coffrets", name: "حقائب وصناديق أدوات", slug: "mallettes-coffrets" },
        { id: "outils-diamantes", name: "أدوات ماسيّة", slug: "outils-diamantes" },
        { id: "meuleuses", name: "جلاخات", slug: "meuleuses" },
        { id: "perforateurs", name: "مطارق دوارة", slug: "perforateurs" },
        { id: "perceuses", name: "مثاقب", slug: "perceuses" },
        { id: "scies-circulaires", name: "مناشير دائرية", slug: "scies-circulaires" },
        { id: "ponceuses", name: "أجهزة صنفرة", slug: "ponceuses" },
        { id: "lasers-rotatifs", name: "ليزر دوّار", slug: "lasers-rotatifs" }
      ]
    },
    {
      id: "securite-protection",
      name: "السلامة ومعدات الوقاية",
      slug: "securite-protection",
      subcategories: [
        { id: "casques-de-chantier", name: "خوذات أمان", slug: "casques-de-chantier" },
        { id: "gilets-haute-visibilite", name: "سترات عالية الرؤية", slug: "gilets-haute-visibilite" },
        { id: "chaussures-de-securite", name: "أحذية أمان", slug: "chaussures-de-securite" },
        { id: "gants-de-protection", name: "قفازات حماية", slug: "gants-de-protection" },
        { id: "lunettes", name: "نظارات واقية", slug: "lunettes" },
        { id: "masques-anti-poussiere", name: "أقنعة مضادة للغبار", slug: "masques-anti-poussiere" },
        { id: "harnais-de-securite", name: "أحزمة أمان", slug: "harnais-de-securite" },
        { id: "filets-de-protection", name: "شبكات أمان", slug: "filets-de-protection" },
        { id: "barrieres-de-chantier", name: "حواجز موقع البناء", slug: "barrieres-de-chantier" }
      ]
    },
    {
      id: "construction-modulaire-structures",
      name: "إنشاءات معيارية وهياكل",
      slug: "construction-modulaire-structures",
      subcategories: [
        { id: "bungalows-bases-vie", name: "مساكن موقع", slug: "bungalows-bases-vie" },
        { id: "conteneurs-amenages", name: "حاويات مجهّزة", slug: "conteneurs-amenages" },
        { id: "cabanes-abris", name: "أكواخ وملاجئ", slug: "cabanes-abris" },
        { id: "hangars-metalliques", name: "مستودعات معدنية", slug: "hangars-metalliques" },
        { id: "structures-prefabriquees", name: "هياكل مسبقة الصنع", slug: "structures-prefabriquees" },
        { id: "serres-couvertures-industrielles", name: "بيوت زجاجية وأغطية صناعية", slug: "serres-couvertures-industrielles" }
      ]
    },
    {
      id: "location-materiel-btp",
      name: "تأجير معدات البناء",
      slug: "location-materiel-btp",
      subcategories: [
        { id: "location-d-engins", name: "تأجير الآليات (حفارات، منصات، شاحنات)", slug: "location-d-engins" },
        { id: "location-d-outillage", name: "تأجير الأدوات", slug: "location-d-outillage" },
        { id: "location-coffrage-echafaudage", name: "تأجير القوالب والسقالات", slug: "location-coffrage-echafaudage" },
        { id: "location-groupes-electrogenes", name: "تأجير المولدات", slug: "location-groupes-electrogenes" },
        { id: "location-bungalows", name: "تأجير مساكن الموقع", slug: "location-bungalows" }
      ]
    },
    {
      id: "services-lies-au-btp",
      name: "خدمات البناء",
      slug: "services-lies-au-btp",
      subcategories: [
        { id: "travaux-publics", name: "أشغال عامة", slug: "travaux-publics" },
        { id: "terrassement", name: "أعمال حفر وردم", slug: "terrassement" },
        { id: "demolition", name: "هدم", slug: "demolition" },
        { id: "maconnerie", name: "أعمال بناء", slug: "maconnerie" },
        { id: "plomberie", name: "سباكة", slug: "plomberie" },
        { id: "electricite", name: "كهرباء", slug: "electricite" },
        { id: "menuiserie", name: "نجارة", slug: "menuiserie" },
        { id: "charpente", name: "هياكل خشبية", slug: "charpente" },
        { id: "peinture-finition", name: "دهان & تشطيب", slug: "peinture-finition" },
        { id: "architecture-ingenierie", name: "هندسة معمارية & هندسة", slug: "architecture-ingenierie" },
        { id: "topographie", name: "مسح طبوغرافي", slug: "topographie" }
      ]
    }
  ]
};