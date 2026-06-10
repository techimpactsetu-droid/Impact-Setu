import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
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

export const metadata: Metadata = {
  title: "Industries We Serve | ImpactSetu",
  description: "ImpactSetu builds customized digital solutions for NGOs, Trusts, Coaching Institutes, Schools, Cafes, Restaurants, Clinics, CA Firms, Startups and Small Businesses.",
};

const industriesList = [
  {
    name: "NGOs & Trusts",
    icon: <Heart className="h-6 w-6" />,
    challenge: "Low donor trust, lack of transparency, manual donation tracking, and outdated websites.",
    solution: "A modern donation bridge, automated digital receipt generators, visual impact project logs, and search visibility setup.",
    features: ["Online Donation Integrations", "Project Impact Photo Timelines", "Detailed Trust Transparency Pages"],
  },
  {
    name: "Coaching Institutes",
    icon: <BookOpen className="h-6 w-6" />,
    challenge: "Struggling to acquire local student inquiries online, unstructured course info, and missing contact landing pages.",
    solution: "Sleek, speed-optimized course landing pages, download gates for notes/syllabus PDFs, and query intake forms.",
    features: ["Class Enrollment Forms", "Syllabus PDF Gates", "Google Maps Local Pack Ranking"],
  },
  {
    name: "Schools & Academies",
    icon: <GraduationCap className="h-6 w-6" />,
    challenge: "Confusing website navigations, outdated event notices, and lack of visual gallery updates.",
    solution: "Highly-organized admissions information desk, interactive notices & announcements boards, and campus tour showcases.",
    features: ["Admissions Inquiry Portals", "Dynamic Announcement Feeds", "Campus Photo & Video Galleries"],
  },
  {
    name: "Cafes & Restaurants",
    icon: <Coffee className="h-6 w-6" />,
    challenge: "Relying purely on third-party aggregators (charging heavy commissions), unindexed local SEO, and zero digital menus.",
    solution: "A custom digital menu landing page, direct WhatsApp order routing systems, and high-impact local search map tags.",
    features: ["WhatsApp Ordering System", "Instant PDF Menu Viewers", "Local Maps Review Optimizations"],
  },
  {
    name: "Clinics & Doctors",
    icon: <HeartPulse className="h-6 w-6" />,
    challenge: "Difficulty managing patient appointments online, weak community credibility, and unverified reviews.",
    solution: "Clean professional portals detailing clinic timings, treatment plans, Calendly or booking forms, and FAQ widgets.",
    features: ["Patient Booking Integrations", "Verified Reviews Showcases", "Informative Health Blog Widgets"],
  },
  {
    name: "Consultants & Counselors",
    icon: <Users className="h-6 w-6" />,
    challenge: "Lacking personal brand authority, difficulty displaying case results, and manual scheduling headaches.",
    solution: "Premium portfolio pages highlighting expertise, case study breakdowns, video integration, and Calendly setups.",
    features: ["Calendly Scheduling Modals", "Video Introduction Sections", "Case Studies Catalogues"],
  },
  {
    name: "CA Firms & Finance",
    icon: <Briefcase className="h-6 w-6" />,
    challenge: "Inability to project regulatory authority online, unstructured service fees, and manual lead collection.",
    solution: "Highly professional corporate portals displaying compliance guidelines, financial blogs, tax calendars, and client intake grids.",
    features: ["Compliance Calendars", "Service Inquiry Pipelines", "Tax Calculator Widgets"],
  },
  {
    name: "Startups & Tech Teams",
    icon: <Rocket className="h-6 w-6" />,
    challenge: "Slow website build times, high developer costs, and low conversion rate on SaaS landing pages.",
    solution: "Ultra-fast Next.js mock landing pages, visual graphics, clean UI, waitlist signup forms, and Vercel hosting setups.",
    features: ["Waitlist Form Databases", "Interactive Product Showcases", "High Lighthouse Optimization"],
  },
  {
    name: "Small Businesses & Retail",
    icon: <Store className="h-6 w-6" />,
    challenge: "Zero online presence, missing local map tags, and difficulty listing physical products.",
    solution: "A local shop digital catalog, easy social contact setups, map verification, and WhatsApp business channels.",
    features: ["WhatsApp Product Catalogs", "Local SEO Optimization Packs", "Responsive Inquiry Forms"],
  },
];

export default function Industries() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Sectors We Empower
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Discover tailored digital frameworks designed explicitly to solve the workflows of your domain.
          </p>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind) => (
              <div
                key={ind.name}
                className="flex flex-col p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md shadow-sm relative overflow-hidden transition-all duration-300 hover:border-[#B58A63]/30 hover:scale-[1.02] hover:shadow-lg group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#B58A63] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B58A63] group-hover:text-white group-hover:scale-105 shrink-0">
                    {ind.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2C1E15] dark:text-white">
                    {ind.name}
                  </h3>
                </div>

                {/* Body Details */}
                <div className="space-y-4 text-xs leading-relaxed flex-grow">
                  <div>
                    <h4 className="text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold mb-1">
                      The Challenge:
                    </h4>
                    <p className="text-slate-650 dark:text-slate-400 font-medium">
                      {ind.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#B58A63] uppercase tracking-wider font-bold mb-1">
                      Our Setup:
                    </h4>
                    <p className="text-slate-800 dark:text-slate-300 font-semibold">
                      {ind.solution}
                    </p>
                  </div>
                </div>

                {/* Features Tags list */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-850">
                  <h4 className="text-slate-400 dark:text-slate-500 text-[10px] uppercase tracking-wider font-bold mb-2">
                    Key Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ind.features.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-1 rounded bg-[#B58A63]/5 dark:bg-slate-900 text-[#4E3629] dark:text-[#D4B895] text-[10px] font-bold border border-[#B58A63]/10 dark:border-slate-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-transparent border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-[#2C1E15] dark:text-white">
            Ready to Build Your Digital Presence?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto font-medium">
            Tell us about your industry and business goals. Let&apos;s design a platform that sets you apart.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <button className="px-6 py-3.5 rounded-full bg-[#B58A63] hover:bg-[#3D271D] text-white font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 mx-auto cursor-pointer shadow-md shadow-amber-955/15">
                Start My Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
