import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Éducation & Loisirs...');

// Structure détaillée des catégories pour Éducation & Loisirs
const educationCategories = [
  {
    id: 'education-loisirs',
    name: 'Éducation & Loisirs',
    slug: 'education-loisirs',
    subcategories: [
      {
        id: 'livres-papeterie',
        name: 'Livres & Papeterie',
        slug: 'livres-papeterie',
        subcategories: [
          {
            id: 'livres',
            name: 'Livres',
            slug: 'livres',
            subcategories: [
              {
                id: 'livres-fiction',
                name: 'Livres Fiction',
                slug: 'livres-fiction',
                subcategories: [
                  {
                    id: 'livres-romans',
                    name: 'Romans',
                    slug: 'livres-romans',
                    subcategories: []
                  },
                  {
                    id: 'livres-policier',
                    name: 'Romans Policiers',
                    slug: 'livres-policier',
                    subcategories: []
                  },
                  {
                    id: 'livres-science-fiction',
                    name: 'Science-Fiction',
                    slug: 'livres-science-fiction',
                    subcategories: []
                  },
                  {
                    id: 'livres-fantaisie',
                    name: 'Fantaisie',
                    slug: 'livres-fantaisie',
                    subcategories: []
                  },
                  {
                    id: 'livres-romance',
                    name: 'Romance',
                    slug: 'livres-romance',
                    subcategories: []
                  },
                  {
                    id: 'livres-horreur',
                    name: 'Horreur',
                    slug: 'livres-horreur',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'livres-non-fiction',
                name: 'Livres Non-Fiction',
                slug: 'livres-non-fiction',
                subcategories: [
                  {
                    id: 'livres-histoire',
                    name: 'Histoire',
                    slug: 'livres-histoire',
                    subcategories: []
                  },
                  {
                    id: 'livres-biographie',
                    name: 'Biographie',
                    slug: 'livres-biographie',
                    subcategories: []
                  },
                  {
                    id: 'livres-science',
                    name: 'Science',
                    slug: 'livres-science',
                    subcategories: []
                  },
                  {
                    id: 'livres-entreprise',
                    name: 'Entreprise',
                    slug: 'livres-entreprise',
                    subcategories: []
                  },
                  {
                    id: 'livres-sante',
                    name: 'Santé',
                    slug: 'livres-sante',
                    subcategories: []
                  },
                  {
                    id: 'livres-psychologie',
                    name: 'Psychologie',
                    slug: 'livres-psychologie',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'livres-enfants',
                name: 'Livres Enfants',
                slug: 'livres-enfants',
                subcategories: [
                  {
                    id: 'livres-bebes',
                    name: 'Livres Bébés',
                    slug: 'livres-bebes',
                    subcategories: []
                  },
                  {
                    id: 'livres-primaires',
                    name: 'Livres Primaires',
                    slug: 'livres-primaires',
                    subcategories: []
                  },
                  {
                    id: 'livres-ados',
                    name: 'Livres Ados',
                    slug: 'livres-ados',
                    subcategories: []
                  },
                  {
                    id: 'albums-jeunesse',
                    name: 'Albums Jeunesse',
                    slug: 'albums-jeunesse',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'livres-scolaires',
                name: 'Livres Scolaires',
                slug: 'livres-scolaires',
                subcategories: [
                  {
                    id: 'manuels-scolaires',
                    name: 'Manuels Scolaires',
                    slug: 'manuels-scolaires',
                    subcategories: []
                  },
                  {
                    id: 'livres-parascolaires',
                    name: 'Livres Parascolaires',
                    slug: 'livres-parascolaires',
                    subcategories: []
                  },
                  {
                    id: 'cahiers-exercices',
                    name: 'Cahiers d Exercices',
                    slug: 'cahiers-exercices',
                    subcategories: []
                  },
                  {
                    id: 'dictionnaires',
                    name: 'Dictionnaires',
                    slug: 'dictionnaires',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'livres-religion',
                name: 'Livres Religion',
                slug: 'livres-religion',
                subcategories: [
                  {
                    id: 'livres-islam',
                    name: 'Islam',
                    slug: 'livres-islam',
                    subcategories: []
                  },
                  {
                    id: 'livres-christianisme',
                    name: 'Christianisme',
                    slug: 'livres-christianisme',
                    subcategories: []
                  },
                  {
                    id: 'livres-judaisme',
                    name: 'Judaïsme',
                    slug: 'livres-judaisme',
                    subcategories: []
                  },
                  {
                    id: 'livres-spiritualite',
                    name: 'Spiritualité',
                    slug: 'livres-spiritualite',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'livres-langues',
                name: 'Livres Langues',
                slug: 'livres-langues',
                subcategories: [
                  {
                    id: 'livres-francais',
                    name: 'Français',
                    slug: 'livres-francais',
                    subcategories: []
                  },
                  {
                    id: 'livres-arabe',
                    name: 'Arabe',
                    slug: 'livres-arabe',
                    subcategories: []
                  },
                  {
                    id: 'livres-anglais',
                    name: 'Anglais',
                    slug: 'livres-anglais',
                    subcategories: []
                  },
                  {
                    id: 'livres-allemand',
                    name: 'Allemand',
                    slug: 'livres-allemand',
                    subcategories: []
                  },
                  {
                    id: 'livres-espagnol',
                    name: 'Espagnol',
                    slug: 'livres-espagnol',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'papeterie',
            name: 'Papeterie',
            slug: 'papeterie',
            subcategories: [
              {
                id: 'fournitures-scolaires',
                name: 'Fournitures Scolaires',
                slug: 'fournitures-scolaires',
                subcategories: [
                  {
                    id: 'cahiers',
                    name: 'Cahiers',
                    slug: 'cahiers',
                    subcategories: []
                  },
                  {
                    id: 'stylos',
                    name: 'Stylos',
                    slug: 'stylos',
                    subcategories: []
                  },
                  {
                    id: 'crayons',
                    name: 'Crayons',
                    slug: 'crayons',
                    subcategories: []
                  },
                  {
                    id: 'gommes',
                    name: 'Gommes',
                    slug: 'gommes',
                    subcategories: []
                  },
                  {
                    id: 'tailles-crayons',
                    name: 'Tailles-Crayons',
                    slug: 'tailles-crayons',
                    subcategories: []
                  },
                  {
                    id: 'surligneurs',
                    name: 'Surligneurs',
                    slug: 'surligneurs',
                    subcategories: []
                  },
                  {
                    id: 'correcteurs',
                    name: 'Correcteurs',
                    slug: 'correcteurs',
                    subcategories: []
                  },
                  {
                    id: 'trousses',
                    name: 'Trousses',
                    slug: 'trousses',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'papeterie-bureau',
                name: 'Papeterie Bureau',
                slug: 'papeterie-bureau',
                subcategories: [
                  {
                    id: 'classeurs',
                    name: 'Classeurs',
                    slug: 'classeurs',
                    subcategories: []
                  },
                  {
                    id: 'chemises',
                    name: 'Chemises',
                    slug: 'chemises',
                    subcategories: []
                  },
                  {
                    id: 'intercalaires',
                    name: 'Intercalaires',
                    slug: 'intercalaires',
                    subcategories: []
                  },
                  {
                    id: 'blocs-notes',
                    name: 'Blocs Notes',
                    slug: 'blocs-notes',
                    subcategories: []
                  },
                  {
                    id: 'post-it',
                    name: 'Post-it',
                    slug: 'post-it',
                    subcategories: []
                  },
                  {
                    id: 'agendas',
                    name: 'Agendas',
                    slug: 'agendas',
                    subcategories: []
                  },
                  {
                    id: 'calendriers',
                    name: 'Calendriers',
                    slug: 'calendriers',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'papeterie-artistique',
                name: 'Papeterie Artistique',
                slug: 'papeterie-artistique',
                subcategories: [
                  {
                    id: 'papiers-colors',
                    name: 'Papiers Colorés',
                    slug: 'papiers-colors',
                    subcategories: []
                  },
                  {
                    id: 'cartons',
                    name: 'Cartons',
                    slug: 'cartons',
                    subcategories: []
                  },
                  {
                    id: 'ciseaux',
                    name: 'Ciseaux',
                    slug: 'ciseaux',
                    subcategories: []
                  },
                  {
                    id: 'colles',
                    name: 'Colles',
                    slug: 'colles',
                    subcategories: []
                  },
                  {
                    id: 'peintures',
                    name: 'Peintures',
                    slug: 'peintures',
                    subcategories: []
                  },
                  {
                    id: 'pinceaux',
                    name: 'Pinceaux',
                    slug: 'pinceaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'cartes-invitations',
                name: 'Cartes & Invitations',
                slug: 'cartes-invitations',
                subcategories: [
                  {
                    id: 'cartes-voeux',
                    name: 'Cartes de Vœux',
                    slug: 'cartes-voeux',
                    subcategories: []
                  },
                  {
                    id: 'cartes-anniversaire',
                    name: 'Cartes d Anniversaire',
                    slug: 'cartes-anniversaire',
                    subcategories: []
                  },
                  {
                    id: 'invitations-mariage',
                    name: 'Invitations Mariage',
                    slug: 'invitations-mariage',
                    subcategories: []
                  },
                  {
                    id: 'cartes-remerciement',
                    name: 'Cartes de Remerciement',
                    slug: 'cartes-remerciement',
                    subcategories: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'instruments-musique',
        name: 'Instruments de Musique',
        slug: 'instruments-musique',
        subcategories: [
          {
            id: 'instruments-corde',
            name: 'Instruments à Corde',
            slug: 'instruments-corde',
            subcategories: [
              {
                id: 'guitares',
                name: 'Guitares',
                slug: 'guitares',
                subcategories: [
                  {
                    id: 'guitares-acoustiques',
                    name: 'Guitares Acoustiques',
                    slug: 'guitares-acoustiques',
                    subcategories: []
                  },
                  {
                    id: 'guitares-electriques',
                    name: 'Guitares Électriques',
                    slug: 'guitares-electriques',
                    subcategories: []
                  },
                  {
                    id: 'guitares-classiques',
                    name: 'Guitares Classiques',
                    slug: 'guitares-classiques',
                    subcategories: []
                  },
                  {
                    id: 'guitares-basse',
                    name: 'Guitares Basse',
                    slug: 'guitares-basse',
                    subcategories: []
                  },
                  {
                    id: 'ukuleles',
                    name: 'Ukuleles',
                    slug: 'ukuleles',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'violons',
                name: 'Violons',
                slug: 'violons',
                subcategories: [
                  {
                    id: 'violons-classiques',
                    name: 'Violons Classiques',
                    slug: 'violons-classiques',
                    subcategories: []
                  },
                  {
                    id: 'violons-electriques',
                    name: 'Violons Électriques',
                    slug: 'violons-electriques',
                    subcategories: []
                  },
                  {
                    id: 'altos',
                    name: 'Altos',
                    slug: 'altos',
                    subcategories: []
                  },
                  {
                    id: 'violoncelles',
                    name: 'Violoncelles',
                    slug: 'violoncelles',
                    subcategories: []
                  },
                  {
                    id: 'contrebasses',
                    name: 'Contrebasses',
                    slug: 'contrebasses',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'harmonicas',
                name: 'Harmonicas',
                slug: 'harmonicas',
                subcategories: []
              },
              {
                id: 'mandolines',
                name: 'Mandolines',
                slug: 'mandolines',
                subcategories: []
              },
              {
                id: 'banjos',
                name: 'Banjos',
                slug: 'banjos',
                subcategories: []
              }
            ]
          },
          {
            id: 'instruments-clavier',
            name: 'Instruments à Clavier',
            slug: 'instruments-clavier',
            subcategories: [
              {
                id: 'pianos',
                name: 'Pianos',
                slug: 'pianos',
                subcategories: [
                  {
                    id: 'pianos-a-queue',
                    name: 'Pianos à Queue',
                    slug: 'pianos-a-queue',
                    subcategories: []
                  },
                  {
                    id: 'pianos-droits',
                    name: 'Pianos Droits',
                    slug: 'pianos-droits',
                    subcategories: []
                  },
                  {
                    id: 'pianos-numeriques',
                    name: 'Pianos Numériques',
                    slug: 'pianos-numeriques',
                    subcategories: []
                  },
                  {
                    id: 'pianos-electriques',
                    name: 'Pianos Électriques',
                    slug: 'pianos-electriques',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'orgues',
                name: 'Orgues',
                slug: 'orgues',
                subcategories: [
                  {
                    id: 'orgues-electriques',
                    name: 'Orgues Électriques',
                    slug: 'orgues-electriques',
                    subcategories: []
                  },
                  {
                    id: 'orgues-numeriques',
                    name: 'Orgues Numériques',
                    slug: 'orgues-numeriques',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'synthesiseurs',
                name: 'Synthétiseurs',
                slug: 'synthesiseurs',
                subcategories: []
              },
              {
                id: 'accordions',
                name: 'Accordéons',
                slug: 'accordions',
                subcategories: []
              }
            ]
          },
          {
            id: 'instruments-vent',
            name: 'Instruments à Vent',
            slug: 'instruments-vent',
            subcategories: [
              {
                id: 'flutes',
                name: 'Flûtes',
                slug: 'flutes',
                subcategories: [
                  {
                    id: 'flutes-traversieres',
                    name: 'Flûtes Traversières',
                    slug: 'flutes-traversieres',
                    subcategories: []
                  },
                  {
                    id: 'flutes-a-bec',
                    name: 'Flûtes à Bec',
                    slug: 'flutes-a-bec',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'clarinettes',
                name: 'Clarinettes',
                slug: 'clarinettes',
                subcategories: []
              },
              {
                id: 'saxophones',
                name: 'Saxophones',
                slug: 'saxophones',
                subcategories: []
              },
              {
                id: 'trompettes',
                name: 'Trompettes',
                slug: 'trompettes',
                subcategories: []
              },
              {
                id: 'trombones',
                name: 'Trombones',
                slug: 'trombones',
                subcategories: []
              },
              {
                id: 'tubas',
                name: 'Tubas',
                slug: 'tubas',
                subcategories: []
              }
            ]
          },
          {
            id: 'instruments-percussion',
            name: 'Instruments à Percussion',
            slug: 'instruments-percussion',
            subcategories: [
              {
                id: 'batteries',
                name: 'Batteries',
                slug: 'batteries',
                subcategories: [
                  {
                    id: 'batteries-acoustiques',
                    name: 'Batteries Acoustiques',
                    slug: 'batteries-acoustiques',
                    subcategories: []
                  },
                  {
                    id: 'batteries-electroniques',
                    name: 'Batteries Électroniques',
                    slug: 'batteries-electroniques',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'cajas',
                name: 'Cajás',
                slug: 'cajas',
                subcategories: []
              },
              {
                id: 'djembes',
                name: 'Djembés',
                slug: 'djembes',
                subcategories: []
              },
              {
                id: 'darbukas',
                name: 'Darbukas',
                slug: 'darbukas',
                subcategories: []
              },
              {
                id: 'tambours',
                name: 'Tambours',
                slug: 'tambours',
                subcategories: []
              },
              {
                id: 'cymbales',
                name: 'Cymbales',
                slug: 'cymbales',
                subcategories: []
              }
            ]
          },
          {
            id: 'instruments-traditionnels',
            name: 'Instruments Traditionnels',
            slug: 'instruments-traditionnels',
            subcategories: [
              {
                id: 'oud',
                name: 'Oud',
                slug: 'oud',
                subcategories: []
              },
              {
                id: 'derbouka',
                name: 'Derbouka',
                slug: 'derbouka',
                subcategories: []
              },
              {
                id: 'kora',
                name: 'Kora',
                slug: 'kora',
                subcategories: []
              },
              {
                id: 'nay',
                name: 'Nay',
                slug: 'nay',
                subcategories: []
              },
              {
                id: 'santour',
                name: 'Santour',
                slug: 'santour',
                subcategories: []
              },
              {
                id: 'bendir',
                name: 'Bendir',
                slug: 'bendir',
                subcategories: []
              }
            ]
          },
          {
            id: 'accessoires-musique',
            name: 'Accessoires Musique',
            slug: 'accessoires-musique',
            subcategories: [
              {
                id: 'cordes-instruments',
                name: 'Cordes Instruments',
                slug: 'cordes-instruments',
                subcategories: []
              },
              {
                id: 'mediators',
                name: 'Médiators',
                slug: 'mediators',
                subcategories: []
              },
              {
                id: 'anches',
                name: 'Anches',
                slug: 'anches',
                subcategories: []
              },
              {
                id: 'pieds-micro',
                name: 'Pieds Micro',
                slug: 'pieds-micro',
                subcategories: []
              },
              {
                id: 'harnais',
                name: 'Harnais',
                slug: 'harnais',
                subcategories: []
              },
              {
                id: 'etuis-protection',
                name: 'Étuis Protection',
                slug: 'etuis-protection',
                subcategories: []
              },
              {
                id: 'accordeurs',
                name: 'Accordeurs',
                slug: 'accordeurs',
                subcategories: []
              },
              {
                id: 'metronomes',
                name: 'Métronomes',
                slug: 'metronomes',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'art-collections',
        name: 'Art & Collections',
        slug: 'art-collections',
        subcategories: [
          {
            id: 'peintures',
            name: 'Peintures',
            slug: 'peintures',
            subcategories: [
              {
                id: 'peintures-contemporaines',
                name: 'Peintures Contemporaines',
                slug: 'peintures-contemporaines',
                subcategories: []
              },
              {
                id: 'peintures-modernes',
                name: 'Peintures Modernes',
                slug: 'peintures-modernes',
                subcategories: []
              },
              {
                id: 'peintures-classiques',
                name: 'Peintures Classiques',
                slug: 'peintures-classiques',
                subcategories: []
              },
              {
                id: 'peintures-abstraites',
                name: 'Peintures Abstraites',
                slug: 'peintures-abstraites',
                subcategories: []
              },
              {
                id: 'peintures-figuratives',
                name: 'Peintures Figuratives',
                slug: 'peintures-figuratives',
                subcategories: []
              },
              {
                id: 'peintures-a-l-huile',
                name: 'Peintures à l Huile',
                slug: 'peintures-a-l-huile',
                subcategories: []
              },
              {
                id: 'peintures-acryliques',
                name: 'Peintures Acryliques',
                slug: 'peintures-acryliques',
                subcategories: []
              },
              {
                id: 'aquarelles',
                name: 'Aquarelles',
                slug: 'aquarelles',
                subcategories: []
              }
            ]
          },
          {
            id: 'sculptures',
            name: 'Sculptures',
            slug: 'sculptures',
            subcategories: [
              {
                id: 'sculptures-bronze',
                name: 'Sculptures Bronze',
                slug: 'sculptures-bronze',
                subcategories: []
              },
              {
                id: 'sculptures-marbre',
                name: 'Sculptures Marbre',
                slug: 'sculptures-marbre',
                subcategories: []
              },
              {
                id: 'sculptures-bois',
                name: 'Sculptures Bois',
                slug: 'sculptures-bois',
                subcategories: []
              },
              {
                id: 'sculptures-metal',
                name: 'Sculptures Métal',
                slug: 'sculptures-metal',
                subcategories: []
              },
              {
                id: 'sculptures-resine',
                name: 'Sculptures Résine',
                slug: 'sculptures-resine',
                subcategories: []
              }
            ]
          },
          {
            id: 'antiquites',
            name: 'Antiquités',
            slug: 'antiquites',
            subcategories: [
              {
                id: 'meubles-antiques',
                name: 'Meubles Antiques',
                slug: 'meubles-antiques',
                subcategories: []
              },
              {
                id: 'objets-antiques',
                name: 'Objets Antiques',
                slug: 'objets-antiques',
                subcategories: []
              },
              {
                id: 'bijoux-antiques',
                name: 'Bijoux Antiques',
                slug: 'bijoux-antiques',
                subcategories: []
              },
              {
                id: 'montres-antiques',
                name: 'Montres Antiques',
                slug: 'montres-antiques',
                subcategories: []
              },
              {
                id: 'livres-antiques',
                name: 'Livres Antiques',
                slug: 'livres-antiques',
                subcategories: []
              },
              {
                id: 'tapis-antiques',
                name: 'Tapis Antiques',
                slug: 'tapis-antiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'objets-collection',
            name: 'Objets de Collection',
            slug: 'objets-collection',
            subcategories: [
              {
                id: 'timbres-poste',
                name: 'Timbres-Poste',
                slug: 'timbres-poste',
                subcategories: []
              },
              {
                id: 'pieces-monnaie',
                name: 'Pièces Monnaie',
                slug: 'pieces-monnaie',
                subcategories: []
              },
              {
                id: 'billets-banque',
                name: 'Billets Banque',
                slug: 'billets-banque',
                subcategories: []
              },
              {
                id: 'cartes-postales',
                name: 'Cartes Postales',
                slug: 'cartes-postales',
                subcategories: []
              },
              {
                id: 'figurines',
                name: 'Figurines',
                slug: 'figurines',
                subcategories: []
              },
              {
                id: 'vinyles',
                name: 'Vinyles',
                slug: 'vinyles',
                subcategories: []
              },
              {
                id: 'bandes-dessinees',
                name: 'Bandes Dessinées',
                slug: 'bandes-dessinees',
                subcategories: []
              },
              {
                id: 'comics',
                name: 'Comics',
                slug: 'comics',
                subcategories: []
              }
            ]
          },
          {
            id: 'art-islamique',
            name: 'Art Islamique',
            slug: 'art-islamique',
            subcategories: [
              {
                id: 'calligraphie-arabe',
                name: 'Calligraphie Arabe',
                slug: 'calligraphie-arabe',
                subcategories: []
              },
              {
                id: 'miniatures-islamiques',
                name: 'Miniatures Islamiques',
                slug: 'miniatures-islamiques',
                subcategories: []
              },
              {
                id: 'tapis-orientaux',
                name: 'Tapis Orientaux',
                slug: 'tapis-orientaux',
                subcategories: []
              },
              {
                id: 'poteries-islamiques',
                name: 'Poteries Islamiques',
                slug: 'poteries-islamiques',
                subcategories: []
              },
              {
                id: 'metal-islamique',
                name: 'Métal Islamique',
                slug: 'metal-islamique',
                subcategories: []
              }
            ]
          },
          {
            id: 'art-africain',
            name: 'Art Africain',
            slug: 'art-africain',
            subcategories: [
              {
                id: 'masques-africains',
                name: 'Masques Africains',
                slug: 'masques-africains',
                subcategories: []
              },
              {
                id: 'sculptures-africaines',
                name: 'Sculptures Africaines',
                slug: 'sculptures-africaines',
                subcategories: []
              },
              {
                id: 'poteries-africaines',
                name: 'Poteries Africaines',
                slug: 'poteries-africaines',
                subcategories: []
              },
              {
                id: 'textiles-africains',
                name: 'Textiles Africains',
                slug: 'textiles-africains',
                subcategories: []
              },
              {
                id: 'bijoux-africains',
                name: 'Bijoux Africains',
                slug: 'bijoux-africains',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'jeux-jouets',
        name: 'Jeux & Jouets',
        slug: 'jeux-jouets',
        subcategories: [
          {
            id: 'jeux-societe',
            name: 'Jeux de Société',
            slug: 'jeux-societe',
            subcategories: [
              {
                id: 'jeux-strategie',
                name: 'Jeux Stratégie',
                slug: 'jeux-strategie',
                subcategories: []
              },
              {
                id: 'jeux-famille',
                name: 'Jeux Famille',
                slug: 'jeux-famille',
                subcategories: []
              },
              {
                id: 'jeux-ambiance',
                name: 'Jeux Ambiance',
                slug: 'jeux-ambiance',
                subcategories: []
              },
              {
                id: 'jeux-cartes',
                name: 'Jeux de Cartes',
                slug: 'jeux-cartes',
                subcategories: []
              },
              {
                id: 'jeux-des',
                name: 'Jeux de Dés',
                slug: 'jeux-des',
                subcategories: []
              },
              {
                id: 'jeux-role',
                name: 'Jeux de Rôle',
                slug: 'jeux-role',
                subcategories: []
              },
              {
                id: 'jeux-guerre',
                name: 'Jeux de Guerre',
                slug: 'jeux-guerre',
                subcategories: []
              }
            ]
          },
          {
            id: 'puzzles',
            name: 'Puzzles',
            slug: 'puzzles',
            subcategories: [
              {
                id: 'puzzles-enfants',
                name: 'Puzzles Enfants',
                slug: 'puzzles-enfants',
                subcategories: []
              },
              {
                id: 'puzzles-adultes',
                name: 'Puzzles Adultes',
                slug: 'puzzles-adultes',
                subcategories: []
              },
              {
                id: 'puzzles-3d',
                name: 'Puzzles 3D',
                slug: 'puzzles-3d',
                subcategories: []
              },
              {
                id: 'puzzles-bois',
                name: 'Puzzles Bois',
                slug: 'puzzles-bois',
                subcategories: []
              },
              {
                id: 'puzzles-metal',
                name: 'Puzzles Métal',
                slug: 'puzzles-metal',
                subcategories: []
              }
            ]
          },
          {
            id: 'jouets-enfants',
            name: 'Jouets Enfants',
            slug: 'jouets-enfants',
            subcategories: [
              {
                id: 'jouets-bebes',
                name: 'Jouets Bébés',
                slug: 'jouets-bebes',
                subcategories: []
              },
              {
                id: 'jouets-primaires',
                name: 'Jouets Primaires',
                slug: 'jouets-primaires',
                subcategories: []
              },
              {
                id: 'jouets-ados',
                name: 'Jouets Ados',
                slug: 'jouets-ados',
                subcategories: []
              },
              {
                id: 'poupees',
                name: 'Poupées',
                slug: 'poupees',
                subcategories: []
              },
              {
                id: 'voitures-jouets',
                name: 'Voitures Jouets',
                slug: 'voitures-jouets',
                subcategories: []
              },
              {
                id: 'figurines-action',
                name: 'Figurines Action',
                slug: 'figurines-action',
                subcategories: []
              },
              {
                id: 'jeux-construction',
                name: 'Jeux Construction',
                slug: 'jeux-construction',
                subcategories: []
              },
              {
                id: 'jeux-educatifs',
                name: 'Jeux Éducatifs',
                slug: 'jeux-educatifs',
                subcategories: []
              }
            ]
          },
          {
            id: 'jeux-electroniques',
            name: 'Jeux Électroniques',
            slug: 'jeux-electroniques',
            subcategories: [
              {
                id: 'consoles-portables',
                name: 'Consoles Portables',
                slug: 'consoles-portables',
                subcategories: []
              },
              {
                id: 'jeux-poche',
                name: 'Jeux de Poche',
                slug: 'jeux-poche',
                subcategories: []
              },
              {
                id: 'jeux-electroniques-educatifs',
                name: 'Jeux Électroniques Éducatifs',
                slug: 'jeux-electroniques-educatifs',
                subcategories: []
              },
              {
                id: 'robots-jouets',
                name: 'Robots Jouets',
                slug: 'robots-jouets',
                subcategories: []
              }
            ]
          },
          {
            id: 'jeux-exterieur',
            name: 'Jeux Extérieur',
            slug: 'jeux-exterieur',
            subcategories: [
              {
                id: 'balles',
                name: 'Balles',
                slug: 'balles',
                subcategories: []
              },
              {
                id: 'ballons',
                name: 'Ballons',
                slug: 'ballons',
                subcategories: []
              },
              {
                id: 'bicyclettes-enfants',
                name: 'Bicyclettes Enfants',
                slug: 'bicyclettes-enfants',
                subcategories: []
              },
              {
                id: 'trottinettes',
                name: 'Trottinettes',
                slug: 'trottinettes',
                subcategories: []
              },
              {
                id: 'skates',
                name: 'Skates',
                slug: 'skates',
                subcategories: []
              },
              {
                id: 'toboggans',
                name: 'Toboggans',
                slug: 'toboggans',
                subcategories: []
              },
              {
                id: 'bacs-sable',
                name: 'Bacs à Sable',
                slug: 'bacs-sable',
                subcategories: []
              }
            ]
          },
          {
            id: 'jeux-traditionnels',
            name: 'Jeux Traditionnels',
            slug: 'jeux-traditionnels',
            subcategories: [
              {
                id: 'jeux-traditionnels-locaux',
                name: 'Jeux Traditionnels Locaux',
                slug: 'jeux-traditionnels-locaux',
                subcategories: []
              },
              {
                id: 'jeux-traditionnels-internationaux',
                name: 'Jeux Traditionnels Internationaux',
                slug: 'jeux-traditionnels-internationaux',
                subcategories: []
              },
              {
                id: 'jeux-artisanat',
                name: 'Jeux Artisanat',
                slug: 'jeux-artisanat',
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
const mergedCategories = `[${existingCategoriesData},${educationCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services et Éducation & Loisirs
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
  console.log(`📊 Catégorie "Éducation & Loisirs" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Éducation & Loisirs ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');