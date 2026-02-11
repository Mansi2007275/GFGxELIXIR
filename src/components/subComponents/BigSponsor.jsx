// For Big Sponsors

"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import {
  animateSectionFadeIn,
  animateCardsStagger,
  cleanupScrollTriggers,
} from "@/lib/gsap-utils";
import Image from "next/image";
import { sponsorsData } from "@/lib/data/data";

const BigSponsor = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    animateSectionFadeIn(sectionRef.current);
    animateCardsStagger(cardsRef.current);
    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-36 bg-[#050505] text-white overflow-hidden">
      {/* background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,20,50,0.4)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.4em] uppercase text-white">
            Mission Partners
          </h2>
          <p className="text-blue-500/60 font-mono text-[10px] mt-4 tracking-[0.5em]">SYSTEMS ONLINE // SECURE UPLINK</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {sponsorsData.map((sponsor, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative group ${i >= 3 ? "lg:translate-x-[50%]" : ""}`}
            >
              <div className="absolute -left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              <div className="absolute -right-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />

              <Card className="relative overflow-hidden border-none bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl rounded-none transition-all duration-500 group-hover:from-white/[0.12]">
                <CardContent className="p-12 flex flex-col items-center justify-center min-h-[320px]">
                  
                  <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${sponsor.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="relative z-10 w-40 h-24 mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {sponsor.image ? (
                      <Image
                        fill
                        src={sponsor.image}
                        alt={sponsor.tier}
                        className="object-contain filter grayscale invert brightness-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border border-dashed border-white/20 uppercase text-[10px] tracking-widest text-white/40">Logo</div>
                    )}
                  </div>

                  <div className="relative z-10 w-full text-center">
                    <div className="h-[1px] w-12 bg-blue-500 mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400 group-hover:text-white transition-colors">
                      {sponsor.tier}
                    </h3>
                  </div>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigSponsor;


