import type { TestimonialsSection as Section, SiteGlobals } from "@/lib/cms/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-[18px] w-[18px] ${i < rating ? "text-[#FBBC04]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Reference: shared "Google Reviews" block used on every ServicePageLayout page. */
export default function TestimonialsSection({
  section,
  globals,
}: {
  section: Section;
  globals: SiteGlobals | null;
}) {
  const reviews = globals?.reviews ?? [];
  if (reviews.length === 0) return null;

  return (
    <section id={section.anchorId} className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
              Google Reviews
            </span>
          </div>
          <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            {section.heading || globals?.reviewsHeading || "What Our Clients Say"}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <StarRating rating={5} />
            {globals?.reviewsRating && (
              <span className="font-body text-[15px] font-semibold text-white">
                {globals.reviewsRating}
              </span>
            )}
            {globals?.reviewsCount && (
              <span className="font-body text-[14px] text-white/80">{globals.reviewsCount}</span>
            )}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review._key}
              className="rounded-[20px] bg-white/[0.12] backdrop-blur-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[16px] font-extrabold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body text-[15px] font-extrabold text-white">{review.name}</p>
                  <p className="font-body text-[12px] text-white/80">{review.date}</p>
                </div>
              </div>
              <div className="mt-3">
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-3 font-body text-[14px] leading-[1.7] text-white/80">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
