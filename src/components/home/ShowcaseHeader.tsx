
import React from "react";

interface ShowcaseHeaderProps {
  title: string;
  icon: React.ReactNode;
}

const ShowcaseHeader: React.FC<ShowcaseHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-slate-200 ml-2 font-playfair">
        {title}
      </h2>
    </div>
  );
};

export default ShowcaseHeader;
