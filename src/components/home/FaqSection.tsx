"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What digital services does ImpactSetu provide?",
    a: "We are a full-service digital agency. We provide premium Website Development, Search Engine Optimization (SEO & Local SEO), Social Media Management (Instagram, LinkedIn, Facebook), Graphic Branding (Logos, Brand Identity, Brochures), and Complete Business Solutions (Domain setups, hosting management, business emails, and ongoing support).",
  },
  {
    q: "Do you specialize in serving specific industries?",
    a: "Yes! We focus on helping local organizations establish a strong digital presence. Our core clients include NGOs & Trusts, Coaching Institutes, Schools, Cafes & Restaurants, Clinics, Financial/CA Firms, Consultants, Startups, and local Small Businesses.",
  },
  {
    q: "How much does a professional website cost?",
    a: "Our transparent packages fit budgets of all sizes. They start at ₹6,999 for Starter Websites (ideal for small businesses or cafes), ₹10,999 for Growth Websites, ₹15,999 for Professional Websites, and ₹26,999 for highly custom, feature-rich Premium Websites.",
  },
  {
    q: "Can you help set up domains, hosting, and business emails?",
    a: "Absolutely. We handle the complete technical setup. We register domains, set up fast secure hosting servers, configure professional business emails, and offer maintenance support so you don't have to worry about the tech.",
  },
  {
    q: "What is your project delivery timeline?",
    a: "Landing pages and basic websites are typically completed within 3 to 7 working days. Comprehensive professional websites, brand style sheets, or custom digital marketing plans usually take 10 to 20 days depending on scale.",
  },
  {
    q: "Do you offer SEO and content marketing services?",
    a: "Yes! We build every website with SEO best practices from day one. We also offer dedicated ongoing Local SEO packages to help you rank higher on Google Maps, and content marketing to drive organic traffic.",
  },
  {
    q: "Can you redesign my existing, outdated website?",
    a: "Absolutely. We can take your existing website, audit it for performance and UX bottlenecks, and completely revamp the design using modern frameworks like Next.js and Tailwind CSS for blazing fast speeds.",
  },
  {
    q: "Do you provide technical support after the website goes live?",
    a: "Yes, our commitment doesn't end at launch. We offer affordable maintenance packages that cover bug fixes, security updates, minor content edits, and performance monitoring to ensure your digital presence remains flawless.",
  },
];

import { ScrollReveal } from "@/components/ScrollReveal";

export function FaqSection() {
  return (
    <section className="py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
              Common Questions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
              Frequently <span className="font-serif font-normal italic text-[#B58A63] dark:text-[#D4B895]">Asked Questions</span>
            </h3>
            <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white/70 dark:bg-[#241710]/40 border border-amber-900/10 dark:border-zinc-800/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-sm">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-amber-900/10 dark:border-slate-800/60 py-1 last:border-none">
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-[#2C1E15] dark:text-white hover:text-[#B58A63] dark:hover:text-[#B58A63] transition-colors py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5D4D44] dark:text-slate-400 text-sm leading-relaxed pr-4 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

