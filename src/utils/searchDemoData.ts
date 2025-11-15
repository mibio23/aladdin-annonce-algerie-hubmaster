import { supabase } from '@/integrations/supabase/client';

// Données de démonstration pour tester le système de recherche
export const insertDemoSearchData = async () => {
  try {
    console.log('Insertion des données de démonstration...');

    // 1. Insérer des mots-clés populaires
    const popularKeywords = [
      { keyword: 'iPhone', keyword_normalized: 'iphone', search_count: 1250, success_rate: 0.92, trending_score: 85.5 },
      { keyword: 'Samsung Galaxy', keyword_normalized: 'samsung galaxy', search_count: 980, success_rate: 0.88, trending_score: 72.3 },
      { keyword: 'Voiture occasion', keyword_normalized: 'voiture occasion', search_count: 2340, success_rate: 0.76, trending_score: 91.2 },
      { keyword: 'Appartement', keyword_normalized: 'appartement', search_count: 3450, success_rate: 0.68, trending_score: 95.8 },
      { keyword: 'Ordinateur portable', keyword_normalized: 'ordinateur portable', search_count: 780, success_rate: 0.85, trending_score: 67.4 },
      { keyword: 'Réfrigérateur', keyword_normalized: 'refrigerateur', search_count: 560, success_rate: 0.91, trending_score: 54.2 },
      { keyword: 'Machine à laver', keyword_normalized: 'machine a laver', search_count: 450, success_rate: 0.89, trending_score: 48.7 },
      { keyword: 'Télévision', keyword_normalized: 'television', search_count: 670, success_rate: 0.87, trending_score: 62.1 },
      { keyword: 'Moto', keyword_normalized: 'moto', search_count: 890, success_rate: 0.79, trending_score: 71.5 },
      { keyword: 'Meuble salon', keyword_normalized: 'meuble salon', search_count: 340, success_rate: 0.83, trending_score: 41.2 }
    ];

    const { error: keywordsError } = await supabase
      .from('popular_keywords')
      .upsert(popularKeywords, { onConflict: 'keyword_normalized' });

    if (keywordsError) {
      console.warn('Erreur lors de l\'insertion des mots-clés:', keywordsError);
    }

    // 2. Insérer des suggestions de recherche
    const searchSuggestions = [
      { original_query: 'iphone', suggested_query: 'iPhone 15 Pro', suggestion_type: 'expansion', confidence_score: 0.89 },
      { original_query: 'iphone', suggested_query: 'iPhone occasion', suggestion_type: 'related', confidence_score: 0.76 },
      { original_query: 'voiture', suggested_query: 'voiture occasion', suggestion_type: 'expansion', confidence_score: 0.94 },
      { original_query: 'voiture', suggested_query: 'voiture diesel', suggestion_type: 'related', confidence_score: 0.68 },
      { original_query: 'appartement', suggested_query: 'appartement à vendre', suggestion_type: 'expansion', confidence_score: 0.87 },
      { original_query: 'appartement', suggested_query: 'appartement à louer', suggestion_type: 'related', confidence_score: 0.82 },
      { original_query: 'ordinatuer', suggested_query: 'ordinateur', suggestion_type: 'correction', confidence_score: 0.95 },
      { original_query: 'televesion', suggested_query: 'télévision', suggestion_type: 'correction', confidence_score: 0.92 },
      { original_query: 'machina', suggested_query: 'machine', suggestion_type: 'correction', confidence_score: 0.88 },
      { original_query: 'frigo', suggested_query: 'réfrigérateur', suggestion_type: 'expansion', confidence_score: 0.91 }
    ];

    const { error: suggestionsError } = await supabase
      .from('search_suggestions')
      .upsert(searchSuggestions, { onConflict: 'original_query,suggested_query' });

    if (suggestionsError) {
      console.warn('Erreur lors de l\'insertion des suggestions:', suggestionsError);
    }

    // 3. Insérer quelques requêtes de recherche d'exemple
    const searchQueries = [
      { 
        query_text: 'iPhone 15 Pro Max', 
        query_normalized: 'iphone 15 pro max', 
        results_count: 45, 
        search_context: 'electronique',
        language_detected: 'fr' 
      },
      { 
        query_text: 'Voiture BMW d\'occasion', 
        query_normalized: 'voiture bmw occasion', 
        results_count: 23, 
        search_context: 'vehicules',
        language_detected: 'fr' 
      },
      { 
        query_text: 'Appartement 3 pièces Alger', 
        query_normalized: 'appartement 3 pieces alger', 
        results_count: 67, 
        search_context: 'immobilier',
        language_detected: 'fr' 
      },
      { 
        query_text: 'Ordinateur portable gaming', 
        query_normalized: 'ordinateur portable gaming', 
        results_count: 34, 
        search_context: 'electronique',
        language_detected: 'fr' 
      },
      { 
        query_text: 'Réfrigérateur Samsung', 
        query_normalized: 'refrigerateur samsung', 
        results_count: 18, 
        search_context: 'electromenager',
        language_detected: 'fr' 
      }
    ];

    const { error: queriesError } = await supabase
      .from('search_queries')
      .insert(searchQueries);

    if (queriesError) {
      console.warn('Erreur lors de l\'insertion des requêtes:', queriesError);
    }

    console.log('✅ Données de démonstration insérées avec succès !');
    
    return {
      success: true,
      message: 'Données de démonstration insérées avec succès',
      stats: {
        keywords: popularKeywords.length,
        suggestions: searchSuggestions.length,
        queries: searchQueries.length
      }
    };

  } catch (error) {
    console.error('❌ Erreur lors de l\'insertion des données de démonstration:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'insertion des données de démonstration',
      error
    };
  }
};

// Fonction pour nettoyer les données de démonstration
export const cleanDemoData = async () => {
  try {
    console.log('Nettoyage des données de démonstration...');

    // Supprimer les données de test en cascade
    await Promise.all([
      supabase.from('search_results_clicks').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      supabase.from('user_search_patterns').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      supabase.from('search_queries').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      supabase.from('search_suggestions').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      supabase.from('popular_keywords').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    ]);

    console.log('✅ Données de démonstration nettoyées !');
    return { success: true, message: 'Données nettoyées avec succès' };

  } catch (error) {
    console.error('❌ Erreur lors du nettoyage:', error);
    return { success: false, message: 'Erreur lors du nettoyage', error };
  }
};

// Fonction pour vérifier l'état du système
export const checkSystemHealth = async () => {
  try {
    // Vérifier que les tables principales existent et sont accessibles
    const [
      keywordsCheck,
      suggestionsCheck,
      queriesCheck
    ] = await Promise.all([
      supabase.from('popular_keywords').select('id').limit(1),
      supabase.from('search_suggestions').select('id').limit(1),
      supabase.from('search_queries').select('id').limit(1)
    ]);

    const isHealthy = !keywordsCheck.error && !suggestionsCheck.error && !queriesCheck.error;

    return {
      isHealthy,
      tables: {
        popular_keywords: !keywordsCheck.error,
        search_suggestions: !suggestionsCheck.error,
        search_queries: !queriesCheck.error
      },
      errors: {
        popular_keywords: keywordsCheck.error?.message,
        search_suggestions: suggestionsCheck.error?.message,
        search_queries: queriesCheck.error?.message
      }
    };

  } catch (error) {
    console.error('Erreur lors de la vérification du système:', error);
    return {
      isHealthy: false,
      error: error,
      tables: {},
      errors: {}
    };
  }
};