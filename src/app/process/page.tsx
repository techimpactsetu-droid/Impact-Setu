import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  PhoneCall,
  Search,
  Palette,
  Code2,
  FileSearch,
  Rocket,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | ImpactSetu",
  description: "Learn about the 7-step process of ImpactSetu from Discovery Call, Strategy Planning, Design, and Development to Testing, Launch, and Ongoing Support.",
};

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    icon: <PhoneCall className="h-5 w-5" />,
    desc: "We schedule a 30-minute introductory call to understand your organization, target audience, local competitors, budget limits, and expectations.",
  },
  {
    num: "02",
    title: "Strategy Planning",
    icon: <Search className="h-5 w-5" />,
    desc: "Our team drafts a custom digital map. We layout navigation structure, outline local SEO keywords, select typography tokens, and propose tech stacks.",
  },
  {
    num: "03",
    title: "Visual Design",
    icon: <Palette className="h-5 w-5" />,
    desc: "We craft interactive wireframes and premium high-fidelity UI mocks (including dark/light layouts) matching modern luxury SaaS design styles.",
  },
  {
    num: "04",
    title: "Development",
    icon: <Code2 className="h-5 w-5" />,
    desc: "Once you approve the designs, we write clean, type-safe Next.js or React code, configuring smooth Framer Motion entry states and micro-interactions.",
  },
  {
    num: "05",
    title: "Rigorous Testing",
    icon: <FileSearch className="h-5 w-5" />,
    desc: "We perform cross-browser testing, check responsive behavior on multiple mobile devices, validate form inputs, and test site speed benchmarks.",
  },
  {
    num: "06",
    title: "Deployment & Launch",
    icon: <Rocket className="h-5 w-5" />,
    desc: "We deploy the website to premium servers (like Vercel), link custom domains, configure secure SSL certificates, and set up Google search indexes.",
  },
  {
    num: "07",
    title: "Ongoing Support",
    icon: <Wrench className="h-5 w-5" />,
    desc: "We don't vanish post-launch. We provide security patches, monthly updates, index monitoring, and 24/7 support to help you scale.",
  },
];

export default function Process() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Our Blueprint
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            How We Build Bridges
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore our step-by-step roadmap from initial conversation to digital liftoff.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Vertical central path line */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 sm:hidden" />

          {/* Steps List */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Vertical Node Indicator */}
                  <div className="absolute left-8 sm:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#B58A63] text-[#B58A63] font-extrabold flex items-center justify-center z-10 text-xs shadow-sm shadow-amber-950/5">
                    {step.num}
                  </div>

                  {/* Left Column Spacer (for desktop grid symmetry) */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-10" />

                  {/* Right Column (Actual Step Card) */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-10 mt-2 sm:mt-0">
                    <ScrollReveal className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md shadow-sm relative overflow-hidden group hover:border-[#B58A63]/30 hover:scale-[1.03] hover:shadow-lg transition-all duration-300">
                      <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#B58A63]" />
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-[#B58A63] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          {step.icon}
                        </div>
                        <h3 className="font-extrabold text-sm sm:text-base text-[#2C1E15] dark:text-white group-hover:text-[#B58A63] transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process CTA Banner */}
      <section className="py-20 bg-transparent border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl font-extrabold text-[#2C1E15] dark:text-white">
            Ready to Begin Step 1?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto font-medium">
            Schedule your free discovery call with our team today and let&apos;s map out your scaling blueprint.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <button className="px-7 py-3.5 rounded-full bg-[#B58A63] hover:bg-[#3D271D] text-white font-bold transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 mx-auto cursor-pointer shadow-amber-955/15">
                Book Discovery Call
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
