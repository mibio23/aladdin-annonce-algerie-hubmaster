
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  // État et setters pour la valeur debounced
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Mettre à jour la valeur debounced après le délai
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Annuler le timeout si value change (aussi lors du démontage)
    // Cela empêche la valeur debounced de se mettre à jour si value a changé
    // dans le délai de délai. Le timeout est effacé et redémarré.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Seulement re-call l'effet si value ou delay changent

  return debouncedValue;
}
