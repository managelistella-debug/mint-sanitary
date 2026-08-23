import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver-original
// so the CMS version at /north-vancouver can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Cleaning Services in North Vancouver | Mint Sanitary",
  description:
    "Mint Sanitary is North Vancouver's home base cleaning company. Serving Lonsdale, Lynn Valley, Deep Cove and more. Free quotes, same-day availability.",
  robots: { index: false, follow: false },
};

const neighborhoods = [
  "Lower Lonsdale",
  "Upper Lonsdale",
  "Lynn Valley",
  "Deep Cove",
  "Edgemont Village",
  "Seymour Heights",
  "Norgate",
  "Pemberton Heights",
  "Capilano",
  "Dollarton",
  "Blueridge",
];

const residentialLinks = [
  {
    label: "House cleaning in North Vancouver",
    href: "/north-vancouver/house-cleaning",
    desc: "regular weekly, biweekly, or monthly cleaning for North Vancouver homes and condos.",
  },
  {
    label: "Deep cleaning in North Vancouver",
    href: "/north-vancouver/deep-cleaning",
    desc: "a top-to-bottom clean that tackles baseboards, inside appliances, and buildup regular cleaning skips.",
  },
  {
    label: "Move-in move-out cleaning in North Vancouver",
    href: "/north-vancouver/move-in-move-out-cleaning",
    desc: "detailed cleaning for North Vancouver's active rental market.",
  },
  {
    label: "Vacation rental cleaning in North Vancouver",
    href: "/north-vancouver/vacation-rental-cleaning",
    desc: "fast turnovers for short-term rental hosts.",
  },
];

const specialtyLinks = [
  {
    label: "Post-construction cleaning in North Vancouver",
    href: "/north-vancouver/post-construction-cleaning",
    desc: "dust and debris removal after a renovation or build.",
  },
  {
    label: "Upholstery cleaning in North Vancouver",
    href: "/north-vancouver/upholstery-cleaning",
    desc: "deep cleaning for sofas, chairs, and fabric surfaces.",
  },
  {
    label: "Carpet cleaning in North Vancouver",
    href: "/north-vancouver/carpet-cleaning",
    desc: "lifts dirt and moisture North Vancouver's wet climate tracks indoors.",
  },
  {
    label: "Window cleaning in North Vancouver",
    href: "/north-vancouver/window-cleaning",
    desc: "streak-free interior and exterior window cleaning.",
  },
  {
    label: "Pressure washing in North Vancouver",
    href: "/north-vancouver/pressure-washing",
    desc: "clears moss and grime off driveways, decks, and siding.",
  },
  {
    label: "Gutter cleaning in North Vancouver",
    href: "/north-vancouver/gutter-cleaning",
    desc: "keeps water flowing away from your home.",
  },
];

const commercialLinks = [
  { label: "Commercial cleaning in North Vancouver", href: "/north-vancouver/commercial-cleaning" },
  { label: "Office cleaning in North Vancouver", href: "/north-vancouver/office-cleaning" },
  { label: "Church cleaning in North Vancouver", href: "/north-vancouver/church-cleaning" },
  { label: "Gym cleaning in North Vancouver", href: "/north-vancouver/gym-cleaning" },
  { label: "School cleaning in North Vancouver", href: "/north-vancouver/school-cleaning" },
  { label: "Strata cleaning in North Vancouver", href: "/north-vancouver/strata-cleaning" },
];

const whyChooseItems = [
  {
    title: "Eco-friendly and safe",
    body: "We use plant-based, non-toxic products safe for kids and pets, paired with HEPA-filter vacuums that pull allergens and fine dust out of carpets and air. One Lynn Valley client with young kids specifically praised how the team used eco-friendly products throughout a deep clean of her home.",
  },
  {
    title: "Background-checked and insured",
    body: "Every team member working in North Vancouver is background-checked, bonded, and insured.",
  },
  {
    title: "Built for North Vancouver's housing mix",
    body: "Between Lynn Valley and Edgemont Village's older character homes and Lower Lonsdale's newer condo towers, North Vancouver properties vary a lot. Our crews adjust their approach to fit each one, and we know the wear patterns that come with North Vancouver's wet winters and tracked-in mud.",
  },
  {
    title: "Consistency you can count on",
    body: "We assign the same team to your home whenever possible. A recurring biweekly client has praised exactly this kind of consistency, along with fair, predictable pricing.",
  },
  {
    title: "A rental market that moves fast",
    body: "North Vancouver has a large tenant population turning over units regularly, and our move-in move-out cleaning is built for that pace. One recent move-out client told us they got their full damage deposit back after our clean.",
  },
  {
    title: "7-day availability",
    body: "We work evenings, weekends, and holidays, with same-day availability that's strongest right here since it's our home base.",
  },
  {
    title: "No surprises",
    body: "Every quote is free, transparent, and comes with no hidden fees or long-term contracts.",
  },
  {
    title: "Trusted by local institutions",
    body: "We've cleaned for organizations like Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction, alongside hundreds of North Vancouver households.",
  },
];

const pricingRows = [
  { label: "Standard Cleaning", detail: "500–600 sq ft: from $220. Scales up with size." },
  { label: "Deep Cleaning", detail: "500–600 sq ft: from $390." },
  { label: "Move-In / Move-Out Cleaning", detail: "500–600 sq ft: from $390." },
];

const faqItems = [
  {
    question: "How much does house cleaning cost in North Vancouver?",
    answer:
      "Standard house cleaning in North Vancouver starts around $220 for a 500 to 600 square foot home and increases with size, since most North Vancouver jobs are priced by square footage. Visit our rates page for exact numbers.",
  },
  {
    question: "What areas of North Vancouver do you serve?",
    answer:
      "We serve all of North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge. If you're outside these neighborhoods, contact us to check availability.",
  },
  {
    question: "Do you offer same-day cleaning in North Vancouver?",
    answer:
      "Yes. North Vancouver is our home base, so it's where we have the fastest response times and the best chance of same-day availability. Call us or request a quote to check what's open today.",
  },
  {
    question: "Are your cleaning products safe for kids and pets in North Vancouver homes?",
    answer:
      "Yes. We use plant-based, non-toxic products in every North Vancouver home we clean, along with HEPA-filter vacuums that help with dust and allergens.",
  },
  {
    question: "What happens if I'm not happy with my clean in North Vancouver?",
    answer:
      "We back every North Vancouver clean with a 24-hour satisfaction guarantee. Contact us within 24 hours of your appointment and we'll come back to fix it at no charge.",
  },
  {
    question: "Do you clean both homes and businesses in North Vancouver?",
    answer:
      "Yes. We handle residential cleaning like house cleaning and deep cleaning, plus commercial cleaning for North Vancouver offices, gyms, schools, churches, and strata buildings.",
  },
  {
    question: "Do you offer carpet cleaning in North Vancouver?",
    answer:
      "Yes. Our carpet cleaning in North Vancouver removes dirt, stains, and the extra moisture that tends to get tracked indoors during the region's wet months.",
  },
  {
    question: "Do you offer window cleaning in North Vancouver?",
    answer:
      "Yes. We provide interior and exterior window cleaning across North Vancouver, helpful for homes with mountain or water views worth keeping clear.",
  },
  {
    question: "Do you offer pressure washing in North Vancouver?",
    answer:
      "Yes. Pressure washing in North Vancouver clears moss, algae, and grime off driveways, decks, and siding, all common problems given the amount of rain the North Shore gets.",
  },
  {
    question: "Do you offer gutter cleaning in North Vancouver?",
    answer:
      "Yes. Gutter cleaning in North Vancouver is one of our most requested services heading into the fall and winter, when heavy rain can back up clogged gutters and cause water damage.",
  },
  {
    question: "Do you clean commercial buildings in North Vancouver?",
    answer:
      "Yes. We offer commercial cleaning throughout North Vancouver for offices, gyms, schools, churches, and strata-managed buildings.",
  },
  {
    question: "How do I book a cleaning in North Vancouver?",
    answer:
      "Booking a North Vancouver cleaning starts with a free, no-obligation quote through our rates page or by calling 236-688-3248.",
  },
  {
    question: "Is there a discount for first-time customers in North Vancouver?",
    answer:
      "Yes. New North Vancouver customers save 10% off their first clean using code MINT26 at booking.",
  },
  {
    question: "Will I get the same cleaning team each time in North Vancouver?",
    answer: "We assign the same team to your North Vancouver home or business whenever possible.",
  },
  {
    question: "Do you clean apartments and condos in Lower Lonsdale?",
    answer:
      "Yes. Lower Lonsdale's condo towers are a regular part of our North Vancouver route. One Lower Lonsdale office cleaning client has specifically praised our punctuality.",
  },
  {
    question: "Do you serve Deep Cove and Lynn Valley?",
    answer:
      "Yes. Deep Cove and Lynn Valley are both part of our standard North Vancouver service area. We've handled everything from a Lynn Valley deep clean with eco-friendly products to post-construction cleanup after a Deep Cove renovation.",
  },
  {
    question: "Do you clean character homes in Edgemont Village?",
    answer:
      "Yes. Edgemont Village has a lot of older character homes, and our North Vancouver crews are used to working around the layouts, trim, and finishes that come with them.",
  },
  {
    question: "Do you offer move-in and move-out cleaning in North Vancouver?",
    answer:
      "Yes. Move-in and move-out cleaning is one of our most requested services in North Vancouver. Pricing for a 500 to 600 square foot home starts around $390.",
  },
  {
    question: "Do you clean vacation rentals in North Vancouver?",
    answer: "Yes. We offer fast, reliable turnover cleaning for vacation rental hosts across North Vancouver.",
  },
  {
    question: "Do you offer post-construction cleanup in North Vancouver?",
    answer:
      "Yes. Post-construction cleaning in North Vancouver clears dust, debris, and residue left behind after a renovation or new build.",
  },
  {
    question: "Are your North Vancouver cleaners background-checked and insured?",
    answer: "Yes. Every member of our North Vancouver cleaning team is background-checked, bonded, and insured.",
  },
  {
    question: "Do you offer evening or weekend cleaning in North Vancouver?",
    answer: "Yes. We're available 7 days a week in North Vancouver, including evenings and holidays.",
  },
  {
    question: "What's included in a deep clean in North Vancouver?",
    answer:
      "A deep clean in North Vancouver covers everything a standard clean does, plus detailed work like baseboards, inside appliances, and buildup in areas that don't get touched during regular visits.",
  },
  {
    question: "Do you require long-term contracts for North Vancouver cleaning?",
    answer:
      "No. Every quote is transparent with no hidden fees, and you can adjust or cancel your schedule as your needs change.",
  },
  {
    question: "Does Mint Sanitary serve areas near North Vancouver, like West Vancouver?",
    answer: "Yes. Alongside North Vancouver, we also serve West Vancouver, Vancouver, Burnaby, and other parts of Greater Vancouver.",
  },
];

export default function NorthVancouverPage() {
  return (
    <ServicePageLayout
      title="Cleaning Services in North Vancouver"
      heroImage="/mint-sanitary-professional-cleaning-north-vancouver-hero.jpg"
      heroSubtitle="North Vancouver's Home Base Cleaning Company"
      heroIntro="Mint Sanitary started in North Vancouver, and it's still where we do most of our work. Our trucks are based here, our fastest response times are here, and our same-day availability is strongest here. Whether you need a one-time deep clean, a recurring schedule, or ongoing commercial cleaning, we handle it with eco-friendly products, background-checked staff, and a straightforward 24-hour satisfaction guarantee. New customers save 10% on their first clean with code MINT26."
      faqItems={faqItems}
      ctaHeading="Ready to Book a Cleaning in North Vancouver?"
      ctaBody="Get a free, no-obligation quote on our rates page, or call us directly at 236-688-3248. You can also reach us anytime at hello@mintsanitary.com."
      ctaHref="/rates"
    >
      {/* ── Local Knowledge Intro (white bg) ─────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            We know the difference between a Lower Lonsdale condo tower and a
            character home in Edgemont Village, because we clean both every
            week. We know North Vancouver&apos;s rain finds its way into
            entryways and tracks mud across hardwood floors from October
            through April. We know Lynn Valley&apos;s older homes have
            different needs than the newer builds near the waterfront. That
            local knowledge shapes how we clean, not just where we show up.
          </p>
        </div>
      </section>

      {/* ── Neighborhoods (f4f8ff bg) ────────────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Neighborhoods We Serve in North Vancouver
            </h2>
            <p className="mx-auto mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Mint Sanitary covers all of North Vancouver, from the
              waterfront up into the hillside communities. Lower
              Lonsdale&apos;s condo towers and Upper Lonsdale&apos;s family
              homes both fall inside our regular route, so scheduling
              doesn&apos;t add a travel surcharge or push your booking to
              next week. Deep Cove&apos;s tucked-away streets and Lynn
              Valley&apos;s tree-lined neighborhoods get the same punctual,
              background-checked crews as anywhere else on the North Shore.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              If your street isn&apos;t listed above, reach out anyway. We
              also serve West Vancouver, Vancouver, Burnaby, and the wider
              Greater Vancouver area. Check our{" "}
              <a href="/service-areas" className="underline underline-offset-2">
                service areas page
              </a>{" "}
              for the full coverage map.
            </p>
            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Cleaning Services Directory (white bg) ───────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Cleaning Services in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary offers a full range of residential and commercial
            cleaning services throughout North Vancouver. Every service
            below has its own dedicated page with pricing details, what&apos;s
            included, and booking information.
          </p>

          <h3 className="mt-10 font-body text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
            Residential Cleaning
          </h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {residentialLinks.map((link) => (
              <div key={link.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h4 className="font-body text-[16px] font-extrabold text-white">
                  <a href={link.href} className="underline decoration-[#66DAD5] underline-offset-2">
                    {link.label}
                  </a>
                </h4>
                <p className="mt-2 font-body text-[14px] leading-[1.7] text-white/80">{link.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
            Specialty Cleaning
          </h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialtyLinks.map((link) => (
              <div key={link.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h4 className="font-body text-[16px] font-extrabold text-white">
                  <a href={link.href} className="underline decoration-[#66DAD5] underline-offset-2">
                    {link.label}
                  </a>
                </h4>
                <p className="mt-2 font-body text-[14px] leading-[1.7] text-white/80">{link.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[13px] font-extrabold uppercase tracking-[0.5px] text-white">
            Commercial and Institutional Cleaning
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {commercialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full bg-white/[0.12] px-5 py-2.5 font-body text-[14px] font-semibold text-white underline decoration-[#66DAD5] underline-offset-2 transition-colors hover:bg-white/[0.2]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why North Vancouver Chooses Mint (AccordionWithImage) ── */}
      <AccordionWithImage
        heading="Why North Vancouver Homeowners and Businesses Choose Mint Sanitary"
        intro="We currently hold a 4.9 out of 5 rating across more than 120 Google reviews, including feedback from an office cleaning client in Lower Lonsdale who praised our punctuality, and a homeowner in Deep Cove who hired us for post-construction cleanup after a renovation."
        image="/mint-sanitary-team-north-vancouver.jpg"
        imageAlt="Mint Sanitary cleaning team in North Vancouver"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Pricing Overview (white bg) ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What to Expect: Pricing for Cleaning in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for cleaning in North Vancouver depends mostly on your
            property&apos;s size and the scope of the job. Most jobs get
            priced by square footage rather than a flat rate.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {pricingRows.map((row) => (
              <div key={row.label} className="rounded-[14px] bg-white/[0.12] p-5 text-center">
                <p className="font-body text-[15px] font-extrabold text-white">{row.label}</p>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{row.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            For the full breakdown, visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>
            .
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
