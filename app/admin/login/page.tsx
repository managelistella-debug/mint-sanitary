"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(data?.error ?? "Login failed.");
        setBusy(false);
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-full items-center justify-center bg-[#FAFAFA] px-5">
      <div className="w-full max-w-[380px]">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-[#111]">
            <img src="/mint-logo-white.png" alt="Mint Sanitary" className="h-4 w-auto" />
          </div>
          <h1 className="font-sans text-[20px] font-semibold tracking-[-0.01em] text-[#111]">
            Sign in
          </h1>
          <p className="mt-1.5 text-[14px] leading-[1.5] text-[#6B7280]">
            Enter your password to manage site content.
          </p>

          <form onSubmit={onSubmit} className="mt-6">
            <label
              htmlFor="password"
              className="mb-1.5 block text-[13px] font-medium text-[#374151]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoFocus
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#D4D4D4] bg-white px-3.5 py-2.5 text-[15px] text-[#111] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#111] focus:ring-2 focus:ring-[#111]/10"
              placeholder="••••••••••"
            />

            {error && (
              <p className="mt-3 rounded-lg bg-[#FEF2F2] px-3 py-2 text-[13px] font-medium text-[#B91C1C]">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy || !password}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#111] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#000] disabled:cursor-not-allowed disabled:bg-[#D4D4D4]"
            >
              {busy && (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-5 text-center text-[12.5px] text-[#9CA3AF]">
          Mint Sanitary content management
        </p>
      </div>
    </div>
  );
}
