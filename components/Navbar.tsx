"use client";

import { useState, useRef } from "react";
import { ChevronDown, Menu, X, MoveRight } from "lucide-react";

const serviceLinks = [
  { label: "Strata Cleaning",      href: "/strata-cleaning" },
  { label: "Commercial Cleaning",  href: "/commercial-cleaning" },
  { label: "Residential Cleaning", href: "/residential-cleaning" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#c8e0fd] border-b border-[#253862]">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-[60px] py-[15px]">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <a
          href="/"
          className="shrink-0"
        >
          <img src="/logo.svg" alt="Smart Cleaning" className="h-[46px] w-auto" />
        </a>

        {/* ── Desktop nav ───────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-[50px]">
          <nav className="flex items-center gap-[20px]">

            <a
              href="/"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
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
                className="flex items-center gap-[4px] font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer"
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
                  <div className="flex flex-col bg-[#c8e0fd] border border-[#253862] rounded-[12px] overflow-hidden shadow-lg min-w-[220px]">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="font-display-reg text-[14px] tracking-[0.64px] uppercase text-[#0a2540] px-[20px] py-[14px] hover:bg-[#253862] hover:text-white transition-colors duration-200 whitespace-nowrap"
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
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Service Areas
            </a>

            <a
              href="/gallery"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Gallery
            </a>

            <a
              href="/contact"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* CTA pill */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#253862] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#155da6] transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Request a Quote
          </a>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────────────── */}
        <button
          className="md:hidden p-2 text-[#253862]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile dropdown — smooth drawer ───────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-[400ms] ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#c8e0fd] border-t border-[#253862] px-[40px] py-6 flex flex-col gap-5">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Home
          </a>

          {/* Services with toggle */}
          <div className="flex flex-col gap-0">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-[6px] font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] bg-transparent border-none cursor-pointer text-left"
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
                mobileServicesOpen ? "max-h-[200px] mt-3" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-3">
                {serviceLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-[8px] font-display-reg text-[14px] tracking-[0.64px] uppercase text-[#155da6] pl-3"
                  >
                    <MoveRight size={13} strokeWidth={2} className="shrink-0 text-[#155da6]/60" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/service-areas"
            onClick={closeMobileMenu}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Service Areas
          </a>

          <a
            href="/gallery"
            onClick={closeMobileMenu}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Gallery
          </a>

          <a
            href="/contact"
            onClick={closeMobileMenu}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Contact
          </a>

          <a
            href="/contact"
            onClick={closeMobileMenu}
            className="font-body font-extrabold text-[14px] tracking-[0.32px] uppercase bg-[#253862] text-[#c8e0fd] rounded-[99px] px-8 py-3 text-center mt-2"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
