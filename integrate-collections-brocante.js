import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire actuel pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const collectionsFilePath = path.join(__dirname, 'src/data/categories/extended/collectionsbrocante.ts');

// Fonction pour générer le contenu du fichier
function generateCollectionsFile() {
  const content = `// Catégorie: Collections & Brocante
// ID: collections-brocante
// Sous-catégories: 7
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const collectionsbrocante: MenuCategory = {
  id: 'collections-brocante',
  name: 'Collections & Brocante',
  slug: 'collections-brocante',
  icon: undefined, // À définir avec createIcon()
  translations: {
    "fr": "Collections & Brocante",
    "ar": "المجموعات والأشياء المستعملة",
    "en": "Collections & Second-hand",
    "de": "Sammlungen & Gebrauchtwaren",
    "es": "Colecciones y Segunda Mano"
  },
  subcategories: [
    {
      id: 'timbres-poste',
      name: 'Timbres & Poste',
      slug: 'timbres-poste',
      icon: undefined,
      translations: {
        "fr": "Timbres & Poste",
        "ar": "الطوابع البريد",
        "en": "Stamps & Postal",
        "de": "Briefmarken & Post",
        "es": "Sellos y Correo"
      },
      subcategories: [
        {
          id: 'timbres-algerie',
          name: 'Timbres d\'Algérie',
          slug: 'timbres-algerie',
          icon: undefined,
          translations: {
            "fr": "Timbres d'Algérie",
            "ar": "طوابع الجزائر",
            "en": "Algerian Stamps",
            "de": "Algerische Briefmarken",
            "es": "Sellos de Argelia"
          },
          subcategories: []
        },
        {
          id: 'timbres-monde',
          name: 'Timbres du Monde',
          slug: 'timbres-monde',
          icon: undefined,
          translations: {
            "fr": "Timbres du Monde",
            "ar": "طوابع العالم",
            "en": "World Stamps",
            "de": "Weltbriefmarken",
            "es": "Sellos del Mundo"
          },
          subcategories: []
        },
        {
          id: 'cartes-postales',
          name: 'Cartes Postales',
          slug: 'cartes-postales',
          icon: undefined,
          translations: {
            "fr": "Cartes Postales",
            "ar": "بطاقات بريدية",
            "en": "Postcards",
            "de": "Postkarten",
            "es": "Tarjetas Postales"
          },
          subcategories: []
        },
        {
          id: 'enveloppes-lettres',
          name: 'Enveloppes & Lettres Anciennes',
          slug: 'enveloppes-lettres',
          icon: undefined,
          translations: {
            "fr": "Enveloppes & Lettres Anciennes",
            "ar": "مغلفات ورسائل قديمة",
            "en": "Old Envelopes & Letters",
            "de": "Alte Briefumschläge & Briefe",
            "es": "Sobres y Cartas Antiguas"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'livres-rare',
      name: 'Livres Rares & Collection',
      slug: 'livres-rare',
      icon: undefined,
      translations: {
        "fr": "Livres Rares & Collection",
        "ar": "كتب نادرة ومجموعات",
        "en": "Rare Books & Collection",
        "de": "Seltene Bücher & Sammlung",
        "es": "Libros Raros y Colección"
      },
      subcategories: [
        {
          id: 'livres-anciens',
          name: 'Livres Anciens',
          slug: 'livres-anciens',
          icon: undefined,
          translations: {
            "fr": "Livres Anciens",
            "ar": "كتب قديمة",
            "en": "Old Books",
            "de": "Alte Bücher",
            "es": "Libros Antiguos"
          },
          subcategories: []
        },
        {
          id: 'livres-de-uxe',
          name: 'Livres de Luxe',
          slug: 'livres-de-uxe',
          icon: undefined,
          translations: {
            "fr": "Livres de Luxe",
            "ar": "كتب فاخرة",
            "en": "Luxury Books",
            "de": "Luxusbücher",
            "es": "Libros de Lujo"
          },
          subcategories: []
        },
        {
          id: 'manuscrits',
          name: 'Manuscrits',
          slug: 'manuscrits',
          icon: undefined,
          translations: {
            "fr": "Manuscrits",
            "ar": "مخطوطات",
            "en": "Manuscripts",
            "de": "Manuskripte",
            "es": "Manuscritos"
          },
          subcategories: []
        },
        {
          id: 'editions-limitees',
          name: 'Éditions Limitées',
          slug: 'editions-limitees',
          icon: undefined,
          translations: {
            "fr": "Éditions Limitées",
            "ar": "طبعات محدودة",
            "en": "Limited Editions",
            "de": "Limitierte Auflagen",
            "es": "Ediciones Limitadas"
          },
          subcategories: []
        },
        {
          id: 'livres-signes',
          name: 'Livres Signés',
          slug: 'livres-signes',
          icon: undefined,
          translations: {
            "fr": "Livres Signés",
            "ar": "كتب موقعة",
            "en": "Signed Books",
            "de": "Signierte Bücher",
            "es": "Libros Firmados"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'pieces-monnaie',
      name: 'Pièces de Monnaie & Médailles',
      slug: 'pieces-monnaie',
      icon: undefined,
      translations: {
        "fr": "Pièces de Monnaie & Médailles",
        "ar": "قطع نقدية وميداليات",
        "en": "Coins & Medals",
        "de": "Münzen & Medaillen",
        "es": "Monedas y Medallas"
      },
      subcategories: [
        {
          id: 'pieces-algerie',
          name: 'Pièces Algériennes',
          slug: 'pieces-algerie',
          icon: undefined,
          translations: {
            "fr": "Pièces Algériennes",
            "ar": "قطع جزائرية",
            "en": "Algerian Coins",
            "de": "Algerische Münzen",
            "es": "Monedas Argelinas"
          },
          subcategories: []
        },
        {
          id: 'pieces-monde',
          name: 'Pièces du Monde',
          slug: 'pieces-monde',
          icon: undefined,
          translations: {
            "fr": "Pièces du Monde",
            "ar": "قطع العالم",
            "en": "World Coins",
            "de": "Weltmünzen",
            "es": "Monedas del Mundo"
          },
          subcategories: []
        },
        {
          id: 'billets-banque',
          name: 'Billets de Banque Anciens',
          slug: 'billets-banque',
          icon: undefined,
          translations: {
            "fr": "Billets de Banque Anciens",
            "ar": "أوراق نقدية بنكية قديمة",
            "en": "Old Banknotes",
            "de": "Alte Banknoten",
            "es": "Billetes de Banco Antiguos"
          },
          subcategories: []
        },
        {
          id: 'medailles',
          name: 'Médailles',
          slug: 'medailles',
          icon: undefined,
          translations: {
            "fr": "Médailles",
            "ar": "ميداليات",
            "en": "Medals",
            "de": "Medaillen",
            "es": "Medallas"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'objets-vintage',
      name: 'Objets Vintage & Rétro',
      slug: 'objets-vintage',
      icon: undefined,
      translations: {
        "fr": "Objets Vintage & Rétro",
        "ar": "أشياء كلاسيكية وقديمة",
        "en": "Vintage & Retro Items",
        "de": "Vintage & Retro Artikel",
        "es": "Artículos Vintage y Retro"
      },
      subcategories: [
        {
          id: 'jouets-anciens',
          name: 'Jouets Anciens',
          slug: 'jouets-anciens',
          icon: undefined,
          translations: {
            "fr": "Jouets Anciens",
            "ar": "ألعاب قديمة",
            "en": "Old Toys",
            "de": "Alte Spielzeuge",
            "es": "Juguetes Antiguos"
          },
          subcategories: []
        },
        {
          id: 'electronique-retro',
          name: 'Électronique Rétro',
          slug: 'electronique-retro',
          icon: undefined,
          translations: {
            "fr": "Électronique Rétro",
            "ar": "إلكترونيات قديمة",
            "en": "Retro Electronics",
            "de": "Retro-Elektronik",
            "es": "Electrónica Retro"
          },
          subcategories: []
        },
        {
          id: 'mobilier-vintage',
          name: 'Mobilier Vintage',
          slug: 'mobilier-vintage',
          icon: undefined,
          translations: {
            "fr": "Mobilier Vintage",
            "ar": "أثاث كلاسيكي",
            "en": "Vintage Furniture",
            "de": "Vintage Möbel",
            "es": "Muebles Vintage"
          },
          subcategories: []
        },
        {
          id: 'vetements-vintage',
          name: 'Vêtements Vintage',
          slug: 'vetements-vintage',
          icon: undefined,
          translations: {
            "fr": "Vêtements Vintage",
            "ar": "ملابس كلاسيكية",
            "en": "Vintage Clothing",
            "de": "Vintage Kleidung",
            "es": "Ropa Vintage"
          },
          subcategories: []
        },
        {
          id: 'accessoires-mode',
          name: 'Accessoires de Mode Rétro',
          slug: 'accessoires-mode',
          icon: undefined,
          translations: {
            "fr": "Accessoires de Mode Rétro",
            "ar": "إكسسوارات أزياء كلاسيكية",
            "en": "Retro Fashion Accessories",
            "de": "Retro Modezubehör",
            "es": "Accesorios de Moda Retro"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'art-artisanat',
      name: 'Art & Artisanat',
      slug: 'art-artisanat',
      icon: undefined,
      translations: {
        "fr": "Art & Artisanat",
        "ar": "فن وحرف يدوية",
        "en": "Art & Crafts",
        "de": "Kunst & Handwerk",
        "es": "Arte y Artesanía"
      },
      subcategories: [
        {
          id: 'tableaux-peinture',
          name: 'Tableaux & Peinture',
          slug: 'tableaux-peinture',
          icon: undefined,
          translations: {
            "fr": "Tableaux & Peinture",
            "ar": "لوحات ورسومات",
            "en": "Paintings & Art",
            "de": "Gemälde & Kunst",
            "es": "Cuadros y Pintura"
          },
          subcategories: []
        },
        {
          id: 'sculptures',
          name: 'Sculptures',
          slug: 'sculptures',
          icon: undefined,
          translations: {
            "fr": "Sculptures",
            "ar": "منحوتات",
            "en": "Sculptures",
            "de": "Skulpturen",
            "es": "Esculturas"
          },
          subcategories: []
        },
        {
          id: 'poterie-ceramique',
          name: 'Poterie & Céramique',
          slug: 'poterie-ceramique',
          icon: undefined,
          translations: {
            "fr": "Poterie & Céramique",
            "ar": "فخار وخزف",
            "en": "Pottery & Ceramics",
            "de": "Töpferei & Keramik",
            "es": "Alfarería y Cerámica"
          },
          subcategories: []
        },
        {
          id: 'bijoux-artisanat',
          name: 'Bijoux & Artisanat',
          slug: 'bijoux-artisanat',
          icon: undefined,
          translations: {
            "fr": "Bijoux & Artisanat",
            "ar": "مجوهرات وحرف يدوية",
            "en": "Jewelry & Crafts",
            "de": "Schmuck & Handwerk",
            "es": "Joyas y Artesanía"
          },
          subcategories: []
        },
        {
          id: 'textiles-artisanat',
          name: 'Textiles & Artisanat',
          slug: 'textiles-artisanat',
          icon: undefined,
          translations: {
            "fr": "Textiles & Artisanat",
            "ar": "منسوجات وحرف يدوية",
            "en": "Textiles & Crafts",
            "de": "Textilien & Handwerk",
            "es": "Textiles y Artesanía"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'antiquites',
      name: 'Antiquités',
      slug: 'antiquites',
      icon: undefined,
      translations: {
        "fr": "Antiquités",
        "ar": "التحف القديمة",
        "en": "Antiques",
        "de": "Antiquitäten",
        "es": "Antigüedades"
      },
      subcategories: [
        {
          id: 'mobilier-antique',
          name: 'Mobilier Antique',
          slug: 'mobilier-antique',
          icon: undefined,
          translations: {
            "fr": "Mobilier Antique",
            "ar": "أثاث عتيق",
            "en": "Antique Furniture",
            "de": "Antike Möbel",
            "es": "Muebles Antiguos"
          },
          subcategories: []
        },
        {
          id: 'horlogerie-antique',
          name: 'Horlogerie Antique',
          slug: 'horlogerie-antique',
          icon: undefined,
          translations: {
            "fr": "Horlogerie Antique",
            "ar": "ساعات عتيقة",
            "en": "Antique Clocks",
            "de": "Antike Uhren",
            "es": "Relojería Antigua"
          },
          subcategories: []
        },
        {
          id: 'vaisselle-antique',
          name: 'Vaisselle Antique',
          slug: 'vaisselle-antique',
          icon: undefined,
          translations: {
            "fr": "Vaisselle Antique",
            "ar": "أواني طعام عتيقة",
            "en": "Antique Tableware",
            "de": "Antikes Geschirr",
            "es": "Vajilla Antigua"
          },
          subcategories: []
        },
        {
          id: 'objets-decoratifs',
          name: 'Objets Décoratifs Anciens',
          slug: 'objets-decoratifs',
          icon: undefined,
          translations: {
            "fr": "Objets Décoratifs Anciens",
            "ar": "أشياء زخرفية قديمة",
            "en": "Old Decorative Items",
            "de": "Alte Dekorationsartikel",
            "es": "Artículos Decorativos Antiguos"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'collections-specialisees',
      name: 'Collections Spécialisées',
      slug: 'collections-specialisees',
      icon: undefined,
      translations: {
        "fr": "Collections Spécialisées",
        "ar": "مجموعات متخصصة",
        "en": "Specialized Collections",
        "de": "Spezialisierte Sammlungen",
        "es": "Colecciones Especializadas"
      },
      subcategories: [
        {
          id: 'instruments-musique-collection',
          name: 'Instruments de Musique',
          slug: 'instruments-musique-collection',
          icon: undefined,
          translations: {
            "fr": "Instruments de Musique",
            "ar": "آلات موسيقية",
            "en": "Musical Instruments",
            "de": "Musikinstrumente",
            "es": "Instrumentos Musicales"
          },
          subcategories: []
        },
        {
          id: 'armes-blanches',
          name: 'Armes Blanches',
          slug: 'armes-blanches',
          icon: undefined,
          translations: {
            "fr": "Armes Blanches",
            "ar": "أسلحة بيضاء",
            "en": "White Weapons",
            "de": "Weiße Waffen",
            "es": "Armas Blancas"
          },
          subcategories: []
        },
        {
          id: 'voitures-miniatures',
          name: 'Voitures Miniatures',
          slug: 'voitures-miniatures',
          icon: undefined,
          translations: {
            "fr": "Voitures Miniatures",
            "ar": "سيارات مصغرة",
            "en": "Miniature Cars",
            "de": "Miniaturautos",
            "es": "Coches en Miniatura"
          },
          subcategories: []
        },
        {
          id: 'figurines-collection',
          name: 'Figurines & Statuettes',
          slug: 'figurines-collection',
          icon: undefined,
          translations: {
            "fr": "Figurines & Statuettes",
            "ar": "شخصيات وتماثيل صغيرة",
            "en": "Figurines & Statuettes",
            "de": "Figuren & Statuetten",
            "es": "Figuras y Estatuillas"
          },
          subcategories: []
        },
        {
          id: 'cartes-telephoniques',
          name: 'Cartes Téléphoniques',
          slug: 'cartes-telephoniques',
          icon: undefined,
          translations: {
            "fr": "Cartes Téléphoniques",
            "ar": "بطاقات هاتفية",
            "en": "Phone Cards",
            "de": "Telefonkarten",
            "es": "Tarjetas Telefónicas"
          },
          subcategories: []
        }
      ]
    }
  ]
};`;

  return content;
}

// Fonction principale pour intégrer les collections
function integrateCollections() {
  console.log('🔧 Intégration de la catégorie "Collections & Brocante"...');
  
  try {
    // Générer le contenu du fichier
    const content = generateCollectionsFile();
    
    // Écrire le contenu dans le fichier
    fs.writeFileSync(collectionsFilePath, content, 'utf8');
    
    console.log('✅ Fichier collectionsbrocante.ts mis à jour avec succès');
    console.log('📊 Sous-catégories intégrées: 7');
    console.log('🌍 Langues supportées: 5 (FR, AR, EN, DE, ES)');
    console.log('\n🎉 INTÉGRATION RÉUSSIE !');
    
    return true;
  } catch (error) {
    console.error('❌ Erreur lors de l\'intégration:', error.message);
    return false;
  }
}

// Exécuter l'intégration
const success = integrateCollections();

// Sauvegarder les résultats
const results = {
  timestamp: new Date().toISOString(),
  success: success,
  summary: success ? 'Intégration réussie' : 'Intégration échouée',
  categories: {
    main: 1,
    subcategories: 7,
    total: 8
  }
};

fs.writeFileSync(
  path.join(__dirname, 'integrate-collections-brocante-results.json'),
  JSON.stringify(results, null, 2)
);

console.log(`\n📄 Résultats de l'intégration sauvegardés dans: integrate-collections-brocante-results.json`);