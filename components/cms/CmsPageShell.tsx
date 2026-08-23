"use client";

import { useId } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { SiteGlobals } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

/**
 * Global page chrome for every CMS-driven page: Navbar, hero (seamless
 * clip-path wave into the Featured Clients strip — ported from
 * ServicePageLayoutV2), bottom wave, then the section stack, then Footer.
 *
 * The section stack itself is passed as `children` since it's an async
 * server component (it resolves the Areas section's live-link query) and
 * this shell has to be a client component for the wave's useId.
 */
export default function CmsPageShell({
  title,
  heroIntro,
  heroImage,
  globals,
  children,
}: {
  title: string;
  heroIntro?: string;
  heroImage?: string;
  globals: SiteGlobals | null;
  children: React.ReactNode;
}) {
  const waveClipClass = `wave-clip-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const clientLogos = globals?.clientLogos ?? [];

  return (
    <>
      <Navbar />
      <main>
        <style>{`
          .${waveClipClass} {
            clip-path: polygon(0% 0%, 100% 0%, 100% 96.0%, 94.737% 95.424%, 89.659% 94.977%, 84.759% 94.647%, 80.029% 94.426%, 75.464% 94.303%, 71.055% 94.268%, 66.797% 94.313%, 62.682% 94.426%, 58.704% 94.598%, 54.856% 94.819%, 51.131% 95.08%, 47.522% 95.37%, 44.022% 95.68%, 40.625% 96.0%, 37.323% 96.32%, 34.111% 96.63%, 30.98% 96.92%, 27.925% 97.181%, 24.937% 97.402%, 22.012% 97.574%, 19.141% 97.688%, 16.317% 97.732%, 13.535% 97.697%, 10.787% 97.574%, 8.066% 97.353%, 5.366% 97.023%, 2.68% 96.576%, 0% 96.0%);
          }
        `}</style>
        <section className={`${waveClipClass} relative z-10 min-h-[70vh] overflow-hidden`}>
          {heroImage && (
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          )}
          <div className="absolute inset-0 z-[1] bg-black/35" />
          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center px-4 pb-32 pt-[180px] sm:px-8 md:grid-cols-[1.5fr_1fr] md:px-[60px] md:pb-40 md:pt-[200px]">
            <div>
              <h1 className="font-display-reg text-[34px] uppercase leading-[1.08] text-white sm:text-[48px] md:text-[54px]">
                {title}
              </h1>
              {heroIntro && (
                <p className="mt-6 max-w-[520px] font-body text-[17px] leading-[1.75] text-white/90">
                  {heroIntro}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[99px] bg-white px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-[#6191e9] transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
                >
                  Free Estimate
                </a>
                {globals?.phone && (
                  <a
                    href={`tel:${globals.phone.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center justify-center rounded-[99px] border-2 border-white/50 px-8 py-3.5 font-body text-[14px] font-extrabold uppercase tracking-[0.3px] text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                  >
                    Call {globals.phone}
                  </a>
                )}
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </section>

        {clientLogos.length > 0 && (
          <section
            className="relative z-0 -mt-[120px] bg-[#6191e9] px-4 pb-4 pt-[140px] sm:px-8 md:px-[60px]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(97,145,233,0.92), rgba(97,145,233,0.92)), url('/mint-bg.png')",
            }}
          >
            <div className="mx-auto max-w-[1200px]">
              <p className="mb-5 text-center font-body text-[12px] font-bold uppercase tracking-[2px] text-white/60">
                {globals?.clientsHeading || "Trusted by Local Organizations"}
              </p>
              <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
                {clientLogos.map((client) => {
                  const src = imageUrl(client.image);
                  if (!src) return null;
                  return (
                    <div key={client._key} className="flex h-[80px] items-center justify-center px-4">
                      <img
                        src={src}
                        alt={`${client.name} logo`}
                        className="max-h-[52px] w-auto object-contain brightness-0 invert opacity-60 transition-all duration-300 hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <div className="relative z-10 -mt-1">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path d="M0,60 C360,120 720,0 1440,60 L1440,100 L0,100 Z" fill="transparent" />
          </svg>
        </div>

        {children}

        <div className="relative z-10 -mt-1">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="block h-[60px] w-full sm:h-[80px] md:h-[100px]"
          >
            <path d="M0,50 C400,100 800,0 1440,40 L1440,100 L0,100 Z" fill="#6191e9" />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
}
