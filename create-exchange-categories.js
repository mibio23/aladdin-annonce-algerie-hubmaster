import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories d\'échanges et de partage...');

// Structure détaillée des catégories d'échanges et de partage
const exchangeCategories = [
  {
    id: 'echanges-partage',
    name: 'Échanges & Partage',
    slug: 'echanges-partage',
    translations: {
      fr: 'Échanges & Partage',
      ar: 'التبادل والمشاركة',
      en: 'Exchange & Sharing',
      de: 'Austausch & Teilen',
      es: 'Intercambio y Compartir'
    },
    subcategories: [
      {
        id: 'don-troc',
        name: 'Don & Troc',
        slug: 'don-troc',
        translations: {
          fr: 'Don & Troc',
          ar: 'التبرع والمقايضة',
          en: 'Donation & Barter',
          de: 'Spende & Tausch',
          es: 'Donación e Intercambio'
        },
        subcategories: [
          {
            id: 'objets-don',
            name: 'Objets à Donner',
            slug: 'objets-don',
            translations: {
              fr: 'Objets à Donner',
              ar: 'أشياء للتبرع',
              en: 'Items to Donate',
              de: 'Gegenstände zum Spenden',
              es: 'Objetos para Donar'
            },
            subcategories: []
          },
          {
            id: 'objets-troc',
            name: 'Objets à Troquer',
            slug: 'objets-troc',
            translations: {
              fr: 'Objets à Troquer',
              ar: 'أشياء للمقايضة',
              en: 'Items to Barter',
              de: 'Gegenstände zum Tauschen',
              es: 'Objetos para Intercambiar'
            },
            subcategories: []
          },
          {
            id: 'services-echanges',
            name: 'Services d\'Échanges',
            slug: 'services-echanges',
            translations: {
              fr: 'Services d\'Échanges',
              ar: 'خدمات التبادل',
              en: 'Exchange Services',
              de: 'Austauschdienste',
              es: 'Servicios de Intercambio'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'covoiturage-transport',
        name: 'Covoiturage & Transport Partagé',
        slug: 'covoiturage-transport',
        translations: {
          fr: 'Covoiturage & Transport Partagé',
          ar: 'مشاركة السيارات والنقل المشترك',
          en: 'Carpooling & Shared Transport',
          de: 'Fahrgemeinschaft & Geteilter Transport',
          es: 'Coche Compartido y Transporte Compartido'
        },
        subcategories: [
          {
            id: 'trajets-covoiturage',
            name: 'Trajets en Covoiturage',
            slug: 'trajets-covoiturage',
            translations: {
              fr: 'Trajets en Covoiturage',
              ar: 'رحلات مشاركة السيارات',
              en: 'Carpooling Trips',
              de: 'Fahrgemeinschafts-Trips',
              es: 'Viajes en Coche Compartido'
            },
            subcategories: []
          },
          {
            id: 'location-particuliers',
            name: 'Location entre Particuliers',
            slug: 'location-particuliers',
            translations: {
              fr: 'Location entre Particuliers',
              ar: 'تأجير بين الأفراد',
              en: 'Peer-to-Peer Rental',
              de: 'Peer-to-Peer Vermietung',
              es: 'Alquiler entre Particulares'
            },
            subcategories: []
          },
          {
            id: 'transport-marchandises',
            name: 'Transport de Marchandises',
            slug: 'transport-marchandises',
            translations: {
              fr: 'Transport de Marchandises',
              ar: 'نقل البضائع',
              en: 'Goods Transport',
              de: 'Gütertransport',
              es: 'Transporte de Mercancías'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'partage-competences',
        name: 'Partage de Compétences',
        slug: 'partage-competences',
        translations: {
          fr: 'Partage de Compétences',
          ar: 'مشاركة المهارات',
          en: 'Skills Sharing',
          de: 'Fähigkeiten teilen',
          es: 'Compartir Habilidades'
        },
        subcategories: [
          {
            id: 'cours-formations',
            name: 'Cours & Formations',
            slug: 'cours-formations',
            translations: {
              fr: 'Cours & Formations',
              ar: 'دورات وتكوين',
              en: 'Courses & Training',
              de: 'Kurse & Schulungen',
              es: 'Cursos y Formación'
            },
            subcategories: []
          },
          {
            id: 'mentorat-accompagnement',
            name: 'Mentorat & Accompagnement',
            slug: 'mentorat-accompagnement',
            translations: {
              fr: 'Mentorat & Accompagnement',
              ar: 'الإرشاد والمصاحبة',
              en: 'Mentoring & Coaching',
              de: 'Mentoring & Coaching',
              es: 'Mentoría y Acompañamiento'
            },
            subcategories: []
          },
          {
            id: 'aide-benevole',
            name: 'Aide Bénévole',
            slug: 'aide-benevole',
            translations: {
              fr: 'Aide Bénévole',
              ar: 'مساعدة تطوعية',
              en: 'Volunteer Help',
              de: 'Freiwilligenhilfe',
              es: 'Ayuda Voluntaria'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'temps-libre-activites',
        name: 'Temps Libre & Activités',
        slug: 'temps-libre-activites',
        translations: {
          fr: 'Temps Libre & Activités',
          ar: 'وقت الفراغ والأنشطة',
          en: 'Free Time & Activities',
          de: 'Freizeit & Aktivitäten',
          es: 'Tiempo Libre y Actividades'
        },
        subcategories: [
          {
            id: 'sorties-evenements',
            name: 'Sorties & Événements',
            slug: 'sorties-evenements',
            translations: {
              fr: 'Sorties & Événements',
              ar: 'الخروج والفعاليات',
              en: 'Outings & Events',
              de: 'Ausflüge & Veranstaltungen',
              es: 'Salidas y Eventos'
            },
            subcategories: []
          },
          {
            id: 'sports-loisirs',
            name: 'Sports & Loisirs',
            slug: 'sports-loisirs',
            translations: {
              fr: 'Sports & Loisirs',
              ar: 'الرياضة والتسلية',
              en: 'Sports & Hobbies',
              de: 'Sport & Hobbys',
              es: 'Deportes y Pasatiempos'
            },
            subcategories: []
          },
          {
            id: 'groupes-communautes',
            name: 'Groupes & Communautés',
            slug: 'groupes-communautes',
            translations: {
              fr: 'Groupes & Communautés',
              ar: 'مجموعات ومجتمعات',
              en: 'Groups & Communities',
              de: 'Gruppen & Gemeinschaften',
              es: 'Grupos y Comunidades'
            },
            subcategories: []
          }
        ]
      }
    ]
  }
];

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Extraire les catégories existantes
const existingCategoriesMatch = existingContent.match(/export const extendedCategories: MenuCategory\[\] = \[([\s\S]*?)\];/);
if (!existingCategoriesMatch) {
  console.error('❌ Impossible de trouver les catégories existantes dans le fichier');
  process.exit(1);
}

const existingCategoriesData = existingCategoriesMatch[1];

// Fonction pour générer les catégories avec traductions
function generateCategoryWithTranslations(category, level = 0) {
  const indent = '  '.repeat(level);
  let result = `${indent}{\n`;
  result += `${indent}  id: '${category.id}',\n`;
  result += `${indent}  name: '${category.name}',\n`;
  result += `${indent}  slug: '${category.slug}',\n`;
  result += `${indent}  icon: undefined,\n`;
  
  if (category.translations) {
    result += `${indent}  translations: ${JSON.stringify(category.translations, null, 2)},\n`;
  }
  
  if (category.subcategories && category.subcategories.length > 0) {
    result += `${indent}  subcategories: [\n`;
    category.subcategories.forEach(sub => {
      result += generateCategoryWithTranslations(sub, level + 2);
    });
    result += `${indent}  ],\n`;
  } else {
    result += `${indent}  subcategories: [],\n`;
  }
  
  result += `${indent}}`;
  return result + (level > 0 ? ',\n' : '\n');
}

// Générer les catégories d'échanges
const exchangeCategoriesCode = exchangeCategories.map(cat => generateCategoryWithTranslations(cat, 1)).join('');

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${exchangeCategoriesCode}]`;

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté, Animaux & Accessoires, Événements & Billetterie, Voyages & Tourisme, Finance & Monnaie Fiduciaire, catégories spécifiques à l'Algérie et Échanges & Partage
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${mergedCategories};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories d\'échanges mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 Catégorie "Échanges & Partage" ajoutée avec succès`);
  console.log(`🌍 Support multilingue: Français, Arabe, Anglais, Allemand, Espagnol`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories d\'échanges et de partage ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript avec support multilingue.');
console.log('📝 Sous-catégories ajoutées:');
console.log('   - Don & Troc');
console.log('   - Covoiturage & Transport Partagé');
console.log('   - Partage de Compétences');
console.log('   - Temps Libre & Activités');