import { useRef, useCallback, useEffect } from 'react';

/**
 * Hook optimisé pour gérer les setTimeout avec cleanup automatique
 * Evite les fuites mémoire et optimise les performances
 */
export const useOptimizedTimeout = () => {
  const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());

  // Fonction pour créer un timeout avec cleanup automatique
  const createTimeout = useCallback((callback: () => void, delay: number): NodeJS.Timeout => {
    const timeoutId = setTimeout(() => {
      callback();
      timeoutRefs.current.delete(timeoutId);
    }, delay);
    
    timeoutRefs.current.add(timeoutId);
    return timeoutId;
  }, []);

  // Fonction pour nettoyer un timeout spécifique
  const clearOptimizedTimeout = useCallback((timeoutId: NodeJS.Timeout) => {
    clearTimeout(timeoutId);
    timeoutRefs.current.delete(timeoutId);
  }, []);

  // Fonction pour nettoyer tous les timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current.clear();
  }, []);

  // Cleanup automatique au démontage du composant
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);

  return { createTimeout, clearOptimizedTimeout, clearAllTimeouts };
};