import Link from "next/link";
import { MapPin, Sparkles, Layers, ArrowRight, AlertTriangle } from "lucide-react";
import { isCmsConfigured } from "@/lib/cms/sanity";
import { SECTION_DEFINITIONS } from "@/lib/cms/sections";

const COLLECTIONS = [
  {
    href: "/admin/cleaning-types",
    label: "Cleaning Types",
    Icon: Sparkles,
    blurb:
      "Your services. Each one can have its own page at /services/… and doubles as a tile on other pages.",
  },
  {
    href: "/admin/areas",
    label: "Areas",
    Icon: MapPin,
    blurb: "The cities you serve. Each creates a city page at /north-vancouver and similar.",
  },
  {
    href: "/admin/area-services",
    label: "Area Services",
    Icon: Layers,
    blurb:
      "A service in a city — /north-vancouver/house-cleaning. Pick an area and a cleaning type.",
  },
];

export default function AdminDashboard() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-[26px] font-semibold tracking-[-0.02em] text-[#111]">Content</h1>
        <p className="mt-1 text-[14.5px] text-[#6B7280]">
          Everything on the site is built from these three collections.
        </p>
      </header>

      {!isCmsConfigured && (
        <div className="mb-7 flex gap-3 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4">
          <AlertTriangle size={18} className="mt-0.5 flex-none text-[#B45309]" />
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-[#92400E]">
              Content store not connected yet
            </p>
            <p className="mt-1 text-[13.5px] leading-[1.6] text-[#92400E]/90">
              The dashboard is running, but there&apos;s nowhere to save content to. Add{" "}
              <code className="rounded bg-[#92400E]/10 px-1 py-0.5 font-mono text-[12px]">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{" "}
              and{" "}
              <code className="rounded bg-[#92400E]/10 px-1 py-0.5 font-mono text-[12px]">
                SANITY_WRITE_TOKEN
              </code>{" "}
              to <code className="font-mono text-[12px]">.env.local</code>, then restart the
              dev server.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map(({ href, label, Icon, blurb }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-xl border border-[#E5E5E5] bg-white p-5 transition-all hover:border-[#111] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3F4F6] transition-colors group-hover:bg-[#111]">
                <Icon
                  size={17}
                  strokeWidth={2}
                  className="text-[#374151] transition-colors group-hover:text-white"
                />
              </span>
              <ArrowRight
                size={15}
                className="text-[#D1D5DB] transition-all group-hover:translate-x-0.5 group-hover:text-[#111]"
              />
            </div>
            <h2 className="mt-3.5 text-[15px] font-semibold text-[#111]">{label}</h2>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#6B7280]">{blurb}</p>
          </Link>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-[15px] font-semibold text-[#111]">Page sections</h2>
        <p className="mt-1 text-[14px] text-[#6B7280]">
          Every page is built by stacking these. Add them in any order, leave out what you
          don&apos;t need — an empty section never renders.
        </p>
        <ol className="mt-4 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white">
          {SECTION_DEFINITIONS.map((d, i) => (
            <li
              key={d.type}
              className="flex gap-3.5 border-b border-[#F0F0F0] px-4 py-3 last:border-b-0"
            >
              <span className="mt-0.5 w-4 flex-none text-right font-mono text-[11.5px] text-[#C4C4C4]">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[13.5px] font-semibold text-[#111]">
                  {d.name}
                  {d.repeatable && (
                    <span className="ml-2 rounded bg-[#F3F4F6] px-1.5 py-0.5 align-middle text-[10.5px] font-medium text-[#6B7280]">
                      reusable
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-[12.5px] leading-[1.55] text-[#6B7280]">
                  {d.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
