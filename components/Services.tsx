"use client";

import { useEffect, useRef } from "react";

// Matches Figma node 15:401 — three service cards with image + colored info box
const services = [
  {
    title: "Strata Cleaning",
    description:
      "Common areas, lobbies, parkades, amenity spaces, kept spotless year-round.",
    bg: "#c8e0fd",
    textColor: "#0a2540",
    image:
      "/strata.png",
    href: "/strata-cleaning",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Offices, retail, restaurants & industrial. We work around your schedule — zero disruption.",
    bg: "#155da6",
    textColor: "#ffffff",
    image:
      "/commercial.png",
    href: "/commercial-cleaning",
  },
  {
    title: "Residential Cleaning",
    description:
      "Regular maintenance, deep cleans, move-in/out. Your home spotless without lifting a finger.",
    bg: "#253862",
    textColor: "#ffffff",
    image:
      "/residential.png",
    href: "/residential-cleaning",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="services" className="py-[60px] bg-[#f2f2f2]" ref={sectionRef}>
      <div className="px-4 sm:px-8 md:px-[60px]">
        <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] mb-[30px]">
          OUR SERVICES
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-5">
          {services.map((svc, idx) => (
            <a
              key={svc.title}
              href={svc.href}
              className="reveal flex flex-col gap-[14px] cursor-pointer group w-full md:flex-1"
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              {/* Image with hover zoom — img-zoom prevents container resize */}
              <div className="img-zoom rounded-[12px] border border-black/10" style={{ height: "322px" }}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="rounded-[12px]"
                />
              </div>

              {/* Info box */}
              <div
                className="rounded-[12px] p-[16px] flex flex-col gap-[10px]"
                style={{ background: svc.bg, color: svc.textColor }}
              >
                <p className="font-display-reg text-[24px] tracking-[0.96px] uppercase leading-[24px]">
                  {svc.title}
                </p>
                <p className="font-body font-medium text-[16px] tracking-[0.28px] leading-[20px]">
                  {svc.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
