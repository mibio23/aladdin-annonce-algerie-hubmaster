import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock } from 'lucide-react';
import OptimizedImage from '@/components/common/OptimizedImage';

// Mock data pour les aperçus d'annonces
const mockAnnouncements = [
  {
    id: '1',
    title: 'Volkswagen Golf VII 2018',
    price: 2500000,
    location: 'Alger Centre',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop',
    category: 'Véhicules',
    date: '2024-01-15',
    isProfessional: false,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Appartement F3 Vue sur mer',
    price: 15000000,
    location: 'Oran',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
    category: 'Immobilier',
    date: '2024-01-16',
    isProfessional: true,
    isFeatured: false
  },
  {
    id: '3',
    title: 'iPhone 15 Pro Max 256GB',
    price: 250000,
    location: 'Constantine',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
    category: 'Téléphonie',
    date: '2024-01-17',
    isProfessional: false,
    isFeatured: false
  },
  {
    id: '4',
    title: 'Canapé 3 places comme neuf',
    price: 85000,
    location: 'Annaba',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop',
    category: 'Ameublement',
    date: '2024-01-18',
    isProfessional: false,
    isFeatured: false
  }
];

const AnnouncementPreviewCards = React.memo(() => {
  const memoizedAnnouncements = useMemo(() => mockAnnouncements.slice(0, 4), []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {memoizedAnnouncements.map((announcement) => (
        <Card key={announcement.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <OptimizedImage
              src={announcement.imageUrl} 
              alt={announcement.title}
              className="w-full h-48"
              width={300}
              height={200}
            />
            {announcement.isFeatured && (
              <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                À la une
              </Badge>
            )}
            {announcement.isProfessional && (
              <Badge className="absolute top-2 right-2 bg-blue-500">
                Pro
              </Badge>
            )}
          </div>
          
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {announcement.title}
            </h3>
           
            <p className="text-2xl font-bold text-primary mb-3">
              {announcement.price.toLocaleString('fr-DZ')} DA
            </p>
           
            <div className="flex items-center text-muted-foreground text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{announcement.location}</span>
            </div>
           
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{new Date(announcement.date).toLocaleDateString('fr-FR')}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});

AnnouncementPreviewCards.displayName = 'AnnouncementPreviewCards';

export default AnnouncementPreviewCards;