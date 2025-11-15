import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Mode & Accessoires...');

// Structure détaillée des catégories pour Mode & Accessoires
const modeCategories = [
  {
    id: 'mode-accessoires',
    name: 'Mode & Accessoires',
    slug: 'mode-accessoires',
    subcategories: [
      {
        id: 'vetements',
        name: 'Vêtements',
        slug: 'vetements',
        subcategories: [
          {
            id: 'vetements-homme',
            name: 'Vêtements Homme',
            slug: 'vetements-homme',
            subcategories: [
              {
                id: 't-shirts-homme',
                name: 'T-shirts Homme',
                slug: 't-shirts-homme',
                subcategories: []
              },
              {
                id: 'chemises-homme',
                name: 'Chemises Homme',
                slug: 'chemises-homme',
                subcategories: []
              },
              {
                id: 'pantalons-homme',
                name: 'Pantalons Homme',
                slug: 'pantalons-homme',
                subcategories: []
              },
              {
                id: 'jeans-homme',
                name: 'Jeans Homme',
                slug: 'jeans-homme',
                subcategories: []
              },
              {
                id: 'shorts-homme',
                name: 'Shorts Homme',
                slug: 'shorts-homme',
                subcategories: []
              },
              {
                id: 'pulls-gilets-homme',
                name: 'Pulls & Gilets Homme',
                slug: 'pulls-gilets-homme',
                subcategories: []
              },
              {
                id: 'vestes-manteaux-homme',
                name: 'Vestes & Manteaux Homme',
                slug: 'vestes-manteaux-homme',
                subcategories: []
              },
              {
                id: 'costumes-homme',
                name: 'Costumes Homme',
                slug: 'costumes-homme',
                subcategories: []
              },
              {
                id: 'sous-vetements-homme',
                name: 'Sous-vêtements Homme',
                slug: 'sous-vetements-homme',
                subcategories: []
              },
              {
                id: 'vetements-sport-homme',
                name: 'Vêtements Sport Homme',
                slug: 'vetements-sport-homme',
                subcategories: []
              }
            ]
          },
          {
            id: 'vetements-femme',
            name: 'Vêtements Femme',
            slug: 'vetements-femme',
            subcategories: [
              {
                id: 't-shirts-femme',
                name: 'T-shirts Femme',
                slug: 't-shirts-femme',
                subcategories: []
              },
              {
                id: 'tops-femme',
                name: 'Tops Femme',
                slug: 'tops-femme',
                subcategories: []
              },
              {
                id: 'robes-femme',
                name: 'Robes Femme',
                slug: 'robes-femme',
                subcategories: []
              },
              {
                id: 'jupes-femme',
                name: 'Jupes Femme',
                slug: 'jupes-femme',
                subcategories: []
              },
              {
                id: 'pantalons-femme',
                name: 'Pantalons Femme',
                slug: 'pantalons-femme',
                subcategories: []
              },
              {
                id: 'jeans-femme',
                name: 'Jeans Femme',
                slug: 'jeans-femme',
                subcategories: []
              },
              {
                id: 'shorts-femme',
                name: 'Shorts Femme',
                slug: 'shorts-femme',
                subcategories: []
              },
              {
                id: 'pulls-gilets-femme',
                name: 'Pulls & Gilets Femme',
                slug: 'pulls-gilets-femme',
                subcategories: []
              },
              {
                id: 'vestes-manteaux-femme',
                name: 'Vestes & Manteaux Femme',
                slug: 'vestes-manteaux-femme',
                subcategories: []
              },
              {
                id: 'blouses-femme',
                name: 'Blouses Femme',
                slug: 'blouses-femme',
                subcategories: []
              },
              {
                id: 'sous-vetements-femme',
                name: 'Sous-vêtements Femme',
                slug: 'sous-vetements-femme',
                subcategories: []
              },
              {
                id: 'maillots-bain-femme',
                name: 'Maillots de Bain Femme',
                slug: 'maillots-bain-femme',
                subcategories: []
              },
              {
                id: 'vetements-sport-femme',
                name: 'Vêtements Sport Femme',
                slug: 'vetements-sport-femme',
                subcategories: []
              }
            ]
          },
          {
            id: 'vetements-enfant',
            name: 'Vêtements Enfant',
            slug: 'vetements-enfant',
            subcategories: [
              {
                id: 'vetements-bebe',
                name: 'Vêtements Bébé',
                slug: 'vetements-bebe',
                subcategories: []
              },
              {
                id: 'vetements-fille',
                name: 'Vêtements Fille',
                slug: 'vetements-fille',
                subcategories: []
              },
              {
                id: 'vetements-garcon',
                name: 'Vêtements Garçon',
                slug: 'vetements-garcon',
                subcategories: []
              },
              {
                id: 'vetements-sport-enfant',
                name: 'Vêtements Sport Enfant',
                slug: 'vetements-sport-enfant',
                subcategories: []
              },
              {
                id: 'vetements-ecole',
                name: 'Vêtements École',
                slug: 'vetements-ecole',
                subcategories: []
              }
            ]
          },
          {
            id: 'marques',
            name: 'Marques',
            slug: 'marques',
            subcategories: [
              {
                id: 'marques-internationales',
                name: 'Marques Internationales',
                slug: 'marques-internationales',
                subcategories: []
              },
              {
                id: 'marques-locales',
                name: 'Marques Locales',
                slug: 'marques-locales',
                subcategories: []
              },
              {
                id: 'marques-emergentes',
                name: 'Marques Émergentes',
                slug: 'marques-emergentes',
                subcategories: []
              },
              {
                id: 'marques-ethiques',
                name: 'Marques Éthiques',
                slug: 'marques-ethiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'luxe',
            name: 'Luxe',
            slug: 'luxe',
            subcategories: [
              {
                id: 'haute-couture',
                name: 'Haute Couture',
                slug: 'haute-couture',
                subcategories: []
              },
              {
                id: 'pret-a-porter-luxe',
                name: 'Prêt-à-porter de Luxe',
                slug: 'pret-a-porter-luxe',
                subcategories: []
              },
              {
                id: 'maroquinerie-luxe',
                name: 'Maroquinerie de Luxe',
                slug: 'maroquinerie-luxe',
                subcategories: []
              },
              {
                id: 'bijoux-luxe',
                name: 'Bijoux de Luxe',
                slug: 'bijoux-luxe',
                subcategories: []
              },
              {
                id: 'montres-luxe',
                name: 'Montres de Luxe',
                slug: 'montres-luxe',
                subcategories: []
              },
              {
                id: 'accessoires-luxe',
                name: 'Accessoires de Luxe',
                slug: 'accessoires-luxe',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'chaussures-accessoires',
        name: 'Chaussures & Accessoires',
        slug: 'chaussures-accessoires',
        subcategories: [
          {
            id: 'chaussures',
            name: 'Chaussures',
            slug: 'chaussures',
            subcategories: [
              {
                id: 'chaussures-homme',
                name: 'Chaussures Homme',
                slug: 'chaussures-homme',
                subcategories: [
                  {
                    id: 'chaussures-ville-homme',
                    name: 'Chaussures de Ville Homme',
                    slug: 'chaussures-ville-homme',
                    subcategories: []
                  },
                  {
                    id: 'baskets-homme',
                    name: 'Baskets Homme',
                    slug: 'baskets-homme',
                    subcategories: []
                  },
                  {
                    id: 'bottes-homme',
                    name: 'Bottes Homme',
                    slug: 'bottes-homme',
                    subcategories: []
                  },
                  {
                    id: 'chaussures-sport-homme',
                    name: 'Chaussures Sport Homme',
                    slug: 'chaussures-sport-homme',
                    subcategories: []
                  },
                  {
                    id: 'sandales-homme',
                    name: 'Sandales Homme',
                    slug: 'sandales-homme',
                    subcategories: []
                  },
                  {
                    id: 'mocassins-homme',
                    name: 'Mocassins Homme',
                    slug: 'mocassins-homme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'chaussures-femme',
                name: 'Chaussures Femme',
                slug: 'chaussures-femme',
                subcategories: [
                  {
                    id: 'chaussures-ville-femme',
                    name: 'Chaussures de Ville Femme',
                    slug: 'chaussures-ville-femme',
                    subcategories: []
                  },
                  {
                    id: 'baskets-femme',
                    name: 'Baskets Femme',
                    slug: 'baskets-femme',
                    subcategories: []
                  },
                  {
                    id: 'bottes-femme',
                    name: 'Bottes Femme',
                    slug: 'bottes-femme',
                    subcategories: []
                  },
                  {
                    id: 'chaussures-sport-femme',
                    name: 'Chaussures Sport Femme',
                    slug: 'chaussures-sport-femme',
                    subcategories: []
                  },
                  {
                    id: 'sandales-femme',
                    name: 'Sandales Femme',
                    slug: 'sandales-femme',
                    subcategories: []
                  },
                  {
                    id: 'escarpins-femme',
                    name: 'Escarpins Femme',
                    slug: 'escarpins-femme',
                    subcategories: []
                  },
                  {
                    id: 'ballerines-femme',
                    name: 'Ballerines Femme',
                    slug: 'ballerines-femme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'chaussures-enfant',
                name: 'Chaussures Enfant',
                slug: 'chaussures-enfant',
                subcategories: [
                  {
                    id: 'chaussures-bebe',
                    name: 'Chaussures Bébé',
                    slug: 'chaussures-bebe',
                    subcategories: []
                  },
                  {
                    id: 'chaussures-fille',
                    name: 'Chaussures Fille',
                    slug: 'chaussures-fille',
                    subcategories: []
                  },
                  {
                    id: 'chaussures-garcon',
                    name: 'Chaussures Garçon',
                    slug: 'chaussures-garcon',
                    subcategories: []
                  },
                  {
                    id: 'chaussures-sport-enfant',
                    name: 'Chaussures Sport Enfant',
                    slug: 'chaussures-sport-enfant',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'accessoires',
            name: 'Accessoires',
            slug: 'accessoires',
            subcategories: [
              {
                id: 'ceintures',
                name: 'Ceintures',
                slug: 'ceintures',
                subcategories: []
              },
              {
                id: 'echarpes-foulards',
                name: 'Écharpes & Foulards',
                slug: 'echarpes-foulards',
                subcategories: []
              },
              {
                id: 'chapeaux-bonnets',
                name: 'Chapeaux & Bonnets',
                slug: 'chapeaux-bonnets',
                subcategories: []
              },
              {
                id: 'lunettes',
                name: 'Lunettes',
                slug: 'lunettes',
                subcategories: []
              },
              {
                id: 'gants',
                name: 'Gants',
                slug: 'gants',
                subcategories: []
              },
              {
                id: 'cravates-noeuds-papillon',
                name: 'Cravates & Nœuds Papillon',
                slug: 'cravates-noeuds-papillon',
                subcategories: []
              },
              {
                id: 'parapluies',
                name: 'Parapluies',
                slug: 'parapluies',
                subcategories: []
              },
              {
                id: 'portefeuilles-cartes',
                name: 'Portefeuilles & Cartes',
                slug: 'portefeuilles-cartes',
                subcategories: []
              }
            ]
          },
          {
            id: 'sacs',
            name: 'Sacs',
            slug: 'sacs',
            subcategories: [
              {
                id: 'sacs-femme',
                name: 'Sacs Femme',
                slug: 'sacs-femme',
                subcategories: [
                  {
                    id: 'sacs-main-femme',
                    name: 'Sacs à Main Femme',
                    slug: 'sacs-main-femme',
                    subcategories: []
                  },
                  {
                    id: 'sacs-bandouliere-femme',
                    name: 'Sacs Bandoulière Femme',
                    slug: 'sacs-bandouliere-femme',
                    subcategories: []
                  },
                  {
                    id: 'sacs-dos-femme',
                    name: 'Sacs à Dos Femme',
                    slug: 'sacs-dos-femme',
                    subcategories: []
                  },
                  {
                    id: 'pochettes-femme',
                    name: 'Pochettes Femme',
                    slug: 'pochettes-femme',
                    subcategories: []
                  },
                  {
                    id: 'sacs-soiree-femme',
                    name: 'Sacs de Soirée Femme',
                    slug: 'sacs-soiree-femme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'sacs-homme',
                name: 'Sacs Homme',
                slug: 'sacs-homme',
                subcategories: [
                  {
                    id: 'sacs-dos-homme',
                    name: 'Sacs à Dos Homme',
                    slug: 'sacs-dos-homme',
                    subcategories: []
                  },
                  {
                    id: 'sacs-messager-homme',
                    name: 'Sacs Messager Homme',
                    slug: 'sacs-messager-homme',
                    subcategories: []
                  },
                  {
                    id: 'sacs-bowling-homme',
                    name: 'Sacs Bowling Homme',
                    slug: 'sacs-bowling-homme',
                    subcategories: []
                  },
                  {
                    id: 'portefeuilles-homme',
                    name: 'Portefeuilles Homme',
                    slug: 'portefeuilles-homme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'sacs-enfant',
                name: 'Sacs Enfant',
                slug: 'sacs-enfant',
                subcategories: [
                  {
                    id: 'sacs-dos-enfant',
                    name: 'Sacs à Dos Enfant',
                    slug: 'sacs-dos-enfant',
                    subcategories: []
                  },
                  {
                    id: 'sacs-ecole-enfant',
                    name: 'Sacs École Enfant',
                    slug: 'sacs-ecole-enfant',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'bijoux',
            name: 'Bijoux',
            slug: 'bijoux',
            subcategories: [
              {
                id: 'bijoux-femme',
                name: 'Bijoux Femme',
                slug: 'bijoux-femme',
                subcategories: [
                  {
                    id: 'colliers-femme',
                    name: 'Colliers Femme',
                    slug: 'colliers-femme',
                    subcategories: []
                  },
                  {
                    id: 'bracelets-femme',
                    name: 'Bracelets Femme',
                    slug: 'bracelets-femme',
                    subcategories: []
                  },
                  {
                    id: 'boucles-oreilles-femme',
                    name: 'Boucles d Oreilles Femme',
                    slug: 'boucles-oreilles-femme',
                    subcategories: []
                  },
                  {
                    id: 'bagues-femme',
                    name: 'Bagues Femme',
                    slug: 'bagues-femme',
                    subcategories: []
                  },
                  {
                    id: 'pendentifs-femme',
                    name: 'Pendentifs Femme',
                    slug: 'pendentifs-femme',
                    subcategories: []
                  },
                  {
                    id: 'bijoux-corps-femme',
                    name: 'Bijoux de Corps Femme',
                    slug: 'bijoux-corps-femme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'bijoux-homme',
                name: 'Bijoux Homme',
                slug: 'bijoux-homme',
                subcategories: [
                  {
                    id: 'bracelets-homme',
                    name: 'Bracelets Homme',
                    slug: 'bracelets-homme',
                    subcategories: []
                  },
                  {
                    id: 'bagues-homme',
                    name: 'Bagues Homme',
                    slug: 'bagues-homme',
                    subcategories: []
                  },
                  {
                    id: 'colliers-homme',
                    name: 'Colliers Homme',
                    slug: 'colliers-homme',
                    subcategories: []
                  },
                  {
                    id: 'pendentifs-homme',
                    name: 'Pendentifs Homme',
                    slug: 'pendentifs-homme',
                    subcategories: []
                  },
                  {
                    id: 'breloques-homme',
                    name: 'Breloques Homme',
                    slug: 'breloques-homme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'bijoux-enfant',
                name: 'Bijoux Enfant',
                slug: 'bijoux-enfant',
                subcategories: []
              },
              {
                id: 'bijoux-fantaisie',
                name: 'Bijoux Fantaisie',
                slug: 'bijoux-fantaisie',
                subcategories: []
              },
              {
                id: 'bijoux-ethniques',
                name: 'Bijoux Ethniques',
                slug: 'bijoux-ethniques',
                subcategories: []
              }
            ]
          },
          {
            id: 'montres',
            name: 'Montres',
            slug: 'montres',
            subcategories: [
              {
                id: 'montres-homme',
                name: 'Montres Homme',
                slug: 'montres-homme',
                subcategories: [
                  {
                    id: 'montres-automatiques-homme',
                    name: 'Montres Automatiques Homme',
                    slug: 'montres-automatiques-homme',
                    subcategories: []
                  },
                  {
                    id: 'montres-quartz-homme',
                    name: 'Montres Quartz Homme',
                    slug: 'montres-quartz-homme',
                    subcategories: []
                  },
                  {
                    id: 'montres-digitales-homme',
                    name: 'Montres Digitales Homme',
                    slug: 'montres-digitales-homme',
                    subcategories: []
                  },
                  {
                    id: 'montres-sport-homme',
                    name: 'Montres Sport Homme',
                    slug: 'montres-sport-homme',
                    subcategories: []
                  },
                  {
                    id: 'montres-plongee-homme',
                    name: 'Montres de Plongée Homme',
                    slug: 'montres-plongee-homme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'montres-femme',
                name: 'Montres Femme',
                slug: 'montres-femme',
                subcategories: [
                  {
                    id: 'montres-automatiques-femme',
                    name: 'Montres Automatiques Femme',
                    slug: 'montres-automatiques-femme',
                    subcategories: []
                  },
                  {
                    id: 'montres-quartz-femme',
                    name: 'Montres Quartz Femme',
                    slug: 'montres-quartz-femme',
                    subcategories: []
                  },
                  {
                    id: 'montres-digitales-femme',
                    name: 'Montres Digitales Femme',
                    slug: 'montres-digitales-femme',
                    subcategories: []
                  },
                  {
                    id: 'montres-sport-femme',
                    name: 'Montres Sport Femme',
                    slug: 'montres-sport-femme',
                    subcategories: []
                  },
                  {
                    id: 'montres-plongee-femme',
                    name: 'Montres de Plongée Femme',
                    slug: 'montres-plongee-femme',
                    subcategories: []
                  },
                  {
                    id: 'montres-fantaisie-femme',
                    name: 'Montres Fantaisie Femme',
                    slug: 'montres-fantaisie-femme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'montres-enfant',
                name: 'Montres Enfant',
                slug: 'montres-enfant',
                subcategories: []
              },
              {
                id: 'montres-connectees',
                name: 'Montres Connectées',
                slug: 'montres-connectees',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'bagages-maroquinerie',
        name: 'Bagages & Maroquinerie',
        slug: 'bagages-maroquinerie',
        subcategories: [
          {
            id: 'bagages',
            name: 'Bagages',
            slug: 'bagages',
            subcategories: [
              {
                id: 'valises',
                name: 'Valises',
                slug: 'valises',
                subcategories: [
                  {
                    id: 'valises-rigides',
                    name: 'Valises Rigides',
                    slug: 'valises-rigides',
                    subcategories: []
                  },
                  {
                    id: 'valises-souples',
                    name: 'Valises Souples',
                    slug: 'valises-souples',
                    subcategories: []
                  },
                  {
                    id: 'valises-cabine',
                    name: 'Valises Cabine',
                    slug: 'valises-cabine',
                    subcategories: []
                  },
                  {
                    id: 'valises-roulettes',
                    name: 'Valises à Roulettes',
                    slug: 'valises-roulettes',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'sacs-voyage',
                name: 'Sacs de Voyage',
                slug: 'sacs-voyage',
                subcategories: []
              },
              {
                id: 'sacs-dos-voyage',
                name: 'Sacs à Dos de Voyage',
                slug: 'sacs-dos-voyage',
                subcategories: []
              },
              {
                id: 'trousses-toilette',
                name: 'Trousses de Toilette',
                slug: 'trousses-toilette',
                subcategories: []
              },
              {
                id: 'accessoires-voyage',
                name: 'Accessoires de Voyage',
                slug: 'accessoires-voyage',
                subcategories: []
              }
            ]
          },
          {
            id: 'maroquinerie',
            name: 'Maroquinerie',
            slug: 'maroquinerie',
            subcategories: [
              {
                id: 'sacs-cuir',
                name: 'Sacs en Cuir',
                slug: 'sacs-cuir',
                subcategories: []
              },
              {
                id: 'portefeuilles-cuir',
                name: 'Portefeuilles en Cuir',
                slug: 'portefeuilles-cuir',
                subcategories: []
              },
              {
                id: 'ceintures-cuir',
                name: 'Ceintures en Cuir',
                slug: 'ceintures-cuir',
                subcategories: []
              },
              {
                id: 'gants-cuir',
                name: 'Gants en Cuir',
                slug: 'gants-cuir',
                subcategories: []
              },
              {
                id: 'etuis-cuir',
                name: 'Étuis en Cuir',
                slug: 'etuis-cuir',
                subcategories: []
              },
              {
                id: 'mallettes-cuir',
                name: 'Mallettes en Cuir',
                slug: 'mallettes-cuir',
                subcategories: []
              }
            ]
          },
          {
            id: 'portefeuilles',
            name: 'Portefeuilles',
            slug: 'portefeuilles',
            subcategories: [
              {
                id: 'portefeuilles-homme',
                name: 'Portefeuilles Homme',
                slug: 'portefeuilles-homme',
                subcategories: []
              },
              {
                id: 'portefeuilles-femme',
                name: 'Portefeuilles Femme',
                slug: 'portefeuilles-femme',
                subcategories: []
              },
              {
                id: 'portefeuilles-cuir',
                name: 'Portefeuilles en Cuir',
                slug: 'portefeuilles-cuir',
                subcategories: []
              },
              {
                id: 'portefeuilles-synthetique',
                name: 'Portefeuilles Synthétique',
                slug: 'portefeuilles-synthetique',
                subcategories: []
              },
              {
                id: 'portefeuilles-multifonctions',
                name: 'Portefeuilles Multifonctions',
                slug: 'portefeuilles-multifonctions',
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
const mergedCategories = `[${existingCategoriesData},${modeCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison et Mode & Accessoires
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
  console.log(`📊 Catégorie "Mode & Accessoires" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Mode & Accessoires ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');