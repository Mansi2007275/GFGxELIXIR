"use client";
import { useEffect, useRef } from "react";
import { 
  animateSectionFadeIn, 
  animateCardsStagger, 
  cleanupScrollTriggers 
} from "@/lib/gsap-utils";
import Image from "next/image";
import { sponsorsData } from "@/lib/data/data";

const Sponsor = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    animateSectionFadeIn(sectionRef.current);
    animateCardsStagger(cardsRef.current);
    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-36 bg-[#020202] text-white overflow-hidden">
      {/* Background */}      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-thin tracking-[0.5em] uppercase text-white/90">
            Past Sponsors
          </h2>
          <p className="text-blue-400 font-mono text-xs mt-4 tracking-[0.3em] uppercase italic">Linked to Mission Control</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorsData.map((sponsor, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative"
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div 
                className="relative bg-white/[0.03] border border-white/10 p-10 backdrop-blur-md transition-all duration-500 group-hover:bg-white/[0.07] group-hover:border-blue-500/50"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                }}
              >
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                    <div className="absolute inset-0 bg-blue-500/10 rotate-45 border border-blue-500/20 group-hover:rotate-90 transition-transform duration-700" />
                    <div className="relative w-20 h-20">
                      <Image
                        fill
                        src={sponsor.image}
                        alt={sponsor.tier}
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>

                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-6" />
                  
                  <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-blue-400 group-hover:text-blue-300 transition-colors">
                    Sponsor Tier
                  </h3>
                  <p className="text-sm font-bold tracking-widest text-slate-100 mt-2 uppercase">
                    {sponsor.tier}
                  </p>
                </div>

                <div className="absolute bottom-2 left-4 text-[8px] font-mono text-white/20 uppercase">
                  Ref: SEC_0{i+1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;