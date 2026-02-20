"use client";

import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// Exact Figma layout (node 15:400):
//   justify-between
//   LEFT:  Logo — Cocogoose Pro Outlined, 31px, #253862
//   RIGHT: [nav links gap-20px] [gap-50px] [CTA pill]
//
// Fonts:
//   Logo & headings  → font-display     (Cocogoose Pro Outlined)
//   Nav items        → font-display-reg (Cocogoose Pro Regular)

const serviceLinks = [
  { label: "Strata Cleaning", href: "/strata-cleaning" },
  { label: "Commercial Cleaning", href: "#" },
  { label: "Residential Cleaning", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#c8e0fd] border-b border-[#253862]">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-[60px] py-[15px]">

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <a
          href="/"
          className="font-display text-[31px] leading-[46px] text-[#253862] uppercase tracking-wide shrink-0"
        >
          Smart Cleaning
        </a>

        {/* ── Desktop right group: [nav] [gap-50px] [CTA] ──────────── */}
        <div className="hidden md:flex items-center gap-[50px]">

          {/* Nav links — gap-[20px] between each, matches Figma gap-[20px] */}
          <nav className="flex items-center gap-[20px]">

            <a
              href="/"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Home
            </a>

            {/* Services with hover dropdown */}
            {/* Handlers on wrapper so moving into the dropdown (a descendant)
                doesn't fire onMouseLeave. pt-[8px] on the absolute container
                bridges the visual gap — that area is still inside a descendant,
                so mouseleave on wrapper never fires during the transition. */}
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

              {/* Dropdown — pt-[8px] creates the visual gap as padding (no dead zone) */}
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
              href="#areas"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Service Areas
            </a>

            <a
              href="#contact"
              className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540] hover:text-[#155da6] transition-colors duration-200 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* CTA — dark navy pill, gap-[50px] from nav */}
          <a
            href="#contact"
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

      {/* ── Mobile dropdown menu ──────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-[#c8e0fd] border-t border-[#253862] px-[40px] py-6 flex flex-col gap-5">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Home
          </a>
          <div className="flex flex-col gap-3">
            <span className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]">
              Services
            </span>
            {serviceLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="font-display-reg text-[14px] tracking-[0.64px] uppercase text-[#155da6] pl-4"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="#areas"
            onClick={() => setMenuOpen(false)}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Service Areas
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-display-reg text-[16px] tracking-[0.96px] uppercase text-[#0a2540]"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-body font-extrabold text-[14px] tracking-[0.32px] uppercase bg-[#253862] text-[#c8e0fd] rounded-[99px] px-8 py-3 text-center mt-2"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
