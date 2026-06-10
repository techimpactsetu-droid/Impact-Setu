"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // mounted
  }, []);

  return (
    <>
      {/* 
        The Digital Bridge Curtain 
        It starts fully covering the screen.
        Then lines draw from left and right, meet in the middle (forming a bridge).
        A spark appears.
        Then the whole curtain slides down out of view, revealing the new page.
      */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative w-64 h-32 flex items-center justify-center">
          
          {/* Left Pillar */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute left-0 bottom-0 w-2 rounded-t-sm bg-[#4E3629]"
          />
          
          {/* Right Pillar */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-0 bottom-0 w-2 rounded-t-sm bg-[#4E3629]"
          />
          
          {/* Left half of the bridge */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
            className="absolute left-0 top-1/2 h-1.5 bg-[#B58A63] origin-left shadow-[0_0_10px_rgba(181,138,99,0.5)]"
          />
          
          {/* Right half of the bridge */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
            className="absolute right-0 top-1/2 h-1.5 bg-[#B58A63] origin-right shadow-[0_0_10px_rgba(181,138,99,0.5)]"
          />
          
          {/* The Connection Spark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-amber-400 rounded-full shadow-[0_0_30px_rgba(251,191,36,1)]"
          />
          
          {/* Digital Dots / Nodes rising up */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -20, opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#B58A63] rounded-full"
            />
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-8 text-[#4E3629] font-bold tracking-[0.2em] uppercase text-xs"
        >
          Building Impact Bridge
        </motion.div>
      </motion.div>

      {/* The Actual Page Content sliding up slightly as the curtain drops */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
        className="flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
