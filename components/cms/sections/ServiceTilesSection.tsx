import type { ServiceTilesSection as Section, CmsImage } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

interface ResolvedTile {
  _id: string;
  name: string;
  tileDescription?: string;
  tileImage?: { asset?: { _ref: string } };
  hasOwnPage: boolean;
  slug: string;
  published: boolean;
}

/** Both tile sources flattened to one shape so the grid renders them identically. */
interface Tile {
  key: string;
  title: string;
  description?: string;
  image?: string | null;
  href?: string;
}

/** Reference: /services/house-cleaning "Types of House Cleaning We Offer". */
export default function ServiceTilesSection({ section }: { section: Section }) {
  const fromRefs: Tile[] = (section.tiles as unknown as ResolvedTile[])
    .filter((t) => t?.published)
    .map((t) => ({
      key: t._id,
      title: t.name,
      description: t.tileDescription,
      image: imageUrl(t.tileImage as never),
      href: t.hasOwnPage ? `/services/${t.slug}` : undefined,
    }));

  const fromCustom: Tile[] = (section.customTiles ?? []).map((t) => ({
    key: t._key,
    title: t.title,
    description: t.description,
    image: imageUrl(t.image as CmsImage),
    href: t.href,
  }));

  const tiles = [...fromRefs, ...fromCustom];
  if (tiles.length === 0) return null;

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
            {section.heading || "Related Cleaning We Offer"}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tiles.map((tile) => {
            const card = (
              <>
                {tile.image && (
                  <img
                    src={tile.image}
                    alt={`${tile.title} in Greater Vancouver`}
                    className="h-[190px] w-full rounded-[14px] object-cover"
                    loading="lazy"
                  />
                )}
                <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-white">
                  {tile.title}
                </h3>
                {tile.description && (
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                    {tile.description}
                  </p>
                )}
                {/* mt-auto pins this to the card's bottom edge so it lines up
                    across tiles regardless of how long each description runs. */}
                {tile.href && (
                  <span className="mt-auto inline-block self-start border-b border-white/40 pt-4 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white">
                    Learn More
                  </span>
                )}
              </>
            );
            return tile.href ? (
              <a
                key={tile.key}
                href={tile.href}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
              >
                {card}
              </a>
            ) : (
              <div
                key={tile.key}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
