"use client";

import { About } from "@/components/About";
import { ClientExperience } from "@/components/ClientExperience";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { FunSection } from "@/components/FunSection";
import { Global } from "@/components/Global";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyFunwarp } from "@/components/WhyFunwarp";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <TrustBar />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <WhyFunwarp />
      </AnimatedSection>
      <AnimatedSection>
        <Technology />
      </AnimatedSection>
      <AnimatedSection>
        <FunSection />
      </AnimatedSection>
      <AnimatedSection>
        <ClientExperience />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Team />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Global />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <CTA />
    </>
  );
}
