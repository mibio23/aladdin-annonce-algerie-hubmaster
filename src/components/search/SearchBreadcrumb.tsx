import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSafeI18nWithRouter  } from "@/lib/i18n/i18nContextWithRouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface SearchBreadcrumbProps {
  items: BreadcrumbItem[];
  query?: string;
}

const SearchBreadcrumb: React.FC<SearchBreadcrumbProps> = ({ items, query }) => {
  const navigate = useNavigate();
  const { t } = useSafeI18nWithRouter();

  const handleNavigation = (href?: string) => {
    if (href) {
      navigate(href);
    }
  };

  const allItems = [
    { label: t('home'), href: '/' },
    ...items,
    ...(query ? [{ label: `${t('searchFor')}: "${query}"`, active: true }] : [])
  ];

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
      {allItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          
          {item.href && !item.active ? (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 text-muted-foreground hover:text-foreground"
              onClick={() => handleNavigation(item.href)}
            >
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {item.label}
            </Button>
          ) : (
            <span className={item.active ? 'text-foreground font-medium' : ''}>
              {index === 0 && <Home className="h-4 w-4 mr-1 inline" />}
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SearchBreadcrumb;