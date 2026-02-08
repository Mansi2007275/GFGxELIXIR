import { useEffect, useRef } from "react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { aboutData } from "@/lib/data/data";
import { animatePinnedSection, cleanupScrollTriggers } from "@/lib/gsap-utils";

const About = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    animatePinnedSection(sectionRef.current, videoRef.current, contentRef.current);

    return () => cleanupScrollTriggers();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden  text-white flex items-center justify-end"
    >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_1_-1_lnv3bn.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: "none" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-xl p-6 md:p-10  shadow-2xl rounded-2xl"
      >
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl mb-4 font-light tracking-wider">
            Mission Briefing
          </CardTitle>
          <Separator className="bg-white/20 mb-4" />
        </CardHeader>

        <CardContent className="space-y-6 text-gray-300">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="text-white font-semibold">
              CLASSIFIED: SCOUT REGIMENT HEADQUARTERS
            </span>
            <br />
            <br />
            The{" "}
            <span className="text-white font-semibold">
              GeeksforGeeks X Elixir Scout Regiment
            </span>{" "}
            commences its mission to reclaim humanity’s digital realm — a
            72-hour operation to push past the limits of innovation.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            This is{" "}
            <span className="text-white font-semibold">
              humanity’s last stand
            </span>{" "}
            against the titans of outdated code and creative stagnation.
            Developers unite, adapt, and rise beyond all boundaries.
          </p>

          <div className="grid grid-cols-2 gap-4 text-left">
            {aboutData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/5 p-3 rounded-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </section>
  );
};

export default About;
