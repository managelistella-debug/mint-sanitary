import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AccordionWithImage from "@/components/AccordionWithImage";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/house-cleaning-original
// so the CMS version at /north-vancouver/house-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "House & Apartment Cleaning in North Vancouver",
  description:
    "House and apartment cleaning in North Vancouver. Eco-friendly products, bonded and insured teams, free estimates, and flexible recurring plans.",
  robots: { index: false, follow: false },
};

const standardChecklist = [
  {
    title: "Living Areas",
    items: [
      "Dust all surfaces, shelves, and furniture",
      "Vacuum carpets and rugs, sweep and mop hard floors",
      "Wipe light switches, door handles, and baseboards",
      "Remove cobwebs",
      "Clean mirrors and glass surfaces",
      "Empty trash and replace liners",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize countertops and backsplash",
      "Clean the exterior of all appliances",
      "Scrub and sanitize the sink and faucet",
      "Wipe cabinet fronts and drawer handles",
      "Sweep and mop the floor",
      "Clean the stovetop and range hood exterior",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet inside and behind",
      "Clean and sanitize the sink, faucet, and countertop",
      "Scrub the tub and shower walls, door, and fixtures",
      "Clean mirrors",
      "Wipe cabinet fronts and towel bars",
      "Sweep and mop the floor",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, nightstands, and dressers",
      "Vacuum carpets or sweep and mop hard floors",
      "Make beds and tuck linens (change linens on request)",
      "Wipe light switches and door handles",
      "Remove cobwebs",
    ],
  },
  {
    title: "General",
    items: [
      "Dust ceiling fan blades within reach",
      "Wipe window sills and ledges",
      "Vacuum stairs and hallways",
      "Spot-clean marks on walls",
      "Wipe railings and banisters",
    ],
  },
];

const recurringChecklist = [
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize toilets, tubs, and showers",
      "Clean mirrors and glass surfaces",
      "Wipe down the vanity, countertops, and fixtures",
      "Mop bathroom floors",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Clean and sanitize countertops and the sink",
      "Wipe down the stovetop, appliance exteriors, and cabinet fronts",
      "Clean inside the microwave",
      "Take out trash and replace liners",
    ],
  },
  {
    title: "Living Spaces",
    items: [
      "Dust all surfaces, shelves, and decor",
      "Wipe light switches, door handles, and baseboards",
      "Vacuum upholstery and cushions as needed",
      "Clean mirrors and glass surfaces",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces and furniture",
      "Make beds and tidy linens",
      "Vacuum floors, under beds, and closet floors",
      "Wipe down nightstands, dressers, and shelves",
    ],
  },
  {
    title: "Floors",
    items: [
      "Vacuum all carpeted areas",
      "Mop all hard floors",
      "Spot-clean floor edges and corners",
    ],
  },
];

const specialtyLinks = [
  {
    label: "Deep Cleaning in North Vancouver",
    href: "/north-vancouver/deep-cleaning",
    desc: "for homes that need more than a routine wipe-down, tackling baseboards, inside appliances, and buildup.",
  },
  {
    label: "Move-In/Move-Out Cleaning in North Vancouver",
    href: "/north-vancouver/move-in-move-out-cleaning",
    desc: "gets a space spotless for a fresh start or a full deposit back.",
  },
  {
    label: "Vacation Rental Cleaning in North Vancouver",
    href: "/north-vancouver/vacation-rental-cleaning",
    desc: "hosts near Deep Cove and Lower Lonsdale rely on this for fast turnovers between guests.",
  },
  {
    label: "Post-Construction Cleaning in North Vancouver",
    href: "/north-vancouver/post-construction-cleaning",
    desc: "clears out dust, debris, and residue after a renovation or new build.",
  },
  {
    label: "Upholstery Cleaning in North Vancouver",
    href: "/north-vancouver/upholstery-cleaning",
    desc: "lifts stains and refreshes fabric on sofas, chairs, and area rugs.",
  },
];

const whyChooseItems = [
  { title: "Eco-friendly products", body: "All cleaning products are biodegradable and safe for kids, pets, and indoor air quality." },
  { title: "Transparent pricing", body: "Free estimates with a clear scope and no hidden fees." },
  { title: "Flexible scheduling", body: "Available 7 days a week, including weekends and holidays." },
  { title: "Vetted teams", body: "Every team member is background-checked, bonded, and fully insured." },
  { title: "Consistency", body: "Trained professional teams, with the same team sent whenever possible." },
  { title: "Satisfaction guarantee", body: "If something's missed, we return within 24 hours to fix it at no extra charge." },
  { title: "No contracts", body: "Recurring schedules can be paused, adjusted, or canceled anytime." },
  { title: "First clean discount", body: "New customers save 10% off their first clean with code MINT26." },
];

const bookingSteps = [
  { title: "Book by phone or online", body: "Tell us what you need and where you're located." },
  { title: "Get a free estimate", body: "A clear, transparent quote before any work starts." },
  { title: "Confirm your schedule", body: "Pick a time that works, any day of the week." },
  { title: "Enjoy the clean", body: "Your team walks through the home with you and gets to work." },
];

const addOns = [
  "Inside oven $30",
  "Inside fridge $30",
  "Inside windows $30 per window",
  "Inside cabinets/closets $45",
  "Wall/baseboard marks $25 per room",
  "Balconies swept $30",
  "Blinds washed $30 per room",
  "Walls washed $50 per room",
  "Dishes washed $15 flat",
  "Linens changed $15 per bed",
  "Carpet cleaning add-on $60 per room",
];

const faqItems = [
  {
    question: "How much does house cleaning cost in North Vancouver?",
    answer:
      "Standard cleaning starts at $220 for a 500 to 600 square foot home and scales up to $620 for 4000 to 5000 square feet, since most jobs are quoted by size and scope. See our rates page for the full table.",
  },
  {
    question: "What's the difference between standard and deep cleaning in North Vancouver?",
    answer:
      "Standard cleaning covers every main room top to bottom for regular upkeep. Deep cleaning in North Vancouver adds inside appliances, baseboards, and detail work that builds up over time. Many clients start with a deep clean, then switch to recurring standard visits.",
  },
  {
    question: "How long does a standard house cleaning take in North Vancouver?",
    answer:
      "Most standard cleans take 2 to 4 hours. A one-bedroom condo in Lower Lonsdale might be finished in about 90 minutes, while a three-bedroom house in Lynn Valley usually takes 3 to 4 hours.",
  },
  {
    question: "Can I schedule weekly cleaning in North Vancouver without a contract?",
    answer: "Yes. Recurring cleaning is available weekly, biweekly, monthly, or on a custom schedule with no contract.",
  },
  {
    question: "Is recurring cleaning cheaper than one-time cleaning in North Vancouver?",
    answer: "Yes. Recurring plans are priced lower per visit because ongoing maintenance takes less work each time.",
  },
  {
    question: "What's included in a recurring cleaning visit in North Vancouver?",
    answer:
      "Bathrooms, kitchen, living spaces, bedrooms, and floors, with a slightly lighter scope than a first standard clean since the home is already maintained.",
  },
  {
    question: "What's not included in a house cleaning in North Vancouver?",
    answer:
      "Inside the oven, fridge, and dishwasher, inside window washing, moving heavy furniture, deep carpet shampooing, and garage or attic cleaning. Most are available as add-ons or through deep cleaning.",
  },
  {
    question: "Which North Vancouver neighborhoods does Mint Sanitary serve?",
    answer:
      "Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Seymour Heights, Norgate, Pemberton Heights, Capilano, Dollarton, and Blueridge, plus West Vancouver, Vancouver, Burnaby, and the rest of Greater Vancouver.",
  },
  {
    question: "Is Mint Sanitary's North Vancouver cleaning team background-checked and insured?",
    answer: "Yes. Every team member is vetted, background-checked, bonded, and fully insured.",
  },
  {
    question: "Does Mint Sanitary use eco-friendly products for house cleaning in North Vancouver?",
    answer: "Yes. All house cleaning uses biodegradable products safe for kids, pets, and indoor air quality.",
  },
  {
    question: "What happens if I'm not happy with my house cleaning in North Vancouver?",
    answer:
      "Every clean comes with a 24-hour satisfaction guarantee. If something's missed, we return to fix it at no extra charge within 24 hours.",
  },
  {
    question: "Can I book weekend or holiday house cleaning in North Vancouver?",
    answer: "Yes. We're available 7 days a week, including weekends and holidays.",
  },
  {
    question: "How do I book house cleaning in North Vancouver?",
    answer:
      "Contact us by phone or online, get a free estimate, confirm a schedule that works for you, and your team walks through the home before starting.",
  },
  {
    question: "Do I get a discount on my first house cleaning in North Vancouver?",
    answer: "Yes. New customers save 10% off their first clean with code MINT26.",
  },
  {
    question: "Does Mint Sanitary offer move-out cleaning in North Vancouver for renters?",
    answer:
      "Yes. Our move-in/move-out cleaning in North Vancouver is a popular choice for renters. One recent client used it before their move-out inspection and got their full deposit back.",
  },
  {
    question: "Can Mint Sanitary clean condos and apartment towers in North Vancouver?",
    answer:
      "Yes. Waterfront condo towers near Lower Lonsdale are common on our schedule, and we plan visits around building access and elevator booking windows.",
  },
  {
    question: "Does Mint Sanitary clean commercial or office spaces in North Vancouver?",
    answer:
      "We focus mainly on residential house and apartment cleaning, but we also clean for commercial and institutional clients, including offices, healthcare facilities, and construction sites.",
  },
  {
    question: "How does North Vancouver's rainy climate affect house cleaning?",
    answer:
      "Wet winters mean more mud, grit, and moisture tracked into entryways and floors. A recurring cleaning schedule helps keep that buildup under control between visits.",
  },
  {
    question: "Does Mint Sanitary serve areas near North Vancouver, like West Vancouver?",
    answer: "Yes. Alongside North Vancouver, we also serve West Vancouver, Vancouver, Burnaby, and other parts of Greater Vancouver.",
  },
];

export default function NorthVancouverHouseCleaningPage() {
  return (
    <ServicePageLayout
      title="House & Apartment Cleaning in North Vancouver"
      heroImage="/standard-cleaning-kitchen-north-vancouver.jpg"
      heroSubtitle="North Vancouver's Trusted House Cleaners"
      heroIntro="North Vancouver homes range from waterfront condos near Lower Lonsdale to hillside character houses in Edgemont Village and family homes tucked into Lynn Valley and Deep Cove. Mint Sanitary has been the local choice for house and apartment cleaning in North Vancouver for homeowners and renters who want a team that shows up and does the work right. Every visit uses eco-friendly, biodegradable products, backed by a 24-hour satisfaction guarantee."
      faqItems={faqItems}
      ctaHeading="Ready to Book House Cleaning in North Vancouver?"
      ctaBody="Get a free, no-obligation quote for house or apartment cleaning in North Vancouver on our rates page, or call us to book a standard clean, set up a recurring schedule, or ask about deep cleaning, move-out cleaning, or any of our specialty services."
      ctaHref="/rates"
      breadcrumbCity={{ name: "North Vancouver", href: "/north-vancouver" }}
    >
      {/* ── Standard Clean Checklist (white bg) ──────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            What&apos;s Included in a Standard Clean in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            A standard clean is Mint Sanitary&apos;s most popular service for
            North Vancouver homes and apartments, covering every main living
            space top to bottom.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {standardChecklist.map((card) => (
              <div key={card.title} className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{card.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-[15px] leading-[1.7] text-white/80">
            Most standard cleans in North Vancouver take 2 to 4 hours,
            depending on the size and condition of the home. A one-bedroom
            condo in Lower Lonsdale might be done in about 90 minutes. A
            three-bedroom house in Lynn Valley or Blueridge usually needs 3
            to 4 hours.
          </p>
        </div>
      </section>

      {/* ── Recurring Cleaning (f4f8ff bg) ───────────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Recurring Cleaning: Keep Your North Vancouver Home Consistently Clean
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            For homeowners who want ongoing help instead of a one-off visit,
            Mint Sanitary offers recurring cleaning in North Vancouver on a
            weekly, biweekly, monthly, or custom schedule. Recurring cleans
            focus on maintaining a home that&apos;s already in good shape,
            so the scope is slightly lighter than a first-time standard
            clean.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recurringChecklist.map((card) => (
              <div key={card.title} className="rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
                <h3 className="font-body text-[17px] font-extrabold text-white">{card.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="font-body text-[15px] leading-[1.7] text-white/80">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[14px] bg-white/[0.12] backdrop-blur-sm p-5">
            <h3 className="font-body text-[17px] font-extrabold text-white">
              What&apos;s Not Included in North Vancouver Recurring Cleaning
            </h3>
            <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
              We&apos;d rather be upfront than surprise you at the door:
            </p>
            <ul className="mt-3 space-y-1.5">
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; Inside the oven, refrigerator, or dishwasher (available with{" "}
                <a href="/north-vancouver/deep-cleaning" className="underline underline-offset-2">
                  deep cleaning in North Vancouver
                </a>
                )
              </li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Inside windows or exterior window washing</li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Moving heavy furniture</li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Deep carpet shampooing or stain treatment</li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">&bull; Garage, attic, or storage area cleaning</li>
              <li className="font-body text-[15px] leading-[1.7] text-white/80">
                &bull; Laundry or dishwashing (linen changes available as an add-on, about $15 to $25)
              </li>
            </ul>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            Recurring plans are priced lower per visit than a one-time
            standard clean, since our team spends less time per visit once
            your home is on a regular rotation. No contract attached: pause,
            adjust, or cancel your schedule anytime.
          </p>
        </div>
      </section>

      {/* ── Specialty Services (white bg) ────────────────────── */}
      <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
          <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
            Specialty House Cleaning Services in North Vancouver
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specialtyLinks.map((link) => (
              <div key={link.label} className="rounded-[14px] bg-white/[0.12] p-5">
                <h3 className="font-body text-[16px] font-extrabold text-white">
                  <a href={link.href} className="underline decoration-[#66DAD5] underline-offset-2">
                    {link.label}
                  </a>
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.7] text-white/80">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why NV Chooses Mint + Booking Steps (AccordionWithImage) ── */}
      <AccordionWithImage
        heading="Why North Vancouver Homeowners Choose Mint Sanitary"
        intro="North Vancouver mixes older character homes in Lower Lonsdale and Pemberton Heights with newer condo towers along the waterfront, plus everything in between across Lynn Valley, Norgate, and Capilano. Each type of home collects dirt differently, and our teams adjust for it."
        image="/mint-sanitary-team-north-vancouver.jpg"
        imageAlt="Mint Sanitary house cleaning team in North Vancouver"
        items={whyChooseItems}
        ctaHref="/rates"
        ctaLabel="View Rates"
      />

      {/* ── Booking Steps + Reviews (f4f8ff bg) ──────────────── */}
      <section className="relative z-10 bg-white/[0.12] px-4 py-16 sm:px-8 md:px-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
              How Booking Works in North Vancouver
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#6191e9] font-body text-[18px] font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-body text-[15px] font-extrabold uppercase tracking-[0.3px] text-white">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.6] text-white/80">{step.body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-[900px] text-center font-body text-[15px] leading-[1.7] text-white/80">
            North Vancouver clients have left more than 120 reviews on
            Google, averaging 4.9 out of 5. A Lynn Valley client with young
            kids praised a deep clean for how thorough it was and for the
            eco-friendly products used around her family. A Lower Lonsdale
            office manager has praised the team&apos;s punctuality. A North
            Vancouver renter who booked a move-out clean got their full
            damage deposit back. A biweekly recurring client likes that the
            same team shows up every visit and that pricing stays fair.
            Another client had carpets and upholstery cleaned after a
            renovation and was happy with the results.
          </p>
        </div>
      </section>

      {/* ── Pricing (blue bg) ─────────────────────────────────── */}
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
            House Cleaning Rates in North Vancouver
          </h2>
          <p className="mt-4 max-w-[700px] font-body text-[15px] leading-[1.7] text-white/80">
            Pricing depends mostly on the size of your home and the scope of
            work, since most North Vancouver jobs are quoted by square
            footage.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Standard Cleaning</h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                500 to 600 sq ft: starts at $220. Up to 4000 to 5000 sq ft:
                starts at $620. Above 6000 sq ft: call for a custom quote.
              </p>
            </div>
            <div className="rounded-[14px] bg-white/10 p-5">
              <h3 className="font-body text-[16px] font-extrabold text-white">Deep Cleaning</h3>
              <p className="mt-2 font-body text-[15px] leading-[1.7] text-white/80">
                500 to 600 sq ft: starts at $390. Up to 4000 to 5000 sq ft:
                $850 and up.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-[14px] bg-white/10 p-5">
            <h3 className="font-body text-[16px] font-extrabold text-white">Common Add-Ons</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {addOns.map((item) => (
                <span key={item} className="rounded-full bg-white/15 px-4 py-2 font-body text-[13px] font-semibold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-6 font-body text-[15px] leading-[1.7] text-white/80">
            For the full price list, visit our{" "}
            <a href="/rates" className="underline underline-offset-2">
              North Vancouver cleaning rates page
            </a>
            .
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
