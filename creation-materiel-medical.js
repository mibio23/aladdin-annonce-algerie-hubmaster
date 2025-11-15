import fs from 'fs';
import path from 'path';

console.log('🏥️ CRÉATION DE LA CATÉGORIE "Matériel Professionnel Médicale"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const materielMedicalCategory = {
  id: 'materiel-professionnel-medical',
  name: 'Matériel Professionnel Médicale',
  slug: 'materiel-professionnel-medical',
  icon: undefined,
  translations: {
    "fr": "Matériel Professionnel Médicale",
    "ar": "المعدات الطبية الاحترافية",
    "en": "Professional Medical Equipment",
    "de": "Professionelle Medizinausrüstung",
    "es": "Equipo Médico Profesional"
  },
  subcategories: [
    {
      id: 'materiel-diagnostic',
      name: 'Matériel de Diagnostic',
      slug: 'materiel-diagnostic',
      icon: undefined,
      translations: {
        "fr": "Matériel de Diagnostic",
        "ar": "معدات التشخيص",
        "en": "Diagnostic Equipment",
        "de": "Diagnoseausrüstung",
        "es": "Equipo de Diagnóstico"
      },
      subcategories: [
        {
          id: 'equipements-imagerie-medicale',
          name: 'Équipements d\'Imagerie Médicale',
          slug: 'equipements-imagerie-medicale',
          icon: undefined,
          translations: {
            "fr": "Équipements d'Imagerie Médicale",
            "ar": "معدات التصوير الطبي",
            "en": "Medical Imaging Equipment",
            "de": "Medizinische Bildgebungsausrüstung",
            "es": "Equipos de Imagenología Médica"
          },
          subcategories: []
        },
        {
          id: 'appareils-mesure-medicale',
          name: 'Appareils de Mesure Médicale',
          slug: 'appareils-mesure-medicale',
          icon: undefined,
          translations: {
            "fr": "Appareils de Mesure Médicale",
            "ar": "أجهزة القياس الطبية",
            "en": "Medical Measurement Devices",
            "de": "Medizinische Messgeräte",
            "es": "Dispositivos de Medición Médica"
          },
          subcategories: []
        },
        {
          id: 'equipements-depistage',
          name: 'Équipements de Dépistage',
          slug: 'equipements-depistage',
          icon: undefined,
          translations: {
            "fr": "Équipements de Dépistage",
            "ar": "معدات الكشف",
            "en": "Screening Equipment",
            "de": "Screeningausrüstung",
            "es": "Equipos de Detección"
          },
          subcategories: []
        },
        {
          id: 'moniteurs-medicaux',
          name: 'Moniteurs Médicaux',
          slug: 'moniteurs-medicaux',
          icon: undefined,
          translations: {
            "fr": "Moniteurs Médicaux",
            "ar": "شاشات طبية",
            "en": "Medical Monitors",
            "de": "Medizinische Monitore",
            "es": "Monitores Médicos"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'instruments-medicaux',
      name: 'Instruments Médicaux',
      slug: 'instruments-medicaux',
      icon: undefined,
      translations: {
        "fr": "Instruments Médicaux",
        "ar": "الأدوات الطبية",
        "en": "Medical Instruments",
        "de": "Medizinische Instrumente",
        "es": "Instrumentos Médicos"
      },
      subcategories: [
        {
          id: 'instruments-chirurgie',
          name: 'Instruments de Chirurgie',
          slug: 'instruments-chirurgie',
          icon: undefined,
          translations: {
            "fr": "Instruments de Chirurgie",
            "ar": "أدوات الجراحة",
            "en": "Surgical Instruments",
            "de": "Chirurgische Instrumente",
            "es": "Instrumentos Quirúrgicos"
          },
          subcategories: []
        },
        {
          id: 'instruments-dentisterie',
          name: 'Instruments de Dentisterie',
          slug: 'instruments-dentisterie',
          icon: undefined,
          translations: {
            "fr": "Instruments de Dentisterie",
            "ar": "أدوات طب الأسنان",
            "en": "Dental Instruments",
            "de": "Zahnärztliche Instrumente",
            "es": "Instrumentos de Odontología"
          },
          subcategories: []
        },
        {
          id: 'instruments-ophtalmologie',
          name: 'Instruments d\'Ophtalmologie',
          slug: 'instruments-ophtalmologie',
          icon: undefined,
          translations: {
            "fr": "Instruments d'Ophtalmologie",
            "ar": "أدوات طب العيون",
            "en": "Ophthalmology Instruments",
            "de": "Augenärztliche Instrumente",
            "es": "Instrumentos de Oftalmología"
          },
          subcategories: []
        },
        {
          id: 'instruments-orl',
          name: 'Instruments d\'ORL',
          slug: 'instruments-orl',
          icon: undefined,
          translations: {
            "fr": "Instruments d'ORL",
            "ar": "أدوات الأنف والأذن والحنجرة",
            "en": "ENT Instruments",
            "de": "HNO-Instrumente",
            "es": "Instrumentos de Otorrinolaringología"
          },
          subcategories: []
        },
        {
          id: 'instruments-specialises',
          name: 'Instruments Spécialisés',
          slug: 'instruments-specialises',
          icon: undefined,
          translations: {
            "fr": "Instruments Spécialisés",
            "ar": "أدوات متخصصة",
            "en": "Specialized Instruments",
            "de": "Spezialinstrumente",
            "es": "Instrumentos Especializados"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-urgence',
      name: 'Matériel d\'Urgence',
      slug: 'materiel-urgence',
      icon: undefined,
      translations: {
        "fr": "Matériel d'Urgence",
        "ar": "معدات الطوارئ",
        "en": "Emergency Equipment",
        "de": "Notfallausrüstung",
        "es": "Equipo de Emergencia"
      },
      subcategories: [
        {
          id: 'equipements-reanimation',
          name: 'Équipements de Réanimation',
          slug: 'equipements-reanimation',
          icon: undefined,
          translations: {
            "fr": "Équipements de Réanimation",
            "ar": "معدات الإنعاش",
            "en": "Resuscitation Equipment",
            "de": "Reanimationsausrüstung",
            "es": "Equipos de Reanimación"
          },
          subcategories: []
        },
        {
          id: 'materiel-secourisme',
          name: 'Matériel de Secourisme',
          slug: 'materiel-secourisme',
          icon: undefined,
          translations: {
            "fr": "Matériel de Secourisme",
            "ar": "معدات الإسعاف",
            "en": "First Aid Equipment",
            "de": "Erste-Hilfe-Ausrüstung",
            "es": "Equipo de Primeros Auxilios"
          },
          subcategories: []
        },
        {
          id: 'defibrillateurs',
          name: 'Défibrillateurs',
          slug: 'defibrillateurs',
          icon: undefined,
          translations: {
            "fr": "Défibrillateurs",
            "ar": "أجهزة إزالة الرجفان",
            "en": "Defibrillators",
            "de": "Defibrillatoren",
            "es": "Desfibriladores"
          },
          subcategories: []
        },
        {
          id: 'equipements-urgence',
          name: 'Équipements d\'Urgence',
          slug: 'equipements-urgence',
          icon: undefined,
          translations: {
            "fr": "Équipements d'Urgence",
            "ar": "معدات الطوارئ",
            "en": "Emergency Equipment",
            "de": "Notfallausrüstung",
            "es": "Equipos de Emergencia"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-hospitalier',
      name: 'Matériel Hospitalier',
      slug: 'materiel-hospitalier',
      icon: undefined,
      translations: {
        "fr": "Matériel Hospitalier",
        "ar": "معدات المستشفيات",
        "en": "Hospital Equipment",
        "de": "Krankenhausausrüstung",
        "es": "Equipo Hospitalario"
      },
      subcategories: [
        {
          id: 'lits-medicaux',
          name: 'Lits Médicaux',
          slug: 'lits-medicaux',
          icon: undefined,
          translations: {
            "fr": "Lits Médicaux",
            "ar": "أسرة طبية",
            "en": "Medical Beds",
            "de": "Medizinische Betten",
            "es": "Camas Médicas"
          },
          subcategories: []
        },
        {
          id: 'equipements-salle-operation',
          name: 'Équipements de Salle d\'Opération',
          slug: 'equipements-salle-operation',
          icon: undefined,
          translations: {
            "fr": "Équipements de Salle d'Opération",
            "ar": "معدات غرف العمليات",
            "en": "Operating Room Equipment",
            "de": "Operationssaalausrüstung",
            "es": "Equipos de Quirófano"
          },
          subcategories: []
        },
        {
          id: 'materiel-soins-intensifs',
          name: 'Matériel de Soins Intensifs',
          slug: 'materiel-soins-intensifs',
          icon: undefined,
          translations: {
            "fr": "Matériel de Soins Intensifs",
            "ar": "معدات العناية المركزة",
            "en": "Intensive Care Equipment",
            "de": "Intensivpflegeausrüstung",
            "es": "Equipo de Cuidados Intensivos"
          },
          subcategories: []
        },
        {
          id: 'equipements-chambre',
          name: 'Équipements de Chambre',
          slug: 'equipements-chambre',
          icon: undefined,
          translations: {
            "fr": "Équipements de Chambre",
            "ar": "معدات الغرف",
            "en": "Room Equipment",
            "de": "Zimmerausrüstung",
            "es": "Equipos de Habitación"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-laboratoire',
      name: 'Matériel de Laboratoire',
      slug: 'materiel-laboratoire',
      icon: undefined,
      translations: {
        "fr": "Matériel de Laboratoire",
        "ar": "معدات المختبرات",
        "en": "Laboratory Equipment",
        "de": "Laborausrüstung",
        "es": "Equipo de Laboratorio"
      },
      subcategories: [
        {
          id: 'microscopes',
          name: 'Microscopes',
          slug: 'microscopes',
          icon: undefined,
          translations: {
            "fr": "Microscopes",
            "ar": "مجاهر",
            "en": "Microscopes",
            "de": "Mikroskope",
            "es": "Microscopios"
          },
          subcategories: []
        },
        {
          id: 'centrifugeuses',
          name: 'Centrifugeuses',
          slug: 'centrifugeuses',
          icon: undefined,
          translations: {
            "fr": "Centrifugeuses",
            "ar": "طاردات مركزية",
            "en": "Centrifuges",
            "de": "Zentrifugen",
            "es": "Centrífugas"
          },
          subcategories: []
        },
        {
          id: 'autoclaves',
          name: 'Autoclaves',
          slug: 'autoclaves',
          icon: undefined,
          translations: {
            "fr": "Autoclaves",
            "ar": "أوتوكلاف",
            "en": "Autoclaves",
            "de": "Autoklaven",
            "es": "Autoclaves"
          },
          subcategories: []
        },
        {
          id: 'equipements-analyse',
          name: 'Équipements d\'Analyse',
          slug: 'equipements-analyse',
          icon: undefined,
          translations: {
            "fr": "Équipements d'Analyse",
            "ar": "معدات التحليل",
            "en": "Analysis Equipment",
            "de": "Analyseausrüstung",
            "es": "Equipos de Análisis"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-sterilisation',
      name: 'Équipements de Stérilisation',
      slug: 'equipements-sterilisation',
      icon: undefined,
      translations: {
        "fr": "Équipements de Stérilisation",
        "ar": "معدات التعقيم",
        "en": "Sterilization Equipment",
        "de": "Sterilisationsausrüstung",
        "es": "Equipos de Esterilización"
      },
      subcategories: [
        {
          id: 'autoclaves-sterilisation',
          name: 'Autoclaves',
          slug: 'autoclaves-sterilisation',
          icon: undefined,
          translations: {
            "fr": "Autoclaves",
            "ar": "أوتوكلاف",
            "en": "Autoclaves",
            "de": "Autoklaven",
            "es": "Autoclaves"
          },
          subcategories: []
        },
        {
          id: 'sterilisateurs',
          name: 'Stérilisateurs',
          slug: 'sterilisateurs',
          icon: undefined,
          translations: {
            "fr": "Stérilisateurs",
            "ar": "معقمات",
            "en": "Sterilizers",
            "de": "Sterilisatoren",
            "es": "Esterilizadores"
          },
          subcategories: []
        },
        {
          id: 'desinfecteurs',
          name: 'Désinfecteurs',
          slug: 'desinfecteurs',
          icon: undefined,
          translations: {
            "fr": "Désinfecteurs",
            "ar": "معقمات",
            "en": "Disinfectors",
            "de": "Desinfektionsmittel",
            "es": "Desinfectantes"
          },
          subcategories: []
        },
        {
          id: 'equipements-sterilisation',
          name: 'Équipements de Stérilisation',
          slug: 'equipements-sterilisation',
          icon: undefined,
          translations: {
            "fr": "Équipements de Stérilisation",
            "ar": "معدات التعقيم",
            "en": "Sterilization Equipment",
            "de": "Sterilisationsausrüstung",
            "es": "Equipos de Esterilización"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'consommables-medicaux',
      name: 'Consommables Médicaux',
      slug: 'consommables-medicaux',
      icon: undefined,
      translations: {
        "fr": "Consommables Médicaux",
        "ar": "المواد الطبية المستهلكة",
        "en": "Medical Consumables",
        "de": "Medizinische Verbrauchsmaterialien",
        "es": "Consumibles Médicos"
      },
      subcategories: [
        {
          id: 'gants-medicaux',
          name: 'Gants Médicaux',
          slug: 'gants-medicaux',
          icon: undefined,
          translations: {
            "fr": "Gants Médicaux",
            "ar": "قفازات طبية",
            "en": "Medical Gloves",
            "de": "Medizinische Handschuhe",
            "es": "Guantes Médicos"
          },
          subcategories: []
        },
        {
          id: 'masques-protection',
          name: 'Masques de Protection',
          slug: 'masques-protection',
          icon: undefined,
          translations: {
            "fr": "Masques de Protection",
            "ar": "أقنعة واقية",
            "en": "Protective Masks",
            "de": "Schutzmasken",
            "es": "Máscaras de Protección"
          },
          subcategories: []
        },
        {
          id: 'blouses-medicales',
          name: 'Blouses Médicales',
          slug: 'blouses-medicales',
          icon: undefined,
          translations: {
            "fr": "Blouses Médicales",
            "ar": "بلوزات طبية",
            "en": "Medical Blouses",
            "de": "Medizinische Kittel",
            "es": "Blusas Médicas"
          },
          subcategories: []
        },
        {
          id: 'produits-soin',
          name: 'Produits de Soin',
          slug: 'produits-soin',
          icon: undefined,
          translations: {
            "fr": "Produits de Soin",
            "ar": "منتجات العناية",
            "en": "Care Products",
            "de": "Pflegeprodukte",
            "es": "Productos de Cuidado"
          },
          subcategories: []
        },
        {
          id: 'equipements-protection',
          name: 'Équipements de Protection',
          slug: 'equipements-protection',
          icon: undefined,
          translations: {
            "fr": "Équipements de Protection",
            "ar": "معدات الحماية",
            "en": "Protective Equipment",
            "de": "Schutzausrüstung",
            "es": "Equipos de Protección"
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

const tsCategory = convertToTypeScript(materielMedicalCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', materielMedicalCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  materielMedicalCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('materiel-medical-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: materiel-medical-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', materielMedicalCategory.translations.fr);
console.log('Arabe:', materielMedicalCategory.translations.ar);
console.log('Anglais:', materielMedicalCategory.translations.en);
console.log('Allemand:', materielMedicalCategory.translations.de);
console.log('Espagnol:', materielMedicalCategory.translations.es);

console.log('\n🏥️ STRUCTURE COMPLÈTE:');
console.log('================================================================================');
materielMedicalCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');