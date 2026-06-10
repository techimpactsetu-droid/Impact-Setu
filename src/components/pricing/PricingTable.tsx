"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Info, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Starter Website",
    price: 6999,
    description: "Ideal for small cafes, local stores, and simple personal portfolios.",
    features: [
      "1 Page Responsive Landing Page",
      "Mobile-First Design Flow",
      "WhatsApp Chat Integration",
      "Basic Google Maps SEO Setup",
      "Free Domain & Hosting Setup Guidance",
      "1 Month Technical Support",
    ],
    cta: "Start with Starter",
    popular: false,
    color: "border-slate-200/50 dark:border-zinc-800/40",
  },
  {
    name: "Growth Website",
    price: 10999,
    description: "Ideal for coaching centers, schools, clinics, and growing brands.",
    features: [
      "Up to 5 Pages Custom Layout",
      "Custom Graphic Accents",
      "Standard Inquiry Contact Form",
      "Full Google Maps Profile Setup",
      "Basic On-Page SEO (Keywords, Speed)",
      "3 Months Technical Support",
    ],
    cta: "Scale with Growth",
    popular: false,
    color: "border-slate-200/50 dark:border-zinc-800/40",
  },
  {
    name: "Professional",
    price: 15999,
    description: "Highly recommended for organizations looking to establish a premium digital edge.",
    features: [
      "Up to 10 Pages Custom Architecture",
      "Fluid Animations (Framer Motion / GSAP)",
      "Interactive Components (FAQs, Carousels)",
      "Zod-Validated Multi-Lead Capture Form",
      "Google Search Console Integration",
      "6 Months Priority Maintenance Support",
    ],
    cta: "Go Professional",
    popular: true,
    color: "border-[#B58A63] dark:border-[#B58A63] shadow-lg shadow-amber-950/5",
  },
  {
    name: "Premium Custom",
    price: 26999,
    description: "Fully-featured custom setups with complex database or checkout workflows.",
    features: [
      "Unlimited Pages Architecture",
      "Advanced Dynamic API Integrations",
      "E-Commerce / Donation / Calendly setup",
      "Custom blog system & administration",
      "Luxury branding designs & copywriting",
      "12 Months Complete Priority Support",
    ],
    cta: "Unlock Premium",
    popular: false,
    color: "border-slate-200/50 dark:border-zinc-800/40",
  },
];

export function PricingTable() {
  return (
    <div className="space-y-16">
      {/* Plans Badge */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="inline-flex items-center px-6 py-2 bg-amber-500/10 text-[#B58A63] rounded-full text-xs font-bold uppercase tracking-widest border border-amber-500/20 shadow-sm">
          Plans
        </div>
      </div>

      {/* Cards Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: idx * 0.08,
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`p-8 rounded-3xl bg-white/70 dark:bg-[#241710]/40 border backdrop-blur-md flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl ${pkg.color || "border-amber-900/10 dark:border-zinc-800/40"}`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B58A63] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
            )}

            <div className="space-y-6">
              {/* Card Header */}
              <div>
                <h3 className="font-extrabold text-base text-[#2C1E15] dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#5D4D44] dark:text-slate-400 text-xs min-h-[48px] leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Price Panel */}
              <div className="py-4 border-y border-amber-900/10 dark:border-zinc-800/40 flex items-baseline gap-1">
                <span className="text-[#8C7A6B] dark:text-slate-400 text-sm font-semibold">
                  ₹
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white">
                  {pkg.price.toLocaleString("en-IN")}
                </span>
                <span className="text-[#8C7A6B] text-[10px] font-bold ml-1 uppercase">
                  One-Time Payment
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-3">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-[#5D4D44] dark:text-slate-350">
                    <Check className="h-4 w-4 text-[#B58A63] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>
                <button
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 ${
                    pkg.popular
                      ? "bg-[#4E3629] hover:bg-[#3D271D] text-white hover:scale-105 active:scale-95 shadow-amber-950/10"
                      : "bg-white hover:bg-amber-50/50 dark:bg-[#241710] dark:hover:bg-[#332016] text-[#2C1E15] dark:text-slate-100 border border-amber-900/10 dark:border-zinc-800"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Callout */}
      <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-900/10 flex items-start gap-3 max-w-3xl mx-auto text-xs text-[#5D4D44] dark:text-slate-400 leading-relaxed font-semibold">
        <Info className="h-5 w-5 text-[#B58A63] shrink-0 mt-0.5" />
        <p>
          * Domain registration and hosting service fees depend on name availability and custom scaling bandwidth. ImpactSetu handles the entire integration and setup free of charge as part of our package. Ongoing monthly or annual support covers security updates, SEO maintenance checks, and minor copy edits.
        </p>
      </div>
    </div>
  );
}
