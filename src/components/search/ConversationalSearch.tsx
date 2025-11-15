import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import VoiceSearchEnhanced from './VoiceSearchEnhanced';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
  confidence?: number;
  anticipatedNeeds?: string[];
  userIntent?: string;
}

interface ConversationalSearchProps {
  className?: string;
  onSearchQuery?: (query: string) => void;
  categoryContext?: string;
}

const ConversationalSearch: React.FC<ConversationalSearchProps> = ({
  className,
  onSearchQuery,
  categoryContext
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [_sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  const [_proactiveSuggestions, _setProactiveSuggestions] = useState<string[]>([]);
  const [_searchHistory, _setSearchHistory] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Défilement automatique vers le bas
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Message de bienvenue
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `Bonjour ! Je suis votre assistant de recherche intelligent. Je peux vous aider à trouver exactement ce que vous cherchez${categoryContext ? ` dans la catégorie ${categoryContext}` : ''}. Comment puis-je vous aider ?`,
        timestamp: new Date(),
        suggestions: [
          'Je cherche quelque chose pour ranger mes vêtements',
          'J\'ai besoin d\'un téléphone pas cher',
          'Que me conseillez-vous pour un débutant ?',
          'Montrez-moi les tendances actuelles'
        ]
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, categoryContext]);

  // Simulation d'IA conversationnelle intelligente
  const processMessage = async (userMessage: string): Promise<Message> => {
    // Analyse du message utilisateur
    const lowerMessage = userMessage.toLowerCase();
    
    let response = '';
    let suggestions: string[] = [];

    // Logique de compréhension contextuelle
    if (lowerMessage.includes('pas cher') || lowerMessage.includes('économique') || lowerMessage.includes('budget')) {
      response = `Je comprends que vous cherchez quelque chose d'abordable. Voici ce que je peux vous proposer :\n\n• Filtrer par prix maximum\n• Rechercher dans les occasions\n• Comparer les offres actuelles\n\nQuel est votre budget approximatif ?`;
      suggestions = ['Moins de 5000 DA', 'Entre 5000 et 15000 DA', 'Entre 15000 et 50000 DA'];
    } else if (lowerMessage.includes('conseil') || lowerMessage.includes('recommand') || lowerMessage.includes('aide')) {
      response = `Je serais ravi de vous conseiller ! Pour vous donner les meilleures recommandations, j'aimerais en savoir plus :\n\n• Quel est votre niveau d'expérience ?\n• Avez-vous des préférences spécifiques ?\n• Dans quelle gamme de prix souhaitez-vous rester ?`;
      suggestions = ['Je suis débutant', 'J\'ai de l\'expérience', 'Je veux du haut de gamme', 'Je privilégie le rapport qualité-prix'];
    } else if (lowerMessage.includes('ranger') || lowerMessage.includes('organis') || lowerMessage.includes('stockage')) {
      response = `Pour l'organisation et le rangement, plusieurs options s'offrent à vous :\n\n• **Armoires et placards** - Pour les vêtements\n• **Étagères modulables** - Flexibles et pratiques\n• **Boîtes de rangement** - Pour les petits objets\n• **Meubles multifonctions** - Optimisent l'espace\n\nQue souhaitez-vous ranger exactement ?`;
      suggestions = ['Vêtements', 'Livres et documents', 'Jouets et objets divers', 'Chaussures'];
      if (onSearchQuery) onSearchQuery('rangement organisation');
    } else if (lowerMessage.includes('téléphone') || lowerMessage.includes('smartphone') || lowerMessage.includes('mobile')) {
      response = `Parfait ! Pour vous aider à choisir le bon téléphone, voici les critères importants :\n\n• **Usage principal** - Appels, photos, jeux, travail ?\n• **Système** - Android ou iOS ?\n• **Stockage** - Combien de photos/apps ?\n• **Autonomie** - Usage intensif ou modéré ?\n\nQuel est votre usage principal ?`;
      suggestions = ['Usage basique (appels, SMS)', 'Photos et réseaux sociaux', 'Jeux et multimédia', 'Travail et productivité'];
      if (onSearchQuery) onSearchQuery('smartphone téléphone');
    } else if (lowerMessage.includes('tendance') || lowerMessage.includes('populaire') || lowerMessage.includes('mode')) {
      response = `Voici les tendances actuelles les plus populaires :\n\n• **Technologie** - Smartphones 5G, objets connectés\n• **Maison** - Décoration minimaliste, plantes d'intérieur\n• **Mode** - Styles vintage, pièces éco-responsables\n• **Lifestyle** - Produits bien-être, sport à domicile\n\nQuel domaine vous intéresse le plus ?`;
      suggestions = ['Technologie et gadgets', 'Décoration et maison', 'Mode et accessoires', 'Sport et bien-être'];
    } else if (lowerMessage.includes('débutant') || lowerMessage.includes('novice') || lowerMessage.includes('première fois')) {
      response = `Parfait ! Pour les débutants, je recommande toujours :\n\n• **Commencer simple** - Produits faciles à utiliser\n• **Bon rapport qualité-prix** - Investissement raisonnable\n• **Support et garantie** - Service après-vente\n• **Évolutivité** - Possibilité d'upgrade plus tard\n\nDans quel domaine débutez-vous ?`;
      suggestions = ['Informatique et tech', 'Bricolage et outils', 'Cuisine et électroménager', 'Sport et fitness'];
    } else {
      // Réponse générique avec analyse de mots-clés
      const keywords = extractKeywords(userMessage);
      response = `Je vois que vous vous intéressez à : ${keywords.join(', ')}.\n\nLaissez-moi vous aider à affiner votre recherche. Voulez-vous :\n\n• Voir toutes les options disponibles\n• Filtrer par critères spécifiques\n• Obtenir des recommandations personnalisées\n• Comparer différents produits`;
      suggestions = ['Voir toutes les options', 'Filtrer par prix', 'Recommandations perso', 'Aide pour comparer'];
      if (onSearchQuery && keywords.length > 0) {
        onSearchQuery(keywords.join(' '));
      }
    }

    return {
      id: Date.now().toString(),
      type: 'bot',
      content: response,
      timestamp: new Date(),
      suggestions
    };
  };

  // Extraction de mots-clés simples
  const extractKeywords = (text: string): string[] => {
    const commonWords = ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du', 'et', 'ou', 'mais', 'donc', 'car', 'ni', 'or', 'pour', 'par', 'avec', 'sans', 'sur', 'sous', 'dans', 'vers', 'chez', 'que', 'qui', 'quoi', 'dont', 'où', 'comment', 'pourquoi', 'quand', 'combien', 'très', 'trop', 'plus', 'moins', 'bien', 'mal', 'veux', 'cherche', 'besoin', 'aide'];
    return text.toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.includes(word))
      .slice(0, 3);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await processMessage(inputValue);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Erreur lors du traitement du message:', error);
      toast({
        title: "Erreur",
        description: "Impossible de traiter votre message. Réessayez.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleVoiceResult = (transcript: string) => {
    setInputValue(transcript);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50",
          "bg-primary hover:bg-primary/90 text-white",
          "animate-pulse hover:animate-none transition-all duration-300",
          className
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={cn(
      "fixed bottom-6 right-6 w-96 h-[32rem] z-50 shadow-2xl",
      "flex flex-col bg-background border border-border",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-sm">Assistant de Recherche</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="w-6 h-6 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={cn(
            "flex gap-2",
            message.type === 'user' ? "justify-end" : "justify-start"
          )}>
            {message.type === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            <div className={cn(
              "max-w-[80%] rounded-lg p-3 text-sm",
              message.type === 'user' 
                ? "bg-primary text-primary-foreground ml-8" 
                : "bg-secondary text-secondary-foreground"
            )}>
              <div className="whitespace-pre-wrap">{message.content}</div>
              {message.suggestions && message.suggestions.length > 0 && (
                <div className="mt-3 space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Lightbulb className="w-3 h-3" />
                    <span>Suggestions:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {message.suggestions.map((suggestion, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-accent"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {message.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-secondary rounded-lg p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tapez votre message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="pr-10"
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
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ConversationalSearch;