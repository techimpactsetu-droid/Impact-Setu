"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  GraduationCap,
  Coffee,
  HeartPulse,
  Users,
  Briefcase,
  Rocket,
  Store,
  ArrowRight,
} from "lucide-react";

export const industriesData = [
  {
    name: "NGOs & Trusts",
    icon: <Heart className="h-5 w-5" />,
    description: "Donation bridges, impact reports, and search visibility.",
    need: "Impact transparency & donor trust",
  },
  {
    name: "Coaching Institutes",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Course enrollment, landing pages, and student inquiry tools.",
    need: "Lead generation & course marketing",
  },
  {
    name: "Schools & Academies",
    icon: <GraduationCap className="h-5 w-5" />,
    description: "Information desks, notice boards, and dynamic portals.",
    need: "Credibility & communications hub",
  },
  {
    name: "Cafes & Restaurants",
    icon: <Coffee className="h-5 w-5" />,
    description: "Digital menus, local SEO checkins, and reservation forms.",
    need: "Tables booked & foot traffic growth",
  },
  {
    name: "Clinics & Doctors",
    icon: <HeartPulse className="h-5 w-5" />,
    description: "Appointment booking systems, Google Maps placement, and blogs.",
    need: "Client bookings & patient trust",
  },
  {
    name: "Consultants & CAs",
    icon: <Users className="h-5 w-5" />,
    description: "Professional landing pages and automated contact collection.",
    need: "Authority building & lead generation",
  },
  {
    name: "Lawyers & Legal",
    icon: <Briefcase className="h-5 w-5" />,
    description: "Secure contact forms and professional digital profiles.",
    need: "Client trust & professional image",
  },
  {
    name: "Startups",
    icon: <Rocket className="h-5 w-5" />,
    description: "Fast-loading landing pages and initial digital marketing setup.",
    need: "Rapid growth & investor ready",
  },
  {
    name: "Local Retailers",
    icon: <Store className="h-5 w-5" />,
    description: "Local SEO map listings and simple catalog websites.",
    need: "Footfall increase & discovery",
  },
  {
    name: "Real Estate & Builders",
    icon: <Briefcase className="h-5 w-5" />,
    description: "Property listings, lead magnets, and elegant showcase portfolios.",
    need: "High-ticket leads & trust",
  },
  {
    name: "Fitness Centers & Gyms",
    icon: <HeartPulse className="h-5 w-5" />,
    description: "Membership signups, class schedules, and trainer profiles.",
    need: "Membership growth & retention",
  },
  {
    name: "Event Organizers",
    icon: <Users className="h-5 w-5" />,
    description: "Ticket sales integrations, event countdowns, and dynamic galleries.",
    need: "Ticket sales & hype building",
  },
];

import { ScrollReveal } from "@/components/ScrollReveal";

export function IndustriesTeaser() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-3">
              <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
                Who We Serve
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
                Tailored <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Digital Systems</span> for Every Domain
              </h3>
              <div className="h-1 w-20 bg-[#B58A63] rounded-full mt-2" />
            </div>
            <p className="text-[#5C4D44] dark:text-slate-400 text-sm max-w-md">
              We don&apos;t build generic websites. We build custom engines tailored to the specific business workflows of your industry.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 14,
                delay: index * 0.05,
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-6 rounded-2xl bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#B58A63]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#B58A63] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B58A63] group-hover:text-white">
                    {ind.icon}
                  </div>
                  <h4 className="font-bold text-[#2C1E15] dark:text-white text-base">
                    {ind.name}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#5D4D44] dark:text-slate-400 text-xs leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              {/* Focus Label */}
              <div className="mt-4 pt-3 border-t border-amber-900/10 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold">
                <span className="text-[#8C7A6B] dark:text-slate-500 uppercase tracking-wide">
                  Core Need:
                </span>
                <span className="text-[#B58A63]">
                  {ind.need}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Route Link */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mt-12">
            <Link href="/industries" className="inline-flex items-center gap-1.5 text-[#B58A63] hover:text-[#4E3629] dark:hover:text-[#D4B895] font-bold text-sm transition-colors group">
              Learn More About Our Industry Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

