"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaqSchema, BreadcrumbSchema } from "@/components/SeoSchema";

const services = [
  {
    title: "Residential Window Cleaning",
    href: "#residential-window-cleaning",
    image: "/window-cleaning-residential-north-vancouver.webp",
    description:
      "Interior and exterior cleaning for homes of all sizes, covering bungalows in Lynn Valley, larger properties in Deep Cove, and everything in between. We handle safe ladder work, accessible skylights, and thorough frame wiping.",
  },
  {
    title: "Commercial Window Cleaning",
    href: "#commercial-window-cleaning",
    image: "/window-cleaning-commercial-north-vancouver.webp",
    description:
      "Professional storefront and office building cleaning that keeps your business looking sharp. We schedule around your business hours to minimize disruption, with certified rope-access equipment for high-rise windows.",
  },
  {
    title: "Window Screen Cleaning",
    href: "#window-screen-cleaning",
    image: "/window-cleaning-screen-north-vancouver.webp",
    description:
      "Salt air and pollen clog screens fast in North Vancouver. We remove, deep clean, and reinstall interior and exterior screens, restoring airflow and cutting the allergen load in your home.",
  },
  {
    title: "Post-Construction Window Cleaning",
    href: "/north-vancouver/post-construction-cleaning/#post-construction-window-cleaning",
    image: "/window-cleaning-post-construction-north-vancouver.webp",
    description:
      "Remove construction dust, primer overspray, and debris after renovation projects. Thorough frame and sill cleaning readies your property for move-in or final inspection.",
  },
];

const whyChooseItems = [
  {
    title: "7-Day Availability",
    body: "We're open weekdays, weekends, and holidays. Flexible scheduling accommodates your busy life or business hours. Weekday or weekend, we're here.",
  },
  {
    title: "Eco-Friendly Cleaning Products",
    body: "Mint Sanitary uses non-toxic, safe solutions for children, pets, and landscaping. Our commitment to environmental responsibility aligns with North Vancouver's values.",
  },
  {
    title: "Free Estimates and Transparent Pricing",
    body: "No surprises. You know costs upfront. Custom quotes reflect your window count, accessibility, and any add-on services.",
  },
  {
    title: "Local North Vancouver Expertise",
    body: "Our team is trained to handle salt-air spotting and hard-water stains unique to our coastal region. Quick response times because we're local.",
  },
  {
    title: "Satisfaction Guaranteed",
    body: "Get 10% off your first clean with code MINT26. Not satisfied with your cleaning? We'll re-clean at no cost.",
  },
];

const faqItems = [
  {
    question: "How often should windows be cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homeowners benefit from professional window cleaning once or twice a year, ideally in spring and fall. Spring removes winter grime and road salt; fall prepares glass for the wet season. Homes near trees, construction, or busy roads, and coastal properties near Deep Cove, may need quarterly service.",
  },
  {
    question: "How often should commercial windows be cleaned in North Vancouver?",
    answer:
      "Most office buildings in North Vancouver do well with quarterly cleaning to address seasonal changes and salt spray accumulation. Retail storefronts and ground-level windows benefit from monthly cleaning to maintain curb appeal. Strata common areas typically need monthly interior windows and bi-monthly exterior service.",
  },
  {
    question: "How often should window screens be cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homes benefit from professional screen cleaning 2 to 4 times a year. During peak allergy season, from March to July, monthly cleaning helps households with pollen sensitivities. Homes near mature trees or with pets may need more frequent visits.",
  },
  {
    question: "How much does residential window cleaning cost in North Vancouver?",
    answer:
      "Residential window cleaning in North Vancouver typically runs $150 to $400 per cleaning, depending on home size and window count. A 1-story home runs approximately $200 to $250, a 2-story home runs $300 to $400, and larger homes get a custom quote. Call 236-688-3248 or visit /rates for a free estimate.",
  },
  {
    question: "How much does commercial window cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on building size, height, and access. Ground-level storefronts in North Vancouver often run $1 to $2 per pane, with standard commercial projects at $5 to $7 per pane or $0.50 to $2.50 per square foot for larger buildings. Recurring contracts save 10 to 15% compared to one-time service.",
  },
  {
    question: "How much does window screen cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on the number of screens, material, and any repairs needed, so we provide a free, no-obligation quote. Screen repair or re-screening in North Vancouver typically runs $15 to $50 per screen. Combining screen cleaning with a window cleaning visit often comes with a bundled discount.",
  },
  {
    question: "Are your window cleaning products safe for families, pets, and landscaping in North Vancouver?",
    answer:
      "Yes. Mint Sanitary uses eco-friendly, biodegradable products across all our North Vancouver services, residential, commercial, and screen cleaning alike. They're non-toxic, safe for children and pets, and gentle on the landscaping around your North Vancouver property.",
  },
  {
    question: "What areas of North Vancouver do you serve?",
    answer:
      "We serve all of North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also extend service to West Vancouver, Vancouver, Burnaby, and the wider Greater Vancouver region. Call 236-688-3248 to confirm availability at your North Vancouver address.",
  },
  {
    question: "What's included in residential window cleaning in North Vancouver?",
    answer:
      "Our standard North Vancouver residential package covers interior and exterior glass, window frames, screens, tracks, and sills. Hard water spot treatment, skylights, and specialty glass are available as add-ons. We'll flag window repairs or frame issues if we spot them, though we don't perform those repairs ourselves.",
  },
  {
    question: "What's included in commercial window cleaning in North Vancouver?",
    answer:
      "Full exterior and interior glass cleaning, frame and sill cleaning, and interior common area windows in lobbies, hallways, and conference rooms. We assess each North Vancouver property individually and document work with before-and-after photos.",
  },
  {
    question: "What's included in window screen cleaning in North Vancouver?",
    answer:
      "Professional removal, deep cleaning with soft-bristle brushes and biodegradable solution, sill and track dusting, and careful reinstallation with latch verification. We also offer an optional damage assessment with honest repair or replacement guidance.",
  },
  {
    question: "How long does window cleaning take at a North Vancouver home?",
    answer:
      "For a typical 1 to 3-story North Vancouver home with 20 to 35 windows, expect 2 to 4 hours. Larger homes, homes with many skylights, or properties with severe hard water spotting may take longer. We give you a specific time estimate during your free quote.",
  },
  {
    question: "How long does window screen cleaning take in North Vancouver?",
    answer:
      "A typical North Vancouver home with 8 to 12 screens takes 1 to 2 hours, depending on soil level and whether repairs are needed.",
  },
  {
    question: "Do you clean windows in the rain in North Vancouver?",
    answer:
      "Yes, we can often work in light rain, since pure water rinses are effective in damp conditions. Heavy rain or storms may require rescheduling for safety, and we rebook affected North Vancouver appointments at no penalty.",
  },
  {
    question: "What safety measures do you use for high-rise window cleaning in North Vancouver?",
    answer:
      "High-rise work in North Vancouver follows WorkSafeBC fall protection requirements, mandatory for work above 3 meters. We use certified anchor systems, safety harnesses, rope access equipment, and IRATA-trained technicians, with documented safety plans for every project.",
  },
  {
    question: "Do you carry insurance for commercial window cleaning in North Vancouver?",
    answer:
      "Yes. Mint Sanitary carries general liability insurance with $1 to $2 million in coverage, depending on project scope, and maintains full WorkSafeBC compliance for commercial and high-rise work across North Vancouver. A Certificate of Insurance is available on request.",
  },
  {
    question: "Can you clean high windows, skylights, and specialty glass in my North Vancouver home?",
    answer:
      "Yes. We safely clean second-story, third-story, and taller windows using professional-grade water-fed poles and safety-approved techniques. Skylights, Low-E glass, and other specialty windows are available as add-on services, and we're fully insured for high-access work.",
  },
  {
    question: "What's the difference between window cleaning and screen cleaning in North Vancouver? Can you do both?",
    answer:
      "Window cleaning covers glass panes, interior and exterior. Screen cleaning covers the mesh, frame, and sill. Most North Vancouver customers combine both services at a bundled rate, with screens cleaned first so both finish looking their best.",
  },
  {
    question: "Can dirty window screens affect my allergies or indoor air quality in North Vancouver?",
    answer:
      "Yes. Clogged screens trap pollen, dust mites, and mold spores that pass through when you open a window. North Vancouver's extended pollen season, from February through October, makes clean screens especially important for allergy sufferers.",
  },
  {
    question: "What if I'm not satisfied with my window cleaning in North Vancouver?",
    answer:
      "We stand behind our work with a 48-hour re-clean guarantee. If you're not completely satisfied, contact us within 48 hours and we'll return to re-clean the affected windows in your North Vancouver home at no extra cost.",
  },
  {
    question: "Do you offer recurring maintenance plans in North Vancouver?",
    answer:
      "Yes. Residential customers can choose quarterly (15% off), semi-annual (10% off), or annual (5% off) plans. Commercial customers can set up monthly, bi-monthly, or quarterly contracts with discounted rates. Recurring North Vancouver customers also get priority scheduling.",
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
    src: "/window-cleaning-floor-to-ceiling-forest-view.webp",
    alt: "Living room with floor-to-ceiling windows and clear glass overlooking forest views",
  },
  {
    src: "/window-cleaning-modern-farmhouse-exterior-dusk.webp",
    alt: "Modern farmhouse exterior with large black-framed windows at dusk",
  },
  {
    src: "/window-cleaning-commercial-glass-facade.webp",
    alt: "Commercial building with expansive clean glass facade and reflections",
  },
  {
    src: "/window-cleaning-condo-bright-windows-city-view.webp",
    alt: "Bright condominium interior with spotless windows and city views",
  },
  {
    src: "/window-cleaning-retail-storefront-glass.webp",
    alt: "Large retail storefront with clean reflective glass panels",
  },
  {
    src: "/window-cleaning-residential-open-concept-windows.webp",
    alt: "Open-concept home with natural light through clear residential windows",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Seymour Heights",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
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

export default function WindowCleaningCategoryPageClient() {
  const [openWhy, setOpenWhy] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Window Cleaning", path: "/north-vancouver/window-cleaning" }]} />
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/window-cleaning-hero-north-vancouver.webp')",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Professional Window Cleaning in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Window Cleaning Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                North Vancouver&apos;s windows work harder than most.
                Coastal salt air, frequent rain, and mineral-rich tap
                water combine to leave hard water spotting, salt residue,
                and grime that a quick wipe-down won&apos;t fix. This page
                covers our full lineup in one place: residential,
                commercial, and window screen cleaning. Seven-day
                availability, free estimates, and 10% off your first clean
                with code MINT26. Call 236-688-3248 today.
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
                <li>Eco-Friendly Products</li>
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

        {/* ── Why Professional Window Cleaning Matters — Image Left, Text Right ── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/north-vancouver-professional-window-cleaning-residential.webp"
                alt="Professional residential window cleaner on ladder with safety equipment in North Vancouver"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                loading="eager"
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
                Why Professional Window Cleaning Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  North Vancouver&apos;s unique coastal environment presents distinct
                  challenges that most homeowners underestimate. The combination
                  of high rainfall, ocean-influenced humidity, and construction
                  activity in neighborhoods like Edgemont Village and Seymour
                  Heights creates a perfect storm for window deterioration.
                  Rainwater dries on glass leaving mineral deposits that build up
                  over weeks. Salt air from Burrard Inlet accelerates spotting
                  and can corrode window frames, screens, and hardware if left
                  untreated.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Clean windows maximize natural light entering your home or
                  business. In North Vancouver&apos;s climate, where overcast days
                  dominate, this boost to available daylight matters for energy
                  savings and mental health during darker months. Cleaner windows
                  also reduce allergen buildup on frames and sills, affecting air
                  quality and aggravating respiratory sensitivities. First
                  impressions from clean windows also influence property values
                  and rental inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIY vs Professional — Text Left, Image Right ─────── */}
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why DIY Window Cleaning Falls Short
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Streaking and haze plague most DIY attempts. Tap water
                  contains dissolved minerals that leave residue as water
                  evaporates. In North Vancouver, where salt air is already an
                  issue, standard tap water compounds the problem. You end up
                  with windows that look worse after cleaning than before.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Safety hazards intensify when working at height. Multi-story
                  homes, skylights, second-floor windows, and exterior frames
                  require ladder work that homeowners often underestimate. Falls
                  from ladders represent a significant injury risk, especially on
                  sloped roofs or wet surfaces common in our rainy climate.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Professional window cleaners use water-fed poles with purified
                  water systems that eliminate mineral residue causing spotting.
                  Our trained team also catches maintenance issues — frame rot,
                  degraded seals, hardware corrosion — before they require
                  expensive repairs.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/north-vancouver-window-cleaning-skyline-harness.webp"
                alt="Professional window cleaner with harness on high-rise residential glass overlooking North Vancouver and Vancouver skyline"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── Service Cards ──────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Our Window Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Our 4 Window Cleaning Services
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

        {/* ── NEW: Residential Window Cleaning Section ────────── */}
        <section id="residential-window-cleaning" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Residential Window Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Sparkling windows change how a North Vancouver home looks and
              feels. Clean glass brings mountain views into sharper focus
              and lets more natural light into every room. Mint Sanitary
              has served North Vancouver homeowners for years, delivering
              streak-free results with eco-friendly products and
              professional-grade equipment.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">What&apos;s Included</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Our standard residential service covers interior and
              exterior glass panes, window frames, screens, tracks, and
              sills. Hard water spot treatment is available as an add-on.
              We also clean skylights and specialty glass for an
              additional fee. We don&apos;t handle window repairs, frame
              rot treatment, or weatherstripping replacement, but
              we&apos;ll flag those issues if we spot them during the
              visit. We offer both interior-plus-exterior service (our
              standard) and exterior-only service at a discounted rate.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Homes We Service</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Single-family detached homes, townhouses and duplexes,
              condos and strata units, newly constructed homes needing
              post-construction cleanup, older homes with legacy wood or
              single-pane windows, and multi-story estates in
              neighbourhoods like Lynn Valley and Deep Cove. We also work
              with Low-E coated, tinted, and skylight glass, adjusting our
              technique for each type.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Free estimate", body: "We assess home size, window count, and any special needs like hard water spots or skylights, with transparent pricing and no pressure to book." },
                { title: "Scheduling", body: "We work 7 days a week and confirm scope, date, and time before our crew arrives." },
                { title: "Pre-cleaning inspection", body: "We check for hard water spots, screen damage, and frame issues before starting." },
                { title: "Professional cleaning", body: "We use eco-friendly, green-certified products safe for family and pets, with water-fed poles for high-access windows and drop cloths to protect landscaping." },
                { title: "Final walk-through", body: "We inspect every window with you. If you're not satisfied within 48 hours, we return and re-clean at no extra cost." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Hard Water Spot Treatment</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                North Vancouver&apos;s mineral-rich water leaves stubborn
                deposits on glass. Fresh spots respond to standard
                cleaning, but aged mineral buildup can etch glass
                permanently if left untreated, and etched glass can only
                be fixed by replacing the pane. We use eco-friendly,
                acid-based treatments designed for mineral removal, plus
                deionized water rinses that prevent new spotting during the
                clean itself. Professional hard water restoration
                typically runs $100 to $500 depending on severity; glass
                replacement, if etching has occurred, can exceed $500 per
                pane, which is why early treatment saves money.
              </p>
            </div>

            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">How often.</strong> Most North
              Vancouver homeowners benefit from professional window
              cleaning once or twice a year, in spring and fall. Spring
              removes winter grime and road salt; fall prepares windows
              for the wet season. Homes near trees, construction, or busy
              roads may benefit from quarterly service.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pricing</h3>
              <ul className="mt-3 space-y-1.5">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 1-story home (15 to 20 windows): approximately $200 to $250</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 2-story home (25 to 35 windows): approximately $300 to $400</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; 3-plus story home (40+ windows): custom quote</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Exterior-only: 15 to 20% discount versus interior plus exterior</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Hard water spot treatment: add $50 to $150</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Screen repair or replacement: add $20 to $50 per screen</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Skylight or sunroom cleaning: add $75 to $150</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Recurring service: quarterly saves 15%, semi-annual saves 10%, annual saves 5%</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; New customers: 10% off with code MINT26</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Overall, residential window cleaning in North Vancouver
                runs $150 to $400 per cleaning for most homes. Visit{" "}
                <a href="/rates" className="underline underline-offset-2">
                  /rates
                </a>{" "}
                for current pricing, or call 236-688-3248 for a free
                estimate.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEW: Commercial Window Cleaning Section ─────────── */}
        <section id="commercial-window-cleaning" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Commercial Window Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Clean windows signal professional operations and protect
              your property investment. For commercial properties across
              North Vancouver, coastal salt spray and frequent rain
              accelerate grime buildup on glass, making regular
              maintenance part of responsible building management.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">What&apos;s Included</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Full exterior and interior glass cleaning, frame and sill
              cleaning, removal of grime and buildup, and interior common
              area windows like lobbies, hallways, and skylights. We
              customize scope to your building, with before-and-after
              photo documentation for your records. Service covers
              storefront glass and entry doors, multi-story office
              building windows, strata common area windows, window frames
              and sills, skylights and overhead glass, and industrial or
              warehouse facility windows.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Building Heights We Serve</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { title: "Ground-level storefronts", body: "Monthly cleaning is standard here, since foot traffic and weathering degrade appearance quickly. This matters most in retail corridors like Lower Lonsdale and Seymour Heights." },
                { title: "Mid-rise buildings (3 to 10 stories)", body: "Typically quarterly or bi-monthly exterior service, using safety harnesses and fall protection systems that comply with WorkSafeBC regulations." },
                { title: "High-rise buildings (10+ stories)", body: "Demand certified rope access systems, elevated work platforms, and IRATA-trained technicians, plus documented fall protection plans and anchor system inspection." },
              ].map((tier) => (
                <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <h4 className="font-body text-[15px] font-extrabold text-white">{tier.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{tier.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Insurance and Safety</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                We carry general liability insurance with $1 to $2 million
                in coverage, depending on project scope, and maintain full
                WorkSafeBC compliance for all commercial work, including
                high-rise projects. A Certificate of Insurance is available
                on request for property managers, building owners, and
                strata councils. High-rise work follows WorkSafeBC fall
                protection requirements, which apply to work above 3
                meters, using certified anchor systems, harnesses, and
                IRATA-trained crews.
              </p>
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Scheduling</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              We offer after-hours availability, including early morning,
              evening, weekend, and holiday appointments, so cleaning
              doesn&apos;t interrupt your business. For strata properties,
              we give 7 days&apos; notice by email and coordinate with
              property managers and building bylaws across North
              Vancouver.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <ol className="mt-4 space-y-1.5">
              {[
                "Pre-service assessment of glass type, building height, and access points",
                "Safety setup, including anchor points, harnesses, and equipment testing",
                "Exterior cleaning that removes salt spray deposits and buildup",
                "Interior common area cleaning of lobbies, hallways, and conference rooms",
                "Frame and sill treatment to remove oxidized material, mold, and algae",
                "Final inspection with before-and-after photo documentation",
              ].map((item, i) => (
                <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">{i + 1}. {item}</li>
              ))}
            </ol>

            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">Recommended frequency.</strong>{" "}
              High-traffic retail storefronts typically need monthly
              cleaning. Standard office buildings do well on a quarterly
              schedule at minimum. Strata common areas often need monthly
              interior windows and bi-monthly or quarterly exterior
              service. Industrial facilities typically need service every
              4 to 6 months depending on dust exposure. We recommend a
              seasonal deep clean in spring (April to May) and fall
              (September to October) for all commercial properties.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pricing</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Ground-level storefronts are often priced at $1 to $2 per
                pane; standard commercial projects run $5 to $7 per pane.
                Larger buildings are commonly priced by square footage,
                from $0.50 to $2.50 per square foot depending on size and
                access complexity. Recurring contracts receive 10 to 15%
                discounts compared to one-time service. Every quote follows
                a free, on-site assessment, and new customers save 10% with
                code MINT26. Visit{" "}
                <a href="/rates" className="underline underline-offset-2">
                  /rates
                </a>{" "}
                for details.
              </p>
            </div>

            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Property appearance connects directly to business
              performance. Well-maintained buildings support stronger
              tenant satisfaction, and clean storefronts influence how
              customers perceive a business before they walk in the door.
            </p>
          </div>
        </section>

        {/* ── NEW: Window Screen Cleaning Section ─────────────── */}
        <section id="window-screen-cleaning" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Window Screen Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Dirty window screens don&apos;t just look bad. They trap
              dust, pollen, and mold spores, restricting airflow and
              letting allergens back into your home. North Vancouver&apos;s
              pollen season runs from February through October, peaking
              March to July, and coastal humidity in areas like Deep Cove
              and Lower Lonsdale creates ideal conditions for mold growth
              on screens.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">What&apos;s Included</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Professional removal of screens with damage-free handling,
              deep cleaning with soft-bristle brushes and a biodegradable
              solution, frame and sill dusting, careful reinstallation with
              latch verification, and an optional damage assessment with
              honest repair or replacement guidance. This works for
              fiberglass, aluminum, and specialty mesh, on older homes and
              new builds alike.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our Process</h3>
            <ol className="mt-4 space-y-1.5">
              {[
                "Initial assessment of material type and debris level",
                "Safe removal of screens, laid flat to prevent bending",
                "Pre-rinse to loosen debris",
                "Deep clean with soft-bristle brushes and eco-friendly solution",
                "Final low-pressure rinse to remove all soap residue",
                "Drying and careful reinstallation with proper fit",
              ].map((item, i) => (
                <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">{i + 1}. {item}</li>
              ))}
            </ol>
            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              A typical North Vancouver home with 8 to 12 screens takes 1
              to 2 hours, depending on soil level and whether repairs are
              needed.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Health and Air Quality</h3>
            <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Clogged screens trap pollen, dust mites, and mold spores
              that pass through into your home whenever you open a window.
              Professional screen cleaning reduces indoor allergen load,
              which matters most during North Vancouver&apos;s spring
              pollen peak. In neighbourhoods with heavy tree coverage like
              Lynn Valley, a spring deep clean before pollen season and a
              fall refresh after summer debris buildup make the biggest
              difference.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">Fiberglass vs. Aluminum Screens</h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  Fiberglass resists coastal salt and moisture, flexes
                  without sagging, costs $15 to $35 per screen, and
                  typically lasts 10 to 15+ years in coastal BC conditions.
                  Aluminum is highly durable but can dent on impact, costs
                  $30 to $70 per screen, and typically lasts 8 to 12 years.
                </p>
              </div>
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">Repair or Replacement</h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  Small holes or tears under an inch can usually be
                  patched or re-screened for $15 to $50 per screen. Bent or
                  warped frames, large tears, or screens over 10 years old
                  are often better candidates for full replacement. We
                  source new fiberglass or aluminum screens in your
                  preferred material and install them right away if you
                  choose to upgrade.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">How often.</strong> Most North
              Vancouver homes do well with professional screen cleaning 2
              to 4 times a year. During peak allergy season, monthly
              cleaning benefits households with pollen sensitivities.
              Homes near mature trees, high-traffic areas, or with pets
              may need more frequent service.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pricing and Combo Savings</h3>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                Screen cleaning pricing depends on the number of screens,
                material, and any repairs needed, available through a free
                quote. Combining screen cleaning with a window cleaning
                visit typically comes with a bundled discount, and screens
                are cleaned first so both finish looking their best. New
                customers save 10% with code MINT26.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Choose Mint — Image Left + Accordion Right (BLUE) ── */}
        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/mint-sanitary-service-van-north-vancouver.jpg"
                alt="Mint Sanitary service van"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[500px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                We&apos;re not just another window cleaning company. Mint Sanitary is
                built on reliability, transparency, and eco-conscious practices
                that make a real difference for North Vancouver families and
                businesses.
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

        {/* ── Image Gallery ──────────────────────────────────── */}
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
                  className={`group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] ${
                    i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Google Reviews ─────────────────────────────────── */}
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

        {/* ── Service Areas — Chips + Map ─────────────────────── */}
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
                Mint Sanitary is based on the North Shore and provides window
                cleaning services across all North Vancouver neighborhoods and
                the wider Greater Vancouver region. Our local team ensures quick
                scheduling and response times.
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
                alt="Map of Greater Vancouver showing Mint Sanitary window cleaning service area"
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

        {/* ── FAQ — Interactive Accordion (BLUE) ─────────────── */}
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

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Ready for Sparkling Windows in North Vancouver?
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-white/80">
              Our window cleaning experts are prepared to deliver sparkling
              results tailored to your North Vancouver home or business. Call
              236-688-3248 or email hello@mintsanitary.com. Use promo code
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

        {/* ── Wave: White → Blue (Footer) ────────────────────── */}
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
