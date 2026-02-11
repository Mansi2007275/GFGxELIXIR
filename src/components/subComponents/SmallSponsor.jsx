// This one is nice but rotation speed jyada hai
// for small sponsors

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

const SmallSponsor = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    animateSectionFadeIn(sectionRef.current);
    animateCardsStagger(cardsRef.current);
    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-40 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-28">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
              Sector Alpha // Sponsors
            </span>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter uppercase italic">
            Past <span className="font-bold text-blue-500">Sponsors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sponsorsData.map((sponsor, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative"
            >
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[scan_2s_linear_infinite]" />
              </div>

              <Card className="relative h-full bg-white/[0.02] border border-white/10 rounded-none transition-all duration-500 group-hover:bg-blue-500/[0.05] group-hover:border-blue-500/50">
                <CardContent className="p-8 flex flex-col items-center justify-between min-h-[300px]">
                  <span className="self-start font-mono text-[9px] text-white/30 group-hover:text-blue-400 transition-colors">
                    {sponsor.id}
                  </span>

                  <div
                    className="relative w-32 h-30 bg-white/5 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    <div className="relative w-25 h-25">
                      <Image
                        fill
                        src={sponsor.image}
                        alt={sponsor.tier}
                        className="object-contain filter grayscale group-hover:grayscale-0 brightness-100 group-hover:brightness-100 transition-all duration-1000"
                      />
                    </div>
                  </div>

                  <div className="w-full text-center mt-6">
                    <p className="text-[10px] font-mono tracking-widest text-white/40 mb-1 group-hover:text-blue-300">
                      AUTHORIZED ENTITY
                    </p>
                    <h3 className="text-xs font-bold tracking-widest uppercase leading-tight">
                      {sponsor.tier}
                    </h3>
                  </div>

                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-500" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
      `}</style>
    </section>
  );
};

export default SmallSponsor;
