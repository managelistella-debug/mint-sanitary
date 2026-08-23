import type { FinalCtaSection as Section, SiteGlobals } from "@/lib/cms/types";

/** Reference: shared closing CTA used on every ServicePageLayout page. */
export default function FinalCtaSection({
  section,
  globals,
}: {
  section: Section;
  globals: SiteGlobals | null;
}) {
  if (!section.heading?.trim() && !section.body?.trim()) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
          {section.heading || "Ready to Book Your Cleaning?"}
        </h2>
        {section.body && (
          <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-white/80">
            {section.body}
          </p>
        )}
        {globals?.promoCode && (
          <p className="mx-auto mt-3 max-w-[500px] font-body text-[15px] leading-[1.7] text-white/80">
            Use code <strong className="text-white">{globals.promoCode}</strong> for 10% off
            your first service.{" "}
            <a href="/rates/" className="border-b border-white/40 font-bold text-white">
              View our rates
            </a>
            .
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={section.ctaHref || "/contact"}
            className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
          >
            {section.ctaLabel || "Get a Free Estimate"}
          </a>
          {globals?.phone && (
            <a
              href={`tel:${globals.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Call {globals.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
