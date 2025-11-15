import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Component that lazy loads its children only when they enter the viewport
 * Improves performance by not rendering off-screen content
 */
const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  ),
  rootMargin = '200px',
  threshold = 0.01
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={sectionRef}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default React.memo(LazySection);
