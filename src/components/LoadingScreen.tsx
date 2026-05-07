import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2700;

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(updateCounter);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 overflow-hidden"
    >
      {/* Top Left Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-[10px] md:text-xs text-accent uppercase tracking-[0.3em] font-bold"
      >
        Portfolio '26
      </motion.div>

      {/* Center Word Carousel */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-20 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Right Counter & Progress */}
      <div className="flex flex-col items-end gap-8">
        <div className="text-7xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none italic">
          {String(count).padStart(3, "0")}
        </div>
        
        <div className="w-full h-[1px] bg-stroke relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ 
              width: `${count}%`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
