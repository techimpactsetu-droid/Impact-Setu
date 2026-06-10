"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // GSAP text reveal
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(
      ".reveal-tag",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      ".reveal-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
      "-=0.5"
    )
    .fromTo(
      ".reveal-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      ".reveal-buttons",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6 },
      "-=0.4"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Top Tagline Badges */}
        <div className="reveal-tag inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-900/10 dark:border-amber-500/20 bg-amber-50/60 dark:bg-amber-950/20 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#B58A63]" />
          Building Digital Bridges
        </div>
        
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15]">
          <span className="reveal-title block text-[#2C1E15] dark:text-white">
            Transforming <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Ideas</span>
          </span>
          <span className="reveal-title block bg-clip-text text-transparent bg-gradient-to-r from-[#4E3629] via-[#8B5A2B] to-[#B58A63] dark:from-[#D4B895] dark:via-[#B58A63] dark:to-[#FAF0E6] py-1">
            Into Digital Success
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: opacityText }}
          className="reveal-sub text-amber-950/70 dark:text-slate-400 text-base sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Professional Websites, Digital Marketing, Social Media Growth, and Complete Digital Solutions customized for modern organizations.
        </motion.p>

        {/* Action CTAs */}
        <div className="reveal-buttons flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#4E3629] to-[#8B5A2B] hover:from-[#3D271D] hover:to-[#704825] text-white font-bold transition-all duration-300 shadow-md shadow-amber-950/25 hover:shadow-amber-950/35 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer">
              Get Free Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="/portfolio" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-[#241710] hover:bg-amber-50/50 dark:hover:bg-amber-950/10 text-[#4E3629] dark:text-[#F5EFEB] font-bold transition-all border border-amber-900/10 dark:border-amber-800/30 hover:border-amber-900/20 dark:hover:border-amber-700/50 flex items-center justify-center gap-2 cursor-pointer shadow-sm">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

