import fs from 'fs';
import path from 'path';

console.log('🍽️ CRÉATION DE LA CATÉGORIE "Gastronomie & Produits du Terroir"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const gastronomieTerroirCategory = {
  id: 'gastronomie-produits-terroir',
  name: 'Gastronomie & Produits du Terroir',
  slug: 'gastronomie-produits-terroir',
  icon: undefined,
  translations: {
    "fr": "Gastronomie & Produits du Terroir",
    "ar": "الطبخ ومنتجات الأرض",
    "en": "Gastronomy & Terroir Products",
    "de": "Gastronomie & Terroirprodukte",
    "es": "Gastronomía y Productos del Terruño"
  },
  subcategories: [
    {
      id: 'produits-terroir-algerien',
      name: 'Produits du Terroir Algérien',
      slug: 'produits-terroir-algerien',
      icon: undefined,
      translations: {
        "fr": "Produits du Terroir Algérien",
        "ar": "منتجات الأرض الجزائرية",
        "en": "Algerian Terroir Products",
        "de": "Algerische Terroirprodukte",
        "es": "Productos del Terruño Argelino"
      },
      subcategories: [
        {
          id: 'huiles-traditionnelles',
          name: 'Huiles Traditionnelles',
          slug: 'huiles-traditionnelles',
          icon: undefined,
          translations: {
            "fr": "Huiles Traditionnelles",
            "ar": "الزيوت التقليدية",
            "en": "Traditional Oils",
            "de": "Traditionelle Öle",
            "es": "Aceites Tradicionales"
          },
          subcategories: []
        },
        {
          id: 'epices-locales',
          name: 'Épices Locales',
          slug: 'epices-locales',
          icon: undefined,
          translations: {
            "fr": "Épices Locales",
            "ar": "التوابل المحلية",
            "en": "Local Spices",
            "de": "Lokale Gewürze",
            "es": "Especias Locales"
          },
          subcategories: []
        },
        {
          id: 'condiments-artisanaux',
          name: 'Condiments Artisanaux',
          slug: 'condiments-artisanaux',
          icon: undefined,
          translations: {
            "fr": "Condiments Artisanaux",
            "ar": "البهارات الحرفية",
            "en": "Artisanal Condiments",
            "de": "Handwerkliche Gewürze",
            "es": "Condimentos Artesanales"
          },
          subcategories: []
        },
        {
          id: 'saveurs-regionales',
          name: 'Saveurs Régionales',
          slug: 'saveurs-regionales',
          icon: undefined,
          translations: {
            "fr": "Saveurs Régionales",
            "ar": "النكهات الإقليمية",
            "en": "Regional Flavors",
            "de": "Regionale Aromen",
            "es": "Sabores Regionales"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'produits-gastronomiques-artisanaux',
      name: 'Produits Gastronomiques Artisanaux',
      slug: 'produits-gastronomiques-artisanaux',
      icon: undefined,
      translations: {
        "fr": "Produits Gastronomiques Artisanaux",
        "ar": "المنتجات الغذائية الحرفية",
        "en": "Artisanal Gastronomic Products",
        "de": "Handwerkliche Gastronomieprodukte",
        "es": "Productos Gastronómicos Artesanales"
      },
      subcategories: [
        {
          id: 'conserves-artisanales',
          name: 'Conserves Artisanales',
          slug: 'conserves-artisanales',
          icon: undefined,
          translations: {
            "fr": "Conserves Artisanales",
            "ar": "المعلبات الحرفية",
            "en": "Artisanal Preserves",
            "de": "Handwerkliche Konserven",
            "es": "Conservas Artesanales"
          },
          subcategories: []
        },
        {
          id: 'produits-suces',
          name: 'Produits Sucrés',
          slug: 'produits-suces',
          icon: undefined,
          translations: {
            "fr": "Produits Sucrés",
            "ar": "المنتجات السكرية",
            "en": "Sweet Products",
            "de": "Süße Produkte",
            "es": "Productos Dulces"
          },
          subcategories: []
        },
        {
          id: 'produits-sales',
          name: 'Produits Salés',
          slug: 'produits-sales',
          icon: undefined,
          translations: {
            "fr": "Produits Salés",
            "ar": "المنتجات المالحة",
            "en": "Salty Products",
            "de": "Salzige Produkte",
            "es": "Productos Salados"
          },
          subcategories: []
        },
        {
          id: 'specialites-regionales',
          name: 'Spécialités Régionales',
          slug: 'specialites-regionales',
          icon: undefined,
          translations: {
            "fr": "Spécialités Régionales",
            "ar": "التخصصات الإقليمية",
            "en": "Regional Specialties",
            "de": "Regionale Spezialitäten",
            "es": "Especialidades Regionales"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-gastronomiques',
      name: 'Équipements Gastronomiques',
      slug: 'equipements-gastronomiques',
      icon: undefined,
      translations: {
        "fr": "Équipements Gastronomiques",
        "ar": "المعدات الغذائية",
        "en": "Gastronomic Equipment",
        "de": "Gastronomieausrüstung",
        "es": "Equipamiento Gastronómico"
      },
      subcategories: [
        {
          id: 'ustensiles-traditionnels',
          name: 'Ustensiles Traditionnels',
          slug: 'ustensiles-traditionnels',
          icon: undefined,
          translations: {
            "fr": "Ustensiles Traditionnels",
            "ar": "الأدوات التقليدية",
            "en": "Traditional Utensils",
            "de": "Traditionelle Utensilien",
            "es": "Utensilios Tradicionales"
          },
          subcategories: []
        },
        {
          id: 'equipements-professionnels',
          name: 'Équipements Professionnels',
          slug: 'equipements-professionnels',
          icon: undefined,
          translations: {
            "fr": "Équipements Professionnels",
            "ar": "المعدات الاحترافية",
            "en": "Professional Equipment",
            "de": "Professionelle Ausrüstung",
            "es": "Equipamiento Profesional"
          },
          subcategories: []
        },
        {
          id: 'materiel-conservation',
          name: 'Matériel de Conservation',
          slug: 'materiel-conservation',
          icon: undefined,
          translations: {
            "fr": "Matériel de Conservation",
            "ar": "معدات الحفظ",
            "en": "Preservation Equipment",
            "de": "Konservierungsausrüstung",
            "es": "Material de Conservación"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'services-gastronomiques',
      name: 'Services Gastronomiques',
      slug: 'services-gastronomiques',
      icon: undefined,
      translations: {
        "fr": "Services Gastronomiques",
        "ar": "الخدمات الغذائية",
        "en": "Gastronomic Services",
        "de": "Gastronomiedienste",
        "es": "Servicios Gastronómicos"
      },
      subcategories: [
        {
          id: 'degustations',
          name: 'Dégustations',
          slug: 'degustations',
          icon: undefined,
          translations: {
            "fr": "Dégustations",
            "ar": "التذوق",
            "en": "Tastings",
            "de": "Verkostungen",
            "es": "Degustaciones"
          },
          subcategories: []
        },
        {
          id: 'formations-culinaires',
          name: 'Formations Culinaires',
          slug: 'formations-culinaires',
          icon: undefined,
          translations: {
            "fr": "Formations Culinaires",
            "ar": "التدريب الطهي",
            "en": "Culinary Training",
            "de": "Kulinarische Schulungen",
            "es": "Formación Culinaria"
          },
          subcategories: []
        },
        {
          id: 'conseils-gastronomiques',
          name: 'Conseils Gastronomiques',
          slug: 'conseils-gastronomiques',
          icon: undefined,
          translations: {
            "fr": "Conseils Gastronomiques",
            "ar": "الاستشارات الغذائية",
            "en": "Gastronomic Consulting",
            "de": "Gastronomieberatung",
            "es": "Asesoramiento Gastronómico"
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

const tsCategory = convertToTypeScript(gastronomieTerroirCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', gastronomieTerroirCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  gastronomieTerroirCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('gastronomie-terroir-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: gastronomie-terroir-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', gastronomieTerroirCategory.translations.fr);
console.log('Arabe:', gastronomieTerroirCategory.translations.ar);
console.log('Anglais:', gastronomieTerroirCategory.translations.en);
console.log('Allemand:', gastronomieTerroirCategory.translations.de);
console.log('Espagnol:', gastronomieTerroirCategory.translations.es);

console.log('\n🏗️ STRUCTURE COMPLÈTE:');
console.log('================================================================================');
gastronomieTerroirCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');