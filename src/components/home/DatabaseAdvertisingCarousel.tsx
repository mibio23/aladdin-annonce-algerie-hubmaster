import { useEffect, useState } from 'react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { ArrowRight, ExternalLink, X, Info } from 'lucide-react';
import { useAdvertising } from '@/providers/AdvertisingProvider';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import OptimizedImage from '@/components/common/OptimizedImage';

const DatabaseAdvertisingCarousel = () => {
  const { isRTL } = useSafeI18nWithRouter();
  const { banners, loading, error } = useAdvertising();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedBanner, setSelectedBanner] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-play optimisé avec setTimeout direct
  useEffect(() => {
    if (!isAutoPlaying || banners.length === 0) return;

    const timeoutId = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % banners.length);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [isAutoPlaying, banners.length, activeIndex]);

  const handleSlideHover = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const handleCarouselMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handleAdClick = (linkUrl?: string) => {
    if (linkUrl && linkUrl !== '#') {
      window.open(linkUrl, '_blank');
    }
  };

  const handleIndicatorClick = (banner: any, index: number) => {
    setSelectedBanner(banner);
    setActiveIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBanner(null);
    setIsAutoPlaying(true);
  };

  if (loading) {
    return (
      <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-6 mx-auto max-w-md"></div>
            <div className="h-96 bg-gray-300 rounded-3xl"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || banners.length === 0) {
    return null; // Ne pas afficher le carrousel s'il n'y a pas de bannières
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Partenaires Publicitaires
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez nos partenaires qui font confiance à AL@DDIN pour leur visibilité
          </p>
        </div>

        <div 
          className="w-full max-w-7xl mx-auto relative"
          onMouseLeave={handleCarouselMouseLeave}
        >
          <div className="flex items-center h-[500px] md:h-96">
            {/* Slide principal - Pleine largeur */}
            <div className={`flex-1 h-full rounded-3xl overflow-hidden bg-gradient-to-r ${banners[activeIndex]?.background_gradient} shadow-2xl transition-all duration-700 hover:shadow-3xl cursor-pointer`}
                 onClick={() => handleAdClick(banners[activeIndex]?.link_url)}>
              <div className={`flex items-center h-full ${isRTL ? 'flex-row-reverse' : ''} p-8 md:p-16`}>
                {/* Contenu texte */}
                <div className={`flex-1 text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                      Publicité
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
                    {banners[activeIndex]?.title}
                  </h3>
                  {banners[activeIndex]?.subtitle && (
                    <p className="text-2xl md:text-3xl font-semibold mb-6 opacity-95">
                      {banners[activeIndex].subtitle}
                    </p>
                  )}
                  {banners[activeIndex]?.description && (
                    <p className="text-lg md:text-xl mb-8 opacity-85 max-w-2xl leading-relaxed">
                      {banners[activeIndex].description}
                    </p>
                  )}
                  <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    {banners[activeIndex]?.button_text}
                    <ExternalLink className={`w-6 h-6 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} />
                  </button>
                </div>

                {/* Zone image/icône */}
                <div className="flex-1 h-full flex items-center justify-center p-8">
                  <div className="w-full h-full max-w-lg bg-white/15 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-2xl">
                    {banners[activeIndex]?.image_url ? (
                      <OptimizedImage
                        src={banners[activeIndex].image_url}
                        alt={banners[activeIndex]?.title || 'Banner'}
                        className="w-full h-full rounded-2xl"
                        width={600}
                        height={400}
                      />
                    ) : (
                      <div className="text-white text-8xl md:text-9xl drop-shadow-lg">
                        {banners[activeIndex]?.icon_emoji || '🎯'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Slides empilées - Espacement ultra réduit pour plus d'annonces */}
            <div className={`flex flex-col space-y-0.5 ${isRTL ? 'mr-2' : 'ml-2'}`}>
              {banners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`
                    w-16 h-12 rounded-md cursor-pointer transition-all duration-500 overflow-hidden relative group
                    ${index === activeIndex 
                      ? 'opacity-100 scale-110 shadow-2xl ring-2 ring-white/50 z-10' 
                      : 'opacity-75 hover:opacity-95 hover:scale-105 shadow-lg'
                    }
                    bg-gradient-to-r ${banner.background_gradient}
                  `}
                  onMouseEnter={() => handleSlideHover(index)}
                  onClick={() => handleIndicatorClick(banner, index)}
                >
                  <div className="w-full h-full flex items-center justify-center relative">
                    {banner.image_url ? (
                      <OptimizedImage
                        src={banner.image_url}
                        alt={banner.title}
                        className="w-full h-full"
                        width={80}
                        height={60}
                      />
                    ) : (
                      <div className="text-white text-sm z-10">
                        {banner.icon_emoji || '🎯'}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    {/* Icône d'information */}
                    <div className="absolute bottom-0.5 right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Info className="w-2.5 h-2.5 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  {/* Indicateur actif */}
                  {index === activeIndex && (
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-lg"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de progression compacts */}
          <div className="flex justify-center mt-8 space-x-1.5">
            {banners.map((banner, index) => (
              <button
                key={index}
                className={`relative transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 h-2 bg-blue-500 rounded-full' 
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                onClick={() => handleIndicatorClick(banner, index)}
                title={banner.title}
              >
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Informations pour les annonceurs */}
          <div className="text-center mt-12 p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-muted-foreground mb-3">
              Vous souhaitez faire de la publicité sur AL@DDIN ?
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Devenir Annonceur
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Modal détaillé avec effet de porte qui s'ouvre */}
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="max-w-7xl w-full h-[95vh] p-0 overflow-hidden">
            <div className="flex h-full relative">
              {/* Image principale agrandie */}
              <div className="flex-[2] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                {selectedBanner?.image_url ? (
                  <OptimizedImage
                    src={selectedBanner.image_url}
                    alt={selectedBanner.title}
                    className="w-full h-full"
                    width={1400}
                    height={1000}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${selectedBanner?.background_gradient}`}>
                    <div className="text-white text-9xl drop-shadow-lg">
                      {selectedBanner?.icon_emoji || '🎯'}
                    </div>
                  </div>
                )}
               
                {/* Overlay sombre pour le contraste */}
                <div className="absolute inset-0 bg-black/5"></div>
               
                {/* Bouton fermer stylisé */}
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 p-3 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/30 transition-all duration-300 border border-white/20"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Panneau d'informations - Effet porte qui glisse */}
              <div className={`
                w-[400px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 
                transform transition-transform duration-700 ease-out
                ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}
                shadow-2xl
              `}>
                {/* En-tête du panneau */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-sm font-medium rounded-full">
                      Publicité Sponsorisée
                    </span>
                  </div>
                 
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedBanner?.title}
                  </h2>
                 
                  {selectedBanner?.subtitle && (
                    <p className="text-lg font-medium opacity-90">
                      {selectedBanner.subtitle}
                    </p>
                  )}
                </div>

                {/* Contenu du panneau */}
                <div className="p-6 h-full overflow-y-auto">
                  {selectedBanner?.description && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {selectedBanner.description}
                      </p>
                    </div>
                  )}

                  {/* Informations supplémentaires */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Informations publicitaire
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cette annonce est gérée par nos partenaires publicitaires certifiés.
                      </p>
                    </div>

                    {selectedBanner?.link_url && selectedBanner.link_url !== '#' && (
                      <button 
                        onClick={() => handleAdClick(selectedBanner.link_url)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                      >
                        {selectedBanner.button_text}
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                   
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        Annonce • AL@DDIN Platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DatabaseAdvertisingCarousel;
