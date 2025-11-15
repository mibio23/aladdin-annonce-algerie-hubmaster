
import { Announcement } from "../types/homePageTypes";

export const immobilierAnnouncements: Announcement[] = [
  {
    id: "immo1",
    title: "Bel appartement F3 à Hydra",
    price: 25000000,
    location: "Hydra, Alger",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop"
    ],
    date: "Aujourd'hui",
    category: "immobilier",
    phoneNumber: "0550123456",
    isOnline: true,
    hasVideoStory: true,
    isProfessional: true,
    isFeatured: true,
    shopName: "Immobilier Elite",
    shopLogoUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "immo2",
    title: "Villa de luxe avec piscine à Bordj El Kiffan",
    price: 65000000,
    location: "Bordj El Kiffan, Alger",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8e628aa3b6a0",
    date: "Hier",
    category: "immobilier",
    isOnline: false,
    phoneNumber: "0550986123",
  },
  {
    id: "immo3",
    title: "Terrain constructible à Ouled Fayet",
    price: 12000000,
    location: "Ouled Fayet, Alger",
    imageUrl: "https://images.unsplash.com/photo-1501127122-7cb522739e85",
    date: "Il y a 3 jours",
    category: "immobilier",
    phoneNumber: "0550654321",
  },
  {
    id: "immo4",
    title: "Local commercial bien situé",
    price: 180000,
    location: "Oran Centre",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    date: "Il y a 2 jours",
    category: "immobilier",
    isOnline: true,
    phoneNumber: "0770369852",
  },
];
