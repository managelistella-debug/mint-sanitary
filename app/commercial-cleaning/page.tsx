"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Briefcase,
  ShoppingBag,
  Dumbbell,
  Heart,
  Hotel,
  Warehouse,
  Factory,
  Sparkles,
  UtensilsCrossed,
  CheckCircle2,
  Key,
  Bell,
  ClipboardList,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Shared reveal hook (also handles reveal-left / reveal-right) ─────────────
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
                setTimeout(() => el.classList.add("visible"), i * 95);
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

// ── Data ─────────────────────────────────────────────────────────────────────
const callouts = [
  {
    label: "Bonded & Insured",
    sub: "Full commercial liability coverage on every job",
    bg: "#c8e0fd",
    textColor: "#0a2540",
  },
  {
    label: "Fully Customizable",
    sub: "Schedules and scope tailored to your business",
    bg: "#155da6",
    textColor: "#ffffff",
  },
  {
    label: "100% Satisfaction",
    sub: "We don't leave until the job meets our standard",
    bg: "#253862",
    textColor: "#ffffff",
  },
];

const facilities = [
  {
    Icon: Briefcase,
    label: "Offices AND Professional Spaces",
    desc: "Workstations, boardrooms, reception areas, and common spaces cleaned to a polished standard.",
  },
  {
    Icon: ShoppingBag,
    label: "Retail Stores",
    desc: "Showroom floors, display surfaces, fitting rooms, and customer-facing areas kept welcoming.",
  },
  {
    Icon: Dumbbell,
    label: "Gyms AND Fitness Centres",
    desc: "Equipment wiped down, floors disinfected, locker rooms sanitized, and high-touch areas cleaned.",
  },
  {
    Icon: Heart,
    label: "Medical Clinics",
    desc: "Infection-control protocols for waiting rooms, exam areas, and clinical high-contact surfaces.",
  },
  {
    Icon: Hotel,
    label: "Hotels AND Hospitality",
    desc: "Lobbies, corridors, guest-access areas, and back-of-house maintained to guest-ready standards.",
  },
  {
    Icon: Warehouse,
    label: "Warehouses",
    desc: "Floor sweeping, washroom maintenance, office areas, and loading dock entry points kept clean.",
  },
  {
    Icon: Factory,
    label: "Manufacturing Facilities",
    desc: "Break rooms, offices, and accessible facility areas safely cleaned around production schedules.",
  },
  {
    Icon: Sparkles,
    label: "Showrooms",
    desc: "Glass surfaces, display areas, floors, and entryways maintained to reflect your brand quality.",
  },
  {
    Icon: UtensilsCrossed,
    label: "Restaurants AND Cafes",
    desc: "Front-of-house cleaning — floors, surfaces, seating, and customer areas after service hours.",
  },
];

const interiorItems = [
  "Restrooms & washrooms",
  "Office floors — sweep, mop & vacuum",
  "Glass surfaces & interior windows",
  "Reception & common areas",
  "Break rooms & staff kitchens",
  "Boardrooms & meeting spaces",
];

const touchItems = [
  "Door handles & light switches",
  "Elevator buttons & panels",
  "Garbage & recycling removal",
  "Entryways & lobby floors",
  "High-contact surfaces disinfected",
  "Exterior entry glass & doors",
];

const accessFeatures = [
  {
    Icon: Key,
    title: "Key AND Fob Programs",
    desc: "We operate with your key or access fob, stored securely and returned on request.",
  },
  {
    Icon: Bell,
    title: "Alarm Code Protocols",
    desc: "Staff are trained in building entry, alarm codes, and after-hours access procedures.",
  },
  {
    Icon: ClipboardList,
    title: "Visit Reports",
    desc: "Every service includes a completed checklist and sign-off report for your records.",
  },
  {
    Icon: Users,
    title: "Consistent Team",
    desc: "The same trusted faces at your property — building familiarity and accountability.",
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function CommercialCleaningPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const overviewRef    = useReveal(0.08);
  const facilitiesRef  = useReveal(0.05);
  const whatRef        = useReveal(0.08);
  const imgRef         = useReveal(0.1);
  const accessRef      = useReveal(0.08);
  const areasBlurbRef  = useReveal(0.08);
  const ctaRef         = useReveal(0.08);

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
                "url('/commercial.png')",
            }}
          />
          <div className="absolute inset-0 bg-[#0a2540]/65" />

          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[20px] items-start max-w-[760px]"
          >
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] text-white uppercase">
              Commercial cleaning built for business.
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/90 max-w-[540px] leading-[1.5]">
              From offices to medical facilities — we keep your commercial space clean, presentable, and ready for business every single day.
            </p>
            <a
              href="/contact"
              className="reveal delay-2 inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </section>

        {/* ── 2. OVERVIEW ──────────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={overviewRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[60px] items-start">

            {/* Left — text */}
            <div className="flex flex-col gap-[24px] flex-[1.2_0_0]">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                A cleaner business,{" "}
                <br className="hidden md:block" />
                run on your schedule.
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px]">
                Commercial cleaning is more than a tidy workspace — it reflects your brand. A consistently clean environment improves employee morale, makes better first impressions, and ensures a safer space for everyone who walks through your doors.
              </p>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] tracking-[0.28px] leading-[28px]">
                Mint Sanitary designs service programs around your hours, your access requirements, and your specific facility — so operations never skip a beat.
              </p>
              <a
                href="/contact"
                className="reveal self-start inline-flex items-center justify-center bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Right — stacked callout strips */}
            <div className="flex-1 flex flex-col gap-[12px] w-full">
              {callouts.map((c, idx) => (
                <div
                  key={c.label}
                  className="reveal rounded-[12px] px-[28px] py-[24px] flex flex-col gap-[6px]"
                  style={{
                    background: c.bg,
                    transitionDelay: `${idx * 0.12}s`,
                  }}
                >
                  <p
                    className="font-body font-extrabold text-[20px] uppercase leading-none"
                    style={{ color: c.textColor }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="font-body font-medium text-[14px] leading-[21px] tracking-[0.28px]"
                    style={{ color: c.textColor, opacity: 0.75 }}
                  >
                    {c.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. FACILITIES WE SERVE ───────────────────────────────────── */}
        <section className="py-[80px] bg-[#253862]" ref={facilitiesRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[16px] items-center text-center">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white uppercase">
                Facilities We Serve
              </h2>
              <p className="font-body font-medium text-[16px] text-white/70 max-w-[580px] leading-[28px] tracking-[0.28px]">
                We clean a wide range of commercial environments across Metro Vancouver — each approached with the right methods, products, and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {facilities.map((f, idx) => {
                const { Icon } = f;
                return (
                  <div
                    key={f.label}
                    className="reveal card-hover bg-white rounded-[12px] p-[24px] flex flex-col gap-[14px]"
                    style={{ transitionDelay: `${idx * 0.07}s` }}
                  >
                    <div className="w-[46px] h-[46px] bg-[#c8e0fd] rounded-full flex items-center justify-center shrink-0">
                      <Icon size={22} strokeWidth={1.8} className="text-[#253862]" />
                    </div>
                    <p className="font-display-reg text-[15px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                      {f.label}
                    </p>
                    <p className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px] tracking-[0.28px]">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. WHAT WE COVER ─────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={whatRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                What We Cover
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] max-w-[560px] leading-[28px] tracking-[0.28px]">
                Every visit is thorough. From interior spaces to high-touch surface disinfection — our commercial scope leaves nothing overlooked.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[48px]">
              {/* Interior column */}
              <div className="flex flex-col gap-[20px] flex-1">
                <p className="reveal font-display-reg text-[17px] tracking-[0.64px] uppercase text-[#155da6] pb-[12px] border-b-2 border-[#155da6]/40">
                  Interior Spaces
                </p>
                <div className="flex flex-col gap-[14px]">
                  {interiorItems.map((item, i) => (
                    <div
                      key={item}
                      className="reveal flex items-start gap-[10px]"
                      style={{ transitionDelay: `${i * 0.07}s` }}
                    >
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        className="text-[#155da6] shrink-0 mt-[4px]"
                      />
                      <span className="font-body font-medium text-[15px] text-[#0a2540] leading-[22px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical divider — desktop only */}
              <div className="hidden md:block w-px bg-[#253862]/10 self-stretch" />

              {/* Touch points column */}
              <div className="flex flex-col gap-[20px] flex-1">
                <p className="reveal font-display-reg text-[17px] tracking-[0.64px] uppercase text-[#155da6] pb-[12px] border-b-2 border-[#155da6]/40">
                  Touch Points AND Specialty
                </p>
                <div className="flex flex-col gap-[14px]">
                  {touchItems.map((item, i) => (
                    <div
                      key={item}
                      className="reveal flex items-start gap-[10px]"
                      style={{ transitionDelay: `${i * 0.07}s` }}
                    >
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        className="text-[#155da6] shrink-0 mt-[4px]"
                      />
                      <span className="font-body font-medium text-[15px] text-[#0a2540] leading-[22px]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. EXTRA IMAGE ───────────────────────────────────────────── */}
        <div
          className="px-4 sm:px-8 md:px-[60px] pb-[60px] bg-[#f2f2f2]"
          ref={imgRef}
        >
          <div
            className="reveal img-zoom rounded-[12px] border border-black/10 relative"
            style={{ height: "460px" }}
          >
            <Image
              src="/commercial-2.png"
              alt="Mint Sanitary commercial team maintaining a professional workspace"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-[12px] object-cover"
            />
          </div>
        </div>

        {/* ── 6. RELIABILITY & ACCESS ──────────────────────────────────── */}
        <section className="py-[80px] bg-white" ref={accessRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[60px] md:items-stretch">

            {/* Image — fixed height on mobile, stretches on desktop */}
            <div className="reveal-left flex-1 img-zoom rounded-[12px] border border-black/10 w-full h-[360px] md:h-auto relative">
              <Image
                src="/commercial-3.png"
                alt="Mint Sanitary professional team — reliable access and consistent service"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-[12px] object-cover"
              />
            </div>

            {/* Text + feature grid */}
            <div className="flex-1 flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[14px]">
                <h2 className="reveal font-display text-[28px] sm:text-[34px] md:text-[40px] leading-[1.15] text-[#253862] uppercase">
                  We work around your business. Not the other way.
                </h2>
                <p className="reveal font-body font-medium text-[15px] text-[#0a2540] leading-[26px] tracking-[0.28px]">
                  Commercial cleaning demands trust, discretion, and adaptability. We&apos;re experienced with after-hours access, alarm systems, and multi-tenant building protocols — and we take that responsibility seriously.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                {accessFeatures.map((feat, idx) => {
                  const { Icon } = feat;
                  return (
                    <div
                      key={feat.title}
                      className="reveal card-hover flex flex-col gap-[10px] bg-[#f2f2f2] rounded-[12px] p-[20px]"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-[38px] h-[38px] bg-[#c8e0fd] rounded-[8px] flex items-center justify-center shrink-0">
                        <Icon size={18} strokeWidth={1.8} className="text-[#155da6]" />
                      </div>
                      <p className="font-display-reg text-[13px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                        {feat.title}
                      </p>
                      <p className="font-body font-medium text-[13px] text-[#0a2540] leading-[20px] tracking-[0.28px]">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. SERVICE AREAS ─────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#c8e0fd]" ref={areasBlurbRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col md:flex-row gap-[60px] items-start md:items-center">
            {/* Text */}
            <div className="flex flex-col gap-[24px] flex-[1.2_0_0] w-full">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                Serving Metro Vancouver
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-[#0a2540] leading-[28px] tracking-[0.28px] max-w-[480px]">
                Mint Sanitary provides commercial services across the Lower Mainland. Whether your office is downtown Vancouver or your facility is out in the suburbs — we have you covered with the same standard, everywhere.
              </p>
              <a
                href="/service-areas"
                className="reveal self-start inline-flex items-center justify-center bg-[#155da6] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#253862] transition-colors duration-200"
              >
                View All Service Areas
              </a>
            </div>

            {/* Area pills */}
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
              <div className="bg-[#253862] rounded-[12px] h-[58px] flex items-center justify-center">
                <span className="font-display text-[22px] tracking-[0.96px] uppercase text-white leading-none">
                  AND MORE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. CTA ───────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-[80px] md:py-[100px] bg-[#253862]"
          ref={ctaRef}
        >
          <div className="flex flex-col gap-[48px] md:gap-[64px] items-center px-4 sm:px-8 md:px-[60px] text-center">
            <div className="reveal flex flex-col gap-[8px] items-center uppercase">
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
                Ready to keep your business spotless?
              </h2>
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
                Let&apos;s build your cleaning plan.
              </p>
            </div>

            <p className="reveal font-body font-medium text-[16px] text-white/65 max-w-[540px] leading-[28px] tracking-[0.28px]">
              Get a free site visit and custom commercial cleaning proposal. We&apos;ll learn your facility, understand your schedule, and deliver a transparent quote — fast.
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
                  hello@mintsanitary.com
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
                href="mailto:hello@mintsanitary.com"
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
