
import { Shop } from "@/types/shop";

export const shops: Shop[] = [
  {
    id: "1",
    name: "Boutique Mode Alger",
    logoUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    productImageUrls: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    ],
    phoneNumbers: ["+213 21 123 456"],
    wilaya: "Alger",
    description: "Boutique de mode tendance avec les dernieres collections",
    isOnline: true,
    hasVideoStory: true,
    isVerified: true
  },
  {
    id: "2",
    name: "Tech Store Oran",
    logoUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    productImageUrls: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    ],
    phoneNumbers: ["+213 41 987 654"],
    wilaya: "Oran",
    description: "Magasin specialise dans l'electronique et l'informatique",
    isOnline: true,
    hasVideoStory: false,
    isVerified: true
  },
  {
    id: "3",
    name: "Artisanat Constantine",
    logoUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    productImageUrls: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    ],
    phoneNumbers: ["+213 31 456 789"],
    wilaya: "Constantine",
    description: "Produits artisanaux traditionnels et authentiques",
    isOnline: false,
    hasVideoStory: true,
    isVerified: false
  },
  {
    id: "4",
    name: "Auto Parts Setif",
    logoUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    productImageUrls: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
      "https://images.unsplash.com/photo-1493238792000-8113da705763"
    ],
    phoneNumbers: ["+213 36 321 654"],
    wilaya: "Setif",
    description: "Pieces de rechange automobiles et accessoires",
    isOnline: true,
    hasVideoStory: false,
    isVerified: true
  },
  {
    id: "5",
    name: "Librairie Annaba",
    logoUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    productImageUrls: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    ],
    phoneNumbers: ["+213 38 789 123"],
    wilaya: "Annaba",
    description: "Livres, papeterie et fournitures scolaires",
    isOnline: false,
    hasVideoStory: true,
    isVerified: false
  },
  {
    id: "6",
    name: "Restaurant Tlemcen",
    logoUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    productImageUrls: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b"
    ],
    phoneNumbers: ["+213 43 654 321"],
    wilaya: "Tlemcen",
    description: "Cuisine traditionnelle algerienne et plats internationaux",
    isOnline: true,
    hasVideoStory: true,
    isVerified: true
  },
  {
    id: "7",
    name: "Sport Center Blida",
    logoUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    productImageUrls: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1571019613540-996a8b34bb01",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77"
    ],
    phoneNumbers: ["+213 25 147 258"],
    wilaya: "Blida",
    description: "Equipements sportifs et accessoires de fitness",
    isOnline: true,
    hasVideoStory: false,
    isVerified: false
  },
  {
    id: "8",
    name: "Bijouterie Bejaia",
    logoUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
    productImageUrls: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0"
    ],
    phoneNumbers: ["+213 34 369 852"],
    wilaya: "Bejaia",
    description: "Bijoux traditionnels et modernes, montres de luxe",
    isOnline: false,
    hasVideoStory: true,
    isVerified: true
  },
  {
    id: "9",
    name: "Pharmacie Batna",
    logoUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    productImageUrls: [
      "https://images.unsplash.com/photo-1493238792000-8113da705763",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
    ],
    phoneNumbers: ["+213 33 741 852"],
    wilaya: "Batna",
    description: "Pharmacie moderne avec produits de sante et beaute",
    isOnline: true,
    hasVideoStory: false,
    isVerified: true
  },
  {
    id: "10",
    name: "Mobilier Sidi Bel Abbes",
    logoUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    productImageUrls: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
    ],
    phoneNumbers: ["+213 48 963 741"],
    wilaya: "Sidi Bel Abbes",
    description: "Meubles modernes et decoration d'interieur",
    isOnline: true,
    hasVideoStory: true,
    isVerified: false
  }
];
