import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="group">
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 h-20 w-20',
        'bg-transparent border-2 border-transparent hover:bg-white/90 hover:border-red-300',
        {
          'opacity-[0.67] hover:opacity-100 pointer-events-auto': isVisible,
          'opacity-0 pointer-events-none': !isVisible,
        }
      )}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <span className="text-6xl font-black text-transparent bg-gradient-to-r from-red-400 to-white bg-clip-text leading-none rotate-90 group-hover:from-red-500 group-hover:to-red-200 transition-all">&lt;</span>
    </Button>
    </div>
  );
};

export default BackToTopButton;
