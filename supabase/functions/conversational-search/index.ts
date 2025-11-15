import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchFilters {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  location?: string;
  condition?: string;
  urgent?: boolean;
}

interface ConversationMessage {
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const extractSearchIntent = (message: string, categoryContext?: string): {
  searchQuery: string;
  filters: SearchFilters;
  confidence: number;
} => {
  const messageLower = message.toLowerCase();
  const filters: SearchFilters = {};
  let searchQuery = '';
  let confidence = 0.5;

  // Extraction des prix
  const priceMatch = messageLower.match(/(\d+)\s*(?:da|dinars?|€|euros?)\s*(?:à|-)?\s*(\d+)?/);
  if (priceMatch) {
    filters.priceMin = parseInt(priceMatch[1]);
    if (priceMatch[2]) {
      filters.priceMax = parseInt(priceMatch[2]);
    }
    confidence += 0.2;
  }

  // Extraction de la localisation
  const locationWords = ['alger', 'oran', 'constantine', 'blida', 'setif', 'annaba', 'tlemcen', 'bejaia', 'biskra', 'tamanrasset'];
  for (const location of locationWords) {
    if (messageLower.includes(location)) {
      filters.location = location;
      confidence += 0.2;
      break;
    }
  }

  // Détection d'urgence
  if (/urgent|rapidement|vite|aujourd'hui|maintenant/.test(messageLower)) {
    filters.urgent = true;
    confidence += 0.1;
  }

  // Extraction de la condition
  if (/neuf|nouveau|récent/.test(messageLower)) {
    filters.condition = 'neuf';
    confidence += 0.1;
  } else if (/occasion|usagé|utilisé/.test(messageLower)) {
    filters.condition = 'occasion';
    confidence += 0.1;
  }

  // Extraction de catégorie et mot-clés principaux
  const categories = {
    'immobilier': ['appartement', 'maison', 'villa', 'terrain', 'local', 'studio', 'f2', 'f3', 'f4'],
    'automobile': ['voiture', 'auto', 'véhicule', 'moto', 'scooter', 'camion'],
    'électroménager': ['frigo', 'réfrigérateur', 'lave-linge', 'four', 'micro-ondes', 'aspirateur', 'climatisation'],
    'mobilier': ['meuble', 'canapé', 'lit', 'armoire', 'table', 'chaise', 'fauteuil'],
    'électronique': ['téléphone', 'smartphone', 'ordinateur', 'tv', 'tablette', 'console']
  };

  // Recherche de catégorie
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => messageLower.includes(keyword))) {
      filters.category = category;
      confidence += 0.3;
      
      // Extraire les mots-clés pertinents pour la requête
      const relevantKeywords = keywords.filter(keyword => messageLower.includes(keyword));
      searchQuery = relevantKeywords.join(' ');
      break;
    }
  }

  // Si aucune catégorie spécifique, utiliser le contexte
  if (!filters.category && categoryContext) {
    filters.category = categoryContext;
    confidence += 0.1;
  }

  // Si pas de mots-clés spécifiques trouvés, utiliser le message nettoyé
  if (!searchQuery) {
    // Nettoyer le message des mots non pertinents
    const stopWords = ['je', 'cherche', 'veux', 'besoin', 'de', 'du', 'des', 'le', 'la', 'les', 'un', 'une', 'pour', 'avec', 'sans', 'pas', 'cher', 'bon', 'marché'];
    searchQuery = message
      .toLowerCase()
      .split(/\s+/)
      .filter(word => !stopWords.includes(word) && word.length > 2)
      .join(' ');
  }

  return { searchQuery, filters, confidence };
};

const generateResponse = async (message: string, searchIntent: any, conversationHistory: ConversationMessage[]): Promise<string> => {
  const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY');
  
  if (!perplexityApiKey) {
    return generateFallbackResponse(message, searchIntent);
  }

  try {
    const contextPrompt = `Tu es un assistant de recherche intelligent pour une plateforme d'annonces en Algérie. 
    L'utilisateur cherche: "${message}"
    
    Intentions détectées:
    - Recherche: ${searchIntent.searchQuery}
    - Filtres: ${JSON.stringify(searchIntent.filters)}
    - Confiance: ${(searchIntent.confidence * 100).toFixed(0)}%
    
    Historique récent: ${conversationHistory.slice(-3).map(msg => `${msg.type}: ${msg.content}`).join('\n')}
    
    Réponds de manière personnalisée et utile en français, en confirmant ce que tu as compris et en donnant des conseils pertinents.`;

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'Tu es un assistant de recherche pour une plateforme d\'annonces algérienne. Sois concis, utile et personnalisé.'
          },
          {
            role: 'user',
            content: contextPrompt
          }
        ],
        temperature: 0.3,
        max_tokens: 300
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('Erreur Perplexity:', error);
    return generateFallbackResponse(message, searchIntent);
  }
};

const generateFallbackResponse = (message: string, searchIntent: any): string => {
  const responses = [
    `J'ai compris que vous cherchez "${searchIntent.searchQuery}". Je vais lancer une recherche avec les critères détectés.`,
    `Parfait ! Je recherche "${searchIntent.searchQuery}" pour vous${searchIntent.filters.location ? ` à ${searchIntent.filters.location}` : ''}.`,
    `D'accord ! Recherche en cours pour "${searchIntent.searchQuery}"${searchIntent.filters.priceMin ? ` dans votre budget` : ''}.`
  ];
  
  const baseResponse = responses[Math.floor(Math.random() * responses.length)];
  
  let additionalInfo = '';
  if (searchIntent.filters.urgent) {
    additionalInfo += ' Je vais prioriser les annonces disponibles immédiatement.';
  }
  if (searchIntent.filters.condition) {
    additionalInfo += ` Je me concentre sur les articles ${searchIntent.filters.condition === 'neuf' ? 'neufs' : "d'occasion"}.`;
  }
  
  return baseResponse + additionalInfo;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId, categoryContext, language, conversationHistory } = await req.json();

    console.log('Requête conversationnelle:', { message, sessionId, categoryContext });

    // Analyser l'intention de recherche
    const searchIntent = extractSearchIntent(message, categoryContext);
    
    console.log('Intention extraite:', searchIntent);

    // Générer la réponse IA
    const aiResponse = await generateResponse(message, searchIntent, conversationHistory || []);

    return new Response(JSON.stringify({
      response: aiResponse,
      searchQuery: searchIntent.searchQuery,
      filters: searchIntent.filters,
      confidence: searchIntent.confidence,
      sessionId
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erreur fonction conversational-search:', error);
    return new Response(JSON.stringify({ 
      error: 'Erreur de traitement',
      response: "Désolé, je rencontre une difficulté technique. Pouvez-vous reformuler votre demande ?"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});