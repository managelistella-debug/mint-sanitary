import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "House Cleaning Service Across Greater Vancouver | Mint Sanitary",
  description:
    "Professional house cleaning in North Vancouver, West Vancouver, Vancouver, Burnaby, and Greater Vancouver. 7-day availability. Free estimates. (604) 671-6252.",
};

const whyChooseItems: { title: string; body: string; image: string }[] = [
  {
    title: "7-Day Availability Across All Areas",
    body: "No matter which part of Greater Vancouver you call home, we have cleaning slots available. North Vancouver gets our fastest response times as our home base, but West Vancouver, Vancouver, and Burnaby receive the same dedication to scheduling flexibility.",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
  },
  {
    title: "Eco-Friendly Cleaning Standard",
    body: "We use only non-toxic, environmentally responsible cleaning products across every service area. Your home gets clean without harsh chemicals, and the local waterways benefit too.",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
  },
  {
    title: "Free Estimates for All Locations",
    body: "Call, email, or request a quote online. We'll assess your specific space and provide a transparent estimate with no pressure and no surprises.",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
  },
  {
    title: "Residential, Commercial, and Industrial Expertise",
    body: "We handle diverse cleaning needs, covering homes, office spaces, and industrial facilities, across Greater Vancouver. We scale our approach to match your property size and requirements.",
    image: "/office-cleaning-north-vancouver-workspace.jpg",
  },
  {
    title: "Local Business, Professional Results",
    body: "We're North Vancouver-based and committed to serving our community. That means you're working with people who understand local neighborhoods and value long-term relationships.",
    image: "/mint-sanitary-team-north-vancouver.jpg",
  },
];

const cleaningServices: { text: string; image: string }[] = [
  { text: "Weekly cleaning for consistent maintenance", image: "/recurring-cleaning-kitchen-result-north-vancouver.jpg" },
  { text: "Bi-weekly cleaning for moderate-traffic homes", image: "/recurring-cleaning-hepa-vacuum-north-vancouver.jpg" },
  { text: "Monthly cleaning for lighter upkeep", image: "/standard-cleaning-kitchen-north-vancouver.jpg" },
  { text: "Deep or spring cleaning for seasonal refreshes", image: "/deep-cleaned-kitchen-north-vancouver.jpg" },
  { text: "Move-in or move-out cleaning for transitions", image: "/move-out-cleaning-north-vancouver-living-room.jpg" },
  { text: "Post-renovation or post-construction cleaning", image: "/post-construction-cleaning-north-vancouver.jpg" },
  { text: "Commercial office cleaning for businesses", image: "/office-desk-disinfection-north-vancouver.jpg" },
  { text: "Industrial cleaning for specialized facilities", image: "/commercial-kitchen-cleaning-north-vancouver.jpg" },
  { text: "Carpet and upholstery care", image: "/freshly-cleaned-carpets-north-vancouver.jpg" },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question:
      "Does Mint Sanitary service my specific neighborhood in North Vancouver?",
    answer:
      "We serve all of North Vancouver including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. If you're in North Vancouver and unsure, contact us at (604) 671-6252 or hello@mintsanitary.com to confirm.",
  },
  {
    question: "Is there a travel fee for areas outside North Vancouver?",
    answer:
      "We include travel time in our estimates for all standard service areas including West Vancouver, Vancouver, Burnaby, and surrounding Greater Vancouver neighborhoods. For areas beyond our primary coverage zone, call for a custom quote.",
  },
  {
    question: "Can I get same-day or next-day cleaning in Vancouver?",
    answer:
      "Yes. We operate 7 days a week across all Greater Vancouver service areas. North Vancouver customers often benefit from same-day or next-day availability. For West Vancouver, Vancouver, Burnaby, or other areas, call (604) 671-6252 to check your specific availability.",
  },
  {
    question:
      "Are your eco-friendly cleaning products available in all service areas?",
    answer:
      "Absolutely. Every Mint Sanitary cleaning job, whether in North Vancouver, West Vancouver, Vancouver, Burnaby, or Greater Vancouver, uses non-toxic, eco-friendly cleaning products. We never compromise on green standards based on location.",
  },
  {
    question: "Do you offer free estimates for all service areas?",
    answer:
      "Yes. We provide free, no-obligation estimates for homes and businesses across North Vancouver, West Vancouver, Vancouver, Burnaby, and surrounding areas. Contact us online or call (604) 671-6252 for your quote.",
  },
  {
    question:
      "What if my West Vancouver or Greater Vancouver address is outside your standard service zone?",
    answer:
      "Call us at (604) 671-6252 with your location and we'll provide a custom quote based on travel distance and your cleaning needs. Many areas beyond Burnaby and Richmond can still work with the right schedule.",
  },
  {
    question:
      "Do you offer commercial and industrial cleaning in all service areas?",
    answer:
      "Yes. Beyond residential house cleaning, we provide commercial office cleaning and industrial cleaning services throughout North Vancouver, West Vancouver, Vancouver, Burnaby, and Greater Vancouver. Contact us for a detailed commercial quote.",
  },
];

export default function ServiceAreasPage() {
  return (
    <ServicePageLayout
      title="House Cleaning Service Across Greater Vancouver"
      heroImage="/mint-sanitary-service-van-north-vancouver.jpg"
      heroIntro="Mint Sanitary started in North Vancouver and has grown into one of the region's most trusted cleaning companies. Today, we serve North Vancouver, West Vancouver, Vancouver, Burnaby, and surrounding Greater Vancouver areas with the same commitment to quality, eco-friendly cleaning that made us local favorites."
      faqItems={faqItems}
      ctaHeading="Ready to Schedule Your Cleaning?"
      ctaBody="Finding reliable, eco-friendly cleaning across Greater Vancouver is simpler than you think. Mint Sanitary brings professional standards, non-toxic products, and 7-day availability to every neighborhood we serve. First-time customers: use code MINT25 for 10% off your first clean."
    >
      {/* ── Intro + Image ───────────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Across the heart of Vancouver, the North Shore, and the suburbs
              beyond, we&apos;re here to handle your cleaning. We operate 7 days a
              week across all service areas, bringing professional-grade cleaning
              with non-toxic, environmentally responsible products to every
              neighborhood. Same standards. Same attention to detail. Everywhere we
              go.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Not sure if we service your specific neighborhood? Scroll through
              our service areas below or reach out at{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>
              . We&apos;re happy to confirm coverage and answer any questions
              about scheduling or pricing.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <strong className="font-extrabold text-[#4E5062]">
                New customers receive 10% off your first clean with code MINT25.
              </strong>
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
            >
              Check Availability
            </a>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/mint-service-area-map.png"
              alt="Map of Greater Vancouver showing Mint Sanitary service area"
              className="w-full rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose — Image Cards ────────────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Choose Mint Sanitary for House Cleaning in Greater Vancouver?
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[20px] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[170px] w-full rounded-[14px] object-cover"
                />
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-[#4E5062]">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-[1.7] text-[#5c6075]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── North Vancouver — Image + Text ──────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/professional-cleaning-services-north-vancouver.jpg"
              alt="Professional cleaning service in North Vancouver"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              North Vancouver Cleaning Service
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and
              Seymour Heights all fall within our primary service territory. As our
              home base, North Vancouver benefits from same-day availability and
              the fastest response times anywhere in our coverage area.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We offer residential cleaning for single-family homes, duplexes, and
              multi-unit properties. Commercial clients in North Vancouver also
              trust us for office cleaning, retail spaces, and building
              maintenance. Our team knows the North Shore intimately and can often
              fit you in quickly.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Eco-friendly cleaning is standard in every North Vancouver job. We
              bring professional equipment and green products to every corner of
              Deep Cove, Lower Lonsdale, Lynn Valley, and beyond. Whether
              it&apos;s weekly maintenance or a one-time deep clean, your North
              Vancouver home receives the same attention we give every property.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                Schedule North Van Cleaning
              </a>
              <a
                href="tel:+16046716252"
                className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Call (604) 671-6252
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── West Vancouver — Text + Image ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              West Vancouver House Cleaning
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We cover all of West Vancouver, including Ambleside, Dundarave, and
              Horseshoe Bay. Many residents assume companies based in North
              Vancouver charge travel fees for the longer routes across the Second
              Narrows, but we don&apos;t. West Vancouver clients receive the same
              pricing structure as North Vancouver despite the distance.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Your West Vancouver home gets the same eco-friendly, non-toxic
              cleaning approach we apply everywhere. Weekly, bi-weekly, monthly,
              and deep cleaning options are all available. We understand West
              Vancouver&apos;s unique character, including waterfront properties
              and newer residential neighborhoods, and adjust our service to match
              each home&apos;s specific needs.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Availability in West Vancouver is strong across all days of the
              week. Call{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>{" "}
              to check current openings or{" "}
              <a href="/contact" className="underline underline-offset-2">
                request your free estimate
              </a>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/deep-cleaned-kitchen-north-vancouver.jpg"
              alt="Deep cleaned kitchen in West Vancouver home"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ── Vancouver — Image + Text ────────────────────────────── */}
      <section
        className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
        }}
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/office-cleaning-north-vancouver-workspace.jpg"
              alt="Professional office cleaning in Vancouver workspace"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Vancouver Cleaning Services
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Vancouver proper is one of our largest service areas. Serving
              Downtown, Kitsilano, the West End, East Vancouver, South Vancouver,
              Kerrisdale, and more, we maintain regular cleaning schedules
              throughout the city.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We serve residential apartments, condos, and single-family homes at
              all price points. Commercial spaces in Vancouver also benefit from
              our professional cleaning; office buildings, retail locations, and
              small businesses across the city trust us with their environments.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              Flexible scheduling works well for Vancouver&apos;s diverse
              neighborhoods. One-time deep cleans, weekly maintenance, bi-weekly
              service, or monthly refreshes all fit within our standard Greater
              Vancouver rotation. Eco-friendly products are used in every Vancouver
              job, regardless of neighborhood.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-white px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
            >
              Book Vancouver Cleaning
            </a>
          </div>
        </div>
      </section>

      {/* ── Burnaby — Text + Image ──────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Burnaby House Cleaning
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Metrotown, Burnaby Heights, South Burnaby, and surrounding
              neighborhoods all fall within our regular service area. Burnaby
              residents benefit from the same 7-day availability and eco-friendly
              approach we offer across Greater Vancouver.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We specialize in condo and single-family home cleaning throughout
              Burnaby. Professional standards match what we maintain in North
              Vancouver, and flexible scheduling accommodates busy Burnaby families
              and business owners.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Free estimates are always available. Reach out today to discuss your
              Burnaby property&apos;s specific cleaning needs and find a schedule
              that works for you.{" "}
              <a href="/contact" className="underline underline-offset-2">
                Schedule Burnaby service
              </a>{" "}
              or call{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/recurring-cleaning-kitchen-north-vancouver.jpg"
              alt="Clean and fresh kitchen after recurring cleaning service in Burnaby"
              className="h-[340px] w-full object-cover sm:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ── Greater Vancouver — Wide Banner ─────────────────────── */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/mint-sanitary-service-van-north-vancouver.jpg"
            alt="Mint Sanitary service van covering Greater Vancouver"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#6191e9]/88" />
        </div>
        <div className="relative z-10 px-4 py-20 sm:px-8 md:px-[60px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Greater Vancouver and Surrounding Areas
            </h2>
            <p className="mt-6 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
              Beyond North Vancouver, West Vancouver, Vancouver, and Burnaby, we
              extend service to Richmond, New Westminster, Coquitlam, Port Moody,
              Port Coquitlam, and Maple Ridge. For these outer areas or
              neighborhoods not mentioned above, we&apos;re happy to discuss
              options.
            </p>
            <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
              Custom quotes are available for extended service areas. Travel time
              impacts pricing, but we&apos;ll be transparent about costs and
              availability before you commit. Call{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>{" "}
              with your specific location and we&apos;ll provide a detailed
              estimate based on distance and your cleaning needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Richmond", "New Westminster", "Coquitlam", "Port Moody", "Port Coquitlam", "Maple Ridge"].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[14px] font-semibold text-white"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Available — Image Grid ─────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            What Cleaning Services Do We Offer in Your Area?
          </h2>
          <p className="mt-6 max-w-[700px] font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Our full service menu is available no matter which Greater Vancouver
            neighborhood you choose:
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {cleaningServices.map((service) => (
              <div
                key={service.text}
                className="overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.text}
                  className="h-[160px] w-full rounded-[14px] object-cover"
                />
                <p className="mt-4 font-body text-[15px] font-semibold leading-[1.5] text-[#4E5062]">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Every service uses eco-friendly, non-toxic cleaning products. No
            harsh chemicals or irritating fumes. Just effective, safe,
            professional cleaning.
          </p>
          <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            For complete details on our service offerings, visit our main{" "}
            <a
              href="/cleaning-services-north-vancouver"
              className="underline underline-offset-2"
            >
              services page for house cleaning options
            </a>
            .
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
