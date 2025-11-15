import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MagicalParticlesProps {
  isActive: boolean;
  originX: number;
  originY: number;
}

const MagicalParticles: React.FC<MagicalParticlesProps> = ({ 
  isActive, 
  originX, 
  originY
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Magical spiral effect */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute"
            style={{
              left: originX - 25,
              top: originY - 25,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 2, 3],
              rotate: [0, 360, 720, 1080]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
          >
            <div className="w-12 h-12 border-2 border-yellow-400 rounded-full opacity-50"
                 style={{
                   background: 'radial-gradient(circle, transparent 30%, hsl(45, 100%, 70%) 70%)',
                   boxShadow: '0 0 20px hsl(45, 100%, 70%)',
                 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagicalParticles;