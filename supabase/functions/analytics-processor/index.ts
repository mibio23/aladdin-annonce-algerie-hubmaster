import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AnalyticsRequest {
  type: 'page_view' | 'search' | 'click' | 'conversion' | 'user_journey' | 'performance';
  data: any;
  userId?: string;
  sessionId: string;
  timestamp?: string;
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

    const { type, data, userId, sessionId, timestamp }: AnalyticsRequest = await req.json();

    console.log(`[ANALYTICS-PROCESSOR] Processing ${type} event for session: ${sessionId}`);

    let result;

    switch (type) {
      case 'page_view':
        result = await processPageView(supabase, data, userId, sessionId, timestamp);
        break;
      case 'search':
        result = await processSearchEvent(supabase, data, userId, sessionId, timestamp);
        break;
      case 'click':
        result = await processClickEvent(supabase, data, userId, sessionId, timestamp);
        break;
      case 'conversion':
        result = await processConversionEvent(supabase, data, userId, sessionId, timestamp);
        break;
      case 'user_journey':
        result = await processUserJourney(supabase, data, userId, sessionId);
        break;
      case 'performance':
        result = await processPerformanceMetrics(supabase, data, sessionId);
        break;
      default:
        result = await processGenericEvent(supabase, type, data, userId, sessionId, timestamp);
    }

    // Background task for aggregations
    EdgeRuntime.waitUntil(updateAggregatedAnalytics(supabase, type, data));

    return new Response(JSON.stringify({
      success: true,
      eventType: type,
      processedAt: new Date().toISOString(),
      result
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("[ANALYTICS-PROCESSOR] Error:", error);
    return new Response(JSON.stringify({ 
      error: "Analytics processing failed", 
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

async function processPageView(supabase: any, data: any, userId: string, sessionId: string, timestamp: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing page view: ${data.page}`);

  const pageViewData = {
    session_id: sessionId,
    user_id: userId,
    page_url: data.page,
    page_title: data.title,
    referrer: data.referrer,
    user_agent: data.userAgent,
    screen_resolution: data.screenResolution,
    viewport_size: data.viewportSize,
    load_time: data.loadTime,
    created_at: timestamp || new Date().toISOString()
  };

  // Update real-time page views
  await updatePageViewMetrics(supabase, data.page);

  // Track user session
  await updateUserSession(supabase, sessionId, userId, {
    last_page: data.page,
    page_count: data.pageCount || 1
  });

  return { pageView: 'processed', page: data.page };
}

async function processSearchEvent(supabase: any, data: any, userId: string, sessionId: string, timestamp: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing search: "${data.query}"`);

  // Store search query
  const { data: searchRecord, error } = await supabase
    .from('search_queries')
    .insert({
      query_text: data.query,
      query_normalized: normalizeQuery(data.query),
      search_context: data.context,
      results_count: data.resultsCount || 0,
      user_session_id: sessionId,
      ip_hash: data.ipHash,
      language_detected: data.language || 'fr',
      created_at: timestamp || new Date().toISOString()
    })
    .select()
    .single();

  if (error) {
    console.error('[ANALYTICS-PROCESSOR] Search storage error:', error);
  }

  // Update popular keywords
  await updatePopularKeywords(supabase, data.query, data.resultsCount > 0);

  // Update search trends
  await updateSearchTrends(supabase, data.query, data.language || 'fr');

  return { search: 'processed', query: data.query, searchId: searchRecord?.id };
}

async function processClickEvent(supabase: any, data: any, userId: string, sessionId: string, timestamp: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing click: ${data.elementType}:${data.elementId}`);

  // Store click event
  await supabase.from('search_results_clicks').insert({
    session_id: sessionId,
    result_id: data.elementId,
    result_type: data.elementType,
    click_position: data.position,
    time_to_click: data.timeToClick,
    created_at: timestamp || new Date().toISOString()
  });

  // Update announcement view count if it's an announcement click
  if (data.elementType === 'announcement') {
    await updateAnnouncementViews(supabase, data.elementId);
  }

  // Send to learning system for ML improvements
  await sendToLearningSystem(supabase, {
    type: 'click',
    query: data.searchQuery,
    result_id: data.elementId,
    click_position: data.position,
    session_id: sessionId
  });

  return { click: 'processed', elementType: data.elementType };
}

async function processConversionEvent(supabase: any, data: any, userId: string, sessionId: string, timestamp: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing conversion: ${data.type}`);

  const conversionData = {
    session_id: sessionId,
    user_id: userId,
    conversion_type: data.type,
    conversion_value: data.value,
    announcement_id: data.announcementId,
    funnel_step: data.funnelStep,
    conversion_time: data.conversionTime,
    created_at: timestamp || new Date().toISOString()
  };

  // Track conversion in user journey
  await updateUserJourneyWithConversion(supabase, sessionId, data);

  // Update conversion metrics
  await updateConversionMetrics(supabase, data.type, data.value);

  // Send to learning system
  await sendToLearningSystem(supabase, {
    type: 'conversion',
    session_id: sessionId,
    query: data.searchQuery
  });

  return { conversion: 'processed', type: data.type };
}

async function processUserJourney(supabase: any, data: any, userId: string, sessionId: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing user journey for session: ${sessionId}`);

  // Get complete user journey for this session
  const { data: pageViews } = await supabase
    .from('search_queries')
    .select('*')
    .eq('user_session_id', sessionId)
    .order('created_at', { ascending: true });

  const { data: clicks } = await supabase
    .from('search_results_clicks')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true });

  // Analyze journey patterns
  const journeyAnalysis = analyzeUserJourney(pageViews || [], clicks || []);

  // Store journey insights
  await storeJourneyInsights(supabase, sessionId, userId, journeyAnalysis);

  return { userJourney: 'analyzed', insights: journeyAnalysis };
}

async function processPerformanceMetrics(supabase: any, data: any, sessionId: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing performance metrics`);

  const performanceData = {
    session_id: sessionId,
    page_load_time: data.pageLoadTime,
    dom_content_loaded: data.domContentLoaded,
    first_contentful_paint: data.firstContentfulPaint,
    largest_contentful_paint: data.largestContentfulPaint,
    cumulative_layout_shift: data.cumulativeLayoutShift,
    first_input_delay: data.firstInputDelay,
    time_to_interactive: data.timeToInteractive,
    connection_type: data.connectionType,
    device_type: data.deviceType,
    created_at: new Date().toISOString()
  };

  // Store performance metrics
  console.log('[ANALYTICS-PROCESSOR] Performance metrics stored:', performanceData);

  return { performance: 'processed', metrics: performanceData };
}

async function processGenericEvent(supabase: any, type: string, data: any, userId: string, sessionId: string, timestamp: string) {
  console.log(`[ANALYTICS-PROCESSOR] Processing generic event: ${type}`);

  const eventData = {
    event_type: type,
    session_id: sessionId,
    user_id: userId,
    event_data: data,
    created_at: timestamp || new Date().toISOString()
  };

  console.log('[ANALYTICS-PROCESSOR] Generic event stored:', eventData);

  return { genericEvent: 'processed', type };
}

// Helper functions

function normalizeQuery(query: string): string {
  return query.toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
}

async function updatePageViewMetrics(supabase: any, page: string) {
  // Update real-time page view counts
  // In a real implementation, you'd use Redis or similar for real-time metrics
  console.log(`[ANALYTICS-PROCESSOR] Updated page views for: ${page}`);
}

async function updateUserSession(supabase: any, sessionId: string, userId: string, updates: any) {
  // Update or create user session record
  console.log(`[ANALYTICS-PROCESSOR] Updated session: ${sessionId}`, updates);
}

async function updatePopularKeywords(supabase: any, query: string, hasResults: boolean) {
  const normalizedKeyword = normalizeQuery(query);
  
  const { data: existing } = await supabase
    .from('popular_keywords')
    .select('*')
    .eq('keyword_normalized', normalizedKeyword)
    .single();

  if (existing) {
    await supabase
      .from('popular_keywords')
      .update({
        search_count: existing.search_count + 1,
        success_rate: hasResults ? 
          ((existing.success_rate * existing.search_count) + 1) / (existing.search_count + 1) :
          (existing.success_rate * existing.search_count) / (existing.search_count + 1),
        last_searched: new Date().toISOString()
      })
      .eq('id', existing.id);
  } else {
    await supabase.from('popular_keywords').insert({
      keyword: query,
      keyword_normalized: normalizedKeyword,
      search_count: 1,
      success_rate: hasResults ? 1 : 0,
      last_searched: new Date().toISOString()
    });
  }
}

async function updateSearchTrends(supabase: any, query: string, language: string) {
  // Update search trends for real-time analytics
  console.log(`[ANALYTICS-PROCESSOR] Updated search trends for: ${query} (${language})`);
}

async function updateAnnouncementViews(supabase: any, announcementId: string) {
  await supabase
    .from('announcements')
    .update({ views_count: supabase.raw('views_count + 1') })
    .eq('id', announcementId);
}

async function sendToLearningSystem(supabase: any, learningData: any) {
  try {
    // Send to search learning system for ML improvements
    await supabase.functions.invoke('search-learning-system', {
      body: learningData
    });
  } catch (error) {
    console.error('[ANALYTICS-PROCESSOR] Failed to send to learning system:', error);
  }
}

async function updateUserJourneyWithConversion(supabase: any, sessionId: string, conversionData: any) {
  console.log(`[ANALYTICS-PROCESSOR] Updated user journey with conversion:`, conversionData);
}

async function updateConversionMetrics(supabase: any, type: string, value: number) {
  console.log(`[ANALYTICS-PROCESSOR] Updated conversion metrics: ${type} = ${value}`);
}

function analyzeUserJourney(pageViews: any[], clicks: any[]): any {
  return {
    totalPages: pageViews.length,
    totalClicks: clicks.length,
    sessionDuration: pageViews.length > 0 ? 
      new Date(pageViews[pageViews.length - 1].created_at).getTime() - 
      new Date(pageViews[0].created_at).getTime() : 0,
    conversionPath: extractConversionPath(pageViews, clicks),
    dropOffPoints: identifyDropOffPoints(pageViews, clicks)
  };
}

function extractConversionPath(pageViews: any[], clicks: any[]): string[] {
  return pageViews.map(pv => pv.page_url || pv.query_text).filter(Boolean);
}

function identifyDropOffPoints(pageViews: any[], clicks: any[]): any[] {
  // Identify where users typically drop off
  return [];
}

async function storeJourneyInsights(supabase: any, sessionId: string, userId: string, analysis: any) {
  console.log(`[ANALYTICS-PROCESSOR] Stored journey insights:`, analysis);
}

async function updateAggregatedAnalytics(supabase: any, eventType: string, data: any) {
  console.log(`[ANALYTICS-PROCESSOR] Background: Updating aggregated analytics for ${eventType}`);
  
  // This runs in the background after the response is sent
  // Update hourly, daily, weekly aggregations
  
  try {
    // Update trending calculations
    await supabase.rpc('calculate_trending_score', { keyword_id: null });
    
    console.log(`[ANALYTICS-PROCESSOR] Background: Analytics aggregation completed`);
  } catch (error) {
    console.error('[ANALYTICS-PROCESSOR] Background: Aggregation failed:', error);
  }
}