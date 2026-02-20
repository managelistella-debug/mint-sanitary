"use client";

import { useEffect, useRef } from "react";

// Matches Figma node 15:548 — dark navy CTA with contact info blocks + GET IN TOUCH button

const contacts = [
  {
    label: "CALL US",
    value: "604-123-4567",
    note: "MON-SAT, 7AM-6PM",
  },
  {
    label: "EMAIL US",
    value: "info@smartcleaning.com",
    note: "Reply within 2 hours",
  },
  {
    label: "GET A QUOTE",
    value: "Free Estimate",
    note: "No obligation",
  },
];

export default function FinalCTA() {
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
    <section
      id="contact"
      className="bg-[#253862] py-[60px] md:py-[100px]"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-[48px] md:gap-[64px] items-center px-4 sm:px-8 md:px-[60px]">
        {/* Heading */}
        <div className="reveal flex flex-col gap-[8px] items-center text-center uppercase">
          <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
            READY FOR A CLEANER SPACE?
          </h2>
          <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
            LET&apos;S MAKE IT HAPPEN.
          </p>
        </div>

        {/* Contact blocks */}
        <div className="reveal flex flex-col sm:flex-row items-stretch justify-between w-full gap-[24px] sm:gap-[40px]">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex-1 flex flex-col gap-[7px] pb-[20px] border-b border-[#c8e0fd]"
            >
              <p className="font-body font-extrabold text-[16px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                {c.label}
              </p>
              <p className="font-body font-extrabold text-[20px] md:text-[24px] tracking-[0.32px] uppercase text-white leading-[24px]">
                {c.value}
              </p>
              <p className="font-body font-medium text-[13px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                {c.note}
              </p>
            </div>
          ))}
        </div>

        {/* GET IN TOUCH button */}
        <a
          href="#"
          className="reveal inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
