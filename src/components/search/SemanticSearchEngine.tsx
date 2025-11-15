import React, { useState, useEffect, useMemo } from 'react';
import { Brain, Zap, Target, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useSmartSearch } from '@/hooks/useSmartSearch';

interface SemanticSearchEngineProps {
  query: string;
  onSemanticResult: (results: SemanticResult[]) => void;
  isActive: boolean;
}

interface SemanticResult {
  id: string;
  title: string;
  description: string;
  semanticScore: number;
  keywords: string[];
  category: string;
  synonyms: string[];
  relatedConcepts: string[];
}

interface ConceptEmbedding {
  concept: string;
  vector: number[];
  category: string;
  synonyms: string[];
}

const SemanticSearchEngine: React.FC<SemanticSearchEngineProps> = ({
  query,
  onSemanticResult,
  isActive
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [semanticResults, setSemanticResults] = useState<SemanticResult[]>([]);
  const [conceptSuggestions, setConceptSuggestions] = useState<string[]>([]);
  const { trackUserPattern } = useSmartSearch();

  // Base de données de concepts sémantiques pour l'immobilier/mobilier
  const conceptDatabase: ConceptEmbedding[] = useMemo(() => [
    {
      concept: 'meuble de salon',
      vector: [0.8, 0.6, 0.7, 0.5, 0.9],
      category: 'mobilier',
      synonyms: ['canapé', 'fauteuil', 'table basse', 'bibliothèque', 'TV stand']
    },
    {
      concept: 'électroménager cuisine',
      vector: [0.7, 0.9, 0.6, 0.8, 0.5],
      category: 'électroménager',
      synonyms: ['réfrigérateur', 'four', 'micro-ondes', 'lave-vaisselle', 'cuisinière']
    },
    {
      concept: 'logement familial',
      vector: [0.9, 0.7, 0.8, 0.6, 0.7],
      category: 'immobilier',
      synonyms: ['appartement', 'villa', 'maison', 'F3', 'F4', 'duplex']
    },
    {
      concept: 'véhicule personnel',
      vector: [0.6, 0.8, 0.9, 0.7, 0.6],
      category: 'automobile',
      synonyms: ['voiture', 'auto', 'véhicule', 'citadine', 'berline', 'SUV']
    },
    {
      concept: 'technologie mobile',
      vector: [0.5, 0.7, 0.6, 0.9, 0.8],
      category: 'électronique',
      synonyms: ['smartphone', 'téléphone', 'tablette', 'ordinateur portable', 'laptop']
    },
    {
      concept: 'espace de repos',
      vector: [0.8, 0.5, 0.7, 0.6, 0.9],
      category: 'mobilier',
      synonyms: ['lit', 'matelas', 'chambre', 'coucher', 'sommier', 'dressing']
    },
    {
      concept: 'appareils ménagers',
      vector: [0.7, 0.8, 0.5, 0.7, 0.6],
      category: 'électroménager',
      synonyms: ['lave-linge', 'aspirateur', 'fer à repasser', 'nettoyage', 'entretien']
    }
  ], []);

  // Algorithme de similarité cosinus
  const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
    if (vecA.length !== vecB.length) return 0;
    
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    
    if (magnitudeA === 0 || magnitudeB === 0) return 0;
    return dotProduct / (magnitudeA * magnitudeB);
  };

  // Extraction de vecteur simple basé sur les mots-clés
  const extractQueryVector = (query: string): number[] => {
    const keywords = query.toLowerCase().split(/\s+/);
    const vector = [0, 0, 0, 0, 0]; // 5 dimensions pour cet exemple
    
    // Analyse lexicale simple pour générer un vecteur
    keywords.forEach(keyword => {
      // Dimension 0: Mobilier/décoration
      if (['meuble', 'table', 'chaise', 'lit', 'armoire', 'canapé', 'fauteuil', 'décoration'].some(w => keyword.includes(w))) {
        vector[0] += 0.2;
      }
      
      // Dimension 1: Électroménager/technique
      if (['électroménager', 'frigo', 'four', 'lave', 'aspirateur', 'réfrigérateur'].some(w => keyword.includes(w))) {
        vector[1] += 0.2;
      }
      
      // Dimension 2: Immobilier
      if (['appartement', 'maison', 'villa', 'logement', 'location', 'vente', 'terrain'].some(w => keyword.includes(w))) {
        vector[2] += 0.2;
      }
      
      // Dimension 3: Automobile
      if (['voiture', 'auto', 'véhicule', 'moto', 'scooter', 'camion'].some(w => keyword.includes(w))) {
        vector[3] += 0.2;
      }
      
      // Dimension 4: Électronique
      if (['téléphone', 'ordinateur', 'tv', 'smartphone', 'tablette', 'électronique'].some(w => keyword.includes(w))) {
        vector[4] += 0.2;
      }
    });
    
    // Normalisation
    const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0));
    return magnitude > 0 ? vector.map(v => v / magnitude) : vector;
  };

  // Génération de concepts liés intelligents
  const generateRelatedConcepts = (query: string, topConcepts: ConceptEmbedding[]): string[] => {
    const relatedConcepts = new Set<string>();
    
    topConcepts.forEach(concept => {
      concept.synonyms.forEach(synonym => {
        // Vérifier la pertinence contextuelle
        if (!query.toLowerCase().includes(synonym.toLowerCase())) {
          relatedConcepts.add(synonym);
        }
      });
    });
    
    return Array.from(relatedConcepts).slice(0, 6);
  };

  // Recherche sémantique principale
  const performSemanticSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || !isActive) return;
    
    setIsProcessing(true);
    
    try {
      const queryVector = extractQueryVector(searchQuery);
      
      // Calcul des similarités avec tous les concepts
      const conceptSimilarities = conceptDatabase.map(concept => ({
        concept,
        similarity: cosineSimilarity(queryVector, concept.vector)
      })).sort((a, b) => b.similarity - a.similarity);
      
      // Sélection des concepts les plus pertinents
      const topConcepts = conceptSimilarities
        .filter(item => item.similarity > 0.1)
        .slice(0, 5)
        .map(item => item.concept);
      
      // Génération des résultats sémantiques
      const results: SemanticResult[] = topConcepts.map((concept, index) => ({
        id: `semantic_${index}`,
        title: concept.concept,
        description: `Recherche sémantique pour "${concept.concept}" - ${concept.synonyms.slice(0, 3).join(', ')}`,
        semanticScore: conceptSimilarities[index].similarity,
        keywords: concept.synonyms,
        category: concept.category,
        synonyms: concept.synonyms,
        relatedConcepts: generateRelatedConcepts(searchQuery, topConcepts)
      }));
      
      setSemanticResults(results);
      setConceptSuggestions(generateRelatedConcepts(searchQuery, topConcepts));
      onSemanticResult(results);
      
      // Tracking pour l'apprentissage
      trackUserPattern(
        [searchQuery],
        ['semantic_search'],
        1000,
        false,
        'exploration'
      );
      
    } catch (error) {
      console.error('Erreur recherche sémantique:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (query && isActive) {
      const debounceTimer = setTimeout(() => {
        performSemanticSearch(query);
      }, 300);
      
      return () => clearTimeout(debounceTimer);
    }
  }, [query, isActive]);

  if (!isActive || !query) return null;

  return (
    <Card className="p-4 mt-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
      <div className="flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h3 className="font-semibold text-purple-900 dark:text-purple-100">
          Recherche Sémantique IA
        </h3>
        {isProcessing && (
          <Zap className="w-4 h-4 text-purple-500 animate-pulse" />
        )}
      </div>
      
      {semanticResults.length > 0 && (
        <div className="space-y-3">
          <div className="grid gap-2">
            {semanticResults.slice(0, 3).map((result) => (
              <div
                key={result.id}
                className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm text-gray-900 dark:text-slate-100">
                    {result.title}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(result.semanticScore * 100)}% similaire
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {result.keywords.slice(0, 4).map((keyword, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-600"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-xs text-gray-600 dark:text-slate-400">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
          
          {conceptSuggestions.length > 0 && (
            <div className="border-t border-purple-200 dark:border-purple-700 pt-3">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-900 dark:text-purple-100">
                  Concepts connexes suggérés:
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {conceptSuggestions.map((suggestion, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="text-xs border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    onClick={() => performSemanticSearch(suggestion)}
                  >
                    <Target className="w-3 h-3 mr-1" />
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {isProcessing && (
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
            <Brain className="w-4 h-4 animate-pulse" />
            Analyse sémantique en cours...
          </div>
        </div>
      )}
    </Card>
  );
};

export default SemanticSearchEngine;