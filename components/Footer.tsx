"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/cleaning-services-north-vancouver" },
  { label: "Rates", href: "/rates" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const categoryLinks = [
  { label: "Cleaning Services", href: "/cleaning-services-north-vancouver" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning-north-vancouver" },
  { label: "Carpet Cleaning", href: "/carpet-cleaning-north-vancouver" },
  { label: "Window Cleaning", href: "/window-cleaning-north-vancouver" },
  { label: "Pressure Washing", href: "/pressure-washing-north-vancouver" },
  { label: "Gutter Cleaning", href: "/gutter-cleaning-north-vancouver" },
];

const contactInfo = [
  { label: "Phone", value: "236-688-3248", href: "tel:+12366883248" },
  { label: "Email", value: "hello@mintsanitary.com", href: "mailto:hello@mintsanitary.com" },
  { label: "Address", value: "1106 E 3rd St, North Vancouver, BC V7H 1B8" },
  { label: "Hours", value: "7 Days a Week" },
];

const BUSINESS_DESCRIPTION =
  "Mint Sanitary provides trusted house cleaning in North Vancouver for families, apartments, and homes across BC. We also deliver expert commercial cleaning services in North Vancouver — covering offices, restaurants, and medical facilities, 7 days a week. Our team specialises in kitchen cleaning services in North Vancouver, bathroom cleaning in North Vancouver, floor cleaning in North Vancouver, and professional carpet cleaning in North Vancouver. Eco-friendly products, fully insured, and 5-star rated. Call (236) 688-3248.";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.299417157852!2d-123.0463855!3d49.3086131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671be30290b4b%3A0x2546ebb7bad5e868!2sMint%20Sanitary!5e0!3m2!1sen!2sca!4v1784269847071!5m2!1sen!2sca";

// Local business structured data — kept in the (global) footer so it ships on every page.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Mint Sanitary",
  image: "https://mintsanitary.com/mint-logo-white.png",
  logo: "https://mintsanitary.com/mint-logo-white.png",
  description: BUSINESS_DESCRIPTION,
  url: "https://mintsanitary.com/",
  telephone: "+12366883248",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1106 E 3rd St",
    addressLocality: "North Vancouver",
    addressRegion: "BC",
    postalCode: "V7H 1B8",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.3086131,
    longitude: -123.0463855,
  },
  areaServed: ["North Vancouver", "West Vancouver", "Vancouver", "Burnaby", "Greater Vancouver"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function Footer() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <footer className="relative z-10 bg-[#6191e9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="px-4 pb-[40px] pt-[60px] sm:px-8 md:px-[60px]">
        <div className="mb-[50px] flex flex-col gap-[60px] lg:flex-row">
          {/* Brand column */}
          <div className="flex flex-[1.5_0_0] flex-col gap-[16px]">
            <img src="/mint-logo-white.png" alt="Mint Sanitary" className="h-[42px] w-auto self-start" />
            <p className="max-w-[340px] font-body text-[15px] font-medium leading-[22px] text-white/75">
              Professional cleaning services for homes and businesses across
              North Vancouver and surrounding service areas.
            </p>
            <div className="mt-[6px] flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center self-start rounded-[99px] bg-white px-[24px] py-[10px] font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                Free Estimate
              </a>
              <a
                href="tel:+12366883248"
                className="inline-flex items-center justify-center self-start rounded-[99px] border border-white/50 px-[24px] py-[10px] font-body text-[14px] font-bold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Core Services
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {categoryLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Contact
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex flex-col gap-[2px]">
                  <span className="font-body font-extrabold text-[11px] tracking-[0.64px] uppercase text-white/45">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-body text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-body text-[15px] font-medium text-white/90">
                      {c.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-[24px] sm:flex-row sm:items-center">
          <p className="font-body text-[13px] font-medium tracking-[0.32px] text-white/50">
            © {new Date().getFullYear()} Mint Sanitary. All rights reserved.
          </p>
          <div className="flex items-center gap-[24px]">
            <a
              href="/privacy-policy"
              className="font-body text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="font-body text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              className="font-body text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white cursor-pointer"
            >
              More Information
            </button>
          </div>
        </div>

        {/* More Information — accordion */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            moreOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-[24px] flex flex-col gap-[24px] rounded-[16px] border border-white/15 bg-white/[0.08] p-[24px] sm:p-[28px] lg:flex-row">
              <div className="flex flex-1 flex-col gap-[10px]">
                <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/60">
                  Business Information
                </h4>
                <p className="font-display-reg text-[20px] uppercase text-white">
                  Mint Sanitary
                </p>
                <p className="font-body text-[14px] font-medium leading-[22px] text-white/80">
                  {BUSINESS_DESCRIPTION}
                </p>
                <div className="mt-[8px] flex flex-col gap-[4px] font-body text-[14px] font-medium text-white/90">
                  <span>1106 E 3rd St, North Vancouver, BC V7H 1B8</span>
                  <a href="tel:+12366883248" className="transition-colors duration-200 hover:text-white">
                    236-688-3248
                  </a>
                  <a
                    href="https://mintsanitary.com/"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    mintsanitary.com
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  src={MAP_EMBED_SRC}
                  className="h-[280px] w-full rounded-[12px] border-0 sm:h-[320px]"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Mint Sanitary location map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
