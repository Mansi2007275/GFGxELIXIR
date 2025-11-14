import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Code, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;
    const contentEl = contentRef.current;

    // Scroll animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top top",
        end: "bottom+=100% top",
        scrub: 1.5,
        pin: true,
      },
    });

    // Video: zoom out and fade as scrolls
    tl.fromTo(
      videoEl,
      { scale: 1, opacity: 1, filter: "blur(0px)" },
      {
        scale: 1.25,
        opacity: 0.4,
        filter: "blur(4px)",
        ease: "power3.inOut",
      },
      0
    );

    // Content: fade up and disappear
    tl.fromTo(
      contentEl,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -100, ease: "power2.inOut" },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730851634/1106-1_ure0wq.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 space-y-5"
      >
        <Badge className="px-4 py-2 text-xs sm:text-sm bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg">
          COMMAND BRANCH: GEEKSFORGEEKS X ELIXIR
        </Badge>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-[1.1]">
          BREAK THROUGH
        </h1>

        <h2 className="text-xl sm:text-3xl md:text-5xl text-white/90 tracking-wide leading-tight">
          THE WALLS OF INNOVATION
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full sm:w-auto px-2">
          <Button
            size="lg"
            className="bg-black/80 text-white hover:bg-black px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold tracking-wide"
          >
            <Target className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Join The Scout Regiment
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold tracking-wide"
          >
            <Code className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Mission Briefing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// hero works fine
