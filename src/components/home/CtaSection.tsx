"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 bg-[#2C1E15] dark:bg-[#1A100B]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B58A63]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5A2B]/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Clock className="w-4 h-4 text-[#B58A63]" /> Fast Turnaround
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Launch Your Professional Website in <span className="text-[#B58A63]">7 Days</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to competitors with better digital presence. Get a premium, high-converting website built specifically for your local business—delivered in just one week.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#B58A63] hover:bg-[#8B5A2B] text-white font-bold rounded-full text-sm transition-all shadow-xl shadow-[#B58A63]/20 flex items-center justify-center gap-2 hover:-translate-y-1">
                View Pricing Packages <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-bold rounded-full text-sm transition-all flex items-center justify-center gap-2">
                Talk to an Expert
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
