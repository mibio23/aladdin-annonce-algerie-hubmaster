import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Laptop } from "lucide-react";

export const informatiqueElectroniqueFr: MenuCategory = {
  id: "informatique-electronique",
  name: "Informatique & Électronique",
  slug: "informatique-electronique",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs-pc",
      name: "Ordinateurs & PC",
      slug: "ordinateurs-pc",
      subcategories: [
        { id: "pc-de-bureau", name: "PC de bureau", slug: "pc-de-bureau" },
        { id: "pc-gaming", name: "PC gaming", slug: "pc-gaming" },
        { id: "pc-professionnels", name: "PC professionnels", slug: "pc-professionnels" },
        { id: "mini-pc", name: "Mini PC", slug: "mini-pc" },
        { id: "pc-tout-en-un", name: "PC tout-en-un", slug: "pc-tout-en-un" },
        { id: "ordinateurs-portables", name: "Ordinateurs portables", slug: "ordinateurs-portables" },
        { id: "ultrabooks", name: "Ultrabooks", slug: "ultrabooks" },
        { id: "laptops-professionnels", name: "Laptops professionnels", slug: "laptops-professionnels" },
        { id: "laptops-gaming", name: "Laptops gaming", slug: "laptops-gaming" },
        { id: "laptops-etudiants", name: "Laptops étudiants", slug: "laptops-etudiants" },
        { id: "macbook", name: "MacBook", slug: "macbook" },
        { id: "chromebook", name: "Chromebook", slug: "chromebook" },
        { id: "stations-travail-portables", name: "Stations de travail portables", slug: "stations-travail-portables" },
        { id: "pc-reconditionnes", name: "PC reconditionnés", slug: "pc-reconditionnes" }
      ]
    },
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
    },
    {
      id: "composants-informatiques",
      name: "Composants Informatiques",
      slug: "composants-informatiques",
      subcategories: [
        { id: "processeurs", name: "Processeurs (Intel, AMD)", slug: "processeurs" },
        { id: "cartes-graphiques", name: "Cartes graphiques (NVIDIA, AMD)", slug: "cartes-graphiques" },
        { id: "cartes-meres", name: "Cartes mères", slug: "cartes-meres" },
        { id: "memoires-ram", name: "Mémoires RAM", slug: "memoires-ram" },
        { id: "ssd", name: "SSD", slug: "ssd" },
        { id: "disques-durs-hdd", name: "Disques durs HDD", slug: "disques-durs-hdd" },
        { id: "alimentation-pc", name: "Alimentations PC", slug: "alimentation-pc" },
        { id: "boitiers-pc", name: "Boîtiers PC", slug: "boitiers-pc" },
        { id: "refroidissement-liquide", name: "Systèmes de refroidissement liquide", slug: "refroidissement-liquide" },
        { id: "ventilateurs-air", name: "Ventilateurs et refroidissement air", slug: "ventilateurs-air" },
        { id: "pates-thermiques", name: "Pâtes thermiques", slug: "pates-thermiques" },
        { id: "cartes-son", name: "Cartes son", slug: "cartes-son" },
        { id: "cartes-reseau", name: "Cartes réseau", slug: "cartes-reseau" },
        { id: "cartes-acquisition-video", name: "Cartes d’acquisition vidéo", slug: "cartes-acquisition-video" }
      ]
    },
    {
      id: "peripheriques-pc",
      name: "Périphériques PC",
      slug: "peripheriques-pc",
      subcategories: [
        { id: "ecrans-moniteurs", name: "Écrans et moniteurs", slug: "ecrans-moniteurs" },
        { id: "moniteurs-gaming", name: "Moniteurs gaming", slug: "moniteurs-gaming" },
        { id: "moniteurs-incurves", name: "Moniteurs incurvés", slug: "moniteurs-incurves" },
        {
          id: "claviers",
          name: "Claviers",
          slug: "claviers",
          subcategories: [
            { id: "claviers-mecaniques", name: "Mécaniques", slug: "claviers-mecaniques" },
            { id: "claviers-sans-fil", name: "Sans fil", slug: "claviers-sans-fil" },
            { id: "claviers-gaming", name: "Gaming", slug: "claviers-gaming" }
          ]
        },
        {
          id: "souris",
          name: "Souris",
          slug: "souris",
          subcategories: [
            { id: "souris-filaire", name: "Filaire", slug: "souris-filaire" },
            { id: "souris-sans-fil", name: "Sans fil", slug: "souris-sans-fil" },
            { id: "souris-gaming", name: "Gaming", slug: "souris-gaming" }
          ]
        },
        { id: "tapis-souris", name: "Tapis de souris", slug: "tapis-souris" },
        { id: "webcams", name: "Webcams", slug: "webcams" },
        { id: "microphones", name: "Microphones", slug: "microphones" },
        { id: "enceintes-pc", name: "Enceintes PC", slug: "enceintes-pc" },
        { id: "casques-audio", name: "Casques audio", slug: "casques-audio" },
        { id: "disques-durs-externes", name: "Disques durs externes", slug: "disques-durs-externes" },
        { id: "cles-usb", name: "Clés USB", slug: "cles-usb" },
        { id: "lecteurs-cartes-memoire", name: "Lecteurs de cartes mémoire", slug: "lecteurs-cartes-memoire" },
        { id: "stations-accueil", name: "Stations d’accueil", slug: "stations-accueil" },
        { id: "imprimantes", name: "Imprimantes", slug: "imprimantes" },
        { id: "scanners", name: "Scanners", slug: "scanners" },
        { id: "videoprojecteurs", name: "Vidéoprojecteurs", slug: "videoprojecteurs" }
      ]
    },
    {
      id: "reseau-internet",
      name: "Réseau & Internet",
      slug: "reseau-internet",
      subcategories: [
        { id: "routeurs-wifi", name: "Routeurs Wi‑Fi", slug: "routeurs-wifi" },
        { id: "wifi-mesh", name: "Systèmes Wi‑Fi mesh", slug: "wifi-mesh" },
        { id: "modems", name: "Modems", slug: "modems" },
        { id: "repeteurs", name: "Répéteurs", slug: "repeteurs" },
        { id: "points-acces", name: "Points d’accès", slug: "points-acces" },
        { id: "switches", name: "Switches réseau", slug: "switches" },
        { id: "cables-ethernet", name: "Câbles Ethernet", slug: "cables-ethernet" },
        { id: "fibre-optique", name: "Équipements fibre optique", slug: "fibre-optique" },
        { id: "routeurs-4g-5g", name: "Routeurs 4G/5G", slug: "routeurs-4g-5g" },
        { id: "antennes-reseau", name: "Antennes réseau", slug: "antennes-reseau" },
        { id: "adaptateurs-usb-wifi", name: "Adaptateurs Wi‑Fi USB", slug: "adaptateurs-usb-wifi" },
        { id: "routeurs-vpn", name: "Routeurs VPN", slug: "routeurs-vpn" }
      ]
    },
    {
      id: "equipement-bureau",
      name: "Équipement de Bureau",
      slug: "equipement-bureau",
      subcategories: [
        { id: "imprimantes-laser", name: "Imprimantes laser", slug: "imprimantes-laser" },
        { id: "imprimantes-jet-encre", name: "Imprimantes jet d’encre", slug: "imprimantes-jet-encre" },
        { id: "photocopieurs", name: "Photocopieurs", slug: "photocopieurs" },
        { id: "scanners-pro", name: "Scanners", slug: "scanners-pro" },
        { id: "fax", name: "Fax", slug: "fax" },
        { id: "multifonctions", name: "Imprimantes multifonctions", slug: "multifonctions" },
        { id: "cartouches-encre", name: "Cartouches d’encre", slug: "cartouches-encre" },
        { id: "toners", name: "Toners", slug: "toners" },
        { id: "plastifieuses", name: "Plastifieuses", slug: "plastifieuses" },
        { id: "destructeurs-documents", name: "Destructeurs de documents", slug: "destructeurs-documents" },
        { id: "videoprojecteurs-pro", name: "Vidéoprojecteurs professionnels", slug: "videoprojecteurs-pro" },
        { id: "tableaux-blancs", name: "Tableaux blancs", slug: "tableaux-blancs" },
        { id: "equipements-conference", name: "Équipements de conférence", slug: "equipements-conference" }
      ]
    },
    {
      id: "electronique-gadgets",
      name: "Électronique & Gadgets",
      slug: "electronique-gadgets",
      subcategories: [
        { id: "montres-connectees", name: "Montres connectées", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Bracelets connectés", slug: "bracelets-connectes" },
        { id: "lunettes-intelligentes", name: "Lunettes intelligentes", slug: "lunettes-intelligentes" },
        { id: "action-cams", name: "Action cams", slug: "action-cams" },
        { id: "drones", name: "Drones", slug: "drones" },
        { id: "mini-projecteurs", name: "Mini projecteurs", slug: "mini-projecteurs" },
        { id: "casques-vr", name: "Casques VR", slug: "casques-vr" },
        { id: "dispositifs-ar", name: "Dispositifs AR", slug: "dispositifs-ar" },
        { id: "liseuses", name: "Liseuses électroniques", slug: "liseuses" },
        { id: "radios", name: "Radios", slug: "radios" },
        { id: "talkie-walkies", name: "Talkie‑walkies", slug: "talkie-walkies" },
        { id: "gps-portables", name: "GPS portables", slug: "gps-portables" },
        { id: "stylos-numeriques", name: "Stylos numériques", slug: "stylos-numeriques" }
      ]
    },
    {
      id: "maison-intelligente",
      name: "Maison Intelligente & Domotique",
      slug: "maison-intelligente",
      subcategories: [
        { id: "ampoules-connectees", name: "Ampoules connectées", slug: "ampoules-connectees" },
        { id: "bandes-led", name: "Bandes LED", slug: "bandes-led" },
        { id: "prises-intelligentes", name: "Prises intelligentes", slug: "prises-intelligentes" },
        { id: "cameras-securite", name: "Caméras de sécurité", slug: "cameras-securite" },
        { id: "cameras-ip", name: "Caméras IP", slug: "cameras-ip" },
        { id: "systemes-alarme", name: "Systèmes d’alarme", slug: "systemes-alarme" },
        { id: "serrures-connectees", name: "Serrures connectées", slug: "serrures-connectees" },
        { id: "thermostats", name: "Thermostats", slug: "thermostats" },
        {
          id: "capteurs",
          name: "Capteurs",
          slug: "capteurs",
          subcategories: [
            { id: "mouvement", name: "Mouvement", slug: "mouvement" },
            { id: "fumee", name: "Fumée", slug: "fumee" },
            { id: "fuite-eau", name: "Fuite d’eau", slug: "fuite-eau" }
          ]
        },
        { id: "interrupteurs-intelligents", name: "Interrupteurs intelligents", slug: "interrupteurs-intelligents" },
        { id: "assistants-vocaux", name: "Assistants vocaux", slug: "assistants-vocaux" },
        { id: "sonnettes-video", name: "Sonnettes vidéo", slug: "sonnettes-video" }
      ]
    },
    {
      id: "tv-divertissement",
      name: "TV & Divertissement",
      slug: "tv-divertissement",
      subcategories: [
        { id: "televiseurs-led", name: "Téléviseurs LED", slug: "televiseurs-led" },
        { id: "televiseurs-oled", name: "Téléviseurs OLED", slug: "televiseurs-oled" },
        { id: "qled", name: "QLED", slug: "qled" },
        { id: "smart-tv", name: "Smart TV", slug: "smart-tv" },
        { id: "android-tv", name: "Android TV", slug: "android-tv" },
        { id: "recepteurs-tv", name: "Récepteurs TV", slug: "recepteurs-tv" },
        { id: "decodeurs-satellites", name: "Décodeurs satellites", slug: "decodeurs-satellites" },
        { id: "box-tv-multimedia", name: "Box TV et multimédia", slug: "box-tv-multimedia" },
        { id: "lecteurs-multimedias", name: "Lecteurs multimédias", slug: "lecteurs-multimedias" },
        { id: "barres-de-son", name: "Barres de son", slug: "barres-de-son" },
        { id: "home-cinema", name: "Home cinéma", slug: "home-cinema" },
        { id: "lecteurs-blu-ray", name: "Lecteurs Blu‑ray", slug: "lecteurs-blu-ray" }
      ]
    },
    {
      id: "accessoires-mobiles",
      name: "Accessoires Mobiles (Électronique)",
      slug: "accessoires-mobiles",
      subcategories: [
        { id: "chargeurs", name: "Chargeurs", slug: "chargeurs" },
        { id: "chargeurs-rapides", name: "Chargeurs rapides", slug: "chargeurs-rapides" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "cables-adaptateurs", name: "Câbles et adaptateurs", slug: "cables-adaptateurs" },
        { id: "chargeurs-sans-fil", name: "Chargeurs sans fil", slug: "chargeurs-sans-fil" },
        { id: "chargeurs-voiture", name: "Chargeurs voiture", slug: "chargeurs-voiture" },
        { id: "hubs-usb", name: "Hubs USB", slug: "hubs-usb" },
        { id: "protections-ecran", name: "Protections d’écran", slug: "protections-ecran" },
        { id: "claviers-tablettes", name: "Claviers pour tablettes", slug: "claviers-tablettes" },
        { id: "stylets-tactiles", name: "Stylets tactiles", slug: "stylets-tactiles" },
        { id: "stations-accueil-mobiles", name: "Stations d’accueil", slug: "stations-accueil-mobiles" }
      ]
    },
    {
      id: "informatique-professionnelle",
      name: "Informatique Professionnelle",
      slug: "informatique-professionnelle",
      subcategories: [
        { id: "serveurs", name: "Serveurs", slug: "serveurs" },
        { id: "baies-serveurs", name: "Baies de serveurs", slug: "baies-serveurs" },
        { id: "nas", name: "NAS", slug: "nas" },
        { id: "onduleurs-ups", name: "Onduleurs UPS", slug: "onduleurs-ups" },
        { id: "switches-professionnels", name: "Switches professionnels", slug: "switches-professionnels" },
        { id: "pare-feux-reseau", name: "Pare‑feux réseau", slug: "pare-feux-reseau" },
        { id: "equipements-cloud", name: "Équipements cloud", slug: "equipements-cloud" },
        { id: "appliances-sauvegarde", name: "Appliances de sauvegarde", slug: "appliances-sauvegarde" },
        { id: "dispositifs-biometriques", name: "Dispositifs biométriques", slug: "dispositifs-biometriques" },
        { id: "systemes-conference-haut-de-gamme", name: "Systèmes de conférence haut de gamme", slug: "systemes-conference-haut-de-gamme" }
      ]
    },
    {
      id: "composants-electroniques-outils",
      name: "Composants Électroniques & Outils de Réparation",
      slug: "composants-electroniques-outils",
      subcategories: [
        { id: "capteurs-electroniques", name: "Capteurs électroniques", slug: "capteurs-electroniques" },
        { id: "resistances", name: "Résistances", slug: "resistances" },
        { id: "condensateurs", name: "Condensateurs", slug: "condensateurs" },
        { id: "diodes", name: "Diodes", slug: "diodes" },
        { id: "transistors", name: "Transistors", slug: "transistors" },
        { id: "microcontroleurs", name: "Microcontrôleurs", slug: "microcontroleurs" },
        { id: "cartes-arduino", name: "Cartes Arduino", slug: "cartes-arduino" },
        { id: "raspberry-pi", name: "Raspberry Pi", slug: "raspberry-pi" },
        { id: "breadboards", name: "Breadboards", slug: "breadboards" },
        { id: "stations-soudage", name: "Stations de soudage", slug: "stations-soudage" },
        { id: "multimetres", name: "Multimètres", slug: "multimetres" },
        { id: "outils-reparation", name: "Outils de réparation", slug: "outils-reparation" },
        { id: "cables-connecteurs", name: "Câbles & connecteurs", slug: "cables-connecteurs" },
        { id: "testeurs-electroniques", name: "Testeurs électroniques", slug: "testeurs-electroniques" },
        { id: "cameras-thermiques", name: "Caméras thermiques", slug: "cameras-thermiques" }
      ]
    },
    {
      id: "marques-populaires",
      name: "Marques Populaires",
      slug: "marques-populaires",
      subcategories: [
        { id: "apple", name: "Apple", slug: "apple" },
        { id: "dell", name: "Dell", slug: "dell" },
        { id: "hp", name: "HP", slug: "hp" },
        { id: "lenovo", name: "Lenovo", slug: "lenovo" },
        { id: "asus", name: "Asus", slug: "asus" },
        { id: "acer", name: "Acer", slug: "acer" },
        { id: "msi", name: "MSI", slug: "msi" },
        { id: "razer", name: "Razer", slug: "razer" },
        { id: "samsung", name: "Samsung", slug: "samsung" },
        { id: "huawei", name: "Huawei", slug: "huawei" },
        { id: "xiaomi", name: "Xiaomi", slug: "xiaomi" },
        { id: "lg", name: "LG", slug: "lg" },
        { id: "toshiba", name: "Toshiba", slug: "toshiba" },
        { id: "western-digital", name: "Western Digital", slug: "western-digital" },
        { id: "seagate", name: "Seagate", slug: "seagate" },
        { id: "kingston", name: "Kingston", slug: "kingston" },
        { id: "corsair", name: "Corsair", slug: "corsair" },
        { id: "gigabyte", name: "Gigabyte", slug: "gigabyte" },
        { id: "asus-rog", name: "Asus ROG", slug: "asus-rog" },
        { id: "nvidia", name: "NVIDIA", slug: "nvidia" },
        { id: "amd", name: "AMD", slug: "amd" },
        { id: "jbl", name: "JBL", slug: "jbl" },
        { id: "logitech", name: "Logitech", slug: "logitech" },
        { id: "steelseries", name: "SteelSeries", slug: "steelseries" },
        { id: "tp-link", name: "TP‑Link", slug: "tp-link" },
        { id: "netgear", name: "Netgear", slug: "netgear" },
        { id: "ubiquiti", name: "Ubiquiti", slug: "ubiquiti" }
      ]
    }
  ]
};