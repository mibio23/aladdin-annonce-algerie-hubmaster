
import React from "react";

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ElementType;
  colorClass: string;
};

interface BannerSocialLinksProps {
  socialLinks?: SocialLink[];
  website?: { href: string; text: string };
}

const BannerSocialLinks: React.FC<BannerSocialLinksProps> = ({
  socialLinks,
  website,
}) => {
  if (!socialLinks && !website) return null;

  return (
    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex flex-col gap-3">
      {socialLinks && (
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="transition-transform duration-300 hover:scale-110"
            >
              <social.Icon size={24} className={`${social.colorClass} hover:text-brand-gold drop-shadow-lg transition-colors`} />
            </a>
          ))}
        </div>
      )}
      {website && (
        <a href={website.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-brand-gold transition-colors duration-300 drop-shadow-lg bg-black/20 px-2 py-1 rounded-md">
          {website.text}
        </a>
      )}
    </div>
  );
};

export default BannerSocialLinks;
