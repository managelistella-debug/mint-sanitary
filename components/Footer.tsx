// Footer — matches Figma footer color (#155da6) with brand-consistent design
// Navigation matches header: Home, Services, Service Areas, Contact

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Strata Cleaning", href: "#" },
  { label: "Commercial Cleaning", href: "#" },
  { label: "Residential Cleaning", href: "#" },
];

const contactInfo = [
  { label: "Phone", value: "604-123-4567" },
  { label: "Email", value: "info@smartcleaning.com" },
  { label: "Location", value: "Metro Vancouver, BC" },
  { label: "Hours", value: "Mon–Sat, 7am–6pm" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#155da6" }}>
      {/* Main content */}
      <div className="px-4 sm:px-8 md:px-[60px] pt-[60px] pb-[40px]">
        <div className="flex flex-col lg:flex-row gap-[60px] mb-[50px]">
          {/* Brand column */}
          <div className="flex flex-col gap-[16px] flex-[1.5_0_0]">
            <span className="font-display text-[30px] leading-none text-white uppercase tracking-[0.5px]">
              Smart Cleaning
            </span>
            <p className="font-body font-medium text-[15px] leading-[22px] text-white/70 max-w-[280px]">
              Professional strata, commercial &amp; residential cleaning services
              across Metro Vancouver and the Fraser Valley.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center self-start bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[14px] tracking-[0.32px] uppercase rounded-[99px] px-[28px] py-[10px] hover:bg-white transition-colors duration-200 mt-[4px]"
            >
              Request a Quote
            </a>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-[#c8e0fd]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body font-medium text-[15px] text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-[#c8e0fd]">
              Services
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body font-medium text-[15px] text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-[#c8e0fd]">
              Contact
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex flex-col gap-[2px]">
                  <span className="font-body font-extrabold text-[11px] tracking-[0.64px] uppercase text-[#c8e0fd]/70">
                    {c.label}
                  </span>
                  <span className="font-body font-medium text-[15px] text-white/90">
                    {c.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-[24px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body font-medium text-[13px] text-white/50 tracking-[0.32px]">
            © {new Date().getFullYear()} Smart Cleaning. All rights reserved.
          </p>
          <div className="flex gap-[24px]">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body font-medium text-[13px] text-white/50 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
