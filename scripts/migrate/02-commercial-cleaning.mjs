import { key, uploadImage, replaceDoc, refTo, heading, para, paraWithLink } from "./lib.mjs";

/**
 * /services/commercial-cleaning — migrated from the hand-coded page now parked
 * at /services/commercial-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Why a Clean Workplace Matters" was an intro plus four heading/paragraph
 *    pairs with an outbound EPA link, so it became a Rich Text section. The
 *    link is preserved as a real Portable Text mark, not flattened to plain
 *    text.
 *  - The trailing post-construction cross-link paragraph that sat under the
 *    service tiles has no slot on a tiles section, so it became a short
 *    heading-less Rich Text block immediately after — same position, same copy.
 *  - Two tiles (Strata, School) previously pointed at /north-vancouver/… ;
 *    they now resolve to the general /services/… pages, matching the
 *    site-wide switch to general service pages made earlier.
 */

const whyChoose = [
  ["7-Day Availability", "Cleaning scheduled around your operating hours, including evenings, early mornings, weekends, and statutory holidays."],
  ["Eco-Friendly Products", "Non-toxic, third-party certified products that clean effectively without leaving harsh chemical residue behind."],
  ["WorkSafeBC and WHMIS Compliant", "Staff trained in workplace safety standards and current WHMIS chemical handling certification."],
  ["Transparent Pricing", "A clear, written estimate before any work begins, so you know the cost up front with no hidden line items later."],
  ["Customizable Contracts", "Month-to-month agreements with no long-term commitment required. Cleaning frequency can change as your business needs change."],
  ["Bonded and Insured", "Every cleaner is police-checked, bonded, and fully insured before stepping onto your premises."],
  ["Satisfaction Guarantee", "If something is missed, we return within 24 hours to fix it at no charge."],
];

const scheduleOptions = [
  ["Daily Cleaning", "Built for high-traffic offices, retail stores, medical clinics, and restaurants that need attention every day."],
  ["Weekly Cleaning", "The most requested option for small to mid-size offices with moderate foot traffic."],
  ["Bi-Weekly Cleaning", "A budget-friendly choice for spaces with lighter daily use."],
  ["Monthly Deep Cleaning", "Carpet shampooing, floor stripping, and high dusting layered on top of a regular schedule."],
  ["After-Hours and Evening Cleaning", "The preferred option for most commercial clients, since it means zero disruption to the workday."],
  ["Weekend and Holiday Cleaning", "Available for restaurants, gyms, churches, and retail spaces seven days a week, 365 days a year."],
  ["Custom Schedules", "Built around a business's specific foot traffic patterns, operating hours, and requirements."],
];

const faqItems = [
  ["What does commercial cleaning include?", "Commercial cleaning covers floors, carpets, washrooms, break rooms, desks, common areas, windows, and disposal systems. The full scope depends on the type and size of the business, and gets mapped out during a free walkthrough."],
  ["How often should a commercial space be cleaned?", "Offices typically need daily or weekly cleaning depending on foot traffic. Retail spaces usually benefit from daily attention, and restaurants generally need a deep clean every night to keep up with health standards."],
  ["Do you use eco-friendly products for commercial cleaning?", "Yes. Our products are eco-friendly and non-toxic, and they perform as well as harsher chemical alternatives without leaving toxins behind. Safety data sheets are available on request for any business that needs documentation."],
  ["Can you clean around our business hours?", "Yes. We offer early morning, evening, late night, and weekend service. Most commercial clients prefer after-hours cleaning so their workday is never interrupted."],
  ["How much does commercial cleaning cost in Greater Vancouver?", "Costs typically range from $200 to $1,000 or more per month, depending on the size of your space, how often you need cleaning, and the scope of work involved. We provide a free, no-obligation estimate for every business. Visit our rates page for a fuller breakdown, or call 236-688-3248."],
  ["Are your commercial cleaners trained and insured?", "Yes. Every cleaner is professionally trained, fully insured, bonded, and police-checked. Our team also carries WorkSafeBC coverage and current WHMIS certification."],
  ["What's the difference between janitorial and commercial cleaning?", "Janitorial service handles routine daily maintenance, like emptying bins and restocking supplies. Commercial cleaning goes deeper, covering floor stripping, window cleaning, and full disinfection. Most businesses end up needing a mix of both."],
  ["Do you clean strata buildings and condominiums?", "Yes. We clean lobbies, hallways, common areas, underground parking, elevators, and exterior grounds for strata buildings across Greater Vancouver."],
  ["Do you offer one-time deep cleaning for commercial spaces?", "Yes, in addition to recurring contracts. One-time deep cleans work well for move-ins, move-outs, post-renovation cleanup, and special events."],
  ["What sets Mint Sanitary apart from other commercial cleaning companies?", "Seven-day availability, eco-friendly products, WorkSafeBC and WHMIS compliance, transparent written pricing, month-to-month flexibility, and a 24-hour satisfaction guarantee if something is missed."],
  ["Do you offer contracts, or is cleaning pay-as-you-go?", "Both. Most clients choose a month-to-month contract with a set schedule, but one-time and pay-as-you-go cleaning is available too."],
  ["What areas do you serve for commercial cleaning?", "We serve North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, Richmond, Coquitlam, Port Coquitlam, Port Moody, Surrey, Delta, and Langley."],
  ["How do I get a quote for commercial cleaning?", "Call 236-688-3248 or request a free walkthrough online. We'll assess your space, discuss your schedule, and provide a written estimate with no obligation."],
  ["Do you clean schools, gyms, and churches?", "Yes. We provide cleaning built around each type of space, including classroom sanitization for schools, equipment cleaning for gyms, and sanctuary and hall cleaning for churches, all scheduled around your calendar."],
  ["Can you handle cleaning for multiple business locations?", "Yes. We work with businesses that operate several sites across Greater Vancouver and can build a coordinated schedule that keeps every location on the same standard."],
];

console.log("→ /services/commercial-cleaning");

const whyMattersBody = [
  para(
    "Cleanliness shapes how clients, employees, and visitors experience a space before anyone says a word. The International Sanitary Supply Association (ISSA) found that 90% of employees feel more productive when working in a clean environment. That number alone makes a strong case for treating commercial cleaning as an operating decision, not an afterthought."
  ),
  heading("Productivity and Health"),
  para(
    "Harvard Business Review reported that employees working in cleaner offices can be up to 5% more productive. Regular cleaning cuts down on dust, allergens, and bacteria, which tends to mean fewer sick days and less time lost to minor illness moving through a workplace."
  ),
  heading("WorkSafeBC and WHMIS Compliance"),
  para(
    "BC businesses are required to maintain safe working environments for staff. That includes proper chemical handling and storage under WHMIS regulations. A commercial cleaning provider that understands these requirements takes one more compliance item off your plate."
  ),
  heading("Eco-Friendly Products Make a Difference"),
  paraWithLink(
    "Traditional cleaning chemicals release volatile organic compounds (VOCs) that degrade indoor air quality over time, according to the ",
    "U.S. EPA",
    "https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality",
    ". Eco-friendly products, by contrast, are third-party certified, biodegradable, and clean just as well without the toxins. That matters most in enclosed commercial spaces where staff spend eight or more hours a day."
  ),
  heading("Regular Schedules Prevent Costly Problems"),
  para(
    "Infrequent cleaning leads to buildup that gets harder and more expensive to fix. Grease builds up in commercial kitchens, mold works into washroom grout, and carpets deteriorate faster than they should. A consistent cleaning schedule extends the life of flooring, fixtures, and furniture, which protects the investment a business already made in its space."
  ),
];

const sections = [
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Commercial Cleaning Services We Offer",
    intro:
      "Mint Sanitary covers a full range of commercial spaces across Greater Vancouver. Each service is built around the specific demands of that industry, from health regulations in kitchens to foot traffic patterns in gyms.",
    tiles: [
      refTo("cleaningType", "office-cleaning"),
      refTo("cleaningType", "restaurant-cleaning"),
      refTo("cleaningType", "strata-cleaning"),
      refTo("cleaningType", "school-cleaning"),
      refTo("cleaningType", "gym-cleaning"),
      refTo("cleaningType", "church-cleaning"),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Businesses that recently had renovation or construction work done can also ask about ",
        "post-construction cleaning",
        "/services/post-construction-cleaning",
        " to clear dust and debris before opening or reopening."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Businesses Across Greater Vancouver Choose Mint Sanitary",
    image: await uploadImage(
      "/eco-friendly-office-cleaning-products-north-vancouver.jpg",
      "Eco-friendly commercial cleaning products used by Mint Sanitary"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why a Clean Workplace Matters for Your Business",
    body: whyMattersBody,
  },
  {
    _key: key("sec"),
    _type: "schedules",
    heading: "Flexible Commercial Cleaning Schedules",
    intro:
      "Every business has a different rhythm, so cleaning schedules should match that rhythm instead of forcing a business to adapt.",
    items: scheduleOptions.map(([title, body]) => ({ _key: key("sch"), title, body })),
  },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Ready to Talk About Your Cleaning Needs?",
    body: "Get a free, no-obligation estimate for your business. Seven-day availability, eco-friendly products, and transparent pricing.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "commercial-cleaning", {
  title: "Commercial Cleaning Services in Greater Vancouver",
  name: "Commercial Cleaning",
  // No tile blurb existed for Commercial Cleaning on either source page.
  tileImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Commercial cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Commercial Cleaning Services in Greater Vancouver",
  heroIntro:
    "A clean business is a competitive advantage. Clients notice it the moment they walk in, employees feel better working in it, and a well-kept space says something about how a company runs itself. Mint Sanitary provides commercial cleaning for offices, commercial kitchens, strata buildings, schools, gyms, and churches across Greater Vancouver, using eco-friendly products and WorkSafeBC compliant staff. We work around your hours, not the other way around, with clear, written pricing before work begins.",
  heroImage: await uploadImage(
    "/commercial-janitorial-cleaning-north-vancouver.jpg",
    "Commercial cleaning in Greater Vancouver"
  ),
  metaTitle: "Commercial Cleaning Services in Greater Vancouver",
  metaDescription:
    "Commercial cleaning across Greater Vancouver. Eco-friendly products, WorkSafeBC compliant staff, flexible schedules, and transparent pricing. Get a free estimate.",
  sections,
  published: true,
});

console.log("\n✓ Commercial cleaning migrated");
