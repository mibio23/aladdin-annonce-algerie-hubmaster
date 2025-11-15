import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Laptop } from "lucide-react";

export const informatiqueElectroniqueDe: MenuCategory = {
  id: "informatique-electronique",
  name: "Computer & Elektronik",
  slug: "informatique-electronique",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs-pc",
      name: "Computer & PCs",
      slug: "ordinateurs-pc",
      subcategories: [
        { id: "pc-de-bureau", name: "Desktop-PCs", slug: "pc-de-bureau" },
        { id: "pc-gaming", name: "Gaming-PCs", slug: "pc-gaming" },
        { id: "pc-professionnels", name: "Professionelle PCs", slug: "pc-professionnels" },
        { id: "mini-pc", name: "Mini-PCs", slug: "mini-pc" },
        { id: "pc-tout-en-un", name: "All-in-One-PCs", slug: "pc-tout-en-un" },
        { id: "ordinateurs-portables", name: "Laptops", slug: "ordinateurs-portables" },
        { id: "ultrabooks", name: "Ultrabooks", slug: "ultrabooks" },
        { id: "laptops-professionnels", name: "Business-Laptops", slug: "laptops-professionnels" },
        { id: "laptops-gaming", name: "Gaming-Laptops", slug: "laptops-gaming" },
        { id: "laptops-etudiants", name: "Studenten-Laptops", slug: "laptops-etudiants" },
        { id: "macbook", name: "MacBook", slug: "macbook" },
        { id: "chromebook", name: "Chromebook", slug: "chromebook" },
        { id: "stations-travail-portables", name: "Mobile Workstations", slug: "stations-travail-portables" },
        { id: "pc-reconditionnes", name: "Generalüberholte PCs", slug: "pc-reconditionnes" }
      ]
    },
    {
      id: "composants-informatiques",
      name: "Computerkomponenten",
      slug: "composants-informatiques",
      subcategories: [
        { id: "processeurs", name: "Prozessoren (Intel, AMD)", slug: "processeurs" },
        { id: "cartes-graphiques", name: "Grafikkarten (NVIDIA, AMD)", slug: "cartes-graphiques" },
        { id: "cartes-meres", name: "Mainboards", slug: "cartes-meres" },
        { id: "memoires-ram", name: "RAM", slug: "memoires-ram" },
        { id: "ssd", name: "SSDs", slug: "ssd" },
        { id: "disques-durs-hdd", name: "HDDs", slug: "disques-durs-hdd" },
        { id: "alimentation-pc", name: "PC-Netzteile", slug: "alimentation-pc" },
        { id: "boitiers-pc", name: "PC-Gehäuse", slug: "boitiers-pc" },
        { id: "refroidissement-liquide", name: "Wasserkühlungssysteme", slug: "refroidissement-liquide" },
        { id: "ventilateurs-air", name: "Lüfter & Luftkühlung", slug: "ventilateurs-air" },
        { id: "pates-thermiques", name: "Wärmeleitpasten", slug: "pates-thermiques" },
        { id: "cartes-son", name: "Soundkarten", slug: "cartes-son" },
        { id: "cartes-reseau", name: "Netzwerkkarten", slug: "cartes-reseau" },
        { id: "cartes-acquisition-video", name: "Videokarten für Aufnahme", slug: "cartes-acquisition-video" }
      ]
    },
    {
      id: "peripheriques-pc",
      name: "PC‑Peripherie",
      slug: "peripheriques-pc",
      subcategories: [
        { id: "ecrans-moniteurs", name: "Bildschirme & Monitore", slug: "ecrans-moniteurs" },
        { id: "moniteurs-gaming", name: "Gaming‑Monitore", slug: "moniteurs-gaming" },
        { id: "moniteurs-incurves", name: "Gebogene Monitore", slug: "moniteurs-incurves" },
        {
          id: "claviers",
          name: "Tastaturen",
          slug: "claviers",
          subcategories: [
            { id: "claviers-mecaniques", name: "Mechanisch", slug: "claviers-mecaniques" },
            { id: "claviers-sans-fil", name: "Kabellos", slug: "claviers-sans-fil" },
            { id: "claviers-gaming", name: "Gaming", slug: "claviers-gaming" }
          ]
        },
        {
          id: "souris",
          name: "Mäuse",
          slug: "souris",
          subcategories: [
            { id: "souris-filaire", name: "Kabelgebunden", slug: "souris-filaire" },
            { id: "souris-sans-fil", name: "Kabellos", slug: "souris-sans-fil" },
            { id: "souris-gaming", name: "Gaming", slug: "souris-gaming" }
          ]
        },
        { id: "tapis-souris", name: "Mauspads", slug: "tapis-souris" },
        { id: "webcams", name: "Webcams", slug: "webcams" },
        { id: "microphones", name: "Mikrofone", slug: "microphones" },
        { id: "enceintes-pc", name: "PC‑Lautsprecher", slug: "enceintes-pc" },
        { id: "casques-audio", name: "Kopfhörer", slug: "casques-audio" },
        { id: "disques-durs-externes", name: "Externe Festplatten", slug: "disques-durs-externes" },
        { id: "cles-usb", name: "USB‑Sticks", slug: "cles-usb" },
        { id: "lecteurs-cartes-memoire", name: "Speicherkartenleser", slug: "lecteurs-cartes-memoire" },
        { id: "stations-accueil", name: "Docking‑Stationen", slug: "stations-accueil" },
        { id: "imprimantes", name: "Drucker", slug: "imprimantes" },
        { id: "scanners", name: "Scanner", slug: "scanners" },
        { id: "videoprojecteurs", name: "Projektoren", slug: "videoprojecteurs" }
      ]
    },
    {
      id: "reseau-internet",
      name: "Netzwerk & Internet",
      slug: "reseau-internet",
      subcategories: [
        { id: "routeurs-wifi", name: "Wi‑Fi‑Router", slug: "routeurs-wifi" },
        { id: "wifi-mesh", name: "Wi‑Fi‑Mesh‑Systeme", slug: "wifi-mesh" },
        { id: "modems", name: "Modems", slug: "modems" },
        { id: "repeteurs", name: "Repeater", slug: "repeteurs" },
        { id: "points-acces", name: "Access Points", slug: "points-acces" },
        { id: "switches", name: "Netzwerk‑Switches", slug: "switches" },
        { id: "cables-ethernet", name: "Ethernet‑Kabel", slug: "cables-ethernet" },
        { id: "fibre-optique", name: "Glasfaser‑Ausrüstung", slug: "fibre-optique" },
        { id: "routeurs-4g-5g", name: "4G/5G‑Router", slug: "routeurs-4g-5g" },
        { id: "antennes-reseau", name: "Netzwerkantennen", slug: "antennes-reseau" },
        { id: "adaptateurs-usb-wifi", name: "USB‑Wi‑Fi‑Adapter", slug: "adaptateurs-usb-wifi" },
        { id: "routeurs-vpn", name: "VPN‑Router", slug: "routeurs-vpn" }
      ]
    },
    {
      id: "equipement-bureau",
      name: "Büroausstattung",
      slug: "equipement-bureau",
      subcategories: [
        { id: "imprimantes-laser", name: "Laserdrucker", slug: "imprimantes-laser" },
        { id: "imprimantes-jet-encre", name: "Tintenstrahldrucker", slug: "imprimantes-jet-encre" },
        { id: "photocopieurs", name: "Kopierer", slug: "photocopieurs" },
        { id: "scanners-pro", name: "Scanner", slug: "scanners-pro" },
        { id: "fax", name: "Faxgeräte", slug: "fax" },
        { id: "multifonctions", name: "Multifunktionsdrucker", slug: "multifonctions" },
        { id: "cartouches-encre", name: "Tintenpatronen", slug: "cartouches-encre" },
        { id: "toners", name: "Toner", slug: "toners" },
        { id: "plastifieuses", name: "Laminiergeräte", slug: "plastifieuses" },
        { id: "destructeurs-documents", name: "Aktenvernichter", slug: "destructeurs-documents" },
        { id: "videoprojecteurs-pro", name: "Professionelle Projektoren", slug: "videoprojecteurs-pro" },
        { id: "tableaux-blancs", name: "Whiteboards", slug: "tableaux-blancs" },
        { id: "equipements-conference", name: "Konferenzausrüstung", slug: "equipements-conference" }
      ]
    },
    {
      id: "electronique-gadgets",
      name: "Elektronik & Gadgets",
      slug: "electronique-gadgets",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatches", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Fitnessarmbänder", slug: "bracelets-connectes" },
        { id: "lunettes-intelligentes", name: "Smart‑Brillen", slug: "lunettes-intelligentes" },
        { id: "action-cams", name: "Action‑Cams", slug: "action-cams" },
        { id: "drones", name: "Drohnen", slug: "drones" },
        { id: "mini-projecteurs", name: "Mini‑Projektoren", slug: "mini-projecteurs" },
        { id: "casques-vr", name: "VR‑Headsets", slug: "casques-vr" },
        { id: "dispositifs-ar", name: "AR‑Geräte", slug: "dispositifs-ar" },
        { id: "liseuses", name: "E‑Reader", slug: "liseuses" },
        { id: "radios", name: "Radios", slug: "radios" },
        { id: "talkie-walkies", name: "Funkgeräte", slug: "talkie-walkies" },
        { id: "gps-portables", name: "Tragbare GPS", slug: "gps-portables" },
        { id: "stylos-numeriques", name: "Digitale Stifte", slug: "stylos-numeriques" }
      ]
    },
    {
      id: "maison-intelligente",
      name: "Smart Home & Hausautomation",
      slug: "maison-intelligente",
      subcategories: [
        { id: "ampoules-connectees", name: "Smarte Glühbirnen", slug: "ampoules-connectees" },
        { id: "bandes-led", name: "LED‑Streifen", slug: "bandes-led" },
        { id: "prises-intelligentes", name: "Smarte Steckdosen", slug: "prises-intelligentes" },
        { id: "cameras-securite", name: "Sicherheitskameras", slug: "cameras-securite" },
        { id: "cameras-ip", name: "IP‑Kameras", slug: "cameras-ip" },
        { id: "systemes-alarme", name: "Alarmsysteme", slug: "systemes-alarme" },
        { id: "serrures-connectees", name: "Smarte Schlösser", slug: "serrures-connectees" },
        { id: "thermostats", name: "Thermostate", slug: "thermostats" },
        {
          id: "capteurs",
          name: "Sensoren",
          slug: "capteurs",
          subcategories: [
            { id: "mouvement", name: "Bewegung", slug: "mouvement" },
            { id: "fumee", name: "Rauch", slug: "fumee" },
            { id: "fuite-eau", name: "Wasserleck", slug: "fuite-eau" }
          ]
        },
        { id: "interrupteurs-intelligents", name: "Smarte Schalter", slug: "interrupteurs-intelligents" },
        { id: "assistants-vocaux", name: "Sprachassistenten", slug: "assistants-vocaux" },
        { id: "sonnettes-video", name: "Video‑Türklingeln", slug: "sonnettes-video" }
      ]
    },
    {
      id: "tv-divertissement",
      name: "TV & Unterhaltung",
      slug: "tv-divertissement",
      subcategories: [
        { id: "televiseurs-led", name: "LED‑Fernseher", slug: "televiseurs-led" },
        { id: "televiseurs-oled", name: "OLED‑Fernseher", slug: "televiseurs-oled" },
        { id: "qled", name: "QLED", slug: "qled" },
        { id: "smart-tv", name: "Smart‑TVs", slug: "smart-tv" },
        { id: "android-tv", name: "Android‑TVs", slug: "android-tv" },
        { id: "recepteurs-tv", name: "TV‑Receiver", slug: "recepteurs-tv" },
        { id: "decodeurs-satellites", name: "Satelliten‑Decoder", slug: "decodeurs-satellites" },
        { id: "box-tv-multimedia", name: "TV‑ und Multimedia‑Boxen", slug: "box-tv-multimedia" },
        { id: "lecteurs-multimedias", name: "Mediaplayer", slug: "lecteurs-multimedias" },
        { id: "barres-de-son", name: "Soundbars", slug: "barres-de-son" },
        { id: "home-cinema", name: "Heimkino", slug: "home-cinema" },
        { id: "lecteurs-blu-ray", name: "Blu‑ray‑Player", slug: "lecteurs-blu-ray" }
      ]
    },
    {
      id: "accessoires-mobiles",
      name: "Mobile Zubehör",
      slug: "accessoires-mobiles",
      subcategories: [
        { id: "chargeurs", name: "Ladegeräte", slug: "chargeurs" },
        { id: "chargeurs-rapides", name: "Schnellladegeräte", slug: "chargeurs-rapides" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "cables-adaptateurs", name: "Kabel & Adapter", slug: "cables-adaptateurs" },
        { id: "chargeurs-sans-fil", name: "Kabellose Ladegeräte", slug: "chargeurs-sans-fil" },
        { id: "chargeurs-voiture", name: "Autoladegeräte", slug: "chargeurs-voiture" },
        { id: "hubs-usb", name: "USB‑Hubs", slug: "hubs-usb" },
        { id: "protections-ecran", name: "Displayschutz", slug: "protections-ecran" },
        { id: "claviers-tablettes", name: "Tastaturen für Tablets", slug: "claviers-tablettes" },
        { id: "stylets-tactiles", name: "Eingabestifte", slug: "stylets-tactiles" },
        { id: "stations-accueil-mobiles", name: "Docking‑Stationen", slug: "stations-accueil-mobiles" }
      ]
    },
    {
      id: "informatique-professionnelle",
      name: "Professionelle IT",
      slug: "informatique-professionnelle",
      subcategories: [
        { id: "serveurs", name: "Server", slug: "serveurs" },
        { id: "baies-serveurs", name: "Server‑Racks", slug: "baies-serveurs" },
        { id: "nas", name: "NAS", slug: "nas" },
        { id: "onduleurs-ups", name: "USV‑Anlagen", slug: "onduleurs-ups" },
        { id: "switches-professionnels", name: "Professionelle Switches", slug: "switches-professionnels" },
        { id: "pare-feux-reseau", name: "Netzwerk‑Firewalls", slug: "pare-feux-reseau" },
        { id: "equipements-cloud", name: "Cloud‑Ausrüstung", slug: "equipements-cloud" },
        { id: "appliances-sauvegarde", name: "Backup‑Appliances", slug: "appliances-sauvegarde" },
        { id: "dispositifs-biometriques", name: "Biometrische Geräte", slug: "dispositifs-biometriques" },
        { id: "systemes-conference-haut-de-gamme", name: "High‑End‑Konferenzsysteme", slug: "systemes-conference-haut-de-gamme" }
      ]
    },
    {
      id: "composants-electroniques-outils",
      name: "Elektronische Komponenten & Reparaturwerkzeuge",
      slug: "composants-electroniques-outils",
      subcategories: [
        { id: "capteurs-electroniques", name: "Elektronische Sensoren", slug: "capteurs-electroniques" },
        { id: "resistances", name: "Widerstände", slug: "resistances" },
        { id: "condensateurs", name: "Kondensatoren", slug: "condensateurs" },
        { id: "diodes", name: "Dioden", slug: "diodes" },
        { id: "transistors", name: "Transistoren", slug: "transistors" },
        { id: "microcontroleurs", name: "Mikrocontroller", slug: "microcontroleurs" },
        { id: "cartes-arduino", name: "Arduino‑Boards", slug: "cartes-arduino" },
        { id: "raspberry-pi", name: "Raspberry Pi", slug: "raspberry-pi" },
        { id: "breadboards", name: "Breadboards", slug: "breadboards" },
        { id: "stations-soudage", name: "Lötstationen", slug: "stations-soudage" },
        { id: "multimetres", name: "Multimeter", slug: "multimetres" },
        { id: "outils-reparation", name: "Reparaturwerkzeuge", slug: "outils-reparation" },
        { id: "cables-connecteurs", name: "Kabel & Steckverbinder", slug: "cables-connecteurs" },
        { id: "testeurs-electroniques", name: "Elektronik‑Tester", slug: "testeurs-electroniques" },
        { id: "cameras-thermiques", name: "Wärmebildkameras", slug: "cameras-thermiques" }
      ]
    },
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
    },
    {
      id: "marques-populaires",
      name: "Beliebte Marken",
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