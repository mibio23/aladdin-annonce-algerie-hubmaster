
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLink {
  to: string;
  text: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-700 uppercase">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-gray-300 hover:text-white">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
