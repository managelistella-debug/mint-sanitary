"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChefHat,
  Droplets,
  Sofa,
  BedDouble,
  Layers,
  Fingerprint,
  RefreshCw,
  CalendarCheck,
  ShieldCheck,
  UserCheck,
  Star,
  ThumbsUp,
  Calendar,
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Shared reveal hook ───────────────────────────────────────────────────────
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
const cleaningCategories = [
  {
    Icon: ChefHat,
    label: "Kitchens",
    items: ["Countertops & backsplash", "Sink & fixtures polished", "Appliance surfaces wiped", "Cabinet fronts cleaned", "Floors swept & mopped"],
  },
  {
    Icon: Droplets,
    label: "Bathrooms",
    items: ["Toilet & bowl scrubbed", "Tub & shower cleaned", "Sink, mirror & fixtures", "Floors mopped & grout", "Chrome polished"],
  },
  {
    Icon: Sofa,
    label: "Living Areas",
    items: ["All surfaces dusted", "Floors swept & vacuumed", "Baseboards wiped down", "Light switches & handles", "Décor & shelves dusted"],
  },
  {
    Icon: BedDouble,
    label: "Bedrooms",
    items: ["Surfaces dusted & wiped", "Floors vacuumed", "Under-bed sweep", "Mirrors cleaned", "General tidy-up"],
  },
  {
    Icon: Layers,
    label: "Floors AND Stairs",
    items: ["Hardwood, tile & carpet", "Staircase treads vacuumed", "Landings swept & mopped", "Baseboards & trim wiped", "Sills & ledges"],
  },
  {
    Icon: Fingerprint,
    label: "Touch Points",
    items: ["Door handles & knobs", "Light switches & panels", "Cabinet & drawer pulls", "Appliance handles", "Remote controls & devices"],
  },
];

const recurringFeatures = [
  "Weekly, bi-weekly or monthly",
  "Same team every visit",
  "Discounted ongoing rate",
  "Priority scheduling & booking",
  "Customizable checklist over time",
];

const oneTimeFeatures = [
  "Move-in & move-out cleans",
  "Seasonal deep cleans",
  "Post-renovation cleanup",
  "Pre-sale preparation",
  "No contract required",
];

const trustItems = [
  {
    Icon: ShieldCheck,
    title: "Fully Insured AND Bonded",
    desc: "Every clean is backed by full liability coverage so you can book with complete peace of mind.",
    bg: "#c8e0fd",
    iconColor: "#155da6",
  },
  {
    Icon: UserCheck,
    title: "Background-Checked Staff",
    desc: "All team members are vetted, trained, and held to a consistent standard before entering your home.",
    bg: "#c8e0fd",
    iconColor: "#155da6",
  },
  {
    Icon: Star,
    title: "Same Team Every Visit",
    desc: "Familiar faces who know your home, your preferences, and your routine — building real trust.",
    bg: "#c8e0fd",
    iconColor: "#155da6",
  },
  {
    Icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "If something isn't right, we'll come back and fix it — no questions, no hassle.",
    bg: "#c8e0fd",
    iconColor: "#155da6",
  },
];

const steps = [
  {
    num: "01",
    Icon: Calendar,
    title: "Book Your Clean",
    desc: "Schedule by phone, text, or email. Tell us your home size, frequency, and any special requests.",
  },
  {
    num: "02",
    Icon: MessageSquare,
    title: "We Confirm the Details",
    desc: "We review your needs, confirm the schedule, and let you know exactly what to expect.",
  },
  {
    num: "03",
    Icon: Clock,
    title: "Our Team Arrives",
    desc: "On time, every time. Our team shows up prepared and works efficiently through your home.",
  },
  {
    num: "04",
    Icon: Sparkles,
    title: "Enjoy a Spotless Home",
    desc: "Come home to a freshly cleaned space — or simply relax while we take care of everything.",
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
export default function ResidentialCleaningPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const cleanRef      = useReveal(0.05);
  const recurringRef  = useReveal(0.08);
  const trustRef      = useReveal(0.08);
  const imgRef        = useReveal(0.1);
  const processRef    = useReveal(0.08);
  const areasBlurbRef = useReveal(0.08);
  const ctaRef        = useReveal(0.08);

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
                "url('/residential.png')",
            }}
          />
          <div className="absolute inset-0 bg-[#0a2540]/60" />

          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[20px] items-start max-w-[760px]"
          >
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] text-white uppercase">
              A clean home. Every visit.
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/90 max-w-[540px] leading-[1.5]">
              Recurring and one-time residential cleaning for homes across Metro Vancouver — reliable, detail-driven, and done right.
            </p>
            <a
              href="/contact"
              className="reveal delay-2 inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
            >
              Book a Clean
            </a>
          </div>
        </section>

        {/* ── 2. WHAT WE CLEAN ─────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={cleanRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[14px] items-center text-center">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                Everything We Clean, Every Visit
              </h2>
              <p className="font-body font-medium text-[16px] text-[#0a2540] max-w-[580px] leading-[28px] tracking-[0.28px]">
                From the kitchen to the doorknobs — we cover every area of your home, consistently and thoroughly, so you never have to think about it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {cleaningCategories.map((cat, idx) => {
                const { Icon } = cat;
                return (
                  <div
                    key={cat.label}
                    className="reveal card-hover bg-white rounded-[12px] p-[24px] flex flex-col gap-[16px] border border-black/6"
                    style={{ transitionDelay: `${idx * 0.09}s` }}
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[44px] h-[44px] bg-[#c8e0fd] rounded-[10px] flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={1.8} className="text-[#155da6]" />
                      </div>
                      <p className="font-display-reg text-[17px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                        {cat.label}
                      </p>
                    </div>
                    <div className="h-px bg-[#253862]/8" />
                    <ul className="flex flex-col gap-[8px]">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-[8px]">
                          <span className="w-[4px] h-[4px] bg-[#155da6] rounded-full mt-[9px] shrink-0" />
                          <span className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. RECURRING VS ONE-TIME ──────────────────────────────────── */}
        <section className="py-[80px] bg-[#155da6]" ref={recurringRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[14px] items-center text-center">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white uppercase">
                Which Schedule Fits You?
              </h2>
              <p className="font-body font-medium text-[16px] text-white/75 max-w-[540px] leading-[28px] tracking-[0.28px]">
                Whether you want a regular cleaning program or a one-time deep clean — we have options built around your lifestyle.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[20px]">
              {/* Recurring card */}
              <div className="reveal flex-1 bg-white rounded-[12px] p-[32px] flex flex-col gap-[24px]" style={{ transitionDelay: "0s" }}>
                <div className="flex items-center gap-[14px]">
                  <div className="w-[50px] h-[50px] bg-[#c8e0fd] rounded-full flex items-center justify-center shrink-0">
                    <RefreshCw size={22} strokeWidth={1.8} className="text-[#155da6]" />
                  </div>
                  <div>
                    <p className="font-display text-[26px] leading-none uppercase text-[#253862]">
                      Recurring
                    </p>
                    <p className="font-body font-medium text-[13px] text-[#155da6] uppercase tracking-[0.32px] mt-[4px]">
                      Weekly · Bi-Weekly · Monthly
                    </p>
                  </div>
                </div>
                <p className="font-body font-medium text-[15px] text-[#0a2540] leading-[24px] tracking-[0.28px]">
                  Best for busy households, families, and anyone who wants a consistently clean home without lifting a finger.
                </p>
                <div className="flex flex-col gap-[12px] pt-[8px] border-t border-[#253862]/10">
                  {recurringFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-[10px]">
                      <CheckCircle2 size={15} strokeWidth={2} className="text-[#155da6] shrink-0 mt-[3px]" />
                      <span className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* One-time card */}
              <div className="reveal flex-1 bg-[#c8e0fd] rounded-[12px] p-[32px] flex flex-col gap-[24px]" style={{ transitionDelay: "0.12s" }}>
                <div className="flex items-center gap-[14px]">
                  <div className="w-[50px] h-[50px] bg-[#253862] rounded-full flex items-center justify-center shrink-0">
                    <CalendarCheck size={22} strokeWidth={1.8} className="text-[#c8e0fd]" />
                  </div>
                  <div>
                    <p className="font-display text-[26px] leading-none uppercase text-[#253862]">
                      One-Time
                    </p>
                    <p className="font-body font-medium text-[13px] text-[#155da6] uppercase tracking-[0.32px] mt-[4px]">
                      Book When You Need It
                    </p>
                  </div>
                </div>
                <p className="font-body font-medium text-[15px] text-[#0a2540] leading-[24px] tracking-[0.28px]">
                  Perfect for move-ins, seasonal deep cleans, post-renovation, or any time your home needs extra attention.
                </p>
                <div className="flex flex-col gap-[12px] pt-[8px] border-t border-[#253862]/15">
                  {oneTimeFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-[10px]">
                      <CheckCircle2 size={15} strokeWidth={2} className="text-[#155da6] shrink-0 mt-[3px]" />
                      <span className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. TRUST NOTES ───────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={trustRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[46px]">
            <div className="reveal flex flex-col gap-[14px]">
              <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-[#253862] uppercase">
                Trusted In Your Home
              </h2>
              <p className="font-body font-medium text-[16px] text-[#0a2540] max-w-[520px] leading-[28px] tracking-[0.28px]">
                Letting someone into your home takes real trust. Here&apos;s how we earn it — and keep it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {trustItems.map((item, idx) => {
                const { Icon } = item;
                return (
                  <div
                    key={item.title}
                    className="reveal card-hover flex flex-col gap-[16px] bg-white rounded-[12px] p-[24px] border border-black/6"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-[52px] h-[52px] bg-[#c8e0fd] rounded-full flex items-center justify-center shrink-0">
                      <Icon size={24} strokeWidth={1.8} className="text-[#155da6]" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-display-reg text-[15px] tracking-[0.64px] uppercase text-[#253862] leading-none">
                        {item.title}
                      </p>
                      <p className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px] tracking-[0.28px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 5. IMAGE BREAK ───────────────────────────────────────────── */}
        <div
          className="px-4 sm:px-8 md:px-[60px] pb-[60px] bg-[#f2f2f2]"
          ref={imgRef}
        >
          <div
            className="reveal img-zoom rounded-[12px] border border-black/10 relative"
            style={{ height: "460px" }}
          >
            <Image
              src="/residential-2.png"
              alt="Mint Sanitary residential team delivering a thorough home clean"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="rounded-[12px] object-cover"
            />
          </div>
        </div>

        {/* ── 6. SIMPLE PROCESS ────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#253862]" ref={processRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[56px]">

            {/* Header — centered */}
            <div className="flex flex-col items-center text-center gap-[16px]">
              <h2 className="reveal font-display text-[32px] sm:text-[38px] md:text-[44px] leading-[1.15] text-white uppercase">
                Simple from the Start
              </h2>
              <p className="reveal font-body font-medium text-[16px] text-white/60 leading-[28px] tracking-[0.28px] max-w-[560px]">
                Getting your home cleaned shouldn&apos;t be complicated. We keep the process smooth — from your first message to a freshly cleaned home.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[28px]">
              {steps.map((step, idx) => {
                const { Icon } = step;
                return (
                  <div
                    key={step.title}
                    className="reveal flex flex-col gap-[18px]"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-[52px] h-[52px] bg-[#c8e0fd] rounded-full flex items-center justify-center shrink-0">
                      <Icon size={24} strokeWidth={1.8} className="text-[#253862]" />
                    </div>
                    <div className="flex flex-col gap-[8px] pt-[16px] border-t border-[#c8e0fd]/20">
                      <span className="font-body font-extrabold text-[11px] tracking-[0.96px] uppercase text-[#c8e0fd]/45">
                        Step {step.num}
                      </span>
                      <p className="font-display-reg text-[17px] tracking-[0.64px] uppercase text-white leading-none">
                        {step.title}
                      </p>
                      <p className="font-body font-medium text-[14px] text-white/60 leading-[22px] tracking-[0.28px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Book Now — centered below steps */}
            <div className="reveal flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
              >
                Book Now
              </a>
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
                We provide residential cleaning services across the Lower Mainland and Fraser Valley. From Vancouver condos to suburban family homes — we bring the same high standard to every home.
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
                Ready for a cleaner home?
              </h2>
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
                Let&apos;s get you scheduled.
              </p>
            </div>

            <p className="reveal font-body font-medium text-[16px] text-white/65 max-w-[540px] leading-[28px] tracking-[0.28px]">
              Get in touch for a free quote. Tell us your home, your schedule, and your priorities — we&apos;ll take care of the rest.
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
