import {
  Brain,
  Code,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const aboutData = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Collaboration",
    text: "Team up with elite developers.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Innovation",
    text: "Build creative solutions.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: "Recognition",
    text: "Win prizes and mentorship.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Growth",
    text: "Learn from experts.",
  },
];

export const cardData = [
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

export const faqs = [
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

export const timelineData = [
    {
      title: "15 February",
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
    {
      title: "15 March",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Registration Closed
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Registration is now closed. Stay tuned for updates and announcements!
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
      title: "28 March",
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
      title: "29 March",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white/80 md:text-sm">
            Submissions Due
          </p>
          <p className="text-xs text-white/60 md:text-sm">
            Final demos presented. Show us what you&apos;ve built!
          </p>
        </div>
      ),
    },
    {
      title: "29 March",
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

export const sponsorsData = [
    { tier: "India Blockchain Week 2024", image: "/sponsors/ibw.svg", glow: "from-blue-500/20" },
    { tier: "Devfolio", image: "/sponsors/Devfolio.png", glow: "from-cyan-500/20" },
    { tier: "QuillAudits", image: "/sponsors/QuillAudit.webp", glow: "from-purple-500/20" },
    { tier: "ETHIndia", image: "/sponsors/ethindia-logo.svg", glow: "from-pink-500/20" },
    { tier: "Polygon", image: "/sponsors/Polygon.svg", glow: "from-indigo-500/20" },
  ];