import { useState, useCallback, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface SavedSearch {
  id: string;
  name: string;
  query: string;
  filters: Record<string, any>;
  created_at: string;
  updated_at: string;
  user_id: string;
  notification_enabled: boolean;
  last_checked: string;
}

export interface SearchHistory {
  id: string;
  query: string;
  filters: Record<string, any>;
  results_count: number;
  search_time: number;
  created_at: string;
  user_id?: string;
}

export const useSavedSearches = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch saved searches (mock implementation until DB types are regenerated)
  const fetchSavedSearches = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      // Mock saved searches for now
      setSavedSearches([]);
    } catch (error) {
      console.error('Error fetching saved searches:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch search history
  const fetchSearchHistory = useCallback(async () => {
    setLoading(true);
    try {
      if (user) {
        // Mock for authenticated users until DB types are regenerated
        setSearchHistory([]);
      } else {
        // For non-authenticated users, use session storage
        const history = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
        setSearchHistory(history);
      }
    } catch (error) {
      console.error('Error fetching search history:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Save a search (mock implementation)
  const saveSearch = useCallback(async (
    name: string, 
    query: string, 
    filters: Record<string, any>,
    enableNotifications = false
  ) => {
    if (!user) {
      toast({
        title: 'Connexion requise',
        description: 'Vous devez être connecté pour sauvegarder une recherche',
        variant: 'destructive',
      });
      return false;
    }

    try {
      // Mock implementation - store in localStorage for now
      const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
      const newSearch = {
        id: Date.now().toString(),
        name,
        query,
        filters,
        user_id: user.id,
        notification_enabled: enableNotifications,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        last_checked: new Date().toISOString()
      };
      savedSearches.push(newSearch);
      localStorage.setItem('savedSearches', JSON.stringify(savedSearches));

      toast({
        title: 'Recherche sauvegardée',
        description: `La recherche "${name}" a été sauvegardée avec succès`,
      });

      setSavedSearches(savedSearches);
      return true;
    } catch (error) {
      console.error('Error saving search:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de sauvegarder la recherche',
        variant: 'destructive',
      });
      return false;
    }
  }, [user, toast]);

  // Delete saved search (mock implementation)
  const deleteSavedSearch = useCallback(async (id: string) => {
    if (!user) return false;

    try {
      const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
      const filteredSearches = savedSearches.filter((search: any) => search.id !== id);
      localStorage.setItem('savedSearches', JSON.stringify(filteredSearches));

      toast({
        title: 'Recherche supprimée',
        description: 'La recherche sauvegardée a été supprimée',
      });

      setSavedSearches(filteredSearches);
      return true;
    } catch (error) {
      console.error('Error deleting saved search:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer la recherche',
        variant: 'destructive',
      });
      return false;
    }
  }, [user, toast]);

  // Add to search history
  const addToHistory = useCallback(async (
    query: string,
    filters: Record<string, any>,
    resultsCount: number,
    searchTime: number
  ) => {
    const historyItem = {
      query,
      filters,
      results_count: resultsCount,
      search_time: searchTime,
      created_at: new Date().toISOString(),
      user_id: user?.id
    };

    if (user) {
      try {
        // Mock implementation - store in localStorage for now  
        const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        history.unshift({ ...historyItem, id: Date.now().toString() });
        localStorage.setItem('searchHistory', JSON.stringify(history.slice(0, 50)));
        setSearchHistory(history.slice(0, 50));
      } catch (error) {
        console.error('Error saving search to history:', error);
      }
    } else {
      // For non-authenticated users, use session storage
      const history = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
      history.unshift({ ...historyItem, id: Date.now().toString() });
      sessionStorage.setItem('searchHistory', JSON.stringify(history.slice(0, 50)));
      setSearchHistory(history.slice(0, 50));
    }
  }, [user]);

  // Clear search history
  const clearHistory = useCallback(async () => {
    if (user) {
      try {
        localStorage.removeItem('searchHistory');
      } catch (error) {
        console.error('Error clearing search history:', error);
      }
    } else {
      sessionStorage.removeItem('searchHistory');
    }
    setSearchHistory([]);
    toast({
      title: 'Historique effacé',
      description: 'L\'historique de recherche a été effacé',
    });
  }, [user, toast]);

  // Initialize data on mount - load from localStorage/sessionStorage
  useEffect(() => {
    if (user) {
      const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
      setSavedSearches(savedSearches);
      const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
      setSearchHistory(history);
    } else {
      const history = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
      setSearchHistory(history);
    }
  }, [user]);

  return {
    savedSearches,
    searchHistory,
    loading,
    saveSearch,
    deleteSavedSearch,
    addToHistory,
    clearHistory,
    fetchSavedSearches,
    fetchSearchHistory
  };
};