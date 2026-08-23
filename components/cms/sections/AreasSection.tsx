import type { AreasSection as Section } from "@/lib/cms/types";

interface ResolvedArea {
  _id: string;
  name: string;
  slug: string;
  published: boolean;
}

/**
 * Reference: /services/house-cleaning "House and Apartment Cleaning Services
 * Across Greater Vancouver". Heading auto-substitutes the page's service name
 * unless the editor overrides it. Areas without a live area-service page for
 * this service render dimmed and unclickable.
 */
export default function AreasSection({
  section,
  serviceName,
  serviceSlug,
  liveAreaIds,
}: {
  section: Section;
  serviceName: string;
  serviceSlug: string;
  liveAreaIds: Set<string>;
}) {
  const areas = (section.areas as unknown as ResolvedArea[]).filter((a) => a?.published);
  if (areas.length === 0) return null;

  const heading = section.heading || `${serviceName} Services Across Greater Vancouver`;

  return (
    <section
      id={section.anchorId}
      className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {heading}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {areas.map((area) => {
            const live = liveAreaIds.has(area._id);
            const label = `${area.name} ${serviceName}`;
            return live ? (
              <a
                key={area._id}
                href={`/${area.slug}/${serviceSlug}`}
                className="inline-flex items-center whitespace-nowrap rounded-[99px] border border-white/30 bg-white/10 px-6 py-3 font-body text-[14px] font-bold uppercase tracking-[0.3px] text-white transition-colors duration-200 hover:bg-white/20"
              >
                {label}
              </a>
            ) : (
              <span
                key={area._id}
                aria-disabled="true"
                className="inline-flex items-center whitespace-nowrap rounded-[99px] border border-white/15 px-6 py-3 font-body text-[14px] font-bold uppercase tracking-[0.3px] text-white/40"
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
