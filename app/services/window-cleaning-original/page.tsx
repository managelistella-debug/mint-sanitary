import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

// TEMPORARY comparison copy of the pre-CMS page, kept at /services/window-cleaning-original
// so the CMS version at /services/window-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Window Cleaning Services | Mint Sanitary",
  description:
    "Professional window cleaning for homes and businesses across Greater Vancouver. Eco-friendly products, free estimates, 10% off with code MINT26.",
  robots: { index: false, follow: false },
};

const ourServices = [
  {
    title: "Residential Window Cleaning",
    image: "/window-cleaning-residential-north-vancouver.webp",
    href: "/north-vancouver/window-cleaning#residential-window-cleaning",
    description:
      "Interior and exterior cleaning for homes of every size, from single-story bungalows to multi-story estates. We handle safe ladder and pole work, skylights, and thorough frame and sill cleaning.",
  },
  {
    title: "Commercial Window Cleaning",
    image: "/window-cleaning-commercial-north-vancouver.webp",
    href: "/north-vancouver/window-cleaning#commercial-window-cleaning",
    description:
      "Storefront, office, and strata window cleaning that keeps your property looking sharp. We schedule around business hours and use certified rope-access equipment for high-rise buildings.",
  },
  {
    title: "Window Screen Cleaning",
    image: "/window-cleaning-screen-north-vancouver.webp",
    href: "/north-vancouver/window-cleaning#window-screen-cleaning",
    description:
      "Dust, pollen, and salt air damage screens over time. We remove, deep clean, and reinstall screens, restoring airflow and improving indoor air quality.",
  },
];

const included = [
  "Interior and exterior glass panes, cleaned streak-free",
  "Window frames, tracks, and sills, cleared of dirt and mineral buildup",
  "Screens inspected and cleaned as part of the standard visit",
  "Purified, water-fed pole systems for high-reach and multi-story windows",
  "Skylights and specialty glass, available as an add-on",
  "Before-and-after documentation for commercial and strata clients",
];

const processSteps = [
  { title: "Free estimate", body: "We assess your property, whether a home or a commercial building, and give you transparent pricing before any work starts." },
  { title: "Scheduling", body: "We work around your calendar, including early mornings, evenings, and weekends, so service doesn't disrupt your day or your business." },
  { title: "Pre-service inspection", body: "Our team checks glass type, access points, and any problem areas like hard water spots or screen damage before cleaning begins." },
  { title: "Professional cleaning", body: "We clean using eco-friendly, non-toxic products safe for people, pets, and landscaping, paired with squeegee and water-fed pole techniques suited to your property." },
  { title: "Final walk-through", body: "We inspect every window with you and address any missed spots on the spot." },
];

const faqItems = [
  {
    question: "How much does window cleaning cost?",
    answer: "Residential window cleaning typically runs $150 to $400 per cleaning, depending on home size and window count. Commercial pricing depends on building size, height, and access, and is quoted after a free on-site or phone assessment. Visit our rates page for details, or call for a custom quote.",
  },
  {
    question: "How often should I get my windows professionally cleaned?",
    answer: "Most homeowners benefit from cleaning once or twice a year, in spring and fall. Commercial properties, especially ground-level storefronts, often need monthly or quarterly service. Coastal properties exposed to salt spray may need more frequent attention.",
  },
  {
    question: "Are your cleaning products safe for kids, pets, and landscaping?",
    answer: "Yes. We use eco-friendly, biodegradable products that are non-toxic and safe for children, pets, and the plants around your property. There's no harsh chemical residue left behind.",
  },
  {
    question: "Do you clean windows in the rain?",
    answer: "We can often work in light rain, since pure water rinses perform well in damp conditions. Heavy rain or storms may require rescheduling for safety and quality reasons. If we need to reschedule, we rebook at no penalty.",
  },
  {
    question: "What's included in a standard window cleaning service?",
    answer: "Interior and exterior glass, frames, tracks, and sills. Screens are inspected and cleaned as part of the visit. Skylights and specialty glass are available as an add-on. We don't handle window repairs or weatherstripping replacement, but we'll flag those issues if we spot them.",
  },
  {
    question: "Do you offer recurring or subscription window cleaning?",
    answer: "Yes. We offer quarterly, semi-annual, and annual plans with discounted rates compared to one-time service. Recurring customers also get priority scheduling.",
  },
  {
    question: "Are you insured for high-access and commercial window cleaning?",
    answer: "Yes. We carry general liability insurance and provide a Certificate of Insurance on request, and we follow WorkSafeBC fall protection requirements for high-rise and elevated work.",
  },
  {
    question: "What areas do you serve?",
    answer: "We're based in North Vancouver and serve the greater Metro Vancouver region, including West Vancouver, Vancouver, and Burnaby. Visit our service areas page to confirm coverage for your address.",
  },
  {
    question: "Can you clean high windows, skylights, and specialty glass?",
    answer: "Yes. We use professional-grade water-fed poles and safety-approved techniques for second-story, third-story, and taller windows. Skylights and Low-E or specialty glass are available as add-on services.",
  },
  {
    question: "Do you offer a satisfaction guarantee?",
    answer: "Yes. If you're not satisfied with your cleaning, contact us and we'll return to re-clean the affected windows at no extra cost.",
  },
];

export default function ServicesWindowCleaningPage() {
  return (
    <ServicePageLayout
      title="Window Cleaning Services"
      heroImage="/window-cleaning-hero-north-vancouver.webp"
      heroSubtitle="Streak-Free, Eco-Friendly Glass Cleaning"
      heroIntro="Streaked, spotted, or grimy windows change how a property looks and feels. Mint Sanitary provides professional window cleaning for homes and businesses across Greater Vancouver, using eco-friendly products and safety-certified techniques that get glass genuinely clean, not just wiped down."
      faqItems={faqItems}
      ctaHeading="Ready for Streak-Free Windows?"
      ctaBody="Get a free quote at /rates or call us at 236-688-3248. New customers save 10% on their first clean with code MINT26."
      ctaHref="/rates"
    >
      {/* ── Intro (white bg) ──────────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[15px] leading-[1.7] text-white/80">
            We handle everything from single-story homes to multi-story
            commercial buildings. Our technicians are background-checked,
            bonded, and insured. We&apos;re available 7 days a week, we offer
            free estimates, and we never lock you into a contract. New
            customers get 10% off their first clean with code MINT26.
          </p>
        </div>
      </section>

      {/* ── What's Included + Process (f4f8ff bg) ────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in Professional Window Cleaning
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Every window cleaning service covers the full surface, not
            just the glass. We use purified, deionized water rinses that
            dry spot-free. This matters most in coastal areas of Greater
            Vancouver, where hard water minerals and salt air leave
            residue that regular tap water rinses can&apos;t fully remove.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Our Process</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[14px] bg-white/[0.12] p-5">
                <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/20 font-body text-[15px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h4 className="mt-3 font-body text-[16px] font-extrabold text-white">{step.title}</h4>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Window Cleaning Services Image Card Grid (blue bg) ── */}
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
            Our Window Cleaning Services
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ourServices.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[20px] bg-white/10 p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.18]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[190px] w-full rounded-[14px] object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 font-display-reg text-[18px] uppercase tracking-[0.45px] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.65] text-white/80">
                  {item.description}
                </p>
                <span className="mt-4 inline-block border-b border-white/40 font-body text-[13px] font-bold uppercase tracking-[0.4px] text-white transition-colors group-hover:text-white/70">
                  Learn More
                </span>
              </a>
            ))}
          </div>
          <p className="mt-8 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Post-construction window cleaning is also available for newly
            built or renovated properties. Contact us to discuss your
            project.
          </p>
        </div>
      </section>

      {/* ── Why It Matters + Frequency (white bg) ────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Why Professional Window Cleaning Matters
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Clean windows protect more than curb appeal. Left untreated,
            hard water deposits and coastal salt residue can etch glass
            permanently, turning a cleaning problem into a replacement
            problem. Regular professional cleaning removes these deposits
            before they set in. For businesses, clean storefront and
            office glass shapes how customers and clients see your
            operation. For homes, clean windows let in more natural light,
            brighten interior rooms, and make a property look cared for,
            whether you&apos;re staying put or preparing to sell.
          </p>
          <h3 className="mt-8 font-body text-[17px] font-extrabold text-white">How Often Should Windows Be Cleaned?</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Most homes benefit from professional window cleaning once or
            twice a year, ideally in spring and fall. Spring removes
            winter grime and road salt; fall prepares glass for the wet
            season ahead. Homes near trees, construction, or busy roads,
            or coastal properties exposed to salt spray, often do better
            on a quarterly schedule. Commercial properties usually need
            more frequent attention: ground-level storefronts benefit from
            monthly cleaning, standard office buildings typically do well
            on a quarterly schedule, and strata common areas often need
            monthly interior cleaning paired with bi-monthly or quarterly
            exterior service.
          </p>
        </div>
      </section>

      {/* ── Pricing + Safety (blue bg) ────────────────────────── */}
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
            Pricing
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Residential window cleaning typically runs $150 to $400 per
            cleaning, depending on home size and window count. Commercial
            pricing depends on building size and access, with ground-level
            storefronts often priced at $1 to $2 per pane and larger
            buildings priced by square footage. Recurring service plans
            come with discounted rates compared to one-time cleanings.
            Every quote is free, with no hidden fees and no obligation.
            Visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              rates page
            </a>{" "}
            for current pricing details, or call 236-688-3248 to talk
            through your specific property.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Safety and Insurance</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            Height work requires the right equipment and training. Our
            crews use certified anchor systems and safety harnesses for
            elevated and high-rise projects, and we follow WorkSafeBC fall
            protection requirements. We carry general liability insurance
            and provide a Certificate of Insurance on request for property
            managers and building owners.
          </p>
          <h3 className="mt-10 font-body text-[17px] font-extrabold text-white">Eco-Friendly by Default</h3>
          <p className="mt-3 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We clean with biodegradable, non-toxic products that are safe
            for children, pets, and surrounding landscaping. No harsh
            chemicals, no strong fumes, and no residue left behind on
            plants or hard surfaces near your windows.
          </p>
        </div>
      </section>

      {/* ── Serving Greater Vancouver (white bg) ─────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Based in North Vancouver
          </h2>
          <p className="mt-4 max-w-[900px] font-body text-[15px] leading-[1.7] text-white/80">
            We serve homes and businesses across the region. For a service
            closer to home, visit our{" "}
            <a href="/north-vancouver/window-cleaning" className="underline underline-offset-2">
              North Vancouver window cleaning page
            </a>
            . See our{" "}
            <a href="/service-areas" className="underline underline-offset-2">
              service areas
            </a>{" "}
            for the full list, or visit our{" "}
            <a href="/north-vancouver" className="underline underline-offset-2">
              North Vancouver
            </a>{" "}
            hub page.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
