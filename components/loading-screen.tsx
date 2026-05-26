"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LETTERS = "DIGITAL APEX".split("");

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hold for letters to animate in (~1.4s) + brief pause, then exit
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a14]"
          initial={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 1.15,
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle radial glow behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
          </div>

          <div className="relative flex items-center gap-[0.06em] select-none">
            {LETTERS.map((char, i) =>
              char === " " ? (
                <span key={i} className="w-[0.35em]" />
              ) : (
                <span
                  key={i}
                  className="loading-char inline-block text-white font-bold tracking-tight"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 6rem)",
                    animationDelay: `${i * 70}ms`,
                  }}
                >
                  {char}
                </span>
              )
            )}
          </div>

          {/* Bottom tagline */}
          <motion.p
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.3em] text-white/70 uppercase"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } }}
          >
            IT Consulting & Solutions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
