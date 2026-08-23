import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cleaning Service Areas in Greater Vancouver | Mint Sanitary",
  description:
    "Mint Sanitary serves North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster and Maple Ridge. Find your city and get a free quote.",
  alternates: {
    canonical: "/service-areas",
  },
};

const faqItems: { question: string; answer: string }[] = [
  {
    question: "What areas does Mint Sanitary serve?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. North Vancouver is our home base and has the most detail on our North Vancouver page.",
  },
  {
    question: "Do you charge extra to travel outside North Vancouver?",
    answer:
      "No. Pricing is based on the size of the property and the services you book, not on which city you're in. Check our rates page for exact pricing.",
  },
  {
    question: "Is there a North Vancouver specific page?",
    answer:
      "Yes. Our North Vancouver page covers the neighborhoods we serve there, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and more, along with details on each service we offer.",
  },
  {
    question: "Is there a West Vancouver or Vancouver specific page?",
    answer:
      "Yes. Our West Vancouver page and Vancouver page each cover the neighborhoods we serve there, along with details on each service we offer.",
  },
  {
    question: "How do I know if you cover my neighborhood?",
    answer:
      "Call us at 236-688-3248 or email hello@mintsanitary.com and tell us where you're located. We'll confirm coverage and give you a free estimate on the spot.",
  },
  {
    question: "Do you offer the same services in every city you serve?",
    answer:
      "Yes. House cleaning, commercial cleaning, carpet cleaning, window cleaning, pressure washing, and gutter cleaning are all available across our full service area.",
  },
];

export default function ServiceAreasPage() {
  return (
    <ServicePageLayout
      title="Cleaning Service Areas Across Greater Vancouver"
      heroImage="/mint-sanitary-service-van-north-vancouver.jpg"
      heroIntro="Mint Sanitary is based in North Vancouver and cleans homes and businesses throughout the Lower Mainland. Every job comes with eco-friendly products, bonded and insured staff, and a 24-hour satisfaction guarantee. This page lists every city we serve and points you to more detail where it exists."
      faqItems={faqItems}
      ctaHeading="Get a Free Quote"
      ctaBody="Ready to book? Visit our rates page for a free estimate on your cleaning job, or call 236-688-3248 to talk with our team. New customers save 10% on their first clean with code MINT26."
    >
      {/* ── Where We Serve ───────────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Where We Serve
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[20px] bg-white/[0.12] p-6 sm:p-8">
              <h3 className="font-body text-[18px] font-extrabold uppercase tracking-[0.3px] text-white">
                North Vancouver
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                North Vancouver is home base for Mint Sanitary, and it&apos;s
                where we know the neighborhoods best, from Lower Lonsdale to
                Deep Cove. Visit our{" "}
                <a
                  href="/north-vancouver"
                  className="underline underline-offset-2"
                >
                  North Vancouver cleaning page
                </a>{" "}
                for the full list of areas we cover and the services we offer
                there.
              </p>
            </div>
            <div className="rounded-[20px] bg-white/[0.12] p-6 sm:p-8">
              <h3 className="font-body text-[18px] font-extrabold uppercase tracking-[0.3px] text-white">
                West Vancouver
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We clean homes and offices throughout West Vancouver, from
                Ambleside to the British Properties. Visit our{" "}
                <a
                  href="/west-vancouver"
                  className="underline underline-offset-2"
                >
                  West Vancouver cleaning page
                </a>{" "}
                for the full list of neighborhoods we cover and the services
                we offer there.
              </p>
            </div>
            <div className="rounded-[20px] bg-white/[0.12] p-6 sm:p-8">
              <h3 className="font-body text-[18px] font-extrabold uppercase tracking-[0.3px] text-white">
                Vancouver
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We also serve Vancouver, from Kitsilano to downtown. Visit
                our{" "}
                <a
                  href="/vancouver"
                  className="underline underline-offset-2"
                >
                  Vancouver cleaning page
                </a>{" "}
                for the full list of neighborhoods we cover and the services
                we offer there.
              </p>
            </div>
            <div className="rounded-[20px] bg-white/[0.12] p-6 sm:p-8">
              <h3 className="font-body text-[18px] font-extrabold uppercase tracking-[0.3px] text-white">
                Burnaby, New Westminster, and Maple Ridge
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary covers Burnaby, New Westminster, and Maple
                Ridge as well. These areas don&apos;t have dedicated pages
                yet, but our team offers the same house cleaning, commercial
                cleaning, carpet cleaning, window cleaning, pressure
                washing, and gutter cleaning services here too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Not Sure If We Cover Your Area ──────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Not Sure If We Cover Your Area
            </h2>
            <p className="mx-auto mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              If your city or neighborhood isn&apos;t listed above, call us
              at{" "}
              <a
                href="tel:+12366883248"
                className="underline underline-offset-2"
              >
                236-688-3248
              </a>{" "}
              or email{" "}
              <a
                href="mailto:hello@mintsanitary.com"
                className="underline underline-offset-2"
              >
                hello@mintsanitary.com
              </a>
              . We&apos;ll let you know right away if we can get to you, and
              most of the time we can.
            </p>
            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
