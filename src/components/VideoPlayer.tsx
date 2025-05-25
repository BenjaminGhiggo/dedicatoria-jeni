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
          <iframe
            src="public\video\ml.mp4"

            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="The Story of Flowers"
          ></iframe>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPlayer;
