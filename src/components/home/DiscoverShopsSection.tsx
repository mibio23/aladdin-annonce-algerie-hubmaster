import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import ShopCard from "./ShopCard";
import { shops } from "@/data/shopsData";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import DiscoverShopsBanner from "./DiscoverShopsBanner";
import SmartAnnouncementsGrid from "./SmartAnnouncementsGrid";

const DiscoverShopsSection = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  const featuredShops = shops.slice(0, 8);

  return (
    <section className="bg-white border rounded-lg p-6 dark:bg-slate-800 dark:border-slate-700">
      <DiscoverShopsBanner />
      <div className={`flex items-center mb-6 justify-between`}>
        <div className={`flex items-center ${isRTL ? 'order-2' : 'order-1'}`}>
          <ShoppingBag className={`h-8 w-8 ${isRTL ? 'ml-3' : 'mr-3'} text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer`} />
          <h2 className={`text-[2.84rem] font-bold text-black dark:text-slate-200 aladdin-glow uppercase hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('sections.discoverShopsHover')}
          </h2>
        </div>
        <Link
          to="/boutiques"
          className={`font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 ${isRTL ? 'order-1' : 'order-2'}`}
        >
          {t('announcements.viewAll')}
        </Link>
      </div>
      
      <SmartAnnouncementsGrid itemsPerRow={8}>
        {featuredShops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </SmartAnnouncementsGrid>
    </section>
  );
};

export default DiscoverShopsSection;
