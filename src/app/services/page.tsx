import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Globe,
  Megaphone,
  Share2,
  Palette,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | ImpactSetu",
  description: "Explore ImpactSetu's premium digital services: Website Development, Digital Marketing, Social Media Management, Branding, and complete Business IT Solutions.",
};

const servicesList = [
  {
    id: "web-dev",
    title: "Website Development",
    icon: <Globe className="h-8 w-8 text-[#B58A63]" />,
    tagline: "Speed, Style, and Conversion.",
    desc: "We build websites designed specifically to solve business problems. No generic templates—each portal is built using high-speed Next.js or modern layouts, fully mobile-responsive and optimized for high user actions.",
    offerings: [
      "Business Websites (Corporate & SaaS style)",
      "NGO & Trust Portals (Transparent donation bridges)",
      "Coaching & Institute Websites (Admissions & syllabus tables)",
      "Cafe & Restaurant Websites (Digital menus & bookings)",
      "Portfolio Portals & Personal branding sheets",
      "High-Converting Landing Pages",
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: <Megaphone className="h-8 w-8 text-[#B58A63]" />,
    tagline: "Be Found When Clients Search.",
    desc: "Having a website is only half the battle. We optimize your local profiles and run active advertising to guarantee that patients, customers, and students in your area locate you first.",
    offerings: [
      "SEO (Full site keyword audit and indexing)",
      "Local SEO (Neighborhood map presence growth)",
      "Google Business Optimization (Profiles, reviews, updates)",
      "Performance Ads (Targeted Google and social ads)",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    icon: <Share2 className="h-8 w-8 text-[#B58A63]" />,
    tagline: "Build a Loyal Digital Community.",
    desc: "We design, write, and execute social media strategies that transform silent scroll-bys into active brand followers. Grow your presence on platforms that matter to your target clients.",
    offerings: [
      "Instagram Page Management (Grid layouts & reels script help)",
      "LinkedIn Profile Authority (Thought leadership posts)",
      "Facebook Pages (Community setup & ad integrations)",
      "Content Calendar Planning & Creative copywriting",
    ],
  },
  {
    id: "branding",
    title: "Branding & Creative Design",
    icon: <Palette className="h-8 w-8 text-[#B58A63]" />,
    tagline: "A Visual Identity You Own.",
    desc: "Make an unforgettable impression. We craft modern, luxury brand identities, logos, brochures, and print assets that position your organization as a premium leader in your industry.",
    offerings: [
      "Modern Vector Logo Design",
      "Brand Identity Kits (Colors, fonts, guidelines)",
      "Premium Business Cards & Stationery print layout",
      "Brochures, Catalogues & Flyer layouts",
      "Social Media Creative Assets & Post design templates",
    ],
  },
  {
    id: "business-solutions",
    title: "Business Solutions & IT Setup",
    icon: <Briefcase className="h-8 w-8 text-[#B58A63]" />,
    tagline: "We Handle the Tech. You Build the Brand.",
    desc: "Hosting, domain registry, and setting up professional workspace tools can feel complicated. We manage the entire lifecycle, providing you with a fully functional business back-end.",
    offerings: [
      "Domain registration & Secure SSL configurations",
      "Premium, high-speed hosting configuration (Vercel, AWS)",
      "Business Emails (Zoho Mail, Google Workspace setups)",
      "Website monthly updates & Security backups",
      "24/7 Priority technical troubleshooting",
    ],
  },
];

export default function Services() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Complete Digital Agency Services
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Discover how we build, optimize, and scale your brand across the web.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 scroll-mt-24 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                  <ScrollReveal className="w-full lg:w-2/5 flex justify-center">
                    <div className="w-64 h-64 rounded-3xl bg-white/60 dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-850 backdrop-blur-md shadow-sm flex flex-col items-center justify-center p-8 text-center group hover:border-[#B58A63]/30 hover:scale-[1.03] transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B58A63]" />
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-115 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className="text-xs font-bold text-[#B58A63] uppercase tracking-widest mb-1">
                        Service Pillar 0{index + 1}
                      </span>
                      <span className="text-[#2C1E15] dark:text-white font-extrabold text-lg">
                        {service.title}
                      </span>
                    </div>
                  </ScrollReveal>

                {/* Description Column */}
                <div className="w-full lg:w-3/5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[#B58A63] text-xs font-bold uppercase tracking-wider">
                      {service.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1E15] dark:text-white leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[#5D4D44] dark:text-slate-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.offerings.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-350"
                      >
                        <CheckCircle className="h-4.5 w-4.5 text-[#B58A63] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-transparent border-t border-slate-200/50 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C1E15] dark:text-white">
            Not Sure Which Package Fits Your Needs?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto font-medium">
            Get a free consultation call. We will examine your current presence, understand your audience, and recommend a custom roadmap.
          </p>
          <div>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-[#B58A63] hover:bg-[#3D271D] text-white font-bold transition-all duration-300 shadow-lg shadow-[#B58A63]/10 hover:shadow-[#B58A63]/25 hover:scale-105 active:scale-95 inline-flex items-center gap-2 group cursor-pointer">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
