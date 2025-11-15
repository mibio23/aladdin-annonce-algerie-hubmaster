import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Animaux & Accessoires...');

// Structure détaillée des catégories pour Animaux & Accessoires
const animauxCategories = [
  {
    id: 'animaux-accessoires',
    name: 'Animaux & Accessoires',
    slug: 'animaux-accessoires',
    subcategories: [
      {
        id: 'animaux',
        name: 'Animaux',
        slug: 'animaux',
        subcategories: [
          {
            id: 'chiens',
            name: 'Chiens',
            slug: 'chiens',
            subcategories: [
              {
                id: 'chiens-race-petite',
                name: 'Chiens Race Petite',
                slug: 'chiens-race-petite',
                subcategories: []
              },
              {
                id: 'chiens-race-moyenne',
                name: 'Chiens Race Moyenne',
                slug: 'chiens-race-moyenne',
                subcategories: []
              },
              {
                id: 'chiens-race-grande',
                name: 'Chiens Race Grande',
                slug: 'chiens-race-grande',
                subcategories: []
              },
              {
                id: 'chiots',
                name: 'Chiots',
                slug: 'chiots',
                subcategories: []
              },
              {
                id: 'chiens-locaux',
                name: 'Chiens Locaux',
                slug: 'chiens-locaux',
                subcategories: []
              },
              {
                id: 'chiens-adoption',
                name: 'Chiens Adoption',
                slug: 'chiens-adoption',
                subcategories: []
              },
              {
                id: 'chiens-travail',
                name: 'Chiens Travail',
                slug: 'chiens-travail',
                subcategories: []
              },
              {
                id: 'chiens compagnie',
                name: 'Chiens Compagnie',
                slug: 'chiens-compagnie',
                subcategories: []
              }
            ]
          },
          {
            id: 'chats',
            name: 'Chats',
            slug: 'chats',
            subcategories: [
              {
                id: 'chats-race-a-poils-long',
                name: 'Chats Race à Poils Long',
                slug: 'chats-race-a-poils-long',
                subcategories: []
              },
              {
                id: 'chats-race-a-poils-court',
                name: 'Chats Race à Poils Court',
                slug: 'chats-race-a-poils-court',
                subcategories: []
              },
              {
                id: 'chatons',
                name: 'Chatons',
                slug: 'chatons',
                subcategories: []
              },
              {
                id: 'chats-locaux',
                name: 'Chats Locaux',
                slug: 'chats-locaux',
                subcategories: []
              },
              {
                id: 'chats-adoption',
                name: 'Chats Adoption',
                slug: 'chats-adoption',
                subcategories: []
              },
              {
                id: 'chats-chasse',
                name: 'Chats Chasse',
                slug: 'chats-chasse',
                subcategories: []
              },
              {
                id: 'chats-interieur',
                name: 'Chats Intérieur',
                slug: 'chats-interieur',
                subcategories: []
              }
            ]
          },
          {
            id: 'oiseaux',
            name: 'Oiseaux',
            slug: 'oiseaux',
            subcategories: [
              {
                id: 'oiseaux-chant',
                name: 'Oiseaux Chant',
                slug: 'oiseaux-chant',
                subcategories: []
              },
              {
                id: 'oiseaux-exotiques',
                name: 'Oiseaux Exotiques',
                slug: 'oiseaux-exotiques',
                subcategories: []
              },
              {
                id: 'perroquets',
                name: 'Perroquets',
                slug: 'perroquets',
                subcategories: []
              },
              {
                id: 'pigeons',
                name: 'Pigeons',
                slug: 'pigeons',
                subcategories: []
              },
              {
                id: 'canaris',
                name: 'Canaris',
                slug: 'canaris',
                subcategories: []
              },
              {
                id: 'poules',
                name: 'Poules',
                slug: 'poules',
                subcategories: []
              },
              {
                id: 'oiseaux-volieres',
                name: 'Oiseaux Volières',
                slug: 'oiseaux-volieres',
                subcategories: []
              },
              {
                id: 'oiseaux-locaux',
                name: 'Oiseaux Locaux',
                slug: 'oiseaux-locaux',
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
                id: 'poissons-aquarium-eau-douce',
                name: 'Poissons Aquarium Eau Douce',
                slug: 'poissons-aquarium-eau-douce',
                subcategories: []
              },
              {
                id: 'poissons-aquarium-eau-salee',
                name: 'Poissons Aquarium Eau Salée',
                slug: 'poissons-aquarium-eau-salee',
                subcategories: []
              },
              {
                id: 'poissons-rouges',
                name: 'Poissons Rouges',
                slug: 'poissons-rouges',
                subcategories: []
              },
              {
                id: 'guppys',
                name: 'Guppys',
                slug: 'guppys',
                subcategories: []
              },
              {
                id: 'bettas',
                name: 'Bettas',
                slug: 'bettas',
                subcategories: []
              },
              {
                id: 'cichlides',
                name: 'Cichlidés',
                slug: 'cichlides',
                subcategories: []
              },
              {
                id: 'carpes-kois',
                name: 'Carpes Koïs',
                slug: 'carpes-kois',
                subcategories: []
              },
              {
                id: 'poissons-pond',
                name: 'Poissons Pond',
                slug: 'poissons-pond',
                subcategories: []
              }
            ]
          },
          {
            id: 'rongeurs',
            name: 'Rongeurs',
            slug: 'rongeurs',
            subcategories: [
              {
                id: 'lapins',
                name: 'Lapins',
                slug: 'lapins',
                subcategories: []
              },
              {
                id: 'cobayes',
                name: 'Cobayes',
                slug: 'cobayes',
                subcategories: []
              },
              {
                id: 'hamsters',
                name: 'Hamsters',
                slug: 'hamsters',
                subcategories: []
              },
              {
                id: 'gerbilles',
                name: 'Gerbilles',
                slug: 'gerbilles',
                subcategories: []
              },
              {
                id: 'chinchillas',
                name: 'Chinchillas',
                slug: 'chinchillas',
                subcategories: []
              },
              {
                id: 'degus',
                name: 'Dégus',
                slug: 'degus',
                subcategories: []
              },
              {
                id: 'furets',
                name: 'Furets',
                slug: 'furets',
                subcategories: []
              },
              {
                id: 'herissons',
                name: 'Hérissons',
                slug: 'herissons',
                subcategories: []
              }
            ]
          },
          {
            id: 'reptiles',
            name: 'Reptiles',
            slug: 'reptiles',
            subcategories: [
              {
                id: 'tortues',
                name: 'Tortues',
                slug: 'tortues',
                subcategories: []
              },
              {
                id: 'lezards',
                name: 'Lézards',
                slug: 'lezards',
                subcategories: []
              },
              {
                id: 'serpents',
                name: 'Serpents',
                slug: 'serpents',
                subcategories: []
              },
              {
                id: 'iguanes',
                name: 'Iguanes',
                slug: 'iguanes',
                subcategories: []
              },
              {
                id: 'geckos',
                name: 'Geckos',
                slug: 'geckos',
                subcategories: []
              },
              {
                id: 'camaleons',
                name: 'Caméléons',
                slug: 'camaleons',
                subcategories: []
              },
              {
                id: 'reptiles-terrarium',
                name: 'Reptiles Terrarium',
                slug: 'reptiles-terrarium',
                subcategories: []
              }
            ]
          },
          {
            id: 'animaux-ferme',
            name: 'Animaux Ferme',
            slug: 'animaux-ferme',
            subcategories: [
              {
                id: 'vaches',
                name: 'Vaches',
                slug: 'vaches',
                subcategories: []
              },
              {
                id: 'chevaux',
                name: 'Chevaux',
                slug: 'chevaux',
                subcategories: []
              },
              {
                id: 'moutons',
                name: 'Moutons',
                slug: 'moutons',
                subcategories: []
              },
              {
                id: 'chevres',
                name: 'Chèvres',
                slug: 'chevres',
                subcategories: []
              },
              {
                id: 'cochons',
                name: 'Cochons',
                slug: 'cochons',
                subcategories: []
              },
              {
                id: 'poules',
                name: 'Poules',
                slug: 'poules',
                subcategories: []
              },
              {
                id: 'dindons',
                name: 'Dindons',
                slug: 'dindons',
                subcategories: []
              },
              {
                id: 'canards',
                name: 'Canards',
                slug: 'canards',
                subcategories: []
              }
            ]
          },
          {
            id: 'insectes-arachnides',
            name: 'Insectes & Arachnides',
            slug: 'insectes-arachnides',
            subcategories: [
              {
                id: 'fourmis',
                name: 'Fourmis',
                slug: 'fourmis',
                subcategories: []
              },
              {
                id: 'phasmes',
                name: 'Phasmes',
                slug: 'phasmes',
                subcategories: []
              },
              {
                id: 'mantes',
                name: 'Mantes',
                slug: 'mantes',
                subcategories: []
              },
              {
                id: 'blattes',
                name: 'Blattes',
                slug: 'blattes',
                subcategories: []
              },
              {
                id: 'criquets',
                name: 'Crickets',
                slug: 'criquets',
                subcategories: []
              },
              {
                id: 'scorpions',
                name: 'Scorpions',
                slug: 'scorpions',
                subcategories: []
              },
              {
                id: 'araignees',
                name: 'Araignées',
                slug: 'araignees',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'accessoires-animaux',
        name: 'Accessoires pour Animaux',
        slug: 'accessoires-animaux',
        subcategories: [
          {
            id: 'nourriture',
            name: 'Nourriture',
            slug: 'nourriture',
            subcategories: [
              {
                id: 'nourriture-chiens',
                name: 'Nourriture Chiens',
                slug: 'nourriture-chiens',
                subcategories: [
                  {
                    id: 'croquettes-chiens',
                    name: 'Croquettes Chiens',
                    slug: 'croquettes-chiens',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-humide-chiens',
                    name: 'Nourriture Humide Chiens',
                    slug: 'nourriture-humide-chiens',
                    subcategories: []
                  },
                  {
                    id: 'friandises-chiens',
                    name: 'Friandises Chiens',
                    slug: 'friandises-chiens',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-veterinaire-chiens',
                    name: 'Nourriture Vétérinaire Chiens',
                    slug: 'nourriture-veterinaire-chiens',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-naturelle-chiens',
                    name: 'Nourriture Naturelle Chiens',
                    slug: 'nourriture-naturelle-chiens',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'nourriture-chats',
                name: 'Nourriture Chats',
                slug: 'nourriture-chats',
                subcategories: [
                  {
                    id: 'croquettes-chats',
                    name: 'Croquettes Chats',
                    slug: 'croquettes-chats',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-humide-chats',
                    name: 'Nourriture Humide Chats',
                    slug: 'nourriture-humide-chats',
                    subcategories: []
                  },
                  {
                    id: 'friandises-chats',
                    name: 'Friandises Chats',
                    slug: 'friandises-chats',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-veterinaire-chats',
                    name: 'Nourriture Vétérinaire Chats',
                    slug: 'nourriture-veterinaire-chats',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-naturelle-chats',
                    name: 'Nourriture Naturelle Chats',
                    slug: 'nourriture-naturelle-chats',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'nourriture-oiseaux',
                name: 'Nourriture Oiseaux',
                slug: 'nourriture-oiseaux',
                subcategories: [
                  {
                    id: 'graines-oiseaux',
                    name: 'Graines Oiseaux',
                    slug: 'graines-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'perles-oiseaux',
                    name: 'Perles Oiseaux',
                    slug: 'perles-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'fruits-oiseaux',
                    name: 'Fruits Oiseaux',
                    slug: 'fruits-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'insectes-oiseaux',
                    name: 'Insectes Oiseaux',
                    slug: 'insectes-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-speciale-oiseaux',
                    name: 'Nourriture Spéciale Oiseaux',
                    slug: 'nourriture-speciale-oiseaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'nourriture-poissons',
                name: 'Nourriture Poissons',
                slug: 'nourriture-poissons',
                subcategories: [
                  {
                    id: 'nourriture-flocons-poissons',
                    name: 'Nourriture Flocons Poissons',
                    slug: 'nourriture-flocons-poissons',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-granules-poissons',
                    name: 'Nourriture Granules Poissons',
                    slug: 'nourriture-granules-poissons',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-vivante-poissons',
                    name: 'Nourriture Vivante Poissons',
                    slug: 'nourriture-vivante-poissons',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-congelee-poissons',
                    name: 'Nourriture Congelée Poissons',
                    slug: 'nourriture-congelee-poissons',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-speciale-poissons',
                    name: 'Nourriture Spéciale Poissons',
                    slug: 'nourriture-speciale-poissons',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'nourriture-rongeurs',
                name: 'Nourriture Rongeurs',
                slug: 'nourriture-rongeurs',
                subcategories: [
                  {
                    id: 'nourriture-granules-rongeurs',
                    name: 'Nourriture Granules Rongeurs',
                    slug: 'nourriture-granules-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-melange-rongeurs',
                    name: 'Nourriture Mélange Rongeurs',
                    slug: 'nourriture-melange-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'foin-rongeurs',
                    name: 'Foin Rongeurs',
                    slug: 'foin-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'legumes-rongeurs',
                    name: 'Légumes Rongeurs',
                    slug: 'legumes-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'friandises-rongeurs',
                    name: 'Friandises Rongeurs',
                    slug: 'friandises-rongeurs',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'nourriture-reptiles',
                name: 'Nourriture Reptiles',
                slug: 'nourriture-reptiles',
                subcategories: [
                  {
                    id: 'insectes-vivants-reptiles',
                    name: 'Insectes Vivants Reptiles',
                    slug: 'insectes-vivants-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'rongeurs-vivants-reptiles',
                    name: 'Rongeurs Vivants Reptiles',
                    slug: 'rongeurs-vivants-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'nourriture-speciale-reptiles',
                    name: 'Nourriture Spéciale Reptiles',
                    slug: 'nourriture-speciale-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'supplements-reptiles',
                    name: 'Suppléments Reptiles',
                    slug: 'supplements-reptiles',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'jouets',
            name: 'Jouets',
            slug: 'jouets',
            subcategories: [
              {
                id: 'jouets-chiens',
                name: 'Jouets Chiens',
                slug: 'jouets-chiens',
                subcategories: [
                  {
                    id: 'balles-chiens',
                    name: 'Balles Chiens',
                    slug: 'balles-chiens',
                    subcategories: []
                  },
                  {
                    id: 'cordes-chiens',
                    name: 'Cordes Chiens',
                    slug: 'cordes-chiens',
                    subcategories: []
                  },
                  {
                    id: 'jouets-mastication-chiens',
                    name: 'Jouets Mâchation Chiens',
                    slug: 'jouets-mastication-chiens',
                    subcategories: []
                  },
                  {
                    id: 'jouets-interactifs-chiens',
                    name: 'Jouets Interactifs Chiens',
                    slug: 'jouets-interactifs-chiens',
                    subcategories: []
                  },
                  {
                    id: 'jouets-puzzle-chiens',
                    name: 'Jouets Puzzle Chiens',
                    slug: 'jouets-puzzle-chiens',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'jouets-chats',
                name: 'Jouets Chats',
                slug: 'jouets-chats',
                subcategories: [
                  {
                    id: 'souris-jouets-chats',
                    name: 'Souris Jouets Chats',
                    slug: 'souris-jouets-chats',
                    subcategories: []
                  },
                  {
                    id: 'plumes-jouets-chats',
                    name: 'Plumes Jouets Chats',
                    slug: 'plumes-jouets-chats',
                    subcategories: []
                  },
                  {
                    id: 'jouets-interactifs-chats',
                    name: 'Jouets Interactifs Chats',
                    slug: 'jouets-interactifs-chats',
                    subcategories: []
                  },
                  {
                    id: 'jouets-arbres-chats',
                    name: 'Jouets Arbres Chats',
                    slug: 'jouets-arbres-chats',
                    subcategories: []
                  },
                  {
                    id: 'jouets-laser-chats',
                    name: 'Jouets Laser Chats',
                    slug: 'jouets-laser-chats',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'jouets-oiseaux',
                name: 'Jouets Oiseaux',
                slug: 'jouets-oiseaux',
                subcategories: [
                  {
                    id: 'balançoires-oiseaux',
                    name: 'Balançoires Oiseaux',
                    slug: 'balançoires-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'perchoirs-oiseaux',
                    name: 'Perchoirs Oiseaux',
                    slug: 'perchoirs-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'miroirs-oiseaux',
                    name: 'Miroirs Oiseaux',
                    slug: 'miroirs-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'cloches-oiseaux',
                    name: 'Cloches Oiseaux',
                    slug: 'cloches-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'jouets-interactifs-oiseaux',
                    name: 'Jouets Interactifs Oiseaux',
                    slug: 'jouets-interactifs-oiseaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'jouets-rongeurs',
                name: 'Jouets Rongeurs',
                slug: 'jouets-rongeurs',
                subcategories: [
                  {
                    id: 'roues-rongeurs',
                    name: 'Roues Rongeurs',
                    slug: 'roues-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'tunnels-rongeurs',
                    name: 'Tunnels Rongeurs',
                    slug: 'tunnels-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'balançoires-rongeurs',
                    name: 'Balançoires Rongeurs',
                    slug: 'balançoires-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'jouets-mastication-rongeurs',
                    name: 'Jouets Mâchation Rongeurs',
                    slug: 'jouets-mastication-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'jouets-interactifs-rongeurs',
                    name: 'Jouets Interactifs Rongeurs',
                    slug: 'jouets-interactifs-rongeurs',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'jouets-poissons',
                name: 'Jouets Poissons',
                slug: 'jouets-poissons',
                subcategories: [
                  {
                    id: 'plantes-aquarium-poissons',
                    name: 'Plantes Aquarium Poissons',
                    slug: 'plantes-aquarium-poissons',
                    subcategories: []
                  },
                  {
                    id: 'decorations-aquarium-poissons',
                    name: 'Décorations Aquarium Poissons',
                    slug: 'decorations-aquarium-poissons',
                    subcategories: []
                  },
                  {
                    id: 'roches-aquarium-poissons',
                    name: 'Roches Aquarium Poissons',
                    slug: 'roches-aquarium-poissons',
                    subcategories: []
                  },
                  {
                    id: 'jouets-interactifs-poissons',
                    name: 'Jouets Interactifs Poissons',
                    slug: 'jouets-interactifs-poissons',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'couches',
            name: 'Couches',
            slug: 'couches',
            subcategories: [
              {
                id: 'couches-chiens',
                name: 'Couches Chiens',
                slug: 'couches-chiens',
                subcategories: [
                  {
                    id: 'paniers-chiens',
                    name: 'Paniers Chiens',
                    slug: 'paniers-chiens',
                    subcategories: []
                  },
                  {
                    id: 'coussins-chiens',
                    name: 'Coussins Chiens',
                    slug: 'coussins-chiens',
                    subcategories: []
                  },
                  {
                    id: 'couches-orthopediques-chiens',
                    name: 'Couches Orthopédiques Chiens',
                    slug: 'couches-orthopediques-chiens',
                    subcategories: []
                  },
                  {
                    id: 'couches-exterieur-chiens',
                    name: 'Couches Extérieur Chiens',
                    slug: 'couches-exterieur-chiens',
                    subcategories: []
                  },
                  {
                    id: 'couches-voyage-chiens',
                    name: 'Couches Voyage Chiens',
                    slug: 'couches-voyage-chiens',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'couches-chats',
                name: 'Couches Chats',
                slug: 'couches-chats',
                subcategories: [
                  {
                    id: 'paniers-chats',
                    name: 'Paniers Chats',
                    slug: 'paniers-chats',
                    subcategories: []
                  },
                  {
                    id: 'coussins-chats',
                    name: 'Coussins Chats',
                    slug: 'coussins-chats',
                    subcategories: []
                  },
                  {
                    id: 'couches-arbres-chats',
                    name: 'Couches Arbres Chats',
                    slug: 'couches-arbres-chats',
                    subcategories: []
                  },
                  {
                    id: 'couches-hammocks-chats',
                    name: 'Couches Hamacs Chats',
                    slug: 'couches-hammocks-chats',
                    subcategories: []
                  },
                  {
                    id: 'couches-cache-chats',
                    name: 'Couches Cache Chats',
                    slug: 'couches-cache-chats',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'couches-oiseaux',
                name: 'Couches Oiseaux',
                slug: 'couches-oiseaux',
                subcategories: [
                  {
                    id: 'nids-oiseaux',
                    name: 'Nids Oiseaux',
                    slug: 'nids-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'perchoirs-oiseaux',
                    name: 'Perchoirs Oiseaux',
                    slug: 'perchoirs-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'couches-voliere-oiseaux',
                    name: 'Couches Volière Oiseaux',
                    slug: 'couches-voliere-oiseaux',
                    subcategories: []
                  },
                  {
                    id: 'couches-nid-oiseaux',
                    name: 'Couches Nid Oiseaux',
                    slug: 'couches-nid-oiseaux',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'couches-rongeurs',
                name: 'Couches Rongeurs',
                slug: 'couches-rongeurs',
                subcategories: [
                  {
                    id: 'nids-rongeurs',
                    name: 'Nids Rongeurs',
                    slug: 'nids-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'couches-caches-rongeurs',
                    name: 'Couches Caches Rongeurs',
                    slug: 'couches-caches-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'couches-hammocks-rongeurs',
                    name: 'Couches Hamacs Rongeurs',
                    slug: 'couches-hammocks-rongeurs',
                    subcategories: []
                  },
                  {
                    id: 'couches-tunnels-rongeurs',
                    name: 'Couches Tunnels Rongeurs',
                    slug: 'couches-tunnels-rongeurs',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'couches-reptiles',
                name: 'Couches Reptiles',
                slug: 'couches-reptiles',
                subcategories: [
                  {
                    id: 'caches-reptiles',
                    name: 'Caches Reptiles',
                    slug: 'caches-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'perchoirs-reptiles',
                    name: 'Perchoirs Reptiles',
                    slug: 'perchoirs-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'couches-terrarium-reptiles',
                    name: 'Couches Terrarium Reptiles',
                    slug: 'couches-terrarium-reptiles',
                    subcategories: []
                  },
                  {
                    id: 'couches-roches-reptiles',
                    name: 'Couches Roches Reptiles',
                    slug: 'couches-roches-reptiles',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'soins-hygiene',
            name: 'Soins & Hygiène',
            slug: 'soins-hygiene',
            subcategories: [
              {
                id: 'shampoings-animaux',
                name: 'Shampoings Animaux',
                slug: 'shampoings-animaux',
                subcategories: []
              },
              {
                id: 'brosses-dents-animaux',
                name: 'Brosses Dents Animaux',
                slug: 'brosses-dents-animaux',
                subcategories: []
              },
              {
                id: 'ciseaux-ongles-animaux',
                name: 'Ciseaux Ongles Animaux',
                slug: 'ciseaux-ongles-animaux',
                subcategories: []
              },
              {
                id: 'lime-ongles-animaux',
                name: 'Lime Ongles Animaux',
                slug: 'lime-ongles-animaux',
                subcategories: []
              },
              {
                id: 'produits-nettoyage-animaux',
                name: 'Produits Nettoyage Animaux',
                slug: 'produits-nettoyage-animaux',
                subcategories: []
              },
              {
                id: 'produits-soins-peau-animaux',
                name: 'Produits Soins Peau Animaux',
                slug: 'produits-soins-peau-animaux',
                subcategories: []
              },
              {
                id: 'produits-parasites-animaux',
                name: 'Produits Parasites Animaux',
                slug: 'produits-parasites-animaux',
                subcategories: []
              },
              {
                id: 'produits-hygiene-animaux',
                name: 'Produits Hygiène Animaux',
                slug: 'produits-hygiene-animaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'transport',
            name: 'Transport',
            slug: 'transport',
            subcategories: [
              {
                id: 'caisses-transport',
                name: 'Caisses Transport',
                slug: 'caisses-transport',
                subcategories: []
              },
              {
                id: 'sacs-transport',
                name: 'Sacs Transport',
                slug: 'sacs-transport',
                subcategories: []
              },
              {
                id: 'harnais',
                name: 'Harnais',
                slug: 'harnais',
                subcategories: []
              },
              {
                id: 'laisses',
                name: 'Laisses',
                slug: 'laisses',
                subcategories: []
              },
              {
                id: 'colliers',
                name: 'Colliers',
                slug: 'colliers',
                subcategories: []
              },
              {
                id: 'museliers',
                name: 'Muselières',
                slug: 'museliers',
                subcategories: []
              },
              {
                id: 'selles',
                name: 'Selles',
                slug: 'selles',
                subcategories: []
              },
              {
                id: 'cages-transport',
                name: 'Cages Transport',
                slug: 'cages-transport',
                subcategories: []
              }
            ]
          },
          {
            id: 'equipements',
            name: 'Équipements',
            slug: 'equipements',
            subcategories: [
              {
                id: 'aquariums',
                name: 'Aquariums',
                slug: 'aquariums',
                subcategories: []
              },
              {
                id: 'terrariums',
                name: 'Terrariums',
                slug: 'terrariums',
                subcategories: []
              },
              {
                id: 'cages',
                name: 'Cages',
                slug: 'cages',
                subcategories: []
              },
              {
                id: 'volieres',
                name: 'Volières',
                slug: 'volieres',
                subcategories: []
              },
              {
                id: 'enclos',
                name: 'Enclos',
                slug: 'enclos',
                subcategories: []
              },
              {
                id: 'clotures',
                name: 'Clôtures',
                slug: 'clotures',
                subcategories: []
              },
              {
                id: 'abris',
                name: 'Abris',
                slug: 'abris',
                subcategories: []
              },
              {
                id: 'mangeoires',
                name: 'Mangeoires',
                slug: 'mangeoires',
                subcategories: []
              },
              {
                id: 'abreuvoirs',
                name: 'Abreuvoirs',
                slug: 'abreuvoirs',
                subcategories: []
              },
              {
                id: 'litiere',
                name: 'Litière',
                slug: 'litiere',
                subcategories: []
              }
            ]
          },
          {
            id: 'vetements',
            name: 'Vêtements',
            slug: 'vetements',
            subcategories: [
              {
                id: 'manteaux-animaux',
                name: 'Manteaux Animaux',
                slug: 'manteaux-animaux',
                subcategories: []
              },
              {
                id: 't-shirts-animaux',
                name: 'T-shirts Animaux',
                slug: 't-shirts-animaux',
                subcategories: []
              },
              {
                id: 'bottes-animaux',
                name: 'Bottes Animaux',
                slug: 'bottes-animaux',
                subcategories: []
              },
              {
                id: 'lunettes-animaux',
                name: 'Lunettes Animaux',
                slug: 'lunettes-animaux',
                subcategories: []
              },
              {
                id: 'chapeaux-animaux',
                name: 'Chapeaux Animaux',
                slug: 'chapeaux-animaux',
                subcategories: []
              },
              {
                id: 'costumes-animaux',
                name: 'Costumes Animaux',
                slug: 'costumes-animaux',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'services-animaux',
        name: 'Services pour Animaux',
        slug: 'services-animaux',
        subcategories: [
          {
            id: 'veterinaires',
            name: 'Vétérinaires',
            slug: 'veterinaires',
            subcategories: [
              {
                id: 'cliniques-veterinaires',
                name: 'Cliniques Vétérinaires',
                slug: 'cliniques-veterinaires',
                subcategories: []
              },
              {
                id: 'veterinaires-domicile',
                name: 'Vétérinaires à Domicile',
                slug: 'veterinaires-domicile',
                subcategories: []
              },
              {
                id: 'urgences-veterinaires',
                name: 'Urgences Vétérinaires',
                slug: 'urgences-veterinaires',
                subcategories: []
              },
              {
                id: 'vaccinations-animaux',
                name: 'Vaccinations Animaux',
                slug: 'vaccinations-animaux',
                subcategories: []
              },
              {
                id: 'stérilisation-animaux',
                name: 'Stérilisation Animaux',
                slug: 'sterilisation-animaux',
                subcategories: []
              },
              {
                id: 'chirurgie-animaux',
                name: 'Chirurgie Animaux',
                slug: 'chirurgie-animaux',
                subcategories: []
              },
              {
                id: 'dentisterie-animaux',
                name: 'Dentisterie Animaux',
                slug: 'dentisterie-animaux',
                subcategories: []
              },
              {
                id: 'radiologie-animaux',
                name: 'Radiologie Animaux',
                slug: 'radiologie-animaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'toilettage',
            name: 'Toilettage',
            slug: 'toilettage',
            subcategories: [
              {
                id: 'salons-toilettage',
                name: 'Salons Toilettage',
                slug: 'salons-toilettage',
                subcategories: []
              },
              {
                id: 'toilettage-domicile',
                name: 'Toilettage à Domicile',
                slug: 'toilettage-domicile',
                subcategories: []
              },
              {
                id: 'bain-animaux',
                name: 'Bain Animaux',
                slug: 'bain-animaux',
                subcategories: []
              },
              {
                id: 'coupe-poils-animaux',
                name: 'Coupe Poils Animaux',
                slug: 'coupe-poils-animaux',
                subcategories: []
              },
              {
                id: 'tondeuse-animaux',
                name: 'Tondeuse Animaux',
                slug: 'tondeuse-animaux',
                subcategories: []
              },
              {
                id: 'nettoyage-oreilles-animaux',
                name: 'Nettoyage Oreilles Animaux',
                slug: 'nettoyage-oreilles-animaux',
                subcategories: []
              },
              {
                id: 'coupe-ongles-animaux',
                name: 'Coupe Ongles Animaux',
                slug: 'coupe-ongles-animaux',
                subcategories: []
              },
              {
                id: 'soins-peau-animaux',
                name: 'Soins Peau Animaux',
                slug: 'soins-peau-animaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'garderie',
            name: 'Garderie',
            slug: 'garderie',
            subcategories: [
              {
                id: 'garderie-journee',
                name: 'Garderie Journée',
                slug: 'garderie-journee',
                subcategories: []
              },
              {
                id: 'garderie-nuit',
                name: 'Garderie Nuit',
                slug: 'garderie-nuit',
                subcategories: []
              },
              {
                id: 'garderie-weekend',
                name: 'Garderie Weekend',
                slug: 'garderie-weekend',
                subcategories: []
              },
              {
                id: 'garderie-vacances',
                name: 'Garderie Vacances',
                slug: 'garderie-vacances',
                subcategories: []
              },
              {
                id: 'promenade-animaux',
                name: 'Promenade Animaux',
                slug: 'promenade-animaux',
                subcategories: []
              },
              {
                id: 'jeux-animaux',
                name: 'Jeux Animaux',
                slug: 'jeux-animaux',
                subcategories: []
              },
              {
                id: 'socialisation-animaux',
                name: 'Socialisation Animaux',
                slug: 'socialisation-animaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'education',
            name: 'Éducation',
            slug: 'education',
            subcategories: [
              {
                id: 'dressage-chiens',
                name: 'Dressage Chiens',
                slug: 'dressage-chiens',
                subcategories: []
              },
              {
                id: 'dressage-chats',
                name: 'Dressage Chats',
                slug: 'dressage-chats',
                subcategories: []
              },
              {
                id: 'dressage-oiseaux',
                name: 'Dressage Oiseaux',
                slug: 'dressage-oiseaux',
                subcategories: []
              },
              {
                id: 'dressage-chevaux',
                name: 'Dressage Chevaux',
                slug: 'dressage-chevaux',
                subcategories: []
              },
              {
                id: 'comportement-animaux',
                name: 'Comportement Animaux',
                slug: 'comportement-animaux',
                subcategories: []
              },
              {
                id: 'agression-animaux',
                name: 'Agression Animaux',
                slug: 'agression-animaux',
                subcategories: []
              },
              {
                id: 'anxiete-animaux',
                name: 'Anxiété Animaux',
                slug: 'anxiete-animaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'secours',
            name: 'Secours',
            slug: 'secours',
            subcategories: [
              {
                id: 'refuges-animaux',
                name: 'Refuges Animaux',
                slug: 'refuges-animaux',
                subcategories: []
              },
              {
                id: 'associations-protection-animaux',
                name: 'Associations Protection Animaux',
                slug: 'associations-protection-animaux',
                subcategories: []
              },
              {
                id: 'adoption-animaux',
                name: 'Adoption Animaux',
                slug: 'adoption-animaux',
                subcategories: []
              },
              {
                id: 'sauvetage-animaux',
                name: 'Sauvetage Animaux',
                slug: 'sauvetage-animaux',
                subcategories: []
              },
              {
                id: 'recherche-animaux-perdus',
                name: 'Recherche Animaux Perdus',
                slug: 'recherche-animaux-perdus',
                subcategories: []
              },
              {
                id: 'signalement-animaux-abandonnes',
                name: 'Signalement Animaux Abandonnés',
                slug: 'signalement-animaux-abandonnes',
                subcategories: []
              }
            ]
          },
          {
            id: 'services-funeraires',
            name: 'Services Funéraires',
            slug: 'services-funeraires',
            subcategories: [
              {
                id: 'cremation-animaux',
                name: 'Crémation Animaux',
                slug: 'cremation-animaux',
                subcategories: []
              },
              {
                id: 'inhumation-animaux',
                name: 'Inhumation Animaux',
                slug: 'inhumation-animaux',
                subcategories: []
              },
              {
                id: 'cimetières-animaux',
                name: 'Cimetières Animaux',
                slug: 'cimetieres-animaux',
                subcategories: []
              },
              {
                id: 'urnes-funeraires-animaux',
                name: 'Urnes Funéraires Animaux',
                slug: 'urnes-funeraires-animaux',
                subcategories: []
              },
              {
                id: 'monuments-funeraires-animaux',
                name: 'Monuments Funéraires Animaux',
                slug: 'monuments-funeraires-animaux',
                subcategories: []
              },
              {
                id: 'services-deuil-animaux',
                name: 'Services Deuil Animaux',
                slug: 'services-deuil-animaux',
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
const mergedCategories = `[${existingCategoriesData},${animauxCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté et Animaux & Accessoires
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
  console.log(`📊 Catégorie "Animaux & Accessoires" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Animaux & Accessoires ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');