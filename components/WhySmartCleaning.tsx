"use client";

import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Award, Sparkles, Leaf } from "lucide-react";

// Matches Figma node 15:420 — split section with left image + right accordion
const items = [
  {
    title: "Licensed and Insured",
    body: "Every team member is background-checked, bonded, and fully insured. Zero risk to you — complete peace of mind.",
    Icon: ShieldCheck,
  },
  {
    title: "Reliable and Experienced",
    body: "Years of industry experience and a proven track record. We show up on time, every time, and deliver consistent results.",
    Icon: Award,
  },
  {
    title: "Detail Obsessed",
    body: "We don't cut corners — we clean them. Every surface, every edge, every time. Our checklists are meticulous and thorough.",
    Icon: Sparkles,
  },
  {
    title: "Eco-Friendly Products",
    body: "We use safe, green-certified cleaning products — effective on dirt, gentle on people, pets, and the planet.",
    Icon: Leaf,
  },
];

export default function WhySmartCleaning() {
  // First item open by default (matches Figma design showing it expanded)
  const [open, setOpen] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="flex flex-col md:flex-row" ref={sectionRef}>
      {/* Left — blue bg + image */}
      <div
        className="w-full md:w-1/2 p-4 sm:p-8 md:p-[60px] flex flex-col"
        style={{ background: "#155da6", minHeight: "300px" }}
      >
        <div className="reveal img-zoom rounded-[12px] flex-1" style={{ minHeight: "260px" }}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=570&fit=crop&q=80"
            alt="Professional cleaning at work"
            className="rounded-[12px]"
            style={{ height: "100%", minHeight: "260px" }}
          />
        </div>
      </div>

      {/* Right — light blue bg + accordion */}
      <div
        className="w-full md:w-1/2 px-4 pt-[40px] pb-[40px] sm:p-8 md:p-[60px] flex flex-col gap-[24px] md:gap-[42px]"
        style={{ background: "#c8e0fd" }}
      >
        <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
          Detail-driven,
          <br />
          every single time.
        </h2>

        <div className="reveal flex flex-col">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            const { Icon } = item;
            return (
              <div key={item.title} className="border-b border-[#253862]">
                <button
                  className="w-full flex items-center justify-between py-[18px] md:py-[30px] text-left gap-4"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <div className="flex items-center gap-[10px]">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[#253862] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-display-reg text-[18px] sm:text-[20px] md:text-[24px] tracking-[0.96px] uppercase text-[#0a2540] leading-none">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className="font-body font-bold text-[22px] text-[#253862] leading-none shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>

                {/* Smooth expand/collapse */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="font-body font-bold text-[16px] text-[#0a2540] tracking-[0.28px] leading-[20px] pb-[30px]">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="/contact"
          className="reveal inline-flex items-center justify-center self-start bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
        >
          Request a Quote
        </a>
      </div>
    </section>
  );
}
