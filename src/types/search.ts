
export interface SearchResult {
  type: 'announcement' | 'category' | 'suggestion' | 'keyword';
  id: string;
  title: string;
  description?: string;
  score: number;
  relevance: string;
  data: any;
}

export interface SmartSearchResponse {
  results: SearchResult[];
  totalCount: number;
  searchId?: string;
  suggestions: string[];
  trending: string[];
}

export interface SearchOptions {
  context?: string;
  limit?: number;
  trackingEnabled?: boolean;
  filters?: any;
}

export interface UserPattern {
  searchSequence: string[];
  categories: string[];
  timespan: number;
  conversionAchieved: boolean;
  patternType: 'exploration' | 'targeted' | 'comparison';
}
