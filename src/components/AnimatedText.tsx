import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'fadeIn' | 'slideUp' | 'both';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  type = 'both',
}) => {
  const getVariants = () => {
    switch (type) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'slideUp':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'both':
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={getVariants()}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;