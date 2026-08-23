"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin, Sparkles, Layers, Settings, LogOut, ExternalLink, Map } from "lucide-react";

const NAV = [
  {
    href: "/admin/cleaning-types",
    label: "Cleaning Types",
    hint: "/services/…",
    Icon: Sparkles,
  },
  { href: "/admin/areas", label: "Areas", hint: "/city", Icon: MapPin },
  {
    href: "/admin/area-services",
    label: "Area Services",
    hint: "/city/service",
    Icon: Layers,
  },
  {
    href: "/admin/neighborhoods",
    label: "Neighborhoods",
    hint: "sub-areas",
    Icon: Map,
  },
  { href: "/admin/settings", label: "Site Settings", hint: "Shared content", Icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <aside className="sticky top-0 flex h-screen w-[240px] flex-none flex-col border-r border-[#E5E5E5] bg-white px-4 py-6">
      <Link href="/admin" className="mb-8 flex items-center gap-2.5 px-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111]">
          <img src="/mint-logo-white.png" alt="" className="h-3 w-auto" />
        </span>
        <span className="text-[14px] font-semibold tracking-[-0.01em] text-[#111]">
          Mint Sanitary
        </span>
      </Link>

      <nav className="flex flex-col gap-0.5">
        {NAV.map(({ href, label, hint, Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors ${
                active ? "bg-[#111] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"
              }`}
            >
              <Icon
                size={16}
                strokeWidth={2}
                className={active ? "text-white" : "text-[#9CA3AF]"}
              />
              <span className="flex-1 text-[13.5px] font-medium">{label}</span>
              <span
                className={`font-mono text-[10.5px] ${
                  active ? "text-white/50" : "text-[#C4C4C4]"
                }`}
              >
                {hint}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />

      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="mb-1 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] font-medium text-[#374151] transition-colors hover:bg-[#F3F4F6]"
      >
        <ExternalLink size={16} strokeWidth={2} className="text-[#9CA3AF]" />
        View site
      </a>
      <button
        onClick={logout}
        className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] font-medium text-[#374151] transition-colors hover:bg-[#F3F4F6]"
      >
        <LogOut size={16} strokeWidth={2} className="text-[#9CA3AF]" />
        Sign out
      </button>
    </aside>
  );
}
