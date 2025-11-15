import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSafeI18nWithRouter } from "@/lib/i18n/i18nContextWithRouter";

interface ConditionFilterProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

const ConditionFilter: React.FC<ConditionFilterProps> = ({ 
  value = "all", 
  onChange, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useSafeI18nWithRouter();

  const conditionOptions = [
    { value: "all", label: t('search.all') },
    { value: "new", label: t('search.new') },
    { value: "used", label: t('search.used') },
    { value: "refurbished", label: t('search.refurbished') },
    { value: "defective", label: t('search.defective') },
    { value: "parts", label: t('search.parts') }
  ];

  const selectedOption = conditionOptions.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : t('search.all');

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`space-y-2 relative ${className}`}>
      <label className="text-xs font-medium">{t('search.condition')}</label>
      
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
              {conditionOptions.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ConditionFilter;