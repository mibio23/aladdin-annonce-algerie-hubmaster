import React from 'react';
import SmartSearchSuggestions from '@/components/search/SmartSearchSuggestions';
import VoiceSearchEnhanced from '@/components/search/VoiceSearchEnhanced';
import MapSearch from '@/components/search/MapSearch';
import ImageSearch from '@/components/search/ImageSearch';
import SearchInputField from './input/SearchInputField';
import LocationDisplay from './input/LocationDisplay';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface MainSearchInputProps {
  searchQuery: string;
  showSuggestions: boolean;
  selectedLocation?: string;
  customPlaceholder?: string;
  handleSearchQueryChange: (query: string) => void;
  handleSearchQueryFocus: () => void;
  handleSearchQueryBlur: () => void;
  handleSuggestionSelect: (suggestion: string) => void;
  handleVoiceResult: (transcript: string) => void;
  handleLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  handleImageSearch: (imageFile: File) => void;
}

const MainSearchInput: React.FC<MainSearchInputProps> = ({
  searchQuery,
  showSuggestions,
  selectedLocation,
  customPlaceholder,
  handleSearchQueryChange,
  handleSearchQueryFocus,
  handleSearchQueryBlur,
  handleSuggestionSelect,
  handleVoiceResult,
  handleLocationSelect,
  handleImageSearch,
}) => {
  const { t } = useSafeI18nWithRouter();

  return (
    <div className="relative max-w-xl mx-auto">
      <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1 text-center">
        {t('search.advanced.searchLabel')}
      </label>
      <div className="relative flex items-center gap-1.5">
        {/* Microphone pour la recherche vocale - déplacé à gauche */}
        <VoiceSearchEnhanced onVoiceResult={handleVoiceResult} />
        
        <SearchInputField
          value={searchQuery}
          placeholder={customPlaceholder || t('search.advanced.searchPlaceholder')}
          onChange={handleSearchQueryChange}
          onFocus={handleSearchQueryFocus}
          onBlur={handleSearchQueryBlur}
        />
        
        <SmartSearchSuggestions
          query={searchQuery}
          onSuggestionSelect={handleSuggestionSelect}
          isVisible={showSuggestions}
        />
        
        <LocationDisplay selectedLocation={selectedLocation} />
        
        <MapSearch onLocationSelect={handleLocationSelect} />
        <ImageSearch onImageSearch={handleImageSearch} />
      </div>
    </div>
  );
};

export default MainSearchInput;
