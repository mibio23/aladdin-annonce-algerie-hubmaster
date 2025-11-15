import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Car } from "lucide-react";

export const vehiculesEquipementsAr: MenuCategory = {
  id: "vehicules-equipements",
  name: "المركبات، الشاحنات، الدراجات النارية والمعدات",
  slug: "vehicules-equipements",
  icon: <Car className="w-4 h-4" />,
  subcategories: [
    {
      id: "voitures-vehicules-legers",
      name: "سيارات ومركبات خفيفة",
      slug: "voitures-vehicules-legers",
      subcategories: [
        { id: "voitures-citadines", name: "سيارات مدينة", slug: "voitures-citadines" },
        { id: "berlines", name: "سيدان", slug: "berlines" },
        { id: "compactes", name: "مضغوطة", slug: "compactes" },
        { id: "suv", name: "SUV", slug: "suv" },
        { id: "crossovers", name: "كروس أوفر", slug: "crossovers" },
        { id: "4x4", name: "دفع رباعي 4x4", slug: "4x4" },
        { id: "coupes", name: "كوبيه", slug: "coupes" },
        { id: "cabriolets", name: "مكشوفة", slug: "cabriolets" },
        { id: "breaks", name: "ستيشن واغن", slug: "breaks" },
        { id: "voitures-familiales", name: "سيارات عائلية", slug: "voitures-familiales" },
        { id: "vul", name: "مركبات تجارية خفيفة", slug: "vehicules-utilitaires-legers" },
        { id: "vans", name: "فانات", slug: "vans" },
        { id: "voitures-hybrides", name: "سيارات هجينة", slug: "voitures-hybrides" },
        { id: "voitures-electriques", name: "سيارات كهربائية", slug: "voitures-electriques" },
        { id: "voitures-sportives", name: "سيارات رياضية", slug: "voitures-sportives" },
        { id: "voitures-anciennes-collection", name: "سيارات كلاسيكية ومجمعة", slug: "voitures-anciennes-collection" },
        { id: "voitures-reconditionnees", name: "سيارات مجددة", slug: "voitures-reconditionnees" }
      ]
    },
    {
      id: "camions-vehicules-professionnels",
      name: "شاحنات ومركبات مهنية",
      slug: "camions-vehicules-professionnels",
      subcategories: [
        { id: "camions-legers", name: "شاحنات خفيفة", slug: "camions-legers" },
        { id: "poids-lourds", name: "شاحنات ثقيلة", slug: "poids-lourds" },
        { id: "semi-remorques", name: "شبه مقطورات", slug: "semi-remorques" },
        { id: "tracteurs-routiers", name: "شاحنات سحب", slug: "tracteurs-routiers" },
        { id: "camions-bennes", name: "شاحنات قلابة", slug: "camions-bennes" },
        { id: "camions-frigorifiques", name: "شاحنات مبردة", slug: "camions-frigorifiques" },
        { id: "camions-plateaux", name: "شاحنات منصة", slug: "camions-plateaux" },
        { id: "fourgons-professionnels", name: "شاحنات صغيرة مهنية", slug: "fourgons-professionnels" },
        { id: "fourgonnettes", name: "شاحنات صغيرة", slug: "fourgonnettes" },
        { id: "minibus", name: "حافلات صغيرة", slug: "minibus" },
        { id: "bus", name: "حافلات", slug: "bus" },
        { id: "vehicules-de-chantier", name: "مركبات موقع العمل", slug: "vehicules-de-chantier" },
        { id: "depanneuses", name: "سيارات إنقاذ", slug: "depanneuses" },
        { id: "vehicules-toles", name: "مركبات مغلقة", slug: "vehicules-toles" }
      ]
    },
    {
      id: "motos-cyclomoteurs",
      name: "دراجات نارية ودراجات آلية",
      slug: "motos-cyclomoteurs",
      subcategories: [
        { id: "motos-sportives", name: "دراجات رياضية", slug: "motos-sportives" },
        { id: "motos-roadster", name: "رودستر", slug: "motos-roadster" },
        { id: "motos-touring", name: "تورينغ", slug: "motos-touring" },
        { id: "motos-enduro", name: "إندورو", slug: "motos-enduro" },
        { id: "motos-trail", name: "أدفنتشر/ترايل", slug: "motos-trail" },
        { id: "motos-cross", name: "موتوكروس", slug: "motos-cross" },
        { id: "motos-custom", name: "كوستم", slug: "motos-custom" },
        { id: "scooters-50cc", name: "سكوترات 50cc", slug: "scooters-50cc" },
        { id: "scooters-125cc", name: "سكوترات 125cc", slug: "scooters-125cc" },
        { id: "maxi-scooters", name: "ماكسي سكوتر", slug: "maxi-scooters" },
        { id: "mobylettes", name: "دراجات آلية", slug: "mobylettes" },
        { id: "quads-atv", name: "كواد/ATV", slug: "quads-atv" },
        { id: "tricycles-motorises", name: "دراجات ثلاثية بمحرك", slug: "tricycles-motorises" },
        { id: "motos-electriques", name: "دراجات نارية كهربائية", slug: "motos-electriques" }
      ]
    },
    {
      id: "velos-motorises-mobilite",
      name: "دراجات كهربائية والتنقل",
      slug: "velos-motorises-mobilite",
      subcategories: [
        { id: "velos-electriques-rapides", name: "دراجات كهربائية سريعة", slug: "velos-electriques-rapides" },
        { id: "trottinettes-electriques", name: "سكوترات كهربائية", slug: "trottinettes-electriques" },
        { id: "gyropodes", name: "جيروبود", slug: "gyropodes" },
        { id: "monoroues-electriques", name: "عجلات كهربائية أحادية", slug: "monoroues-electriques" },
        { id: "cyclomoteurs-legers-electriques", name: "دراجات آلية كهربائية خفيفة", slug: "cyclomoteurs-legers-electriques" }
      ]
    },
    {
      id: "equipements-accessoires-auto",
      name: "معدات وإكسسوارات السيارات",
      slug: "equipements-accessoires-auto",
      subcategories: [
        { id: "pneus", name: "إطارات", slug: "pneus" },
        { id: "jantes", name: "جنطات", slug: "jantes" },
        { id: "batteries", name: "بطاريات", slug: "batteries" },
        { id: "filtres", name: "فلاتر", slug: "filtres" },
        { id: "huiles-lubrifiants", name: "زيوت ومواد تشحيم", slug: "huiles-lubrifiants" },
        { id: "plaquettes-frein", name: "بطانات فرامل", slug: "plaquettes-frein" },
        { id: "disques-frein", name: "أقراص فرامل", slug: "disques-frein" },
        { id: "amortisseurs", name: "ممتصات صدمات", slug: "amortisseurs" },
        { id: "courroies", name: "سيور", slug: "courroies" },
        { id: "embrayages", name: "قوابض", slug: "embrayages" },
        { id: "bougies", name: "شمعات إشعال", slug: "bougies" },
        { id: "echappements", name: "عوادم", slug: "echappements" },
        { id: "pieces-moteur", name: "قطع المحرك", slug: "pieces-moteur" },
        { id: "kits-distribution", name: "مجموعات التوزيع", slug: "kits-distribution" },
        { id: "accessoires-interieurs", name: "إكسسوارات داخلية", slug: "accessoires-interieurs" },
        { id: "housses-sieges", name: "أغطية المقاعد", slug: "housses-sieges" },
        { id: "tapis", name: "فرش أرضية", slug: "tapis" },
        { id: "gps", name: "GPS", slug: "gps" },
        { id: "cameras-embarquees", name: "كاميرات سيارة", slug: "cameras-embarquees" },
        { id: "alarmes-auto", name: "إنذارات سيارات", slug: "alarmes-auto" },
        { id: "kits-mains-libres", name: "أطقم اتصال حرّ", slug: "kits-mains-libres" }
      ]
    },
    {
      id: "pieces-accessoires-moto",
      name: "قطع وإكسسوارات الدراجات النارية",
      slug: "pieces-accessoires-moto",
      subcategories: [
        { id: "casques-moto", name: "خوذ دراجات", slug: "casques-moto" },
        { id: "blousons-moto", name: "سترات", slug: "blousons-moto" },
        { id: "gants-moto", name: "قفازات", slug: "gants-moto" },
        { id: "bottes-chaussures", name: "أحذية وبوت", slug: "bottes-chaussures" },
        { id: "protections-moto", name: "واقيات (ظهر، ركبتين)", slug: "protections-moto" },
        { id: "valises-top-cases", name: "حقائب وصناديق علوية", slug: "valises-top-cases" },
        { id: "pots-echappement-moto", name: "عوادم دراجات", slug: "pots-echappement-moto" },
        { id: "kits-chaine", name: "مجموعات سلسلة", slug: "kits-chaine" },
        { id: "batteries-moto", name: "بطاريات دراجات", slug: "batteries-moto" },
        { id: "pneus-moto", name: "إطارات دراجات", slug: "pneus-moto" },
        { id: "guidons", name: "مقود", slug: "guidons" },
        { id: "leviers", name: "مقابض", slug: "leviers" },
        { id: "retroviseurs", name: "مرايا", slug: "retroviseurs" },
        { id: "pieces-moteur-moto", name: "قطع محرك (موتو)", slug: "pieces-moteur-moto" },
        { id: "huile-moto", name: "زيت موتو", slug: "huile-moto" },
        { id: "kits-reparation", name: "مجموعات إصلاح", slug: "kits-reparation" }
      ]
    },
    {
      id: "remorques-attelages",
      name: "مقطورات ووسائل السحب",
      slug: "remorques-attelages",
      subcategories: [
        { id: "remorques-utilitaires", name: "مقطورات خدمية", slug: "remorques-utilitaires" },
        { id: "remorques-porte-voitures", name: "مقطورات نقل سيارات", slug: "remorques-porte-voitures" },
        { id: "remorques-bagageres", name: "مقطورات حمولة", slug: "remorques-bagageres" },
        { id: "remorques-betail", name: "مقطورات مواشي", slug: "remorques-betail" },
        { id: "remorques-frigorifiques", name: "مقطورات مبردة", slug: "remorques-frigorifiques" },
        { id: "remorques-agricoles", name: "مقطورات زراعية", slug: "remorques-agricoles" },
        { id: "attelages", name: "مراكيب السحب", slug: "attelages" },
        { id: "barres-remorquage", name: "قضبان سحب", slug: "barres-remorquage" },
        { id: "porte-motos", name: "حوامل دراجات نارية", slug: "porte-motos" },
        { id: "porte-velos", name: "حوامل دراجات", slug: "porte-velos" }
      ]
    },
    {
      id: "diagnostic-atelier",
      name: "معدات التشخيص والورشة",
      slug: "diagnostic-atelier",
      subcategories: [
        { id: "valises-diagnostic-auto", name: "أجهزة تشخيص السيارات", slug: "valises-diagnostic-auto" },
        { id: "lecteurs-obd2", name: "قارئات OBD2", slug: "lecteurs-obd2" },
        { id: "ponts-elevateurs", name: "جسور رفع", slug: "ponts-elevateurs" },
        { id: "compresseurs", name: "ضواغط", slug: "compresseurs" },
        { id: "crics-hydrauliques", name: "رافعات هيدروليكية", slug: "crics-hydrauliques" },
        { id: "outils-mecaniques", name: "أدوات ميكانيكية", slug: "outils-mecaniques" },
        { id: "chargeurs-batterie", name: "شواحن بطارية", slug: "chargeurs-batterie" },
        { id: "boosters", name: "مُعزِّزات", slug: "boosters" },
        { id: "stations-climatisation", name: "محطات تكييف", slug: "stations-climatisation" },
        { id: "demonte-pneus", name: "مفككات الإطارات", slug: "demonte-pneus" },
        { id: "equilibreuses", name: "موازنات عجلات", slug: "equilibreuses" },
        { id: "outils-specialises-moto", name: "أدوات متخصصة للدراجات", slug: "outils-specialises-moto" }
      ]
    },
    {
      id: "carburants-energie",
      name: "الوقود والطاقة",
      slug: "carburants-energie",
      subcategories: [
        { id: "bornes-recharge", name: "محطات شحن", slug: "bornes-recharge" },
        { id: "stations-recharge-domestiques", name: "شواحن منزلية", slug: "stations-recharge-domestiques" },
        { id: "adaptateurs-voitures-electriques", name: "محولات للسيارات الكهربائية", slug: "adaptateurs-voitures-electriques" },
        { id: "jerricans", name: "جالونات", slug: "jerricans" },
        { id: "additifs-carburant", name: "مضافات الوقود", slug: "additifs-carburant" }
      ]
    },
    {
      id: "services-assistance",
      name: "خدمات ومساعدة",
      slug: "services-assistance",
      subcategories: [
        { id: "reparation-auto", name: "تصليح سيارات", slug: "reparation-auto" },
        { id: "reparation-moto", name: "تصليح دراجات", slug: "reparation-moto" },
        { id: "entretien-vidange", name: "صيانة وتغيير زيت", slug: "entretien-vidange" },
        { id: "lavage-automobile", name: "غسيل سيارات", slug: "lavage-automobile" },
        { id: "depannage", name: "خدمة أعطال", slug: "depannage" },
        { id: "remorquage", name: "سحب", slug: "remorquage" },
        { id: "reprogrammation-moteur", name: "برمجة محرك", slug: "reprogrammation-moteur" },
        { id: "installation-accessoires", name: "تركيب الإكسسوارات", slug: "installation-accessoires" },
        { id: "renovation-phares", name: "ترميم المصابيح", slug: "renovation-phares" },
        { id: "remplacement-pare-brise", name: "تبديل الزجاج الأمامي", slug: "remplacement-pare-brise" }
      ]
    },
    {
      id: "marques-populaires-vehicules",
      name: "علامات شهيرة (SEO)",
      slug: "marques-populaires-vehicules",
      subcategories: [
        { id: "renault", name: "Renault", slug: "renault" },
        { id: "peugeot", name: "Peugeot", slug: "peugeot" },
        { id: "citroen", name: "Citroën", slug: "citroen" },
        { id: "dacia", name: "Dacia", slug: "dacia" },
        { id: "volkswagen", name: "Volkswagen", slug: "volkswagen" },
        { id: "audi", name: "Audi", slug: "audi" },
        { id: "bmw", name: "BMW", slug: "bmw" },
        { id: "mercedes", name: "Mercedes", slug: "mercedes" },
        { id: "toyota", name: "Toyota", slug: "toyota" },
        { id: "kia", name: "Kia", slug: "kia" },
        { id: "hyundai", name: "Hyundai", slug: "hyundai" },
        { id: "ford", name: "Ford", slug: "ford" },
        { id: "nissan", name: "Nissan", slug: "nissan" },
        { id: "fiat", name: "Fiat", slug: "fiat" },
        { id: "honda", name: "Honda", slug: "honda" },
        { id: "yamaha", name: "Yamaha", slug: "yamaha" },
        { id: "suzuki", name: "Suzuki", slug: "suzuki" },
        { id: "piaggio", name: "Piaggio", slug: "piaggio" },
        { id: "ducati", name: "Ducati", slug: "ducati" },
        { id: "ktm", name: "KTM", slug: "ktm" },
        { id: "scania", name: "Scania", slug: "scania" },
        { id: "volvo-trucks", name: "Volvo Trucks", slug: "volvo-trucks" },
        { id: "man", name: "MAN", slug: "man" },
        { id: "iveco", name: "Iveco", slug: "iveco" }
      ]
    }
  ]
};