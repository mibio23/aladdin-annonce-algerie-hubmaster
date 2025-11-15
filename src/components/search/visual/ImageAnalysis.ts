import { pipeline, env } from '@huggingface/transformers';

env.allowLocalModels = false;
env.useBrowserCache = true;

export interface VisualSearchResult {
  keyword: string;
  confidence: number;
  category?: string;
  relatedTerms?: string[];
}

export class ImageAnalysis {
  private classifier: any = null;
  private objectDetector: any = null;

  async initializeModels() {
    if (!this.classifier || !this.objectDetector) {
      [this.classifier, this.objectDetector] = await Promise.all([
        pipeline('image-classification', 'microsoft/resnet-50', { device: 'webgpu' }),
        pipeline('object-detection', 'facebook/detr-resnet-50', { device: 'webgpu' })
      ]);
    }
  }

  async analyzeImage(file: Blob, categoryContext?: string): Promise<VisualSearchResult[]> {
    await this.initializeModels();
    
    const imageUrl = URL.createObjectURL(file);
    
    try {
      const [classificationResults, objectResults] = await Promise.all([
        this.classifier(imageUrl),
        this.objectDetector(imageUrl)
      ]);

      const processedResults: VisualSearchResult[] = [];

      // Traiter les résultats de classification
      classificationResults.slice(0, 3).forEach((result: any) => {
        const keyword = result.label.replace(/_/g, ' ').toLowerCase();
        const confidence = result.score;
        
        processedResults.push({
          keyword,
          confidence,
          category: this.mapToCategory(keyword, categoryContext),
          relatedTerms: this.generateRelatedTerms(keyword)
        });
      });

      // Traiter les objets détectés
      objectResults.slice(0, 2).forEach((result: any) => {
        const keyword = result.label.replace(/_/g, ' ').toLowerCase();
        const confidence = result.score;
        
        if (!processedResults.some(r => r.keyword === keyword)) {
          processedResults.push({
            keyword,
            confidence,
            category: this.mapToCategory(keyword, categoryContext),
            relatedTerms: this.generateRelatedTerms(keyword)
          });
        }
      });

      return processedResults.sort((a, b) => b.confidence - a.confidence);
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }

  private mapToCategory(keyword: string, context?: string): string {
    const categoryMappings: { [key: string]: string } = {
      'car': 'vehicules',
      'automobile': 'vehicules',
      'phone': 'telephonie',
      'smartphone': 'telephonie',
      'furniture': 'meubles',
      'chair': 'meubles',
      'table': 'meubles',
      'sofa': 'meubles',
      'clothing': 'mode',
      'shirt': 'mode',
      'dress': 'mode',
      'computer': 'informatique',
      'laptop': 'informatique',
      'monitor': 'informatique',
      'kitchen': 'electromenager',
      'refrigerator': 'electromenager',
      'television': 'multimedia'
    };

    for (const [key, category] of Object.entries(categoryMappings)) {
      if (keyword.includes(key)) {
        return category;
      }
    }

    return context || 'general';
  }

  private generateRelatedTerms(keyword: string): string[] {
    const relatedMappings: { [key: string]: string[] } = {
      'phone': ['mobile', 'smartphone', 'téléphone', 'cellulaire'],
      'car': ['voiture', 'automobile', 'véhicule', 'auto'],
      'chair': ['siège', 'fauteuil', 'chaise', 'assise'],
      'table': ['bureau', 'meuble', 'surface', 'plateau'],
      'computer': ['ordinateur', 'pc', 'laptop', 'informatique'],
      'television': ['tv', 'écran', 'moniteur', 'affichage']
    };

    for (const [key, terms] of Object.entries(relatedMappings)) {
      if (keyword.includes(key)) {
        return terms;
      }
    }

    return [];
  }
}