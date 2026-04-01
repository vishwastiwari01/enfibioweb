'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [showEnfibio, setShowEnfibio] = useState(false);

  useEffect(() => {
    // Show ENFIBIO text shortly after start
    const timerText = setTimeout(() => setShowEnfibio(true), 800);
    
    // Automatically complete loader after 3.5 seconds
    const timerEnd = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => {
      clearTimeout(timerText);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#010208' }}
        >
          {/* Background Text "ENFIBIO TECHNOLOGIES" */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none select-none z-0">
            <AnimatePresence>
              {showEnfibio && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.08, scale: 1.1 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="text-center"
                >
                  <h1 className="text-[12vw] font-black tracking-[-0.05em] leading-none mb-0 text-white">
                    ENFIBIO
                  </h1>
                  <h2 className="text-[2vw] font-bold tracking-[1.5em] text-white/40 -mt-2 ml-[1.5em]">
                    TECHNOLOGIES
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating Car / Drone Animation */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.5 }}
            animate={{
              opacity: 0.8,
              rotate: 0,
              scale: 1,
              y: [20, -20, 20],
            }}
            exit={{ scale: 1.5, opacity: 0, x: 200 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              rotate: { duration: 1 },
              y: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }}
            className="absolute z-10 w-[600px] h-auto pointer-events-none"
          >
            <img
              src="/astra_carrier.png"
              alt="Floating Vehicle"
              className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(37,99,235,0.4)]"
              style={{ filter: 'brightness(1.5) contrast(1.2)' }}
            />
          </motion.div>

          {/* Loading Progress Indicator */}
          <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 3.5, ease: "linear" }}
              className="h-[1px] bg-blue-500 shadow-[0_0_10px_#2563eb]"
            />
            <div className="mt-4 font-mono text-[10px] tracking-[0.3em] text-blue-500/60 uppercase">
              INITIALIZING SECURE LINK...
            </div>
          </div>
          
          {/* Decorative corner borders */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

