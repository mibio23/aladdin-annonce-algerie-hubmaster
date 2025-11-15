import { useEffect } from 'react';
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

// Composant invisible qui précharge les menus critiques
const MenuPreloader: React.FC = () => {
  const { language } = useSafeI18nWithRouter();

  useEffect(() => {
    // Préchargement neutralisé: aucun chargement de menu
    const timeoutId = setTimeout(() => {}, 500);
    return () => clearTimeout(timeoutId);
  }, [language]);

  // Ce composant ne rend rien visuellement
  return null;
};

export default MenuPreloader;