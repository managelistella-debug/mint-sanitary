import type { SchedulesSection as Section } from "@/lib/cms/types";

/** Reference: /services/commercial-cleaning "Flexible Commercial Cleaning Schedules". */
export default function SchedulesSection({ section }: { section: Section }) {
  if (section.items.length === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || "Flexible Cleaning Schedules"}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <div
              key={item._key}
              className="rounded-[14px] bg-white/[0.12] p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
            >
              <h3 className="font-body text-[17px] font-extrabold text-white">{item.title}</h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
