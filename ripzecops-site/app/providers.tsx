"use client";

import React from "react";
import { FxProvider } from "@/lib/providers/FxProvider";
import { SmoothScrollProvider } from "@/lib/providers/SmoothScrollProvider";
import { ToastProvider } from "@/lib/providers/ToastProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FxProvider>
      <ToastProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </ToastProvider>
    </FxProvider>
  );
}
