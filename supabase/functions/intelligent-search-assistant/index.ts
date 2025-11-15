import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ConversationRequest {
  message: string;
  sessionId: string;
  language?: string;
  categoryContext?: string;
  userProfile?: any;
  searchHistory?: string[];
}

interface ConversationMemory {
  sessionId: string;
  messages: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: string;
    metadata?: any;
  }>;
  userPreferences: any;
  context: any;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { 
      message, 
      sessionId, 
      language = 'fr', 
      categoryContext, 
      userProfile,
      searchHistory = []
    }: ConversationRequest = await req.json();

    console.log(`[IntelligentAssistant] Message: "${message}" | Session: ${sessionId} | Language: ${language}`);

    // 1. Récupérer ou créer la mémoire conversationnelle
    const conversationMemory = await getOrCreateConversationMemory(supabaseClient, sessionId);
    
    // 2. Analyser l'intention de l'utilisateur
    const userIntent = await analyzeUserIntent(message, language, categoryContext);
    
    // 3. Rechercher des informations pertinentes
    const relevantData = await searchRelevantInformation(supabaseClient, message, categoryContext);
    
    // 4. Analyser les patterns utilisateur pour des recommandations
    const userPatterns = await analyzeUserPatterns(supabaseClient, sessionId, searchHistory);
    
    // 5. Générer une réponse intelligente avec GPT-4
    const aiResponse = await generateIntelligentResponse({
      message,
      language,
      categoryContext,
      conversationMemory,
      userIntent,
      relevantData,
      userPatterns,
      userProfile
    });

    // 6. Sauvegarder la conversation
    await saveConversationTurn(supabaseClient, sessionId, message, aiResponse.content, userIntent);
    
    // 7. Mettre à jour l'apprentissage continu
    await updateContinuousLearning(supabaseClient, message, aiResponse, userIntent);

    // 8. Générer des suggestions proactives
    const proactiveSuggestions = await generateProactiveSuggestions(supabaseClient, userPatterns, categoryContext);

    return new Response(JSON.stringify({
      response: aiResponse.content,
      suggestions: aiResponse.suggestions || [],
      proactiveSuggestions,
      anticipatedNeeds: aiResponse.anticipatedNeeds || [],
      conversationId: sessionId,
      userIntent: userIntent.type,
      confidence: aiResponse.confidence || 0.8
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[IntelligentAssistant] Erreur:', error);
    return new Response(JSON.stringify({ 
      error: 'Erreur de l\'assistant intelligent', 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Récupérer ou créer la mémoire conversationnelle
async function getOrCreateConversationMemory(supabase: any, sessionId: string): Promise<ConversationMemory> {
  const { data: existing } = await supabase
    .from('conversation_memory')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: false })
    .limit(10);

  if (existing && existing.length > 0) {
    return {
      sessionId,
      messages: existing.map((conv: any) => ({
        role: conv.role,
        content: conv.content,
        timestamp: conv.created_at,
        metadata: conv.metadata
      })),
      userPreferences: existing[0].user_preferences || {},
      context: existing[0].context || {}
    };
  }

  return {
    sessionId,
    messages: [],
    userPreferences: {},
    context: {}
  };
}

// Analyser l'intention de l'utilisateur
async function analyzeUserIntent(message: string, language: string, categoryContext?: string) {
  const lowerMessage = message.toLowerCase();
  
  // Patterns d'intention basiques (sera amélioré avec l'IA)
  const intentPatterns = {
    search: ['cherche', 'recherche', 'trouve', 'où', 'comment', 'search', 'find', 'بحث', 'أجد'],
    compare: ['compare', 'différence', 'mieux', 'vs', 'entre', 'comparar', 'مقارنة'],
    recommend: ['recommande', 'conseille', 'suggère', 'recommend', 'suggest', 'أنصح', 'اقترح'],
    price: ['prix', 'coût', 'combien', 'price', 'cost', 'how much', 'سعر', 'كم'],
    negotiate: ['négocie', 'rabais', 'remise', 'discount', 'negotiate', 'خصم', 'تفاوض'],
    help: ['aide', 'help', 'comment', 'how to', 'مساعدة', 'كيف']
  };

  let detectedIntent = 'general';
  let confidence = 0.5;

  for (const [intent, patterns] of Object.entries(intentPatterns)) {
    for (const pattern of patterns) {
      if (lowerMessage.includes(pattern)) {
        detectedIntent = intent;
        confidence = 0.8;
        break;
      }
    }
    if (confidence > 0.5) break;
  }

  return {
    type: detectedIntent,
    confidence,
    keywords: extractKeywords(message),
    language,
    categoryContext
  };
}

// Extraire les mots-clés importants
function extractKeywords(text: string): string[] {
  const stopWords = ['le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'et', 'ou', 'mais', 'pour', 'avec', 'sur', 'dans', 'the', 'a', 'an', 'and', 'or', 'but', 'for', 'with', 'on', 'in'];
  return text.toLowerCase()
    .split(/[\s\p{P}]+/u)
    .filter(word => word.length > 2 && !stopWords.includes(word))
    .slice(0, 10);
}

// Rechercher des informations pertinentes
async function searchRelevantInformation(supabase: any, message: string, categoryContext?: string) {
  const keywords = extractKeywords(message);
  const results: any = {
    announcements: [],
    categories: [],
    trending: []
  };

  // Recherche dans les annonces
  if (keywords.length > 0) {
    const searchQuery = keywords.join(' | ');
    const { data: announcements } = await supabase
      .from('announcements')
      .select('id, title, description, price, location, category_id')
      .eq('is_active', true)
      .textSearch('title', searchQuery, { config: 'french' })
      .limit(5);
    
    results.announcements = announcements || [];
  }

  // Recherche dans les catégories
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name, slug, description')
    .eq('is_active', true)
    .limit(3);
  
  results.categories = categories || [];

  // Mots-clés tendance
  const { data: trending } = await supabase
    .from('popular_keywords')
    .select('keyword, trending_score')
    .order('trending_score', { ascending: false })
    .limit(5);
  
  results.trending = trending || [];

  return results;
}

// Analyser les patterns utilisateur
async function analyzeUserPatterns(supabase: any, sessionId: string, searchHistory: string[]) {
  const { data: recentSearches } = await supabase
    .from('search_queries')
    .select('*')
    .eq('user_session_id', sessionId)
    .order('created_at', { ascending: false })
    .limit(10);

  const patterns = {
    searchFrequency: recentSearches?.length || 0,
    commonKeywords: extractCommonKeywords(recentSearches || []),
    preferredCategories: extractPreferredCategories(recentSearches || []),
    searchTimes: extractSearchTimes(recentSearches || []),
    behavior: 'explorer' // explorer, focused, comparison_shopper
  };

  // Déterminer le type de comportement
  if (patterns.searchFrequency > 5) {
    patterns.behavior = 'explorer';
  } else if (patterns.commonKeywords.length > 3) {
    patterns.behavior = 'focused';
  }

  return patterns;
}

// Extraire les mots-clés communs
function extractCommonKeywords(searches: any[]): string[] {
  const keywordCounts: { [key: string]: number } = {};
  
  searches.forEach(search => {
    const keywords = extractKeywords(search.query_text || '');
    keywords.forEach(keyword => {
      keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
    });
  });

  return Object.entries(keywordCounts)
    .filter(([_, count]) => count > 1)
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, 5)
    .map(([keyword, _]) => keyword);
}

// Extraire les catégories préférées
function extractPreferredCategories(searches: any[]): string[] {
  const categoryCounts: { [key: string]: number } = {};
  
  searches.forEach(search => {
    if (search.search_context && search.search_context !== 'general') {
      categoryCounts[search.search_context] = (categoryCounts[search.search_context] || 0) + 1;
    }
  });

  return Object.entries(categoryCounts)
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, 3)
    .map(([category, _]) => category);
}

// Extraire les heures de recherche
function extractSearchTimes(searches: any[]): string[] {
  return searches.map(search => {
    const date = new Date(search.created_at);
    return date.getHours().toString();
  }).slice(0, 5);
}

// Générer une réponse intelligente avec GPT-4
async function generateIntelligentResponse(context: any) {
  const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
  
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const systemPrompt = createSystemPrompt(context);
  const userPrompt = createUserPrompt(context);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4.1-2025-04-14',
      messages: [
        { role: 'system', content: systemPrompt },
        ...context.conversationMemory.messages.slice(-5), // Derniers 5 messages pour le contexte
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    }),
  });

  const data = await response.json();
  const aiContent = data.choices[0].message.content;

  // Parser la réponse pour extraire les suggestions et anticipations
  return parseAIResponse(aiContent);
}

// Créer le prompt système contextuel
function createSystemPrompt(context: any): string {
  const { language, categoryContext, userPatterns } = context;
  
  let prompt = `Tu es un assistant intelligent pour une marketplace au Maroc. Tu dois aider les utilisateurs dans leurs recherches et anticiper leurs besoins.

LANGUE: Réponds principalement en ${language === 'ar' ? 'arabe' : language === 'en' ? 'anglais' : 'français'}.

CONTEXTE:
- Catégorie actuelle: ${categoryContext || 'général'}
- Comportement utilisateur: ${userPatterns?.behavior || 'nouveau'}
- Mots-clés récents: ${userPatterns?.commonKeywords?.join(', ') || 'aucun'}

CAPACITÉS:
1. Comprendre les intentions (recherche, comparaison, recommandation, prix, négociation)
2. Anticiper les besoins futurs
3. Fournir des suggestions personnalisées
4. Aider à la prise de décision
5. Optimiser les recherches

STYLE:
- Conversationnel et amical
- Proactif dans les suggestions
- Précis et utile
- Adapté au contexte marocain

RÉPONSE FORMAT:
{
  "content": "ta réponse principale",
  "suggestions": ["suggestion1", "suggestion2", "suggestion3"],
  "anticipatedNeeds": ["besoin anticipé 1", "besoin anticipé 2"],
  "confidence": 0.85
}`;

  return prompt;
}

// Créer le prompt utilisateur
function createUserPrompt(context: any): string {
  const { message, userIntent, relevantData } = context;
  
  let prompt = `MESSAGE UTILISATEUR: "${message}"

INTENTION DÉTECTÉE: ${userIntent.type} (confiance: ${userIntent.confidence})

DONNÉES DISPONIBLES:
- ${relevantData.announcements.length} annonces trouvées
- ${relevantData.categories.length} catégories pertinentes  
- Tendances: ${relevantData.trending.map((t: any) => t.keyword).join(', ')}

INSTRUCTIONS:
1. Réponds à la question/demande de l'utilisateur
2. Utilise les données disponibles pour enrichir ta réponse
3. Anticipe les prochains besoins probables
4. Propose des suggestions d'amélioration de recherche
5. Fournis une réponse au format JSON spécifié`;

  return prompt;
}

// Parser la réponse IA pour extraire les composants
function parseAIResponse(aiContent: string) {
  try {
    // Essayer de parser comme JSON
    const parsed = JSON.parse(aiContent);
    return parsed;
  } catch {
    // Si ce n'est pas du JSON valide, créer une structure par défaut
    return {
      content: aiContent,
      suggestions: [],
      anticipatedNeeds: [],
      confidence: 0.7
    };
  }
}

// Sauvegarder le tour de conversation
async function saveConversationTurn(supabase: any, sessionId: string, userMessage: string, aiResponse: string, userIntent: any) {
  // Sauvegarder le message utilisateur
  await supabase
    .from('conversation_memory')
    .insert({
      session_id: sessionId,
      role: 'user',
      content: userMessage,
      metadata: { intent: userIntent }
    });

  // Sauvegarder la réponse IA
  await supabase
    .from('conversation_memory')
    .insert({
      session_id: sessionId,
      role: 'assistant', 
      content: aiResponse,
      metadata: { generated_by: 'gpt-4', intent_response: userIntent.type }
    });
}

// Mettre à jour l'apprentissage continu
async function updateContinuousLearning(supabase: any, userMessage: string, aiResponse: any, userIntent: any) {
  // Enregistrer pour l'amélioration future
  await supabase
    .from('ai_learning_data')
    .insert({
      user_input: userMessage,
      ai_output: aiResponse.content,
      intent_detected: userIntent.type,
      confidence_score: aiResponse.confidence || 0.7,
      feedback_score: null // Sera mis à jour avec le feedback utilisateur
    });
}

// Générer des suggestions proactives
async function generateProactiveSuggestions(supabase: any, userPatterns: any, categoryContext?: string) {
  const suggestions: string[] = [];

  // Basé sur les mots-clés communs
  if (userPatterns.commonKeywords.length > 0) {
    suggestions.push(`Recherches similaires avec: ${userPatterns.commonKeywords.slice(0, 2).join(', ')}`);
  }

  // Basé sur les catégories préférées
  if (userPatterns.preferredCategories.length > 0) {
    suggestions.push(`Explorer ${userPatterns.preferredCategories[0]}`);
  }

  // Basé sur les tendances
  const { data: trending } = await supabase
    .from('popular_keywords')
    .select('keyword')
    .order('trending_score', { ascending: false })
    .limit(3);

  if (trending && trending.length > 0) {
    suggestions.push(`Tendance: ${trending[0].keyword}`);
  }

  return suggestions.slice(0, 3);
}