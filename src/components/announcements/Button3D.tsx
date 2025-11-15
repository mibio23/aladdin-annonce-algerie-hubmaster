import React from 'react';
import { cn } from '@/lib/utils';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const Button3D: React.FC<Button3DProps> = ({
  children,
  onClick,
  variant = 'secondary',
  size = 'md',
  className,
  disabled = false
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-bold rounded-2xl transition-all duration-300
    transform-gpu cursor-pointer select-none
    shadow-2xl active:scale-90 active:shadow-lg
    border-4 border-solid transform-style-3d
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-gradient-to-t before:opacity-30
    after:absolute after:inset-0 after:rounded-2xl
    after:bg-gradient-to-b after:opacity-20
    hover:shadow-3xl hover:-translate-y-2 hover:scale-105
    active:translate-y-1 active:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:translate-y-0 disabled:hover:shadow-2xl
    [box-shadow:_0_8px_30px_rgb(0_0_0_/_0.12),_0_0_0_1px_rgb(255_255_255_/_0.05)_inset]
    hover:[box-shadow:_0_15px_40px_rgb(0_0_0_/_0.2),_0_0_0_2px_rgb(255_255_255_/_0.1)_inset]
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-b from-primary via-primary to-primary/80
      border-primary/20 text-primary-foreground
      shadow-primary/40 hover:shadow-primary/60
      before:from-white/40 before:to-transparent
      after:from-transparent after:to-black/30
      hover:from-primary/90 hover:via-primary hover:to-primary/70
    `,
    secondary: `
      bg-gradient-to-b from-secondary via-secondary to-secondary/80
      border-secondary/20 text-secondary-foreground
      shadow-secondary/40 hover:shadow-secondary/60
      before:from-white/60 before:to-transparent
      after:from-transparent after:to-black/15
      hover:from-secondary/90 hover:via-secondary hover:to-secondary/70
    `,
    outline: `
      bg-gradient-to-b from-background via-background to-muted
      border-border text-foreground
      shadow-muted/30 hover:shadow-muted/50
      before:from-white/90 before:to-transparent
      after:from-transparent after:to-black/8
      hover:from-background hover:via-background hover:to-muted/80
    `,
    danger: `
      bg-gradient-to-b from-destructive via-destructive to-destructive/80
      border-destructive/20 text-destructive-foreground
      shadow-destructive/40 hover:shadow-destructive/60
      before:from-white/40 before:to-transparent
      after:from-transparent after:to-black/30
      hover:from-destructive/90 hover:via-destructive hover:to-destructive/70
    `
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs min-h-[28px]',
    md: 'px-3 py-2 text-sm min-h-[36px]',
    lg: 'px-4 py-3 text-base min-h-[44px]'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center gap-1">
        {children}
      </span>
    </button>
  );
};

export default Button3D;