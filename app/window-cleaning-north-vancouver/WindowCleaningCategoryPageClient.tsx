"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Residential Window Cleaning",
    href: "/window-cleaning-north-vancouver/residential-window-cleaning/",
    image: "/window-cleaning-residential-north-vancouver.webp",
    description:
      "Interior and exterior cleaning for homes of all sizes, covering bungalows in Lynn Valley, larger properties in Deep Cove, and everything in between. We handle safe ladder work, accessible skylights, and thorough frame wiping.",
  },
  {
    title: "Commercial Window Cleaning",
    href: "/window-cleaning-north-vancouver/commercial-window-cleaning/",
    image: "/window-cleaning-commercial-north-vancouver.webp",
    description:
      "Professional storefront and office building cleaning that keeps your business looking sharp. We schedule around your business hours to minimize disruption, with specialized equipment for high-access windows.",
  },
  {
    title: "Window Screen Cleaning",
    href: "/window-cleaning-north-vancouver/window-screen-cleaning/",
    image: "/window-cleaning-screen-north-vancouver.webp",
    description:
      "Salt air and dust damage screens fast. We restore interior and exterior screens, remove rust and corrosion common on North Vancouver properties, and improve airflow and indoor air quality.",
  },
  {
    title: "Post-Construction Window Cleaning",
    href: "/window-cleaning-north-vancouver/post-construction-window-cleaning/",
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
    body: "Get 10% off your first clean with code MINT25. Not satisfied with your cleaning? We'll re-clean at no cost.",
  },
];

const faqItems = [
  {
    question: "How often should I have my windows cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homeowners benefit from window cleaning twice per year, typically spring (after the rainy season) and fall (before winter). Coastal properties near Burrard Inlet or with direct ocean exposure may need three to four cleanings annually due to salt air. Commercial storefronts often require monthly or quarterly cleaning. We'll recommend a schedule based on your property's exposure during your free estimate.",
  },
  {
    question:
      "What's the difference between residential and commercial window cleaning in North Vancouver?",
    answer:
      "Residential cleaning focuses on homes with varying window types, skylights, and accessibility challenges. Commercial cleaning in North Vancouver handles storefront glass, office building exteriors, and high-rise structures using specialized equipment like water-fed poles and rope-access systems. Commercial jobs often require scheduling outside standard business hours to avoid disruption.",
  },
  {
    question:
      "Why are my windows spotty even after cleaning? Is it hard water?",
    answer:
      "Yes. North Vancouver rainwater contains minerals like calcium and magnesium that leave spots as water evaporates. The salt spray near the ocean compounds this issue. We use purified water systems to eliminate mineral residue. For stubborn mineral buildup and oxidation, we offer specialized stain removal services.",
  },
  {
    question:
      "Is window cleaning safe for high-rise residential buildings in North Vancouver?",
    answer:
      "Absolutely. Professional window cleaners use multiple safety systems including secure ladder bracing, harnesses, and rope-access certifications (IRATA and SPRAT). Our team is fully insured and trained for heights.",
  },
  {
    question:
      "Can you clean windows if it's raining or very cold in North Vancouver?",
    answer:
      "We can clean in light rain, but heavy rain or strong wind isn't ideal. Water spots reappear quickly, and safety is compromised. Freezing temperatures below 0 degrees Celsius prevent proper drying and can damage seals. We recommend scheduling on mild days for best results.",
  },
  {
    question:
      "Do you offer screen cleaning? I see rust and salt spray damage in Seymour Heights.",
    answer:
      "Absolutely. Screen rust and salt-air corrosion are common on North Vancouver properties, especially those near water. We clean interior and exterior screens, remove debris, and treat minor rust. Screen cleaning is often bundled with window cleaning at a discounted rate.",
  },
  {
    question:
      "What makes Mint Sanitary different from other window cleaning companies in North Vancouver?",
    answer:
      "We combine eco-friendly products, seven-day availability, free estimates, and transparent pricing with deep local expertise in North Vancouver's unique climate challenges. Our first-time customer discount of 10% with code MINT25 and satisfaction guarantee mean you can try our service risk-free.",
  },
  {
    question:
      "How much does professional window cleaning cost in North Vancouver?",
    answer:
      "Costs depend on the number and size of windows, accessibility, and add-ons like screens, frames, or hard-water stain removal. Residential homes typically range from $150 to $400 per cleaning. We provide free estimates tailored to your specific property. Call (604) 671-6252 or email hello@mintsanitary.com.",
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
                Mint Sanitary delivers crystal-clear windows for homes and
                businesses across North Vancouver. Our trained team handles
                salt-air spotting, mineral deposits from coastal humidity, and
                construction dust — using eco-friendly solutions safe for
                children, pets, and landscaping. Seven-day availability, free
                estimates, and 10% off your first clean with code MINT25. Call
                (604) 671-6252 today.
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
                <li>Eco-Friendly Products</li>
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Window Cleaning Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
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
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
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
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why DIY Window Cleaning Falls Short
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Streaking and haze plague most DIY attempts. Tap water
                  contains dissolved minerals that leave residue as water
                  evaporates. In North Vancouver, where salt air is already an
                  issue, standard tap water compounds the problem. You end up
                  with windows that look worse after cleaning than before.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Safety hazards intensify when working at height. Multi-story
                  homes, skylights, second-floor windows, and exterior frames
                  require ladder work that homeowners often underestimate. Falls
                  from ladders represent a significant injury risk, especially on
                  sloped roofs or wet surfaces common in our rainy climate.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Window Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Our 4 Window Cleaning Services
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
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Ready for Sparkling Windows in North Vancouver?
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Our window cleaning experts are prepared to deliver sparkling
              results tailored to your North Vancouver home or business. Call
              (604) 671-6252 or email hello@mintsanitary.com. Use promo code
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

        {/* ── Wave: White → Blue (Footer) ────────────────────── */}
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
