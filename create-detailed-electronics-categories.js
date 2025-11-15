import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Informatique & Électronique...');

// Structure détaillée des catégories en plusieurs langues
const detailedElectronicsCategories = {
  // Catégorie principale
  'informatique-tablettes': {
    name: {
      fr: 'Informatique & Tablettes',
      ar: 'الحاسوب و الأجهزة اللوحية',
      en: 'Computers & Tablets',
      de: 'Computer & Tablets',
      es: 'Informática y Tabletas'
    },
    slug: 'informatique-tablettes',
    icon: 'Monitor',
    subcategories: {
      // Ordinateurs Portables
      'ordinateurs-portables': {
        name: {
          fr: 'Ordinateurs Portables',
          ar: 'الحواسيب المحمولة',
          en: 'Laptops',
          de: 'Laptops',
          es: 'Ordenadores Portátiles'
        },
        slug: 'ordinateurs-portables',
        icon: 'Laptop',
        subcategories: {
          'laptops-gaming': {
            name: {
              fr: 'Laptops Gaming',
              ar: 'حواسيب محمولة للألعاب',
              en: 'Gaming Laptops',
              de: 'Gaming Laptops',
              es: 'Portátiles Gaming'
            },
            slug: 'laptops-gaming',
            icon: 'Cpu'
          },
          'laptops-professionnels': {
            name: {
              fr: 'Laptops Professionnels',
              ar: 'حواسيب محمولة احترافية',
              en: 'Professional Laptops',
              de: 'Professionelle Laptops',
              es: 'Portátiles Profesionales'
            },
            slug: 'laptops-professionnels',
            icon: 'Briefcase'
          },
          'laptops-etudiants': {
            name: {
              fr: 'Laptops Étudiants',
              ar: 'حواسيب محمولة للطلاب',
              en: 'Student Laptops',
              de: 'Studenten Laptops',
              es: 'Portátiles Estudiantiles'
            },
            slug: 'laptops-etudiants',
            icon: 'BookOpen'
          },
          'ultrabooks-premium': {
            name: {
              fr: 'Ultrabooks & Laptops Premium',
              ar: 'ألترابوكس وأجهزة محمولة مميزة',
              en: 'Ultrabooks & Premium Laptops',
              de: 'Ultrabooks & Premium Laptops',
              es: 'Ultrabooks y Portátiles Premium'
            },
            slug: 'ultrabooks-premium',
            icon: 'Zap'
          },
          'macbooks': {
            name: {
              fr: 'MacBooks',
              ar: 'أجهزة ماك بوك',
              en: 'MacBooks',
              de: 'MacBooks',
              es: 'MacBooks'
            },
            slug: 'macbooks',
            icon: 'Monitor'
          },
          'laptops-reconditionnes': {
            name: {
              fr: 'Ordinateurs Portables Reconditionnés',
              ar: 'حواسيب محمولة مجددة',
              en: 'Refurbished Laptops',
              de: 'Generalüberholte Laptops',
              es: 'Portátiles Reacondicionados'
            },
            slug: 'laptops-reconditionnes',
            icon: 'RefreshCw'
          }
        }
      },
      // Ordinateurs de Bureau
      'ordinateurs-bureau': {
        name: {
          fr: 'Ordinateurs de Bureau',
          ar: 'حواسيب المكتب',
          en: 'Desktop Computers',
          de: 'Desktop Computer',
          es: 'Ordenadores de Escritorio'
        },
        slug: 'ordinateurs-bureau',
        icon: 'Monitor',
        subcategories: {
          'pc-tour': {
            name: {
              fr: 'PC Tour',
              ar: 'حاسوب برج',
              en: 'Tower PCs',
              de: 'Tower PCs',
              es: 'PC Torre'
            },
            slug: 'pc-tour',
            icon: 'Cpu'
          },
          'pc-tout-en-un': {
            name: {
              fr: 'PC Tout-en-un',
              ar: 'حاسوب متكامل',
              en: 'All-in-One PCs',
              de: 'All-in-One PCs',
              es: 'PC Todo en Uno'
            },
            slug: 'pc-tout-en-un',
            icon: 'Monitor'
          },
          'ordinateurs-bureau-reconditionnes': {
            name: {
              fr: 'Ordinateurs de Bureau Reconditionnés',
              ar: 'حواسيب مكتب مجددة',
              en: 'Refurbished Desktops',
              de: 'Generalüberholte Desktops',
              es: 'Ordenadores Reacondicionados'
            },
            slug: 'ordinateurs-bureau-reconditionnes',
            icon: 'RefreshCw'
          },
          'stations-travail': {
            name: {
              fr: 'Stations de Travail',
              ar: 'محطات العمل',
              en: 'Workstations',
              de: 'Workstations',
              es: 'Estaciones de Trabajo'
            },
            slug: 'stations-travail',
            icon: 'Monitor'
          },
          'mini-pc': {
            name: {
              fr: 'Mini PC',
              ar: 'حاسوب مصغر',
              en: 'Mini PCs',
              de: 'Mini PCs',
              es: 'Mini PC'
            },
            slug: 'mini-pc',
            icon: 'Cpu'
          }
        }
      },
      // Composants & Pièces
      'composants-pieces': {
        name: {
          fr: 'Composants & Pièces',
          ar: 'مكونات وقطع غيار',
          en: 'Components & Parts',
          de: 'Komponenten & Teile',
          es: 'Componentes y Piezas'
        },
        slug: 'composants-pieces',
        icon: 'Cpu',
        subcategories: {
          'processeurs': {
            name: {
              fr: 'Processeurs',
              ar: 'معالجات',
              en: 'Processors',
              de: 'Prozessoren',
              es: 'Procesadores'
            },
            slug: 'processeurs',
            icon: 'Cpu'
          },
          'cartes-graphiques': {
            name: {
              fr: 'Cartes Graphiques',
              ar: 'بطاقات رسومية',
              en: 'Graphics Cards',
              de: 'Grafikkarten',
              es: 'Tarjetas Gráficas'
            },
            slug: 'cartes-graphiques',
            icon: 'Monitor'
          },
          'memoire-ram': {
            name: {
              fr: 'Mémoire RAM',
              ar: 'ذاكرة الوصول العشوائي',
              en: 'RAM Memory',
              de: 'RAM Speicher',
              es: 'Memoria RAM'
            },
            slug: 'memoire-ram',
            icon: 'Cpu'
          },
          'disques-durs': {
            name: {
              fr: 'Disques Durs',
              ar: 'أقراص صلبة',
              en: 'Hard Drives',
              de: 'Festplatten',
              es: 'Discos Duros'
            },
            slug: 'disques-durs',
            icon: 'HardDrive'
          },
          'cartes-meres': {
            name: {
              fr: 'Cartes Mères',
              ar: 'لوحات الأم',
              en: 'Motherboards',
              de: 'Hauptplatinen',
              es: 'Placas Base'
            },
            slug: 'cartes-meres',
            icon: 'Cpu'
          },
          'alimentations': {
            name: {
              fr: 'Alimentations',
              ar: 'مزودات الطاقة',
              en: 'Power Supplies',
              de: 'Netzteile',
              es: 'Fuentes de Alimentación'
            },
            slug: 'alimentations',
            icon: 'Zap'
          },
          'boitiers': {
            name: {
              fr: 'Boîtiers',
              ar: 'صناديق',
              en: 'Cases',
              de: 'Gehäuse',
              es: 'Cajas'
            },
            slug: 'boitiers',
            icon: 'Box'
          },
          'systemes-refroidissement': {
            name: {
              fr: 'Systèmes de Refroidissement',
              ar: 'أنظمة التبريد',
              en: 'Cooling Systems',
              de: 'Kühlsysteme',
              es: 'Sistemas de Refrigeración'
            },
            slug: 'systemes-refroidissement',
            icon: 'Wind'
          }
        }
      },
      // Périphériques Informatiques
      'peripheriques-informatiques': {
        name: {
          fr: 'Périphériques Informatiques',
          ar: 'أجهزة الكمبيوتر الطرفية',
          en: 'Computer Peripherals',
          de: 'Computer Peripherie',
          es: 'Periféricos Informáticos'
        },
        slug: 'peripheriques-informatiques',
        icon: 'MousePointer',
        subcategories: {
          'claviers': {
            name: {
              fr: 'Claviers',
              ar: 'لوحات المفاتيح',
              en: 'Keyboards',
              de: 'Tastaturen',
              es: 'Teclados'
            },
            slug: 'claviers',
            icon: 'Keyboard'
          },
          'souris': {
            name: {
              fr: 'Souris',
              ar: 'فأرة',
              en: 'Mice',
              de: 'Mäuse',
              es: 'Ratones'
            },
            slug: 'souris',
            icon: 'MousePointer'
          },
          'ecrans': {
            name: {
              fr: 'Écrans',
              ar: 'شاشات',
              en: 'Monitors',
              de: 'Monitore',
              es: 'Monitores'
            },
            slug: 'ecrans',
            icon: 'Monitor'
          },
          'imprimantes-scanners': {
            name: {
              fr: 'Imprimantes & Scanners',
              ar: 'طابعات وماسحات ضوئية',
              en: 'Printers & Scanners',
              de: 'Drucker & Scanner',
              es: 'Impresoras y Escáneres'
            },
            slug: 'imprimantes-scanners',
            icon: 'Printer'
          },
          'webcams-micros': {
            name: {
              fr: 'Webcams & Micros',
              ar: 'كاميرات ويب وميكروفونات',
              en: 'Webcams & Microphones',
              de: 'Webcams & Mikrofone',
              es: 'Webcams y Micrófonos'
            },
            slug: 'webcams-micros',
            icon: 'Video'
          },
          'haut-parleurs-casques': {
            name: {
              fr: 'Haut-parleurs & Casques',
              ar: 'مكبرات صوت وسماعات رأس',
              en: 'Speakers & Headphones',
              de: 'Lautsprecher & Kopfhörer',
              es: 'Altavoces y Auriculares'
            },
            slug: 'haut-parleurs-casques',
            icon: 'Headphones'
          }
        }
      },
      // Tablettes & E-Readers
      'tablettes-ereaders': {
        name: {
          fr: 'Tablettes & E-Readers',
          ar: 'أجهزة لوحية وقارئات إلكترونية',
          en: 'Tablets & E-Readers',
          de: 'Tablets & E-Reader',
          es: 'Tabletas y Lectores Electrónicos'
        },
        slug: 'tablettes-ereaders',
        icon: 'Tablet',
        subcategories: {
          'ipad': {
            name: {
              fr: 'iPad',
              ar: 'أجهزة آيباد',
              en: 'iPad',
              de: 'iPad',
              es: 'iPad'
            },
            slug: 'ipad',
            icon: 'Tablet'
          },
          'tablettes-android': {
            name: {
              fr: 'Tablettes Android',
              ar: 'أجهزة لوحية أندرويد',
              en: 'Android Tablets',
              de: 'Android Tablets',
              es: 'Tabletas Android'
            },
            slug: 'tablettes-android',
            icon: 'Smartphone'
          },
          'tablettes-windows': {
            name: {
              fr: 'Tablettes Windows',
              ar: 'أجهزة لوحية ويندوز',
              en: 'Windows Tablets',
              de: 'Windows Tablets',
              es: 'Tabletas Windows'
            },
            slug: 'tablettes-windows',
            icon: 'Monitor'
          },
          'liseuses-numeriques': {
            name: {
              fr: 'Liseuses Numériques',
              ar: 'قارئات إلكترونية',
              en: 'E-Readers',
              de: 'E-Reader',
              es: 'Lectores Electrónicos'
            },
            slug: 'liseuses-numeriques',
            icon: 'BookOpen'
          }
        }
      },
      // Stockage & Réseaux
      'stockage-reseaux': {
        name: {
          fr: 'Stockage & Réseaux',
          ar: 'تخزين وشبكات',
          en: 'Storage & Networking',
          de: 'Speicher & Netzwerk',
          es: 'Almacenamiento y Redes'
        },
        slug: 'stockage-reseaux',
        icon: 'HardDrive',
        subcategories: {
          'disques-durs-externes': {
            name: {
              fr: 'Disques Durs Externes',
              ar: 'أقراص صلبة خارجية',
              en: 'External Hard Drives',
              de: 'Externe Festplatten',
              es: 'Discos Duros Externos'
            },
            slug: 'disques-durs-externes',
            icon: 'HardDrive'
          },
          'cles-usb': {
            name: {
              fr: 'Clés USB',
              ar: 'محركات أقراص USB',
              en: 'USB Flash Drives',
              de: 'USB-Sticks',
              es: 'Memorias USB'
            },
            slug: 'cles-usb',
            icon: 'HardDrive'
          },
          'cartes-memoire': {
            name: {
              fr: 'Cartes Mémoire',
              ar: 'بطاقات الذاكرة',
              en: 'Memory Cards',
              de: 'Speicherkarten',
              es: 'Tarjetas de Memoria'
            },
            slug: 'cartes-memoire',
            icon: 'HardDrive'
          },
          'routeurs-points-acces': {
            name: {
              fr: 'Routeurs & Points d\'Accès',
              ar: 'راوترات ونقاط وصول',
              en: 'Routers & Access Points',
              de: 'Router & Access Points',
              es: 'Routers y Puntos de Acceso'
            },
            slug: 'routeurs-points-acces',
            icon: 'Wifi'
          },
          'switches-reseau': {
            name: {
              fr: 'Switches Réseau',
              ar: 'مفاتيح الشبكة',
              en: 'Network Switches',
              de: 'Network Switches',
              es: 'Switches de Red'
            },
            slug: 'switches-reseau',
            icon: 'Settings'
          },
          'adaptateurs-cables': {
            name: {
              fr: 'Adaptateurs & Câbles',
              ar: 'محولات وكابلات',
              en: 'Adapters & Cables',
              de: 'Adapter & Kabel',
              es: 'Adaptadores y Cables'
            },
            slug: 'adaptateurs-cables',
            icon: 'Settings'
          }
        }
      }
    }
  },
  
  // Téléphonie & Objets Connectés
  'telephonie-objets-connectes': {
    name: {
      fr: 'Téléphonie & Objets Connectés',
      ar: 'الهواتف والأجهزة الذكية',
      en: 'Smartphones & Connected Devices',
      de: 'Smartphones & Vernetzte Geräte',
      es: 'Telefonía y Dispositivos Conectados'
    },
    slug: 'telephonie-objets-connectes',
    icon: 'Smartphone',
    subcategories: {
      // Smartphones
      'smartphones': {
        name: {
          fr: 'Smartphones',
          ar: 'الهواتف الذكية',
          en: 'Smartphones',
          de: 'Smartphones',
          es: 'Smartphones'
        },
        slug: 'smartphones',
        icon: 'Phone',
        subcategories: {
          'iphones': {
            name: {
              fr: 'iPhones (tous modèles)',
              ar: 'أجهزة آيفون (جميع الموديلات)',
              en: 'iPhones (all models)',
              de: 'iPhones (alle Modelle)',
              es: 'iPhones (todos los modelos)'
            },
            slug: 'iphones',
            icon: 'Phone'
          },
          'samsung-galaxy': {
            name: {
              fr: 'Samsung Galaxy (S, Note, A)',
              ar: 'سامسونج جالاكسي (S, Note, A)',
              en: 'Samsung Galaxy (S, Note, A)',
              de: 'Samsung Galaxy (S, Note, A)',
              es: 'Samsung Galaxy (S, Note, A)'
            },
            slug: 'samsung-galaxy',
            icon: 'Phone'
          },
          'huawei': {
            name: {
              fr: 'Huawei (P, Mate)',
              ar: 'هواوي (P, Mate)',
              en: 'Huawei (P, Mate)',
              de: 'Huawei (P, Mate)',
              es: 'Huawei (P, Mate)'
            },
            slug: 'huawei',
            icon: 'Phone'
          },
          'xiaomi': {
            name: {
              fr: 'Xiaomi (Mi, Redmi)',
              ar: 'شاومي (Mi, Redmi)',
              en: 'Xiaomi (Mi, Redmi)',
              de: 'Xiaomi (Mi, Redmi)',
              es: 'Xiaomi (Mi, Redmi)'
            },
            slug: 'xiaomi',
            icon: 'Phone'
          },
          'oppo': {
            name: {
              fr: 'Oppo (Find, Reno)',
              ar: 'أوبو (Find, Reno)',
              en: 'Oppo (Find, Reno)',
              de: 'Oppo (Find, Reno)',
              es: 'Oppo (Find, Reno)'
            },
            slug: 'oppo',
            icon: 'Phone'
          },
          'telephones-reconditionnes': {
            name: {
              fr: 'Téléphones Reconditionnés',
              ar: 'هواتف مجددة',
              en: 'Refurbished Phones',
              de: 'Generalüberholte Telefone',
              es: 'Teléfonos Reacondicionados'
            },
            slug: 'telephones-reconditionnes',
            icon: 'RefreshCw'
          }
        }
      },
      // Accessoires Mobile
      'accessoires-mobile': {
        name: {
          fr: 'Accessoires Mobile',
          ar: 'م accessories الهواتف المحمولة',
          en: 'Mobile Accessories',
          de: 'Mobil Zubehör',
          es: 'Accesorios Móviles'
        },
        slug: 'accessoires-mobile',
        icon: 'Settings',
        subcategories: {
          'coques-protection': {
            name: {
              fr: 'Coques de Protection',
              ar: 'قضوات الحماية',
              en: 'Protective Cases',
              de: 'Schutzhüllen',
              es: 'Fundas Protectoras'
            },
            slug: 'coques-protection',
            icon: 'Shield'
          },
          'verres-trempes': {
            name: {
              fr: 'Verres Trempés',
              ar: 'زجاج مقسى',
              en: 'Tempered Glass',
              de: 'Gehärtetes Glas',
              es: 'Cristal Templado'
            },
            slug: 'verres-trempes',
            icon: 'Shield'
          },
          'chargeurs-cables': {
            name: {
              fr: 'Chargeurs & Câbles',
              ar: 'شواحن وكابلات',
              en: 'Chargers & Cables',
              de: 'Ladegeräte & Kabel',
              es: 'Cargadores y Cables'
            },
            slug: 'chargeurs-cables',
            icon: 'Zap'
          },
          'batteries-externes': {
            name: {
              fr: 'Batteries Externes',
              ar: 'بطاريات خارجية',
              en: 'External Batteries',
              de: 'Externe Batterien',
              es: 'Baterías Externas'
            },
            slug: 'batteries-externes',
            icon: 'Battery'
          },
          'supports-poignees': {
            name: {
              fr: 'Supports & Poignées',
              ar: 'حوامل ومقابض',
              en: 'Stands & Grips',
              de: 'Ständer & Griffe',
              es: 'Soportes y Agarres'
            },
            slug: 'supports-poignees',
            icon: 'Settings'
          },
          'popsockets-accessoires': {
            name: {
              fr: 'Popsockets & Accessoires',
              ar: 'بوبسوكس وإكسسوارات',
              en: 'Popsockets & Accessories',
              de: 'Popsockets & Zubehör',
              es: 'Popsockets y Accesorios'
            },
            slug: 'popsockets-accessoires',
            icon: 'Settings'
          }
        }
      },
      // Montres Connectées & Bracelets
      'montres-connectees-bracelets': {
        name: {
          fr: 'Montres Connectées & Bracelets',
          ar: 'ساعات ذكية وأساور',
          en: 'Smartwatches & Bracelets',
          de: 'Smartwatches & Armbänder',
          es: 'Relojes Inteligentes y Pulseras'
        },
        slug: 'montres-connectees-bracelets',
        icon: 'Watch',
        subcategories: {
          'apple-watch': {
            name: {
              fr: 'Apple Watch',
              ar: 'ساعة آبل',
              en: 'Apple Watch',
              de: 'Apple Watch',
              es: 'Apple Watch'
            },
            slug: 'apple-watch',
            icon: 'Watch'
          },
          'samsung-galaxy-watch': {
            name: {
              fr: 'Samsung Galaxy Watch',
              ar: 'ساعة سامسونج جالاكسي',
              en: 'Samsung Galaxy Watch',
              de: 'Samsung Galaxy Watch',
              es: 'Samsung Galaxy Watch'
            },
            slug: 'samsung-galaxy-watch',
            icon: 'Watch'
          },
          'xiaomi-mi-watch': {
            name: {
              fr: 'Xiaomi Mi Watch',
              ar: 'ساعة شاومي مي',
              en: 'Xiaomi Mi Watch',
              de: 'Xiaomi Mi Watch',
              es: 'Xiaomi Mi Watch'
            },
            slug: 'xiaomi-mi-watch',
            icon: 'Watch'
          },
          'fitbit-garmin': {
            name: {
              fr: 'Fitbit & Garmin',
              ar: 'فيتبيت وجارمين',
              en: 'Fitbit & Garmin',
              de: 'Fitbit & Garmin',
              es: 'Fitbit y Garmin'
            },
            slug: 'fitbit-garmin',
            icon: 'Watch'
          },
          'bracelets-activite': {
            name: {
              fr: 'Bracelets d\'Activité',
              ar: 'أساور النشاط',
              en: 'Activity Bracelets',
              de: 'Aktivitätsarmbänder',
              es: 'Pulseras de Actividad'
            },
            slug: 'bracelets-activite',
            icon: 'Watch'
          }
        }
      },
      // Objets Connectés
      'objets-connectes': {
        name: {
          fr: 'Objets Connectés',
          ar: 'أجهزة ذكية',
          en: 'Connected Devices',
          de: 'Vernetzte Geräte',
          es: 'Dispositivos Conectados'
        },
        slug: 'objets-connectes',
        icon: 'Home',
        subcategories: {
          'enceintes-intelligentes': {
            name: {
              fr: 'Enceintes Intelligentes',
              ar: 'مكبرات صوت ذكية',
              en: 'Smart Speakers',
              de: 'Intelligente Lautsprecher',
              es: 'Altavoces Inteligentes'
            },
            slug: 'enceintes-intelligentes',
            icon: 'Music'
          },
          'ampoules-connectees': {
            name: {
              fr: 'Ampoules Connectées',
              ar: 'مصابيح ذكية',
              en: 'Smart Bulbs',
              de: 'Intelligente Glühbirnen',
              es: 'Bombillas Inteligentes'
            },
            slug: 'ampoules-connectees',
            icon: 'Lightbulb'
          },
          'cameras-surveillance': {
            name: {
              fr: 'Caméras de Surveillance',
              ar: 'كاميرات مراقبة',
              en: 'Security Cameras',
              de: 'Überwachungskameras',
              es: 'Cámaras de Vigilancia'
            },
            slug: 'cameras-surveillance',
            icon: 'Camera'
          },
          'prises-intelligentes': {
            name: {
              fr: 'Prises Intelligentes',
              ar: 'مقابس ذكية',
              en: 'Smart Plugs',
              de: 'Intelligente Steckdosen',
              es: 'Enchufes Inteligentes'
            },
            slug: 'prises-intelligentes',
            icon: 'Zap'
          },
          'hubs-domotiques': {
            name: {
              fr: 'Hubs Domotiques',
              ar: 'مراكز التحكم المنزلي',
              en: 'Smart Home Hubs',
              de: 'Smart Home Hubs',
              es: 'Centros Domóticos'
            },
            slug: 'hubs-domotiques',
            icon: 'Home'
          }
        }
      }
    }
  },
  
  // Image & Son
  'image-son': {
    name: {
      fr: 'Image & Son',
      ar: 'الصورة والصوت',
      en: 'Image & Sound',
      de: 'Bild & Ton',
      es: 'Imagen y Sonido'
    },
    slug: 'image-son',
    icon: 'Camera',
    subcategories: {
      // Appareils Photo
      'appareils-photo': {
        name: {
          fr: 'Appareils Photo',
          ar: 'كاميرات',
          en: 'Cameras',
          de: 'Kameras',
          es: 'Cámaras'
        },
        slug: 'appareils-photo',
        icon: 'Camera',
        subcategories: {
          'appareils-photo-reflex': {
            name: {
              fr: 'Appareils Photo Reflex',
              ar: 'كاميرات ريفلكس',
              en: 'DSLR Cameras',
              de: 'DSLR Kameras',
              es: 'Cámaras Réflex'
            },
            slug: 'appareils-photo-reflex',
            icon: 'Camera'
          },
          'appareils-photo-hybrides': {
            name: {
              fr: 'Appareils Photo Hybrides',
              ar: 'كاميرات هجينة',
              en: 'Mirrorless Cameras',
              de: 'Spiegellose Kameras',
              es: 'Cámaras Híbridas'
            },
            slug: 'appareils-photo-hybrides',
            icon: 'Camera'
          },
          'appareils-photo-bridge': {
            name: {
              fr: 'Appareils Photo Bridge',
              ar: 'كاميرات بريدج',
              en: 'Bridge Cameras',
              de: 'Bridge Kameras',
              es: 'Cámaras Bridge'
            },
            slug: 'appareils-photo-bridge',
            icon: 'Camera'
          },
          'appareils-photo-compactes': {
            name: {
              fr: 'Appareils Photo Compactes',
              ar: 'كاميرات مدمجة',
              en: 'Compact Cameras',
              de: 'Kompaktkameras',
              es: 'Cámaras Compactas'
            },
            slug: 'appareils-photo-compactes',
            icon: 'Camera'
          },
          'objectifs-photo': {
            name: {
              fr: 'Objectifs Photo',
              ar: 'عدسات كاميرا',
              en: 'Camera Lenses',
              de: 'Kameraobjektive',
              es: 'Objetivos de Cámara'
            },
            slug: 'objectifs-photo',
            icon: 'Camera'
          },
          'flashs-accessoires-photo': {
            name: {
              fr: 'Flashs & Accessoires Photo',
              ar: 'فلاشات وإكسسوارات كاميرا',
              en: 'Flashes & Camera Accessories',
              de: 'Blitz & Kamera Zubehör',
              es: 'Flashes y Accesorios de Cámara'
            },
            slug: 'flashs-accessoires-photo',
            icon: 'Camera'
          }
        }
      },
      // Caméras & Vidéo
      'cameras-video': {
        name: {
          fr: 'Caméras & Vidéo',
          ar: 'كاميرات وفيديو',
          en: 'Cameras & Video',
          de: 'Kameras & Video',
          es: 'Cámaras y Video'
        },
        slug: 'cameras-video',
        icon: 'Video',
        subcategories: {
          'cameras-action': {
            name: {
              fr: 'Caméras d\'Action (GoPro, DJI)',
              ar: 'كاميرات الحركة (GoPro, DJI)',
              en: 'Action Cameras (GoPro, DJI)',
              de: 'Action Cams (GoPro, DJI)',
              es: 'Cámaras de Acción (GoPro, DJI)'
            },
            slug: 'cameras-action',
            icon: 'Video'
          },
          'cameras-surveillance': {
            name: {
              fr: 'Caméras de Surveillance',
              ar: 'كاميرات مراقبة',
              en: 'Security Cameras',
              de: 'Überwachungskameras',
              es: 'Cámaras de Vigilancia'
            },
            slug: 'cameras-surveillance',
            icon: 'Camera'
          },
          'cameras-web': {
            name: {
              fr: 'Caméras Web',
              ar: 'كاميرات ويب',
              en: 'Webcams',
              de: 'Webcams',
              es: 'Cámaras Web'
            },
            slug: 'cameras-web',
            icon: 'Video'
          },
          'camescopes': {
            name: {
              fr: 'Camescopes',
              ar: 'كاميرات الفيديو',
              en: 'Camcorders',
              de: 'Camcorder',
              es: 'Cámaras de Video'
            },
            slug: 'camescopes',
            icon: 'Video'
          },
          'microphones-creatifs': {
            name: {
              fr: 'Microphones Créatifs',
              ar: 'ميكروفونات احترافية',
              en: 'Creative Microphones',
              de: 'Kreative Mikrofone',
              es: 'Micrófonos Creativos'
            },
            slug: 'microphones-creatifs',
            icon: 'Video'
          }
        }
      },
      // Audio & Hi-Fi
      'audio-hifi': {
        name: {
          fr: 'Audio & Hi-Fi',
          ar: 'الصوت والهاي فاي',
          en: 'Audio & Hi-Fi',
          de: 'Audio & Hi-Fi',
          es: 'Audio y Hi-Fi'
        },
        slug: 'audio-hifi',
        icon: 'Music',
        subcategories: {
          'casques-audio': {
            name: {
              fr: 'Casques Audio (Bluetooth, filaires)',
              ar: 'سماعات رأس (بلوتوث، سلكية)',
              en: 'Headphones (Bluetooth, wired)',
              de: 'Kopfhörer (Bluetooth, kabelgebunden)',
              es: 'Auriculares (Bluetooth, con cable)'
            },
            slug: 'casques-audio',
            icon: 'Headphones'
          },
          'ecouteurs': {
            name: {
              fr: 'Écouteurs (intra-auriculaires)',
              ar: 'سماعات أذن',
              en: 'Earbuds',
              de: 'Ohrhörer',
              es: 'Audífonos'
            },
            slug: 'ecouteurs',
            icon: 'Headphones'
          },
          'enceintes-bluetooth': {
            name: {
              fr: 'Enceintes Bluetooth',
              ar: 'مكبرات صوت بلوتوث',
              en: 'Bluetooth Speakers',
              de: 'Bluetooth Lautsprecher',
              es: 'Altavoces Bluetooth'
            },
            slug: 'enceintes-bluetooth',
            icon: 'Music'
          },
          'barres-son': {
            name: {
              fr: 'Barres de Son',
              ar: 'أشرطة صوت',
              en: 'Sound Bars',
              de: 'Soundbars',
              es: 'Barras de Sonido'
            },
            slug: 'barres-son',
            icon: 'Music'
          },
          'amplificateurs-home-cinema': {
            name: {
              fr: 'Amplificateurs & Home Cinéma',
              ar: 'مكبرات الصوت والسينما المنزلية',
              en: 'Amplifiers & Home Cinema',
              de: 'Verstärker & Heimkino',
              es: 'Amplificadores y Cine en Casa'
            },
            slug: 'amplificateurs-home-cinema',
            icon: 'Music'
          },
          'platines-cd-vinyles': {
            name: {
              fr: 'Platines CD & Vinyles',
              ar: 'مشغلات أقراص CD وفينيل',
              en: 'CD & Vinyl Players',
              de: 'CD & Vinyl Player',
              es: 'Reproductores de CD y Vinilo'
            },
            slug: 'platines-cd-vinyles',
            icon: 'Music'
          }
        }
      }
    }
  },
  
  // Jeux Vidéo & Consoles
  'jeux-video-consoles': {
    name: {
      fr: 'Jeux Vidéo & Consoles',
      ar: 'ألعاب الفيديو وأجهزة التحكم',
      en: 'Video Games & Consoles',
      de: 'Videospiele & Konsolen',
      es: 'Videojuegos y Consolas'
    },
    slug: 'jeux-video-consoles',
    icon: 'Gamepad2',
    subcategories: {
      // Consoles de Jeux
      'consoles-jeux': {
        name: {
          fr: 'Consoles de Jeux',
          ar: 'أجهزة التحكم',
          en: 'Gaming Consoles',
          de: 'Spielkonsolen',
          es: 'Consolas de Juego'
        },
        slug: 'consoles-jeux',
        icon: 'Gamepad2',
        subcategories: {
          'playstation': {
            name: {
              fr: 'PlayStation (PS4, PS5)',
              ar: 'بلايستيشن (PS4, PS5)',
              en: 'PlayStation (PS4, PS5)',
              de: 'PlayStation (PS4, PS5)',
              es: 'PlayStation (PS4, PS5)'
            },
            slug: 'playstation',
            icon: 'Gamepad2'
          },
          'xbox': {
            name: {
              fr: 'Xbox (One, Series X/S)',
              ar: 'إكس بوكس (One, Series X/S)',
              en: 'Xbox (One, Series X/S)',
              de: 'Xbox (One, Series X/S)',
              es: 'Xbox (One, Series X/S)'
            },
            slug: 'xbox',
            icon: 'Gamepad2'
          },
          'nintendo': {
            name: {
              fr: 'Nintendo (Switch, 3DS)',
              ar: 'نينتندو (Switch, 3DS)',
              en: 'Nintendo (Switch, 3DS)',
              de: 'Nintendo (Switch, 3DS)',
              es: 'Nintendo (Switch, 3DS)'
            },
            slug: 'nintendo',
            icon: 'Gamepad2'
          },
          'consoles-portables-retro': {
            name: {
              fr: 'Consoles Portables Retro',
              ar: 'أجهزة محمولة رetro',
              en: 'Retro Portable Consoles',
              de: 'Retro Handheld Konsolen',
              es: 'Consolas Portátiles Retro'
            },
            slug: 'consoles-portables-retro',
            icon: 'Gamepad2'
          },
          'consoles-reconditionnees': {
            name: {
              fr: 'Consoles Reconditionnées',
              ar: 'أجهزة تحكم مجددة',
              en: 'Refurbished Consoles',
              de: 'Generalüberholte Konsolen',
              es: 'Consolas Reacondicionadas'
            },
            slug: 'consoles-reconditionnees',
            icon: 'RefreshCw'
          }
        }
      },
      // Jeux & Accessoires
      'jeux-accessoires': {
        name: {
          fr: 'Jeux & Accessoires',
          ar: 'ألعاب وإكسسوارات',
          en: 'Games & Accessories',
          de: 'Spiele & Zubehör',
          es: 'Juegos y Accesorios'
        },
        slug: 'jeux-accessoires',
        icon: 'Gamepad2',
        subcategories: {
          'jeux-playstation': {
            name: {
              fr: 'Jeux PlayStation',
              ar: 'ألعاب بلايستيشن',
              en: 'PlayStation Games',
              de: 'PlayStation Spiele',
              es: 'Juegos de PlayStation'
            },
            slug: 'jeux-playstation',
            icon: 'Gamepad2'
          },
          'jeux-xbox': {
            name: {
              fr: 'Jeux Xbox',
              ar: 'ألعاب إكس بوكس',
              en: 'Xbox Games',
              de: 'Xbox Spiele',
              es: 'Juegos de Xbox'
            },
            slug: 'jeux-xbox',
            icon: 'Gamepad2'
          },
          'jeux-nintendo': {
            name: {
              fr: 'Jeux Nintendo',
              ar: 'ألعاب نينتندو',
              en: 'Nintendo Games',
              de: 'Nintendo Spiele',
              es: 'Juegos de Nintendo'
            },
            slug: 'jeux-nintendo',
            icon: 'Gamepad2'
          },
          'manettes-gamepads': {
            name: {
              fr: 'Manettes & Gamepads',
              ar: 'متحكمات وأجهزة تحكم',
              en: 'Controllers & Gamepads',
              de: 'Controller & Gamepads',
              es: 'Mandos y Gamepads'
            },
            slug: 'manettes-gamepads',
            icon: 'Gamepad2'
          },
          'volants-pedales': {
            name: {
              fr: 'Volants & Pédales',
              ar: 'عجلات ودواسات',
              en: 'Steering Wheels & Pedals',
              de: 'Lenkräder & Pedale',
              es: 'Volantes y Pedales'
            },
            slug: 'volants-pedales',
            icon: 'Gamepad2'
          },
          'casques-gaming': {
            name: {
              fr: 'Casques Gaming',
              ar: 'سماعات رأس للألعاب',
              en: 'Gaming Headsets',
              de: 'Gaming Headsets',
              es: 'Auriculares Gaming'
            },
            slug: 'casques-gaming',
            icon: 'Headphones'
          },
          'claviers-gaming': {
            name: {
              fr: 'Claviers Gaming',
              ar: 'لوحات مفاتيح للألعاب',
              en: 'Gaming Keyboards',
              de: 'Gaming Tastaturen',
              es: 'Teclados Gaming'
            },
            slug: 'claviers-gaming',
            icon: 'Keyboard'
          }
        }
      }
    }
  },
  
  // Services & Support
  'services-support': {
    name: {
      fr: 'Services & Support',
      ar: 'الخدمات والدعم',
      en: 'Services & Support',
      de: 'Dienstleistungen & Support',
      es: 'Servicios y Soporte'
    },
    slug: 'services-support',
    icon: 'Wrench',
    subcategories: {
      // Installation & Maintenance
      'installation-maintenance': {
        name: {
          fr: 'Installation & Maintenance',
          ar: 'التركيب والصيانة',
          en: 'Installation & Maintenance',
          de: 'Installation & Wartung',
          es: 'Instalación y Mantenimiento'
        },
        slug: 'installation-maintenance',
        icon: 'Wrench',
        subcategories: {
          'installation-systemes': {
            name: {
              fr: 'Installation de Systèmes',
              ar: 'تركيب الأنظمة',
              en: 'System Installation',
              de: 'Systeminstallation',
              es: 'Instalación de Sistemas'
            },
            slug: 'installation-systemes',
            icon: 'Wrench'
          },
          'depannage-informatique': {
            name: {
              fr: 'Dépannage Informatique',
              ar: 'إصلاح الكمبيوتر',
              en: 'Computer Repair',
              de: 'Computerreparatur',
              es: 'Reparación de Computadoras'
            },
            slug: 'depannage-informatique',
            icon: 'Wrench'
          },
          'maintenance-contrat': {
            name: {
              fr: 'Maintenance Contrat',
              ar: 'عقد الصيانة',
              en: 'Maintenance Contract',
              de: 'Wartungsvertrag',
              es: 'Contrato de Mantenimiento'
            },
            slug: 'maintenance-contrat',
            icon: 'Wrench'
          },
          'nettoyage-optimisation': {
            name: {
              fr: 'Nettoyage & Optimisation',
              ar: 'التنظيف والتحسين',
              en: 'Cleaning & Optimization',
              de: 'Reinigung & Optimierung',
              es: 'Limpieza y Optimización'
            },
            slug: 'nettoyage-optimisation',
            icon: 'Wind'
          }
        }
      },
      // Formation & Tutoriels
      'formation-tutoriels': {
        name: {
          fr: 'Formation & Tutoriels',
          ar: 'التدريب والدروس',
          en: 'Training & Tutorials',
          de: 'Schulung & Tutorials',
          es: 'Formación y Tutoriales'
        },
        slug: 'formation-tutoriels',
        icon: 'BookOpen',
        subcategories: {
          'cours-informatique': {
            name: {
              fr: 'Cours d\'Informatique',
              ar: 'دورات الكمبيوتر',
              en: 'Computer Courses',
              de: 'Computerkurse',
              es: 'Cursos de Informática'
            },
            slug: 'cours-informatique',
            icon: 'BookOpen'
          },
          'formations-specialisees': {
            name: {
              fr: 'Formations Spécialisées',
              ar: 'تدريبات متخصصة',
              en: 'Specialized Training',
              de: 'Spezialisierte Schulungen',
              es: 'Formación Especializada'
            },
            slug: 'formations-specialisees',
            icon: 'BookOpen'
          },
          'tutoriels-ligne': {
            name: {
              fr: 'Tutoriels en Ligne',
              ar: 'دروس عبر الإنترنت',
              en: 'Online Tutorials',
              de: 'Online Tutorials',
              es: 'Tutoriales en Línea'
            },
            slug: 'tutoriels-ligne',
            icon: 'BookOpen'
          },
          'ateliers-pratiques': {
            name: {
              fr: 'Ateliers Pratiques',
              ar: 'ورش عمل عملية',
              en: 'Practical Workshops',
              de: 'Praktische Workshops',
              es: 'Talleres Prácticos'
            },
            slug: 'ateliers-pratiques',
            icon: 'BookOpen'
          }
        }
      }
    }
  }
};

// Fonction pour convertir la structure en format TypeScript
function convertToTypeScript(categories, level = 0) {
  let result = '';
  const indent = '  '.repeat(level);
  
  for (const [categoryId, categoryData] of Object.entries(categories)) {
    const name = categoryData.name.fr; // Utiliser le français comme nom principal
    const slug = categoryData.slug;
    const icon = categoryData.icon;
    
    result += `${indent}{\n`;
    result += `${indent}  id: '${categoryId}',\n`;
    result += `${indent}  name: '${name}',\n`;
    result += `${indent}  slug: '${slug}',\n`;
    result += `${indent}  icon: '${icon}',\n`;
    
    if (categoryData.subcategories && Object.keys(categoryData.subcategories).length > 0) {
      result += `${indent}  subcategories: [\n`;
      result += convertToTypeScript(categoryData.subcategories, level + 2);
      result += `${indent}  ]\n`;
    } else {
      result += `${indent}  subcategories: []\n`;
    }
    
    result += `${indent}},\n`;
  }
  
  return result;
}

// Générer le contenu TypeScript
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const detailedElectronicsCategories: MenuCategory[] = [
${convertToTypeScript(detailedElectronicsCategories)}
];

export default detailedElectronicsCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées créé avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 ${Object.keys(detailedElectronicsCategories).length} catégories principales ajoutées`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Informatique & Électronique ont été ajoutées avec succès.');
console.log('💡 Le fichier contient des traductions en français, arabe, anglais, allemand et espagnol.');