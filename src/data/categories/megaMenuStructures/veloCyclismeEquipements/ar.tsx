import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Bike } from "lucide-react";

export const veloCyclismeEquipementsAr: MenuCategory = {
  id: "velo-cyclisme-equipements",
  name: "الدراجات، ركوب الدراجات والمعدات",
  slug: "velo-cyclisme-equipements",
  icon: <Bike className="w-4 h-4" />,
  subcategories: [
    {
      id: "types-de-velos",
      name: "أنواع الدراجات",
      slug: "types-de-velos",
      subcategories: [
        { id: "velos-de-route", name: "دراجات طريق", slug: "velos-de-route" },
        { id: "velos-de-montagne-vtt", name: "دراجات جبلية (MTB)", slug: "velos-de-montagne-vtt" },
        { id: "velos-hybrides", name: "دراجات هجينة", slug: "velos-hybrides" },
        { id: "velos-gravel", name: "دراجات Gravel", slug: "velos-gravel" },
        { id: "velos-de-ville", name: "دراجات مدينة", slug: "velos-de-ville" },
        { id: "velos-pliants", name: "دراجات قابلة للطي", slug: "velos-pliants" },
        { id: "velos-bmx", name: "دراجات BMX", slug: "velos-bmx" },
        { id: "velos-electriques-vae", name: "دراجات كهربائية (E‑Bike)", slug: "velos-electriques-vae" },
        { id: "velos-cargo", name: "دراجات شحن", slug: "velos-cargo" },
        { id: "tandems", name: "دراجات ترادفية", slug: "tandems" },
        { id: "velos-enfants", name: "دراجات أطفال", slug: "velos-enfants" },
        { id: "draisiennes", name: "دراجات توازن", slug: "draisiennes" }
      ]
    },
    {
      id: "equipements-cyclistes",
      name: "معدات راكبي الدراجات",
      slug: "equipements-cyclistes",
      subcategories: [
        { id: "casques", name: "خوذ", slug: "casques" },
        { id: "gants", name: "قفازات", slug: "gants" },
        { id: "lunettes-de-cyclisme", name: "نظارات ركوب الدراجات", slug: "lunettes-de-cyclisme" },
        { id: "maillots", name: "قمصان", slug: "maillots" },
        { id: "cuissards", name: "سراويل مبطنة", slug: "cuissards" },
        { id: "chaussures-de-cyclisme", name: "أحذية ركوب الدراجات", slug: "chaussures-de-cyclisme" },
        { id: "protections-genouilleres-coudieres", name: "واقيات (ركب، مرفقين)", slug: "protections-genouilleres-coudieres" },
        { id: "gilets-reflechissants", name: "سترات عاكسة", slug: "gilets-reflechissants" },
        { id: "sacs-a-dos-velo", name: "حقائب ظهر للدراجات", slug: "sacs-a-dos-velo" },
        { id: "gourdes-porte-gourdes", name: "قوارير وحوامل القوارير", slug: "gourdes-porte-gourdes" }
      ]
    },
    {
      id: "composants-pieces-detachees",
      name: "المكوّنات وقطع الغيار",
      slug: "composants-pieces-detachees",
      subcategories: [
        { id: "roues-pneus", name: "عجلات وإطارات", slug: "roues-pneus" },
        { id: "chambres-a-air", name: "أنابيب داخلية", slug: "chambres-a-air" },
        { id: "freins-patins-disques", name: "فرامل (سفايف، أقراص)", slug: "freins-patins-disques" },
        { id: "derailleurs", name: "مبدلات", slug: "derailleurs" },
        { id: "chaines-cassettes", name: "سلاسل وكاسات", slug: "chaines-cassettes" },
        { id: "pedales", name: "دواسات", slug: "pedales" },
        { id: "selles-tiges-de-selle", name: "مقاعد وأنابيب مقعد", slug: "selles-tiges-de-selle" },
        { id: "guidons-poignees", name: "مقود ومقابض", slug: "guidons-poignees" },
        { id: "pedaliers", name: "مجموعات كرنك", slug: "pedaliers" },
        { id: "suspensions-fourches", name: "ممتصات وصُمّانات/شوكات", slug: "suspensions-fourches" },
        { id: "cadres-kits-cadres", name: "إطارات وهياكل", slug: "cadres-kits-cadres" }
      ]
    },
    {
      id: "accessoires-velos",
      name: "ملحقات الدراجة",
      slug: "accessoires-velos",
      subcategories: [
        { id: "eclairages-avant-arriere", name: "أضواء (أمام/خلف)", slug: "eclairages-avant-arriere" },
        { id: "sonnettes-klaxons", name: "جرس ومنبّهات", slug: "sonnettes-klaxons" },
        { id: "retroviseurs", name: "مرايا", slug: "retroviseurs" },
        { id: "bequilles", name: "حوامل وقوف", slug: "bequilles" },
        { id: "porte-bagages", name: "رفوف تحميل", slug: "porte-bagages" },
        { id: "paniers-sacs", name: "سلال وحقائب", slug: "paniers-sacs" },
        { id: "garde-boue", name: "واقيات طين", slug: "garde-boue" },
        { id: "antivols", name: "أقفال", slug: "antivols" },
        { id: "compteurs-gps-velo", name: "عدّادات وجي بي إس للدراجات", slug: "compteurs-gps-velo" },
        { id: "supports-smartphone", name: "حوامل الهاتف", slug: "supports-smartphone" },
        { id: "pompes-a-main", name: "مضخات يد", slug: "pompes-a-main" },
        { id: "porte-enfants", name: "مقاعد أطفال", slug: "porte-enfants" }
      ]
    },
    {
      id: "outils-entretien",
      name: "أدوات وصيانة",
      slug: "outils-entretien",
      subcategories: [
        { id: "kits-de-reparation", name: "مجموعات إصلاح", slug: "kits-de-reparation" },
        { id: "pompes-a-pied", name: "مضخات أرضية", slug: "pompes-a-pied" },
        { id: "demonte-pneus", name: "مفاتيح فك الإطارات", slug: "demonte-pneus" },
        { id: "lubrifiants-nettoyants", name: "زيوت ومنظفات", slug: "lubrifiants-nettoyants" },
        { id: "cles-multi-outils-velo", name: "مفاتيح وأدوات متعددة", slug: "cles-multi-outils-velo" },
        { id: "supports-de-reparation", name: "منصّات صيانة", slug: "supports-de-reparation" },
        { id: "brosses-dentretien", name: "فرش تنظيف", slug: "brosses-dentretien" }
      ]
    },
    {
      id: "rangement-transport",
      name: "تخزين ونقل",
      slug: "rangement-transport",
      subcategories: [
        { id: "supports-muraux-velo", name: "حوامل جدارية", slug: "supports-muraux-velo" },
        { id: "crochets-racks", name: "خطافات ورفوف", slug: "crochets-racks" },
        { id: "housses-de-transport-velo", name: "أغطية/حقائب نقل الدراجة", slug: "housses-de-transport-velo" },
        { id: "porte-velos-voiture", name: "حوامل سيارات (صندوق، سقف، خطاف سحب)", slug: "porte-velos-voiture" }
      ]
    },
    {
      id: "equipements-sportifs-cyclisme",
      name: "معدات رياضية مرتبطة بالدراجات",
      slug: "equipements-sportifs-cyclisme",
      subcategories: [
        { id: "cardiofrequencemetres", name: "أجهزة قياس نبض القلب", slug: "cardiofrequencemetres" },
        { id: "capteurs-de-puissance", name: "مقاييس القدرة", slug: "capteurs-de-puissance" },
        { id: "montres-sport", name: "ساعات رياضية", slug: "montres-sport" },
        { id: "vetements-de-pluie-coupe-vent", name: "ملابس مطر وصدّ للريح", slug: "vetements-de-pluie-coupe-vent" },
        { id: "accessoires-de-performance", name: "ملحقات الأداء (ديناميكا هوائية، تحسين الوزن)", slug: "accessoires-de-performance" }
      ]
    }
  ]
};