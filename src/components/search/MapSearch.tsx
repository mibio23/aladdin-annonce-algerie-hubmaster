import { useState } from 'react';
import { MapPin, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { wilayas } from '@/data/wilayaData';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import GeolocationPicker from '@/components/geolocation/GeolocationPicker';
import { GeolocationCoords } from '@/hooks/useGeolocation';

interface MapSearchProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
}

const MapSearch = ({ onLocationSelect }: MapSearchProps) => {
  const { language } = useSafeI18nWithRouter();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  // Coordonnées géographiques pour toutes les wilayas d'Algérie
  const wilayaCoordinates = {
    1: { lat: 27.8667, lng: -0.2833 }, // Adrar
    2: { lat: 36.1667, lng: 1.3333 }, // Chlef
    3: { lat: 33.8, lng: 2.8667 }, // Laghouat
    4: { lat: 35.8742, lng: 7.1136 }, // Oum El Bouaghi
    5: { lat: 35.5667, lng: 6.1833 }, // Batna
    6: { lat: 36.7525, lng: 5.0642 }, // Béjaïa
    7: { lat: 34.85, lng: 5.7167 }, // Biskra
    8: { lat: 31.6167, lng: -2.2167 }, // Béchar
    9: { lat: 36.4203, lng: 2.8277 }, // Blida
    10: { lat: 36.3833, lng: 3.9 }, // Bouira
    11: { lat: 22.785, lng: 5.5228 }, // Tamanrasset
    12: { lat: 35.4, lng: 8.1167 }, // Tébessa
    13: { lat: 34.8780, lng: -1.3157 }, // Tlemcen
    14: { lat: 35.3667, lng: 1.3167 }, // Tiaret
    15: { lat: 36.7167, lng: 4.05 }, // Tizi Ouzou
    16: { lat: 36.7538, lng: 3.0588 }, // Alger
    17: { lat: 34.6667, lng: 3.25 }, // Djelfa
    18: { lat: 36.8167, lng: 5.7667 }, // Jijel
    19: { lat: 36.1833, lng: 5.4 }, // Sétif
    20: { lat: 34.8667, lng: 0.15 }, // Saïda
    21: { lat: 36.8667, lng: 6.9 }, // Skikda
    22: { lat: 35.1833, lng: -0.6333 }, // Sidi Bel Abbès
    23: { lat: 36.9000, lng: 7.7667 }, // Annaba
    24: { lat: 36.4667, lng: 7.4333 }, // Guelma
    25: { lat: 36.3650, lng: 6.6147 }, // Constantine
    26: { lat: 36.2667, lng: 2.75 }, // Médéa
    27: { lat: 35.9333, lng: 0.0833 }, // Mostaganem
    28: { lat: 35.7, lng: 4.4833 }, // M'Sila
    29: { lat: 35.3833, lng: 0.1333 }, // Mascara
    30: { lat: 31.95, lng: 5.3333 }, // Ouargla
    31: { lat: 35.6976, lng: -0.6337 }, // Oran
    32: { lat: 33.6833, lng: 1.0 }, // El Bayadh
    33: { lat: 26.5, lng: 8.4833 }, // Illizi
    34: { lat: 36.0667, lng: 4.7667 }, // Bordj Bou Arreridj
    35: { lat: 36.7667, lng: 3.4833 }, // Boumerdès
    36: { lat: 36.7667, lng: 8.3167 }, // El Tarf
    37: { lat: 27.6667, lng: -8.1333 }, // Tindouf
    38: { lat: 35.6, lng: 1.8167 }, // Tissemsilt
    39: { lat: 33.3667, lng: 6.8667 }, // El Oued
    40: { lat: 35.4333, lng: 7.1333 }, // Khenchela
    41: { lat: 36.2833, lng: 7.95 }, // Souk Ahras
    42: { lat: 36.5833, lng: 2.4333 }, // Tipaza
    43: { lat: 36.45, lng: 6.2667 }, // Mila
    44: { lat: 36.2667, lng: 1.9667 }, // Aïn Defla
    45: { lat: 33.2667, lng: -0.3167 }, // Naâma
    46: { lat: 35.3, lng: -1.05 }, // Aïn Témouchent
    47: { lat: 32.4833, lng: 3.6667 }, // Ghardaïa
    48: { lat: 35.7333, lng: 0.5333 }, // Relizane
    49: { lat: 29.25, lng: 0.2167 }, // Timimoun
    50: { lat: 21.3333, lng: 0.9167 }, // Bordj Badji Mokhtar
    51: { lat: 34.3833, lng: 5.9 }, // Ouled Djellal
    52: { lat: 30.1333, lng: -2.1667 }, // Béni Abbès
    53: { lat: 27.2167, lng: 2.4833 }, // In Salah
    54: { lat: 19.5667, lng: 5.7667 }, // In Guezzam
    55: { lat: 33.1, lng: 6.0667 }, // Touggourt
    56: { lat: 24.5533, lng: 9.4844 }, // Djanet
    57: { lat: 33.9, lng: 6.1333 }, // El M'Ghair
    58: { lat: 30.5833, lng: 2.8833 } // El Meniaa
  };

  const handleLocationClick = (wilayaCode: number, wilayaName: string) => {
    const coordinates = wilayaCoordinates[wilayaCode as keyof typeof wilayaCoordinates];
    if (coordinates) {
      onLocationSelect({ 
        lat: coordinates.lat, 
        lng: coordinates.lng, 
        address: wilayaName 
      });
      setSelectedLocation(wilayaName);
      setIsMapOpen(false);
    }
  };

  const handleGeolocationSelect = (location: GeolocationCoords) => {
    onLocationSelect({
      lat: location.lat,
      lng: location.lng,
      address: location.address || `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
    });
    setSelectedLocation(location.address || `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`);
  };

  // Fonction pour obtenir le nom de la wilaya selon la langue
  const getWilayaName = (wilaya: any) => {
    if (language === 'ar') {
      return wilaya.name_ar;
    } else if (language === 'fr') {
      return wilaya.name_fr;
    } else {
      return wilaya.name; // Par défaut
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Géolocalisation précise */}
      <GeolocationPicker
        onLocationSelect={handleGeolocationSelect}
        selectedLocation={selectedLocation}
      />
      
      {/* Sélection par wilaya (fallback) */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsMapOpen(true)}
          className="flex items-center space-x-1"
        >
          <MapPin className="h-4 w-4" />
          <span>Wilaya</span>
        </Button>

        <DialogContent className="max-w-md max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              {language === 'ar' ? 'اختر ولاية' : 'Sélectionner une wilaya'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              {language === 'ar' ? 'اختر ولاية:' : 'Choisissez une wilaya :'}
            </p>
            <div className="max-h-[50vh] overflow-y-auto space-y-1">
              {wilayas.map((wilaya) => {
                const displayName = getWilayaName(wilaya);
                return (
                  <Button
                    key={wilaya.code}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto py-2"
                    onClick={() => handleLocationClick(wilaya.code, displayName)}
                  >
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      {wilaya.code.toString().padStart(2, '0')} - {displayName}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
          {selectedLocation && (
            <div className="mt-4 p-3 bg-green-50 rounded-md">
              <p className="text-sm text-green-700">
                {language === 'ar' ? 'الموقع المختار: ' : 'Localisation sélectionnée : '}
                {selectedLocation}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapSearch;