import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Laptop } from "lucide-react";

export const informatiqueElectroniqueEs: MenuCategory = {
  id: "informatique-electronique",
  name: "Informática & Electrónica",
  slug: "informatique-electronique",
  icon: <Laptop className="w-4 h-4" />,
  subcategories: [
    {
      id: "ordinateurs-pc",
      name: "Ordenadores & PCs",
      slug: "ordinateurs-pc",
      subcategories: [
        { id: "pc-de-bureau", name: "PCs de escritorio", slug: "pc-de-bureau" },
        { id: "pc-gaming", name: "PCs gaming", slug: "pc-gaming" },
        { id: "pc-professionnels", name: "PCs profesionales", slug: "pc-professionnels" },
        { id: "mini-pc", name: "Mini PCs", slug: "mini-pc" },
        { id: "pc-tout-en-un", name: "PCs todo‑en‑uno", slug: "pc-tout-en-un" },
        { id: "ordinateurs-portables", name: "Portátiles", slug: "ordinateurs-portables" },
        { id: "ultrabooks", name: "Ultrabooks", slug: "ultrabooks" },
        { id: "laptops-professionnels", name: "Portátiles profesionales", slug: "laptops-professionnels" },
        { id: "laptops-gaming", name: "Portátiles gaming", slug: "laptops-gaming" },
        { id: "laptops-etudiants", name: "Portátiles para estudiantes", slug: "laptops-etudiants" },
        { id: "macbook", name: "MacBook", slug: "macbook" },
        { id: "chromebook", name: "Chromebook", slug: "chromebook" },
        { id: "stations-travail-portables", name: "Estaciones de trabajo portátiles", slug: "stations-travail-portables" },
        { id: "pc-reconditionnes", name: "PCs reacondicionados", slug: "pc-reconditionnes" }
      ]
    },
    {
      id: "composants-informatiques",
      name: "Componentes informáticos",
      slug: "composants-informatiques",
      subcategories: [
        { id: "processeurs", name: "Procesadores (Intel, AMD)", slug: "processeurs" },
        { id: "cartes-graphiques", name: "Tarjetas gráficas (NVIDIA, AMD)", slug: "cartes-graphiques" },
        { id: "cartes-meres", name: "Placas base", slug: "cartes-meres" },
        { id: "memoires-ram", name: "Memoria RAM", slug: "memoires-ram" },
        { id: "ssd", name: "SSD", slug: "ssd" },
        { id: "disques-durs-hdd", name: "HDD", slug: "disques-durs-hdd" },
        { id: "alimentation-pc", name: "Fuentes de alimentación", slug: "alimentation-pc" },
        { id: "boitiers-pc", name: "Cajas de PC", slug: "boitiers-pc" },
        { id: "refroidissement-liquide", name: "Sistemas de refrigeración líquida", slug: "refroidissement-liquide" },
        { id: "ventilateurs-air", name: "Ventiladores y refrigeración por aire", slug: "ventilateurs-air" },
        { id: "pates-thermiques", name: "Pasta térmica", slug: "pates-thermiques" },
        { id: "cartes-son", name: "Tarjetas de sonido", slug: "cartes-son" },
        { id: "cartes-reseau", name: "Tarjetas de red", slug: "cartes-reseau" },
        { id: "cartes-acquisition-video", name: "Tarjetas de captura de vídeo", slug: "cartes-acquisition-video" }
      ]
    },
    {
      id: "peripheriques-pc",
      name: "Periféricos de PC",
      slug: "peripheriques-pc",
      subcategories: [
        { id: "ecrans-moniteurs", name: "Pantallas y monitores", slug: "ecrans-moniteurs" },
        { id: "moniteurs-gaming", name: "Monitores gaming", slug: "moniteurs-gaming" },
        { id: "moniteurs-incurves", name: "Monitores curvos", slug: "moniteurs-incurves" },
        {
          id: "claviers",
          name: "Teclados",
          slug: "claviers",
          subcategories: [
            { id: "claviers-mecaniques", name: "Mecánicos", slug: "claviers-mecaniques" },
            { id: "claviers-sans-fil", name: "Inalámbricos", slug: "claviers-sans-fil" },
            { id: "claviers-gaming", name: "Gaming", slug: "claviers-gaming" }
          ]
        },
        {
          id: "souris",
          name: "Ratones",
          slug: "souris",
          subcategories: [
            { id: "souris-filaire", name: "Con cable", slug: "souris-filaire" },
            { id: "souris-sans-fil", name: "Inalámbricos", slug: "souris-sans-fil" },
            { id: "souris-gaming", name: "Gaming", slug: "souris-gaming" }
          ]
        },
        { id: "tapis-souris", name: "Alfombrillas", slug: "tapis-souris" },
        { id: "webcams", name: "Webcams", slug: "webcams" },
        { id: "microphones", name: "Micrófonos", slug: "microphones" },
        { id: "enceintes-pc", name: "Altavoces para PC", slug: "enceintes-pc" },
        { id: "casques-audio", name: "Auriculares", slug: "casques-audio" },
        { id: "disques-durs-externes", name: "Discos duros externos", slug: "disques-durs-externes" },
        { id: "cles-usb", name: "Memorias USB", slug: "cles-usb" },
        { id: "lecteurs-cartes-memoire", name: "Lectores de tarjetas", slug: "lecteurs-cartes-memoire" },
        { id: "stations-accueil", name: "Bases de conexión", slug: "stations-accueil" },
        { id: "imprimantes", name: "Impresoras", slug: "imprimantes" },
        { id: "scanners", name: "Escáneres", slug: "scanners" },
        { id: "videoprojecteurs", name: "Proyectores", slug: "videoprojecteurs" }
      ]
    },
    {
      id: "reseau-internet",
      name: "Red & Internet",
      slug: "reseau-internet",
      subcategories: [
        { id: "routeurs-wifi", name: "Routers Wi‑Fi", slug: "routeurs-wifi" },
        { id: "wifi-mesh", name: "Sistemas Wi‑Fi Mesh", slug: "wifi-mesh" },
        { id: "modems", name: "Módems", slug: "modems" },
        { id: "repeteurs", name: "Repetidores", slug: "repeteurs" },
        { id: "points-acces", name: "Puntos de acceso", slug: "points-acces" },
        { id: "switches", name: "Switches de red", slug: "switches" },
        { id: "cables-ethernet", name: "Cables Ethernet", slug: "cables-ethernet" },
        { id: "fibre-optique", name: "Equipos de fibra óptica", slug: "fibre-optique" },
        { id: "routeurs-4g-5g", name: "Routers 4G/5G", slug: "routeurs-4g-5g" },
        { id: "antennes-reseau", name: "Antenas de red", slug: "antennes-reseau" },
        { id: "adaptateurs-usb-wifi", name: "Adaptadores USB Wi‑Fi", slug: "adaptateurs-usb-wifi" },
        { id: "routeurs-vpn", name: "Routers VPN", slug: "routeurs-vpn" }
      ]
    },
    {
      id: "equipement-bureau",
      name: "Equipamiento de oficina",
      slug: "equipement-bureau",
      subcategories: [
        { id: "imprimantes-laser", name: "Impresoras láser", slug: "imprimantes-laser" },
        { id: "imprimantes-jet-encre", name: "Impresoras de tinta", slug: "imprimantes-jet-encre" },
        { id: "photocopieurs", name: "Fotocopiadoras", slug: "photocopieurs" },
        { id: "scanners-pro", name: "Escáneres", slug: "scanners-pro" },
        { id: "fax", name: "Fax", slug: "fax" },
        { id: "multifonctions", name: "Multifunción", slug: "multifonctions" },
        { id: "cartouches-encre", name: "Cartuchos de tinta", slug: "cartouches-encre" },
        { id: "toners", name: "Tóner", slug: "toners" },
        { id: "plastifieuses", name: "Plastificadoras", slug: "plastifieuses" },
        { id: "destructeurs-documents", name: "Destructoras de documentos", slug: "destructeurs-documents" },
        { id: "videoprojecteurs-pro", name: "Proyectores profesionales", slug: "videoprojecteurs-pro" },
        { id: "tableaux-blancs", name: "Pizarras blancas", slug: "tableaux-blancs" },
        { id: "equipements-conference", name: "Equipos de conferencia", slug: "equipements-conference" }
      ]
    },
    {
      id: "electronique-gadgets",
      name: "Electrónica & Gadgets",
      slug: "electronique-gadgets",
      subcategories: [
        { id: "montres-connectees", name: "Relojes inteligentes", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Pulseras inteligentes", slug: "bracelets-connectes" },
        { id: "lunettes-intelligentes", name: "Gafas inteligentes", slug: "lunettes-intelligentes" },
        { id: "action-cams", name: "Cámaras de acción", slug: "action-cams" },
        { id: "drones", name: "Drones", slug: "drones" },
        { id: "mini-projecteurs", name: "Mini proyectores", slug: "mini-projecteurs" },
        { id: "casques-vr", name: "Cascos VR", slug: "casques-vr" },
        { id: "dispositifs-ar", name: "Dispositivos AR", slug: "dispositifs-ar" },
        { id: "liseuses", name: "E‑readers", slug: "liseuses" },
        { id: "radios", name: "Radios", slug: "radios" },
        { id: "talkie-walkies", name: "Walkie‑talkies", slug: "talkie-walkies" },
        { id: "gps-portables", name: "GPS portátiles", slug: "gps-portables" },
        { id: "stylos-numeriques", name: "Bolígrafos digitales", slug: "stylos-numeriques" }
      ]
    },
    {
      id: "maison-intelligente",
      name: "Hogar inteligente & Domótica",
      slug: "maison-intelligente",
      subcategories: [
        { id: "ampoules-connectees", name: "Bombillas inteligentes", slug: "ampoules-connectees" },
        { id: "bandes-led", name: "Tiras LED", slug: "bandes-led" },
        { id: "prises-intelligentes", name: "Enchufes inteligentes", slug: "prises-intelligentes" },
        { id: "cameras-securite", name: "Cámaras de seguridad", slug: "cameras-securite" },
        { id: "cameras-ip", name: "Cámaras IP", slug: "cameras-ip" },
        { id: "systemes-alarme", name: "Sistemas de alarma", slug: "systemes-alarme" },
        { id: "serrures-connectees", name: "Cerraduras inteligentes", slug: "serrures-connectees" },
        { id: "thermostats", name: "Termostatos", slug: "thermostats" },
        {
          id: "capteurs",
          name: "Sensores",
          slug: "capteurs",
          subcategories: [
            { id: "mouvement", name: "Movimiento", slug: "mouvement" },
            { id: "fumee", name: "Humo", slug: "fumee" },
            { id: "fuite-eau", name: "Fuga de agua", slug: "fuite-eau" }
          ]
        },
        { id: "interrupteurs-intelligents", name: "Interruptores inteligentes", slug: "interrupteurs-intelligents" },
        { id: "assistants-vocaux", name: "Asistentes de voz", slug: "assistants-vocaux" },
        { id: "sonnettes-video", name: "Timbres con video", slug: "sonnettes-video" }
      ]
    },
    {
      id: "tv-divertissement",
      name: "TV & Entretenimiento",
      slug: "tv-divertissement",
      subcategories: [
        { id: "televiseurs-led", name: "Televisores LED", slug: "televiseurs-led" },
        { id: "televiseurs-oled", name: "Televisores OLED", slug: "televiseurs-oled" },
        { id: "qled", name: "QLED", slug: "qled" },
        { id: "smart-tv", name: "Smart TV", slug: "smart-tv" },
        { id: "android-tv", name: "Android TV", slug: "android-tv" },
        { id: "recepteurs-tv", name: "Receptores de TV", slug: "recepteurs-tv" },
        { id: "decodeurs-satellites", name: "Decodificadores satelitales", slug: "decodeurs-satellites" },
        { id: "box-tv-multimedia", name: "Cajas de TV y multimedia", slug: "box-tv-multimedia" },
        { id: "lecteurs-multimedias", name: "Reproductores multimedia", slug: "lecteurs-multimedias" },
        { id: "barres-de-son", name: "Barras de sonido", slug: "barres-de-son" },
        { id: "home-cinema", name: "Cine en casa", slug: "home-cinema" },
        { id: "lecteurs-blu-ray", name: "Reproductores Blu‑ray", slug: "lecteurs-blu-ray" }
      ]
    },
    {
      id: "accessoires-mobiles",
      name: "Accesorios móviles",
      slug: "accessoires-mobiles",
      subcategories: [
        { id: "chargeurs", name: "Cargadores", slug: "chargeurs" },
        { id: "chargeurs-rapides", name: "Cargadores rápidos", slug: "chargeurs-rapides" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "cables-adaptateurs", name: "Cables y adaptadores", slug: "cables-adaptateurs" },
        { id: "chargeurs-sans-fil", name: "Cargadores inalámbricos", slug: "chargeurs-sans-fil" },
        { id: "chargeurs-voiture", name: "Cargadores de coche", slug: "chargeurs-voiture" },
        { id: "hubs-usb", name: "Hubs USB", slug: "hubs-usb" },
        { id: "protections-ecran", name: "Protectores de pantalla", slug: "protections-ecran" },
        { id: "claviers-tablettes", name: "Teclados para tablets", slug: "claviers-tablettes" },
        { id: "stylets-tactiles", name: "Lápices táctiles", slug: "stylets-tactiles" },
        { id: "stations-accueil-mobiles", name: "Bases de conexión", slug: "stations-accueil-mobiles" }
      ]
    },
    {
      id: "informatique-professionnelle",
      name: "Informática profesional",
      slug: "informatique-professionnelle",
      subcategories: [
        { id: "serveurs", name: "Servidores", slug: "serveurs" },
        { id: "baies-serveurs", name: "Armarios de servidores", slug: "baies-serveurs" },
        { id: "nas", name: "NAS", slug: "nas" },
        { id: "onduleurs-ups", name: "Sistemas UPS", slug: "onduleurs-ups" },
        { id: "switches-professionnels", name: "Switches profesionales", slug: "switches-professionnels" },
        { id: "pare-feux-reseau", name: "Cortafuegos de red", slug: "pare-feux-reseau" },
        { id: "equipements-cloud", name: "Equipos cloud", slug: "equipements-cloud" },
        { id: "appliances-sauvegarde", name: "Dispositivos de copia de seguridad", slug: "appliances-sauvegarde" },
        { id: "dispositifs-biometriques", name: "Dispositivos biométricos", slug: "dispositifs-biometriques" },
        { id: "systemes-conference-haut-de-gamme", name: "Sistemas de conferencia de alta gama", slug: "systemes-conference-haut-de-gamme" }
      ]
    },
    {
      id: "composants-electroniques-outils",
      name: "Componentes electrónicos & Herramientas de reparación",
      slug: "composants-electroniques-outils",
      subcategories: [
        { id: "capteurs-electroniques", name: "Sensores electrónicos", slug: "capteurs-electroniques" },
        { id: "resistances", name: "Resistencias", slug: "resistances" },
        { id: "condensateurs", name: "Condensadores", slug: "condensateurs" },
        { id: "diodes", name: "Diodos", slug: "diodes" },
        { id: "transistors", name: "Transistores", slug: "transistors" },
        { id: "microcontroleurs", name: "Microcontroladores", slug: "microcontroleurs" },
        { id: "cartes-arduino", name: "Placas Arduino", slug: "cartes-arduino" },
        { id: "raspberry-pi", name: "Raspberry Pi", slug: "raspberry-pi" },
        { id: "breadboards", name: "Placas de pruebas", slug: "breadboards" },
        { id: "stations-soudage", name: "Estaciones de soldadura", slug: "stations-soudage" },
        { id: "multimetres", name: "Multímetros", slug: "multimetres" },
        { id: "outils-reparation", name: "Herramientas de reparación", slug: "outils-reparation" },
        { id: "cables-connecteurs", name: "Cables & conectores", slug: "cables-connecteurs" },
        { id: "testeurs-electroniques", name: "Comprobadores electrónicos", slug: "testeurs-electroniques" },
        { id: "cameras-thermiques", name: "Cámaras térmicas", slug: "cameras-thermiques" }
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
        { id: "smartphones-pliables", name: "Smartphones plegables", slug: "smartphones-pliables" },
        { id: "smartphones-entree-de-gamme", name: "Smartphones de gama de entrada", slug: "smartphones-entree-de-gamme" },
        { id: "smartphones-milieu-de-gamme", name: "Smartphones de gama media", slug: "smartphones-milieu-de-gamme" },
        { id: "smartphones-haut-de-gamme", name: "Smartphones de gama alta", slug: "smartphones-haut-de-gamme" },
        { id: "smartphones-reconditionnes", name: "Smartphones reacondicionados", slug: "smartphones-reconditionnes" },
        { id: "telephones-robustes-rugged", name: "Teléfonos resistentes (rugged)", slug: "telephones-robustes-rugged" },
        { id: "mini-smartphones", name: "Mini smartphones", slug: "mini-smartphones" },
        { id: "smartphones-professionnels", name: "Smartphones profesionales", slug: "smartphones-professionnels" }
      ]
    },
    {
      id: "telephones-classiques-fixes",
      name: "Teléfonos clásicos y fijos",
      slug: "telephones-classiques-fixes",
      subcategories: [
        { id: "telephones-portables-classiques", name: "Teléfonos móviles clásicos", slug: "telephones-portables-classiques" },
        { id: "telephones-a-clapet", name: "Teléfonos de tapa", slug: "telephones-a-clapet" },
        { id: "telephones-seniors", name: "Teléfonos para mayores", slug: "telephones-seniors" },
        { id: "telephones-fixes-filaires", name: "Teléfonos fijos con cable", slug: "telephones-fixes-filaires" },
        { id: "telephones-fixes-sans-fil", name: "Teléfonos fijos inalámbricos", slug: "telephones-fixes-sans-fil" },
        { id: "combines-dect", name: "Auriculares DECT", slug: "combines-dect" },
        { id: "telephones-voip", name: "Teléfonos VoIP", slug: "telephones-voip" }
      ]
    },
    {
      id: "tablettes-appareils-mobiles",
      name: "Tablets y dispositivos móviles",
      slug: "tablettes-appareils-mobiles",
      subcategories: [
        { id: "tablettes-android", name: "Tablets Android", slug: "tablettes-android" },
        { id: "ipad", name: "iPad", slug: "ipad" },
        { id: "tablettes-graphiques", name: "Tabletas gráficas", slug: "tablettes-graphiques" },
        { id: "tablettes-enfants", name: "Tablets para niños", slug: "tablettes-enfants" },
        { id: "liseuses-electroniques", name: "Lectores electrónicos", slug: "liseuses-electroniques" },
        { id: "phablettes", name: "Phablets", slug: "phablettes" },
        { id: "mini-tablettes", name: "Mini tablets", slug: "mini-tablettes" },
        { id: "tablettes-professionnelles", name: "Tablets profesionales", slug: "tablettes-professionnelles" }
      ]
    },
    {
      id: "accessoires-telephones",
      name: "Accesorios para teléfonos",
      slug: "accessoires-telephones",
      subcategories: [
        { id: "coques-protection", name: "Fundas protectoras", slug: "coques-protection" },
        { id: "housses", name: "Fundas", slug: "housses" },
        { id: "etuis", name: "Estuches", slug: "etuis" },
        { id: "bumpers", name: "Bumpers", slug: "bumpers" },
        { id: "vitres-protections-ecran", name: "Protectores de pantalla y vidrio", slug: "vitres-protections-ecran" },
        { id: "supports-telephones", name: "Soportes para teléfono", slug: "supports-telephones" },
        { id: "supports-voiture", name: "Soportes para coche", slug: "supports-voiture" },
        { id: "stylos-tactiles", name: "Lápices táctiles", slug: "stylos-tactiles" },
        { id: "anneaux-grips", name: "Anillos y grips", slug: "anneaux-grips" },
        { id: "pochettes-impermeables", name: "Bolsas impermeables", slug: "pochettes-impermeables" }
      ]
    },
    {
      id: "batteries-charge",
      name: "Baterías y carga",
      slug: "batteries-charge",
      subcategories: [
        { id: "chargeurs-standard", name: "Cargadores estándar", slug: "chargeurs-standard" },
        { id: "chargeurs-rapides-fast-quick", name: "Cargadores rápidos (Fast/Quick Charge)", slug: "chargeurs-rapides-fast-quick" },
        { id: "chargeurs-sans-fil", name: "Cargadores inalámbricos", slug: "chargeurs-sans-fil" },
        { id: "stations-recharge", name: "Estaciones de carga", slug: "stations-recharge" },
        { id: "powerbanks", name: "Powerbanks", slug: "powerbanks" },
        { id: "batteries-externes-haute-capacite", name: "Baterías externas de alta capacidad", slug: "batteries-externes-haute-capacite" },
        { id: "cables-usb", name: "Cables USB (Type‑C, Lightning, Micro‑USB)", slug: "cables-usb" },
        { id: "adaptateurs-secteur", name: "Adaptadores de pared", slug: "adaptateurs-secteur" },
        { id: "chargeurs-voiture", name: "Cargadores para coche", slug: "chargeurs-voiture" },
        { id: "hubs-usb-multiprises-intelligentes", name: "Hubs USB y regletas inteligentes", slug: "hubs-usb-multiprises-intelligentes" }
      ]
    },
    {
      id: "audio-mobile",
      name: "Audio móvil",
      slug: "audio-mobile",
      subcategories: [
        { id: "ecouteurs-filaires", name: "Auriculares con cable", slug: "ecouteurs-filaires" },
        { id: "ecouteurs-bluetooth", name: "Auriculares Bluetooth", slug: "ecouteurs-bluetooth" },
        { id: "airpods", name: "AirPods", slug: "airpods" },
        { id: "casques-sans-fil", name: "Auriculares inalámbricos", slug: "casques-sans-fil" },
        { id: "casques-filaires", name: "Auriculares con cable", slug: "casques-filaires" },
        { id: "enceintes-bluetooth", name: "Altavoces Bluetooth", slug: "enceintes-bluetooth" },
        { id: "kits-mains-libres", name: "Kits manos libres", slug: "kits-mains-libres" },
        { id: "micros-mobiles", name: "Micrófonos móviles", slug: "micros-mobiles" },
        { id: "adaptateurs-audio", name: "Adaptadores de audio", slug: "adaptateurs-audio" }
      ]
    },
    {
      id: "pieces-reparation-telephone",
      name: "Piezas y reparación de teléfonos",
      slug: "pieces-reparation-telephone",
      subcategories: [
        { id: "ecrans-lcd-oled", name: "Pantallas LCD y OLED", slug: "ecrans-lcd-oled" },
        { id: "batteries-internes", name: "Baterías internas", slug: "batteries-internes" },
        { id: "connecteurs-charge", name: "Conectores de carga", slug: "connecteurs-charge" },
        { id: "nappes-circuits", name: "Cintas flex y circuitos", slug: "nappes-circuits" },
        { id: "cameras-avant-arriere", name: "Cámaras frontal/trasera", slug: "cameras-avant-arriere" },
        { id: "chassis-coques-arriere", name: "Chasis y tapas traseras", slug: "chassis-coques-arriere" },
        { id: "boutons-flex", name: "Botones y flex", slug: "boutons-flex" },
        { id: "haut-parleurs-micros", name: "Altavoces y micrófonos", slug: "haut-parleurs-micros" },
        { id: "vitres-arriere", name: "Cristal trasero", slug: "vitres-arriere" },
        { id: "kits-reparation", name: "Kits de reparación", slug: "kits-reparation" },
        { id: "outils-demontage", name: "Herramientas de desmontaje", slug: "outils-demontage" },
        { id: "stations-soudure", name: "Estaciones de soldadura", slug: "stations-soudure" },
        { id: "ecrans-reconditionnes", name: "Pantallas reacondicionadas", slug: "ecrans-reconditionnes" }
      ]
    },
    {
      id: "objets-connectes-mobile",
      name: "Objetos conectados (Móvil)",
      slug: "objets-connectes-mobile",
      subcategories: [
        { id: "montres-connectees", name: "Relojes inteligentes", slug: "montres-connectees" },
        { id: "bracelets-connectes", name: "Pulseras inteligentes", slug: "bracelets-connectes" },
        { id: "trackers-gps", name: "Rastreadores GPS", slug: "trackers-gps" },
        { id: "ecouteurs-intelligents", name: "Auriculares inteligentes", slug: "ecouteurs-intelligents" },
        { id: "lunettes-connectees", name: "Gafas inteligentes", slug: "lunettes-connectees" },
        { id: "balises-bluetooth", name: "Balizas Bluetooth", slug: "balises-bluetooth" },
        { id: "assistants-vocaux-portables", name: "Asistentes de voz portátiles", slug: "assistants-vocaux-portables" }
      ]
    },
    {
      id: "reseau-communication-mobile",
      name: "Red y comunicación móvil",
      slug: "reseau-communication-mobile",
      subcategories: [
        { id: "cartes-sim", name: "Tarjetas SIM", slug: "cartes-sim" },
        { id: "esim", name: "eSIM", slug: "esim" },
        { id: "routeurs-4g-5g", name: "Routers 4G/5G", slug: "routeurs-4g-5g" },
        { id: "modems-portables", name: "Módems portátiles", slug: "modems-portables" },
        { id: "antennes-amplificateurs-reseau", name: "Antenas y amplificadores de señal", slug: "antennes-amplificateurs-reseau" },
        { id: "repeteurs-gsm", name: "Repetidores GSM", slug: "repeteurs-gsm" },
        { id: "boitiers-wifi-mobiles", name: "Cajas Wi‑Fi móviles", slug: "boitiers-wifi-mobiles" },
        { id: "adaptateurs-reseau-telephone", name: "Adaptadores de red para teléfono", slug: "adaptateurs-reseau-telephone" }
      ]
    },
    {
      id: "securite-protection-mobile",
      name: "Seguridad y protección",
      slug: "securite-protection",
      subcategories: [
        { id: "antivols-telephone", name: "Antirrobo para teléfonos", slug: "antivols-telephone" },
        { id: "etuis-renforces", name: "Fundas reforzadas", slug: "etuis-renforces" },
        { id: "coques-anti-chute", name: "Fundas anti‑caída", slug: "coques-anti-chute" },
        { id: "protections-etanches-ip68", name: "Protecciones impermeables IP68", slug: "protections-etanches-ip68" },
        { id: "housses-anti-choc", name: "Fundas anti‑choque", slug: "housses-anti-choc" },
        { id: "verres-trempes-haute-resistance", name: "Vidrios templados de alta resistencia", slug: "verres-trempes-haute-resistance" },
        { id: "accessoires-confidentialite", name: "Accesorios de privacidad", slug: "accessoires-confidentialite" }
      ]
    },
    {
      id: "applications-services-mobiles",
      name: "Aplicaciones y servicios",
      slug: "applications-services",
      subcategories: [
        { id: "services-reparation-mobile", name: "Servicios de reparación móvil", slug: "services-reparation-mobile" },
        { id: "debloquage-desimlockage", name: "Liberación y desbloqueo", slug: "debloquage-desimlockage" },
        { id: "transfert-donnees", name: "Transferencia de datos", slug: "transfert-donnees" },
        { id: "diagnostics-mobiles", name: "Diagnósticos", slug: "diagnostics-mobiles" },
        { id: "accessoires-sur-mesure", name: "Accesorios a medida", slug: "accessoires-sur-mesure" },
        { id: "personnalisation-mobile", name: "Personalización móvil", slug: "personnalisation-mobile" }
      ]
    },
    {
      id: "marques-populaires-mobiles",
      name: "Marcas populares (Móviles)",
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
      name: "Operadores móviles en Argelia",
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
      name: "Marcas populares",
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