import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.4';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Récupérer les notifications en attente
    const { data: notifications, error: fetchError } = await supabase
      .from('notifications')
      .select('*')
      .eq('status', 'pending')
      .lte('scheduled_at', new Date().toISOString())
      .limit(50);

    if (fetchError) {
      throw new Error(`Error fetching notifications: ${fetchError.message}`);
    }

    console.log(`Processing ${notifications?.length || 0} notifications`);

    const results = [];

    for (const notification of notifications || []) {
      try {
        // Récupérer les préférences utilisateur
        const { data: preferences } = await supabase
          .rpc('get_user_notification_preferences', { p_user_id: notification.user_id });

        const channels = notification.channels || ['in_app'];
        const userPrefs = preferences || {};

        // Traiter chaque canal
        for (const channel of channels) {
          try {
            if (channel === 'email' && userPrefs.email_enabled) {
              // Appeler la fonction d'envoi d'email
              const emailResult = await supabase.functions.invoke('send-notification-email', {
                body: { notificationId: notification.id }
              });
              
              if (emailResult.error) {
                console.error('Email send error:', emailResult.error);
              }
            }
            
            if (channel === 'sms' && userPrefs.sms_enabled) {
              // Pour l'instant, juste logger (SMS configuré plus tard)
              console.log(`SMS notification queued for notification ${notification.id}`);
              
              await supabase
                .from('notification_delivery_log')
                .insert({
                  notification_id: notification.id,
                  channel: 'sms',
                  status: 'pending',
                  provider_response: { message: 'SMS provider not configured yet' }
                });
            }
          } catch (channelError) {
            console.error(`Error processing ${channel} for notification ${notification.id}:`, channelError);
          }
        }

        // Marquer la notification comme traitée
        await supabase
          .from('notifications')
          .update({ 
            status: 'sent',
            processed_at: new Date().toISOString()
          })
          .eq('id', notification.id);

        results.push({ 
          id: notification.id, 
          status: 'processed' 
        });

      } catch (error) {
        console.error(`Error processing notification ${notification.id}:`, error);
        results.push({ 
          id: notification.id, 
          status: 'failed', 
          error: error.message 
        });
      }
    }

    return new Response(JSON.stringify({ 
      processed: results.length,
      results 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error processing notifications:", error);
    
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);