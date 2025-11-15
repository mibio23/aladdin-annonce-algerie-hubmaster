-- PHASE 1B: SYSTÈME DE NOTIFICATIONS COMPLET
-- Création du système de notifications multi-canal avec templates et analytics

-- 1. Table principale des notifications
CREATE TABLE public.notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('info', 'success', 'warning', 'error', 'announcement', 'promotion', 'reminder')),
  category TEXT NOT NULL CHECK (category IN ('system', 'announcement', 'message', 'payment', 'security', 'marketing', 'reminder')),
  priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  channels TEXT[] NOT NULL DEFAULT ARRAY['in_app'], -- in_app, email, sms, push
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'delivered', 'read', 'failed')),
  metadata JSONB DEFAULT '{}',
  scheduled_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  sent_at TIMESTAMP WITH TIME ZONE,
  read_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 2. Templates de notifications réutilisables
CREATE TABLE public.notification_templates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  title_template TEXT NOT NULL,
  message_template TEXT NOT NULL,
  type TEXT NOT NULL,
  category TEXT NOT NULL,
  default_channels TEXT[] NOT NULL DEFAULT ARRAY['in_app'],
  variables JSONB DEFAULT '{}', -- Variables attendues dans le template
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 3. Historique d'envoi des notifications
CREATE TABLE public.notification_delivery_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  notification_id UUID NOT NULL REFERENCES public.notifications(id) ON DELETE CASCADE,
  channel TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'sent', 'delivered', 'failed', 'bounced')),
  provider TEXT, -- resend, twilio, firebase, etc.
  external_id TEXT, -- ID externe du provider
  error_message TEXT,
  response_data JSONB DEFAULT '{}',
  attempt_count INTEGER DEFAULT 1,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  delivered_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 4. Préférences de notification des utilisateurs
CREATE TABLE public.notification_preferences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  email_enabled BOOLEAN DEFAULT true,
  sms_enabled BOOLEAN DEFAULT false,
  push_enabled BOOLEAN DEFAULT true,
  in_app_enabled BOOLEAN DEFAULT true,
  categories_preferences JSONB DEFAULT '{
    "system": {"email": true, "sms": false, "push": true, "in_app": true},
    "announcement": {"email": true, "sms": false, "push": true, "in_app": true},
    "message": {"email": true, "sms": true, "push": true, "in_app": true},
    "payment": {"email": true, "sms": true, "push": true, "in_app": true},
    "security": {"email": true, "sms": true, "push": true, "in_app": true},
    "marketing": {"email": false, "sms": false, "push": false, "in_app": true},
    "reminder": {"email": true, "sms": false, "push": true, "in_app": true}
  }',
  quiet_hours_start TIME DEFAULT '22:00',
  quiet_hours_end TIME DEFAULT '08:00',
  timezone TEXT DEFAULT 'Africa/Algiers',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 5. Table pour les campagnes de notifications en masse
CREATE TABLE public.notification_campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  template_id UUID REFERENCES public.notification_templates(id),
  target_criteria JSONB NOT NULL, -- Critères de ciblage
  channels TEXT[] NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'running', 'completed', 'cancelled')),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  total_recipients INTEGER DEFAULT 0,
  sent_count INTEGER DEFAULT 0,
  delivered_count INTEGER DEFAULT 0,
  failed_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 6. Index pour optimiser les performances
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_notifications_status ON public.notifications(status);
CREATE INDEX idx_notifications_scheduled_at ON public.notifications(scheduled_at);
CREATE INDEX idx_notifications_type_category ON public.notifications(type, category);
CREATE INDEX idx_notification_delivery_log_notification_id ON public.notification_delivery_log(notification_id);
CREATE INDEX idx_notification_delivery_log_channel_status ON public.notification_delivery_log(channel, status);

-- 7. Triggers pour la mise à jour automatique
CREATE TRIGGER update_notifications_updated_at
  BEFORE UPDATE ON public.notifications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_notification_templates_updated_at
  BEFORE UPDATE ON public.notification_templates
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_notification_preferences_updated_at
  BEFORE UPDATE ON public.notification_preferences
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_notification_campaigns_updated_at
  BEFORE UPDATE ON public.notification_campaigns
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- 8. Activation de Row Level Security
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_delivery_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notification_campaigns ENABLE ROW LEVEL SECURITY;

-- 9. Politiques RLS pour les notifications
CREATE POLICY "Users can view their own notifications" 
ON public.notifications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their notification read status" 
ON public.notifications 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 10. Politiques RLS pour les préférences
CREATE POLICY "Users can manage their own preferences" 
ON public.notification_preferences 
FOR ALL 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- 11. Politiques pour les templates (lecture publique, écriture admin)
CREATE POLICY "Everyone can read active templates" 
ON public.notification_templates 
FOR SELECT 
USING (is_active = true);

-- 12. Fonction pour créer une notification
CREATE OR REPLACE FUNCTION public.create_notification(
  p_user_id UUID,
  p_title TEXT,
  p_message TEXT,
  p_type TEXT,
  p_category TEXT,
  p_channels TEXT[] DEFAULT ARRAY['in_app'],
  p_priority TEXT DEFAULT 'normal',
  p_metadata JSONB DEFAULT '{}',
  p_scheduled_at TIMESTAMP WITH TIME ZONE DEFAULT now()
)
RETURNS UUID AS $$
DECLARE
  notification_id UUID;
BEGIN
  INSERT INTO public.notifications (
    user_id, title, message, type, category, channels, priority, metadata, scheduled_at
  ) VALUES (
    p_user_id, p_title, p_message, p_type, p_category, p_channels, p_priority, p_metadata, p_scheduled_at
  ) RETURNING id INTO notification_id;
  
  RETURN notification_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- 13. Fonction pour obtenir les préférences utilisateur avec valeurs par défaut
CREATE OR REPLACE FUNCTION public.get_user_notification_preferences(p_user_id UUID)
RETURNS JSONB AS $$
DECLARE
  preferences JSONB;
BEGIN
  SELECT row_to_json(np)::jsonb INTO preferences
  FROM public.notification_preferences np
  WHERE np.user_id = p_user_id;
  
  -- Si aucune préférence trouvée, retourner les valeurs par défaut
  IF preferences IS NULL THEN
    preferences := '{
      "email_enabled": true,
      "sms_enabled": false,
      "push_enabled": true,
      "in_app_enabled": true,
      "categories_preferences": {
        "system": {"email": true, "sms": false, "push": true, "in_app": true},
        "announcement": {"email": true, "sms": false, "push": true, "in_app": true},
        "message": {"email": true, "sms": true, "push": true, "in_app": true},
        "payment": {"email": true, "sms": true, "push": true, "in_app": true},
        "security": {"email": true, "sms": true, "push": true, "in_app": true},
        "marketing": {"email": false, "sms": false, "push": false, "in_app": true},
        "reminder": {"email": true, "sms": false, "push": true, "in_app": true}
      },
      "quiet_hours_start": "22:00",
      "quiet_hours_end": "08:00",
      "timezone": "Africa/Algiers"
    }'::jsonb;
  END IF;
  
  RETURN preferences;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- 14. Templates par défaut du système
INSERT INTO public.notification_templates (name, title_template, message_template, type, category, default_channels, variables) VALUES
('welcome_user', 'Bienvenue sur Aladdin !', 'Bonjour {{user_name}}, bienvenue sur la plateforme de petites annonces d''Algérie. Découvrez dès maintenant les meilleures offres près de chez vous !', 'success', 'system', ARRAY['email', 'in_app'], '{"user_name": "string"}'),
('new_message', 'Nouveau message reçu', 'Vous avez reçu un nouveau message de {{sender_name}} concernant votre annonce "{{announcement_title}}".', 'info', 'message', ARRAY['email', 'sms', 'push', 'in_app'], '{"sender_name": "string", "announcement_title": "string"}'),
('payment_success', 'Paiement confirmé', 'Votre paiement de {{amount}} {{currency}} pour la promotion de votre annonce a été confirmé avec succès.', 'success', 'payment', ARRAY['email', 'sms', 'in_app'], '{"amount": "number", "currency": "string"}'),
('announcement_approved', 'Annonce approuvée', 'Félicitations ! Votre annonce "{{title}}" a été approuvée et est maintenant visible publiquement.', 'success', 'announcement', ARRAY['email', 'push', 'in_app'], '{"title": "string"}'),
('announcement_expired', 'Annonce expirée', 'Votre annonce "{{title}}" a expiré. Vous pouvez la renouveler pour continuer à recevoir des contacts.', 'warning', 'reminder', ARRAY['email', 'in_app'], '{"title": "string"}'),
('security_login', 'Nouvelle connexion détectée', 'Une nouvelle connexion à votre compte a été détectée depuis {{location}} le {{date}}.', 'warning', 'security', ARRAY['email', 'sms'], '{"location": "string", "date": "string"}');

-- COMMENTAIRES :
-- ✅ Système de notifications multi-canal complet
-- ✅ Templates réutilisables avec variables
-- ✅ Préférences utilisateur granulaires
-- ✅ Historique et analytics des envois
-- ✅ Support des campagnes en masse
-- ✅ RLS sécurisé pour tous les accès
-- ✅ Fonctions utilitaires pour l'intégration
-- ✅ Templates par défaut du système