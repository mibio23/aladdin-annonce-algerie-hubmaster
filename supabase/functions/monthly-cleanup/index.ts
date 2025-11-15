import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[MONTHLY-CLEANUP] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Monthly cleanup started");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const cleanupResults = {
      expiredAnnouncements: 0,
      oldSearchQueries: 0,
      oldNotifications: 0,
      orphanedFiles: 0
    };

    // 1. Nettoyer les annonces expirées (plus de 60 jours)
    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

    const { data: expiredAnnouncements } = await supabaseClient
      .from('announcements')
      .update({ is_active: false })
      .lt('created_at', sixtyDaysAgo.toISOString())
      .eq('is_active', true)
      .select('id');

    cleanupResults.expiredAnnouncements = expiredAnnouncements?.length || 0;
    logStep("Expired announcements deactivated", { count: cleanupResults.expiredAnnouncements });

    // 2. Supprimer les anciennes requêtes de recherche (plus de 90 jours)
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    const { data: oldSearchQueries } = await supabaseClient
      .from('search_queries')
      .delete()
      .lt('created_at', ninetyDaysAgo.toISOString())
      .select('id');

    cleanupResults.oldSearchQueries = oldSearchQueries?.length || 0;
    logStep("Old search queries deleted", { count: cleanupResults.oldSearchQueries });

    // 3. Supprimer les anciennes notifications lues (plus de 30 jours)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: oldNotifications } = await supabaseClient
      .from('notifications')
      .delete()
      .lt('read_at', thirtyDaysAgo.toISOString())
      .neq('read_at', null)
      .select('id');

    cleanupResults.oldNotifications = oldNotifications?.length || 0;
    logStep("Old notifications deleted", { count: cleanupResults.oldNotifications });

    // 4. Nettoyer les mots-clés populaires inactifs
    await supabaseClient
      .from('popular_keywords')
      .delete()
      .lt('last_searched', ninetyDaysAgo.toISOString())
      .lt('search_count', 5);

    // 5. Mettre à jour les scores de tendance
    const { data: keywords } = await supabaseClient
      .from('popular_keywords')
      .select('id');

    if (keywords && keywords.length > 0) {
      for (const keyword of keywords) {
        await supabaseClient.rpc('calculate_trending_score', { keyword_id: keyword.id });
      }
    }

    logStep("Monthly cleanup completed", cleanupResults);

    return new Response(JSON.stringify({
      success: true,
      message: "Monthly cleanup completed successfully",
      results: cleanupResults,
      timestamp: new Date().toISOString()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in monthly-cleanup", { message: errorMessage });
    return new Response(JSON.stringify({ 
      error: errorMessage,
      success: false 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});