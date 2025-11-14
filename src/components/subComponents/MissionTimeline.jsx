import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

gsap.registerPlugin(ScrollTrigger);

const MissionTimeline = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;

    // 🎥 Background zoom + blur
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top top",
        end: "bottom+=80% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.fromTo(
      videoEl,
      { scale: 1, opacity: 1, filter: "blur(0px)" },
      {
        scale: 1.15,
        opacity: 0.5,
        filter: "blur(6px)",
        ease: "power3.inOut",
      },
      0
    );

    // 🌀 Alternate fade/slide animations
    gsap.utils.toArray(cardsRef.current).forEach((card, i) => {
      const dir = i % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        card,
        { opacity: 0, x: dir, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
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

  const events = [
    {
      date: "Jan 15",
      title: "Registration Opens",
      desc: "Sign up starts now!",
    },
    {
      date: "Feb 1",
      title: "Deadline Extended",
      desc: "Last chance to register",
    },
    {
      date: "Feb 15–17",
      title: "Hackathon Begins",
      desc: "72 hours of coding",
    },
    { date: "Feb 17", title: "Submissions Due", desc: "Final demos presented" },
    { date: "Feb 18", title: "Results & Awards", desc: "Winners announced" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white py-4"
    >
      
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_4_-1_ngskzm.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-3">
            Mission Timeline
          </h2>
          <p className="text-base md:text-lg text-gray-400">
            The Survey Corps battle plan
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/25 -translate-x-1/2"></div>

            <div className="space-y-1">
              {events.map((event, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className={`flex items-center relative ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`absolute top-1/3 h-px bg-white/30 ${
                      i % 2 === 0
                        ? "right-1/2 lg:w-[calc(17%-2rem)] md:w-[calc(17%-1.2rem)]"
                        : "left-1/2 lg:w-[calc(17%-2rem)] md:w-[calc(17%-1.2rem)]"
                    }`}
                  ></div>

                  <div
                    className={`w-[40%] ${
                      i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-xl hover:bg-white/10 transition-all duration-500 -mb-4">
                      <CardHeader className="px-4 flex flex-col gap-1">
                        <div className="flex items-center justify-between gap-3">
                          <CardTitle className="text-sm md:text-base text-white font-light whitespace-nowrap">
                            {event.title}
                          </CardTitle>

                          <Badge className="bg-transparent text-white text-[0.9rem] font-medium px-2 py-0.5 rounded-full">
                            {event.date}
                          </Badge>
                        </div>

                        <CardDescription className="text-gray-300 text-xs md:text-sm leading-snug mt-1">
                          {event.desc}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 top-7/24 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/20 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-4 -mt-6">
            {events.map((event, i) => (
              <div key={i} className="relative">
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-xl hover:bg-white/10 transition p-4 -mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-normal">
                      {event.title}
                    </h3>
                    <Badge className="bg-transparent text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {event.date}
                    </Badge>
                  </div>

                  <p className="text-gray-300 text-xs mt-2 leading-snug">
                    {event.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionTimeline;
