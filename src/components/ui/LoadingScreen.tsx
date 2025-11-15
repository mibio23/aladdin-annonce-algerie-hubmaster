import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoadingSettings } from '@/hooks/useLoadingSettings';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useOptimizedTimeout } from '@/hooks/useOptimizedTimeout';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { loadingDuration } = useLoadingSettings();
  const { language } = useSafeI18nWithRouter();

  // Detect device language automatically
  const deviceLanguage = navigator.language.toLowerCase();
  const isArabic = language === 'ar' || (deviceLanguage.includes('ar') || deviceLanguage.includes('dz'));
  
  const platformText = isArabic 
    ? "منصة الإعلانات المبوبة في الجزائر" 
    : "Plateforme de Petites Annonces en Algérie";

  const { createTimeout, clearAllTimeouts } = useOptimizedTimeout();

  const completeLoading = useCallback(() => {
    setIsLoading(false);
    createTimeout(onLoadingComplete, 300); // Réduit de 500ms à 300ms
  }, [createTimeout, onLoadingComplete]);

  useEffect(() => {
    const duration = loadingDuration;
    const interval = 40; // Optimisé de 50ms à 40ms
    const increment = 100 / (duration / interval);
    let progressCount = 0;
    
    const updateProgress = () => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        progressCount++;
        
        if (newProgress >= 100) {
          createTimeout(completeLoading, 200); // Réduit de 300ms à 200ms
          return 100;
        }
        
        // Continuer la progression
        if (progressCount < duration / interval) {
          createTimeout(updateProgress, interval);
        }
        
        return newProgress;
      });
    };

    // Démarrer la progression
    updateProgress();

    return () => {
      clearAllTimeouts();
    };
  }, [loadingDuration, createTimeout, clearAllTimeouts, completeLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
        >
          {/* Main content container */}
          <div className="flex flex-col items-center space-y-8">
            {/* Logo section with rotation animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }}
              className="relative"
            >
              {/* Logo with continuous rotation */}
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex items-center justify-center"
              >
                <img
                  src="/lovable-uploads/4cf4a1ea-082d-4d7d-8b1b-01eb5e04557a.png"
                  alt="AL@DDIN Logo"
                  className="h-24 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Brand name - same style as header */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center space-y-4"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground aladdin-glow"
              >
                {isArabic ? 'علاء الدين' : 'AL@DDIN'}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className={`text-muted-foreground text-lg ${isArabic ? 'font-arabic' : ''}`}
              >
                {platformText}
              </motion.p>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-full max-w-sm space-y-4"
            >
              {/* Progress bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress percentage */}
              <div className="text-center">
                <motion.span
                  key={progress}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-xl font-bold text-primary"
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;