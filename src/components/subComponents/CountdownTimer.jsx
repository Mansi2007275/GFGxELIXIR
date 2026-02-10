"use client";

import { useState, useEffect } from "react";

const Unit = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-0 flex-1">
    <div className="relative w-full flex justify-center">
      <div className="absolute -inset-1 rounded-xl bg-white/10 blur-lg opacity-20" />

      <div
        className="
        relative
        w-full max-w-35
        aspect-square
        flex flex-col items-center justify-center
        rounded-xl border border-white/10
        bg-white/[0.05] backdrop-blur-md
        shadow-[0_8px_28px_rgba(0,0,0,0.55)]
        "
      >
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-semibold text-slate-100 tabular-nums leading-none">
          {value.toString().padStart(2, "0")}
        </span>

        <span className="mt-1 text-[7px] sm:text-xs md:text-xs uppercase tracking-widest text-slate-400">
          {label}
        </span>
      </div>
    </div>
  </div>
);




const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full flex justify-center">
      <div
        className="
        w-full max-w-7xl
        flex flex-nowrap
        justify-between
        gap-2 sm:gap-4 md:gap-8
        px-2 sm:px-4
        "
      >
        <Unit value={timeLeft.days} label="days" />
        <Unit value={timeLeft.hours} label="hours" />
        <Unit value={timeLeft.minutes} label="mins" />
        <Unit value={timeLeft.seconds} label="secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
