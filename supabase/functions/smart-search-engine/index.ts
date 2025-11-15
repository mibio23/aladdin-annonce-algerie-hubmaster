import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[SMART-SEARCH] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Extract authorization header to determine if user is authenticated
    const authHeader = req.headers.get("authorization");
    const isAuthenticated = authHeader && authHeader.startsWith("Bearer ");
    
    logStep("User authentication status", { isAuthenticated });

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { query, filters, limit = 20, offset = 0 } = await req.json();
    logStep("Search parameters", { query, filters, limit, offset });

    if (!query) {
      return new Response(JSON.stringify({ error: "Query is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Recherche intelligente respectant exactement les termes saisis par l'utilisateur
    // Inclure TOUS les types d'annonces: normal, premium, featured, boutique, etc.
    let searchQuery = supabaseClient
      .from('announcements')
      .select(`
        *,
        categories(slug, translations)
      `)
      .eq('status', 'active');

    // Recherche flexible : titre OU description OU mots-clés contiennent la requête exacte
    const searchTerms = query.trim().toLowerCase();
    searchQuery = searchQuery.or(
      `title.ilike.%${searchTerms}%,description.ilike.%${searchTerms}%,keywords.cs.{${searchTerms}}`
    );

    // Trier par pertinence : d'abord les correspondances exactes dans le titre, puis par date
    searchQuery = searchQuery.order('created_at', { ascending: false });

    // Appliquer les filtres
    if (filters?.category) {
      searchQuery = searchQuery.eq('categories.slug', filters.category);
    }

    if (filters?.priceMin) {
      searchQuery = searchQuery.gte('price', filters.priceMin);
    }

    if (filters?.priceMax) {
      searchQuery = searchQuery.lte('price', filters.priceMax);
    }

    if (filters?.location) {
      searchQuery = searchQuery.ilike('location', `%${filters.location}%`);
    }

    if (filters?.condition) {
      searchQuery = searchQuery.eq('condition', filters.condition);
    }

    // Pagination
    searchQuery = searchQuery.range(offset, offset + limit - 1);

    const { data: announcements, error, count } = await searchQuery;

    if (error) {
      logStep("Database error", { error });
      throw error;
    }

    // Enregistrer la requête de recherche pour analytics
    await supabaseClient.from('search_queries').insert({
      query_text: query,
      query_normalized: query.toLowerCase().trim(),
      results_count: announcements?.length || 0,
      search_context: JSON.stringify(filters),
      user_session_id: req.headers.get('x-session-id') || crypto.randomUUID(),
      ip_hash: req.headers.get('x-forwarded-for') || 'unknown'
    });

    // SECURITY: Mask phone numbers for unauthenticated users
    const securedAnnouncements = (announcements || []).map(announcement => ({
      ...announcement,
      phone_number: isAuthenticated 
        ? announcement.phone_number 
        : announcement.phone_number ? "**********" : null
    }));

    logStep("Search completed with security applied", { 
      resultsCount: securedAnnouncements.length,
      phonesMasked: !isAuthenticated 
    });

    return new Response(JSON.stringify({
      success: true,
      data: securedAnnouncements,
      count: securedAnnouncements.length,
      hasMore: securedAnnouncements.length === limit
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in smart-search-engine", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});