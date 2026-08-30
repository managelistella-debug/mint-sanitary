import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Cleaning Services in Vancouver, BC | Mint Sanitary",
  description:
    "Mint Sanitary brings eco-friendly, background-checked cleaning to Vancouver homes and businesses. 7-day availability, 24-hour guarantee. Get a quote.",
  alternates: {
    canonical: "/vancouver",
  },
};

const neighbourhoods = ["Kitsilano", "Yaletown", "Downtown Vancouver", "West End", "Mount Pleasant", "Kerrisdale", "Point Grey", "Commercial Drive", "Fairview", "Dunbar"];

const residentialServices = [
  { title: "House Cleaning", href: "/vancouver/house-cleaning", body: "Regular cleaning for Vancouver condos, apartments, and houses, scheduled weekly, biweekly, or monthly." },
  { title: "Deep Cleaning", href: "/vancouver/deep-cleaning", body: "A thorough top-to-bottom clean for a Vancouver home that needs more attention than a standard visit, whether it's a first booking or a seasonal reset." },
  { title: "Move-In Move-Out Cleaning", href: "/vancouver/move-in-move-out-cleaning", body: "Empty-unit cleaning for Vancouver renters, owners, landlords, and property managers handling a turnover." },
  { title: "Vacation Rental Cleaning", href: "/vancouver/vacation-rental-cleaning", body: "Turnover cleaning for short-term rental units in Vancouver, built around guest checkout and check-in windows." },
];

const specialtyServices = [
  { title: "Post-Construction Cleaning", href: "/vancouver/post-construction-cleaning", body: "Dust and debris removal for Vancouver renovation and build sites before occupancy." },
  { title: "Upholstery Cleaning", href: "/vancouver/upholstery-cleaning", body: "Fabric and furniture cleaning for Vancouver homes and offices." },
  { title: "Carpet Cleaning", href: "/vancouver/carpet-cleaning", body: "Carpet cleaning for Vancouver condos, houses, and commercial units." },
  { title: "Window Cleaning", href: "/vancouver/window-cleaning", body: "Interior and exterior window cleaning for Vancouver homes and low-rise buildings." },
  { title: "Pressure Washing", href: "/vancouver/pressure-washing", body: "Exterior surface cleaning for Vancouver driveways, patios, and walkways." },
  { title: "Gutter Cleaning", href: "/vancouver/gutter-cleaning", body: "Gutter clearing for Vancouver houses ahead of the wet season." },
  { title: "Drapes and Curtains Cleaning", href: "/vancouver/drapes-curtains-cleaning", body: "In-home or drop-off cleaning for drapes and curtains in Vancouver homes and condos." },
  { title: "Steam Cleaning", href: "/vancouver/steam-cleaning", body: "Chemical-free steam cleaning for Vancouver homes and offices." },
];

const commercialServices = [
  { title: "Commercial Cleaning", href: "/vancouver/commercial-cleaning", body: "Scheduled cleaning for Vancouver businesses of any size." },
  { title: "Office Cleaning", href: "/vancouver/office-cleaning", body: "Daily, weekly, or after-hours cleaning for Vancouver offices." },
  { title: "Church Cleaning", href: "/vancouver/church-cleaning", body: "Cleaning for Vancouver places of worship, scheduled around services and events." },
  { title: "Gym Cleaning", href: "/vancouver/gym-cleaning", body: "Sanitizing and cleaning for Vancouver gyms and fitness studios." },
  { title: "School Cleaning", href: "/vancouver/school-cleaning", body: "Cleaning for Vancouver schools and childcare facilities, scheduled around class hours." },
  { title: "Strata Cleaning", href: "/vancouver/strata-cleaning", body: "Common area cleaning for Vancouver strata buildings and condo corporations." },
  { title: "Restaurant Cleaning", href: "/vancouver/restaurant-cleaning", body: "Kitchen and hood cleaning for Vancouver restaurants." },
  { title: "Industrial Cleaning", href: "/vancouver/industrial-cleaning", body: "WHMIS-compliant cleaning for Vancouver warehouses and light-industrial facilities." },
];

const whyChoose = [
  { title: "Eco-Friendly Products for Shared-Air Buildings", body: "Vancouver's condo towers and multi-unit buildings share hallways, ventilation, and elevators. Mint Sanitary uses non-toxic, biodegradable cleaning products in every job, which matters in buildings where cleaning fumes can travel between units." },
  { title: "Background-Checked Staff for Building Access", body: "Getting into a Vancouver strata building or office often means signing in with concierge, a property manager, or a front desk. Every Mint Sanitary team member is bonded, insured, and background-checked before they're sent to a job." },
  { title: "7-Day Availability", body: "Mint Sanitary books cleaning appointments seven days a week, including evenings, weekends, and holidays, to work around the schedules of Vancouver residents and businesses." },
  { title: "Transparent, Flat-Rate Pricing", body: "Vancouver customers get a price based on square footage and service type before booking, not an estimate that changes once the crew arrives." },
  { title: "Real Institutional Relationships", body: "Mint Sanitary maintains ongoing commercial relationships with regional organizations, including Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction. These are company-wide relationships across the areas Mint Sanitary serves, not claims tied to any single city, but they reflect the same standard applied to residential and commercial bookings in Vancouver." },
  { title: "24-Hour Satisfaction Guarantee", body: "If a Vancouver customer isn't satisfied with a clean, Mint Sanitary addresses it within 24 hours of the appointment." },
];

const pricingTiers = [
  { title: "Standard Cleaning", range: "From $220", body: "500 to 600 square feet." },
  { title: "Deep Cleaning", range: "From $390", body: "500 to 600 square feet." },
  { title: "Move-In/Move-Out Cleaning", range: "From $390", body: "500 to 600 square feet." },
];

const faqItems = [
  { question: "Does Mint Sanitary clean in Vancouver?", answer: "Yes. Vancouver is part of Mint Sanitary's regular Greater Vancouver coverage area, alongside North Vancouver, West Vancouver, Burnaby, New Westminster, and Maple Ridge." },
  { question: "What areas of Vancouver does Mint Sanitary serve?", answer: "Mint Sanitary cleans homes and businesses throughout Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Call 236-688-3248 to confirm coverage for a specific Vancouver address." },
  { question: "Is Mint Sanitary based in Vancouver?", answer: "No. Mint Sanitary's home base and trucks are in North Vancouver, across the Burrard Inlet. Vancouver is served as a regular part of the company's coverage area rather than the home base." },
  { question: "How quickly can Mint Sanitary get to a home in Vancouver?", answer: "Response times in Vancouver depend on current bookings and bridge or tunnel travel from North Vancouver. Same-day availability in Vancouver is not guaranteed the way it is closer to home base, so calling 236-688-3248 in advance is the best way to check open slots." },
  { question: "What cleaning products does Mint Sanitary use in Vancouver homes?", answer: "Mint Sanitary uses eco-friendly, non-toxic, biodegradable cleaning products for every job in Vancouver, the same products used company-wide." },
  { question: "Are Mint Sanitary's Vancouver cleaners background-checked?", answer: "Yes. Every cleaner sent to a job in Vancouver is bonded, insured, and background-checked before joining the team." },
  { question: "Does Mint Sanitary clean condos in downtown Vancouver?", answer: "Yes. Mint Sanitary cleans condos throughout downtown Vancouver and surrounding neighbourhoods, and crews are accustomed to concierge sign-in and elevator booking procedures common in high-rise buildings." },
  { question: "Can Mint Sanitary clean strata buildings in Vancouver?", answer: "Yes. Strata cleaning is available for Vancouver condo corporations and multi-unit buildings, covering common areas on a scheduled basis." },
  { question: "Does Mint Sanitary offer move-in/move-out cleaning in Vancouver?", answer: "Yes. Move-in and move-out cleaning is available for Vancouver renters, owners, landlords, and property managers handling a unit turnover." },
  { question: "Does Mint Sanitary clean Airbnb and vacation rentals in Vancouver?", answer: "Yes. Vacation rental cleaning is available for short-term rental units in Vancouver and is scheduled around guest checkout and check-in windows." },
  { question: "How much does house cleaning cost in Vancouver?", answer: "Standard cleaning pricing in Vancouver starts from $220 for a 500 to 600 square foot home, with pricing scaling up for larger spaces." },
  { question: "How much does a deep clean cost in Vancouver?", answer: "Deep cleaning pricing in Vancouver starts from $390 for a 500 to 600 square foot home, the same published rate used across Mint Sanitary's service area." },
  { question: "Does Mint Sanitary offer recurring cleaning schedules in Vancouver?", answer: "Yes. Vancouver customers can book weekly, biweekly, or monthly recurring cleaning in addition to one-time visits." },
  { question: "Does Mint Sanitary work weekends and holidays in Vancouver?", answer: "Yes. Mint Sanitary books appointments seven days a week, including evenings, weekends, and holidays, for customers in Vancouver." },
  { question: "Is there a discount for new customers in Vancouver?", answer: "Yes. New customers in Vancouver save 10% on their first clean with code MINT26." },
  { question: "Does Mint Sanitary offer commercial cleaning in Vancouver?", answer: "Yes. Commercial cleaning is available for Vancouver businesses, with schedules built around business hours or after-hours access." },
  { question: "Does Mint Sanitary clean offices in Vancouver?", answer: "Yes. Office cleaning is available for Vancouver businesses on a daily, weekly, or custom schedule." },
  { question: "Does Mint Sanitary have institutional clients in the Vancouver region?", answer: "Mint Sanitary holds ongoing commercial relationships with regional organizations, including Vancouver Coastal Health, BC Hydro, Arbutus Point Developments Ltd., and Powers Construction. These relationships are company-wide rather than exclusive to any single city, but they're part of the same standard applied to bookings in Vancouver." },
  { question: "What is Mint Sanitary's satisfaction guarantee for Vancouver customers?", answer: "Every clean in Vancouver is covered by a 24-hour satisfaction guarantee. If something was missed, contact Mint Sanitary within 24 hours and it will be addressed." },
  { question: "Is Mint Sanitary insured for jobs in Vancouver?", answer: "Yes. Mint Sanitary is bonded and insured for all residential and commercial work, including jobs in Vancouver." },
  { question: "Does Mint Sanitary offer carpet or upholstery cleaning in Vancouver?", answer: "Yes. Carpet cleaning and upholstery cleaning are both available for homes and offices in Vancouver." },
  { question: "How do I book a cleaning in Vancouver?", answer: "Call 236-688-3248, email hello@mintsanitary.com, or request a quote through the rates page to book a cleaning in Vancouver." },
];

export default function VancouverPage() {
  return (
    <ServicePageLayout
      title="Cleaning Services in Vancouver, BC"
      heroImage="/mint-sanitary-service-van-north-vancouver.jpg"
      heroSubtitle="Residential & Commercial Cleaning Across Vancouver"
      heroIntro="Mint Sanitary is based across the Burrard Inlet in North Vancouver and serves the city of Vancouver as a regular part of our Greater Vancouver coverage. Our crews clean condos in Yaletown, character homes in Kitsilano, and offices downtown to the same standard we use everywhere else: non-toxic, biodegradable products, bonded and background-checked staff, and a straightforward 24-hour satisfaction guarantee. Book a one-time deep clean, set up a recurring schedule, or arrange ongoing commercial service. New customers save 10% on their first clean with code MINT26."
      faqItems={faqItems}
      ctaHeading="Book Cleaning Service in Vancouver"
      ctaBody="Mint Sanitary covers Vancouver as part of its regular Greater Vancouver service area, with the same eco-friendly products, background-checked staff, and 24-hour satisfaction guarantee used across every job. New customers save 10% on their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Vancouver Overview (white bg) ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Vancouver&apos;s Neighbourhoods and Housing Types
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Vancouver is a dense, varied city split between high-rise condo
            towers downtown and low-rise character homes in neighbourhoods
            just a few kilometres away from each other. A one-bedroom condo
            in Yaletown calls for a different cleaning approach than a
            character home in Kitsilano or Mount Pleasant, and a strata
            building has different access rules than a single-family
            house. Mint Sanitary crews are used to working around building
            concierge desks, elevator booking windows, visitor parking
            limits, and strata cleaning schedules, along with the more
            straightforward driveway access that homes across the Burrard
            Inlet in North Vancouver and West Vancouver typically offer.
          </p>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Vancouver&apos;s location, bordered by water on three sides and
            connected to the North Shore by two bridges and a passenger
            ferry, also shapes scheduling. Crews coming from our North
            Vancouver base plan around bridge and tunnel traffic patterns
            so appointment windows in Vancouver stay realistic rather than
            optimistic.
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
            Vancouver Neighbourhoods We Serve
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary provides residential and commercial cleaning
            throughout Vancouver, including:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {neighbourhoods.map((n) => (
              <span key={n} className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white backdrop-blur-sm">
                {n}
              </span>
            ))}
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            If your Vancouver address isn&apos;t listed above, call
            236-688-3248 or email hello@mintsanitary.com to confirm
            coverage and availability.
          </p>
        </div>
      </section>

      {/* ── Services Directory (white bg) ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Cleaning Services Directory for Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary&apos;s full service list is available to
            customers throughout Vancouver. Each link below leads to a
            dedicated Vancouver page with pricing, process details, and
            neighbourhood coverage specific to that service.
          </p>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Residential Cleaning in Vancouver</h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {residentialServices.map((s) => (
              <a key={s.href} href={s.href} className="rounded-[14px] bg-white/[0.12] p-5 transition-colors hover:bg-white/[0.2]">
                <h4 className="font-body text-[16px] font-extrabold text-white">{s.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{s.body}</p>
              </a>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Specialty Cleaning in Vancouver</h3>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {specialtyServices.map((s) => (
              <a key={s.href} href={s.href} className="rounded-[14px] bg-white/[0.12] p-5 transition-colors hover:bg-white/[0.2]">
                <h4 className="font-body text-[16px] font-extrabold text-white">{s.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{s.body}</p>
              </a>
            ))}
          </div>

          <h3 className="mt-10 font-body text-[20px] font-extrabold text-white">Commercial and Institutional Cleaning in Vancouver</h3>
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
              Why Vancouver Customers Choose Mint Sanitary
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
              alt="Mint Sanitary cleaning team that services Vancouver and Greater Vancouver"
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
            Cleaning Prices in Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Mint Sanitary uses the same published pricing across every
            city it serves, including Vancouver. Pricing is based on
            square footage and scales up for larger spaces.
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
            Commercial, strata, and specialty services in Vancouver, such
            as carpet cleaning, window cleaning, or post-construction
            cleanup, are quoted based on the scope of the job. For a full
            breakdown by square footage, visit the{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>{" "}
            or call 236-688-3248.
          </p>
          <img
            src="/mint-service-area-map.png"
            alt="Map of Mint Sanitary's Greater Vancouver service area including Vancouver"
            className="mx-auto mt-8 w-full max-w-[560px] rounded-[20px]"
            loading="lazy"
          />
        </div>
      </section>
    </ServicePageLayout>
  );
}
