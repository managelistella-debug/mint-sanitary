"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 160);
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ marginTop: "78px", minHeight: "400px", height: "641px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1440&h=700&fit=crop&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div ref={ref} className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[29px] items-start max-w-[800px]">
        <h1 className="reveal font-display text-[36px] sm:text-[50px] md:text-[65px] leading-[1.1] text-white uppercase">
          A cleaner world starts at home.
        </h1>
        <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[20px] md:text-[23px] text-white tracking-[0.48px] max-w-[539px] leading-[1.3]">
          Professional strata, commercial &amp; residential cleaning across Metro Vancouver.
        </p>
        <a
          href="#contact"
          className="reveal delay-2 inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
