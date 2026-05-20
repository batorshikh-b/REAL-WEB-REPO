"use client";

import { useLangContext } from "@/contexts/lang-context";

export function useLang() {
  const { isEN, mounted } = useLangContext();
  return { mn: !isEN, mounted };
}
