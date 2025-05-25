import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

interface RevealButtonProps {
  onClick: () => void;
  text: string;
}

const RevealButton: React.FC<RevealButtonProps> = ({ onClick, text }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      <span>{text}</span>
      <FiHeart className="animate-pulse-slow" />
    </motion.button>
  );
};

export default RevealButton;