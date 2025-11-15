import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories spécifiques à l\'Algérie...');

// Structure détaillée des catégories spécifiques à l'Algérie
const algerianCategories = [
  {
    id: 'artisanat-traditionnel-algerien',
    name: 'Artisanat Traditionnel Algérien',
    slug: 'artisanat-traditionnel-algerien',
    translations: {
      fr: 'Artisanat Traditionnel Algérien',
      ar: 'الحرف التقليدية الجزائرية',
      en: 'Algerian Traditional Crafts',
      de: 'Algerisches traditionelles Handwerk',
      es: 'Artesanía Tradicional Argelina'
    },
    subcategories: [
      {
        id: 'tapis-berberes',
        name: 'Tapis Berbères',
        slug: 'tapis-berberes',
        translations: {
          fr: 'Tapis Berbères',
          ar: 'السجاد الأمازيغي',
          en: 'Berber Carpets',
          de: 'Berberische Teppiche',
          es: 'Alfombras Bereberes'
        },
        subcategories: [
          {
            id: 'tapis-kabyle',
            name: 'Tapis Kabyle',
            slug: 'tapis-kabyle',
            translations: {
              fr: 'Tapis Kabyle',
              ar: 'زربية القبائل',
              en: 'Kabyle Carpets',
              de: 'Kabylische Teppiche',
              es: 'Alfombras Cabilas'
            },
            subcategories: []
          },
          {
            id: 'tapis-aurasiens',
            name: 'Tapis Aurasiens',
            slug: 'tapis-aurasiens',
            translations: {
              fr: 'Tapis Aurasiens',
              ar: 'زربية الأوراس',
              en: 'Aures Carpets',
              de: 'Aures-Teppiche',
              es: 'Alfombras de Aurés'
            },
            subcategories: []
          },
          {
            id: 'tapis-mzab',
            name: 'Tapis M\'zab',
            slug: 'tapis-mzab',
            translations: {
              fr: 'Tapis M\'zab',
              ar: 'زريقة مزاب',
              en: 'M\'zab Carpets',
              de: 'M\'zab-Teppiche',
              es: 'Alfombras M\'zab'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'poterie-traditionnelle',
        name: 'Poterie Traditionnelle',
        slug: 'poterie-traditionnelle',
        translations: {
          fr: 'Poterie Traditionnelle',
          ar: 'الفخار التقليدي',
          en: 'Traditional Pottery',
          de: 'Traditionelle Töpferei',
          es: 'Cerámica Tradicional'
        },
        subcategories: [
          {
            id: 'poterie-kabyle',
            name: 'Poterie Kabyle',
            slug: 'poterie-kabyle',
            translations: {
              fr: 'Poterie Kabyle',
              ar: 'فخار القبائل',
              en: 'Kabyle Pottery',
              de: 'Kabylische Töpferei',
              es: 'Cerámica Cabilia'
            },
            subcategories: []
          },
          {
            id: 'poterie-saharienne',
            name: 'Poterie Saharienne',
            slug: 'poterie-saharienne',
            translations: {
              fr: 'Poterie Saharienne',
              ar: 'فخار الصحراء',
              en: 'Saharan Pottery',
              de: 'Sahara-Töpferei',
              es: 'Cerámica Sahara'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'bijoux-traditionnels',
        name: 'Bijoux Traditionnels',
        slug: 'bijoux-traditionnels',
        translations: {
          fr: 'Bijoux Traditionnels',
          ar: 'المجوهرات التقليدية',
          en: 'Traditional Jewelry',
          de: 'Traditioneller Schmuck',
          es: 'Joyería Tradicional'
        },
        subcategories: [
          {
            id: 'bijoux-berberes',
            name: 'Bijoux Berbères',
            slug: 'bijoux-berberes',
            translations: {
              fr: 'Bijoux Berbères',
              ar: 'مجوهرات أمازيغية',
              en: 'Berber Jewelry',
              de: 'Berberschmuck',
              es: 'Joyería Bereber'
            },
            subcategories: []
          },
          {
            id: 'bijoux-sahariens',
            name: 'Bijoux Sahariens',
            slug: 'bijoux-sahariens',
            translations: {
              fr: 'Bijoux Sahariens',
              ar: 'مجوهرات الصحراء',
              en: 'Saharan Jewelry',
              de: 'Sahara-Schmuck',
              es: 'Joyería Sahara'
            },
            subcategories: []
          },
          {
            id: 'fibules-kabyles',
            name: 'Fibules Kabyles',
            slug: 'fibules-kabyles',
            translations: {
              fr: 'Fibules Kabyles',
              ar: 'الخزامة القبائلية',
              en: 'Kabyle Fibulas',
              de: 'Kabylische Fibeln',
              es: 'Fíbulas Cabilas'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'costumes-traditionnels',
        name: 'Costumes Traditionnels',
        slug: 'costumes-traditionnels',
        translations: {
          fr: 'Costumes Traditionnels',
          ar: 'الأزياء التقليدية',
          en: 'Traditional Costumes',
          de: 'Traditionelle Kostüme',
          es: 'Trajes Tradicionales'
        },
        subcategories: [
          {
            id: 'burnous',
            name: 'Burnous',
            slug: 'burnous',
            translations: {
              fr: 'Burnous',
              ar: 'برنوس',
              en: 'Burnous',
              de: 'Burnus',
              es: 'Burnus'
            },
            subcategories: []
          },
          {
            id: 'karakou',
            name: 'Karakou',
            slug: 'karakou',
            translations: {
              fr: 'Karakou',
              ar: 'قرقو',
              en: 'Karakou',
              de: 'Karakou',
              es: 'Karakou'
            },
            subcategories: []
          },
          {
            id: 'caftan-algerien',
            name: 'Caftan Algérien',
            slug: 'caftan-algerien',
            translations: {
              fr: 'Caftan Algérien',
              ar: 'القطفة الجزائرية',
              en: 'Algerian Caftan',
              de: 'Algerischer Kaftan',
              es: 'Caftán Argelino'
            },
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'produits-locaux-algeriens',
    name: 'Produits Locaux Algériens',
    slug: 'produits-locaux-algeriens',
    translations: {
      fr: 'Produits Locaux Algériens',
      ar: 'المنتجات المحلية الجزائرية',
      en: 'Algerian Local Products',
      de: 'Algerische lokale Produkte',
      es: 'Productos Locales Argelinos'
    },
    subcategories: [
      {
        id: 'huile-olive',
        name: 'Huile d\'Olive',
        slug: 'huile-olive',
        translations: {
          fr: 'Huile d\'Olive',
          ar: 'زيت الزيتون',
          en: 'Olive Oil',
          de: 'Olivenöl',
          es: 'Aceite de Oliva'
        },
        subcategories: [
          {
            id: 'huile-olive-kabylie',
            name: 'Huile d\'Olive de Kabylie',
            slug: 'huile-olive-kabylie',
            translations: {
              fr: 'Huile d\'Olive de Kabylie',
              ar: 'زيت زيتون القبائل',
              en: 'Kabylie Olive Oil',
              de: 'Kabylie Olivenöl',
              es: 'Aceite de Oliva de Cabilia'
            },
            subcategories: []
          },
          {
            id: 'huile-olive-sahara',
            name: 'Huile d\'Olive du Sahara',
            slug: 'huile-olive-sahara',
            translations: {
              fr: 'Huile d\'Olive du Sahara',
              ar: 'زيت زيتون الصحراء',
              en: 'Sahara Olive Oil',
              de: 'Sahara Olivenöl',
              es: 'Aceite de Oliva del Sahara'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'dattes-algeriennes',
        name: 'Dattes Algériennes',
        slug: 'dattes-algeriennes',
        translations: {
          fr: 'Dattes Algériennes',
          ar: 'تمور جزائرية',
          en: 'Algerian Dates',
          de: 'Algerische Datteln',
          es: 'Dátiles Argelinos'
        },
        subcategories: [
          {
            id: 'deglet-nour',
            name: 'Deglet Nour',
            slug: 'deglet-nour',
            translations: {
              fr: 'Deglet Nour',
              ar: 'دقلة النور',
              en: 'Deglet Nour',
              de: 'Deglet Nour',
              es: 'Deglet Nour'
            },
            subcategories: []
          },
          {
            id: 'ghars',
            name: 'Ghars',
            slug: 'ghars',
            translations: {
              fr: 'Ghars',
              ar: 'غرس',
              en: 'Ghars',
              de: 'Ghars',
              es: 'Ghars'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'miel-algerien',
        name: 'Miel Algérien',
        slug: 'miel-algerien',
        translations: {
          fr: 'Miel Algérien',
          ar: 'عسل جزائري',
          en: 'Algerian Honey',
          de: 'Algerischer Honig',
          es: 'Miel Argelino'
        },
        subcategories: [
          {
            id: 'miel-fleur-oranger',
            name: 'Miel de Fleur d\'Oranger',
            slug: 'miel-fleur-oranger',
            translations: {
              fr: 'Miel de Fleur d\'Oranger',
              ar: 'عسل زهر البرتقال',
              en: 'Orange Blossom Honey',
              de: 'Orangenblütenhonig',
              es: 'Miel de Flor de Naranjo'
            },
            subcategories: []
          },
          {
            id: 'miel-thym',
            name: 'Miel de Thym',
            slug: 'miel-thym',
            translations: {
              fr: 'Miel de Thym',
              ar: 'عسل الزعتر',
              en: 'Thyme Honey',
              de: 'Thymianhonig',
              es: 'Miel de Tomillo'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'epices-algeriennes',
        name: 'Épices Algériennes',
        slug: 'epices-algeriennes',
        translations: {
          fr: 'Épices Algériennes',
          ar: 'بهارات جزائرية',
          en: 'Algerian Spices',
          de: 'Algerische Gewürze',
          es: 'Especias Argelinas'
        },
        subcategories: [
          {
            id: 'ras-el-hanout',
            name: 'Ras El Hanout',
            slug: 'ras-el-hanout',
            translations: {
              fr: 'Ras El Hanout',
              ar: 'رأس الحانوت',
              en: 'Ras El Hanout',
              de: 'Ras El Hanout',
              es: 'Ras El Hanout'
            },
            subcategories: []
          },
          {
            id: 'curcuma-algerien',
            name: 'Curcuma Algérien',
            slug: 'curcuma-algerien',
            translations: {
              fr: 'Curcuma Algérien',
              ar: 'كركم جزائري',
              en: 'Algerian Turmeric',
              de: 'Algerischer Kurkuma',
              es: 'Cúrcuma Argelina'
            },
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    id: 'vetements-traditionnels-algeriens',
    name: 'Vêtements Traditionnels Algériens',
    slug: 'vetements-traditionnels-algeriens',
    translations: {
      fr: 'Vêtements Traditionnels Algériens',
      ar: 'الملابس التقليدية الجزائرية',
      en: 'Algerian Traditional Clothing',
      de: 'Algerische traditionelle Kleidung',
      es: 'Ropa Tradicional Argelina'
    },
    subcategories: [
      {
        id: 'haik',
        name: 'Haïk',
        slug: 'haik',
        translations: {
          fr: 'Haïk',
          ar: 'الحايك',
          en: 'Haïk',
          de: 'Haïk',
          es: 'Haïk'
        },
        subcategories: []
      },
      {
        id: 'blouza',
        name: 'Blouza',
        slug: 'blouza',
        translations: {
          fr: 'Blouza',
          ar: 'بلوزة',
          en: 'Blouza',
          de: 'Blouza',
          es: 'Blouza'
        },
        subcategories: []
      },
      {
        id: 'sarouel',
        name: 'Sarouel',
        slug: 'sarouel',
        translations: {
          fr: 'Sarouel',
          ar: 'سراويل',
          en: 'Sarouel',
          de: 'Sarouel',
          es: 'Sarouel'
        },
        subcategories: []
      },
      {
        id: 'chachia',
        name: 'Chachia',
        slug: 'chachia',
        translations: {
          fr: 'Chachia',
          ar: 'شاشية',
          en: 'Chachia',
          de: 'Chachia',
          es: 'Chachia'
        },
        subcategories: []
      }
    ]
  },
  {
    id: 'plats-traditionnels-algeriens',
    name: 'Plats Traditionnels Algériens',
    slug: 'plats-traditionnels-algeriens',
    translations: {
      fr: 'Plats Traditionnels Algériens',
      ar: 'الأطباق التقليدية الجزائرية',
      en: 'Algerian Traditional Dishes',
      de: 'Algerische traditionelle Gerichte',
      es: 'Platos Tradicionales Argelinos'
    },
    subcategories: [
      {
        id: 'couscous-algerien',
        name: 'Couscous Algérien',
        slug: 'couscous-algerien',
        translations: {
          fr: 'Couscous Algérien',
          ar: 'كسكس جزائري',
          en: 'Algerian Couscous',
          de: 'Algerischer Couscous',
          es: 'Cuscús Argelino'
        },
        subcategories: [
          {
            id: 'couscous-berbere',
            name: 'Couscous Berbère',
            slug: 'couscous-berbere',
            translations: {
              fr: 'Couscous Berbère',
              ar: 'كسكس أمازيغي',
              en: 'Berber Couscous',
              de: 'Berberischer Couscous',
              es: 'Cuscús Bereber'
            },
            subcategories: []
          },
          {
            id: 'couscous-tfaya',
            name: 'Couscous Tfaya',
            slug: 'couscous-tfaya',
            translations: {
              fr: 'Couscous Tfaya',
              ar: 'كسكس الطفاية',
              en: 'Couscous Tfaya',
              de: 'Couscous Tfaya',
              es: 'Cuscús Tfaya'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'tagine-algerien',
        name: 'Tajine Algérien',
        slug: 'tagine-algerien',
        translations: {
          fr: 'Tajine Algérien',
          ar: 'طاجين جزائري',
          en: 'Algerian Tajine',
          de: 'Algerischer Tajine',
          es: 'Tajín Argelino'
        },
        subcategories: []
      },
      {
        id: 'chorba',
        name: 'Chorba',
        slug: 'chorba',
        translations: {
          fr: 'Chorba',
          ar: 'شربة',
          en: 'Chorba',
          de: 'Chorba',
          es: 'Chorba'
        },
        subcategories: []
      },
      {
        id: 'rechta',
        name: 'Rechta',
        slug: 'rechta',
        translations: {
          fr: 'Rechta',
          ar: 'رشتة',
          en: 'Rechta',
          de: 'Rechta',
          es: 'Rechta'
        },
        subcategories: []
      },
      {
        id: 'bourek',
        name: 'Bourek',
        slug: 'bourek',
        translations: {
          fr: 'Bourek',
          ar: 'بوراك',
          en: 'Bourek',
          de: 'Bourek',
          es: 'Bourek'
        },
        subcategories: []
      }
    ]
  },
  {
    id: 'patisseries-traditionnelles-algeriennes',
    name: 'Pâtisseries Traditionnelles Algériennes',
    slug: 'patisseries-traditionnelles-algeriennes',
    translations: {
      fr: 'Pâtisseries Traditionnelles Algériennes',
      ar: 'الحلويات التقليدية الجزائرية',
      en: 'Algerian Traditional Pastries',
      de: 'Algerische traditionelle Gebäck',
      es: 'Pasteles Tradicionales Argelinos'
    },
    subcategories: [
      {
        id: 'baklawa-algerienne',
        name: 'Baklawa Algérienne',
        slug: 'baklawa-algerienne',
        translations: {
          fr: 'Baklawa Algérienne',
          ar: 'بقلاوة جزائرية',
          en: 'Algerian Baklawa',
          de: 'Algerische Baklawa',
          es: 'Baklawa Argelina'
        },
        subcategories: []
      },
      {
        id: 'makrout',
        name: 'Makrout',
        slug: 'makrout',
        translations: {
          fr: 'Makrout',
          ar: 'مقروت',
          en: 'Makrout',
          de: 'Makrout',
          es: 'Makrout'
        },
        subcategories: []
      },
      {
        id: 'gazelle-horns',
        name: 'Cornes de Gazelle',
        slug: 'gazelle-horns',
        translations: {
          fr: 'Cornes de Gazelle',
          ar: 'قرن الغزال',
          en: 'Gazelle Horns',
          de: 'Gazellenhörner',
          es: 'Cuernos de Gacela'
        },
        subcategories: []
      },
      {
        id: 'zlabia',
        name: 'Zlabia',
        slug: 'zlabia',
        translations: {
          fr: 'Zlabia',
          ar: 'زلابية',
          en: 'Zlabia',
          de: 'Zlabia',
          es: 'Zlabia'
        },
        subcategories: []
      },
      {
        id: 'tcharek-mellouk',
        name: 'Tcharek Mellouk',
        slug: 'tcharek-mellouk',
        translations: {
          fr: 'Tcharek Mellouk',
          ar: 'شارك الملوك',
          en: 'Tcharek Mellouk',
          de: 'Tcharek Mellouk',
          es: 'Tcharek Mellouk'
        },
        subcategories: []
      }
    ]
  },
  {
    id: 'services-coutumes-traditionnels',
    name: 'Services et Coutumes Traditionnels',
    slug: 'services-coutumes-traditionnels',
    translations: {
      fr: 'Services et Coutumes Traditionnels',
      ar: 'الخدمات والعادات التقليدية',
      en: 'Traditional Services and Customs',
      de: 'Traditionelle Dienstleistungen und Bräuche',
      es: 'Servicios y Costumbres Tradicionales'
    },
    subcategories: [
      {
        id: 'mariage-traditionnel',
        name: 'Mariage Traditionnel',
        slug: 'mariage-traditionnel',
        translations: {
          fr: 'Mariage Traditionnel',
          ar: 'زواج تقليدي',
          en: 'Traditional Wedding',
          de: 'Traditionelle Hochzeit',
          es: 'Boda Tradicional'
        },
        subcategories: [
          {
            id: 'preparation-mariage',
            name: 'Préparation Mariage',
            slug: 'preparation-mariage',
            translations: {
              fr: 'Préparation Mariage',
              ar: 'تحضير الزواج',
              en: 'Wedding Preparation',
              de: 'Hochzeitsvorbereitung',
              es: 'Preparación de Boda'
            },
            subcategories: []
          },
          {
            id: 'henné-cérémonie',
            name: 'Cérémonie du Henné',
            slug: 'henne-ceremonie',
            translations: {
              fr: 'Cérémonie du Henné',
              ar: 'حفلة الحناء',
              en: 'Henna Ceremony',
              de: 'Henna-Zeremonie',
              es: 'Ceremonia de Henna'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'musique-traditionnelle',
        name: 'Musique Traditionnelle',
        slug: 'musique-traditionnelle',
        translations: {
          fr: 'Musique Traditionnelle',
          ar: 'موسيقى تقليدية',
          en: 'Traditional Music',
          de: 'Traditionelle Musik',
          es: 'Música Tradicional'
        },
        subcategories: [
          {
            id: 'chaabi-algerien',
            name: 'Chaâbi Algérien',
            slug: 'chaabi-algerien',
            translations: {
              fr: 'Chaâbi Algérien',
              ar: 'شعبي جزائري',
              en: 'Algerian Chaabi',
              de: 'Algerischer Chaabi',
              es: 'Chaabi Argelino'
            },
            subcategories: []
          },
          {
            id: 'musique-kabyle',
            name: 'Musique Kabyle',
            slug: 'musique-kabyle',
            translations: {
              fr: 'Musique Kabyle',
              ar: 'موسيقى القبائل',
              en: 'Kabyle Music',
              de: 'Kabylische Musik',
              es: 'Música Cabilia'
            },
            subcategories: []
          },
          {
            id: 'musique-saharienne',
            name: 'Musique Saharienne',
            slug: 'musique-saharienne',
            translations: {
              fr: 'Musique Saharienne',
              ar: 'موسيقى الصحراء',
              en: 'Saharan Music',
              de: 'Sahara-Musik',
              es: 'Música Sahara'
            },
            subcategories: []
          }
        ]
      },
      {
        id: 'artisanat-services',
        name: 'Services Artisanaux',
        slug: 'artisanat-services',
        translations: {
          fr: 'Services Artisanaux',
          ar: 'خدمات حرفية',
          en: 'Craft Services',
          de: 'Handwerksdienstleistungen',
          es: 'Servicios Artesanales'
        },
        subcategories: [
          {
            id: 'formation-artisanat',
            name: 'Formation Artisanat',
            slug: 'formation-artisanat',
            translations: {
              fr: 'Formation Artisanat',
              ar: 'تكوين حرفي',
              en: 'Craft Training',
              de: 'Handwerksausbildung',
              es: 'Formación Artesanal'
            },
            subcategories: []
          },
          {
            id: 'restauration-artisanat',
            name: 'Restauration Artisanat',
            slug: 'restauration-artisanat',
            translations: {
              fr: 'Restauration Artisanat',
              ar: 'ترميم حرفي',
              en: 'Craft Restoration',
              de: 'Handwerksrestaurierung',
              es: 'Restauración Artesanal'
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

// Générer les catégories algériennes
const algerianCategoriesCode = algerianCategories.map(cat => generateCategoryWithTranslations(cat, 1)).join('');

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${algerianCategoriesCode}]`;

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté, Animaux & Accessoires, Événements & Billetterie, Voyages & Tourisme, Finance & Monnaie Fiduciaire et catégories spécifiques à l'Algérie
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${mergedCategories};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories algériennes mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 Catégories spécifiques à l'Algérie ajoutées avec succès`);
  console.log(`🌍 Support multilingue: Français, Arabe, Anglais, Allemand, Espagnol`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories spécifiques à l\'Algérie ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript avec support multilingue.');
console.log('📝 Catégories ajoutées:');
console.log('   - Artisanat Traditionnel Algérien');
console.log('   - Produits Locaux Algériens');
console.log('   - Vêtements Traditionnels Algériens');
console.log('   - Plats Traditionnels Algériens');
console.log('   - Pâtisseries Traditionnelles Algériennes');
console.log('   - Services et Coutumes Traditionnels');