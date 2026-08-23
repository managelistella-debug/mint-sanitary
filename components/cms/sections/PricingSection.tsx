import type { PricingSection as Section } from "@/lib/cms/types";

/** Reference: /services/post-construction-cleaning "Post-Construction Cleaning Pricing". */
export default function PricingSection({ section }: { section: Section }) {
  if (section.tiers.length === 0 && (section.notes?.length ?? 0) === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || "Sample Pricing"}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>

        {section.tiers.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {section.tiers.map((tier) => (
              <div
                key={tier._key}
                className="rounded-[14px] bg-white/[0.12] p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
              >
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                {tier.range && (
                  <p className="mt-2 font-display-reg text-[22px] text-white">{tier.range}</p>
                )}
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.body}</p>
              </div>
            ))}
          </div>
        )}

        {section.notes && section.notes.length > 0 && (
          <div className="mx-auto mt-8 flex max-w-[700px] flex-col items-center text-center">
            {section.notes.map((note, i) => (
              <p
                key={i}
                className={`font-body text-[15px] leading-[1.7] text-white/80 ${i > 0 ? "mt-4" : ""}`}
              >
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
