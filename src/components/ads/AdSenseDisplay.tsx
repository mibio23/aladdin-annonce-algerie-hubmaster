
import React, { useEffect, useRef } from 'react';

// Déclare adsbygoogle sur l'objet window pour TypeScript
declare global {
  interface Window {
    // Changed from: adsbygoogle?: { push: (obj: object) => void }[];
    // To: adsbygoogle?: object[];
    // This types adsbygoogle as an array of objects, which aligns with the common
    // (window.adsbygoogle = window.adsbygoogle || []).push({}); pattern.
    adsbygoogle?: object[];
  }
}

interface AdSenseDisplayProps {
  adClient: string; // Ex: "ca-pub-XXXXXXXXXXXXX"
  adSlot: string;   // Ex: "YYYYYYYYYY"
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSenseDisplay: React.FC<AdSenseDisplayProps> = ({
  adClient,
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: 'block', textAlign: 'center' }, // Style par défaut, centrage
  className = "",
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const adScriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadAds = () => {
      try {
        if (window.adsbygoogle) {
          // With the updated type, this line should no longer cause a TypeScript error.
          // It correctly pushes an object onto the adsbygoogle array.
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
          // Attendre que le script soit chargé s'il n'est pas encore là
          // Ceci est un fallback, le script devrait se charger avant
          setTimeout(loadAds, 50); 
        }
      } catch (e) {
        console.error("Erreur AdSense lors du push:", e);
      }
    };

    // 1. Charger le script AdSense s'il n'est pas déjà chargé
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        adScriptLoadedRef.current = true;
        loadAds(); // Pousser l'annonce une fois le script chargé
      };
      script.onerror = () => {
        console.error("Le script AdSense n'a pas pu être chargé.");
      };
      document.head.appendChild(script);
    } else {
      // Si le script est déjà là (par exemple, d'une autre instance de composant ou chargé manuellement)
      adScriptLoadedRef.current = true; // Supposons qu'il soit chargé
      loadAds();
    }

    // Nettoyage si le composant est démonté (peut être nécessaire pour les SPAs complexes)
    // Pour AdSense de base, ce n'est souvent pas critique pour un simple push({})
    // return () => { /* Logique de nettoyage si nécessaire */ };

  }, [adClient, adSlot]); // Exécuter si adClient ou adSlot changent

  // Si le script n'est pas encore prêt, on peut afficher un placeholder ou rien
  // Pour l'instant, l'ins sera rendu, et AdSense le remplira quand il sera prêt.

  return (
    <div className={`adsense-ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      ></ins>
    </div>
  );
};

export default AdSenseDisplay;

