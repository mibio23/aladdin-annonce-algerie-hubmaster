import React, { useState, useEffect, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SmartAnnouncementsGridProps {
  children: React.ReactNode[];
  itemsPerRow?: number;
  className?: string;
}

const SmartAnnouncementsGrid: React.FC<SmartAnnouncementsGridProps> = ({ 
  children, 
  itemsPerRow = 8,
  className = ""
}) => {
  useIsMobile();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  // Calcul intelligent du nombre de colonnes selon la taille d'écran
  const getColumnsCount = useMemo(() => {
    if (screenWidth === 0) return itemsPerRow; // Valeur par défaut pendant le loading
    
    if (screenWidth < 640) return 1;      // Mobile: 1 colonne
    if (screenWidth < 768) return 2;      // Small: 2 colonnes
    if (screenWidth < 1024) return 3;     // Medium: 3 colonnes
    if (screenWidth < 1280) return 3;     // Large: 3 colonnes (plus large pour les cartes)
    if (screenWidth < 1536) return 4;     // XL: 4 colonnes (plus large pour les cartes)
    return 5;                             // 2XL+: 5 colonnes maximum pour éviter les cartes trop petites
  }, [screenWidth, itemsPerRow]);

  // Organiser les éléments en lignes
  const organizeInRows = useMemo(() => {
    const rows = [];
    const columnsCount = getColumnsCount;
    
    for (let i = 0; i < children.length; i += columnsCount) {
      const rowItems = children.slice(i, i + columnsCount);
      rows.push(rowItems);
    }
    
    return rows;
  }, [children, getColumnsCount]);

  // Classes CSS pour le grid responsive
  const gridClasses = useMemo(() => {
    const baseClasses = "grid gap-6";
    
    if (screenWidth < 640) return `${baseClasses} grid-cols-1`;
    if (screenWidth < 768) return `${baseClasses} grid-cols-2`;
    if (screenWidth < 1024) return `${baseClasses} grid-cols-3`;
    if (screenWidth < 1280) return `${baseClasses} grid-cols-3`;
    if (screenWidth < 1536) return `${baseClasses} grid-cols-4`;
    return `${baseClasses} grid-cols-5`;
  }, [screenWidth]);

  return (
    <div className={`space-y-4 ${className}`}>
      {organizeInRows.map((row, rowIndex) => (
        <div key={rowIndex} className={gridClasses}>
          {row.map((child, itemIndex) => (
            <div key={`${rowIndex}-${itemIndex}`} className="w-full">
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SmartAnnouncementsGrid;