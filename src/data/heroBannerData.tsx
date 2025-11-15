import { PlayCircle } from "lucide-react";
import { socialLinksData } from "./socialLinksData";
import { useActionButtonsData } from "./actionButtonsData";
import HeroBannerContent from "@/components/home/HeroBannerContent";

// Images disponibles pour la bannière
const bannerImages = [
  {
    url: "/lovable-uploads/674ffe81-546c-4877-9e59-c62fa5d08d07.png",
    alt: "Aladdin - Monument algérien avec objets volants et ville moderne"
  },
  {
    url: "/lovable-uploads/1b389b9d-a4af-4bce-9d96-6437e5917bf7.png",
    alt: "Aladdin - Vision futuriste et traditionnelle de l'Algérie"
  },
  {
    url: "/lovable-uploads/50a9e887-1315-4e89-be9e-3ef1d3c4bae8.png",
    alt: "Aladdin - Lampe magique dorée avec technologie moderne"
  }
];

// Fonction pour sélectionner une image aléatoire
const getRandomBannerImage = () => {
  const randomIndex = Math.floor(Math.random() * bannerImages.length);
  return bannerImages[randomIndex];
};

export const useHeroBannerData = () => {
  const actionButtons = useActionButtonsData();
  const randomImage = getRandomBannerImage();
  
  return {
    imageUrl: randomImage.url,
    imageAlt: randomImage.alt,
    title: null, // Nous utiliserons le composant personnalisé
    subtitle: null, // Nous utiliserons le composant personnalisé
    customContent: <HeroBannerContent />,
    socialLinks: socialLinksData,
    website: {
      href: "https://www.aladdindz.com",
      text: "www.aladdindz.com"
    },
    videoButton: {
      onClick: () => alert("La vidéo story sera bientôt disponible!"),
      ariaLabel: "Voir notre story vidéo",
      Icon: PlayCircle
    },
    actionButtons: actionButtons
  };
};
