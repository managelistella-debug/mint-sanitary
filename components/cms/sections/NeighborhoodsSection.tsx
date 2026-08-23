import type { NeighborhoodsSection as Section } from "@/lib/cms/types";

interface ResolvedNeighborhood {
  _id: string;
  name: string;
  published: boolean;
}

/** Reference: /north-vancouver "Neighborhoods We Serve in North Vancouver". */
export default function NeighborhoodsSection({ section }: { section: Section }) {
  const neighborhoods = (section.neighborhoods as unknown as ResolvedNeighborhood[]).filter(
    (n) => n?.published
  );
  if (neighborhoods.length === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
          {section.heading || "Neighborhoods We Serve"}
        </h2>
        {section.intro && (
          <p className="mx-auto mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            {section.intro}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {neighborhoods.map((n) => (
            <span
              key={n._id}
              className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm"
            >
              {n.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
