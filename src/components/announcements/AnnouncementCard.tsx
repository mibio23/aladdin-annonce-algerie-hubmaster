import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  MapPin, 
  Eye, 
  Clock, 
  Phone, 
  MessageCircle,
  Share2,
  Flag
} from 'lucide-react';
import { Announcement } from '@/hooks/useAnnouncements';
import { useFavorites } from '@/hooks/useFavorites';
import { formatSafeRelativeTime } from '@/lib/utils/dateUtils';
import { cn } from '@/lib/utils';
import Button3D from './Button3D';
import ConnectionStatus3D from './ConnectionStatus3D';
import AnnouncementImageCarousel from './AnnouncementImageCarousel';
import AvatarDisplay from '@/components/avatar/AvatarDisplay';

interface AnnouncementCardProps {
  announcement: Announcement;
  onView?: (announcement: Announcement) => void;
  onContact?: (announcement: Announcement) => void;
  onShare?: (announcement: Announcement) => void;
  onReport?: (announcement: Announcement) => void;
  variant?: 'default' | 'compact' | 'featured';
  showActions?: boolean;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  onView,
  onContact,
  onShare,
  onReport,
  variant = 'default',
  showActions = true
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const formatPrice = (price: number | null) => {
    if (!price) return 'Prix non spécifié';
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getConditionBadge = (condition: string | null) => {
    const badges = {
      new: { label: 'Neuf', variant: 'default' as const },
      like_new: { label: 'Comme neuf', variant: 'secondary' as const },
      good: { label: 'Bon état', variant: 'outline' as const },
      fair: { label: 'État correct', variant: 'outline' as const },
      poor: { label: 'À rénover', variant: 'destructive' as const },
    };
    return badges[(condition as keyof typeof badges)] || badges.good;
  };

  const conditionBadge = getConditionBadge(announcement.condition);
  const isFav = isFavorite(announcement.id);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await toggleFavorite(announcement.id);
  };

  const handleViewClick = () => {
    onView?.(announcement);
  };

  const cardClass = cn(
    "group cursor-pointer transition-all duration-300 hover:shadow-lg flex-shrink-0",
    {
      'h-full w-full': variant === 'default',
      'h-32 w-full max-w-sm': variant === 'compact',
      'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 w-full': variant === 'featured'
    }
  );

  const imageClass = cn(
    "w-full object-cover rounded-t-lg",
    {
      'h-56 aspect-[4/3]': variant === 'default',
      'h-20 w-20 flex-shrink-0 aspect-square': variant === 'compact',
      'h-72 aspect-[4/3]': variant === 'featured'
    }
  );

  if (variant === 'compact') {
    return (
      <Card className={cardClass} onClick={handleViewClick}>
        <CardContent className="p-3">
          <div className="flex gap-3">
            {announcement.images?.[0] && (
              <div className="flex-shrink-0">
                <img
                  src={announcement.images[0]}
                  alt={announcement.title}
                  className={imageClass + " rounded-xl"}
                />
              </div>
            )}
           
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-sm truncate">
                  {announcement.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFavoriteClick}
                  className="p-1 h-auto"
                >
                  <Heart 
                    className={cn("w-4 h-4", {
                      "fill-red-500 text-red-500": isFav,
                      "text-muted-foreground": !isFav
                    })}
                  />
                </Button>
              </div>
              
              <p className="text-lg font-bold text-primary mb-1">
                {formatPrice(announcement.price)}
              </p>
              
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="truncate">{announcement.location || 'Non spécifié'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="group flex flex-col transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 space-y-2" onClick={handleViewClick}>
      {/* Cadre supérieur - Photo */}
      <div className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          {announcement.images && announcement.images.length > 0 && (
            <AnnouncementImageCarousel
              images={announcement.images}
              alt={announcement.title}
              className="w-full h-full object-cover"
            />
          )}
          
          {variant === 'featured' && (
            <Badge className="absolute top-2 left-2 bg-primary z-20">
              Mise en avant
            </Badge>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 z-20"
          >
            <Heart 
              className={cn("w-4 h-4", {
                "fill-red-500 text-red-500": isFav,
                "text-muted-foreground": !isFav
              })}
            />
          </Button>

          {!announcement.is_active && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                VENDU
              </Badge>
            </div>
          )}

          {announcement.condition && (
            <div className="absolute bottom-2 left-2">
              <Badge variant={conditionBadge.variant}>
                {conditionBadge.label}
              </Badge>
            </div>
          )}

          {announcement.is_urgent && (
            <div className="absolute bottom-2 right-2">
              <Badge variant="destructive">
                Urgent
              </Badge>
            </div>
          )}
        </div>
      </div>
      
      {/* Cadre inférieur - Informations principales */}
      <div className="bg-card border rounded-lg p-4 space-y-3 shadow-sm hover:shadow-md transition-shadow">
        {/* Profil utilisateur */}
        <div className="flex items-center gap-3 mb-3">
          <AvatarDisplay
            src={announcement.profiles?.avatar_url}
            alt={announcement.profiles?.full_name || 'Utilisateur'}
            fallback={announcement.profiles?.full_name?.charAt(0)?.toUpperCase() || 'U'}
            size="sm"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">
              Publié par {announcement.profiles?.full_name || 'Utilisateur'}
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-2 flex-1">
            {announcement.title}
          </h3>
        </div>

        <p className="text-2xl font-bold text-primary">
          {formatPrice(announcement.price)}
        </p>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="truncate">{announcement.location || 'Non spécifié'}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>
                {formatSafeRelativeTime(announcement.created_at)}
              </span>
            </div>
           
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              <span>{announcement.views_count || 0}</span>
            </div>
          </div>
        </div>

        {showActions && (
          <div className="flex gap-2 w-full pt-2 overflow-hidden">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onContact?.(announcement);
              }}
              className="btn-publicite flex-1 flex items-center justify-center min-w-0"
            >
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">Contacter</span>
            </button>
           
            <Button3D 
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                onContact?.(announcement);
              }}
              className="flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
            </Button3D>
           
            <Button3D 
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                onShare?.(announcement);
              }}
              className="flex-shrink-0"
            >
              <Share2 className="w-4 h-4" />
            </Button3D>
           
            <Button3D 
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                onReport?.(announcement);
              }}
              className="flex-shrink-0"
            >
              <Flag className="w-4 h-4" />
            </Button3D>
          </div>
        )}
      </div>
      
      {/* Troisième cadre - Informations complémentaires */}
      <div className="bg-card border-2 border-muted rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
        <h4 className="text-lg font-bold text-primary mb-3">
          Informations supplémentaires
        </h4>
        <div className="text-sm text-muted-foreground font-semibold space-y-2">
          <p>
            <span className="font-bold text-primary">État :</span> {conditionBadge.label}
          </p>
          <p>
            <span className="font-bold text-primary">Disponibilité :</span> {announcement.is_active ? 'Disponible' : 'Vendu'}
          </p>
        </div>
        
        {showActions && (
          <div className="flex justify-center mt-3">
            <ConnectionStatus3D />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;