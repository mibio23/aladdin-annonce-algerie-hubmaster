#!/usr/bin/env node

/**
 * Script pour créer un utilisateur admin dans Supabase
 * Utilisation: node create-admin.js VOTRE_UUID_UTILISATEUR
 */

import { createClient } from '@supabase/supabase-js';

// Configuration Supabase
const supabaseUrl = 'https://smsvybphkdxzvgawzoru.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3Z5YnBoa2R4enZnYXd6b3J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTk1MDYsImV4cCI6MjA2Mjc5NTUwNn0.BnS7qmTl1a4htjiv3qN7zyjZ04DZgdV7N6Z0a0AU40g';

// Créer le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour créer un utilisateur admin
async function createAdmin(userId) {
  if (!userId) {
    console.error('❌ Erreur: Veuillez fournir un ID utilisateur.');
    console.log('Usage: node create-admin.js VOTRE_UUID_UTILISATEUR');
    process.exit(1);
  }

  // Valider le format de l'UUID
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(userId)) {
    console.error('❌ Erreur: L\'ID utilisateur fourni n\'est pas un UUID valide.');
    process.exit(1);
  }

  try {
    console.log(`👤 Création de l\'utilisateur admin avec l'ID: ${userId}`);
    
    // Insérer le rôle admin
    const { data, error } = await supabase
      .from('user_roles')
      .insert({
        user_id: userId,
        role: 'admin',
        granted_by: userId
      })
      .select();

    if (error) {
      if (error.code === '23505') {
        console.log('⚠️ Cet utilisateur a déjà un rôle. Vérification du rôle existant...');
        
        // Vérifier si l'utilisateur a déjà le rôle admin
        const { data: existingRole, error: fetchError } = await supabase
          .from('user_roles')
          .select('role, is_active')
          .eq('user_id', userId)
          .eq('role', 'admin')
          .single();
        
        if (fetchError) {
          console.error('❌ Erreur lors de la vérification du rôle existant:', fetchError.message);
          process.exit(1);
        }
        
        if (existingRole) {
          if (existingRole.is_active) {
            console.log('✅ Cet utilisateur est déjà un admin actif!');
            console.log('Aucune action supplémentaire nécessaire.');
          } else {
            console.log('⚠️ Cet utilisateur a un rôle admin mais il est inactif.');
            console.log('Activation du rôle admin...');
            
            const { error: updateError } = await supabase
              .from('user_roles')
              .update({ is_active: true })
              .eq('user_id', userId)
              .eq('role', 'admin');
            
            if (updateError) {
              console.error('❌ Erreur lors de l\'activation du rôle admin:', updateError.message);
              process.exit(1);
            }
            
            console.log('✅ Rôle admin activé avec succès!');
          }
        } else {
          console.log('ℹ️ Cet utilisateur a un autre rôle mais pas le rôle admin.');
          console.log('Ajout du rôle admin...');
          
          const { error: insertError } = await supabase
            .from('user_roles')
            .insert({
              user_id: userId,
              role: 'admin',
              granted_by: userId
            });
          
          if (insertError) {
            console.error('❌ Erreur lors de l\'ajout du rôle admin:', insertError.message);
            process.exit(1);
          }
          
          console.log('✅ Rôle admin ajouté avec succès!');
        }
      } else {
        console.error('❌ Erreur lors de la création du rôle admin:', error.message);
        process.exit(1);
      }
    } else {
      console.log('✅ Rôle admin créé avec succès!');
      console.log('Données:', data);
    }

    // Vérifier que l'utilisateur a bien le rôle admin
    console.log('\n🔍 Vérification des permissions...');
    const { data: roles, error: rolesError } = await supabase
      .from('user_roles')
      .select('role, is_active, granted_at')
      .eq('user_id', userId);
    
    if (rolesError) {
      console.error('❌ Erreur lors de la vérification des rôles:', rolesError.message);
    } else {
      console.log('Rôles de l\'utilisateur:');
      roles.forEach(role => {
        console.log(`- ${role.role} (${role.is_active ? 'actif' : 'inactif'}) - accordé le ${new Date(role.granted_at).toLocaleString()}`);
      });
    }

    console.log('\n🎉 Configuration terminée!');
    console.log('Vous pouvez maintenant vous connecter à votre application et accéder à /admin');

  } catch (err) {
    console.error('❌ Erreur inattendue:', err.message);
    process.exit(1);
  }
}

// Fonction pour trouver un utilisateur par email
async function findUserByEmail(email) {
  try {
    console.log(`🔍 Recherche de l'utilisateur avec l'email: ${email}`);
    
    // Cette fonction nécessite des permissions élevées et pourrait ne pas fonctionner avec une clé publique
    const { data, error } = await supabase
      .rpc('get_user_by_email', { user_email: email });
    
    if (error) {
      console.error('❌ Erreur lors de la recherche de l\'utilisateur:', error.message);
      console.log('💡 Cette fonctionnalité nécessite des permissions élevées.');
      console.log('💡 Veuillez trouver l\'ID utilisateur manuellement via le dashboard Supabase.');
      return null;
    }
    
    if (data && data.length > 0) {
      console.log(`✅ Utilisateur trouvé: ${data[0].id}`);
      return data[0].id;
    } else {
      console.log('❌ Aucun utilisateur trouvé avec cet email.');
      return null;
    }
  } catch (err) {
    console.error('❌ Erreur lors de la recherche de l\'utilisateur:', err.message);
    return null;
  }
}

// Fonction principale
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('📋 Utilisation:');
    console.log('  node create-admin.js VOTRE_UUID_UTILISATEUR');
    console.log('');
    console.log('Exemples:');
    console.log('  node create-admin.js 123e4567-e89b-12d3-a456-426614174000');
    console.log('');
    console.log('💡 Pour trouver votre ID utilisateur:');
    console.log('1. Connectez-vous à votre application');
    console.log('2. Ouvrez la console du navigateur (F12)');
    console.log('3. Exécutez: localStorage.getItem(\'supabase.auth.token\')');
    console.log('4. Décodez le JWT pour trouver l\'ID utilisateur');
    console.log('5. Ou trouvez-le directement dans le dashboard Supabase → Authentication → users');
    process.exit(0);
  }

  const userId = args[0];
  
  // Si l'argument ressemble à un email, essayer de trouver l'utilisateur
  if (userId.includes('@')) {
    const foundUserId = await findUserByEmail(userId);
    if (foundUserId) {
      await createAdmin(foundUserId);
    }
  } else {
    await createAdmin(userId);
  }
}

// Exécuter le script
main().catch(console.error);