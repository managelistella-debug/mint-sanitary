"use client";

import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Shared reveal hook ────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── City data ─────────────────────────────────────────────────────────────────
const cities = [
  {
    name: "Vancouver",
    blurb:
      "Smart Cleaning serves all Vancouver neighbourhoods — from downtown highrises and Yaletown condos to East Van homes and Commercial Drive businesses. We provide strata, commercial, and residential cleaning across the city.",
  },
  {
    name: "North Vancouver",
    blurb:
      "From Lower Lonsdale apartment towers to the residential hillsides of Lynn Valley and Edgemont Village, our team provides reliable cleaning services for strata buildings, offices, and homes throughout the North Shore.",
  },
  {
    name: "West Vancouver",
    blurb:
      "We serve West Vancouver's upscale residential properties and professional offices — from Horseshoe Bay to Ambleside and Dundarave. Strata complexes, private residences, and commercial spaces all serviced to a high standard.",
  },
  {
    name: "Burnaby",
    blurb:
      "Burnaby's growing commercial hubs and residential strata towers are well within our service area. We cover Metrotown, Brentwood, Highgate, and all surrounding neighbourhoods with consistent, professional cleaning.",
  },
  {
    name: "Richmond",
    blurb:
      "From the busy commercial corridors of No. 3 Road to Richmond's diverse residential communities, Smart Cleaning provides dependable strata, commercial, and home cleaning services across the entire city.",
  },
  {
    name: "Coquitlam",
    blurb:
      "We service Coquitlam's expanding residential developments, commercial properties, and strata buildings throughout Coquitlam Centre, Burke Mountain, Westwood Plateau, and neighbouring areas.",
  },
  {
    name: "Port Coquitlam",
    blurb:
      "Smart Cleaning covers Port Coquitlam's homes, small businesses, and community buildings. We deliver consistent professional cleaning to both residential and commercial clients throughout the city.",
  },
  {
    name: "Port Moody",
    blurb:
      "From Heritage Mountain townhouses to Inlet Centre condos and Suterbrook Village, Smart Cleaning provides thorough residential and strata cleaning services throughout Port Moody and its surrounding communities.",
  },
  {
    name: "New Westminster",
    blurb:
      "We serve the historic city of New Westminster — including its downtown commercial district, riverside strata buildings, and residential neighbourhoods — with professional, detail-driven cleaning solutions.",
  },
  {
    name: "Surrey",
    blurb:
      "With Surrey as one of BC's fastest-growing cities, Smart Cleaning provides comprehensive services for its expanding residential developments, commercial spaces, and strata buildings across all six town centres.",
  },
  {
    name: "Delta",
    blurb:
      "Smart Cleaning covers North Delta, Ladner, and Tsawwassen, providing professional cleaning services to homes, businesses, and strata properties throughout the municipality of Delta.",
  },
  {
    name: "Langley",
    blurb:
      "We serve both the Township and City of Langley — providing reliable cleaning for suburban homes, commercial properties, retail spaces, and strata buildings in this rapidly growing community.",
  },
  {
    name: "Maple Ridge",
    blurb:
      "From newer residential developments to established strata complexes along the Lougheed corridor, Smart Cleaning brings professional-grade cleaning services to homes and businesses throughout Maple Ridge.",
  },
  {
    name: "White Rock",
    blurb:
      "Smart Cleaning serves White Rock's oceanfront condos, residential homes, and local businesses — providing dependable cleaning across this sought-after South Surrey community.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ServiceAreasPage() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const introRef  = useReveal(0.08);
  const citiesRef = useReveal(0.04);
  const ctaRef    = useReveal(0.08);

  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 160);
      });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "400px", height: "520px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1559511260-66a654ae982a?w=1440&h=700&fit=crop&q=80')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,37,64,0.88) 0%, rgba(10,37,64,0.55) 55%, rgba(10,37,64,0.35) 100%)",
            }}
          />

          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[20px] items-center text-center max-w-[780px]"
          >
            <div className="reveal flex items-center gap-[8px]">
              <MapPin size={16} strokeWidth={2} className="text-[#c8e0fd]" />
              <span className="font-display-reg text-[13px] tracking-[0.96px] uppercase text-[#c8e0fd]">
                Metro Vancouver
              </span>
            </div>
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] text-white uppercase">
              Serving Greater Vancouver
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/85 max-w-[560px] leading-[1.55]">
              Professional cleaning services across 14+ cities in Metro Vancouver and the Fraser Valley — consistent, reliable, and local.
            </p>
            <a
              href="/contact"
              className="reveal delay-2 inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </section>

        {/* ── 2. INTRO ──────────────────────────────────────────────────── */}
        <section className="py-[60px] bg-[#f2f2f2]" ref={introRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[48px] items-center">
            <div className="flex flex-col gap-[16px] flex-[1.2_0_0]">
              <h2 className="reveal font-display text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#253862] uppercase">
                Local Cleaning, Done Right
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px] max-w-[520px]">
                Whether you&apos;re in a downtown Vancouver highrise, a Burnaby strata complex, or a suburban home in Langley — Smart Cleaning brings the same trained team, the same thorough standard, and the same reliability to your door.
              </p>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px] max-w-[520px]">
                We&apos;re a Metro Vancouver company. This is our community — and keeping it clean is our commitment.
              </p>
            </div>

            {/* Stats strip */}
            <div className="reveal flex-1 grid grid-cols-2 gap-[14px] w-full">
              {[
                { stat: "14+", sub: "Cities served" },
                { stat: "3+",  sub: "Years operating" },
                { stat: "ALL", sub: "Service types" },
                { stat: "1",   sub: "Consistent standard" },
              ].map((s) => (
                <div
                  key={s.sub}
                  className="bg-[#253862] rounded-[12px] p-[24px] flex flex-col gap-[6px]"
                >
                  <span className="font-body font-extrabold text-[36px] leading-none text-[#c8e0fd]">
                    {s.stat}
                  </span>
                  <span className="font-body font-medium text-[12px] text-white/60 tracking-[0.32px] uppercase leading-[18px]">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. CITIES GRID ────────────────────────────────────────────── */}
        <section className="pt-[40px] md:pt-[80px] pb-[80px] bg-[#f2f2f2]" ref={citiesRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[10px] items-center text-center">
              <h2 className="reveal font-display text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#253862] uppercase">
                Areas We Cover
              </h2>
              <p className="reveal font-body font-medium text-[15px] text-[#0a2540]/70 tracking-[0.28px] leading-[24px]">
                Contact us for a free quote — we serve most Metro Vancouver neighbourhoods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {cities.map((city, idx) => (
                <div
                  key={city.name}
                  className="reveal card-hover bg-white rounded-[12px] p-[28px] flex flex-col gap-[12px] border border-black/6"
                  style={{ transitionDelay: `${(idx % 6) * 0.07}s` }}
                >
                  <div className="flex items-center gap-[10px]">
                    <div className="w-[8px] h-[8px] bg-[#155da6] rounded-full shrink-0" />
                    <h3 className="font-display-reg text-[20px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                      {city.name}
                    </h3>
                  </div>
                  <p className="font-body font-medium text-[15px] text-[#0a2540] leading-[24px] tracking-[0.28px]">
                    {city.blurb}
                  </p>
                </div>
              ))}
            </div>

            {/* Not on the list? blurb */}
            <div className="reveal bg-[#c8e0fd] rounded-[12px] p-[28px] flex flex-col sm:flex-row sm:items-center gap-[20px] justify-between">
              <div className="flex flex-col gap-[6px]">
                <p className="font-display-reg text-[17px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                  Don&apos;t see your city?
                </p>
                <p className="font-body font-medium text-[15px] text-[#0a2540] leading-[22px] max-w-[480px]">
                  We&apos;re always expanding our service area. Reach out and we&apos;ll let you know if we can accommodate your location.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center shrink-0 bg-[#253862] text-[#c8e0fd] font-body font-extrabold text-[15px] tracking-[0.32px] uppercase rounded-[99px] px-[32px] py-[12px] hover:bg-[#155da6] transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. CTA ────────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-[80px] md:py-[100px] bg-[#253862]"
          ref={ctaRef}
        >
          <div className="flex flex-col gap-[48px] md:gap-[64px] items-center px-4 sm:px-8 md:px-[60px] text-center">
            <div className="reveal flex flex-col gap-[8px] items-center uppercase">
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
                Your city. Our standard.
              </h2>
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
                Let&apos;s get started.
              </p>
            </div>

            <p className="reveal font-body font-medium text-[16px] text-white/65 max-w-[520px] leading-[28px] tracking-[0.28px]">
              Get in touch for a free quote. Tell us your location, your needs, and we&apos;ll take care of the rest — fast, local, and reliable.
            </p>

            <div className="reveal flex flex-col sm:flex-row items-stretch justify-center gap-[40px] w-full max-w-[640px]">
              <div className="flex-1 flex flex-col gap-[7px] pb-[20px] border-b border-[#c8e0fd] text-left">
                <p className="font-body font-extrabold text-[16px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                  Call Us
                </p>
                <p className="font-body font-extrabold text-[22px] uppercase text-white leading-[28px]">
                  604-123-4567
                </p>
                <p className="font-body font-medium text-[13px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                  Mon–Sat, 7am–6pm
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-[7px] pb-[20px] border-b border-[#c8e0fd] text-left">
                <p className="font-body font-extrabold text-[16px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                  Email Us
                </p>
                <p className="font-body font-extrabold text-[20px] uppercase text-white leading-[28px]">
                  info@smartcleaning.com
                </p>
                <p className="font-body font-medium text-[13px] tracking-[0.32px] uppercase text-[#c8e0fd] leading-[22px]">
                  Reply within 2 hours
                </p>
              </div>
            </div>

            <div className="reveal flex flex-col sm:flex-row gap-[16px] w-full max-w-[500px]">
              <a
                href="tel:6041234567"
                className="w-full inline-flex items-center justify-center gap-[8px] bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href="mailto:info@smartcleaning.com"
                className="w-full inline-flex items-center justify-center gap-[8px] border-2 border-[#c8e0fd] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#c8e0fd] hover:text-[#253862] transition-colors duration-200"
              >
                <Mail size={16} strokeWidth={2.5} />
                Email Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
