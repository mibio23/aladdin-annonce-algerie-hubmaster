
import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

// Déclaration des types pour l'API Web Speech
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

interface VoiceSearchProps {
  onVoiceResult: (text: string) => void;
  isListening?: boolean;
}

const VoiceSearch = ({ onVoiceResult, isListening: _isListening = false }: VoiceSearchProps) => {
  const { language } = useSafeI18nWithRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  // Mapping des langues vers les codes de reconnaissance vocale
  const getLanguageCode = (lang: string) => {
    switch (lang) {
      case 'fr':
        return 'fr-FR';
      case 'ar':
        return 'ar-DZ'; // Arabe algérien
      case 'en':
        return 'en-US';
      case 'de':
        return 'de-DE';
      case 'es':
        return 'es-ES';
      default:
        return 'fr-FR';
    }
  };

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const speechRecognition = new SpeechRecognition();
      speechRecognition.continuous = false;
      speechRecognition.interimResults = false;
      speechRecognition.lang = getLanguageCode(language); // Utiliser la langue active
      
      speechRecognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onVoiceResult(transcript);
        setIsRecording(false);
      };

      speechRecognition.onerror = () => {
        setIsRecording(false);
      };

      speechRecognition.onend = () => {
        setIsRecording(false);
      };

      setRecognition(speechRecognition);
    }
  }, [onVoiceResult, language]); // Ajouter language comme dépendance

  const toggleRecording = () => {
    if (!recognition) {
      alert('La reconnaissance vocale n\'est pas supportée par votre navigateur');
      return;
    }

    if (isRecording) {
      recognition.stop();
      setIsRecording(false);
    } else {
      // Mettre à jour la langue avant de commencer l'enregistrement
      recognition.lang = getLanguageCode(language);
      recognition.start();
      setIsRecording(true);
    }
  };

  return (
    <Button
      type="button"
      variant={isRecording ? "destructive" : "outline"}
      size="icon"
      onClick={toggleRecording}
      className={`transition-all duration-200 ${isRecording ? 'animate-pulse' : ''}`}
    >
      {isRecording ? (
        <MicOff className="h-4 w-4" />
      ) : (
        <Mic className="h-4 w-4" />
      )}
    </Button>
  );
};

export default VoiceSearch;
