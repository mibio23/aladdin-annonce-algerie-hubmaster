import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[VERIFY-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { session_id } = await req.json();
    if (!session_id) throw new Error("session_id is required");

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    const session = await stripe.checkout.sessions.retrieve(session_id);
    logStep("Retrieved session", { sessionId: session.id, status: session.payment_status });

    if (session.payment_status === 'paid') {
      const { payment_type, announcement_id, user_id } = session.metadata;
      
      // Update announcement based on payment type
      const updateData: any = {};
      if (payment_type === 'featured') {
        updateData.is_featured = true;
      } else if (payment_type === 'urgent') {
        updateData.is_urgent = true;
      }

      const { error: updateError } = await supabaseService
        .from('announcements')
        .update(updateData)
        .eq('id', announcement_id)
        .eq('user_id', user_id);

      if (updateError) {
        logStep("Error updating announcement", { error: updateError });
        throw updateError;
      }

      logStep("Announcement updated successfully", { announcement_id, payment_type });

      return new Response(JSON.stringify({ 
        success: true, 
        payment_status: session.payment_status,
        announcement_updated: true 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    return new Response(JSON.stringify({ 
      success: false, 
      payment_status: session.payment_status 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in verify-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});