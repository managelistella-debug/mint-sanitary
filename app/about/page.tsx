import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "About North Vancouver | Mint Sanitary",
  description:
    "About Mint Sanitary in North Vancouver, trusted eco-friendly cleaning service. (604) 671-6252. Background-checked, insured, and available 7 days a week.",
};

const whyChooseItems: { title: string; body: string; image: string }[] = [
  {
    title: "Coverage You Can Count On",
    body: "Available seven days a week, including evenings and weekends. Our North Vancouver team responds quickly and works around your schedule.",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
  },
  {
    title: "Eco-Friendly Is Standard",
    body: "Plant-based, mineral-based products certified for safety. We never use harsh chemicals as a default. Green cleaning isn\u2019t an upsell; it\u2019s who we are.",
    image: "/eco-friendly-cleaning-products-north-vancouver.jpg",
  },
  {
    title: "Transparent Pricing",
    body: "Free estimates, no surprises, upfront costs. North Vancouver customers know exactly what they\u2019re paying.",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
  },
  {
    title: "Fully Vetted Team",
    body: "Every member undergoes background checks, professional training, and carries full insurance and bonding.",
    image: "/mint-sanitary-team-north-vancouver.jpg",
  },
  {
    title: "Service Versatility",
    body: "Mint Sanitary in North Vancouver handles residential cleaning, commercial spaces, and post-construction cleanup.",
    image: "/post-construction-cleaning-north-vancouver.jpg",
  },
];

const faqItems: { question: string; answer: string }[] = [
  {
    question: "Who founded Mint Sanitary and why?",
    answer:
      "Mint Sanitary was founded by a team frustrated with cleaning services that cut corners or used harsh chemicals. We wanted North Vancouver to have a service that\u2019s reliable, trustworthy, and genuinely cares about the safety of families and pets. In neighborhoods like Lower Lonsdale and Edgemont Village, homeowners deserve a cleaning company they can trust completely. That\u2019s what we built.",
  },
  {
    question:
      "How do you hire and train your cleaning team in North Vancouver?",
    answer:
      "Every team member working in North Vancouver undergoes a thorough background check and is fully insured and bonded. We provide comprehensive training on cleaning techniques, proper product use, and customer service standards. All our North Vancouver cleaners continue training throughout their time with us to maintain quality. You\u2019re trusting us with your home, and we take that responsibility as seriously as you do.",
  },
  {
    question:
      "Why does Mint Sanitary use eco-friendly products for North Vancouver homes?",
    answer:
      "Eco-friendly products are just as effective as harsh chemicals without the toxic fumes or health risks. Why expose your family in Seymour Heights or Lynn Valley to unnecessary chemicals when plant-based alternatives clean just as powerfully? It\u2019s better for your home, your children, your pets, and the environment. Green cleaning isn\u2019t a compromise on results; it\u2019s a better way to get them.",
  },
  {
    question: "What areas of Greater Vancouver does Mint Sanitary serve?",
    answer:
      "We proudly serve all of North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights, plus West Vancouver, Vancouver, Burnaby, and surrounding Greater Vancouver communities. If you\u2019re uncertain whether we service your address, just call (604) 671-6252 or email hello@mintsanitary.com and we\u2019ll confirm our coverage.",
  },
  {
    question:
      "What makes Mint Sanitary different from other cleaning companies in North Vancouver?",
    answer:
      "We combine several differentiators that set North Vancouver\u2019s Mint Sanitary apart. We\u2019re available seven days a week, offering unmatched convenience. Eco-friendly cleaning isn\u2019t an upsell; it\u2019s core to who we are. We promise transparent pricing, free estimates, and a fully background-checked, trained, and insured team. Whether it\u2019s residential, commercial, or industrial cleaning, Mint Sanitary brings the same professionalism and care to every North Vancouver job. Clean feels good, and it should also feel safe and responsible.",
  },
];

export default function AboutPage() {
  return (
    <ServicePageLayout
      title="About Mint Sanitary"
      heroImage="/mint-sanitary-team-north-vancouver.jpg"
      heroIntro="Mint Sanitary was built to give North Vancouver homeowners and businesses a cleaning company they can trust for reliability, safety, and consistent results."
      faqItems={faqItems}
      ctaHeading="Ready to Experience the Mint Sanitary Difference?"
      ctaBody="Clean feels good. Let Mint Sanitary handle the cleaning so you can focus on what truly matters. Get 10% off your first clean with code MINT25. No tricks. No hidden fees. Available 7 days a week."
    >
      {/* ── Our Story — Text + Image Side-by-Side ───────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
              Our Story
            </p>
            <h2 className="mt-3 font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Why We Started Mint Sanitary
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We started Mint Sanitary because we couldn&apos;t find a cleaning
              service we&apos;d trust in our own homes. We saw too many companies
              cutting corners, using harsh chemicals that made families nervous, or
              showing up late without apology. North Vancouver families deserve
              better. We believed the community needed a team that treated spaces
              with genuine care, showed up reliably, and used products safe for
              children and pets. That frustration became our mission. Today,
              we&apos;re proud to serve North Vancouver with the service we always
              wanted for ourselves.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
            >
              Get in Touch
            </a>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/professional-cleaning-services-north-vancouver.jpg"
              alt="Mint Sanitary professional cleaning in action in North Vancouver"
              className="h-[340px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ── Mission & Values — Image + Text ─────────────────────── */}
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
              src="/eco-friendly-cleaning-products-north-vancouver.jpg"
              alt="Eco-friendly cleaning products used by Mint Sanitary in North Vancouver"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Mission and Values
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Clean feels good, and it should be earned. We founded Mint Sanitary
              around three core values: trustworthiness, reliability, and
              responsibility. Every cleaner is background-checked, fully insured,
              and bonded. We&apos;re available seven days a week because life in
              North Vancouver doesn&apos;t follow a nine-to-five schedule. We use
              only plant-based, non-toxic products because peace of mind matters as
              much as cleanliness. Transparency guides everything we do. No hidden
              fees. No surprises. Just honest, professional service for North
              Vancouver homeowners who want their spaces treated right.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-[14px] border border-white/15 bg-white/10 p-4 text-center">
                <p className="font-display-reg text-[28px] text-white">7</p>
                <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">Days a Week</p>
              </div>
              <div className="rounded-[14px] border border-white/15 bg-white/10 p-4 text-center">
                <p className="font-display-reg text-[28px] text-white">100%</p>
                <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">Eco-Friendly</p>
              </div>
              <div className="rounded-[14px] border border-white/15 bg-white/10 p-4 text-center">
                <p className="font-display-reg text-[28px] text-white">120+</p>
                <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">5-Star Reviews</p>
              </div>
              <div className="rounded-[14px] border border-white/15 bg-white/10 p-4 text-center">
                <p className="font-display-reg text-[28px] text-white">24hr</p>
                <p className="mt-1 font-body text-[13px] font-semibold uppercase tracking-[0.5px] text-white/70">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose — Image Cards ────────────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
            Why Choose Mint Sanitary for Cleaning in North Vancouver
          </h2>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            Mint Sanitary stands apart in several key ways:
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[20px] bg-[#f4f8ff] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
          <p className="mt-10 font-body text-[15px] leading-[1.7] text-[#5c6075]">
            North Vancouver families and businesses across Lower Lonsdale, Lynn
            Valley, Deep Cove, Edgemont Village, Seymour Heights, and beyond
            trust Mint Sanitary to keep their spaces spotless and safe.
          </p>
        </div>
      </section>

      {/* ── Eco-Friendly Commitment — Full Image Banner + Text ──── */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/eco-friendly-office-cleaning-products-north-vancouver.jpg"
            alt="Eco-friendly cleaning products and equipment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#6191e9]/88" />
        </div>
        <div className="relative z-10 px-4 py-20 sm:px-8 md:px-[60px]">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Our Commitment to Eco-Friendly Cleaning
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
                We believe families deserve a clean home without sacrificing their
                health or the environment. That&apos;s why every North Vancouver
                customer gets the same eco-friendly commitment, regardless of service
                type.
              </p>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
                Plant-based and mineral-based products work just as effectively as
                traditional chemicals, but without toxic fumes, harsh residues, or
                safety concerns for children and pets. We choose products that are
                kind to families in Lynn Valley and Deep Cove, safe for the
                environment, and proven effective on every surface. There&apos;s no
                performance trade-off when you choose Mint Sanitary&apos;s
                eco-friendly approach. Your North Vancouver home gets clean, healthy,
                and responsibly maintained.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/recurring-cleaning-hepa-vacuum-north-vancouver.jpg"
                  alt="HEPA vacuum used for eco-friendly cleaning"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/deep-cleaned-bathroom-tile-grout-north-vancouver.jpg"
                  alt="Eco-friendly deep cleaned bathroom tile and grout"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/deep-cleaning-bathroom-north-vancouver.jpg"
                  alt="Professional bathroom cleaning with green products"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src="/freshly-cleaned-carpets-north-vancouver.jpg"
                  alt="Freshly cleaned carpet using eco-friendly methods"
                  className="h-[200px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area — Text + Image ─────────────────────────── */}
      <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Serving North Vancouver and Greater Vancouver
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Based right here in North Vancouver, we proudly serve our local
              community and the surrounding Greater Vancouver area. Our North
              Vancouver roots mean we understand the unique needs of the region,
              from the local water conditions to neighborhood-specific cleaning
              challenges.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              We serve Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village,
              Seymour Heights, and all of North Vancouver, plus West Vancouver,
              Vancouver, Burnaby, and nearby communities. If you&apos;re unsure
              whether your neighborhood is in our service area, we encourage you to
              call or email us directly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["North Vancouver", "West Vancouver", "Vancouver", "Burnaby", "Deep Cove", "Lynn Valley"].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white px-5 py-2.5 font-body text-[13px] font-semibold text-[#4E5062] shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <a
              href="/service-areas"
              className="mt-6 inline-flex items-center justify-center rounded-[99px] bg-[#6191e9] px-7 py-3 font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:bg-[#5580d4]"
            >
              View All Service Areas
            </a>
          </div>
          <div className="overflow-hidden rounded-[20px]">
            <img
              src="/mint-service-area-map.png"
              alt="Map showing Mint Sanitary service areas across Greater Vancouver"
              className="w-full rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ── Team & Credentials — Image + Text ──────────────────── */}
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
              src="/mint-sanitary-team-north-vancouver.jpg"
              alt="Mint Sanitary team members ready for service in North Vancouver"
              className="h-[360px] w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              Our Team and Credentials
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
              Behind every clean home is a trained, trustworthy professional. Every
              member of the Mint Sanitary team undergoes a rigorous background
              check before being hired. We invest in ongoing training so our North
              Vancouver team maintains the highest standards for cleaning
              techniques, product knowledge, and customer service.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/80">
              We carry full bonding and insurance coverage, protecting every North
              Vancouver homeowner and business we serve. Our credentials
              aren&apos;t just words; they&apos;re our commitment that you&apos;re
              letting the right people into your home or workplace. We take that
              responsibility seriously.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Background-Checked", "Fully Insured", "Bonded", "Ongoing Training"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-5 py-2.5 font-body text-[13px] font-semibold uppercase tracking-[0.3px] text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Community — Text + Image Grid ──────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-[#4E5062] sm:text-[38px]">
              Community and Local Commitment
            </h2>
            <p className="mt-6 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Mint Sanitary is deeply committed to North Vancouver. We hire
              locally, support local suppliers, and believe in giving back to the
              communities we serve. Our North Vancouver team is made up of
              neighbors, people who live in the areas they clean.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Follow us on{" "}
              <a
                href="https://instagram.com/mintsanitary"
                className="underline underline-offset-2"
              >
                Instagram @mintsanitary
              </a>{" "}
              and{" "}
              <a
                href="https://facebook.com/mintsanitary"
                className="underline underline-offset-2"
              >
                Facebook @mintsanitary
              </a>{" "}
              to see what we&apos;re up to, connect with our team, and stay in the
              loop on special offers and service updates.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              <strong className="font-extrabold text-[#4E5062]">
                Special offer:
              </strong>{" "}
              Get 10% off your first clean with code MINT25. No tricks. No hidden
              fees.
            </p>
            <p className="mt-4 font-body text-[15px] leading-[1.7] text-[#5c6075]">
              Phone:{" "}
              <a
                href="tel:+16046716252"
                className="underline underline-offset-2"
              >
                (604) 671-6252
              </a>{" "}
              | Email:{" "}
              <a
                href="mailto:hello@mintsanitary.com"
                className="underline underline-offset-2"
              >
                hello@mintsanitary.com
              </a>{" "}
              | Available: 7 days a week
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/mint-sanitary-service-van-north-vancouver.jpg"
                alt="Mint Sanitary service van in North Vancouver community"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/office-cleaning-north-vancouver-workspace.jpg"
                alt="Office cleaning service for local North Vancouver businesses"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/vacation-rental-cleaning-north-vancouver.jpg"
                alt="Vacation rental cleaning in North Vancouver"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/strata-cleaning-north-vancouver.jpg"
                alt="Strata building cleaning in North Vancouver community"
                className="h-[200px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
