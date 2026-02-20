"use client";

import { useEffect, useRef } from "react";

// Matches Figma node 15:456 — centered heading, area pill grid, AND MORE banner, full-width image

const areas = [
  "Vancouver",
  "North Vancouver",
  "West Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
];

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    if (imageRef.current) obs.observe(imageRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Service Areas section */}
      <section id="areas" className="py-[60px] bg-[#f2f2f2]" ref={sectionRef}>
        <div className="flex flex-col gap-[46px] items-center px-4 sm:px-8 md:px-[60px]">
          {/* Header */}
          <div className="reveal flex flex-col gap-[20px] items-center text-center w-full">
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#253862] uppercase">
              Serving Metro Vancouver and Beyond
            </h2>
            <p className="font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[20px] max-w-[674px]">
              Based in the Lower Mainland, we serve Metro Vancouver and the Fraser Valley.
              Whether you&apos;re downtown or in the suburbs — we cover it.
            </p>
          </div>

          {/* Area pill grid — responsive: 1 col on mobile, 2 on sm, 3 on md+ */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[25px] w-full">
            {areas.map((area) => (
              <div
                key={area}
                className="h-[67px] flex items-center justify-center border border-[#253862] rounded-[12px] cursor-pointer transition-all duration-300 hover:bg-[#253862] group"
              >
                <span className="font-display-reg text-[18px] sm:text-[20px] md:text-[24px] tracking-[0.96px] uppercase text-[#0a2540] group-hover:text-white transition-colors duration-300 leading-none">
                  {area}
                </span>
              </div>
            ))}
          </div>

          {/* AND MORE banner */}
          <div className="reveal w-full">
            <div className="bg-[#253862] rounded-[12px] px-[24px] sm:px-[40px] md:px-[60px] py-[24px] md:py-[29px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
                AND MORE!
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200 whitespace-nowrap"
              >
                View All Service Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image before testimonials — placeholder until final image is ready */}
      <div className="px-4 sm:px-8 md:px-[60px] pt-0 pb-[60px] bg-[#f2f2f2]" ref={imageRef}>
        <div className="reveal img-zoom rounded-[12px] border border-black/10" style={{ height: "460px" }}>
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1320&h=460&fit=crop&q=80"
            alt="Cleaning professional at work — placeholder"
            className="rounded-[12px]"
          />
        </div>
      </div>
    </>
  );
}
