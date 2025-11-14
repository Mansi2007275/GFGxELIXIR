import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    // 🎥 Fade in the whole section
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
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 🎞️ Staggered fade-up for each FAQ item
    gsap.utils.toArray(itemsRef.current).forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const faqs = [
    {
      q: "Who can participate?",
      a: "Anyone with a passion for coding! Students, professionals, and hobbyists are all welcome. Teams can have 2–4 members.",
    },
    {
      q: "Is there a registration fee?",
      a: "No, the hackathon is completely free to participate. Just bring your skills and enthusiasm!",
    },
    {
      q: "What do I need to bring?",
      a: "Bring your laptop, charger, and any tools you need. We’ll provide Wi-Fi, snacks, and energy drinks to keep you going!",
    },
    {
      q: "Can I work on a pre-existing project?",
      a: "No, all projects must be started fresh during the hackathon. You can use libraries and frameworks, but the core idea must be new.",
    },
    {
      q: "How will projects be judged?",
      a: "Projects will be judged on innovation, technical complexity, user experience, and presentation by industry experts.",
    },
    {
      q: "Will the event be online or offline?",
      a: "The hackathon will be hybrid — both online and offline options are available. Join us at the venue or remotely.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 text-white overflow-hidden"
    >
      {/* 🎥 Subtle looping video background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-25"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      {/* 📘 Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">Everything you need to know</p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              value={`item-${i}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-normal text-white px-6 py-4 hover:text-gray-300 text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 px-6 pb-4 text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
