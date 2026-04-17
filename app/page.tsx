"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const categoryCards = [
  {
    title: "Residential Cleaning Services",
    href: "/cleaning-services-north-vancouver/",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
    description:
      "From standard and deep cleaning to move-in and move-out support, we keep North Vancouver homes healthy, consistent, and guest-ready.",
  },
  {
    title: "Commercial Cleaning Services",
    href: "/commercial-cleaning-north-vancouver/",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
    description:
      "Offices, clinics, and retail spaces trust us for flexible, after-hours cleaning that protects your brand and keeps teams productive.",
  },
  {
    title: "Carpet Cleaning Services",
    href: "/carpet-cleaning-north-vancouver/",
    image: "/carpet-cleaning-north-vancouver.jpg",
    description:
      "Our hot-water extraction and eco-friendly solutions remove deep dirt, allergens, and odor that regular vacuuming cannot reach.",
  },
  {
    title: "Gutter Cleaning Services",
    href: "/gutter-cleaning-north-vancouver/",
    image: "/gutter-cleaning-north-vancouver.png",
    description:
      "In North Vancouver's rainy climate, we clear leaves, moss, and debris to keep water flowing and protect your roof, fascia, and foundation.",
  },
  {
    title: "Window Cleaning Services",
    href: "/window-cleaning-north-vancouver/",
    image: "/window-cleaning-north-vancouver.png",
    description:
      "We clean interior and exterior windows, frames, and sills with streak-free methods for residential and commercial properties.",
  },
  {
    title: "Pressure Washing Services",
    href: "/pressure-washing-north-vancouver/",
    image: "/pressure-washing-north-vancouver.png",
    description:
      "We remove mold, algae, grime, and moss from driveways, siding, decks, and patios using surface-safe pressure settings.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Get in Touch",
    detail:
      "Call (604) 671-6252 or fill out our estimate form and tell us what you need cleaned.",
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
      "We use products that are effective on grime but safer for kids, pets, and indoor air quality. From plant-based cleaners to HEPA-filtered vacuums, every tool protects your space.",
  },
  {
    title: "Transparent Pricing",
    detail:
      "You receive a clear estimate upfront. No hidden fees, no surprise charges. If scope changes, we call first.",
  },
  {
    title: "7-Day Availability",
    detail:
      "Most companies work Monday to Friday. We are available on weekends because that is often when clients need us most.",
  },
  {
    title: "Same Trained Team",
    detail:
      "We do our best to keep the same crew on recurring jobs, so your preferences are remembered and quality stays consistent every visit.",
  },
];

const serviceAreas = [
  "North Vancouver",
  "West Vancouver",
  "Vancouver",
  "Burnaby",
  "Deep Cove",
  "Lynn Valley",
  "Edgemont Village",
  "Lower Lonsdale",
  "Seymour Heights",
];

const faqItems = [
  {
    question: "What makes Mint Sanitary different in North Vancouver?",
    answer:
      "We combine eco-friendly products, seven-day availability, transparent pricing, and bonded and insured teams with a 24-hour satisfaction guarantee.",
  },
  {
    question: "How much does house cleaning cost in North Vancouver?",
    answer:
      "Cost depends on square footage, number of rooms, frequency, and service level. We provide free transparent estimates so you know the exact price before booking.",
  },
  {
    question: "Can I get same-day cleaning service in North Vancouver?",
    answer:
      "Often, yes. We keep flexible capacity across North Vancouver and offer same-day options when schedule gaps are available.",
  },
  {
    question:
      "Are your cleaning products eco-friendly and safe for families and pets?",
    answer:
      "Yes. We use eco-friendly products that are effective on grime while staying safer for kids, pets, and people with sensitivities.",
  },
  {
    question: "What areas of North Vancouver do you service?",
    answer:
      "We cover all of North Vancouver including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, plus nearby cities.",
  },
  {
    question: "How do I get a free cleaning estimate?",
    answer:
      "Call (604) 671-6252 or request a quote online. We provide clear, no-obligation pricing before work begins.",
  },
  {
    question: "What's included in deep cleaning?",
    answer:
      "Deep cleaning includes standard tasks plus baseboards, inside appliances, light fixtures, window tracks, and buildup-prone surfaces.",
  },
  {
    question: "Are your cleaners bonded and insured?",
    answer:
      "Yes. Every team member is vetted, background-checked, bonded, and insured.",
  },
  {
    question: "What if I'm not satisfied with the clean?",
    answer:
      "Let us know within 24 hours and we will re-clean the missed area at no charge.",
  },
  {
    question: "Do you offer recurring cleaning on a fixed day?",
    answer:
      "Yes. Weekly, bi-weekly, and monthly recurring options are available, and we keep your preferred day and team whenever possible.",
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

  return (
    <>
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                House Cleaning Service in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Professional House Cleaning Service
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                Between work, family, and everything else, cleaning can eat your
                weekends. Mint Sanitary helps North Vancouver homeowners and
                property managers stay ahead with eco-friendly service, transparent
                pricing, and seven-day availability.
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
                <li>Bonded &amp; Insured Teams</li>
                <li>10% Off With Code MINT25</li>
              </ul>
            </div>
            <div className="hidden md:block" />
          </div>
          {/* Wave at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="#6191e9" />
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
        <div className="relative z-10 -mt-1 bg-[#6191e9]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
            <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* ── Service Categories (WHITE) ──────────────────────── */}
        <section
          id="services"
          className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]"
        >
          <div className="mx-auto max-w-[1200px]">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Cleaning Services in North Vancouver
              </h2>
              <p className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
                Every property has different needs. Explore our core service
                categories below and choose the cleaning plan that fits your home
                or business.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categoryCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#eef4ff]"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} visual preview`}
                    className="h-[180px] w-full rounded-[14px] object-cover"
                  />
                  <h3 className="mt-4 font-display-reg text-[20px] uppercase tracking-[0.45px] text-[#4E5062]">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.65] text-[#5c6075]">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-block border-b border-[#66DAD5] font-body text-[13px] font-bold uppercase tracking-[0.4px] text-[#4E5062] transition-colors group-hover:text-[#6191e9]">
                    Learn More
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Text + Image: Meet the Team ────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                About Our Team
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                Trained, Vetted, and Ready to Clean
              </h2>
              <p className="mt-4 font-body text-[16px] leading-[1.75] text-[#5c6075]">
                Every Mint Sanitary team member is background-checked, bonded, and
                insured. We invest in hands-on training so our crews know the right
                products, techniques, and safety protocols for every surface in your
                home or business.
              </p>
              <p className="mt-4 font-body text-[16px] leading-[1.75] text-[#5c6075]">
                When you book recurring service, we do our best to send the same
                team each visit. That means your preferences are remembered, your
                space is treated with care, and quality stays consistent.
              </p>
              <a
                href="/about"
                className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
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
                Detail-Driven, Every Single Time
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                When you hire a cleaning service, you&rsquo;re buying time,
                consistency, and peace of mind. Here&rsquo;s how we deliver.
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
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                How Our Process Works
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
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
                  <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Area — Full-Width Centered ──────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Serving North Vancouver and Beyond
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Based in North Vancouver, we serve the entire Lower Mainland.
              Same team, same standards, seven days a week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white px-5 py-2.5 font-body text-[14px] font-semibold text-[#4E5062] shadow-sm"
                >
                  {city}
                </span>
              ))}
            </div>
            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
            />
            <a
              href="/service-areas"
              className="mt-8 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
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
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Ready to Refresh Your Space?
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Your home deserves professional care, and you deserve your time
              back. Book your free estimate today and see why North Vancouver
              clients trust Mint Sanitary for dependable cleaning.
            </p>
            <p className="mx-auto mt-3 max-w-[500px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Use code{" "}
              <strong className="text-[#6191e9]">MINT25</strong> for 10% off
              your first service.{" "}
              <a
                href="/rates/"
                className="border-b border-[#66DAD5] font-bold text-[#4E5062]"
              >
                View our rates
              </a>
              .
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
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
            <path d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z" fill="#6191e9" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
