import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';
import { useSmartSearch } from '@/hooks/useSmartSearch';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface VoiceSearchEnhancedProps {
  onVoiceResult: (transcript: string) => void;
  onPhoneticSearch?: (phoneticQuery: string) => void;
  className?: string;
}

// Dictionnaire phonétique pour l'amélioration de la reconnaissance vocale
const phoneticDictionary = {
  // Corrections communes en français algérien
  'televesion': 'télévision',
  'oreloger': 'horloger',
  'machina': 'machine',
  'frigo': 'réfrigérateur',
  'ordi': 'ordinateur',
  'tel': 'téléphone',
  'voitur': 'voiture',
  'appart': 'appartement',
  'meubl': 'meuble',
  'vetment': 'vêtement',
  // Ajoutez d'autres corrections selon les besoins
};

const VoiceSearchEnhanced: React.FC<VoiceSearchEnhancedProps> = ({
  onVoiceResult,
  onPhoneticSearch,
  className
}) => {
  const { t, language } = useSafeI18nWithRouter();
  const { trackCorrection } = useSmartSearch();
  const [isListening, setIsListening] = useState(false);
  const [showUnsupportedMessage, setShowUnsupportedMessage] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Fonction pour corriger phonétiquement le texte
  const correctPhonetically = (text: string): string => {
    let correctedText = text.toLowerCase();
    
    // Appliquer les corrections du dictionnaire
    Object.entries(phoneticDictionary).forEach(([incorrect, correct]) => {
      const regex = new RegExp(`\\b${incorrect}\\b`, 'gi');
      if (regex.test(correctedText)) {
        correctedText = correctedText.replace(regex, correct);
        // Tracker la correction pour l'apprentissage
        trackCorrection(text, correctedText);
      }
    });

    return correctedText;
  };

  // Fonction pour normaliser la reconnaissance vocale en dialecte
  const normalizeDialect = (text: string): string => {
    // Corrections spécifiques au dialecte algérien/français
    const dialectCorrections = {
      'wesh rak': 'comment ça va',
      'chkoun': 'qui',
      'waqtash': 'quand',
      'win': 'où',
      'kifash': 'comment',
      'qadash': 'combien',
      // Ajoutez d'autres traductions selon les besoins
    };

    let normalizedText = text.toLowerCase();
    Object.entries(dialectCorrections).forEach(([dialect, french]) => {
      const regex = new RegExp(`\\b${dialect}\\b`, 'gi');
      normalizedText = normalizedText.replace(regex, french);
    });

    return normalizedText;
  };

  useEffect(() => {
    const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    
    if (isSupported) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        
        // Configuration multilingue
        const speechLang = language === 'ar' ? 'ar-DZ' : 
                          language === 'en' ? 'en-US' : 'fr-DZ';
        recognitionRef.current.lang = speechLang;

        recognitionRef.current.onresult = (event: any) => {
          let finalTranscript = '';
          let interimTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              finalTranscript += result[0].transcript;
            } else {
              interimTranscript += result[0].transcript;
            }
          }

          if (finalTranscript) {
            // Appliquer les corrections phonétiques et dialectales
            let correctedTranscript = normalizeDialect(finalTranscript);
            correctedTranscript = correctPhonetically(correctedTranscript);
            
            onVoiceResult(correctedTranscript);
            
            // Optionnel: recherche phonétique avancée
            if (onPhoneticSearch) {
              onPhoneticSearch(correctedTranscript);
            }
          } else if (interimTranscript) {
            // Appliquer les corrections phonétiques et dialectales même pour les résultats intermédiaires
            let correctedTranscript = normalizeDialect(interimTranscript);
            correctedTranscript = correctPhonetically(correctedTranscript);
            
            onVoiceResult(correctedTranscript);
          }
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Erreur de reconnaissance vocale:', event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language, onVoiceResult, onPhoneticSearch, trackCorrection]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const isSupported = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;

  const handleMicClick = () => {
    if (!isSupported) {
      setShowUnsupportedMessage(true);
      setTimeout(() => setShowUnsupportedMessage(false), 3000);
      return;
    }

    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <button
        type="button"
        onClick={handleMicClick}
        className={`p-2 rounded-md border transition-all duration-200 ${
          !isSupported 
            ? 'bg-gray-100 dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-400 dark:text-slate-500 cursor-not-allowed opacity-70' 
            : isListening 
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 animate-pulse' 
              : 'bg-gray-50 dark:bg-slate-700 border-gray-200 dark:border-slate-600 text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-600'
        }`}
        title={
          !isSupported 
            ? "La recherche vocale n'est pas supportée par votre navigateur" 
            : isListening 
              ? t('search.voice.stop') 
              : t('search.voice.start')
        }
      >
        {isListening ? (
          <MicOff className="h-4 w-4" />
        ) : (
          <Mic className="h-4 w-4" />
        )}
      </button>

      {/* Message d'information si le navigateur ne supporte pas la reconnaissance vocale */}
      {showUnsupportedMessage && (
        <div className="absolute top-full left-0 mt-1 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-50 max-w-xs">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span>La recherche vocale n'est pas supportée par votre navigateur. Essayez avec Chrome ou Edge.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceSearchEnhanced;