"use client";

import { useEffect, useRef } from "react";

// Matches Figma node 15:531 — two rows of images
// Top row scrolls left, bottom row scrolls right — both at same speed
// Gallery carousel images intentionally have NO hover zoom (per design spec)

const galleryImages = [
  "/strata.png",
  "/commercial.png",
  "/residential.png",
  "/strata-2.png",
  "/commercial-2.png",
  "/residential-2.png",
  "/strata-3.png",
  "/commercial-3.png",
  "/residential-3.jpg",
  "/commercial-4.png",
  "/residential-4.jpg",
  "/hero-and-strata-4.png",
  "/commercial-5.png",
  "/residential-5.jpg",
  "/strata-or-commercial.png",
];

// Double the array so translateX(-50%) loops seamlessly
const doubled = [...galleryImages, ...galleryImages];

export default function Gallery() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="pt-[60px] pb-[60px] overflow-hidden bg-[#f2f2f2]" ref={sectionRef}>
      {/* Heading */}
      <div className="flex justify-center mb-[42px] px-4 sm:px-8 md:px-[60px]">
        <h2 className="reveal font-display text-[44px] leading-[50px] text-[#253862] uppercase text-center">
          OUR QUALITY WORK
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-[23px]">
        <div
          className="flex gap-[23px] animate-carousel-left"
          style={{ width: "max-content" }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="rounded-[12px] overflow-hidden border border-black/10 shrink-0"
              style={{ width: "391px", height: "302px" }}
            >
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (opposite direction, same speed) */}
      <div className="overflow-hidden mb-[42px]">
        <div
          className="flex gap-[23px] animate-carousel-right"
          style={{ width: "max-content" }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="rounded-[12px] overflow-hidden border border-black/10 shrink-0"
              style={{ width: "391px", height: "302px" }}
            >
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* View Gallery button */}
      <div className="flex justify-center">
        <a
          href="/gallery"
          className="reveal inline-flex items-center justify-center bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}
