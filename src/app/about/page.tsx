import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper";
import { Heart, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | ImpactSetu",
  description: "Bridging organizations with digital growth. Learn more about the mission, vision, and core values of ImpactSetu digital solutions agency.",
};

const values = [
  {
    title: "Mission",
    icon: <Compass className="h-6 w-6 text-[#B58A63]" />,
    desc: "To help NGOs, trusts, coaching institutes, cafes, clinics, and businesses establish absolute digital credibility, enabling them to connect directly with their audience and grow sustainably.",
  },
  {
    title: "Vision",
    icon: <Heart className="h-6 w-6 text-[#B58A63]" />,
    desc: "To become the nation's most trusted, empathetic digital solutions partner, bridging the gap between local organizations and state-of-the-art web technology.",
  },
];

const coreValues = [
  {
    title: "Empathy First",
    desc: "We take the time to understand the unique challenges of local trusts, schools, and shops, building solutions centered on their real-world needs.",
  },
  {
    title: "Zero Templates",
    desc: "Every project is custom-designed from scratch, ensuring unique aesthetics, light-speed performance, and high client conversions.",
  },
  {
    title: "Absolute Transparency",
    desc: "Zero hidden costs. Clear, up-front, affordable pricing structures tailored specifically to fit growing budgets.",
  },
  {
    title: "Complete Support",
    desc: "We don't just build and run. We manage domain, hosting, email setup, and security updates, offering 24/7 dedicated support.",
  },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Bridging Organizations With <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B58A63] to-[#DEB887] dark:from-[#818CF8] dark:to-[#A78BFA]">Digital Growth</span>
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            At ImpactSetu, we believe that every cafe, clinic, trust, and school deserves an award-winning digital identity.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md hover:border-[#B58A63]/30 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                    {v.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#2C1E15] dark:text-white mb-3">
                    {v.title}
                  </h2>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Narrative Section */}
      <section className="py-16 bg-transparent transition-colors duration-300">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1E15] dark:text-white">
                Why We Exist: The &quot;Setu&quot; Concept
              </h2>
              <div className="h-1 w-16 bg-[#B58A63] rounded-full" />
            </div>
            
            <div className="space-y-6 text-slate-655 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                In Sanskrit, <strong>&quot;Setu&quot;</strong> means bridge. We observed a widening gap in the digital landscape: while large corporations have access to premium design resources and advanced technical setups, local schools, coaching centers, doctor clinics, neighborhood cafes, and dedicated NGOs are often left with basic templates, slow hosting, and weak search rankings.
              </p>
              <p>
                ImpactSetu was founded to serve as that digital bridge. We combine world-class SaaS agency design styles—blending premium gradients, micro-interactions, dark modes, and robust page loads—with local community pricing, making high-end digital identity accessible to all.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-[#B58A63] font-bold text-xs uppercase tracking-widest">
                Core Principles
              </h2>
              <h3 className="text-3xl font-extrabold text-[#2C1E15] dark:text-white">
                What Drives ImpactSetu
              </h3>
              <div className="h-1 w-20 bg-[#B58A63] mx-auto rounded-full mt-2" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((cv, idx) => (
              <ScrollReveal key={cv.title} delay={idx * 0.05}>
                <div
                  className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-855 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-[#B58A63]/30 hover:scale-[1.02] hover:shadow-md group h-full"
                >
                  <div className="absolute top-4 right-4 text-[#B58A63]/5 text-6xl font-extrabold select-none pointer-events-none group-hover:text-[#B58A63]/10 transition-colors duration-350">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-[#2C1E15] dark:text-white text-base mb-3 group-hover:text-[#B58A63] transition-colors">
                    {cv.title}
                  </h4>
                  <p className="text-slate-655 dark:text-slate-400 text-xs leading-relaxed">
                    {cv.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
