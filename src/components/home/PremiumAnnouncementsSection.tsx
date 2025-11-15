
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Sparkles } from "lucide-react";
import LegacyAnnouncementCard from "@/components/announcements/LegacyAnnouncementCard";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import PremiumAnnouncementsBanner from "./PremiumAnnouncementsBanner";
import SmartAnnouncementsGrid from "./SmartAnnouncementsGrid";

const PremiumAnnouncementsSection = () => {
  const { t, isRTL } = useSafeI18nWithRouter();
  
  // Réduire le nombre d'annonces pour optimiser le DOM (SEO)
  const premiumAnnouncements = Array(4).fill(null).map((_, i) => ({
    id: `premium-${i}`,
    title: `Annonce Premium Exceptionnelle ${i + 1}`,
    price: Math.floor(Math.random() * 100000) + 50000,
    location: ["Alger", "Oran", "Constantine", "Sétif", "Annaba"][i % 5],
    imageUrl: `https://picsum.photos/seed/premium${i}/400/300`,
    // Ajouter plusieurs images pour le carrousel
    imageUrls: [
      `https://picsum.photos/seed/premium${i}/400/300`,
      `https://picsum.photos/seed/premium${i}b/400/300`,
      `https://picsum.photos/seed/premium${i}c/400/300`,
    ],
    date: `Il y a ${i + 1} jour${i > 0 ? 's' : ''}`,
    isFeatured: true,
    isProfessional: i % 2 === 0,
    isOnline: i !== 1,
    isActive: true,
    isUrgent: i === 1,
    urgentMessage: i === 1 ? "Urgent - Se termine bientôt" : undefined,
    phoneNumber: i % 3 === 0 ? `055${Math.floor(Math.random() * 10000000)}` : undefined,
    // Ajouter boutique avec logo pour certaines annonces
    shopName: i % 2 === 0 ? ["ÉlectroChoc", "Mode & Style", "TechPro", "HomeDecor"][i % 4] : undefined,
    shopId: i % 2 === 0 ? `shop-${i}` : undefined,
    category: "Premium",
  }));

  return (
    <section className="bg-transparent p-4">
      <PremiumAnnouncementsBanner />
      <div className={`relative flex items-center justify-between mb-4`}>
        <div className={`flex items-center ${isRTL ? 'order-2' : 'order-1'}`}>
          <div className="relative">
            <Crown className={`h-8 w-8 ${isRTL ? 'ml-3' : 'mr-3'} transition-all duration-300 hover:scale-110 cursor-pointer`} style={{color: 'hsl(var(--brand-gold))', fill: 'hsl(var(--brand-gold))'}} />
            <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
          </div>
          <h2 className={`text-[2.84rem] font-bold text-black dark:text-slate-200 font-playfair aladdin-glow uppercase hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>{t('announcements.premium')}</h2>
        </div>
        <Link 
          to="/annonces/premium" 
          className={`text-lg font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hidden sm:flex items-center transition-colors duration-200 ${isRTL ? 'order-1' : 'order-2'}`}
        >
          {t('announcements.viewAll')} <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      {premiumAnnouncements.length > 0 ? (
        <SmartAnnouncementsGrid itemsPerRow={8}>
          {premiumAnnouncements.map((announcement) => (
            <LegacyAnnouncementCard 
              key={announcement.id}
              id={announcement.id}
              title={announcement.title}
              price={announcement.price}
              location={announcement.location}
              imageUrl={announcement.imageUrl}
              imageUrls={announcement.imageUrls}
              date={announcement.date}
              isFeatured={announcement.isFeatured}
              isProfessional={announcement.isProfessional}
              isOnline={announcement.isOnline}
              isActive={announcement.isActive}
              isUrgent={announcement.isUrgent}
              urgentMessage={announcement.urgentMessage}
              phoneNumber={announcement.phoneNumber}
              category={announcement.category}
              shopName={announcement.shopName}
              shopId={announcement.shopId}
              shopLogoUrl={(announcement as any).shopLogoUrl}
            />
          ))}
        </SmartAnnouncementsGrid>
      ) : (
        <p className="text-gray-500 text-center py-4 dark:text-slate-400">Aucune annonce premium pour le moment.</p>
      )}
    </section>
  );
};

export default PremiumAnnouncementsSection;
