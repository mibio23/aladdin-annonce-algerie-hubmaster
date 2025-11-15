
import { useState} from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // État pour stocker notre valeur
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Obtenir de localStorage par clé
      const item = window.localStorage.getItem(key);
      // Parser le JSON stocké ou retourner initialValue si aucune valeur
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si erreur, retourner initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Fonction pour définir la valeur
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permettre à value d'être une fonction donc nous avons la même API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Sauvegarder l'état
      setStoredValue(valueToStore);
      // Sauvegarder dans localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Une implémentation plus avancée gérerait le cas d'erreur
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
