"use client";

import { cloneElement, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Link, DollarSign, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    icon: <Brain />,
    title: "AI / ML",
    desc: "Neural Cosmos",
    number: "01",
    tagline: "Shape the future with intelligent systems",
  },
  {
    icon: <Link />,
    title: "Web3",
    desc: "Decentralized Galaxy",
    number: "02",
    tagline: "Build the decentralized tomorrow",
  },
  {
    icon: <DollarSign />,
    title: "Fintech",
    desc: "Financial Orbit",
    number: "03",
    tagline: "Revolutionize global finance",
  },
  {
    icon: <Lightbulb />,
    title: "Innovation",
    desc: "Creative Nebula",
    number: "04",
    tagline: "Innovate without boundaries",
  },
];

const Cards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 120, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>


      <div className="relative z-20 container mx-auto px-2 xs:px-3 sm:px-4 py-8 sm:py-16">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-1">
            STRATEGIC OPERATIONS CLASSIFICATION
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-light tracking-tight mb-2 sm:mb-3">
            Battle Fronts
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300">
            Select your division and deploy your expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-8 pb-8 sm:pb-16">

      <div className="relative z-20 container mx-auto px-4 py-28">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-24">
          <p className="text-xs text-white/50 uppercase tracking-[0.5em] font-light mb-6">
            [ Mission Sectors ]
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-6">
            Cosmic{" "}
            <span className="font-semibold italic">Horizons</span>
          </h2>

          <p className="text-lg text-white/40 max-w-md mx-auto font-light">
            Choose your constellation and embark on an interstellar journey
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-full px-4 lg:px-8 mx-auto">

          {cardData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                group relative flex-1 cursor-pointer
                transition-all duration-700 ease-out
                ${activeCard === i ? "lg:flex-[2]" : "lg:flex-1"}
              `}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >

              <CardHeader className="relative pt-3 xs:pt-4 pb-2 px-2.5 xs:px-3 sm:px-4">
                <CardTitle className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white pr-10 xs:pr-12 sm:pr-14">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-gray-400 text-[10px] xs:text-[11px] sm:text-xs md:text-sm uppercase tracking-wider mt-1.5 xs:mt-2">
                  {item.desc}
                </CardDescription>

                <div
                  className="
                    absolute top-3 right-3 
                    p-2 bg-white/10 rounded-lg 
                    border border-white/10 
                  "
                >
                  {cloneElement(item.icon, {
                    className: "w-6 h-6 md:w-8 md:h-8 text-white",
                  })}
                </div>
              </CardHeader>

              <CardContent className="px-2.5 xs:px-3 sm:px-4 pb-4 sm:pb-6">
                <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3 text-gray-300 text-[11px] xs:text-xs sm:text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-white">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

              <div
                className={`
                  relative overflow-hidden h-[300px]
                  rounded-3xl
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl
                  border border-white/10
                  transition-all duration-700 ease-out
                  group-hover:border-white/25
                  group-hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]
                  group-hover:from-white/[0.12] group-hover:to-white/[0.04]
                `}
              >
                {/* Large Background Number */}
                <div className="absolute -right-4 -top-8 text-[200px] lg:text-[280px] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-700">
                  {item.number}
                </div>

                {/* Animated Glow Ring */}
                <div className="absolute top-8 left-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDuration: "2s" }} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                      {cloneElement(item.icon, {
                        className: "w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300",
                      })}
                    </div>
                  </div>

                  {/* Track Description Badge */}
                  <div className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xs text-white/40 uppercase tracking-wider whitespace-nowrap">{item.desc}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-white/40 text-sm font-light opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 h-10 overflow-hidden">
                    {item.tagline}
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-3xl">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-out" />
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-white/20 text-xs tracking-[0.4em] uppercase font-light">
            4 Dimensions • Infinite Universe
          </p>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section >
  );
};

export default Cards;
