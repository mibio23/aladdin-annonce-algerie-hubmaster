import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

const HeroBannerContent = () => {
  const { t, language } = useSafeI18nWithRouter();
  
  // Afficher le nom du site selon la langue
  const siteName = language === 'ar' ? 'علاء الدين' : 'AL@DDIN';
  
  return (
    <div className="max-w-4xl w-full flex flex-col items-center">
      <div className="mb-8 w-full flex flex-col items-center">
        <h1 className="title-hero text-brand-gold drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] text-center" 
            style={{
              textShadow: `0 0 7px hsl(var(--brand-glow-accent)), 0 0 10px hsl(var(--brand-glow-main)), 0 0 20px hsl(var(--brand-glow-main)), 0 0 30px hsl(var(--brand-glow-main)), 0 0 40px hsl(var(--brand-glow-main)), 0 0 50px hsl(var(--brand-glow-accent))`,
              filter: 'brightness(1.2)',
              transform: 'scale(1.4)' // Augmentation de 40%
            }}>
          {siteName}
        </h1>
        <div className="flex flex-col items-center mt-4">
          <p className="subtitle-primary text-brand-gold drop-shadow-[0_0_8px_rgba(255,255,0,0.6)] mb-3"
             style={{
               textShadow: `0 0 7px hsl(var(--brand-glow-accent)), 0 0 8px hsl(var(--brand-glow-main)), 0 0 16px hsl(var(--brand-glow-main)), 0 0 24px hsl(var(--brand-glow-main)), 0 0 32px hsl(var(--brand-glow-accent))`,
               filter: 'brightness(1.1)'
             }}>
            {t('hero.platformSubtitle')}
          </p>
          <p className="text-professional text-white text-center leading-relaxed max-w-4xl"
             style={{
               textShadow: '0 2px 4px rgba(0,0,0,0.5)'
             }}>
            {t('hero.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerContent;
