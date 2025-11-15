
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  message: string;
  className?: string;
  showIcon?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  className,
  showIcon = true 
}) => {
  return (
    <div className={cn(
      'flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm',
      className
    )}>
      {showIcon && <AlertCircle className="w-4 h-4 flex-shrink-0" />}
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
