import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Événements & Billetterie...');

// Structure détaillée des catégories pour Événements & Billetterie
const evenementsCategories = [
  {
    id: 'evenements-billetterie',
    name: 'Événements & Billetterie',
    slug: 'evenements-billetterie',
    subcategories: [
      {
        id: 'spectacles-concerts',
        name: 'Spectacles & Concerts',
        slug: 'spectacles-concerts',
        subcategories: [
          {
            id: 'theatre',
            name: 'Théâtre',
            slug: 'theatre',
            subcategories: [
              {
                id: 'theatre-classique',
                name: 'Théâtre Classique',
                slug: 'theatre-classique',
                subcategories: []
              },
              {
                id: 'theatre-contemporain',
                name: 'Théâtre Contemporain',
                slug: 'theatre-contemporain',
                subcategories: []
              },
              {
                id: 'theatre-comedie',
                name: 'Théâtre Comédie',
                slug: 'theatre-comedie',
                subcategories: []
              },
              {
                id: 'theatre-drame',
                name: 'Théâtre Drame',
                slug: 'theatre-drame',
                subcategories: []
              },
              {
                id: 'theatre-musical',
                name: 'Théâtre Musical',
                slug: 'theatre-musical',
                subcategories: []
              },
              {
                id: 'theatre-experimental',
                name: 'Théâtre Expérimental',
                slug: 'theatre-experimental',
                subcategories: []
              },
              {
                id: 'theatre-traditionnel',
                name: 'Théâtre Traditionnel',
                slug: 'theatre-traditionnel',
                subcategories: []
              },
              {
                id: 'theatre-enfants',
                name: 'Théâtre Enfants',
                slug: 'theatre-enfants',
                subcategories: []
              }
            ]
          },
          {
            id: 'musique',
            name: 'Musique',
            slug: 'musique',
            subcategories: [
              {
                id: 'musique-classique',
                name: 'Musique Classique',
                slug: 'musique-classique',
                subcategories: []
              },
              {
                id: 'musique-rock',
                name: 'Musique Rock',
                slug: 'musique-rock',
                subcategories: []
              },
              {
                id: 'musique-pop',
                name: 'Musique Pop',
                slug: 'musique-pop',
                subcategories: []
              },
              {
                id: 'musique-jazz',
                name: 'Musique Jazz',
                slug: 'musique-jazz',
                subcategories: []
              },
              {
                id: 'musique-electronique',
                name: 'Musique Électronique',
                slug: 'musique-electronique',
                subcategories: []
              },
              {
                id: 'musique-hip-hop',
                name: 'Musique Hip-Hop',
                slug: 'musique-hip-hop',
                subcategories: []
              },
              {
                id: 'musique-traditionnelle',
                name: 'Musique Traditionnelle',
                slug: 'musique-traditionnelle',
                subcategories: []
              },
              {
                id: 'musique-world',
                name: 'Musique World',
                slug: 'musique-world',
                subcategories: []
              },
              {
                id: 'musique-instrumentale',
                name: 'Musique Instrumentale',
                slug: 'musique-instrumentale',
                subcategories: []
              }
            ]
          },
          {
            id: 'danse',
            name: 'Danse',
            slug: 'danse',
            subcategories: [
              {
                id: 'danse-classique',
                name: 'Danse Classique',
                slug: 'danse-classique',
                subcategories: []
              },
              {
                id: 'danse-contemporaine',
                name: 'Danse Contemporaine',
                slug: 'danse-contemporaine',
                subcategories: []
              },
              {
                id: 'danse-moderne',
                name: 'Danse Moderne',
                slug: 'danse-moderne',
                subcategories: []
              },
              {
                id: 'danse-jazz',
                name: 'Danse Jazz',
                slug: 'danse-jazz',
                subcategories: []
              },
              {
                id: 'danse-hip-hop',
                name: 'Danse Hip-Hop',
                slug: 'danse-hip-hop',
                subcategories: []
              },
              {
                id: 'danse-traditionnelle',
                name: 'Danse Traditionnelle',
                slug: 'danse-traditionnelle',
                subcategories: []
              },
              {
                id: 'danse-folklorique',
                name: 'Danse Folklorique',
                slug: 'danse-folklorique',
                subcategories: []
              },
              {
                id: 'danse-spectacle',
                name: 'Danse Spectacle',
                slug: 'danse-spectacle',
                subcategories: []
              }
            ]
          },
          {
            id: 'comedy',
            name: 'Comedy',
            slug: 'comedy',
            subcategories: [
              {
                id: 'stand-up',
                name: 'Stand-up',
                slug: 'stand-up',
                subcategories: []
              },
              {
                id: 'improvisation',
                name: 'Improvisation',
                slug: 'improvisation',
                subcategories: []
              },
              {
                id: 'comedy-theatre',
                name: 'Comedy Theatre',
                slug: 'comedy-theatre',
                subcategories: []
              },
              {
                id: 'comedy-show',
                name: 'Comedy Show',
                slug: 'comedy-show',
                subcategories: []
              },
              {
                id: 'comedy-festival',
                name: 'Comedy Festival',
                slug: 'comedy-festival',
                subcategories: []
              }
            ]
          },
          {
            id: 'opera',
            name: 'Opéra',
            slug: 'opera',
            subcategories: [
              {
                id: 'opera-classique',
                name: 'Opéra Classique',
                slug: 'opera-classique',
                subcategories: []
              },
              {
                id: 'opera-moderne',
                name: 'Opéra Moderne',
                slug: 'opera-moderne',
                subcategories: []
              },
              {
                id: 'opera-comique',
                name: 'Opéra Comique',
                slug: 'opera-comique',
                subcategories: []
              },
              {
                id: 'opera-ballet',
                name: 'Opéra Ballet',
                slug: 'opera-ballet',
                subcategories: []
              }
            ]
          },
          {
            id: 'cirque',
            name: 'Cirque',
            slug: 'cirque',
            subcategories: [
              {
                id: 'cirque-traditionnel',
                name: 'Cirque Traditionnel',
                slug: 'cirque-traditionnel',
                subcategories: []
              },
              {
                id: 'cirque-contemporain',
                name: 'Cirque Contemporain',
                slug: 'cirque-contemporain',
                subcategories: []
              },
              {
                id: 'cirque-aquatique',
                name: 'Cirque Aquatique',
                slug: 'cirque-aquatique',
                subcategories: []
              },
              {
                id: 'cirque-animal',
                name: 'Cirque Animal',
                slug: 'cirque-animal',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'sport-billetterie',
        name: 'Sport & Billetterie',
        slug: 'sport-billetterie',
        subcategories: [
          {
            id: 'football',
            name: 'Football',
            slug: 'football',
            subcategories: [
              {
                id: 'football-matchs',
                name: 'Matchs Football',
                slug: 'football-matchs',
                subcategories: []
              },
              {
                id: 'football-coupe',
                name: 'Coupe Football',
                slug: 'football-coupe',
                subcategories: []
              },
              {
                id: 'football-championnat',
                name: 'Championnat Football',
                slug: 'football-championnat',
                subcategories: []
              },
              {
                id: 'football-international',
                name: 'Football International',
                slug: 'football-international',
                subcategories: []
              },
              {
                id: 'football-amateur',
                name: 'Football Amateur',
                slug: 'football-amateur',
                subcategories: []
              }
            ]
          },
          {
            id: 'basketball',
            name: 'Basketball',
            slug: 'basketball',
            subcategories: [
              {
                id: 'basketball-matchs',
                name: 'Matchs Basketball',
                slug: 'basketball-matchs',
                subcategories: []
              },
              {
                id: 'basketball-coupe',
                name: 'Coupe Basketball',
                slug: 'basketball-coupe',
                subcategories: []
              },
              {
                id: 'basketball-championnat',
                name: 'Championnat Basketball',
                slug: 'basketball-championnat',
                subcategories: []
              },
              {
                id: 'basketball-international',
                name: 'Basketball International',
                slug: 'basketball-international',
                subcategories: []
              }
            ]
          },
          {
            id: 'tennis',
            name: 'Tennis',
            slug: 'tennis',
            subcategories: [
              {
                id: 'tennis-matchs',
                name: 'Matchs Tennis',
                slug: 'tennis-matchs',
                subcategories: []
              },
              {
                id: 'tennis-tournoi',
                name: 'Tournoi Tennis',
                slug: 'tennis-tournoi',
                subcategories: []
              },
              {
                id: 'tennis-grand-chelem',
                name: 'Grand Chelem Tennis',
                slug: 'tennis-grand-chelem',
                subcategories: []
              },
              {
                id: 'tennis-exhibitions',
                name: 'Exhibitions Tennis',
                slug: 'tennis-exhibitions',
                subcategories: []
              }
            ]
          },
          {
            id: 'volleyball',
            name: 'Volleyball',
            slug: 'volleyball',
            subcategories: [
              {
                id: 'volleyball-matchs',
                name: 'Matchs Volleyball',
                slug: 'volleyball-matchs',
                subcategories: []
              },
              {
                id: 'volleyball-coupe',
                name: 'Coupe Volleyball',
                slug: 'volleyball-coupe',
                subcategories: []
              },
              {
                id: 'volleyball-championnat',
                name: 'Championnat Volleyball',
                slug: 'volleyball-championnat',
                subcategories: []
              },
              {
                id: 'volleyball-plage',
                name: 'Volleyball Plage',
                slug: 'volleyball-plage',
                subcategories: []
              }
            ]
          },
          {
            id: 'athletisme',
            name: 'Athlétisme',
            slug: 'athletisme',
            subcategories: [
              {
                id: 'athletisme-course',
                name: 'Course Athlétisme',
                slug: 'athletisme-course',
                subcategories: []
              },
              {
                id: 'athletisme-saut',
                name: 'Saut Athlétisme',
                slug: 'athletisme-saut',
                subcategories: []
              },
              {
                id: 'athletisme-lancer',
                name: 'Lancer Athlétisme',
                slug: 'athletisme-lancer',
                subcategories: []
              },
              {
                id: 'athletisme-fond',
                name: 'Fond Athlétisme',
                slug: 'athletisme-fond',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-combats',
            name: 'Sports de Combat',
            slug: 'sports-combats',
            subcategories: [
              {
                id: 'boxe',
                name: 'Boxe',
                slug: 'boxe',
                subcategories: []
              },
              {
                id: 'mma',
                name: 'MMA',
                slug: 'mma',
                subcategories: []
              },
              {
                id: 'judo',
                name: 'Judo',
                slug: 'judo',
                subcategories: []
              },
              {
                id: 'karate',
                name: 'Karate',
                slug: 'karate',
                subcategories: []
              },
              {
                id: 'lutte',
                name: 'Lutte',
                slug: 'lutte',
                subcategories: []
              },
              {
                id: 'taekwondo',
                name: 'Taekwondo',
                slug: 'taekwondo',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-moteur',
            name: 'Sports Moteur',
            slug: 'sports-moteur',
            subcategories: [
              {
                id: 'formule-1',
                name: 'Formule 1',
                slug: 'formule-1',
                subcategories: []
              },
              {
                id: 'moto-gp',
                name: 'Moto GP',
                slug: 'moto-gp',
                subcategories: []
              },
              {
                id: 'rallye',
                name: 'Rallye',
                slug: 'rallye',
                subcategories: []
              },
              {
                id: 'endurance',
                name: 'Endurance',
                slug: 'endurance',
                subcategories: []
              },
              {
                id: 'nascar',
                name: 'NASCAR',
                slug: 'nascar',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-eau',
            name: 'Sports Eau',
            slug: 'sports-eau',
            subcategories: [
              {
                id: 'natation',
                name: 'Natation',
                slug: 'natation',
                subcategories: []
              },
              {
                id: 'plongeon',
                name: 'Plongeon',
                slug: 'plongeon',
                subcategories: []
              },
              {
                id: 'water-polo',
                name: 'Water Polo',
                slug: 'water-polo',
                subcategories: []
              },
              {
                id: 'surf',
                name: 'Surf',
                slug: 'surf',
                subcategories: []
              },
              {
                id: 'kayak',
                name: 'Kayak',
                slug: 'kayak',
                subcategories: []
              },
              {
                id: 'voile',
                name: 'Voile',
                slug: 'voile',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-hiver',
            name: 'Sports Hiver',
            slug: 'sports-hiver',
            subcategories: [
              {
                id: 'ski-alpin',
                name: 'Ski Alpin',
                slug: 'ski-alpin',
                subcategories: []
              },
              {
                id: 'ski-fond',
                name: 'Ski Fond',
                slug: 'ski-fond',
                subcategories: []
              },
              {
                id: 'snowboard',
                name: 'Snowboard',
                slug: 'snowboard',
                subcategories: []
              },
              {
                id: 'patinage-artistique',
                name: 'Patinage Artistique',
                slug: 'patinage-artistique',
                subcategories: []
              },
              {
                id: 'hockey-sur-glace',
                name: 'Hockey sur Glace',
                slug: 'hockey-sur-glace',
                subcategories: []
              },
              {
                id: 'biathlon',
                name: 'Biathlon',
                slug: 'biathlon',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'evenements-culturels',
        name: 'Événements Culturels',
        slug: 'evenements-culturels',
        subcategories: [
          {
            id: 'expositions',
            name: 'Expositions',
            slug: 'expositions',
            subcategories: [
              {
                id: 'expositions-art',
                name: 'Expositions Art',
                slug: 'expositions-art',
                subcategories: [
                  {
                    id: 'expositions-peinture',
                    name: 'Expositions Peinture',
                    slug: 'expositions-peinture',
                    subcategories: []
                  },
                  {
                    id: 'expositions-sculpture',
                    name: 'Expositions Sculpture',
                    slug: 'expositions-sculpture',
                    subcategories: []
                  },
                  {
                    id: 'expositions-photographie',
                    name: 'Expositions Photographie',
                    slug: 'expositions-photographie',
                    subcategories: []
                  },
                  {
                    id: 'expositions-art-contemporain',
                    name: 'Expositions Art Contemporain',
                    slug: 'expositions-art-contemporain',
                    subcategories: []
                  },
                  {
                    id: 'expositions-art-moderne',
                    name: 'Expositions Art Moderne',
                    slug: 'expositions-art-moderne',
                    subcategories: []
                  },
                  {
                    id: 'expositions-art-classique',
                    name: 'Expositions Art Classique',
                    slug: 'expositions-art-classique',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'expositions-histoire',
                name: 'Expositions Histoire',
                slug: 'expositions-histoire',
                subcategories: []
              },
              {
                id: 'expositions-science',
                name: 'Expositions Science',
                slug: 'expositions-science',
                subcategories: []
              },
              {
                id: 'expositions-technologie',
                name: 'Expositions Technologie',
                slug: 'expositions-technologie',
                subcategories: []
              },
              {
                id: 'expositions-culture',
                name: 'Expositions Culture',
                slug: 'expositions-culture',
                subcategories: []
              },
              {
                id: 'expositions-virtuelles',
                name: 'Expositions Virtuelles',
                slug: 'expositions-virtuelles',
                subcategories: []
              }
            ]
          },
          {
            id: 'festivals',
            name: 'Festivals',
            slug: 'festivals',
            subcategories: [
              {
                id: 'festivals-musique',
                name: 'Festivals Musique',
                slug: 'festivals-musique',
                subcategories: [
                  {
                    id: 'festivals-rock',
                    name: 'Festivals Rock',
                    slug: 'festivals-rock',
                    subcategories: []
                  },
                  {
                    id: 'festivals-electronique',
                    name: 'Festivals Électronique',
                    slug: 'festivals-electronique',
                    subcategories: []
                  },
                  {
                    id: 'festivals-jazz',
                    name: 'Festivals Jazz',
                    slug: 'festivals-jazz',
                    subcategories: []
                  },
                  {
                    id: 'festivals-world',
                    name: 'Festivals World',
                    slug: 'festivals-world',
                    subcategories: []
                  },
                  {
                    id: 'festivals-hip-hop',
                    name: 'Festivals Hip-Hop',
                    slug: 'festivals-hip-hop',
                    subcategories: []
                  },
                  {
                    id: 'festivals-classique',
                    name: 'Festivals Classique',
                    slug: 'festivals-classique',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'festivals-cinema',
                name: 'Festivals Cinéma',
                slug: 'festivals-cinema',
                subcategories: []
              },
              {
                id: 'festivals-theatre',
                name: 'Festivals Théâtre',
                slug: 'festivals-theatre',
                subcategories: []
              },
              {
                id: 'festivals-danse',
                name: 'Festivals Danse',
                slug: 'festivals-danse',
                subcategories: []
              },
              {
                id: 'festivals-litterature',
                name: 'Festivals Littérature',
                slug: 'festivals-litterature',
                subcategories: []
              },
              {
                id: 'festivals-culinaire',
                name: 'Festivals Culinaire',
                slug: 'festivals-culinaire',
                subcategories: []
              },
              {
                id: 'festivals-traditionnel',
                name: 'Festivals Traditionnel',
                slug: 'festivals-traditionnel',
                subcategories: []
              }
            ]
          },
          {
            id: 'cinema',
            name: 'Cinéma',
            slug: 'cinema',
            subcategories: [
              {
                id: 'cinema-premieres',
                name: 'Premières Cinéma',
                slug: 'cinema-premieres',
                subcategories: []
              },
              {
                id: 'cinema-festival',
                name: 'Festival Cinéma',
                slug: 'cinema-festival',
                subcategories: []
              },
              {
                id: 'cinema-retrospective',
                name: 'Rétrospective Cinéma',
                slug: 'cinema-retrospective',
                subcategories: []
              },
              {
                id: 'cinema-hommage',
                name: 'Hommage Cinéma',
                slug: 'cinema-hommage',
                subcategories: []
              },
              {
                id: 'cinema-enfants',
                name: 'Cinéma Enfants',
                slug: 'cinema-enfants',
                subcategories: []
              },
              {
                id: 'cinema-documentaire',
                name: 'Documentaire Cinéma',
                slug: 'cinema-documentaire',
                subcategories: []
              }
            ]
          },
          {
            id: 'conférences',
            name: 'Conférences',
            slug: 'conferences',
            subcategories: [
              {
                id: 'conferences-savoir',
                name: 'Conférences Savoir',
                slug: 'conferences-savoir',
                subcategories: []
              },
              {
                id: 'conferences-technologie',
                name: 'Conférences Technologie',
                slug: 'conferences-technologie',
                subcategories: []
              },
              {
                id: 'conferences-business',
                name: 'Conférences Business',
                slug: 'conferences-business',
                subcategories: []
              },
              {
                id: 'conferences-sante',
                name: 'Conférences Santé',
                slug: 'conferences-sante',
                subcategories: []
              },
              {
                id: 'conferences-environnement',
                name: 'Conférences Environnement',
                slug: 'conferences-environnement',
                subcategories: []
              },
              {
                id: 'conferences-education',
                name: 'Conférences Éducation',
                slug: 'conferences-education',
                subcategories: []
              }
            ]
          },
          {
            id: 'ateliers',
            name: 'Ateliers',
            slug: 'ateliers',
            subcategories: [
              {
                id: 'ateliers-art',
                name: 'Ateliers Art',
                slug: 'ateliers-art',
                subcategories: []
              },
              {
                id: 'ateliers-cuisine',
                name: 'Ateliers Cuisine',
                slug: 'ateliers-cuisine',
                subcategories: []
              },
              {
                id: 'ateliers-musique',
                name: 'Ateliers Musique',
                slug: 'ateliers-musique',
                subcategories: []
              },
              {
                id: 'ateliers-danse',
                name: 'Ateliers Danse',
                slug: 'ateliers-danse',
                subcategories: []
              },
              {
                id: 'ateliers-artisanat',
                name: 'Ateliers Artisanat',
                slug: 'ateliers-artisanat',
                subcategories: []
              },
              {
                id: 'ateliers-ecriture',
                name: 'Ateliers Écriture',
                slug: 'ateliers-ecriture',
                subcategories: []
              }
            ]
          },
          {
            id: 'visites-guidees',
            name: 'Visites Guidées',
            slug: 'visites-guidees',
            subcategories: [
              {
                id: 'visites-musees',
                name: 'Visites Musées',
                slug: 'visites-musees',
                subcategories: []
              },
              {
                id: 'visites-monuments',
                name: 'Visites Monuments',
                slug: 'visites-monuments',
                subcategories: []
              },
              {
                id: 'visites-villes',
                name: 'Visites Villes',
                slug: 'visites-villes',
                subcategories: []
              },
              {
                id: 'visites-nature',
                name: 'Visites Nature',
                slug: 'visites-nature',
                subcategories: []
              },
              {
                id: 'visites-industrielles',
                name: 'Visites Industrielles',
                slug: 'visites-industrielles',
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
const mergedCategories = `[${existingCategoriesData},${evenementsCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté, Animaux & Accessoires et Événements & Billetterie
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
  console.log(`📊 Catégorie "Événements & Billetterie" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Événements & Billetterie ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');