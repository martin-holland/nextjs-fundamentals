"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "course-theme";
const DEFAULT_THEME = "dark";

/*
 * The theme lives in localStorage, which is an external store rather than
 * React state. useSyncExternalStore is the hook designed for exactly that: it
 * uses getServerSnapshot while rendering on the server and during hydration,
 * then switches to the real client value, so there is no hydration mismatch
 * and no setState inside an effect.
 */
const listeners = new Set();

function readTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : DEFAULT_THEME;
  } catch {
    // Storage can be unavailable (private mode).
    return DEFAULT_THEME;
  }
}

function writeTheme(next) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore write failures; the in-memory value still updates.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  // Keep other tabs in sync too.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

const getSnapshot = () => readTheme();
const getServerSnapshot = () => DEFAULT_THEME;

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    writeTheme(readTheme() === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
      colors:
        theme === "dark"
          ? { background: "#0b1120", text: "#e2e8f0", accent: "#7dd3fc", border: "#1e293b" }
          : { background: "#f8fafc", text: "#0f172a", accent: "#0369a1", border: "#cbd5e1" },
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/** Read the shared theme. Throws if used outside the provider. */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
}
