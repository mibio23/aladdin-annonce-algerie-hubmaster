import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieDe: MenuCategory = {
  id: "telephonie",
  name: "Telekommunikation",
  slug: "telekommunikation",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "Smartphones",
      slug: "smartphones",
      subcategories: [
        { id: "smartphones-android", name: "Android‑Smartphones", slug: "smartphones-android" },
        { id: "iphone", name: "iPhone", slug: "iphone" },
        { id: "smartphones-5g", name: "5G‑Smartphones", slug: "smartphones-5g" },
        { id: "smartphones-gaming", name: "Gaming‑Smartphones", slug: "smartphones-gaming" },
        { id: "smartphones-pliables", name: "Faltbare Smartphones", slug: "smartphones-pliables" },
        { id: "smartphones-entree-de-gamme", name: "Einsteiger‑Smartphones", slug: "smartphones-entree-de-gamme" },
        { id: "smartphones-milieu-de-gamme", name: "Mittelklasse‑Smartphones", slug: "smartphones-milieu-de-gamme" },
        { id: "smartphones-haut-de-gamme", name: "High‑End‑Smartphones", slug: "smartphones-haut-de-gamme" },
        { id: "smartphones-reconditionnes", name: "Generalüberholte Smartphones", slug: "smartphones-reconditionnes" },
        { id: "telephones-robustes-rugged", name: "Robuste Telefone (rugged)", slug: "telephones-robustes-rugged" },
        { id: "mini-smartphones", name: "Mini‑Smartphones", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "Business‑Smartphones", slug: "smartphones-professionnels" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "Klassische & Festnetztelefone",
      slug: "telephones-classiques-fixes",
      subcategories: [
        { id: "telephones-portables-classiques", name: "Klassische Mobiltelefone", slug: "telephones-portables-classiques" },
        { id: "telephones-a-clapet", name: "Klapptelefone", slug: "telephones-a-clapet" },
        { id: "telephones-seniors", name: "Seniorentelefone", slug: "telephones-seniors" },
        { id: "telephones-fixes-filaires", name: "Schnurgebundene Festnetztelefone", slug: "telephones-fixes-filaires" },
        { id: "telephones-fixes-sans-fil", name: "Schnurlose Festnetztelefone", slug: "telephones-fixes-sans-fil" },
        { id: "combines-dect", name: "DECT‑Hörer", slug: "combines-dect" },
        { id: "telephones-voip", name: "VoIP‑Telefone", slug: "telephones-voip" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "Tablets & Mobile Geräte",
      slug: "tablettes-appareils-mobiles",
      subcategories: [
        { id: "tablettes-android", name: "Android‑Tablets", slug: "tablettes-android" },
        { id: "ipad", name: "iPad", slug: "ipad" },
        { id: "tablettes-graphiques", name: "Grafiktabletts", slug: "tablettes-graphiques" },
        { id: "tablettes-enfants", name: "Kinder‑Tablets", slug: "tablettes-enfants" },
        { id: "liseuses-electroniques", name: "E‑Reader", slug: "liseuses-electroniques" },
        { id: "phablettes", name: "Phablets", slug: "phablettes" },
        { id: "mini-tablettes", name: "Mini‑Tablets", slug: "mini-tablettes" },
        { id: "tablettes-professionnelles", name: "Professionelle Tablets", slug: "tablettes-professionnelles" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "Telefon‑Zubehör",
      slug: "accessoires-telephones",
      subcategories: [
        { id: "coques-protection", name: "Schutzhüllen", slug: "coques-protection" },
        { id: "housses", name: "Hüllen", slug: "housses" },
        { id: "etuis", name: "Etuis", slug: "etuis" },
        { id: "bumpers", name: "Bumper", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "Displayschutz & Schutzglas", slug: "vitres-protections-ecran" },
        { id: "supports-telephones", name: "Telefonhalterungen", slug: "supports-telephones" },
        { id: "supports-voiture", name: "Auto‑Halterungen", slug: "supports-voiture" },
        { id: "stylos-tactiles", name: "Stylus‑Stifte", slug: "stylos-tactiles" },
        { id: "anneaux-grips", name: "Ringe & Grips", slug: "anneaux-grips" },
        { id: "pochettes-impermeables", name: "Wasserdichte Taschen", slug: "pochettes-impermeables" }
      ]
    },
    {
      id: "batteries-charge",
      name: "Batterien & Laden",
      slug: "batteries-charge",
      subcategories: [
        { id: "chargeurs-standard", name: "Standard‑Ladegeräte", slug: "chargeurs-standard" },
        { id: "chargeurs-rapides-fast-quick", name: "Schnellladegeräte (Fast Charge, Quick Charge)", slug: "chargeurs-rapides-fast-quick" },
        { id: "chargeurs-sans-fil", name: "Kabellose Ladegeräte", slug: "chargeurs-sans-fil" },
        { id: "stations-recharge", name: "Ladestationen", slug: "stations-recharge" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "Externe Batterien mit hoher Kapazität", slug: "batteries-externes-haute-capacite" },
        { id: "cables-usb", name: "USB‑Kabel (Type‑C, Lightning, Micro‑USB)", slug: "cables-usb" },
        { id: "adaptateurs-secteur", name: "Netzadapter", slug: "adaptateurs-secteur" },
        { id: "chargeurs-voiture", name: "Auto‑Ladegeräte", slug: "chargeurs-voiture" },
        { id: "hubs-usb-multiprises-intelligentes", name: "USB‑Hubs & smarte Steckdosenleisten", slug: "hubs-usb-multiprises-intelligentes" }
      ]
    },
    {
      id: "audio-mobile",
      name: "Mobile Audio",
      slug: "audio-mobile",
      subcategories: [
        { id: "ecouteurs-filaires", name: "Kabelgebundene Ohrhörer", slug: "ecouteurs-filaires" },
        { id: "ecouteurs-bluetooth", name: "Bluetooth‑Ohrhörer", slug: "ecouteurs-bluetooth" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "Kabellose Kopfhörer", slug: "casques-sans-fil" },
        { id: "casques-filaires", name: "Kabelgebundene Kopfhörer", slug: "casques-filaires" },
        { id: "enceintes-bluetooth", name: "Bluetooth‑Lautsprecher", slug: "enceintes-bluetooth" },
        { id: "kits-mains-libres", name: "Freisprech‑Kits", slug: "kits-mains-libres" },
        { id: "micros-mobiles", name: "Mobile Mikrofone", slug: "micros-mobiles" },
        { id: "adaptateurs-audio", name: "Audio‑Adapter", slug: "adaptateurs-audio" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "Telefonteile & Reparatur",
      slug: "pieces-reparation-telephone",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "LCD‑ und OLED‑Displays", slug: "ecrans-lcd-oled" },
        { id: "batteries-internes", name: "Interne Batterien", slug: "batteries-internes" },
        { id: "connecteurs-charge", name: "Ladeanschlüsse", slug: "connecteurs-charge" },
        { id: "nappes-circuits", name: "Flexkabel & Schaltungen", slug: "nappes-circuits" },
        { id: "cameras-avant-arriere", name: "Front/Rear‑Kameras", slug: "cameras-avant-arriere" },
        { id: "chassis-coques-arriere", name: "Rahmen & Rückabdeckungen", slug: "chassis-coques-arriere" },
        { id: "boutons-flex", name: "Tasten & Flex", slug: "boutons-flex" },
        { id: "haut-parleurs-micros", name: "Lautsprecher & Mikrofone", slug: "haut-parleurs-micros" },
        { id: "vitres-arriere", name: "Rückglas", slug: "vitres-arriere" },
        { id: "kits-reparation", name: "Reparatur‑Kits", slug: "kits-reparation" },
        { id: "outils-demontage", name: "Demontage‑Werkzeuge", slug: "outils-demontage" },
        { id: "stations-soudure", name: "Lötstationen", slug: "stations-soudure" },
        { id: "ecrans-reconditionnes", name: "Generalüberholte Displays", slug: "ecrans-reconditionnes" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "Vernetzte Geräte (Mobile)",
      slug: "objets-connectes-mobile",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatches", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Fitnessarmbänder", slug: "bracelets-connectes" },
        { id: "trackers-gps", name: "GPS‑Tracker", slug: "trackers-gps" },
        { id: "ecouteurs-intelligents", name: "Intelligente Ohrhörer", slug: "ecouteurs-intelligents" },
        { id: "lunettes-connectees", name: "Smarte Brillen", slug: "lunettes-connectees" },
        { id: "balises-bluetooth", name: "Bluetooth‑Beacons", slug: "balises-bluetooth" },
        { id: "assistants-vocaux-portables", name: "Portable Sprachassistenten", slug: "assistants-vocaux-portables" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "Mobiles Netzwerk & Kommunikation",
      slug: "reseau-communication-mobile",
      subcategories: [
        { id: "cartes-sim", name: "SIM‑Karten", slug: "cartes-sim" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "4G/5G‑Router", slug: "routeurs-4g-5g" },
        { id: "modems-portables", name: "Portable Modems", slug: "modems-portables" },
        { id: "antennes-amplificateurs-reseau", name: "Antennen & Signalverstärker", slug: "antennes-amplificateurs-reseau" },
        { id: "repeteurs-gsm", name: "GSM‑Repeater", slug: "repeteurs-gsm" },
        { id: "boitiers-wifi-mobiles", name: "Mobile Wi‑Fi‑Boxen", slug: "boitiers-wifi-mobiles" },
        { id: "adaptateurs-reseau-telephone", name: "Telefon‑Netzwerkadapter", slug: "adaptateurs-reseau-telephone" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "Sicherheit & Schutz",
      slug: "securite-protection",
      subcategories: [
        { id: "antivols-telephone", name: "Telefon‑Diebstahlschutz", slug: "antivols-telephone" },
        { id: "etuis-renforces", name: "Verstärkte Hüllen", slug: "etuis-renforces" },
        { id: "coques-anti-chute", name: "Sturzsichere Hüllen", slug: "coques-anti-chute" },
        { id: "protections-etanches-ip68", name: "Wasserdichter Schutz IP68", slug: "protections-etanches-ip68" },
        { id: "housses-anti-choc", name: "Stoßfeste Hüllen", slug: "housses-anti-choc" },
        { id: "verres-trempes-haute-resistance", name: "Hartes Panzerglas", slug: "verres-trempes-haute-resistance" },
        { id: "accessoires-confidentialite", name: "Privacy‑Zubehör", slug: "accessoires-confidentialite" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "Apps & Services",
      slug: "applications-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "Mobile Reparaturdienste", slug: "services-reparation-mobile" },
        { id: "debloquage-desimlockage", name: "Entsperrung & SIM‑Unlock", slug: "debloquage-desimlockage" },
        { id: "transfert-donnees", name: "Datenübertragung", slug: "transfert-donnees" },
        { id: "diagnostics-mobiles", name: "Diagnose", slug: "diagnostics-mobiles" },
        { id: "accessoires-sur-mesure", name: "Maßgeschneiderte Zubehörteile", slug: "accessoires-sur-mesure" },
        { id: "personnalisation-mobile", name: "Personalisierung", slug: "personnalisation-mobile" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "Beliebte Marken (Mobile)",
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
      name: "Mobilfunkanbieter in Algerien",
      slug: "operateurs-mobiles-algerie",
      subcategories: [
        { id: "djezzy", name: "Djezzy", slug: "djezzy" },
        { id: "ooredoo", name: "Ooredoo", slug: "ooredoo" },
        { id: "mobilis", name: "Mobilis", slug: "mobilis" },
        { id: "algerie-telecom", name: "Algérie Télécom", slug: "algerie-telecom" }
      ]
    }
  ]
};