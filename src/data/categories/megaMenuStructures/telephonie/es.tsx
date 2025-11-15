import React from "react";
import { MenuCategory } from "@/data/categoryTypes";
import { Smartphone } from "lucide-react";

export const telephonieEs: MenuCategory = {
  id: "telephonia",
  name: "Telefonía",
  slug: "telefonia",
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
    }
  ]
};