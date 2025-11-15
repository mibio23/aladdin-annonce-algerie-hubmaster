import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const CarouselSlogan2 = () => {
  const { t, isRTL, language } = useSafeI18nWithRouter();

  return (
    <span
      className={`text-xl md:text-2xl font-extrabold title-section text-black dark:text-slate-200 aladdin-glow hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer uppercase leading-snug ${
        isRTL 
          ? '' 
          : language === 'fr' 
            ? '' 
            : ''
      }`}
    >
      {t('carousel.slogan2')}
    </span>
  );
};

export default CarouselSlogan2;
