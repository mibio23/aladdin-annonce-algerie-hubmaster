import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Laptop } from "lucide-react";

export const informatiqueElectroniqueEn: MenuCategory = {
  id: "informatique-electronique",
  name: "Computers & Electronics",
  slug: "computers-electronics",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs-pc",
      name: "Computers & PCs",
      slug: "computers-pcs",
      subcategories: [
        { id: "pc-de-bureau", name: "Desktop PCs", slug: "desktop-pcs" },
        { id: "pc-gaming", name: "Gaming PCs", slug: "gaming-pcs" },
        { id: "pc-professionnels", name: "Professional PCs", slug: "professional-pcs" },
        { id: "mini-pc", name: "Mini PCs", slug: "mini-pcs" },
        { id: "pc-tout-en-un", name: "All-in-One PCs", slug: "all-in-one-pcs" },
        { id: "ordinateurs-portables", name: "Laptops", slug: "laptops" },
        { id: "ultrabooks", name: "Ultrabooks", slug: "ultrabooks" },
        { id: "laptops-professionnels", name: "Professional Laptops", slug: "professional-laptops" },
        { id: "laptops-gaming", name: "Gaming Laptops", slug: "gaming-laptops" },
        { id: "laptops-etudiants", name: "Student Laptops", slug: "student-laptops" },
        { id: "macbook", name: "MacBook", slug: "macbook" },
        { id: "chromebook", name: "Chromebook", slug: "chromebook" },
        { id: "stations-travail-portables", name: "Portable Workstations", slug: "portable-workstations" },
        { id: "pc-reconditionnes", name: "Refurbished PCs", slug: "refurbished-pcs" }
      ]
    },
    {
      id: "composants-informatiques",
      name: "Computer Components",
      slug: "computer-components",
      subcategories: [
        { id: "processeurs", name: "Processors (Intel, AMD)", slug: "processors" },
        { id: "cartes-graphiques", name: "Graphics Cards (NVIDIA, AMD)", slug: "graphics-cards" },
        { id: "cartes-meres", name: "Motherboards", slug: "motherboards" },
        { id: "memoires-ram", name: "RAM Memory", slug: "ram-memory" },
        { id: "ssd", name: "SSDs", slug: "ssds" },
        { id: "disques-durs-hdd", name: "HDDs", slug: "hdds" },
        { id: "alimentation-pc", name: "PC Power Supplies", slug: "pc-power-supplies" },
        { id: "boitiers-pc", name: "PC Cases", slug: "pc-cases" },
        { id: "refroidissement-liquide", name: "Liquid Cooling Systems", slug: "liquid-cooling-systems" },
        { id: "ventilateurs-air", name: "Fans and Air Cooling", slug: "fans-air-cooling" },
        { id: "pates-thermiques", name: "Thermal Pastes", slug: "thermal-pastes" },
        { id: "cartes-son", name: "Sound Cards", slug: "sound-cards" },
        { id: "cartes-reseau", name: "Network Cards", slug: "network-cards" },
        { id: "cartes-acquisition-video", name: "Video Capture Cards", slug: "video-capture-cards" }
      ]
    },
    {
      id: "peripheriques-pc",
      name: "PC Peripherals",
      slug: "pc-peripherals",
      subcategories: [
        { id: "ecrans-moniteurs", name: "Screens and Monitors", slug: "screens-monitors" },
        { id: "moniteurs-gaming", name: "Gaming Monitors", slug: "gaming-monitors" },
        { id: "moniteurs-incurves", name: "Curved Monitors", slug: "curved-monitors" },
        {
          id: "claviers",
          name: "Keyboards",
          slug: "keyboards",
          subcategories: [
            { id: "claviers-mecaniques", name: "Mechanical", slug: "mechanical-keyboards" },
            { id: "claviers-sans-fil", name: "Wireless", slug: "wireless-keyboards" },
            { id: "claviers-gaming", name: "Gaming", slug: "gaming-keyboards" }
          ]
        },
        {
          id: "souris",
          name: "Mice",
          slug: "mice",
          subcategories: [
            { id: "souris-filaire", name: "Wired", slug: "wired-mice" },
            { id: "souris-sans-fil", name: "Wireless", slug: "wireless-mice" },
            { id: "souris-gaming", name: "Gaming", slug: "gaming-mice" }
          ]
        },
        { id: "tapis-souris", name: "Mouse Pads", slug: "mouse-pads" },
        { id: "webcams", name: "Webcams", slug: "webcams" },
        { id: "microphones", name: "Microphones", slug: "microphones" },
        { id: "enceintes-pc", name: "PC Speakers", slug: "pc-speakers" },
        { id: "casques-audio", name: "Headphones", slug: "headphones" },
        { id: "disques-durs-externes", name: "External Hard Drives", slug: "external-hard-drives" },
        { id: "cles-usb", name: "USB Drives", slug: "usb-drives" },
        { id: "lecteurs-cartes-memoire", name: "Memory Card Readers", slug: "memory-card-readers" },
        { id: "stations-accueil", name: "Docking Stations", slug: "docking-stations" },
        { id: "imprimantes", name: "Printers", slug: "printers" },
        { id: "scanners", name: "Scanners", slug: "scanners" },
        { id: "videoprojecteurs", name: "Projectors", slug: "projectors" }
      ]
    },
    {
      id: "reseau-internet",
      name: "Network & Internet",
      slug: "network-internet",
      subcategories: [
        { id: "routeurs-wifi", name: "Wi-Fi Routers", slug: "wifi-routers" },
        { id: "wifi-mesh", name: "Wi-Fi Mesh Systems", slug: "wifi-mesh-systems" },
        { id: "modems", name: "Modems", slug: "modems" },
        { id: "repeteurs", name: "Repeaters", slug: "repeaters" },
        { id: "points-acces", name: "Access Points", slug: "access-points" },
        { id: "switches", name: "Network Switches", slug: "network-switches" },
        { id: "cables-ethernet", name: "Ethernet Cables", slug: "ethernet-cables" },
        { id: "fibre-optique", name: "Fiber Optic Equipment", slug: "fiber-optic-equipment" },
        { id: "routeurs-4g-5g", name: "4G/5G Routers", slug: "4g-5g-routers" },
        { id: "antennes-reseau", name: "Network Antennas", slug: "network-antennas" },
        { id: "adaptateurs-usb-wifi", name: "USB Wi-Fi Adapters", slug: "usb-wifi-adapters" },
        { id: "routeurs-vpn", name: "VPN Routers", slug: "vpn-routers" }
      ]
    },
    {
      id: "equipement-bureau",
      name: "Office Equipment",
      slug: "office-equipment",
      subcategories: [
        { id: "imprimantes-laser", name: "Laser Printers", slug: "laser-printers" },
        { id: "imprimantes-jet-encre", name: "Inkjet Printers", slug: "inkjet-printers" },
        { id: "photocopieurs", name: "Copiers", slug: "copiers" },
        { id: "scanners-pro", name: "Scanners", slug: "scanners-pro" },
        { id: "fax", name: "Fax Machines", slug: "fax-machines" },
        { id: "multifonctions", name: "Multifunction Printers", slug: "multifunction-printers" },
        { id: "cartouches-encre", name: "Ink Cartridges", slug: "ink-cartridges" },
        { id: "toners", name: "Toners", slug: "toners" },
        { id: "plastifieuses", name: "Laminators", slug: "laminators" },
        { id: "destructeurs-documents", name: "Document Shredders", slug: "document-shredders" },
        { id: "videoprojecteurs-pro", name: "Professional Projectors", slug: "professional-projectors" },
        { id: "tableaux-blancs", name: "Whiteboards", slug: "whiteboards" },
        { id: "equipements-conference", name: "Conference Equipment", slug: "conference-equipment" }
      ]
    },
    {
      id: "electronique-gadgets",
      name: "Electronics & Gadgets",
      slug: "electronics-gadgets",
      subcategories: [
        { id: "montres-connectees", name: "Smartwatches", slug: "smartwatches" },
        { id: "bracelets-connectes", name: "Smart Bands", slug: "smart-bands" },
        { id: "lunettes-intelligentes", name: "Smart Glasses", slug: "smart-glasses" },
        { id: "action-cams", name: "Action Cams", slug: "action-cams" },
        { id: "drones", name: "Drones", slug: "drones" },
        { id: "mini-projecteurs", name: "Mini Projectors", slug: "mini-projectors" },
        { id: "casques-vr", name: "VR Headsets", slug: "vr-headsets" },
        { id: "dispositifs-ar", name: "AR Devices", slug: "ar-devices" },
        { id: "liseuses", name: "E-readers", slug: "e-readers" },
        { id: "radios", name: "Radios", slug: "radios" },
        { id: "talkie-walkies", name: "Walkie-talkies", slug: "walkie-talkies" },
        { id: "gps-portables", name: "Portable GPS", slug: "portable-gps" },
        { id: "stylos-numeriques", name: "Digital Pens", slug: "digital-pens" }
      ]
    },
    {
      id: "maison-intelligente",
      name: "Smart Home & Home Automation",
      slug: "smart-home-home-automation",
      subcategories: [
        { id: "ampoules-connectees", name: "Smart Bulbs", slug: "smart-bulbs" },
        { id: "bandes-led", name: "LED Strips", slug: "led-strips" },
        { id: "prises-intelligentes", name: "Smart Plugs", slug: "smart-plugs" },
        { id: "cameras-securite", name: "Security Cameras", slug: "security-cameras" },
        { id: "cameras-ip", name: "IP Cameras", slug: "ip-cameras" },
        { id: "systemes-alarme", name: "Alarm Systems", slug: "alarm-systems" },
        { id: "serrures-connectees", name: "Smart Locks", slug: "smart-locks" },
        { id: "thermostats", name: "Thermostats", slug: "thermostats" },
        {
          id: "capteurs",
          name: "Sensors",
          slug: "sensors",
          subcategories: [
            { id: "mouvement", name: "Motion", slug: "motion-sensors" },
            { id: "fumee", name: "Smoke", slug: "smoke-sensors" },
            { id: "fuite-eau", name: "Water Leak", slug: "water-leak-sensors" }
          ]
        },
        { id: "interrupteurs-intelligents", name: "Smart Switches", slug: "smart-switches" },
        { id: "assistants-vocaux", name: "Voice Assistants", slug: "voice-assistants" },
        { id: "sonnettes-video", name: "Video Doorbells", slug: "video-doorbells" }
      ]
    },
    {
      id: "tv-divertissement",
      name: "TV & Entertainment",
      slug: "tv-entertainment",
      subcategories: [
        { id: "televiseurs-led", name: "LED TVs", slug: "led-tvs" },
        { id: "televiseurs-oled", name: "OLED TVs", slug: "oled-tvs" },
        { id: "qled", name: "QLED", slug: "qled" },
        { id: "smart-tv", name: "Smart TVs", slug: "smart-tvs" },
        { id: "android-tv", name: "Android TVs", slug: "android-tvs" },
        { id: "recepteurs-tv", name: "TV Receivers", slug: "tv-receivers" },
        { id: "decodeurs-satellites", name: "Satellite Decoders", slug: "satellite-decoders" },
        { id: "box-tv-multimedia", name: "TV and Multimedia Boxes", slug: "tv-multimedia-boxes" },
        { id: "lecteurs-multimedias", name: "Media Players", slug: "media-players" },
        { id: "barres-de-son", name: "Soundbars", slug: "soundbars" },
        { id: "home-cinema", name: "Home Cinema", slug: "home-cinema" },
        { id: "lecteurs-blu-ray", name: "Blu-ray Players", slug: "blu-ray-players" }
      ]
    },
    {
      id: "accessoires-mobiles",
      name: "Mobile Accessories (Electronics)",
      slug: "mobile-accessories-electronics",
      subcategories: [
        { id: "chargeurs", name: "Chargers", slug: "chargers" },
        { id: "chargeurs-rapides", name: "Fast Chargers", slug: "fast-chargers" },
        { id: "powerbanks", name: "Power Banks", slug: "power-banks" },
        { id: "cables-adaptateurs", name: "Cables & Adapters", slug: "cables-adapters" },
        { id: "chargeurs-sans-fil", name: "Wireless Chargers", slug: "wireless-chargers" },
        { id: "chargeurs-voiture", name: "Car Chargers", slug: "car-chargers" },
        { id: "hubs-usb", name: "USB Hubs", slug: "usb-hubs" },
        { id: "protections-ecran", name: "Screen Protectors", slug: "screen-protectors" },
        { id: "claviers-tablettes", name: "Tablet Keyboards", slug: "tablet-keyboards" },
        { id: "stylets-tactiles", name: "Stylus Pens", slug: "stylus-pens" },
        { id: "stations-accueil-mobiles", name: "Docking Stations", slug: "docking-stations-mobiles" }
      ]
    },
    {
      id: "informatique-professionnelle",
      name: "Professional IT",
      slug: "professional-it",
      subcategories: [
        { id: "serveurs", name: "Servers", slug: "servers" },
        { id: "baies-serveurs", name: "Server Racks", slug: "server-racks" },
        { id: "nas", name: "NAS", slug: "nas" },
        { id: "onduleurs-ups", name: "UPS Inverters", slug: "ups-inverters" },
        { id: "switches-professionnels", name: "Professional Switches", slug: "professional-switches" },
        { id: "pare-feux-reseau", name: "Network Firewalls", slug: "network-firewalls" },
        { id: "equipements-cloud", name: "Cloud Equipment", slug: "cloud-equipment" },
        { id: "appliances-sauvegarde", name: "Backup Appliances", slug: "backup-appliances" },
        { id: "dispositifs-biometriques", name: "Biometric Devices", slug: "biometric-devices" },
        { id: "systemes-conference-haut-de-gamme", name: "High-End Conference Systems", slug: "high-end-conference-systems" }
      ]
    },
    {
      id: "composants-electroniques-outils",
      name: "Electronic Components & Repair Tools",
      slug: "electronic-components-repair-tools",
      subcategories: [
        { id: "capteurs-electroniques", name: "Electronic Sensors", slug: "electronic-sensors" },
        { id: "resistances", name: "Resistors", slug: "resistors" },
        { id: "condensateurs", name: "Capacitors", slug: "capacitors" },
        { id: "diodes", name: "Diodes", slug: "diodes" },
        { id: "transistors", name: "Transistors", slug: "transistors" },
        { id: "microcontroleurs", name: "Microcontrollers", slug: "microcontrollers" },
        { id: "cartes-arduino", name: "Arduino Boards", slug: "arduino-boards" },
        { id: "raspberry-pi", name: "Raspberry Pi", slug: "raspberry-pi" },
        { id: "breadboards", name: "Breadboards", slug: "breadboards" },
        { id: "stations-soudage", name: "Soldering Stations", slug: "soldering-stations" },
        { id: "multimetres", name: "Multimeters", slug: "multimeters" },
        { id: "outils-reparation", name: "Repair Tools", slug: "repair-tools" },
        { id: "cables-connecteurs", name: "Cables & Connectors", slug: "cables-connectors" },
        { id: "testeurs-electroniques", name: "Electronic Testers", slug: "electronic-testers" },
        { id: "cameras-thermiques", name: "Thermal Cameras", slug: "thermal-cameras" }
      ]
    },
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
    },
    {
      id: "marques-populaires",
      name: "Popular Brands",
      slug: "popular-brands",
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
        { id: "tp-link", name: "TP-Link", slug: "tp-link" },
        { id: "netgear", name: "Netgear", slug: "netgear" },
        { id: "ubiquiti", name: "Ubiquiti", slug: "ubiquiti" }
      ]
    }
  ]
};