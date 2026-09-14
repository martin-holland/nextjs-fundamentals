"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{
        padding: "0.6rem 1.2rem",
        borderRadius: "999px",
        border: `1px solid ${colors.accent}`,
        background: "transparent",
        color: colors.accent,
        cursor: "pointer",
        font: "inherit",
      }}
    >
      Switch to {theme === "dark" ? "light" : "dark"} theme
    </button>
  );
}
