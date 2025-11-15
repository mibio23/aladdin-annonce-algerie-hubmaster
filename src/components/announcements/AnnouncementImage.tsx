import AdaptiveImageCarousel from "../common/AdaptiveImageCarousel";

interface AnnouncementImageProps {
  allImages: string[];
  title: string;
}

const AnnouncementImage: React.FC<AnnouncementImageProps> = ({
  allImages,
  title,
}) => {
  return (
    <AdaptiveImageCarousel
      images={allImages}
      alt={title}
      className="h-48"
      showControls={true}
      showIndicators={true}
      aspectRatio="auto"
    />
  );
};

export default AnnouncementImage;
