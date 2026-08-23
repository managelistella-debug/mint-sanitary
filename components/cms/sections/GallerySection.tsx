import type { GallerySection as Section } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

/** Reference: North Vancouver category pages "See the Difference" gallery. */
export default function GallerySection({ section }: { section: Section }) {
  if (section.images.length === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || "See the Difference"}
          </h2>
          {section.intro && (
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              {section.intro}
            </p>
          )}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.images.map((item, i) => {
            const src = imageUrl(item.image);
            if (!src) return null;
            return (
              <div
                key={item._key}
                className={`group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] ${
                  i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <img
                  src={src}
                  alt={item.image.alt || ""}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
