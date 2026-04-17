"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Driveway Pressure Washing",
    href: "/pressure-washing-north-vancouver/driveway-pressure-washing/",
    image: "/pressure-washing-driveway-north-vancouver.webp",
    description:
      "Concrete and asphalt driveways absorb oil stains, tire marks, and organic growth. High-pressure treatment strips these stains away, restores safety by eliminating slippery algae and moss, and prepares surfaces for resealing.",
  },
  {
    title: "Deck and Patio Cleaning",
    href: "/pressure-washing-north-vancouver/deck-patio-cleaning/",
    image: "/pressure-washing-deck-patio-north-vancouver.webp",
    description:
      "Wood decks and composite patios require soft washing — low pressure with biodegradable detergents — to lift organic growth without damaging wood grain. Spring soft washing removes winter buildup; fall cleaning prevents mold from setting in.",
  },
  {
    title: "House Washing",
    href: "/pressure-washing-north-vancouver/house-washing/",
    image: "/pressure-washing-house-washing-north-vancouver.webp",
    description:
      "Home siding accumulates algae bands, particularly on north-facing walls. Vinyl, fiber cement, cedar, and stucco siding all require soft washing to avoid damage while achieving thorough cleaning. Removes mold and mildew that impact air quality.",
  },
  {
    title: "Fence Washing",
    href: "/pressure-washing-north-vancouver/fence-washing/",
    image: "/pressure-washing-fence-north-vancouver.webp",
    description:
      "Cedar, vinyl, and composite fencing protect privacy while defining property lines. Soft washing removes algae and moss safely without scarring wood grain. Fence washing also prepares surfaces for staining or sealing.",
  },
];

const whyChooseItems = [
  {
    title: "Biodegradable Solutions",
    body: "Both soft wash and pressure wash methods use eco-friendly detergents that break down safely without harming pets, plants, or stormwater systems.",
  },
  {
    title: "Free Estimates",
    body: "No obligation. We assess your surfaces, recommend the right method, and provide a clear quote before any work begins.",
  },
  {
    title: "7-Day Availability",
    body: "Flexible scheduling works with busy lives. Book your preferred date and time online or by phone.",
  },
  {
    title: "10% First Clean Discount",
    body: "New customers receive code MINT25 for 10% off your first service.",
  },
  {
    title: "Professional Insurance",
    body: "WCB and liability coverage protect your property during the cleaning process.",
  },
  {
    title: "Multi-Step Process",
    body: "We don't simply spray and leave. We clean systematically to prevent damage and maximize results.",
  },
];

const faqItems = [
  {
    question: "How often should I pressure wash my house in North Vancouver?",
    answer:
      "For North Vancouver's wet, shaded climate, soft washing every 12 to 24 months is standard. Homes near trees or on north-facing slopes benefit from annual cleaning. Sunnier properties can stretch to every 18 to 24 months. Spring (April through May) is ideal; fall (September through October) is the secondary window.",
  },
  {
    question: "Will pressure washing damage my wood deck?",
    answer:
      "High-pressure washing above 1,500 PSI can splinter wood, force water into fibers, and cause warping or rot. We use soft wash (less than 700 PSI) on all wood and composite decks, removing algae and moss safely without surface damage.",
  },
  {
    question: "What's the difference between soft wash and pressure wash?",
    answer:
      "Soft wash uses low pressure (less than 700 PSI) and biodegradable detergent to lift organic growth without damaging surfaces. Pressure wash uses high force (1,500 to 4,500 PSI) for concrete and pavers. Each has its place. We assess your specific surfaces and recommend the safest, most effective approach for your North Vancouver property.",
  },
  {
    question: "Is pressure washing eco-friendly?",
    answer:
      "Yes, when done correctly. We use biodegradable detergents that break down safely without harming stormwater systems, pets, or plants. Wastewater is disposed of responsibly, keeping it out of storm drains. Metro Vancouver's stormwater bylaws require proper practices, and we comply fully to protect local waterways in North Vancouver.",
  },
  {
    question: "How much does pressure washing cost in North Vancouver?",
    answer:
      "Cost varies by property size and surface type. A typical driveway runs $150 to $300; house washing costs $200 to $500; deck cleaning ranges from $150 to $400. We offer free estimates with no obligation. Contact us to discuss your specific property needs. New customers get 10% off with code MINT25.",
  },
  {
    question: "Can I DIY pressure wash my home?",
    answer:
      "Renting equipment costs $40 to $100 per day plus supplies. Untrained homeowners need 9 or more hours on a 2,200 square foot property compared to 2.5 hours for professionals. Risks include window damage ($300 to $750), deck splintering ($1,200+ repairs), siding damage, and water infiltration. Professional service is often only slightly more expensive and eliminates these costly risks.",
  },
  {
    question: "What's the best time of year to pressure wash in North Vancouver?",
    answer:
      "Spring (April through May) and fall (September through October) are ideal. Spring cleans winter damage and prepares for summer entertaining or showings. Fall cleaning prevents the wet season from setting problems deeper into surfaces.",
  },
  {
    question: "Will pressure washing improve my home's resale value in North Vancouver?",
    answer:
      "Yes. Homes with strong curb appeal sell for 7 to 17% more than similar properties with neglected exteriors. Professional cleaning often delivers the fastest ROI improvement before showing your home.",
  },
  {
    question: "Do you offer commercial pressure washing in North Vancouver?",
    answer:
      "We specialize in residential services. For commercial inquiries, contact us at (604) 671-6252 or hello@mintsanitary.com. We may be able to help or refer you to a trusted partner.",
  },
  {
    question: "How do I book a pressure washing appointment in North Vancouver?",
    answer:
      "Book online at our website, call (604) 671-6252, or email hello@mintsanitary.com. We're available 7 days a week. First-time customers receive 10% off with code MINT25. Free estimates are available for all services with no obligation.",
  },
];

const googleReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Mint Sanitary did an incredible deep clean of our Lynn Valley home. Every corner was spotless, and they used eco-friendly products which was important to us with two young kids. Highly recommend!",
  },
  {
    name: "James T.",
    rating: 5,
    date: "1 month ago",
    text: "We use Mint for our office in Lower Lonsdale. They're always on time, thorough, and the team is super professional. Our workspace has never looked better.",
  },
  {
    name: "Priya K.",
    rating: 5,
    date: "3 weeks ago",
    text: "Booked a move-out clean for my apartment in North Vancouver. The team was efficient and left the place looking brand new. Got my full deposit back!",
  },
  {
    name: "David R.",
    rating: 5,
    date: "1 week ago",
    text: "Fantastic recurring cleaning service. Same team every two weeks, they know our home and always go above and beyond. Fair pricing and great communication.",
  },
  {
    name: "Michelle L.",
    rating: 5,
    date: "2 months ago",
    text: "Had our carpets and upholstery done after a renovation. The results were amazing — looked like new furniture! The team was careful, professional, and on time.",
  },
  {
    name: "Robert C.",
    rating: 4,
    date: "3 weeks ago",
    text: "Great post-construction cleanup for our Deep Cove renovation. Handled all the fine dust and debris thoroughly. Would use again for future projects.",
  },
];

const featuredClients = [
  { name: "Vancouver Coastal Health", logo: "/client-vancouver-coastal-health.png" },
  { name: "BC Hydro", logo: "/client-bc-hydro.png" },
  { name: "Arbutus Point Developments Ltd.", logo: "/client-arbutus-point.png" },
  { name: "Powers Construction", logo: "/client-powers-construction.png" },
];

const galleryImages = [
  {
    src: "/pressure-washing-north-vancouver-sidewalk-before-after.webp",
    alt: "Residential sidewalk pressure washing before and after in North Vancouver",
  },
  {
    src: "/pressure-washing-north-vancouver-deck-clean-wood-exterior.webp",
    alt: "Clean multi-level wood deck and siding after pressure washing in North Vancouver",
  },
  {
    src: "/pressure-washing-north-vancouver-residential-driveway.webp",
    alt: "Residential concrete driveway and modern home exterior cleaning North Vancouver",
  },
  {
    src: "/pressure-washing-north-vancouver-house-siding-soft-wash.webp",
    alt: "Freshly washed home siding with clean planks in North Vancouver",
  },
  {
    src: "/pressure-washing-north-vancouver-wood-fence-clean.webp",
    alt: "Clean wooden fence after soft washing in a North Vancouver yard",
  },
  {
    src: "/pressure-washing-north-vancouver-balcony-tiles-clean.webp",
    alt: "Clean outdoor balcony tiles with coastal view North Vancouver",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "North Vancouver City Centre",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "Capilano",
  "Norgate",
  "Dollarton",
];

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

export default function PressureWashingCategoryPageClient() {
  const [openWhy, setOpenWhy] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/north-vancouver-skyline-pressure-washing-hero.webp')",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Professional Pressure Washing in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Pressure Washing Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                North Vancouver&apos;s wet climate means your home&apos;s exterior is
                constantly under siege. Persistent rainfall, heavy shade from
                surrounding forests, and cool temperatures create ideal conditions
                for moss, algae, and mildew on driveways, decks, siding, and fences.
                Mint Sanitary brings professional pressure washing and soft washing
                services to North Vancouver — removing years of buildup and restoring
                your home&apos;s curb appeal. Call (604) 671-6252 or use code MINT25 for
                10% off your first service.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
                >
                  Free Estimate
                </a>
                <a
                  href="tel:+16046716252"
                  className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  Call (604) 671-6252
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">
                <li>Biodegradable Solutions</li>
                <li>7-Day Availability</li>
                <li>10% Off With Code MINT25</li>
              </ul>
            </div>
            <div className="hidden md:block" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
            >
              <path
                d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z"
                fill="#6191e9"
              />
            </svg>
          </div>
        </section>

        {/* ── Featured Clients ───────────────────────────────────── */}
        <section className="relative z-10 bg-[#6191e9] px-4 pb-4 pt-10 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-5 text-center font-body text-[12px] font-bold uppercase tracking-[2px] text-white/60">
              Trusted by Local Organizations
            </p>
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
              {featuredClients.map((client) => (
                <div
                  key={client.name}
                  className="flex h-[80px] items-center justify-center px-4"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-[52px] w-auto object-contain brightness-0 invert opacity-60 transition-all duration-300 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wave: Blue → White ──────────────────────────────── */}
        <div className="relative z-10 -mt-1 bg-[#6191e9]">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path
              d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* ── Why Pressure Washing Matters — Image Left, Text Right ── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/north-vancouver-driveway-pressure-washing-professional.webp"
                alt="Professional residential driveway pressure washing in North Vancouver"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Pressure Washing Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  North Vancouver&apos;s location at the intersection of Coast
                  Mountains, dense forest, and the Pacific Ocean creates a unique
                  climate challenge: high annual rainfall combined with persistent
                  shade means surfaces stay damp year-round. Unlike drier regions
                  where a few cleaning cycles per year suffice, North Vancouver
                  properties require regular attention to prevent structural damage.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Moss and algae thrive in moisture and shade. North-facing walls,
                  areas beneath tree coverage, and horizontal surfaces like
                  driveways and decks become host to organic growth that accelerates
                  decay. A driveway left untreated for 18 months can accumulate a
                  quarter-inch of moss and algae, making the surface slippery and
                  potentially liable if guests slip. Failure to address these issues
                  early means they accelerate, with algae sending root-like
                  structures into concrete and moss trapping moisture against wood.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Research shows homes with strong curb appeal command 7 to 17%
                  higher resale prices than similar properties with neglected
                  exteriors. For homeowners in Edgemont Village or other premium
                  North Vancouver neighbourhoods, professional cleaning often
                  represents the single fastest return on investment before listing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Soft Wash vs Pressure Wash ─────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Soft Wash vs. Pressure Wash — Which Does Your Home Need?
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[20px] bg-white p-6 shadow-sm">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Pressure Washing
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Uses high force (1,500 to 4,500 PSI) to blast away embedded
                  dirt, oil stains, and grime. Works excellently for concrete
                  driveways, brick, pavers, and hard surfaces where aggressive
                  cleaning is safe.
                </p>
              </div>
              <div className="rounded-[20px] bg-white p-6 shadow-sm">
                <h3 className="font-body text-[17px] font-extrabold text-[#4E5062]">
                  Soft Washing
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Uses lower pressure (less than 700 PSI) combined with
                  biodegradable detergents to lift organic growth. Targets algae,
                  moss, and mold while protecting painted surfaces, wood, composite
                  materials, and delicate siding.
                </p>
              </div>
            </div>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/mint-sanitary-service-van-north-vancouver.jpg"
                  alt="Mint Sanitary service van for pressure washing in North Vancouver"
                  className="h-[300px] w-full object-cover sm:h-[360px]"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                Many homeowners assume that more pressure equals better cleaning.
                In reality, high pressure on wood or delicate surfaces causes
                expensive damage. Soft wash kills moss and algae at the source by
                breaking down cell structures with specialized detergents,
                preventing regrowth faster than pressure alone.
              </p>
            </div>
          </div>
        </section>

        {/* ── Service Cards ───────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Pressure Washing Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Our 4 Pressure Washing Services in North Vancouver
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#eef4ff]"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} in North Vancouver`}
                    className="h-[190px] w-full rounded-[14px] object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-[#4E5062]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-[#5c6075]">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-block border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062] transition-colors group-hover:text-[#6191e9]">
                    Learn More
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Mint — Image + Accordion (BLUE) ──────────── */}
        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 lg:grid-cols-2">
            <div className="h-full overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                alt="Eco-friendly pressure washing solutions in North Vancouver"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px] lg:min-h-0"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                We&apos;re not just another pressure washing company. Mint Sanitary
                is built on reliability, biodegradable methods, and results that
                protect your property and restore its curb appeal.
              </p>
              <div className="mt-6 space-y-3">
                {whyChooseItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
                  >
                    <button
                      onClick={() => setOpenWhy(openWhy === i ? null : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-body text-[16px] font-extrabold uppercase tracking-[0.3px] text-white">
                        {item.title}
                      </span>
                      <span
                        className="ml-4 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                        style={{
                          transform:
                            openWhy === i ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${openWhy === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Image Gallery ───────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Work
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                See the Difference
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`overflow-hidden rounded-[20px] ${i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-[240px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[260px]"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Google Reviews ──────────────────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <div className="mb-2 flex items-center justify-center gap-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                  Google Reviews
                </span>
              </div>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What Our Clients Say
              </h2>
              <div className="mt-2 flex items-center justify-center gap-2">
                <StarRating rating={5} />
                <span className="font-body text-[15px] font-semibold text-[#4E5062]">
                  4.9 out of 5
                </span>
                <span className="font-body text-[14px] text-[#5c6075]">
                  based on 120+ reviews
                </span>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="rounded-[20px] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[16px] font-extrabold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-[15px] font-extrabold text-[#4E5062]">
                        {review.name}
                      </p>
                      <p className="font-body text-[12px] text-[#5c6075]">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-3 font-body text-[14px] leading-[1.7] text-[#5c6075]">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Areas — Chips + Map ─────────────────────────── */}
        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[900px] text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Service Areas: North Vancouver and Beyond
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Mint Sanitary provides professional pressure washing and soft
                washing services throughout North Vancouver and the surrounding
                region. Whether you&apos;re in a waterfront property in Lower Lonsdale
                or a hillside home in Lynn Valley, our team delivers the same
                professional service, biodegradable methods, and 7-day
                availability.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <img
                src="/mint-service-area-map.png"
                alt="Map showing Mint Sanitary pressure washing service area in North Vancouver"
                className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              />
              <a
                href="/service-areas"
                className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                View All Service Areas
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ — Interactive Accordion (BLUE) ─────────────────── */}
        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto max-w-[800px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-8 space-y-3">
              {faqItems.map((faq, i) => (
                <div
                  key={faq.question}
                  className="rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="pr-4 font-body text-[16px] font-extrabold text-white">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                      style={{
                        transform:
                          openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 font-body text-[15px] leading-[1.65] text-white/75">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Get Your Free Pressure Washing Estimate Today
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              No obligation. Our team will assess your surfaces, recommend the
              right method, and provide a clear quote. Available 7 days a week
              across all North Vancouver neighbourhoods. New customer? Use code
              MINT25 for 10% off your first clean.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:bg-[#5580d4] hover:shadow-lg"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:+16046716252"
                className="inline-flex items-center justify-center rounded-[99px] border-2 border-[#6191e9]/30 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062] transition-all duration-200 hover:border-[#6191e9]/60 hover:bg-[#f4f8ff]"
              >
                Call (604) 671-6252
              </a>
            </div>
          </div>
        </section>

        {/* ── Wave: White → Blue (before Footer) ─────────────────── */}
        <div className="relative z-10 -mt-1 bg-white">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path
              d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z"
              fill="#6191e9"
            />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
