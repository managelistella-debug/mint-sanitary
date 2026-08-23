import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { RichTextSection as Section } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

const components: PortableTextComponents = {
  block: {
    h3: ({ children }) => (
      <h3 className="mt-10 font-body text-[25px] font-extrabold text-white first:mt-0">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80 first:mt-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="underline underline-offset-2"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = imageUrl(value);
      if (!src) return null;
      return (
        <div className="mt-8 w-full overflow-hidden rounded-[20px]">
          <img
            src={src}
            alt={value?.alt || ""}
            className="h-[280px] w-full object-cover sm:h-[408px]"
            loading="lazy"
          />
        </div>
      );
    },
  },
  list: {
    // Bullet lists inherit the section's centered alignment and drop the glyph
    // entirely — these read as short standalone lines, not nested sub-points.
    bullet: ({ children }) => <ul className="mt-3 flex flex-col gap-1.5">{children}</ul>,
    // Numbered lists keep their markers (a flex container would suppress them)
    // and stay left-aligned, since the numbers carry meaning.
    number: ({ children }) => (
      <ol className="mt-3 list-inside list-decimal space-y-1.5 text-left">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="font-body text-[15px] leading-[1.7] text-white/80">{children}</li>
    ),
    number: ({ children }) => (
      <li className="font-body text-[15px] leading-[1.7] text-white/80">{children}</li>
    ),
  },
};

/** Reference: /services/post-construction-cleaning "Post-Construction Window Cleaning". */
export default function RichTextSection({ section }: { section: Section }) {
  if (!section.body || section.body.length === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
        {section.heading && (
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading}
          </h2>
        )}
        {section.intro && (
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">{section.intro}</p>
        )}
        <div className="w-full">
          <PortableText value={section.body as never} components={components} />
        </div>
      </div>
    </section>
  );
}
