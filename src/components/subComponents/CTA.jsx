import { useEffect, useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import Image from "next/image";

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const CTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] w-full overflow-hidden text-white flex items-center justify-center"
    >

      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-3xl mx-auto px-6"
      >
        <div className="mb-6 flex justify-center">
            <div className="relative w-24 h-24 animate-pulse">
              <Image 
                src="/Steller A.png" 
                alt="Stellaris Icon" 
                fill
                className="object-contain"
              />
            </div>
        </div>

        <h2
          className={`${sectionHeadingFont.className} text-5xl md:text-7xl tracking-[0.08em] uppercase mb-4 leading-tight`}
        >
          <span className="bg-gradient-to-r from-[#0080FF] via-[#0D52BD] to-[#1C05B3] bg-clip-text text-transparent">
            Ready to Face the Titans?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Join the <span className="text-white font-semibold">Survey Corps</span>.  
          Unite with elite developers in humanity’s last stand  
          against the titans of outdated code.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://registration.example.com', '_blank')}
          >
            Register Now
          </Button>
          <a href="https://discord.gg/yTxvuuktdZ" target="blank">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white px-10 py-7 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
            Join Discord
          </Button>
            </a>
        </div>

        <p className="mt-8 text-sm text-gray-400 tracking-wide">
          Registration closes <span className="text-white">March 15, 2026</span>
        </p>
      </div>
    </section>
  );
};

export default CTA;
