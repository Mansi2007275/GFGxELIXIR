import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import AOSProvider from "@/components/aos-provider";
import GSAPProvider from "@/components/gsap-provider";

// const lora = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Cabin/static/Cabin_Condensed-Medium.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//     path: "../../public/fonts/Cabin/Cabin-Italic-VariableFont_wdth,wght.ttf",
//     weight: "400",
//     style: "normal",
//     },
//     {
//     path: "../../public/fonts/Lora/Lora-Italic-VariableFont_wght.ttf",
//     weight: "400",
//     style: "normal",
//     },
//     {
//     path: "../../public/fonts/Noto_Serif/NotoSerif-Italic-VariableFont_wdth,wght.ttf",
//     weight: "400",
//     style: "normal",
//     },
//   ],
//   variable: "--font-lora",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GfG × Elixir Hackathon 2025",
  description:
    "Join 1000+ developers, designers, and innovators for an epic 48-hour hackathon. Build cutting-edge projects and compete for amazing prizes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <AOSProvider> */}
        <GSAPProvider>{children}</GSAPProvider>
        {/* </AOSProvider> */}
      </body>
    </html>
  );
}
