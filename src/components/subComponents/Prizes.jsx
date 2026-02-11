import { useRef, useState, useEffect } from "react";
import { Award, Trophy, Rocket, Star, Crown, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const InteractiveCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXRel = e.clientX - rect.left - width / 2;
    const mouseYRel = e.clientY - rect.top - height / 2;
    
    x.set(mouseXRel / width);
    y.set(mouseYRel / height);

    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative h-full w-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl transition-colors duration-300 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 40%)`,
          transform: "translateZ(0px)", 
        }}
      />

      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out pointer-events-none ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} 
        style={{ transform: "translateZ(1px)" }}
      />

      <div 
        className="relative z-10 h-full flex flex-col items-center justify-start pt-8 pb-4" 
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon: Icon, color }) => {
  return (
    <motion.div
      animate={{ y: [-4, 4, -4], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`mx-auto p-4 rounded-2xl bg-transparent border border-transparent mb-6 shadow-lg ${color} 
        group-hover:bg-white/10 group-hover:border-white/10 group-hover:scale-110 group-hover:shadow-xl
        transition-all duration-300 ease-out`}
    >
      <Icon size={40} strokeWidth={1.5} />
    </motion.div>
  );
};

const Prizes = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const winners = [
    {
      place: "1st Place",
      amount: "₹50,000",
      icon: Trophy,
      color: "text-yellow-100", 
      spotlight: "rgba(253, 224, 71, 0.2)", 
      border: "hover:border-yellow-500/40", 
      perks: ["Mentorship", "Internship", "Certificate"],
      id: 1,
      order: "lg:order-2" 
    },
    {
      place: "2nd Place",
      amount: "₹30,000",
      icon: Crown,
      color: "text-slate-200", 
      spotlight: "rgba(226, 232, 240, 0.2)", 
      border: "hover:border-slate-400/40", 
      perks: ["Mentorship", "Interview Prep", "Certificate"],
      id: 2,
      order: "lg:order-1" 
    },
    {
      place: "3rd Place",
      amount: "₹20,000",
      icon: Award,
      color: "text-orange-100", 
      spotlight: "rgba(253, 186, 116, 0.2)", 
      border: "hover:border-orange-500/40", 
      perks: ["Mentorship", "Swag", "Certificate"],
      id: 3,
      order: "lg:order-3" 
    },
  ];

  return (
    <section className="relative min-h-screen py-24 bg-[#050505] text-white overflow-hidden flex flex-col justify-center perspective-1000">
      
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/djrs8vc5s/video/upload/f_auto,q_auto:good/v1730902345/1106_2_-1_ltl6d2.mp4"
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        <div className="text-center mb-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl tracking-tighter mb-4 text-white">
              <span className="font-light">Cosmic</span> <span className="font-bold italic">Rewards</span>
            </h2>
          </motion.div>
          <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
            Choose your constellation and embark on an interstellar journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-end">
          {winners.map((p, i) => (
            <motion.div 
              key={p.id} 
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2, 
                type: "spring", 
                stiffness: 100, 
                damping: 20 
              }}
              className={`w-full transform transition-all duration-500 ${p.order} ${
                p.id === 1 ? 'lg:h-[500px] z-10' : 'lg:h-[440px] z-0'
              }`}
            >
              <InteractiveCard 
                spotlightColor={p.spotlight}
                className={`group ${p.border} ${p.id === 1 ? 'bg-white/5 shadow-2xl' : 'bg-black/40'}`}
              >
                <FloatingIcon icon={p.icon} color={p.color} />
                
                <h3 className={`text-xl font-medium mb-1 tracking-wide ${p.color}`}>{p.place}</h3>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {p.amount}
                </div>

                <div className="w-full space-y-3 px-6 mb-auto">
                  {p.perks.map((perk, j) => (
                    <div key={j} className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-400 border border-white/5 py-2 rounded-full group-hover:bg-white/5 transition-colors duration-300">
                      <Star size={10} className="fill-current opacity-50" />
                      {perk}
                    </div>
                  ))}
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* --- Card 1: Track Winners --- */}
          <motion.div 
             className="h-full perspective-1000"
             whileHover={{ scale: 1.02 }}
          >
            <InteractiveCard 
              className="group border border-white/10 bg-black/60 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500"
              spotlightColor="rgba(59, 130, 246, 0.2)"
            >
              <div className="relative h-full p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 z-10">
                
                {/* Left Side: Icon & Title */}
                <div className="text-left w-full md:w-auto md:flex-1 min-w-0">
                  <div className="flex items-center gap-4"> 
                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300 shadow-inner">
                      <Rocket className="text-gray-400 group-hover:text-blue-400 transition-colors" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-blue-100 transition-colors">Track Winners</h3>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium tracking-wide">Best project in each sector</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & Badge */}
                <div className="w-full md:w-auto mt-2 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight drop-shadow-md">
                    ₹10,000
                  </p>
                  
                  <div className="md:mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 transition-all duration-300">
                    <span className="text-gray-500 group-hover:text-blue-300 text-[10px] font-bold uppercase tracking-widest">
                        x 5 Teams
                    </span>
                  </div>
                </div>

              </div>
            </InteractiveCard>
          </motion.div>

          {/* --- Card 2: Special Awards --- */}
          <motion.div 
             className="h-full perspective-1000"
             whileHover={{ scale: 1.02 }}
          >
            <InteractiveCard 
              className="group border border-white/10 bg-black/60 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500"
              spotlightColor="rgba(168, 85, 247, 0.2)"
            >
              <div className="relative h-full p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 z-10">
                
                {/* Left Side: Icon & Title */}
                <div className="text-left w-full md:w-auto md:flex-1 min-w-0">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 shadow-inner">
                      <Zap className="text-gray-400 group-hover:text-purple-400 transition-colors" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-purple-100 transition-colors">Special Awards</h3>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium tracking-wide">Design, Innovation, & UI</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Price & Badge */}
                <div className="w-full md:w-auto mt-2 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                  <p className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight drop-shadow-md">
                    ₹5,000
                  </p>
                  
                  <div className="md:mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/20 group-hover:bg-purple-500/10 transition-all duration-300">
                    <span className="text-gray-500 group-hover:text-purple-300 text-[10px] font-bold uppercase tracking-widest">
                        x 10 Teams
                    </span>
                  </div>
                </div>

              </div>
            </InteractiveCard>
          </motion.div>

        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section> 
  );
};

export default Prizes;
