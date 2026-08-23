"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaqSchema, BreadcrumbSchema } from "@/components/SeoSchema";

const services = [
  {
    title: "Driveway Pressure Washing",
    href: "#driveway-pressure-washing",
    image: "/pressure-washing-driveway-north-vancouver.webp",
    description:
      "Concrete and asphalt driveways in North Vancouver absorb oil stains, tire marks, and moss. High-pressure treatment strips these away, removes slippery growth, and preps the surface for sealing. See full pricing and process below.",
  },
  {
    title: "Deck and Patio Cleaning",
    href: "#deck-patio-cleaning",
    image: "/pressure-washing-deck-patio-north-vancouver.webp",
    description:
      "Wood decks and composite patios need soft washing, low pressure with biodegradable detergent, to lift organic growth without damaging the wood grain. Spring cleaning removes winter buildup; fall cleaning gets ahead of the wet season.",
  },
  {
    title: "House Washing",
    href: "#house-washing",
    image: "/pressure-washing-house-washing-north-vancouver.webp",
    description:
      "North Vancouver siding builds up algae bands fast, especially on north-facing walls. Vinyl, fiber cement, cedar, and stucco all require soft washing to clean thoroughly without damage or voided warranties.",
  },
  {
    title: "Fence Washing",
    href: "#fence-washing",
    image: "/pressure-washing-fence-north-vancouver.webp",
    description:
      "Cedar, vinyl, and composite fencing protect privacy and mark property lines. Soft washing removes algae and moss safely without scarring wood grain and preps the surface for staining or sealing.",
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
    body: "New customers receive code MINT26 for 10% off your first service.",
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
    question: "What's the difference between pressure washing and soft washing in North Vancouver?",
    answer:
      "Pressure washing uses high PSI, 1,500 or more, for concrete, stone, and pavers around your North Vancouver property. Soft washing uses lower pressure, 500 to 1,200 PSI, for wood, composite, and siding. We recommend soft wash for decks, siding, and fences, and pressure wash for driveways and patios in North Vancouver.",
  },
  {
    question: "How often should I have my North Vancouver property pressure washed?",
    answer:
      "Most North Vancouver homeowners benefit from cleaning every 12 to 24 months, with annual service recommended for driveways, decks, and fences in shaded or damp locations like Lynn Valley and Deep Cove. Heavily shaded siding may need washing every 6 months.",
  },
  {
    question: "Is pressure washing safe for all driveway surfaces in North Vancouver?",
    answer:
      "Yes, when a professional uses the correct PSI for your surface. In North Vancouver, concrete handles 2,500 to 3,000 PSI, asphalt needs 1,500 to 2,800 PSI, and pavers need 1,200 to 2,000 PSI. Using the wrong pressure is the most common cause of driveway damage in North Vancouver.",
  },
  {
    question: "Do you use eco-friendly cleaning products in North Vancouver?",
    answer:
      "Yes. We use biodegradable, plant-safe products across every service, from driveway pre-treatments to house washing solutions, in compliance with Metro Vancouver stormwater regulations that protect North Vancouver's waterways.",
  },
  {
    question: "How much does pressure washing cost in North Vancouver?",
    answer:
      "Pricing varies by service: driveway pressure washing runs $150 to $300, deck and patio cleaning runs $150 to $400, house washing runs $200 to $850+ depending on home size, and fence washing runs roughly $375 to $825 for a typical 150-foot fence. Every North Vancouver quote is free and comes with no obligation.",
  },
  {
    question: "Can professional cleaning help sell my North Vancouver home faster?",
    answer:
      "Yes. Homes with strong curb appeal sell 7 to 17% higher, and a clean exterior can add $10,000 to $15,000 in perceived buyer value. We recommend scheduling driveway, deck, and house washing 1 to 2 weeks before listing photography for your North Vancouver home.",
  },
  {
    question: "Should I pressure wash my North Vancouver deck myself, or hire a professional?",
    answer:
      "DIY pressure washing is one of the most common ways North Vancouver homeowners damage their own deck. High PSI gouges wood fibers and can lead to $1,200 or more in board repairs. Professional soft washing at 500 to 1,200 PSI cleans safely without that risk.",
  },
  {
    question: "What driveway surfaces can you clean in North Vancouver?",
    answer:
      "We clean concrete, asphalt, pavers, and stamped concrete driveways throughout North Vancouver, adjusting PSI and nozzle angle to each surface to avoid damage.",
  },
  {
    question: "Can you remove oil stains from my North Vancouver driveway?",
    answer:
      "Yes, using eco-friendly degreasers, poultice treatments, or enzymatic cleaners that dwell for 10 to 15 minutes before pressure washing lifts the stain. Fresh oil stains respond better than old, deeply embedded ones on North Vancouver driveways.",
  },
  {
    question: "Do I need to seal my North Vancouver driveway after pressure washing?",
    answer:
      "We strongly recommend it. Pressure washing opens the pores of concrete, and sealing protects against North Vancouver's freeze-thaw cycles, extending driveway lifespan by 5 to 10 or more years. Wait 24 hours after washing before sealing.",
  },
  {
    question: "Will pressure washing damage my North Vancouver wood deck?",
    answer:
      "Only if the pressure is too high. Above 1,500 PSI, water can gouge, splinter, or force moisture into wood fibers. Professional soft wash at 500 to 1,200 PSI cleans North Vancouver decks safely, and we test an inconspicuous area first to confirm.",
  },
  {
    question: "Can you clean composite decks in North Vancouver, or only wood?",
    answer:
      "We clean all deck types in North Vancouver, including wood, composite, vinyl, and PVC. Composite decks need to stay under 1,500 PSI, and our technicians know the specific care guidelines for Trex, TimberTech, and DuxxBak.",
  },
  {
    question: "How soon after cleaning can I stain or seal my North Vancouver deck?",
    answer:
      "Wait 48 to 72 hours after professional cleaning for your North Vancouver deck to fully dry before applying stain or sealant. Proper drying maximizes adhesion and gives you a finish that lasts longer.",
  },
  {
    question: "Is pressure washing safe for my cedar fence in North Vancouver?",
    answer:
      "Yes, at low pressure, 500 to 1,000 PSI, with proper technique. Excessive pressure or aggressive nozzles can splinter cedar, so our North Vancouver technicians follow strict PSI guidelines for every cedar fence we clean.",
  },
  {
    question: "What's the difference between vinyl and cedar fence cleaning in North Vancouver?",
    answer:
      "Vinyl fencing uses higher pressure, 1,500 to 2,000 PSI, because it's more durable. Cedar needs gentle pressure, 500 to 1,000 PSI, to avoid splintering, plus longer drying time before sealing. We adjust our approach to each material for North Vancouver customers.",
  },
  {
    question: "Will fence washing remove all mold and mildew in North Vancouver?",
    answer:
      "Professional washing removes existing mold and mildew from your North Vancouver fence. To prevent regrowth in our damp climate, we recommend a waterproof sealer or fungicide-based stain within 48 hours of cleaning, extending protection by 2 to 3 years.",
  },
  {
    question: "Will professional house washing damage my vinyl siding or stucco in North Vancouver?",
    answer:
      "No. Soft washing, our standard method, is safe for all siding types common in North Vancouver. High-pressure washing can bend vinyl panels or crack stucco, which is why we avoid it on home exteriors. Hardie board manufacturers specifically require soft wash to keep the warranty valid.",
  },
  {
    question: "How long do house washing results last in North Vancouver's climate?",
    answer:
      "Professional soft wash results typically last 12 to 24 months in North Vancouver, depending on shade and exposure. Heavily shaded siding in areas like Seymour Heights and Deep Cove may need washing every 6 months.",
  },
  {
    question: "Can I DIY house washing instead of hiring a professional in North Vancouver?",
    answer:
      "DIY pressure washer rental is cheaper upfront, but professional soft washing offers better value for North Vancouver homeowners. Rental equipment risks $1,000 or more in siding damage, takes 6 to 8 or more hours versus 2 to 4 hours for a trained crew, and DIY results only last 3 to 6 months without professional-grade solutions.",
  },
  {
    question: "What areas of North Vancouver do you serve?",
    answer:
      "We serve all of North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, and North Vancouver City Centre, with same-day or next-day appointments in most cases. We also serve West Vancouver, Vancouver, and Burnaby on request.",
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
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Pressure Washing", path: "/north-vancouver/pressure-washing" }]} />
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
                North Vancouver&apos;s wet Pacific Northwest climate is the
                reason this page exists. Rain, coastal humidity, and heavy
                tree canopy create ideal conditions for moss, algae, and
                mildew on every exterior surface. This page covers our
                full lineup in one place: driveway cleaning, deck and
                patio cleaning, house washing, and fence washing. Call
                236-688-3248 or use code MINT26 for 10% off your first
                service.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
                >
                  Free Estimate
                </a>
                <a
                  href="tel:+12366883248"
                  className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  Call 236-688-3248
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">
                <li>Biodegradable Solutions</li>
                <li>7-Day Availability</li>
                <li>10% Off With Code MINT26</li>
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
                fill="rgba(255,255,255,0.13)"
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
        <div className="relative z-10 -mt-1">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path
              d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z"
              fill="transparent"
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Pressure Washing Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  North Vancouver&apos;s location at the intersection of Coast
                  Mountains, dense forest, and the Pacific Ocean creates a unique
                  climate challenge: high annual rainfall combined with persistent
                  shade means surfaces stay damp year-round. Unlike drier regions
                  where a few cleaning cycles per year suffice, North Vancouver
                  properties require regular attention to prevent structural damage.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Moss and algae thrive in moisture and shade. North-facing walls,
                  areas beneath tree coverage, and horizontal surfaces like
                  driveways and decks become host to organic growth that accelerates
                  decay. A driveway left untreated for 18 months can accumulate a
                  quarter-inch of moss and algae, making the surface slippery and
                  potentially liable if guests slip. Failure to address these issues
                  early means they accelerate, with algae sending root-like
                  structures into concrete and moss trapping moisture against wood.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
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
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Soft Wash vs. Pressure Wash — Which Does Your Home Need?
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[20px] bg-white/[0.12] backdrop-blur-sm p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  Pressure Washing
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                  Uses high force (1,500 to 4,500 PSI) to blast away embedded
                  dirt, oil stains, and grime. Works excellently for concrete
                  driveways, brick, pavers, and hard surfaces where aggressive
                  cleaning is safe.
                </p>
              </div>
              <div className="rounded-[20px] bg-white/[0.12] backdrop-blur-sm p-6">
                <h3 className="font-body text-[17px] font-extrabold text-white">
                  Soft Washing
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
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
              <p className="font-body text-[15px] leading-[1.7] text-white/80">
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Our Pressure Washing Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Our 4 Pressure Washing Services in North Vancouver
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="group overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2]"
                >
                  <img
                    src={s.image}
                    alt={`${s.title} in North Vancouver`}
                    className="h-[190px] w-full rounded-[14px] object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                    {s.description}
                  </p>
                  <span className="mt-4 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-[#6191e9]">
                    Learn More
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: Driveway Pressure Washing Section ──────────── */}
        <section id="driveway-pressure-washing" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Driveway Pressure Washing in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Driveway pressure washing uses high-pressure water, typically
              2,000 to 4,000 PSI, to remove dirt, grime, mold, algae, and
              stains from concrete, asphalt, and paver surfaces in North
              Vancouver. Most driveways, 500 to 800 square feet, are fully
              cleaned in one to two hours. We serve Lower Lonsdale, Lynn
              Valley, Deep Cove, Edgemont Village, and Seymour Heights as
              our core North Vancouver service areas, with same-day or
              next-day appointments available.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Surface-Specific Treatment</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { title: "Concrete driveways", body: "The most common surface in North Vancouver. Standard concrete handles 2,500 to 3,000 PSI, while sealed or decorative concrete needs a gentler 2,000 to 2,500 PSI. We recommend sealing after washing to protect newly opened pores." },
                { title: "Asphalt driveways", body: "Need a careful 1,500 to 2,800 PSI. Over-pressurizing can strip up to 25% of the surface layer and speed up deterioration, so we always match pressure to the material." },
                { title: "Pavers and stamped concrete", body: "Delicate and need 1,200 to 2,000 PSI with a wide nozzle, 25 to 40 degrees, to avoid dislodging bricks. Joint sand replacement afterward is a normal part of the process." },
              ].map((item) => (
                <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <h4 className="font-body text-[15px] font-extrabold text-white">{item.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Oil stains and stubborn grime get an eco-friendly
              pre-treatment, such as a degreaser, poultice, or enzymatic
              cleaner, that dwells for 10 to 15 minutes before pressure
              washing removes it completely.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Why It Matters</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              A clean driveway is your property&apos;s largest horizontal
              surface and shapes first impressions for buyers, guests, and
              neighbors in North Vancouver. Moss and algae create slip
              hazards in our rainy climate, and contaminants left on the
              surface accelerate concrete and asphalt breakdown. Our
              eco-friendly process also keeps oil, grease, and metals out
              of stormwater systems, in line with Metro Vancouver
              regulations.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Pre-cleaning inspection", body: "We identify the surface type, check for existing damage like cracks or spalling, and note any stains before setting the PSI and nozzle for your North Vancouver driveway." },
                { title: "Surface preparation", body: "We clear loose debris, pre-wet the area, and apply pre-treatment to stubborn stains, letting it dwell for 10 to 15 minutes." },
                { title: "High-pressure washing", body: "We work at 6 to 12 inches from the surface in steady strokes, paying extra attention to seams, edges, and high-traffic areas." },
                { title: "Rinsing", body: "A thorough final rinse clears soap residue and debris, and we squeegee excess water to speed drying." },
                { title: "Drying and final inspection", body: "Concrete typically needs 24 hours to dry before sealing. We walk through any remaining stains and sealing options with you." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">Why DIY driveway cleaning backfires.</strong>{" "}
              Rental pressure washers cause real damage in untrained
              hands: concrete spalling and cracking ($500 to $3,000+ in
              repairs), asphalt stripping (full repaving is often the only
              fix), paver dislodgement, damaged sealers, injury from
              misdirected pressure, water forced into foundations, and
              stormwater violations from uncontrolled chemical discharge.
              Professional pressure washing in North Vancouver costs $100
              to $350, far less than the repair bills DIY mistakes create.
            </p>

            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">Sealing after pressure washing.</strong>{" "}
              Pressure washing opens up the pores in concrete, so sealing
              afterward protects against water, oil, and stains. In North
              Vancouver&apos;s freeze-thaw climate, sealing is especially
              valuable: it extends driveway lifespan by 5 to 10 or more
              years and makes future cleaning easier. Wait 24 hours after
              washing before sealing. Options include acrylic sealers
              (affordable, good UV protection), penetrating sealers (deep
              moisture barrier, well suited to our wet climate), and
              eco-friendly sealers that protect local waterways.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Driveway Pricing in North Vancouver</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Professional driveway pressure washing costs $0.30 to
                $0.55 per square foot, generally $150 to $300 for most
                North Vancouver driveways, with a $100 to $200 minimum to
                cover travel and setup.
              </p>
              <ul className="mt-3 space-y-1.5">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 300 sq ft, light cleaning: $100 to $150</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 500 sq ft, moderate (moss, grime): $150 to $250</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 800 sq ft, heavy (oil stains, mold): $250 to $400</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 500 sq ft + sealing: $200 to $350</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Add-ons: oil stain pre-treatment ($50 to $150) and
                driveway sealing ($0.15 to $0.30 per square foot). New
                customers save 10% on their first clean with code MINT26.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEW: Deck and Patio Cleaning Section ────────────── */}
        <section id="deck-patio-cleaning" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Deck and Patio Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              North Vancouver&apos;s wet climate creates ideal conditions
              for moss, algae, and mildew on outdoor surfaces. Cedar decks
              in Lower Lonsdale, composite decking in Edgemont Village, and
              stone patios in Deep Cove all need regular cleaning to stay
              safe and last. A moss-covered deck is a slip hazard, and
              moisture that gets into wood leads to rot and expensive
              repairs down the line. Regular cleaning extends deck
              lifespan by 5 to 10 or more years. Cleaning before staining
              also matters: a clean deck absorbs stain evenly, creating a
              finish that lasts 3 to 5 or more years, versus a patchy
              result on a dirty surface.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Wood Deck Cleaning</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Cedar and pressure-treated decks are common throughout North
              Vancouver, and these softwoods are vulnerable to
              high-pressure damage. Anything above 1,500 PSI can gouge
              fibers, splinter boards, and force water into the wood.
              Professional soft washing uses controlled pressure, 500 to
              1,200 PSI depending on the wood species and condition. We
              start with a biodegradable pre-treatment that breaks down
              moss, algae, and mildew, letting it dwell for 10 to 30
              minutes. Then we rinse at low pressure, working with the
              grain to clean evenly and restore natural color and grip.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Composite and Stone Surfaces</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Composite decking from brands like Trex, TimberTech, and
              DuxxBak is common in newer North Vancouver homes, including
              Edgemont Village and Seymour Heights. These materials need
              care to protect manufacturer warranties: our soft-wash
              approach stays under 1,500 PSI and uses biodegradable
              products approved for composite. Cleaning within 7 days of
              staining keeps you within warranty guidelines. Concrete and
              stone patios can handle higher pressure, safely up to 3,000
              PSI, to clear moss, algae, dirt, and weathering. Wide-angle
              tips and proper distance keep pressure even and prevent
              etching or mortar joint damage.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Professional assessment", body: "We inspect your deck or patio, identify material and condition, and test an inconspicuous spot to confirm the right PSI. This is free, with a transparent quote and no hidden charges." },
                { title: "Pre-treatment application", body: "Our hydrogen peroxide-based cleaning solutions are safe for family, pets, and garden plants, and dwell for 10 to 30 minutes to fully break down moss, algae, and mildew." },
                { title: "Low-pressure rinse", body: "We rinse away all cleaning solution and debris at the correct PSI for your surface, using wide-angle tips and proper technique." },
                { title: "Final inspection and drying", body: "We confirm all stains, moss, and mildew are gone. Allow 48 to 72 hours for full drying before staining or sealing." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#6191e9]/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">A cautionary note on DIY.</strong>{" "}
              We&apos;ve seen the aftermath of DIY deck cleaning gone
              wrong: a Deep Cove homeowner rented a washer, ran it at
              3,000+ PSI on a cedar deck, and ended up with gouged boards,
              splintered edges, and rot that required full board
              replacement. Professional soft washing would have cost a
              fraction of those repairs.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Deck and Patio Pricing in North Vancouver</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Deck cleaning in North Vancouver typically runs $150 to
                $400, depending on size, material, and condition. We
                provide a time estimate, usually 2 to 4 hours for a
                typical residential deck, during your free on-site
                assessment.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEW: House Washing Section ───────────────────────── */}
        <section id="house-washing" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              House Washing in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              House washing is the soft-wash cleaning of every exterior
              surface on your North Vancouver home, using low-pressure
              water under 500 PSI combined with biodegradable detergent.
              It covers siding (vinyl, stucco, Hardie board, wood, and
              cedar), fascia and soffits, foundation and trim, window
              exteriors, gutters and downspouts (surface cleaning), and
              exterior trim boards.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Soft Wash vs. Pressure Washing for Home Exteriors</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Soft wash and pressure washing are not interchangeable, and
              the choice matters for your North Vancouver home&apos;s
              longevity. Soft washing, under 500 PSI with biodegradable
              detergent, kills algae, mold, and mildew at the source and
              prevents regrowth for 12 to 24 months. Pressure washing,
              1,300 to 3,000+ PSI, works well on concrete but risks
              bending vinyl panels, cracking stucco, forcing water behind
              siding, and stripping paint from trim. Soft wash is the
              standard for residential siding across British Columbia for
              exactly this reason.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Siding Types We Clean in North Vancouver</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { title: "Vinyl siding", body: "The most common choice across Lower Lonsdale and Edgemont Village. Tolerates moderate pressure, but soft wash avoids any risk of bending or cracking panels and prevents water seepage between seams in our rainy climate." },
                { title: "Stucco", body: "Popular throughout West and North Vancouver, is porous and prone to cracking under high pressure. Soft wash is essential for stucco homes in Deep Cove and Seymour Heights, using oxygen-based or non-chlorine solutions." },
                { title: "Hardie board and fiber cement", body: "Common in newer North Vancouver developments, requires soft wash only per the manufacturer's guidelines. Pressure washing voids the warranty. We stay at 500 to 800 PSI maximum." },
                { title: "Cedar and wood siding", body: "Appears on premium homes throughout North Vancouver and needs chlorine-free, plant-safe detergent to preserve the natural finish while removing algae and mildew." },
                { title: "Aluminum siding", body: "Responds well to soft wash, with biodegradable solutions that prevent oxidation staining without scratching or corrosion." },
              ].map((item) => (
                <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <h4 className="font-body text-[15px] font-extrabold text-white">{item.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{item.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Why House Washing Matters</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Homes with strong curb appeal sell 7% faster and command
              higher prices, and professional house washing can add
              $10,000 to $15,000 in perceived buyer value against a $300
              to $500 investment. Mold and algae feed on organic material
              in paint and siding, accelerating paint failure and wood
              rot, particularly on the shaded, north-facing walls common
              across North Vancouver. Regular soft washing extends
              exterior paint life by 3 to 5 or more years, and if
              you&apos;re preparing to sell, timing house washing 1 to 2
              weeks before listing photography makes a real difference in
              buyer response.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Inspection and preparation", body: "We assess siding materials, flag delicate areas, and protect landscaping before cleaning begins." },
                { title: "Solution application", body: "A biodegradable cleaning solution goes on with a low-pressure wand, customized by siding material and level of buildup." },
                { title: "Dwell time", body: "The solution sits for 10 to 15 minutes, breaking down organic growth at the source, which is why soft wash outlasts pressure washing." },
                { title: "Gentle rinse", body: "Low-pressure rinsing removes debris and residue while preventing water intrusion behind siding." },
                { title: "Final inspection", body: "We confirm every area is clean, no solution residue remains, and landscaping is undamaged." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">House Washing Pricing in North Vancouver</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Single-story homes (1,500 to 2,000 sq ft) typically run
                $200 to $360. Two-story homes (2,500 to 3,500 sq ft) range
                from $450 to $850+. Overall, house washing in North
                Vancouver runs $200 to $850+ depending on home size, based
                on $0.30 to $0.50 per square foot of exterior wall area.
                Three-story homes need a custom quote due to specialized
                equipment.
              </p>
            </div>

            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">Professional vs. DIY.</strong>{" "}
              Professional crews clean a 3,000 to 4,000 sq ft North
              Vancouver home in 2 to 4 hours. DIY typically takes 6 to 8 or
              more hours, plus setup and cleanup, using rental equipment
              at $75 to $150 per day. Untrained use of high-pressure
              equipment regularly causes bent or cracked vinyl panels,
              water intrusion behind stucco, and paint stripping, and DIY
              results without biocide-based solutions only remove surface
              growth, letting mold and algae regrow in 3 to 6 months.
              Professional soft wash results last 12 to 24 months.
            </p>
          </div>
        </section>

        {/* ── NEW: Fence Washing Section ───────────────────────── */}
        <section id="fence-washing" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Fence Washing in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Fence washing is a specialized cleaning process, not a
              garden hose rinse. It removes dirt, grime, algae, moss,
              mildew, and stubborn stains from every fence material found
              in North Vancouver, adapting PSI and technique to the
              specific material. A typical process takes 1 to 3 hours; a
              standard 150 to 200-foot fence usually takes 1 to 2 hours.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Fence Materials We Clean</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { title: "Cedar and wood fences", body: "The classic choice in North Vancouver, especially in older Lower Lonsdale and Deep Cove properties. Cedar can splinter above 1,000 to 1,500 PSI, so we clean at 500 to 1,000 PSI, keep 18 inches or more of distance, work with the grain, and use oxygen-based solutions. Cedar needs 24 to 48 hours to dry before staining or sealing." },
                { title: "Vinyl fences", body: "Increasingly common in newer North Vancouver neighborhoods, handle higher pressure, 1,500 to 2,000 PSI, and dry within 4 to 12 hours." },
                { title: "Composite fencing", body: "Cleans at a gentler 800 to 1,200 PSI to protect the material fibers, common in mixed North Vancouver neighborhoods." },
                { title: "Chain-link and metal fences", body: "Chain-link can handle up to 2,000 PSI, ideal for clearing rust stains and algae buildup. Metal and ornamental fences need gentle pressure and rust-inhibiting solutions to prevent future corrosion." },
              ].map((item) => (
                <div key={item.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <h4 className="font-body text-[15px] font-extrabold text-white">{item.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{item.body}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Why Fence Washing Matters in North Vancouver</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              A full fence replacement in North Vancouver can run $3,000
              to $8,000 or more, while annual cleaning costs a fraction of
              that. Cedar fences can last 30 or more years with annual
              cleaning and sealing. North Vancouver&apos;s climate,
              averaging over 800 millimeters of rain annually, creates
              ideal conditions for mold, mildew, and moss, particularly on
              the north-facing fences common in Lynn Valley and Deep Cove.
              Clean fences also brighten color, remove years of
              discoloration, and help North Vancouver homes show better to
              buyers before a sale.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "On-site assessment and material identification", body: "We identify the fence material, evaluate condition, and locate problem areas like moss hotspots and rust stains on your North Vancouver property." },
                { title: "Pre-treatment and solution application", body: "Biodegradable solutions break down organic growth and loosen stains, dwelling for 5 to 15 minutes depending on severity." },
                { title: "Low-pressure or custom-pressure washing", body: "We clean at the correct PSI for your material, using horizontal strokes that follow the wood grain to prevent streaking." },
                { title: "Thorough rinsing and debris removal", body: "We remove all sediment, cleaning solution, and debris, and check for missed spots." },
                { title: "Drying and post-wash recommendations", body: "Drying times vary by material: cedar and softwood need 24 to 48 hours, vinyl needs 4 to 12 hours, and composite needs 12 to 24 hours." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Fence Washing Pricing in North Vancouver</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We price fence washing two ways. By linear foot, a
                standard 6-foot fence runs $2.50 to $5.50 per linear foot;
                a 150-foot North Vancouver fence typically costs $375 to
                $825. By square footage, for complex layouts, pricing runs
                $0.35 to $0.90 per square foot; an 800 square foot fence
                runs $280 to $720. Heavy moss or mildew can add $50 to
                $150 in pre-treatment time, and hard-to-reach sections or
                steep terrain add 10 to 15% to the total. Add-on services
                include algae and rust pre-treatment ($50 to $100) and
                post-wash wood sealing (typically $400 to $600 for 500
                square feet). We also offer some North Vancouver strata
                communities compliance-focused cleaning for properties
                with specific fence maintenance rules.
              </p>
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Our Work
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
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
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
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
                <span className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                  Google Reviews
                </span>
              </div>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                What Our Clients Say
              </h2>
              <div className="mt-2 flex items-center justify-center gap-2">
                <StarRating rating={5} />
                <span className="font-body text-[15px] font-semibold text-white">
                  4.9 out of 5
                </span>
                <span className="font-body text-[14px] text-white/80">
                  based on 120+ reviews
                </span>
              </div>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="rounded-[20px] bg-white/[0.12] backdrop-blur-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[16px] font-extrabold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-[15px] font-extrabold text-white">
                        {review.name}
                      </p>
                      <p className="font-body text-[12px] text-white/80">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-3 font-body text-[14px] leading-[1.7] text-white/80">
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
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Get Your Free Pressure Washing Estimate Today
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-white/80">
              No obligation. Our team will assess your surfaces, recommend the
              right method, and provide a clear quote. Available 7 days a week
              across all North Vancouver neighbourhoods. New customer? Use code
              MINT26 for 10% off your first clean.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:+12366883248"
                className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Call 236-688-3248
              </a>
            </div>
          </div>
        </section>

        {/* ── Wave: White → Blue (before Footer) ─────────────────── */}
        <div className="relative z-10 -mt-1">
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
