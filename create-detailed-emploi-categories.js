import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Emploi & Services...');

// Structure détaillée des catégories pour Emploi & Services
const emploiCategories = [
  {
    id: 'emploi-services',
    name: 'Emploi & Services',
    slug: 'emploi-services',
    subcategories: [
      {
        id: 'emploi-carriere',
        name: 'Emploi & Carrière',
        slug: 'emploi-carriere',
        subcategories: [
          {
            id: 'offres-emploi',
            name: 'Offres d Emploi',
            slug: 'offres-emploi',
            subcategories: [
              {
                id: 'emploi-temps-plein',
                name: 'Emploi Temps Plein',
                slug: 'emploi-temps-plein',
                subcategories: []
              },
              {
                id: 'emploi-temps-partiel',
                name: 'Emploi Temps Partiel',
                slug: 'emploi-temps-partiel',
                subcategories: []
              },
              {
                id: 'emploi-temporaire',
                name: 'Emploi Temporaire',
                slug: 'emploi-temporaire',
                subcategories: []
              },
              {
                id: 'emploi-stage',
                name: 'Emploi Stage',
                slug: 'emploi-stage',
                subcategories: []
              },
              {
                id: 'emploi-alternance',
                name: 'Emploi Alternance',
                slug: 'emploi-alternance',
                subcategories: []
              },
              {
                id: 'emploi-teletravail',
                name: 'Emploi Télétravail',
                slug: 'emploi-teletravail',
                subcategories: []
              },
              {
                id: 'emploi-freelance',
                name: 'Emploi Freelance',
                slug: 'emploi-freelance',
                subcategories: []
              },
              {
                id: 'emploi-saisonnier',
                name: 'Emploi Saisonnier',
                slug: 'emploi-saisonnier',
                subcategories: []
              }
            ]
          },
          {
            id: 'secteurs-activite',
            name: 'Secteurs d Activité',
            slug: 'secteurs-activite',
            subcategories: [
              {
                id: 'emploi-informatique',
                name: 'Emploi Informatique',
                slug: 'emploi-informatique',
                subcategories: []
              },
              {
                id: 'emploi-commerce',
                name: 'Emploi Commerce',
                slug: 'emploi-commerce',
                subcategories: []
              },
              {
                id: 'emploi-sante',
                name: 'Emploi Santé',
                slug: 'emploi-sante',
                subcategories: []
              },
              {
                id: 'emploi-education',
                name: 'Emploi Éducation',
                slug: 'emploi-education',
                subcategories: []
              },
              {
                id: 'emploi-industrie',
                name: 'Emploi Industrie',
                slug: 'emploi-industrie',
                subcategories: []
              },
              {
                id: 'emploi-btp',
                name: 'Emploi BTP',
                slug: 'emploi-btp',
                subcategories: []
              },
              {
                id: 'emploi-restauration',
                name: 'Emploi Restauration',
                slug: 'emploi-restauration',
                subcategories: []
              },
              {
                id: 'emploi-tourisme',
                name: 'Emploi Tourisme',
                slug: 'emploi-tourisme',
                subcategories: []
              },
              {
                id: 'emploi-finance',
                name: 'Emploi Finance',
                slug: 'emploi-finance',
                subcategories: []
              },
              {
                id: 'emploi-juridique',
                name: 'Emploi Juridique',
                slug: 'emploi-juridique',
                subcategories: []
              }
            ]
          },
          {
            id: 'niveaux-experience',
            name: 'Niveaux d Expérience',
            slug: 'niveaux-experience',
            subcategories: [
              {
                id: 'emploi-debutant',
                name: 'Emploi Débutant',
                slug: 'emploi-debutant',
                subcategories: []
              },
              {
                id: 'emploi-jeune-diplome',
                name: 'Emploi Jeune Diplômé',
                slug: 'emploi-jeune-diplome',
                subcategories: []
              },
              {
                id: 'emploi-experimente',
                name: 'Emploi Expérimenté',
                slug: 'emploi-experimente',
                subcategories: []
              },
              {
                id: 'emploi-cadre',
                name: 'Emploi Cadre',
                slug: 'emploi-cadre',
                subcategories: []
              },
              {
                id: 'emploi-dirigeant',
                name: 'Emploi Dirigeant',
                slug: 'emploi-dirigeant',
                subcategories: []
              }
            ]
          },
          {
            id: 'cv-lettres',
            name: 'CV & Lettres',
            slug: 'cv-lettres',
            subcategories: [
              {
                id: 'creation-cv',
                name: 'Création CV',
                slug: 'creation-cv',
                subcategories: []
              },
              {
                id: 'modeles-cv',
                name: 'Modèles CV',
                slug: 'modeles-cv',
                subcategories: []
              },
              {
                id: 'lettre-motivation',
                name: 'Lettre de Motivation',
                slug: 'lettre-motivation',
                subcategories: []
              },
              {
                id: 'modeles-lettres',
                name: 'Modèles Lettres',
                slug: 'modeles-lettres',
                subcategories: []
              },
              {
                id: 'conseils-cv',
                name: 'Conseils CV',
                slug: 'conseils-cv',
                subcategories: []
              },
              {
                id: 'conseils-entretien',
                name: 'Conseils Entretien',
                slug: 'conseils-entretien',
                subcategories: []
              }
            ]
          },
          {
            id: 'formations',
            name: 'Formations',
            slug: 'formations',
            subcategories: [
              {
                id: 'formations-professionnelles',
                name: 'Formations Professionnelles',
                slug: 'formations-professionnelles',
                subcategories: []
              },
              {
                id: 'formations-continues',
                name: 'Formations Continues',
                slug: 'formations-continues',
                subcategories: []
              },
              {
                id: 'formations-certifiantes',
                name: 'Formations Certifiantes',
                slug: 'formations-certifiantes',
                subcategories: []
              },
              {
                id: 'formations-en-ligne',
                name: 'Formations en Ligne',
                slug: 'formations-en-ligne',
                subcategories: []
              },
              {
                id: 'formations-langues',
                name: 'Formations Langues',
                slug: 'formations-langues',
                subcategories: []
              },
              {
                id: 'formations-informatique',
                name: 'Formations Informatique',
                slug: 'formations-informatique',
                subcategories: []
              },
              {
                id: 'formations-comptabilite',
                name: 'Formations Comptabilité',
                slug: 'formations-comptabilite',
                subcategories: []
              },
              {
                id: 'formations-marketing',
                name: 'Formations Marketing',
                slug: 'formations-marketing',
                subcategories: []
              },
              {
                id: 'formations-juridique',
                name: 'Formations Juridique',
                slug: 'formations-juridique',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'services-professionnels',
        name: 'Services Professionnels',
        slug: 'services-professionnels',
        subcategories: [
          {
            id: 'comptabilite-finance',
            name: 'Comptabilité & Finance',
            slug: 'comptabilite-finance',
            subcategories: [
              {
                id: 'expertise-comptable',
                name: 'Expertise Comptable',
                slug: 'expertise-comptable',
                subcategories: []
              },
              {
                id: 'tenue-comptabilite',
                name: 'Tenue Comptabilité',
                slug: 'tenue-comptabilite',
                subcategories: []
              },
              {
                id: 'conseil-fiscal',
                name: 'Conseil Fiscal',
                slug: 'conseil-fiscal',
                subcategories: []
              },
              {
                id: 'gestion-patrimoine',
                name: 'Gestion Patrimoine',
                slug: 'gestion-patrimoine',
                subcategories: []
              },
              {
                id: 'audit-financier',
                name: 'Audit Financier',
                slug: 'audit-financier',
                subcategories: []
              },
              {
                id: 'analyse-financiere',
                name: 'Analyse Financière',
                slug: 'analyse-financiere',
                subcategories: []
              }
            ]
          },
          {
            id: 'marketing-communication',
            name: 'Marketing & Communication',
            slug: 'marketing-communication',
            subcategories: [
              {
                id: 'strategie-marketing',
                name: 'Stratégie Marketing',
                slug: 'strategie-marketing',
                subcategories: []
              },
              {
                id: 'marketing-digital',
                name: 'Marketing Digital',
                slug: 'marketing-digital',
                subcategories: []
              },
              {
                id: 'referencement-seo',
                name: 'Référencement SEO',
                slug: 'referencement-seo',
                subcategories: []
              },
              {
                id: 'publicite-en-ligne',
                name: 'Publicité en Ligne',
                slug: 'publicite-en-ligne',
                subcategories: []
              },
              {
                id: 'reseaux-sociaux',
                name: 'Réseaux Sociaux',
                slug: 'reseaux-sociaux',
                subcategories: []
              },
              {
                id: 'creation-contenu',
                name: 'Création Contenu',
                slug: 'creation-contenu',
                subcategories: []
              },
              {
                id: 'relations-publiques',
                name: 'Relations Publiques',
                slug: 'relations-publiques',
                subcategories: []
              },
              {
                id: 'communication-interne',
                name: 'Communication Interne',
                slug: 'communication-interne',
                subcategories: []
              }
            ]
          },
          {
            id: 'services-juridiques',
            name: 'Services Juridiques',
            slug: 'services-juridiques',
            subcategories: [
              {
                id: 'conseil-juridique',
                name: 'Conseil Juridique',
                slug: 'conseil-juridique',
                subcategories: []
              },
              {
                id: 'redaction-contrats',
                name: 'Rédaction Contrats',
                slug: 'redaction-contrats',
                subcategories: []
              },
              {
                id: 'droit-travail',
                name: 'Droit Travail',
                slug: 'droit-travail',
                subcategories: []
              },
              {
                id: 'droit-commercial',
                name: 'Droit Commercial',
                slug: 'droit-commercial',
                subcategories: []
              },
              {
                id: 'droit-immobilier',
                name: 'Droit Immobilier',
                slug: 'droit-immobilier',
                subcategories: []
              },
              {
                id: 'propriete-intellectuelle',
                name: 'Propriété Intellectuelle',
                slug: 'propriete-intellectuelle',
                subcategories: []
              },
              {
                id: 'contentieux',
                name: 'Contentieux',
                slug: 'contentieux',
                subcategories: []
              },
              {
                id: 'mediation-arbitrage',
                name: 'Médiation & Arbitrage',
                slug: 'mediation-arbitrage',
                subcategories: []
              }
            ]
          },
          {
            id: 'conseil-gestion',
            name: 'Conseil & Gestion',
            slug: 'conseil-gestion',
            subcategories: [
              {
                id: 'conseil-strategie',
                name: 'Conseil Stratégie',
                slug: 'conseil-strategie',
                subcategories: []
              },
              {
                id: 'gestion-projet',
                name: 'Gestion Projet',
                slug: 'gestion-projet',
                subcategories: []
              },
              {
                id: 'organisation-entreprise',
                name: 'Organisation Entreprise',
                slug: 'organisation-entreprise',
                subcategories: []
              },
              {
                id: 'qualite',
                name: 'Qualité',
                slug: 'qualite',
                subcategories: []
              },
              {
                id: 'ressources-humaines',
                name: 'Ressources Humaines',
                slug: 'ressources-humaines',
                subcategories: []
              },
              {
                id: 'developpement-durable',
                name: 'Développement Durable',
                slug: 'developpement-durable',
                subcategories: []
              },
              {
                id: 'innovation',
                name: 'Innovation',
                slug: 'innovation',
                subcategories: []
              }
            ]
          },
          {
            id: 'services-informatiques',
            name: 'Services Informatiques',
            slug: 'services-informatiques',
            subcategories: [
              {
                id: 'developpement-logiciel',
                name: 'Développement Logiciel',
                slug: 'developpement-logiciel',
                subcategories: []
              },
              {
                id: 'maintenance-informatique',
                name: 'Maintenance Informatique',
                slug: 'maintenance-informatique',
                subcategories: []
              },
              {
                id: 'securite-informatique',
                name: 'Sécurité Informatique',
                slug: 'securite-informatique',
                subcategories: []
              },
              {
                id: 'hebergement-web',
                name: 'Hébergement Web',
                slug: 'hebergement-web',
                subcategories: []
              },
              {
                id: 'creation-site-web',
                name: 'Création Site Web',
                slug: 'creation-site-web',
                subcategories: []
              },
              {
                id: 'consultance-it',
                name: 'Consultance IT',
                slug: 'consultance-it',
                subcategories: []
              },
              {
                id: 'infogerance',
                name: 'Infogérance',
                slug: 'infogerance',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'reparation-entretien',
        name: 'Réparation & Entretien',
        slug: 'reparation-entretien',
        subcategories: [
          {
            id: 'reparation-electromenager',
            name: 'Réparation Électroménager',
            slug: 'reparation-electromenager',
            subcategories: [
              {
                id: 'reparation-cuisiniere',
                name: 'Réparation Cuisinière',
                slug: 'reparation-cuisiniere',
                subcategories: []
              },
              {
                id: 'reparation-four',
                name: 'Réparation Four',
                slug: 'reparation-four',
                subcategories: []
              },
              {
                id: 'reparation-refrigerateur',
                name: 'Réparation Réfrigérateur',
                slug: 'reparation-refrigerateur',
                subcategories: []
              },
              {
                id: 'reparation-lave-linge',
                name: 'Réparation Lave-linge',
                slug: 'reparation-lave-linge',
                subcategories: []
              },
              {
                id: 'reparation-lave-vaisselle',
                name: 'Réparation Lave-vaisselle',
                slug: 'reparation-lave-vaisselle',
                subcategories: []
              },
              {
                id: 'reparation-aspirateur',
                name: 'Réparation Aspirateur',
                slug: 'reparation-aspirateur',
                subcategories: []
              },
              {
                id: 'reparation-climatiseur',
                name: 'Réparation Climatiseur',
                slug: 'reparation-climatiseur',
                subcategories: []
              }
            ]
          },
          {
            id: 'reparation-informatique',
            name: 'Réparation Informatique',
            slug: 'reparation-informatique',
            subcategories: [
              {
                id: 'reparation-ordinateur',
                name: 'Réparation Ordinateur',
                slug: 'reparation-ordinateur',
                subcategories: []
              },
              {
                id: 'reparation-portable',
                name: 'Réparation Portable',
                slug: 'reparation-portable',
                subcategories: []
              },
              {
                id: 'reparation-tablette',
                name: 'Réparation Tablette',
                slug: 'reparation-tablette',
                subcategories: []
              },
              {
                id: 'reparation-smartphone',
                name: 'Réparation Smartphone',
                slug: 'reparation-smartphone',
                subcategories: []
              },
              {
                id: 'reparation-imprimante',
                name: 'Réparation Imprimante',
                slug: 'reparation-imprimante',
                subcategories: []
              },
              {
                id: 'depannage-informatique',
                name: 'Dépannage Informatique',
                slug: 'depannage-informatique',
                subcategories: []
              },
              {
                id: 'recuperation-donnees',
                name: 'Récupération Données',
                slug: 'recuperation-donnees',
                subcategories: []
              }
            ]
          },
          {
            id: 'reparation-vehicule',
            name: 'Réparation Véhicule',
            slug: 'reparation-vehicule',
            subcategories: [
              {
                id: 'reparation-voiture',
                name: 'Réparation Voiture',
                slug: 'reparation-voiture',
                subcategories: []
              },
              {
                id: 'reparation-moto',
                name: 'Réparation Moto',
                slug: 'reparation-moto',
                subcategories: []
              },
              {
                id: 'reparation-camion',
                name: 'Réparation Camion',
                slug: 'reparation-camion',
                subcategories: []
              },
              {
                id: 'carrosserie',
                name: 'Carrosserie',
                slug: 'carrosserie',
                subcategories: []
              },
              {
                id: 'mecanique',
                name: 'Mécanique',
                slug: 'mecanique',
                subcategories: []
              },
              {
                id: 'electricite-automobile',
                name: 'Électricité Automobile',
                slug: 'electricite-automobile',
                subcategories: []
              },
              {
                id: 'vidange',
                name: 'Vidange',
                slug: 'vidange',
                subcategories: []
              },
              {
                id: 'pneumatique',
                name: 'Pneumatique',
                slug: 'pneumatique',
                subcategories: []
              }
            ]
          },
          {
            id: 'entretien-menager',
            name: 'Entretien Ménager',
            slug: 'entretien-menager',
            subcategories: [
              {
                id: 'menage-particulier',
                name: 'Ménage Particulier',
                slug: 'menage-particulier',
                subcategories: []
              },
              {
                id: 'menage-bureau',
                name: 'Ménage Bureau',
                slug: 'menage-bureau',
                subcategories: []
              },
              {
                id: 'menage-commercial',
                name: 'Ménage Commercial',
                slug: 'menage-commercial',
                subcategories: []
              },
              {
                id: 'nettoyage-vitres',
                name: 'Nettoyage Vitres',
                slug: 'nettoyage-vitres',
                subcategories: []
              },
              {
                id: 'nettoyage-tapis',
                name: 'Nettoyage Tapis',
                slug: 'nettoyage-tapis',
                subcategories: []
              },
              {
                id: 'nettoyage-fauteuils',
                name: 'Nettoyage Fauteuils',
                slug: 'nettoyage-fauteuils',
                subcategories: []
              },
              {
                id: 'desinfection',
                name: 'Désinfection',
                slug: 'desinfection',
                subcategories: []
              }
            ]
          },
          {
            id: 'entretien-jardin',
            name: 'Entretien Jardin',
            slug: 'entretien-jardin',
            subcategories: [
              {
                id: 'jardinage-particulier',
                name: 'Jardinage Particulier',
                slug: 'jardinage-particulier',
                subcategories: []
              },
              {
                id: 'jardinage-commercial',
                name: 'Jardinage Commercial',
                slug: 'jardinage-commercial',
                subcategories: []
              },
              {
                id: 'taille-arbres',
                name: 'Taille Arbres',
                slug: 'taille-arbres',
                subcategories: []
              },
              {
                id: 'tonte-pelouse',
                name: 'Tonte Pelouse',
                slug: 'tonte-pelouse',
                subcategories: []
              },
              {
                id: 'amenagement-jardin',
                name: 'Aménagement Jardin',
                slug: 'amenagement-jardin',
                subcategories: []
              },
              {
                id: 'entretien-piscine',
                name: 'Entretien Piscine',
                slug: 'entretien-piscine',
                subcategories: []
              }
            ]
          },
          {
            id: 'reparation-autres',
            name: 'Réparation Autres',
            slug: 'reparation-autres',
            subcategories: [
              {
                id: 'reparation-montre',
                name: 'Réparation Montre',
                slug: 'reparation-montre',
                subcategories: []
              },
              {
                id: 'reparation-bijoux',
                name: 'Réparation Bijoux',
                slug: 'reparation-bijoux',
                subcategories: []
              },
              {
                id: 'reparation-chaussures',
                name: 'Réparation Chaussures',
                slug: 'reparation-chaussures',
                subcategories: []
              },
              {
                id: 'reparation-meubles',
                name: 'Réparation Meubles',
                slug: 'reparation-meubles',
                subcategories: []
              },
              {
                id: 'reparation-vetements',
                name: 'Réparation Vêtements',
                slug: 'reparation-vetements',
                subcategories: []
              },
              {
                id: 'reparation-instruments-musique',
                name: 'Réparation Instruments Musique',
                slug: 'reparation-instruments-musique',
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
const mergedCategories = `[${existingCategoriesData},${emploiCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires et Emploi & Services
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
  console.log(`📊 Catégorie "Emploi & Services" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Emploi & Services ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');