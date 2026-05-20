"use client";

import { createContext, useContext, useEffect, useState } from "react";

type LangContextType = {
  isEN: boolean;
  toggle: () => void;
  mounted: boolean;
};

const LangContext = createContext<LangContextType>({
  isEN: false,
  toggle: () => {},
  mounted: false,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [isEN, setIsEN] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en") setIsEN(true);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isEN;
    setIsEN(next);
    localStorage.setItem("lang", next ? "en" : "mn");
  };

  return (
    <LangContext.Provider value={{ isEN, toggle, mounted }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  return useContext(LangContext);
}
