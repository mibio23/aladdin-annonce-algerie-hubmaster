
import React from "react";

export interface TabCategory {
  id: string;
  name: string;
  icon?: React.ReactNode;
  icon3D?: React.ReactNode;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  imageUrl: string;
}

export interface Announcement {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  imageUrls?: string[];
  date: string;
  category: string;
  categorySlug?: string;
  phoneNumber?: string;
  isOnline?: boolean;
  hasVideoStory?: boolean;
  isProfessional?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
  isUrgent?: boolean;
  urgentMessage?: string;
  shopName?: string;
  shopId?: string;
  shopLogoUrl?: string;
}
