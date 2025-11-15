import { useState, useCallback } from 'react';

export interface GeolocationCoords {
  lat: number;
  lng: number;
  address?: string;
}

export interface GeolocationState {
  coords: GeolocationCoords | null;
  loading: boolean;
  error: string | null;
}

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    coords: null,
    loading: false,
    error: null,
  });

  const getCurrentPosition = useCallback(async (): Promise<GeolocationCoords | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      const error = 'La géolocalisation n\'est pas supportée par ce navigateur';
      setState(prev => ({ ...prev, loading: false, error }));
      return null;
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          try {
            // Reverse geocoding with Nominatim (free)
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}&addressdetails=1`
            );
            const data = await response.json();
            
            const fullCoords: GeolocationCoords = {
              ...coords,
              address: data.display_name || `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`,
            };

            setState({
              coords: fullCoords,
              loading: false,
              error: null,
            });
            resolve(fullCoords);
          } catch (err) {
            const fullCoords: GeolocationCoords = {
              ...coords,
              address: `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`,
            };
            
            setState({
              coords: fullCoords,
              loading: false,
              error: null,
            });
            resolve(fullCoords);
          }
        },
        (error) => {
          let errorMessage = 'Erreur de géolocalisation';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Permission de géolocalisation refusée';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Position non disponible';
              break;
            case error.TIMEOUT:
              errorMessage = 'Timeout de géolocalisation';
              break;
          }
          
          setState(prev => ({ ...prev, loading: false, error: errorMessage }));
          resolve(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    });
  }, []);

  const searchLocation = useCallback(async (query: string): Promise<GeolocationCoords[]> => {
    if (!query.trim()) return [];

    try {
      // Geocoding with Nominatim (free)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1&countrycodes=dz`
      );
      const data = await response.json();

      return data.map((item: any) => ({
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        address: item.display_name,
      }));
    } catch (error) {
      console.error('Erreur de recherche de localisation:', error);
      return [];
    }
  }, []);

  return {
    ...state,
    getCurrentPosition,
    searchLocation,
  };
};
