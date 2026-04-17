const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/cleaning-services-north-vancouver" },
  { label: "Rates", href: "/rates" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

const categoryLinks = [
  { label: "Cleaning Services", href: "/cleaning-services-north-vancouver" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning-north-vancouver" },
  { label: "Carpet Cleaning", href: "/carpet-cleaning-north-vancouver" },
  { label: "Window Cleaning", href: "/window-cleaning-north-vancouver" },
  { label: "Pressure Washing", href: "/pressure-washing-north-vancouver" },
  { label: "Gutter Cleaning", href: "/gutter-cleaning-north-vancouver" },
];

const contactInfo = [
  { label: "Phone", value: "(604) 671-6252", href: "tel:+16046716252" },
  { label: "Email", value: "hello@mintsanitary.com", href: "mailto:hello@mintsanitary.com" },
  { label: "Address", value: "1106 E 3rd St, North Vancouver, BC V7H 1B8" },
  { label: "Hours", value: "7 Days a Week" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#6191e9]">
      <div className="px-4 pb-[40px] pt-[60px] sm:px-8 md:px-[60px]">
        <div className="mb-[50px] flex flex-col gap-[60px] lg:flex-row">
          {/* Brand column */}
          <div className="flex flex-[1.5_0_0] flex-col gap-[16px]">
            <img src="/mint-logo-white.png" alt="Mint Sanitary" className="h-[42px] w-auto self-start" />
            <p className="max-w-[340px] font-body text-[15px] font-medium leading-[22px] text-white/75">
              Professional cleaning services for homes and businesses across
              North Vancouver and surrounding service areas.
            </p>
            <div className="mt-[6px] flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center self-start rounded-[99px] bg-white px-[24px] py-[10px] font-body text-[14px] font-extrabold uppercase tracking-[0.32px] text-[#6191e9] transition-colors duration-200 hover:bg-white/90"
              >
                Free Estimate
              </a>
              <a
                href="tel:+16046716252"
                className="inline-flex items-center justify-center self-start rounded-[99px] border border-white/50 px-[24px] py-[10px] font-body text-[14px] font-bold uppercase tracking-[0.32px] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Core Services
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {categoryLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-[15px] font-medium text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-[16px] flex-1">
            <h4 className="font-body font-extrabold text-[13px] tracking-[0.96px] uppercase text-white/50">
              Contact
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex flex-col gap-[2px]">
                  <span className="font-body font-extrabold text-[11px] tracking-[0.64px] uppercase text-white/45">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-body text-[15px] font-medium text-white/90 transition-colors duration-200 hover:text-white"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-body text-[15px] font-medium text-white/90">
                      {c.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-[24px] sm:flex-row sm:items-center">
          <p className="font-body text-[13px] font-medium tracking-[0.32px] text-white/50">
            © {new Date().getFullYear()} Mint Sanitary. All rights reserved.
          </p>
          <div className="flex gap-[24px]">
            <a
              href="/privacy-policy"
              className="font-body text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="font-body text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
