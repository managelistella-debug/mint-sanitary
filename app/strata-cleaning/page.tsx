"use client";

import { useEffect, useRef } from "react";
import {
  Building2,
  ArrowUpDown,
  Layers,
  Users,
  Car,
  Trash2,
  MoveHorizontal,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Shared reveal hook ──────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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

// ── Data ────────────────────────────────────────────────────────────────────
const focusAreas = [
  {
    Icon: Building2,
    label: "Lobbies and Entryways",
    desc: "First impressions count. We keep your main entrance spotless, welcoming, and dust-free every visit.",
  },
  {
    Icon: MoveHorizontal,
    label: "Hallways and Corridors",
    desc: "High-traffic walkways vacuumed, mopped, and baseboards wiped to a consistent standard.",
  },
  {
    Icon: ArrowUpDown,
    label: "Elevators",
    desc: "Interior panels, flooring, mirrors, and all touch-point buttons disinfected on every visit.",
  },
  {
    Icon: Layers,
    label: "Stairwells",
    desc: "Treads swept, railings wiped, walls spot-cleaned, and landings mopped throughout.",
  },
  {
    Icon: Users,
    label: "Amenity Rooms",
    desc: "Gyms, lounges, party rooms, and meeting spaces cleaned, sanitized, and refreshed.",
  },
  {
    Icon: Car,
    label: "Parkade Touch Points",
    desc: "Entry doors, intercom panels, pay stations, and all high-contact surfaces sanitized.",
  },
  {
    Icon: Trash2,
    label: "Bin and Garbage Rooms",
    desc: "Bins wiped down inside and out, floors swept and mopped, odor controlled.",
  },
  {
    Icon: Sparkles,
    label: "Mail and Parcel Areas",
    desc: "Surfaces cleaned, floors cleared, and package areas kept neat and presentable.",
  },
];

const buildingTypes = [
  {
    title: "Residential Strata",
    desc: "Condos, apartments, and townhouse complexes — from 10 units to 400+. We tailor the program to your building size, traffic level, and strata council requirements.",
    bg: "#c8e0fd",
    textColor: "#0a2540",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=430&h=280&fit=crop&q=80",
  },
  {
    title: "Commercial Strata",
    desc: "Office towers, retail plazas, and professional buildings. We schedule around business hours with zero disruption to tenants or operations.",
    bg: "#155da6",
    textColor: "#ffffff",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=430&h=280&fit=crop&q=80",
  },
  {
    title: "Mixed-Use Strata",
    desc: "Buildings combining residential units with ground-floor retail or commercial space — handled seamlessly under one contract, one team, one standard.",
    bg: "#253862",
    textColor: "#ffffff",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=430&h=280&fit=crop&q=80",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Assessment",
    desc: "We walk through your property, assess common areas, and identify your building's specific cleaning needs — no cost, no commitment.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    desc: "We prepare a tailored cleaning plan and a fully transparent quote. No hidden fees, no surprises.",
  },
  {
    num: "03",
    title: "Schedule Agreed",
    desc: "We lock in a service schedule that works for your building, your strata council, and your residents.",
  },
  {
    num: "04",
    title: "Service Begins",
    desc: "Our team shows up on time, every time — consistent, reliable, and detail-driven from day one.",
  },
];

const schedules = [
  {
    title: "Daily",
    ideal: "Best for large residential or commercial strata with 100+ units or very high foot traffic.",
    features: [
      "Morning or evening service windows",
      "Full common area coverage each visit",
      "Priority response for incidents",
    ],
    bg: "#c8e0fd",
    textColor: "#0a2540",
    accent: "#155da6",
  },
  {
    title: "Weekly",
    ideal: "Our most popular package — ideal for mid-size strata buildings.",
    features: [
      "Consistent weekly deep clean",
      "Monthly high-reach dusting included",
      "Detailed visit reports provided",
    ],
    bg: "#155da6",
    textColor: "#ffffff",
    accent: "#c8e0fd",
  },
  {
    title: "Custom",
    ideal: "For seasonal needs, one-off deep cleans, or supplementary service on top of existing staff.",
    features: [
      "Fully flexible scheduling",
      "Bi-weekly, monthly, or on-call",
      "No long-term contract required",
    ],
    bg: "#253862",
    textColor: "#ffffff",
    accent: "#c8e0fd",
  },
];

const serviceAreas = [
  "Maple Ridge",
  "Pitt Meadows",
  "Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "New Westminster",
];

// ── Page ────────────────────────────────────────────────────────────────────
export default function StrataCleaningPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const introRef    = useReveal(0.08);
  const areasRef    = useReveal(0.05);
  const img1Ref     = useReveal(0.1);
  const buildingRef = useReveal(0.08);
  const stepsRef    = useReveal(0.08);
  const schedRef    = useReveal(0.08);
  const img2Ref     = useReveal(0.1);
  const areasBlurbRef = useReveal(0.08);
  const ctaRef      = useReveal(0.08);

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

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "400px", height: "580px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440&h=700&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[#0a2540]/60" />

          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[20px] items-start max-w-[760px]"
          >
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] text-white uppercase">
              Keeping your building&apos;s common areas spotless.
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/90 max-w-[540px] leading-[1.5]">
              Reliable strata cleaning for residential, commercial, and mixed-use buildings across Metro Vancouver.
            </p>
            <a
              href="/contact"
              className="reveal delay-2 inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </section>

        {/* ── 2. WHAT IS STRATA CLEANING ───────────────────────────────── */}
        <section
          className="py-[80px] bg-[#f2f2f2]"
          ref={introRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[60px] items-start">
            {/* Left — text */}
            <div className="flex flex-col gap-[24px] flex-[1.2_0_0]">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                What is Strata Cleaning?
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px]">
                Strata cleaning is the professional maintenance of shared spaces within multi-unit buildings — the common areas every resident, tenant, and visitor uses daily. Unlike cleaning individual suites, strata cleaning is focused entirely on keeping lobbies, hallways, elevators, amenity rooms, parkades, and other shared spaces consistently clean, hygienic, and welcoming.
              </p>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px]">
                A well-maintained building improves resident satisfaction, upholds property values, and ensures a healthy environment for everyone. Smart Cleaning designs fully customized strata programs built around your building&apos;s size, traffic patterns, and strata council requirements — with the same trusted team on every visit.
              </p>
              <a
                href="/contact"
                className="reveal self-start inline-flex items-center justify-center bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
              >
                Request a Free Quote
              </a>
            </div>

            {/* Right — stat grid */}
            <div className="reveal flex-1 grid grid-cols-2 gap-[16px]">
              {[
                { stat: "3+",    sub: "Years in strata" },
                { stat: "50+",   sub: "Buildings served" },
                { stat: "100%",  sub: "Satisfaction rate" },
                { stat: "SAME",  sub: "Team every visit" },
              ].map((s) => (
                <div
                  key={s.stat}
                  className="bg-[#c8e0fd] rounded-[12px] p-[24px] md:p-[30px] flex flex-col gap-[6px]"
                >
                  <span className="font-body font-extrabold text-[38px] leading-none text-[#253862]">
                    {s.stat}
                  </span>
                  <span className="font-body font-medium text-[13px] text-[#0a2540] tracking-[0.28px] uppercase leading-[18px]">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. COMMON AREAS OF FOCUS ─────────────────────────────────── */}
        <section
          className="py-[80px] bg-[#155da6]"
          ref={areasRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[16px] items-center text-center">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white uppercase">
                Common Areas
                <br className="md:hidden" />
                {" "}We Clean
              </h2>
              <p className="font-body font-medium text-[16px] text-white/80 max-w-[620px] leading-[28px] tracking-[0.28px]">
                Every building is different, but these are the shared spaces we specialize in — cleaned on a schedule that keeps your property looking its best, every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {focusAreas.map((area, idx) => {
                const { Icon } = area;
                return (
                  <div
                    key={area.label}
                    className="reveal bg-white rounded-[12px] p-[24px] flex flex-col gap-[14px]"
                    style={{ transitionDelay: `${idx * 0.07}s` }}
                  >
                    <div className="w-[44px] h-[44px] bg-[#c8e0fd] rounded-[10px] flex items-center justify-center shrink-0">
                      <Icon size={22} strokeWidth={1.8} className="text-[#155da6]" />
                    </div>
                    <p className="font-display-reg text-[16px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                      {area.label}
                    </p>
                    <p className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px] tracking-[0.28px]">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. IMAGE 1 ───────────────────────────────────────────────── */}
        <div
          className="px-4 sm:px-8 md:px-[60px] py-[60px] bg-[#f2f2f2]"
          ref={img1Ref}
        >
          <div
            className="reveal img-zoom rounded-[12px] border border-black/10"
            style={{ height: "460px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1320&h=460&fit=crop&q=80"
              alt="Smart Cleaning professional maintaining a strata building"
              className="rounded-[12px]"
            />
          </div>
        </div>

        {/* ── 5. TYPES OF BUILDINGS ─────────────────────────────────────── */}
        <section
          className="pb-[80px] bg-[#f2f2f2]"
          ref={buildingRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px]">
            <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase mb-[30px]">
              Types of Buildings We Serve
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
              {buildingTypes.map((b, idx) => (
                <div
                  key={b.title}
                  className="reveal flex flex-col gap-[14px] flex-1"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div
                    className="img-zoom rounded-[12px] border border-black/10"
                    style={{ height: "280px" }}
                  >
                    <img
                      src={b.image}
                      alt={b.title}
                      className="rounded-[12px]"
                    />
                  </div>
                  <div
                    className="rounded-[12px] p-[20px] flex flex-col gap-[10px]"
                    style={{ background: b.bg, color: b.textColor }}
                  >
                    <p className="font-display-reg text-[22px] tracking-[0.96px] uppercase leading-[24px]">
                      {b.title}
                    </p>
                    <p className="font-body font-medium text-[15px] tracking-[0.28px] leading-[22px]">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HOW IT WORKS ──────────────────────────────────────────── */}
        <section
          className="py-[80px] bg-[#253862]"
          ref={stepsRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[50px]">
            <div className="reveal flex flex-col gap-[12px]">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white uppercase">
                How It Works
              </h2>
              <p className="font-body font-medium text-[16px] text-white/60 max-w-[500px] leading-[26px] tracking-[0.28px]">
                Getting started is easy. We handle everything from initial assessment to your first service day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="reveal flex flex-col gap-[16px] border-t-2 border-[#c8e0fd]/30 pt-[24px]"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <span className="font-body font-extrabold text-[52px] leading-none text-[#c8e0fd]/30">
                    {step.num}
                  </span>
                  <p className="font-display-reg text-[18px] tracking-[0.64px] uppercase text-white leading-none">
                    {step.title}
                  </p>
                  <p className="font-body font-medium text-[15px] text-white/65 leading-[24px] tracking-[0.28px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. SCHEDULE OPTIONS ──────────────────────────────────────── */}
        <section
          className="py-[80px] bg-[#f2f2f2]"
          ref={schedRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[12px] items-center text-center">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                Schedule Options
              </h2>
              <p className="font-body font-medium text-[16px] text-[#0a2540] max-w-[600px] leading-[28px] tracking-[0.28px]">
                We work around your building — not the other way around. Choose a service frequency that fits your property&apos;s size, traffic, and budget.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[20px]">
              {schedules.map((s, idx) => (
                <div
                  key={s.title}
                  className="reveal flex-1 rounded-[12px] p-[30px] flex flex-col gap-[20px]"
                  style={{ background: s.bg, transitionDelay: `${idx * 0.12}s` }}
                >
                  <p
                    className="font-display text-[36px] leading-none uppercase"
                    style={{ color: s.textColor }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="font-body font-medium text-[14px] leading-[22px] tracking-[0.28px]"
                    style={{ color: s.textColor, opacity: 0.8 }}
                  >
                    {s.ideal}
                  </p>
                  <div className="flex flex-col gap-[12px] mt-auto pt-[8px] border-t border-current/20">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-start gap-[10px]">
                        <CheckCircle2
                          size={16}
                          strokeWidth={2}
                          style={{ color: s.accent }}
                          className="shrink-0 mt-[3px]"
                        />
                        <span
                          className="font-body font-medium text-[14px] leading-[22px]"
                          style={{ color: s.textColor }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. IMAGE 2 ───────────────────────────────────────────────── */}
        <div
          className="px-4 sm:px-8 md:px-[60px] pb-[60px] bg-[#f2f2f2]"
          ref={img2Ref}
        >
          <div
            className="reveal img-zoom rounded-[12px] border border-black/10"
            style={{ height: "460px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1320&h=460&fit=crop&q=80"
              alt="Clean and maintained strata building common area"
              className="rounded-[12px]"
            />
          </div>
        </div>

        {/* ── 9. SERVICE AREAS ─────────────────────────────────────────── */}
        <section
          className="py-[80px] bg-[#c8e0fd]"
          ref={areasBlurbRef}
        >
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[60px] items-start md:items-center">
            {/* Text */}
            <div className="flex flex-col gap-[24px] flex-[1.2_0_0] w-full">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                Serving Metro Vancouver
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] leading-[28px] tracking-[0.28px] max-w-[480px]">
                Smart Cleaning provides strata services across the Lower Mainland and Fraser Valley. From downtown Vancouver highrises to suburban townhouse complexes — if your building is in Greater Vancouver, we&apos;ve got you covered.
              </p>
              <a
                href="/service-areas"
                className="reveal self-start inline-flex items-center justify-center bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
              >
                Check Your Area
              </a>
            </div>

            {/* Area pills + AND MORE */}
            <div className="reveal flex-1 w-full flex flex-col gap-[12px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px]">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className={`h-[58px] flex items-center justify-center border border-[#253862] rounded-[12px] bg-white/50 hover:bg-[#253862] group transition-colors duration-300 cursor-pointer${area === "New Westminster" ? " sm:hidden" : ""}`}
                  >
                    <span className="font-display-reg text-[12px] sm:text-[13px] tracking-[0.64px] uppercase text-[#253862] group-hover:text-white transition-colors duration-300 leading-none text-center px-2">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
              {/* AND MORE banner */}
              <div className="bg-[#253862] rounded-[12px] h-[58px] flex items-center justify-center">
                <span className="font-display text-[22px] tracking-[0.96px] uppercase text-white leading-none">
                  AND MORE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. CTA ──────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-[80px] md:py-[100px] bg-[#253862]"
          ref={ctaRef}
        >
          <div className="flex flex-col gap-[48px] md:gap-[64px] items-center px-4 sm:px-8 md:px-[60px] text-center">
            <div className="reveal flex flex-col gap-[8px] items-center uppercase">
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
                Ready to elevate your strata?
              </h2>
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
                Let&apos;s build a plan together.
              </p>
            </div>

            <p className="reveal font-body font-medium text-[16px] text-white/65 max-w-[540px] leading-[28px] tracking-[0.28px]">
              Get a free, no-obligation walkthrough of your building. We&apos;ll assess your common areas, understand your needs, and deliver a detailed quote — fast.
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

            <div className="reveal flex flex-col sm:flex-row gap-[16px] w-full sm:w-auto">
              <a
                href="tel:6041234567"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-[8px] bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href="mailto:info@smartcleaning.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-[8px] border-2 border-[#c8e0fd] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#c8e0fd] hover:text-[#253862] transition-colors duration-200"
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
