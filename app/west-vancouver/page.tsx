import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "West Vancouver Cleaning Services | Mint Sanitary",
  description:
    "Mint Sanitary cleans homes and businesses across West Vancouver with eco-friendly products, background-checked staff, and a 24-hour guarantee.",
  alternates: {
    canonical: "/west-vancouver",
  },
};

const neighbourhoods = ["Ambleside", "Dundarave", "British Properties", "Horseshoe Bay", "Caulfeild", "Eagle Harbour", "Cypress Park", "West Bay", "Altamont"];

const residentialServices = [
  { title: "House Cleaning", href: "/services/house-cleaning", body: "Standard recurring and one-time cleaning for West Vancouver houses, condos, and townhouses." },
  { title: "Deep Cleaning", href: "/services/deep-cleaning", body: "A more detailed clean for West Vancouver homes that need extra attention in kitchens, bathrooms, and baseboards." },
  { title: "Move-In Move-Out Cleaning", href: "/services/move-in-move-out-cleaning", body: "Full cleans timed around a move for West Vancouver buyers, sellers, tenants, and landlords." },
  { title: "Vacation Rental Cleaning", href: "/services/vacation-rental-cleaning", body: "Turnover cleaning for West Vancouver short-term rental hosts near Ambleside, Horseshoe Bay, and the waterfront." },
];

const specialtyServices = [
  { title: "Post-Construction Cleaning", href: "/services/post-construction-cleaning", body: "Debris and dust removal after a renovation or build on a West Vancouver property." },
  { title: "Upholstery Cleaning", href: "/services/upholstery-cleaning", body: "Fabric and furniture cleaning for West Vancouver living rooms and offices." },
  { title: "Carpet Cleaning", href: "/services/carpet-cleaning", body: "Deep carpet cleaning for West Vancouver homes, useful in a climate this wet." },
  { title: "Window Cleaning", href: "/services/window-cleaning", body: "Interior and exterior window cleaning for West Vancouver homes, many of which are built around the view." },
  { title: "Pressure Washing", href: "/services/pressure-washing", body: "Exterior cleaning for West Vancouver driveways, decks, and walkways." },
  { title: "Gutter Cleaning", href: "/services/gutter-cleaning", body: "Gutter clearing for West Vancouver homes surrounded by trees and heavy seasonal rain." },
];

const commercialServices = [
  { title: "Commercial Cleaning", href: "/services/commercial-cleaning", body: "Recurring cleaning contracts for West Vancouver businesses." },
  { title: "Office Cleaning", href: "/services/office-cleaning", body: "Scheduled office cleaning for West Vancouver workplaces along Marine Drive and beyond." },
  { title: "Church Cleaning", href: "/services/church-cleaning", body: "Cleaning for West Vancouver places of worship, scheduled around services and events." },
  { title: "Gym Cleaning", href: "/services/gym-cleaning", body: "Cleaning for West Vancouver fitness studios and gyms, including high-touch surfaces." },
  { title: "School Cleaning", href: "/services/school-cleaning", body: "Cleaning for West Vancouver schools and daycares, scheduled outside class hours." },
  { title: "Strata Cleaning", href: "/services/strata-cleaning", body: "Common area cleaning for West Vancouver strata buildings and townhouse complexes." },
];

const whyChoose = [
  { title: "Eco-Friendly Products", body: "Every clean in West Vancouver uses non-toxic, biodegradable products, safe for kids, pets, and anyone sensitive to strong chemical smells." },
  { title: "Background-Checked, Bonded, and Insured Staff", body: "Every cleaner who works in a West Vancouver home or office has passed a background check before we send them out." },
  { title: "7-Day Availability", body: "We book West Vancouver cleans on evenings, weekends, and holidays, not just weekday business hours." },
  { title: "24-Hour Satisfaction Guarantee", body: "If something is missed on a West Vancouver clean, tell us within 24 hours and we will come back and fix it." },
  { title: "Transparent, Published Pricing", body: "West Vancouver customers see the same rate structure listed below before booking, with no hidden add-ons." },
  { title: "Institutional Experience", body: "Mint Sanitary holds cleaning relationships with organizations including Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction. That same standard applies to West Vancouver strata buildings, offices, and commercial accounts." },
  { title: "4.9 Out of 5 Rating", body: "Mint Sanitary holds a 4.9 out of 5 rating across 120+ reviews company-wide, from the same team and standards that serve West Vancouver." },
];

const pricingTiers = [
  { title: "Standard Cleaning", range: "From $220", body: "500 to 600 sq ft, scaling up with size." },
  { title: "Deep Cleaning", range: "From $390", body: "500 to 600 sq ft." },
  { title: "Move-In/Move-Out Cleaning", range: "From $390", body: "500 to 600 sq ft." },
];

const faqItems = [
  { question: "Does Mint Sanitary clean homes in West Vancouver?", answer: "Yes. Mint Sanitary cleans houses, condos, and townhouses throughout West Vancouver, including Ambleside, Dundarave, British Properties, and Horseshoe Bay." },
  { question: "Does Mint Sanitary clean offices and commercial buildings in West Vancouver?", answer: "Yes. We provide commercial cleaning, office cleaning, and strata cleaning for businesses and buildings throughout West Vancouver." },
  { question: "Is Mint Sanitary based in West Vancouver?", answer: "Mint Sanitary is based in North Vancouver, right next door, and serves West Vancouver as part of our regular North Shore coverage area." },
  { question: "How much does house cleaning cost in West Vancouver?", answer: "Standard cleaning for a 500 to 600 sq ft space starts from $220 in West Vancouver, with pricing scaling up based on square footage." },
  { question: "How much does a deep clean cost in West Vancouver?", answer: "Deep cleaning for a 500 to 600 sq ft space in West Vancouver starts from $390." },
  { question: "How much does move-in/move-out cleaning cost in West Vancouver?", answer: "Move-in/move-out cleaning for a 500 to 600 sq ft space in West Vancouver starts from $390." },
  { question: "Does Mint Sanitary charge by the hour in West Vancouver?", answer: "No. West Vancouver cleaning jobs are quoted based on square footage and service type, not by the hour, so pricing is set before the crew arrives." },
  { question: "Are Mint Sanitary's cleaners background-checked before working in West Vancouver homes?", answer: "Yes. Every cleaner sent to a West Vancouver home or office has passed a background check, and our staff is bonded and insured." },
  { question: "What products does Mint Sanitary use in West Vancouver homes?", answer: "We use eco-friendly, non-toxic, biodegradable products in every West Vancouver home and office we clean." },
  { question: "Can I book a recurring cleaning schedule in West Vancouver?", answer: "Yes. West Vancouver customers can book weekly, biweekly, or monthly recurring cleaning, along with one-time cleans." },
  { question: "Does Mint Sanitary offer same-day or short-notice cleaning in West Vancouver?", answer: "Availability in West Vancouver depends on our schedule that week. Call 236-688-3248 to check current openings for short-notice bookings." },
  { question: "What areas of West Vancouver does Mint Sanitary serve?", answer: "We serve West Vancouver neighborhoods including Ambleside, Dundarave, British Properties, Horseshoe Bay, Caulfeild, Eagle Harbour, Cypress Park, West Bay, and Altamont." },
  { question: "Does Mint Sanitary clean vacation rentals in West Vancouver?", answer: "Yes. We provide turnover cleaning for short-term vacation rentals in West Vancouver, including properties near Ambleside and the waterfront." },
  { question: "Does Mint Sanitary offer window cleaning in West Vancouver?", answer: "Yes. Window cleaning is available for West Vancouver homes and offices, inside and out." },
  { question: "Does Mint Sanitary offer pressure washing in West Vancouver?", answer: "Yes. We pressure wash driveways, decks, and walkways for West Vancouver properties." },
  { question: "Does Mint Sanitary offer gutter cleaning in West Vancouver?", answer: "Yes. Gutter cleaning is available for West Vancouver homes, which matters given how much rain and tree debris the North Shore gets each year." },
  { question: "Does Mint Sanitary clean strata buildings in West Vancouver?", answer: "Yes. We provide common area cleaning for West Vancouver strata buildings and townhouse complexes." },
  { question: "Does Mint Sanitary clean schools, churches, or gyms in West Vancouver?", answer: "Yes. We offer school cleaning, church cleaning, and gym cleaning for institutions throughout West Vancouver." },
  { question: "Is there a satisfaction guarantee for West Vancouver cleaning jobs?", answer: "Yes. If anything is missed on a West Vancouver clean, contact us within 24 hours and we will return to fix it at no extra charge." },
  { question: "How do I get a quote for cleaning in West Vancouver?", answer: "Call 236-688-3248, email hello@mintsanitary.com, or visit /rates to get a quote for your West Vancouver home or business." },
  { question: "Is Mint Sanitary insured for work in West Vancouver?", answer: "Yes. Mint Sanitary is bonded and insured for all cleaning work performed in West Vancouver and across our service area." },
  { question: "What discount is available for new West Vancouver customers?", answer: "New customers in West Vancouver save 10% on their first clean using code MINT26." },
];

export default function WestVancouverPage() {
  return (
    <ServicePageLayout
      title="West Vancouver Cleaning Services"
      heroImage="/mint-sanitary-service-van-north-vancouver.jpg"
      heroSubtitle="Residential & Commercial Cleaning Across the North Shore"
      heroIntro="Mint Sanitary is based in North Vancouver and serves West Vancouver as a regular part of our North Shore coverage area, from the waterfront streets of Ambleside to the hillside properties of the British Properties and out toward Horseshoe Bay. We handle one-time deep cleans, recurring residential schedules, and ongoing commercial cleaning contracts, all backed by eco-friendly products, background-checked staff, and a 24-hour satisfaction guarantee. New customers save 10% on their first clean with code MINT26."
      faqItems={faqItems}
      ctaHeading="Book Cleaning Services in West Vancouver"
      ctaBody="Mint Sanitary is ready to add your West Vancouver home or business to our schedule. Call 236-688-3248, email hello@mintsanitary.com, or check current rates before you book."
      ctaHref="/rates"
    >
      {/* ── West Vancouver Overview (white bg) ────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Cleaning West Vancouver Homes and Businesses
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            West Vancouver shares a coastline and a climate with North
            Vancouver, where Mint Sanitary got its start, and the two
            municipalities sit side by side along the North Shore. That
            means the same wet winters, the same salt air near the water,
            and many of the same building types: large hillside homes with
            multiple levels and lots of glass, waterfront properties
            exposed to wind and moisture, and newer condo and townhouse
            developments built into the slopes below Cypress Mountain. Our
            team brings that same North Shore standard to every West
            Vancouver booking, along with the same eco-friendly, non-toxic,
            biodegradable products we use company-wide.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Property types across West Vancouver vary more than in most
            cities we serve, from character homes with hardwood floors and
            ocean views in Dundarave to newer builds near Cypress Park with
            radiant heating and large format tile. We staff and schedule
            around that mix, and every West Vancouver job gets the same
            standards: bonded and insured cleaners, a set checklist, and a
            straightforward guarantee, regardless of property size or
            style.
          </p>
        </div>
      </section>

      {/* ── Neighbourhoods (blue bg) ──────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Neighborhoods We Serve in West Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary provides residential and commercial cleaning
            throughout West Vancouver, including:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {neighbourhoods.map((n) => (
              <span key={n} className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm">
                {n}
              </span>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Don&apos;t see your West Vancouver neighborhood listed? Call
            236-688-3248 or email hello@mintsanitary.com to confirm
            coverage and get a quote.
          </p>
        </div>
      </section>

      {/* ── Services Directory (white bg) ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Cleaning Services Directory for West Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary offers the same full slate of residential,
            specialty, and commercial cleaning services in West Vancouver
            that we provide across the North Shore and Greater Vancouver.
            West Vancouver does not yet have its own dedicated service
            pages, so the links below lead to our general service pages,
            each covering pricing, process, and booking details that apply
            to West Vancouver addresses the same way they apply everywhere
            else we work.
          </p>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Residential Cleaning</h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {residentialServices.map((s) => (
              <a key={s.href} href={s.href} className="rounded-[14px] bg-white/[0.12] p-5 transition-colors hover:bg-white/[0.2]">
                <h4 className="font-body text-[16px] font-extrabold text-white">{s.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{s.body}</p>
              </a>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Specialty Cleaning</h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialtyServices.map((s) => (
              <a key={s.href} href={s.href} className="rounded-[14px] bg-white/[0.12] p-5 transition-colors hover:bg-white/[0.2]">
                <h4 className="font-body text-[16px] font-extrabold text-white">{s.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{s.body}</p>
              </a>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Commercial and Institutional Cleaning</h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {commercialServices.map((s) => (
              <a key={s.href} href={s.href} className="rounded-[14px] bg-white/[0.12] p-5 transition-colors hover:bg-white/[0.2]">
                <h4 className="font-body text-[16px] font-extrabold text-white">{s.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{s.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose (blue bg) ──────────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Why West Vancouver Chooses Mint Sanitary
            </h2>
            <div className="mt-6 space-y-4">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-[14px] bg-white/10 p-4">
                  <h3 className="font-body text-[15px] font-extrabold text-white">{item.title}</h3>
                  <p className="mt-1 font-body text-[14px] leading-[1.65] text-white/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full overflow-hidden rounded-[20px]">
            <img
              src="/mint-sanitary-team-north-vancouver.jpg"
              alt="Mint Sanitary cleaning team that services West Vancouver and the North Shore"
              className="h-full min-h-[400px] w-full object-cover lg:min-h-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Pricing (white bg) ────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            West Vancouver Cleaning Prices
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing for West Vancouver follows the same published rates we
            use across our service area. Costs scale with square footage,
            so a larger West Vancouver home costs more than a small condo,
            but every quote starts from these published tiers.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{tier.title}</h3>
                <p className="mt-2 font-display-reg text-[22px] text-white">{tier.range}</p>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">{tier.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            For an exact quote on a West Vancouver property, call
            236-688-3248, email hello@mintsanitary.com, or visit{" "}
            <a href="/rates" className="underline underline-offset-2">
              our rates page
            </a>
            .
          </p>
          <img
            src="/mint-service-area-map.png"
            alt="Map of Mint Sanitary's Greater Vancouver service area including West Vancouver"
            className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
            loading="lazy"
          />
        </div>
      </section>
    </ServicePageLayout>
  );
}
