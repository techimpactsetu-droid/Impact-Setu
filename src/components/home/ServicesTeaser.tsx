"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Megaphone, Share2, Palette, Activity, Check } from "lucide-react";

export const servicesData = [
  {
    title: "Website Development",
    icon: <Globe className="h-6 w-6" />,
    description: "High-performance websites designed to convert visitors into loyal clients.",
    items: [
      "Business Websites",
      "NGO Websites",
      "Coaching Websites",
      "Cafe Websites",
      "Landing Pages",
      "Portfolio Websites",
    ],
    color: "from-[#4E3629] to-[#8B5A2B]",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="h-6 w-6" />,
    description: "Data-driven marketing campaigns that scale your traffic and revenue.",
    items: [
      "SEO (Search Engine Optimization)",
      "Local SEO & Maps Optimization",
      "Google Business Optimization",
      "Performance Marketing (PPC)",
    ],
    color: "from-[#8B5A2B] to-[#B58A63]",
  },
  {
    title: "Social Media Management",
    icon: <Share2 className="h-6 w-6" />,
    description: "Grow an active, engaged audience across modern social platforms.",
    items: [
      "Instagram Management",
      "Facebook Management",
      "LinkedIn Management",
      "Content Planning & Strategy",
    ],
    color: "from-[#B58A63] to-[#DEB887]",
  },
  {
    title: "Branding Services",
    icon: <Palette className="h-6 w-6" />,
    description: "Craft a memorable identity that tells your story and commands premium value.",
    items: [
      "Logo Design & Iconography",
      "Brand Identity & Style Guides",
      "Business Cards & Stationery",
      "Brochures & Creative Collateral",
    ],
    color: "from-[#A0522D] to-[#CD853F]",
  },
  {
    title: "Business Solutions",
    icon: <Activity className="h-6 w-6" />,
    description: "Complete operations setup so you can focus entirely on growing your business.",
    items: [
      "Domain & Hosting Setup",
      "Business Email Setup",
      "Website Maintenance",
      "Technical Support & Security",
    ],
    color: "from-[#8B7355] to-[#C1A478]",
  },
  {
    title: "E-Commerce Development",
    icon: <Globe className="h-6 w-6" />,
    description: "Fully custom online stores built for high volume sales and lightning fast checkouts.",
    items: [
      "Shopify & Custom Stores",
      "Payment Gateway Integration",
      "Inventory Management Systems",
      "Conversion Rate Optimization",
    ],
    color: "from-[#4E3629] to-[#8B5A2B]",
  },
];

import { ScrollReveal } from "@/components/ScrollReveal";

export function ServicesTeaser() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              Our Expertise
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
              Complete <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Digital Solutions</span> Built for Growth
            </p>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
            <p className="text-[#5C4D44] dark:text-slate-400 text-sm max-w-lg mx-auto">
              From design to marketing, we bridge the gap between your ideas and digital excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex flex-col p-8 rounded-3xl bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/5 hover:border-[#B58A63]/30 group relative overflow-hidden"
            >
              {/* Colored Card Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`} />
              
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B58A63] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#B58A63] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2C1E15] dark:text-white group-hover:text-[#B58A63] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#5D4D44] dark:text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Offerings list */}
              <ul className="space-y-3 mt-auto">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#5D4D44] dark:text-slate-400 font-medium">
                    <Check className="h-3.5 w-3.5 text-[#B58A63] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-16">
            <Link href="/services">
              <button className="px-7 py-3 rounded-full bg-[#4E3629] hover:bg-[#3D271D] text-white dark:bg-white dark:hover:bg-amber-50/50 dark:text-[#2C1E15] font-bold text-sm shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                Explore All Services
              </button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

