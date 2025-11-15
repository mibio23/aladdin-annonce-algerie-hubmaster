import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LearningEvent {
  type: 'click' | 'conversion' | 'correction' | 'pattern';
  query: string;
  result_id?: string;
  click_position?: number;
  session_id: string;
  correction_from?: string;
  correction_to?: string;
  search_sequence?: string[];
  time_spent?: number;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const event: LearningEvent = await req.json();
    console.log(`[LEARNING-SYSTEM] Processing event: ${event.type}`, event);

    switch (event.type) {
      case 'click':
        await handleClickEvent(supabase, event);
        break;
      case 'conversion':
        await handleConversionEvent(supabase, event);
        break;
      case 'correction':
        await handleCorrectionEvent(supabase, event);
        break;
      case 'pattern':
        await handlePatternEvent(supabase, event);
        break;
      default:
        console.log(`[LEARNING-SYSTEM] Unknown event type: ${event.type}`);
    }

    // Update search suggestions and trending scores after each event
    await updateSearchSuggestions(supabase, event.query);
    await updateTrendingScores(supabase);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[LEARNING-SYSTEM] Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

async function handleClickEvent(supabase: any, event: LearningEvent) {
  console.log("[LEARNING-SYSTEM] Processing click event");
  
  // Record the click in search_results_clicks
  await supabase.from("search_results_clicks").insert({
    result_id: event.result_id,
    result_type: "announcement",
    click_position: event.click_position,
    session_id: event.session_id,
    time_to_click: event.time_spent || 0
  });

  // Update keyword success rate
  await updateKeywordSuccessRate(supabase, event.query, true);
}

async function handleConversionEvent(supabase: any, event: LearningEvent) {
  console.log("[LEARNING-SYSTEM] Processing conversion event");
  
  // Mark all searches in this session as successful
  const { data: searches } = await supabase
    .from("search_queries")
    .select("query_normalized")
    .eq("user_session_id", event.session_id);

  if (searches) {
    for (const search of searches) {
      await updateKeywordSuccessRate(supabase, search.query_normalized, true);
    }
  }
}

async function handleCorrectionEvent(supabase: any, event: LearningEvent) {
  console.log("[LEARNING-SYSTEM] Processing correction event");
  
  if (!event.correction_from || !event.correction_to) return;

  // Create or update search suggestion for spelling correction
  await createOrUpdateSuggestion(
    supabase,
    event.correction_from,
    event.correction_to,
    "spelling_correction",
    0.9
  );

  // Update keyword success rate for the corrected query
  await updateKeywordSuccessRate(supabase, event.correction_to, true);
}

async function handlePatternEvent(supabase: any, event: LearningEvent) {
  console.log("[LEARNING-SYSTEM] Processing pattern event");
  
  if (!event.search_sequence || event.search_sequence.length < 2) return;

  // Record the search pattern
  await supabase.from("user_search_patterns").insert({
    session_id: event.session_id,
    search_sequence: event.search_sequence,
    pattern_type: "sequential",
    search_timespan: event.time_spent || 0
  });

  // Analyze pattern for suggestions
  await analyzePatternForSuggestions(supabase, event.search_sequence);
}

async function updateKeywordSuccessRate(supabase: any, keyword: string, successful: boolean) {
  const normalizedKeyword = keyword.toLowerCase().trim();
  
  // Get current keyword stats
  const { data: existing } = await supabase
    .from("popular_keywords")
    .select("*")
    .eq("keyword_normalized", normalizedKeyword)
    .single();

  if (existing) {
    const newSuccessRate = calculateNewSuccessRate(
      existing.success_rate, 
      existing.search_count, 
      successful
    );

    await supabase
      .from("popular_keywords")
      .update({
        success_rate: newSuccessRate,
        search_count: existing.search_count + 1,
        last_searched: new Date().toISOString()
      })
      .eq("id", existing.id);
  } else {
    // Create new keyword entry
    await supabase.from("popular_keywords").insert({
      keyword: keyword,
      keyword_normalized: normalizedKeyword,
      success_rate: successful ? 1.0 : 0.0,
      search_count: 1,
      last_searched: new Date().toISOString()
    });
  }
}

function calculateNewSuccessRate(currentRate: number, currentCount: number, successful: boolean): number {
  const successfulSearches = Math.round(currentRate * currentCount);
  const newSuccessfulSearches = successful ? successfulSearches + 1 : successfulSearches;
  const newTotalSearches = currentCount + 1;
  return newSuccessfulSearches / newTotalSearches;
}

async function analyzePatternForSuggestions(supabase: any, searchSequence: string[]) {
  // Look for sequential patterns to create related suggestions
  for (let i = 0; i < searchSequence.length - 1; i++) {
    const current = searchSequence[i];
    const next = searchSequence[i + 1];
    
    await createOrUpdateSuggestion(
      supabase,
      current,
      next,
      "sequence_suggestion",
      0.7
    );
  }
}

async function updateSearchSuggestions(supabase: any, query: string) {
  console.log("[LEARNING-SYSTEM] Updating search suggestions");
  
  // Get recent searches to identify patterns
  const { data: recentSearches } = await supabase
    .from("search_queries")
    .select("query_normalized")
    .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
    .limit(1000);

  if (!recentSearches || recentSearches.length === 0) return;

  // Group similar queries and create suggestions
  const queryGroups = groupSimilarQueries(recentSearches.map(s => s.query_normalized));
  
  for (const [baseQuery, relatedQueries] of queryGroups) {
    for (const relatedQuery of relatedQueries) {
      if (baseQuery !== relatedQuery) {
        await createOrUpdateSuggestion(
          supabase,
          baseQuery,
          relatedQuery,
          "query_expansion",
          0.6
        );
      }
    }
  }
}

function groupSimilarQueries(queries: string[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();
  
  for (const query of queries) {
    let addedToGroup = false;
    
    for (const [baseQuery, relatedQueries] of groups) {
      if (levenshteinDistance(query, baseQuery) <= 2) {
        relatedQueries.push(query);
        addedToGroup = true;
        break;
      }
    }
    
    if (!addedToGroup) {
      groups.set(query, [query]);
    }
  }
  
  return groups;
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
  
  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
  
  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }
  
  return matrix[str2.length][str1.length];
}

async function createOrUpdateSuggestion(
  supabase: any,
  originalQuery: string,
  suggestedQuery: string,
  suggestionType: string,
  confidenceScore: number
) {
  const { data: existing } = await supabase
    .from("search_suggestions")
    .select("*")
    .eq("original_query", originalQuery)
    .eq("suggested_query", suggestedQuery)
    .single();

  if (existing) {
    // Update existing suggestion
    const newUsageCount = existing.usage_count + 1;
    const newSuccessRate = (existing.success_rate + confidenceScore) / 2;
    
    await supabase
      .from("search_suggestions")
      .update({
        usage_count: newUsageCount,
        success_rate: newSuccessRate,
        confidence_score: Math.min(confidenceScore + 0.1, 1.0),
        updated_at: new Date().toISOString()
      })
      .eq("id", existing.id);
  } else {
    // Create new suggestion
    await supabase.from("search_suggestions").insert({
      original_query: originalQuery,
      suggested_query: suggestedQuery,
      suggestion_type: suggestionType,
      confidence_score: confidenceScore,
      success_rate: confidenceScore,
      usage_count: 1
    });
  }
}

async function updateTrendingScores(supabase: any) {
  console.log("[LEARNING-SYSTEM] Updating trending scores");
  
  // Use the existing RPC function to calculate trending scores
  const { data: keywords } = await supabase
    .from("popular_keywords")
    .select("id")
    .limit(100);

  if (keywords) {
    for (const keyword of keywords) {
      await supabase.rpc("calculate_trending_score", {
        keyword_id: keyword.id
      });
    }
  }
}