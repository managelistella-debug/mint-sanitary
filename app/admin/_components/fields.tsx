"use client";

import { useRef, useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { api } from "../_lib/api";
import type { CmsImage } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-[13px] font-semibold text-[#374151]">{label}</label>
      {children}
      {hint && <p className="mt-1.5 text-[12px] text-[#9CA3AF]">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#D4D4D4] bg-white px-3.5 py-2.5 text-[14.5px] text-[#111] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#111] focus:ring-2 focus:ring-[#111]/10";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputClass} min-h-[90px] resize-y ${props.className ?? ""}`}
    />
  );
}

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5"
    >
      <span
        className={`relative h-[22px] w-[38px] flex-none rounded-full transition-colors ${
          checked ? "bg-[#111]" : "bg-[#D4D4D4]"
        }`}
      >
        <span
          className={`absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white transition-transform ${
            checked ? "translate-x-[19px]" : "translate-x-[3px]"
          }`}
        />
      </span>
      {label && <span className="text-[13.5px] font-medium text-[#374151]">{label}</span>}
    </button>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger" | "dark";
  size?: "md" | "sm";
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";
  const sizes = size === "sm" ? "px-3.5 py-1.5 text-[12.5px]" : "px-5 py-2.5 text-[14px]";
  const variants = {
    primary: "bg-[#111] text-white hover:bg-black",
    dark: "bg-[#111] text-white hover:bg-black",
    ghost: "border border-[#D4D4D4] bg-white text-[#374151] hover:bg-[#F3F4F6]",
    danger: "bg-[#FEF2F2] text-[#B91C1C] border border-[#FECACA] hover:bg-[#FEE2E2]",
  };
  return <button {...props} className={`${base} ${sizes} ${variants[variant]} ${className}`} />;
}

/** Single-image upload widget backed by /api/admin/upload. */
export function ImagePicker({
  value,
  onChange,
  onError,
}: {
  value: CmsImage | undefined;
  onChange: (image: CmsImage | undefined) => void;
  onError?: (message: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const previewUrl = imageUrl(value);

  async function handleFile(file: File) {
    setBusy(true);
    try {
      const res = await api<{ image: CmsImage }>("/api/admin/upload", {
        method: "POST",
        body: (() => {
          const form = new FormData();
          form.append("file", file);
          return form;
        })(),
      });
      onChange(res.image);
    } catch (err) {
      onError?.(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  }

  if (previewUrl) {
    return (
      <div className="relative inline-block">
        <img
          src={previewUrl}
          alt=""
          className="h-[120px] w-[180px] rounded-lg border border-[#E5E5E5] object-cover"
        />
        <button
          type="button"
          onClick={() => onChange(undefined)}
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#111] text-white"
        >
          <X size={13} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
        className="flex h-[100px] w-[180px] flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-[#D4D4D4] bg-[#FAFAFA] text-[#6B7280] transition-colors hover:border-[#111] hover:text-[#111]"
      >
        {busy ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
        <span className="text-[12px] font-medium">{busy ? "Uploading…" : "Upload image"}</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
