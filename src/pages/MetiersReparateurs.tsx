
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { 
  Search, 
   
  Filter,
  Star,
  Heart,
  Users,
  Clock,
  Wrench,
  CheckCircle
} from 'lucide-react';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";
import { useMetiersAnnouncements } from '@/hooks/useMetiersAnnouncements';
import AnnouncementCard from '@/components/announcements/AnnouncementCard';
import { Skeleton } from '@/components/ui/skeleton';
import { wilayas } from '@/data/wilayaData';

const MetiersReparateurs: React.FC = () => {
  const { t } = useSafeI18nWithRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState<string>('all');
  // Removed selectedCondition filter as requested
  const [sortBy, setSortBy] = useState<string>('recent');

  const { announcements = [], isLoading, error } = useMetiersAnnouncements();

  // Filtrer les annonces selon les critères
  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = !searchTerm || 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesWilaya = selectedWilaya === 'all' || announcement.location === selectedWilaya;
    
    return matchesSearch && matchesWilaya;
  });

  // Trier les annonces
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return 0; // Placeholder since views_count doesn't exist
      case 'likes':
        return 0; // Placeholder since likes_count doesn't exist
      case 'recent':
      default:
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  });

  const _getPageTitle= () => {
    return t('metiers.title');
  };

  if (error) {
    console.error('Error in MetiersReparateurs:', error);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Erreur de chargement
          </h1>
          <p className="text-gray-600 mb-4">
            Une erreur s'est produite lors du chargement des annonces.
          </p>
          <Button onClick={() => window.location.reload()}>
            Réessayer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section - Style exact from image */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl">📈</div>
          <h1 className="text-2xl font-bold text-red-500">
            Métiers & Réparateurs 🔥
          </h1>
        </div>
        <p className="text-black dark:text-white text-sm flex items-center gap-2 mb-4">
          <span>⚡</span>
          Trouvez des professionnels qualifiés et des artisans expérimentés pour tous vos projets de réparation, rénovation et services spécialisés
        </p>
        
        {/* Examples Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Métiers & Réparateurs Examples */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
              🔧 Métiers & Réparateurs
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-orange-500">⚡</span> Électricien
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-blue-500">🔧</span> Plombier
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">🏠</span> Maçon
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-purple-500">🎨</span> Peintre
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-red-500">🔩</span> Mécanicien
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-amber-500">🪚</span> Menuisier
              </div>
            </div>
          </div>

          {/* Services Professionnels Examples */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
              💼 Services Professionnels
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-blue-500">🧹</span> Nettoyage
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-purple-500">📱</span> Dépannage IT
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-orange-500">🚛</span> Déménagement
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-red-500">🎭</span> Animation
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-green-500">🌱</span> Jardinage
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="text-indigo-500">📚</span> Formation
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
            ({sortedAnnouncements.length} Annonces disponibles)
          </span>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Recherche */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder={t('metiers.search.placeholder')}
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Wilaya */}
            <div>
              <Select value={selectedWilaya} onValueChange={setSelectedWilaya}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les wilayas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les wilayas</SelectItem>
                  {wilayas.map((wilaya) => (
                    <SelectItem key={wilaya.code} value={wilaya.name}>
                      {wilaya.code.toString().padStart(2, '0')} - {wilaya.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tri */}
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récent</SelectItem>
                  <SelectItem value="views">Plus de vus</SelectItem>
                  <SelectItem value="likes">Les j'aimes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      {!isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total annonces</p>
                <p className="text-xl font-semibold">{sortedAnnouncements.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Professionnels vérifiés</p>
                <p className="text-xl font-semibold">0</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Disponibles</p>
                <p className="text-xl font-semibold">
                  {sortedAnnouncements.filter(a => a.is_active).length}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Note moyenne</p>
                <p className="text-xl font-semibold">4.8</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Liste des annonces */}
      <div className="space-y-4">
        {isLoading ? (
          // Skeleton loading
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index}>
                <CardContent className="p-4">
                  <Skeleton className="h-48 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-6 w-1/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : sortedAnnouncements.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" />
              Annonces de Métiers & Réparateurs et Services Professionnels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedAnnouncements.map(announcement => {
                // Transform MetierAnnouncement to Announcement format
                const transformedAnnouncement = {
                  ...announcement,
                  category_id: 'metier-reparateur',
                  condition: 'new',
                  images: [],
                  wilaya: announcement.location || '',
                  contact_phone: announcement.contact_phone || '',
                  contact_email: announcement.contact_email || '',
                  user_id: 'system',
                  updated_at: announcement.created_at,
                  is_featured: false,
                  is_urgent: false,
                  views_count: 0,
                  currency: 'DZD',
                  expires_at: null,
                  delivery_options: [],
                  description: announcement.description || '',
                  price: announcement.price || 0,
                  location: announcement.location || ''
                };
                
                return (
                  <AnnouncementCard
                    key={announcement.id}
                    announcement={transformedAnnouncement}
                    variant="default"
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <Wrench className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Aucune annonce trouvée
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Aucune annonce de métiers et réparateurs disponible avec les critères sélectionnés.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedWilaya('all');
                }}
                variant="outline"
              >
                Réinitialiser les filtres
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MetiersReparateurs;
