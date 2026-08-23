"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

interface TimelineStep {
  title: string;
  body: string;
}

interface Props {
  heading: string;
  intro?: string;
  steps: TimelineStep[];
  checklistHeading: string;
  checklistItems: string[];
}

interface Segment {
  top: number;
  height: number;
  fillHeight: number;
}

/**
 * Two-column "process timeline + sticky checklist" section, built as a
 * reusable template (first used on /services/post-construction-cleaning).
 * Left column is a scroll-driven vertical timeline: circles start solid
 * teal and turn solid white once their step crosses the reference line
 * (55% down the viewport), with the connecting line filling white behind
 * them. The line is drawn as separate segments running only between
 * circle edges (bottom of one to top of the next), never behind a circle,
 * so it reads as one continuous timeline without ever showing through.
 * Right column mirrors the "Every Mint Cleaning Includes" treatment from
 * /services/house-cleaning (transparent blue box, no border) and stays
 * sticky while the timeline scrolls past it.
 */
export default function ProcessTimelineChecklist({
  heading,
  intro,
  steps,
  checklistHeading,
  checklistItems,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [filledCount, setFilledCount] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    function measure() {
      rafId = null;
      const track = trackRef.current;
      if (!track) return;

      const circles = stepRefs.current
        .map((el) => el?.querySelector<HTMLElement>("[data-circle]"))
        .filter((el): el is HTMLElement => !!el);
      if (circles.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const reference = window.innerHeight * 0.55;
      const rects = circles.map((c) => c.getBoundingClientRect());

      const nextSegments: Segment[] = [];
      for (let i = 0; i < rects.length - 1; i++) {
        const segTop = rects[i].bottom;
        const segBottom = rects[i + 1].top;
        const segHeight = Math.max(0, segBottom - segTop);
        const fillPx = Math.min(segHeight, Math.max(0, reference - segTop));
        nextSegments.push({
          top: segTop - trackRect.top,
          height: segHeight,
          fillHeight: fillPx,
        });
      }
      setSegments(nextSegments);

      let count = 0;
      rects.forEach((r) => {
        if (r.top + r.height / 2 <= reference) count += 1;
      });
      setFilledCount(count);
    }

    function onScroll() {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
      {/* Left column — header + scroll-driven vertical timeline */}
      <div>
        <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
          {heading}
        </h2>
        {intro && (
          <p className="mt-4 max-w-[600px] font-body text-[15px] leading-[1.7] text-white/80">
            {intro}
          </p>
        )}

        <div ref={trackRef} className="relative mt-12 pl-[96px]">
          {segments.map((seg, i) => (
            <div key={i} className="absolute left-[34px] w-[4px]" style={{ top: seg.top, height: seg.height }}>
              <div className="absolute inset-0 bg-[#66DAD5]" />
              <div
                className="absolute inset-x-0 top-0 bg-white transition-[height] duration-150 ease-out"
                style={{ height: seg.fillHeight }}
              />
            </div>
          ))}

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => {
              const filled = i < filledCount;
              return (
                <div
                  key={step.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative"
                >
                  <div
                    data-circle
                    className={`absolute -left-[96px] top-0 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] font-display-reg text-[30px] font-semibold uppercase transition-colors duration-500 sm:text-[38px] ${
                      filled
                        ? "border-white bg-white text-[#6191e9]"
                        : "border-[#66DAD5] bg-[#66DAD5] text-white"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <h3 className="pt-3 font-body text-[20px] font-extrabold uppercase tracking-[0.3px] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right column — checklist, styled like Every Mint Cleaning Includes; sticky on desktop */}
      <div className="rounded-[14px] bg-[#6191e9]/20 p-6 backdrop-blur-sm lg:sticky lg:top-[130px]">
        <h3 className="font-body text-[25px] font-extrabold text-white">{checklistHeading}</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {checklistItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#66DAD5]" />
              <span className="font-body text-[15px] leading-[1.5] text-white/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
