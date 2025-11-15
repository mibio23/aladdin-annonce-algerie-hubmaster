import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, CirclePlus, Briefcase } from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { Link } from 'react-router-dom';
import OptimizedImage from '@/components/common/OptimizedImage';
import { useAuth } from '@/contexts/AuthContext';

const AdvertisingHeroCarousel = () => {
  const { t } = useSafeI18nWithRouter();
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Vous êtes un professionnel ?",
      subtitle: "Déposez votre offre de métiers",
      description: "Trouvez des clients dans votre région",
      buttonText: "Déposer votre offre de métiers",
      buttonLink: "/deposer-offre-metier",
      buttonIcon: <Briefcase className="w-5 h-5" />,
      backgroundImage: '/lovable-uploads/674ffe81-546c-4877-9e59-c62fa5d08d07.png',
      backgroundColor: 'rgb(133, 255, 211)'
    },
    {
      id: 2,
      title: t('ecoCarousel.ad2.title'),
      subtitle: t('ecoCarousel.ad2.subtitle'),
      description: t('ecoCarousel.ad2.description'),
      buttonText: t('ecoCarousel.learnMore'),
      buttonLink: t('ecoCarousel.learnMoreLink') || "#",
      buttonIcon: <CirclePlus className="w-5 h-5" />,
      backgroundImage: '/lovable-uploads/1b389b9d-a4af-4bce-9d96-6437e5917bf7.png',
      backgroundColor: 'rgb(118, 96, 120)'
    },
    {
      id: 3,
      title: t('ecoCarousel.ad3.title'),
      subtitle: t('ecoCarousel.ad3.subtitle'),
      description: t('ecoCarousel.ad3.description'),
      buttonText: "Rechercher",
      buttonLink: "/search",
      buttonIcon: <Search className="w-5 h-5" />,
      backgroundImage: '/lovable-uploads/50a9e887-1315-4e89-be9e-3ef1d3c4bae8.png',
      backgroundColor: 'rgb(118, 216, 120)'
    }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [slides.length, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-banner-desktop mb-5" style={{ backgroundColor: slides[currentSlide].backgroundColor }}>
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`picture-hero-slide w-full transition-transform duration-500 ease-in-out ${
              index === currentSlide 
                ? 'picture-hero-slide-active translate-x-0' 
                : index < currentSlide 
                  ? '-translate-x-full' 
                  : 'translate-x-full'
            } ${index === currentSlide ? 'relative' : 'absolute top-0 left-0'}`}
          >
            <div className="flex justify-center items-center overflow-hidden relative">
              <div className="hero-content-box absolute text-center flex flex-col h-full justify-between"
                   style={{
                     background: `linear-gradient(${slide.backgroundColor}, ${slide.backgroundColor})`,
                     color: '#015354'
                   }}>
                <h1 className="hero-content-box-title text-left text-4xl font-bold">
                  <span className="text-blue-600">{slide.title}</span>
                  <br />
                  <span className="text-lg font-normal">{slide.subtitle}</span>
                </h1>
                
                {slide.id === 1 && !user ? (
                  // Si c'est la slide "Déposer votre offre de métiers" et que l'utilisateur n'est pas connecté
                  <Link
                    to="/connexion"
                    onClick={() => sessionStorage.setItem('authRedirectUrl', slide.buttonLink)}
                    className="walla-button bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors inline-block"
                  >
                    {slide.buttonIcon}
                    <span>{slide.buttonText}</span>
                  </Link>
                ) : (
                  // Sinon, utiliser le lien normal
                  <Link
                    to={slide.buttonLink}
                    className="walla-button bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors inline-block"
                  >
                    {slide.buttonIcon}
                    <span>{slide.buttonText}</span>
                  </Link>
                )}
              </div>
              
              <OptimizedImage
                src={slide.backgroundImage}
                alt={slide.description}
                className="w-full h-[400px]"
                width={1200}
                height={400}
              />
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisingHeroCarousel;