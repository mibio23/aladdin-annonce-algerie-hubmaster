import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[UPDATE-STRIPE-SECRET] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Authenticate user
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);

    const user = userData.user;
    if (!user) throw new Error("User not authenticated");
    logStep("User authenticated", { userId: user.id });

    // Check if user is admin (you may want to add admin role checking logic here)
    const { data: profile, error: profileError } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) throw new Error("Unable to verify user profile");
    // Add admin check logic here if needed
    
    const { stripe_secret_key } = await req.json();
    if (!stripe_secret_key) {
      throw new Error("Stripe secret key is required");
    }

    logStep("Received stripe secret key update request");

    // Validate the key format (basic validation)
    if (!stripe_secret_key.startsWith('sk_')) {
      throw new Error("Invalid Stripe secret key format. Must start with 'sk_'");
    }

    // Use Supabase Management API to update secrets
    const supabaseServiceUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const projectRef = supabaseServiceUrl.split('//')[1].split('.')[0];

    const secretsUrl = `https://api.supabase.com/v1/projects/${projectRef}/secrets`;
    
    const response = await fetch(secretsUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          name: 'STRIPE_SECRET_KEY',
          value: stripe_secret_key,
        }
      ]),
    });

    if (!response.ok) {
      const errorData = await response.text();
      logStep("Failed to update secret", { status: response.status, error: errorData });
      throw new Error(`Failed to update Stripe secret: ${response.status}`);
    }

    logStep("Successfully updated Stripe secret key");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Clé secrète Stripe mise à jour avec succès" 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});