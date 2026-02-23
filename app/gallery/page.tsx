"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
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
              .querySelectorAll<HTMLElement>(".reveal")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
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

// ── Gallery data ──────────────────────────────────────────────────────────────
type Category = "strata" | "commercial" | "residential";

const images: { src: string; alt: string; category: Category }[] = [
  // Strata
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    alt: "Strata building exterior — Smart Cleaning",
    category: "strata",
  },
  {
    src: "https://images.unsplash.com/photo-1497366858526-0766b7010a08?auto=format&fit=crop&w=900&q=80",
    alt: "Clean building hallway — Smart Cleaning strata",
    category: "strata",
  },
  {
    src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
    alt: "Professional strata cleaning team at work",
    category: "strata",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    alt: "Residential strata complex maintained by Smart Cleaning",
    category: "strata",
  },
  // Commercial
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Clean commercial office interior — Smart Cleaning",
    category: "commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt: "Commercial cleaning team maintaining a professional space",
    category: "commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Spotless office workspace cleaned by Smart Cleaning",
    category: "commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    alt: "Professional cleaner at a commercial facility",
    category: "commercial",
  },
  // Residential
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    alt: "Sparkling clean kitchen — Smart Cleaning residential",
    category: "residential",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    alt: "Fresh residential interior cleaned by Smart Cleaning",
    category: "residential",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
    alt: "Residential cleaning service in Metro Vancouver",
    category: "residential",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    alt: "Detailed home cleaning by Smart Cleaning team",
    category: "residential",
  },
];

type Filter = "all" | Category;

const filters: { key: Filter; label: string }[] = [
  { key: "all",         label: "All" },
  { key: "strata",      label: "Strata" },
  { key: "commercial",  label: "Commercial" },
  { key: "residential", label: "Residential" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useReveal(0.04);
  const ctaRef  = useReveal(0.08);

  const [activeFilter, setActiveFilter]     = useState<Filter>("all");
  const [lightboxIdx, setLightboxIdx]       = useState<number>(-1);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [imgFading, setImgFading]           = useState(false);

  const filtered = activeFilter === "all"
    ? images
    : images.filter((img) => img.category === activeFilter);

  // ── Hero entrance
  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 160);
      });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  // ── Open lightbox
  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setOverlayVisible(false);
    setImgFading(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOverlayVisible(true);
        setTimeout(() => setImgFading(false), 100);
      });
    });
  };

  // ── Close lightbox
  const closeLightbox = useCallback(() => {
    setOverlayVisible(false);
    setImgFading(true);
    setTimeout(() => setLightboxIdx(-1), 320);
  }, []);

  // ── Navigate within filtered set
  const navigate = useCallback((dir: "prev" | "next") => {
    setImgFading(true);
    setTimeout(() => {
      setLightboxIdx((prev) => {
        if (dir === "next") return (prev + 1) % filtered.length;
        return (prev - 1 + filtered.length) % filtered.length;
      });
      setTimeout(() => setImgFading(false), 60);
    }, 220);
  }, [filtered.length]);

  // ── Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === -1) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft")  navigate("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, closeLightbox, navigate]);

  // ── Close lightbox when filter changes
  useEffect(() => {
    if (lightboxIdx !== -1) closeLightbox();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ marginTop: "77px", minHeight: "320px", height: "420px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1440&h=600&fit=crop&q=80')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,37,64,0.88) 0%, rgba(10,37,64,0.55) 55%, rgba(10,37,64,0.30) 100%)",
            }}
          />
          <div
            ref={heroRef}
            className="relative z-10 px-4 sm:px-8 md:px-[60px] flex flex-col gap-[16px] items-center text-center max-w-[680px]"
          >
            <h1 className="reveal font-display text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] text-white uppercase">
              Our Work
            </h1>
            <p className="reveal delay-1 font-body font-bold text-[16px] sm:text-[18px] text-white/85 max-w-[480px] leading-[1.55]">
              A look at the spaces we clean and maintain across Metro Vancouver.
            </p>
          </div>
        </section>

        {/* ── GALLERY GRID ──────────────────────────────────────────────── */}
        <section className="py-[80px] bg-[#f2f2f2]" ref={gridRef}>
          <div className="px-4 sm:px-8 md:px-[60px] flex flex-col gap-[40px]">

            {/* Filter tabs — 2×2 grid on mobile, flex row on sm+ */}
            <div className="reveal grid grid-cols-2 gap-[10px] sm:flex sm:flex-wrap">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`w-full sm:w-auto font-display-reg text-[13px] tracking-[0.64px] uppercase rounded-[99px] px-[22px] py-[10px] border transition-colors duration-200 ${
                    activeFilter === f.key
                      ? "bg-[#253862] text-white border-[#253862]"
                      : "bg-white text-[#253862] border-[#253862]/30 hover:border-[#253862]"
                  }`}
                >
                  {f.label}
                  {f.key !== "all" && (
                    <span className={`ml-[6px] font-body font-medium text-[11px] ${activeFilter === f.key ? "text-white/60" : "text-[#253862]/40"}`}>
                      ({images.filter((i) => i.category === f.key).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
              {filtered.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(idx)}
                  className="reveal group relative img-zoom rounded-[12px] border border-black/8 overflow-hidden cursor-pointer text-left"
                  style={{
                    height: "260px",
                    transitionDelay: `${(idx % 6) * 0.07}s`,
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#253862]/0 group-hover:bg-[#253862]/50 transition-colors duration-300 rounded-[12px] flex items-end p-[16px]">
                    <span className="font-display-reg text-[12px] tracking-[0.64px] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-none bg-[#253862]/60 rounded-[6px] px-[10px] py-[6px]">
                      {img.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section id="contact" className="py-[80px] md:py-[100px] bg-[#253862]" ref={ctaRef}>
          <div className="flex flex-col gap-[48px] md:gap-[60px] items-center px-4 sm:px-8 md:px-[60px] text-center">
            <div className="reveal flex flex-col gap-[8px] items-center uppercase">
              <h2 className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-white">
                Like what you see?
              </h2>
              <p className="font-display text-[28px] sm:text-[36px] md:text-[44px] leading-[1.2] text-[#c8e0fd]">
                Let&apos;s bring this standard to your space.
              </p>
            </div>
            <p className="reveal font-body font-medium text-[16px] text-white/65 max-w-[500px] leading-[28px] tracking-[0.28px]">
              Get a free quote and see what a professionally cleaned space looks and feels like.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-[16px]">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#c8e0fd] text-[#253862] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-white transition-colors duration-200"
              >
                Request a Quote
              </a>
              <a
                href="tel:6041234567"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-[8px] border-2 border-[#c8e0fd] text-[#c8e0fd] font-body font-extrabold text-[16px] tracking-[0.32px] uppercase rounded-[99px] px-[40px] py-[13px] hover:bg-[#c8e0fd] hover:text-[#253862] transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call Now
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      {lightboxIdx !== -1 && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(10,37,64,0.95)",
            opacity: overlayVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          onClick={closeLightbox}
        >
          {/* Content wrapper — arrows always visible once lightbox is open */}
          <div
            className="relative flex flex-col items-center w-full max-w-[1100px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image wrapper */}
            <div className="relative w-full">
              {/* Main image — only this fades on navigation */}
              <img
                src={filtered[lightboxIdx]?.src}
                alt={filtered[lightboxIdx]?.alt}
                className="w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-[12px]"
                style={{
                  opacity: imgFading ? 0 : 1,
                  transition: "opacity 0.22s ease",
                }}
              />

              {/* Counter — desktop only, shown in mobile nav row instead */}
              <div className="hidden md:block absolute top-[16px] left-[16px]">
                <span className="font-body font-medium text-[13px] text-white/60">
                  {lightboxIdx + 1} / {filtered.length}
                </span>
              </div>

              {/* Category tag */}
              <div className="absolute bottom-[16px] left-[16px]">
                <span className="font-display-reg text-[11px] tracking-[0.64px] uppercase text-white bg-[#253862]/70 rounded-[6px] px-[10px] py-[6px]">
                  {filtered[lightboxIdx]?.category}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-[16px] right-[16px] w-[38px] h-[38px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Close"
              >
                <X size={18} className="text-white" />
              </button>

              {/* Desktop side arrows — hidden on mobile */}
              {filtered.length > 1 && (
                <button
                  onClick={() => navigate("prev")}
                  className="hidden md:flex absolute left-[-64px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors duration-200"
                  aria-label="Previous"
                >
                  <ChevronLeft size={22} className="text-white" />
                </button>
              )}
              {filtered.length > 1 && (
                <button
                  onClick={() => navigate("next")}
                  className="hidden md:flex absolute right-[-64px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-colors duration-200"
                  aria-label="Next"
                >
                  <ChevronRight size={22} className="text-white" />
                </button>
              )}
            </div>

            {/* Mobile: nav row below image */}
            {filtered.length > 1 && (
              <div className="flex md:hidden items-center justify-between w-full mt-[16px]">
                <button
                  onClick={() => navigate("prev")}
                  className="w-[44px] h-[44px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Previous"
                >
                  <ChevronLeft size={22} className="text-white" />
                </button>
                <span className="font-body font-medium text-[13px] text-white/60">
                  {lightboxIdx + 1} / {filtered.length}
                </span>
                <button
                  onClick={() => navigate("next")}
                  className="w-[44px] h-[44px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Next"
                >
                  <ChevronRight size={22} className="text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
