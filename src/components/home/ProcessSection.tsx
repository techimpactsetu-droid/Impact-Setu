"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    icon: <Search className="h-6 w-6" />,
    description: "We dive deep into your brand, target audience, and business goals to outline a roadmap for success.",
  },
  {
    id: "02",
    title: "Design & Architecture",
    icon: <PenTool className="h-6 w-6" />,
    description: "Our team crafts wireframes and stunning UI designs that ensure a seamless and intuitive user experience.",
  },
  {
    id: "03",
    title: "Development & Integration",
    icon: <Code className="h-6 w-6" />,
    description: "We write clean, high-performance code, integrating modern APIs and CMS tools to bring the design to life.",
  },
  {
    id: "04",
    title: "Launch & Scale",
    icon: <Rocket className="h-6 w-6" />,
    description: "After rigorous testing, we launch your platform and set up marketing funnels to scale your online presence.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              How We Work
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
              A Proven <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Process</span> to Digital Success
            </p>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
            <p className="text-[#5C4D44] dark:text-slate-400 text-sm max-w-lg mx-auto">
              We follow a transparent, milestone-driven approach to ensure every project is delivered on time, within budget, and above expectations.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 dark:text-zinc-800/30 select-none z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-amber-50 dark:group-hover:text-zinc-800/50">
                {step.id}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFEB] dark:bg-zinc-800 flex items-center justify-center text-[#B58A63] mb-6 group-hover:bg-[#B58A63] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5D4D44] dark:text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
