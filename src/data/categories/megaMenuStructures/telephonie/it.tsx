import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieIt: MenuCategory = {
  id: "telefonia",
  name: "Telefonia",
  slug: "telefonia",
  icon: <Smartphone className="w-4 h-4" />,
  subcategories: [
    {
      id: "smartphones",
      name: "Smartphone",
      slug: "smartphones",
      subcategories: [
        { id: "smartphones-android", name: "Smartphone Android", slug: "smartphones-android" },
        { id: "iphone", name: "iPhone", slug: "iphone" },
        { id: "smartphones-5g", name: "Smartphone 5G", slug: "smartphones-5g" },
        { id: "smartphones-gaming", name: "Smartphone gaming", slug: "smartphones-gaming" },
        { id: "smartphones-pliables", name: "Smartphone pieghevoli", slug: "smartphones-pliables" },
        { id: "smartphones-entree-de-gamme", name: "Smartphone entry‑level", slug: "smartphones-entree-de-gamme" },
        { id: "smartphones-milieu-de-gamme", name: "Smartphone di fascia media", slug: "smartphones-milieu-de-gamme" },
        { id: "smartphones-haut-de-gamme", name: "Smartphone di fascia alta", slug: "smartphones-haut-de-gamme" },
        { id: "smartphones-reconditionnes", name: "Smartphone ricondizionati", slug: "smartphones-reconditionnes" },
        { id: "telephones-robustes-rugged", name: "Telefoni robusti (rugged)", slug: "telephones-robustes-rugged" },
        { id: "mini-smartphones", name: "Mini smartphone", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "Smartphone professionali", slug: "smartphones-professionnels" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "Telefoni classici e fissi",
      slug: "telephones-classiques-fixes",
      subcategories: [
        { id: "telephones-portables-classiques", name: "Telefoni cellulari classici", slug: "telephones-portables-classiques" },
        { id: "telephones-a-clapet", name: "Telefoni a conchiglia", slug: "telephones-a-clapet" },
        { id: "telephones-seniors", name: "Telefoni per anziani", slug: "telephones-seniors" },
        { id: "telephones-fixes-filaires", name: "Telefoni fissi con cavo", slug: "telephones-fixes-filaires" },
        { id: "telephones-fixes-sans-fil", name: "Telefoni fissi senza fili", slug: "telephones-fixes-sans-fil" },
        { id: "combines-dect", name: "Cornette DECT", slug: "combines-dect" },
        { id: "telephones-voip", name: "Telefoni VoIP", slug: "telephones-voip" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "Tablet & dispositivi mobili",
      slug: "tablettes-appareils-mobiles",
      subcategories: [
        { id: "tablettes-android", name: "Tablet Android", slug: "tablettes-android" },
        { id: "ipad", name: "iPad", slug: "ipad" },
        { id: "tablettes-graphiques", name: "Tavolette grafiche", slug: "tablettes-graphiques" },
        { id: "tablettes-enfants", name: "Tablet per bambini", slug: "tablettes-enfants" },
        { id: "liseuses-electroniques", name: "E‑reader", slug: "liseuses-electroniques" },
        { id: "phablettes", name: "Phablet", slug: "phablettes" },
        { id: "mini-tablettes", name: "Mini tablet", slug: "mini-tablettes" },
        { id: "tablettes-professionnelles", name: "Tablet professionali", slug: "tablettes-professionnelles" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "Accessori per telefoni",
      slug: "accessoires-telephones",
      subcategories: [
        { id: "coques-protection", name: "Cover protettive", slug: "coques-protection" },
        { id: "housses", name: "Custodie", slug: "housses" },
        { id: "etuis", name: "Astucci", slug: "etuis" },
        { id: "bumpers", name: "Bumper", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "Vetri e pellicole protettive", slug: "vitres-protections-ecran" },
        { id: "supports-telephones", name: "Supporti per telefono", slug: "supports-telephones" },
        { id: "supports-voiture", name: "Supporti auto", slug: "supports-voiture" },
        { id: "stylos-tactiles", name: "Pennini touch", slug: "stylos-tactiles" },
        { id: "anneaux-grips", name: "Anelli & grip", slug: "anneaux-grips" },
        { id: "pochettes-impermeables", name: "Bustine impermeabili", slug: "pochettes-impermeables" }
      ]
    },
    {
      id: "batteries-charge",
      name: "Batterie & ricarica",
      slug: "batteries-charge",
      subcategories: [
        { id: "chargeurs-standard", name: "Caricabatterie standard", slug: "chargeurs-standard" },
        { id: "chargeurs-rapides-fast-quick", name: "Caricatori rapidi (Fast/Quick Charge)", slug: "chargeurs-rapides-fast-quick" },
        { id: "chargeurs-sans-fil", name: "Caricatori wireless", slug: "chargeurs-sans-fil" },
        { id: "stations-recharge", name: "Stazioni di ricarica", slug: "stations-recharge" },
        { id: "powerbanks", name: "Powerbank", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "Batterie esterne ad alta capacità", slug: "batteries-externes-haute-capacite" },
        { id: "cables-usb", name: "Cavi USB (Type‑C, Lightning, Micro‑USB)", slug: "cables-usb" },
        { id: "adaptateurs-secteur", name: "Adattatori da muro", slug: "adaptateurs-secteur" },
        { id: "chargeurs-voiture", name: "Caricabatterie auto", slug: "chargeurs-voiture" },
        { id: "hubs-usb-multiprises-intelligentes", name: "Hub USB & ciabatte intelligenti", slug: "hubs-usb-multiprises-intelligentes" }
      ]
    },
    {
      id: "audio-mobile",
      name: "Audio mobile",
      slug: "audio-mobile",
      subcategories: [
        { id: "ecouteurs-filaires", name: "Auricolari con filo", slug: "ecouteurs-filaires" },
        { id: "ecouteurs-bluetooth", name: "Auricolari Bluetooth", slug: "ecouteurs-bluetooth" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "Cuffie wireless", slug: "casques-sans-fil" },
        { id: "casques-filaires", name: "Cuffie con filo", slug: "casques-filaires" },
        { id: "enceintes-bluetooth", name: "Altoparlanti Bluetooth", slug: "enceintes-bluetooth" },
        { id: "kits-mains-libres", name: "Kit vivavoce", slug: "kits-mains-libres" },
        { id: "micros-mobiles", name: "Microfoni mobili", slug: "micros-mobiles" },
        { id: "adaptateurs-audio", name: "Adattatori audio", slug: "adaptateurs-audio" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "Ricambi & riparazione telefoni",
      slug: "pieces-reparation-telephone",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "Schermi LCD e OLED", slug: "ecrans-lcd-oled" },
        { id: "batteries-internes", name: "Batterie interne", slug: "batteries-internes" },
        { id: "connecteurs-charge", name: "Connettori di ricarica", slug: "connecteurs-charge" },
        { id: "nappes-circuits", name: "Flat cable & circuiti", slug: "nappes-circuits" },
        { id: "cameras-avant-arriere", name: "Fotocamere anteriori/posteriori", slug: "cameras-avant-arriere" },
        { id: "chassis-coques-arriere", name: "Telai & cover posteriori", slug: "chassis-coques-arriere" },
        { id: "boutons-flex", name: "Pulsanti & flex", slug: "boutons-flex" },
        { id: "haut-parleurs-micros", name: "Altoparlanti & microfoni", slug: "haut-parleurs-micros" },
        { id: "vitres-arriere", name: "Vetro posteriore", slug: "vitres-arriere" },
        { id: "kits-reparation", name: "Kit di riparazione", slug: "kits-reparation" },
        { id: "outils-demontage", name: "Strumenti di smontaggio", slug: "outils-demontage" },
        { id: "stations-soudure", name: "Stazioni di saldatura", slug: "stations-soudure" },
        { id: "ecrans-reconditionnes", name: "Schermi ricondizionati", slug: "ecrans-reconditionnes" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "Oggetti connessi (Mobile)",
      slug: "objets-connectes-mobile",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatch", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Bracciali smart", slug: "bracelets-connectes" },
        { id: "trackers-gps", name: "Tracker GPS", slug: "trackers-gps" },
        { id: "ecouteurs-intelligents", name: "Auricolari intelligenti", slug: "ecouteurs-intelligents" },
        { id: "lunettes-connectees", name: "Occhiali smart", slug: "lunettes-connectees" },
        { id: "balises-bluetooth", name: "Beacon Bluetooth", slug: "balises-bluetooth" },
        { id: "assistants-vocaux-portables", name: "Assistenti vocali portatili", slug: "assistants-vocaux-portables" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "Rete & comunicazione mobile",
      slug: "reseau-communication-mobile",
      subcategories: [
        { id: "cartes-sim", name: "Schede SIM", slug: "cartes-sim" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "Router 4G/5G", slug: "routeurs-4g-5g" },
        { id: "modems-portables", name: "Modem portatili", slug: "modems-portables" },
        { id: "antennes-amplificateurs-reseau", name: "Antenne & amplificatori di segnale", slug: "antennes-amplificateurs-reseau" },
        { id: "repeteurs-gsm", name: "Ripetitori GSM", slug: "repeteurs-gsm" },
        { id: "boitiers-wifi-mobiles", name: "Box Wi‑Fi mobili", slug: "boitiers-wifi-mobiles" },
        { id: "adaptateurs-reseau-telephone", name: "Adattatori di rete per telefono", slug: "adaptateurs-reseau-telephone" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "Sicurezza & protezione",
      slug: "securite-protection",
      subcategories: [
        { id: "antivols-telephone", name: "Antifurto telefono", slug: "antivols-telephone" },
        { id: "etuis-renforces", name: "Cover rinforzate", slug: "etuis-renforces" },
        { id: "coques-anti-chute", name: "Cover anti‑caduta", slug: "coques-anti-chute" },
        { id: "protections-etanches-ip68", name: "Protezioni impermeabili IP68", slug: "protections-etanches-ip68" },
        { id: "housses-anti-choc", name: "Custodie anti‑urto", slug: "housses-anti-choc" },
        { id: "verres-trempes-haute-resistance", name: "Vetri temperati ad alta resistenza", slug: "verres-trempes-haute-resistance" },
        { id: "accessoires-confidentialite", name: "Accessori privacy", slug: "accessoires-confidentialite" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "App & servizi",
      slug: "applications-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "Servizi di riparazione mobile", slug: "services-reparation-mobile" },
        { id: "debloquage-desimlockage", name: "Sblocco & SIM unlock", slug: "debloquage-desimlockage" },
        { id: "transfert-donnees", name: "Trasferimento dati", slug: "transfert-donnees" },
        { id: "diagnostics-mobiles", name: "Diagnostica", slug: "diagnostics-mobiles" },
        { id: "accessoires-sur-mesure", name: "Accessori su misura", slug: "accessoires-sur-mesure" },
        { id: "personnalisation-mobile", name: "Personalizzazione mobile", slug: "personnalisation-mobile" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "Marche popolari (Mobile)",
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
      name: "Operatori mobili in Algeria",
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