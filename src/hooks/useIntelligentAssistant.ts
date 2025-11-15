import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface IntelligentAssistantResponse {
  response: string;
  suggestions: string[];
  proactiveSuggestions: string[];
  anticipatedNeeds: string[];
  confidence: number;
  userIntent: string;
}

interface ConversationContext {
  sessionId: string;
  language: string;
  categoryContext?: string;
  searchHistory: string[];
  userProfile?: any;
}

export const useIntelligentAssistant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [conversationHistory, setConversationHistory] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
    metadata?: any;
  }>>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [proactiveSuggestions, setProactiveSuggestions] = useState<string[]>([]);

  // Charger l'historique depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`conversation_history_${sessionId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConversationHistory(parsed);
      } catch (error) {
        console.warn('Erreur lors du chargement de l\'historique:', error);
      }
    }
  }, [sessionId]);

  // Sauvegarder l'historique dans localStorage
  const saveHistory = useCallback((history: any[]) => {
    try {
      localStorage.setItem(`conversation_history_${sessionId}`, JSON.stringify(history.slice(-20))); // Garder seulement les 20 derniers
    } catch (error) {
      console.warn('Erreur lors de la sauvegarde:', error);
    }
  }, [sessionId]);

  // Fonction principale pour envoyer un message à l'IA
  const sendMessage = useCallback(async (
    message: string,
    context: Partial<ConversationContext> = {}
  ): Promise<IntelligentAssistantResponse | null> => {
    if (!message.trim()) return null;

    setIsLoading(true);
    
    try {
      // Ajouter le message utilisateur à l'historique
      const userMessage = {
        role: 'user' as const,
        content: message.trim(),
        timestamp: new Date()
      };
      
      const updatedHistory = [...conversationHistory, userMessage];
      setConversationHistory(updatedHistory);
      saveHistory(updatedHistory);

      // Ajouter à l'historique de recherche
      setSearchHistory(prev => {
        const newHistory = [message.trim(), ...prev.filter(item => item !== message.trim())].slice(0, 10);
        localStorage.setItem('search_history', JSON.stringify(newHistory));
        return newHistory;
      });

      // Appeler l'assistant intelligent gratuit
      const { data, error } = await supabase.functions.invoke('free-intelligent-assistant', {
        body: {
          message: message.trim(),
          sessionId,
          language: context.language || 'fr',
          categoryContext: context.categoryContext,
          searchHistory: searchHistory.slice(0, 5),
          userProfile: context.userProfile
        }
      });

      if (error) {
        console.error('Erreur assistant IA:', error);
        
        // Fallback vers une réponse basique intelligente
        const fallbackResponse = generateFallbackResponse(message, context);
        
        // Ajouter la réponse à l'historique
        const assistantMessage = {
          role: 'assistant' as const,
          content: fallbackResponse.response,
          timestamp: new Date(),
          metadata: { fallback: true, confidence: fallbackResponse.confidence }
        };
        
        const finalHistory = [...updatedHistory, assistantMessage];
        setConversationHistory(finalHistory);
        saveHistory(finalHistory);
        
        return fallbackResponse;
      }

      // Mettre à jour les suggestions proactives
      if (data.proactiveSuggestions) {
        setProactiveSuggestions(data.proactiveSuggestions);
      }

      // Ajouter la réponse IA à l'historique
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.response,
        timestamp: new Date(),
        metadata: { 
          confidence: data.confidence,
          userIntent: data.userIntent,
          suggestions: data.suggestions
        }
      };
      
      const finalHistory = [...updatedHistory, assistantMessage];
      setConversationHistory(finalHistory);
      saveHistory(finalHistory);

      return {
        response: data.response,
        suggestions: data.suggestions || [],
        proactiveSuggestions: data.proactiveSuggestions || [],
        anticipatedNeeds: data.anticipatedNeeds || [],
        confidence: data.confidence || 0.8,
        userIntent: data.userIntent || 'general'
      };

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      
      // Réponse d'erreur avec récupération gracieuse
      const errorResponse = {
        response: 'Je rencontre une difficulté technique temporaire. Pouvez-vous reformuler votre question ?',
        suggestions: ['Reformuler la question', 'Essayer plus tard', 'Contacter le support'],
        proactiveSuggestions: [],
        anticipatedNeeds: [],
        confidence: 0.2,
        userIntent: 'error'
      };

      // Ajouter à l'historique même en cas d'erreur
      const errorMessage = {
        role: 'assistant' as const,
        content: errorResponse.response,
        timestamp: new Date(),
        metadata: { error: true }
      };
      
      const errorHistory = [...conversationHistory, errorMessage];
      setConversationHistory(errorHistory);
      saveHistory(errorHistory);

      return errorResponse;
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, conversationHistory, searchHistory, saveHistory]);

  // Générer une réponse de fallback intelligente
  const generateFallbackResponse = useCallback((message: string, _context: Partial<ConversationContext> = {}): IntelligentAssistantResponse => {
    const lowerMessage = message.toLowerCase();
    
    // Analyse basique des intentions
    if (lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('combien')) {
      return {
        response: `Je comprends que vous vous renseignez sur les prix. Bien que je rencontre un problème technique, je peux vous suggérer de :\n\n• Utiliser les filtres de prix\n• Comparer plusieurs offres\n• Vérifier les promotions en cours\n\nQuel est votre budget approximatif ?`,
        suggestions: ['Moins de 5000 DA', 'Entre 5000-15000 DA', 'Plus de 15000 DA'],
        proactiveSuggestions: ['Voir les promotions', 'Comparer les prix'],
        anticipatedNeeds: ['Négocier le prix', 'Vérifier la garantie'],
        confidence: 0.6,
        userIntent: 'price_inquiry'
      };
    }
    
    if (lowerMessage.includes('recommand') || lowerMessage.includes('conseil') || lowerMessage.includes('suggère')) {
      return {
        response: `Je serais ravi de vous conseiller ! Même avec ce petit problème technique, je peux vous orienter :\n\n• Précisez vos besoins spécifiques\n• Indiquez votre budget\n• Mentionnez vos préférences\n\nPour quoi avez-vous besoin de conseils ?`,
        suggestions: ['Choix de produit', 'Comparaison d\'options', 'Meilleur rapport qualité-prix'],
        proactiveSuggestions: ['Voir les avis clients', 'Comparer les marques'],
        anticipatedNeeds: ['Lire les reviews', 'Vérifier la disponibilité'],
        confidence: 0.7,
        userIntent: 'recommendation_request'
      };
    }
    
    // Réponse générique mais utile
    const keywords = extractKeywords(message);
    return {
      response: `Je remarque que vous vous intéressez à : ${keywords.join(', ')}.\n\nMalgré un problème technique temporaire, je peux vous aider à :\n\n• Affiner votre recherche\n• Explorer les catégories pertinentes\n• Trouver des alternatives\n\nQue voulez-vous faire ensuite ?`,
      suggestions: ['Affiner la recherche', 'Explorer les catégories', 'Voir les tendances'],
      proactiveSuggestions: keywords.length > 0 ? [`Rechercher ${keywords[0]}`, `Explorer ${keywords[1] || 'cette catégorie'}`] : [],
      anticipatedNeeds: ['Comparer les options', 'Vérifier les avis'],
      confidence: 0.5,
      userIntent: 'general_search'
    };
  }, []);

  // Extraire les mots-clés du message
  const extractKeywords = useCallback((text: string): string[] => {
    const stopWords = ['le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'mais', 'pour', 'avec', 'dans', 'que', 'qui', 'où', 'je', 'tu', 'il', 'nous', 'vous', 'ils'];
    return text.toLowerCase()
      .split(/[\s\p{P}]+/u)
      .filter(word => word.length > 2 && !stopWords.includes(word))
      .slice(0, 5);
  }, []);

  // Charger les suggestions proactives
  const loadProactiveSuggestions = useCallback(async () => {
    try {
      const { data } = await supabase.functions.invoke('free-intelligent-assistant', {
        body: {
          message: 'LOAD_SUGGESTIONS',
          sessionId,
          language: 'fr'
        }
      });
      
      if (data?.proactiveSuggestions) {
        setProactiveSuggestions(data.proactiveSuggestions);
      }
    } catch (error) {
      console.error('Erreur chargement suggestions proactives:', error);
    }
  }, [sessionId]);

  // Envoyer un feedback sur une réponse
  const sendFeedback = useCallback(async (messageId: string, rating: number, comment?: string) => {
    try {
      await supabase
        .from('ai_learning_data')
        .update({ 
          feedback_score: rating,
          improvement_applied: false 
        })
        .eq('id', messageId);
      
      console.log('Feedback envoyé:', { messageId, rating, comment });
    } catch (error) {
      console.error('Erreur envoi feedback:', error);
    }
  }, []);

  // Nettoyer l'historique
  const clearHistory = useCallback(() => {
    setConversationHistory([]);
    setSearchHistory([]);
    localStorage.removeItem(`conversation_history_${sessionId}`);
    localStorage.removeItem('search_history');
  }, [sessionId]);

  return {
    sendMessage,
    isLoading,
    sessionId,
    conversationHistory,
    searchHistory,
    proactiveSuggestions,
    loadProactiveSuggestions,
    sendFeedback,
    clearHistory
  };
};

// Générer un ID de session unique
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}