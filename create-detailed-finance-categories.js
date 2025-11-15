import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Finance & Monnaie Fiduciaire...');

// Structure détaillée des catégories pour Finance & Monnaie Fiduciaire
const financeCategories = [
  {
    id: 'finance-monnaie-fiduciaire',
    name: 'Finance & Monnaie Fiduciaire',
    slug: 'finance-monnaie-fiduciaire',
    subcategories: [
      {
        id: 'services-bancaires',
        name: 'Services Bancaires',
        slug: 'services-bancaires',
        subcategories: [
          {
            id: 'comptes-bancaires',
            name: 'Comptes Bancaires',
            slug: 'comptes-bancaires',
            subcategories: [
              {
                id: 'comptes-courants',
                name: 'Comptes Courants',
                slug: 'comptes-courants',
                subcategories: []
              },
              {
                id: 'comptes-epargne',
                name: 'Comptes Épargne',
                slug: 'comptes-epargne',
                subcategories: []
              },
              {
                id: 'comptes-titres',
                name: 'Comptes Titres',
                slug: 'comptes-titres',
                subcategories: []
              },
              {
                id: 'comptes-joints',
                name: 'Comptes Joints',
                slug: 'comptes-joints',
                subcategories: []
              },
              {
                id: 'comptes-enfants',
                name: 'Comptes Enfants',
                slug: 'comptes-enfants',
                subcategories: []
              },
              {
                id: 'comptes-entreprises',
                name: 'Comptes Entreprises',
                slug: 'comptes-entreprises',
                subcategories: []
              },
              {
                id: 'comptes-etrangers',
                name: 'Comptes Étrangers',
                slug: 'comptes-etrangers',
                subcategories: []
              },
              {
                id: 'comptes-numeriques',
                name: 'Comptes Numériques',
                slug: 'comptes-numeriques',
                subcategories: []
              }
            ]
          },
          {
            id: 'cartes-bancaires',
            name: 'Cartes Bancaires',
            slug: 'cartes-bancaires',
            subcategories: [
              {
                id: 'cartes-debit',
                name: 'Cartes Débit',
                slug: 'cartes-debit',
                subcategories: []
              },
              {
                id: 'cartes-credit',
                name: 'Cartes Crédit',
                slug: 'cartes-credit',
                subcategories: []
              },
              {
                id: 'cartes-prepayees',
                name: 'Cartes Prépayées',
                slug: 'cartes-prepayees',
                subcategories: []
              },
              {
                id: 'cartes-virtuelles',
                name: 'Cartes Virtuelles',
                slug: 'cartes-virtuelles',
                subcategories: []
              },
              {
                id: 'cartes-affaires',
                name: 'Cartes Affaires',
                slug: 'cartes-affaires',
                subcategories: []
              },
              {
                id: 'cartes-etudiantes',
                name: 'Cartes Étudiantes',
                slug: 'cartes-etudiantes',
                subcategories: []
              },
              {
                id: 'cartes-premium',
                name: 'Cartes Premium',
                slug: 'cartes-premium',
                subcategories: []
              }
            ]
          },
          {
            id: 'prets',
            name: 'Prêts',
            slug: 'prets',
            subcategories: [
              {
                id: 'prets-immobilier',
                name: 'Prêts Immobilier',
                slug: 'prets-immobilier',
                subcategories: []
              },
              {
                id: 'prets-consommation',
                name: 'Prêts Consommation',
                slug: 'prets-consommation',
                subcategories: []
              },
              {
                id: 'prets-automobile',
                name: 'Prêts Automobile',
                slug: 'prets-automobile',
                subcategories: []
              },
              {
                id: 'prets-etudes',
                name: 'Prêts Études',
                slug: 'prets-etudes',
                subcategories: []
              },
              {
                id: 'prets-personnels',
                name: 'Prêts Personnels',
                slug: 'prets-personnels',
                subcategories: []
              },
              {
                id: 'prets-travaux',
                name: 'Prêts Travaux',
                slug: 'prets-travaux',
                subcategories: []
              },
              {
                id: 'prets-relais',
                name: 'Prêts Relais',
                slug: 'prets-relais',
                subcategories: []
              },
              {
                id: 'prets-rapides',
                name: 'Prêts Rapides',
                slug: 'prets-rapides',
                subcategories: []
              }
            ]
          },
          {
            id: 'epargne',
            name: 'Épargne',
            slug: 'epargne',
            subcategories: [
              {
                id: 'livrets-epargne',
                name: 'Livrets Épargne',
                slug: 'livrets-epargne',
                subcategories: []
              },
              {
                id: 'plans-epargne',
                name: 'Plans Épargne',
                slug: 'plans-epargne',
                subcategories: []
              },
              {
                id: 'comptes-epargne-logement',
                name: 'Comptes Épargne Logement',
                slug: 'comptes-epargne-logement',
                subcategories: []
              },
              {
                id: 'comptes-epargne-retraite',
                name: 'Comptes Épargne Retraite',
                slug: 'comptes-epargne-retraite',
                subcategories: []
              },
              {
                id: 'comptes-epargne-enfants',
                name: 'Comptes Épargne Enfants',
                slug: 'comptes-epargne-enfants',
                subcategories: []
              },
              {
                id: 'comptes-epargne-projets',
                name: 'Comptes Épargne Projets',
                slug: 'comptes-epargne-projets',
                subcategories: []
              },
              {
                id: 'comptes-epargne-entreprises',
                name: 'Comptes Épargne Entreprises',
                slug: 'comptes-epargne-entreprises',
                subcategories: []
              }
            ]
          },
          {
            id: 'virements',
            name: 'Virements',
            slug: 'virements',
            subcategories: [
              {
                id: 'virements-comptes',
                name: 'Virements Comptes',
                slug: 'virements-comptes',
                subcategories: []
              },
              {
                id: 'virements-permanents',
                name: 'Virements Permanents',
                slug: 'virements-permanents',
                subcategories: []
              },
              {
                id: 'virements-occasionnels',
                name: 'Virements Occasionnels',
                slug: 'virements-occasionnels',
                subcategories: []
              },
              {
                id: 'virements-internationaux',
                name: 'Virements Internationaux',
                slug: 'virements-internationaux',
                subcategories: []
              },
              {
                id: 'virements-instantanes',
                name: 'Virements Instantanés',
                slug: 'virements-instantanes',
                subcategories: []
              },
              {
                id: 'virements-mobile',
                name: 'Virements Mobile',
                slug: 'virements-mobile',
                subcategories: []
              },
              {
                id: 'virements-en-ligne',
                name: 'Virements En Ligne',
                slug: 'virements-en-ligne',
                subcategories: []
              }
            ]
          },
          {
            id: 'change',
            name: 'Change',
            slug: 'change',
            subcategories: [
              {
                id: 'change-bureau',
                name: 'Change Bureau',
                slug: 'change-bureau',
                subcategories: []
              },
              {
                id: 'change-guichet',
                name: 'Change Guichet',
                slug: 'change-guichet',
                subcategories: []
              },
              {
                id: 'change-automate',
                name: 'Change Automate',
                slug: 'change-automate',
                subcategories: []
              },
              {
                id: 'change-en-ligne',
                name: 'Change En Ligne',
                slug: 'change-en-ligne',
                subcategories: []
              },
              {
                id: 'change-international',
                name: 'Change International',
                slug: 'change-international',
                subcategories: []
              },
              {
                id: 'change-devises',
                name: 'Change Devises',
                slug: 'change-devises',
                subcategories: []
              }
            ]
          },
          {
            id: 'banque-en-ligne',
            name: 'Banque En Ligne',
            slug: 'banque-en-ligne',
            subcategories: [
              {
                id: 'banque-en-ligne-comptes',
                name: 'Banque En Ligne Comptes',
                slug: 'banque-en-ligne-comptes',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-carte',
                name: 'Banque En Ligne Carte',
                slug: 'banque-en-ligne-carte',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-prets',
                name: 'Banque En Ligne Prêts',
                slug: 'banque-en-ligne-prets',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-epargne',
                name: 'Banque En Ligne Épargne',
                slug: 'banque-en-ligne-epargne',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-assurances',
                name: 'Banque En Ligne Assurances',
                slug: 'banque-en-ligne-assurances',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-investissements',
                name: 'Banque En Ligne Investissements',
                slug: 'banque-en-ligne-investissements',
                subcategories: []
              },
              {
                id: 'banque-en-ligne-conseil',
                name: 'Banque En Ligne Conseil',
                slug: 'banque-en-ligne-conseil',
                subcategories: []
              }
            ]
          },
          {
            id: 'conseil-bancaire',
            name: 'Conseil Bancaire',
            slug: 'conseil-bancaire',
            subcategories: [
              {
                id: 'conseil-patrimoine',
                name: 'Conseil Patrimoine',
                slug: 'conseil-patrimoine',
                subcategories: []
              },
              {
                id: 'conseil-investissement',
                name: 'Conseil Investissement',
                slug: 'conseil-investissement',
                subcategories: []
              },
              {
                id: 'conseil-credit',
                name: 'Conseil Crédit',
                slug: 'conseil-credit',
                subcategories: []
              },
              {
                id: 'conseil-epargne',
                name: 'Conseil Épargne',
                slug: 'conseil-epargne',
                subcategories: []
              },
              {
                id: 'conseil-assurance',
                name: 'Conseil Assurance',
                slug: 'conseil-assurance',
                subcategories: []
              },
              {
                id: 'conseil-fiscal',
                name: 'Conseil Fiscal',
                slug: 'conseil-fiscal',
                subcategories: []
              },
              {
                id: 'conseil-succession',
                name: 'Conseil Succession',
                slug: 'conseil-succession',
                subcategories: []
              }
            ]
          },
          {
            id: 'financement-projets',
            name: 'Financement Projets',
            slug: 'financement-projets',
            subcategories: [
              {
                id: 'financement-projets-immobilier',
                name: 'Financement Projets Immobilier',
                slug: 'financement-projets-immobilier',
                subcategories: []
              },
              {
                id: 'financement-projets-entreprises',
                name: 'Financement Projets Entreprises',
                slug: 'financement-projets-entreprises',
                subcategories: []
              },
              {
                id: 'financement-projets-innovation',
                name: 'Financement Projets Innovation',
                slug: 'financement-projets-innovation',
                subcategories: []
              },
              {
                id: 'financement-projets-sociaux',
                name: 'Financement Projets Sociaux',
                slug: 'financement-projets-sociaux',
                subcategories: []
              },
              {
                id: 'financement-projets-environnement',
                name: 'Financement Projets Environnement',
                slug: 'financement-projets-environnement',
                subcategories: []
              },
              {
                id: 'financement-projets-culturels',
                name: 'Financement Projets Culturels',
                slug: 'financement-projets-culturels',
                subcategories: []
              },
              {
                id: 'financement-projets-educatifs',
                name: 'Financement Projets Éducatifs',
                slug: 'financement-projets-educatifs',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'credits',
        name: 'Crédits',
        slug: 'credits',
        subcategories: [
          {
            id: 'credits-immobilier',
            name: 'Crédits Immobilier',
            slug: 'credits-immobilier',
            subcategories: [
              {
                id: 'credits-immobilier-principal',
                name: 'Crédits Immobilier Principal',
                slug: 'credits-immobilier-principal',
                subcategories: []
              },
              {
                id: 'credits-immobilier-relais',
                name: 'Crédits Immobilier Relais',
                slug: 'credits-immobilier-relais',
                subcategories: []
              },
              {
                id: 'credits-immobilier-taux-fixe',
                name: 'Crédits Immobilier Taux Fixe',
                slug: 'credits-immobilier-taux-fixe',
                subcategories: []
              },
              {
                id: 'credits-immobilier-taux-variable',
                name: 'Crédits Immobilier Taux Variable',
                slug: 'credits-immobilier-taux-variable',
                subcategories: []
              },
              {
                id: 'credits-immobilier-pret-a-taux-zero',
                name: 'Crédits Immobilier Prêt à Taux Zéro',
                slug: 'credits-immobilier-pret-a-taux-zero',
                subcategories: []
              },
              {
                id: 'credits-immobilier-pret-in-fine',
                name: 'Crédits Immobilier Prêt In Fine',
                slug: 'credits-immobilier-pret-in-fine',
                subcategories: []
              },
              {
                id: 'credits-immobilier-pret-amortissable',
                name: 'Crédits Immobilier Prêt Amortissable',
                slug: 'credits-immobilier-pret-amortissable',
                subcategories: []
              }
            ]
          },
          {
            id: 'credits-consommation',
            name: 'Crédits Consommation',
            slug: 'credits-consommation',
            subcategories: [
              {
                id: 'credits-consommation-auto',
                name: 'Crédits Consommation Auto',
                slug: 'credits-consommation-auto',
                subcategories: []
              },
              {
                id: 'credits-consommation-personnel',
                name: 'Crédits Consommation Personnel',
                slug: 'credits-consommation-personnel',
                subcategories: []
              },
              {
                id: 'credits-consommation-renouvelable',
                name: 'Crédits Consommation Renouvelable',
                slug: 'credits-consommation-renouvelable',
                subcategories: []
              },
              {
                id: 'credits-consommation-taux-fixe',
                name: 'Crédits Consommation Taux Fixe',
                slug: 'credits-consommation-taux-fixe',
                subcategories: []
              },
              {
                id: 'credits-consommation-taux-variable',
                name: 'Crédits Consommation Taux Variable',
                slug: 'credits-consommation-taux-variable',
                subcategories: []
              },
              {
                id: 'credits-consommation-revolving',
                name: 'Crédits Consommation Revolving',
                slug: 'credits-consommation-revolving',
                subcategories: []
              }
            ]
          },
          {
            id: 'credits-automobile',
            name: 'Crédits Automobile',
            slug: 'credits-automobile',
            subcategories: [
              {
                id: 'credits-automobile-neuf',
                name: 'Crédits Automobile Neuf',
                slug: 'credits-automobile-neuf',
                subcategories: []
              },
              {
                id: 'credits-automobile-occasion',
                name: 'Crédits Automobile Occasion',
                slug: 'credits-automobile-occasion',
                subcategories: []
              },
              {
                id: 'credits-automobile-taux-fixe',
                name: 'Crédits Automobile Taux Fixe',
                slug: 'credits-automobile-taux-fixe',
                subcategories: []
              },
              {
                id: 'credits-automobile-taux-variable',
                name: 'Crédits Automobile Taux Variable',
                slug: 'credits-automobile-taux-variable',
                subcategories: []
              },
              {
                id: 'credits-automobile-location-avec-option-achat',
                name: 'Crédits Automobile Location avec Option Achat',
                slug: 'credits-automobile-location-avec-option-achat',
                subcategories: []
              },
              {
                id: 'credits-automobile-bail',
                name: 'Crédits Automobile Bail',
                slug: 'credits-automobile-bail',
                subcategories: []
              }
            ]
          },
          {
            id: 'credits-travaux',
            name: 'Crédits Travaux',
            slug: 'credits-travaux',
            subcategories: [
              {
                id: 'credits-travaux-renovation',
                name: 'Crédits Travaux Rénovation',
                slug: 'credits-travaux-renovation',
                subcategories: []
              },
              {
                id: 'credits-travaux-construction',
                name: 'Crédits Travaux Construction',
                slug: 'credits-travaux-construction',
                subcategories: []
              },
              {
                id: 'credits-travaux-amenagement',
                name: 'Crédits Travaux Aménagement',
                slug: 'credits-travaux-amenagement',
                subcategories: []
              },
              {
                id: 'credits-travaux-economie-energie',
                name: 'Crédits Travaux Économie Énergie',
                slug: 'credits-travaux-economie-energie',
                subcategories: []
              },
              {
                id: 'credits-travaux-piscine',
                name: 'Crédits Travaux Piscine',
                slug: 'credits-travaux-piscine',
                subcategories: []
              },
              {
                id: 'credits-travaux-jardin',
                name: 'Crédits Travaux Jardin',
                slug: 'credits-travaux-jardin',
                subcategories: []
              }
            ]
          },
          {
            id: 'credits-etudes',
            name: 'Crédits Études',
            slug: 'credits-etudes',
            subcategories: [
              {
                id: 'credits-etudes-etudiant',
                name: 'Crédits Études Étudiant',
                slug: 'credits-etudes-etudiant',
                subcategories: []
              },
              {
                id: 'credits-etudes-parent',
                name: 'Crédits Études Parent',
                slug: 'credits-etudes-parent',
                subcategories: []
              },
              {
                id: 'credits-etudes-garantie',
                name: 'Crédits Études Garantie',
                slug: 'credits-etudes-garantie',
                subcategories: []
              },
              {
                id: 'credits-etudes-taux-zero',
                name: 'Crédits Études Taux Zéro',
                slug: 'credits-etudes-taux-zero',
                subcategories: []
              },
              {
                id: 'credits-etudes-differe',
                name: 'Crédits Études Différé',
                slug: 'credits-etudes-differe',
                subcategories: []
              }
            ]
          },
          {
            id: 'rachat-credits',
            name: 'Rachat Crédits',
            slug: 'rachat-credits',
            subcategories: [
              {
                id: 'rachat-credits-immobilier',
                name: 'Rachat Crédits Immobilier',
                slug: 'rachat-credits-immobilier',
                subcategories: []
              },
              {
                id: 'rachat-credits-consommation',
                name: 'Rachat Crédits Consommation',
                slug: 'rachat-credits-consommation',
                subcategories: []
              },
              {
                id: 'rachat-credits-automobile',
                name: 'Rachat Crédits Automobile',
                slug: 'rachat-credits-automobile',
                subcategories: []
              },
              {
                id: 'rachat-credits-travaux',
                name: 'Rachat Crédits Travaux',
                slug: 'rachat-credits-travaux',
                subcategories: []
              },
              {
                id: 'rachat-credits-etudes',
                name: 'Rachat Crédits Études',
                slug: 'rachat-credits-etudes',
                subcategories: []
              }
            ]
          },
          {
            id: 'simulation-credits',
            name: 'Simulation Crédits',
            slug: 'simulation-credits',
            subcategories: [
              {
                id: 'simulation-credits-immobilier',
                name: 'Simulation Crédits Immobilier',
                slug: 'simulation-credits-immobilier',
                subcategories: []
              },
              {
                id: 'simulation-credits-consommation',
                name: 'Simulation Crédits Consommation',
                slug: 'simulation-credits-consommation',
                subcategories: []
              },
              {
                id: 'simulation-credits-automobile',
                name: 'Simulation Crédits Automobile',
                slug: 'simulation-credits-automobile',
                subcategories: []
              },
              {
                id: 'simulation-credits-travaux',
                name: 'Simulation Crédits Travaux',
                slug: 'simulation-credits-travaux',
                subcategories: []
              },
              {
                id: 'simulation-credits-etudes',
                name: 'Simulation Crédits Études',
                slug: 'simulation-credits-etudes',
                subcategories: []
              },
              {
                id: 'simulation-credits-comparaison',
                name: 'Simulation Crédits Comparaison',
                slug: 'simulation-credits-comparaison',
                subcategories: []
              }
            ]
          },
          {
            id: 'gestion-credits',
            name: 'Gestion Crédits',
            slug: 'gestion-credits',
            subcategories: [
              {
                id: 'gestion-credits-suivi',
                name: 'Gestion Crédits Suivi',
                slug: 'gestion-credits-suivi',
                subcategories: []
              },
              {
                id: 'gestion-credits-remboursement-anticipe',
                name: 'Gestion Crédits Remboursement Anticipé',
                slug: 'gestion-credits-remboursement-anticipe',
                subcategories: []
              },
              {
                id: 'gestion-credits-report',
                name: 'Gestion Crédits Report',
                slug: 'gestion-credits-report',
                subcategories: []
              },
              {
                id: 'gestion-credits-modification',
                name: 'Gestion Crédits Modification',
                slug: 'gestion-credits-modification',
                subcategories: []
              },
              {
                id: 'gestion-credits-consolidation',
                name: 'Gestion Crédits Consolidation',
                slug: 'gestion-credits-consolidation',
                subcategories: []
              },
              {
                id: 'gestion-credits-negociation',
                name: 'Gestion Crédits Négociation',
                slug: 'gestion-credits-negociation',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'assurances',
        name: 'Assurances',
        slug: 'assurances',
        subcategories: [
          {
            id: 'assurances-auto',
            name: 'Assurances Auto',
            slug: 'assurances-auto',
            subcategories: [
              {
                id: 'assurances-auto-tous-risques',
                name: 'Assurances Auto Tous Risques',
                slug: 'assurances-auto-tous-risques',
                subcategories: []
              },
              {
                id: 'assurances-auto-responsabilite-civile',
                name: 'Assurances Auto Responsabilité Civile',
                slug: 'assurances-auto-responsabilite-civile',
                subcategories: []
              },
              {
                id: 'assurances-auto-vol',
                name: 'Assurances Auto Vol',
                slug: 'assurances-auto-vol',
                subcategories: []
              },
              {
                id: 'assurances-auto-incendie',
                name: 'Assurances Auto Incendie',
                slug: 'assurances-auto-incendie',
                subcategories: []
              },
              {
                id: 'assurances-auto-bris-de-glace',
                name: 'Assurances Auto Bris de Glace',
                slug: 'assurances-auto-bris-de-glace',
                subcategories: []
              },
              {
                id: 'assurances-auto-defense-recours',
                name: 'Assurances Auto Défense Recours',
                slug: 'assurances-auto-defense-recours',
                subcategories: []
              },
              {
                id: 'assurances-auto-assistance',
                name: 'Assurances Auto Assistance',
                slug: 'assurances-auto-assistance',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-habitation',
            name: 'Assurances Habitation',
            slug: 'assurances-habitation',
            subcategories: [
              {
                id: 'assurances-habitation-multirisques',
                name: 'Assurances Habitation Multirisques',
                slug: 'assurances-habitation-multirisques',
                subcategories: []
              },
              {
                id: 'assurances-habitation-incendie',
                name: 'Assurances Habitation Incendie',
                slug: 'assurances-habitation-incendie',
                subcategories: []
              },
              {
                id: 'assurances-habitation-degats-des-eaux',
                name: 'Assurances Habitation Dégâts des Eaux',
                slug: 'assurances-habitation-degats-des-eaux',
                subcategories: []
              },
              {
                id: 'assurances-habitation-vol',
                name: 'Assurances Habitation Vol',
                slug: 'assurances-habitation-vol',
                subcategories: []
              },
              {
                id: 'assurances-habitation-responsabilite-civile',
                name: 'Assurances Habitation Responsabilité Civile',
                slug: 'assurances-habitation-responsabilite-civile',
                subcategories: []
              },
              {
                id: 'assurances-habitation-temporaire',
                name: 'Assurances Habitation Temporaire',
                slug: 'assurances-habitation-temporaire',
                subcategories: []
              },
              {
                id: 'assurances-habitation-vacance',
                name: 'Assurances Habitation Vacance',
                slug: 'assurances-habitation-vacance',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-sante',
            name: 'Assurances Santé',
            slug: 'assurances-sante',
            subcategories: [
              {
                id: 'assurances-sante-complementaire',
                name: 'Assurances Santé Complémentaire',
                slug: 'assurances-sante-complementaire',
                subcategories: []
              },
              {
                id: 'assurances-sante-mutuelle',
                name: 'Assurances Santé Mutuelle',
                slug: 'assurances-sante-mutuelle',
                subcategories: []
              },
              {
                id: 'assurances-sante-individuelle',
                name: 'Assurances Santé Individuelle',
                slug: 'assurances-sante-individuelle',
                subcategories: []
              },
              {
                id: 'assurances-sante-famille',
                name: 'Assurances Santé Famille',
                slug: 'assurances-sante-famille',
                subcategories: []
              },
              {
                id: 'assurances-sante-entreprise',
                name: 'Assurances Santé Entreprise',
                slug: 'assurances-sante-entreprise',
                subcategories: []
              },
              {
                id: 'assurances-sante-dentaire',
                name: 'Assurances Santé Dentaire',
                slug: 'assurances-sante-dentaire',
                subcategories: []
              },
              {
                id: 'assurances-sante-optique',
                name: 'Assurances Santé Optique',
                slug: 'assurances-sante-optique',
                subcategories: []
              },
              {
                id: 'assurances-sante-hospitalisation',
                name: 'Assurances Santé Hospitalisation',
                slug: 'assurances-sante-hospitalisation',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-vie',
            name: 'Assurances Vie',
            slug: 'assurances-vie',
            subcategories: [
              {
                id: 'assurances-vie-temporaire',
                name: 'Assurances Vie Temporaire',
                slug: 'assurances-vie-temporaire',
                subcategories: []
              },
              {
                id: 'assurances-vie-entier',
                name: 'Assurances Vie Entier',
                slug: 'assurances-vie-entier',
                subcategories: []
              },
              {
                id: 'assurances-vie-capital-deces',
                name: 'Assurances Vie Capital Décès',
                slug: 'assurances-vie-capital-deces',
                subcategories: []
              },
              {
                id: 'assurances-vie-rente',
                name: 'Assurances Vie Rente',
                slug: 'assurances-vie-rente',
                subcategories: []
              },
              {
                id: 'assurances-vie-epargne',
                name: 'Assurances Vie Épargne',
                slug: 'assurances-vie-epargne',
                subcategories: []
              },
              {
                id: 'assurances-vie-funeraire',
                name: 'Assurances Vie Funéraire',
                slug: 'assurances-vie-funeraire',
                subcategories: []
              },
              {
                id: 'assurances-vie-garantie',
                name: 'Assurances Vie Garantie',
                slug: 'assurances-vie-garantie',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-voyage',
            name: 'Assurances Voyage',
            slug: 'assurances-voyage',
            subcategories: [
              {
                id: 'assurances-voyage-annulation',
                name: 'Assurances Voyage Annulation',
                slug: 'assurances-voyage-annulation',
                subcategories: []
              },
              {
                id: 'assurances-voyage-bagages',
                name: 'Assurances Voyage Bagages',
                slug: 'assurances-voyage-bagages',
                subcategories: []
              },
              {
                id: 'assurances-voyage-medical',
                name: 'Assurances Voyage Médical',
                slug: 'assurances-voyage-medical',
                subcategories: []
              },
              {
                id: 'assurances-voyage-responsabilite-civile',
                name: 'Assurances Voyage Responsabilité Civile',
                slug: 'assurances-voyage-responsabilite-civile',
                subcategories: []
              },
              {
                id: 'assurances-voyage-assistance',
                name: 'Assurances Voyage Assistance',
                slug: 'assurances-voyage-assistance',
                subcategories: []
              },
              {
                id: 'assurances-voyage-sport',
                name: 'Assurances Voyage Sport',
                slug: 'assurances-voyage-sport',
                subcategories: []
              },
              {
                id: 'assurances-voyage-long-sejour',
                name: 'Assurances Voyage Long Séjour',
                slug: 'assurances-voyage-long-sejour',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-moto',
            name: 'Assurances Moto',
            slug: 'assurances-moto',
            subcategories: [
              {
                id: 'assurances-moto-tous-risques',
                name: 'Assurances Moto Tous Risques',
                slug: 'assurances-moto-tous-risques',
                subcategories: []
              },
              {
                id: 'assurances-moto-responsabilite-civile',
                name: 'Assurances Moto Responsabilité Civile',
                slug: 'assurances-moto-responsabilite-civile',
                subcategories: []
              },
              {
                id: 'assurances-moto-vol',
                name: 'Assurances Moto Vol',
                slug: 'assurances-moto-vol',
                subcategories: []
              },
              {
                id: 'assurances-moto-incendie',
                name: 'Assurances Moto Incendie',
                slug: 'assurances-moto-incendie',
                subcategories: []
              },
              {
                id: 'assurances-moto-bris',
                name: 'Assurances Moto Bris',
                slug: 'assurances-moto-bris',
                subcategories: []
              },
              {
                id: 'assurances-moto-assistance',
                name: 'Assurances Moto Assistance',
                slug: 'assurances-moto-assistance',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-entreprise',
            name: 'Assurances Entreprise',
            slug: 'assurances-entreprise',
            subcategories: [
              {
                id: 'assurances-entreprise-responsabilite-civile',
                name: 'Assurances Entreprise Responsabilité Civile',
                slug: 'assurances-entreprise-responsabilite-civile',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-multirisque',
                name: 'Assurances Entreprise Multirisque',
                slug: 'assurances-entreprise-multirisque',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-incendie',
                name: 'Assurances Entreprise Incendie',
                slug: 'assurances-entreprise-incendie',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-degats-des-eaux',
                name: 'Assurances Entreprise Dégâts des Eaux',
                slug: 'assurances-entreprise-degats-des-eaux',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-vol',
                name: 'Assurances Entreprise Vol',
                slug: 'assurances-entreprise-vol',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-perte-exploitation',
                name: 'Assurances Entreprise Perte Exploitation',
                slug: 'assurances-entreprise-perte-exploitation',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-cyber',
                name: 'Assurances Entreprise Cyber',
                slug: 'assurances-entreprise-cyber',
                subcategories: []
              },
              {
                id: 'assurances-entreprise-juridique',
                name: 'Assurances Entreprise Juridique',
                slug: 'assurances-entreprise-juridique',
                subcategories: []
              }
            ]
          },
          {
            id: 'assurances-scolaire',
            name: 'Assurances Scolaire',
            slug: 'assurances-scolaire',
            subcategories: [
              {
                id: 'assurances-scolaire-individuelle',
                name: 'Assurances Scolaire Individuelle',
                slug: 'assurances-scolaire-individuelle',
                subcategories: []
              },
              {
                id: 'assurances-scolaire-famille',
                name: 'Assurances Scolaire Famille',
                slug: 'assurances-scolaire-famille',
                subcategories: []
              },
              {
                id: 'assurances-scolaire-accident',
                name: 'Assurances Scolaire Accident',
                slug: 'assurances-scolaire-accident',
                subcategories: []
              },
              {
                id: 'assurances-scolaire-garantie',
                name: 'Assurances Scolaire Garantie',
                slug: 'assurances-scolaire-garantie',
                subcategories: []
              },
              {
                id: 'assurances-scolaire-internat',
                name: 'Assurances Scolaire Internat',
                slug: 'assurances-scolaire-internat',
                subcategories: []
              },
              {
                id: 'assurances-scolaire-etudes',
                name: 'Assurances Scolaire Études',
                slug: 'assurances-scolaire-etudes',
                subcategories: []
              }
            ]
          },
          {
            id: 'comparaison-assurances',
            name: 'Comparaison Assurances',
            slug: 'comparaison-assurances',
            subcategories: [
              {
                id: 'comparaison-assurances-auto',
                name: 'Comparaison Assurances Auto',
                slug: 'comparaison-assurances-auto',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-habitation',
                name: 'Comparaison Assurances Habitation',
                slug: 'comparaison-assurances-habitation',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-sante',
                name: 'Comparaison Assurances Santé',
                slug: 'comparaison-assurances-sante',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-vie',
                name: 'Comparaison Assurances Vie',
                slug: 'comparaison-assurances-vie',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-voyage',
                name: 'Comparaison Assurances Voyage',
                slug: 'comparaison-assurances-voyage',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-moto',
                name: 'Comparaison Assurances Moto',
                slug: 'comparaison-assurances-moto',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-entreprise',
                name: 'Comparaison Assurances Entreprise',
                slug: 'comparaison-assurances-entreprise',
                subcategories: []
              },
              {
                id: 'comparaison-assurances-scolaire',
                name: 'Comparaison Assurances Scolaire',
                slug: 'comparaison-assurances-scolaire',
                subcategories: []
              }
            ]
          },
          {
            id: 'gestion-assurances',
            name: 'Gestion Assurances',
            slug: 'gestion-assurances',
            subcategories: [
              {
                id: 'gestion-assurances-sinistre',
                name: 'Gestion Assurances Sinistre',
                slug: 'gestion-assurances-sinistre',
                subcategories: []
              },
              {
                id: 'gestion-assurances-declaration',
                name: 'Gestion Assurances Déclaration',
                slug: 'gestion-assurances-declaration',
                subcategories: []
              },
              {
                id: 'gestion-assurances-resiliation',
                name: 'Gestion Assurances Résiliation',
                slug: 'gestion-assurances-resiliation',
                subcategories: []
              },
              {
                id: 'gestion-assurances-modification',
                name: 'Gestion Assurances Modification',
                slug: 'gestion-assurances-modification',
                subcategories: []
              },
              {
                id: 'gestion-assurances-renouvellement',
                name: 'Gestion Assurances Renouvellement',
                slug: 'gestion-assurances-renouvellement',
                subcategories: []
              },
              {
                id: 'gestion-assurances-reclamation',
                name: 'Gestion Assurances Réclamation',
                slug: 'gestion-assurances-reclamation',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'investissements',
        name: 'Investissements',
        slug: 'investissements',
        subcategories: [
          {
            id: 'actions',
            name: 'Actions',
            slug: 'actions',
            subcategories: [
              {
                id: 'actions-cote',
                name: 'Actions Cote',
                slug: 'actions-cote',
                subcategories: []
              },
              {
                id: 'actions-non-cote',
                name: 'Actions Non Cote',
                slug: 'actions-non-cote',
                subcategories: []
              },
              {
                id: 'actions-internationales',
                name: 'Actions Internationales',
                slug: 'actions-internationales',
                subcategories: []
              },
              {
                id: 'actions-technologie',
                name: 'Actions Technologie',
                slug: 'actions-technologie',
                subcategories: []
              },
              {
                id: 'actions-sante',
                name: 'Actions Santé',
                slug: 'actions-sante',
                subcategories: []
              },
              {
                id: 'actions-energie',
                name: 'Actions Énergie',
                slug: 'actions-energie',
                subcategories: []
              },
              {
                id: 'actions-finance',
                name: 'Actions Finance',
                slug: 'actions-finance',
                subcategories: []
              },
              {
                id: 'actions-industrie',
                name: 'Actions Industrie',
                slug: 'actions-industrie',
                subcategories: []
              },
              {
                id: 'actions-consommation',
                name: 'Actions Consommation',
                slug: 'actions-consommation',
                subcategories: []
              },
              {
                id: 'actions-immobilier',
                name: 'Actions Immobilier',
                slug: 'actions-immobilier',
                subcategories: []
              },
              {
                id: 'actions-telecom',
                name: 'Actions Télécom',
                slug: 'actions-telecom',
                subcategories: []
              },
              {
                id: 'actions-dividendes',
                name: 'Actions Dividendes',
                slug: 'actions-dividendes',
                subcategories: []
              }
            ]
          },
          {
            id: 'obligations',
            name: 'Obligations',
            slug: 'obligations',
            subcategories: [
              {
                id: 'obligations-etat',
                name: 'Obligations État',
                slug: 'obligations-etat',
                subcategories: []
              },
              {
                id: 'obligations-entreprise',
                name: 'Obligations Entreprise',
                slug: 'obligations-entreprise',
                subcategories: []
              },
              {
                id: 'obligations-inflation',
                name: 'Obligations Inflation',
                slug: 'obligations-inflation',
                subcategories: []
              },
              {
                id: 'obligations-indexees',
                name: 'Obligations Indexées',
                slug: 'obligations-indexees',
                subcategories: []
              },
              {
                id: 'obligations-convertibles',
                name: 'Obligations Convertibles',
                slug: 'obligations-convertibles',
                subcategories: []
              },
              {
                id: 'obligations-zero-coupon',
                name: 'Obligations Zero Coupon',
                slug: 'obligations-zero-coupon',
                subcategories: []
              },
              {
                id: 'obligations-haut-rendement',
                name: 'Obligations Haut Rendement',
                slug: 'obligations-haut-rendement',
                subcategories: []
              },
              {
                id: 'obligations-etrangeres',
                name: 'Obligations Étrangères',
                slug: 'obligations-etrangeres',
                subcategories: []
              },
              {
                id: 'obligations-municipales',
                name: 'Obligations Municipales',
                slug: 'obligations-municipales',
                subcategories: []
              }
            ]
          },
          {
            id: 'fonds',
            name: 'Fonds',
            slug: 'fonds',
            subcategories: [
              {
                id: 'fonds-actions',
                name: 'Fonds Actions',
                slug: 'fonds-actions',
                subcategories: []
              },
              {
                id: 'fonds-obligations',
                name: 'Fonds Obligations',
                slug: 'fonds-obligations',
                subcategories: []
              },
              {
                id: 'fonds-mixtes',
                name: 'Fonds Mixtes',
                slug: 'fonds-mixtes',
                subcategories: []
              },
              {
                id: 'fonds-monetaires',
                name: 'Fonds Monétaires',
                slug: 'fonds-monetaires',
                subcategories: []
              },
              {
                id: 'fonds-alternatifs',
                name: 'Fonds Alternatifs',
                slug: 'fonds-alternatifs',
                subcategories: []
              },
              {
                id: 'fonds-etrangers',
                name: 'Fonds Étrangers',
                slug: 'fonds-etrangers',
                subcategories: []
              },
              {
                id: 'fonds-ethiques',
                name: 'Fonds Éthiques',
                slug: 'fonds-ethiques',
                subcategories: []
              },
              {
                id: 'fonds-ecologiques',
                name: 'Fonds Écologiques',
                slug: 'fonds-ecologiques',
                subcategories: []
              },
              {
                id: 'fonds-technologie',
                name: 'Fonds Technologie',
                slug: 'fonds-technologie',
                subcategories: []
              },
              {
                id: 'fonds-sante',
                name: 'Fonds Santé',
                slug: 'fonds-sante',
                subcategories: []
              },
              {
                id: 'fonds-immobilier',
                name: 'Fonds Immobilier',
                slug: 'fonds-immobilier',
                subcategories: []
              },
              {
                id: 'fonds-matiere-premiere',
                name: 'Fonds Matière Première',
                slug: 'fonds-matiere-premiere',
                subcategories: []
              },
              {
                id: 'fonds-energie',
                name: 'Fonds Énergie',
                slug: 'fonds-energie',
                subcategories: []
              },
              {
                id: 'fonds-indices',
                name: 'Fonds Indices',
                slug: 'fonds-indices',
                subcategories: []
              },
              {
                id: 'fonds-couverts',
                name: 'Fonds Couverts',
                slug: 'fonds-couverts',
                subcategories: []
              },
              {
                id: 'fonds-capital',
                name: 'Fonds Capital',
                slug: 'fonds-capital',
                subcategories: []
              },
              {
                id: 'fonds-distribution',
                name: 'Fonds Distribution',
                slug: 'fonds-distribution',
                subcategories: []
              },
              {
                id: 'fonds-performance',
                name: 'Fonds Performance',
                slug: 'fonds-performance',
                subcategories: []
              }
            ]
          },
          {
            id: 'produits-derives',
            name: 'Produits Dérivés',
            slug: 'produits-derives',
            subcategories: [
              {
                id: 'options',
                name: 'Options',
                slug: 'options',
                subcategories: []
              },
              {
                id: 'futures',
                name: 'Futures',
                slug: 'futures',
                subcategories: []
              },
              {
                id: 'contrats-difference',
                name: 'Contrats Différence',
                slug: 'contrats-difference',
                subcategories: []
              },
              {
                id: 'warrants',
                name: 'Warrants',
                slug: 'warrants',
                subcategories: []
              },
              {
                id: 'swaps',
                name: 'Swaps',
                slug: 'swaps',
                subcategories: []
              },
              {
                id: 'forwards',
                name: 'Forwards',
                slug: 'forwards',
                subcategories: []
              },
              {
                id: 'produits-structures',
                name: 'Produits Structures',
                slug: 'produits-structures',
                subcategories: []
              },
              {
                id: 'produits-exotiques',
                name: 'Produits Exotiques',
                slug: 'produits-exotiques',
                subcategories: []
              }
            ]
          },
          {
            id: 'crypto-monnaies',
            name: 'Crypto-monnaies',
            slug: 'crypto-monnaies',
            subcategories: [
              {
                id: 'bitcoin',
                name: 'Bitcoin',
                slug: 'bitcoin',
                subcategories: []
              },
              {
                id: 'ethereum',
                name: 'Ethereum',
                slug: 'ethereum',
                subcategories: []
              },
              {
                id: 'altcoins',
                name: 'Altcoins',
                slug: 'altcoins',
                subcategories: []
              },
              {
                id: 'stablecoins',
                name: 'Stablecoins',
                slug: 'stablecoins',
                subcategories: []
              },
              {
                id: 'tokens-non-fongibles',
                name: 'Tokens Non Fongibles',
                slug: 'tokens-non-fongibles',
                subcategories: []
              },
              {
                id: 'tokens-fongibles',
                name: 'Tokens Fongibles',
                slug: 'tokens-fongibles',
                subcategories: []
              },
              {
                id: 'decentralized-finance',
                name: 'Decentralized Finance',
                slug: 'decentralized-finance',
                subcategories: []
              },
              {
                id: 'minage',
                name: 'Minage',
                slug: 'minage',
                subcategories: []
              },
              {
                id: 'staking',
                name: 'Staking',
                slug: 'staking',
                subcategories: []
              },
              {
                id: 'yield-farming',
                name: 'Yield Farming',
                slug: 'yield-farming',
                subcategories: []
              },
              {
                id: 'liquidity-mining',
                name: 'Liquidity Mining',
                slug: 'liquidity-mining',
                subcategories: []
              }
            ]
          },
          {
            id: 'matieres-premieres',
            name: 'Matières Premières',
            slug: 'matieres-premieres',
            subcategories: [
              {
                id: 'or',
                name: 'Or',
                slug: 'or',
                subcategories: []
              },
              {
                id: 'argent',
                name: 'Argent',
                slug: 'argent',
                subcategories: []
              },
              {
                id: 'petrole',
                name: 'Pétrole',
                slug: 'petrole',
                subcategories: []
              },
              {
                id: 'gaz-naturel',
                name: 'Gaz Naturel',
                slug: 'gaz-naturel',
                subcategories: []
              },
              {
                id: 'cuivre',
                name: 'Cuivre',
                slug: 'cuivre',
                subcategories: []
              },
              {
                id: 'aluminium',
                name: 'Aluminium',
                slug: 'aluminium',
                subcategories: []
              },
              {
                id: 'nickel',
                name: 'Nickel',
                slug: 'nickel',
                subcategories: []
              },
              {
                id: 'zinc',
                name: 'Zinc',
                slug: 'zinc',
                subcategories: []
              },
              {
                id: 'plomb',
                name: 'Plomb',
                slug: 'plomb',
                subcategories: []
              },
              {
                id: 'coton',
                name: 'Coton',
                slug: 'coton',
                subcategories: []
              },
              {
                id: 'cafe',
                name: 'Café',
                slug: 'cafe',
                subcategories: []
              },
              {
                id: 'sucre',
                name: 'Sucre',
                slug: 'sucre',
                subcategories: []
              },
              {
                id: 'cacao',
                name: 'Cacao',
                slug: 'cacao',
                subcategories: []
              },
              {
                id: 'bois',
                name: 'Bois',
                slug: 'bois',
                subcategories: []
              },
              {
                id: 'cereales',
                name: 'Céréales',
                slug: 'cereales',
                subcategories: []
              },
              {
                id: 'viande',
                name: 'Viande',
                slug: 'viande',
                subcategories: []
              }
            ]
          },
          {
            id: 'immobilier',
            name: 'Immobilier',
            slug: 'immobilier',
            subcategories: [
              {
                id: 'immobilier-residentiel',
                name: 'Immobilier Résidentiel',
                slug: 'immobilier-residentiel',
                subcategories: []
              },
              {
                id: 'immobilier-commercial',
                name: 'Immobilier Commercial',
                slug: 'immobilier-commercial',
                subcategories: []
              },
              {
                id: 'immobilier-industriel',
                name: 'Immobilier Industriel',
                slug: 'immobilier-industriel',
                subcategories: []
              },
              {
                id: 'immobilier-terres-agricoles',
                name: 'Immobilier Terres Agricoles',
                slug: 'immobilier-terres-agricoles',
                subcategories: []
              },
              {
                id: 'immobilier-forets',
                name: 'Immobilier Forêts',
                slug: 'immobilier-forets',
                subcategories: []
              },
              {
                id: 'immobilier-societes-civiles',
                name: 'Immobilier Sociétés Civiles',
                slug: 'immobilier-societes-civiles',
                subcategories: []
              },
              {
                id: 'immobilier-reits',
                name: 'Immobilier REITs',
                slug: 'immobilier-reits',
                subcategories: []
              },
              {
                id: 'immobilier-crowdfunding',
                name: 'Immobilier Crowdfunding',
                slug: 'immobilier-crowdfunding',
                subcategories: []
              },
              {
                id: 'immobilier-fractionne',
                name: 'Immobilier Fractionné',
                slug: 'immobilier-fractionne',
                subcategories: []
              }
            ]
          },
          {
            id: 'conseil-investissement',
            name: 'Conseil Investissement',
            slug: 'conseil-investissement',
            subcategories: [
              {
                id: 'conseil-patrimoine',
                name: 'Conseil Patrimoine',
                slug: 'conseil-patrimoine',
                subcategories: []
              },
              {
                id: 'conseil-fiscal',
                name: 'Conseil Fiscal',
                slug: 'conseil-fiscal',
                subcategories: []
              },
              {
                id: 'conseil-succession',
                name: 'Conseil Succession',
                slug: 'conseil-succession',
                subcategories: []
              },
              {
                id: 'conseil-retraite',
                name: 'Conseil Retraite',
                slug: 'conseil-retraite',
                subcategories: []
              },
              {
                id: 'conseil-education-financiere',
                name: 'Conseil Éducation Financière',
                slug: 'conseil-education-financiere',
                subcategories: []
              },
              {
                id: 'conseil-strategie',
                name: 'Conseil Stratégie',
                slug: 'conseil-strategie',
                subcategories: []
              },
              {
                id: 'conseil-analyse',
                name: 'Conseil Analyse',
                slug: 'conseil-analyse',
                subcategories: []
              },
              {
                id: 'conseil-gestion',
                name: 'Conseil Gestion',
                slug: 'conseil-gestion',
                subcategories: []
              },
              {
                id: 'conseil-optimisation',
                name: 'Conseil Optimisation',
                slug: 'conseil-optimisation',
                subcategories: []
              }
            ]
          },
          {
            id: 'plateformes-investissement',
            name: 'Plateformes Investissement',
            slug: 'plateformes-investissement',
            subcategories: [
              {
                id: 'plateformes-courtage',
                name: 'Plateformes Courtage',
                slug: 'plateformes-courtage',
                subcategories: []
              },
              {
                id: 'plateformes-robo-advisors',
                name: 'Plateformes Robo-Advisors',
                slug: 'plateformes-robo-advisors',
                subcategories: []
              },
              {
                id: 'plateformes-crowdfunding',
                name: 'Plateformes Crowdfunding',
                slug: 'plateformes-crowdfunding',
                subcategories: []
              },
              {
                id: 'plateformes-p2p',
                name: 'Plateformes P2P',
                slug: 'plateformes-p2p',
                subcategories: []
              },
              {
                id: 'plateformes-crypto',
                name: 'Plateformes Crypto',
                slug: 'plateformes-crypto',
                subcategories: []
              },
              {
                id: 'plateformes-social-trading',
                name: 'Plateformes Social Trading',
                slug: 'plateformes-social-trading',
                subcategories: []
              },
              {
                id: 'plateformes-micro-investissement',
                name: 'Plateformes Micro-Investissement',
                slug: 'plateformes-micro-investissement',
                subcategories: []
              },
              {
                id: 'plateformes-automatisees',
                name: 'Plateformes Automatisées',
                slug: 'plateformes-automatisees',
                subcategories: []
              },
              {
                id: 'plateformes-analyse',
                name: 'Plateformes Analyse',
                slug: 'plateformes-analyse',
                subcategories: []
              },
              {
                id: 'plateformes-education',
                name: 'Plateformes Éducation',
                slug: 'plateformes-education',
                subcategories: []
              }
            ]
          },
          {
            id: 'analyse-marche',
            name: 'Analyse Marché',
            slug: 'analyse-marche',
            subcategories: [
              {
                id: 'analyse-marche-actions',
                name: 'Analyse Marché Actions',
                slug: 'analyse-marche-actions',
                subcategories: []
              },
              {
                id: 'analyse-marche-obligations',
                name: 'Analyse Marché Obligations',
                slug: 'analyse-marche-obligations',
                subcategories: []
              },
              {
                id: 'analyse-marche-matieres-premieres',
                name: 'Analyse Marché Matières Premières',
                slug: 'analyse-marche-matieres-premieres',
                subcategories: []
              },
              {
                id: 'analyse-marche-devises',
                name: 'Analyse Marché Devises',
                slug: 'analyse-marche-devises',
                subcategories: []
              },
              {
                id: 'analyse-marche-crypto',
                name: 'Analyse Marché Crypto',
                slug: 'analyse-marche-crypto',
                subcategories: []
              },
              {
                id: 'analyse-marche-immobilier',
                name: 'Analyse Marché Immobilier',
                slug: 'analyse-marche-immobilier',
                subcategories: []
              },
              {
                id: 'analyse-marche-tendances',
                name: 'Analyse Marché Tendances',
                slug: 'analyse-marche-tendances',
                subcategories: []
              },
              {
                id: 'analyse-marche-rapports',
                name: 'Analyse Marché Rapports',
                slug: 'analyse-marche-rapports',
                subcategories: []
              },
              {
                id: 'analyse-marche-predictions',
                name: 'Analyse Marché Prédictions',
                slug: 'analyse-marche-predictions',
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
const mergedCategories = `[${existingCategoriesData},${financeCategories.map(cat => `  {
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
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation, Santé & Beauté, Animaux & Accessoires, Événements & Billetterie, Voyages & Tourisme et Finance & Monnaie Fiduciaire
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
  console.log(`📊 Catégorie "Finance & Monnaie Fiduciaire" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Finance & Monnaie Fiduciaire ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');