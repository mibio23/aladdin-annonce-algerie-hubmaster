
import React, { useMemo } from "react";
import FooterColumn from "./footer/FooterColumn";
import FooterNewsletter from "./footer/FooterNewsletter";
import FooterAppDownload from "./footer/FooterAppDownload";
import FooterSocialLinks from "./footer/FooterSocialLinks";
import FooterLanguageSelector from "./footer/FooterLanguageSelector";
import FooterCopyright from "./footer/FooterCopyright";
import FooterBrands from "./footer/FooterBrands";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";
import { footerLinksConfig } from "@/data/config/footerConfig";

const Footer = React.memo(() => {
  const { t } = useSafeI18nWithRouter();

  // Mémoriser les transformations de liens pour éviter les recalculs
  const aboutLinks = useMemo(() => footerLinksConfig.about.map(link => ({
    ...link,
    text: link.text === "Notre Histoire" ? t('footer.about.ourStory') : 
          link.text === "Comment ça marche" ? t('footer.about.howItWorks') :
          link.text === "Contact" ? t('footer.about.contact') :
          link.text === "Actualités" ? t('footer.about.news') :
          link.text === "Carrières" ? t('footer.about.careers') :
          link.text
  })), [t]);

  const legalLinks = useMemo(() => footerLinksConfig.legal.map(link => ({
    ...link,
    text: link.text === "Conditions d'utilisation" ? t('footer.legal.terms') :
          link.text === "Politique de confidentialité" ? t('footer.legal.privacy') :
          link.text === "Gestion des cookies" ? t('footer.legal.cookies') :
          link.text === "Signaler un contenu" ? t('footer.legal.report') :
          link.text === "Plan du site" ? t('footer.legal.sitemap') :
          link.text === "Mentions légales" ? t('footer.legal.legalNotice') :
          link.text === "Authentification" ? t('footer.legal.authentication') :
          link.text
  })), [t]);

  const usefulLinks = useMemo(() => footerLinksConfig.useful.map(link => ({
    ...link,
    text: link.text === "Conseils de sécurité" ? t('footer.useful.safetyTips') :
          link.text === "Espace Pro" ? t('footer.useful.proBusiness') :
          link.text === "Centre d'aide" ? t('footer.useful.helpCenter') :
          link.text === "FAQ" ? t('footer.useful.faq') :
          link.text
  })), [t]);

  // Mémoriser les titres de sections
  const sectionTitles = useMemo(() => ({
    about: t('footer.about'),
    legal: t('footer.legal'),
    useful: t('footer.useful'),
    description: t('footer.description')
  }), [t]);

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Description section */}
        <div className="mb-8 text-center">
          <p className="footer-description text-gray-300 text-sm leading-relaxed max-w-4xl mx-auto">
            {sectionTitles.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <FooterColumn title={sectionTitles.about} links={aboutLinks} />
          <FooterColumn title={sectionTitles.legal} links={legalLinks} />
          <FooterColumn title={sectionTitles.useful} links={usefulLinks} />
          <div>
            <FooterNewsletter />
            <FooterAppDownload />
          </div>
        </div>

        <FooterBrands />
        <FooterSocialLinks />
        <FooterLanguageSelector />
        <FooterCopyright />
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
