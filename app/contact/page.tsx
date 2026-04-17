"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, ChevronDown, Shield, Sparkles, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Reveal hook ───────────────────────────────────────────────────────────────
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
                setTimeout(() => el.classList.add("visible"), i * 90);
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

// ── Data ──────────────────────────────────────────────────────────────────────
const serviceOptions = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In Cleaning",
  "Move-Out Cleaning",
  "Recurring Cleaning",
  "Commercial Cleaning",
  "Window Cleaning",
  "Pressure Washing",
  "General Inquiry",
];

const cityOptions = [
  "Vancouver",
  "North Vancouver",
  "West Vancouver",
  "Burnaby",
  "Richmond",
  "Coquitlam",
  "Port Coquitlam",
  "Port Moody",
  "New Westminster",
  "Surrey",
  "Delta",
  "Langley",
  "Maple Ridge",
  "Pitt Meadows",
  "White Rock",
  "Other",
];

const contactDetails = [
  {
    Icon: Phone,
    label: "Phone",
    value: "(604) 671-6252",
    note: "7 days a week",
    href: "tel:+16046716252",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@mintsanitary.com",
    note: "Fast response within 24 hours",
    href: "mailto:hello@mintsanitary.com",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Open 7 days a week",
    note: "Flexible scheduling",
    href: null,
  },
  {
    Icon: MapPin,
    label: "Service Area",
    value: "North Vancouver + Greater Vancouver",
    note: "Lower Lonsdale, Lynn Valley, Deep Cove and more",
    href: "/service-areas",
  },
];

const faqItems = [
  {
    q: "How quickly will Mint Sanitary in North Vancouver respond to my request?",
    a: "We aim to respond within 24 hours to every inquiry. If you need urgent assistance, call us directly at (604) 671-6252. North Vancouver customers benefit from our 7-day availability, so weekend calls are answered just as quickly.",
  },
  {
    q: "Is the free estimate truly free? Are there hidden costs?",
    a: "Yes, our estimate is completely free and obligation-free. When we provide a quote for North Vancouver properties, we include all costs upfront so you know the exact price before we start cleaning. No surprise fees. No hidden charges.",
  },
  {
    q: "Do you service my North Vancouver neighborhood?",
    a: "We serve North Vancouver including all surrounding areas, plus West Vancouver, Vancouver, Burnaby, and Greater Vancouver. If you're unsure about your specific location in North Vancouver, contact us anyway. We may still serve you or can recommend a trusted partner.",
  },
  {
    q: "How long does a typical cleaning take in North Vancouver?",
    a: "Duration depends on your property size and service type. Standard, deep, and specialty cleanings each have different timelines. We'll provide a specific time estimate during your free appointment. North Vancouver properties typically range from 2 to 5 hours depending on scope.",
  },
  {
    q: "Can I reschedule or cancel my North Vancouver appointment?",
    a: "Absolutely. We require 48 hours' notice for changes. Contact us at (604) 671-6252 or email hello@mintsanitary.com. For North Vancouver customers, we work hard to accommodate your preferred dates and times.",
  },
  {
    q: "Are your cleaning products safe for pets and kids?",
    a: "Yes. Our eco-friendly, non-toxic cleaning products are safe for families, children, and pets. When you schedule service in North Vancouver, let us know about any sensitivities or preferences, and we'll accommodate them.",
  },
];

const processSteps = [
  { num: "01", title: "You Reach Out", desc: "Call, email, or submit the contact form. Tell us about your property and cleaning needs." },
  { num: "02", title: "We Provide a Free Estimate", desc: "Our team responds within 24 hours to discuss your property size, frequency preferences, and any special requests. You get a clear quote with no obligation to book." },
  { num: "03", title: "Schedule Your Clean", desc: "Pick a day and time that works for you. We're available 7 days a week throughout North Vancouver and surrounding areas." },
  { num: "04", title: "Experience the Difference", desc: "Our team arrives on time, equipped with eco-friendly products. You get a quality clean and a reliable partner for future appointments." },
];

// ── Form state type ────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bodyRef = useReveal(0.06);

  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", service: "", city: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyRef = useReveal(0.06);
  const stepsRef = useReveal(0.06);
  const areasRef = useReveal(0.06);
  const faqRef = useReveal(0.06);
  const ctaRef = useReveal(0.06);

  // Hero entrance animation
  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 160);
      });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", city: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Input styles — matched to homepage palette
  const inputClass =
    "w-full font-body font-medium text-[15px] text-[#4E5062] bg-white border border-[#6191e9]/20 rounded-[12px] px-[16px] py-[13px] placeholder-[#4E5062]/40 focus:outline-none focus:border-[#6191e9] focus:ring-2 focus:ring-[#6191e9]/15 transition-all duration-200";

  const selectClass =
    "w-full font-body font-medium text-[15px] text-[#4E5062] bg-white border border-[#6191e9]/20 rounded-[12px] pl-[16px] pr-[40px] py-[13px] focus:outline-none focus:border-[#6191e9] focus:ring-2 focus:ring-[#6191e9]/15 transition-all duration-200 appearance-none";

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-[360px] h-[460px] items-center justify-center overflow-hidden pt-[77px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1440&h=600&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(97,145,233,0.25) 0%, rgba(97,145,233,0.55) 100%)",
            }}
          />
          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[18px] items-center text-center max-w-[720px]"
          >
            <div className="reveal mx-auto h-[3px] w-[50px] bg-[#66DAD5]" />
            <p className="reveal font-body text-[12px] font-bold uppercase tracking-[2px] text-white/85">
              Get In Touch
            </p>
            <h1 className="reveal font-display-reg text-[36px] sm:text-[48px] md:text-[56px] leading-[1.08] text-white uppercase">
              Contact Mint Sanitary
            </h1>
            <p className="reveal delay-1 font-body text-[16px] sm:text-[18px] text-white/90 max-w-[540px] leading-[1.6]">
              Request your free estimate in North Vancouver and surrounding areas.
            </p>
          </div>

          {/* Wave at bottom of hero — matches homepage */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
              <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="#f4f8ff" />
            </svg>
          </div>
        </section>

        {/* ── FORM + INFO ───────────────────────────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]" ref={bodyRef}>
          <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-[40px] lg:items-stretch">

            {/* ── LEFT: Form card ──────────────────────────────────────── */}
            <div className="reveal flex-[1.4_0_0] w-full bg-white rounded-[20px] p-[24px] sm:p-[36px] md:p-[44px] shadow-[0_10px_40px_rgba(97,145,233,0.10)] border border-[#6191e9]/10 flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[10px]">
                <div className="h-[3px] w-[50px] bg-[#66DAD5]" />
                <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                  Send a Message
                </p>
                <h2 className="font-display-reg text-[28px] sm:text-[34px] leading-[1.1] text-[#4E5062] uppercase">
                  Request Your Free Estimate
                </h2>
                <p className="font-body font-medium text-[14px] text-[#5c6075] leading-[22px]">
                  All fields marked * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                {/* Name + Email row */}
                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                    Phone Number
                    <span className="font-medium normal-case tracking-normal text-[#5c6075]/70 ml-[6px]">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="604-555-0123"
                    className={inputClass}
                  />
                </div>

                {/* Service + City row */}
                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                      Service Type *
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#6191e9] pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                      Your City *
                    </label>
                    <div className="relative">
                      <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className={selectClass}
                      >
                        <option value="" disabled>Select your city</option>
                        {cityOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        strokeWidth={2}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#6191e9] pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#4E5062]">
                    Message
                    <span className="font-medium normal-case tracking-normal text-[#5c6075]/70 ml-[6px]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your space, how often you'd like service, or anything else..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto sm:self-start inline-flex items-center justify-center bg-[#6191e9] text-white font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[36px] py-[14px] hover:bg-[#5580d4] hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-start gap-[10px] bg-[#f4f8ff] border border-[#6191e9]/20 rounded-[12px] px-[16px] py-[14px]">
                    <CheckCircle2 size={18} className="text-[#6191e9] shrink-0 mt-[1px]" />
                    <p className="font-body font-medium text-[14px] text-[#4E5062] leading-[22px]">
                      <strong>Message received!</strong> We&apos;ll be in touch within 2 hours. Check your inbox for a confirmation email.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-[10px] bg-red-50 rounded-[12px] px-[16px] py-[14px]">
                    <AlertCircle size={18} className="text-red-500 shrink-0 mt-[1px]" />
                    <p className="font-body font-medium text-[14px] text-[#4E5062] leading-[22px]">
                      Something went wrong. Please try again or call us at <strong>(604) 671-6252</strong>.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* ── RIGHT: Contact info ───────────────────────────────────── */}
            <div className="flex-1 flex flex-col gap-[28px] w-full lg:pt-[8px]">
              <div className="reveal flex flex-col gap-[10px]">
                <div className="h-[3px] w-[50px] bg-[#66DAD5]" />
                <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                  Contact Details
                </p>
                <h3 className="font-display-reg text-[26px] sm:text-[30px] leading-[1.15] text-[#4E5062] uppercase">
                  Reach Us Directly
                </h3>
                <p className="font-body font-medium text-[15px] text-[#5c6075] leading-[24px]">
                  Call, email, or send a quick form request. We will provide a fast response and transparent quote.
                </p>
              </div>

              <div className="flex flex-col gap-[14px]">
                {contactDetails.map((d, idx) => {
                  const { Icon } = d;
                  const content = (
                    <div
                      className="reveal card-hover flex items-start gap-[16px] bg-white rounded-[16px] p-[20px] border border-[#6191e9]/10 shadow-[0_4px_20px_rgba(97,145,233,0.06)]"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-[44px] h-[44px] bg-[#f4f8ff] rounded-[12px] flex items-center justify-center shrink-0 border border-[#6191e9]/10">
                        <Icon size={20} strokeWidth={1.8} className="text-[#6191e9]" />
                      </div>
                      <div className="flex flex-col gap-[3px]">
                        <span className="font-body font-extrabold text-[11px] tracking-[0.64px] uppercase text-[#6191e9]">
                          {d.label}
                        </span>
                        <span className="font-body font-extrabold text-[16px] text-[#4E5062] leading-[22px]">
                          {d.value}
                        </span>
                        <span className="font-body font-medium text-[13px] text-[#5c6075] leading-[18px]">
                          {d.note}
                        </span>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}
              </div>

              {/* Trust note */}
              <div
                className="reveal rounded-[16px] p-[24px] flex flex-col gap-[8px] text-center lg:text-left"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(97,145,233,0.94), rgba(97,145,233,0.94)), url('/mint-bg.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-[3px] w-[40px] bg-[#66DAD5] mx-auto lg:mx-0" />
                <p className="font-display-reg text-[15px] tracking-[0.64px] uppercase text-white leading-none mt-[4px]">
                  What Happens Next
                </p>
                <p className="font-body font-medium text-[14px] text-white/85 leading-[22px]">
                  After you submit, we will review your request and follow up quickly with your free, no-obligation estimate.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── WHY CHOOSE MINT ────────────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]" ref={whyRef}>
          <div className="mx-auto max-w-[1200px] flex flex-col gap-[40px]">
            <div className="reveal flex flex-col gap-[12px] text-center">
              <div className="mx-auto h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Why Mint Sanitary
              </p>
              <h2 className="font-display-reg text-[30px] sm:text-[38px] leading-[1.1] text-[#4E5062] uppercase">
                Why Choose Mint Sanitary in North Vancouver?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-[24px]">
              <div className="reveal bg-[#f4f8ff] rounded-[20px] p-[28px] border border-[#6191e9]/10 flex flex-col gap-[14px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(97,145,233,0.14)]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center border border-[#6191e9]/10">
                  <Shield size={22} strokeWidth={1.8} className="text-[#6191e9]" />
                </div>
                <h3 className="font-display-reg text-[20px] leading-[1.2] text-[#4E5062] uppercase">
                  Trusted by North Shore Homeowners &amp; Businesses
                </h3>
                <p className="font-body font-medium text-[15px] text-[#5c6075] leading-[24px]">
                  We serve homeowners and property managers throughout North Vancouver with reliable, professional cleaning. Our team is available every day of the week, including weekends, so you can schedule on your terms. We use eco-friendly, non-toxic cleaning products that are safe for families, kids, and pets. Every free estimate comes with no obligation and no hidden costs.
                </p>
              </div>

              <div className="reveal bg-[#f4f8ff] rounded-[20px] p-[28px] border border-[#6191e9]/10 flex flex-col gap-[14px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(97,145,233,0.14)]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center border border-[#6191e9]/10">
                  <Sparkles size={22} strokeWidth={1.8} className="text-[#6191e9]" />
                </div>
                <h3 className="font-display-reg text-[20px] leading-[1.2] text-[#4E5062] uppercase">
                  Fast Response &amp; Transparent Pricing
                </h3>
                <p className="font-body font-medium text-[15px] text-[#5c6075] leading-[24px]">
                  We aim to respond within 24 hours to every inquiry. However you reach us&mdash;by phone, email, or form&mdash;you&apos;ll hear back quickly. Our free estimates include a detailed quote upfront so you know the exact cost before we even start. No surprise charges. No confusing add-ons.
                </p>
              </div>

              <div
                className="reveal rounded-[20px] p-[28px] flex flex-col gap-[14px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(97,145,233,0.25)]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-[48px] h-[48px] bg-white/15 rounded-[12px] flex items-center justify-center border border-white/20">
                  <Tag size={22} strokeWidth={1.8} className="text-white" />
                </div>
                <h3 className="font-display-reg text-[20px] leading-[1.2] text-white uppercase">
                  Current Offer
                </h3>
                <p className="font-body font-medium text-[15px] text-white/85 leading-[24px]">
                  Get 10% off your first clean with code <span className="font-extrabold text-white">MINT25</span>. This limited-time promotion makes it affordable to try Mint Sanitary.
                </p>
                <a
                  href="tel:+16046716252"
                  className="mt-auto inline-flex items-center gap-[8px] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase text-white hover:text-[#66DAD5] transition-colors"
                >
                  Claim Now <ArrowRight size={16} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER YOU CONTACT US ──────────────────────────── */}
        <section className="relative z-10 bg-[#f4f8ff] px-4 py-16 sm:px-8 md:px-[60px]" ref={stepsRef}>
          <div className="mx-auto max-w-[1200px] flex flex-col gap-[40px]">
            <div className="reveal flex flex-col gap-[12px] text-center">
              <div className="mx-auto h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Our Process
              </p>
              <h2 className="font-display-reg text-[30px] sm:text-[38px] leading-[1.1] text-[#4E5062] uppercase">
                What Happens After You Contact Us?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {processSteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="reveal relative bg-white rounded-[20px] p-[28px] border border-[#6191e9]/10 flex flex-col gap-[12px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(97,145,233,0.12)]"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <span className="font-display-reg text-[40px] leading-none text-[#6191e9]/25">
                    {step.num}
                  </span>
                  <h3 className="font-display-reg text-[18px] leading-[1.2] text-[#4E5062] uppercase">
                    {step.title}
                  </h3>
                  <p className="font-body font-medium text-[14px] text-[#5c6075] leading-[22px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ──────────────────────────────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]" ref={areasRef}>
          <div className="mx-auto max-w-[1100px] flex flex-col gap-[32px]">
            <div className="reveal flex flex-col gap-[12px] text-center">
              <div className="mx-auto h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-[#5c6075]">
                Where We Clean
              </p>
              <h2 className="font-display-reg text-[30px] sm:text-[38px] leading-[1.1] text-[#4E5062] uppercase">
                Service Areas
              </h2>
            </div>

            <div className="reveal bg-[#f4f8ff] rounded-[20px] p-[28px] sm:p-[40px] border border-[#6191e9]/10 flex flex-col gap-[20px]">
              <div className="flex items-start gap-[16px]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center shrink-0 border border-[#6191e9]/10">
                  <MapPin size={22} strokeWidth={1.8} className="text-[#6191e9]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-display-reg text-[20px] leading-[1.2] text-[#4E5062] uppercase">
                    North Vancouver &amp; Beyond
                  </h3>
                  <p className="font-body font-medium text-[15px] text-[#5c6075] leading-[24px]">
                    We proudly serve North Vancouver, including <strong className="text-[#4E5062]">Lower Lonsdale</strong>, <strong className="text-[#4E5062]">Lynn Valley</strong>, <strong className="text-[#4E5062]">Deep Cove</strong>, <strong className="text-[#4E5062]">Edgemont Village</strong>, and <strong className="text-[#4E5062]">Seymour Heights</strong>. We also serve West Vancouver, Vancouver, Burnaby, and Greater Vancouver.
                  </p>
                  <p className="font-body font-medium text-[15px] text-[#5c6075] leading-[24px]">
                    If you&apos;re not sure whether we cover your area, call us at{" "}
                    <a href="tel:+16046716252" className="font-extrabold text-[#6191e9] border-b border-[#66DAD5] hover:text-[#5580d4]">(604) 671-6252</a>{" "}
                    or include your address in the contact form. We&apos;ll confirm right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ — Blue bg with mint-bg texture, matches homepage ──────── */}
        <section
          className="relative z-10 bg-[#6191e9] px-4 py-16 sm:px-8 md:px-[60px]"
          ref={faqRef}
          style={{
            backgroundImage:
              "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
          }}
        >
          <div className="mx-auto max-w-[900px]">
            <div className="reveal text-center">
              <div className="mx-auto mb-4 h-[3px] w-[50px] bg-[#66DAD5]" />
              <p className="font-body text-[12px] font-bold uppercase tracking-[2px] text-white/75">
                Questions Answered
              </p>
              <h2 className="mt-3 font-display-reg text-[30px] uppercase text-white sm:text-[38px]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-[12px]">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal rounded-[14px] border border-white/15 bg-white/10 transition-colors duration-200 hover:bg-white/[0.14] overflow-hidden"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-[16px] px-[20px] py-[18px] text-left cursor-pointer"
                  >
                    <span className="font-body font-extrabold text-[15px] sm:text-[16px] text-white leading-[1.4]">
                      {item.q}
                    </span>
                    <span
                      className="ml-4 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full border border-white/30 font-body text-[20px] leading-none text-white transition-transform duration-300"
                      style={{
                        transform: openFaq === idx ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-[20px] pb-[18px] font-body font-medium text-[14px] sm:text-[15px] text-white/80 leading-[24px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA — White, matches homepage ──────────────────────── */}
        <section className="relative z-10 bg-white px-4 py-16 sm:px-8 md:px-[60px]" ref={ctaRef}>
          <div className="mx-auto max-w-[820px] text-center flex flex-col items-center gap-[20px]">
            <div className="reveal mx-auto h-[3px] w-[50px] bg-[#66DAD5]" />
            <h2 className="reveal font-display-reg text-[30px] sm:text-[40px] leading-[1.1] text-[#4E5062] uppercase">
              Ready to Get Started?
            </h2>
            <p className="reveal font-body text-[16px] sm:text-[18px] text-[#5c6075] leading-[1.7] max-w-[600px]">
              Call Mint Sanitary at{" "}
              <a href="tel:+16046716252" className="font-extrabold text-[#6191e9] border-b border-[#66DAD5] hover:text-[#5580d4] transition-colors">(604) 671-6252</a>{" "}
              or book a free North Vancouver cleaning estimate. Use code <strong className="text-[#6191e9]">MINT25</strong> for 10% off your first clean.
            </p>
            <p className="reveal font-body font-medium text-[14px] text-[#5c6075]">
              We&apos;re here 7 days a week to serve you.
            </p>
            <div className="reveal flex flex-col sm:flex-row items-center gap-[14px] mt-[4px]">
              <a
                href="tel:+16046716252"
                className="inline-flex items-center gap-[10px] bg-[#6191e9] text-white font-body font-extrabold text-[14px] tracking-[0.3px] uppercase rounded-[99px] px-[32px] py-[14px] hover:bg-[#5580d4] hover:shadow-lg transition-all duration-200"
              >
                <Phone size={16} strokeWidth={2} />
                Call (604) 671-6252
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="inline-flex items-center gap-[8px] border-2 border-[#6191e9]/30 text-[#4E5062] font-body font-extrabold text-[14px] tracking-[0.3px] uppercase rounded-[99px] px-[32px] py-[12px] hover:border-[#6191e9]/60 hover:bg-[#f4f8ff] transition-all duration-200"
              >
                Book Free Estimate <ArrowRight size={16} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Wave: White → Blue (Footer) — matches homepage ───────────── */}
        <div className="relative z-10 -mt-1 bg-white">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block w-full h-[60px] sm:h-[80px] md:h-[100px]">
            <path d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z" fill="#6191e9" />
          </svg>
        </div>

      </main>
      <Footer />
    </>
  );
}
