"use client";

/** Shared fetch wrapper for every /admin page — mirrors the reference handoff's pattern. */
export async function api<T = unknown>(path: string, options?: RequestInit): Promise<T> {
  const opts: RequestInit = { credentials: "same-origin", ...options };
  if (opts.body && !(opts.body instanceof FormData)) {
    opts.headers = { "Content-Type": "application/json", ...(opts.headers as Record<string, string>) };
  }
  const res = await fetch(path, opts);
  if (res.status === 401) {
    window.location.href = "/admin/login";
    throw new Error("Not authenticated");
  }
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error((data && data.error) || "Request failed.");
  }
  return data as T;
}

export function newKey(): string {
  return Math.random().toString(36).slice(2, 10);
}
