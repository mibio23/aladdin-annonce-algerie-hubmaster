import fs from 'fs';
import path from 'path';

console.log('🔥 CRÉATION DE LA CATÉGORIE "Matériel Professionnel d\'Incendie"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const materielIncendieCategory = {
  id: 'materiel-professionnel-incendie',
  name: 'Matériel Professionnel d\'Incendie',
  slug: 'materiel-professionnel-incendie',
  icon: undefined,
  translations: {
    "fr": "Matériel Professionnel d'Incendie",
    "ar": "معدات مكافحة الحرائق الاحترافية",
    "en": "Professional Firefighting Equipment",
    "de": "Professionelle Feuerwehrausrüstung",
    "es": "Equipo Profesional contra Incendios"
  },
  subcategories: [
    {
      id: 'equipements-detection',
      name: 'Équipements de Détection',
      slug: 'equipements-detection',
      icon: undefined,
      translations: {
        "fr": "Équipements de Détection",
        "ar": "معدات الكشف",
        "en": "Detection Equipment",
        "de": "Detektionsausrüstung",
        "es": "Equipos de Detección"
      },
      subcategories: [
        {
          id: 'detecteurs-fumee',
          name: 'Détecteurs de Fumée',
          slug: 'detecteurs-fumee',
          icon: undefined,
          translations: {
            "fr": "Détecteurs de Fumée",
            "ar": "كواشف الدخان",
            "en": "Smoke Detectors",
            "de": "Rauchmelder",
            "es": "Detectores de Humo"
          },
          subcategories: []
        },
        {
          id: 'detecteurs-chaleur',
          name: 'Détecteurs de Chaleur',
          slug: 'detecteurs-chaleur',
          icon: undefined,
          translations: {
            "fr": "Détecteurs de Chaleur",
            "ar": "كواشف الحرارة",
            "en": "Heat Detectors",
            "de": "Wärmemelder",
            "es": "Detectores de Calor"
          },
          subcategories: []
        },
        {
          id: 'detecteurs-flamme',
          name: 'Détecteurs de Flamme',
          slug: 'detecteurs-flamme',
          icon: undefined,
          translations: {
            "fr": "Détecteurs de Flamme",
            "ar": "كواشف اللهب",
            "en": "Flame Detectors",
            "de": "Flammenmelder",
            "es": "Detectores de Llama"
          },
          subcategories: []
        },
        {
          id: 'systemes-detection-centralises',
          name: 'Systèmes de Détection Centralisés',
          slug: 'systemes-detection-centralises',
          icon: undefined,
          translations: {
            "fr": "Systèmes de Détection Centralisés",
            "ar": "أنظمة الكشف المركزية",
            "en": "Centralized Detection Systems",
            "de": "Zentralisierte Detektionssysteme",
            "es": "Sistemas de Detección Centralizados"
          },
          subcategories: []
        }
      ]
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
      subcategories: [
        {
          id: 'alarmes-sonores',
          name: 'Alarmes Sonores',
          slug: 'alarmes-sonores',
          icon: undefined,
          translations: {
            "fr": "Alarmes Sonores",
            "ar": "إنذارات صوتية",
            "en": "Sound Alarms",
            "de": "Tonalarmanlagen",
            "es": "Alarmas Sonoras"
          },
          subcategories: []
        },
        {
          id: 'alarmes-visuelles',
          name: 'Alarmes Visuelles',
          slug: 'alarmes-visuelles',
          icon: undefined,
          translations: {
            "fr": "Alarmes Visuelles",
            "ar": "إنذارات بصرية",
            "en": "Visual Alarms",
            "de": "Visuelle Alarmen",
            "es": "Alarmas Visuales"
          },
          subcategories: []
        },
        {
          id: 'systemes-alarme-centralises',
          name: 'Systèmes d\'Alarme Centralisés',
          slug: 'systemes-alarme-centralises',
          icon: undefined,
          translations: {
            "fr": "Systèmes d'Alarme Centralisés",
            "ar": "أنظمة الإنذار المركزية",
            "en": "Centralized Alarm Systems",
            "de": "Zentralisierte Alarmsysteme",
            "es": "Sistemas de Alarma Centralizados"
          },
          subcategories: []
        },
        {
          id: 'equipements-alerte',
          name: 'Équipements d\'Alerte',
          slug: 'equipements-alerte',
          icon: undefined,
          translations: {
            "fr": "Équipements d'Alerte",
            "ar": "معدات التنبيه",
            "en": "Alert Equipment",
            "de": "Warneinrichtungen",
            "es": "Equipos de Alerta"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'extincteurs-materiel-extinction',
      name: 'Extincteurs et Matériel d\'Extinction',
      slug: 'extincteurs-materiel-extinction',
      icon: undefined,
      translations: {
        "fr": "Extincteurs et Matériel d'Extinction",
        "ar": "طفايات الحريق ومعدات الإطفاء",
        "en": "Extinguishers and Extinguishing Equipment",
        "de": "Löscher und Löschgeräte",
        "es": "Extintores y Equipos de Extinción"
      },
      subcategories: [
        {
          id: 'extincteurs-eau',
          name: 'Extincteurs à Eau',
          slug: 'extincteurs-eau',
          icon: undefined,
          translations: {
            "fr": "Extincteurs à Eau",
            "ar": "طفايات المياه",
            "en": "Water Extinguishers",
            "de": "Wasserlöscher",
            "es": "Extintores de Agua"
          },
          subcategories: []
        },
        {
          id: 'extincteurs-poudre',
          name: 'Extincteurs à Poudre',
          slug: 'extincteurs-poudre',
          icon: undefined,
          translations: {
            "fr": "Extincteurs à Poudre",
            "ar": "طفايات البودرة",
            "en": "Powder Extinguishers",
            "de": "Pulverlöscher",
            "es": "Extintores de Polvo"
          },
          subcategories: []
        },
        {
          id: 'extincteurs-co2',
          name: 'Extincteurs à CO2',
          slug: 'extincteurs-co2',
          icon: undefined,
          translations: {
            "fr": "Extincteurs à CO2",
            "ar": "طفايات ثاني أكسيد الكربون",
            "en": "CO2 Extinguishers",
            "de": "CO2-Löscher",
            "es": "Extintores de CO2"
          },
          subcategories: []
        },
        {
          id: 'extincteurs-mousse',
          name: 'Extincteurs à Mousse',
          slug: 'extincteurs-mousse',
          icon: undefined,
          translations: {
            "fr": "Extincteurs à Mousse",
            "ar": "طفايات الرغوة",
            "en": "Foam Extinguishers",
            "de": "Schaumlöscher",
            "es": "Extintores de Espuma"
          },
          subcategories: []
        },
        {
          id: 'materiel-extinction-specialise',
          name: 'Matériel d\'Extinction Spécialisé',
          slug: 'materiel-extinction-specialise',
          icon: undefined,
          translations: {
            "fr": "Matériel d'Extinction Spécialisé",
            "ar": "معدات الإطفاء المتخصصة",
            "en": "Specialized Extinguishing Equipment",
            "de": "Spezialisierte Löschgeräte",
            "es": "Equipos de Extinción Especializados"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-protection-individuelle',
      name: 'Équipements de Protection Individuelle',
      slug: 'equipements-protection-individuelle',
      icon: undefined,
      translations: {
        "fr": "Équipements de Protection Individuelle",
        "ar": "معدات الحماية الفردية",
        "en": "Personal Protective Equipment",
        "de": "Persönliche Schutzausrüstung",
        "es": "Equipos de Protección Personal"
      },
      subcategories: [
        {
          id: 'vetements-protection',
          name: 'Vêtements de Protection',
          slug: 'vetements-protection',
          icon: undefined,
          translations: {
            "fr": "Vêtements de Protection",
            "ar": "ملابس الحماية",
            "en": "Protective Clothing",
            "de": "Schutzkleidung",
            "es": "Ropa de Protección"
          },
          subcategories: []
        },
        {
          id: 'equipements-protection-respiratoire',
          name: 'Équipements de Protection Respiratoire',
          slug: 'equipements-protection-respiratoire',
          icon: undefined,
          translations: {
            "fr": "Équipements de Protection Respiratoire",
            "ar": "معدات الحماية التنفسية",
            "en": "Respiratory Protection Equipment",
            "de": "Atemschutzgeräte",
            "es": "Equipos de Protección Respiratoria"
          },
          subcategories: []
        },
        {
          id: 'casques-protections-tete',
          name: 'Casques et Protections de la Tête',
          slug: 'casques-protections-tete',
          icon: undefined,
          translations: {
            "fr": "Casques et Protections de la Tête",
            "ar": "خوذات وحماية الرأس",
            "en": "Helmets and Head Protection",
            "de": "Helme und Kopfschutz",
            "es": "Cascos y Protección de Cabeza"
          },
          subcategories: []
        },
        {
          id: 'gants-protections-mains',
          name: 'Gants et Protections des Mains',
          slug: 'gants-protections-mains',
          icon: undefined,
          translations: {
            "fr": "Gants et Protections des Mains",
            "ar": "قفازات وحماية اليدين",
            "en": "Gloves and Hand Protection",
            "de": "Handschuhe und Handschutz",
            "es": "Guantes y Protección de Manos"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-sauvetage-evacuation',
      name: 'Matériel de Sauvetage et d\'Évacuation',
      slug: 'materiel-sauvetage-evacuation',
      icon: undefined,
      translations: {
        "fr": "Matériel de Sauvetage et d'Évacuation",
        "ar": "معدات الإنقاذ والإخلاء",
        "en": "Rescue and Evacuation Equipment",
        "de": "Rettungs- und Evakuierungsausrüstung",
        "es": "Equipos de Rescate y Evacuación"
      },
      subcategories: [
        {
          id: 'echelles-escabeaux',
          name: 'Échelles et Escabeaux',
          slug: 'echelles-escabeaux',
          icon: undefined,
          translations: {
            "fr": "Échelles et Escabeaux",
            "ar": "سلالم ودرابز",
            "en": "Ladders and Scaffolding",
            "de": "Leitern und Gerüste",
            "es": "Escaleras y Andamios"
          },
          subcategories: []
        },
        {
          id: 'corde-materiel-assurage',
          name: 'Corde et Matériel d\'Assurage',
          slug: 'corde-materiel-assurage',
          icon: undefined,
          translations: {
            "fr": "Corde et Matériel d'Assurage",
            "ar": "حبال ومعدات التأمين",
            "en": "Rope and Safety Equipment",
            "de": "Seile und Sicherungsausrüstung",
            "es": "Cuerdas y Equipos de Seguridad"
          },
          subcategories: []
        },
        {
          id: 'equipements-sauvetage',
          name: 'Équipements de Sauvetage',
          slug: 'equipements-sauvetage',
          icon: undefined,
          translations: {
            "fr": "Équipements de Sauvetage",
            "ar": "معدات الإنقاذ",
            "en": "Rescue Equipment",
            "de": "Rettungsausrüstung",
            "es": "Equipos de Rescate"
          },
          subcategories: []
        },
        {
          id: 'materiel-evacuation-urgence',
          name: 'Matériel d\'Évacuation d\'Urgence',
          slug: 'materiel-evacuation-urgence',
          icon: undefined,
          translations: {
            "fr": "Matériel d'Évacuation d'Urgence",
            "ar": "معدات الإخلاء الطارئ",
            "en": "Emergency Evacuation Equipment",
            "de": "Notfalleinrichtung",
            "es": "Equipos de Evacuación de Emergencia"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-prevention-formation',
      name: 'Équipements de Prévention et de Formation',
      slug: 'equipements-prevention-formation',
      icon: undefined,
      translations: {
        "fr": "Équipements de Prévention et de Formation",
        "ar": "معدات الوقاية والتدريب",
        "en": "Prevention and Training Equipment",
        "de": "Präventions- und Schulungsausrüstung",
        "es": "Equipos de Prevención y Formación"
      },
      subcategories: [
        {
          id: 'materiel-formation',
          name: 'Matériel de Formation',
          slug: 'materiel-formation',
          icon: undefined,
          translations: {
            "fr": "Matériel de Formation",
            "ar": "معدات التدريب",
            "en": "Training Equipment",
            "de": "Schulungsausrüstung",
            "es": "Equipos de Formación"
          },
          subcategories: []
        },
        {
          id: 'equipements-prevention',
          name: 'Équipements de Prévention',
          slug: 'equipements-prevention',
          icon: undefined,
          translations: {
            "fr": "Équipements de Prévention",
            "ar": "معدات الوقاية",
            "en": "Prevention Equipment",
            "de": "Präventionsausrüstung",
            "es": "Equipos de Prevención"
          },
          subcategories: []
        },
        {
          id: 'documentation-signalisation',
          name: 'Documentation et Signalisation',
          slug: 'documentation-signalisation',
          icon: undefined,
          translations: {
            "fr": "Documentation et Signalisation",
            "ar": "التوثيق والإشارات",
            "en": "Documentation and Signage",
            "de": "Dokumentation und Beschilderung",
            "es": "Documentación y Señalización"
          },
          subcategories: []
        },
        {
          id: 'outils-prevention',
          name: 'Outils de Prévention',
          slug: 'outils-prevention',
          icon: undefined,
          translations: {
            "fr": "Outils de Prévention",
            "ar": "أدوات الوقاية",
            "en": "Prevention Tools",
            "de": "Präventionswerkzeuge",
            "es": "Herramientas de Prevención"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'vehicules-intervention-incendie',
      name: 'Véhicules d\'Intervention Incendie',
      slug: 'vehicules-intervention-incendie',
      icon: undefined,
      translations: {
        "fr": "Véhicules d'Intervention Incendie",
        "ar": "مركبات مكافحة الحرائق",
        "en": "Fire Intervention Vehicles",
        "de": "Feuerwehreinsatzfahrzeuge",
        "es": "Vehículos de Intervención contra Incendios"
      },
      subcategories: [
        {
          id: 'camions-pompiers',
          name: 'Camions de Pompiers',
          slug: 'camions-pompiers',
          icon: undefined,
          translations: {
            "fr": "Camions de Pompiers",
            "ar": "شاحنات الإطفاء",
            "en": "Fire Trucks",
            "de": "Feuerwehrfahrzeuge",
            "es": "Camiones de Bomberos"
          },
          subcategories: []
        },
        {
          id: 'vehicules-intervention-rapide',
          name: 'Véhicules d\'Intervention Rapide',
          slug: 'vehicules-intervention-rapide',
          icon: undefined,
          translations: {
            "fr": "Véhicules d'Intervention Rapide",
            "ar": "مركبات التدخل السريع",
            "en": "Rapid Intervention Vehicles",
            "de": "Schnelleinsatzfahrzeuge",
            "es": "Vehículos de Intervención Rápida"
          },
          subcategories: []
        },
        {
          id: 'equipements-mobiles',
          name: 'Équipements Mobiles',
          slug: 'equipements-mobiles',
          icon: undefined,
          translations: {
            "fr": "Équipements Mobiles",
            "ar": "معدات متنقلة",
            "en": "Mobile Equipment",
            "de": "Mobile Ausrüstung",
            "es": "Equipos Móviles"
          },
          subcategories: []
        },
        {
          id: 'accessoires-vehicules',
          name: 'Accessoires pour Véhicules',
          slug: 'accessoires-vehicules',
          icon: undefined,
          translations: {
            "fr": "Accessoires pour Véhicules",
            "ar": "إكسسوارات للمركبات",
            "en": "Vehicle Accessories",
            "de": "Fahrzeugzubehör",
            "es": "Accesorios para Vehículos"
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

const tsCategory = convertToTypeScript(materielIncendieCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', materielIncendieCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  materielIncendieCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('materiel-incendie-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: materiel-incendie-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', materielIncendieCategory.translations.fr);
console.log('Arabe:', materielIncendieCategory.translations.ar);
console.log('Anglais:', materielIncendieCategory.translations.en);
console.log('Allemand:', materielIncendieCategory.translations.de);
console.log('Espagnol:', materielIncendieCategory.translations.es);

console.log('\n🔥 STRUCTURE COMPLÈTE:');
console.log('================================================================================');
materielIncendieCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');