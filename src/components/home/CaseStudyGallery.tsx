"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    id: "paradise",
    title: "The Paradise Cafe & Family Restaurant",
    category: "Hospitality & Dining",
    challenge: "Struggling to manage table reservations during peak hours and lacking a digital menu for quick browsing, leading to lost walk-in customers.",
    solution: "Developed a premium restaurant website with an integrated table reservation system, digital menu, and mobile-first design to drive local foot traffic.",
    features: [
      "Online Table Reservations",
      "Dynamic Digital Menu",
      "Event Booking System",
      "Mobile-First Experience",
    ],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
    url: "https://paradise-demo-one.vercel.app/",
  },
  {
    id: "inky",
    title: "Brew and Beans Cafe",
    category: "Modern Coffee Shop",
    challenge: "Needed a high-conversion digital presence that told their brand story visually while offering a seamless way to view their artisan menu.",
    solution: "Built a visually stunning, animation-rich landing page using Framer Motion to showcase their aesthetic, improving online engagement by 40%.",
    features: [
      "Immersive Storytelling",
      "Fluid Scroll Animations",
      "Interactive Gallery",
      "SEO Optimized Setup",
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    url: "https://brewand-beans-demo.vercel.app/",
  },
  {
    id: "ngo",
    title: "Sparsh Rajasthan NGO",
    category: "Non-Profit Organization",
    challenge: "Lacked a trustworthy platform to showcase community impact, making it difficult to attract new donors and volunteers.",
    solution: "A purpose-driven digital presence engineered for community impact, integrating scalable architecture and localized outreach features.",
    features: [
      "Secure Donation Gateway",
      "Volunteer Signup Flow",
      "Impact Tracking Dashboard",
      "Multilingual Support",
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    url: "https://sparshrajasthan.in",
  },
  {
    id: "shakti",
    title: "Shakti Foundation Website",
    category: "Non-Profit Organization",
    challenge: "Required a digital platform to amplify their mission, manage donations efficiently, and share impactful community stories.",
    solution: "Designed a powerful, responsive platform featuring streamlined donation flows and engaging content layouts to drive engagement.",
    features: [
      "Streamlined Donations",
      "Responsive Layouts",
      "Impact Stories",
      "Community Outreach",
    ],
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
    url: "https://shakti-demo-nine.vercel.app/",
  },
];

export function CaseStudyGallery() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent dark:from-amber-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#B58A63] font-bold tracking-widest uppercase text-xs">
            Live Demo Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1E15] dark:text-white">
            See Our Work In Action
          </h2>
          <p className="text-[#5D4D44] dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Don&apos;t just take our word for it. Explore real projects we&apos;ve built to solve actual business challenges. Click to view the live websites.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-amber-900/10 dark:shadow-black/50 border border-slate-100 dark:border-zinc-800">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-[#2C1E15] font-bold rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2 hover:bg-amber-50"
                    >
                      View Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -z-10 w-full h-full bg-amber-500/10 dark:bg-amber-900/20 rounded-[2rem] blur-3xl top-8 ${idx % 2 === 0 ? '-right-8' : '-left-8'}`} />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-[#B58A63] text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 border border-amber-900/10 dark:border-amber-900/30">
                    {study.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-[#2C1E15] dark:text-white mb-6">
                    {study.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Challenge */}
                  <div className="bg-slate-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                    <h4 className="text-sm font-bold text-[#4E3629] dark:text-[#D4B895] mb-2 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" /> Challenge
                    </h4>
                    <p className="text-sm text-[#5D4D44] dark:text-slate-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-[#4E3629]/5 dark:bg-[#B58A63]/10 p-5 rounded-2xl border border-amber-900/10 dark:border-amber-900/20">
                    <h4 className="text-sm font-bold text-[#4E3629] dark:text-[#D4B895] mb-2 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" /> Solution
                    </h4>
                    <p className="text-sm text-[#5D4D44] dark:text-slate-400 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-bold text-[#2C1E15] dark:text-slate-300 mb-4 uppercase tracking-wider">Features Implemented</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-[#5D4D44] dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-[#B58A63] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Button */}
                <div className="pt-4 lg:hidden">
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4E3629] hover:bg-[#3D271D] text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-amber-900/20"
                  >
                    View Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
