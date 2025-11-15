import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Configuration
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzIxOTUwNiwiZXhwIjoyMDYyNzk1NTA2fQ.BhIaHkYz5hKqL7qJ8Qm9tF3kP2nR5sS6tU7vW8xY9zA';

// Créer le client Supabase avec le rôle de service
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixImagesColumn() {
  try {
    console.log('🔧 Début de la correction de la colonne images...');
    
    // Lire le fichier SQL
    const sqlPath = path.join(process.cwd(), 'ajouter-colonne-images-announcements.sql');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('📄 Fichier SQL lu avec succès');
    
    // Exécuter le SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sqlContent });
    
    if (error) {
      console.error('❌ Erreur lors de l\'exécution du SQL:', error);
      
      // Alternative: essayer avec SQL direct via REST API
      console.log('🔄 Tentative avec une approche alternative...');
      
      try {
        // Vérifier si la colonne images existe
        const { data: columns, error: columnsError } = await supabase
          .from('information_schema.columns')
          .select('column_name')
          .eq('table_name', 'announcements')
          .eq('column_name', 'images')
          .eq('table_schema', 'public');
        
        if (columnsError) {
          console.error('❌ Erreur lors de la vérification des colonnes:', columnsError);
          return;
        }
        
        if (!columns || columns.length === 0) {
          console.log('➕ La colonne images n\'existe pas, tentative d\'ajout...');
          
          // Utiliser l'API REST pour exécuter le SQL
          const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            },
            body: JSON.stringify({
              sql_query: `ALTER TABLE public.announcements ADD COLUMN IF NOT EXISTS images TEXT[];`
            })
          });
          
          if (response.ok) {
            console.log('✅ Colonne images ajoutée avec succès!');
          } else {
            console.error('❌ Erreur lors de l\'ajout de la colonne:', await response.text());
          }
        } else {
          console.log('✅ La colonne images existe déjà');
        }
        
        // Vérifier si la colonne detail_photos existe
        const { data: detailColumns, error: detailColumnsError } = await supabase
          .from('information_schema.columns')
          .select('column_name')
          .eq('table_name', 'announcements')
          .eq('column_name', 'detail_photos')
          .eq('table_schema', 'public');
        
        if (detailColumnsError) {
          console.error('❌ Erreur lors de la vérification des colonnes detail_photos:', detailColumnsError);
          return;
        }
        
        if (!detailColumns || detailColumns.length === 0) {
          console.log('➕ La colonne detail_photos n\'existe pas, tentative d\'ajout...');
          
          const detailResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            },
            body: JSON.stringify({
              sql_query: `ALTER TABLE public.announcements ADD COLUMN IF NOT EXISTS detail_photos TEXT[];`
            })
          });
          
          if (detailResponse.ok) {
            console.log('✅ Colonne detail_photos ajoutée avec succès!');
          } else {
            console.error('❌ Erreur lors de l\'ajout de la colonne detail_photos:', await detailResponse.text());
          }
        } else {
          console.log('✅ La colonne detail_photos existe déjà');
        }
        
      } catch (alternativeError) {
        console.error('❌ Erreur avec l\'approche alternative:', alternativeError);
      }
    } else {
      console.log('✅ SQL exécuté avec succès:', data);
    }
    
    // Recharger le cache du schéma
    console.log('🔄 Rechargement du cache du schéma...');
    await supabase.postgrest.reloadSchema();
    
    console.log('🎉 Correction terminée! Veuillez réessayer de créer une annonce.');
    
  } catch (error) {
    console.error('❌ Erreur inattendue:', error);
  }
}

// Instructions manuelles si le script ne fonctionne pas
console.log(`
📋 Instructions manuelles si le script ne fonctionne pas:

1. Allez dans le dashboard Supabase: https://app.supabase.com/project/smsvybphkdxzvgawzoru
2. Cliquez sur "SQL Editor" dans le menu de gauche
3. Copiez et collez le contenu du fichier "ajouter-colonne-images-announcements.sql"
4. Cliquez sur "Run" pour exécuter le script
5. Attendez quelques secondes que le cache du schéma se mette à jour
6. Réessayez de créer une annonce

🔍 Si le problème persiste, vérifiez que:
- Vous avez les permissions nécessaires sur la base de données
- La table announcements existe bien
- Aucune autre erreur ne bloque la création d'annonces
`);

// Exécuter la fonction
fixImagesColumn();