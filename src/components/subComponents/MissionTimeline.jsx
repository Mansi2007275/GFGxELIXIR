"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "@/components/ui/timeline";

gsap.registerPlugin(ScrollTrigger);

const MissionTimeline = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const videoEl = videoRef.current;

    if (!sectionEl || !videoEl) return;

    const timer = setTimeout(() => {
      // 🎥 Background zoom + blur 
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.fromTo(
        videoEl,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
        }
      );
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const data = [
    {
      title: "15 Feb - 15 Mar ",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Registration Opens
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Sign up starts now! Get ready for an amazing hackathon experience.
          </p>
        </div>
      ),
    },
    // {
    //   title: "Feb 1",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
    //         Deadline Extended
    //       </p>
    //       <p className="text-xs text-white/60 md:text-sm">
    //         Last chance to register! Don't miss this opportunity.
    //       </p>
    //     </div>
    //   ),
    // },
    {
      title: "28 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Hackathon Begins
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Coding, innovation, and collaboration starts now!
          </p>
        </div>
      ),
    },
    {
      title: "29 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Submissions Due
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Final demos presented. Show us what you've built!
          </p>
        </div>
      ),
    },
    {
      title: "29 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Results & Awards
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Winners announced! Celebrate the amazing projects and innovations.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible bg-black"
      suppressHydrationWarning
    >
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_4_-1_ngskzm.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
            suppressHydrationWarning
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      </div>

      <div className="relative z-10">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default MissionTimeline;
