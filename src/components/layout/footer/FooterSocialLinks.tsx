import { Facebook, X, Instagram, Linkedin, Youtube, Mail } from 'lucide-react'; // Replaced Twitter with X and Share with Youtube

const socialLinksData = [
  { href: "https://facebook.com", icon: <Facebook size={20} />, label: "Facebook", bgClass: "bg-blue-600", hoverClass: "hover:bg-blue-700" },
  { href: "https://twitter.com", icon: <X size={20} />, label: "X", bgClass: "bg-black", hoverClass: "hover:bg-gray-800" },
  { href: "https://instagram.com", icon: <Instagram size={20} />, label: "Instagram", bgClass: "bg-pink-600", hoverClass: "hover:bg-pink-700" },
  { href: "https://linkedin.com", icon: <Linkedin size={20} />, label: "LinkedIn", bgClass: "bg-blue-700", hoverClass: "hover:bg-blue-800" },
  { href: "https://youtube.com", icon: <Youtube size={20} />, label: "Youtube", bgClass: "bg-red-600", hoverClass: "hover:bg-red-700" },
  { href: "mailto:contact@aladdin.dz", icon: <Mail size={20} />, label: "Email", bgClass: "bg-gray-500", hoverClass: "hover:bg-gray-600", isMail: true },
];

const FooterSocialLinks = () => {
  return (
    <div className="flex justify-center mt-10 mb-6">
      <div className="flex space-x-4">
        {socialLinksData.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.isMail ? "_self" : "_blank"}
            rel={social.isMail ? "" : "noopener noreferrer"}
            aria-label={social.label}
            className={`p-2 rounded-full text-white transition-all duration-300 ${social.bgClass} ${social.hoverClass} hover:scale-110 drop-shadow-lg hover:text-yellow-400`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialLinks;
