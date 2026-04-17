"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Complete Debris Removal",
    description:
      "Hand removal of leaves, twigs, pine needles, moss, shingle granules, dirt, and organic buildup. High-powered vacuum equipment captures fine particles.",
  },
  {
    title: "Downspout Flushing",
    description:
      "High-pressure water flushing confirms that downspouts are completely clear and water flows freely away from your foundation.",
  },
  {
    title: "System Inspection",
    description:
      "Technician assessment of loose brackets, missing hardware, rust spots, seam leaks, and pitch issues. Before and after photo documentation is provided.",
  },
  {
    title: "Gutter Guard Evaluation",
    description:
      "If you have existing screens or guards, we clean surfaces and recommend replacement if damaged or ineffective.",
  },
  {
    title: "Environmentally Responsible Disposal",
    description:
      "Debris is removed and disposed of properly, not dumped in your yard or local waterways.",
  },
];

const whyChooseItems = [
  {
    title: "Professional Safety Equipment",
    body: "We position extension ladders on stable, level ground. Our team wears appropriate safety harnesses and protective gear — zero risk to you from ladder falls or accidents.",
  },
  {
    title: "Thorough Inspection Included",
    body: "Most homeowners don't notice rust developing inside gutters, small seam leaks, or fascia rot hidden behind the gutter line. We identify these issues early, when repairs are inexpensive.",
  },
  {
    title: "Before & After Photo Documentation",
    body: "We photograph your gutters before and after the service. You receive a detailed service report by email, including any repair recommendations and follow-up timeline.",
  },
  {
    title: "Eco-Friendly Disposal",
    body: "Debris is removed and disposed of properly, not dumped in your yard or local waterways. We comply with Metro Vancouver's stormwater bylaws.",
  },
  {
    title: "7-Day Availability",
    body: "We're available weekdays, evenings, and weekends. Book online or call (604) 671-6252 for same-week service in most North Vancouver neighborhoods.",
  },
  {
    title: "Satisfaction Guarantee",
    body: "If you're not satisfied with any aspect of our service, we'll return within 24 hours to make it right — no questions asked, no extra charge.",
  },
];

const processSteps = [
  {
    title: "Safety Setup",
    body: "We position extension ladders on stable, level ground. All equipment and surrounding landscaping are protected. Our team wears appropriate safety harnesses and protective gear.",
  },
  {
    title: "Manual Debris Removal",
    body: "Working systematically from end to end, the technician hand-removes bulk debris (leaves, branches, moss buildup) using a scoop or by hand. For heavily clogged gutters in North Vancouver's densely treed neighborhoods, this step can take 30 to 45 minutes per side.",
  },
  {
    title: "Vacuum and Pressure Flushing",
    body: "High-powered gutter vacuum removes fine debris that hand removal misses. The downspout is then flushed with controlled water pressure to keep water flowing from the gutter opening all the way to the ground.",
  },
  {
    title: "Water Testing and Verification",
    body: "A small amount of water is poured through the gutter to verify proper pitch toward downspouts. The technician observes the flow path and confirms water is moving as intended, not pooling anywhere along the gutter line.",
  },
  {
    title: "Bracket and Fastener Check",
    body: "Loose hardware is tightened. Leaking seams are noted. Rust or damage is documented so you know exactly what may need repair in the coming months.",
  },
  {
    title: "Documentation and Report",
    body: "Before and after photos are taken. A detailed service report is emailed to you, along with any repair recommendations and a timeline for follow-up cleaning.",
  },
];

const faqItems = [
  {
    question: "How often do gutters in North Vancouver need cleaned?",
    answer:
      "Minimum twice per year, spring and fall. Homes with heavy tree coverage should schedule cleaning three to four times annually. North Vancouver's approximately 2,400 millimeters of annual precipitation, concentrated between October and March, makes fall cleaning critical. Don't skip it.",
  },
  {
    question: "Can I clean my gutters myself, or should I hire a professional?",
    answer:
      "Professional cleaning is safer and more thorough. Ladder falls are a leading cause of home injury. Professionals carry insurance and use specialized equipment (vacuums, pressure washers, inspection tools) that homeowners typically lack. DIY cleaning misses hidden damage like seam leaks, rust, and fascia rot that professionals identify during inspection.",
  },
  {
    question: "What's the difference between gutter cleaning and gutter guards?",
    answer:
      "Cleaning removes accumulated debris. Guards prevent debris from entering gutters in the first place. Guards reduce cleaning frequency but don't eliminate it. Pine needles, shingle granules, and fine debris still accumulate on or around guards. Best practice: install guards and maintain annual or semi-annual professional cleaning.",
  },
  {
    question: "What damage can clogged gutters cause?",
    answer:
      "Standing water causes fascia, soffit, siding, and foundation damage. Rust and seam failure accelerate in gutters filled with standing water, and pest infestations thrive. Water infiltration at the foundation leads to mold, basement leaks, and structural damage costing $3,000 to $25,000 to repair. Winter ice dams form in clogged gutters, backing water under shingles and into your home.",
  },
  {
    question: "Is gutter cleaning covered by my homeowner's insurance?",
    answer:
      "Standard homeowner's insurance does not cover gutter cleaning maintenance costs. However, damage from neglected gutters may be excluded from your coverage entirely. Some insurers recommend regular maintenance as a condition of coverage.",
  },
  {
    question:
      "What causes moss growth in North Vancouver gutters, and how do I prevent it?",
    answer:
      "North Vancouver's wet, mild climate with frequent rain, moderate temperatures, and tree shade creates ideal moss-growing conditions. Moss blocks water flow and accelerates rust and seam failure. Prevention includes trimming overhanging branches to increase sunlight, scheduling professional cleaning three to four times per year to remove moss spores.",
  },
  {
    question: "What happens if I skip gutter cleaning during the rainy season?",
    answer:
      "Skipping fall and winter cleaning is high-risk in North Vancouver. The region receives approximately 2,400 millimeters of annual rainfall, much concentrated October to March. Clogged gutters cause water backup, overflow, and foundation saturation. Winter ice dams form in clogged gutters, forcing water under shingles. Skipping cleaning can result in $5,000 to $25,000 in water damage repairs.",
  },
  {
    question: "Do you offer gutter repair or gutter guard installation?",
    answer:
      "Our primary service is professional gutter cleaning with complete system inspection. During cleaning, we identify damage and provide repair quotes. We can discuss gutter guard options and recommend trusted installers.",
  },
  {
    question:
      "How do I get a free estimate for gutter cleaning in North Vancouver?",
    answer:
      "Book online or call (604) 671-6252. We provide free, no-obligation estimates including property walk-through, gutter assessment, cleaning quote, and repair recommendations. Estimates typically take 15 to 20 minutes. New customers receive 10% off first clean with code MINT25.",
  },
  {
    question: "What areas of North Vancouver do you service?",
    answer:
      "We serve North Vancouver including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, and surrounding areas. We also service West Vancouver, Vancouver, Burnaby, and select areas across Greater Vancouver.",
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
  {
    name: "Vancouver Coastal Health",
    logo: "/client-vancouver-coastal-health.png",
  },
  { name: "BC Hydro", logo: "/client-bc-hydro.png" },
  { name: "Arbutus Point Developments Ltd.", logo: "/client-arbutus-point.png" },
  { name: "Powers Construction", logo: "/client-powers-construction.png" },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Seymour Heights",
  "Norgate",
  "Dollarton",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
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

export default function GutterCleaningCategoryPageClient() {
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
                "url('/gutter-cleaning-north-vancouver-hero.webp')",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Professional Gutter Cleaning in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Gutter Cleaning Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                Your gutters are constantly working to protect your North
                Vancouver home from one of the wettest climates in Canada. When
                they&apos;re clear, water flows safely away from your foundation,
                roof, and siding. When they&apos;re clogged, water backs up and
                causes expensive damage that can cost thousands to repair. Mint
                Sanitary provides professional gutter cleaning with thorough
                system inspection, eco-friendly disposal, and before-and-after
                photo documentation. Call (604) 671-6252 or use code MINT25 for
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
                <li>Full System Inspection</li>
                <li>Before &amp; After Photos</li>
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

        {/* ── Why Gutter Cleaning Matters — Image Left, Text Right ── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/gutter-cleaning-north-vancouver-why-matters.webp"
                alt="Professional gutter cleaning on a North Vancouver home with ladder and service van"
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
                Why Gutter Cleaning Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  North Vancouver receives approximately 2,400 millimeters of
                  annual precipitation — more than 2.5 times the North American
                  average of about 900 millimeters. Most of this rain arrives
                  between October and March, when overflowing gutters cause the
                  most damage. Standing water in clogged gutters damages fascia
                  boards, soffits, siding, and foundation. Water infiltration at
                  the foundation level leads to mold growth, basement leaks, and
                  structural damage that can cost between $3,000 and $25,000 to
                  remediate.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  The dense tree coverage throughout North Vancouver means fall
                  debris is constant. A single residential gutter can accumulate
                  50 pounds or more of leaves, twigs, pine needles, and granules
                  during the fall season alone. Beyond leaf debris, North
                  Vancouver&apos;s moist, mild climate creates ideal conditions for
                  moss growth, which blocks water flow and accelerates rust and
                  seam failure.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Your homeowner&apos;s insurance may not cover water damage resulting
                  from neglected gutters. Many insurers explicitly exclude damage
                  caused by poor maintenance. This makes regular professional
                  cleaning not just a maintenance task, but a way to protect your
                  coverage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Included — Service Cards (no links) ──────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                What&apos;s Included
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Every Gutter Clean Includes
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="overflow-hidden rounded-[20px] bg-[#f4f8ff] p-6"
                >
                  <h3 className="font-display-reg text-[18px] uppercase tracking-[0.45px] text-[#4E5062]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-[#5c6075]">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6-Step Process ─────────────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                The Professional Gutter Cleaning Process
              </h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <span className="relative flex h-[48px] w-[48px] items-center justify-center rounded-full border-2 border-[#66DAD5] bg-white font-body text-[18px] font-extrabold text-[#6191e9]">
                    {index + 1}
                  </span>
                  <div className="mt-4 rounded-[20px] bg-white p-5 shadow-sm">
                    <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-[800px] text-center font-body text-[15px] leading-[1.7] text-[#5c6075]">
              This process typically takes 1.5 to 2.5 hours for most homes,
              depending on the complexity of your roof, the length of your gutter
              system, and the amount of debris accumulated.
            </p>
          </div>
        </section>

        {/* ── Why Choose Mint — Image Left, Accordion Right (BLUE) ── */}
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
                src="/gutter-cleaning-north-vancouver-hero.webp"
                alt="Close-up of professional gutter cleaning and debris removal in North Vancouver"
                className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px] lg:min-h-0"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
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

        {/* ── Google Reviews ─────────────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
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
                Mint Sanitary provides professional gutter cleaning throughout
                North Vancouver and the surrounding region. We serve every
                neighborhood from Lower Lonsdale to Deep Cove, and beyond to
                West Vancouver, Vancouver, and Burnaby.
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
                alt="Map of Greater Vancouver showing Mint Sanitary gutter cleaning coverage"
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
              Ready to Protect Your North Vancouver Home?
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Clogged gutters cause water damage that costs thousands to repair.
              Don&apos;t wait for overflow or foundation problems. Schedule your
              professional gutter cleaning in North Vancouver today. Call (604)
              671-6252 or email hello@mintsanitary.com. Use code MINT25 for 10%
              off your first service.
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

        {/* ── Wave: White → Blue ──────────────────────────────── */}
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
