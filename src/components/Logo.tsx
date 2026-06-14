"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Show logo for 18 seconds, then the premium animation for 12 seconds
    const interval = setInterval(() => {
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 12000); 
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center justify-center relative select-none group cursor-pointer ${className}`}>
      <AnimatePresence mode="wait">
        {!showAnimation ? (
          <motion.img
            key="logo"
            src="/logo-final.png"
            alt="ImpactSetu Logo"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-[1.03] dark:invert dark:brightness-125"
          />
        ) : (
          <motion.div
            key="animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)", transition: { duration: 0.5 } }}
            className="flex flex-col items-center justify-center w-[160px] md:w-[200px] h-full"
          >
            <div className="w-full h-[35px] sm:h-[40px] relative">
              <svg viewBox="0 0 240 100" className="w-full h-full text-[#B58A63] drop-shadow-md" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                
                {/* Subtle glow filter for the magic bridge elements */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Left & Right Landmasses (Communities) */}
                <motion.path
                  d="M10 90 Q30 90 50 100"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.path
                  d="M230 90 Q210 90 190 100"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />

                {/* Bridge Pillars */}
                <motion.path
                  d="M65 100 L65 30 M85 100 L85 30"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                />
                <motion.path
                  d="M155 100 L155 30 M175 100 L175 30"
                  strokeWidth="4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                />

                {/* The Golden Arch Connecting Them */}
                <motion.path
                  d="M65 45 Q120 -10 175 45"
                  strokeWidth="3.5"
                  stroke="#D4AF37"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 2.2 }}
                />

                {/* Main Deck (The Path) */}
                <motion.path
                  d="M45 75 L195 75"
                  strokeWidth="5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 3.5 }}
                />

                {/* Suspension Cables locking it in place */}
                <motion.path
                  d="M75 55 L95 75 M95 35 L115 75 M125 75 L145 35 M145 75 L165 55"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeIn", delay: 4.5 }}
                />
              </svg>
            </div>
            
            {/* Brand Text Fades In */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="flex flex-col items-center justify-center mt-1"
            >
              <h2 className="text-[#4E3629] dark:text-[#D4AF37] text-xs sm:text-sm font-black tracking-[0.25em] uppercase leading-none">
                Impact Setu
              </h2>
              <p className="text-[#8B5A2B] text-[8px] sm:text-[9px] font-medium tracking-wide mt-0.5">
                Building Digital Bridge
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
