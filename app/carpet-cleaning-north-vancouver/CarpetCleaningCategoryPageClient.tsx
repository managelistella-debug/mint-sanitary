"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Area Rug Cleaning",
    href: "/carpet-cleaning-north-vancouver/area-rug-cleaning/",
    image: "/area-rug-cleaning-north-vancouver.jpg",
    description:
      "Professional cleaning for delicate area rugs using specialized techniques that preserve color and texture, including Persian, Turkish, and handmade rugs.",
  },
  {
    title: "Carpet Steam Cleaning",
    href: "/carpet-cleaning-north-vancouver/carpet-steam-cleaning/",
    image: "/carpet-steam-cleaning-north-vancouver.jpg",
    description:
      "Deep cleaning using hot-water extraction to remove embedded dirt, allergens, and stains from residential and commercial carpets.",
  },
  {
    title: "Carpet Stain Removal",
    href: "/carpet-cleaning-north-vancouver/carpet-stain-removal/",
    image: "/carpet-stain-removal-north-vancouver.jpg",
    description:
      "Expert stain removal for pet accidents, food spills, wine, ink, and other stubborn marks using targeted treatments.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    href: "/carpet-cleaning-north-vancouver/drapes-curtains-cleaning/",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    description:
      "Professional cleaning for all fabric types to remove dust, allergens, and odors while maintaining fabric integrity.",
  },
];

const whyChooseItems = [
  {
    title: "Eco-Friendly & Safe Cleaning Products",
    body: "We use non-toxic, eco-friendly products that are safe for children, pets, and sensitive individuals. Our solutions are free from harsh chemicals and harmful fumes.",
  },
  {
    title: "7-Day Availability",
    body: "We're open 7 days a week to fit your schedule with same-day estimates and flexible appointment times whenever possible.",
  },
  {
    title: "Free Estimates & Transparent Pricing",
    body: "No surprises. We assess carpet condition, discuss your needs, and provide clear pricing for carpet cleaning in North Vancouver.",
  },
  {
    title: "Residential, Commercial & Industrial Experience",
    body: "From townhouses in Lynn Valley to office buildings in Lower Lonsdale, we clean all property types and fiber conditions.",
  },
  {
    title: "Fast-Dry Technology",
    body: "Advanced extraction leaves carpets nearly dry. Most homes see dry times between 4 and 12 hours depending on humidity and airflow.",
  },
];

const faqItems = [
  {
    question:
      "How often should I have carpets professionally cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homes benefit from professional carpet cleaning every 12-18 months. Homes with pets or children may need quarterly cleanings. Our technicians can assess your carpet and recommend a schedule during your free estimate in North Vancouver.",
  },
  {
    question:
      "What's the difference between carpet steam cleaning and regular vacuuming in North Vancouver?",
    answer:
      "Vacuums remove surface dirt, but carpet steam cleaning reaches deep fibers where dust, bacteria, and allergens hide. Hot-water extraction (what we use for carpet cleaning in North Vancouver) kills germs and removes embedded contaminants that vacuums can't touch.",
  },
  {
    question: "Will my carpet in North Vancouver be wet after cleaning?",
    answer:
      "No. We use advanced extraction equipment that removes most moisture. Carpets typically dry in 4-12 hours after professional carpet cleaning in North Vancouver, depending on humidity and airflow.",
  },
  {
    question: "Can you remove old stains from my North Vancouver carpet?",
    answer:
      "Many old stains can be noticeably lightened or removed. Our carpet stain removal service in North Vancouver uses specialized treatments for wine, pet accidents, ink, food, and other common marks. Bring photos or describe the stain when you call for a free estimate in North Vancouver.",
  },
  {
    question:
      "Are your cleaning products safe for children and pets in North Vancouver?",
    answer:
      "Yes. We use eco-friendly, non-toxic products specifically chosen for homes with kids and pets. All our products are safe for North Vancouver families and won't trigger allergies or asthma in sensitive individuals.",
  },
  {
    question: "Is same-day carpet cleaning available in North Vancouver?",
    answer:
      "We offer 7-day availability and same-day appointments in North Vancouver whenever possible. Call (604) 671-6252 to schedule your carpet cleaning in North Vancouver, and we'll work with your schedule.",
  },
  {
    question:
      "What areas outside North Vancouver do you service for carpet cleaning?",
    answer:
      "We serve West Vancouver, Vancouver, Burnaby, and all of Greater Vancouver. Need carpet cleaning in North Vancouver or nearby communities. We're your solution.",
  },
  {
    question:
      "How long does professional carpet cleaning take in North Vancouver?",
    answer:
      "Most North Vancouver homes take 2-4 hours depending on square footage and carpet condition. We'll provide a time estimate when you book your carpet cleaning appointment in North Vancouver.",
  },
  {
    question: "Do you offer commercial carpet cleaning in North Vancouver?",
    answer:
      "Yes. We clean office carpets, retail spaces, and commercial buildings throughout North Vancouver. Call (604) 671-6252 for a commercial carpet cleaning quote in North Vancouver.",
  },
  {
    question:
      "What do I do if my carpet gets stained before my cleaning appointment in North Vancouver?",
    answer:
      "Blot (don't rub) the area with a clean cloth. Avoid over-wetting. Let it dry if possible. When we arrive for your carpet cleaning in North Vancouver, tell our technician about the stain so they can use the right treatment.",
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
  {
    name: "Vancouver Coastal Health",
    logo: "/client-vancouver-coastal-health.png",
  },
  { name: "BC Hydro", logo: "/client-bc-hydro.png" },
  { name: "Arbutus Point Developments Ltd.", logo: "/client-arbutus-point.png" },
  { name: "Powers Construction", logo: "/client-powers-construction.png" },
];

const galleryImages = [
  {
    src: "/carpet-cleaning-vacuum-lines-bedroom-north-vancouver.webp",
    alt: "Bedroom carpet with professional vacuum lines after cleaning",
  },
  {
    src: "/carpet-cleaning-commercial-office-pattern-carpet.webp",
    alt: "Commercial office carpet with geometric pattern after maintenance cleaning",
  },
  {
    src: "/carpet-cleaning-living-room-plush-carpet.webp",
    alt: "Bright living room with clean plush carpet and natural light",
  },
  {
    src: "/carpet-cleaning-grey-carpet-vacuum-tracks.webp",
    alt: "Light grey carpet with visible vacuum tracks in a clean room",
  },
  {
    src: "/carpet-cleaning-beige-carpet-bright-room.webp",
    alt: "Beige wall-to-wall carpet in a bright empty room after cleaning",
  },
  {
    src: "/carpet-cleaning-commercial-carpet-hallway.webp",
    alt: "Commercial hallway with clean patterned office carpeting",
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

export default function CarpetCleaningCategoryPageClient() {
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
              backgroundImage: "url('/carpet-cleaning-in-north-vancouver.webp')",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-2 md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <div className="mb-5 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Professional Carpet Cleaning in North Vancouver
              </p>
              <h1 className="mt-4 font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[56px]">
                Carpet Cleaning Services in North Vancouver
              </h1>
              <div className="mt-5 h-[2px] w-[80px] bg-[#66DAD5]" />
              <p className="mt-6 max-w-[540px] font-body text-[17px] leading-[1.75] text-white/90">
                Mint Sanitary delivers professional carpet cleaning for homes and
                businesses across North Vancouver. We use eco-friendly, non-toxic
                products that are safe for your family and pets &mdash; removing
                embedded dirt, stains, and allergens using hot-water extraction.
                Seven-day availability, fast drying times, and transparent
                pricing. Call (604) 671-6252 for a free estimate or use code
                MINT25 for 10% off your first service.
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
                <li>Fast-Dry Technology</li>
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

        {/* ── Why Professional Carpet Cleaning Matters — Image Left, Text Right ── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/eco-friendly-carpet-stain-removal-north-vancouver.jpg"
                alt="Eco-friendly carpet stain removal in North Vancouver"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Why Professional Carpet Cleaning Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  North Vancouver&apos;s coastal climate brings persistent moisture,
                  pollen, and fine particulate from the surrounding mountains and
                  forests. These contaminants settle deep into carpet fibers where
                  routine vacuuming cannot reach. Over time, embedded dirt,
                  allergens, and bacteria degrade indoor air quality and accelerate
                  carpet wear.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Professional carpet cleaning using hot-water extraction removes
                  what vacuums leave behind. Our eco-friendly solutions penetrate
                  deep into fiber layers, loosening and lifting debris, bacteria,
                  mold spores, and odors. For families with children, pets, or
                  anyone with allergies or asthma, this level of cleaning makes a
                  measurable difference in how your home feels and how healthy it
                  is.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits — Text Left, Image Right ───────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                How Professional Carpet Cleaning Benefits Your North Vancouver
                Home
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  Regular professional carpet cleaning extends carpet life by
                  years. It removes allergens that trigger asthma and allergies, a
                  concern in North Vancouver&apos;s damp climate where mold spores
                  thrive. Clean carpets also improve air quality by eliminating
                  dust, pet dander, and bacteria trapped in fibers.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  One customer in Deep Cove had the same carpet for 8 years and
                  thought it was time for replacement. After one professional steam
                  cleaning, the carpet looked almost new. They saved thousands by
                  restoring what they already had. Our fast-dry extraction
                  technology means carpets are ready to use in just 4 to 12 hours.
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
                src="/carpet-cleaning-benefits-living-room-north-vancouver.webp"
                alt="Bright living room with clean plush carpet and family pet in North Vancouver"
                className="h-[340px] w-full object-cover sm:h-[400px]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── Service Cards ────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Carpet Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
                Our Carpet Cleaning Service Types in North Vancouver
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
                src="/freshly-cleaned-carpets-north-vancouver.jpg"
                alt="Freshly cleaned carpets in North Vancouver"
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[500px]"
              />
            </div>
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Choose Mint Sanitary
              </h2>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                We&apos;re not just another carpet cleaning company. Mint Sanitary
                brings eco-friendly solutions, fast-dry technology, and reliable
                seven-day availability to every carpet cleaning job in North
                Vancouver.
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

        {/* ── Service Areas — Chips ────────────────────────────── */}
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
                Carpet Cleaning Service Areas in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Mint Sanitary is based on the North Shore and provides
                  professional carpet cleaning across all North Vancouver
                  neighborhoods, including Lower Lonsdale, Lynn Valley, Deep
                  Cove, Edgemont Village, and Seymour Heights.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  We also serve{" "}
                  <a
                    href="/service-areas/"
                    className="underline underline-offset-2"
                  >
                    West Vancouver, Vancouver, and Burnaby
                  </a>{" "}
                  throughout Greater Vancouver. Same professional service, same
                  eco-friendly products, same 7-day availability wherever you
                  are.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Need carpet cleaning outside these areas? Call{" "}
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
                alt="Map of North Vancouver and Greater Vancouver showing Mint Sanitary carpet cleaning service area"
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

        {/* ── CTA — White centered ────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Ready for Cleaner Carpets in North Vancouver?
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-[#5c6075]">
              Call Mint Sanitary at (604) 671-6252 or email
              hello@mintsanitary.com. Use promo code MINT25 for 10% off carpet
              cleaning in North Vancouver. Free estimates. 7-day availability.
              Eco-friendly products. Bonded, insured technicians.
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

        {/* ── Wave: White → Blue (before Footer) ─────────────── */}
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
