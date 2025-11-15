
import React from "react";
import BannerSocialLinks from "./BannerSocialLinks";
import BannerVideoButton from "./BannerVideoButton";
import BannerActionButtons from "./BannerActionButtons";

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ElementType;
  colorClass: string;
};

type ActionButton = {
  to: string;
  text: string;
  Icon: React.ElementType;
};

type VideoButton = {
  onClick: () => void;
  ariaLabel: string;
  Icon: React.ElementType;
};

interface ConfigurableBannerProps {
  imageUrl: string;
  imageAlt: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  customContent?: React.ReactNode;
  socialLinks?: SocialLink[];
  website?: { href: string; text: string };
  videoButton?: VideoButton;
  actionButtons?: ActionButton[];
}

const ConfigurableBanner: React.FC<ConfigurableBannerProps> = ({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  customContent,
  socialLinks,
  website,
  videoButton,
  actionButtons,
}) => {
  return (
    <section className="container mx-auto px-4 mb-4">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-contain"
            loading="eager"
            decoding="async"
            style={{
              imageRendering: 'crisp-edges',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />

          <BannerSocialLinks socialLinks={socialLinks} website={website} />
          <BannerVideoButton videoButton={videoButton} />
          
          <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end items-center text-center pb-16">
            {customContent ? (
              customContent
            ) : (
              <div className="max-w-4xl">
                <div className="mb-8">
                  {title}
                  {subtitle}
                </div>
              </div>
            )}
            
            <BannerActionButtons actionButtons={actionButtons} />
          </div>
        </div>
      </div>
      <link rel="preload" as="image" href={imageUrl} />
    </section>
  );
};

export default ConfigurableBanner;
