"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InstantQuoteForm from "@/components/InstantQuoteForm";
import { FaqSchema } from "@/components/SeoSchema";

const whatWeDoCards = [
  {
    title: "House Cleaning",
    href: "/services/house-cleaning",
    image: "/professional-cleaning-services-north-vancouver.jpg",
    description:
      "Regular house cleaning keeps your home in shape without eating up your weekend. We offer standard cleaning, deep cleaning, and recurring visits on a schedule that fits your life. We also handle move-in and move-out cleaning, vacation rental and Airbnb turnovers, post-construction cleanup, and detail work on upholstery, drapes, and curtains.",
  },
  {
    title: "Commercial Cleaning",
    href: "/services/commercial-cleaning",
    image: "/commercial-janitorial-cleaning-north-vancouver.jpg",
    description:
      "Mint Sanitary cleans offices, medical clinics, restaurants and commercial kitchens, gyms, schools, and strata buildings across the region. We also service churches, industrial facilities, and warehouses, with schedules built around your hours so cleaning never gets in the way of business.",
  },
  {
    title: "Carpet Cleaning",
    href: "/services/carpet-cleaning",
    image: "/carpet-cleaning-north-vancouver.jpg",
    description:
      "Carpets trap dust, allergens, and everyday grime long after a quick vacuum stops helping. Our carpet cleaning lifts embedded dirt and stains from homes and offices alike, using HEPA-filter equipment and products that are safe around kids and pets.",
  },
  {
    title: "Window Cleaning",
    href: "/services/window-cleaning",
    image: "/window-cleaning-north-vancouver.png",
    description:
      "Streaky, grimy windows dull a property fast, inside and out. We clean residential and commercial windows to a streak-free finish, restoring natural light and curb appeal.",
  },
  {
    title: "Pressure Washing",
    href: "/services/pressure-washing",
    image: "/pressure-washing-rooftop-deck-north-vancouver.jpg",
    description:
      "Driveways, siding, walkways, and commercial exteriors take a beating from rain, moss, and everyday traffic. Our pressure washing service strips away buildup and restores surfaces without damaging them.",
  },
  {
    title: "Gutter Cleaning",
    href: "/services/gutter-cleaning",
    image: "/gutter-cleaning-north-vancouver.png",
    description:
      "Clogged gutters lead to water damage, foundation problems, and pest issues. We clear debris and check for blockages so water flows where it should.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Get in Touch",
    detail:
      "Call 236-688-3248 or fill out our estimate form and tell us what you need cleaned.",
  },
  {
    step: "2",
    title: "Receive Your Estimate",
    detail:
      "We assess the space, ask clarifying questions, and send a transparent quote with no hidden fees.",
  },
  {
    step: "3",
    title: "Schedule Your Service",
    detail:
      "Choose your preferred day and time. We are available seven days a week, including weekends.",
  },
  {
    step: "4",
    title: "We Deliver",
    detail:
      "Our team arrives with all supplies and equipment and completes a detailed room-by-room clean.",
  },
  {
    step: "5",
    title: "Inspect the Results",
    detail:
      "Walk through the finished space with us. If anything needs attention, we fix it right away.",
  },
];

const whyMintItems = [
  {
    title: "Eco-Friendly Products",
    detail:
      "We clean with plant-based, non-toxic products that are safe for kids and pets, paired with HEPA-filter vacuums for better indoor air quality.",
  },
  {
    title: "Vetted, Reliable Teams",
    detail:
      "Every team member is background-checked, bonded, and insured. Where possible, we assign the same team to your property for consistency.",
  },
  {
    title: "7-Day Availability",
    detail:
      "We work evenings, weekends, and holidays, so booking around your schedule is easier.",
  },
  {
    title: "Transparent Pricing",
    detail:
      "Free estimates, no hidden fees, and no contracts locking you in.",
  },
  {
    title: "24-Hour Satisfaction Guarantee",
    detail:
      "If something's not right, we come back within 24 hours to fix it at no charge.",
  },
  {
    title: "Trusted by Real Organizations",
    detail:
      "Our commercial clients include Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction.",
  },
  {
    title: "Strong Reputation",
    detail:
      "We hold a 4.9 out of 5 rating across more than 120 Google reviews.",
  },
];

const serviceAreas = [
  "North Vancouver",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Port Moody",
  "Coquitlam",
  "Richmond",
  "Surrey",
  "Pitt Meadows",
  "Maple Ridge",
  "Langley",
  "Squamish",
  "Whistler",
];

const serviceAreaDetails: Record<string, string> = {
  "North Vancouver":
    "Our home base. We know the North Shore block by block — from condo towers in Lower Lonsdale to family homes in Lynn Valley, Edgemont Village, Deep Cove, and Seymour Heights, plus the offices, retail spaces, and strata buildings throughout the area. North Vancouver gets our fastest response times and same-day availability more often than anywhere else we serve.",
  "West Vancouver":
    "We cover all of West Vancouver, including Ambleside, Dundarave, Horseshoe Bay, and the British Properties, with no travel surcharge despite the distance across the Second Narrows. From waterfront homes and strata buildings to local businesses, we adjust our crews and equipment to match each property.",
  Vancouver:
    "From Downtown high-rises and Kitsilano character homes to the West End, East Van, and Kerrisdale, we run regular residential, commercial, and construction cleaning schedules across the city for condos, single-family homes, offices, and retail spaces alike.",
  Burnaby:
    "We clean throughout Metrotown, Burnaby Heights, and South Burnaby — condos, single-family homes, strata buildings, and commercial spaces alike — with the same eco-friendly products and 7-day scheduling flexibility we offer across the North Shore.",
  "New Westminster":
    "The Royal City's heritage homes in Queens Park, condos in Uptown and Sapperton, riverfront properties in Queensborough, and the local businesses throughout downtown all fall within our regular coverage — with the same transparent pricing you'd get in North Vancouver.",
  "Port Moody":
    "From family homes near Rocky Point Park to condo developments in Newport Village and Suter Brook, and the offices and retail spaces around Port Moody's business core, we bring the same trained, insured crews here that we send across the rest of the Tri-Cities.",
  Coquitlam:
    "Coquitlam's mix of established neighbourhoods and newer construction — Westwood Plateau, Burke Mountain, and Coquitlam Centre — keeps our crews busy with everything from routine residential maintenance to commercial contracts and post-construction cleanup on new builds.",
  Richmond:
    "Richmond's mix of City Centre towers, Steveston homes, and the offices, warehouses, and light-industrial space near YVR make it one of our most requested areas — for recurring residential cleaning, commercial contracts, and move-in/move-out turnovers alike.",
  Surrey:
    "Surrey is one of our largest service areas, covering Cloverdale, Guildford, Fleetwood, and South Surrey. With so much new construction and business growth across the city, we handle a steady mix of residential cleans, commercial contracts, and post-construction cleanup.",
  "Pitt Meadows":
    "We serve Pitt Meadows' growing mix of family homes, newer subdivisions, and local businesses with the same eco-friendly, transparent-pricing approach we use across Greater Vancouver — just ask about scheduling since this is an outer service area.",
  "Maple Ridge":
    "Maple Ridge homes, businesses, and larger semi-rural properties all get the same recurring, deep-cleaning, and commercial plans we run closer to North Vancouver, scaled to fit the property.",
  Langley:
    "From newer subdivisions in Willoughby to acreage and equestrian properties throughout the Township, plus the offices and warehouses along the Langley business corridor, we scale our crews and equipment to match the job.",
  Squamish:
    "Along the Sea to Sky corridor, we clean primary residences, secondary homes, vacation properties, and local businesses — a good fit for Squamish's mix of full-time residents, weekend homeowners, and growing commercial base.",
  Whistler:
    "We support Whistler's vacation rental and second-home market with fast turnaround cleaning between guests, plus regular maintenance for full-time residents and the resort's hotels, restaurants, and retail spaces — built around the tight timelines the hospitality industry requires.",
};

const northVancouverNeighborhoods = [
  "Central Lonsdale",
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Lynnmour",
  "Blueridge",
  "Westlynn",
  "Delbrook",
  "Edgemont Village",
  "Canyon Heights",
  "Pemberton Heights",
  "Capilano",
  "Grouse Woods",
  "Deep Cove",
  "Dollarton",
  "Seymour Heights",
];

const faqItems = [
  {
    question: "What cleaning services does Mint Sanitary offer?",
    answer:
      "We offer house cleaning, commercial cleaning and janitorial service, carpet cleaning, window cleaning, pressure washing, and gutter cleaning. House cleaning covers standard, deep, recurring, move-in and move-out, vacation rental turnover, post-construction cleanup, and upholstery and drapery cleaning. Commercial cleaning covers offices, clinics, restaurants, gyms, schools, strata buildings, churches, and industrial spaces.",
  },
  {
    question: "How much does cleaning cost?",
    answer:
      "Most jobs are quoted based on property size and condition rather than a flat rate. The best way to get an accurate number is through our rates page, where you can get an instant estimate. Final pricing depends on the scope of work and any special requests.",
  },
  {
    question: "What areas does Mint Sanitary serve?",
    answer:
      "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, Maple Ridge, and surrounding communities. North Vancouver is our home base, so response times there tend to be fastest. Check our service areas page for the full coverage list.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "You can request a free estimate through our rates page or reach us directly by phone or email. We'll confirm the scope of the job, offer a price, and schedule a visit at a time that works for you. Most bookings can be arranged within a few days, including evenings and weekends.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer:
      "Yes. We use eco-friendly, non-toxic, plant-based products across all our residential and commercial jobs. We also use HEPA-filter vacuums to help improve indoor air quality while we clean.",
  },
  {
    question: "What happens if I'm not happy with the clean?",
    answer:
      "We offer a 24-hour satisfaction guarantee. If anything was missed or doesn't meet your expectations, contact us within 24 hours and we'll come back and fix it at no extra charge.",
  },
  {
    question: "Do you offer a discount for first-time customers?",
    answer:
      "Yes. New customers get 10% off their first clean with code MINT26. It applies to residential and commercial bookings.",
  },
  {
    question: "Do you clean both homes and businesses?",
    answer:
      "Yes. Mint Sanitary handles residential house cleaning and commercial janitorial contracts across Greater Vancouver. Many of our commercial clients, including healthcare and construction organizations, rely on us for ongoing scheduled service rather than one-time cleans.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No. We don't require contracts for house cleaning or most commercial arrangements. You can book a one-time clean, set up recurring visits, or adjust your schedule as your needs change.",
  },
  {
    question: "Are your teams background-checked and insured?",
    answer:
      "Yes. Every team member is background-checked, bonded, and insured before working in your home or business. Where possible, we try to send the same team to your property so you get consistency from visit to visit.",
  },
];

const featuredClients = [
  {
    name: "Vancouver Coastal Health",
    logo: "/client-vancouver-coastal-health.png",
  },
  {
    name: "BC Hydro",
    logo: "/client-bc-hydro.png",
  },
  {
    name: "Arbutus Point Developments Ltd.",
    logo: "/client-arbutus-point.png",
  },
  {
    name: "Powers Construction",
    logo: "/client-powers-construction.png",
  },
];

export default function Home() {
  const [openWhy, setOpenWhy] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <>
      <FaqSchema items={faqItems} />
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/mint-homepage-hero.png)",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h1 className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Cleaning Services in Greater Vancouver
              </h1>
              <p className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Book Your Cleaning Service Today!
              </p>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                Residential and commercial cleaning for homes and businesses
                across North Vancouver, West Vancouver, Vancouver, Burnaby, New
                Westminster, Maple Ridge, and the surrounding area.
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
                <li>Bonded &amp; Insured Teams</li>
                <li>10% Off With Code MINT26</li>
              </ul>
            </div>
            <InstantQuoteForm />
          </div>
          {/* Wave at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="rgba(255,255,255,0.13)" />
            </svg>
          </div>
        </section>

        {/* ── Featured Clients ───────────────────────────────────── */}
        <section className="relative z-10 bg-[#6191e9] px-4 pt-10 pb-4 sm:px-8 md:px-[60px]">
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

        {/* ── Wave: Blue → White (Featured Clients → Services) ── */}
        <div className="relative z-10 -mt-1">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
            <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="transparent" />
          </svg>
        </div>

        {/* ── What We Do (WHITE) ──────────────────────────────── */}
        <section id="services" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-[700px] text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Cleaning Services Across Greater Vancouver
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                What We Do
              </h2>
              <p className="mx-auto mt-4 font-body text-[16px] leading-[1.7] text-white/80">
                Mint Sanitary covers the full range of cleaning needs for homes
                and businesses in Greater Vancouver. Pick the one you need for
                full details, or head to our{" "}
                <a href="/rates" className="underline underline-offset-2">
                  rates page
                </a>{" "}
                for an instant quote.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whatWeDoCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-[20px] bg-white/[0.12] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.2]"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} visual preview`}
                    className="h-[180px] w-full rounded-[14px] object-cover"
                  />
                  <h3 className="mt-4 font-display-reg text-[20px] uppercase tracking-[0.45px] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.65] text-white/80">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-[#6191e9]">
                    Learn More
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Text + Image: Meet the Team ────────────────────── */}
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                About Our Team
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[36px]">
                Trained, Vetted, and Ready to Clean
              </h2>
              <p className="mt-4 font-body text-[16px] leading-[1.75] text-white/80">
                Every Mint Sanitary team member is background-checked, bonded, and
                insured. We invest in hands-on training so our crews know the right
                products, techniques, and safety protocols for every surface in your
                home or business.
              </p>
              <p className="mt-4 font-body text-[16px] leading-[1.75] text-white/80">
                When you book recurring service, we do our best to send the same
                team each visit. That means your preferences are remembered, your
                space is treated with care, and quality stays consistent.
              </p>
              <a
                href="/about"
                className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                About Us
              </a>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/mint-sanitary-team-north-vancouver.jpg"
                alt="Mint Sanitary cleaning team in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* ── Why Mint — Image + Accordion (BLUE) ─────────────── */}
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
                src="/professional-cleaning-services-north-vancouver.jpg"
                alt="Professional cleaning service in action"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[500px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Homeowners and businesses across Greater Vancouver choose Mint
                Sanitary for a few simple reasons.
              </p>
              <div className="mt-6 space-y-3">
                {whyMintItems.map((item, i) => (
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
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                New to Mint Sanitary? Take 10% off your first clean with code{" "}
                <strong className="text-white">MINT26</strong>.
              </p>
              <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/80">
                On pricing, most jobs are quoted by property size, condition,
                and scope of work rather than a flat rate.
              </p>
              <a
                href="/rates"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                View Rates
              </a>
            </div>
          </div>
        </section>

        {/* ── How It Works — Horizontal Steps (WHITE) ─────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                How Our Process Works
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-white/80">
                Booking with us is straightforward. Five simple steps to a
                cleaner space.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((s, i) => (
                <div key={s.step} className="relative text-center">
                  {i < processSteps.length - 1 && (
                    <div className="absolute right-0 top-[24px] hidden h-[2px] w-full translate-x-1/2 bg-[#66DAD5]/30 lg:block" />
                  )}
                  <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Area — Full-Width Centered ──────────────── */}
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Serving North Vancouver and Beyond
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] font-body text-[16px] leading-[1.7] text-white/80">
              Based in North Vancouver, we serve the entire Lower Mainland.
              Same team, same standards, seven days a week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setActiveArea(activeArea === city ? null : city)}
                  aria-expanded={activeArea === city}
                  className={`rounded-full px-5 py-2.5 font-body text-[14px] font-semibold shadow-sm transition-colors duration-200 cursor-pointer ${
                    activeArea === city
                      ? "bg-white text-[#6191e9]"
                      : "bg-white/[0.18] text-white hover:bg-white/[0.28]"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <div
              className={`mx-auto grid max-w-[640px] transition-[grid-template-rows] duration-300 ease-out ${
                activeArea ? "mt-6 grid-rows-[1fr]" : "mt-0 grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                {activeArea && (
                  <div className="relative rounded-[16px] border border-white/15 bg-white/[0.12] p-6 text-left">
                    <button
                      type="button"
                      onClick={() => setActiveArea(null)}
                      aria-label="Close"
                      className="absolute right-4 top-4 flex h-[24px] w-[24px] items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-white hover:text-white cursor-pointer"
                    >
                      <X size={13} strokeWidth={2.5} />
                    </button>
                    <h3 className="pr-8 font-body text-[16px] font-extrabold uppercase tracking-[0.3px] text-white">
                      {activeArea}
                    </h3>
                    <p className="mt-2 font-body text-[15px] leading-[1.65] text-white/80">
                      {serviceAreaDetails[activeArea]}
                    </p>
                    {activeArea === "North Vancouver" && (
                      <>
                        <h4 className="mt-5 font-body text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
                          Neighborhoods We Clean in North Vancouver
                        </h4>
                        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 font-body text-[14px] text-white/80">
                          {northVancouverNeighborhoods.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                        <p className="mt-4 font-body text-[14px] leading-[1.65] text-white/80">
                          Don&apos;t see your area? Let us know, and we&apos;ll be
                          happy to accommodate.
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
            />
            <a
              href="/service-areas"
              className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              View All Service Areas
            </a>
          </div>
        </section>

        {/* ── FAQ — Single-Column Accordion (BLUE) ───────────── */}
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

        {/* ── CTA — Ready to Get Started? (WHITE) ────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Get Your Free Quote
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-white/80">
              Ready to see what your clean will cost? Get an instant estimate
              on house cleaning, commercial janitorial service, carpet
              cleaning, window cleaning, pressure washing, or gutter cleaning.
            </p>
            <p className="mx-auto mt-3 max-w-[500px] font-body text-[15px] leading-[1.7] text-white/80">
              Use code{" "}
              <strong className="text-white font-extrabold">MINT26</strong> for 10% off
              your first service.{" "}
              <a
                href="/rates/"
                className="border-b border-white/40 font-bold text-white"
              >
                View our rates
              </a>
              .
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
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
            <path d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z" fill="#6191e9" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
