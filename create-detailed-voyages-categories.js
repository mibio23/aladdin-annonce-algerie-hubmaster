import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Voyages & Tourisme...');

// Structure détaillée des catégories pour Voyages & Tourisme
const voyagesCategories = [
  {
    id: 'voyages-tourisme',
    name: 'Voyages & Tourisme',
    slug: 'voyages-tourisme',
    subcategories: [
      {
        id: 'hebergement',
        name: 'Hébergement',
        slug: 'hebergement',
        subcategories: [
          {
            id: 'hotels',
            name: 'Hôtels',
            slug: 'hotels',
            subcategories: [
              {
                id: 'hotels-luxe',
                name: 'Hôtels Luxe',
                slug: 'hotels-luxe',
                subcategories: []
              },
              {
                id: 'hotels-boutique',
                name: 'Hôtels Boutique',
                slug: 'hotels-boutique',
                subcategories: []
              },
              {
                id: 'hotels-charme',
                name: 'Hôtels Charme',
                slug: 'hotels-charme',
                subcategories: []
              },
              {
                id: 'hotels-economique',
                name: 'Hôtels Économique',
                slug: 'hotels-economique',
                subcategories: []
              },
              {
                id: 'hotels-famille',
                name: 'Hôtels Famille',
                slug: 'hotels-famille',
                subcategories: []
              },
              {
                id: 'hotels-affaires',
                name: 'Hôtels Affaires',
                slug: 'hotels-affaires',
                subcategories: []
              },
              {
                id: 'hotels-thermaux',
                name: 'Hôtels Thermaux',
                slug: 'hotels-thermaux',
                subcategories: []
              },
              {
                id: 'hotels-plage',
                name: 'Hôtels Plage',
                slug: 'hotels-plage',
                subcategories: []
              },
              {
                id: 'hotels-montagne',
                name: 'Hôtels Montagne',
                slug: 'hotels-montagne',
                subcategories: []
              }
            ]
          },
          {
            id: 'appartements',
            name: 'Appartements',
            slug: 'appartements',
            subcategories: [
              {
                id: 'appartements-meubles',
                name: 'Appartements Meublés',
                slug: 'appartements-meubles',
                subcategories: []
              },
              {
                id: 'appartements-non-meubles',
                name: 'Appartements Non Meublés',
                slug: 'appartements-non-meubles',
                subcategories: []
              },
              {
                id: 'appartements-studio',
                name: 'Appartements Studio',
                slug: 'appartements-studio',
                subcategories: []
              },
              {
                id: 'appartements-f1',
                name: 'Appartements F1',
                slug: 'appartements-f1',
                subcategories: []
              },
              {
                id: 'appartements-f2',
                name: 'Appartements F2',
                slug: 'appartements-f2',
                subcategories: []
              },
              {
                id: 'appartements-f3',
                name: 'Appartements F3',
                slug: 'appartements-f3',
                subcategories: []
              },
              {
                id: 'appartements-duplex',
                name: 'Appartements Duplex',
                slug: 'appartements-duplex',
                subcategories: []
              },
              {
                id: 'appartements-penthouse',
                name: 'Appartements Penthouse',
                slug: 'appartements-penthouse',
                subcategories: []
              }
            ]
          },
          {
            id: 'villas',
            name: 'Villas',
            slug: 'villas',
            subcategories: [
              {
                id: 'villas-luxe',
                name: 'Villas Luxe',
                slug: 'villas-luxe',
                subcategories: []
              },
              {
                id: 'villas-mer',
                name: 'Villas Mer',
                slug: 'villas-mer',
                subcategories: []
              },
              {
                id: 'villas-montagne',
                name: 'Villas Montagne',
                slug: 'villas-montagne',
                subcategories: []
              },
              {
                id: 'villas-campagne',
                name: 'Villas Campagne',
                slug: 'villas-campagne',
                subcategories: []
              },
              {
                id: 'villas-piscine',
                name: 'Villas Piscine',
                slug: 'villas-piscine',
                subcategories: []
              },
              {
                id: 'villas-jardin',
                name: 'Villas Jardin',
                slug: 'villas-jardin',
                subcategories: []
              }
            ]
          },
          {
            id: 'campings',
            name: 'Campings',
            slug: 'campings',
            subcategories: [
              {
                id: 'campings-tentes',
                name: 'Campings Tentes',
                slug: 'campings-tentes',
                subcategories: []
              },
              {
                id: 'campings-caravanes',
                name: 'Campings Caravanes',
                slug: 'campings-caravanes',
                subcategories: []
              },
              {
                id: 'campings-camping-cars',
                name: 'Campings Camping Cars',
                slug: 'campings-camping-cars',
                subcategories: []
              },
              {
                id: 'campings-bungalows',
                name: 'Campings Bungalows',
                slug: 'campings-bungalows',
                subcategories: []
              },
              {
                id: 'campings-mobil-homes',
                name: 'Campings Mobil Homes',
                slug: 'campings-mobil-homes',
                subcategories: []
              },
              {
                id: 'campings-glamping',
                name: 'Campings Glamping',
                slug: 'campings-glamping',
                subcategories: []
              },
              {
                id: 'campings-services',
                name: 'Campings Services',
                slug: 'campings-services',
                subcategories: []
              }
            ]
          },
          {
            id: 'auberges',
            name: 'Auberges',
            slug: 'auberges',
            subcategories: [
              {
                id: 'auberges-jeunesse',
                name: 'Auberges Jeunesse',
                slug: 'auberges-jeunesse',
                subcategories: []
              },
              {
                id: 'auberges-groupe',
                name: 'Auberges Groupe',
                slug: 'auberges-groupe',
                subcategories: []
              },
              {
                id: 'auberges-famille',
                name: 'Auberges Famille',
                slug: 'auberges-famille',
                subcategories: []
              },
              {
                id: 'auberges-backpackers',
                name: 'Auberges Backpackers',
                slug: 'auberges-backpackers',
                subcategories: []
              },
              {
                id: 'auberges-montagne',
                name: 'Auberges Montagne',
                slug: 'auberges-montagne',
                subcategories: []
              }
            ]
          },
          {
            id: 'gites',
            name: 'Gîtes',
            slug: 'gites',
            subcategories: [
              {
                id: 'gites-ruraux',
                name: 'Gîtes Ruraux',
                slug: 'gites-ruraux',
                subcategories: []
              },
              {
                id: 'gites-de-charme',
                name: 'Gîtes Charme',
                slug: 'gites-de-charme',
                subcategories: []
              },
              {
                id: 'gites-famille',
                name: 'Gîtes Famille',
                slug: 'gites-famille',
                subcategories: []
              },
              {
                id: 'gites-groupes',
                name: 'Gîtes Groupes',
                slug: 'gites-groupes',
                subcategories: []
              },
              {
                id: 'gites-animaux',
                name: 'Gîtes Animaux',
                slug: 'gites-animaux',
                subcategories: []
              },
              {
                id: 'gites-ecologiques',
                name: 'Gîtes Écologiques',
                slug: 'gites-ecologiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'chambres-hotes',
            name: 'Chambres d Hôtes',
            slug: 'chambres-hotes',
            subcategories: [
              {
                id: 'chambres-hotes-ville',
                name: 'Chambres d Hôtes Ville',
                slug: 'chambres-hotes-ville',
                subcategories: []
              },
              {
                id: 'chambres-hotes-campagne',
                name: 'Chambres d Hôtes Campagne',
                slug: 'chambres-hotes-campagne',
                subcategories: []
              },
              {
                id: 'chambres-hotes-mer',
                name: 'Chambres d Hôtes Mer',
                slug: 'chambres-hotes-mer',
                subcategories: []
              },
              {
                id: 'chambres-hotes-montagne',
                name: 'Chambres d Hôtes Montagne',
                slug: 'chambres-hotes-montagne',
                subcategories: []
              },
              {
                id: 'chambres-hotes-luxe',
                name: 'Chambres d Hôtes Luxe',
                slug: 'chambres-hotes-luxe',
                subcategories: []
              },
              {
                id: 'chambres-hotes-famille',
                name: 'Chambres d Hôtes Famille',
                slug: 'chambres-hotes-famille',
                subcategories: []
              },
              {
                id: 'chambres-hotes-thematiques',
                name: 'Chambres d Hôtes Thématiques',
                slug: 'chambres-hotes-thematiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'residences-touristiques',
            name: 'Résidences Touristiques',
            slug: 'residences-touristiques',
            subcategories: [
              {
                id: 'residences-club',
                name: 'Résidences Club',
                slug: 'residences-club',
                subcategories: []
              },
              {
                id: 'residences-vacances',
                name: 'Résidences Vacances',
                slug: 'residences-vacances',
                subcategories: []
              },
              {
                id: 'residences-seniors',
                name: 'Résidences Seniors',
                slug: 'residences-seniors',
                subcategories: []
              },
              {
                id: 'residences-etudiantes',
                name: 'Résidences Étudiantes',
                slug: 'residences-etudiantes',
                subcategories: []
              },
              {
                id: 'residences-services',
                name: 'Résidences Services',
                slug: 'residences-services',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'transport-voyages',
        name: 'Transport & Voyages',
        slug: 'transport-voyages',
        subcategories: [
          {
            id: 'vols',
            name: 'Vols',
            slug: 'vols',
            subcategories: [
              {
                id: 'vols-regulars',
                name: 'Vols Réguliers',
                slug: 'vols-regulars',
                subcategories: []
              },
              {
                id: 'vols-charter',
                name: 'Vols Charter',
                slug: 'vols-charter',
                subcategories: []
              },
              {
                id: 'vols-low-cost',
                name: 'Vols Low Cost',
                slug: 'vols-low-cost',
                subcategories: []
              },
              {
                id: 'vols-affaires',
                name: 'Vols Affaires',
                slug: 'vols-affaires',
                subcategories: []
              },
              {
                id: 'vols-premium',
                name: 'Vols Premium',
                slug: 'vols-premium',
                subcategories: []
              },
              {
                id: 'vols-courts',
                name: 'Vols Courts',
                slug: 'vols-courts',
                subcategories: []
              },
              {
                id: 'vols-longs',
                name: 'Vols Longs',
                slug: 'vols-longs',
                subcategories: []
              },
              {
                id: 'vols-internationaux',
                name: 'Vols Internationaux',
                slug: 'vols-internationaux',
                subcategories: []
              },
              {
                id: 'vols-nationaux',
                name: 'Vols Nationaux',
                slug: 'vols-nationaux',
                subcategories: []
              }
            ]
          },
          {
            id: 'trains',
            name: 'Trains',
            slug: 'trains',
            subcategories: [
              {
                id: 'trains-grande-vitesse',
                name: 'Trains Grande Vitesse',
                slug: 'trains-grande-vitesse',
                subcategories: []
              },
              {
                id: 'trains-regionaux',
                name: 'Trains Régionaux',
                slug: 'trains-regionaux',
                subcategories: []
              },
              {
                id: 'trains-internationaux',
                name: 'Trains Internationaux',
                slug: 'trains-internationaux',
                subcategories: []
              },
              {
                id: 'trains-nuit',
                name: 'Trains Nuit',
                slug: 'trains-nuit',
                subcategories: []
              },
              {
                id: 'trains-touristiques',
                name: 'Trains Touristiques',
                slug: 'trains-touristiques',
                subcategories: []
              },
              {
                id: 'trains-premiere-classe',
                name: 'Trains Première Classe',
                slug: 'trains-premiere-classe',
                subcategories: []
              },
              {
                id: 'trains-economique',
                name: 'Trains Économique',
                slug: 'trains-economique',
                subcategories: []
              }
            ]
          },
          {
            id: 'bus',
            name: 'Bus',
            slug: 'bus',
            subcategories: [
              {
                id: 'bus-longue-distance',
                name: 'Bus Longue Distance',
                slug: 'bus-longue-distance',
                subcategories: []
              },
              {
                id: 'bus-regionaux',
                name: 'Bus Régionaux',
                slug: 'bus-regionaux',
                subcategories: []
              },
              {
                id: 'bus-touristiques',
                name: 'Bus Touristiques',
                slug: 'bus-touristiques',
                subcategories: []
              },
              {
                id: 'bus-internationaux',
                name: 'Bus Internationaux',
                slug: 'bus-internationaux',
                subcategories: []
              },
              {
                id: 'bus-nuit',
                name: 'Bus Nuit',
                slug: 'bus-nuit',
                subcategories: []
              },
              {
                id: 'bus-luxe',
                name: 'Bus Luxe',
                slug: 'bus-luxe',
                subcategories: []
              },
              {
                id: 'bus-minibus',
                name: 'Bus Minibus',
                slug: 'bus-minibus',
                subcategories: []
              }
            ]
          },
          {
            id: 'location-voitures',
            name: 'Location Voitures',
            slug: 'location-voitures',
            subcategories: [
              {
                id: 'location-voitures-economique',
                name: 'Location Voitures Économique',
                slug: 'location-voitures-economique',
                subcategories: []
              },
              {
                id: 'location-voitures-compact',
                name: 'Location Voitures Compact',
                slug: 'location-voitures-compact',
                subcategories: []
              },
              {
                id: 'location-voitures-berline',
                name: 'Location Voitures Berline',
                slug: 'location-voitures-berline',
                subcategories: []
              },
              {
                id: 'location-voitures-suv',
                name: 'Location Voitures SUV',
                slug: 'location-voitures-suv',
                subcategories: []
              },
              {
                id: 'location-voitures-luxe',
                name: 'Location Voitures Luxe',
                slug: 'location-voitures-luxe',
                subcategories: []
              },
              {
                id: 'location-voitures-utilitaire',
                name: 'Location Voitures Utilitaire',
                slug: 'location-voitures-utilitaire',
                subcategories: []
              },
              {
                id: 'location-voitures-sport',
                name: 'Location Voitures Sport',
                slug: 'location-voitures-sport',
                subcategories: []
              },
              {
                id: 'location-voitures-ecologique',
                name: 'Location Voitures Écologique',
                slug: 'location-voitures-ecologique',
                subcategories: []
              },
              {
                id: 'location-voitures-automatique',
                name: 'Location Voitures Automatique',
                slug: 'location-voitures-automatique',
                subcategories: []
              },
              {
                id: 'location-voitures-manuelle',
                name: 'Location Voitures Manuelle',
                slug: 'location-voitures-manuelle',
                subcategories: []
              }
            ]
          },
          {
            id: 'location-motos',
            name: 'Location Motos',
            slug: 'location-motos',
            subcategories: [
              {
                id: 'location-motos-route',
                name: 'Location Motos Route',
                slug: 'location-motos-route',
                subcategories: []
              },
              {
                id: 'location-motos-sport',
                name: 'Location Motos Sport',
                slug: 'location-motos-sport',
                subcategories: []
              },
              {
                id: 'location-motos-cruiser',
                name: 'Location Motos Cruiser',
                slug: 'location-motos-cruiser',
                subcategories: []
              },
              {
                id: 'location-motos-touring',
                name: 'Location Motos Touring',
                slug: 'location-motos-touring',
                subcategories: []
              },
              {
                id: 'location-motos-electrique',
                name: 'Location Motos Électrique',
                slug: 'location-motos-electrique',
                subcategories: []
              },
              {
                id: 'location-motos-scooter',
                name: 'Location Motos Scooter',
                slug: 'location-motos-scooter',
                subcategories: []
              },
              {
                id: 'location-motos-automatique',
                name: 'Location Motos Automatique',
                slug: 'location-motos-automatique',
                subcategories: []
              },
              {
                id: 'location-motos-manuelle',
                name: 'Location Motos Manuelle',
                slug: 'location-motos-manuelle',
                subcategories: []
              }
            ]
          },
          {
            id: 'location-velos',
            name: 'Location Vélos',
            slug: 'location-velos',
            subcategories: [
              {
                id: 'location-velos-ville',
                name: 'Location Vélos Ville',
                slug: 'location-velos-ville',
                subcategories: []
              },
              {
                id: 'location-velos-vtt',
                name: 'Location Vélos VTT',
                slug: 'location-velos-vtt',
                subcategories: []
              },
              {
                id: 'location-velos-electriques',
                name: 'Location Vélos Électriques',
                slug: 'location-velos-electriques',
                subcategories: []
              },
              {
                id: 'location-velos-plage',
                name: 'Location Vélos Plage',
                slug: 'location-velos-plage',
                subcategories: []
              },
              {
                id: 'location-velos-enfants',
                name: 'Location Vélos Enfants',
                slug: 'location-velos-enfants',
                subcategories: []
              },
              {
                id: 'location-velos-tandem',
                name: 'Location Vélos Tandem',
                slug: 'location-velos-tandem',
                subcategories: []
              },
              {
                id: 'location-velos-cargo',
                name: 'Location Vélos Cargo',
                slug: 'location-velos-cargo',
                subcategories: []
              }
            ]
          },
          {
            id: 'bateaux',
            name: 'Bateaux',
            slug: 'bateaux',
            subcategories: [
              {
                id: 'bateaux-moteur',
                name: 'Bateaux Moteur',
                slug: 'bateaux-moteur',
                subcategories: []
              },
              {
                id: 'bateaux-voile',
                name: 'Bateaux Voile',
                slug: 'bateaux-voile',
                subcategories: []
              },
              {
                id: 'bateaux-plaisance',
                name: 'Bateaux Plaisance',
                slug: 'bateaux-plaisance',
                subcategories: []
              },
              {
                id: 'bateaux-pêche',
                name: 'Bateaux Pêche',
                slug: 'bateaux-peche',
                subcategories: []
              },
              {
                id: 'bateaux-croisiere',
                name: 'Bateaux Croisière',
                slug: 'bateaux-croisiere',
                subcategories: []
              },
              {
                id: 'bateaux-zodiac',
                name: 'Bateaux Zodiac',
                slug: 'bateaux-zodiac',
                subcategories: []
              },
              {
                id: 'bateaux-kayak',
                name: 'Bateaux Kayak',
                slug: 'bateaux-kayak',
                subcategories: []
              },
              {
                id: 'bateaux-jet-ski',
                name: 'Bateaux Jet Ski',
                slug: 'bateaux-jet-ski',
                subcategories: []
              }
            ]
          },
          {
            id: 'navires',
            name: 'Navires',
            slug: 'navires',
            subcategories: [
              {
                id: 'navires-ferry',
                name: 'Navires Ferry',
                slug: 'navires-ferry',
                subcategories: []
              },
              {
                id: 'navires-cargo',
                name: 'Navires Cargo',
                slug: 'navires-cargo',
                subcategories: []
              },
              {
                id: 'navires-croisiere',
                name: 'Navires Croisière',
                slug: 'navires-croisiere',
                subcategories: []
              },
              {
                id: 'navires-conteneurs',
                name: 'Navires Conteneurs',
                slug: 'navires-conteneurs',
                subcategories: []
              },
              {
                id: 'navires-petroliers',
                name: 'Navires Pétroliers',
                slug: 'navires-petroliers',
                subcategories: []
              },
              {
                id: 'navires-bateaux-pilotes',
                name: 'Navires Bateaux Pilotes',
                slug: 'navires-bateaux-pilotes',
                subcategories: []
              }
            ]
          },
          {
            id: 'transferts-aeroports',
            name: 'Transferts Aéroports',
            slug: 'transferts-aeroports',
            subcategories: [
              {
                id: 'transferts-prives',
                name: 'Transferts Privés',
                slug: 'transferts-prives',
                subcategories: []
              },
              {
                id: 'transferts-partages',
                name: 'Transferts Partagés',
                slug: 'transferts-partages',
                subcategories: []
              },
              {
                id: 'transferts-luxe',
                name: 'Transferts Luxe',
                slug: 'transferts-luxe',
                subcategories: []
              },
              {
                id: 'transferts-navettes',
                name: 'Transferts Navettes',
                slug: 'transferts-navettes',
                subcategories: []
              },
              {
                id: 'transferts-bus',
                name: 'Transferts Bus',
                slug: 'transferts-bus',
                subcategories: []
              },
              {
                id: 'transferts-minibus',
                name: 'Transferts Minibus',
                slug: 'transferts-minibus',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'activites-touristiques',
        name: 'Activités Touristiques',
        slug: 'activites-touristiques',
        subcategories: [
          {
            id: 'visites-guidees',
            name: 'Visites Guidées',
            slug: 'visites-guidees',
            subcategories: [
              {
                id: 'visites-guidees-ville',
                name: 'Visites Guidées Ville',
                slug: 'visites-guidees-ville',
                subcategories: []
              },
              {
                id: 'visites-guidees-musees',
                name: 'Visites Guidées Musées',
                slug: 'visites-guidees-musees',
                subcategories: []
              },
              {
                id: 'visites-guidees-monuments',
                name: 'Visites Guidées Monuments',
                slug: 'visites-guidees-monuments',
                subcategories: []
              },
              {
                id: 'visites-guidees-nature',
                name: 'Visites Guidées Nature',
                slug: 'visites-guidees-nature',
                subcategories: []
              },
              {
                id: 'visites-guidees-vignes',
                name: 'Visites Guidées Vignes',
                slug: 'visites-guidees-vignes',
                subcategories: []
              },
              {
                id: 'visites-guidees-usines',
                name: 'Visites Guidées Usines',
                slug: 'visites-guidees-usines',
                subcategories: []
              },
              {
                id: 'visites-guidees-gastronomie',
                name: 'Visites Guidées Gastronomie',
                slug: 'visites-guidees-gastronomie',
                subcategories: []
              },
              {
                id: 'visites-guidees-architecture',
                name: 'Visites Guidées Architecture',
                slug: 'visites-guidees-architecture',
                subcategories: []
              },
              {
                id: 'visites-guidees-histoire',
                name: 'Visites Guidées Histoire',
                slug: 'visites-guidees-histoire',
                subcategories: []
              },
              {
                id: 'visites-guidees-phantom',
                name: 'Visites Guidées Fantôme',
                slug: 'visites-guidees-phantom',
                subcategories: []
              }
            ]
          },
          {
            id: 'excursions',
            name: 'Excursions',
            slug: 'excursions',
            subcategories: [
              {
                id: 'excursions-journee',
                name: 'Excursions Journée',
                slug: 'excursions-journee',
                subcategories: []
              },
              {
                id: 'excursions-demi-journee',
                name: 'Excursions Demi-Journée',
                slug: 'excursions-demi-journee',
                subcategories: []
              },
              {
                id: 'excursions-multiple-jours',
                name: 'Excursions Multiple Jours',
                slug: 'excursions-multiple-jours',
                subcategories: []
              },
              {
                id: 'excursions-nature',
                name: 'Excursions Nature',
                slug: 'excursions-nature',
                subcategories: []
              },
              {
                id: 'excursions-montagne',
                name: 'Excursions Montagne',
                slug: 'excursions-montagne',
                subcategories: []
              },
              {
                id: 'excursions-mer',
                name: 'Excursions Mer',
                slug: 'excursions-mer',
                subcategories: []
              },
              {
                id: 'excursions-desert',
                name: 'Excursions Désert',
                slug: 'excursions-desert',
                subcategories: []
              },
              {
                id: 'excursions-culturelles',
                name: 'Excursions Culturelles',
                slug: 'excursions-culturelles',
                subcategories: []
              },
              {
                id: 'excursions-gastronomiques',
                name: 'Excursions Gastronomiques',
                slug: 'excursions-gastronomiques',
                subcategories: []
              },
              {
                id: 'excursions-aventure',
                name: 'Excursions Aventure',
                slug: 'excursions-aventure',
                subcategories: []
              }
            ]
          },
          {
            id: 'sports-nature',
            name: 'Sports Nature',
            slug: 'sports-nature',
            subcategories: [
              {
                id: 'randonnee',
                name: 'Randonnée',
                slug: 'randonnee',
                subcategories: []
              },
              {
                id: 'escalade',
                name: 'Escalade',
                slug: 'escalade',
                subcategories: []
              },
              {
                id: 'alpinisme',
                name: 'Alpinisme',
                slug: 'alpinisme',
                subcategories: []
              },
              {
                id: 'canyoning',
                name: 'Canyoning',
                slug: 'canyoning',
                subcategories: []
              },
              {
                id: 'rafting',
                name: 'Rafting',
                slug: 'rafting',
                subcategories: []
              },
              {
                id: 'kayak',
                name: 'Kayak',
                slug: 'kayak',
                subcategories: []
              },
              {
                id: 'parapente',
                name: 'Parapente',
                slug: 'parapente',
                subcategories: []
              },
              {
                id: 'deltaplane',
                name: 'Deltaplane',
                slug: 'deltaplane',
                subcategories: []
              },
              {
                id: 'ski',
                name: 'Ski',
                slug: 'ski',
                subcategories: []
              },
              {
                id: 'snowboard',
                name: 'Snowboard',
                slug: 'snowboard',
                subcategories: []
              },
              {
                id: 'luge',
                name: 'Luge',
                slug: 'luge',
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
                id: 'plongee',
                name: 'Plongée',
                slug: 'plongee',
                subcategories: []
              },
              {
                id: 'snorkeling',
                name: 'Snorkeling',
                slug: 'snorkeling',
                subcategories: []
              },
              {
                id: 'kayak-mer',
                name: 'Kayak Mer',
                slug: 'kayak-mer',
                subcategories: []
              },
              {
                id: 'paddle',
                name: 'Paddle',
                slug: 'paddle',
                subcategories: []
              },
              {
                id: 'surf',
                name: 'Surf',
                slug: 'surf',
                subcategories: []
              },
              {
                id: 'kitesurf',
                name: 'Kitesurf',
                slug: 'kitesurf',
                subcategories: []
              },
              {
                id: 'windsurf',
                name: 'Windsurf',
                slug: 'windsurf',
                subcategories: []
              },
              {
                id: 'jet-ski',
                name: 'Jet Ski',
                slug: 'jet-ski',
                subcategories: []
              },
              {
                id: 'bouee-tractee',
                name: 'Bouée Tractée',
                slug: 'bouee-tractee',
                subcategories: []
              },
              {
                id: 'parachutisme',
                name: 'Parachutisme',
                slug: 'parachutisme',
                subcategories: []
              }
            ]
          },
          {
            id: 'loisirs',
            name: 'Loisirs',
            slug: 'loisirs',
            subcategories: [
              {
                id: 'parcs-attractions',
                name: 'Parcs Attractions',
                slug: 'parcs-attractions',
                subcategories: []
              },
              {
                id: 'parcs-aquatiques',
                name: 'Parcs Aquatiques',
                slug: 'parcs-aquatiques',
                subcategories: []
              },
              {
                id: 'zoos',
                name: 'Zoos',
                slug: 'zoos',
                subcategories: []
              },
              {
                id: 'aquariums',
                name: 'Aquariums',
                slug: 'aquariums',
                subcategories: []
              },
              {
                id: 'parcs-thematiques',
                name: 'Parcs Thématiques',
                slug: 'parcs-thematiques',
                subcategories: []
              },
              {
                id: 'casinos',
                name: 'Casinos',
                slug: 'casinos',
                subcategories: []
              },
              {
                id: 'discos',
                name: 'Discos',
                slug: 'discos',
                subcategories: []
              },
              {
                id: 'bars',
                name: 'Bars',
                slug: 'bars',
                subcategories: []
              },
              {
                id: 'clubs',
                name: 'Clubs',
                slug: 'clubs',
                subcategories: []
              },
              {
                id: 'karaokes',
                name: 'Karaokés',
                slug: 'karaokes',
                subcategories: []
              },
              {
                id: 'bowling',
                name: 'Bowling',
                slug: 'bowling',
                subcategories: []
              },
              {
                id: 'cinemas',
                name: 'Cinemas',
                slug: 'cinemas',
                subcategories: []
              },
              {
                id: 'theatres',
                name: 'Théâtres',
                slug: 'theatres',
                subcategories: []
              }
            ]
          },
          {
            id: 'bien-etre',
            name: 'Bien-être',
            slug: 'bien-etre',
            subcategories: [
              {
                id: 'spas',
                name: 'Spas',
                slug: 'spas',
                subcategories: []
              },
              {
                id: 'centres-thermaux',
                name: 'Centres Thermaux',
                slug: 'centres-thermaux',
                subcategories: []
              },
              {
                id: 'hammams',
                name: 'Hammams',
                slug: 'hammams',
                subcategories: []
              },
              {
                id: 'saunas',
                name: 'Saunas',
                slug: 'saunas',
                subcategories: []
              },
              {
                id: 'massages',
                name: 'Massages',
                slug: 'massages',
                subcategories: []
              },
              {
                id: 'soins-corps',
                name: 'Soins Corps',
                slug: 'soins-corps',
                subcategories: []
              },
              {
                id: 'soins-visage',
                name: 'Soins Visage',
                slug: 'soins-visage',
                subcategories: []
              },
              {
                id: 'soins-esthetiques',
                name: 'Soins Esthétiques',
                slug: 'soins-esthetiques',
                subcategories: []
              },
              {
                id: 'yoga',
                name: 'Yoga',
                slug: 'yoga',
                subcategories: []
              },
              {
                id: 'meditation',
                name: 'Méditation',
                slug: 'meditation',
                subcategories: []
              },
              {
                id: 'pilates',
                name: 'Pilates',
                slug: 'pilates',
                subcategories: []
              },
              {
                id: 'fitness',
                name: 'Fitness',
                slug: 'fitness',
                subcategories: []
              }
            ]
          },
          {
            id: 'gastronomie',
            name: 'Gastronomie',
            slug: 'gastronomie',
            subcategories: [
              {
                id: 'restaurants',
                name: 'Restaurants',
                slug: 'restaurants',
                subcategories: []
              },
              {
                id: 'bars-restaurants',
                name: 'Bars Restaurants',
                slug: 'bars-restaurants',
                subcategories: []
              },
              {
                id: 'degustations',
                name: 'Dégustations',
                slug: 'degustations',
                subcategories: []
              },
              {
                id: 'cours-cuisine',
                name: 'Cours Cuisine',
                slug: 'cours-cuisine',
                subcategories: []
              },
              {
                id: 'marches-locaux',
                name: 'Marchés Locaux',
                slug: 'marches-locaux',
                subcategories: []
              },
              {
                id: 'produits-regionaux',
                name: 'Produits Régionaux',
                slug: 'produits-regionaux',
                subcategories: []
              },
              {
                id: 'vins-regionaux',
                name: 'Vins Régionaux',
                slug: 'vins-regionaux',
                subcategories: []
              },
              {
                id: 'biere-artisanale',
                name: 'Bière Artisanale',
                slug: 'biere-artisanale',
                subcategories: []
              },
              {
                id: 'fromages-artisanaux',
                name: 'Fromages Artisanaux',
                slug: 'fromages-artisanaux',
                subcategories: []
              },
              {
                id: 'specialites-culinaires',
                name: 'Spécialités Culinaires',
                slug: 'specialites-culinaires',
                subcategories: []
              }
            ]
          },
          {
            id: 'shopping',
            name: 'Shopping',
            slug: 'shopping',
            subcategories: [
              {
                id: 'centres-commerciaux',
                name: 'Centres Commerciaux',
                slug: 'centres-commerciaux',
                subcategories: []
              },
              {
                id: 'rues-commerciales',
                name: 'Rues Commerciales',
                slug: 'rues-commerciales',
                subcategories: []
              },
              {
                id: 'marches-artisanaux',
                name: 'Marchés Artisanaux',
                slug: 'marches-artisanaux',
                subcategories: []
              },
              {
                id: 'souvenirs',
                name: 'Souvenirs',
                slug: 'souvenirs',
                subcategories: []
              },
              {
                id: 'produits-locaux',
                name: 'Produits Locaux',
                slug: 'produits-locaux',
                subcategories: []
              },
              {
                id: 'art-galerie',
                name: 'Art Galerie',
                slug: 'art-galerie',
                subcategories: []
              },
              {
                id: 'antiquites',
                name: 'Antiquités',
                slug: 'antiquites',
                subcategories: []
              },
              {
                id: 'brocantes',
                name: 'Brocantes',
                slug: 'brocantes',
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
const mergedCategories = `[${existingCategoriesData},${voyagesCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté, Animaux & Accessoires, Événements & Billetterie et Voyages & Tourisme
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
  console.log(`📊 Catégorie "Voyages & Tourisme" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Voyages & Tourisme ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');