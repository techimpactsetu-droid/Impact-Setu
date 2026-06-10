"use client";

import React from "react";
import { motion } from "framer-motion";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex-grow flex flex-col pt-20 min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.div>
  );
}
