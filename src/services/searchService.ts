
import { supabase } from '@/integrations/supabase/client';
import { SmartSearchResponse, SearchOptions } from '@/types/search';

export const searchService = {
  async performSearch(
    query: string, 
    sessionId: string,
    options: SearchOptions = {}
  ): Promise<SmartSearchResponse | null> {
    if (!query.trim()) return null;

    try {
      const { data, error } = await supabase.functions.invoke('smart-search-engine', {
        body: {
          query: query.trim(),
          context: options.context || 'general',
          limit: options.limit || 10,
          sessionId
        }
      });

      if (error) {
        console.error('Erreur de recherche:', error);
        return null;
      }

      return data as SmartSearchResponse;
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      return null;
    }
  },

  async getPersonalizedSuggestions(query: string): Promise<string[]> {
    try {
      const { data } = await supabase
        .from('search_suggestions')
        .select('suggested_query, confidence_score')
        .ilike('original_query', `${query.toLowerCase()}%`)
        .eq('is_active', true)
        .order('confidence_score', { ascending: false })
        .limit(5);

      return data?.map(s => s.suggested_query) || [];
    } catch (error) {
      console.warn('Erreur lors de la récupération des suggestions:', error);
      return [];
    }
  },

  async getTrendingKeywords(): Promise<string[]> {
    try {
      const { data } = await supabase
        .from('popular_keywords')
        .select('keyword')
        .order('trending_score', { ascending: false })
        .limit(10);

      return data?.map(k => k.keyword) || [];
    } catch (error) {
      console.warn('Erreur lors de la récupération des tendances:', error);
      return [];
    }
  }
};
