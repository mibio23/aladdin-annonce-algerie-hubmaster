
import { useState, useCallback, useEffect } from 'react';
import { SmartSearchResponse, SearchOptions, UserPattern } from '@/types/search';
import { searchService } from '@/services/searchService';
import { searchTrackingService } from '@/services/searchTrackingService';
import { generateSessionId, manageSearchHistory } from '@/utils/searchUtils';

export const useSmartSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    setSearchHistory(manageSearchHistory.get());
  }, []);

  const search = useCallback(async (
    query: string, 
    options: SearchOptions = {}
  ): Promise<SmartSearchResponse | null> => {
    if (!query.trim()) return null;

    setIsLoading(true);
    
    try {
      const result = await searchService.performSearch(query, sessionId, options);
      
      if (result && options.trackingEnabled !== false) {
        const newHistory = manageSearchHistory.add(query.trim());
        setSearchHistory(newHistory);
      }

      return result;
    } finally {
      setIsLoading(false);
    }
  }, [sessionId]);

  const trackClick = useCallback(async (
    searchId: string,
    resultId: string,
    resultType: string,
    clickPosition: number,
    timeToClick?: number
  ) => {
    await searchTrackingService.trackClick(
      searchId, resultId, resultType, clickPosition, sessionId, timeToClick
    );
  }, [sessionId]);

  const trackConversion = useCallback(async () => {
    await searchTrackingService.trackConversion(sessionId);
  }, [sessionId]);

  const trackCorrection = useCallback(async (originalQuery: string, correctedQuery: string) => {
    await searchTrackingService.trackCorrection(originalQuery, correctedQuery, sessionId);
  }, [sessionId]);

  const trackUserPattern = useCallback(async (
    searchSequence: string[],
    categories: string[],
    timespan: number,
    conversionAchieved: boolean,
    patternType: 'exploration' | 'targeted' | 'comparison'
  ) => {
    const userPattern: UserPattern = {
      searchSequence,
      categories,
      timespan,
      conversionAchieved,
      patternType
    };
    
    await searchTrackingService.trackUserPattern(sessionId, userPattern);
  }, [sessionId]);

  const addToHistory = useCallback((query: string) => {
    const newHistory = manageSearchHistory.add(query);
    setSearchHistory(newHistory);
  }, []);

  const clearHistory = useCallback(() => {
    manageSearchHistory.clear();
    setSearchHistory([]);
  }, []);

  return {
    search,
    isLoading,
    sessionId,
    searchHistory,
    addToHistory,
    clearHistory,
    trackClick,
    trackConversion,
    trackCorrection,
    trackUserPattern,
    getPersonalizedSuggestions: searchService.getPersonalizedSuggestions,
    getTrendingKeywords: searchService.getTrendingKeywords
  };
};
