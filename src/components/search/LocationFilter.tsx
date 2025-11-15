import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { wilayas } from "@/data/wilayaData";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

interface LocationFilterProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ 
  value, 
  onChange, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useSafeI18nWithRouter();

  const selectedWilaya = wilayas.find(w => w.name === value);
  const getWilayaDisplayName = (wilaya: any) => {
    if (language === 'ar') return wilaya.name_ar;
    if (language === 'fr') return wilaya.name_fr;
    return wilaya.name;
  };
  
  const displayValue = selectedWilaya 
    ? `${String(selectedWilaya.code).padStart(2, '0')} - ${getWilayaDisplayName(selectedWilaya)}`
    : t('search.allAlgeria');

  const handleSelect = (wilayaValue: string) => {
    onChange(wilayaValue);
    setIsOpen(false);
  };

  return (
    <div className={`space-y-2 relative ${className}`}>
      <label className="text-xs font-medium">{t('search.location')}</label>
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <span className="truncate">{displayValue}</span>
        <ChevronDown className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[98]" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 right-0 z-[99] mt-1 max-h-[200px] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-lg">
            <div className="p-1">
              <button
                type="button"
                onClick={() => handleSelect("all")}
                className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
              >
                {t('search.allAlgeria')}
              </button>
              
              {wilayas.map(wilaya => (
                <button
                  key={wilaya.code}
                  type="button"
                  onClick={() => handleSelect(wilaya.name)}
                  className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                >
                  {String(wilaya.code).padStart(2, '0')} - {getWilayaDisplayName(wilaya)}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationFilter;