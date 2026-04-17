"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, MoveRight } from "lucide-react";

const categoryLinks = [
  { label: "Cleaning Services", href: "/cleaning-services-north-vancouver" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning-north-vancouver" },
  { label: "Carpet Cleaning", href: "/carpet-cleaning-north-vancouver" },
  { label: "Window Cleaning", href: "/window-cleaning-north-vancouver" },
  { label: "Pressure Washing", href: "/pressure-washing-north-vancouver" },
  { label: "Gutter Cleaning", href: "/gutter-cleaning-north-vancouver" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#6191e9" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.12)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Announcement bar — always white */}
      <div className="bg-white px-4 py-2 text-center">
        <p className="font-body text-xs font-semibold tracking-[0.4px] text-[#4E5062] sm:text-sm">
          Use code <span className="text-[#6191e9]">MINT25</span> for 10% off your first clean.
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-[15px] sm:px-8 md:px-[60px]">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <a href="/" className="shrink-0">
          <img src="/mint-logo-white.png" alt="Mint Sanitary" className="h-[36px] w-auto md:h-[44px]" />
        </a>

        {/* ── Desktop nav ───────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-[50px]">
          <nav className="flex items-center gap-[20px]">
            <a
              href="/"
              className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              Home
            </a>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button
                className="flex cursor-pointer items-center gap-[4px] whitespace-nowrap border-none bg-transparent font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white"
              >
                Services
                <ChevronDown
                  size={14}
                  strokeWidth={2.5}
                  className="shrink-0 mt-[1px] transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-[8px] z-50">
                  <div className="flex min-w-[310px] flex-col overflow-hidden rounded-[12px] border border-white/20 bg-[#6191e9]/95 shadow-lg backdrop-blur-lg">
                    {categoryLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="whitespace-nowrap px-[20px] py-[14px] font-display-reg font-semibold text-[13px] tracking-[0.64px] uppercase text-white/90 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/service-areas"
              className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              Service Areas
            </a>

            <a
              href="/rates"
              className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              Rates
            </a>

            <a
              href="/about"
              className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              About
            </a>

            <a
              href="/contact"
              className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white/85 transition-colors duration-200 hover:text-white whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* CTA pill */}
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[99px] bg-white px-[30px] py-[12px] font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
          >
            Free Estimate
          </a>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────────────── */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out ${
          menuOpen ? "max-h-[680px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 border-t border-white/15 bg-[#6191e9]/95 px-[28px] py-6 backdrop-blur-lg">
          <a href="/" onClick={closeMobileMenu} className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white">
            Home
          </a>

          <div className="flex flex-col gap-0">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex cursor-pointer items-center gap-[6px] border-none bg-transparent text-left font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white"
            >
              Services
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className="shrink-0 transition-transform duration-300"
                style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                mobileServicesOpen ? "mt-3 max-h-[320px]" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-3">
                {categoryLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-[8px] pl-3 font-display-reg font-semibold text-[13px] tracking-[0.64px] uppercase text-white/75"
                  >
                    <MoveRight size={13} strokeWidth={2} className="shrink-0 text-white/50" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/service-areas" onClick={closeMobileMenu} className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white">
            Service Areas
          </a>
          <a href="/rates" onClick={closeMobileMenu} className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white">
            Rates
          </a>
          <a href="/about" onClick={closeMobileMenu} className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white">
            About
          </a>
          <a href="/contact" onClick={closeMobileMenu} className="font-display-reg font-semibold text-[14px] tracking-[0.9px] uppercase text-white">
            Contact
          </a>

          <a
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-2 rounded-[99px] bg-white px-8 py-3 text-center font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9]"
          >
            Free Estimate
          </a>

          <a
            href="tel:+16046716252"
            onClick={closeMobileMenu}
            className="text-center font-body text-[13px] font-semibold tracking-[0.24px] text-white/70"
          >
            Call (604) 671-6252
          </a>
        </div>
      </div>
    </header>
  );
}
