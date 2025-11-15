import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const CarouselSlogan3 = () => {
  const { t, language } = useSafeI18nWithRouter();

  const customArabicText = "إعــلانــاتــــك ومــتــاجــرك هــي عــمــلــنا";

  return (
    <div className="w-full flex justify-center items-center my-8">
      <p className="text-xl md:text-2xl font-extrabold title-section text-black dark:text-slate-200 aladdin-glow hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer uppercase leading-snug text-center max-w-4xl">
        {language === 'ar' ? customArabicText : t('carousel.slogan3')}
      </p>
    </div>
  );
};

export default CarouselSlogan3;