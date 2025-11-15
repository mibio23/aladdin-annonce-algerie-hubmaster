
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface MetierAnnouncement {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  price: number | null;
  contact_phone: string | null;
  contact_email: string | null;
  created_at: string;
  is_active: boolean;
}

export const useMetiersAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<MetierAnnouncement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('advertising_banners')
          .select('id, title, description, link_url, created_at, is_active')
          .eq('is_active', true)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const transformedData: MetierAnnouncement[] = (data || []).map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          location: item.link_url,
          price: null,
          contact_phone: null,
          contact_email: null,
          created_at: item.created_at,
          is_active: item.is_active
        }));

        setAnnouncements(transformedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching metiers announcements:', err);
        setError('Erreur lors du chargement des annonces');
        setAnnouncements([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return { 
    announcements, 
    isLoading, 
    error, 
    refetch: () => {
      setIsLoading(true);
      // Re-trigger the effect
    }
  };
};
