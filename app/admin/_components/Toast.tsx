"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface ToastItem {
  id: number;
  message: string;
  type: "ok" | "error";
}

const ToastContext = createContext<(message: string, type?: "ok" | "error") => void>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const push = useCallback((message: string, type: "ok" | "error" = "ok") => {
    const id = Date.now() + Math.random();
    setItems((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 3800);
  }, []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="fixed right-5 top-5 z-[200] flex flex-col gap-2">
        {items.map((t) => (
          <div
            key={t.id}
            className={`rounded-lg px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-lg ${
              t.type === "error" ? "bg-[#DC2626]" : "bg-[#111]"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
