"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useLang() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  // light mode = Mongolian, dark mode = English
  const mn = mounted ? resolvedTheme !== "dark" : false;
  return { mn, mounted };
}
