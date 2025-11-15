-- Créer les tables pour le système IA intelligent

-- Table pour la mémoire conversationnelle
CREATE TABLE IF NOT EXISTS public.conversation_memory (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les données d'apprentissage IA
CREATE TABLE IF NOT EXISTS public.ai_learning_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_input TEXT NOT NULL,
  ai_output TEXT NOT NULL,
  intent_detected TEXT,
  confidence_score DECIMAL(3,2) DEFAULT 0.5,
  feedback_score INTEGER CHECK (feedback_score BETWEEN 1 AND 5),
  improvement_applied BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les profils utilisateurs intelligents
CREATE TABLE IF NOT EXISTS public.user_intelligent_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  preferences JSONB DEFAULT '{}',
  behavior_patterns JSONB DEFAULT '{}',
  search_patterns JSONB DEFAULT '{}',
  interaction_history JSONB DEFAULT '{}',
  predicted_interests JSONB DEFAULT '{}',
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les suggestions d'anticipation
CREATE TABLE IF NOT EXISTS public.anticipation_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  suggestion_type TEXT NOT NULL,
  suggestion_content TEXT NOT NULL,
  context_data JSONB DEFAULT '{}',
  confidence_score DECIMAL(3,2) DEFAULT 0.5,
  is_clicked BOOLEAN DEFAULT false,
  is_helpful BOOLEAN DEFAULT null,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour l'analyse des tendances en temps réel
CREATE TABLE IF NOT EXISTS public.real_time_trends (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL,
  trend_score DECIMAL(10,2) DEFAULT 0,
  search_volume INTEGER DEFAULT 0,
  growth_rate DECIMAL(5,2) DEFAULT 0,
  category TEXT,
  language TEXT DEFAULT 'fr',
  time_period TEXT DEFAULT 'daily',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS sur toutes les tables
ALTER TABLE public.conversation_memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_learning_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_intelligent_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.anticipation_suggestions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.real_time_trends ENABLE ROW LEVEL SECURITY;

-- Politiques RLS (accès public pour le développement, à sécuriser selon les besoins)
CREATE POLICY "Conversation memory access" ON public.conversation_memory FOR ALL USING (true);
CREATE POLICY "AI learning data access" ON public.ai_learning_data FOR ALL USING (true);
CREATE POLICY "User profiles access" ON public.user_intelligent_profiles FOR ALL USING (true);
CREATE POLICY "Anticipation suggestions access" ON public.anticipation_suggestions FOR ALL USING (true);
CREATE POLICY "Real time trends access" ON public.real_time_trends FOR ALL USING (true);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_conversation_memory_session ON public.conversation_memory(session_id);
CREATE INDEX IF NOT EXISTS idx_conversation_memory_created_at ON public.conversation_memory(created_at);
CREATE INDEX IF NOT EXISTS idx_ai_learning_intent ON public.ai_learning_data(intent_detected);
CREATE INDEX IF NOT EXISTS idx_user_profiles_session ON public.user_intelligent_profiles(session_id);
CREATE INDEX IF NOT EXISTS idx_anticipation_session ON public.anticipation_suggestions(session_id);
CREATE INDEX IF NOT EXISTS idx_trends_keyword ON public.real_time_trends(keyword);
CREATE INDEX IF NOT EXISTS idx_trends_score ON public.real_time_trends(trend_score);

-- Triggers pour la mise à jour automatique des timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_conversation_memory_updated_at
  BEFORE UPDATE ON public.conversation_memory
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_learning_data_updated_at
  BEFORE UPDATE ON public.ai_learning_data
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_intelligent_profiles_updated_at
  BEFORE UPDATE ON public.user_intelligent_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_real_time_trends_updated_at
  BEFORE UPDATE ON public.real_time_trends
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();