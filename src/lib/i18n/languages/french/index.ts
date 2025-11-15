import frenchNavigation from './navigation';
import { frenchAuth } from './auth';
import { frenchIntelligentAssistant } from './intelligentAssistant';
import { frenchPwa } from './pwa';
import frenchCommon from './common';
import homeFr from './home';
import { frenchReviews } from './reviews';
import { userMenuTranslations } from './userMenu';
import { profileTranslations } from './profile';
import { parametresTranslations } from './parametres';
import { frenchSections } from './sections';
import { frenchAnnouncements } from './announcements';
import { frenchCategories } from './categories';
import { search, frenchSearch } from './search';
import { frenchFooter } from './footer';

const frenchTranslations = {
  ...frenchAuth,
  ...frenchIntelligentAssistant,
  ...frenchNavigation,
  ...frenchPwa,
  ...frenchCommon,
  ...homeFr,
  reviews: frenchReviews,
  ...userMenuTranslations,
  ...profileTranslations,
  ...parametresTranslations,
  ...frenchSections,
  ...frenchAnnouncements,
  ...frenchCategories,
  ...search,
  ...frenchSearch,
  ...frenchFooter,

  // Mega-menu
  'megaMenu.title': 'Toutes les catégories',
  'megaMenu.loadingCategories': 'Chargement des catégories...',
  'megaMenu.aria.categoriesMenu': 'Menu des catégories',

  'megaMenu.search.placeholder': 'Rechercher des produits, des catégories...',
  'megaMenu.search.button': 'Rechercher',
  'megaMenu.search.inputAria': 'Rechercher une catégorie',

  'megaMenu.nav.prevCategory': 'Catégorie précédente',
  'megaMenu.nav.nextCategory': 'Catégorie suivante',
  'megaMenu.nav.scrollLeft': 'Défiler vers la gauche',
  'megaMenu.nav.scrollRight': 'Défiler vers la droite',

  'megaMenu.empty.noCategories': 'Aucune catégorie disponible',

  'megaMenu.search.noResultsTitle': 'Aucune catégorie trouvée',
  'megaMenu.search.noResultsHint': "Essayez avec d'autres mots-clés",
  'megaMenu.search.resultsTitle': 'Résultats de recherche',
  'megaMenu.search.countSuffix': 'catégories trouvées',
  'megaMenu.search.matchingSubcategories': 'Sous-catégories correspondantes',
  
  // S'assurer que toutes les clés footer sont disponibles
  "footer.legal.authentication": "Authentification",
  "footer.useful.safetyTips": "Conseils de sécurité",
  "footer.useful.proBusiness": "Espace Pro",
  "footer.useful.helpCenter": "Centre d'aide",
};

export default frenchTranslations;