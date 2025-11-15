import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  { auth: { persistSession: false } }
);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { notificationId } = await req.json();
    
    if (!notificationId) {
      throw new Error("Notification ID is required");
    }

    console.log(`[SEND-EMAIL] Processing notification: ${notificationId}`);

    // Get notification details
    const { data: notification, error: notificationError } = await supabase
      .from("notifications")
      .select(`
        *,
        profiles:user_id (
          email,
          full_name
        )
      `)
      .eq("id", notificationId)
      .single();

    if (notificationError || !notification) {
      throw new Error(`Notification not found: ${notificationError?.message}`);
    }

    if (!notification.profiles?.email) {
      throw new Error("User email not found");
    }

    // Get user notification preferences
    const { data: preferences } = await supabase
      .from("notification_preferences")
      .select("*")
      .eq("user_id", notification.user_id)
      .single();

    // Check if email notifications are enabled for this category
    const categoryPrefs = preferences?.categories_preferences?.[notification.category];
    if (categoryPrefs && !categoryPrefs.email) {
      console.log(`[SEND-EMAIL] Email disabled for category ${notification.category}`);
      return new Response(JSON.stringify({ skipped: true, reason: "Email disabled for category" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Check quiet hours
    if (preferences?.quiet_hours_start && preferences?.quiet_hours_end) {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
      const quietStart = preferences.quiet_hours_start;
      const quietEnd = preferences.quiet_hours_end;
      
      if (isInQuietHours(currentTime, quietStart, quietEnd)) {
        console.log(`[SEND-EMAIL] Skipping due to quiet hours`);
        
        // Reschedule for after quiet hours
        const rescheduleTime = new Date();
        rescheduleTime.setHours(parseInt(quietEnd.split(':')[0]), parseInt(quietEnd.split(':')[1]), 0, 0);
        if (rescheduleTime <= now) {
          rescheduleTime.setDate(rescheduleTime.getDate() + 1);
        }
        
        await supabase
          .from("notifications")
          .update({ scheduled_at: rescheduleTime.toISOString() })
          .eq("id", notificationId);
          
        return new Response(JSON.stringify({ rescheduled: true, scheduled_at: rescheduleTime }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }
    }

    // Generate email content based on notification type
    const emailContent = generateEmailContent(notification);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Aladdin <noreply@aladdin-dz.com>",
      to: [notification.profiles.email],
      subject: emailContent.subject,
      html: emailContent.html,
    });

    console.log(`[SEND-EMAIL] Email sent successfully:`, emailResponse);

    // Log delivery
    await supabase.from("notification_delivery_log").insert({
      notification_id: notificationId,
      channel: "email",
      status: "sent",
      provider: "resend",
      external_id: emailResponse.data?.id,
      response_data: emailResponse,
      sent_at: new Date().toISOString()
    });

    // Update notification status
    await supabase
      .from("notifications")
      .update({ 
        status: "sent",
        sent_at: new Date().toISOString()
      })
      .eq("id", notificationId);

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error(`[SEND-EMAIL] Error:`, error);
    
    // Log failed delivery
    if (req.json) {
      const { notificationId } = await req.json();
      if (notificationId) {
        await supabase.from("notification_delivery_log").insert({
          notification_id: notificationId,
          channel: "email",
          status: "failed",
          provider: "resend",
          error_message: error.message,
          sent_at: new Date().toISOString()
        });
      }
    }

    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

function generateEmailContent(notification: any) {
  const userName = notification.profiles?.full_name || "Utilisateur";
  const baseUrl = Deno.env.get("SUPABASE_URL")?.replace("/rest/v1", "") || "https://aladdin-dz.com";
  
  const templates = {
    announcement_created: {
      subject: "✅ Votre annonce a été publiée",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Aladdin</h1>
          <h2>Bonjour ${userName},</h2>
          <p>Votre annonce "${notification.title}" a été publiée avec succès sur Aladdin.</p>
          <p>${notification.message}</p>
          <a href="${baseUrl}/my-announcements" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Voir mes annonces
          </a>
          <p style="margin-top: 24px; color: #666;">
            Cordialement,<br>
            L'équipe Aladdin
          </p>
        </div>
      `
    },
    message_received: {
      subject: "💬 Nouveau message reçu",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Aladdin</h1>
          <h2>Bonjour ${userName},</h2>
          <p>Vous avez reçu un nouveau message concernant une de vos annonces.</p>
          <p>${notification.message}</p>
          <a href="${baseUrl}/chat" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Lire le message
          </a>
          <p style="margin-top: 24px; color: #666;">
            Cordialement,<br>
            L'équipe Aladdin
          </p>
        </div>
      `
    },
    payment_success: {
      subject: "✅ Paiement confirmé",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Aladdin</h1>
          <h2>Bonjour ${userName},</h2>
          <p>Votre paiement a été traité avec succès.</p>
          <p>${notification.message}</p>
          <a href="${baseUrl}/my-announcements" style="background-color: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Voir mes annonces
          </a>
          <p style="margin-top: 24px; color: #666;">
            Cordialement,<br>
            L'équipe Aladdin
          </p>
        </div>
      `
    },
    payment_failed: {
      subject: "❌ Échec du paiement",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Aladdin</h1>
          <h2>Bonjour ${userName},</h2>
          <p>Votre paiement n'a pas pu être traité.</p>
          <p>${notification.message}</p>
          <a href="${baseUrl}/my-announcements" style="background-color: #ef4444; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Réessayer le paiement
          </a>
          <p style="margin-top: 24px; color: #666;">
            Cordialement,<br>
            L'équipe Aladdin
          </p>
        </div>
      `
    },
    default: {
      subject: notification.title,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Aladdin</h1>
          <h2>Bonjour ${userName},</h2>
          <h3>${notification.title}</h3>
          <p>${notification.message}</p>
          <a href="${baseUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Accéder à Aladdin
          </a>
          <p style="margin-top: 24px; color: #666;">
            Cordialement,<br>
            L'équipe Aladdin
          </p>
        </div>
      `
    }
  };

  return templates[notification.type] || templates.default;
}

function isInQuietHours(currentTime: string, quietStart: string, quietEnd: string): boolean {
  const current = timeToMinutes(currentTime);
  const start = timeToMinutes(quietStart);
  const end = timeToMinutes(quietEnd);
  
  if (start <= end) {
    // Same day (e.g., 22:00 to 08:00 next day)
    return current >= start && current <= end;
  } else {
    // Crosses midnight (e.g., 22:00 to 08:00)
    return current >= start || current <= end;
  }
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}