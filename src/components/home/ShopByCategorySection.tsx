import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categorizedAnnouncements } from "@/data/categoryData";
import { usePopularCategories } from "@/hooks/usePopularCategories";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { LazyImage } from "@/components/common/LazyImage";
import ShopByCategoryBanner from "./ShopByCategoryBanner";
import searchBackground from "@/assets/search-background.png";

const ShopByCategorySection = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  const popularCategories = usePopularCategories();

  return (
    <section 
      className="bg-white border rounded-lg p-4 dark:bg-slate-800 dark:border-slate-700 relative overflow-hidden"
      style={{
        backgroundImage: `url(${searchBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <ShopByCategoryBanner />
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          direction: isRTL ? "rtl" : "ltr",
        }}
        className="w-full"
      >
        <CarouselContent className={isRTL ? "-mr-4" : "-ml-4"}>
          {popularCategories.map((category, index) => {
            const count = categorizedAnnouncements[category.slug]?.length || 0;
            const translatedName = t(`categories.${category.slug}`) !== `categories.${category.slug}` 
              ? t(`categories.${category.slug}`) 
              : category.name;
            
            return (
              <CarouselItem key={category.id} className={`${isRTL ? "pr-2" : "pl-2"} basis-1/4 sm:basis-1/5 md:basis-1/7 lg:basis-1/9 xl:basis-1/10 2xl:basis-1/12`}>
                <Link 
                  to={`/category/${category.slug}`} 
                  className="block group"
                >
                  <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 scale-[0.75]">
                    <div className="aspect-square relative overflow-hidden rounded-[20%]">
                      <LazyImage 
                        src={category.imageUrl} 
                        alt={translatedName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[20%]"
                        lazy={index !== 0}
                      />
                      <div
                        className={`
                          absolute top-2 ${isRTL ? "left-2" : "right-2"}
                          px-2 py-1 rounded-full z-10 text-xs font-semibold
                          bg-black/40 opacity-40 text-white
                          group-hover:opacity-100
                          group-hover:bg-black/80
                          group-hover:text-brand-gold
                          group-hover:aladdin-gold-glow-hover
                          transition-all duration-200
                          shadow
                        `}
                        style={{ pointerEvents: "none" }}
                      >
                        {count} {count > 1 ? t('categories.announcements') : t('categories.announcement')}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className={`absolute inset-0 ${
                          index % 6 === 0 ? 'bg-blue-600/60' :
                          index % 6 === 1 ? 'bg-purple-600/60' :
                          index % 6 === 2 ? 'bg-green-600/60' :
                          index % 6 === 3 ? 'bg-orange-600/60' :
                          index % 6 === 4 ? 'bg-red-600/60' :
                          'bg-teal-600/60'
                        }`} />
                        <h3 className={`relative text-white text-emphasis text-sm leading-tight ${isRTL ? 'text-right' : 'text-center'}`}>
                          {translatedName}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className={`absolute ${isRTL ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg dark:bg-slate-700/80 dark:hover:bg-slate-700`} />
        <CarouselNext className={`absolute ${isRTL ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg dark:bg-slate-700/80 dark:hover:bg-slate-700`} />
      </Carousel>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
