"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
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
  "Strata Cleaning",
  "Commercial Cleaning",
  "Residential Cleaning",
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
  "White Rock",
  "Other",
];

const contactDetails = [
  {
    Icon: Phone,
    label: "Phone",
    value: "604-123-4567",
    note: "Mon–Sat, 7am–6pm",
    href: "tel:6041234567",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@smartcleaning.com",
    note: "Reply within 2 hours",
    href: "mailto:info@smartcleaning.com",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 7am–6pm",
    note: "Sunday by appointment",
    href: null,
  },
  {
    Icon: MapPin,
    label: "Service Area",
    value: "Metro Vancouver, BC",
    note: "14+ cities served",
    href: "/service-areas",
  },
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

  // Input styles
  const inputClass =
    "w-full font-body font-medium text-[15px] text-[#0a2540] bg-[#f2f2f2] border border-black/10 rounded-[10px] px-[16px] py-[13px] placeholder-[#0a2540]/40 focus:outline-none focus:border-[#155da6] focus:bg-white transition-colors duration-200";

  // Select styles — appearance-none removes native arrow, pr-[40px] makes room for custom icon
  const selectClass =
    "w-full font-body font-medium text-[15px] text-[#0a2540] bg-[#f2f2f2] border border-black/10 rounded-[10px] pl-[16px] pr-[40px] py-[13px] focus:outline-none focus:border-[#155da6] focus:bg-white transition-colors duration-200 appearance-none";

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "360px", height: "420px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1440&h=600&fit=crop&q=80')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,37,64,0.90) 0%, rgba(10,37,64,0.60) 55%, rgba(10,37,64,0.40) 100%)",
            }}
          />
          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[16px] items-center text-center max-w-[700px]"
          >
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] text-white uppercase">
              Get in Touch
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/85 max-w-[500px] leading-[1.55]">
              Ready for a cleaner space? Fill out the form and we&apos;ll get back to you within 2 hours.
            </p>
          </div>
        </section>

        {/* ── FORM + INFO ───────────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={bodyRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col lg:flex-row gap-[48px] lg:items-stretch">

            {/* ── LEFT: Form card ──────────────────────────────────────── */}
            <div className="reveal flex-[1.4_0_0] w-full bg-white rounded-[16px] p-[20px] sm:p-[36px] md:p-[44px] shadow-sm border border-black/6 flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[6px]">
                <h2 className="font-display text-[28px] sm:text-[32px] leading-[1.15] text-[#253862] uppercase">
                  Send Us a Message
                </h2>
                <p className="font-body font-medium text-[15px] text-[#0a2540]/60 leading-[22px]">
                  All fields marked * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                {/* Name + Email row */}
                <div className="flex flex-col sm:flex-row gap-[16px]">
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
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
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
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
                  <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
                    Phone Number
                    <span className="font-medium normal-case tracking-normal text-[#0a2540]/45 ml-[6px]">
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
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
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
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#253862]/50 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] flex-1">
                    <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
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
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#253862]/50 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[6px]">
                  <label className="font-body font-extrabold text-[12px] tracking-[0.64px] uppercase text-[#253862]">
                    Message
                    <span className="font-medium normal-case tracking-normal text-[#0a2540]/45 ml-[6px]">
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
                  className="w-full sm:w-auto sm:self-start inline-flex items-center justify-center bg-[#253862] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[44px] py-[14px] hover:bg-[#155da6] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-start gap-[10px] bg-[#c8e0fd] rounded-[10px] px-[16px] py-[14px]">
                    <CheckCircle2 size={18} className="text-[#155da6] shrink-0 mt-[1px]" />
                    <p className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px]">
                      <strong>Message received!</strong> We&apos;ll be in touch within 2 hours. Check your inbox for a confirmation email.
                    </p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-[10px] bg-red-50 rounded-[10px] px-[16px] py-[14px]">
                    <AlertCircle size={18} className="text-red-500 shrink-0 mt-[1px]" />
                    <p className="font-body font-medium text-[14px] text-[#0a2540] leading-[22px]">
                      Something went wrong. Please try again or call us at <strong>604-123-4567</strong>.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* ── RIGHT: Contact info ───────────────────────────────────── */}
            <div className="flex-1 flex flex-col gap-[36px] w-full lg:pt-[8px]">
              <div className="reveal flex flex-col gap-[10px]">
                <h3 className="font-display text-[26px] sm:text-[30px] leading-[1.15] text-[#253862] uppercase">
                  Reach Us Directly
                </h3>
                <p className="font-body font-medium text-[15px] text-[#0a2540]/70 leading-[24px]">
                  Prefer to talk? We&apos;re happy to answer any questions about services, pricing, or scheduling.
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                {contactDetails.map((d, idx) => {
                  const { Icon } = d;
                  const content = (
                    <div
                      key={d.label}
                      className="reveal card-hover flex items-start gap-[16px] bg-white rounded-[12px] p-[20px] border border-black/6"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                    >
                      <div className="w-[42px] h-[42px] bg-[#c8e0fd] rounded-[10px] flex items-center justify-center shrink-0">
                        <Icon size={20} strokeWidth={1.8} className="text-[#155da6]" />
                      </div>
                      <div className="flex flex-col gap-[3px]">
                        <span className="font-body font-extrabold text-[11px] tracking-[0.64px] uppercase text-[#155da6]">
                          {d.label}
                        </span>
                        <span className="font-body font-extrabold text-[16px] text-[#253862] leading-[22px]">
                          {d.value}
                        </span>
                        <span className="font-body font-medium text-[13px] text-[#0a2540]/55 leading-[18px]">
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
              <div className="reveal bg-[#253862] rounded-[12px] p-[24px] flex flex-col gap-[8px] text-center lg:text-left">
                <p className="font-display-reg text-[15px] tracking-[0.64px] uppercase text-[#c8e0fd] leading-none">
                  What Happens Next
                </p>
                <p className="font-body font-medium text-[14px] text-white/70 leading-[22px]">
                  After you submit, you&apos;ll receive a confirmation email. We&apos;ll follow up within 2 hours to discuss your needs and provide a free, no-obligation quote.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
