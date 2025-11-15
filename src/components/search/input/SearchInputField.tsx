import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputFieldProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const SearchInputField: React.FC<SearchInputFieldProps> = ({
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur
}) => {
  return (
    <div className="relative flex-grow max-w-2xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full p-4 pl-14 border-4 border-red-700 focus:border-red-800 rounded-lg bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 placeholder-gray-800 dark:placeholder-slate-300 placeholder:font-extrabold placeholder:text-lg transition-colors duration-200 min-w-[600px]"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-red-700" />
    </div>
  );
};

export default SearchInputField;