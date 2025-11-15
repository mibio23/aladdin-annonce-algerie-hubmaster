import React from 'react';
import { Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VisualSearchResult } from './ImageAnalysis';

interface AnalysisResultsProps {
  results: VisualSearchResult[];
  onSearchKeyword: (keyword: string, relatedTerms?: string[]) => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ 
  results, 
  onSearchKeyword 
}) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Éléments détectés</h3>
      </div>
      <div className="space-y-3">
        {results.map((result, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium capitalize">{result.keyword}</span>
                <Badge variant="secondary" className="text-xs">
                  {Math.round(result.confidence * 100)}%
                </Badge>
                {result.category && (
                  <Badge variant="outline" className="text-xs">
                    {result.category}
                  </Badge>
                )}
              </div>
              {result.relatedTerms && result.relatedTerms.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {result.relatedTerms.slice(0, 3).map((term, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {term}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <Button
              onClick={() => onSearchKeyword(result.keyword, result.relatedTerms)}
              size="sm"
              className="ml-2"
            >
              <Search className="w-4 h-4 mr-1" />
              Rechercher
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AnalysisResults;