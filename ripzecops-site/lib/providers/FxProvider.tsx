"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type FxState = {
  fxEnabled: boolean;
  setFxEnabled: (v: boolean) => void;
};

const FxContext = createContext<FxState | null>(null);

const STORAGE_KEY = "ripzecops_fx_enabled";

export function FxProvider({ children }: { children: React.ReactNode }) {
  const [fxEnabled, setFxEnabled] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return;
      setFxEnabled(raw === "true");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(fxEnabled));
    } catch {}
  }, [fxEnabled]);

  const value = useMemo(() => ({ fxEnabled, setFxEnabled }), [fxEnabled]);
  return <FxContext.Provider value={value}>{children}</FxContext.Provider>;
}

export function useFx() {
  const ctx = useContext(FxContext);
  if (!ctx) throw new Error("useFx must be used within FxProvider");
  return ctx;
}
