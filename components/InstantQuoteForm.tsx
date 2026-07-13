"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Info,
  Lock,
  Minus,
  Phone as PhoneIcon,
  Plus,
  Sparkles,
} from "lucide-react";
import {
  ADDONS,
  HOME_TYPE_LABELS,
  SQFT_DEFAULT,
  SQFT_MAX,
  SQFT_MIN,
  SQFT_STEP,
  calculateQuote,
  type CleanType,
  type HomeType,
  type SelectedAddon,
} from "@/lib/quotePricing";

type Tab = "quote" | "contact";
type Phase = "wizard" | "results" | "booking" | "confirmed";

const STEP_QUESTIONS = [
  "Residential or Commercial?",
  "Standard or Deep Clean?",
  "What Type of Property?",
  "How Big Is Your Home?",
  "Any Add-On Services Beyond the Typical Clean?",
  "How Can We Reach You?",
];

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
  "Vancouver", "North Vancouver", "West Vancouver", "Burnaby", "Richmond",
  "Coquitlam", "Port Coquitlam", "Port Moody", "New Westminster", "Surrey",
  "Delta", "Langley", "Maple Ridge", "Pitt Meadows", "White Rock", "Other",
];

function buildTimeSlots(): string[] {
  const slots: string[] = [];
  for (let mins = 8 * 60; mins <= 18 * 60; mins += 30) {
    const hour24 = Math.floor(mins / 60);
    const minute = mins % 60;
    const period = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    slots.push(`${hour12}:${String(minute).padStart(2, "0")} ${period}`);
  }
  slots.push("Flexible / Anytime");
  return slots;
}

const TIME_SLOTS = buildTimeSlots();
const ARRIVAL_WINDOW_MINUTES = 90;

function formatMinutesAsTime(mins: number): string {
  const wrapped = ((mins % (24 * 60)) + 24 * 60) % (24 * 60);
  const hour24 = Math.floor(wrapped / 60);
  const minute = wrapped % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

function parseSlotToMinutes(slot: string): number | null {
  const match = slot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function getArrivalWindowEnd(slot: string): string | null {
  const startMins = parseSlotToMinutes(slot);
  if (startMins == null) return null;
  return formatMinutesAsTime(startMins + ARRIVAL_WINDOW_MINUTES);
}

const HOME_TYPES: HomeType[] = ["detached", "townhouse", "condo"];
const LOCK_IN_SECONDS = 10 * 60;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatCurrency(amount: number): string {
  return amount.toLocaleString("en-US");
}

function buildCalendarCells(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDay.getDay(); i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

const inputClass =
  "w-full font-body font-medium text-[13.5px] text-[#4E5062] bg-[#F5F7FB] border border-[#6191e9]/15 rounded-[10px] px-[14px] py-[11px] placeholder-[#4E5062]/40 focus:outline-none focus:border-[#6191e9] focus:ring-2 focus:ring-[#6191e9]/15 transition-all duration-200";
const selectClass = `${inputClass} pr-[38px] appearance-none`;

const optionCardClass = (active: boolean) =>
  `rounded-[14px] border px-[16px] py-[16px] text-left transition-all duration-150 cursor-pointer ${
    active ? "border-[#6191e9] bg-[#6191e9]/10" : "border-[#6191e9]/15 hover:border-[#6191e9]/40"
  }`;

export default function InstantQuoteForm() {
  const [mounted, setMounted] = useState(false);
  const [tab, setTab] = useState<Tab>("quote");
  const loadedAtRef = useRef<number | null>(null);

  // ── Quote wizard state ────────────────────────────────────────────────
  const [phase, setPhase] = useState<Phase>("wizard");
  const [step, setStep] = useState(0);
  const [propertyKind, setPropertyKind] = useState<"residential" | "commercial" | null>(null);
  const [cleanType, setCleanType] = useState<CleanType | null>(null);
  const [homeType, setHomeType] = useState<HomeType | null>(null);
  const [sqft, setSqft] = useState(SQFT_DEFAULT);
  const [addonState, setAddonState] = useState<Record<string, { selected: boolean; qty: number }>>({});
  const [honey, setHoney] = useState("");

  const [qName, setQName] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qEmail, setQEmail] = useState("");
  const [qAddress, setQAddress] = useState("");
  const [qCity, setQCity] = useState("");
  const [quoteSendStatus, setQuoteSendStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [secondsLeft, setSecondsLeft] = useState(LOCK_IN_SECONDS);

  const [requestedDate, setRequestedDate] = useState("");
  const [requestedTimeSlot, setRequestedTimeSlot] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmStatus, setConfirmStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // ── Contact tab state ─────────────────────────────────────────────────
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cService, setCService] = useState("");
  const [cCity, setCCity] = useState("");
  const [cMessage, setCMessage] = useState("");
  const [contactHoney, setContactHoney] = useState("");
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    loadedAtRef.current = Date.now();
    const t = setTimeout(() => setMounted(true), 280);
    return () => clearTimeout(t);
  }, []);

  const getRecaptchaToken = useCallback((action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined" || !window.grecaptcha) {
        reject(new Error("reCAPTCHA not loaded"));
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  }, []);

  const today = useMemo(() => {
    const t = new Date();
    return { year: t.getFullYear(), month: t.getMonth(), iso: toIsoDate(t) };
  }, []);

  const [calendarMonth, setCalendarMonth] = useState(() => ({ year: today.year, month: today.month }));
  const calendarCells = useMemo(
    () => buildCalendarCells(calendarMonth.year, calendarMonth.month),
    [calendarMonth]
  );
  const isPrevMonthDisabled = calendarMonth.year === today.year && calendarMonth.month === today.month;

  const goToPrevMonth = () =>
    setCalendarMonth((c) => (c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }));
  const goToNextMonth = () =>
    setCalendarMonth((c) => (c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }));

  const sqftSliderPct = ((Math.min(sqft, SQFT_MAX) - SQFT_MIN) / (SQFT_MAX - SQFT_MIN)) * 100;

  const selectedAddons: SelectedAddon[] = useMemo(
    () =>
      Object.entries(addonState)
        .filter(([, v]) => v.selected)
        .map(([id, v]) => ({ id, qty: v.qty })),
    [addonState]
  );

  const quote = useMemo(() => {
    if (!cleanType) return null;
    return calculateQuote(sqft, cleanType, selectedAddons);
  }, [sqft, cleanType, selectedAddons]);

  // Lock-in countdown: only ticks while a priced quote is on screen.
  useEffect(() => {
    if ((phase !== "results" && phase !== "booking") || quote?.total == null) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [phase, quote?.total]);

  const expired = secondsLeft <= 0;
  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const toggleAddon = (id: string) => {
    setAddonState((prev) => {
      if (prev[id]?.selected) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { selected: true, qty: 1 } };
    });
  };

  const setAddonQty = (id: string, qty: number) => {
    setAddonState((prev) => ({ ...prev, [id]: { selected: true, qty: Math.max(1, qty) } }));
  };

  const handleSelectPropertyKind = (kind: "residential" | "commercial") => {
    setPropertyKind(kind);
    if (kind === "commercial") {
      setCService("Commercial Cleaning");
      setTab("contact");
    }
  };

  const canContinue =
    step === 0 ? propertyKind === "residential" : step === 1 ? !!cleanType : step === 2 ? !!homeType : true;

  const handleNext = () => setStep((s) => Math.min(5, s + 1));
  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  const resetQuote = () => {
    setPhase("wizard");
    setStep(0);
    setPropertyKind(null);
    setCleanType(null);
    setHomeType(null);
    setSqft(SQFT_DEFAULT);
    setAddonState({});
    setQName("");
    setQPhone("");
    setQEmail("");
    setQAddress("");
    setQCity("");
    setQuoteSendStatus("idle");
    setSecondsLeft(LOCK_IN_SECONDS);
    setRequestedDate("");
    setRequestedTimeSlot("");
    setNotes("");
    setConfirmStatus("idle");
    setCalendarMonth({ year: today.year, month: today.month });
  };

  const handleQuoteSubmit = async () => {
    if (!qName || !qEmail || !qPhone || !qAddress || !qCity || !cleanType || !homeType) return;
    setPhase("results");
    setSecondsLeft(LOCK_IN_SECONDS);
    setQuoteSendStatus("sending");
    try {
      const recaptchaToken = await getRecaptchaToken("instant_quote");
      const res = await fetch("/api/instant-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qName, email: qEmail, phone: qPhone, address: qAddress, city: qCity,
          homeType, cleanType, sqft, addons: selectedAddons,
          _honey: honey, _loadedAt: loadedAtRef.current, recaptchaToken,
        }),
      });
      setQuoteSendStatus(res.ok ? "sent" : "error");
    } catch {
      setQuoteSendStatus("error");
    }
  };

  const handleConfirmBooking = async () => {
    if (!requestedDate || !requestedTimeSlot || !cleanType || !homeType) return;
    setConfirmStatus("sending");
    try {
      const res = await fetch("/api/instant-quote/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qName, email: qEmail, phone: qPhone, address: qAddress, city: qCity,
          homeType, cleanType, sqft, addons: selectedAddons,
          requestedDate, requestedTimeSlot, notes,
          _honey: honey, _loadedAt: loadedAtRef.current,
        }),
      });
      if (res.ok) {
        setConfirmStatus("sent");
        setPhase("confirmed");
      } else {
        setConfirmStatus("error");
      }
    } catch {
      setConfirmStatus("error");
    }
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactStatus("loading");
    try {
      const recaptchaToken = await getRecaptchaToken("contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cName, email: cEmail, phone: cPhone, service: cService, city: cCity, message: cMessage,
          _honey: contactHoney, _loadedAt: loadedAtRef.current, recaptchaToken,
        }),
      });
      if (res.ok) {
        setContactStatus("success");
        setCName(""); setCEmail(""); setCPhone(""); setCService(""); setCCity(""); setCMessage("");
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    }
  };

  const countdownBanner = (
    <button
      type="button"
      onClick={phase === "results" ? () => setPhase("booking") : undefined}
      className={`w-full rounded-[16px] bg-gradient-to-r from-[#6191e9] to-[#66DAD5] px-[20px] py-[20px] flex flex-col items-center text-center gap-[2px] transition-opacity duration-150 ${
        phase === "results" ? "cursor-pointer hover:opacity-90" : "cursor-default"
      }`}
    >
      <div className="flex items-center gap-[6px] text-white/85">
        <Lock size={13} strokeWidth={2.4} />
        <span className="font-body font-extrabold text-[10.5px] uppercase tracking-[1.2px]">Rate Locked</span>
      </div>
      <span className="font-display-reg text-[42px] sm:text-[46px] text-white leading-none tabular-nums">
        {mm}:{ss}
      </span>
      <p className="font-body font-bold text-[13px] text-white/90 mt-[2px]">Book now to secure this price.</p>
    </button>
  );

  const expiredBanner = (
    <div className="rounded-[14px] bg-[#4E5062]/8 px-[16px] py-[12px] flex items-center gap-[10px]">
      <AlertCircle size={18} className="text-[#4E5062]/60 shrink-0" strokeWidth={2} />
      <p className="font-body font-bold text-[12.5px] text-[#4E5062]/70 leading-[17px]">
        Your locked rate has expired.{" "}
        <button type="button" onClick={resetQuote} className="underline font-extrabold cursor-pointer">
          Get a new quote
        </button>
      </p>
    </div>
  );

  const renderResults = () => {
    if (!quote) return null;

    if (quote.total == null) {
      return (
        <div className="flex flex-col items-center text-center gap-[10px] py-[10px]">
          <AlertCircle size={30} className="text-[#6191e9]" strokeWidth={1.8} />
          <h3 className="font-display-reg text-[18px] uppercase text-[#4E5062]">Custom Quote Needed</h3>
          <p className="font-body font-medium text-[13px] text-[#4E5062]/70 leading-[19px]">
            Your property is above our standard size range. Call us for a personalized quote.
          </p>
          <a
            href="tel:+12366883248"
            className="inline-flex items-center gap-[8px] bg-[#6191e9] text-white font-body font-extrabold text-[13px] uppercase rounded-[99px] px-[24px] py-[12px] hover:bg-[#5580d4] transition-colors"
          >
            <PhoneIcon size={14} /> Call 236-688-3248
          </a>
          <button type="button" onClick={resetQuote} className="font-body font-bold text-[12px] text-[#4E5062]/50 underline cursor-pointer">
            Start Over
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-[16px]">
        <div className="rounded-[16px] border border-[#6191e9]/15 overflow-hidden">
          <div className="bg-[#6191e9]/6 px-[16px] py-[10px] border-b border-[#6191e9]/15">
            <p className="font-body font-extrabold text-[11px] uppercase tracking-[0.5px] text-[#4E5062]/60">
              {quote.tier.label} &bull; {quote.cleanType === "standard" ? "Standard Clean" : "Deep Clean"}
            </p>
          </div>
          <div className="px-[16px] py-[12px] flex flex-col gap-[6px]">
            <div className="flex items-center justify-between font-body text-[13px] text-[#4E5062]">
              <span>Base rate</span>
              <span className="font-bold">${formatCurrency(quote.basePrice ?? 0)}</span>
            </div>
            {quote.addonLines.map((line) => (
              <div key={line.id} className="flex items-center justify-between font-body text-[13px] text-[#4E5062]/80">
                <span>{line.label}{line.qty > 1 ? ` (x${line.qty})` : ""}</span>
                <span>${formatCurrency(line.lineTotal)}</span>
              </div>
            ))}
            {quote.inquireAddons.map((label) => (
              <div key={label} className="flex items-center justify-between font-body text-[13px] text-[#4E5062]/60 italic">
                <span>{label}</span>
                <span>Please inquire</span>
              </div>
            ))}
            <div className="mt-[6px] pt-[10px] border-t border-[#6191e9]/15 flex items-center justify-between">
              <span className="font-display-reg font-extrabold text-[15px] uppercase text-[#4E5062]">Total</span>
              <span className="font-display-reg font-extrabold text-[24px] text-[#6191e9]">${formatCurrency(quote.total)}</span>
            </div>
            <p className="text-right font-body font-medium text-[10.5px] text-[#4E5062]/45">
              Price shown is before GST.
            </p>
          </div>
        </div>

        {quote.inquireFollowUps.map((note) => (
          <div key={note} className="rounded-[12px] bg-[#6191e9]/8 px-[14px] py-[10px] flex items-start gap-[8px]">
            <AlertCircle size={16} className="text-[#6191e9] shrink-0 mt-[1px]" strokeWidth={2} />
            <p className="font-body font-medium text-[12px] text-[#4E5062]/80 leading-[17px]">{note}</p>
          </div>
        ))}

        {!expired ? (
          <>
            {countdownBanner}
            <button
              type="button"
              onClick={() => setPhase("booking")}
              className="w-full inline-flex items-center justify-center gap-[8px] bg-[#6191e9] text-white font-body font-extrabold text-[13px] tracking-[0.3px] uppercase rounded-[99px] px-[24px] py-[13px] hover:bg-[#5580d4] transition-all duration-200 cursor-pointer"
            >
              Request My Date &amp; Time at This Price <ArrowRight size={15} strokeWidth={2.4} />
            </button>
          </>
        ) : (
          expiredBanner
        )}
      </div>
    );
  };

  const renderBooking = () => {
    if (!quote || quote.total == null) return null;

    if (expired) {
      return <div className="flex flex-col gap-[16px]">{expiredBanner}</div>;
    }

    return (
      <div className="flex flex-col gap-[16px]">
        {countdownBanner}

        <div>
          <p className="font-body font-extrabold text-[12px] tracking-[0.4px] uppercase text-[#4E5062]">
            Request Date &amp; Time
          </p>
          <p className="font-body font-medium text-[12px] text-[#4E5062]/60 leading-[17px]">
            Select a date and time and our team will reach out to confirm your booking.
          </p>
        </div>

        <div className="rounded-[16px] border border-[#6191e9]/15 p-[14px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevMonth}
              disabled={isPrevMonthDisabled}
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[#6191e9] hover:bg-[#6191e9]/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={2.2} />
            </button>
            <span className="font-body font-extrabold text-[13px] uppercase tracking-[0.3px] text-[#4E5062]">
              {MONTH_NAMES[calendarMonth.month]} {calendarMonth.year}
            </span>
            <button
              type="button"
              onClick={goToNextMonth}
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[#6191e9] hover:bg-[#6191e9]/10 cursor-pointer transition-colors"
            >
              <ChevronRight size={16} strokeWidth={2.2} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-[4px]">
            {WEEKDAY_LABELS.map((d, i) => (
              <span key={i} className="text-center font-body font-bold text-[10px] text-[#4E5062]/40 py-[2px]">
                {d}
              </span>
            ))}
            {calendarCells.map((date, i) => {
              if (!date) return <span key={`empty-${i}`} />;
              const iso = toIsoDate(date);
              const isPast = iso < today.iso;
              const isSelected = iso === requestedDate;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={isPast}
                  onClick={() => setRequestedDate(iso)}
                  className={`aspect-square rounded-[8px] font-body font-bold text-[12px] transition-colors duration-150 ${
                    isSelected
                      ? "bg-[#6191e9] text-white cursor-pointer"
                      : isPast
                      ? "text-[#4E5062]/20 cursor-not-allowed"
                      : "text-[#4E5062] hover:bg-[#6191e9]/10 cursor-pointer"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[6px]">
            <label className="font-body font-extrabold text-[11px] tracking-[0.5px] uppercase text-[#4E5062]/70">
              Arrival Window
            </label>
            <div className="group relative flex items-center">
              <Info size={13} className="text-[#6191e9]/70 cursor-help" strokeWidth={2} />
              <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-[6px] w-[220px] -translate-x-1/2 rounded-[8px] bg-[#4E5062] px-[10px] py-[8px] text-center font-body font-medium text-[11px] leading-[15px] text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                We will arrive at this time within a 1.5- to 2-hour window.
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-[#4E5062]" />
              </div>
            </div>
          </div>
          <div className="relative">
            <select
              value={requestedTimeSlot}
              onChange={(e) => setRequestedTimeSlot(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>Select your arrival window start time</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
            <ChevronDown size={16} strokeWidth={2} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#6191e9] pointer-events-none" />
          </div>
          {requestedTimeSlot && getArrivalWindowEnd(requestedTimeSlot) && (
            <p className="font-body font-medium text-[12px] text-[#4E5062]/70 leading-[17px]">
              We&apos;ll arrive between{" "}
              <strong className="font-extrabold text-[#4E5062]">{requestedTimeSlot}</strong> and{" "}
              <strong className="font-extrabold text-[#4E5062]">{getArrivalWindowEnd(requestedTimeSlot)}</strong>.
            </p>
          )}
        </div>
        <textarea
          rows={2}
          placeholder="Anything else we should know? (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className={`${inputClass} resize-none`}
        />

        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            onClick={() => setPhase("results")}
            className="inline-flex items-center gap-[6px] font-body font-extrabold text-[12px] uppercase text-[#4E5062]/55 hover:text-[#4E5062] transition-colors px-[8px] py-[13px] cursor-pointer"
          >
            <ArrowLeft size={14} strokeWidth={2.4} /> Back
          </button>
          <button
            type="button"
            onClick={handleConfirmBooking}
            disabled={!requestedDate || !requestedTimeSlot || confirmStatus === "sending"}
            className="flex-1 inline-flex items-center justify-center gap-[8px] bg-[#6191e9] text-white font-body font-extrabold text-[13px] tracking-[0.3px] uppercase rounded-[99px] px-[24px] py-[13px] hover:bg-[#5580d4] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            {confirmStatus === "sending" ? "Sending…" : "Request Booking Confirmation"}
          </button>
        </div>
        {confirmStatus === "error" && (
          <p className="text-center font-body font-medium text-[11px] text-red-500">
            Something went wrong. Please call us at 236-688-3248.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className={`reveal-right ${mounted ? "visible" : ""} w-full max-w-[460px] mx-auto md:mx-0 md:ml-auto mt-10 md:mt-0`}>
      <script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        async
        defer
      />
      <div className="rounded-[24px] bg-white shadow-[0_24px_60px_rgba(20,30,60,0.35)] overflow-hidden">
        <div className="h-[6px] w-full bg-gradient-to-r from-[#6191e9] to-[#66DAD5]" />

        <div className="p-[24px] sm:p-[32px] flex flex-col gap-[18px]">
          {/* Tabs */}
          {phase === "wizard" && (
            <div className="flex items-center gap-[4px] rounded-full bg-[#F5F7FB] p-[4px]">
              <button
                type="button"
                onClick={() => setTab("quote")}
                className={`flex-1 rounded-full py-[9px] text-center font-body font-extrabold text-[11.5px] uppercase tracking-[0.4px] transition-colors duration-150 cursor-pointer ${
                  tab === "quote" ? "bg-[#6191e9] text-white" : "text-[#4E5062]/55 hover:text-[#4E5062]"
                }`}
              >
                Instant Quote
              </button>
              <button
                type="button"
                onClick={() => setTab("contact")}
                className={`flex-1 rounded-full py-[9px] text-center font-body font-extrabold text-[11.5px] uppercase tracking-[0.4px] transition-colors duration-150 cursor-pointer ${
                  tab === "contact" ? "bg-[#6191e9] text-white" : "text-[#4E5062]/55 hover:text-[#4E5062]"
                }`}
              >
                Contact Us
              </button>
            </div>
          )}

          {/* Header */}
          {tab === "quote" ? (
            phase !== "confirmed" && phase !== "booking" && (
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center gap-[8px]">
                  <Sparkles size={16} className="text-[#6191e9]" strokeWidth={2.2} />
                  <span className="font-body font-extrabold text-[11px] tracking-[1.5px] uppercase text-[#6191e9]">
                    {phase === "wizard" ? "Instant Quote" : "Estimate Ready"}
                  </span>
                </div>
                <h2 className="font-display-reg text-[21px] sm:text-[23px] leading-[1.15] text-[#4E5062] uppercase">
                  {phase === "wizard" ? "Get an Instant Quote for Your Clean" : "Your Instant Quote"}
                </h2>
                {phase === "wizard" && (
                  <p className="font-body font-medium text-[13px] text-[#4E5062]/70 leading-[20px]">
                    Answer a few quick questions for an instant price.
                  </p>
                )}
              </div>
            )
          ) : (
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[8px]">
                <Sparkles size={16} className="text-[#6191e9]" strokeWidth={2.2} />
                <span className="font-body font-extrabold text-[11px] tracking-[1.5px] uppercase text-[#6191e9]">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-display-reg text-[21px] sm:text-[23px] leading-[1.15] text-[#4E5062] uppercase">
                Send Us a Message
              </h2>
              <p className="font-body font-medium text-[13px] text-[#4E5062]/70 leading-[20px]">
                Tell us what you need and we&apos;ll follow up fast.
              </p>
            </div>
          )}

          {/* Progress */}
          {tab === "quote" && phase === "wizard" && (
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[5px]">
                {STEP_QUESTIONS.map((question, i) => (
                  <div key={question} className="flex-1 h-[4px] rounded-full bg-[#6191e9]/15 overflow-hidden">
                    <div
                      className="h-full bg-[#6191e9] transition-all duration-300"
                      style={{ width: i <= step ? "100%" : "0%" }}
                    />
                  </div>
                ))}
              </div>
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.5px] text-[#4E5062]/50">
                Step {step + 1} of {STEP_QUESTIONS.length}: {STEP_QUESTIONS[step]}
              </span>
            </div>
          )}

          {/* ── Quote tab ─────────────────────────────────────────── */}
          {tab === "quote" && phase === "wizard" && (
            <div className="flex flex-col gap-[14px] min-h-[220px]">
              {step === 0 && (
                <div className="flex flex-col gap-[12px]">
                  <div className="grid grid-cols-2 gap-[10px]">
                    <button
                      type="button"
                      onClick={() => handleSelectPropertyKind("residential")}
                      className={optionCardClass(propertyKind === "residential")}
                    >
                      <Home size={22} className="text-[#6191e9] mb-[8px]" strokeWidth={1.8} />
                      <span className="block font-body font-extrabold text-[14px] text-[#4E5062]">Residential</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectPropertyKind("commercial")}
                      className={optionCardClass(propertyKind === "commercial")}
                    >
                      <Building2 size={22} className="text-[#6191e9] mb-[8px]" strokeWidth={1.8} />
                      <span className="block font-body font-extrabold text-[14px] text-[#4E5062]">Commercial</span>
                    </button>
                  </div>
                  <p className="font-body font-medium text-[12px] text-[#4E5062]/60 leading-[18px]">
                    Don&apos;t see what you&apos;re looking for? We do all types of cleaning jobs even if they&apos;re not listed.{" "}
                    <button
                      type="button"
                      onClick={() => setTab("contact")}
                      className="font-extrabold text-[#6191e9] underline underline-offset-2 cursor-pointer"
                    >
                      Send us a message here
                    </button>{" "}
                    for something more unique.
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-[10px]">
                  <button type="button" onClick={() => setCleanType("standard")} className={optionCardClass(cleanType === "standard")}>
                    <span className="block font-body font-extrabold text-[14px] text-[#4E5062] uppercase tracking-[0.3px]">
                      Standard Clean
                    </span>
                    <span className="block mt-[4px] font-body font-medium text-[12.5px] text-[#4E5062]/65 leading-[18px]">
                      Regular upkeep: dusting, vacuuming, mopping, and sanitizing every room to keep your space fresh.
                    </span>
                  </button>
                  <button type="button" onClick={() => setCleanType("deep")} className={optionCardClass(cleanType === "deep")}>
                    <span className="block font-body font-extrabold text-[14px] text-[#4E5062] uppercase tracking-[0.3px]">
                      Deep Clean
                    </span>
                    <span className="block mt-[4px] font-body font-medium text-[12.5px] text-[#4E5062]/65 leading-[18px]">
                      A thorough top-to-bottom clean covering baseboards, inside appliances, and buildup regular cleaning misses.
                    </span>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-3 gap-[8px]">
                  {HOME_TYPES.map((type) => {
                    const Icon = type === "detached" ? Home : type === "townhouse" ? Building2 : Building;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setHomeType(type)}
                        className={`${optionCardClass(homeType === type)} flex flex-col items-center text-center gap-[6px] px-[8px] py-[14px]`}
                      >
                        <Icon size={20} className="text-[#6191e9]" strokeWidth={1.8} />
                        <span className="font-body font-bold text-[12px] text-[#4E5062] leading-[14px]">
                          {HOME_TYPE_LABELS[type]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-[14px]">
                  <div className="flex items-center justify-between">
                    <label className="font-body font-extrabold text-[11px] tracking-[0.5px] uppercase text-[#4E5062]/70">
                      Approximate Size
                    </label>
                    <div className="flex items-center gap-[4px]">
                      <input
                        type="number"
                        min={SQFT_MIN}
                        value={sqft}
                        onChange={(e) => setSqft(Math.max(SQFT_MIN, Number(e.target.value) || SQFT_MIN))}
                        className="w-[76px] font-body font-bold text-[13px] text-[#4E5062] bg-[#F5F7FB] border border-[#6191e9]/15 rounded-[8px] px-[8px] py-[5px] text-right focus:outline-none focus:border-[#6191e9]"
                      />
                      <span className="font-body font-bold text-[12px] text-[#4E5062]/60">sq ft</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={SQFT_MIN}
                    max={SQFT_MAX}
                    step={SQFT_STEP}
                    value={Math.min(sqft, SQFT_MAX)}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="quote-slider w-full accent-[#6191e9]"
                    style={{
                      background: `linear-gradient(to right, #6191e9 ${sqftSliderPct}%, rgba(97,145,233,0.15) ${sqftSliderPct}%)`,
                    }}
                  />
                  <div className="flex items-center justify-between font-body font-semibold text-[11px] text-[#4E5062]/45">
                    <span>{SQFT_MIN} sq ft</span>
                    <span>{SQFT_MAX}+ sq ft</span>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[8px] max-h-[260px] overflow-y-auto pr-[2px]">
                    {ADDONS.map((addon) => {
                      const state = addonState[addon.id];
                      const selected = !!state?.selected;
                      return (
                        <div
                          key={addon.id}
                          className={`rounded-[12px] border px-[12px] py-[10px] transition-colors duration-150 ${
                            selected ? "border-[#6191e9] bg-[#6191e9]/8" : "border-[#6191e9]/12"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleAddon(addon.id)}
                            className="w-full flex items-center justify-between gap-[10px] text-left cursor-pointer"
                          >
                            <span className="flex items-center gap-[8px]">
                              <span
                                className={`w-[16px] h-[16px] rounded-[4px] border flex items-center justify-center shrink-0 ${
                                  selected ? "bg-[#6191e9] border-[#6191e9]" : "border-[#6191e9]/30"
                                }`}
                              >
                                {selected && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
                              </span>
                              <span className="font-body font-bold text-[12.5px] text-[#4E5062] leading-[16px]">
                                {addon.label}
                              </span>
                            </span>
                            <span className="font-body font-extrabold text-[12px] text-[#6191e9] shrink-0">
                              {addon.price != null ? `$${addon.price}${addon.unitLabel ? `/${addon.unitLabel}` : ""}` : "Inquire"}
                            </span>
                          </button>
                          {selected && addon.hasQty && (
                            <div className="mt-[8px] pl-[24px]">
                              {addon.qtyQuestion && (
                                <p className="mb-[6px] font-body font-semibold text-[11px] text-[#4E5062]/60 leading-[14px]">
                                  {addon.qtyQuestion}
                                </p>
                              )}
                              <div className="flex items-center gap-[10px]">
                                <span className="font-body font-medium text-[11px] text-[#4E5062]/60">Qty</span>
                                <button
                                  type="button"
                                  onClick={() => setAddonQty(addon.id, (state?.qty ?? 1) - 1)}
                                  className="w-[22px] h-[22px] rounded-full border border-[#6191e9]/30 flex items-center justify-center text-[#6191e9] cursor-pointer"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="font-body font-bold text-[12px] text-[#4E5062] w-[16px] text-center">
                                  {state?.qty ?? 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setAddonQty(addon.id, (state?.qty ?? 1) + 1)}
                                  className="w-[22px] h-[22px] rounded-full border border-[#6191e9]/30 flex items-center justify-center text-[#6191e9] cursor-pointer"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {selectedAddons.length > 0 && (
                    <p className="font-body font-bold text-[12px] text-[#4E5062]/70 text-right">
                      Add-ons subtotal: <span className="text-[#6191e9]">${quote?.addonsTotal ?? 0}</span>
                    </p>
                  )}
                </div>
              )}

              {step === 5 && (
                <div className="flex flex-col gap-[10px]">
                  <input placeholder="Full Name" value={qName} onChange={(e) => setQName(e.target.value)} className={inputClass} />
                  <input placeholder="Phone Number" type="tel" value={qPhone} onChange={(e) => setQPhone(e.target.value)} className={inputClass} />
                  <input placeholder="Email Address" type="email" value={qEmail} onChange={(e) => setQEmail(e.target.value)} className={inputClass} />
                  <input placeholder="Street Address" value={qAddress} onChange={(e) => setQAddress(e.target.value)} className={inputClass} />
                  <input placeholder="City" value={qCity} onChange={(e) => setQCity(e.target.value)} className={inputClass} />
                  <input
                    type="text"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                    aria-hidden="true"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: "none" }}
                  />
                </div>
              )}
            </div>
          )}

          {tab === "quote" && phase === "results" && renderResults()}

          {tab === "quote" && phase === "booking" && renderBooking()}

          {tab === "quote" && phase === "confirmed" && (
            <div className="flex flex-col items-center text-center gap-[14px] py-[16px]">
              <div className="w-[52px] h-[52px] rounded-full bg-[#6191e9]/10 flex items-center justify-center">
                <CheckCircle2 size={26} className="text-[#6191e9]" strokeWidth={2} />
              </div>
              <h3 className="font-display-reg text-[20px] uppercase text-[#4E5062]">Booking Request Sent!</h3>
              <p className="font-body font-medium text-[13px] text-[#4E5062]/70 leading-[20px] max-w-[300px]">
                We&apos;ve received your requested date of <strong>{requestedDate}</strong>, arrival window{" "}
                {getArrivalWindowEnd(requestedTimeSlot) ? (
                  <>
                    <strong>{requestedTimeSlot}</strong> – <strong>{getArrivalWindowEnd(requestedTimeSlot)}</strong>
                  </>
                ) : (
                  <strong>{requestedTimeSlot}</strong>
                )}
                . Our team will reach out shortly to confirm your appointment.
              </p>
              {quote?.inquireFollowUps.map((note) => (
                <p key={note} className="font-body font-medium text-[12px] text-[#4E5062]/70 leading-[18px] max-w-[300px]">
                  {note}
                </p>
              ))}
              <button type="button" onClick={resetQuote} className="font-body font-bold text-[12px] text-[#6191e9] underline cursor-pointer">
                Submit Another Request
              </button>
            </div>
          )}

          {/* Nav buttons */}
          {tab === "quote" && phase === "wizard" && (
            <div className="flex items-center gap-[10px] pt-[2px]">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-[6px] font-body font-extrabold text-[12px] uppercase text-[#4E5062]/55 hover:text-[#4E5062] transition-colors px-[8px] py-[13px] cursor-pointer"
                >
                  <ArrowLeft size={14} strokeWidth={2.4} /> Back
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canContinue}
                  className="flex-1 inline-flex items-center justify-center gap-[8px] bg-[#6191e9] text-white font-body font-extrabold text-[13px] tracking-[0.3px] uppercase rounded-[99px] px-[24px] py-[13px] hover:bg-[#5580d4] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue <ArrowRight size={15} strokeWidth={2.4} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleQuoteSubmit}
                  disabled={!qName || !qPhone || !qEmail || !qAddress || !qCity}
                  className="flex-1 inline-flex items-center justify-center gap-[8px] bg-[#6191e9] text-white font-body font-extrabold text-[13px] tracking-[0.3px] uppercase rounded-[99px] px-[24px] py-[13px] hover:bg-[#5580d4] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Show Me My Quote <ArrowRight size={15} strokeWidth={2.4} />
                </button>
              )}
            </div>
          )}

          {tab === "quote" && phase === "wizard" && (
            <p className="text-center font-body font-medium text-[11px] text-[#4E5062]/45">
              No obligation. Response within 24 hours.
              {quoteSendStatus === "error" && " (Note: we had trouble reaching our server, please call us to confirm.)"}
            </p>
          )}

          {/* ── Contact tab ───────────────────────────────────────── */}
          {tab === "contact" && (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-[12px]">
              <input
                type="text"
                value={contactHoney}
                onChange={(e) => setContactHoney(e.target.value)}
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />
              <input placeholder="Full Name" value={cName} onChange={(e) => setCName(e.target.value)} required className={inputClass} />
              <input placeholder="Email Address" type="email" value={cEmail} onChange={(e) => setCEmail(e.target.value)} required className={inputClass} />
              <input placeholder="Phone Number (optional)" type="tel" value={cPhone} onChange={(e) => setCPhone(e.target.value)} className={inputClass} />
              <div className="flex gap-[10px]">
                <div className="relative flex-1">
                  <select value={cService} onChange={(e) => setCService(e.target.value)} required className={selectClass}>
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <ChevronDown size={16} strokeWidth={2} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#6191e9] pointer-events-none" />
                </div>
                <div className="relative flex-1">
                  <select value={cCity} onChange={(e) => setCCity(e.target.value)} required className={selectClass}>
                    <option value="" disabled>Select your city</option>
                    {cityOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown size={16} strokeWidth={2} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#6191e9] pointer-events-none" />
                </div>
              </div>
              <textarea
                rows={3}
                placeholder="Tell us about your space... (optional)"
                value={cMessage}
                onChange={(e) => setCMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={contactStatus === "loading"}
                className="w-full inline-flex items-center justify-center bg-[#6191e9] text-white font-body font-extrabold text-[13px] tracking-[0.3px] uppercase rounded-[99px] px-[24px] py-[13px] hover:bg-[#5580d4] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {contactStatus === "loading" ? "Sending…" : "Send Message"}
              </button>
              {contactStatus === "success" && (
                <div className="flex items-start gap-[8px] bg-[#6191e9]/8 rounded-[10px] px-[12px] py-[10px]">
                  <CheckCircle2 size={16} className="text-[#6191e9] shrink-0 mt-[1px]" />
                  <p className="font-body font-medium text-[12px] text-[#4E5062] leading-[17px]">
                    Message received! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {contactStatus === "error" && (
                <div className="flex items-start gap-[8px] bg-red-50 rounded-[10px] px-[12px] py-[10px]">
                  <AlertCircle size={16} className="text-red-500 shrink-0 mt-[1px]" />
                  <p className="font-body font-medium text-[12px] text-[#4E5062] leading-[17px]">
                    Something went wrong. Please call 236-688-3248.
                  </p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
