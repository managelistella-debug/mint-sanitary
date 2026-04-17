"use client";

import { useState, useEffect, useRef } from "react";

// Matches Figma node 15:492 — slider, 3 cards visible, color pattern cycles
// Arrows: reconstructed from Figma "arrow-left-svgrepo-com" asset (node 15:526)

const BG_COLORS     = ["#c8e0fd", "#155da6", "#253862"];
const TEXT_COLORS   = ["#0a2540", "#ffffff",  "#ffffff"];
const AUTHOR_COLORS = ["#253862", "#ffffff",  "#ffffff"];
const STAR_COLORS   = ["#253862", "#ffffff",  "#ffffff"];

const testimonials = [
  {
    quote: "The BEST. Mint Sanitary has managed our strata for 3 years — common areas have never looked better. Completely professional.",
    author: "JENNIFER M.",
  },
  {
    quote: "We switched to Mint Sanitary for our office and couldn't be happier. Always spotless when we arrive every morning.",
    author: "DAVID K.",
  },
  {
    quote: "Outstanding residential cleaning. They pay attention to every detail and the team is always friendly and reliable.",
    author: "SARAH L.",
  },
  {
    quote: "Our parkade and lobby have never been cleaner. The strata council is very happy with the consistent quality.",
    author: "MARK T.",
  },
  {
    quote: "I've tried many cleaning services — Mint Sanitary is by far the most thorough and trustworthy. Worth every penny.",
    author: "ANNA R.",
  },
  {
    quote: "Fast, professional, and eco-friendly. They use green products which was very important to us. Highly recommend!",
    author: "MICHAEL C.",
  },
];

const ITEMS_PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

// ── Five-star row ──────────────────────────────────────────────────────────
function Stars({ color }: { color: string }) {
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={color}
          />
        </svg>
      ))}
    </div>
  );
}

// ── Arrows — reconstructed from Figma node 15:526 "arrow-left-svgrepo-com" ──
function ArrowLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="#253862"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="#253862"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [page, setPage] = useState(0);
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

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-[60px] bg-[#f2f2f2]" ref={sectionRef}>
      {/* Heading */}
      <div className="px-4 sm:px-8 md:px-[60px] mb-[30px]">
        <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862]">
          HAPPY CUSTOMERS
        </h2>
      </div>

      {/*
        Desktop slider — 3 cards per page
        Mobile: horizontal scroll-snap, 1 card at a time
      */}

      {/* ── Desktop slider (hidden on mobile) ── */}
      {/* Padding and overflow-hidden must be on separate elements — if combined,
          the right padding lets the next page's first card bleed into view */}
      <div className="hidden md:block reveal px-[60px]">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${(page / totalPages) * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => (
            <div
              key={pageIdx}
              className="flex gap-[25px]"
              style={{ width: `${100 / totalPages}%` }}
            >
              {testimonials
                .slice(pageIdx * ITEMS_PER_PAGE, (pageIdx + 1) * ITEMS_PER_PAGE)
                .map((t, cardIdx) => {
                  const globalIdx = pageIdx * ITEMS_PER_PAGE + cardIdx;
                  const ci = globalIdx % 3;
                  return (
                    <div
                      key={globalIdx}
                      className="flex-1 rounded-[12px] p-[30px] flex flex-col gap-[20px]"
                      style={{ background: BG_COLORS[ci], minHeight: "296px" }}
                    >
                      <Stars color={STAR_COLORS[ci]} />
                      <div className="flex flex-col justify-between flex-1 gap-[12px]">
                        <p
                          className="font-body font-medium text-[16px] tracking-[0.28px] leading-[20px]"
                          style={{ color: TEXT_COLORS[ci] }}
                        >
                          &ldquo;{t.quote}&rdquo;
                        </p>
                        <p
                          className="font-body font-extrabold text-[16px] tracking-[0.32px] uppercase leading-[22px]"
                          style={{ color: AUTHOR_COLORS[ci] }}
                        >
                          {t.author}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* ── Mobile scroll-snap (hidden on desktop) ── */}
      <div className="md:hidden overflow-x-auto px-4 sm:px-8 scroll-smooth">
        <div
          className="flex gap-[16px]"
          style={{ width: "max-content" }}
        >
          {testimonials.map((t, globalIdx) => {
            const ci = globalIdx % 3;
            return (
              <div
                key={globalIdx}
                className="rounded-[12px] p-[24px] flex flex-col gap-[16px] flex-shrink-0"
                style={{
                  background: BG_COLORS[ci],
                  minHeight: "260px",
                  width: "calc(85vw - 32px)",
                }}
              >
                <Stars color={STAR_COLORS[ci]} />
                <div className="flex flex-col justify-between flex-1 gap-[12px]">
                  <p
                    className="font-body font-medium text-[15px] tracking-[0.28px] leading-[20px]"
                    style={{ color: TEXT_COLORS[ci] }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p
                    className="font-body font-extrabold text-[15px] tracking-[0.32px] uppercase leading-[22px]"
                    style={{ color: AUTHOR_COLORS[ci] }}
                  >
                    {t.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation — arrows + dot indicators, centered — desktop only */}
      <div className="hidden md:flex items-center justify-center gap-[28px] mt-[30px]">
        <button
          onClick={prev}
          aria-label="Previous testimonials"
          className="hover:opacity-60 transition-opacity duration-200"
        >
          <ArrowLeft />
        </button>

        {/* Page dots */}
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            className="rounded-full transition-all duration-200"
            style={{
              width:      i === page ? "24px"     : "8px",
              height:     "8px",
              background: i === page ? "#253862"  : "#c8e0fd",
              border:     "1.5px solid #253862",
            }}
          />
        ))}

        <button
          onClick={next}
          aria-label="Next testimonials"
          className="hover:opacity-60 transition-opacity duration-200"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
