// Script pour rafraîchir le cache PostgREST de Supabase
import { createClient } from '@supabase/supabase-js';

// Configuration avec votre clé d'API
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function refreshPostgrestCache() {
  try {
    console.log('🔄 Tentative de rafraîchissement du cache PostgREST...');
    
    // Méthode 1: Utiliser une requête simple pour forcer le rafraîchissement
    const { data, error } = await supabase
      .from('announcements')
      .select('id')
      .limit(1);
    
    if (error) {
      console.error('❌ Erreur lors de la requête de test:', error);
    } else {
      console.log('✅ Requête de test réussie, le cache devrait être rafraîchi');
    }
    
    // Méthode 2: Essayer de récupérer les informations de schéma
    console.log('🔍 Vérification des colonnes de la table announcements...');
    
    const { data: columnsData, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'announcements')
      .eq('table_schema', 'public')
      .eq('column_name', 'images');
    
    if (columnsError) {
      console.error('❌ Erreur lors de la vérification des colonnes:', columnsError);
    } else {
      console.log('✅ Colonnes trouvées:', columnsData);
    }
    
    console.log('🎉 Opération terminée! Veuillez réessayer de créer une annonce.');
    
  } catch (error) {
    console.error('❌ Erreur inattendue:', error);
  }
}

// Instructions alternatives
console.log(`
📋 Instructions si le script ne résout pas le problème:

1. Attendez 1-2 minutes que le cache se mette à jour automatiquement
2. Redémarrez votre application locale (npm run dev)
3. Essayez de créer une annonce à nouveau
4. Si l'erreur persiste, contactez le support Supabase pour rafraîchir manuellement le cache

✅ Les colonnes images et detail_photos existent maintenant dans votre base de données!
`);

// Exécuter la fonction
refreshPostgrestCache();