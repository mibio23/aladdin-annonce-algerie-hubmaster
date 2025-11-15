import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import CarouselSlogan1 from './CarouselSlogan1';
import CarouselSlogan2 from './CarouselSlogan2';
import CarouselSlogan3 from './CarouselSlogan3';

const CarouselSlogan = () => {
  const { isRTL, language } = useSafeI18nWithRouter();

  return (
    <div className="w-full space-y-6">
      {/* Slogans combinés en une seule ligne avec espacement de 1mm */}
      <div className={`w-full flex items-center justify-center ${
        isRTL 
          ? 'flex-row-reverse space-x-reverse' 
          : language === 'fr' 
            ? 'pl-4' 
            : 'px-4'
      }`} style={{ gap: '1mm' }}>
        <CarouselSlogan1 />
        <CarouselSlogan2 />
      </div>
      {/* Phrase finale simple sans cadre */}
      <CarouselSlogan3 />
    </div>
  );
};

export default CarouselSlogan;
