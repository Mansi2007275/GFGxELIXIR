import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { cleanupScrollTriggers } from "@/lib/gsap-utils";

const CTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { scale: 1.05, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      }
    );

    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] w-full overflow-hidden bg-black text-white flex items-center justify-center"
    >
      <video
        src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_4_-1_ngskzm.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ pointerEvents: "none" }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6"
      >
        <div className="mb-6 flex justify-center">
          <Sparkles className="w-10 h-10 text-white animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-7xl font-light tracking-tight mb-4 leading-tight">
          Ready to Face the Titans?
        </h2>
        <p className="text-base sm:text-xl text-gray-300 mb-8 px-2">
          Join the <span className="text-white font-semibold">Survey Corps</span>.
          Unite with elite developers in humanity’s last stand
          against the titans of outdated code.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-6 py-4 text-base sm:px-10 sm:py-7 sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Enlist Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-4 text-base sm:px-10 sm:py-7 sm:text-lg font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Join Discord
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500 tracking-wide">
          Registration closes <span className="text-white">February 1, 2025</span>
        </p>
      </div>
    </section>
  );
};

export default CTA;
