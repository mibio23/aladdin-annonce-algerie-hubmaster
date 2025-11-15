
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  slug: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

const BrandLogo: React.FC<{ brand: Brand }> = ({ brand }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-full">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center bg-card border border-border rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300 p-1.5 sm:p-2 group-hover:scale-105 mx-auto">
        <img 
          src={brand.logoUrl} 
          alt={`Logo ${brand.name}`} 
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=Logo";
          }}
        />
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-1 sm:mt-2 text-center leading-tight w-full px-0.5 line-clamp-2">
        {brand.name}
      </span>
    </div>
  );
};

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: brands.length > 6,
        dragFree: true,
        containScroll: "trimSnaps",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
        {brands.map((brand) => (
          <CarouselItem 
            key={brand.id}
            className="pl-1 sm:pl-2 md:pl-4 basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/7 xl:basis-1/8"
          >
            <BrandLogo brand={brand} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {brands.length > 6 && (
        <>
          <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border shadow-lg h-8 w-8 rounded-full hidden sm:flex" />
          <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-border shadow-lg h-8 w-8 rounded-full hidden sm:flex" />
        </>
      )}
    </Carousel>
  );
};

export default BrandCarousel;
