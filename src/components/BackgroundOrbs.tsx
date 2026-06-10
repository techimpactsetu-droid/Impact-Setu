"use client";

import React from "react";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-50/20 dark:bg-slate-950/20">
      {/* Warm Gold/Amber Orb */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#FAF0E6] to-[#EEDC82]/40 blur-[130px] opacity-[0.35] dark:opacity-[0.15] will-change-transform" />

      {/* Warm Bisque/Bronze Orb */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#FFE4C4] to-[#DEB887]/40 blur-[150px] opacity-[0.35] dark:opacity-[0.15] will-change-transform" />

      {/* Moccasin/Sand Orb */}
      <div className="absolute top-[35%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-[#F5F5DC] via-[#FFE4B5]/60 to-[#F4A460]/30 blur-[140px] opacity-[0.3] dark:opacity-[0.1] will-change-transform" />
    </div>
  );
}

