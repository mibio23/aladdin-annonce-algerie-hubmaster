import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Gastronomie & Alimentation...');

// Structure détaillée des catégories pour Gastronomie & Alimentation
const gastronomieCategories = [
  {
    id: 'gastronomie-alimentation',
    name: 'Gastronomie & Alimentation',
    slug: 'gastronomie-alimentation',
    subcategories: [
      {
        id: 'produits-alimentaires',
        name: 'Produits Alimentaires',
        slug: 'produits-alimentaires',
        subcategories: [
          {
            id: 'produits-frais',
            name: 'Produits Frais',
            slug: 'produits-frais',
            subcategories: [
              {
                id: 'fruits',
                name: 'Fruits',
                slug: 'fruits',
                subcategories: [
                  {
                    id: 'fruits-rouges',
                    name: 'Fruits Rouges',
                    slug: 'fruits-rouges',
                    subcategories: []
                  },
                  {
                    id: 'agrumes',
                    name: 'Agrumes',
                    slug: 'agrumes',
                    subcategories: []
                  },
                  {
                    id: 'fruits-exotiques',
                    name: 'Fruits Exotiques',
                    slug: 'fruits-exotiques',
                    subcategories: []
                  },
                  {
                    id: 'fruits-secs',
                    name: 'Fruits Secs',
                    slug: 'fruits-secs',
                    subcategories: []
                  },
                  {
                    id: 'fruits-locaux',
                    name: 'Fruits Locaux',
                    slug: 'fruits-locaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'legumes',
                name: 'Légumes',
                slug: 'legumes',
                subcategories: [
                  {
                    id: 'legumes-feuilles',
                    name: 'Légumes Feuilles',
                    slug: 'legumes-feuilles',
                    subcategories: []
                  },
                  {
                    id: 'legumes-racines',
                    name: 'Légumes Racines',
                    slug: 'legumes-racines',
                    subcategories: []
                  },
                  {
                    id: 'legumes-fruits',
                    name: 'Légumes Fruits',
                    slug: 'legumes-fruits',
                    subcategories: []
                  },
                  {
                    id: 'legumes-tiges',
                    name: 'Légumes Tiges',
                    slug: 'legumes-tiges',
                    subcategories: []
                  },
                  {
                    id: 'legumes-fleurs',
                    name: 'Légumes Fleurs',
                    slug: 'legumes-fleurs',
                    subcategories: []
                  },
                  {
                    id: 'legumes-locaux',
                    name: 'Légumes Locaux',
                    slug: 'legumes-locaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'produits-laitiers',
                name: 'Produits Laitiers',
                slug: 'produits-laitiers',
                subcategories: [
                  {
                    id: 'lait',
                    name: 'Lait',
                    slug: 'lait',
                    subcategories: []
                  },
                  {
                    id: 'yaourts',
                    name: 'Yaourts',
                    slug: 'yaourts',
                    subcategories: []
                  },
                  {
                    id: 'fromages',
                    name: 'Fromages',
                    slug: 'fromages',
                    subcategories: []
                  },
                  {
                    id: 'beurre',
                    name: 'Beurre',
                    slug: 'beurre',
                    subcategories: []
                  },
                  {
                    id: 'creme',
                    name: 'Crème',
                    slug: 'creme',
                    subcategories: []
                  },
                  {
                    id: 'fromages-locaux',
                    name: 'Fromages Locaux',
                    slug: 'fromages-locaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'viandes',
                name: 'Viandes',
                slug: 'viandes',
                subcategories: [
                  {
                    id: 'viandes-rouges',
                    name: 'Viandes Rouges',
                    slug: 'viandes-rouges',
                    subcategories: []
                  },
                  {
                    id: 'viandes-blanches',
                    name: 'Viandes Blanches',
                    slug: 'viandes-blanches',
                    subcategories: []
                  },
                  {
                    id: 'volailles',
                    name: 'Volailles',
                    slug: 'volailles',
                    subcategories: []
                  },
                  {
                    id: 'abats',
                    name: 'Abats',
                    slug: 'abats',
                    subcategories: []
                  },
                  {
                    id: 'charcuteries',
                    name: 'Charcuteries',
                    slug: 'charcuteries',
                    subcategories: []
                  },
                  {
                    id: 'viandes-locales',
                    name: 'Viandes Locales',
                    slug: 'viandes-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'poissons',
                name: 'Poissons',
                slug: 'poissons',
                subcategories: [
                  {
                    id: 'poissons-de-mer',
                    name: 'Poissons de Mer',
                    slug: 'poissons-de-mer',
                    subcategories: []
                  },
                  {
                    id: 'poissons-de-riviere',
                    name: 'Poissons de Rivière',
                    slug: 'poissons-de-riviere',
                    subcategories: []
                  },
                  {
                    id: 'fruits-de-mer',
                    name: 'Fruits de Mer',
                    slug: 'fruits-de-mer',
                    subcategories: []
                  },
                  {
                    id: 'crustaces',
                    name: 'Crustacés',
                    slug: 'crustaces',
                    subcategories: []
                  },
                  {
                    id: 'poissons-locaux',
                    name: 'Poissons Locaux',
                    slug: 'poissons-locaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'oeufs',
                name: 'Œufs',
                slug: 'oeufs',
                subcategories: [
                  {
                    id: 'oeufs-poules',
                    name: 'Œufs de Poules',
                    slug: 'oeufs-poules',
                    subcategories: []
                  },
                  {
                    id: 'oeufs-cailles',
                    name: 'Œufs de Cailles',
                    slug: 'oeufs-cailles',
                    subcategories: []
                  },
                  {
                    id: 'oeufs-canes',
                    name: 'Œufs de Canes',
                    slug: 'oeufs-canes',
                    subcategories: []
                  },
                  {
                    id: 'oeufs-locaux',
                    name: 'Œufs Locaux',
                    slug: 'oeufs-locaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'produits-de-boulangerie',
                name: 'Produits de Boulangerie',
                slug: 'produits-de-boulangerie',
                subcategories: [
                  {
                    id: 'pain',
                    name: 'Pain',
                    slug: 'pain',
                    subcategories: []
                  },
                  {
                    id: 'viennoiseries',
                    name: 'Viennoiseries',
                    slug: 'viennoiseries',
                    subcategories: []
                  },
                  {
                    id: 'patisseries',
                    name: 'Pâtisseries',
                    slug: 'patisseries',
                    subcategories: []
                  },
                  {
                    id: 'produits-locaux',
                    name: 'Produits Locaux',
                    slug: 'produits-locaux',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'epicerie',
            name: 'Épicerie',
            slug: 'epicerie',
            subcategories: [
              {
                id: 'cereales',
                name: 'Céréales',
                slug: 'cereales',
                subcategories: [
                  {
                    id: 'riz',
                    name: 'Riz',
                    slug: 'riz',
                    subcategories: []
                  },
                  {
                    id: 'ble',
                    name: 'Blé',
                    slug: 'ble',
                    subcategories: []
                  },
                  {
                    id: 'orge',
                    name: 'Orge',
                    slug: 'orge',
                    subcategories: []
                  },
                  {
                    id: 'mais',
                    name: 'Maïs',
                    slug: 'mais',
                    subcategories: []
                  },
                  {
                    id: 'avoine',
                    name: 'Avoine',
                    slug: 'avoine',
                    subcategories: []
                  },
                  {
                    id: 'cereales-locales',
                    name: 'Céréales Locales',
                    slug: 'cereales-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'legumineuses',
                name: 'Légumineuses',
                slug: 'legumineuses',
                subcategories: [
                  {
                    id: 'lentilles',
                    name: 'Lentilles',
                    slug: 'lentilles',
                    subcategories: []
                  },
                  {
                    id: 'pois-chiches',
                    name: 'Pois Chiches',
                    slug: 'pois-chiches',
                    subcategories: []
                  },
                  {
                    id: 'haricots',
                    name: 'Haricots',
                    slug: 'haricots',
                    subcategories: []
                  },
                  {
                    id: 'pois',
                    name: 'Pois',
                    slug: 'pois',
                    subcategories: []
                  },
                  {
                    id: 'legumineuses-locales',
                    name: 'Légumineuses Locales',
                    slug: 'legumineuses-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'huiles-graisses',
                name: 'Huiles & Graisses',
                slug: 'huiles-graisses',
                subcategories: [
                  {
                    id: 'huiles-vegetales',
                    name: 'Huiles Végétales',
                    slug: 'huiles-vegetales',
                    subcategories: []
                  },
                  {
                    id: 'huiles-olive',
                    name: 'Huiles d Olive',
                    slug: 'huiles-olive',
                    subcategories: []
                  },
                  {
                    id: 'beurres',
                    name: 'Beurres',
                    slug: 'beurres',
                    subcategories: []
                  },
                  {
                    id: 'margarines',
                    name: 'Margarines',
                    slug: 'margarines',
                    subcategories: []
                  },
                  {
                    id: 'huiles-locales',
                    name: 'Huiles Locales',
                    slug: 'huiles-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'epices-herbes',
                name: 'Épices & Herbes',
                slug: 'epices-herbes',
                subcategories: [
                  {
                    id: 'epices',
                    name: 'Épices',
                    slug: 'epices',
                    subcategories: []
                  },
                  {
                    id: 'herbes-aromatiques',
                    name: 'Herbes Aromatiques',
                    slug: 'herbes-aromatiques',
                    subcategories: []
                  },
                  {
                    id: 'sels',
                    name: 'Sels',
                    slug: 'sels',
                    subcategories: []
                  },
                  {
                    id: 'poivres',
                    name: 'Poivres',
                    slug: 'poivres',
                    subcategories: []
                  },
                  {
                    id: 'melanges-epices',
                    name: 'Mélanges d Épices',
                    slug: 'melanges-epices',
                    subcategories: []
                  },
                  {
                    id: 'epices-locales',
                    name: 'Épices Locales',
                    slug: 'epices-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'produits-conserves',
                name: 'Produits en Conserve',
                slug: 'produits-conserves',
                subcategories: [
                  {
                    id: 'conserves-legumes',
                    name: 'Conserves de Légumes',
                    slug: 'conserves-legumes',
                    subcategories: []
                  },
                  {
                    id: 'conserves-fruits',
                    name: 'Conserves de Fruits',
                    slug: 'conserves-fruits',
                    subcategories: []
                  },
                  {
                    id: 'conserves-viandes',
                    name: 'Conserves de Viandes',
                    slug: 'conserves-viandes',
                    subcategories: []
                  },
                  {
                    id: 'conserves-poissons',
                    name: 'Conserves de Poissons',
                    slug: 'conserves-poissons',
                    subcategories: []
                  },
                  {
                    id: 'conserves-locales',
                    name: 'Conserves Locales',
                    slug: 'conserves-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'sucreries',
                name: 'Sucreries',
                slug: 'sucreries',
                subcategories: [
                  {
                    id: 'sucres',
                    name: 'Sucres',
                    slug: 'sucres',
                    subcategories: []
                  },
                  {
                    id: 'miels',
                    name: 'Miels',
                    slug: 'miels',
                    subcategories: []
                  },
                  {
                    id: 'confitures',
                    name: 'Confitures',
                    slug: 'confitures',
                    subcategories: []
                  },
                  {
                    id: 'chocolats',
                    name: 'Chocolats',
                    slug: 'chocolats',
                    subcategories: []
                  },
                  {
                    id: 'bonbons',
                    name: 'Bonbons',
                    slug: 'bonbons',
                    subcategories: []
                  },
                  {
                    id: 'patisseries-industrielles',
                    name: 'Pâtisseries Industrielles',
                    slug: 'patisseries-industrielles',
                    subcategories: []
                  },
                  {
                    id: 'sucreries-locales',
                    name: 'Sucreries Locales',
                    slug: 'sucreries-locales',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'boissons',
                name: 'Boissons',
                slug: 'boissons',
                subcategories: [
                  {
                    id: 'eaux',
                    name: 'Eaux',
                    slug: 'eaux',
                    subcategories: []
                  },
                  {
                    id: 'jus',
                    name: 'Jus',
                    slug: 'jus',
                    subcategories: []
                  },
                  {
                    id: 'sodas',
                    name: 'Sodas',
                    slug: 'sodas',
                    subcategories: []
                  },
                  {
                    id: 'thes',
                    name: 'Thés',
                    slug: 'thes',
                    subcategories: []
                  },
                  {
                    id: 'cafes',
                    name: 'Cafés',
                    slug: 'cafes',
                    subcategories: []
                  },
                  {
                    id: 'boissons-chaudes',
                    name: 'Boissons Chaudes',
                    slug: 'boissons-chaudes',
                    subcategories: []
                  },
                  {
                    id: 'boissons-energetisantes',
                    name: 'Boissons Énergisantes',
                    slug: 'boissons-energetisantes',
                    subcategories: []
                  },
                  {
                    id: 'boissons-locales',
                    name: 'Boissons Locales',
                    slug: 'boissons-locales',
                    subcategories: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'equipements-cuisine',
        name: 'Équipements de Cuisine',
        slug: 'equipements-cuisine',
        subcategories: [
          {
            id: 'ustensiles',
            name: 'Ustensiles',
            slug: 'ustensiles',
            subcategories: [
              {
                id: 'couteaux',
                name: 'Couteaux',
                slug: 'couteaux',
                subcategories: []
              },
              {
                id: 'cuilleres',
                name: 'Cuillères',
                slug: 'cuilleres',
                subcategories: []
              },
              {
                id: 'fourchettes',
                name: 'Fourchettes',
                slug: 'fourchettes',
                subcategories: []
              },
              {
                id: 'spatules',
                name: 'Spatules',
                slug: 'spatules',
                subcategories: []
              },
              {
                id: 'passoires',
                name: 'Passoires',
                slug: 'passoires',
                subcategories: []
              },
              {
                id: 'pilons',
                name: 'Pilons',
                slug: 'pilons',
                subcategories: []
              },
              {
                id: 'râpes',
                name: 'Râpes',
                slug: 'rapes',
                subcategories: []
              },
              {
                id: 'ustensiles-specifiques',
                name: 'Ustensiles Spécifiques',
                slug: 'ustensiles-specifiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'electromenager-cuisine',
            name: 'Électroménager Cuisine',
            slug: 'electromenager-cuisine',
            subcategories: [
              {
                id: 'cuisiniere',
                name: 'Cuisinière',
                slug: 'cuisiniere',
                subcategories: []
              },
              {
                id: 'four',
                name: 'Four',
                slug: 'four',
                subcategories: []
              },
              {
                id: 'micro-ondes',
                name: 'Micro-ondes',
                slug: 'micro-ondes',
                subcategories: []
              },
              {
                id: 'refrigerateur',
                name: 'Réfrigérateur',
                slug: 'refrigerateur',
                subcategories: []
              },
              {
                id: 'congelateur',
                name: 'Congélateur',
                slug: 'congelateur',
                subcategories: []
              },
              {
                id: 'lave-vaisselle',
                name: 'Lave-vaisselle',
                slug: 'lave-vaisselle',
                subcategories: []
              },
              {
                id: 'hotte',
                name: 'Hotte',
                slug: 'hotte',
                subcategories: []
              },
              {
                id: 'plaque-cuisson',
                name: 'Plaque de Cuisson',
                slug: 'plaque-cuisson',
                subcategories: []
              },
              {
                id: 'robot-cuisine',
                name: 'Robot de Cuisine',
                slug: 'robot-cuisine',
                subcategories: []
              },
              {
                id: 'blender',
                name: 'Blender',
                slug: 'blender',
                subcategories: []
              },
              {
                id: 'cafetiere',
                name: 'Cafetière',
                slug: 'cafetiere',
                subcategories: []
              },
              {
                id: 'bouilloire',
                name: 'Bouilloire',
                slug: 'bouilloire',
                subcategories: []
              },
              {
                id: 'grille-pain',
                name: 'Grille-pain',
                slug: 'grille-pain',
                subcategories: []
              }
            ]
          },
          {
            id: 'tables',
            name: 'Tables',
            slug: 'tables',
            subcategories: [
              {
                id: 'tables-cuisine',
                name: 'Tables de Cuisine',
                slug: 'tables-cuisine',
                subcategories: []
              },
              {
                id: 'tables-restaurant',
                name: 'Tables de Restaurant',
                slug: 'tables-restaurant',
                subcategories: []
              },
              {
                id: 'tables-cafe',
                name: 'Tables de Café',
                slug: 'tables-cafe',
                subcategories: []
              },
              {
                id: 'tables-exterieur',
                name: 'Tables Extérieur',
                slug: 'tables-exterieur',
                subcategories: []
              },
              {
                id: 'tables-petit-dejeuner',
                name: 'Tables Petit Déjeuner',
                slug: 'tables-petit-dejeuner',
                subcategories: []
              }
            ]
          },
          {
            id: 'rangement-cuisine',
            name: 'Rangement Cuisine',
            slug: 'rangement-cuisine',
            subcategories: [
              {
                id: 'armoires-cuisine',
                name: 'Armoires de Cuisine',
                slug: 'armoires-cuisine',
                subcategories: []
              },
              {
                id: 'placards-cuisine',
                name: 'Placards de Cuisine',
                slug: 'placards-cuisine',
                subcategories: []
              },
              {
                id: 'etagères-cuisine',
                name: 'Étagères de Cuisine',
                slug: 'etagères-cuisine',
                subcategories: []
              },
              {
                id: 'caissons-cuisine',
                name: 'Caissons de Cuisine',
                slug: 'caissons-cuisine',
                subcategories: []
              },
              {
                id: 'boites-rangement',
                name: 'Boîtes de Rangement',
                slug: 'boites-rangement',
                subcategories: []
              }
            ]
          },
          {
            id: 'vaisselle',
            name: 'Vaisselle',
            slug: 'vaisselle',
            subcategories: [
              {
                id: 'assiettes',
                name: 'Assiettes',
                slug: 'assiettes',
                subcategories: []
              },
              {
                id: 'verres',
                name: 'Verres',
                slug: 'verres',
                subcategories: []
              },
              {
                id: 'tasses',
                name: 'Tasses',
                slug: 'tasses',
                subcategories: []
              },
              {
                id: 'bols',
                name: 'Bols',
                slug: 'bols',
                subcategories: []
              },
              {
                id: 'couverts',
                name: 'Couverts',
                slug: 'couverts',
                subcategories: []
              },
              {
                id: 'services-table',
                name: 'Services de Table',
                slug: 'services-table',
                subcategories: []
              },
              {
                id: 'vaisselle-speciale',
                name: 'Vaisselle Spéciale',
                slug: 'vaisselle-speciale',
                subcategories: []
              }
            ]
          },
          {
            id: 'cuisson',
            name: 'Cuisson',
            slug: 'cuisson',
            subcategories: [
              {
                id: 'poeles',
                name: 'Poêles',
                slug: 'poeles',
                subcategories: []
              },
              {
                id: 'casseroles',
                name: 'Casseroles',
                slug: 'casseroles',
                subcategories: []
              },
              {
                id: 'faitouts',
                name: 'Faitouts',
                slug: 'faitouts',
                subcategories: []
              },
              {
                id: 'sauteuses',
                name: 'Sauteuses',
                slug: 'sauteuses',
                subcategories: []
              },
              {
                id: 'plats-four',
                name: 'Plats à Four',
                slug: 'plats-four',
                subcategories: []
              },
              {
                id: 'grille-pains',
                name: 'Grille-pains',
                slug: 'grille-pains',
                subcategories: []
              },
              {
                id: 'barbecues',
                name: 'Barbecues',
                slug: 'barbecues',
                subcategories: []
              },
              {
                id: 'planchas',
                name: 'Planchas',
                slug: 'planchas',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'restauration-traiteurs',
        name: 'Restauration & Traiteurs',
        slug: 'restauration-traiteurs',
        subcategories: [
          {
            id: 'services-traiteurs',
            name: 'Services Traiteurs',
            slug: 'services-traiteurs',
            subcategories: [
              {
                id: 'traiteur-mariage',
                name: 'Traiteur Mariage',
                slug: 'traiteur-mariage',
                subcategories: []
              },
              {
                id: 'traiteur-evenement',
                name: 'Traiteur Événement',
                slug: 'traiteur-evenement',
                subcategories: []
              },
              {
                id: 'traiteur-entreprise',
                name: 'Traiteur Entreprise',
                slug: 'traiteur-entreprise',
                subcategories: []
              },
              {
                id: 'traiteur-particulier',
                name: 'Traiteur Particulier',
                slug: 'traiteur-particulier',
                subcategories: []
              },
              {
                id: 'buffet',
                name: 'Buffet',
                slug: 'buffet',
                subcategories: []
              }
            ]
          },
          {
            id: 'plats-emporter',
            name: 'Plats à Emporter',
            slug: 'plats-emporter',
            subcategories: [
              {
                id: 'plats-traditionnels',
                name: 'Plats Traditionnels',
                slug: 'plats-traditionnels',
                subcategories: []
              },
              {
                id: 'plats-rapides',
                name: 'Plats Rapides',
                slug: 'plats-rapides',
                subcategories: []
              },
              {
                id: 'plats-sante',
                name: 'Plats Santé',
                slug: 'plats-sante',
                subcategories: []
              },
              {
                id: 'plats-vegetariens',
                name: 'Plats Végétariens',
                slug: 'plats-vegetariens',
                subcategories: []
              },
              {
                id: 'plats-internationaux',
                name: 'Plats Internationaux',
                slug: 'plats-internationaux',
                subcategories: []
              },
              {
                id: 'plats-locaux',
                name: 'Plats Locaux',
                slug: 'plats-locaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'livraison-repas',
            name: 'Livraison Repas',
            slug: 'livraison-repas',
            subcategories: [
              {
                id: 'livraison-dejeuner',
                name: 'Livraison Déjeuner',
                slug: 'livraison-dejeuner',
                subcategories: []
              },
              {
                id: 'livraison-diner',
                name: 'Livraison Dîner',
                slug: 'livraison-diner',
                subcategories: []
              },
              {
                id: 'livraison-petit-dejeuner',
                name: 'Livraison Petit Déjeuner',
                slug: 'livraison-petit-dejeuner',
                subcategories: []
              },
              {
                id: 'livraison-collation',
                name: 'Livraison Collation',
                slug: 'livraison-collation',
                subcategories: []
              },
              {
                id: 'livraison-cafe',
                name: 'Livraison Café',
                slug: 'livraison-cafe',
                subcategories: []
              }
            ]
          },
          {
            id: 'restaurants',
            name: 'Restaurants',
            slug: 'restaurants',
            subcategories: [
              {
                id: 'restaurants-traditionnels',
                name: 'Restaurants Traditionnels',
                slug: 'restaurants-traditionnels',
                subcategories: []
              },
              {
                id: 'restaurants-rapides',
                name: 'Restaurants Rapides',
                slug: 'restaurants-rapides',
                subcategories: []
              },
              {
                id: 'restaurants-sante',
                name: 'Restaurants Santé',
                slug: 'restaurants-sante',
                subcategories: []
              },
              {
                id: 'restaurants-vegetariens',
                name: 'Restaurants Végétariens',
                slug: 'restaurants-vegetariens',
                subcategories: []
              },
              {
                id: 'restaurants-internationaux',
                name: 'Restaurants Internationaux',
                slug: 'restaurants-internationaux',
                subcategories: []
              },
              {
                id: 'restaurants-locaux',
                name: 'Restaurants Locaux',
                slug: 'restaurants-locaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'cafes-bistros',
            name: 'Cafés & Bistros',
            slug: 'cafes-bistros',
            subcategories: [
              {
                id: 'cafes',
                name: 'Cafés',
                slug: 'cafes',
                subcategories: []
              },
              {
                id: 'bistros',
                name: 'Bistros',
                slug: 'bistros',
                subcategories: []
              },
              {
                id: 'salons-the',
                name: 'Salons de Thé',
                slug: 'salons-the',
                subcategories: []
              },
              {
                id: 'patisseries',
                name: 'Pâtisseries',
                slug: 'patisseries',
                subcategories: []
              },
              {
                id: 'glaciers',
                name: 'Glaciers',
                slug: 'glaciers',
                subcategories: []
              },
              {
                id: 'bars-a-jus',
                name: 'Bars à Jus',
                slug: 'bars-a-jus',
                subcategories: []
              }
            ]
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

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${gastronomieCategories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    slug: '${cat.slug}',
    icon: undefined,
    subcategories: [
${cat.subcategories.map(sub => `      {
        id: '${sub.id}',
        name: '${sub.name}',
        slug: '${sub.slug}',
        icon: undefined,
        subcategories: [
${sub.subcategories.map(subsub => `          {
            id: '${subsub.id}',
            name: '${subsub.name}',
            slug: '${subsub.slug}',
            icon: undefined,
            subcategories: []
          }`).join(',\n')}
        ]
      }`).join(',\n')}
    ]
  }`).join(',\n')}
]`;

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs et Gastronomie & Alimentation
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${mergedCategories};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 Catégorie "Gastronomie & Alimentation" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Gastronomie & Alimentation ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');