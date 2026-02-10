"use client";

import Hero from "@/components/subComponents/Hero";
import About from "@/components/subComponents/About";
import Cards from "@/components/subComponents/Card";
import Prizes from "@/components/subComponents/Prizes";
import FAQ from "@/components/subComponents/FAQ";
import CTA from "@/components/subComponents/CTA";
import Footer from "@/components/subComponents/Footer";
import MissionTimeline from "@/components/subComponents/MissionTimeline";
import SmallSponsor from "@/components/subComponents/SmallSponsor";
// import BigSponsor from "@/components/subComponents/BigSponsor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <section id="hero" className="relative z-10">
        <Hero />
      </section>

      <section id="about" className="relative z-10">
        <About />
      </section>

      <section id="cards" className="relative z-10">
        <Cards />
      </section>

      <section id="section" className="relative z-10">
        <MissionTimeline />
      </section>

      <section id="section" className="relative z-10">
        <SmallSponsor />
        {/* <BigSponsor /> */}
      </section>

      <section id="prizes" className="relative z-10">
        <Prizes />
      </section>

      <section id="faq" className="relative z-10">
        <FAQ />
      </section>

      <section id="cta" className="relative z-10">
        <CTA />
      </section>

      <footer id="footer" className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
}