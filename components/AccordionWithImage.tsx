"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  body: string;
}

interface Props {
  heading: string;
  intro?: string;
  image: string;
  imageAlt: string;
  items: AccordionItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function AccordionWithImage({
  heading,
  intro,
  image,
  imageAlt,
  items,
  ctaHref,
  ctaLabel,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
      }}
    >
      <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[20px]">
          <img
            src={image}
            alt={imageAlt}
            className="h-[360px] w-full object-cover sm:h-[440px] lg:h-full"
            loading="lazy"
          />
        </div>
        <div>
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {intro}
            </p>
          )}
          <div className="mt-6 space-y-3">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-body text-[16px] font-extrabold uppercase tracking-[0.3px] text-white">
                    {item.title}
                  </span>
                  <span
                    className="ml-4 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                    style={{
                      transform:
                        open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {ctaHref && ctaLabel && (
            <a
              href={ctaHref}
              className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
