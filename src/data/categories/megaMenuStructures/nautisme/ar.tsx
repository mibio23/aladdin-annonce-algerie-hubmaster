import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Ship } from "lucide-react";

export const nautismeAr: MenuCategory = {
  id: "nautisme",
  name: "قوارب وبحرية",
  slug: "nautisme",
  icon: <Ship className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-bateaux",
      name: "أنواع القوارب",
      slug: "types-de-bateaux",
      subcategories: [
        { id: "bateaux-a-moteur", name: "قوارب بمحرك", slug: "bateaux-a-moteur" },
        { id: "voiliers", name: "قوارب شراعية", slug: "voiliers" },
        { id: "yachts", name: "يخوت", slug: "yachts" },
        { id: "semi-rigides", name: "قوارب شبه صلبة", slug: "semi-rigides" },
        { id: "zodiacs-pneumatiques", name: "زودياك وقوارب مطاطية", slug: "zodiacs-pneumatiques" },
        { id: "jet-skis-scooters-mer", name: "دراجات مائية", slug: "jet-skis-scooters-mer" },
        { id: "barques-chaloupes", name: "مراكب تجديف وشالوبيات", slug: "barques-chaloupes" },
        { id: "kayaks", name: "كاياك", slug: "kayaks" },
        { id: "canoes", name: "كانو", slug: "canoes" },
        { id: "bateaux-de-peche", name: "قوارب صيد", slug: "bateaux-de-peche" },
        { id: "pedalos", name: "قوارب بدالات", slug: "pedalos" },
        { id: "catamarans", name: "كاتاماران", slug: "catamarans" },
        { id: "planches-a-voile-windsurf", name: "ألواح ويندسيرف", slug: "planches-a-voile-windsurf" }
      ]
    },
    {
      id: "moteurs-propulsion",
      name: "المحركات والدفع",
      slug: "moteurs-propulsion",
      subcategories: [
        { id: "moteurs-hors-bord", name: "محركات خارجية", slug: "moteurs-hors-bord" },
        { id: "moteurs-in-bord", name: "محركات داخلية", slug: "moteurs-in-bord" },
        { id: "moteurs-electriques", name: "محركات كهربائية", slug: "moteurs-electriques" },
        { id: "helices", name: "مراوح", slug: "helices" },
        { id: "propulsion-auxiliaire", name: "دفع مساعد", slug: "propulsion-auxiliaire" },
        { id: "batteries-marine", name: "بطاريات بحرية", slug: "batteries-marine" },
        { id: "reservoirs-carburant-nautique", name: "خزانات ووقود بحري", slug: "reservoirs-carburant-nautique" }
      ]
    },
    {
      id: "equipements-de-navigation",
      name: "معدات الملاحة",
      slug: "equipements-de-navigation",
      subcategories: [
        { id: "gps-nautiques", name: "GPS بحري", slug: "gps-nautiques" },
        { id: "sondeurs-echosondeurs", name: "مجسات وصدى", slug: "sondeurs-echosondeurs" },
        { id: "radars", name: "رادارات", slug: "radars" },
        { id: "cartes-instruments-marins", name: "خرائط وأدوات بحرية", slug: "cartes-instruments-marins" },
        { id: "compas", name: "بوصلة", slug: "compas" },
        { id: "pilotes-automatiques", name: "طيار آلي", slug: "pilotes-automatiques" },
        { id: "radios-vhf", name: "راديو VHF", slug: "radios-vhf" },
        { id: "traceurs-de-cartes", name: "راسم خرائط", slug: "traceurs-de-cartes" },
        { id: "jumelles-marines", name: "مناظير بحرية", slug: "jumelles-marines" }
      ]
    },
    {
      id: "securite-sauvetage",
      name: "السلامة والإنقاذ",
      slug: "securite-sauvetage",
      subcategories: [
        { id: "gilets-de-sauvetage", name: "سترات نجاة", slug: "gilets-de-sauvetage" },
        { id: "bouees", name: "عوامات", slug: "bouees" },
        { id: "harnais-lignes-de-vie", name: "أحزمة وخطوط حياة", slug: "harnais-lignes-de-vie" },
        { id: "extincteurs-marine", name: "طفايات بحرية", slug: "extincteurs-marine" },
        { id: "trousses-de-secours", name: "حقائب إسعاف أولي", slug: "trousses-de-secours" },
        { id: "fusees-signalisations", name: "مشاعل وإشارات", slug: "fusees-signalisations" },
        { id: "kits-d-urgence", name: "مجموعات طوارئ", slug: "kits-d-urgence" },
        { id: "pompes-de-cale", name: "مضخات تجفيف القاع", slug: "pompes-de-cale" }
      ]
    },
    {
      id: "accastillage-pieces-detachees",
      name: "تجهيزات السطح وقطع غيار",
      slug: "accastillage-pieces-detachees",
      subcategories: [
        { id: "cordages", name: "حبال", slug: "cordages" },
        { id: "amarres", name: "حبال ربط", slug: "amarres" },
        { id: "ancres-chaines", name: "مراسي وسلاسل", slug: "ancres-chaines" },
        { id: "poulies", name: "بكرات", slug: "poulies" },
        { id: "taquets", name: "مراسي تثبيت", slug: "taquets" },
        { id: "mousquetons", name: "مشابك", slug: "mousquetons" },
        { id: "winchs", name: "ونشات", slug: "winchs" },
        { id: "voiles-greements", name: "أشرعة وتجهيزات", slug: "voiles-greements" },
        { id: "chandeliers-balcons", name: "حواجز ومساند", slug: "chandeliers-balcons" },
        { id: "echelles-de-bain", name: "سلالم سباحة", slug: "echelles-de-bain" },
        { id: "pare-battages", name: "مصدات", slug: "pare-battages" },
        { id: "hublots-ecoutilles", name: "نوافذ وفتحات", slug: "hublots-ecoutilles" }
      ]
    },
    {
      id: "confort-amenagement-interieur",
      name: "راحة وتجهيز داخلي",
      slug: "confort-amenagement-interieur",
      subcategories: [
        { id: "sieges-banquettes", name: "مقاعد ومصاطب", slug: "sieges-banquettes" },
        { id: "cabines-couchettes", name: "كبائن وأسرّة", slug: "cabines-couchettes" },
        { id: "eclairage-interieur", name: "إضاءة داخلية", slug: "eclairage-interieur" },
        { id: "cuisine-marine", name: "معدات مطبخ بحري", slug: "cuisine-marine" },
        { id: "refrigerateurs-glacieres-nautiques", name: "ثلاجات ومبردات بحرية", slug: "refrigerateurs-glacieres-nautiques" },
        { id: "wc-nautiques", name: "دورات مياه بحرية", slug: "wc-nautiques" },
        { id: "douches-sanitaires", name: "دشوص وصحيات", slug: "douches-sanitaires" },
        { id: "rangements-coffres", name: "تخزين وخزائن", slug: "rangements-coffres" }
      ]
    },
    {
      id: "accessoires-entretien",
      name: "إكسسوارات وصيانة",
      slug: "accessoires-entretien",
      subcategories: [
        { id: "housses-protection", name: "أغطية حماية", slug: "housses-protection" },
        { id: "nettoyants-entretien", name: "منظفات ومنتجات عناية", slug: "nettoyants-entretien" },
        { id: "peintures-antifouling", name: "دهانات ومضادات التلوث البحري", slug: "peintures-antifouling" },
        { id: "kits-reparation-coque", name: "عدة إصلاح الهيكل", slug: "kits-reparation-coque" },
        { id: "batteries-chargeurs", name: "بطاريات وشواحن", slug: "batteries-chargeurs" },
        { id: "outils-nautiques", name: "أدوات بحرية", slug: "outils-nautiques" },
        { id: "pompes-manuelles", name: "مضخات يدوية", slug: "pompes-manuelles" },
        { id: "rames-pagaies", name: "مجاديف", slug: "rames-pagaies" }
      ]
    },
    {
      id: "transport-stockage",
      name: "نقل وتخزين",
      slug: "transport-stockage",
      subcategories: [
        { id: "remorques-bateau", name: "مقطورات القوارب", slug: "remorques-bateau" },
        { id: "treuils-sangles", name: "ونشات وأحزمة", slug: "treuils-sangles" },
        { id: "chariots-mise-a-leau", name: "عربات إنزال للماء", slug: "chariots-mise-a-leau" },
        { id: "supports-stockage", name: "حوامل تخزين", slug: "supports-stockage" },
        { id: "garages-nautiques", name: "كارجات بحرية", slug: "garages-nautiques" },
        { id: "portiques-palans", name: "مرافع ورافعات", slug: "portiques-palans" }
      ]
    },
    {
      id: "sports-nautiques-associes",
      name: "رياضات مائية",
      slug: "sports-nautiques-associes",
      subcategories: [
        { id: "wakeboard", name: "ويكبورد", slug: "wakeboard" },
        { id: "ski-nautique", name: "تزلج مائي", slug: "ski-nautique" },
        { id: "kneeboard", name: "كني بورد", slug: "kneeboard" },
        { id: "bouees-tractees", name: "عوامات مسحوبة", slug: "bouees-tractees" },
        { id: "paddle-sup", name: "بادل (SUP)", slug: "paddle-sup" },
        { id: "kitesurf", name: "كايت سيرف", slug: "kitesurf" },
        { id: "plongee-snorkeling", name: "غوص وسنوركلينغ", slug: "plongee-snorkeling" },
        { id: "peche-en-mer-equipements", name: "معدات صيد بحري", slug: "peche-en-mer-equipements" }
      ]
    }
  ]
};