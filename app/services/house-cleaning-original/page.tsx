import type { Metadata } from "next";
import { ShieldCheck, Leaf, Heart, Clock, HardHat, ClipboardCheck, Percent } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayoutV2";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/house-cleaning-original
// so the CMS version at /services/house-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "House & Apartment Cleaning Services | Mint Sanitary",
  description:
    "Professional house and apartment cleaning across Greater Vancouver. Eco-friendly products, background-checked staff, flexible scheduling. Get a free quote.",
  robots: { index: false, follow: false },
};

const checklistCards = [
  {
    title: "Living Areas",
    items: [
      "Dust all surfaces, shelves, and furniture",
      "Vacuum carpets and rugs, sweep and mop hard floors",
      "Wipe light switches, door handles, and baseboards",
      "Remove cobwebs",
      "Clean mirrors and glass surfaces",
      "Empty trash and replace liners",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize countertops and backsplash",
      "Clean the exterior of all appliances (fridge, oven, microwave, dishwasher)",
      "Scrub and sanitize the sink and faucet",
      "Wipe cabinet fronts and drawer handles",
      "Sweep and mop the floor",
      "Clean the stovetop and range hood exterior",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet, including the base and behind it",
      "Clean and sanitize the sink, faucet, and countertop",
      "Scrub the tub and shower walls, door, and fixtures",
      "Clean mirrors",
      "Wipe cabinet fronts and towel bars",
      "Sweep and mop the floor",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, nightstands, and dressers",
      "Vacuum carpets or sweep and mop hard floors",
      "Make beds and tuck linens (linen changes available on request)",
      "Wipe light switches and door handles",
      "Remove cobwebs",
    ],
  },
  {
    title: "General",
    items: [
      "Dust ceiling fan blades within reach",
      "Wipe window sills and ledges",
      "Vacuum stairs and hallways",
      "Spot-clean marks on walls",
      "Wipe railings and banisters",
    ],
  },
];

const cleaningTypes = [
  {
    title: "Standard Cleaning",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
    body: "Our core service for regular upkeep, covering every room using the checklist above. Works as a one-time clean or the base for a recurring schedule.",
  },
  {
    title: "Recurring Cleaning",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
    body: "Weekly, biweekly, monthly, or custom visits. No contracts, and you can pause, adjust, or cancel your schedule anytime.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    image: "/move-in-cleaning-north-vancouver-apartment.jpg",
    body: "A thorough clean for empty units, built for tenants, landlords, and homeowners closing out a lease or a sale.",
    href: "/services/move-in-move-out-cleaning",
  },
  {
    title: "Deep Cleaning",
    image: "/deep-cleaned-kitchen-north-vancouver.jpg",
    body: "A more intensive clean that reaches inside appliances, behind furniture, and into buildup a standard clean doesn't touch.",
    href: "/services/deep-cleaning",
  },
  {
    title: "Vacation Rental Cleaning",
    image: "/vacation-rental-cleaning-north-vancouver.jpg",
    body: "Turnover cleaning for Airbnb and short-term rental hosts.",
    href: "/services/vacation-rental-cleaning",
  },
  {
    title: "Drapes & Curtains Cleaning",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    body: "On-site cleaning for drapes and curtains that collect dust and odors.",
    href: "/services/drapes-curtains-cleaning",
  },
  {
    title: "Upholstery Cleaning",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    body: "Deep cleaning for sofas, chairs, and other upholstered furniture.",
    href: "/services/upholstery-cleaning",
  },
];

const everyCleanIncludes = [
  { title: "10% off your first clean with code MINT26", Icon: Percent },
  { title: "Background-checked & insured cleaners", Icon: ShieldCheck },
  { title: "Eco-friendly cleaning products", Icon: Leaf },
  { title: "100% happiness guarantee", Icon: Heart },
  { title: "On-time arrival, every time", Icon: Clock },
  { title: "WorkSafeBC coverage on every job", Icon: HardHat },
  { title: "Mint Sanitary Clean Checklist: full cleaning service", Icon: ClipboardCheck },
];

const whyChooseItems = [
  { title: "Eco-friendly products", body: "Plant-based, non-toxic, safe around kids and pets." },
  { title: "HEPA-filter vacuums", body: "Capture fine dust and allergens instead of pushing them back into the air." },
  { title: "Vetted, insured staff", body: "Every cleaner is background-checked, bonded, and insured." },
  { title: "7-day availability", body: "We schedule cleanings every day of the week." },
  { title: "Transparent pricing", body: "Free estimates with no hidden fees." },
  { title: "24-hour satisfaction guarantee", body: "If something's missed, tell us within 24 hours and we'll make it right." },
  { title: "Consistent teams", body: "Where possible, we assign the same cleaner or team to your home." },
];

const cityAreas: { name: string; href?: string }[] = [
  { name: "North Vancouver", href: "/north-vancouver/house-cleaning" },
  { name: "West Vancouver" },
  { name: "Vancouver" },
  { name: "Burnaby" },
];

const faqItems = [
  {
    question: "What's included in a standard house cleaning?",
    answer:
      "A standard clean covers living areas, kitchen, bathrooms, and bedrooms: dusting, vacuuming, mopping, sanitizing sinks and countertops, cleaning mirrors, emptying trash, and wiping down surfaces like light switches, door handles, and baseboards.",
  },
  {
    question: "How much does house cleaning cost?",
    answer:
      "Pricing depends on the size of your home. Standard cleaning starts around $220 for a 500 to 600 square foot property and increases with square footage, since most jobs are quoted by size rather than a flat rate. Visit our rates page for a real-time quote.",
  },
  {
    question: "Do you offer recurring cleaning plans?",
    answer:
      "Yes. Weekly, biweekly, monthly, or a custom schedule. No contracts, and you can pause, adjust, or cancel your plan anytime.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. We use eco-friendly, non-toxic, plant-based products throughout every clean.",
  },
  {
    question: "What's not included in a standard clean?",
    answer:
      "Inside ovens, refrigerators, and dishwashers, interior or exterior window washing, moving heavy furniture, deep carpet shampooing or stain treatment, garage or attic cleaning, and laundry or dishwashing. Several are available as add-ons or covered under our deep cleaning service.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Most clients aren't home during their scheduled clean and provide access instructions in advance. Our staff are background-checked, bonded, and insured.",
  },
  {
    question: "What's the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning covers regular upkeep of visible surfaces. Deep cleaning goes further, reaching inside appliances and other areas that build up over time.",
  },
  {
    question: "Do you clean apartments and condos, not just houses?",
    answer: "Yes. We clean apartments, condos, and rental units in addition to detached houses, using the same checklist and standards.",
  },
  {
    question: "What areas do you serve?",
    answer: "We're based in North Vancouver and also serve West Vancouver, Vancouver, Burnaby, and surrounding areas.",
  },
  {
    question: "Is there a discount for new customers?",
    answer: "Yes. New customers get 10% off their first clean with code MINT26.",
  },
  {
    question: "What if I'm not happy with the clean?",
    answer: "We offer a 24-hour satisfaction guarantee. Let us know within 24 hours and we'll come back to fix it.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "Request a free estimate on our rates page or contact us directly by phone or email.",
  },
];

const citiesSection = (
  <section
    key="cities"
    className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
    }}
  >
    <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
        <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
          House and Apartment Cleaning Services Across Greater Vancouver
        </h2>
        <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
          Mint Sanitary is based in North Vancouver and cleans homes across
          Greater Vancouver.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {cityAreas.map((area) =>
          area.href ? (
            <a
              key={area.name}
              href={area.href}
              className="inline-flex items-center whitespace-nowrap rounded-[99px] border border-white/30 bg-white/10 px-6 py-3 font-body text-[14px] font-bold uppercase tracking-[0.3px] text-white transition-colors duration-200 hover:bg-white/20"
            >
              {area.name} House and Apartment Cleaning
            </a>
          ) : (
            <span
              key={area.name}
              aria-disabled="true"
              className="inline-flex items-center whitespace-nowrap rounded-[99px] border border-white/15 px-6 py-3 font-body text-[14px] font-bold uppercase tracking-[0.3px] text-white/40"
            >
              {area.name} House and Apartment Cleaning
            </span>
          )
        )}
      </div>
    </div>
  </section>
);

export default function ServicesHouseCleaningPage() {
  return (
    <ServicePageLayout
      title="House Cleaning Services in Greater Vancouver"
      heroImage="/professional-cleaning-services-north-vancouver.jpg"
      heroIntro="Mint Sanitary provides house and apartment cleaning for homeowners, renters, and property managers across Greater Vancouver. Whether you live in a downtown Vancouver condo, a Burnaby townhome, a West Vancouver house, or a North Vancouver rental, our team handles the cleaning so you don't have to. Every job uses eco-friendly, non-toxic products and a checklist built for consistency."
      faqItems={faqItems}
      ctaHeading="Ready to Book Your Cleaning?"
      ctaBody="Get a free, transparent quote for your home on our rates page. You can also reach us directly at 236-688-3248 or hello@mintsanitary.com."
      afterFaq={citiesSection}
    >
      {/* ── What's Included — two column (f4f8ff bg) ─────────── */}
      <section key="whats-included" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          {/* Full-width centered header */}
          <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              What&apos;s Included in a House Cleaning
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Our standard house and apartment cleaning covers every main
              living space in your home.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[560px_1fr]">
            {/* Left column — checklist */}
            <div>
              <div className="grid grid-cols-1 gap-5">
                {checklistCards.map((card) => (
                  <div key={card.title} className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                    <h3 className="font-body text-[25px] font-extrabold text-white">{card.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {card.items.map((item) => (
                        <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                          &bull; {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                <h3 className="font-body text-[25px] font-extrabold text-white">What&apos;s Not Included</h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                  A standard clean does not cover the inside of ovens,
                  refrigerators, or dishwashers, interior or exterior window
                  washing, moving heavy furniture, deep carpet shampooing or
                  stain treatment, garage, attic, or storage area cleaning, or
                  laundry and dishwashing. Most of these are available as
                  add-ons, and appliance interiors are part of our{" "}
                  <a href="/services/deep-cleaning" className="underline underline-offset-2">
                    Deep Cleaning
                  </a>{" "}
                  service. Linen changes can also be added on request.
                </p>
              </div>
            </div>

            {/* Right column — Every Mint Cleaning Includes (lighter opacity so it reads as a distinct panel; sticky on desktop while the left column scrolls past; starts level with the Living Areas card) */}
            <div className="rounded-[14px] bg-[#6191e9]/20 p-6 backdrop-blur-sm lg:sticky lg:top-[130px]">
              <h3 className="font-body text-[25px] font-extrabold text-white">Every Mint Cleaning Includes</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {everyCleanIncludes.map(({ title, Icon }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Icon size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-[#66DAD5]" />
                    <span className="font-body text-[15px] leading-[1.5] text-white/85">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of House Cleaning (blue bg) ────────────────── */}
      <section
        key="types"
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Types of House Cleaning We Offer
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We offer one-time cleaning, recurring service, and specialty
              cleaning for move-outs and deep cleans.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cleaningTypes.map((type) => {
              const card = (
                <>
                  <img
                    src={type.image}
                    alt={`${type.title} in Greater Vancouver`}
                    className="h-[190px] w-full rounded-[14px] object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-white">
                    {type.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{type.body}</p>
                  {type.href && (
                    <span className="mt-auto inline-block pt-4 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white">
                      Learn More
                    </span>
                  )}
                </>
              );
              return type.href ? (
                <a
                  key={type.title}
                  href={type.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
                >
                  {card}
                </a>
              ) : (
                <div
                  key={type.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6191e9]/20"
                >
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose (image + accordion, matches post-construction-cleaning layout) ── */}
      <AccordionWithImage
        key="why-choose"
        heading="Why Choose Mint Sanitary"
        image="/house-cleaning-bedroom-north-vancouver.jpg"
        imageAlt="Freshly cleaned bedroom in a North Vancouver home"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="Get a Free Estimate"
        hideAccent
      />

    </ServicePageLayout>
  );
}
