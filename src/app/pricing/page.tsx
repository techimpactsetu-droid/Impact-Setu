import React from "react";
import { Metadata } from "next";
import { PageWrapper } from "@/components/PageWrapper";
import { PricingTable } from "@/components/pricing/PricingTable";
import { MaintenancePlans } from "@/components/pricing/MaintenancePlans";

export const metadata: Metadata = {
  title: "Pricing Packages | ImpactSetu",
  description: "Check the pocket-friendly website packages by ImpactSetu starting at ₹6,999. No hidden charges. Custom setups for local organizations.",
};

export default function Pricing() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-[#FDFBF7]/50 dark:bg-slate-950 text-[#2C1E15] dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-50" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-900/10 dark:border-[#B58A63]/30 bg-amber-50/60 dark:bg-amber-950/10 text-[#4E3629] dark:text-[#D4B895] text-xs font-semibold uppercase tracking-wider shadow-sm">
            Clear Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Plans Built for Your Scale
          </h1>
          <p className="text-slate-655 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Affordable, transparent building tiers optimized for businesses, non-profits, and local startups.
          </p>
        </div>
      </section>

      <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
          <MaintenancePlans />
        </div>
      </section>
    </PageWrapper>
  );
}
