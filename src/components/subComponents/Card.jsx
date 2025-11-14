import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Brain, Code, Shield, Sparkles, Target, Zap } from "lucide-react";

const Cards = () => {
  const cardData = [
    {
      icon: <Code />,
      title: "Strategic Web Initiative",
      desc: "Frontend & Backend Ops",
      points: ["React, Next.js, Vue.js", "Full-stack systems", "Modern UI/UX"],
    },
    {
      icon: <Brain />,
      title: "AI/ML Titan",
      desc: "Intelligence Division",
      points: ["ML Models", "NLP Systems", "Computer Vision"],
    },
    {
      icon: <Shield />,
      title: "Security Titan",
      desc: "Digital Wall Ops",
      points: ["Security Tools", "Threat Detection", "Privacy"],
    },
    {
      icon: <Zap />,
      title: "Chain Titan",
      desc: "Decentralized Sphere",
      points: ["Smart Contracts", "DeFi Apps", "NFT Systems"],
    },
    {
      icon: <Sparkles />,
      title: "Mobile Titan",
      desc: "App Command Unit",
      points: ["iOS / Android", "Cross-platform", "Mobile-first"],
    },
    {
      icon: <Target />,
      title: "Wings of Freedom",
      desc: "Creative Ops",
      points: ["Unique Ideas", "Creative Thinking", "Rapid Execution"],
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">
            STRATEGIC OPERATIONS CLASSIFICATION
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-3">
            Battle Fronts
          </h2>

          <p className="text-lg md:text-xl text-gray-300">
            Select your division and deploy your expertise
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {cardData.map((item, i) => (
            <Card
              key={i}
              className="
                relative 
                bg-white/5 backdrop-blur-md
                border border-white/10 
                shadow-xl 
                transition-all duration-500
                hover:bg-white/10 hover:scale-[1.03]
              "
            >
              <CardHeader className="relative pt-4 pb-2 px-4">
                <CardTitle className="text-xl md:text-2xl font-semibold text-white pr-14">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mt-2">
                  {item.desc}
                </CardDescription>

                <div
                  className="
                    absolute top-3 right-3 
                    p-2 bg-white/10 rounded-lg 
                    border border-white/10 
                  "
                >
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 md:w-8 md:h-8 text-white",
                  })}
                </div>
              </CardHeader>

              <CardContent className="px-4 pb-6">
                <ul className="space-y-3 text-gray-300 text-sm">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-white">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
