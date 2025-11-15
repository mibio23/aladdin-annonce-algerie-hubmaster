
import { englishAuth } from './auth';
import { navigationEn } from './navigation';
import { englishPwa } from './pwa';
import englishCommon from './common';
import { englishReviews } from './reviews';
import { userMenuTranslations } from './userMenu';
import { profileTranslations } from './profile';
import { parametresTranslations } from './parametres';
import { englishAnnouncements } from './announcements';
import { englishCategories } from './categories';
import { search, englishSearch } from './search';
import { englishAuthentification } from './authentification';
import { englishSections } from './sections';
import { englishHero } from './hero';
import { englishFooter } from './footer';
import { englishStats } from './stats';
import { englishNotifications } from './notifications';
import { englishBanner } from './banner';

const englishTranslations = {
  ...englishAuth,
  ...navigationEn,
  ...englishPwa,
  ...englishCommon,
  reviews: englishReviews,
  ...userMenuTranslations,
  ...profileTranslations,
  ...parametresTranslations,
  ...englishAnnouncements,
  ...englishCategories,
  ...englishAuthentification,
  ...englishSections,
  ...englishHero,
  ...englishFooter,
  ...englishStats,
  ...englishNotifications,
  
  // Import search translations
  ...search,
  ...englishSearch,

  // Banner button translations
  ...englishBanner,
};

export default englishTranslations;
