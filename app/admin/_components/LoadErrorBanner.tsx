"use client";

import { AlertTriangle } from "lucide-react";

/** Persistent (non-dismissing) banner for a failed initial load — the CMS isn't connected yet, etc. */
export function LoadErrorBanner({ message }: { message: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4">
      <AlertTriangle size={18} className="mt-0.5 flex-none text-[#B45309]" />
      <p className="text-[13.5px] leading-[1.55] text-[#92400E]">{message}</p>
    </div>
  );
}
