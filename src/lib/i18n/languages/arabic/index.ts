
import { arabicAuth } from './auth';
import { arabicEcoCarousel } from './ecoCarousel';
import { arabicIntelligentAssistant } from './intelligentAssistant';
import { arabicPwa } from './pwa';
import arabicNavigation from './navigation';
import arabicCommon from './common';
import { arabicReviews } from './reviews';
import { userMenuTranslations } from './userMenu';
import { profileTranslations } from './profile';
import { parametresTranslations } from './parametres';
import { search, arabicSearch } from './search';
import { arabicFooter } from './footer';


const arabicTranslations = {
  ...arabicAuth,
  ...arabicEcoCarousel,
  ...arabicIntelligentAssistant,
  ...arabicPwa,
  ...arabicNavigation,
  ...arabicCommon,
  reviews: arabicReviews,
  ...userMenuTranslations,
  ...profileTranslations,
  ...parametresTranslations,
  ...search,
  ...arabicSearch,
  ...arabicFooter,
};

export default arabicTranslations;
