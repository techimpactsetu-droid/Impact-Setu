import { PageWrapper } from "@/components/PageWrapper";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { IndustriesTeaser } from "@/components/home/IndustriesTeaser";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Stats />
      <ServicesTeaser />
      <ProcessSection />
      <IndustriesTeaser />

      <FaqSection />
    </PageWrapper>
  );
}

