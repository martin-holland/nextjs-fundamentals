"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

/**
 * Shared shell for the theme pages. Every page calls useTheme() itself to read
 * the shared state and colour itself accordingly.
 */
export default function ThemedPage({ title, children, otherHref, otherLabel }) {
  const { theme, colors } = useTheme();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.background,
        color: colors.text,
        padding: "3rem 2rem",
        transition: "background 0.2s ease, color 0.2s ease",
      }}
    >
      <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
        <h1 style={{ color: colors.accent, marginBottom: "0.5rem" }}>{title}</h1>
        <p style={{ opacity: 0.8 }}>
          Current theme: <strong data-testid="current-theme">{theme}</strong>
        </p>

        <div style={{ margin: "1.5rem 0" }}>
          <ThemeToggle />
        </div>

        <div
          style={{
            border: `1px solid ${colors.border}`,
            borderRadius: "0.75rem",
            padding: "1.25rem",
          }}
        >
          {children}
        </div>

        <p style={{ marginTop: "2rem" }}>
          <Link href={otherHref} style={{ color: colors.accent }}>
            {otherLabel}
          </Link>
        </p>
      </div>
    </main>
  );
}
