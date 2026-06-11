import { PageWrapper } from "@/components/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { IndustriesTeaser } from "@/components/home/IndustriesTeaser";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CaseStudyGallery } from "@/components/home/CaseStudyGallery";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />
      <ServicesTeaser />
      <CaseStudyGallery />
      <ProcessSection />
      <IndustriesTeaser />
      <FaqSection />
      <CtaSection />
    </PageWrapper>
  );
}

