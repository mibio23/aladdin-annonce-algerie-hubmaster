import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Laptop } from "lucide-react";

export const informatiqueElectroniqueIt: MenuCategory = {
  id: "informatique-electronique",
  name: "Informatica & Elettronica",
  slug: "informatique-electronique",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs-pc",
      name: "Computer & PC",
      slug: "ordinateurs-pc",
      subcategories: [
        { id: "pc-de-bureau", name: "PC desktop", slug: "pc-de-bureau" },
        { id: "pc-gaming", name: "PC gaming", slug: "pc-gaming" },
        { id: "pc-professionnels", name: "PC professionali", slug: "pc-professionnels" },
        { id: "mini-pc", name: "Mini PC", slug: "mini-pc" },
        { id: "pc-tout-en-un", name: "PC all‑in‑one", slug: "pc-tout-en-un" },
        { id: "ordinateurs-portables", name: "Laptop", slug: "ordinateurs-portables" },
        { id: "ultrabooks", name: "Ultrabook", slug: "ultrabooks" },
        { id: "laptops-professionnels", name: "Laptop professionali", slug: "laptops-professionnels" },
        { id: "laptops-gaming", name: "Laptop gaming", slug: "laptops-gaming" },
        { id: "laptops-etudiants", name: "Laptop per studenti", slug: "laptops-etudiants" },
        { id: "macbook", name: "MacBook", slug: "macbook" },
        { id: "chromebook", name: "Chromebook", slug: "chromebook" },
        { id: "stations-travail-portables", name: "Workstation portatili", slug: "stations-travail-portables" },
        { id: "pc-reconditionnes", name: "PC ricondizionati", slug: "pc-reconditionnes" }
      ]
    },
    {
      id: "composants-informatiques",
      name: "Componenti informatici",
      slug: "composants-informatiques",
      subcategories: [
        { id: "processeurs", name: "Processori (Intel, AMD)", slug: "processeurs" },
        { id: "cartes-graphiques", name: "Schede grafiche (NVIDIA, AMD)", slug: "cartes-graphiques" },
        { id: "cartes-meres", name: "Schede madri", slug: "cartes-meres" },
        { id: "memoires-ram", name: "Memoria RAM", slug: "memoires-ram" },
        { id: "ssd", name: "SSD", slug: "ssd" },
        { id: "disques-durs-hdd", name: "HDD", slug: "disques-durs-hdd" },
        { id: "alimentation-pc", name: "Alimentatori PC", slug: "alimentation-pc" },
        { id: "boitiers-pc", name: "Case PC", slug: "boitiers-pc" },
        { id: "refroidissement-liquide", name: "Sistemi di raffreddamento a liquido", slug: "refroidissement-liquide" },
        { id: "ventilateurs-air", name: "Ventole e raffreddamento ad aria", slug: "ventilateurs-air" },
        { id: "pates-thermiques", name: "Paste termiche", slug: "pates-thermiques" },
        { id: "cartes-son", name: "Schede audio", slug: "cartes-son" },
        { id: "cartes-reseau", name: "Schede di rete", slug: "cartes-reseau" },
        { id: "cartes-acquisition-video", name: "Schede di acquisizione video", slug: "cartes-acquisition-video" }
      ]
    },
    {
      id: "peripheriques-pc",
      name: "Periferiche PC",
      slug: "peripheriques-pc",
      subcategories: [
        { id: "ecrans-moniteurs", name: "Schermi e monitor", slug: "ecrans-moniteurs" },
        { id: "moniteurs-gaming", name: "Monitor gaming", slug: "moniteurs-gaming" },
        { id: "moniteurs-incurves", name: "Monitor curvi", slug: "moniteurs-incurves" },
        {
          id: "claviers",
          name: "Tastiere",
          slug: "claviers",
          subcategories: [
            { id: "claviers-mecaniques", name: "Meccaniche", slug: "claviers-mecaniques" },
            { id: "claviers-sans-fil", name: "Wireless", slug: "claviers-sans-fil" },
            { id: "claviers-gaming", name: "Gaming", slug: "claviers-gaming" }
          ]
        },
        {
          id: "souris",
          name: "Mouse",
          slug: "souris",
          subcategories: [
            { id: "souris-filaire", name: "Con cavo", slug: "souris-filaire" },
            { id: "souris-sans-fil", name: "Wireless", slug: "souris-sans-fil" },
            { id: "souris-gaming", name: "Gaming", slug: "souris-gaming" }
          ]
        },
        { id: "tapis-souris", name: "Tappetini mouse", slug: "tapis-souris" },
        { id: "webcams", name: "Webcam", slug: "webcams" },
        { id: "microphones", name: "Microfoni", slug: "microphones" },
        { id: "enceintes-pc", name: "Altoparlanti PC", slug: "enceintes-pc" },
        { id: "casques-audio", name: "Cuffie", slug: "casques-audio" },
        { id: "disques-durs-externes", name: "Hard disk esterni", slug: "disques-durs-externes" },
        { id: "cles-usb", name: "Chiavette USB", slug: "cles-usb" },
        { id: "lecteurs-cartes-memoire", name: "Lettori di schede", slug: "lecteurs-cartes-memoire" },
        { id: "stations-accueil", name: "Docking station", slug: "stations-accueil" },
        { id: "imprimantes", name: "Stampanti", slug: "imprimantes" },
        { id: "scanners", name: "Scanner", slug: "scanners" },
        { id: "videoprojecteurs", name: "Videoproiettori", slug: "videoprojecteurs" }
      ]
    },
    {
      id: "reseau-internet",
      name: "Rete & Internet",
      slug: "reseau-internet",
      subcategories: [
        { id: "routeurs-wifi", name: "Router Wi‑Fi", slug: "routeurs-wifi" },
        { id: "wifi-mesh", name: "Sistemi Wi‑Fi Mesh", slug: "wifi-mesh" },
        { id: "modems", name: "Modem", slug: "modems" },
        { id: "repeteurs", name: "Ripetitori", slug: "repeteurs" },
        { id: "points-acces", name: "Access point", slug: "points-acces" },
        { id: "switches", name: "Switch di rete", slug: "switches" },
        { id: "cables-ethernet", name: "Cavi Ethernet", slug: "cables-ethernet" },
        { id: "fibre-optique", name: "Attrezzatura in fibra ottica", slug: "fibre-optique" },
        { id: "routeurs-4g-5g", name: "Router 4G/5G", slug: "routeurs-4g-5g" },
        { id: "antennes-reseau", name: "Antenne di rete", slug: "antennes-reseau" },
        { id: "adaptateurs-usb-wifi", name: "Adattatori USB Wi‑Fi", slug: "adaptateurs-usb-wifi" },
        { id: "routeurs-vpn", name: "Router VPN", slug: "routeurs-vpn" }
      ]
    },
    {
      id: "equipement-bureau",
      name: "Attrezzatura da ufficio",
      slug: "equipement-bureau",
      subcategories: [
        { id: "imprimantes-laser", name: "Stampanti laser", slug: "imprimantes-laser" },
        { id: "imprimantes-jet-encre", name: "Stampanti a getto d'inchiostro", slug: "imprimantes-jet-encre" },
        { id: "photocopieurs", name: "Fotocopiatrici", slug: "photocopieurs" },
        { id: "scanners-pro", name: "Scanner", slug: "scanners-pro" },
        { id: "fax", name: "Fax", slug: "fax" },
        { id: "multifonctions", name: "Multifunzione", slug: "multifonctions" },
        { id: "cartouches-encre", name: "Cartucce d'inchiostro", slug: "cartouches-encre" },
        { id: "toners", name: "Toner", slug: "toners" },
        { id: "plastifieuses", name: "Plastificatrici", slug: "plastifieuses" },
        { id: "destructeurs-documents", name: "Distruggi documenti", slug: "destructeurs-documents" },
        { id: "videoprojecteurs-pro", name: "Videoproiettori professionali", slug: "videoprojecteurs-pro" },
        { id: "tableaux-blancs", name: "Lavagne bianche", slug: "tableaux-blancs" },
        { id: "equipements-conference", name: "Attrezzature per conferenze", slug: "equipements-conference" }
      ]
    },
    {
      id: "electronique-gadgets",
      name: "Elettronica & Gadget",
      slug: "electronique-gadgets",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatch", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Bracciali smart", slug: "bracelets-connectes" },
        { id: "lunettes-intelligentes", name: "Occhiali smart", slug: "lunettes-intelligentes" },
        { id: "action-cams", name: "Action cam", slug: "action-cams" },
        { id: "drones", name: "Droni", slug: "drones" },
        { id: "mini-projecteurs", name: "Mini proiettori", slug: "mini-projecteurs" },
        { id: "casques-vr", name: "Visori VR", slug: "casques-vr" },
        { id: "dispositifs-ar", name: "Dispositivi AR", slug: "dispositifs-ar" },
        { id: "liseuses", name: "E‑reader", slug: "liseuses" },
        { id: "radios", name: "Radio", slug: "radios" },
        { id: "talkie-walkies", name: "Ricetrasmittenti", slug: "talkie-walkies" },
        { id: "gps-portables", name: "GPS portatili", slug: "gps-portables" },
        { id: "stylos-numeriques", name: "Penna digitale", slug: "stylos-numeriques" }
      ]
    },
    {
      id: "maison-intelligente",
      name: "Casa intelligente & Domotica",
      slug: "maison-intelligente",
      subcategories: [
        { id: "ampoules-connectees", name: "Lampadine smart", slug: "ampoules-connectees" },
        { id: "bandes-led", name: "Strisce LED", slug: "bandes-led" },
        { id: "prises-intelligentes", name: "Prese smart", slug: "prises-intelligentes" },
        { id: "cameras-securite", name: "Telecamere di sicurezza", slug: "cameras-securite" },
        { id: "cameras-ip", name: "Telecamere IP", slug: "cameras-ip" },
        { id: "systemes-alarme", name: "Sistemi di allarme", slug: "systemes-alarme" },
        { id: "serrures-connectees", name: "Serrature smart", slug: "serrures-connectees" },
        { id: "thermostats", name: "Termostati", slug: "thermostats" },
        {
          id: "capteurs",
          name: "Sensori",
          slug: "capteurs",
          subcategories: [
            { id: "mouvement", name: "Movimento", slug: "mouvement" },
            { id: "fumee", name: "Fumo", slug: "fumee" },
            { id: "fuite-eau", name: "Perdita d'acqua", slug: "fuite-eau" }
          ]
        },
        { id: "interrupteurs-intelligents", name: "Interruttori smart", slug: "interrupteurs-intelligents" },
        { id: "assistants-vocaux", name: "Assistenti vocali", slug: "assistants-vocaux" },
        { id: "sonnettes-video", name: "Campanelli video", slug: "sonnettes-video" }
      ]
    },
    {
      id: "tv-divertissement",
      name: "TV & Intrattenimento",
      slug: "tv-divertissement",
      subcategories: [
        { id: "televiseurs-led", name: "TV LED", slug: "televiseurs-led" },
        { id: "televiseurs-oled", name: "TV OLED", slug: "televiseurs-oled" },
        { id: "qled", name: "QLED", slug: "qled" },
        { id: "smart-tv", name: "Smart TV", slug: "smart-tv" },
        { id: "android-tv", name: "Android TV", slug: "android-tv" },
        { id: "recepteurs-tv", name: "Ricevitori TV", slug: "recepteurs-tv" },
        { id: "decodeurs-satellites", name: "Decoder satellitari", slug: "decodeurs-satellites" },
        { id: "box-tv-multimedia", name: "Box TV e multimedia", slug: "box-tv-multimedia" },
        { id: "lecteurs-multimedias", name: "Lettori multimediali", slug: "lecteurs-multimedias" },
        { id: "barres-de-son", name: "Soundbar", slug: "barres-de-son" },
        { id: "home-cinema", name: "Home cinema", slug: "home-cinema" },
        { id: "lecteurs-blu-ray", name: "Lettori Blu‑ray", slug: "lecteurs-blu-ray" }
      ]
    },
    {
      id: "accessoires-mobiles",
      name: "Accessori mobili",
      slug: "accessoires-mobiles",
      subcategories: [
        { id: "chargeurs", name: "Caricabatterie", slug: "chargeurs" },
        { id: "chargeurs-rapides", name: "Caricatori rapidi", slug: "chargeurs-rapides" },
        { id: "powerbanks", name: "Powerbank", slug: "powerbanks" },
        { id: "cables-adaptateurs", name: "Cavi e adattatori", slug: "cables-adaptateurs" },
        { id: "chargeurs-sans-fil", name: "Caricatori wireless", slug: "chargeurs-sans-fil" },
        { id: "chargeurs-voiture", name: "Caricatori auto", slug: "chargeurs-voiture" },
        { id: "hubs-usb", name: "Hub USB", slug: "hubs-usb" },
        { id: "protections-ecran", name: "Proteggi schermo", slug: "protections-ecran" },
        { id: "claviers-tablettes", name: "Tastiere per tablet", slug: "claviers-tablettes" },
        { id: "stylets-tactiles", name: "Pennini touch", slug: "stylets-tactiles" },
        { id: "stations-accueil-mobiles", name: "Docking station", slug: "stations-accueil-mobiles" }
      ]
    },
    {
      id: "informatique-professionnelle",
      name: "Informatica professionale",
      slug: "informatique-professionnelle",
      subcategories: [
        { id: "serveurs", name: "Server", slug: "serveurs" },
        { id: "baies-serveurs", name: "Rack server", slug: "baies-serveurs" },
        { id: "nas", name: "NAS", slug: "nas" },
        { id: "onduleurs-ups", name: "UPS", slug: "onduleurs-ups" },
        { id: "switches-professionnels", name: "Switch professionali", slug: "switches-professionnels" },
        { id: "pare-feux-reseau", name: "Firewall di rete", slug: "pare-feux-reseau" },
        { id: "equipements-cloud", name: "Apparecchi cloud", slug: "equipements-cloud" },
        { id: "appliances-sauvegarde", name: "Dispositivi di backup", slug: "appliances-sauvegarde" },
        { id: "dispositifs-biometriques", name: "Dispositivi biometrici", slug: "dispositifs-biometriques" },
        { id: "systemes-conference-haut-de-gamme", name: "Sistemi di conferenza di fascia alta", slug: "systemes-conference-haut-de-gamme" }
      ]
    },
    {
      id: "composants-electroniques-outils",
      name: "Componenti elettronici & Strumenti di riparazione",
      slug: "composants-electroniques-outils",
      subcategories: [
        { id: "capteurs-electroniques", name: "Sensori elettronici", slug: "capteurs-electroniques" },
        { id: "resistances", name: "Resistenze", slug: "resistances" },
        { id: "condensateurs", name: "Condensatori", slug: "condensateurs" },
        { id: "diodes", name: "Diodi", slug: "diodes" },
        { id: "transistors", name: "Transistor", slug: "transistors" },
        { id: "microcontroleurs", name: "Microcontrollori", slug: "microcontroleurs" },
        { id: "cartes-arduino", name: "Schede Arduino", slug: "cartes-arduino" },
        { id: "raspberry-pi", name: "Raspberry Pi", slug: "raspberry-pi" },
        { id: "breadboards", name: "Breadboard", slug: "breadboards" },
        { id: "stations-soudage", name: "Stazioni di saldatura", slug: "stations-soudage" },
        { id: "multimetres", name: "Multimetri", slug: "multimetres" },
        { id: "outils-reparation", name: "Strumenti di riparazione", slug: "outils-reparation" },
        { id: "cables-connecteurs", name: "Cavi & connettori", slug: "cables-connecteurs" },
        { id: "testeurs-electroniques", name: "Tester elettronici", slug: "testeurs-electroniques" },
        { id: "cameras-thermiques", name: "Telecamere termiche", slug: "cameras-thermiques" }
      ]
    },
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
    },
    {
      id: "marques-populaires",
      name: "Marche popolari",
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
        { id: "gigabyte", name: "Gigabyte", slug: "gigabyte" }
      ]
    }
  ]
};