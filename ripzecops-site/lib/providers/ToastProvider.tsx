"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type Toast = { id: string; title: string; description?: string };

type ToastCtx = {
  showToast: (t: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastCtx | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (t: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();
    const toast: Toast = { id, ...t };
    setToasts((p) => [...p, toast]);
    setTimeout(() => {
      setToasts((p) => p.filter((x) => x.id !== id));
    }, 3500);
  };

  const value = useMemo(() => ({ showToast }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2 px-4">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto w-full max-w-md rounded-2xl border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur",
              "animate-[toast-in_180ms_ease-out]"
            )}
            role="status"
            aria-live="polite"
          >
            <div className="text-sm font-semibold text-ink-900">{t.title}</div>
            {t.description ? <div className="mt-1 text-sm text-ink-700">{t.description}</div> : null}
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes toast-in {
          from { transform: translateY(-8px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
