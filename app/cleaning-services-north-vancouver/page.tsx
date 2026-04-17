"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Standard Cleaning",
    href: "/cleaning-services-north-vancouver/standard-cleaning/",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
    description:
      "Routine maintenance cleaning for bathrooms, kitchens, bedrooms, and living spaces on a weekly, bi-weekly, or monthly plan.",
  },
  {
    title: "Deep Cleaning",
    href: "/cleaning-services-north-vancouver/deep-cleaning/",
    image: "/deep-cleaning-bathroom-north-vancouver.jpg",
    description:
      "Top-to-bottom reset cleaning including inside appliances, baseboards, window tracks, and hard-to-reach buildup.",
  },
  {
    title: "Move-Out Cleaning",
    href: "/cleaning-services-north-vancouver/move-out-cleaning/",
    image: "/move-out-cleaning-north-vancouver-living-room.jpg",
    description:
      "Detailed vacancy cleaning that helps protect deposits and prepares your property for handover inspections.",
  },
  {
    title: "Move-In Cleaning",
    href: "/cleaning-services-north-vancouver/move-in-cleaning/",
    image: "/move-in-cleaning-north-vancouver-apartment.jpg",
    description:
      "Deep sanitizing before unpacking so your new space starts clean, safe, and move-in ready.",
  },
  {
    title: "Recurring Cleaning",
    href: "/cleaning-services-north-vancouver/recurring-cleaning/",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
    description:
      "Scheduled weekly, bi-weekly, or monthly cleaning that keeps your property consistently clean without weekend catch-up.",
  },
  {
    title: "Vacation Rental Cleaning",
    href: "/cleaning-services-north-vancouver/vacation-rental-cleaning/",
    image: "/airbnb-cleaning-vancouver.png",
    description:
      "Fast Airbnb and VRBO turnover support with restocking, sanitizing, and guest-ready presentation between check-out and check-in.",
  },
  {
    title: "Post-Construction Cleaning",
    href: "/cleaning-services-north-vancouver/post-construction-cleaning/",
    image: "/post-construction-cleaning-north-vancouver.jpg",
    description:
      "HEPA-focused post-build cleanup for renovation dust, debris, adhesive residue, and fine particles across all surfaces.",
  },
  {
    title: "Upholstery Cleaning",
    href: "/carpet-cleaning-north-vancouver/upholstery-cleaning/",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    description:
      "Sofa and furniture cleaning for stains, odor, and allergens using methods matched to each fabric type.",
  },
];

const whyPoints = [
  {
    title: "Eco-Friendly Products",
    body: "We use non-toxic, biodegradable cleaning products that are safer for children, pets, and indoor air quality. No harsh chemical residue left behind.",
  },
  {
    title: "Transparent Pricing",
    body: "Free estimates with clear scope. No hidden fees and no surprise charges after service starts. You know the cost before we begin.",
  },
  {
    title: "7-Day Availability",
    body: "Most cleaning companies won\u2019t work weekends or holidays, but we operate 7 days a week because life doesn\u2019t stop on Friday.",
  },
  {
    title: "Bonded & Insured",
    body: "Every team member is vetted, background-checked, bonded, and fully insured. Your property and belongings are protected.",
  },
  {
    title: "Professional Teams",
    body: "Our cleaners are trained, experienced, and equipped with professional-grade tools and products. Consistency matters, and we aim to send the same team every time.",
  },
  {
    title: "Free Estimates",
    body: "Call (604) 671-6252 or request a quote online. We review your needs and provide an accurate estimate with no obligation.",
  },
  {
    title: "10% Off First Clean",
    body: "New customers save 10% on their first service with promo code MINT25. No strings attached.",
  },
];

const bookingSteps = [
  {
    title: "Easy Booking",
    body: "Call (604) 671-6252 or fill out our online form. Tell us about your space and what you need.",
  },
  {
    title: "Free Estimate",
    body: "We provide a transparent quote based on your property size, service type, and any special requirements. No obligation.",
  },
  {
    title: "Confirmed Schedule",
    body: "Pick a day and time that works for you. We\u2019re available 7 days a week, including evenings and holidays.",
  },
  {
    title: "Professional Service",
    body: "Our trained team arrives on time with eco-friendly products and professional equipment. We work efficiently and respect your space.",
  },
  {
    title: "Quality Guarantee",
    body: "After every job we do a walkthrough. If anything doesn\u2019t meet your expectations, let us know within 24 hours and we\u2019ll return to make it right at no extra charge.",
  },
  {
    title: "Flexible Scheduling",
    body: "Set up recurring service on a weekly, bi-weekly, or monthly schedule. Adjust, pause, or cancel anytime with no contracts or penalties.",
  },
];

const faqItems = [
  {
    question: "What cleaning services do you offer in North Vancouver?",
    answer:
      "We provide standard cleaning, deep cleaning, move-in and move-out cleaning, recurring cleaning, vacation rental turnover, post-construction cleanup, and upholstery cleaning for residential, commercial, and industrial properties.",
  },
  {
    question: "How much does professional cleaning cost in North Vancouver?",
    answer:
      "Pricing depends on property size, service level, and cleaning frequency. Standard cleaning typically starts around $200+. We provide free, no-obligation estimates with transparent pricing before you book. Visit our rates page or call (604) 671-6252.",
  },
  {
    question:
      "Are your cleaning products eco-friendly and safe for families and pets?",
    answer:
      "Yes. All our products are eco-friendly, non-toxic, and biodegradable. They are selected for effective cleaning without harsh chemical residue, making them safe for children, pets, and anyone with sensitivities.",
  },
  {
    question: "What\u2019s included in your standard cleaning service?",
    answer:
      "Standard cleaning covers bathrooms, kitchens, bedrooms, and living spaces with dusting, vacuuming, mopping, and sanitizing of high-touch surfaces. For detailed room-by-room breakdowns, see our standard cleaning page.",
  },
  {
    question: "Do you offer same-day cleaning in North Vancouver?",
    answer:
      "Same-day availability is often possible depending on our schedule and the scope of work. Call us at (604) 671-6252 and we can confirm the fastest available slot.",
  },
  {
    question:
      "Can I book recurring cleaning on a weekly, bi-weekly, or monthly schedule?",
    answer:
      "Yes. We offer weekly, bi-weekly, monthly, and custom schedules designed around your routine. No long-term contracts required \u2014 adjust or pause anytime.",
  },
  {
    question: "What areas do you serve in and around North Vancouver?",
    answer:
      "We serve all North Vancouver neighborhoods including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve West Vancouver, Vancouver, Burnaby, and surrounding cities throughout Greater Vancouver.",
  },
  {
    question: "Do you provide commercial and industrial cleaning?",
    answer:
      "Yes. We clean offices, retail spaces, restaurants, strata buildings, warehouses, and industrial facilities. Our commercial team is equipped for large-scale jobs with flexible scheduling around your business hours.",
  },
  {
    question: "Are your cleaners bonded and insured?",
    answer:
      "Every team member is vetted, background-checked, bonded, and fully insured. Your property and belongings are protected throughout every service.",
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "Call (604) 671-6252 or request a quote online. We review your needs and provide an accurate free estimate. Once confirmed, we schedule your service at a time that works for you.",
  },
  {
    question: "What if I\u2019m not satisfied with the service?",
    answer:
      "If you contact us within 24 hours, we will return and re-clean the area at no additional charge. Your satisfaction is guaranteed.",
  },
  {
    question: "Do you offer discounts for first-time customers?",
    answer:
      "Yes. New customers save 10% on their first service with promo code MINT25. This applies to all residential and commercial cleaning services.",
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
    text: "We use Mint for our office in Lower Lonsdale. They\u2019re always on time, thorough, and the team is super professional. Our workspace has never looked better.",
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
    text: "Had our carpets and upholstery done after a renovation. The results were amazing \u2014 looked like new furniture! The team was careful, professional, and on time.",
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
    src: "/see-difference-bathroom-black-white.webp",
    alt: "Spotless modern bathroom with white tile and matte black fixtures after professional cleaning",
  },
  {
    src: "/see-difference-bathroom-marble-double.webp",
    alt: "Bright bathroom with double vanity, walk-in shower, and gleaming surfaces",
  },
  {
    src: "/see-difference-living-room.webp",
    alt: "Clean living room with fireplace, wood floors, and clear windows",
  },
  {
    src: "/see-difference-kitchen-sage.webp",
    alt: "Immaculate open kitchen with white cabinets, quartz counters, and stainless appliances",
  },
  {
    src: "/see-difference-towels-detail.webp",
    alt: "Neatly rolled white towels and streak-free bathroom mirror",
  },
  {
    src: "/see-difference-kitchen-dark-grey.webp",
    alt: "L-shaped kitchen with dark cabinetry, marble counters, and organized surfaces",
  },
];

const serviceAreas = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Capilano",
  "Norgate",
  "Seymour Heights",
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

export default function CleaningServicesNorthVancouverPage() {
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
                "url(/professional-cleaning-services-north-vancouver.jpg)",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Professional Cleaning in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Cleaning Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                Mint Sanitary provides professional cleaning services for homes,
                rentals, and businesses across North Vancouver. We use
                eco-friendly products, work seven days a week, and deliver
                transparent pricing with no hidden fees. Call (604) 671-6252 for
                a free estimate or use code MINT25 for 10% off your first
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

        {/* ── Why Professional Cleaning Matters — Image + Text ── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-cleaning-products-north-vancouver.jpg"
                alt="Eco-friendly cleaning products used in North Vancouver"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Cleaning Services Matter in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  North Vancouver&apos;s combination of coastal moisture,
                  surrounding forests, and active lifestyles creates unique
                  cleaning challenges. Dust, allergens, mold spores, and
                  tracked-in debris accumulate faster than most homeowners
                  realize. Professional cleaning isn&apos;t a luxury &mdash;
                  it&apos;s an investment in your health, your time, and the
                  longevity of your property.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <strong className="font-extrabold text-[#4E5062]">
                    Health and indoor air quality:
                  </strong>{" "}
                  Regular professional cleaning removes allergens, dust mites,
                  pet dander, and mold spores that accumulate in carpets,
                  upholstery, and hard-to-reach corners. This is especially
                  important for families with children, seniors, or anyone with
                  asthma and allergies. Our eco-friendly products clean
                  effectively without leaving behind chemical residue that can
                  further compromise indoor air.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <strong className="font-extrabold text-[#4E5062]">
                    Time savings:
                  </strong>{" "}
                  The average homeowner spends 6 to 10 hours per week on
                  household chores. A professional cleaning service gives you
                  that time back for family, work, fitness, or simply enjoying
                  North Vancouver&apos;s trails and waterfront. Recurring
                  cleaning plans mean you never have to spend a weekend catching
                  up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── More "Why" content — Text + Image (flipped) ─────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <div className="space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <strong className="font-extrabold text-[#4E5062]">
                    Rental and property management:
                  </strong>{" "}
                  North Vancouver&apos;s rental and vacation rental market
                  demands fast, reliable turnovers. Whether you manage an Airbnb
                  in Lower Lonsdale or a long-term rental in Lynn Valley,
                  professional cleaning between tenants protects your investment
                  and keeps reviews positive. Our{" "}
                  <a
                    href="/cleaning-services-north-vancouver/vacation-rental-cleaning/"
                    className="underline underline-offset-2"
                  >
                    vacation rental cleaning
                  </a>{" "}
                  and{" "}
                  <a
                    href="/cleaning-services-north-vancouver/move-out-cleaning/"
                    className="underline underline-offset-2"
                  >
                    move-out cleaning
                  </a>{" "}
                  services are designed for exactly this.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  <strong className="font-extrabold text-[#4E5062]">
                    Businesses and commercial spaces:
                  </strong>{" "}
                  A clean workspace reduces employee sick days, improves morale,
                  and makes a professional impression on clients. From offices
                  and retail to restaurants and strata buildings, commercial
                  cleaning keeps your facility running smoothly. Learn more
                  about our{" "}
                  <a
                    href="/commercial-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    commercial cleaning services
                  </a>
                  .
                </p>
              </div>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
              >
                Get a Free Estimate
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

        {/* ── Service Types — Cards with Images ──────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Our Cleaning Service Types in North Vancouver
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
                    className="h-[170px] w-full rounded-[14px] object-cover"
                    loading="lazy"
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

        {/* ── Why Choose Mint — Image + Accordion (BLUE) ──────── */}
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
                We&apos;re not just another cleaning company. Mint Sanitary is
                built on reliability, transparency, and eco-conscious practices
                that make a real difference for North Vancouver families and
                businesses.
              </p>
              <div className="mt-6 space-y-3">
                {whyPoints.map((item, i) => (
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
              <a
                href="/rates"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                View Rates
              </a>
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
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Mint Sanitary is based on the North Shore and serves all
                  neighborhoods across North Vancouver, including Lower
                  Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont
                  Village, Capilano, Norgate, Seymour Heights, Dollarton,
                  Indian River, and Blueridge.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  We also serve{" "}
                  <a
                    href="/service-areas/"
                    className="underline underline-offset-2"
                  >
                    West Vancouver, Vancouver, Burnaby
                  </a>
                  , and surrounding cities throughout Greater Vancouver. Whether
                  you&apos;re in a waterfront condo in Lower Lonsdale or a
                  family home in Lynn Valley, our team delivers the same
                  professional service, eco-friendly products, and 7-day
                  availability.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Need service outside these areas? Call{" "}
                  <a
                    href="tel:+16046716252"
                    className="underline underline-offset-2"
                  >
                    (604) 671-6252
                  </a>{" "}
                  and we&apos;ll do our best to accommodate you.
                </p>
              </div>
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
          </div>
        </section>

        {/* ── Residential Cleaning — Text + Image ────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                For Homeowners &amp; Renters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                Residential Cleaning in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Your home should be a place where you can relax, not a source
                  of stress. Our residential cleaning services are designed for
                  North Vancouver homeowners, renters, and property managers who
                  want a consistently clean space without spending their free
                  time on chores.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  We offer{" "}
                  <a
                    href="/cleaning-services-north-vancouver/standard-cleaning/"
                    className="underline underline-offset-2"
                  >
                    standard cleaning
                  </a>{" "}
                  for routine maintenance,{" "}
                  <a
                    href="/cleaning-services-north-vancouver/deep-cleaning/"
                    className="underline underline-offset-2"
                  >
                    deep cleaning
                  </a>{" "}
                  for seasonal resets,{" "}
                  <a
                    href="/cleaning-services-north-vancouver/move-in-cleaning/"
                    className="underline underline-offset-2"
                  >
                    move-in
                  </a>{" "}
                  and{" "}
                  <a
                    href="/cleaning-services-north-vancouver/move-out-cleaning/"
                    className="underline underline-offset-2"
                  >
                    move-out cleaning
                  </a>{" "}
                  for transitions, and{" "}
                  <a
                    href="/cleaning-services-north-vancouver/recurring-cleaning/"
                    className="underline underline-offset-2"
                  >
                    recurring plans
                  </a>{" "}
                  that keep your home fresh week after week. Every service uses
                  eco-friendly products safe for children and pets.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Whether you live in a compact condo in Lonsdale or a
                  multi-level home in Edgemont, our team adjusts the scope and
                  approach to match your property. We aim to send the same
                  cleaners each visit so they learn your space and your
                  preferences.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/recurring-cleaning-kitchen-result-north-vancouver.jpg"
                alt="Clean kitchen after residential cleaning service"
                className="h-[340px] w-full object-cover sm:h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Commercial Cleaning — Image + Text (flipped) ──── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1 overflow-hidden rounded-[20px]">
              <img
                src="/office-cleaning-north-vancouver-workspace.jpg"
                alt="Professional office cleaning in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px]"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                For Businesses &amp; Facilities
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                Commercial Cleaning in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  A clean workplace protects employee health, reduces sick days,
                  and makes the right impression on clients. Mint Sanitary
                  provides{" "}
                  <a
                    href="/commercial-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    commercial cleaning services
                  </a>{" "}
                  for offices, retail spaces, restaurants, strata buildings,
                  schools, churches, and gyms across North Vancouver.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  We work around your business hours with early morning, evening,
                  late night, and weekend scheduling. Our commercial team uses
                  eco-friendly, hospital-grade disinfection products and follows
                  strict protocols tailored to your facility type. Every team
                  member is trained, bonded, insured, and background-checked.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  From daily janitorial maintenance to periodic deep cleaning, we
                  develop a customized plan that fits your budget and keeps your
                  space consistently presentable. Call{" "}
                  <a
                    href="tel:+16046716252"
                    className="underline underline-offset-2"
                  >
                    (604) 671-6252
                  </a>{" "}
                  for a free commercial cleaning estimate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industrial Cleaning — Text + Image ─────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Heavy-Duty Solutions
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[36px]">
                Industrial Cleaning in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Industrial facilities &mdash; warehouses, manufacturing
                  plants, workshops, and storage units &mdash; require cleaning
                  that goes beyond what standard commercial services provide.
                  Heavy dust, oil residue, chemical buildup, and high-traffic
                  floor wear demand specialized equipment and experienced crews.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Mint Sanitary provides industrial cleaning services across
                  North Vancouver with a focus on safety, compliance, and
                  thorough execution. We handle floor scrubbing, degreasing,
                  high-level dusting, ventilation cleaning, and
                  post-construction debris removal. Our{" "}
                  <a
                    href="/cleaning-services-north-vancouver/post-construction-cleaning/"
                    className="underline underline-offset-2"
                  >
                    post-construction cleaning
                  </a>{" "}
                  service is particularly suited for industrial renovations and
                  new builds.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  All our products are eco-friendly and comply with workplace
                  safety standards. We schedule around your operations to
                  minimize downtime and disruption. Contact us at{" "}
                  <a
                    href="tel:+16046716252"
                    className="underline underline-offset-2"
                  >
                    (604) 671-6252
                  </a>{" "}
                  to discuss your industrial cleaning needs.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/post-construction-kitchen-cleaning-north-vancouver.jpg"
                alt="Post-construction industrial cleaning"
                className="h-[340px] w-full object-cover sm:h-[400px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── How It Works — Horizontal Steps ────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                What to Expect When You Book
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
                Booking with us is straightforward. Six simple steps to a
                cleaner space.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {bookingSteps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#5c6075]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing Content ────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/recurring-cleaning-hepa-vacuum-north-vancouver.jpg"
                alt="Professional HEPA vacuum cleaning"
                className="h-[340px] w-full object-cover sm:h-[400px]"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[28px] uppercase text-[#4E5062] sm:text-[34px]">
                Cleaning Services That Matter to North Vancouver Families and
                Businesses
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  At Mint Sanitary, we believe that professional cleaning should
                  be accessible, reliable, and genuinely helpful. We&apos;re not
                  interested in cutting corners or upselling services you
                  don&apos;t need. We show up on time, use products that are safe
                  for your family and the environment, and we do the job right.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Whether you need a one-time{" "}
                  <a
                    href="/cleaning-services-north-vancouver/deep-cleaning/"
                    className="underline underline-offset-2"
                  >
                    deep clean
                  </a>{" "}
                  before hosting guests, a{" "}
                  <a
                    href="/cleaning-services-north-vancouver/recurring-cleaning/"
                    className="underline underline-offset-2"
                  >
                    recurring cleaning plan
                  </a>{" "}
                  to keep your home fresh, or a{" "}
                  <a
                    href="/commercial-cleaning-north-vancouver/"
                    className="underline underline-offset-2"
                  >
                    commercial cleaning contract
                  </a>{" "}
                  for your business, we tailor every service to your specific
                  situation.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  North Vancouver is our home too. We take pride in serving our
                  community with honest work, fair pricing, and the kind of
                  attention to detail that earns trust over time. Call{" "}
                  <a
                    href="tel:+16046716252"
                    className="underline underline-offset-2"
                  >
                    (604) 671-6252
                  </a>{" "}
                  for your free estimate, or visit our{" "}
                  <a href="/rates/" className="underline underline-offset-2">
                    rates page
                  </a>{" "}
                  to learn more about pricing. New customers save 10% with code
                  MINT25.
                </p>
              </div>
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
              Ready for Clean Spaces?
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Book your free estimate and get professional cleaning that fits
              your schedule. Call Mint Sanitary at (604) 671-6252 and use code
              MINT25 for 10% off your first service.
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
