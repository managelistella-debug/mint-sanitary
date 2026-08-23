import type { MapSection as Section } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

/** Reference: /north-vancouver service-area map. */
export default function MapSection({ section }: { section: Section }) {
  const src = imageUrl(section.image);
  if (!src) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        {(section.heading || section.intro) && (
          <div className="mx-auto mb-10 flex max-w-[700px] flex-col items-center text-center">
            {section.heading && (
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                {section.heading}
              </h2>
            )}
            {section.intro && (
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                {section.intro}
              </p>
            )}
          </div>
        )}
        <img
          src={src}
          alt={section.image?.alt || "Mint Sanitary service area map"}
          className="mx-auto h-[320px] w-full max-w-[900px] rounded-[20px] object-cover sm:h-[420px]"
          loading="lazy"
        />
        {section.ctaHref && section.ctaLabel && (
          <div className="mt-8 flex justify-center">
            <a
              href={section.ctaHref}
              className="inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#6191e9]/90"
            >
              {section.ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
