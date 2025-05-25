import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoPlayer: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 w-full h-full overflow-hidden bg-black"
          style={{ zIndex: 10 }}
        >
          <video
            src="video/ml.webm"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayer;
