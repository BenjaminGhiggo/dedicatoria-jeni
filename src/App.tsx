import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import DedicationPage from './components/DedicationPage';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [showDedication, setShowDedication] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const handleReveal = () => {
    setShowDedication(true);
    setPlayVideo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-primary via-secondary to-accent overflow-hidden relative">
      <VideoPlayer 
        src="/video/ml.mp4" 
        isPlaying={playVideo} 
      />
      
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showDedication ? (
            <LandingPage key="landing" onReveal={handleReveal} />
          ) : (
            <DedicationPage key="dedication" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;