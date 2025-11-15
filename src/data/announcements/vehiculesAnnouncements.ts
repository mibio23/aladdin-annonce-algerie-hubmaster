
import { Announcement } from "../types/homePageTypes";

export const vehiculesAnnouncements: Announcement[] = [
  {
    id: "veh1",
    title: "Peugeot 208 GT Line 2021",
    price: 3200000,
    location: "Alger",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    imageUrls: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1494976688153-033c3ce1d2ce"
    ],
    date: "Hier",
    category: "vehicules",
    phoneNumber: "0770987654",
    isOnline: false,
    isProfessional: false,
    isFeatured: true,
    hasVideoStory: true
  },
  {
    id: "veh2",
    title: "Hyundai i10 Essence 2018",
    price: 1650000,
    location: "Blida",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    imageUrls: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
    ],
    date: "Aujourd'hui",
    category: "vehicules",
    phoneNumber: "0665123456",
    isProfessional: true,
    isUrgent: true,
    urgentMessage: "Départ urgent à l'étranger"
  },
  {
    id: "veh3",
    title: "Moto BMW R1250GS Adventure",
    price: 2800000,
    location: "Sétif",
    imageUrl: "https://images.unsplash.com/photo-1599071405004-9355641c1077",
    imageUrls: [
      "https://images.unsplash.com/photo-1599071405004-9355641c1077",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
      "https://images.unsplash.com/photo-1605880020360-eb1adb0bf16f"
    ],
    date: "Il y a 3 jours",
    category: "vehicules",
    isOnline: true,
    phoneNumber: "0555876543",
    isProfessional: false,
    isFeatured: false,
    isActive: true
  },
  {
    id: "veh4",
    title: "Mercedes-Benz Classe A AMG Line",
    price: 5800000,
    location: "Oran",
    imageUrl: "https://images.unsplash.com/photo-1520031441872-265e4ff70366",
    imageUrls: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc"
    ],
    date: "Il y a 2 heures",
    category: "vehicules",
    phoneNumber: "0777456789",
    isProfessional: true,
    isFeatured: true,
    isActive: true,
    hasVideoStory: true,
    shopName: "AutoConcept Premium",
    shopId: "shop_autoconcept",
    shopLogoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: "veh5",
    title: "Tesla Model 3 Performance 2022",
    price: 8500000,
    location: "Alger",
    imageUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399",
    imageUrls: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399",
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd",
      "https://images.unsplash.com/photo-1580274032240-8ade0e45bee4",
      "https://images.unsplash.com/photo-1606016159991-5d6cebc98c5d"
    ],
    date: "Il y a 1 jour",
    category: "vehicules",
    phoneNumber: "0660123789",
    isProfessional: false,
    isFeatured: true,
    isUrgent: false,
    hasVideoStory: false
  }
];
