"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Restaurant & Cafe",
  "NGO & Non-Profit",
];

const projects = [
  {
    title: "Sparsh Rajasthan NGO",
    category: "NGO & Non-Profit",
    tech: ["React", "Donation Gateway", "SEO Optimized"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
    desc: "A purpose-driven digital presence engineered for community impact. Integrates scalable architecture and localized outreach features.",
    url: "https://sparshrajasthan.in",
  },
  {
    title: "The Inky Cafe Platform",
    category: "Restaurant & Cafe",
    tech: ["Next.js 14", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
    desc: "A high-conversion digital menu and ordering platform built for modern cafes, featuring seamless navigation and rich visual storytelling.",
    url: "https://cafe-demo-inky.vercel.app/",
  },
  {
    title: "Paradise Restaurant Suite",
    category: "Restaurant & Cafe",
    tech: ["Next.js", "Online Booking", "Vercel"],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop",
    desc: "An immersive, premium restaurant website designed to drive reservations and showcase culinary excellence through dynamic layouts.",
    url: "https://paradise-demo-roan.vercel.app/",
  },
  {
    title: "Shakti Foundation Website",
    category: "NGO & Non-Profit",
    tech: ["Next.js", "Donations", "Responsive"],
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop",
    desc: "A powerful platform designed to amplify the mission of Shakti Foundation, featuring streamlined donation flows and engaging community stories.",
    url: "https://shakti-demo-nine.vercel.app/",
  },
  {
    title: "Rashtriya Mook Badhir Vidyalaya",
    category: "NGO & Non-Profit",
    tech: ["Next.js", "Accessibility", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    desc: "An inclusive and accessible educational platform built to empower differently-abled students and foster community engagement.",
    url: "https://rashtriya-mook-demo.vercel.app/",
  },
];

export function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer duration-300 ${
                isActive
                  ? "text-white shadow-md shadow-amber-950/15"
                  : "bg-amber-500/5/50 hover:bg-amber-500/10/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50 text-slate-700 dark:text-slate-300"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {isActive && (
                <motion.span
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-[#4E3629] dark:bg-[#B58A63] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid Showcase */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              data-cursor-text="View"
              className="group flex flex-col rounded-3xl bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-950/5 hover:border-[#B58A63]/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Project Image Panel */}
              <div className="h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF0E6] bg-[#4E3629]/80 px-2.5 py-1 rounded-full border border-amber-900/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details Panel */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-[#2C1E15] dark:text-white group-hover:text-[#B58A63] transition-colors flex items-center justify-between gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#B58A63] shrink-0" />
                  </h3>
                  <p className="text-[#5D4D44] dark:text-slate-400 text-xs leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-amber-900/10 dark:border-zinc-800/40">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-amber-500/5 dark:bg-zinc-950 text-[#8C7A6B] dark:text-slate-450 text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
