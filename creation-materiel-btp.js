import fs from 'fs';
import path from 'path';

console.log('🏗️ CRÉATION DE LA CATÉGORIE "Matériel Professionnel BTP"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const materielBtpCategory = {
  id: 'materiel-professionnel-btp',
  name: 'Matériel Professionnel BTP',
  slug: 'materiel-professionnel-btp',
  icon: undefined,
  translations: {
    "fr": "Matériel Professionnel BTP",
    "ar": "المعدات الاحترافية للبناء والأشغال العامة",
    "en": "Professional Construction Equipment",
    "de": "Professionelle Baustellenausrüstung",
    "es": "Equipo Profesional de Construcción"
  },
  subcategories: [
    {
      id: 'materiel-construction',
      name: 'Matériel de Construction',
      slug: 'materiel-construction',
      icon: undefined,
      translations: {
        "fr": "Matériel de Construction",
        "ar": "معدات البناء",
        "en": "Construction Equipment",
        "de": "Baustellenausrüstung",
        "es": "Equipo de Construcción"
      },
      subcategories: [
        {
          id: 'echafaudages-etais',
          name: 'Échafaudages & Étais',
          slug: 'echafaudages-etais',
          icon: undefined,
          translations: {
            "fr": "Échafaudages & Étais",
            "ar": "السقالات والمنصات",
            "en": "Scaffolding & Formwork",
            "de": "Gerüste & Schalungen",
            "es": "Andamios y Encofrados"
          },
          subcategories: []
        },
        {
          id: 'coffrages-outils-beton',
          name: 'Coffrages & Outils de Béton',
          slug: 'coffrages-outils-beton',
          icon: undefined,
          translations: {
            "fr": "Coffrages & Outils de Béton",
            "ar": "القوالب وأدوات الخرسانة",
            "en": "Formwork & Concrete Tools",
            "de": "Schalungen & Betonwerkzeuge",
            "es": "Encofrados y Herramientas de Hormigón"
          },
          subcategories: []
        },
        {
          id: 'materiaux-construction',
          name: 'Matériaux de Construction',
          slug: 'materiaux-construction',
          icon: undefined,
          translations: {
            "fr": "Matériaux de Construction",
            "ar": "مواد البناء",
            "en": "Construction Materials",
            "de": "Baumaterialien",
            "es": "Materiales de Construcción"
          },
          subcategories: []
        },
        {
          id: 'equipements-levage',
          name: 'Équipements de Levage',
          slug: 'equipements-levage',
          icon: undefined,
          translations: {
            "fr": "Équipements de Levage",
            "ar": "معدات الرفع",
            "en": "Lifting Equipment",
            "de": "Hebeausrüstung",
            "es": "Equipos de Elevación"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'outillage-professionnel',
      name: 'Outillage Professionnel',
      slug: 'outillage-professionnel',
      icon: undefined,
      translations: {
        "fr": "Outillage Professionnel",
        "ar": "الأدوات الاحترافية",
        "en": "Professional Tools",
        "de": "Professionelles Werkzeuge",
        "es": "Herramientas Profesionales"
      },
      subcategories: [
        {
          id: 'outils-main',
          name: 'Outils à Main',
          slug: 'outils-main',
          icon: undefined,
          translations: {
            "fr": "Outils à Main",
            "ar": "الأدوات اليدوية",
            "en": "Hand Tools",
            "de": "Handwerkzeuge",
            "es": "Herramientas Manuales"
          },
          subcategories: []
        },
        {
          id: 'outils-electriques',
          name: 'Outils Électriques',
          slug: 'outils-electriques',
          icon: undefined,
          translations: {
            "fr": "Outils Électriques",
            "ar": "الأدوات الكهربائية",
            "en": "Power Tools",
            "de": "Elektrische Werkzeuge",
            "es": "Herramientas Eléctricas"
          },
          subcategories: []
        },
        {
          id: 'outils-mesure',
          name: 'Outils de Mesure',
          slug: 'outils-mesure',
          icon: undefined,
          translations: {
            "fr": "Outils de Mesure",
            "ar": "أدوات القياس",
            "en": "Measuring Tools",
            "de": "Messwerkzeuge",
            "es": "Herramientas de Medición"
          },
          subcategories: []
        },
        {
          id: 'outillages-specifiques',
          name: 'Outillages Spécifiques',
          slug: 'outillages-specifiques',
          icon: undefined,
          translations: {
            "fr": "Outillages Spécifiques",
            "ar": "الأدوات المتخصصة",
            "en": "Specialized Tools",
            "de": "Spezialwerkzeuge",
            "es": "Herramientas Especializadas"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-chantier',
      name: 'Équipements de Chantier',
      slug: 'equipements-chantier',
      icon: undefined,
      translations: {
        "fr": "Équipements de Chantier",
        "ar": "معدات ورش العمل",
        "en": "Site Equipment",
        "de": "Baustellenausrüstung",
        "es": "Equipos de Obra"
      },
      subcategories: [
        {
          id: 'bungalows-abris',
          name: 'Bungalows & Abris',
          slug: 'bungalows-abris',
          icon: undefined,
          translations: {
            "fr": "Bungalows & Abris",
            "ar": "الأكواخ والملاجئ",
            "en": "Bungalows & Shelters",
            "de": "Bungalows & Unterstände",
            "es": "Bungalows y Refugios"
          },
          subcategories: []
        },
        {
          id: 'signalisation-securite',
          name: 'Signalisation & Sécurité',
          slug: 'signalisation-securite',
          icon: undefined,
          translations: {
            "fr": "Signalisation & Sécurité",
            "ar": "اللافتات والسلامة",
            "en": "Signage & Safety",
            "de": "Beschilderung & Sicherheit",
            "es": "Señalización y Seguridad"
          },
          subcategories: []
        },
        {
          id: 'eclairage-chantier',
          name: 'Éclairage de Chantier',
          slug: 'eclairage-chantier',
          icon: undefined,
          translations: {
            "fr": "Éclairage de Chantier",
            "ar": "إضاءة ورش العمل",
            "en": "Site Lighting",
            "de": "Baustellenbeleuchtung",
            "es": "Iluminación de Obra"
          },
          subcategories: []
        },
        {
          id: 'equipements-manutention',
          name: 'Équipements de Manutention',
          slug: 'equipements-manutention',
          icon: undefined,
          translations: {
            "fr": "Équipements de Manutention",
            "ar": "معدات المناولة",
            "en": "Handling Equipment",
            "de": "Förderausrüstung",
            "es": "Equipos de Manipulación"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'materiel-securite',
      name: 'Matériel de Sécurité',
      slug: 'materiel-securite',
      icon: undefined,
      translations: {
        "fr": "Matériel de Sécurité",
        "ar": "معدات السلامة",
        "en": "Safety Equipment",
        "de": "Sicherheitsausrüstung",
        "es": "Equipo de Seguridad"
      },
      subcategories: [
        {
          id: 'epi-protection-individuelle',
          name: 'EPI (Équipements de Protection Individuelle)',
          slug: 'epi-protection-individuelle',
          icon: undefined,
          translations: {
            "fr": "EPI (Équipements de Protection Individuelle)",
            "ar": "معدات الحماية الفردية",
            "en": "PPE (Personal Protective Equipment)",
            "de": "PSA (Persönliche Schutzausrüstung)",
            "es": "EPI (Equipo de Protección Individual)"
          },
          subcategories: []
        },
        {
          id: 'casques-protections',
          name: 'Casques & Protections',
          slug: 'casques-protections',
          icon: undefined,
          translations: {
            "fr": "Casques & Protections",
            "ar": "الخوذات والحمايات",
            "en": "Helmets & Protections",
            "de": "Helme & Schutzkleidung",
            "es": "Cascos y Protecciones"
          },
          subcategories: []
        },
        {
          id: 'vetements-travail',
          name: 'Vêtements de Travail',
          slug: 'vetements-travail',
          icon: undefined,
          translations: {
            "fr": "Vêtements de Travail",
            "ar": "ملابس العمل",
            "en": "Work Clothing",
            "de": "Arbeitskleidung",
            "es": "Ropa de Trabajo"
          },
          subcategories: []
        },
        {
          id: 'equipements-secours',
          name: 'Équipements de Secours',
          slug: 'equipements-secours',
          icon: undefined,
          translations: {
            "fr": "Équipements de Secours",
            "ar": "معدات الإنقاذ",
            "en": "Rescue Equipment",
            "de": "Rettungsausrüstung",
            "es": "Equipos de Rescate"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-specifiques-btp',
      name: 'Équipements Spécifiques BTP',
      slug: 'equipements-specifiques-btp',
      icon: undefined,
      translations: {
        "fr": "Équipements Spécifiques BTP",
        "ar": "معدات خاصة بالبناء والأشغال العامة",
        "en": "Specialized Construction Equipment",
        "de": "Spezialisierte Baustellenausrüstung",
        "es": "Equipos Especializados de Construcción"
      },
      subcategories: [
        {
          id: 'materiel-terrassement',
          name: 'Matériel de Terrassement',
          slug: 'materiel-terrassement',
          icon: undefined,
          translations: {
            "fr": "Matériel de Terrassement",
            "ar": "معدات التسوية",
            "en": "Grading Equipment",
            "de": "Planierausrüstung",
            "es": "Equipos de Nivelación"
          },
          subcategories: []
        },
        {
          id: 'equipements-demolition',
          name: 'Équipements de Démolition',
          slug: 'equipements-demolition',
          icon: undefined,
          translations: {
            "fr": "Équipements de Démolition",
            "ar": "معدات الهدم",
            "en": "Demolition Equipment",
            "de": "Abrissausrüstung",
            "es": "Equipos de Demolición"
          },
          subcategories: []
        },
        {
          id: 'materiel-finition',
          name: 'Matériel de Finition',
          slug: 'materiel-finition',
          icon: undefined,
          translations: {
            "fr": "Matériel de Finition",
            "ar": "معدات التشطيب",
            "en": "Finishing Equipment",
            "de": "Verarbeitungsausrüstung",
            "es": "Equipos de Acabado"
          },
          subcategories: []
        },
        {
          id: 'equipements-nettoyage',
          name: 'Équipements de Nettoyage',
          slug: 'equipements-nettoyage',
          icon: undefined,
          translations: {
            "fr": "Équipements de Nettoyage",
            "ar": "معدات التنظيف",
            "en": "Cleaning Equipment",
            "de": "Reinigungsausrüstung",
            "es": "Equipos de Limpieza"
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

const tsCategory = convertToTypeScript(materielBtpCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', materielBtpCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  materielBtpCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('materiel-btp-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: materiel-btp-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', materielBtpCategory.translations.fr);
console.log('Arabe:', materielBtpCategory.translations.ar);
console.log('Anglais:', materielBtpCategory.translations.en);
console.log('Allemand:', materielBtpCategory.translations.de);
console.log('Espagnol:', materielBtpCategory.translations.es);

console.log('\n🏗️ STRUCTURE COMPLÈTE:');
console.log('================================================================================');
materielBtpCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');