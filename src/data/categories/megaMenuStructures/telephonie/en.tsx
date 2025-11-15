import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieEn: MenuCategory = {
  id: "telephony",
  name: "Telephony",
  slug: "telephony",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "Smartphones",
      slug: "smartphones",
      subcategories: [
        { id: "smartphones-android", name: "Android Smartphones", slug: "android-smartphones" },
        { id: "iphone", name: "iPhone", slug: "iphone" },
        { id: "smartphones-5g", name: "5G Smartphones", slug: "5g-smartphones" },
        { id: "smartphones-gaming", name: "Gaming Smartphones", slug: "gaming-smartphones" },
        { id: "smartphones-pliables", name: "Foldable Smartphones", slug: "foldable-smartphones" },
        { id: "smartphones-entree-de-gamme", name: "Entry-level Smartphones", slug: "entry-level-smartphones" },
        { id: "smartphones-milieu-de-gamme", name: "Mid-range Smartphones", slug: "mid-range-smartphones" },
        { id: "smartphones-haut-de-gamme", name: "High-end Smartphones", slug: "high-end-smartphones" },
        { id: "smartphones-reconditionnes", name: "Refurbished Smartphones", slug: "refurbished-smartphones" },
        { id: "telephones-robustes-rugged", name: "Rugged Phones", slug: "rugged-phones" },
        { id: "mini-smartphones", name: "Mini Smartphones", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "Professional Smartphones", slug: "professional-smartphones" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "Classic & Landline Phones",
      slug: "classic-landline-phones",
      subcategories: [
        { id: "telephones-portables-classiques", name: "Classic Mobile Phones", slug: "classic-mobile-phones" },
        { id: "telephones-a-clapet", name: "Flip Phones", slug: "flip-phones" },
        { id: "telephones-seniors", name: "Senior Phones", slug: "senior-phones" },
        { id: "telephones-fixes-filaires", name: "Wired Landline Phones", slug: "wired-landline-phones" },
        { id: "telephones-fixes-sans-fil", name: "Cordless Landline Phones", slug: "cordless-landline-phones" },
        { id: "combines-dect", name: "DECT Handsets", slug: "dect-handsets" },
        { id: "telephones-voip", name: "VoIP Phones", slug: "voip-phones" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "Tablets & Mobile Devices",
      slug: "tablets-mobile-devices",
      subcategories: [
        { id: "tablettes-android", name: "Android Tablets", slug: "android-tablets" },
        { id: "ipad", name: "iPad", slug: "ipad" },
        { id: "tablettes-graphiques", name: "Graphics Tablets", slug: "graphics-tablets" },
        { id: "tablettes-enfants", name: "Kids Tablets", slug: "kids-tablets" },
        { id: "liseuses-electroniques", name: "E-readers", slug: "e-readers" },
        { id: "phablettes", name: "Phablets", slug: "phablets" },
        { id: "mini-tablettes", name: "Mini Tablets", slug: "mini-tablets" },
        { id: "tablettes-professionnelles", name: "Professional Tablets", slug: "professional-tablets" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "Phone Accessories",
      slug: "phone-accessories",
      subcategories: [
        { id: "coques-protection", name: "Protective Cases", slug: "protective-cases" },
        { id: "housses", name: "Sleeves", slug: "sleeves" },
        { id: "etuis", name: "Cases", slug: "cases" },
        { id: "bumpers", name: "Bumpers", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "Screen Protectors", slug: "screen-protectors" },
        { id: "supports-telephones", name: "Phone Stands", slug: "phone-stands" },
        { id: "supports-voiture", name: "Car Mounts", slug: "car-mounts" },
        { id: "stylos-tactiles", name: "Stylus Pens", slug: "stylus-pens" },
        { id: "anneaux-grips", name: "Rings & Grips", slug: "rings-grips" },
        { id: "pochettes-impermeables", name: "Waterproof Pouches", slug: "waterproof-pouches" }
      ]
    },
    {
      id: "batteries-charge",
      name: "Batteries & Charging",
      slug: "batteries-charging",
      subcategories: [
        { id: "chargeurs-standard", name: "Standard Chargers", slug: "standard-chargers" },
        { id: "chargeurs-rapides-fast-quick", name: "Fast Chargers (Fast Charge, Quick Charge)", slug: "fast-chargers-fast-quick" },
        { id: "chargeurs-sans-fil", name: "Wireless Chargers", slug: "wireless-chargers" },
        { id: "stations-recharge", name: "Charging Stations", slug: "charging-stations" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "High-capacity External Batteries", slug: "high-capacity-external-batteries" },
        { id: "cables-usb", name: "USB Cables (Type-C, Lightning, Micro-USB)", slug: "usb-cables" },
        { id: "adaptateurs-secteur", name: "Wall Adapters", slug: "wall-adapters" },
        { id: "chargeurs-voiture", name: "Car Chargers", slug: "car-chargers" },
        { id: "hubs-usb-multiprises-intelligentes", name: "USB Hubs & Smart Power Strips", slug: "usb-hubs-smart-power-strips" }
      ]
    },
    {
      id: "audio-mobile",
      name: "Mobile Audio",
      slug: "mobile-audio",
      subcategories: [
        { id: "ecouteurs-filaires", name: "Wired Earphones", slug: "wired-earphones" },
        { id: "ecouteurs-bluetooth", name: "Bluetooth Earphones", slug: "bluetooth-earphones" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "Wireless Headphones", slug: "wireless-headphones" },
        { id: "casques-filaires", name: "Wired Headphones", slug: "wired-headphones" },
        { id: "enceintes-bluetooth", name: "Bluetooth Speakers", slug: "bluetooth-speakers" },
        { id: "kits-mains-libres", name: "Hands-free Kits", slug: "hands-free-kits" },
        { id: "micros-mobiles", name: "Mobile Microphones", slug: "mobile-microphones" },
        { id: "adaptateurs-audio", name: "Audio Adapters", slug: "audio-adapters" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "Phone Parts & Repair",
      slug: "phone-parts-repair",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "LCD and OLED Screens", slug: "lcd-oled-screens" },
        { id: "batteries-internes", name: "Internal Batteries", slug: "internal-batteries" },
        { id: "connecteurs-charge", name: "Charging Connectors", slug: "charging-connectors" },
        { id: "nappes-circuits", name: "Flex Cables and Circuits", slug: "flex-cables-circuits" },
        { id: "cameras-avant-arriere", name: "Front/Rear Cameras", slug: "front-rear-cameras" },
        { id: "chassis-coques-arriere", name: "Frames and Back Covers", slug: "frames-back-covers" },
        { id: "boutons-flex", name: "Buttons & Flex", slug: "buttons-flex" },
        { id: "haut-parleurs-micros", name: "Speakers & Microphones", slug: "speakers-microphones" },
        { id: "vitres-arriere", name: "Back Glass", slug: "back-glass" },
        { id: "kits-reparation", name: "Repair Kits", slug: "repair-kits" },
        { id: "outils-demontage", name: "Disassembly Tools", slug: "disassembly-tools" },
        { id: "stations-soudure", name: "Soldering Stations", slug: "soldering-stations" },
        { id: "ecrans-reconditionnes", name: "Refurbished Screens", slug: "refurbished-screens" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "Connected Objects (Mobile)",
      slug: "connected-objects-mobile",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatches", slug: "smartwatches" },
        { id: "bracelets-connectes", name: "Fitness Bands", slug: "fitness-bands" },
        { id: "trackers-gps", name: "GPS Trackers", slug: "gps-trackers" },
        { id: "ecouteurs-intelligents", name: "Smart Earphones", slug: "smart-earphones" },
        { id: "lunettes-connectees", name: "Smart Glasses", slug: "smart-glasses" },
        { id: "balises-bluetooth", name: "Bluetooth Beacons", slug: "bluetooth-beacons" },
        { id: "assistants-vocaux-portables", name: "Portable Voice Assistants", slug: "portable-voice-assistants" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "Mobile Network & Communication",
      slug: "mobile-network-communication",
      subcategories: [
        { id: "cartes-sim", name: "SIM Cards", slug: "sim-cards" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "4G/5G Routers", slug: "4g-5g-routers" },
        { id: "modems-portables", name: "Portable Modems", slug: "portable-modems" },
        { id: "antennes-amplificateurs-reseau", name: "Antennas and Signal Boosters", slug: "antennas-signal-boosters" },
        { id: "repeteurs-gsm", name: "GSM Repeaters", slug: "gsm-repeaters" },
        { id: "boitiers-wifi-mobiles", name: "Mobile Wi-Fi Boxes", slug: "mobile-wifi-boxes" },
        { id: "adaptateurs-reseau-telephone", name: "Phone Network Adapters", slug: "phone-network-adapters" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "Security & Protection",
      slug: "security-protection",
      subcategories: [
        { id: "antivols-telephone", name: "Phone Anti-theft", slug: "phone-anti-theft" },
        { id: "etuis-renforces", name: "Reinforced Cases", slug: "reinforced-cases" },
        { id: "coques-anti-chute", name: "Drop-proof Cases", slug: "drop-proof-cases" },
        { id: "protections-etanches-ip68", name: "IP68 Waterproof Protections", slug: "ip68-waterproof-protections" },
        { id: "housses-anti-choc", name: "Shockproof Sleeves", slug: "shockproof-sleeves" },
        { id: "verres-trempes-haute-resistance", name: "High-resistance Tempered Glass", slug: "high-resistance-tempered-glass" },
        { id: "accessoires-confidentialite", name: "Privacy Accessories", slug: "privacy-accessories" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "Apps & Services",
      slug: "apps-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "Mobile Repair Services", slug: "mobile-repair-services" },
        { id: "debloquage-desimlockage", name: "Unlocking & SIM Unlocking", slug: "unlocking-sim-unlocking" },
        { id: "transfert-donnees", name: "Data Transfer", slug: "data-transfer" },
        { id: "diagnostics-mobiles", name: "Diagnostics", slug: "diagnostics" },
        { id: "accessoires-sur-mesure", name: "Custom Accessories", slug: "custom-accessories" },
        { id: "personnalisation-mobile", name: "Mobile Personalization", slug: "mobile-personalization" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "Popular Brands (Mobiles)",
      slug: "popular-brands-mobiles",
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
      name: "Mobile Operators in Algeria",
      slug: "mobile-operators-algeria",
      subcategories: [
        { id: "djezzy", name: "Djezzy", slug: "djezzy" },
        { id: "ooredoo", name: "Ooredoo", slug: "ooredoo" },
        { id: "mobilis", name: "Mobilis", slug: "mobilis" },
        { id: "algerie-telecom", name: "Algeria Telecom", slug: "algeria-telecom" }
      ]
    }
  ]
};