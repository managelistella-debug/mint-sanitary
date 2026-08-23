"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaqSchema, BreadcrumbSchema } from "@/components/SeoSchema";

const services = [
  {
    title: "Area Rug Cleaning",
    href: "#area-rug-cleaning",
    image: "/area-rug-cleaning-north-vancouver.jpg",
    description:
      "Hand-wash cleaning for delicate area rugs using specialized techniques that preserve color and texture, including Persian, Turkish, wool, and handmade rugs. Free pickup and delivery available.",
  },
  {
    title: "Carpet Steam Cleaning",
    href: "#carpet-steam-cleaning",
    image: "/carpet-steam-cleaning-north-vancouver.jpg",
    description:
      "Deep cleaning using hot water extraction to remove embedded dirt, allergens, and stains from residential and commercial carpet, priced per room starting at $60.",
  },
  {
    title: "Carpet Stain Removal",
    href: "#carpet-stain-removal",
    image: "/carpet-stain-removal-north-vancouver.jpg",
    description:
      "Expert stain removal for pet accidents, food spills, wine, ink, and other stubborn marks using targeted treatments and 200 to 500 PSI extraction equipment.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    href: "/north-vancouver/drapes-curtains-cleaning/",
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
    question: "How often should carpets be professionally cleaned in North Vancouver?",
    answer:
      "Most North Vancouver homes do well with cleaning every 12 to 18 months. With pets or kids in the house, every 6 to 12 months keeps odors and allergens under control, which matters given how much moisture North Vancouver's climate already adds to the mix.",
  },
  {
    question: "Do you offer commercial carpet cleaning in North Vancouver?",
    answer:
      "Yes. We clean carpet in North Vancouver offices and commercial hallways as well as homes, and we can work around business hours to avoid disrupting your day.",
  },
  {
    question: "Do you offer same-day carpet cleaning in North Vancouver?",
    answer:
      "Often, yes. Call 236-688-3248 with your details and we'll schedule same-day or next-day service in North Vancouver depending on availability. We work seven days a week.",
  },
  {
    question: "Are your cleaning products safe for kids and pets in North Vancouver homes?",
    answer:
      "Yes. All products we use in North Vancouver homes are eco-friendly, plant-based, and non-toxic, with no harsh chemicals or fumes. Treated areas are safe once dry.",
  },
  {
    question: "What is carpet steam cleaning in North Vancouver?",
    answer:
      "It's the common name for hot water extraction, the deep-cleaning method carpet manufacturers require for warranty protection. We heat water to 200 to 230°F, inject it with an eco-friendly cleaning solution, and extract it with commercial-grade equipment, reaching dirt and allergens a vacuum in a North Vancouver home can't touch.",
  },
  {
    question: "How long does carpet steam cleaning take in North Vancouver?",
    answer:
      "A typical 3-bedroom North Vancouver home takes 2 to 4 hours, depending on square footage and carpet condition. We'll confirm a specific timeline during your free estimate.",
  },
  {
    question: "What's the drying time after carpet steam cleaning in North Vancouver?",
    answer:
      "Most North Vancouver carpet dries within 6 to 12 hours with good airflow. We set up fans and give you specific guidance; just avoid placing heavy furniture back for at least 6 hours.",
  },
  {
    question: "Will carpet steam cleaning help with allergens in my North Vancouver home?",
    answer:
      "Yes. Hot water extraction reduces dust mites by roughly 87% and removes 94%+ of allergens, including pet dander, pollen, and mold spores, which matters in North Vancouver's damp climate when windows stay closed for months at a time.",
  },
  {
    question: "Can I steam clean a new carpet installation in North Vancouver?",
    answer:
      "Yes, but we recommend waiting 6 to 8 weeks after installation in your North Vancouver home so the new-carpet sizing treatment can set properly first.",
  },
  {
    question: "Do you move furniture during carpet steam cleaning in North Vancouver?",
    answer:
      "Yes. We move light to medium furniture such as sofas, chairs, and tables as part of the North Vancouver service. Heavier or specialty pieces get discussed during your estimate.",
  },
  {
    question: "How quickly should I call for stain removal in North Vancouver?",
    answer:
      "The faster, the better. Fresh spills respond best to treatment within hours. Calling within 24 hours of a spill in North Vancouver gives us the best chance at complete removal, though we successfully treat set-in stains that have been sitting for weeks too.",
  },
  {
    question: "Can you remove pet stains permanently in North Vancouver?",
    answer:
      "Yes, in most cases. Pet urine contains uric acid crystals that can reactivate if not fully removed. We use enzymatic treatments in North Vancouver homes specifically designed to break down these crystals and eliminate odor at the source.",
  },
  {
    question: "What's the drying time after stain removal in North Vancouver?",
    answer:
      "Our extraction method removes 85 to 95% of moisture, so North Vancouver carpet typically dries in 4 to 6 hours after stain treatment, versus 24+ hours after a rental machine.",
  },
  {
    question: "What stains can't be removed from North Vancouver carpets?",
    answer:
      "Bleach or chemical damage, fiber melting from heat, very old dye-based marker or ink, and rust or mineral stains in some cases can't be fully removed. We'll assess your North Vancouver carpet during a free estimate and give you a straight answer rather than promise a result we can't deliver.",
  },
  {
    question: "How much does carpet stain removal cost in North Vancouver?",
    answer:
      "Single stain removal in North Vancouver runs $120 to $180, multiple stains (3+) run $200 to $280, and pet stain plus odor treatment runs $150 to $240. All quotes are free, and new customers can use code MINT26 for 10% off.",
  },
  {
    question: "How often should area rugs be professionally cleaned in North Vancouver?",
    answer:
      "For North Vancouver homes, we recommend professional cleaning every 12 to 18 months for medium-traffic rugs, or annually for high-traffic areas and homes with pets or kids. North Vancouver's damp climate makes regular cleaning especially important to prevent mold and mildew.",
  },
  {
    question: "Do you offer pickup and delivery for area rug cleaning in North Vancouver?",
    answer:
      "Yes. Free pickup and delivery comes with qualifying orders for North Vancouver residents. We handle the logistics; you just schedule the appointment, and we'll confirm during your free estimate call whether your address qualifies.",
  },
  {
    question: "How much does area rug cleaning cost in North Vancouver?",
    answer:
      "Pricing ranges from $1 to $8+ per square foot depending on material. Synthetic rugs in North Vancouver start at $1 to $4/sq ft, wool at $3 to $8/sq ft, and delicate Oriental or silk rugs at $5 to $8+/sq ft. Call 236-688-3248 for a specific quote.",
  },
  {
    question: "Is professional rug cleaning safe for antique and wool rugs in North Vancouver?",
    answer:
      "Yes, when done by trained professionals. Antique and wool rugs need specialized care. Our North Vancouver team tests dyes and inspects for fragile areas before cleaning, adjusting the process to protect heirloom pieces and preserve wool's softness and color.",
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
      <FaqSchema items={faqItems} />
      <BreadcrumbSchema items={[{ name: "Carpet Cleaning", path: "/north-vancouver/carpet-cleaning" }]} />
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
                Carpet in a North Vancouver home works harder than almost
                anywhere else in the region &mdash; rain, humidity, and
                tracked-in moisture settle deep into fibers and padding.
                Mint Sanitary cleans carpet, area rugs, and upholstery
                using hot water extraction, the method manufacturers
                require to keep warranty coverage valid. Eco-friendly
                products, seven-day availability, and a 24-hour
                satisfaction guarantee. Call 236-688-3248 for a free
                estimate or use code MINT26 for 10% off your first service.
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
                <li>Fast-Dry Technology</li>
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Why It Matters
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Why Professional Carpet Cleaning Matters in North Vancouver
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Carpet in a North Vancouver home works harder than
                  carpet almost anywhere else in the region. Rain rolls in
                  off the North Shore mountains for months at a time,
                  humidity stays high, and wet shoes, boots, and paws
                  track moisture in from Lower Lonsdale to Deep Cove. That
                  moisture settles into carpet fibers and padding, and it
                  doesn&apos;t just sit there quietly. It feeds mold,
                  mildew, and dust mites, and it locks in odor that a
                  vacuum can&apos;t touch.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Mint Sanitary cleans carpet, area rugs, and upholstery
                  throughout North Vancouver using hot water extraction,
                  the method carpet manufacturers require to keep warranty
                  coverage valid. We&apos;re a local, background-checked,
                  bonded, and insured team. We use eco-friendly, non-toxic
                  products safe for kids and pets, we&apos;re available
                  seven days a week, and every job comes with a 24-hour
                  satisfaction guarantee. If something needs a second pass
                  after we leave, we&apos;ll come back and fix it at no
                  charge.
                </p>
                <div className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                  <h3 className="font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                    Why It Matters in North Vancouver
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    <li className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; Coastal moisture and rain create ideal conditions for mold and mildew in carpet and padding
                    </li>
                    <li className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; Homes in Lynn Valley, Upper Lonsdale, and Edgemont Village often have wool or natural-fiber rugs that need specialized, gentler care
                    </li>
                    <li className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; Pet urine and outdoor mud track in more here than in drier parts of Greater Vancouver, and both soak into fibers and backing fast
                    </li>
                    <li className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; Professional cleaning extends carpet and rug life by 5 to 10+ years and protects the investment you made in your floors
                    </li>
                    <li className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; Removing trapped allergens improves indoor air quality, which matters more when North Vancouver weather keeps windows closed for months
                    </li>
                  </ul>
                  <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                    Carpet, rugs, and upholstery in North Vancouver homes
                    are exposed to more moisture than almost anywhere else
                    in the region, and DIY cleaning without proper
                    extraction and drying control can make that worse, not
                    better. Professional hot water extraction pulls 85 to
                    95% of moisture back out, versus roughly 50% from a
                    rental machine, so carpet dries faster and stays
                    cleaner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits — Text Left, Image Right ───────────────── */}
        <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                How Professional Carpet Cleaning Benefits Your North Vancouver
                Home
              </h2>
              <div className="mt-6 space-y-5">
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  Regular professional carpet cleaning extends carpet life by
                  years. It removes allergens that trigger asthma and allergies, a
                  concern in North Vancouver&apos;s damp climate where mold spores
                  thrive. Clean carpets also improve air quality by eliminating
                  dust, pet dander, and bacteria trapped in fibers.
                </p>
                <p className="font-body text-[15px] leading-[1.7] text-white/80">
                  One customer in Deep Cove had the same carpet for 8 years and
                  thought it was time for replacement. After one professional steam
                  cleaning, the carpet looked almost new. They saved thousands by
                  restoring what they already had. Our fast-dry extraction
                  technology means carpets are ready to use in just 4 to 12 hours.
                </p>
              </div>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
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
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/80">
                Our Carpet Cleaning Services
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Our Carpet Cleaning Service Types in North Vancouver
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

        {/* ── NEW: Area Rug Cleaning Section ──────────────────── */}
        <section id="area-rug-cleaning" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Area Rug Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Your area rugs deserve more than a quick vacuum. In North
              Vancouver&apos;s damp climate, dirt, allergens, and moisture
              settle deep into rug fiber where a vacuum can&apos;t reach,
              and left alone, that moisture can lead to mold and mildew.
              Professional area rug cleaning removes what&apos;s trapped
              inside and extends the life of a rug by 5 to 10+ years.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Rug Types We Clean in North Vancouver</h3>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {[
                "Persian and Oriental rugs",
                "Wool rugs and silk rugs",
                "Synthetic, Kilim, and tribal rugs",
                "Shag, berber, and textured rugs",
                "Natural fiber rugs, including jute, sisal, and seagrass",
                "Antique and heirloom rugs",
              ].map((item) => (
                <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">&bull; {item}</li>
              ))}
            </ul>
            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              For antique rugs, our team tests dye stability and inspects
              for fragile areas in your North Vancouver home before
              cleaning starts, and adjusts the process to protect the
              piece. A generic carpet cleaner without that training
              shouldn&apos;t be trusted with an heirloom.
            </p>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our 4-Step Area Rug Cleaning Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Free assessment and inspection", body: "We inspect the rug in your North Vancouver home, test for dye stability, identify any damage, and plan the safest approach for that specific rug." },
                { title: "Pickup and transport", body: "For most North Vancouver homes, we roll, wrap, and transport the rug to our facility. Rugs too large or delicate to move safely can be cleaned in-home instead." },
                { title: "Hand-wash cleaning", body: "We pre-spot stains, hand-wash with plant-based non-toxic solutions, use low-moisture extraction, and rinse fully so no residue is left behind." },
                { title: "Controlled drying and return", body: "The rug dries in a climate-controlled facility, typically 3 to 5 days, then goes through a quality check before free delivery back to your North Vancouver home." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pricing for Area Rug Cleaning in North Vancouver</h3>
              <ul className="mt-3 space-y-1.5">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Synthetic rugs: $1 to $4 per square foot</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Wool rugs: $3 to $8 per square foot</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Silk and Oriental rugs: $5 to $8+ per square foot</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Optional add-ons: pet treatment, protectant, rush drying</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                A 9x12 Persian rug covers 108 square feet. At $6 per square
                foot, mid-range Oriental rug pricing, the total runs around
                $650 to $700. Free pickup and delivery comes with
                qualifying orders for North Vancouver residents, so you
                don&apos;t have to lift or transport a heavy rug yourself.
                For an exact quote, call 236-688-3248 or email
                hello@mintsanitary.com. First-time customers can use code
                MINT26 for 10% off.
              </p>
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Caring for Your Rug Between Professional Cleanings</h3>
            <ul className="mt-3 space-y-1.5">
              {[
                "Vacuum regularly with gentle settings on delicate rugs",
                "Blot spills immediately; don't rub them",
                "Use rug pads to prevent slipping and reduce wear",
                "Rotate rugs quarterly to distribute wear evenly",
                "Address stains fast for better outcomes",
              ].map((item) => (
                <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">&bull; {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── NEW: Carpet Steam Cleaning Section ──────────────── */}
        <section id="carpet-steam-cleaning" className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Carpet Steam Cleaning in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              &quot;Steam cleaning&quot; is a nickname. The actual process
              is hot water extraction, and it&apos;s the gold standard for
              deep carpet cleaning in North Vancouver homes. We heat water
              to 200 to 230°F, mix it with an eco-friendly cleaning
              solution, and inject it deep into the carpet under pressure.
              A powerful vacuum extracts the dirty water at the same time,
              leaving carpet sanitized rather than just surface-clean.
              Carpet manufacturers require this method to keep warranty
              coverage valid, so if you want your carpet to stay
              protected, hot water extraction is the method that does it.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">Why Choose Steam Cleaning Over Other Methods</h3>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "The deepest clean available for North Vancouver carpet",
                    "Sanitization power from 200°F+ heat",
                    "Pet-friendly results with enzymatic treatment for urine and odor",
                    "Warranty protection for your carpet investment",
                    "Long-lasting results with no sticky residue left behind",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] leading-[1.65] text-white/80">&bull; {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">What&apos;s Included</h3>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "Professional pre-inspection and carpet fiber assessment",
                    "Eco-friendly pre-treatment of stains and high-traffic zones",
                    "Commercial-grade hot water extraction cleaning",
                    "Spot treatment and light furniture moving",
                    "Detailed drying guidance and a satisfaction guarantee",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] leading-[1.65] text-white/80">&bull; {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">How It Works, Step by Step</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Pre-inspection and assessment", body: "We identify high-traffic zones and stains, and test delicate or wool carpet for colorfastness before treatment." },
                { title: "Targeted pre-treatment", body: "Eco-friendly pre-treatment goes on for 10 to 15 minutes. Pet odors get enzymatic pre-treatment to neutralize urine compounds at the source." },
                { title: "Hot water extraction", body: "Commercial-grade equipment injects hot water and cleaning solution while extracting the dirty water, typically with 2 to 3 passes per section." },
                { title: "Grooming, final extraction, and drying setup", body: "We groom the pile, make final extraction passes, and set up airflow. Most North Vancouver carpet dries within 6 to 12 hours." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#6191e9]/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Commercial equipment applies 3 to 5 times the pressure and
              extraction power of a rental machine, and reaches 200 to
              230°F compared to much lower heat in rental units. North
              Vancouver homeowners who&apos;ve tried a DIY rental first
              tell us the difference in results is not close. Studies show
              hot water extraction reduces dust mites by roughly 87% and
              removes 94%+ of allergens, including pet dander, pollen, and
              mold spores. In North Vancouver&apos;s damp climate, where
              windows stay closed for months at a stretch, that makes a
              real difference for anyone dealing with allergies.
            </p>
            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              A typical 3-bedroom North Vancouver home takes 2 to 4 hours
              to clean, depending on square footage and carpet condition.
              Most carpet is ready for light foot traffic within 6 to 12
              hours; avoid placing heavy furniture back for at least 6
              hours. If you&apos;ve just had new carpet installed, wait 6
              to 8 weeks before your first steam clean so the new-carpet
              sizing treatment can set properly.
            </p>
            <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              <strong className="text-white">Pricing:</strong> Carpet steam
              cleaning in North Vancouver is priced at $60 per room. Final
              cost depends on total rooms, traffic level, stain severity,
              and add-ons like pet odor treatment. Visit our{" "}
              <a href="/rates" className="underline underline-offset-2">
                rates page
              </a>{" "}
              for details.
            </p>
          </div>
        </section>

        {/* ── NEW: Carpet Stain Removal Section ───────────────── */}
        <section id="carpet-stain-removal" className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Carpet Stain Removal in North Vancouver
            </h2>
            <p className="mt-6 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              That wine spill during dinner. The pet accident discovered
              this morning. The mystery coffee stain that&apos;s been
              sitting for weeks. Stains happen in every North Vancouver
              home. When something spills, it doesn&apos;t just sit on the
              surface; it bonds to the carpet fibers through chemical and
              mechanical processes, and the longer it sits, the stronger
              that bond gets. DIY rental machines apply about 20 to 40 PSI
              of extraction force. Professional stain removal in North
              Vancouver uses industrial-grade equipment with 200 to 500
              PSI of extraction power, along with stain chemistry
              knowledge and targeted treatment selection.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">Types of Stains We Treat</h3>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "Beverage stains: wine, coffee, tea, soda, and juice",
                    "Food stains: chocolate, tomato sauce, grease, and oils",
                    "Pet stains: urine, vomit, feces, and odor",
                    "Organic stains: blood, grass, and mud",
                    "Personal care stains: lipstick, nail polish, and marker",
                    "Set-in stains from weeks or months ago",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] leading-[1.65] text-white/80">&bull; {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">Stains That Typically Can&apos;t Be Removed</h3>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "Bleach or chemical damage",
                    "Fiber melting from heat damage",
                    "Very old dye-based marker or ink stains",
                    "Rust and mineral stains, in some cases",
                  ].map((item) => (
                    <li key={item} className="font-body text-[14px] leading-[1.65] text-white/80">&bull; {item}</li>
                  ))}
                </ul>
                <p className="mt-3 font-body text-[14px] leading-[1.65] text-white/80">
                  We&apos;ll assess your stain during a free estimate at
                  your North Vancouver home and give you a straight answer
                  about removal odds. We won&apos;t promise a miracle we
                  can&apos;t deliver.
                </p>
              </div>
            </div>

            <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">Our 5-Step Stain Removal Process</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {[
                { title: "Assessment", body: "We examine the stain under normal and UV light, estimate its age, and check carpet fiber type before choosing a treatment." },
                { title: "Pre-treatment", body: "An eco-friendly pre-spray goes on based on stain chemistry. Pet stains get enzymatic treatment, and we respect proper dwell time." },
                { title: "Extraction", body: "Using professional-grade equipment, we perform hot water or hot carbonated extraction to pull dissolved stain particles out of the carpet." },
                { title: "Secondary spot treatment", body: "Stubborn stains get a secondary treatment formula and focused extraction. Some need two or three applications." },
                { title: "Final inspection", body: "We confirm results under proper lighting and give drying guidance. Optional carpet protectant can be added." },
              ].map((step, i) => (
                <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/20 font-body text-[14px] font-extrabold text-white">{i + 1}</span>
                  <h4 className="mt-3 font-body text-[15px] font-extrabold text-white">{step.title}</h4>
                  <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
              Our extraction method removes 85 to 95% of moisture, so North
              Vancouver carpet typically dries in 4 to 6 hours after stain
              treatment, compared to 24+ hours after a rental machine
              clean. All treatments use eco-friendly, non-toxic products
              safe for kids, pets, and the environment. Enzymatic cleaners
              break down organic matter at a molecular level, and acidic
              solutions for beverage stains neutralize stains without
              harsh chlorine.
            </p>

            <div className="mt-6 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
              <h3 className="font-body text-[17px] font-extrabold text-white">Pricing for Carpet Stain Removal in North Vancouver</h3>
              <ul className="mt-3 space-y-1.5">
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Single stain removal: $120 to $180</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Multiple stains (3+): $200 to $280</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Pet stain and odor treatment: $150 to $240</li>
                <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Optional carpet protectant: $20 to $40</li>
              </ul>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Call 236-688-3248 with stain details and we&apos;ll
                schedule same-day or next-day service where available; we
                work seven days a week. If a treated stain returns, let us
                know and we&apos;ll retreat it at no charge.
              </p>
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
                    href="tel:+12366883248"
                    className="underline underline-offset-2"
                  >
                    236-688-3248
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
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Ready for Cleaner Carpets in North Vancouver?
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] font-body text-[16px] leading-[1.7] text-white/80">
              Call Mint Sanitary at 236-688-3248 or email
              hello@mintsanitary.com. Use promo code MINT26 for 10% off carpet
              cleaning in North Vancouver. Free estimates. 7-day availability.
              Eco-friendly products. Bonded, insured technicians.
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

        {/* ── Wave: White → Blue (before Footer) ─────────────── */}
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
