import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useAdvertising } from '@/providers/AdvertisingProvider';
import { Car, Home, Users, Briefcase, Shirt, Gift } from 'lucide-react';
import { useOptimizedTimeout } from '@/hooks/useOptimizedTimeout';
import OptimizedImage from '@/components/common/OptimizedImage';

interface Option {
  id: number | string;
  icon: React.ReactNode;
  main: string;
  sub: string;
  backgroundImage: string;
  backgroundColor: string;
  videoUrl?: string;
}

const isVideoUrl = (url?: string) => /\.(mp4|webm|ogg|m3u8)(\?.*)?$/i.test(url ?? '');

const InteractiveOptionsCarousel = React.memo(() => {
  const { t } = useSafeI18nWithRouter();
  const [activeOption, setActiveOption] = useState(0);
  const [panelVisible, setPanelVisible] = useState(false);
  const { createTimeout } = useOptimizedTimeout();
  const [_autoAdvanceInterval, setAutoAdvanceInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Utiliser le hook optimisé au lieu de faire une requête directe
  const { banners, loading: _loading, error: _error } = useAdvertising();

  const showPanel = useCallback(() => {
    setPanelVisible(true);
  }, []);

  useEffect(() => {
    createTimeout(showPanel, 0);
  }, [createTimeout, showPanel]);

  // Convertir les bannières en options pour le carrousel
  const remoteOptions = useMemo(() => {
    if (!banners?.length) return [];
    
    return banners.map((banner, idx) => {
      const isVid = isVideoUrl(banner.image_url || '');
      return {
        id: banner.id ?? idx,
        icon: banner.icon_emoji ? 
          <span className="text-xl" aria-hidden>{banner.icon_emoji}</span> : 
          <Gift className="w-6 h-6" />,
        main: banner.title,
        sub: banner.subtitle || '',
        backgroundImage: isVid ? '' : (banner.image_url || ''),
        videoUrl: isVid ? banner.image_url : undefined,
        backgroundColor: '#5D9CEC',
      };
    });
  }, [banners]);

  // Trigger slide animation avec optimisation
  useEffect(() => {
    setPanelVisible(false);
    createTimeout(showPanel, 0);
  }, [activeOption, createTimeout, showPanel]);

  const options: Option[] = [
    {
      id: 1,
      icon: <Car className="w-6 h-6" />,
      main: t('categories.vehicles'),
      sub: t('categories.vehiclesDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1494976688153-033c6f44dce?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#ED5565'
    },
    {
      id: 2,
      icon: <Home className="w-6 h-6" />,
      main: t('categories.realEstate'),
      sub: t('categories.realEstateDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#FC6E51'
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6" />,
      main: t('categories.services'),
      sub: t('categories.servicesDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#FFCE54'
    },
    {
      id: 4,
      icon: <Briefcase className="w-6 h-6" />,
      main: t('categories.jobs'),
      sub: t('categories.jobsDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#2ECC71'
    },
    {
      id: 5,
      icon: <Shirt className="w-6 h-6" />,
      main: t('categories.fashion'),
      sub: t('categories.fashionDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#5D9CEC'
    },
    {
      id: 6,
      icon: <Gift className="w-6 h-6" />,
      main: t('categories.leisure'),
      sub: t('categories.leisureDescription'),
      backgroundImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
      backgroundColor: '#AC92EC'
    },
    // Exemples publicitaires (affichés si aucune donnée distante)
    {
      id: 7,
      icon: <Gift className="w-6 h-6" />,
      main: 'Restaurant El Bahia',
      sub: 'Cuisine traditionnelle algérienne — Livraison sur Alger',
      backgroundImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      backgroundColor: '#FF6B6B'
    },
    {
      id: 8,
      icon: <Shirt className="w-6 h-6" />,
      main: 'Boutique Mode Yasmine',
      sub: 'Vêtements femmes & accessoires — Nouvelle collection',
      backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      backgroundColor: '#4ECDC4'
    },
    {
      id: 9,
      icon: <Car className="w-6 h-6" />,
      main: 'Garage Auto Mechanic',
      sub: 'Entretien & réparation — 15 ans dexpérience',
      backgroundImage: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
      backgroundColor: '#F7B267'
    },
    {
      id: 10,
      icon: <Briefcase className="w-6 h-6" />,
      main: 'Centre de Formation Digital',
      sub: 'Web, design, marketing — Certifications reconnues',
      backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      backgroundColor: '#9575CD'
    }
  ];

  const displayOptions = remoteOptions.length ? remoteOptions : options;
  const leftSide = displayOptions.length > 0 && (activeOption % displayOptions.length) < Math.ceil(displayOptions.length / 2);
  
  // Handler pour les clics utilisateur (optimisé)
  const handleOptionClick = useCallback((index: number) => {
    setActiveOption(index);
    // Log optimisé pour éviter le spam
    if (process.env.NODE_ENV === 'development') {
      console.log('carousel_option_clicked', { index, optionId: displayOptions[index]?.id });
    }
  }, [displayOptions]);
  
  // Auto advance carousel with recursive setTimeout for Chrome performance
  useEffect(() => {
    if (!displayOptions.length) return;
    
    let timeoutId: NodeJS.Timeout | null = null;
    
    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        setActiveOption((prev) => (prev + 1) % displayOptions.length);
        scheduleNext();
      }, 6000);
    };
    
    scheduleNext();
    if (timeoutId) setAutoAdvanceInterval(timeoutId);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      setAutoAdvanceInterval(null);
    };
  }, [displayOptions.length]);

  // Ensure active index stays valid when data changes
  useEffect(() => {
    if (activeOption >= displayOptions.length && displayOptions.length > 0) {
      setActiveOption(0);
    }
  }, [displayOptions.length, activeOption]);

  return (
    <section className="relative w-full h-[40vh] md:h-[56vh] py-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" aria-label="Carrousel publicitaire">
      {/* Barre verticale (toutes du même côté) */}
      <div
        className={`absolute top-0 bottom-0 ${leftSide ? 'left-0' : 'right-0'} w-16 p-2 z-20 overflow-y-auto flex flex-col space-y-2`}
        aria-label="Sélecteurs de bannières"
      >
        {displayOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(index)}
            className={`relative h-8 sm:h-10 w-full rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeOption === index ? 'bg-white/90 ring-2 ring-black/20 dark:ring-white/30' : 'bg-white/60 hover:bg-white/80'}`}
            aria-current={activeOption === index}
            aria-label={`${typeof option.main === 'string' ? option.main : 'Bannière'} (${index + 1})`}
          />
        ))}
      </div>

      {/* Espace principal réservé en fonction du côté de la barre */}
      <div
        className={`relative h-full w-full transition-[padding] duration-500 ${leftSide ? 'pl-16 pr-2' : 'pr-16 pl-2'}`}
        style={{ transform: panelVisible ? 'translateX(0)' : `translateX(${leftSide ? '10px' : '-10px'})` }}
      >
        <div className="relative h-full w-full flex gap-3 md:gap-4">
          {/* Panneau descriptif */}
          <article className="flex-1 rounded-3xl overflow-hidden relative shadow-lg bg-black/60 text-white">
            <div key={`desc-${activeOption}`} className="absolute inset-0 p-5 md:p-8 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                  {displayOptions[activeOption]?.icon}
                </div>
                <h1 className="text-xl md:text-2xl font-bold leading-tight">
                  {displayOptions[activeOption]?.main}
                </h1>
              </div>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                {displayOptions[activeOption]?.sub}
              </p>
            </div>
          </article>

          {/* Panneau média */}
          <aside className="flex-1 rounded-3xl overflow-hidden relative shadow-lg bg-black/10">
            <div key={`media-${activeOption}`} className="absolute inset-0">
              {displayOptions[activeOption]?.videoUrl ? (
                <video
                  className="w-full h-full object-contain bg-black/20"
                  src={displayOptions[activeOption]!.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <OptimizedImage
                  src={displayOptions[activeOption]?.backgroundImage || ''}
                  alt={`${displayOptions[activeOption]?.main || 'Bannière'} media`}
                  className="w-full h-full"
                  width={800}
                  height={600}
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
});

InteractiveOptionsCarousel.displayName = 'InteractiveOptionsCarousel';

export default InteractiveOptionsCarousel;