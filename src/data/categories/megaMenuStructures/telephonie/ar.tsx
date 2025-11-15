import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieAr: MenuCategory = {
  id: "telephonie",
  name: "الهاتف والاتصالات",
  slug: "telephonie",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "الهواتف الذكية",
      slug: "smartphones",
      subcategories: [
        { id: "smartphones-android", name: "هواتف ذكية أندرويد", slug: "smartphones-android" },
        { id: "iphone", name: "آيفون", slug: "iphone" },
        { id: "smartphones-5g", name: "هواتف 5G", slug: "smartphones-5g" },
        { id: "smartphones-gaming", name: "هواتف للألعاب", slug: "smartphones-gaming" },
        { id: "smartphones-pliables", name: "هواتف قابلة للطي", slug: "smartphones-pliables" },
        { id: "smartphones-entree-de-gamme", name: "هواتف اقتصادية", slug: "smartphones-entree-de-gamme" },
        { id: "smartphones-milieu-de-gamme", name: "هواتف متوسطة", slug: "smartphones-milieu-de-gamme" },
        { id: "smartphones-haut-de-gamme", name: "هواتف فئة عليا", slug: "smartphones-haut-de-gamme" },
        { id: "smartphones-reconditionnes", name: "هواتف مجددة", slug: "smartphones-reconditionnes" },
        { id: "telephones-robustes-rugged", name: "هواتف متينة", slug: "telephones-robustes-rugged" },
        { id: "mini-smartphones", name: "هواتف صغيرة", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "هواتف احترافية", slug: "smartphones-professionnels" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "هواتف كلاسيكية وثابتة",
      slug: "telephones-classiques-fixes",
      subcategories: [
        { id: "telephones-portables-classiques", name: "هواتف محمولة كلاسيكية", slug: "telephones-portables-classiques" },
        { id: "telephones-a-clapet", name: "هواتف صدفية", slug: "telephones-a-clapet" },
        { id: "telephones-seniors", name: "هواتف لكبار السن", slug: "telephones-seniors" },
        { id: "telephones-fixes-filaires", name: "هواتف ثابتة سلكية", slug: "telephones-fixes-filaires" },
        { id: "telephones-fixes-sans-fil", name: "هواتف ثابتة لاسلكية", slug: "telephones-fixes-sans-fil" },
        { id: "combines-dect", name: "أجهزة DECT", slug: "combines-dect" },
        { id: "telephones-voip", name: "هواتف VoIP", slug: "telephones-voip" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "أجهزة لوحية ومحمولة",
      slug: "tablettes-appareils-mobiles",
      subcategories: [
        { id: "tablettes-android", name: "أجهزة لوحية أندرويد", slug: "tablettes-android" },
        { id: "ipad", name: "آيباد", slug: "ipad" },
        { id: "tablettes-graphiques", name: "أجهزة لوحية رسومية", slug: "tablettes-graphiques" },
        { id: "tablettes-enfants", name: "أجهزة لوحية للأطفال", slug: "tablettes-enfants" },
        { id: "liseuses-electroniques", name: "قارئات إلكترونية", slug: "liseuses-electroniques" },
        { id: "phablettes", name: "فابليت", slug: "phablettes" },
        { id: "mini-tablettes", name: "أجهزة لوحية صغيرة", slug: "mini-tablettes" },
        { id: "tablettes-professionnelles", name: "أجهزة لوحية احترافية", slug: "tablettes-professionnelles" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "ملحقات الهواتف",
      slug: "accessoires-telephones",
      subcategories: [
        { id: "coques-protection", name: "أغطية حماية", slug: "coques-protection" },
        { id: "housses", name: "حافظات", slug: "housses" },
        { id: "etuis", name: "أغلفة", slug: "etuis" },
        { id: "bumpers", name: "حمايات حواف", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "واقيات شاشة وزجاج حماية", slug: "vitres-protections-ecran" },
        { id: "supports-telephones", name: "حوامل الهواتف", slug: "supports-telephones" },
        { id: "supports-voiture", name: "حوامل سيارة", slug: "supports-voiture" },
        { id: "stylos-tactiles", name: "أقلام لمسية", slug: "stylos-tactiles" },
        { id: "anneaux-grips", name: "حلقات ومقابض", slug: "anneaux-grips" },
        { id: "pochettes-impermeables", name: "أكياس مقاومة للماء", slug: "pochettes-impermeables" }
      ]
    },
    {
      id: "batteries-charge",
      name: "بطاريات وشحن",
      slug: "batteries-charge",
      subcategories: [
        { id: "chargeurs-standard", name: "شواحن عادية", slug: "chargeurs-standard" },
        { id: "chargeurs-rapides-fast-quick", name: "شواحن سريعة (Fast/Quick Charge)", slug: "chargeurs-rapides-fast-quick" },
        { id: "chargeurs-sans-fil", name: "شواحن لاسلكية", slug: "chargeurs-sans-fil" },
        { id: "stations-recharge", name: "محطات شحن", slug: "stations-recharge" },
        { id: "powerbanks", name: "بطاريات خارجية", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "بطاريات خارجية عالية السعة", slug: "batteries-externes-haute-capacite" },
        { id: "cables-usb", name: "كابلات USB (Type‑C، Lightning، Micro‑USB)", slug: "cables-usb" },
        { id: "adaptateurs-secteur", name: "محولات كهرباء", slug: "adaptateurs-secteur" },
        { id: "chargeurs-voiture", name: "شواحن سيارات", slug: "chargeurs-voiture" },
        { id: "hubs-usb-multiprises-intelligentes", name: "موزعات USB ومشتركات ذكية", slug: "hubs-usb-multiprises-intelligentes" }
      ]
    },
    {
      id: "audio-mobile",
      name: "صوتيات الموبايل",
      slug: "audio-mobile",
      subcategories: [
        { id: "ecouteurs-filaires", name: "سماعات سلكية", slug: "ecouteurs-filaires" },
        { id: "ecouteurs-bluetooth", name: "سماعات بلوتوث", slug: "ecouteurs-bluetooth" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "سماعات رأس لاسلكية", slug: "casques-sans-fil" },
        { id: "casques-filaires", name: "سماعات رأس سلكية", slug: "casques-filaires" },
        { id: "enceintes-bluetooth", name: "مكبرات صوت بلوتوث", slug: "enceintes-bluetooth" },
        { id: "kits-mains-libres", name: "مجموعات اتصال حرّ", slug: "kits-mains-libres" },
        { id: "micros-mobiles", name: "ميكروفونات للهاتف", slug: "micros-mobiles" },
        { id: "adaptateurs-audio", name: "محولات صوتية", slug: "adaptateurs-audio" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "قطع وإصلاح الهواتف",
      slug: "pieces-reparation-telephone",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "شاشات LCD وOLED", slug: "ecrans-lcd-oled" },
        { id: "batteries-internes", name: "بطاريات داخلية", slug: "batteries-internes" },
        { id: "connecteurs-charge", name: "موصلات شحن", slug: "connecteurs-charge" },
        { id: "nappes-circuits", name: "شرائط ودوائر مرنة", slug: "nappes-circuits" },
        { id: "cameras-avant-arriere", name: "كاميرات أمامية/خلفية", slug: "cameras-avant-arriere" },
        { id: "chassis-coques-arriere", name: "هياكل وغطاءات خلفية", slug: "chassis-coques-arriere" },
        { id: "boutons-flex", name: "أزرار وكوابل فليكس", slug: "boutons-flex" },
        { id: "haut-parleurs-micros", name: "مكبرات صوت وميكروفونات", slug: "haut-parleurs-micros" },
        { id: "vitres-arriere", name: "زجاج خلفي", slug: "vitres-arriere" },
        { id: "kits-reparation", name: "عدة إصلاح", slug: "kits-reparation" },
        { id: "outils-demontage", name: "أدوات تفكيك", slug: "outils-demontage" },
        { id: "stations-soudure", name: "محطات لحام", slug: "stations-soudure" },
        { id: "ecrans-reconditionnes", name: "شاشات مجددة", slug: "ecrans-reconditionnes" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "أجهزة متصلة (موبايل)",
      slug: "objets-connectes-mobile",
      subcategories: [
        { id: "montres-connectees", name: "ساعات ذكية", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "أساور لياقة", slug: "bracelets-connectes" },
        { id: "trackers-gps", name: "أجهزة تتبع GPS", slug: "trackers-gps" },
        { id: "ecouteurs-intelligents", name: "سماعات ذكية", slug: "ecouteurs-intelligents" },
        { id: "lunettes-connectees", name: "نظارات ذكية", slug: "lunettes-connectees" },
        { id: "balises-bluetooth", name: "منارات بلوتوث", slug: "balises-bluetooth" },
        { id: "assistants-vocaux-portables", name: "مساعدون صوتيون محمولون", slug: "assistants-vocaux-portables" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "شبكة واتصال الموبايل",
      slug: "reseau-communication-mobile",
      subcategories: [
        { id: "cartes-sim", name: "شرائح SIM", slug: "cartes-sim" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "موجّهات 4G/5G", slug: "routeurs-4g-5g" },
        { id: "modems-portables", name: "مودمات محمولة", slug: "modems-portables" },
        { id: "antennes-amplificateurs-reseau", name: "هوائيات ومضخّمات إشارة", slug: "antennes-amplificateurs-reseau" },
        { id: "repeteurs-gsm", name: "مكررات GSM", slug: "repeteurs-gsm" },
        { id: "boitiers-wifi-mobiles", name: "أجهزة Wi‑Fi محمولة", slug: "boitiers-wifi-mobiles" },
        { id: "adaptateurs-reseau-telephone", name: "محولات شبكة للهاتف", slug: "adaptateurs-reseau-telephone" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "أمان وحماية",
      slug: "securite-protection",
      subcategories: [
        { id: "antivols-telephone", name: "مضاد سرقة للهاتف", slug: "antivols-telephone" },
        { id: "etuis-renforces", name: "أغطية معززة", slug: "etuis-renforces" },
        { id: "coques-anti-chute", name: "أغطية مضادة للسقوط", slug: "coques-anti-chute" },
        { id: "protections-etanches-ip68", name: "حمايات مقاومة للماء IP68", slug: "protections-etanches-ip68" },
        { id: "housses-anti-choc", name: "حافظات ضد الصدمات", slug: "housses-anti-choc" },
        { id: "verres-trempes-haute-resistance", name: "زجاج مقوى عالي المقاومة", slug: "verres-trempes-haute-resistance" },
        { id: "accessoires-confidentialite", name: "ملحقات الخصوصية", slug: "accessoires-confidentialite" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "تطبيقات وخدمات",
      slug: "applications-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "خدمات إصلاح الموبايل", slug: "services-reparation-mobile" },
        { id: "debloquage-desimlockage", name: "فتح القفل وفك الشفرة", slug: "debloquage-desimlockage" },
        { id: "transfert-donnees", name: "نقل البيانات", slug: "transfert-donnees" },
        { id: "diagnostics-mobiles", name: "تشخيصات", slug: "diagnostics-mobiles" },
        { id: "accessoires-sur-mesure", name: "ملحقات حسب الطلب", slug: "accessoires-sur-mesure" },
        { id: "personnalisation-mobile", name: "تخصيص الهاتف", slug: "personnalisation-mobile" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "علامات شهيرة (موبايل)",
      slug: "marques-populaires-mobiles",
      subcategories: [
        { id: "apple", name: "Apple", slug: "apple" },
        { id: "samsung", name: "Samsung", slug: "samsung" },
        { id: "xiaomi", name: "Xiaomi", slug: "xiaomi" },
        { id: "huawei", name: "Huawei", slug: "huawei" },
        { id: "oppo", name: "Oppo", slug: "oppo" },
        { id: "vivo", name: "Vivo", slug: "vivo" },
        { id: "realme", name: "Realme", slug: "realme" },
        { id: "infinix", name: "Infinix", slug: "infinix" },
        { id: "tecno", name: "Tecno", slug: "tecno" },
        { id: "oneplus", name: "OnePlus", slug: "oneplus" },
        { id: "sony", name: "Sony", slug: "sony" },
        { id: "nokia", name: "Nokia", slug: "nokia" },
        { id: "honor", name: "Honor", slug: "honor" },
        { id: "motorola", name: "Motorola", slug: "motorola" },
        { id: "lenovo", name: "Lenovo", slug: "lenovo" },
        { id: "asus", name: "Asus", slug: "asus" },
        { id: "zte", name: "ZTE", slug: "zte" },
        { id: "google-pixel", name: "Google Pixel", slug: "google-pixel" }
      ]
    },
    {
      id: "operateurs-mobiles-algerie",
      name: "مشغّلو الهاتف النقال في الجزائر",
      slug: "operateurs-mobiles-algerie",
      subcategories: [
        { id: "djezzy", name: "Djezzy", slug: "djezzy" },
        { id: "ooredoo", name: "Ooredoo", slug: "ooredoo" },
        { id: "mobilis", name: "Mobilis", slug: "mobilis" },
        { id: "algerie-telecom", name: "Algérie TéléCOM", slug: "algerie-telecom" }
      ]
    }
  ]
};