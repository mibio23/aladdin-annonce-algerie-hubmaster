import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

// Simple cache for announcements to avoid unnecessary refetches
const announcementsCache = new Map<string, { data: any[], timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key: string) => {
  const cached = announcementsCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

export interface Announcement {
  id: string;
  title: string;
  description: string;
  price: number;
  category_id: string;
  condition: string;
  images: string[];
  location: string;
  wilaya: string;
  contact_phone: string;
  contact_email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  is_featured: boolean;
  is_urgent: boolean;
  views_count: number;
  currency: string;
  expires_at: string | null;
  delivery_options: string[];
          profiles?: {
            full_name: string;
            id: string;
            avatar_url?: string;
          };
  categories?: {
    name: string;
    slug: string;
  };
}

export interface CreateAnnouncementData {
  title: string;
  description: string;
  price: number;
  category_id: string;
  condition: string;
  images: File[];
  location: string;
  wilaya: string;
  phone?: string;
  email?: string;
  is_urgent?: boolean;
  currency?: string;
}

export const useAnnouncements = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [userAnnouncements, setUserAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);

  // Transform announcement data from database to interface format
  // SECURITY: Uses phone_number from database which is masked for non-authenticated users via RLS
  const transformAnnouncementData = (dbAnnouncement: any): Announcement => ({
    id: dbAnnouncement.id,
    title: dbAnnouncement.title || '',
    description: dbAnnouncement.description || '',
    price: dbAnnouncement.price || 0,
    category_id: dbAnnouncement.category_id || '',
    condition: dbAnnouncement.condition || 'new',
    images: dbAnnouncement.image_urls || (dbAnnouncement.image_url ? [dbAnnouncement.image_url] : []),
    location: dbAnnouncement.location || '',
    wilaya: dbAnnouncement.location || '', // Use location as wilaya fallback
    // SECURITY: phone_number is automatically masked as '**********' for unauthenticated users
    // via the announcements_safe view or get_public_announcements function
    contact_phone: dbAnnouncement.phone_number || dbAnnouncement.phone_number_masked || '',
    contact_email: dbAnnouncement.contact_email || '',
    user_id: dbAnnouncement.user_id || '',
    created_at: dbAnnouncement.created_at,
    updated_at: dbAnnouncement.updated_at,
    is_active: dbAnnouncement.status === 'active',
    is_featured: dbAnnouncement.type === 'featured' || dbAnnouncement.type === 'premium',
    is_urgent: dbAnnouncement.is_urgent || false,
    views_count: dbAnnouncement.view_count || 0,
    currency: 'DZD',
    expires_at: dbAnnouncement.expires_at,
    delivery_options: [],
    categories: dbAnnouncement.categories || {
      name: 'Non classé',
      slug: 'non-classe'
    }
  });

  // Transform banner data to announcement format
  const transformBannerToAnnouncement = (banner: any): Announcement => ({
    id: banner.id,
    title: banner.title || 'Titre manquant',
    description: banner.description || '',
    price: 0,
    category_id: '',
    condition: 'new',
    images: banner.image_url ? [banner.image_url] : [],
    location: '',
    wilaya: '',
    contact_phone: '',
    contact_email: '',
    user_id: banner.created_by || '',
    created_at: banner.created_at,
    updated_at: banner.updated_at,
    is_active: banner.is_active,
    is_featured: false,
    is_urgent: false,
    views_count: 0,
    currency: 'DZD',
    expires_at: banner.end_at,
    delivery_options: [],
        profiles: {
          full_name: 'Utilisateur',
          id: banner.created_by || '',
          avatar_url: undefined
        },
    categories: {
      name: 'Bannière publicitaire',
      slug: 'banniere'
    }
  });

  // Fetch all active announcements using smart search engine with caching
  const fetchAnnouncements = useCallback(async (filters?: {
    search?: string;
    category?: string;
    condition?: string;
    minPrice?: number;
    maxPrice?: number;
    location?: string;
    limit?: number;
  }) => {
    // Create cache key from filters
    const cacheKey = `search_${JSON.stringify(filters || {})}`;
    const cached = getCachedData(cacheKey);
    
    if (cached) {
      setAnnouncements(cached);
      return cached;
    }

    setLoading(true);
    try {
      // Use smart search engine with reduced default limit for performance
      const { data, error } = await supabase.functions.invoke('smart-search-engine', {
        body: {
          query: filters?.search || '',
          filters: {
            category: filters?.category,
            condition: filters?.condition,
            priceMin: filters?.minPrice,
            priceMax: filters?.maxPrice,
            location: filters?.location,
          },
          limit: filters?.limit || 12, // Reduced from 20 to 12 for better performance
          offset: 0
        }
      });

      if (error) {
        console.error('Error fetching announcements:', error);
        throw error;
      }

      const announcementsData = (data?.data || []).map(transformAnnouncementData);
      
      // Cache the results
      announcementsCache.set(cacheKey, { data: announcementsData, timestamp: Date.now() });
      
      setAnnouncements(announcementsData);
      return announcementsData;
    } catch (error) {
      console.error('Error fetching announcements:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les annonces',
        variant: 'destructive',
      });
      return [];
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Fetch user's banners as announcements
  const fetchMyAnnouncements = useCallback(async () => {
    if (!user) return [];
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('advertising_banners')
        .select('*')
        .eq('created_by', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user banners:', error);
        throw error;
      }

      const transformedData = data?.map(transformBannerToAnnouncement) || [];
      setUserAnnouncements(transformedData);
      return transformedData;
    } catch (error) {
      console.error('Error fetching my announcements:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de charger vos annonces',
        variant: 'destructive',
      });
      return [];
    } finally {
      setLoading(false);
    }
  }, [user, toast]);

  // Get single announcement by ID - now checks announcements table first with phone protection
  const getAnnouncementById = useCallback(async (id: string): Promise<Announcement | null> => {
    try {
      // Use the secure function to get announcement with protected contact info
      const { data: protectedData, error: protectedError } = await supabase
        .rpc('get_announcement_with_protected_contact', { announcement_id: id });

      if (!protectedError && protectedData && protectedData.length > 0) {
        const announcement = protectedData[0];
        return {
          id: announcement.id,
          title: announcement.title || '',
          description: announcement.description || '',
          price: announcement.price || 0,
          category_id: announcement.category_id || '',
          condition: announcement.condition || 'new',
          images: announcement.image_urls || (announcement.image_url ? [announcement.image_url] : []),
          location: announcement.location || '',
          wilaya: announcement.location || '',
          contact_phone: announcement.phone_number_masked || '',
          contact_email: '',
          user_id: announcement.user_id || '',
          created_at: announcement.created_at,
          updated_at: announcement.updated_at,
          is_active: announcement.status === 'active',
          is_featured: announcement.type === 'featured' || announcement.type === 'premium',
          is_urgent: announcement.is_urgent || false,
          views_count: announcement.view_count || 0,
          currency: 'DZD',
          expires_at: announcement.expires_at,
          delivery_options: [],
          categories: {
            name: 'Non classé',
            slug: 'non-classe'
          }
        };
      }

      // Fallback to advertising_banners table
      const { data, error } = await supabase
        .from('advertising_banners')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching announcement:', error);
        throw error;
      }

      return transformBannerToAnnouncement(data);
    } catch (error) {
      console.error('Error fetching announcement:', error);
      return null;
    }
  }, []);

  // Create new announcement (creates a banner)
  const createAnnouncement = useCallback(async (announcementData: CreateAnnouncementData): Promise<Announcement | null> => {
    if (!user) {
      toast({
        title: 'Connexion requise',
        description: 'Vous devez être connecté pour créer une annonce',
        variant: 'destructive',
      });
      return null;
    }

    setCreating(true);
    try {
      const bannerData = {
        title: announcementData.title,
        description: announcementData.description,
        created_by: user.id,
        is_active: true,
      };

      const { data, error } = await supabase
        .from('advertising_banners')
        .insert(bannerData)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Votre annonce a été créée avec succès',
      });

      return transformBannerToAnnouncement(data);
    } catch (error) {
      console.error('Error creating announcement:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de créer l\'annonce',
        variant: 'destructive',
      });
      return null;
    } finally {
      setCreating(false);
    }
  }, [user, toast]);

  // Update announcement
  const updateAnnouncement = useCallback(async (announcement: Announcement): Promise<boolean> => {
    if (!user) return false;

    setUpdating(true);
    try {
      const { error } = await supabase
        .from('advertising_banners')
        .update({
          title: announcement.title,
          description: announcement.description,
          updated_at: new Date().toISOString()
        })
        .eq('id', announcement.id)
        .eq('created_by', user.id);

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Annonce mise à jour avec succès',
      });

      return true;
    } catch (error) {
      console.error('Error updating announcement:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de mettre à jour l\'annonce',
        variant: 'destructive',
      });
      return false;
    } finally {
      setUpdating(false);
    }
  }, [user, toast]);

  // Delete announcement
  const deleteAnnouncement = useCallback(async (id: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('advertising_banners')
        .delete()
        .eq('id', id)
        .eq('created_by', user.id);

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Annonce supprimée avec succès',
      });

      return true;
    } catch (error) {
      console.error('Error deleting announcement:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer l\'annonce',
        variant: 'destructive',
      });
      return false;
    }
  }, [user, toast]);

  // Mark as sold (deactivate)
  const markAsSold = useCallback(async (id: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('advertising_banners')
        .update({ is_active: false })
        .eq('id', id)
        .eq('created_by', user.id);

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Annonce marquée comme vendue',
      });

      return true;
    } catch (error) {
      console.error('Error marking as sold:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de marquer comme vendu',
        variant: 'destructive',
      });
      return false;
    }
  }, [user, toast]);

  // Increment views (placeholder - no views counter in banners table)
  const incrementViews = useCallback(async (id: string) => {
    // No-op since advertising_banners doesn't have views_count
    console.log('View incremented for banner:', id);
  }, []);

  return {
    announcements,
    userAnnouncements,
    loading,
    creating,
    updating,
    fetchAnnouncements,
    fetchMyAnnouncements,
    getAnnouncementById,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    markAsSold,
    incrementViews,
  };
};