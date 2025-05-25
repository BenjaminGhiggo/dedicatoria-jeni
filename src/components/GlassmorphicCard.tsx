import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className={`backdrop-blur-md bg-white/40 rounded-2xl shadow-xl border border-white/30 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard;