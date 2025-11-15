import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { MapPin, Calendar, Heart, Share2, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnnouncementImage3D from "@/components/announcements/AnnouncementImage3D";
import SecureContactButton from "@/components/contact/SecureContactButton";
import { useToast } from "@/hooks/use-toast";
import { useSecureContact } from "@/hooks/useSecureContact";
import { AnnouncementRegistry } from "@/data/registry/AnnouncementRegistry";
import ReviewsSection from "@/components/reviews/ReviewsSection";

const AnnouncementDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { getSecureAnnouncementDetails } = useSecureContact();
  const [secureAnnouncement, setSecureAnnouncement] = useState<any>(null);
  const [loadingAnnouncement, setLoadingAnnouncement] = useState(true);

  // Fallback to registry for now (will be fully replaced with database)
  const allAnnouncements = Object.values(AnnouncementRegistry.getAllAnnouncements()).flat();
  const fallbackAnnouncement = allAnnouncements.find(ann => ann.id === id);

  useEffect(() => {
    const loadAnnouncementDetails = async () => {
      if (!id) return;
      
      setLoadingAnnouncement(true);
      try {
        const result = await getSecureAnnouncementDetails(id);
        if (result.success && result.announcement) {
          setSecureAnnouncement(result.announcement);
        }
      } catch (error) {
        console.error('Failed to load secure announcement:', error);
      } finally {
        setLoadingAnnouncement(false);
      }
    };

    loadAnnouncementDetails();
  }, [id, getSecureAnnouncementDetails]);

  // Use secure announcement if available, otherwise fallback
  const announcement = secureAnnouncement || fallbackAnnouncement;

  if (loadingAnnouncement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement de l'annonce...</p>
        </div>
      </div>
    );
  }

  if (!announcement) {
    return <Navigate to="/404" replace />;
  }

  const handleFavoriteClick = () => {
    toast({
      title: "Ajouté aux favoris",
      description: "Cette annonce a été ajoutée à vos favoris",
    });
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié",
      description: "Le lien de l'annonce a été copié dans le presse-papier",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header avec actions */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Slider d'images - Version grand format */}
          <div className="lg:w-2/3">
            <div className="relative bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="h-[500px] lg:h-[600px]">
                <AnnouncementImage3D
                  allImages={announcement.imageUrls || [announcement.imageUrl]}
                  title={announcement.title}
                />
              </div>
              
              {/* Badges en overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {announcement.isFeatured && (
                  <Badge variant="default" className="bg-yellow-500 text-yellow-50">
                    Premium
                  </Badge>
                )}
                {announcement.isUrgent && (
                  <Badge variant="destructive">
                    Urgent
                  </Badge>
                )}
                {announcement.isOnline && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    En ligne
                  </Badge>
                )}
              </div>

              {/* Actions en overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/90 backdrop-blur-sm"
                  onClick={handleFavoriteClick}
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/90 backdrop-blur-sm"
                  onClick={handleShareClick}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/90 backdrop-blur-sm"
                >
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Informations de l'annonce */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {announcement.title}
              </h1>
              
              <div className="text-3xl font-bold text-primary mb-6">
                {formatPrice(announcement.price)}
              </div>

              <div className="space-y-4">
                {/* Localisation */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>{announcement.location}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 flex-shrink-0" />
                  <span>{announcement.date}</span>
                </div>

                {/* Catégorie */}
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-sm">
                    {announcement.category}
                  </Badge>
                </div>
              </div>

              {/* Contact - Using Secure Contact Button */}
              {(secureAnnouncement?.phone_number_masked || announcement.phoneNumber) && (
                <div className="mt-6 pt-6 border-t border-border">
                  <SecureContactButton
                    announcementId={id!}
                    phoneNumberMasked={secureAnnouncement?.phone_number_masked || announcement.phoneNumber}
                    requiresAuthForContact={secureAnnouncement?.requires_auth_for_contact || false}
                    className="btn-publicite"
                  />
                </div>
              )}
            </div>

            {/* Informations sur le vendeur */}
            {announcement.shopName && (
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Vendeur</h3>
                <div className="flex items-center gap-3">
                  {announcement.shopLogoUrl && (
                    <img
                      src={announcement.shopLogoUrl}
                      alt={announcement.shopName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{announcement.shopName}</p>
                    {announcement.isProfessional && (
                      <Badge variant="secondary" className="text-xs">
                        Professionnel
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Message urgent */}
            {announcement.isUrgent && announcement.urgentMessage && (
              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="text-red-800 dark:text-red-200 font-medium text-sm">
                  {announcement.urgentMessage}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description (si disponible) */}
        <div className="mt-8 bg-card rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            {announcement.title} - Cette annonce présente un produit de qualité dans la catégorie {announcement.category}. 
            Situé à {announcement.location}, ce produit est disponible au prix de {formatPrice(announcement.price)}.
            Pour plus d'informations, n'hésitez pas à contacter le vendeur.
          </p>
        </div>

        {/* Section Avis */}
        <div className="mt-8 bg-card rounded-xl p-6 shadow-lg">
          <ReviewsSection 
            reviewedUserId="fake-seller-id"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetailsPage;