"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Award, Layers, ShieldCheck, HeartHandshake } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

function StatItem({ value, suffix, label, icon, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md shadow-sm relative group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#B58A63]/30 hover:scale-[1.03]"
    >
      {/* Background shape */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-amber-50/50 dark:bg-amber-950/10 group-hover:bg-[#B58A63]/5 transition-colors duration-300" />
      
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B58A63] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Value */}
      <div className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white mb-2 flex items-baseline gap-0.5">
        <span>{count}</span>
        <span className="text-[#B58A63]">{suffix}</span>
      </div>

      {/* Label */}
      <p className="text-[#8C7A6B] dark:text-slate-400 text-sm font-semibold tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-12 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem
              value={50}
              suffix="+"
              label="Projects Delivered"
              icon={<Award className="h-6 w-6" />}
            />
            <StatItem
              value={100}
              suffix="%"
              label="Responsive Designs"
              icon={<Layers className="h-6 w-6" />}
            />
            <StatItem
              value={24}
              suffix="/7"
              label="Support Desk"
              icon={<ShieldCheck className="h-6 w-6" />}
            />
            <StatItem
              value={12}
              suffix="+"
              label="Industries Served"
              icon={<HeartHandshake className="h-6 w-6" />}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

