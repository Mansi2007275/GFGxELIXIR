"use client";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        if (ref.current) {
          setHeight(ref.current.offsetHeight);
        }
      };

      updateHeight();
      const observer = new ResizeObserver(updateHeight);
      observer.observe(ref.current);

      const timer = setTimeout(updateHeight, 500);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heightTransform = useTransform(smoothProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-8 sm:py-20 px-3 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-3xl md:text-5xl mb-3 text-white max-w-4xl font-bold">
          Mission Timeline
        </h2>
        <p className="text-neutral-400 text-[10px] sm:text-sm md:text-base max-w-sm">
          The Survey Corps battle plans and key milestones.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 sm:pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-6 w-6 sm:h-10 sm:w-10 absolute left-2 md:left-3 rounded-full bg-black dark:bg-white flex items-center justify-center">
                <div className="h-2 w-2 sm:h-4 sm:w-4 rounded-full bg-neutral-800 dark:bg-neutral-200 border border-neutral-700 dark:border-neutral-300" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-10 sm:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-base sm:text-2xl mb-2 sm:mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-5 top-0 overflow-hidden w-[1.5px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1.5px] bg-gradient-to-t from-yellow-200 via-white to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};