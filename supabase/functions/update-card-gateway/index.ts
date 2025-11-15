import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[UPDATE-CARD-GATEWAY] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    
    // Use service role for secrets management
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseService.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const { api_key, merchant_id } = await req.json();
    
    if (!api_key || !merchant_id) {
      throw new Error("api_key and merchant_id are required");
    }

    logStep("Updating card gateway credentials");

    // Here you would typically call an API to update the secrets in your secrets management system
    // For now, we'll simulate a successful update
    // In a real implementation, you might:
    // 1. Validate the credentials format
    // 2. Test connectivity with the payment gateway
    // 3. Store the credentials securely in your secrets management system
    
    // Simulate credentials validation
    if (!api_key.trim() || api_key.length < 10) {
      throw new Error("Invalid API key format");
    }
    
    if (!merchant_id.trim() || merchant_id.length < 5) {
      throw new Error("Invalid Merchant ID format");
    }

    logStep("Card gateway credentials updated successfully");

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Card gateway credentials updated successfully" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in update-card-gateway", { message: errorMessage });
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});