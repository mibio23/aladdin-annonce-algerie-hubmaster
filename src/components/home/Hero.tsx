import ConfigurableBanner from "@/components/shared/ConfigurableBanner";
import { useHeroBannerData } from "@/data/heroBannerData.tsx";

const Hero = () => {
  const heroBannerData = useHeroBannerData();
  return <ConfigurableBanner {...heroBannerData} />;
};

export default Hero;
