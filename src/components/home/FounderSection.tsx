"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#1A100B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Photo Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative max-w-sm mx-auto lg:max-w-none"
          >
            {/* Background Accent */}
            <div className="absolute inset-0 bg-[#B58A63] rounded-[2rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-20 dark:opacity-30" />
            
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/founder.jpg" 
                alt="Tejas Jain, Founder of ImpactSetu"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">Tejas Jain</h3>
                <p className="text-sm text-slate-300 font-medium">Founder, ImpactSetu</p>
              </div>
            </div>
          </motion.div>

          {/* Story Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 space-y-8"
          >
            <div>
              <span className="text-[#B58A63] font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#B58A63]" /> The Story Behind ImpactSetu
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
                &quot;We don&apos;t just build websites. We build digital engines for growth.&quot;
              </h2>
            </div>

            <div className="prose prose-slate dark:prose-invert text-[#5D4D44] dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                When I started ImpactSetu, I noticed a massive gap in the market. Local businesses, cafes, NGOs, and coaches were being sold basic, outdated websites that looked like they were built a decade ago. 
              </p>
              <p>
                Worse, these websites weren&apos;t actually helping them get more customers. They were just digital business cards gathering dust.
              </p>
              <p>
                <strong>I wanted to change that.</strong>
              </p>
              <p>
                At ImpactSetu, our philosophy is simple: your website should be your hardest-working employee. Whether it&apos;s taking table reservations at 2 AM, answering FAQs, or capturing high-intent leads, we engineer digital experiences that actually drive revenue and save you time.
              </p>
              <p>
                You know your business better than anyone. We know how to translate that excellence into a premium digital experience. Let&apos;s build something incredible together.
              </p>
            </div>

            <div className="pt-6 border-t border-amber-900/10 dark:border-zinc-800/50">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#2C1E15] hover:bg-[#1A100B] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#2C1E15] font-bold rounded-full text-sm transition-all shadow-xl hover:-translate-y-1">
                  Book a Consultation with Tejas
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
