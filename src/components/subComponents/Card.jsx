"use client";

import { cloneElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Link, DollarSign } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    icon: <Brain />,
    title: "AI / ML",
    desc: "Intelligence Division",
    number: "01",
    points: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision & Deep Learning",
    ],
  },
  {
    icon: <Link />,
    title: "Web3",
    desc: "Decentralized Frontier",
    number: "02",
    points: [
      "Smart Contracts & DApps",
      "DeFi & Token Economics",
      "NFTs & Digital Assets",
    ],
  },
  {
    icon: <DollarSign />,
    title: "Fintech",
    desc: "Financial Innovation",
    number: "03",
    points: [
      "Payment Solutions",
      "Investment Platforms",
      "Financial Inclusion",
    ],
  },
];

const Cards = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1.2,
            delay: i * 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xs text-white/40 uppercase tracking-[0.4em] mb-4 font-light">
            [ STRATEGIC OPERATIONS ]
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter mb-6">
            Battle
            <span className="font-bold ml-4">Fronts</span>
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/50" />
            <p className="text-sm text-white/50 tracking-wide">
              Choose Your Division
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/50" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {cardData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Card */}
              <div
                className="
                  relative overflow-hidden
                  bg-white/[0.03] 
                  backdrop-blur-2xl
                  border border-white/[0.08]
                  rounded-2xl
                  p-8
                  transition-all duration-700 ease-out
                  hover:bg-white/[0.08]
                  hover:border-white/20
                  hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)]
                  group-hover:scale-[1.02]
                  cursor-pointer
                "
              >
                {/* Animated border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[spin_4s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1), transparent)' }} />
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000 ease-out" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Top row - Number and Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-6xl md:text-7xl font-extralight text-white/[0.07] leading-none select-none">
                      {item.number}
                    </span>
                    <div className="p-4 bg-white/[0.05] rounded-xl border border-white/[0.08] group-hover:bg-white/10 group-hover:border-white/15 transition-all duration-500">
                      {cloneElement(item.icon, {
                        className: "w-6 h-6 text-white/80 group-hover:text-white transition-colors",
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-500">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-8 font-light">
                    {item.desc}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-white/20 transition-colors" />

                  {/* Points */}
                  <ul className="space-y-4 mb-8">
                    {item.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-4 text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="w-1 h-1 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
                        <span className="font-light">{p}</span>
                      </li>
                    ))}
                  </ul>


                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-20 text-center">
          <p className="text-white/20 text-xs tracking-[0.3em] uppercase">
            3 Tracks • Infinite Possibilities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
