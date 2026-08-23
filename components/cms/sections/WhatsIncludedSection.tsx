import type { WhatsIncludedSection as Section, SiteGlobals } from "@/lib/cms/types";
import { getIcon } from "@/lib/cms/icons";

/** Reference: /services/house-cleaning "What's Included in a House Cleaning". */
export default function WhatsIncludedSection({
  section,
  globals,
}: {
  section: Section;
  globals: SiteGlobals | null;
}) {
  const everyCleanItems = globals?.everyCleanItems ?? [];

  return (
    <section id={section.anchorId} className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || "What's Included"}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[560px_1fr]">
          <div>
            <div className="grid grid-cols-1 gap-5">
              {section.cards.map((card) => (
                <div key={card._key} className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                  <h3 className="font-body text-[25px] font-extrabold text-white">{card.title}</h3>
                  {card.body && (
                    <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                      {card.body}
                    </p>
                  )}
                  {card.items.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {card.items.map((item, i) => (
                        <li key={i} className="font-body text-[15px] leading-[1.7] text-white/80">
                          &bull; {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {section.exclusionsBody && (
              <div className="mt-5 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                <h3 className="font-body text-[25px] font-extrabold text-white">
                  {section.exclusionsTitle || "What's Not Included"}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  {section.exclusionsBody}
                </p>
              </div>
            )}
          </div>

          {everyCleanItems.length > 0 && (
            <div className="rounded-[14px] bg-[#6191e9]/20 p-6 backdrop-blur-sm lg:sticky lg:top-[130px]">
              <h3 className="font-body text-[25px] font-extrabold text-white">
                {globals?.everyCleanHeading || "Every Mint Cleaning Includes"}
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {everyCleanItems.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <li key={item._key} className="flex items-start gap-3">
                      <Icon size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-[#66DAD5]" />
                      <span className="font-body text-[15px] leading-[1.5] text-white/85">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
