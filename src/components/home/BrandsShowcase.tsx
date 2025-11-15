
import React from "react";
import ShowcaseHeader from "./ShowcaseHeader";
import BrandCarousel from "./BrandCarousel";

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  slug: string;
}

interface BrandsShowcaseProps {
  title: string;
  icon: React.ReactNode;
  brands: Brand[];
}

const BrandsShowcase: React.FC<BrandsShowcaseProps> = ({ title, icon, brands }) => {
  if (!brands || brands.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border rounded-lg p-4 mb-6 dark:bg-slate-800 dark:border-slate-700">
      <ShowcaseHeader title={title} icon={icon} />
      <BrandCarousel brands={brands} />
    </div>
  );
};

export default BrandsShowcase;
