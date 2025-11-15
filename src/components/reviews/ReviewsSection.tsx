import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  reviewedUserId: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviewedUserId: _reviewedUserId }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Avis et Évaluations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12 text-muted-foreground">
          <Star className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Aucun avis pour le moment</p>
          <p className="text-sm">Soyez le premier à laisser un avis</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;