
export interface Shop {
  id: string;
  name: string;
  logoUrl: string;
  productImageUrls: string[];
  phoneNumbers: string[];
  wilaya: string;
  description: string;
  isOnline: boolean;
  hasVideoStory: boolean;
  isVerified?: boolean;
}
