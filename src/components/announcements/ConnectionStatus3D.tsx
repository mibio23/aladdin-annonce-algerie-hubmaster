import React from 'react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Wifi, WifiOff } from 'lucide-react';

interface ConnectionStatus3DProps {
  className?: string;
}

const ConnectionStatus3D: React.FC<ConnectionStatus3DProps> = ({ className }) => {
  const { user } = useAuth();
  const isConnected = !!user;

  const baseClasses = `
    relative inline-flex items-center justify-center
    font-bold rounded-2xl transition-all duration-300
    transform-gpu select-none
    shadow-2xl border-4 border-solid transform-style-3d
    before:absolute before:inset-0 before:rounded-2xl
    before:bg-gradient-to-t before:opacity-30
    after:absolute after:inset-0 after:rounded-2xl
    after:bg-gradient-to-b after:opacity-20
    [box-shadow:_0_8px_30px_rgb(0_0_0_/_0.12),_0_0_0_1px_rgb(255_255_255_/_0.05)_inset]
    px-4 py-2 text-sm min-h-[40px]
  `;

  const statusClasses = isConnected 
    ? `
      bg-gradient-to-b from-primary via-primary to-primary/80
      border-primary/20 text-primary-foreground
      shadow-primary/40
      before:from-white/40 before:to-transparent
      after:from-transparent after:to-black/30
    `
    : `
      bg-gradient-to-b from-destructive via-destructive to-destructive/80
      border-destructive/20 text-destructive-foreground
      shadow-destructive/40
      before:from-white/40 before:to-transparent
      after:from-transparent after:to-black/30
    `;

  return (
    <div
      className={cn(
        baseClasses,
        statusClasses,
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isConnected ? (
          <>
            <Wifi className="w-4 h-4" />
            Connecté
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            Déconnecté
          </>
        )}
      </span>
    </div>
  );
};

export default ConnectionStatus3D;