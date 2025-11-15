import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Eye, MessageCircle, Grid3X3, List } from 'lucide-react';
import { Announcement } from '@/hooks/useAnnouncements';

interface MapViewProps {
  announcements: Announcement[];
  onViewAnnouncement: (announcement: Announcement) => void;
  onContactSeller: (announcement: Announcement) => void;
  onSwitchToGrid: () => void;
}

const MapView: React.FC<MapViewProps> = ({
  announcements,
  onViewAnnouncement,
  onContactSeller,
  onSwitchToGrid
}) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  // Mock coordinates for demonstration (would be geocoded from location in real app)
  const getCoordinatesForLocation = (location: string): [number, number] => {
    // Mock coordinates for major Algerian cities
    const locationCoords: Record<string, [number, number]> = {
      'alger': [36.7372, 3.0865],
      'oran': [35.6976, -0.6337],
      'constantine': [36.3650, 6.6147],
      'annaba': [36.9147, 7.7622],
      'blida': [36.4203, 2.8277],
      'batna': [35.5559, 6.1741],
      'djelfa': [34.6751, 3.2630],
      'setif': [36.1905, 5.4064],
      'sidi bel abbes': [35.1977, -0.6388],
      'biskra': [34.8481, 5.7281]
    };
    
    const key = location.toLowerCase();
    return locationCoords[key] || [36.7538, 3.0588]; // Default to Algiers center
  };

  const groupedByLocation = announcements.reduce((acc, announcement) => {
    const location = announcement.location || 'Non spécifié';
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(announcement);
    return acc;
  }, {} as Record<string, Announcement[]>);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Map Area (Mock) */}
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Carte des résultats
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={onSwitchToGrid}
                className="flex items-center gap-2"
              >
                <Grid3X3 className="h-4 w-4" />
                Vue grille
              </Button>
            </div>
          </CardHeader>
          <CardContent className="h-[calc(100%-5rem)]">
            {/* Mock Map Interface */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40h-40v40zm40-40v40'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Mock Location Pins */}
              {Object.entries(groupedByLocation).map(([location, locationAnnouncements], _index) => {
                const [lat, lng] = getCoordinatesForLocation(location);
                // Convert coordinates to screen position (mock)
                const x = Math.min(Math.max((lng + 180) * (100 / 360), 10), 90);
                const y = Math.min(Math.max((90 - lat) * (100 / 180), 10), 90);
                
                return (
                  <div
                    key={location}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onClick={() => setSelectedAnnouncement(locationAnnouncements[0])}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {locationAnnouncements.length}
                      </div>
                      {locationAnnouncements.length > 1 && (
                        <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                          {locationAnnouncements.length}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {location} ({locationAnnouncements.length})
                    </div>
                  </div>
                );
              })}
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">+</Button>
                <Button variant="outline" size="sm" className="w-8 h-8 p-0">-</Button>
              </div>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                <div className="font-medium mb-2">Légende</div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Annonces disponibles</span>
                </div>
                <div className="text-muted-foreground">
                  Cliquez sur un marqueur pour voir les détails
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar with announcement details */}
      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <List className="h-5 w-5" />
              {selectedAnnouncement ? 'Détails' : 'Sélectionnez une zone'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedAnnouncement ? (
              <div className="space-y-4">
                {/* Selected announcement details */}
                <div>
                  <img 
                    src={selectedAnnouncement.images[0] || '/placeholder.svg'} 
                    alt={selectedAnnouncement.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">{selectedAnnouncement.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mt-1">
                    {selectedAnnouncement.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {selectedAnnouncement.price.toLocaleString('fr-DZ')} {selectedAnnouncement.currency}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-3 w-3" />
                    {selectedAnnouncement.location}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => onViewAnnouncement(selectedAnnouncement)}
                    className="flex-1"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Voir
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => onContactSeller(selectedAnnouncement)}
                    className="flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                </div>
                
                {/* Other announcements in the same location */}
                {groupedByLocation[selectedAnnouncement.location]?.length > 1 && (
                  <div>
                    <h4 className="font-medium text-sm mb-2">
                      Autres annonces à {selectedAnnouncement.location}
                    </h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {groupedByLocation[selectedAnnouncement.location]
                        .filter(a => a.id !== selectedAnnouncement.id)
                        .slice(0, 3)
                        .map((announcement) => (
                        <div 
                          key={announcement.id}
                          className="p-2 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => setSelectedAnnouncement(announcement)}
                        >
                          <div className="font-medium text-sm">{announcement.title}</div>
                          <div className="text-xs text-primary font-medium">
                            {announcement.price.toLocaleString('fr-DZ')} {announcement.currency}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Cliquez sur un marqueur de la carte pour voir les détails des annonces</p>
                <div className="mt-4 space-y-2 text-sm">
                  {Object.entries(groupedByLocation).map(([location, announcements]) => (
                    <div 
                      key={location}
                      className="flex justify-between cursor-pointer hover:bg-muted/50 p-2 rounded"
                      onClick={() => setSelectedAnnouncement(announcements[0])}
                    >
                      <span>{location}</span>
                      <Badge variant="secondary">{announcements.length}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapView;
