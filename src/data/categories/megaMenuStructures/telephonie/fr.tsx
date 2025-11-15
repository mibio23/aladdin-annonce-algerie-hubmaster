import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieFr: MenuCategory = {
  id: "telephonie",
  name: "Téléphonie",
  slug: "telephonie",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "Smartphones",
      slug: "smartphones",
      subcategories: [
        { id: "smartphones-android", name: "Smartphones Android", slug: "smartphones-android" },
        { id: "iphone", name: "iPhone", slug: "iphone" },
        { id: "smartphones-5g", name: "Smartphones 5G", slug: "smartphones-5g" },
        { id: "smartphones-gaming", name: "Smartphones gaming", slug: "smartphones-gaming" },
        { id: "smartphones-pliables", name: "Smartphones pliables", slug: "smartphones-pliables" },
        { id: "smartphones-entree-de-gamme", name: "Smartphones d’entrée de gamme", slug: "smartphones-entree-de-gamme" },
        { id: "smartphones-milieu-de-gamme", name: "Smartphones milieu de gamme", slug: "smartphones-milieu-de-gamme" },
        { id: "smartphones-haut-de-gamme", name: "Smartphones haut de gamme", slug: "smartphones-haut-de-gamme" },
        { id: "smartphones-reconditionnes", name: "Smartphones reconditionnés", slug: "smartphones-reconditionnes" },
        { id: "telephones-robustes-rugged", name: "Téléphones robustes (rugged)", slug: "telephones-robustes-rugged" },
        { id: "mini-smartphones", name: "Mini smartphones", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "Smartphones professionnels", slug: "smartphones-professionnels" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "Téléphones Classiques & Fixes",
      slug: "telephones-classiques-fixes",
      subcategories: [
        { id: "telephones-portables-classiques", name: "Téléphones portables classiques", slug: "telephones-portables-classiques" },
        { id: "telephones-a-clapet", name: "Téléphones à clapet", slug: "telephones-a-clapet" },
        { id: "telephones-seniors", name: "Téléphones seniors", slug: "telephones-seniors" },
        { id: "telephones-fixes-filaires", name: "Téléphones fixes filaires", slug: "telephones-fixes-filaires" },
        { id: "telephones-fixes-sans-fil", name: "Téléphones fixes sans fil", slug: "telephones-fixes-sans-fil" },
        { id: "combines-dect", name: "Combinés DECT", slug: "combines-dect" },
        { id: "telephones-voip", name: "Téléphones VoIP", slug: "telephones-voip" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "Tablettes & Appareils Mobiles",
      slug: "tablettes-appareils-mobiles",
      subcategories: [
        { id: "tablettes-android", name: "Tablettes Android", slug: "tablettes-android" },
        { id: "ipad", name: "iPad", slug: "ipad" },
        { id: "tablettes-graphiques", name: "Tablettes graphiques", slug: "tablettes-graphiques" },
        { id: "tablettes-enfants", name: "Tablettes enfants", slug: "tablettes-enfants" },
        { id: "liseuses-electroniques", name: "Liseuses électroniques", slug: "liseuses-electroniques" },
        { id: "phablettes", name: "Phablettes", slug: "phablettes" },
        { id: "mini-tablettes", name: "Mini tablettes", slug: "mini-tablettes" },
        { id: "tablettes-professionnelles", name: "Tablettes professionnelles", slug: "tablettes-professionnelles" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "Accessoires Téléphones",
      slug: "accessoires-telephones",
      subcategories: [
        { id: "coques-protection", name: "Coques de protection", slug: "coques-protection" },
        { id: "housses", name: "Housses", slug: "housses" },
        { id: "etuis", name: "Étuis", slug: "etuis" },
        { id: "bumpers", name: "Bumpers", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "Vitres & protections d’écran", slug: "vitres-protections-ecran" },
        { id: "supports-telephones", name: "Supports téléphones", slug: "supports-telephones" },
        { id: "supports-voiture", name: "Supports voiture", slug: "supports-voiture" },
        { id: "stylos-tactiles", name: "Stylos tactiles", slug: "stylos-tactiles" },
        { id: "anneaux-grips", name: "Anneaux & grips", slug: "anneaux-grips" },
        { id: "pochettes-impermeables", name: "Pochettes imperméables", slug: "pochettes-impermeables" }
      ]
    },
    {
      id: "batteries-charge",
      name: "Batteries & Charge",
      slug: "batteries-charge",
      subcategories: [
        { id: "chargeurs-standard", name: "Chargeurs standard", slug: "chargeurs-standard" },
        { id: "chargeurs-rapides-fast-quick", name: "Chargeurs rapides (Fast Charge, Quick Charge)", slug: "chargeurs-rapides-fast-quick" },
        { id: "chargeurs-sans-fil", name: "Chargeurs sans fil", slug: "chargeurs-sans-fil" },
        { id: "stations-recharge", name: "Stations de recharge", slug: "stations-recharge" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "Batteries externes haute capacité", slug: "batteries-externes-haute-capacite" },
        { id: "cables-usb", name: "Câbles USB (Type‑C, Lightning, Micro‑USB)", slug: "cables-usb" },
        { id: "adaptateurs-secteur", name: "Adaptateurs secteur", slug: "adaptateurs-secteur" },
        { id: "chargeurs-voiture", name: "Chargeurs voiture", slug: "chargeurs-voiture" },
        { id: "hubs-usb-multiprises-intelligentes", name: "Hubs USB & multiprises intelligentes", slug: "hubs-usb-multiprises-intelligentes" }
      ]
    },
    {
      id: "audio-mobile",
      name: "Audio Mobile",
      slug: "audio-mobile",
      subcategories: [
        { id: "ecouteurs-filaires", name: "Écouteurs filaires", slug: "ecouteurs-filaires" },
        { id: "ecouteurs-bluetooth", name: "Écouteurs Bluetooth", slug: "ecouteurs-bluetooth" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "Casques sans fil", slug: "casques-sans-fil" },
        { id: "casques-filaires", name: "Casques filaires", slug: "casques-filaires" },
        { id: "enceintes-bluetooth", name: "Enceintes Bluetooth", slug: "enceintes-bluetooth" },
        { id: "kits-mains-libres", name: "Kits mains‑libres", slug: "kits-mains-libres" },
        { id: "micros-mobiles", name: "Micros mobiles", slug: "micros-mobiles" },
        { id: "adaptateurs-audio", name: "Adaptateurs audio", slug: "adaptateurs-audio" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "Pièces & Réparation Téléphone",
      slug: "pieces-reparation-telephone",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "Écrans LCD et OLED", slug: "ecrans-lcd-oled" },
        { id: "batteries-internes", name: "Batteries internes", slug: "batteries-internes" },
        { id: "connecteurs-charge", name: "Connecteurs de charge", slug: "connecteurs-charge" },
        { id: "nappes-circuits", name: "Nappes et circuits", slug: "nappes-circuits" },
        { id: "cameras-avant-arriere", name: "Caméras avant/arrière", slug: "cameras-avant-arriere" },
        { id: "chassis-coques-arriere", name: "Châssis et coques arrière", slug: "chassis-coques-arriere" },
        { id: "boutons-flex", name: "Boutons & flex", slug: "boutons-flex" },
        { id: "haut-parleurs-micros", name: "Haut‑parleurs & micros", slug: "haut-parleurs-micros" },
        { id: "vitres-arriere", name: "Vitres arrière", slug: "vitres-arriere" },
        { id: "kits-reparation", name: "Kits de réparation", slug: "kits-reparation" },
        { id: "outils-demontage", name: "Outils de démontage", slug: "outils-demontage" },
        { id: "stations-soudure", name: "Stations de soudure", slug: "stations-soudure" },
        { id: "ecrans-reconditionnes", name: "Écrans reconditionnés", slug: "ecrans-reconditionnes" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "Objets Connectés (Mobile)",
      slug: "objets-connectes-mobile",
      subcategories: [
        { id: "montres-connectees", name: "Montres connectées", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Bracelets connectés", slug: "bracelets-connectes" },
        { id: "trackers-gps", name: "Trackers GPS", slug: "trackers-gps" },
        { id: "ecouteurs-intelligents", name: "Écouteurs intelligents", slug: "ecouteurs-intelligents" },
        { id: "lunettes-connectees", name: "Lunettes connectées", slug: "lunettes-connectees" },
        { id: "balises-bluetooth", name: "Balises Bluetooth", slug: "balises-bluetooth" },
        { id: "assistants-vocaux-portables", name: "Assistants vocaux portables", slug: "assistants-vocaux-portables" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "Réseau & Communication Mobile",
      slug: "reseau-communication-mobile",
      subcategories: [
        { id: "cartes-sim", name: "Cartes SIM", slug: "cartes-sim" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "Routeurs 4G/5G", slug: "routeurs-4g-5g" },
        { id: "modems-portables", name: "Modems portables", slug: "modems-portables" },
        { id: "antennes-amplificateurs-reseau", name: "Antennes et amplificateurs réseau", slug: "antennes-amplificateurs-reseau" },
        { id: "repeteurs-gsm", name: "Répéteurs GSM", slug: "repeteurs-gsm" },
        { id: "boitiers-wifi-mobiles", name: "Boîtiers Wi‑Fi mobiles", slug: "boitiers-wifi-mobiles" },
        { id: "adaptateurs-reseau-telephone", name: "Adaptateurs réseau téléphone", slug: "adaptateurs-reseau-telephone" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "Sécurité & Protection",
      slug: "securite-protection",
      subcategories: [
        { id: "antivols-telephone", name: "Antivols téléphone", slug: "antivols-telephone" },
        { id: "etuis-renforces", name: "Étuis renforcés", slug: "etuis-renforces" },
        { id: "coques-anti-chute", name: "Coques anti‑chute", slug: "coques-anti-chute" },
        { id: "protections-etanches-ip68", name: "Protections étanches IP68", slug: "protections-etanches-ip68" },
        { id: "housses-anti-choc", name: "Housses anti‑choc", slug: "housses-anti-choc" },
        { id: "verres-trempes-haute-resistance", name: "Verres trempés haute résistance", slug: "verres-trempes-haute-resistance" },
        { id: "accessoires-confidentialite", name: "Accessoires de confidentialité", slug: "accessoires-confidentialite" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "Applications & Services",
      slug: "applications-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "Services de réparation mobile", slug: "services-reparation-mobile" },
        { id: "debloquage-desimlockage", name: "Déblocage & désimlockage", slug: "debloquage-desimlockage" },
        { id: "transfert-donnees", name: "Transfert de données", slug: "transfert-donnees" },
        { id: "diagnostics-mobiles", name: "Diagnostics", slug: "diagnostics-mobiles" },
        { id: "accessoires-sur-mesure", name: "Accessoires sur mesure", slug: "accessoires-sur-mesure" },
        { id: "personnalisation-mobile", name: "Personnalisation mobile", slug: "personnalisation-mobile" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "Marques Populaires (Mobiles)",
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
      name: "Opérateurs Mobiles en Algérie",
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