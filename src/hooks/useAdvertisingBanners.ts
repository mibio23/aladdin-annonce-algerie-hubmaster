
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useSafeI18nWithRouter } from '@/lib/i18n/i18nContextWithRouter';

export interface AdvertisingBanner {
  id: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  button_text: string;
  image_url?: string;
  link_url?: string;
  background_gradient: string;
  icon_emoji?: string | null;
  position_order: number;
  is_active: boolean;
  end_at?: string | null;
  created_at: string;
  created_by?: string | null;
  updated_at: string;
}

export interface BannerTranslation {
  id: string;
  banner_id: string;
  language_code: string;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  button_text: string;
}

// Cache pour éviter les requêtes multiples
let bannersCache: { data: AdvertisingBanner[]; translations: BannerTranslation[]; timestamp: number } | null = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes - Cache plus long pour réduire les requêtes

export const useAdvertisingBanners = () => {
  const [banners, setBanners] = useState<AdvertisingBanner[]>([]);
  const [translations, setTranslations] = useState<BannerTranslation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useSafeI18nWithRouter();

  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Vérifier le cache
      const now = Date.now();
      if (bannersCache && (now - bannersCache.timestamp) < CACHE_DURATION) {
        setBanners(bannersCache.data);
        setTranslations(bannersCache.translations);
        setLoading(false);
        return;
      }
      
      // Requête optimisée: filtrer par langue active uniquement et limiter les résultats
      const { data: bannersData, error: bannersError } = await supabase
        .from('advertising_banners')
        .select(`
          *,
          advertising_banner_translations!inner (
            id,
            language_code,
            title,
            subtitle,
            description,
            button_text
          )
        `)
        .eq('is_active', true)
        .eq('advertising_banner_translations.language_code', language)
        .or(`end_at.is.null,end_at.gt.${new Date().toISOString()}`)
        .order('position_order')
        .limit(10);

      if (bannersError) {
        console.warn('Banner fetch failed, continuing without banners:', bannersError);
        setBanners([]);
        setTranslations([]);
        setError(null); // Ne pas afficher d'erreur à l'utilisateur
        setLoading(false);
        return;
      }

      // Extraire les traductions des données jointes
      const bannersOnly: AdvertisingBanner[] = (bannersData || []).map(banner => {
        const { advertising_banner_translations, ...bannerData } = banner;
        
        // Corriger les anciens liens "rechercher-reparateur" vers "deposer-offre-metier"
        if (bannerData.link_url && bannerData.link_url.includes('rechercher-reparateur')) {
          console.log('Correcting old link from rechercher-reparateur to deposer-offre-metier');
          bannerData.link_url = bannerData.link_url.replace('rechercher-reparateur', 'deposer-offre-metier');
        }
        
        return bannerData as AdvertisingBanner;
      });

      const allTranslations: BannerTranslation[] = (bannersData || []).reduce((acc, banner) => {
        if (banner.advertising_banner_translations) {
          const translations = Array.isArray(banner.advertising_banner_translations) 
            ? banner.advertising_banner_translations 
            : [banner.advertising_banner_translations];
          
          acc.push(...translations.map(t => ({
            id: t.id,
            banner_id: banner.id,
            language_code: t.language_code,
            title: t.title,
            subtitle: t.subtitle,
            description: t.description,
            button_text: t.button_text
          })) as BannerTranslation[]);
        }
        return acc;
      }, [] as BannerTranslation[]);

      // Mettre en cache
      bannersCache = {
        data: bannersOnly,
        translations: allTranslations,
        timestamp: now
      };

      setBanners(bannersOnly);
      setTranslations(allTranslations);
    } catch (err) {
      // Gestion d'erreur gracieuse: ne pas bloquer le site
      console.warn('Banner loading failed silently:', err);
      setBanners([]);
      setTranslations([]);
      setError(null); // Ne pas propager l'erreur
    } finally {
      setLoading(false);
    }
  };

  const getBannerWithTranslation = useMemo(() => (banner: AdvertisingBanner) => {
    const translation = translations.find(
      t => t.banner_id === banner.id && t.language_code === language
    );

    return {
      ...banner,
      title: translation?.title || banner.title,
      subtitle: translation?.subtitle || banner.subtitle,
      description: translation?.description || banner.description,
      button_text: translation?.button_text || banner.button_text,
    };
  }, [translations, language]);

  const processedBanners = useMemo(() => 
    banners.map(getBannerWithTranslation), 
    [banners, getBannerWithTranslation]
  );

  useEffect(() => {
    // Différer le chargement pour ne pas bloquer le rendu initial
    const timeoutId = setTimeout(fetchBanners, 200);
    return () => clearTimeout(timeoutId);
  }, [language]);

  return {
    banners: processedBanners,
    loading,
    error,
    refetch: fetchBanners
  };
};
