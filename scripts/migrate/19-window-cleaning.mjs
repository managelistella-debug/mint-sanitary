import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  paraWithLink,
  customTile,
} from "./lib.mjs";

/**
 * /services/window-cleaning — migrated from the hand-coded page now parked
 * at /services/window-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - The flat "What's Included" bullet list has no card title of its own in
 *    the source, so it became a single whatsIncluded card (title repeats the
 *    section heading, items hold the six bullets) — the same single-card,
 *    bulleted shape the house-cleaning page already uses.
 *  - "Our Window Cleaning Services" is a card grid whose three tiles link to
 *    anchors on /north-vancouver/window-cleaning, not to general /services/*
 *    pages, so it can't be a ref-based serviceTiles section. It uses
 *    serviceTiles' `customTiles` (hand-written tiles carrying their own
 *    href), retitled "Types of Window Cleaning We Offer" per the client, so
 *    it matches the site's standard tile styling. The trailing
 *    post-construction sentence that followed the grid moved into the
 *    section's intro, since a tiles section has no trailing-copy slot.
 *  - This page never had a distinct "Why Choose Mint Sanitary" section, so
 *    no whyChoose section was added — nothing to invent, nothing dropped.
 *  - "Pricing" is a single narrative paragraph containing a "/rates" link,
 *    not discrete tiers, and Pricing's notes field is a plain string that
 *    can't carry a real link. It stayed in Rich Text instead, alongside the
 *    "Safety and Insurance" and "Eco-Friendly by Default" paragraphs that
 *    shared its section in the source.
 *  - "Based in North Vancouver" carries three inline links in one paragraph.
 *    paraWithLink only carries one link per paragraph, so a small local
 *    `paraLinks` helper (same block/markDef shape as paraWithLink,
 *    generalized to multiple marks) keeps every link a real mark in a
 *    single paragraph.
 *  - Google Reviews render globally on every ServicePageLayout page
 *    regardless of page content; since this page has no natural Why Choose
 *    slot, the testimonials section sits just before the FAQ, matching
 *    where reviews actually land on the rendered page.
 */

/** Multi-link paragraph. `parts` alternates plain strings and [text, href] link tuples. */
function paraLinks(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (Array.isArray(part)) {
      const [text, href] = part;
      const linkKey = key("lnk");
      markDefs.push({ _key: linkKey, _type: "link", href });
      children.push({ _type: "span", _key: key("s"), text, marks: [linkKey] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

const ourServices = [
  ["Residential Window Cleaning", "/window-cleaning-residential-north-vancouver.webp", "/north-vancouver/window-cleaning#residential-window-cleaning", "Interior and exterior cleaning for homes of every size, from single-story bungalows to multi-story estates. We handle safe ladder and pole work, skylights, and thorough frame and sill cleaning."],
  ["Commercial Window Cleaning", "/window-cleaning-commercial-north-vancouver.webp", "/north-vancouver/window-cleaning#commercial-window-cleaning", "Storefront, office, and strata window cleaning that keeps your property looking sharp. We schedule around business hours and use certified rope-access equipment for high-rise buildings."],
  ["Window Screen Cleaning", "/window-cleaning-screen-north-vancouver.webp", "/north-vancouver/window-cleaning#window-screen-cleaning", "Dust, pollen, and salt air damage screens over time. We remove, deep clean, and reinstall screens, restoring airflow and improving indoor air quality."],
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
  ["Free estimate", "We assess your property, whether a home or a commercial building, and give you transparent pricing before any work starts."],
  ["Scheduling", "We work around your calendar, including early mornings, evenings, and weekends, so service doesn't disrupt your day or your business."],
  ["Pre-service inspection", "Our team checks glass type, access points, and any problem areas like hard water spots or screen damage before cleaning begins."],
  ["Professional cleaning", "We clean using eco-friendly, non-toxic products safe for people, pets, and landscaping, paired with squeegee and water-fed pole techniques suited to your property."],
  ["Final walk-through", "We inspect every window with you and address any missed spots on the spot."],
];

const faqItems = [
  ["How much does window cleaning cost?", "Residential window cleaning typically runs $150 to $400 per cleaning, depending on home size and window count. Commercial pricing depends on building size, height, and access, and is quoted after a free on-site or phone assessment. Visit our rates page for details, or call for a custom quote."],
  ["How often should I get my windows professionally cleaned?", "Most homeowners benefit from cleaning once or twice a year, in spring and fall. Commercial properties, especially ground-level storefronts, often need monthly or quarterly service. Coastal properties exposed to salt spray may need more frequent attention."],
  ["Are your cleaning products safe for kids, pets, and landscaping?", "Yes. We use eco-friendly, biodegradable products that are non-toxic and safe for children, pets, and the plants around your property. There's no harsh chemical residue left behind."],
  ["Do you clean windows in the rain?", "We can often work in light rain, since pure water rinses perform well in damp conditions. Heavy rain or storms may require rescheduling for safety and quality reasons. If we need to reschedule, we rebook at no penalty."],
  ["What's included in a standard window cleaning service?", "Interior and exterior glass, frames, tracks, and sills. Screens are inspected and cleaned as part of the visit. Skylights and specialty glass are available as an add-on. We don't handle window repairs or weatherstripping replacement, but we'll flag those issues if we spot them."],
  ["Do you offer recurring or subscription window cleaning?", "Yes. We offer quarterly, semi-annual, and annual plans with discounted rates compared to one-time service. Recurring customers also get priority scheduling."],
  ["Are you insured for high-access and commercial window cleaning?", "Yes. We carry general liability insurance and provide a Certificate of Insurance on request, and we follow WorkSafeBC fall protection requirements for high-rise and elevated work."],
  ["What areas do you serve?", "We're based in North Vancouver and serve the greater Metro Vancouver region, including West Vancouver, Vancouver, and Burnaby. Visit our service areas page to confirm coverage for your address."],
  ["Can you clean high windows, skylights, and specialty glass?", "Yes. We use professional-grade water-fed poles and safety-approved techniques for second-story, third-story, and taller windows. Skylights and Low-E or specialty glass are available as add-on services."],
  ["Do you offer a satisfaction guarantee?", "Yes. If you're not satisfied with your cleaning, contact us and we'll return to re-clean the affected windows at no extra cost."],
];

console.log("→ /services/window-cleaning");

const heroImage = await uploadImage(
  "/window-cleaning-hero-north-vancouver.webp",
  "Window cleaning in Greater Vancouver"
);

const ourServiceTiles = [];
for (const [title, image, href, description] of ourServices) {
  ourServiceTiles.push(await customTile({ title, image, href, description }));
}

const sections = [
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "We handle everything from single-story homes to multi-story commercial buildings. Our technicians are background-checked, bonded, and insured. We're available 7 days a week, we offer free estimates, and we never lock you into a contract. New customers get 10% off their first clean with code MINT26."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Professional Window Cleaning",
    intro:
      "Every window cleaning service covers the full surface, not just the glass. We use purified, deionized water rinses that dry spot-free. This matters most in coastal areas of Greater Vancouver, where hard water minerals and salt air leave residue that regular tap water rinses can't fully remove.",
    cards: [{ _key: key("card"), title: "What's Included", items: included }],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of Window Cleaning We Offer",
    intro:
      "Post-construction window cleaning is also available for newly built or renovated properties. Contact us to discuss your project.",
    tiles: [],
    customTiles: ourServiceTiles,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Professional Window Cleaning Matters",
    body: [
      para(
        "Clean windows protect more than curb appeal. Left untreated, hard water deposits and coastal salt residue can etch glass permanently, turning a cleaning problem into a replacement problem. Regular professional cleaning removes these deposits before they set in. For businesses, clean storefront and office glass shapes how customers and clients see your operation. For homes, clean windows let in more natural light, brighten interior rooms, and make a property look cared for, whether you're staying put or preparing to sell."
      ),
      heading("How Often Should Windows Be Cleaned?"),
      para(
        "Most homes benefit from professional window cleaning once or twice a year, ideally in spring and fall. Spring removes winter grime and road salt; fall prepares glass for the wet season ahead. Homes near trees, construction, or busy roads, or coastal properties exposed to salt spray, often do better on a quarterly schedule. Commercial properties usually need more frequent attention: ground-level storefronts benefit from monthly cleaning, standard office buildings typically do well on a quarterly schedule, and strata common areas often need monthly interior cleaning paired with bi-monthly or quarterly exterior service."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Pricing",
    body: [
      paraWithLink(
        "Residential window cleaning typically runs $150 to $400 per cleaning, depending on home size and window count. Commercial pricing depends on building size and access, with ground-level storefronts often priced at $1 to $2 per pane and larger buildings priced by square footage. Recurring service plans come with discounted rates compared to one-time cleanings. Every quote is free, with no hidden fees and no obligation. Visit our ",
        "rates page",
        "/rates",
        " for current pricing details, or call 236-688-3248 to talk through your specific property."
      ),
      heading("Safety and Insurance"),
      para(
        "Height work requires the right equipment and training. Our crews use certified anchor systems and safety harnesses for elevated and high-rise projects, and we follow WorkSafeBC fall protection requirements. We carry general liability insurance and provide a Certificate of Insurance on request for property managers and building owners."
      ),
      heading("Eco-Friendly by Default"),
      para(
        "We clean with biodegradable, non-toxic products that are safe for children, pets, and surrounding landscaping. No harsh chemicals, no strong fumes, and no residue left behind on plants or hard surfaces near your windows."
      ),
    ],
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Based in North Vancouver",
    body: [
      paraLinks([
        "We serve homes and businesses across the region. For a service closer to home, visit our ",
        ["North Vancouver window cleaning page", "/north-vancouver/window-cleaning"],
        ". See our ",
        ["service areas", "/service-areas"],
        " for the full list, or visit our ",
        ["North Vancouver", "/north-vancouver"],
        " hub page.",
      ]),
    ],
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
    heading: "Ready for Streak-Free Windows?",
    body: "Get a free quote at /rates or call us at 236-688-3248. New customers save 10% on their first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "window-cleaning", {
  title: "Window Cleaning Services",
  name: "Window Cleaning",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Window Cleaning Services",
  heroIntro:
    "Streaked, spotted, or grimy windows change how a property looks and feels. Mint Sanitary provides professional window cleaning for homes and businesses across Greater Vancouver, using eco-friendly products and safety-certified techniques that get glass genuinely clean, not just wiped down.",
  heroImage,
  metaTitle: "Window Cleaning Services | Mint Sanitary",
  metaDescription:
    "Professional window cleaning for homes and businesses across Greater Vancouver. Eco-friendly products, free estimates, 10% off with code MINT26.",
  sections,
  published: true,
});

console.log("\n✓ Window cleaning migrated");
