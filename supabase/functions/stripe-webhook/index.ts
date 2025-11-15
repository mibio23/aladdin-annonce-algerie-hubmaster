import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  { auth: { persistSession: false } }
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      throw new Error("No Stripe signature found");
    }

    const body = await req.text();
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret!);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return new Response("Invalid signature", { status: 400 });
    }

    console.log(`[STRIPE-WEBHOOK] Processing event: ${event.type}`);

    // Log the webhook event
    const { error: logError } = await supabase.from("webhook_logs").insert({
      webhook_type: "stripe",
      event_type: event.type,
      stripe_event_id: event.id,
      payload: event.data,
      processed: false
    });

    if (logError) {
      console.error("Failed to log webhook event:", logError);
    }

    // Process the event
    switch (event.type) {
      case "payment_intent.succeeded":
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;

      case "payment_intent.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;

      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case "invoice.payment_succeeded":
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await handleSubscriptionChange(event.data.object as Stripe.Subscription);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Mark as processed
    await supabase
      .from("webhook_logs")
      .update({ processed: true })
      .eq("stripe_event_id", event.id);

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Webhook error:", error);
    
    // Log the error
    await supabase.from("webhook_logs").insert({
      webhook_type: "stripe",
      event_type: "error",
      payload: { error: error.message },
      processed: false,
      error_message: error.message
    });

    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log(`[STRIPE-WEBHOOK] Payment succeeded: ${paymentIntent.id}`);
  
  // Update announcement as featured/urgent based on payment metadata
  const announcementId = paymentIntent.metadata?.announcement_id;
  const paymentType = paymentIntent.metadata?.payment_type;
  
  if (announcementId && paymentType) {
    const updates: any = {};
    
    if (paymentType === "featured") {
      updates.is_featured = true;
    } else if (paymentType === "urgent") {
      updates.is_urgent = true;
    }
    
    const { error } = await supabase
      .from("announcements")
      .update(updates)
      .eq("id", announcementId);
      
    if (error) {
      console.error("Failed to update announcement:", error);
    } else {
      console.log(`[STRIPE-WEBHOOK] Updated announcement ${announcementId} with ${paymentType}`);
    }
  }
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log(`[STRIPE-WEBHOOK] Payment failed: ${paymentIntent.id}`);
  
  // Create notification for failed payment
  const customerId = paymentIntent.customer as string;
  if (customerId) {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer && !customer.deleted && customer.email) {
      // Find user by email
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", customer.email)
        .single();
        
      if (profile) {
        await supabase.functions.invoke("create-notification", {
          body: {
            user_id: profile.id,
            title: "Échec du paiement",
            message: "Votre paiement n'a pas pu être traité. Veuillez réessayer.",
            type: "payment_failed",
            category: "payment",
            channels: ["in_app", "email"],
            priority: "high"
          }
        });
      }
    }
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log(`[STRIPE-WEBHOOK] Checkout completed: ${session.id}`);
  
  // Handle successful checkout
  const customerId = session.customer as string;
  const customerEmail = session.customer_details?.email;
  
  if (customerEmail) {
    // Find user by email
    const { data: profile } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", customerEmail)
      .single();
      
    if (profile) {
      await supabase.functions.invoke("create-notification", {
        body: {
          user_id: profile.id,
          title: "Paiement confirmé",
          message: "Votre paiement a été traité avec succès. Votre annonce a été mise à jour.",
          type: "payment_success",
          category: "payment",
          channels: ["in_app", "email"],
          priority: "normal"
        }
      });
    }
  }
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log(`[STRIPE-WEBHOOK] Invoice payment succeeded: ${invoice.id}`);
  
  // Handle subscription payment success
  const customerId = invoice.customer as string;
  if (customerId) {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer && !customer.deleted && customer.email) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", customer.email)
        .single();
        
      if (profile) {
        await supabase.functions.invoke("create-notification", {
          body: {
            user_id: profile.id,
            title: "Abonnement renouvelé",
            message: "Votre abonnement a été renouvelé avec succès.",
            type: "subscription_renewed",
            category: "payment",
            channels: ["in_app", "email"],
            priority: "normal"
          }
        });
      }
    }
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  console.log(`[STRIPE-WEBHOOK] Subscription changed: ${subscription.id}`);
  
  // Handle subscription changes (create, update, delete)
  const customerId = subscription.customer as string;
  if (customerId) {
    const customer = await stripe.customers.retrieve(customerId);
    if (customer && !customer.deleted && customer.email) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", customer.email)
        .single();
        
      if (profile) {
        let message = "";
        let type = "";
        
        if (subscription.status === "active") {
          message = "Votre abonnement est maintenant actif.";
          type = "subscription_activated";
        } else if (subscription.status === "canceled") {
          message = "Votre abonnement a été annulé.";
          type = "subscription_canceled";
        } else if (subscription.status === "past_due") {
          message = "Votre abonnement est en retard de paiement.";
          type = "subscription_past_due";
        }
        
        if (message) {
          await supabase.functions.invoke("create-notification", {
            body: {
              user_id: profile.id,
              title: "Statut d'abonnement mis à jour",
              message,
              type,
              category: "payment",
              channels: ["in_app", "email"],
              priority: "high"
            }
          });
        }
      }
    }
  }
}