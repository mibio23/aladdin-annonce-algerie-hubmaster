import React from 'react';
import { formatMultilingualText } from '@/lib/utils/textDirection';

interface MultilingualTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  detectLanguage?: boolean;
}

interface TextFormatting {
  style?: {
    direction?: 'rtl' | 'ltr';
    textAlign?: 'left' | 'right' | 'center' | string;
  };
  dir?: 'rtl' | 'ltr';
  lang?: string;
  className?: string;
  detectedLanguages?: string[];
}

/**
 * Composant pour afficher du texte multilingue avec la direction appropriée
 */
const MultilingualText: React.FC<MultilingualTextProps> = ({ 
  text, 
  className = '', 
  as: Component = 'span',
  detectLanguage = true 
}) => {
  if (!text) return null;
  
  const textProps: TextFormatting = detectLanguage ? formatMultilingualText(text) : {};
  const combinedClassName = `${className} ${textProps.className || ''}`.trim();
  
  return React.createElement(
    Component,
    {
      dir: textProps.dir,
      lang: textProps.lang,
      style: textProps.style,
      className: combinedClassName
    },
    text
  );
};

export default MultilingualText;