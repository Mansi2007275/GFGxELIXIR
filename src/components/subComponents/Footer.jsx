import { Separator } from "../ui/separator";
import { Calendar, Clock, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-black via-[#0a0a0a] to-black border-t border-white/10 py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <h3 className="text-xl sm:text-2xl mb-3 text-white flex items-center gap-2 font-light tracking-wide">
              <span className="text-2xl sm:text-3xl animate-pulse">⚔️</span>
              Stellaris
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs text-xs sm:text-base">
              <span className="text-white font-medium">Give Your Heart.</span>{" "}
              Battling titans. Building the future with code and courage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white tracking-wide">
              Event Info
            </h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/70" />
                Feb 15 – 17, 2025
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/70" />
                72 Hours of Innovation
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["About", "Tracks", "FAQs", "Sponsors"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2 break-all text-xs sm:text-base">
                <Mail className="w-4 h-4 text-white/70 shrink-0" />
                hackathon@gfgxelixir.com
              </p>
              <div className="flex gap-5 mt-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm tracking-wide">
            &copy; 2025{" "}
            <span className="text-white">GfG × Elixir Tech Community</span>. All
            rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ for developers by developers.
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-40" />
      </div>
    </footer>
  );
};

export default Footer;
