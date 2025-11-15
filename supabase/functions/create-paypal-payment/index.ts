import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-PAYPAL-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Use service role for settings access
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Check if PayPal payments are enabled
    const { data: paypalSettings } = await supabaseService
      .from('site_settings')
      .select('setting_value, is_active')
      .eq('setting_key', 'paypal_payments')
      .maybeSingle();

    if (!paypalSettings?.is_active || !paypalSettings.setting_value?.enabled) {
      throw new Error("PayPal payments are currently disabled");
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    
    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseService.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const { payment_type, announcement_id } = await req.json();
    
    if (!payment_type || !announcement_id) {
      throw new Error("payment_type and announcement_id are required");
    }

    // Get pricing from settings
    const prices = paypalSettings.setting_value;
    let amount: number;
    let productName: string;

    switch (payment_type) {
      case 'featured':
        amount = prices.featured_ad_price || 5;
        productName = "Annonce à la Une";
        break;
      case 'urgent':
        amount = prices.urgent_ad_price || 3;
        productName = "Annonce Urgente";
        break;
      default:
        throw new Error("Invalid payment type");
    }

    logStep("Creating PayPal payment session", { 
      payment_type, 
      amount, 
      announcement_id 
    });

    // Here you would integrate with the actual PayPal API
    // For now, we'll simulate the payment process
    const paymentSession = {
      id: `pp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount,
      currency: prices.currency || "usd",
      product_name: productName,
      user_id: user.id,
      announcement_id: announcement_id,
      payment_type: payment_type,
      status: "pending",
      test_mode: prices.test_mode || false
    };

    // In a real implementation, you would:
    // 1. Create a payment session with PayPal API
    // 2. Get a secure payment URL from PayPal
    // 3. Return the payment URL to redirect the user

    // For simulation, we'll create a mock payment URL
    const baseUrl = req.headers.get("origin") || "http://localhost:5173";
    const mockPaymentUrl = `${baseUrl}/paypal-payment?session_id=${paymentSession.id}&amount=${amount}&currency=${prices.currency}&test=${prices.test_mode}`;

    logStep("PayPal payment session created", { 
      sessionId: paymentSession.id, 
      url: mockPaymentUrl 
    });

    return new Response(JSON.stringify({ 
      url: mockPaymentUrl,
      session_id: paymentSession.id,
      amount: amount,
      currency: prices.currency || "usd"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-paypal-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});