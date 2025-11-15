
import React from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-gray-200 dark:border-slate-700 my-8">
      <div className="mb-4 text-slate-400 dark:text-slate-500">
        {React.cloneElement(icon, { size: 64, strokeWidth: 1 })}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
        {description}
      </p>
      {action && (
        <Button onClick={action.onClick} variant="orange">
          {action.label}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
