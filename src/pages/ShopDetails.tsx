import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShopImageSlideshow from "@/components/shop/ShopImageSlideshow";
import AdvancedProductsSlider from "@/components/shop/AdvancedProductsSlider";
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Heart, 
  Share2, 
  MessageCircle,
  Clock,
  CheckCircle,
  Camera,
  Users,
  Award,
  ShoppingBag,
  Calendar,
  ExternalLink
} from "lucide-react";
import { shops } from "@/data/shopsData";
import ReviewsSection from "@/components/reviews/ReviewsSection";

const ShopDetails: React.FC = () => {
  const { id } = useParams();
  const shop = shops.find(s => s.id === id);
  const [_currentImageIndex, _setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  if (!shop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Boutique non trouvée</h2>
          <Link to="/" className="text-primary hover:underline">
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const _handleImageChange = (index: number) => {
    _setCurrentImageIndex(index);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shop.name,
          text: shop.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Erreur lors du partage:', err);
      }
    } else {
      // Fallback: copier le lien
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers!');
    }
  };

  const handleWhatsApp = () => {
    const message = `Bonjour! Je suis intéressé(e) par votre boutique "${shop.name}". ${window.location.href}`;
    const phoneNumber = shop.phoneNumbers[0]?.replace(/\s/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${shop.phoneNumbers[0]}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary">
            <ArrowLeft size={20} />
            <span>Retour</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full transition-colors ${
                isFavorite 
                  ? "text-red-500 bg-red-50 dark:bg-red-900/20" 
                  : "text-muted-foreground hover:text-red-500"
              }`}
            >
              <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Split Slideshow */}
      <div className="relative">
        <ShopImageSlideshow 
          images={shop.productImageUrls} 
          shopName={shop.name}
        />
        
        {/* Shop logo */}
        <div className="absolute bottom-4 left-4 z-20">
          <img
            src={shop.logoUrl || "/placeholder.svg"}
            alt={`Logo ${shop.name}`}
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Status badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          {shop.isOnline && (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              En ligne
            </span>
          )}
          {shop.hasVideoStory && (
            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Camera size={12} />
              Story
            </span>
          )}
          {shop.isVerified && (
            <span className="px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <CheckCircle size={12} />
              Vérifiée
            </span>
          )}
        </div>
      </div>

      {/* Shop Info */}
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{shop.name}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{shop.wilaya}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span>4.5</span>
              <span className="text-muted-foreground">(127 avis)</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>1.2k abonnés</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone size={20} />
            Appeler
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-6">
          <div className="flex gap-6">
            {[
              { id: "about", label: "À propos", icon: <ShoppingBag size={16} /> },
              { id: "products", label: "Produits", icon: <Camera size={16} /> },
              { id: "reviews", label: "Avis", icon: <Star size={16} /> },
              { id: "contact", label: "Contact", icon: <Phone size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-3 px-1 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "about" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{shop.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Informations</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Clock size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">Horaires d'ouverture</div>
                      <div className="text-sm text-muted-foreground">Lun-Sam: 9h-18h, Dim: Fermé</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Award size={20} className="text-primary" />
                    <div>
                      <div className="font-medium">Boutique certifiée</div>
                      <div className="text-sm text-muted-foreground">Membre depuis Mars 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Galerie produits</h3>
              <AdvancedProductsSlider 
                images={[
                  ...shop.productImageUrls,
                  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&h=700&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=500&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=900&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=800&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&h=600&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&h=800&fit=crop&crop=center',
                  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center'
                ]} 
                shopName={shop.name}
              />
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <ReviewsSection 
                reviewedUserId={`shop-${shop.id}`}
              />
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Informations de contact</h3>
              <div className="space-y-3">
                {shop.phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Phone size={20} className="text-primary" />
                    <span>{phone}</span>
                    <ExternalLink size={16} className="ml-auto text-muted-foreground" />
                  </a>
                ))}
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Mail size={20} className="text-primary" />
                  <span>contact@{shop.name.toLowerCase().replace(/\s/g, '')}.dz</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Globe size={20} className="text-primary" />
                  <span>www.{shop.name.toLowerCase().replace(/\s/g, '')}.dz</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                  <span>{shop.wilaya}, Algérie</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;