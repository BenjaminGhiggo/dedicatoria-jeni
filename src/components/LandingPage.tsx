import React from 'react';
import { motion } from 'framer-motion';
import RevealButton from './RevealButton';
import GlassmorphicCard from './GlassmorphicCard';

interface LandingPageProps {
  onReveal: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onReveal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <GlassmorphicCard className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl font-playfair font-semibold mb-6 text-black">
            Hola Jeni 🌸
          </h2>
          <p className="text-black font-medium mb-8">
            Tengo algo especial para ti...
          </p>
          <RevealButton 
            onClick={onReveal} 
            text={`¿Quieres ver la sorpresa?\n👉👈`}  
          />
        </motion.div>
      </GlassmorphicCard>
    </motion.div>
  );
};

export default LandingPage