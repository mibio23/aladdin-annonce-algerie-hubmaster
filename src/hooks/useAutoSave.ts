import { useEffect, useRef, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface AutoSaveOptions {
  interval?: number;
  enableCloudSync?: boolean;
  tableName?: string;
  userId?: string;
}

export const useAutoSave = (data: any, key: string, options: AutoSaveOptions = {}) => {
  const { interval = 30000, enableCloudSync = false, tableName = 'user_drafts', userId } = options;
  const { toast } = useToast();
  const { user } = useAuth();
  const lastSaveRef = useRef<Date | null>(null);
  const isSavingRef = useRef(false);
  
  // Sauvegarde locale
  const saveToLocal = useCallback((saveData: any) => {
    try {
      localStorage.setItem(key, JSON.stringify({
        data: saveData,
        timestamp: new Date().toISOString()
      }));
      lastSaveRef.current = new Date();
    } catch (error) {
      console.error('Local auto-save failed:', error);
    }
  }, [key]);
  
  // Sauvegarde sur Supabase
  const saveToCloud = useCallback(async (saveData: any) => {
    if (!enableCloudSync || !user || isSavingRef.current) return;
    
    try {
      isSavingRef.current = true;
      
      const { error } = await supabase
        .from(tableName as any)
        .upsert({
          user_id: userId || user?.id,
          draft_key: key,
          draft_data: saveData,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,draft_key'
        });
      
      if (error) {
        console.error('Cloud auto-save failed:', error);
        // En cas d'erreur, on garde la sauvegarde locale
        return false;
      }
      
      lastSaveRef.current = new Date();
      return true;
    } catch (error) {
      console.error('Cloud auto-save error:', error);
      return false;
    } finally {
      isSavingRef.current = false;
    }
  }, [enableCloudSync, user, tableName, userId, key]);
  
  // Sauvegarde principale
  const saveData = useCallback(async () => {
    try {
      // Toujours sauvegarder en local d'abord
      saveToLocal(data);
      
      // Puis essayer la sauvegarde cloud si activée
      if (enableCloudSync && user) {
        const cloudSuccess = await saveToCloud(data);
        
        if (cloudSuccess) {
          toast({
            title: "Sauvegardé avec succès",
            description: "Vos données sont sauvegardées localement et dans le cloud",
            duration: 2000,
          });
        } else {
          toast({
            title: "Brouillon sauvegardé localement",
            description: "La synchronisation cloud a échoué, vos données sont sauvegardées localement",
            duration: 3000,
          });
        }
      } else {
        toast({
          title: "Brouillon sauvegardé",
          description: "Vos données ont été sauvegardées automatiquement",
          duration: 2000,
        });
      }
    } catch (error) {
      console.error('Auto-save failed:', error);
      toast({
        title: "Erreur de sauvegarde",
        description: "Impossible de sauvegarder vos données",
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [data, saveToLocal, saveToCloud, enableCloudSync, user, toast]);
  
  // Charger depuis le localStorage
  const loadLocalDraft = useCallback(() => {
    try {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        return parsed.data;
      }
    } catch (error) {
      console.error('Failed to load local draft:', error);
    }
    return null;
  }, [key]);
  
  // Charger depuis Supabase
  const loadCloudDraft = useCallback(async () => {
    if (!enableCloudSync || !user) return null;
    
    try {
      const { data, error } = await supabase
        .from(tableName as any)
        .select('draft_data, updated_at')
        .eq('user_id', userId || user?.id)
        .eq('draft_key', key)
        .single();
      
      if (error) {
        console.error('Failed to load cloud draft:', error);
        return null;
      }
      
      return (data as any)?.draft_data;
    } catch (error) {
      console.error('Cloud draft load error:', error);
      return null;
    }
  }, [enableCloudSync, user, tableName, userId, key]);
  
  // Charger le brouillon le plus récent
  const loadDraft = useCallback(async () => {
    const localDraft = loadLocalDraft();
    const cloudDraft = await loadCloudDraft();
    
    // Comparer les timestamps pour choisir le plus récent
    if (localDraft && cloudDraft) {
      const localTimestamp = localStorage.getItem(`${key}_timestamp`);
      const cloudData = await supabase
        .from(tableName as any)
        .select('updated_at')
        .eq('user_id', userId || user?.id)
        .eq('draft_key', key)
        .single();
      
      if (cloudData.data) {
        const localTime = new Date(localTimestamp || '');
        const cloudTime = new Date((cloudData.data as any).updated_at);
        
        if (cloudTime > localTime) {
          return cloudDraft;
        }
      }
    }
    
    return cloudDraft || localDraft;
  }, [loadLocalDraft, loadCloudDraft, key, userId, user]);
  
  // Nettoyer les brouillons
  const clearDraft = useCallback(async () => {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_timestamp`);
    
    if (enableCloudSync && user) {
      try {
        await supabase
          .from(tableName as any)
          .delete()
          .eq('user_id', userId || user?.id)
          .eq('draft_key', key);
      } catch (error) {
        console.error('Failed to clear cloud draft:', error);
      }
    }
  }, [key, enableCloudSync, user, tableName, userId]);
  
  // Synchronisation automatique
  useEffect(() => {
    const intervalId = setInterval(saveData, interval);
    return () => clearInterval(intervalId);
  }, [saveData, interval]);
  
  // Sauvegarde avant de quitter la page
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveToLocal(data);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [data, saveToLocal]);
  
  return {
    loadDraft,
    clearDraft,
    saveData: saveData,
    lastSave: lastSaveRef.current,
    isSaving: isSavingRef.current
  };
};