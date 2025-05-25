import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import AnimatedText from './AnimatedText';
import GlassmorphicCard from './GlassmorphicCard';

const DedicationPage: React.FC = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const subtextTimer = setTimeout(() => {
      setShowSubtext(true);
    }, 3000);

    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => {
      clearTimeout(subtextTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="text-7xl md:text-9xl font-playfair font-bold text-black mb-6"
      >
        JENIFER
      </motion.h1>

      {showSubtext && (
        <AnimatedText
          text="💫"
          className="text-2xl md:text-3xl font-playfair italic text-black font-bold mb-8"
          delay={0.2}
          duration={0.8}
        />
      )}

      {showMessage && (
        <GlassmorphicCard className="max-w-lg mx-auto relative top-[90px]">


          <AnimatedText
            text="Cada palabra en esta página es para ti, porque significas más de lo que las palabras pueden decir. 🌹✨"
            className="text-black text-lg md:text-xl font-playfair leading-relaxed font-bold"
            delay={0.3}
            duration={0.8}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center mt-6"
          >
            <FiHeart className="text-black text-3xl animate-pulse-slow" />
          </motion.div>
        </GlassmorphicCard>
      )}
    </motion.div>
  );
};

export default DedicationPage