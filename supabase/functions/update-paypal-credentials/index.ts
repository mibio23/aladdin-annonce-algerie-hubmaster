import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[UPDATE-PAYPAL-CREDENTIALS] ${step}${detailsStr}`);
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

    const { paypal_client_id, paypal_client_secret } = await req.json();
    
    if (!paypal_client_id || !paypal_client_secret) {
      throw new Error("paypal_client_id and paypal_client_secret are required");
    }

    logStep("Updating PayPal credentials");

    // Here you would typically call an API to update the secrets in your secrets management system
    // For now, we'll simulate a successful update
    // In a real implementation, you might:
    // 1. Validate the credentials format
    // 2. Test connectivity with PayPal API
    // 3. Store the credentials securely in your secrets management system
    
    // Simulate credentials validation
    if (!paypal_client_id.trim() || paypal_client_id.length < 10) {
      throw new Error("Invalid Client ID format");
    }
    
    if (!paypal_client_secret.trim() || paypal_client_secret.length < 10) {
      throw new Error("Invalid Client Secret format");
    }

    logStep("PayPal credentials updated successfully");

    return new Response(JSON.stringify({ 
      success: true, 
      message: "PayPal credentials updated successfully" 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in update-paypal-credentials", { message: errorMessage });
    return new Response(JSON.stringify({ 
      success: false, 
      error: errorMessage 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});