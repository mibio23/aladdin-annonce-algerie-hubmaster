import fs from 'fs';
import path from 'path';

console.log('📹 CRÉATION DE LA CATÉGORIE "Matériel Professionnel de Surveillance"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const materielSurveillanceCategory = {
  id: 'materiel-professionnel-surveillance',
  name: 'Matériel Professionnel de Surveillance',
  slug: 'materiel-professionnel-surveillance',
  icon: undefined,
  translations: {
    "fr": "Matériel Professionnel de Surveillance",
    "ar": "معدات المراقبة الاحترافية",
    "en": "Professional Surveillance Equipment",
    "de": "Professionelle Überwachungsausrüstung",
    "es": "Equipo Profesional de Vigilancia"
  },
  subcategories: [
    {
      id: 'cameras-surveillance',
      name: 'Caméras de Surveillance',
      slug: 'cameras-surveillance',
      icon: undefined,
      translations: {
        "fr": "Caméras de Surveillance",
        "ar": "كاميرات المراقبة",
        "en": "Surveillance Cameras",
        "de": "Überwachungskameras",
        "es": "Cámaras de Vigilancia"
      },
      subcategories: [
        {
          id: 'cameras-dome',
          name: 'Caméras de Dôme',
          slug: 'cameras-dome',
          icon: undefined,
          translations: {
            "fr": "Caméras de Dôme",
            "ar": "كاميرات القبة",
            "en": "Dome Cameras",
            "de": "Kuppelkameras",
            "es": "Cámaras de Cúpula"
          },
          subcategories: []
        },
        {
          id: 'cameras-bullet',
          name: 'Caméras Bullet',
          slug: 'cameras-bullet',
          icon: undefined,
          translations: {
            "fr": "Caméras Bullet",
            "ar": "كاميرات الرصاص",
            "en": "Bullet Cameras",
            "de": "Bulletkameras",
            "es": "Cámaras Bullet"
          },
          subcategories: []
        },
        {
          id: 'cameras-ptz',
          name: 'Caméras PTZ',
          slug: 'cameras-ptz',
          icon: undefined,
          translations: {
            "fr": "Caméras PTZ",
            "ar": "كاميرات PTZ",
            "en": "PTZ Cameras",
            "de": "PTZ-Kameras",
            "es": "Cámaras PTZ"
          },
          subcategories: []
        },
        {
          id: 'cameras-box',
          name: 'Caméras Box',
          slug: 'cameras-box',
          icon: undefined,
          translations: {
            "fr": "Caméras Box",
            "ar": "كاميرات الصندوق",
            "en": "Box Cameras",
            "de": "Boxkameras",
            "es": "Cámaras de Caja"
          },
          subcategories: []
        },
        {
          id: 'cameras-cachees',
          name: 'Caméras Cachées',
          slug: 'cameras-cachees',
          icon: undefined,
          translations: {
            "fr": "Caméras Cachées",
            "ar": "كاميرات مخفية",
            "en": "Hidden Cameras",
            "de": "Versteckte Kameras",
            "es": "Cámaras Ocultas"
          },
          subcategories: []
        },
        {
          id: 'cameras-specialisees',
          name: 'Caméras Spécialisées',
          slug: 'cameras-specialisees',
          icon: undefined,
          translations: {
            "fr": "Caméras Spécialisées",
            "ar": "كاميرات متخصصة",
            "en": "Specialized Cameras",
            "de": "Spezialisierte Kameras",
            "es": "Cámaras Especializadas"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'systemes-videosurveillance',
      name: 'Systèmes de Vidéosurveillance',
      slug: 'systemes-videosurveillance',
      icon: undefined,
      translations: {
        "fr": "Systèmes de Vidéosurveillance",
        "ar": "أنظمة المراقبة بالفيديو",
        "en": "Video Surveillance Systems",
        "de": "Videoüberwachungssysteme",
        "es": "Sistemas de Videovigilancia"
      },
      subcategories: [
        {
          id: 'systemes-enregistrement',
          name: 'Systèmes d\'Enregistrement',
          slug: 'systemes-enregistrement',
          icon: undefined,
          translations: {
            "fr": "Systèmes d'Enregistrement",
            "ar": "أنظمة التسجيل",
            "en": "Recording Systems",
            "de": "Aufzeichnungssysteme",
            "es": "Sistemas de Grabación"
          },
          subcategories: []
        },
        {
          id: 'moniteurs-surveillance',
          name: 'Moniteurs de Surveillance',
          slug: 'moniteurs-surveillance',
          icon: undefined,
          translations: {
            "fr": "Moniteurs de Surveillance",
            "ar": "شاشات المراقبة",
            "en": "Surveillance Monitors",
            "de": "Überwachungsmonitore",
            "es": "Monitores de Vigilancia"
          },
          subcategories: []
        },
        {
          id: 'serveurs-video',
          name: 'Serveurs de Vidéo',
          slug: 'serveurs-video',
          icon: undefined,
          translations: {
            "fr": "Serveurs de Vidéo",
            "ar": "خوادم الفيديو",
            "en": "Video Servers",
            "de": "Videoserver",
            "es": "Servidores de Video"
          },
          subcategories: []
        },
        {
          id: 'logiciels-gestion',
          name: 'Logiciels de Gestion',
          slug: 'logiciels-gestion',
          icon: undefined,
          translations: {
            "fr": "Logiciels de Gestion",
            "ar": "برامج الإدارة",
            "en": "Management Software",
            "de": "Verwaltungssoftware",
            "es": "Software de Gestión"
          },
          subcategories: []
        },
        {
          id: 'equipements-transmission',
          name: 'Équipements de Transmission',
          slug: 'equipements-transmission',
          icon: undefined,
          translations: {
            "fr": "Équipements de Transmission",
            "ar": "معدات النقل",
            "en": "Transmission Equipment",
            "de": "Übertragungsausrüstung",
            "es": "Equipos de Transmisión"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-detection-intrusion',
      name: 'Équipements de Détection d\'Intrusion',
      slug: 'equipements-detection-intrusion',
      icon: undefined,
      translations: {
        "fr": "Équipements de Détection d'Intrusion",
        "ar": "معدات كشف الاختراق",
        "en": "Intrusion Detection Equipment",
        "de": "Einbruchdetektionsausrüstung",
        "es": "Equipos de Detección de Intrusión"
      },
      subcategories: [
        {
          id: 'detecteurs-mouvement',
          name: 'Détecteurs de Mouvement',
          slug: 'detecteurs-mouvement',
          icon: undefined,
          translations: {
            "fr": "Détecteurs de Mouvement",
            "ar": "كواشف الحركة",
            "en": "Motion Detectors",
            "de": "Bewegungsmelder",
            "es": "Detectores de Movimiento"
          },
          subcategories: []
        },
        {
          id: 'detecteurs-ouverture',
          name: 'Détecteurs d\'Ouverture',
          slug: 'detecteurs-ouverture',
          icon: undefined,
          translations: {
            "fr": "Détecteurs d'Ouverture",
            "ar": "كواشف الفتح",
            "en": "Opening Detectors",
            "de": "Öffnungsdetektoren",
            "es": "Detectores de Apertura"
          },
          subcategories: []
        },
        {
          id: 'capteurs-vitrage',
          name: 'Capteurs de Vitrage',
          slug: 'capteurs-vitrage',
          icon: undefined,
          translations: {
            "fr": "Capteurs de Vitrage",
            "ar": "مستشعرات كسر الزجاج",
            "en": "Glass Break Sensors",
            "de": "Glasbruchmelder",
            "es": "Sensores de Rotura de Cristal"
          },
          subcategories: []
        },
        {
          id: 'barrieres-infrarouges',
          name: 'Barrières Infrarouges',
          slug: 'barrieres-infrarouges',
          icon: undefined,
          translations: {
            "fr": "Barrières Infrarouges",
            "ar": "حواجز تحت الحمراء",
            "en": "Infrared Barriers",
            "de": "Infrarotbarrieren",
            "es": "Barreras Infrarrojas"
          },
          subcategories: []
        },
        {
          id: 'systemes-alarme',
          name: 'Systèmes d\'Alarme',
          slug: 'systemes-alarme',
          icon: undefined,
          translations: {
            "fr": "Systèmes d'Alarme",
            "ar": "أنظمة الإنذار",
            "en": "Alarm Systems",
            "de": "Alarmsysteme",
            "es": "Sistemas de Alarma"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'systemes-controle-acces',
      name: 'Systèmes de Contrôle d\'Accès',
      slug: 'systemes-controle-acces',
      icon: undefined,
      translations: {
        "fr": "Systèmes de Contrôle d'Accès",
        "ar": "أنظمة التحكم في الوصول",
        "en": "Access Control Systems",
        "de": "Zutrittskontrollsysteme",
        "es": "Sistemas de Control de Acceso"
      },
      subcategories: [
        {
          id: 'lecteurs-cartes',
          name: 'Lecteurs de Cartes',
          slug: 'lecteurs-cartes',
          icon: undefined,
          translations: {
            "fr": "Lecteurs de Cartes",
            "ar": "قارئات البطاقات",
            "en": "Card Readers",
            "de": "Kartenleser",
            "es": "Lectores de Tarjetas"
          },
          subcategories: []
        },
        {
          id: 'claviers-numeriques',
          name: 'Claviers Numériques',
          slug: 'claviers-numeriques',
          icon: undefined,
          translations: {
            "fr": "Claviers Numériques",
            "ar": "لوحات مفاتيح رقمية",
            "en": "Digital Keypads",
            "de": "Digitale Tastaturen",
            "es": "Teclados Numéricos"
          },
          subcategories: []
        },
        {
          id: 'serrures-electroniques',
          name: 'Serrures Électroniques',
          slug: 'serrures-electroniques',
          icon: undefined,
          translations: {
            "fr": "Serrures Électroniques",
            "ar": "أقفال إلكترونية",
            "en": "Electronic Locks",
            "de": "Elektronische Schlösser",
            "es": "Cerraduras Electrónicas"
          },
          subcategories: []
        },
        {
          id: 'controle-biometrique',
          name: 'Contrôle Biométrique',
          slug: 'controle-biometrique',
          icon: undefined,
          translations: {
            "fr": "Contrôle Biométrique",
            "ar": "التحكم البيومتري",
            "en": "Biometric Control",
            "de": "Biometrische Steuerung",
            "es": "Control Biométrico"
          },
          subcategories: []
        },
        {
          id: 'systemes-controle-distance',
          name: 'Systèmes de Contrôle à Distance',
          slug: 'systemes-controle-distance',
          icon: undefined,
          translations: {
            "fr": "Systèmes de Contrôle à Distance",
            "ar": "أنظمة التحكم عن بعد",
            "en": "Remote Control Systems",
            "de": "Fernsteuerungssysteme",
            "es": "Sistemas de Control Remoto"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-surveillance-sans-fil',
      name: 'Équipements de Surveillance Sans Fil',
      slug: 'equipements-surveillance-sans-fil',
      icon: undefined,
      translations: {
        "fr": "Équipements de Surveillance Sans Fil",
        "ar": "معدات المراقبة اللاسلكية",
        "en": "Wireless Surveillance Equipment",
        "de": "Drahtlose Überwachungsausrüstung",
        "es": "Equipos de Vigilancia Inalámbricos"
      },
      subcategories: [
        {
          id: 'cameras-ip',
          name: 'Caméras IP',
          slug: 'cameras-ip',
          icon: undefined,
          translations: {
            "fr": "Caméras IP",
            "ar": "كاميرات IP",
            "en": "IP Cameras",
            "de": "IP-Kameras",
            "es": "Cámaras IP"
          },
          subcategories: []
        },
        {
          id: 'systemes-wifi',
          name: 'Systèmes Wi-Fi',
          slug: 'systemes-wifi',
          icon: undefined,
          translations: {
            "fr": "Systèmes Wi-Fi",
            "ar": "أنظمة Wi-Fi",
            "en": "Wi-Fi Systems",
            "de": "Wi-Fi-Systeme",
            "es": "Sistemas Wi-Fi"
          },
          subcategories: []
        },
        {
          id: 'equipements-4g-5g',
          name: 'Équipements 4G/5G',
          slug: 'equipements-4g-5g',
          icon: undefined,
          translations: {
            "fr": "Équipements 4G/5G",
            "ar": "معدات 4G/5G",
            "en": "4G/5G Equipment",
            "de": "4G/5G-Ausrüstung",
            "es": "Equipos 4G/5G"
          },
          subcategories: []
        },
        {
          id: 'reseaux-surveillance',
          name: 'Réseaux de Surveillance',
          slug: 'reseaux-surveillance',
          icon: undefined,
          translations: {
            "fr": "Réseaux de Surveillance",
            "ar": "شبكات المراقبة",
            "en": "Surveillance Networks",
            "de": "Überwachungsnetzwerke",
            "es": "Redes de Vigilancia"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'logiciels-surveillance',
      name: 'Logiciels de Surveillance',
      slug: 'logiciels-surveillance',
      icon: undefined,
      translations: {
        "fr": "Logiciels de Surveillance",
        "ar": "برامج المراقبة",
        "en": "Surveillance Software",
        "de": "Überwachungssoftware",
        "es": "Software de Vigilancia"
      },
      subcategories: [
        {
          id: 'logiciels-analyse-video',
          name: 'Logiciels d\'Analyse Vidéo',
          slug: 'logiciels-analyse-video',
          icon: undefined,
          translations: {
            "fr": "Logiciels d'Analyse Vidéo",
            "ar": "برامج تحليل الفيديو",
            "en": "Video Analysis Software",
            "de": "Videoanalyse-Software",
            "es": "Software de Análisis de Video"
          },
          subcategories: []
        },
        {
          id: 'logiciels-gestion',
          name: 'Logiciels de Gestion',
          slug: 'logiciels-gestion',
          icon: undefined,
          translations: {
            "fr": "Logiciels de Gestion",
            "ar": "برامج الإدارة",
            "en": "Management Software",
            "de": "Verwaltungssoftware",
            "es": "Software de Gestión"
          },
          subcategories: []
        },
        {
          id: 'logiciels-detection',
          name: 'Logiciels de Détection',
          slug: 'logiciels-detection',
          icon: undefined,
          translations: {
            "fr": "Logiciels de Détection",
            "ar": "برامج الكشف",
            "en": "Detection Software",
            "de": "Detektionssoftware",
            "es": "Software de Detección"
          },
          subcategories: []
        },
        {
          id: 'logiciels-alerte',
          name: 'Logiciels d\'Alerte',
          slug: 'logiciels-alerte',
          icon: undefined,
          translations: {
            "fr": "Logiciels d'Alerte",
            "ar": "برامج التنبيه",
            "en": "Alert Software",
            "de": "Alarmsoftware",
            "es": "Software de Alerta"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-enregistrement',
      name: 'Équipements d\'Enregistrement',
      slug: 'equipements-enregistrement',
      icon: undefined,
      translations: {
        "fr": "Équipements d'Enregistrement",
        "ar": "معدات التسجيل",
        "en": "Recording Equipment",
        "de": "Aufzeichnungsausrüstung",
        "es": "Equipos de Grabación"
      },
      subcategories: [
        {
          id: 'enregistreurs-numeriques',
          name: 'Enregistreurs Numériques',
          slug: 'enregistreurs-numeriques',
          icon: undefined,
          translations: {
            "fr": "Enregistreurs Numériques",
            "ar": "مسجلات رقمية",
            "en": "Digital Recorders",
            "de": "Digitale Rekorder",
            "es": "Grabadores Digitales"
          },
          subcategories: []
        },
        {
          id: 'enregistreurs-reseau',
          name: 'Enregistreurs Réseau',
          slug: 'enregistreurs-reseau',
          icon: undefined,
          translations: {
            "fr": "Enregistreurs Réseau",
            "ar": "مسجلات الشبكة",
            "en": "Network Recorders",
            "de": "Netzwerkrekorder",
            "es": "Grabadores de Red"
          },
          subcategories: []
        },
        {
          id: 'stockage-donnees',
          name: 'Stockage de Données',
          slug: 'stockage-donnees',
          icon: undefined,
          translations: {
            "fr": "Stockage de Données",
            "ar": "تخزين البيانات",
            "en": "Data Storage",
            "de": "Datenspeicherung",
            "es": "Almacenamiento de Datos"
          },
          subcategories: []
        },
        {
          id: 'equipements-sauvegarde',
          name: 'Équipements de Sauvegarde',
          slug: 'equipements-sauvegarde',
          icon: undefined,
          translations: {
            "fr": "Équipements de Sauvegarde",
            "ar": "معدات النسخ الاحتياطي",
            "en": "Backup Equipment",
            "de": "Sicherungsausrüstung",
            "es": "Equipos de Respaldo"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-surveillance-specialise',
      name: 'Matériel de Surveillance Spécialisé',
      slug: 'materiel-surveillance-specialise',
      icon: undefined,
      translations: {
        "fr": "Matériel de Surveillance Spécialisé",
        "ar": "معدات مراقبة متخصصة",
        "en": "Specialized Surveillance Equipment",
        "de": "Spezialisierte Überwachungsausrüstung",
        "es": "Equipos de Vigilancia Especializados"
      },
      subcategories: [
        {
          id: 'equipements-surveillance-industrielle',
          name: 'Équipements de Surveillance Industrielle',
          slug: 'equipements-surveillance-industrielle',
          icon: undefined,
          translations: {
            "fr": "Équipements de Surveillance Industrielle",
            "ar": "معدات المراقبة الصناعية",
            "en": "Industrial Surveillance Equipment",
            "de": "Industrielle Überwachungsausrüstung",
            "es": "Equipos de Vigilancia Industrial"
          },
          subcategories: []
        },
        {
          id: 'materiel-surveillance-routiere',
          name: 'Matériel de Surveillance Routière',
          slug: 'materiel-surveillance-routiere',
          icon: undefined,
          translations: {
            "fr": "Matériel de Surveillance Routière",
            "ar": "معدات المراقبة الطرقية",
            "en": "Road Surveillance Equipment",
            "de": "Straßenüberwachungsausrüstung",
            "es": "Equipos de Vigilancia Vial"
          },
          subcategories: []
        },
        {
          id: 'equipements-surveillance-maritime',
          name: 'Équipements de Surveillance Maritime',
          slug: 'equipements-surveillance-maritime',
          icon: undefined,
          translations: {
            "fr": "Équipements de Surveillance Maritime",
            "ar": "معدات المراقبة البحرية",
            "en": "Maritime Surveillance Equipment",
            "de": "Maritime Überwachungsausrüstung",
            "es": "Equipos de Vigilancia Marítima"
          },
          subcategories: []
        },
        {
          id: 'materiel-surveillance-aerienne',
          name: 'Matériel de Surveillance Aérienne',
          slug: 'materiel-surveillance-aerienne',
          icon: undefined,
          translations: {
            "fr": "Matériel de Surveillance Aérienne",
            "ar": "معدات المراقبة الجوية",
            "en": "Aerial Surveillance Equipment",
            "de": "Luftüberwachungsausrüstung",
            "es": "Equipos de Vigilancia Aérea"
          },
          subcategories: []
        }
      ]
    }
  ]
};

// Conversion en format TypeScript
function convertToTypeScript(category) {
  let tsString = `  {
    id: '${category.id}',
    name: '${category.name}',
    slug: '${category.slug}',
    icon: undefined,
    translations: {
      "fr": "${category.translations.fr}",
      "ar": "${category.translations.ar}",
      "en": "${category.translations.en}",
      "de": "${category.translations.de}",
      "es": "${category.translations.es}"
    },
    subcategories: [`;

  category.subcategories.forEach((subcat, index) => {
    tsString += `
      {
        id: '${subcat.id}',
        name: '${subcat.name}',
        slug: '${subcat.slug}',
        icon: undefined,
        translations: {
          "fr": "${subcat.translations.fr}",
          "ar": "${subcat.translations.ar}",
          "en": "${subcat.translations.en}",
          "de": "${subcat.translations.de}",
          "es": "${subcat.translations.es}"
        },
        subcategories: [`;

    subcat.subcategories.forEach((subsubcat, subIndex) => {
      tsString += `
          {
            id: '${subsubcat.id}',
            name: '${subsubcat.name}',
            slug: '${subsubcat.slug}',
            icon: undefined,
            translations: {
              "fr": "${subsubcat.translations.fr}",
              "ar": "${subsubcat.translations.ar}",
              "en": "${subsubcat.translations.en}",
              "de": "${subsubcat.translations.de}",
              "es": "${subsubcat.translations.es}"
            },
            subcategories: []
          }${subIndex < subcat.subcategories.length - 1 ? ',' : ''}`;
    });

    tsString += `
        ]
      }${index < category.subcategories.length - 1 ? ',' : ''}`;
  });

  tsString += `
    ]
  }`;

  return tsString;
}

const tsCategory = convertToTypeScript(materielSurveillanceCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', materielSurveillanceCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  materielSurveillanceCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('materiel-surveillance-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: materiel-surveillance-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', materielSurveillanceCategory.translations.fr);
console.log('Arabe:', materielSurveillanceCategory.translations.ar);
console.log('Anglais:', materielSurveillanceCategory.translations.en);
console.log('Allemand:', materielSurveillanceCategory.translations.de);
console.log('Espagnol:', materielSurveillanceCategory.translations.es);

console.log('\n📹 STRUCTURE COMPLÈTE:');
console.log('================================================================================');
materielSurveillanceCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');