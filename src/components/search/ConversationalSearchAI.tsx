import React, { useState, useRef, useEffect } from 'react';
import { Send, X, User, Lightbulb, Brain, Target, Sparkles, TrendingUp, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { cn } from '@/lib/utils';
import VoiceSearchEnhanced from './VoiceSearchEnhanced';
import { useIntelligentAssistant } from '@/hooks/useIntelligentAssistant';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  confidence?: number;
  anticipatedNeeds?: string[];
  userIntent?: string;
  isAI?: boolean;
}

interface ConversationalSearchProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSearchQuery?: (query: string, filters?: any) => void;
  categoryContext?: string;
  className?: string;
}

const ConversationalSearchAI: React.FC<ConversationalSearchProps> = ({
  isOpen: externalIsOpen,
  onClose,
  onSearchQuery,
  categoryContext,
  className
}) => {
  const [isOpen, setIsOpen] = useState(externalIsOpen || false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t, language } = useSafeI18nWithRouter();
  
  const {
    sendMessage,
    isLoading,
    sessionId,
    proactiveSuggestions,
    loadProactiveSuggestions,
    sendFeedback
  } = useIntelligentAssistant();

  // Défilement automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Synchroniser l'état externe
  useEffect(() => {
    if (externalIsOpen !== undefined) {
      setIsOpen(externalIsOpen);
    }
  }, [externalIsOpen]);

  // Message de bienvenue avec IA
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `🧠 ${t('intelligentAssistant.title')} ! ${t('intelligentAssistant.subtitle')}.\n\n${categoryContext ? `Catégorie: ${categoryContext}\n\n` : ''}Comment puis-je vous aider aujourd'hui ?`,
        timestamp: new Date(),
        suggestions: [
          t('suggestions.getAdvice') || 'Obtenir des conseils',
          t('suggestions.comparePrices') || 'Comparer les prix',
          t('suggestions.checkReviews') || 'Consulter les avis',
          t('suggestions.exploreMore') || 'Explorer plus'
        ],
        confidence: 1.0,
        userIntent: 'welcome',
        isAI: true
      };
      setMessages([welcomeMessage]);
      loadProactiveSuggestions();
    }
  }, [isOpen, categoryContext, loadProactiveSuggestions, t]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    try {
      const aiResponse = await sendMessage(currentInput, {
        language: language || 'fr',
        categoryContext
      });

      if (aiResponse) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: aiResponse.response,
          timestamp: new Date(),
          suggestions: aiResponse.suggestions,
          confidence: aiResponse.confidence,
          anticipatedNeeds: aiResponse.anticipatedNeeds,
          userIntent: aiResponse.userIntent,
          isAI: true
        };

        setMessages(prev => [...prev, botMessage]);

        // Déclencher une recherche si l'IA le recommande
        if (onSearchQuery && aiResponse.userIntent === 'search') {
          onSearchQuery(currentInput, {});
        }
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast({
        title: t('intelligentAssistant.error') || "Erreur",
        description: "Impossible de traiter votre message. Réessayez.",
        variant: "destructive",
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleVoiceResult = (transcript: string) => {
    setInputValue(transcript);
  };

  const handleFeedback = async (messageId: string, rating: number) => {
    try {
      await sendFeedback(messageId, rating);
      toast({
        title: t('intelligentAssistant.thanksFeedback') || "Merci !",
        description: "Votre feedback aide l'IA à s'améliorer.",
      });
    } catch (error) {
      console.error('Erreur feedback:', error);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50",
          "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600",
          "text-white opacity-95 hover:opacity-100 transition-all duration-300",
          className
        )}
      >
        <Brain className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={cn(
      "fixed bottom-6 right-6 w-96 h-[32rem] z-50 shadow-2xl",
      "flex flex-col bg-background border border-border",
      className
    )}>
      {/* Header avec indicateur IA */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">{t('intelligentAssistant.title') || 'Assistant IA'}</h3>
            <p className="text-xs text-muted-foreground">{t('intelligentAssistant.subtitle') || 'Intelligent • Apprend • Anticipe'}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setIsOpen(false);
            onClose?.();
          }}
          className="w-6 h-6 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Suggestions proactives */}
      {proactiveSuggestions.length > 0 && (
        <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              {t('intelligentAssistant.personalizedSuggestions') || 'Suggestions personnalisées'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {proactiveSuggestions.map((suggestion, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-pointer hover:bg-blue-100 text-xs transition-colors"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={cn(
            "flex gap-2",
            message.type === 'user' ? "justify-end" : "justify-start"
          )}>
            {message.type === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={cn(
              "max-w-[80%] rounded-lg p-3 text-sm",
              message.type === 'user' 
                ? "bg-gradient-to-r from-red-50 to-white text-black ml-8 shadow-sm border border-red-100" 
                : "bg-card text-card-foreground border border-border shadow-sm"
            )}>
              <div className="whitespace-pre-wrap">{message.content}</div>
              
              {/* Indicateurs IA */}
              {message.type === 'bot' && message.isAI && (
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{message.timestamp.toLocaleTimeString()}</span>
                  {message.confidence && (
                    <Badge variant="secondary" className="text-xs">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {Math.round(message.confidence * 100)}%
                    </Badge>
                  )}
                  {message.userIntent && (
                    <Badge variant="outline" className="text-xs">
                      <Target className="w-3 h-3 mr-1" />
                      {message.userIntent}
                    </Badge>
                  )}
                </div>
              )}
              
              {message.type === 'user' && (
                <span className="text-xs text-muted-foreground block mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              )}
              
              {/* Suggestions */}
              {message.suggestions && message.suggestions.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-medium mb-2 text-muted-foreground flex items-center gap-1">
                    <Lightbulb className="w-3 h-3" />
                    {t('intelligentAssistant.suggestions') || 'Suggestions:'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {message.suggestions.map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Besoins anticipés */}
              {message.anticipatedNeeds && message.anticipatedNeeds.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-medium mb-2 text-muted-foreground flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    {t('intelligentAssistant.anticipatedNeeds') || 'Je pense que vous pourriez aussi avoir besoin de:'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {message.anticipatedNeeds.map((need, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs cursor-pointer hover:bg-secondary/80 transition-colors"
                        onClick={() => handleSuggestionClick(need)}
                      >
                        {need}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Feedback buttons pour les réponses IA */}
              {message.type === 'bot' && message.isAI && (
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {t('intelligentAssistant.feedback.helpful') || 'Cette réponse vous aide ?'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-green-100"
                    onClick={() => handleFeedback(message.id, 5)}
                  >
                    <ThumbsUp className="w-3 h-3 text-green-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 hover:bg-red-100"
                    onClick={() => handleFeedback(message.id, 1)}
                  >
                    <ThumbsDown className="w-3 h-3 text-red-600" />
                  </Button>
                </div>
              )}
            </div>
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
            )}
          </div>
        ))}
        
        {/* Indicateur de chargement IA */}
        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="bg-card text-card-foreground rounded-lg p-3 border border-border shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
                <span className="text-xs text-blue-600">
                  {t('intelligentAssistant.analyzing') || 'L\'IA analyse et apprend...'}
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input avec design amélioré */}
      <div className="border-t border-border p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('intelligentAssistant.placeholder') || "Posez votre question à l'IA..."}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="pr-10 border-blue-200 focus:border-blue-400"
            />
            <VoiceSearchEnhanced
              onVoiceResult={handleVoiceResult}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <Brain className="w-3 h-3" />
          {t('intelligentAssistant.title') || 'Assistant IA'} intelligent • {t('intelligentAssistant.session') || 'Session'}: {sessionId.slice(-6)}
        </p>
      </div>
    </Card>
  );
};

export default ConversationalSearchAI;