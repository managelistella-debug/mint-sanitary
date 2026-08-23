import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mint Sanitary — Admin",
  robots: { index: false, follow: false },
};

/**
 * Opaque white surface that sits above the site's global WebGL gradient and
 * overrides the inherited `body { color: white }`. Doing it here means the
 * public pages keep their layout untouched — no route-group restructure of
 * the 40+ existing pages.
 *
 * Auth is NOT enforced at this level: /admin/login lives underneath it and
 * would otherwise gate itself into a redirect loop. The guard lives in
 * (protected)/layout.tsx.
 */
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[100] overflow-auto bg-white text-[#111] [color-scheme:light]">
      {children}
    </div>
  );
}
