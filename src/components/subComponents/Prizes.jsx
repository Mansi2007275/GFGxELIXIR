import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Award, Sparkles } from "lucide-react";
import { Separator } from "../ui/separator";

gsap.registerPlugin(ScrollTrigger);

const Prizes = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    gsap.fromTo(
      sectionEl,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray(cardsRef.current).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Prize Pool
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            The spoils of victory await the bravest coders
          </p>
        </div>

        {/* MAIN PRIZES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {[
            {
              emoji: "🥇",
              place: "1st Place",
              amount: "₹50,000",
              perks: ["Mentorship + Certificate", "Internship opportunities"],
            },
            {
              emoji: "🥈",
              place: "2nd Place",
              amount: "₹30,000",
              perks: ["Mentorship + Certificate", "Interview prep sessions"],
            },
            {
              emoji: "🥉",
              place: "3rd Place",
              amount: "₹20,000",
              perks: ["Mentorship + Certificate", "Exclusive swag pack"],
            },
          ].map((p, i) => (
            <Card
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl 
                transition-all duration-500 hover:bg-white/10 hover:scale-105
                w-full
              "
            >
              <CardHeader className="text-center py-6 sm:py-8">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3">{p.emoji}</div>

                <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
                  {p.place}
                </CardTitle>

                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-1 sm:mt-2">
                  {p.amount}
                </div>
              </CardHeader>

              <CardContent className="text-center space-y-2">
                <Separator className="bg-white/10 mb-3" />
                {p.perks.map((perk, j) => (
                  <p key={j} className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {perk}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* EXTRA AWARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            ref={(el) => (cardsRef.current[3] = el)}
            className="
              bg-white/5 backdrop-blur-md border border-white/10 shadow-xl 
              hover:bg-white/10 hover:scale-105 
              transition-all duration-500 w-full
            "
          >
            <CardHeader className="flex flex-col items-center py-6">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mb-2" />
              <CardTitle className="text-white text-lg sm:text-xl">
                Track Winners
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center">
              <p className="text-xl sm:text-2xl font-semibold text-white">
                ₹10,000 × 5
              </p>
              <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                Top project in each track
              </p>
            </CardContent>
          </Card>

          <Card
            ref={(el) => (cardsRef.current[4] = el)}
            className="
              bg-white/5 backdrop-blur-md border border-white/10 shadow-xl 
              hover:bg-white/10 hover:scale-105 
              transition-all duration-500 w-full
            "
          >
            <CardHeader className="flex flex-col items-center py-6">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-2" />
              <CardTitle className="text-white text-lg sm:text-xl">
                Special Awards
              </CardTitle>
            </CardHeader>

            <CardContent className="text-center">
              <p className="text-xl sm:text-2xl font-semibold text-white">
                ₹5,000 × 10
              </p>
              <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                Most innovative, best design, etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
