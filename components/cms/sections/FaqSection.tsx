"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqSection as Section } from "@/lib/cms/types";

/** Reference: shared "Frequently Asked Questions" accordion used site-wide. */
export default function FaqSection({ section }: { section: Section }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (section.items.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: section.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section
      id={section.anchorId}
      className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto max-w-[800px]">
        <div className="text-center">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {section.items.map((faq, i) => (
            <div
              key={faq._key}
              className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="pr-4 font-body text-[16px] font-extrabold text-white">
                  {faq.question}
                </span>
                <span
                  className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <Plus size={14} strokeWidth={2.5} />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
