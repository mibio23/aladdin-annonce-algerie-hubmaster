import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

const FooterCopyright = () => {
  const { t } = useSafeI18nWithRouter();

  return (
    <>
      <div className="footer-copyright text-center pt-6 border-t border-gray-700 text-gray-400 text-sm relative">
        <div className="mb-4 flex flex-col items-center justify-center relative">
          <img
            src="/lovable-uploads/19d6e319-1c10-44f0-a889-e4babb7d2e97.png"
            alt="AL@DDIN Logo Footer"
            className="h-[77px] w-auto object-contain max-w-[220px] transition-all duration-200 hover:scale-105"
          />
          <span className="mt-2 text-[2.84rem] font-bold hidden sm:block title-section text-black dark:text-slate-200 aladdin-glow hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:drop-shadow-xl hover:text-shadow-red cursor-pointer">
            AL@DDIN
          </span>
        </div>
        <p className="text-white font-bold text-center">{t('footer.copyright')}</p>
        <p className="mt-1 font-bold uppercase text-white text-center">{t('footer.platformTitle')}</p>
        <p className="mt-2 text-sm text-white font-semibold max-w-4xl mx-auto text-center">
          {t('footer.brandDisclaimer')}
        </p>
        
        {/* Avertissement légal cryptomonnaies */}
        <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg max-w-4xl mx-auto">
          <p className="text-xs text-red-200 font-medium text-center leading-relaxed">
            {t('footer.cryptoWarning')}
          </p>
        </div>
        
        {/* Espace pour un futur message */}
        <div className="mt-12"></div>
      </div>
    </>
  );
};

export default FooterCopyright;
