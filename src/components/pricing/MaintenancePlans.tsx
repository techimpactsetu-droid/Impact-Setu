"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Settings, Server, Zap, LifeBuoy, Clock } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Essential Care",
    price: "₹3,999",
    period: "/year",
    desc: "Perfect for small businesses that need reliable website maintenance.",
    features: [
      "Annual Domain Renewal",
      "Annual Hosting Renewal",
      "SSL Certificate Management",
      "Website Security Monitoring",
      "Monthly Website Backups",
      "Technical Support",
      "Uptime Monitoring"
    ],
    buttonText: "Choose Essential Care",
    popular: false,
    badge: null,
  },
  {
    name: "Business Care",
    price: "₹5,999",
    period: "/year",
    desc: "Ideal for growing businesses that require regular support and updates.",
    features: [
      "Everything in Essential Care",
      "Up to 2 Content Updates Per Month",
      "Contact Form Monitoring",
      "WhatsApp Integration Support",
      "Priority Technical Support",
      "Monthly Website Health Reports",
      "Faster Issue Resolution"
    ],
    buttonText: "Choose Business Care",
    popular: true,
    badge: "MOST POPULAR ⭐",
  },
  {
    name: "Premium Care",
    price: "₹7,999",
    period: "/year",
    desc: "Complete website management for businesses that want maximum support and performance.",
    features: [
      "Everything in Business Care",
      "Up to 5 Content Updates Per Month",
      "New Section/Page Updates",
      "Performance Optimization",
      "Quarterly Website Improvements",
      "SEO Health Monitoring",
      "Highest Priority Support",
      "Dedicated Account Assistance"
    ],
    buttonText: "Choose Premium Care",
    popular: false,
    badge: "BEST VALUE",
  },
];

const trustFeatures = [
  { icon: Settings, title: "No Technical Hassles" },
  { icon: Shield, title: "Secure & Protected Website" },
  { icon: Server, title: "Regular Backups" },
  { icon: Zap, title: "Fast Support" },
  { icon: Shield, title: "Reliable Hosting Management" },
  { icon: LifeBuoy, title: "Peace of Mind Throughout The Year" },
];

export function MaintenancePlans() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#1A100B] border-t border-amber-900/10 dark:border-zinc-800/50 mt-16 rounded-[2rem] shadow-sm">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B58A63]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8B5A2B]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1E15] dark:text-white">
            Keep Your Website Running Smoothly
          </h2>
          <p className="text-[#5D4D44] dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Your website is a long-term digital asset. Our annual care plans ensure security, reliability, performance and peace of mind.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                ? "bg-[#2C1E15] dark:bg-[#241710] text-white shadow-2xl shadow-amber-950/20 border border-[#4E3629] dark:border-[#4E3629]" 
                : "bg-[#FDFBF7] dark:bg-[#1A100B] border border-amber-900/10 dark:border-zinc-800/50 hover:shadow-xl hover:shadow-amber-900/5 dark:hover:shadow-black/50"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap shadow-lg ${
                  plan.popular ? "bg-[#B58A63] text-white" : "bg-[#4E3629] text-white dark:bg-zinc-800"
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-8 mt-4">
                <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? "text-white" : "text-[#2C1E15] dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm min-h-[40px] ${plan.popular ? "text-slate-300" : "text-[#5D4D44] dark:text-slate-400"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-[#2C1E15] dark:text-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-semibold ${plan.popular ? "text-slate-400" : "text-[#8C7A6B]"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-[#B58A63]" : "text-[#B58A63]"}`} />
                    <span className={`text-sm leading-tight ${plan.popular ? "text-slate-200" : "text-[#5D4D44] dark:text-slate-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={`/contact?subject=Maintenance%20Plan:%20${encodeURIComponent(plan.name)}`} className="mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-md ${
                  plan.popular 
                  ? "bg-[#B58A63] hover:bg-[#D4B895] text-white hover:text-[#2C1E15] shadow-[#B58A63]/20 hover:shadow-[#B58A63]/40" 
                  : "bg-transparent border-2 border-[#2C1E15] hover:bg-[#2C1E15] text-[#2C1E15] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#2C1E15]"
                }`}>
                  {plan.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="pt-16 border-t border-amber-900/10 dark:border-zinc-800/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#2C1E15] dark:text-white">
              Why Choose ImpactSetu Care Plans?
            </h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {trustFeatures.map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#FDFBF7] dark:bg-zinc-900/50 border border-amber-900/10 dark:border-zinc-800/50"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[#B58A63]" />
                </div>
                <h4 className="text-sm font-bold text-[#2C1E15] dark:text-white leading-tight">
                  {feat.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
